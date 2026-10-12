# Citation

**Level:** Molecule · **File:** `src/components/molecules/Citation.astro`

## What it is

A sourced quotation in small muted text with the source underneath.

## When to use it

Under figures, to give the full source sentence.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `source` | text | — | The source line. |
| (content) | text | — | The quotation. |

## Variants

One.

## Tokens used

`--color-text-muted`, `--font-size-small`, `--layout-text-max`, `--line-height-lead`, `--space-2`

## Example

```astro
<Citation source="(Forrester Consulting)">"…"</Citation>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
