# ProofSection

**Level:** Organism · **File:** `src/components/organisms/ProofSection.astro`

## What it is

Evidence: a large statement question, a row of counting figures between hairlines, and the sourced quotation.

## When to use it

Homepage. Figures are hidden from screen readers because the quotation says the same in full.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `num` | text | — | Section number. |
| `stats` | list of Stat props | — | The figures. |
| `source` | text | — | Citation source. |
| `wisps` | boolean | false | A pair of kodama wisps (WispField) beside the title; on mobile they rise from the section number row. |
| slot "title" | text | — | The statement (`<em>` turns aqua). |
| (content) | text | — | The quotation. |

## Variants

Figures stack on mobile.

## Tokens used

`--border-width-thin`, `--color-accent`, `--color-rule`, `--font-display`, `--font-size-statement`, `--font-weight-bold`, `--font-weight-light`, `--layout-col-gap`, `--letter-spacing-display`, `--line-height-heading`, `--size-wisp`, `--space-4`, `--space-5`, `--space-6`, `--space-8`

## Example

```astro
<ProofSection num="02" stats={[…]} source="(Forrester Consulting)">…</ProofSection>
```

## Notes

Uses: Section, Stat, Citation.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
