# SiteFooter

**Level:** Organism · **File:** `src/components/organisms/SiteFooter.astro`

## What it is

The page footer: a teal card (wordmark, copyright, “Connect With Us” button, four footer links), then an aqua strip with the legal link. Both aligned to the page container.

## When to use it

Once per page; included in BaseLayout.

## Props

None.

## Variants

Two columns; one column on phones.

## Tokens used

`--color-focus-on-light`, `--color-surface-aqua`, `--color-surface-band`, `--color-text-on-dark`, `--font-size-small`, `--radius-l`, `--space-2`, `--space-3`, `--space-5`, `--space-6`, `--space-8`, `--space-card`, `--space-section`

## Example

```astro
<SiteFooter />
```

## Notes

Uses: Wordmark (`m`), Text (`s`), Button (`m`), Link, FooterLink. Links live in `src/data/links.ts`.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
