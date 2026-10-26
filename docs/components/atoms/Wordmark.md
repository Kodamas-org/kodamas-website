# Wordmark

**Level:** Atom · **File:** `src/components/atoms/Wordmark.astro`

## What it is

The name “Kodamas” in Funnel Display, in aqua. The giant variant fills its container’s width exactly, its letters rising in one after another, the first two white.

## When to use it

Header (links home) and the footer bar. Giant: the homepage h1 (inside `Hero`) and the share image (`/og-image`).

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `variant` | `header` · `signoff` · `giant` | `header` | header: Bold. signoff: Heavy with a small pink drop before it. giant: Heavy, fills its container, letters rise in (off for reduced motion); hidden from screen readers, so the parent gives the name (e.g. a `.visually-hidden` “Kodamas”). |

## Variants

Three variants. The giant letters use the shared `rise` keyframes (global.css).

## Tokens used

`--color-aqua-glow`, `--color-white`, `--duration-rise`, `--ease-standard`, `--font-display`, `--font-size-mark`, `--font-size-wordmark-s`, `--font-weight-bold`, `--font-weight-heavy`, `--gradient-drop`, `--letter-spacing-display`, `--letter-spacing-tight`, `--line-height-mark`, `--line-height-none`, `--radius-drop`, `--size-drop-xs`, `--space-2`, `--stagger`

## Example

```astro
<Wordmark variant="signoff" />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
