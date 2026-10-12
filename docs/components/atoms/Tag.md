# Tag

**Level:** Atom · **File:** `src/components/atoms/Tag.astro`

## What it is

An outlined capsule for a short topic label. Renders an `<li>`.

## When to use it

Lists of topics (“What’s Covered”). Place inside `<ul role="list">`.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| (content) | text | — | The label. |

## Variants

Outline follows the text colour.

## Tokens used

`--border-width-thin`, `--font-size-small`, `--font-weight-semibold`, `--radius-pill`, `--space-2`, `--space-4`

## Example

```astro
<ul role="list"><Tag>Funnel</Tag></ul>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
