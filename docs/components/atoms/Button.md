# Button

**Level:** Atom · **File:** `src/components/atoms/Button.astro`

## What it is

A pill-shaped call to action. A link when `href` is given, otherwise a `<button>`.

## When to use it

Calls to action. Aqua on navy; navy on the bright aqua surface.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `href` | URL | — | Makes it a link. |
| `variant` | `aqua` · `navy` | `aqua` | Colour. |
| `size` | `m` · `l` | `l` | m: header. l: page calls to action (3.5rem tall, aqua glow ring on hover). |
| `type` | `button` · `submit` | `button` | When it is a `<button>`. |

## Variants

Lifts slightly on hover.

## Tokens used

`--color-aqua-glow`, `--color-button-glow`, `--color-midnight-navy`, `--color-white`, `--duration-base`, `--duration-fast`, `--ease-standard`, `--font-body`, `--font-size-body`, `--font-size-ui`, `--font-weight-medium`, `--font-weight-semibold`, `--line-height-ui`, `--radius-pill`, `--size-button-l`, `--space-1`, `--space-2`, `--space-3`, `--space-4`, `--space-5`, `--space-6`

## Example

```astro
<Button href={links.bookCall}>Book a call</Button>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
