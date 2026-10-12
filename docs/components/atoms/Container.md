# Container

**Level:** Atom · **File:** `src/components/atoms/Container.astro`

## What it is

Centres content on the 12-column grid: 1280px wide at most, plus the fluid side gutters.

## When to use it

Inside every section. Section and the hero organisms use it for you.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `as` | `div` · `header` · `footer` · `nav` | `div` | The element to render. |
| `class` | text | — | A global class (scoped parent styles do not reach it). |

## Variants

One.

## Tokens used

`--layout-gutter`, `--layout-max`

## Example

```astro
<Container>…</Container>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
