# OfferSection

**Level:** Organism · **File:** `src/components/organisms/OfferSection.astro`

## What it is

The offer: a pink card with eyebrow, title, price, duration, note, included items, a closing line and a booking button, followed by optional extra cards, all on the animated aqua background.

## When to use it

For presenting a product or package.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `eyebrow` | text | — | Small label above the title. |
| `title` | text | — | Offer name (an h2). |
| `price` | text | — | Shown in a Pill. |
| `duration` | text | — | Shown in bold. |
| `note` | text | — | Shown in italic. |
| `cta` | { label, href } | — | The inverse button. |
| (default slot) | FeatureCards | — | The included items. |
| slot "footer" | text | — | Closing line above the button. |
| slot "after" | GlassCard(s) | — | Cards shown under the offer card. |

## Variants

Desktop: items in two columns, price on the right of the title. Mobile: items stack, price moves above the eyebrow.

## Tokens used

`--color-focus-on-light`, `--color-surface-pink`, `--color-white`, `--layout-card-max`, `--layout-gutter`, `--layout-narrow-text`, `--radius-l`, `--shadow-glow`, `--space-10`, `--space-2`, `--space-3`, `--space-4`, `--space-5`, `--space-6`, `--space-7`, `--space-8`, `--space-9`

## Example

```astro
<OfferSection eyebrow="The Offer" title="The Founder Reset Sprint 🚀" price="€500" duration="1 week" note="Limited-offer launch pricing" cta={{ label: "Book a call", href: "…" }}>…</OfferSection>
```

## Notes

Uses: AnimatedBackdrop, Eyebrow, Heading, Pill, Text, Button, plus the FeatureCards and GlassCards you pass in.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
