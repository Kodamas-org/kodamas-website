# GlassCard

**Level:** Molecule · **File:** `src/components/molecules/GlassCard.astro`

## What it is

A frosted, see-through card that lets the animated background show through. Navy text for contrast.

## When to use it

On the aqua background, for supporting information under a main card (“What’s Covered”).

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `title` | text | — | Card title (Heading `s`). |
| `level` | `2` · `3` | `3` | Heading level. |
| (content) | text | — | The description. |

## Variants

One style; same padding and corners as the offer card so they read as a pair.

## Tokens used

`--blur-glass`, `--border-width-thin`, `--color-glass-edge`, `--color-glass-fill`, `--color-text-on-light`, `--radius-l`, `--shadow-glass`, `--space-2`, `--space-card`

## Example

```astro
<GlassCard title="What’s Covered">Pipeline &amp; CRM, Funnel…</GlassCard>
```

## Notes

Uses atoms: Heading, Text.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
