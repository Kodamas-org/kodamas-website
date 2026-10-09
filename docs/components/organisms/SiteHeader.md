# SiteHeader

**Level:** Organism · **File:** `src/components/organisms/SiteHeader.astro`

## What it is

The top bar: small aqua wordmark (links home) on the left, navigation on the right, aligned to the page container.

## When to use it

Once per page; included in BaseLayout. Sticks to the top, slides away while scrolling down, comes back on scroll up or keyboard focus.

## Props

None.

## Variants

No props. Nav items: Blogfolio, Our Story, Test Home (temporary link to the `/test-home` concept), plus the “Connect With Us” button. URLs live in `src/data/links.ts`.

## Tokens used

`--color-surface-page`, `--duration-base`, `--ease-standard`, `--space-4`, `--space-5`, `--z-header`

## Example

```astro
<SiteHeader />
```

## Notes

Uses: Wordmark, NavMenu.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
