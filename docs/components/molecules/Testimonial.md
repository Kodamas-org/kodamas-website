# Testimonial

**Level:** Molecule · **File:** `src/components/molecules/Testimonial.astro`

## What it is

A client quote card: a small white drop as the quote mark, the quote in body text, then a row with a 56px round photo, the author’s name (link) and role.

## When to use it

Inside TestimonialsSection. Cards in a row stretch to the same height so the author rows line up.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `name` | text | — | Author name (linked, 16px semibold). |
| `href` | URL | — | Where the name links to. |
| `role` | text | — | Role and company (14px). |
| `photo` | image path | — | Leave out for an initials placeholder. |
| (content) | text | — | The quote, with its “curly” quotation marks. |

## Variants

One style. Replaces the old wide card with a large overlapping photo and faux-italic quote.

## Tokens used

`--color-focus-on-light`, `--color-surface-pink`, `--color-white`, `--font-size-body`, `--font-size-small`, `--font-size-ui`, `--font-weight-semibold`, `--line-height-body`, `--line-height-ui`, `--radius-m`, `--shadow-card`, `--space-1`, `--space-4`, `--space-5`, `--space-card`

## Example

```astro
<Testimonial name="Geoff Hucker" href="…" role="Work for Impact CEO &amp; Founder">“Daniela sets clear priorities…”</Testimonial>
```

## Notes

Uses atoms: Drop (white), Avatar (circle), Link (white).

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
