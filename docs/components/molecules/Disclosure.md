# Disclosure

**Level:** Molecule · **File:** `src/components/molecules/Disclosure.astro`

## What it is

Content that opens on demand, between two hairlines: a summary row with a + on the right that turns into × when open, and the content below it. Built on the native `<details>`, so it works with the keyboard and without JavaScript, and opening it only pushes what follows downwards.

## When to use it

“Read more about …” in Profile, and the article contents on mobile (TableOfContents). Anywhere else something extra should stay folded until asked for.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `summary` | text | — | The toggle text. |
| `variant` | `action` · `label` | `action` | `action`: aqua semibold (Read more). `label`: small pink uppercase, a pink Eyebrow (contents). |
| `open` | true / false | false | Start open. |
| `class` | text | — | Extra class. |
| (content) | anything | — | Shown when open. |

## Variants

Action and label.

## Tokens used

`--border-width-medium`, `--border-width-thin`, `--color-accent`, `--color-number`, `--color-rule`, `--duration-base`, `--ease-standard`, `--font-weight-semibold`, `--size-icon-s`, `--size-tap-min`, `--space-3`, `--space-4`, `--space-5`

## Example

```astro
<Disclosure summary="Read more about Emma"><ul class="drop-list">…</ul></Disclosure>
```

## Notes

Uses: Eyebrow (label variant).

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
