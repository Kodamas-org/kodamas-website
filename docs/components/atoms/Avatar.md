# Avatar

**Level:** Atom · **File:** `src/components/atoms/Avatar.astro`

## What it is

A portrait: the photo cropped to a shape, or a dashed placeholder saying a photo is needed.

## When to use it

Testimonial bylines, team cards, profiles. Missing photos use the placeholder automatically (leave `src` out).

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `name` | text | — | Used for the alt text, initials and placeholder label. |
| `src` | imported image · URL | — | The photo. Imported images become a `<picture>`: AVIF with a WebP fallback, at 112–224px (s) or 400–1280px (l), quality 70; the original file is never sent. Without it, the placeholder shows. |
| `sizes` | sizes attribute | s: `3.5rem`; l: `(max-width: 48rem) 80vw, 32rem` | How wide the photo shows, so the browser downloads the right file. Parents pass their column. |
| `priority` | true / false | false | For a photo visible on load: loads first (`eager`, `fetchpriority=high`) instead of lazily. |
| `fill` | true / false | false | Fill the column without the team-width cap (`l`; Profile and CaseStudy). |
| `focus` | object-position | `--position-portrait` | Which part of the photo stays in the crop (e.g. `80% 50%` for a subject on the right). |
| `alt` | text | name | Alt text when a photo is given. |
| `shape` | `round` · `drop` | `round` | Crop shape. |
| `size` | `s` · `m` · `l` | `s` | s: 3.5rem byline. m: 6rem author block. l: fills its column up to the team width. |

## Variants

Placeholder shows initials (s, m) or “Photo needed: Name” (l).

Photos carry a rough film grain (`--texture-grain-photo`, overlay at `--opacity-grain-photo`) that moves like film (`--duration-grain`), like the image effect on the previous site; it is still for reduced motion. The `grain-shift` keyframes live in `global.css`.

## Tokens used

`--border-width-medium`, `--color-aqua-glow`, `--color-placeholder`, `--color-white`, `--duration-base`, `--ease-standard`, `--font-size-small`, `--font-weight-semibold`, `--layout-team-column`, `--duration-grain`, `--line-height-tight`, `--opacity-grain-photo`, `--position-portrait`, `--radius-drop`, `--radius-round`, `--size-avatar-m`, `--size-avatar-s`, `--space-2`, `--texture-grain-photo`

## Example

```astro
<Avatar name="Emma Cebuliak" shape="drop" size="l" />
```

## Notes

A card that should turn its drop photo round on hover sets `data-avatar-morph` on itself (rule in `global.css`): Profile, CaseStudy and PersonCard do.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
