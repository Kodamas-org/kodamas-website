# OfferSection

**Level:** Organism · **File:** `src/components/organisms/OfferSection.astro`

## What it is

The offer: a pink card with eyebrow, title, “duration · price” line, note, included items, closing line and the page’s main call to action, then optional extra cards, on the animated aqua background. Max width 720px.

## When to use it

For presenting a product or package.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `eyebrow` | text | — | Small label above the title. |
| `title` | text | — | Offer name (h2, Heading `l`). |
| `price` | text | — | Shown after the duration. |
| `duration` | text | — | Shown as “duration · price” in lead semibold. |
| `note` | text | — | Small italic line. |
| `cta` | { label, href } | — | The `l` inverse button. |
| (default slot) | FeatureCards | — | Included items. |
| slot "footer" | text | — | Closing line above the button. |
| slot "after" | GlassCard(s) | — | Cards under the offer card, 16px below. |

## Variants

Items in two columns; one column on phones.

## Tokens used

`--color-focus-on-light`, `--color-surface-pink`, `--color-white`, `--layout-gutter`, `--layout-narrow-max`, `--layout-text-max`, `--radius-l`, `--shadow-raised`, `--space-2`, `--space-4`, `--space-6`, `--space-card`, `--space-section`

## Example

```astro
<OfferSection eyebrow="The Offer" title="The Founder Reset Sprint 🚀" price="€500" duration="1 week" note="Limited-offer launch pricing" cta={{ label: "Book a call", href: "…" }}>…</OfferSection>
```

## Notes

Uses: AnimatedBackdrop, Eyebrow, Heading, Text, Button, plus the FeatureCards and GlassCards you pass in.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
