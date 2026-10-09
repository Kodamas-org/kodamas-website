# Button

**Level:** Atom · **File:** `src/components/atoms/Button.astro`

## What it is

A pill-shaped button. It becomes a link when it has an `href`, otherwise a real button.

## When to use it

Use the size that matches the job:

| Size | Height | Text | Use for |
|---|---|---|---|
| `s` | 40px | 14px semibold | Compact actions on desktop only (below the 44px touch minimum) |
| `m` | 48px (44 on mobile) | 16px semibold | Default: header and footer “Connect With Us” |
| `l` | 56px | 18px semibold (16 mobile) | The one main action on a page: “Book a call” |

Use only one `l` button per page so the main action is obvious.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `href` | URL | — | Where it goes. Without it, a `<button>` is rendered. |
| `variant` | `primary` · `inverse` | `primary` | `primary` aqua with navy text (on dark or teal). `inverse` white with pink text (on pink). |
| `size` | `s` · `m` · `l` | `m` | See the table above. |
| `type` | `button` · `submit` | `button` | Only for buttons inside forms. |
| `class` | text | — | Extra class for positioning. |

## Variants

2 variants × 3 sizes. Text never wraps. Lifts slightly on hover.

## Tokens used

`--button-height-l`, `--button-height-m`, `--button-height-s`, `--button-padding-l`, `--button-padding-m`, `--button-padding-s`, `--color-aqua-glow`, `--color-focus-on-dark`, `--color-midnight-navy`, `--color-pink-deep`, `--color-white`, `--duration-fast`, `--ease-standard`, `--font-body`, `--font-size-body`, `--font-size-small`, `--font-size-ui`, `--font-weight-semibold`, `--line-height-ui`, `--radius-pill`, `--space-1`

## Example

```astro
<Button href="/book" variant="inverse" size="l">Book a call</Button>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
