# Avatar

**Level:** Atom · **File:** `src/components/atoms/Avatar.astro`

## What it is

A portrait photo cropped to a shape.

## When to use it

Team members (drop shape, large) and testimonial authors (circle, smaller). Until a real photo is provided it shows a dashed placeholder that says which photo is needed.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `src` | image path | — | The photo. Leave it out to show the placeholder. |
| `alt` | text | — | Describes the person, for screen readers (required). |
| `shape` | `drop` · `circle` | `circle` | Crop shape. |
| `size` | `team` · `testimonial` | `testimonial` | Width; the photo is always square before cropping. |
| `class` | text | — | Extra class. |

## Variants

Shrinks on tablet and mobile through the size tokens.

## Tokens used

`--border-width-medium`, `--color-aqua-glow`, `--color-control-teal`, `--color-white`, `--font-size-body-s`, `--line-height-ui`, `--radius-drop`, `--radius-round`, `--size-avatar-team`, `--size-avatar-testimonial`, `--space-5`

## Example

```astro
<Avatar src="/photos/daniela.jpg" alt="Daniela Contessa" shape="drop" size="team" />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
