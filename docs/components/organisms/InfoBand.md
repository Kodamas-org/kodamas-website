# InfoBand

**Level:** Organism · **File:** `src/components/organisms/InfoBand.astro`

## What it is

A full-width teal strip with one centred line of text.

## When to use it

For a short standalone statement between sections (“Based in Italy and Japan, working globally 🌏.”).

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| (content) | text | — | The line of text. |

## Variants

One style.

## Tokens used

`--color-surface-band`, `--color-text-on-dark`, `--layout-gutter`, `--space-4`

## Example

```astro
<InfoBand>Based in Italy and Japan, working globally 🌏.</InfoBand>
```

## Notes

Uses: Text (`xl`).

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
