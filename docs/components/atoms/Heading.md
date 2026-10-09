# Heading

**Level:** Atom · **File:** `src/components/atoms/Heading.astro`

## What it is

A title. Its level (h1–h6, which gives the page its outline for screen readers and search engines) is chosen separately from how big it looks.

## When to use it

For every title on the page. Pick `level` by structure (one h1 per page, then h2 for sections, h3 inside them) and `size` by design.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `level` | `1`–`6` | — | The heading level (required). |
| `size` | `display-l` · `heading-1` · `heading-2` · `heading-3` | `heading-1` | The look. The first three use Funnel Display; `heading-3` uses Inter Semibold. |
| `align` | `start` · `center` | `start` | Text alignment. |
| `id` | text | — | Lets a section point to its heading for screen readers. |
| `class` | text | — | Extra class. |

## Variants

`display-l` “Keep Going” · `heading-1` section titles · `heading-2` names · `heading-3` card titles.

## Tokens used

`--font-body`, `--font-display`, `--font-size-display-l`, `--font-size-heading-1`, `--font-size-heading-2`, `--font-size-heading-3`, `--font-weight-bold`, `--font-weight-semibold`, `--letter-spacing-display`, `--line-height-body`, `--line-height-heading`, `--line-height-snug`, `--line-height-tight`

## Example

```astro
<Heading level={2} size="display-l">Keep Going</Heading>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
