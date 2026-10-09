# SiteFooter

**Level:** Organism · **File:** `src/components/organisms/SiteFooter.astro`

## What it is

The page footer: a teal card with the white wordmark, copyright line, “Connect With Us” button and four footer links, then an aqua strip with the legal link.

## When to use it

Once per page; already included in BaseLayout.

## Props

None.

## Variants

Two columns on desktop and tablet; one column on phones, where the card runs edge to edge.

## Tokens used

`--color-focus-on-light`, `--color-surface-aqua`, `--color-surface-band`, `--color-text-on-dark`, `--font-size-body-m`, `--layout-gutter`, `--layout-header-gutter`, `--radius-l`, `--space-10`, `--space-3`, `--space-4`, `--space-5`, `--space-7`, `--space-8`, `--space-9`

## Example

```astro
<SiteFooter />
```

## Notes

Uses: Wordmark, Text, Button, Link, FooterLink. Links live in `src/data/links.ts`.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
