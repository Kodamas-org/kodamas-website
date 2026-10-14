# DropLabel

**Level:** Molecule · **File:** `src/components/molecules/DropLabel.astro`

## What it is

A small pink uppercase label led by a small pink drop.

## When to use it

To introduce a page (PageIntro: “Welcome to our Blogfolio”) or an entry (CaseStudy: “Case_1”).

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `as` | `p` · `span` · `div` | `p` | Element. |
| `class` | text | — | Extra class. |
| (content) | text | — | The label. |

## Variants

One.

## Tokens used

`--space-3`

## Example

```astro
<DropLabel>Case_1</DropLabel>
```

## Notes

Uses: Drop, Eyebrow (`tone="pink"`).

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
