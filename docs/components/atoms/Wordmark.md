# Wordmark

**Level:** Atom · **File:** `src/components/atoms/Wordmark.astro`

## What it is

The word “Kodamas” set in Funnel Display Bold. It is the brand name used as a logo.

## When to use it

In the header (small, aqua), in the footer (large, white) and as the giant hero title (two-tone). Use it anywhere the brand name should look like the logo rather than normal text.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `size` | `s` · `l` · `xl` | `s` | How big it is: header, footer, hero. |
| `tone` | `aqua` · `white` · `two-tone` | `aqua` | Colour. `two-tone` makes “Ko” white and “damas” aqua (hero only). |
| `as` | `span` · `p` · `h1` | `span` | Which HTML element it renders as. Use `p` in the footer. |

## Variants

Three sizes × three tones. The hero uses `xl` + `two-tone`; the header uses `s` + `aqua`; the footer uses `l` + `white`.

## Tokens used

`--color-aqua-glow`, `--color-white`, `--font-display`, `--font-size-display-l`, `--font-size-display-xl`, `--font-size-wordmark-s`, `--font-weight-bold`, `--letter-spacing-display`, `--line-height-none`

## Example

```astro
<Wordmark size="l" tone="white" as="p" />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
