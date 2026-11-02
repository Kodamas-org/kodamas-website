"""Kodama wisps loop: a seamless animated GIF (and WebP) of the site's wisps.

Every motion is a sine with a whole number of cycles per loop, so the last
frame flows into the first. Colours are the brand tokens (tokens.css):
midnight navy, aqua glow, white. For use outside the site (form thank-you
page, social); writes brand/kodamas-wisps.gif and .webp.
Needs Pillow and numpy, e.g. in a throwaway virtual environment:
  python3 -m venv /tmp/wisps && /tmp/wisps/bin/pip install pillow numpy
  /tmp/wisps/bin/python scripts/wisps-loop.py brand
"""
import math
import sys

import numpy as np
from PIL import Image

W, H = 480, 270
FPS = 12
SECONDS = 6
FRAMES = FPS * SECONDS

NAVY = np.array([0x1A, 0x22, 0x31]) / 255
AQUA = np.array([0x5C, 0xEF, 0xEC]) / 255
WHITE = np.array([1.0, 1.0, 1.0])

# x, y (fraction of frame), radius px, drift amplitude px, phase
WISPS = [
    (0.30, 0.58, 23, 17, 0.0),
    (0.66, 0.40, 15, 14, 2.1),
    (0.48, 0.24, 9, 9, 4.0),
    (0.82, 0.70, 11, 11, 1.2),
    (0.14, 0.30, 7, 8, 3.3),
]
SPARKS = [
    (0.08, 0.62), (0.22, 0.14), (0.40, 0.80), (0.55, 0.52), (0.60, 0.10),
    (0.74, 0.22), (0.90, 0.36), (0.93, 0.86), (0.28, 0.40), (0.70, 0.90),
]

yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)


def smooth(e0, e1, x):
    t = np.clip((x - e0) / (e1 - e0), 0, 1)
    return t * t * (3 - 2 * t)


def screen(base, colour, alpha):
    """Screen blend a colour with per-pixel alpha onto base."""
    layer = colour[None, None, :] * alpha[..., None]
    return 1 - (1 - base) * (1 - layer)


def frame(i):
    p = i / FRAMES  # 0..1 through the loop
    tau = 2 * math.pi
    img = np.broadcast_to(NAVY, (H, W, 3)).astype(np.float32).copy()

    for k, (fx, fy, r, amp, ph) in enumerate(WISPS):
        # Drift: a slow loop up and sideways (1 cycle), plus a small wobble (2)
        cx = fx * W + amp * 0.8 * math.sin(tau * p + ph) + amp * 0.2 * math.sin(tau * 2 * p + ph * 1.7)
        cy = fy * H - amp * math.sin(tau * p + ph + 1.1) * 0.9 + amp * 0.15 * math.cos(tau * 3 * p + ph)
        # Flicker: size and brightness breathe (3 and 4 cycles)
        rr = r * (1 + 0.05 * math.sin(tau * 3 * p + ph))
        glow = 0.88 + 0.12 * math.sin(tau * 4 * p + ph * 2)
        halo_k = 0.8 + 0.2 * math.sin(tau * 2 * p + ph)

        d = np.hypot(xx - cx, yy - cy)

        # Halo: soft aqua, 2.4x the orb
        hr = rr * 2.6
        q = d / hr
        halo = np.where(q < 0.55, 0.35 + (0.10 - 0.35) * (q / 0.55), 0.10 * (1 - smooth(0.55, 1.0, q)))
        halo = np.clip(halo, 0, 1) * halo_k
        img = screen(img, AQUA, halo)

        # Orb: aqua body fading out at the edge, white core
        q = d / rr
        body = (1 - smooth(0.72, 1.05, q)) * glow
        img = screen(img, AQUA, body)
        core = (1 - smooth(0.25, 0.5, q)) * glow
        img = screen(img, WHITE, core)

    for k, (fx, fy) in enumerate(SPARKS):
        # Twinkle: off for a while, then up (2 or 3 cycles per loop)
        cycles = 2 + (k % 2)
        s = math.sin(tau * cycles * p + k * 1.9)
        a = max(0.0, s) ** 2
        if a < 0.01:
            continue
        cx, cy = fx * W, fy * H
        d = np.hypot(xx - cx, yy - cy)
        img = screen(img, AQUA, a * 0.5 * (1 - smooth(0, 7, d)))
        img = screen(img, WHITE, a * (1 - smooth(0.8, 2.2, d)))

    return Image.fromarray((np.clip(img, 0, 1) * 255).astype(np.uint8))


def palette_image():
    """One fixed palette for every frame (no flicker between frames):
    ramps navy to aqua, aqua to white and navy to white."""
    cols = []
    for t in np.linspace(0, 1, 72) ** 1.8:
        cols.append(NAVY + (1 - (1 - NAVY) * (1 - AQUA * t) - NAVY))
    for t in np.linspace(0, 1, 24):
        cols.append(AQUA + (WHITE - AQUA) * t)
    for t in np.linspace(0, 1, 16):
        cols.append(NAVY + (WHITE - NAVY) * t)
    flat = [int(round(c * 255)) for col in cols for c in col]
    pal = Image.new('P', (1, 1))
    pal.putpalette(flat)
    return pal


def main(out):
    frames = [frame(i) for i in range(FRAMES)]
    pal = palette_image()
    gif = [f.quantize(palette=pal, dither=Image.Dither.NONE) for f in frames]
    ms = round(1000 / FPS)
    gif[0].save(f'{out}/kodamas-wisps.gif', save_all=True, append_images=gif[1:],
                duration=ms, loop=0, optimize=True, disposal=1)
    frames[0].save(f'{out}/kodamas-wisps.webp', save_all=True, append_images=frames[1:],
                   duration=ms, loop=0, quality=80, method=6)


if __name__ == '__main__':
    main(sys.argv[1])
