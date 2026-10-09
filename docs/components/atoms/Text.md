# Text

**Level:** Atom · **File:** `src/components/atoms/Text.astro`

## What it is

Body text in Inter.

## When to use it

Any paragraph or line that is not a title.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `as` | `p` · `span` · `div` | `p` | HTML element. |
| `size` | `l` · `m` · `s` | `m` | `l` lead 18–20px (intros) · `m` body 16–18px (default) · `s` small 14px (captions, legal). |
| `weight` | `regular` · `semibold` · `bold` | `regular` | Font weight. |
| `italic` | true / false | false | Inter’s real italic. |
| `align` | `start` · `center` | `start` | Alignment. |
| `class` | text | — | Extra class. |

## Variants

Any combination of size, weight, italic and alignment.

## Tokens used

`--font-body`, `--font-size-body`, `--font-size-lead`, `--font-size-small`, `--font-weight-bold`, `--font-weight-regular`, `--font-weight-semibold`, `--line-height-body`, `--line-height-lead`

## Example

```astro
<Text size="l">The Sprint gives you the roadmap.</Text>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
