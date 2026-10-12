# Highlight

**Level:** Atom · **File:** `src/components/atoms/Highlight.astro`

## What it is

Emphasis for a key phrase inside a sentence (renders `<em>`).

## When to use it

One key phrase per block: the hero phrase, highlighted words in an intro, highlighted sentences in the manifesto.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `variant` | `accent` · `underline` · `pink` | `accent` | accent: aqua bold. underline: aqua bold with a thick pink underline (hero). pink: pink underline only, keeps the text colour. |

## Variants

Three variants.

## Tokens used

`--color-accent`, `--color-highlight-pink`, `--font-weight-bold`, `--size-highlight-offset`, `--size-highlight-thickness`

## Example

```astro
<Highlight variant="underline">outgrow their DIY phase</Highlight>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
