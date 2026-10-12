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
| `src` | URL | — | The photo. Without it, the placeholder shows. |
| `alt` | text | name | Alt text when a photo is given. |
| `shape` | `round` · `drop` | `round` | Crop shape. |
| `size` | `s` · `l` | `s` | s: 3.5rem byline. l: fills its column up to the team width. |

## Variants

Placeholder shows initials (s) or “Photo needed: Name” (l).

## Tokens used

`--border-width-medium`, `--color-aqua-glow`, `--color-placeholder`, `--color-white`, `--duration-base`, `--ease-standard`, `--font-size-small`, `--font-weight-semibold`, `--layout-team-column`, `--line-height-tight`, `--radius-drop`, `--radius-round`, `--size-avatar-s`, `--space-2`

## Example

```astro
<Avatar name="Emma Cebuliak" shape="drop" size="l" />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
