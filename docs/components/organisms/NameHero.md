# NameHero

**Level:** Organism · **File:** `src/components/organisms/NameHero.astro`

## What it is

The Our Story opening: the name as an equation. Two terms (word + meaning) joined by pink drops with + and =, then the result as the giant wordmark; the final letter drops in last, in pink, with its note. Then the intro paragraph.

## When to use it

Our Story only (its small label is the h1). Shown on `/about`, not on the styleguide.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `title` | text | — | The h1 (small pink label). |
| `terms` | two { word, meaning } | — | The two parts; the second is aqua. |
| `word` | text | — | Result word without the final letter. |
| `final` | text | — | The added letter (pink). |
| `lead` | number | 2 | White leading letters. |
| slot "meaning" | text | — | Under the wordmark. |
| slot "note" | text | — | Note for the final letter. |
| (content) | text | — | Intro paragraph. |

## Variants

The equation builds in sequence; no motion for reduced motion.

On mobile (≤ 48rem) the equation stays on one line (Ko + Dama =): a four-column grid where each meaning drops to `--font-size-small` and wraps under its own word, and the drops shrink via `--size-drop-equation`.

## Tokens used

`--color-aqua-glow`, `--color-highlight-pink`, `--color-number`, `--color-text-muted`, `--color-white`, `--duration-rise`, `--ease-standard`, `--font-display`, `--font-size-body`, `--font-size-intro`, `--font-size-lead`, `--font-size-mark`, `--font-size-small`, `--font-size-statement`, `--font-weight-heavy`, `--font-weight-light`, `--font-weight-semibold`, `--layout-col-gap`, `--layout-section`, `--layout-text-max`, `--letter-spacing-label`, `--letter-spacing-tight`, `--line-height-lead`, `--line-height-mark`, `--line-height-none`, `--line-height-snug`, `--size-drop-equation`, `--space-2`, `--space-3`, `--space-5`, `--space-6`, `--space-8`, `--space-9`, `--stagger`

## Example

```astro
<NameHero title="Our Story" terms={[…]} word="Kodama" final="s">…</NameHero>
```

## Notes

Uses: Container, Drop.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
