# SiteHeader

**Level:** Organism · **File:** `src/components/organisms/SiteHeader.astro`

## What it is

The top bar: small aqua wordmark (links home) on the left, navigation on the right.

## When to use it

Once per page; it is already included in BaseLayout. It sticks to the top of the window, slides away while scrolling down, and comes back as soon as the visitor scrolls up or tabs into it.

## Props

None.

## Variants

No props. Nav items: Blogfolio, Our Story, Test Home (link to `/test-home`, the chosen design direction; removed once it becomes the homepage), plus the “Connect With Us” button. URLs live in `src/data/links.ts`.

## Tokens used

`--color-surface-page`, `--duration-base`, `--ease-standard`, `--layout-header-gutter`, `--space-3`, `--space-5`, `--z-header`

## Example

```astro
<SiteHeader />
```

## Notes

Uses: Wordmark, NavMenu.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
