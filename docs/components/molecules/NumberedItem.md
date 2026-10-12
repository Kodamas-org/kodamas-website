# NumberedItem

**Level:** Molecule · **File:** `src/components/molecules/NumberedItem.astro`

## What it is

A numbered list item: big number, title and short text between hairlines. Renders an `<li>`.

## When to use it

Lists of deliverables (the offer). Place in `<ol role="list">`.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `num` | number | — | Shown as 01, 02… |
| `title` | text | — | Item title. |
| `level` | 3 · 4 | 3 | Title heading level. |
| (content) | text | — | The short text. |

## Variants

Number is pink-ink on aqua, pink on navy.

## Tokens used

`--border-width-thin`, `--color-number`, `--color-rule`, `--font-display`, `--font-size-heading-3`, `--font-weight-bold`, `--line-height-snug`, `--space-2`, `--space-4`, `--space-6`, `--space-9`

## Example

```astro
<NumberedItem num={1} title="Marketing & Sales audit">Find where your revenue is leaking, KPI by KPI.</NumberedItem>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
