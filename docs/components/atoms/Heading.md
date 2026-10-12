# Heading

**Level:** Atom · **File:** `src/components/atoms/Heading.astro`

## What it is

A title in Funnel Display.

## When to use it

Any heading. Choose `level` by page structure and `size` by design.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `level` | 1–4 | 2 | Heading level. |
| `size` | `statement` · `l` · `m` | `l` | Statement: large Light line where `<em>` turns aqua bold. l: section title, Bold. m: item title, Bold. |
| `tone` | `inherit` · `aqua` | `inherit` | Text colour. |
| `id` | text | — | For `aria-labelledby`. |
| `reveal` | true / false | false | Fades up when scrolled into view. |

## Variants

Three sizes, two tones.

## Tokens used

`--color-accent`, `--font-display`, `--font-size-heading-2`, `--font-size-heading-3`, `--font-size-statement`, `--font-weight-bold`, `--font-weight-light`, `--letter-spacing-body`, `--letter-spacing-display`, `--line-height-heading`, `--line-height-snug`

## Example

```astro
<Heading level={2} size="statement">Our <em>Manifesto</em></Heading>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
