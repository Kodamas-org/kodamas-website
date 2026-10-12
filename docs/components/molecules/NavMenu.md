# NavMenu

**Level:** Molecule · **File:** `src/components/molecules/NavMenu.astro`

## What it is

The header navigation: text links and a call-to-action button.

## When to use it

Inside SiteHeader. On phones the links fold into a “Menu” toggle; the button stays visible. The link to the current page is marked as current.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `links` | list of { label, href } | — | Text links, in order. |
| `cta` | { label, href } | — | The button. |

## Variants

Desktop/tablet: one row. Mobile: Menu toggle + button.

## Tokens used

`--border-width-thin`, `--color-aqua-glow`, `--color-midnight-navy`, `--font-size-ui`, `--radius-pill`, `--radius-s`, `--space-2`, `--space-3`, `--space-4`, `--space-5`

## Example

```astro
<NavMenu links={[{ label: "Blogfolio", href: "#" }]} cta={{ label: "Connect With Us", href: "#" }} />
```

## Notes

Uses atoms: Link, Button.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
