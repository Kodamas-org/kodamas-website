# SiteHeader

**Level:** Organism · **File:** `src/components/organisms/SiteHeader.astro`

## What it is

The top bar: aqua wordmark (links home) and NavMenu. Sticks to the top, slides away when scrolling down and returns when scrolling up.

## When to use it

Every page (BaseLayout).

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| — | — | — | No props. Links come from `src/data/links.ts`. |

## Variants

One.

## Tokens used

`--color-surface-page`, `--duration-base`, `--ease-standard`, `--layout-header-gutter`, `--space-3`, `--space-5`, `--z-header`

## Example

```astro
<SiteHeader />
```

## Notes

Menu items and the Connect button come from `src/data/navigation.ts` (`mainNav`, `actions.connect`).

Uses: Wordmark, NavMenu.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
