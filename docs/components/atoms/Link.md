# Link

**Level:** Atom · **File:** `src/components/atoms/Link.astro`

## What it is

A text link.

## When to use it

Inline links, header navigation, standalone action links, the legal link.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `href` | URL | — | Destination. |
| `variant` | `inline` · `nav` · `action` · `legal` | `inline` | inline: underlined in text. nav: header, underline on hover. action: semibold, tap-sized, optional arrow. legal: small, underlined, tap-sized. |
| `tone` | `aqua` · `white` · `navy` | `aqua` | Colour. |
| `arrow` | `→` · `↓` · `↗` | — | Trailing arrow (action). It nudges on hover. |
| `current` | true / false | false | Marks the current page (`aria-current="page"`, underlined). |

## Variants

Four variants, three tones.

## Tokens used

`--border-width-medium`, `--border-width-thin`, `--color-aqua-glow`, `--color-midnight-navy`, `--color-white`, `--duration-base`, `--duration-fast`, `--ease-standard`, `--font-size-nav`, `--font-weight-semibold`, `--line-height-ui`, `--size-tap-min`, `--size-underline-offset`, `--space-1`, `--space-2`

## Example

```astro
<Link href={links.danielaLinkedIn} variant="action" arrow="→">Visit LinkedIn Profile</Link>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
