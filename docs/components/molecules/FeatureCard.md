# FeatureCard

**Level:** Molecule · **File:** `src/components/molecules/FeatureCard.astro`

## What it is

An outlined card with a title and a short description.

## When to use it

For the items included in the offer, inside a grid. Set `wide` on one to make it span the row.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `title` | text | — | Card title (Heading `s`). |
| `level` | `3` · `4` | `3` | Heading level. |
| `wide` | true / false | false | Span every column of the grid. |
| (content) | text | — | The description. |

## Variants

Standard or wide. White border, so use it on pink or dark surfaces.

## Tokens used

`--border-width-medium`, `--color-white`, `--radius-s`, `--space-2`, `--space-card-s`

## Example

```astro
<FeatureCard title="Combined 90-day roadmap" wide>Both audits compared…</FeatureCard>
```

## Notes

Uses atoms: Heading, Text.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
