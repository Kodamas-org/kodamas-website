# TestimonialsSection

**Level:** Organism · **File:** `src/components/organisms/TestimonialsSection.astro`

## What it is

Client voices with a sticky aside (pink drop and 01 / 03 counter). The quote in the middle of the screen is in focus; the others step back.

## When to use it

Homepage.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `num` | text | — | Section number. |
| `title` | text | — | Visually hidden h2. |
| `count` | number | — | Number of quotes. |
| (content) | Testimonials | — | Each with `index={1…n}`. |

## Variants

On tablet and mobile the counter is a slim sticky bar.

## Tokens used

`--border-width-thin`, `--color-rule`, `--color-surface-page`, `--color-text-muted`, `--font-display`, `--font-size-heading-3`, `--font-weight-bold`, `--font-weight-light`, `--gradient-drop`, `--layout-col-gap`, `--layout-sticky-top`, `--opacity-dim`, `--radius-drop`, `--size-drop-m`, `--size-drop-s`, `--space-4`, `--space-5`, `--space-6`, `--space-9`, `--z-raised`

## Example

```astro
<TestimonialsSection num="03" title="What people say about us" count={3}>…</TestimonialsSection>
```

## Notes

Uses: Section, Testimonial.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
