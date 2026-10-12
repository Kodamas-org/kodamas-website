# PauseButton

**Level:** Atom · **File:** `src/components/atoms/PauseButton.astro`

## What it is

A small round pause/play button for a looping animation.

## When to use it

Next to any animation that loops (the marquee). Required by the motion rule: motion must be pausable.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `target` | id | — | The element to pause. The button toggles `data-paused` on it. |

## Variants

Shows pause or play. Starts paused for reduced motion.

## Tokens used

`--border-width-thin`, `--color-rule`, `--radius-round`, `--size-icon-s`, `--size-tap-min`

## Example

```astro
<PauseButton target="closing-marquee" />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
