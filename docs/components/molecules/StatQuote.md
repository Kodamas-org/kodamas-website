# StatQuote

**Level:** Molecule · **File:** `src/components/molecules/StatQuote.astro`

## What it is

A quoted statistic in an outlined card, with a pink drop on its top-left corner and the source underneath.

## When to use it

To back up a claim with a figure from a credible source (the Forrester quote).

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `source` | text | — | Who said it, shown under the quote. |
| (content) | text | — | The quote, shown in bold. |

## Variants

One style.

## Tokens used

`--border-width-medium`, `--color-glass-edge`, `--font-size-body-l`, `--font-weight-bold`, `--font-weight-regular`, `--line-height-relaxed`, `--radius-m`, `--size-drop-m`, `--space-10`, `--space-5`, `--space-7`, `--space-8`, `--space-9`, `--z-raised`

## Example

```astro
<StatQuote source="(Forrester Consulting)">"Fixing usability issues…"</StatQuote>
```

## Notes

Uses atoms: Drop.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
