# OfferSection

**Level:** Organism · **File:** `src/components/organisms/OfferSection.astro`

## What it is

The offer, on the bright surface: sticky aside with title, price and button; numbered items, covered tags and a closing statement on the right.

## When to use it

The homepage’s one bright moment.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `id` | text | `offer` | Section id (anchor). |
| num / label | text | — | Section index. |
| `title` | text | — | h2. |
| `price` | { amount, duration, note } | — | Price. |
| `cta` | { label, href } | — | Navy button. |
| `items` | list of { title, text } | — | Numbered items. |
| `coveredLabel` | text | — | Tags title. |
| `covered` | list of text | — | Tags. |
| slot "statement" | text | — | Closing line (`<strong>` for the conclusion). |

## Variants

Aside stops being sticky below 1024px.

## Tokens used

`--border-width-medium`, `--font-display`, `--font-size-heading-3`, `--font-weight-bold`, `--font-weight-light`, `--layout-col-gap`, `--layout-sticky-top`, `--line-height-snug`, `--space-2`, `--space-4`, `--space-6`, `--space-9`

## Example

```astro
<OfferSection num="01" label="The Offer" …>…</OfferSection>
```

## Notes

Uses: Section, Heading, Price, Button, NumberedItem, Eyebrow, Tag.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
