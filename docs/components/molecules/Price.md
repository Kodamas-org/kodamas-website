# Price

**Level:** Molecule · **File:** `src/components/molecules/Price.astro`

## What it is

A price between two hairlines: the amount large, duration in bold and a note in italic beside it.

## When to use it

In an offer.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `amount` | text | — | e.g. `€500`. |
| `duration` | text | — | Bold line. |
| `note` | text | — | Italic line, optional. |

## Variants

One.

## Tokens used

`--border-width-thin`, `--color-rule`, `--font-display`, `--font-size-heading-2`, `--font-size-small`, `--font-weight-heavy`, `--letter-spacing-display`, `--line-height-lead`, `--line-height-none`, `--space-4`, `--space-5`

## Example

```astro
<Price amount="€500" duration="1 week" note="Limited-offer launch pricing" />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
