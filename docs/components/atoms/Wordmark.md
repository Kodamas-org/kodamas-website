# Wordmark

**Level:** Atom · **File:** `src/components/atoms/Wordmark.astro`

## What it is

The word “Kodamas” set in Funnel Display Bold: the brand name used as a logo.

## When to use it

Header (small, aqua), footer (medium, white) and the hero title (extra large, two-tone). Its sizes are logo sizes and sit outside the type scale.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `size` | `s` · `m` · `xl` | `s` | `s` 22px header · `m` 40px footer · `xl` 72–200px hero. |
| `tone` | `aqua` · `white` · `two-tone` | `aqua` | `two-tone` makes “Ko” white and “damas” aqua (hero only). |
| `as` | `span` · `p` · `h1` | `span` | HTML element. Use `p` in the footer. |

## Variants

Hero `xl` + `two-tone`; header `s` + `aqua`; footer `m` + `white`.

## Tokens used

`--color-aqua-glow`, `--color-white`, `--font-display`, `--font-size-display`, `--font-size-logo-m`, `--font-size-logo-s`, `--font-weight-bold`, `--letter-spacing-display`, `--line-height-none`

## Example

```astro
<Wordmark size="m" tone="white" as="p" />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
