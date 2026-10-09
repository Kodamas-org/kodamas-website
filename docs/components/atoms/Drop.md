# Drop

**Level:** Atom · **File:** `src/components/atoms/Drop.astro`

## What it is

The Kodamas drop: one square corner (top left) and three rounded corners. Decorative; screen readers skip it.

## When to use it

Behind the hero K, on the statistic quote card, next to footer links, and as the quote mark on testimonial cards.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `size` | `s` · `m` · `l` | `m` | `s` 20px · `m` 72px (56 mobile) · `l` 124px (80 tablet, 56 mobile). |
| `tone` | `gradient` · `flat` · `white` | `gradient` | Pink gradient, solid pink, or white (for use on pink cards). |
| `class` | text | — | Extra class so a parent can position it. |

## Variants

Three sizes × three tones.

## Tokens used

`--color-bloom-pink`, `--color-white`, `--gradient-drop`, `--radius-drop`, `--size-drop-l`, `--size-drop-m`, `--size-drop-s`

## Example

```astro
<Drop size="s" tone="white" />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
