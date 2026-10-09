# TestimonialsSection

**Level:** Organism · **File:** `src/components/organisms/TestimonialsSection.astro`

## What it is

Client testimonials as a grid of equal cards on the animated aqua background. Has a heading (“What people say about us”) only screen readers hear.

## When to use it

Near the end of the homepage. Put Testimonial components inside.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| (content) | Testimonials | — | The quotes, in order. |

## Variants

Three columns on desktop; two plus one full-width on tablet; one column on phones.

## Tokens used

`--space-grid`, `--space-section`

## Example

```astro
<TestimonialsSection><Testimonial …>“…”</Testimonial></TestimonialsSection>
```

## Notes

Uses: AnimatedBackdrop.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
