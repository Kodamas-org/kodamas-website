#!/bin/sh
# Photographs /og-image into public/og-image.png (1200 × 630): builds the
# site, serves it with astro preview, and takes the picture with headless
# Chrome, motion off so the wisps and letters are still.
# Needs Google Chrome (or set CHROME to its binary).
set -e
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
PORT=4322
npx astro build >/dev/null
npx astro preview --background --port "$PORT" >/dev/null
trap 'npx astro preview stop >/dev/null' EXIT
until curl -s -o /dev/null "http://localhost:$PORT/og-image"; do sleep 0.5; done
"$CHROME" --headless --hide-scrollbars --force-prefers-reduced-motion \
	--force-device-scale-factor=1 --window-size=1200,630 \
	--virtual-time-budget=3000 --screenshot="$(pwd)/public/og-image.png" \
	"http://localhost:$PORT/og-image" 2>/dev/null
echo "public/og-image.png updated"
