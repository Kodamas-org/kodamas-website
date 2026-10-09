# AnimatedBackdrop

**Level:** Molecule · **File:** `src/components/molecules/AnimatedBackdrop.astro`

## What it is

The aqua background with soft teal glows that drift slowly, plus a small round pause/play button in the bottom-right corner.

## When to use it

Behind the offer and the testimonials. Wrap any content in it. The animation starts paused for visitors who have asked their device for reduced motion; everyone can pause or play it with the button.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| (content) | anything | — | What sits on top of the background. |
| `class` | text | — | Extra class. |

## Variants

Playing or paused. The glow positions and drift distance are part of the artwork and stay inside the component.

## Tokens used

`--color-control-teal`, `--color-focus-on-light`, `--color-glow`, `--color-shade`, `--color-surface-aqua`, `--color-white`, `--duration-backdrop`, `--ease-drift`, `--radius-round`, `--size-control`, `--size-control-icon`, `--space-4`, `--z-base`, `--z-raised`

## Example

```astro
<AnimatedBackdrop>…section content…</AnimatedBackdrop>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
