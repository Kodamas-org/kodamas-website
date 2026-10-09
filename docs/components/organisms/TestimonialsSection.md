# TestimonialsSection

**Level:** Organism · **File:** `src/components/organisms/TestimonialsSection.astro`

## What it is

A stack of client testimonials on the animated aqua background.

## When to use it

Near the end of the homepage. Put Testimonial components inside. It has a heading (“What people say about us”) that only screen readers hear.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| (content) | Testimonials | — | The quotes, in order. |

## Variants

Cards stack with a small gap; more space between them on phones.

## Tokens used

`--layout-container-max`, `--layout-gutter`, `--space-11`, `--space-3`, `--space-7`, `--space-9`

## Example

```astro
<TestimonialsSection><Testimonial …>“…”</Testimonial></TestimonialsSection>
```

## Notes

Uses: AnimatedBackdrop.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
