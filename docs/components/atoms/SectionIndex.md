# SectionIndex

**Level:** Atom · **File:** `src/components/atoms/SectionIndex.astro`

## What it is

The editorial section number (01, 02…) with an optional uppercase label, on a hairline.

## When to use it

At the top of each section. Section renders it from its `num` and `label` props.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `num` | text | — | The number, e.g. `01`. |
| `label` | text | — | Optional label next to the number. |
| `rule` | true / false | true | Hairline above. Off for the section right after the hero and on the bright surface. |

## Variants

With or without the hairline. The number is pink on navy and pink-ink on aqua (it reads `--color-number`).

## Tokens used

`--border-width-thin`, `--color-number`, `--color-rule`, `--font-size-small`, `--font-weight-semibold`, `--letter-spacing-label`, `--space-4`, `--space-5`, `--space-8`

## Example

```astro
<SectionIndex num="01" label="The Offer" />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
