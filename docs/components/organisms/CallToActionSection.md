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
| `body` | list of inline-Markdown paragraphs | — | The message (`**Kodamas**` for the brand name). Usually spread with the title from `src/data/ctas.ts`: `{...ctas.workflows}`. |
| `cta` | { label, href } | Connect With Us | Navy button (from `src/data/navigation.ts`). |
| (content) | paragraphs | — | The message as markup, instead of `body`. |

## Variants

Columns stack below 1024px. It always follows a navy section, so it keeps the one section gap (`--layout-section`) above itself: pages don’t add a wrapper.

## Tokens used

`--font-size-lead`, `--layout-col-gap`, `--layout-section`, `--line-height-lead`, `--space-4`, `--space-7`

## Example

```astro
<CallToActionSection num="03" {...ctas.workflows} />
```

## Notes

Uses: Section, Heading, Button.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
