# SiteFooter

**Level:** Organism · **File:** `src/components/organisms/SiteFooter.astro`

## What it is

The footer: large FooterLink rows, then a bar with the sign-off wordmark, copyright and the legal link.

## When to use it

Every page (BaseLayout).

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| — | — | — | No props. Links from `src/data/links.ts`. |

## Variants

Bar stacks on mobile.

## Tokens used

`--border-width-thin`, `--color-rule`, `--color-text-muted`, `--font-size-small`, `--space-4`, `--space-6`, `--space-7`, `--space-9`

## Example

```astro
<SiteFooter />
```

## Notes

Uses: Container, Wordmark, Link, FooterLink.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
