# Wordmark

**Level:** Atom · **File:** `src/components/atoms/Wordmark.astro`

## What it is

The name “Kodamas” in Funnel Display, in aqua.

## When to use it

Header (links home) and the footer bar.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `variant` | `header` · `signoff` | `header` | header: Bold. signoff: Heavy with a small pink drop before it. |

## Variants

Two variants.

## Tokens used

`--color-aqua-glow`, `--font-display`, `--font-size-wordmark-s`, `--font-weight-bold`, `--font-weight-heavy`, `--gradient-drop`, `--letter-spacing-display`, `--line-height-none`, `--radius-drop`, `--size-drop-xs`, `--space-2`

## Example

```astro
<Wordmark variant="signoff" />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
