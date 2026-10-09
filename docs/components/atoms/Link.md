# Link

**Level:** Atom · **File:** `src/components/atoms/Link.astro`

## What it is

A text link.

## When to use it

`inline` inside sentences (“@HappyCow”), `nav` for header links, `arrow` for links that lead elsewhere (footer, legal).

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `href` | URL | — | Where it goes (required). |
| `variant` | `inline` · `nav` · `arrow` | `inline` | `inline` underlined · `nav` 16px, underlined on hover · `arrow` underlined with a trailing →. |
| `tone` | `aqua` · `white` · `navy` | `aqua` | Pick the one that contrasts with the background. |
| `class` | text | — | Extra class. |

## Variants

The underline thickens on hover. The arrow is hidden from screen readers.

## Tokens used

`--border-width-medium`, `--border-width-thin`, `--color-aqua-glow`, `--color-midnight-navy`, `--color-white`, `--duration-fast`, `--ease-standard`, `--font-size-ui`, `--line-height-ui`, `--size-underline-offset`

## Example

```astro
<Link href="/privacy" variant="arrow" tone="navy">Privacy Policy &amp; Terms of Service</Link>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
