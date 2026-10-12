# Clock

**Level:** Atom · **File:** `src/components/atoms/Clock.astro`

## What it is

A live local-time pill with a clock icon (e.g. Italy, Japan).

## When to use it

Next to a place name or a person, to show where we are right now. Decorative (hidden from screen readers); hidden until the time is set.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `zone` | IANA time zone | — | e.g. `Europe/Rome`, `Asia/Tokyo`. |

## Variants

Updates every 30 seconds.

## Tokens used

`--border-width-thin`, `--color-aqua-glow`, `--color-rule`, `--font-body`, `--font-size-small`, `--font-weight-semibold`, `--letter-spacing-body`, `--line-height-body`, `--radius-pill`, `--size-icon-m`, `--space-1`, `--space-2`, `--space-3`

## Example

```astro
Italy<Clock zone="Europe/Rome" />
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
