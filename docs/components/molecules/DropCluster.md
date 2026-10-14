# DropCluster

**Level:** Molecule · **File:** `src/components/molecules/DropCluster.astro`

## What it is

The brand symbol: a large pink drop, an aqua outline drop and a small aqua drop, overlapping and floating slowly. Decorative.

## When to use it

The homepage hero.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| — | — | — | No props. Size from `--size-drop-cluster`. |

## Variants

Float stops for reduced motion. The inset percentages are fixed symbol geometry.

The pink drop carries the same moving film grain as the photos (`--texture-grain-photo`, `grain-shift`), still for reduced motion.

## Tokens used

`--border-width-medium`, `--color-aqua-glow`, `--duration-float`, `--ease-drift`, `--gradient-drop`, `--radius-drop`, `--size-drop-cluster`, `--space-4`, `--duration-grain`, `--opacity-grain-photo`, `--texture-grain-photo`

## Example

```astro
<DropCluster />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
