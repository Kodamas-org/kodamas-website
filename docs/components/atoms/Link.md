# Link

**Level:** Atom · **File:** `src/components/atoms/Link.astro`

## What it is

A text link.

## When to use it

`inline` inside sentences (for example “@HappyCow”), `nav` for header links, `arrow` for links that lead somewhere else (footer, legal).

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `href` | URL | — | Where it goes (required). |
| `variant` | `inline` · `nav` · `arrow` | `inline` | `inline` is underlined; `nav` is not underlined until hover; `arrow` is underlined and ends with →. |
| `tone` | `aqua` · `white` · `navy` | `aqua` | Pick the one that contrasts with the background: aqua or white on dark/pink, navy on aqua. |
| `class` | text | — | Extra class. |

## Variants

The underline gets thicker on hover. The arrow is hidden from screen readers.

## Tokens used

`--border-width-medium`, `--border-width-thin`, `--color-aqua-glow`, `--color-midnight-navy`, `--color-white`, `--duration-fast`, `--ease-standard`, `--font-size-nav`, `--line-height-ui`, `--size-underline-offset`

## Example

```astro
<Link href="/privacy" variant="arrow" tone="navy">Privacy Policy &amp; Terms of Service</Link>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
