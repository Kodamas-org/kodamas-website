# NavMenu

**Level:** Molecule · **File:** `src/components/molecules/NavMenu.astro`

## What it is

The header navigation: text links and a call-to-action button.

## When to use it

Inside SiteHeader. On phones (below 768px) the text links fold into a “Menu” button that opens a small panel; the call-to-action stays visible.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `links` | list of { label, href } | — | The text links, in order. |
| `cta` | { label, href } | — | The button. |

## Variants

Desktop/tablet: everything in one row. Mobile: Menu toggle + button.

## Tokens used

`--border-width-thin`, `--color-aqua-glow`, `--color-midnight-navy`, `--font-size-body-s`, `--radius-pill`, `--radius-s`, `--space-2`, `--space-3`, `--space-4`, `--space-5`

## Example

```astro
<NavMenu links={[{ label: "Blogfolio", href: "/blog" }]} cta={{ label: "Connect With Us", href: "/contact" }} />
```

## Notes

Uses atoms: Link, Button.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
