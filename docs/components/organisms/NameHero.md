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
| `wisps` | boolean | false | A pair of kodama wisps (WispField) below the meaning, under its first words; on mobile after the note. |
| slot "meaning" | text | — | Under the wordmark. |
| slot "note" | text | — | Note for the final letter. |
| (content) | text | — | Intro paragraph. |

## Variants

The equation reads in order, one beat (`--duration-beat`) per step: both terms together, then + and then = (the drops fall in from above, like the final letter), the word (its letters rising one after another, `--stagger`), its meaning, then the final letter together with its note, and finally the intro paragraph. No motion for reduced motion.

On mobile (≤ 48rem) the equation stays on one line (Ko + Dama =): a four-column grid packed to the left (the = sits right after the second term) where each meaning drops to `--font-size-small` and wraps under its own word, and the drops shrink via `--size-drop-equation`.

## Tokens used

`--color-aqua-glow`, `--color-highlight-pink`, `--color-number`, `--color-text-muted`, `--color-white`, `--duration-beat`, `--duration-rise`, `--ease-standard`, `--font-display`, `--font-size-body`, `--font-size-intro`, `--font-size-lead`, `--font-size-mark`, `--font-size-small`, `--font-size-statement`, `--font-weight-heavy`, `--font-weight-light`, `--font-weight-semibold`, `--layout-col-gap`, `--layout-section`, `--layout-text-max`, `--letter-spacing-label`, `--letter-spacing-tight`, `--line-height-lead`, `--line-height-mark`, `--line-height-none`, `--line-height-snug`, `--size-drop-equation`, `--size-wisp`, `--space-2`, `--space-3`, `--space-5`, `--space-6`, `--space-8`, `--space-9`, `--stagger`

## Example

```astro
<NameHero title="Our Story" terms={[…]} word="Kodama" final="s">…</NameHero>
```

## Notes

The h1 is a pink Eyebrow. The rise animation is the shared `rise` keyframes (global.css).

Uses: Container, Drop, WispField.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
