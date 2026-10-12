# Marquee

**Level:** Molecule · **File:** `src/components/molecules/Marquee.astro`

## What it is

Kinetic type: two words in huge Heavy type (first outlined, second filled aqua) with a pink drop, scrolling sideways forever. Decorative.

## When to use it

Closing sections. Always pair with a PauseButton and a visually hidden heading.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `id` | id | — | Target for PauseButton. |
| `outline` | text | — | Outlined word. |
| `fill` | text | — | Filled word. |

## Variants

Paused when it has `data-paused`.

## Tokens used

`--border-width-medium`, `--color-aqua-glow`, `--color-white`, `--duration-marquee`, `--font-display`, `--font-size-marquee`, `--font-weight-heavy`, `--gradient-drop`, `--letter-spacing-tight`, `--line-height-none`, `--radius-drop`, `--space-4`, `--space-6`

## Example

```astro
<Marquee id="closing-marquee" outline="Keep" fill="Going" />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
