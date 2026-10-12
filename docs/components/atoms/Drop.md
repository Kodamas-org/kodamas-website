# Drop

**Level:** Atom · **File:** `src/components/atoms/Drop.astro`

## What it is

The Kodamas drop: one square corner (top left), three rounded. Decorative, hidden from screen readers.

## When to use it

Markers, the name equation operators, anywhere the brand shape is used as a small element.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `size` | `xs` · `s` · `m` | `s` | 1rem, 1.25rem, 4.5rem (3.5rem on mobile). |
| `tone` | `pink` · `aqua` · `outline` | `pink` | Pink gradient, solid aqua, or aqua outline. |
| `symbol` | `+` · `=` | — | A white symbol drawn inside. |
| `class` | text | — | Global class for positioning. |

## Variants

Three tones, optional symbol.

## Tokens used

`--border-width-medium`, `--color-aqua-glow`, `--color-white`, `--gradient-drop`, `--radius-drop`, `--size-drop-m`, `--size-drop-s`, `--size-drop-xs`

## Example

```astro
<Drop size="m" symbol="+" />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
