# Hero

**Level:** Organism · **File:** `src/components/organisms/Hero.astro`

## What it is

The homepage opening. The giant wordmark (the page’s h1) fills the grid width exactly, letters rising one after another; below it the intro statement and actions, and the floating DropCluster.

## When to use it

Homepage only (it holds the h1). Shown on `/`, not on the styleguide.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `word` | text | `Kodamas` | The wordmark. |
| `lead` | number | 2 | How many leading letters are white. |
| (content) | text | — | Intro statement; wrap the key phrase in `<Highlight variant="underline">`. |
| slot "actions" | content | — | Button and link. |

## Variants

On tablet and mobile the symbol moves above the wordmark.

## Tokens used

`--color-aqua-glow`, `--color-white`, `--duration-rise`, `--ease-standard`, `--font-display`, `--font-size-intro`, `--font-size-mark`, `--font-weight-heavy`, `--font-weight-light`, `--layout-col-gap`, `--layout-gutter`, `--layout-section`, `--letter-spacing-tight`, `--line-height-mark`, `--line-height-snug`, `--size-drop-cluster`, `--space-3`, `--space-6`, `--space-7`, `--space-8`, `--stagger`

## Example

```astro
<Hero>…<Fragment slot="actions">…</Fragment></Hero>
```

## Notes

The rise animation is the shared `rise` keyframes (global.css).

Uses: Container, DropCluster.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
