# Button

**Level:** Atom · **File:** `src/components/atoms/Button.astro`

## What it is

A pill-shaped call to action. It becomes a link when it has an `href`, otherwise a normal button.

## When to use it

For the main actions: “Connect With Us” and “Book a call”. Use one primary action per area; for secondary navigation use Link instead.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `href` | URL | — | Where it goes. Without it, a `<button>` is rendered. |
| `variant` | `primary` · `inverse` | `primary` | `primary` = aqua with navy text (on dark). `inverse` = white with pink text (on pink). |
| `size` | `m` · `l` | `m` | `m` for the header, `l` for the footer and the offer card. |
| `type` | `button` · `submit` | `button` | Only for real buttons inside forms. |
| `class` | text | — | Extra class for positioning. |

## Variants

Lifts slightly on hover. Text never wraps. On phones the `m` size gets tighter padding so it fits next to the menu.

## Tokens used

`--color-aqua-glow`, `--color-focus-on-dark`, `--color-midnight-navy`, `--color-pink-deep`, `--color-white`, `--duration-fast`, `--ease-standard`, `--font-body`, `--font-size-body-m`, `--font-size-body-s`, `--font-weight-bold`, `--font-weight-medium`, `--line-height-ui`, `--radius-pill`, `--space-1`, `--space-3`, `--space-4`, `--space-5`, `--space-8`

## Example

```astro
<Button href="/contact" variant="inverse" size="l">Book a call</Button>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
