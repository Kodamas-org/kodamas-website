# GlassCard

**Level:** Molecule · **File:** `src/components/molecules/GlassCard.astro`

## What it is

A frosted, see-through card that lets the animated background show through.

## When to use it

On the aqua background, for supporting information under a main card (“What’s Covered”). Text is navy so it stays readable on the light glass.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `title` | text | — | Card title. |
| `level` | `2` · `3` | `3` | Heading level of the title. |
| (content) | text | — | The description. |

## Variants

One style. Padding shrinks on phones.

## Tokens used

`--blur-glass`, `--border-width-thin`, `--color-glass-edge`, `--color-glass-fill`, `--color-text-on-light`, `--radius-l`, `--shadow-glass`, `--space-3`, `--space-6`, `--space-8`

## Example

```astro
<GlassCard title="What’s Covered">Pipeline &amp; CRM, Funnel…</GlassCard>
```

## Notes

Uses atoms: Heading (`heading-3`), Text.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
