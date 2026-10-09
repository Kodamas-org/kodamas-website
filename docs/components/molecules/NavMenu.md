# NavMenu

**Level:** Molecule · **File:** `src/components/molecules/NavMenu.astro`

## What it is

The header navigation: text links and a call-to-action button.

## When to use it

Inside SiteHeader. On phones (768px and below) the text links fold into a 44px menu icon button that opens a small panel; the button stays visible.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `links` | list of { label, href } | — | Text links, in order. |
| `cta` | { label, href } | — | The button (size `m`). |

## Variants

Desktop/tablet: one row. Mobile: menu icon + button; each link in the panel is at least 44px tall.

## Tokens used

`--border-width-thin`, `--color-aqua-glow`, `--color-midnight-navy`, `--radius-pill`, `--radius-s`, `--size-icon`, `--size-tap-min`, `--space-2`, `--space-3`, `--space-5`, `--space-6`

## Example

```astro
<NavMenu links={[{ label: "Blogfolio", href: "/blog" }]} cta={{ label: "Connect With Us", href: "/contact" }} />
```

## Notes

Uses atoms: Link, Button.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
