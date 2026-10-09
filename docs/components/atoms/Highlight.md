# Highlight

**Level:** Atom · **File:** `src/components/atoms/Highlight.astro`

## What it is

A bold phrase with a thick pink underline.

## When to use it

To stress the key words of a paragraph, like “outgrow their DIY phase”. At most once per paragraph.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| (content) | text | — | The words to highlight. |

## Variants

One style. The underline runs straight through descenders (g, p, y).

## Tokens used

`--color-highlight-pink`, `--font-weight-bold`, `--size-underline`, `--size-underline-offset`

## Example

```astro
When your app and team <Highlight>outgrow their DIY phase</Highlight>, we build…
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
