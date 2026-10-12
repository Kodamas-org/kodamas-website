# Eyebrow

**Level:** Atom · **File:** `src/components/atoms/Eyebrow.astro`

## What it is

A small uppercase semibold label that introduces a group.

## When to use it

“What’s Covered”, styleguide demo labels.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `as` | `p` · `h1` · `h2` · `h3` · `span` | `p` | Element (use a heading when it titles a group). |
| `id` | text | — | Optional id. |

## Variants

One.

## Tokens used

`--font-body`, `--font-size-small`, `--font-weight-semibold`, `--letter-spacing-label`

## Example

```astro
<Eyebrow as="h3">What’s Covered</Eyebrow>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
