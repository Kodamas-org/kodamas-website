# Heading

**Level:** Atom · **File:** `src/components/atoms/Heading.astro`

## What it is

A title in Funnel Display Bold. Its level (h1–h6, the page outline for screen readers and search engines) is chosen separately from its size.

## When to use it

Every title. Pick `level` by structure (one h1 per page, h2 for sections, h3 inside them) and `size` by importance.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `level` | `1`–`6` | — | Heading level (required). |
| `size` | `l` · `m` · `s` | `l` | `l` section titles 32–40px · `m` names 20–24px · `s` card titles 18–20px. |
| `align` | `start` · `center` | `start` | Alignment. |
| `id` | text | — | Lets a section point to its heading. |
| `class` | text | — | Extra class. |

## Variants

All section titles use `l`, so no section shouts louder than another.

## Tokens used

`--font-display`, `--font-size-h2`, `--font-size-h3`, `--font-size-lead`, `--font-weight-bold`, `--line-height-heading`, `--line-height-snug`

## Example

```astro
<Heading level={2} size="l">Keep Going</Heading>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
