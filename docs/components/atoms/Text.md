# Text

**Level:** Atom · **File:** `src/components/atoms/Text.astro`

## What it is

Body text in Inter.

## When to use it

For any paragraph or short line that is not a title.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `as` | `p` · `span` · `div` | `p` | The HTML element. |
| `size` | `xl` · `l` · `m` · `s` | `m` | `xl` lead paragraphs, `l` quotes, `m` default, `s` small UI. |
| `weight` | `regular` · `semibold` · `bold` | `regular` | Font weight. |
| `italic` | true / false | false | Uses Inter’s real italic. |
| `align` | `start` · `center` | `start` | Alignment. |
| `class` | text | — | Extra class. |

## Variants

Any combination of size, weight, italic and alignment.

## Tokens used

`--font-body`, `--font-size-body-l`, `--font-size-body-m`, `--font-size-body-s`, `--font-size-body-xl`, `--font-weight-bold`, `--font-weight-regular`, `--font-weight-semibold`, `--line-height-body`, `--line-height-relaxed`

## Example

```astro
<Text size="xl">The Sprint gives you the roadmap.</Text>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
