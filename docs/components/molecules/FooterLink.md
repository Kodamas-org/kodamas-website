# FooterLink

**Level:** Molecule · **File:** `src/components/molecules/FooterLink.astro`

## What it is

A footer navigation row: the label large in Funnel Display Light with ↗ on the right, between hairlines. Slides in and turns aqua on hover. Renders an `<li>`.

## When to use it

SiteFooter.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `href` | URL | — | Destination. |
| (content) | text | — | Label. |

## Variants

One.

## Tokens used

`--border-width-thin`, `--color-aqua-glow`, `--color-rule`, `--color-white`, `--duration-base`, `--ease-standard`, `--font-body`, `--font-display`, `--font-size-footer-link`, `--font-weight-light`, `--letter-spacing-display`, `--line-height-heading`, `--space-5`

## Example

```astro
<FooterLink href={links.ourStory}>Our Story</FooterLink>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
