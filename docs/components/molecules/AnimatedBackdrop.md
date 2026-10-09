# AnimatedBackdrop

**Level:** Molecule · **File:** `src/components/molecules/AnimatedBackdrop.astro`

## What it is

The aqua background with soft teal glows that drift slowly, plus a pause/play button in the bottom-right corner (32px circle inside a 44px tap area).

## When to use it

Behind the offer and the testimonials. Starts paused for visitors who ask their device for reduced motion; everyone can pause or play.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| (content) | anything | — | What sits on top. |
| `class` | text | — | Extra class. |

## Variants

Playing or paused. Glow positions and drift are part of the artwork and stay inside the component.

## Tokens used

`--color-control-teal`, `--color-focus-on-light`, `--color-glow`, `--color-shade`, `--color-surface-aqua`, `--color-white`, `--duration-backdrop`, `--ease-drift`, `--radius-round`, `--size-control`, `--size-control-icon`, `--size-tap-min`, `--space-2`, `--z-base`, `--z-raised`

## Example

```astro
<AnimatedBackdrop>…section content…</AnimatedBackdrop>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
