# Stat

**Level:** Molecule · **File:** `src/components/molecules/Stat.astro`

## What it is

A big figure that counts up when scrolled into view, with a caption and a pink icon.

## When to use it

Evidence figures. The final number is in the HTML (correct without JavaScript and with reduced motion).

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `value` | number | — | Number to count to. |
| `decimals` | number | 0 | Digits after the point. |
| prefix / suffix | text | — | e.g. `<`, `%`. |
| `caption` | text | — | Caption. |
| `icon` | `trend` · `timer` · `bars` | — | Icon before the caption. |
| `accent` | true / false | false | Figure in aqua (lead figure only). |

## Variants

Accent or plain.

## Tokens used

`--color-accent`, `--color-number`, `--color-text-muted`, `--font-display`, `--font-size-body`, `--font-size-stat`, `--font-weight-heavy`, `--letter-spacing-tight`, `--line-height-none`, `--size-icon-l`, `--space-2`, `--space-3`

## Example

```astro
<Stat value={400} suffix="%" caption="ROI" icon="trend" accent />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
