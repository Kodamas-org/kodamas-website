#!/bin/sh
# Photographs one page of the site into a PNG with headless Chrome:
#   sh scripts/snapshot.sh <page> <width> <height> <output.png>
# Builds the site, serves it with astro preview, and takes the picture with
# motion off so wisps, letters and grain are still.
# Used by `npm run og-image` and `npm run logo-mark`.
# Needs Google Chrome (or set CHROME to its binary).
set -e
PAGE="$1"; WIDTH="$2"; HEIGHT="$3"; OUT="$4"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
PORT=4322
npx astro build >/dev/null
npx astro preview --background --port "$PORT" >/dev/null
trap 'npx astro preview stop >/dev/null' EXIT
until curl -s -o /dev/null "http://localhost:$PORT/$PAGE"; do sleep 0.5; done
"$CHROME" --headless --hide-scrollbars --force-prefers-reduced-motion \
	--force-device-scale-factor=1 --window-size="$WIDTH,$HEIGHT" \
	--virtual-time-budget=3000 --screenshot="$(pwd)/$OUT" \
	"http://localhost:$PORT/$PAGE" 2>/dev/null
echo "$OUT updated"
