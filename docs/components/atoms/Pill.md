# Pill

**Level:** Atom · **File:** `src/components/atoms/Pill.astro`

## What it is

A small outlined capsule for a short label, such as a price.

## When to use it

For “€500” on the offer card. It takes its colour from the surface it sits on, so it works on any background.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| (content) | text | — | The label inside the pill. |

## Variants

One style. Border and text use the surrounding text colour.

## Tokens used

`--border-width-medium`, `--font-size-body-m`, `--font-weight-bold`, `--line-height-ui`, `--radius-pill`, `--space-3`, `--space-5`

## Example

```astro
<Pill>€500</Pill>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
