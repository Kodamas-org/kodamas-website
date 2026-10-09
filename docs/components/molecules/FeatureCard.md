# FeatureCard

**Level:** Molecule · **File:** `src/components/molecules/FeatureCard.astro`

## What it is

An outlined card with a title and a short description.

## When to use it

For the items included in the offer. Place several inside a grid; set `wide` on one to make it span the full row.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `title` | text | — | Card title. |
| `level` | `3` · `4` | `3` | Heading level of the title. |
| `wide` | true / false | false | Span every column of the grid. |
| (content) | text | — | The description. |

## Variants

Standard (one column) or wide (full row). Border is white, so use it on pink or dark surfaces.

## Tokens used

`--border-width-medium`, `--color-white`, `--radius-s`, `--space-3`, `--space-5`

## Example

```astro
<FeatureCard title="Combined 90-day roadmap" wide>Both audits compared…</FeatureCard>
```

## Notes

Uses atoms: Heading (`heading-3`), Text.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
