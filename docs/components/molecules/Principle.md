# Principle

**Level:** Molecule · **File:** `src/components/molecules/Principle.astro`

## What it is

One manifesto principle: a pink drop and the principle as an aqua heading, then two columns. A first paragraph in the right column reads as a pull statement; list bullets are small drops.

## When to use it

Our Manifesto.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `level` | 3 · 4 | 3 | Title heading level. |
| slot "title" | text | — | The principle. |
| slot "left" | content | — | Left column. |
| slot "right" | content | — | Right column (first `<p>` becomes the pull statement; use `<Highlight variant="pink">`). |

## Variants

One. Columns stack below 1024px.

## Tokens used

`--border-width-thin`, `--color-accent`, `--color-rule`, `--font-display`, `--font-size-heading-3`, `--font-size-intro`, `--font-weight-bold`, `--font-weight-light`, `--gradient-drop`, `--layout-col-gap`, `--layout-text-max`, `--letter-spacing-display`, `--line-height-snug`, `--radius-drop`, `--size-icon-s`, `--space-2`, `--space-3`, `--space-4`, `--space-5`, `--space-6`, `--space-7`

## Example

```astro
<Principle><Fragment slot="title">…</Fragment>…</Principle>
```

## Notes

Uses atoms: Drop.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
