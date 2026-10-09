# Drop

**Level:** Atom · **File:** `src/components/atoms/Drop.astro`

## What it is

The Kodamas drop: a shape with one square corner (top left) and three rounded corners. It is purely decorative.

## When to use it

Behind the hero “K”, on the corner of the statistic quote card, and next to each footer link. Screen readers skip it.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `size` | `s` · `m` · `l` | `m` | Small (footer links), medium (quote card), large (hero). |
| `tone` | `gradient` · `flat` | `gradient` | Pink gradient, or solid pink (footer). |
| `class` | text | — | Extra class so a parent can position it. |

## Variants

`gradient` fades from light to dark pink; `flat` is solid `bloom-pink`.

## Tokens used

`--color-bloom-pink`, `--gradient-drop`, `--radius-drop`, `--size-drop-l`, `--size-drop-m`, `--size-drop-s`

## Example

```astro
<Drop size="s" tone="flat" />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
