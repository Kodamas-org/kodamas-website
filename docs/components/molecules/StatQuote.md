# StatQuote

**Level:** Molecule · **File:** `src/components/molecules/StatQuote.astro`

## What it is

A quoted statistic in an outlined card, with a pink drop on its top-left corner and the source underneath.

## When to use it

To back a claim with a figure from a credible source.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `source` | text | — | Shown under the quote. |
| (content) | text | — | The quote, in bold lead size. |

## Variants

One style.

## Tokens used

`--border-width-medium`, `--color-glass-edge`, `--font-size-body`, `--font-size-lead`, `--font-weight-bold`, `--font-weight-regular`, `--line-height-lead`, `--radius-m`, `--size-drop-m`, `--space-3`, `--space-4`, `--space-card`, `--z-raised`

## Example

```astro
<StatQuote source="(Forrester Consulting)">"Fixing usability issues…"</StatQuote>
```

## Notes

Uses atoms: Drop.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
