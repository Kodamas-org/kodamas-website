# CallToActionSection

**Level:** Organism · **File:** `src/components/organisms/CallToActionSection.astro`

## What it is

A closing invitation on the bright surface: large title on the left, message and navy button on the right.

## When to use it

The one bright moment on pages without an offer (Our Story).

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `id` | text | `cta` | Section id. |
| num / label | text | — | Section index. |
| `title` | text | — | h2. |
| `cta` | { label, href } | — | Navy button. |
| (content) | paragraphs | — | The message (`<strong>` for the brand name). |

## Variants

Columns stack below 1024px.

## Tokens used

`--font-size-lead`, `--layout-col-gap`, `--line-height-lead`, `--space-4`, `--space-7`

## Example

```astro
<CallToActionSection num="03" title="Want to optimize your internal workflows?" cta={…}>…</CallToActionSection>
```

## Notes

Uses: Section, Heading, Button.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
