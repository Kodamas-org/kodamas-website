# Avatar

**Level:** Atom · **File:** `src/components/atoms/Avatar.astro`

## What it is

A portrait photo cropped to a shape.

## When to use it

Team members (drop shape, 240px; 200 on mobile) and testimonial authors (circle, 56px). Without a photo it shows a dashed placeholder: “Photo needed: Name” on team avatars, the person’s initials on small ones.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `src` | image path | — | The photo. Leave out to show the placeholder. |
| `alt` | text | — | The person’s name, for screen readers (required). |
| `shape` | `drop` · `circle` | `circle` | Crop shape. |
| `size` | `team` · `testimonial` | `testimonial` | Width; photos should be square. |
| `class` | text | — | Extra class. |

## Variants

2 shapes × 2 sizes.

## Tokens used

`--border-width-medium`, `--color-aqua-glow`, `--color-control-teal`, `--color-white`, `--font-size-small`, `--font-weight-semibold`, `--line-height-ui`, `--radius-drop`, `--radius-round`, `--size-avatar-team`, `--size-avatar-testimonial`, `--space-2`

## Example

```astro
<Avatar src="/photos/daniela.jpg" alt="Daniela Contessa" shape="drop" size="team" />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
