# Text

**Level:** Atom · **File:** `src/components/atoms/Text.astro`

## What it is

Body text in Inter.

## When to use it

Paragraphs, captions. Links inside are underlined in the accent colour.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `as` | `p` · `span` · `div` | `p` | Element. |
| `size` | `body` · `lead` · `small` | `body` | Size and line height. |
| `tone` | `inherit` · `muted` | `inherit` | Muted is aqua-grey for captions on navy. |

## Variants

Three sizes, two tones.

## Tokens used

`--color-accent`, `--color-text-muted`, `--font-size-body`, `--font-size-lead`, `--font-size-small`, `--font-weight-bold`, `--line-height-body`, `--line-height-lead`, `--size-underline-offset`

## Example

```astro
<Text size="small" tone="muted">(Forrester Consulting)</Text>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
