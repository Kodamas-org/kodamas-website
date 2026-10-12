# Testimonial

**Level:** Molecule · **File:** `src/components/molecules/Testimonial.astro`

## What it is

A client quote set large in Funnel Display Light (key phrase in `<em>` turns aqua bold) with a byline: round photo, linked name and role.

## When to use it

In TestimonialsSection.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `name` | text | — | Author. |
| `href` | URL | — | Author link. |
| `role` | text | — | Author role. |
| `photo` | URL | — | Photo; placeholder without it. |
| `long` | true / false | false | Smaller size for long quotes. |
| `index` | number | — | Position in TestimonialsSection (for the focus effect). |

## Variants

Regular or long.

## Tokens used

`--color-accent`, `--color-text-muted`, `--color-text-on-dark`, `--duration-reveal`, `--ease-standard`, `--font-display`, `--font-size-quote`, `--font-size-quote-long`, `--font-size-small`, `--font-size-ui`, `--font-weight-bold`, `--font-weight-light`, `--font-weight-semibold`, `--letter-spacing-display`, `--line-height-lead`, `--line-height-snug`, `--size-underline-offset`, `--space-4`, `--space-6`

## Example

```astro
<Testimonial name="Geoff Hucker" href="#" role="…">“Daniela <em>sets clear priorities</em> …”</Testimonial>
```

## Notes

Uses atoms: Avatar.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
