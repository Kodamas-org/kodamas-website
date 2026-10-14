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
| `src` | imported image · URL | — | The photo. Imported images are resized to WebP copies (srcset). Without it, the placeholder shows. |
| `focus` | object-position | `--position-portrait` | Which part of the photo stays in the crop (e.g. `80% 50%` for a subject on the right). |
| `alt` | text | name | Alt text when a photo is given. |
| `shape` | `round` · `drop` | `round` | Crop shape. |
| `size` | `s` · `l` | `s` | s: 3.5rem byline. l: fills its column up to the team width. |

## Variants

Placeholder shows initials (s) or “Photo needed: Name” (l).

Photos carry a rough film grain (`--texture-grain-photo`, overlay at `--opacity-grain-photo`) that moves like film (`--duration-grain`), like the image effect on the previous site; it is still for reduced motion.

## Tokens used

`--border-width-medium`, `--color-aqua-glow`, `--color-placeholder`, `--color-white`, `--duration-base`, `--ease-standard`, `--font-size-small`, `--font-weight-semibold`, `--layout-team-column`, `--duration-grain`, `--line-height-tight`, `--opacity-grain-photo`, `--position-portrait`, `--radius-drop`, `--radius-round`, `--size-avatar-s`, `--space-2`, `--texture-grain-photo`

## Example

```astro
<Avatar name="Emma Cebuliak" shape="drop" size="l" />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
