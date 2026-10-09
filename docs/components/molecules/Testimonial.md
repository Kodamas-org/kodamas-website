# Testimonial

**Level:** Molecule · **File:** `src/components/molecules/Testimonial.astro`

## What it is

A client quote in a pink card, with a round photo overlapping the card’s left edge, the author’s name as a link, and their role.

## When to use it

In TestimonialsSection. Use `quoteSize="s"` for long quotes (more than about 30 words) so the card stays compact.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `name` | text | — | Author name (linked). |
| `href` | URL | — | Where the name links to (e.g. their LinkedIn). |
| `role` | text | — | Author role and company. |
| `photo` | image path | — | Leave out to show a placeholder. |
| `quoteSize` | `l` · `s` | `l` | Quote size. |
| (content) | text | — | The quote, including the “curly” quotation marks. |

## Variants

Desktop: photo on the left overlapping the card. Mobile: photo on top, overlapping the card’s top edge. The quote uses Funnel Display with a slanted (synthesised) italic, as agreed.

## Tokens used

`--color-focus-on-light`, `--color-surface-pink`, `--color-white`, `--font-display`, `--font-size-body-m`, `--font-size-heading-2`, `--font-size-quote-s`, `--font-weight-bold`, `--indent-testimonial-text`, `--line-height-heading`, `--line-height-snug`, `--overlap-testimonial-card`, `--radius-l`, `--shadow-card`, `--size-avatar-testimonial`, `--space-10`, `--space-3`, `--space-5`, `--space-6`, `--space-7`, `--z-raised`

## Example

```astro
<Testimonial name="Geoff Hucker" href="…" role="Work for Impact CEO &amp; Founder">“Daniela sets clear priorities…”</Testimonial>
```

## Notes

Uses atoms: Avatar (circle), Link (white).

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
