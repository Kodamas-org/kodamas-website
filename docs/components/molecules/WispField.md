# WispField

**Level:** Molecule · **File:** `src/components/molecules/WispField.astro`

## What it is

Kodama wisps, the spirit lights from the forest that inspired the palette: small flames with a crisp white core glowing in the brand aqua (`--color-aqua-glow`, the colour of the buttons and the wordmark), a soft aqua halo, and a few twinkling sparks around them. Each flame changes shape as it flickers, with a second thinner tongue of light out of phase, and drifts slowly upwards. Decorative (`aria-hidden`).

## When to use it

A few times per page, in empty space, as a quiet touch of magic: never over text. It fills its container, so the parent positions and sizes it. In use: Blogfolio intro (group; on mobile it moves beside the first case photo, smaller via `--size-wisp: var(--size-wisp-s)` on the wrapper), homepage “Why is streamlining…” (pair, via `ProofSection wisps`), Our Story beside “the spirit of the tree” (pair, via `NameHero wisps`).

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `size` | `group` · `pair` | `group` | Three wisps and seven sparks, or two wisps and three sparks. |

## Variants

Motion, in order:

1. **Fade in**: on page load (or, further down the page, when scrolled into view) the wisps appear slowly (`--duration-wisp-fade`), one after another, then the sparks.
2. **Life**: flicker (`--duration-flicker`), halo pulse and slow drift (`--duration-wisp-drift`). Paused while off screen.
3. **Rise away**: once the field has travelled 40% of the viewport with the page, further scrolling makes it rise faster than the page and fade out over half a viewport. Fields near the top of the page start rising on the first scroll.

With reduced motion none of this runs: the wisps stay visible and still. Without JavaScript they are visible and flicker, without fade in or rise away.

## Tokens used

`--color-aqua-glow`, `--color-white`, `--duration-flicker`, `--duration-wisp-drift`, `--duration-wisp-fade`, `--ease-drift`, `--radius-round`, `--size-spark`, `--size-wisp`, `--size-wisp-blur`

## Example

```astro
<div class="intro__wisps"><WispField /></div>
<ProofSection … wisps>…</ProofSection>
```

## Notes

The positions and scales of wisps and sparks are the field’s fixed geometry (an allowed exception, like DropCluster). Flames use `mix-blend-mode: screen` so they glow on navy. An inline script marks `<html>` with `js-wisps` during parsing, so the wisps are hidden from the first paint and fade in rather than flashing.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
