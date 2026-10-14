# TableOfContents

**Level:** Molecule · **File:** `src/components/molecules/TableOfContents.astro`

## What it is

An article’s table of contents: its parts (the `h2`s), numbered 01, 02… like the parts in Prose, under a small pink “In this article” label. On desktop it is a list the article page keeps sticky in the empty left column, and the part being read turns aqua. On mobile and tablet it is an accordion above the article, closed by default (+ turns to ×); choosing a part closes it.

## When to use it

Every article page, fed with the `headings` that Astro’s `render()` returns.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `headings` | list of { depth, slug, text } | — | From `render(post)`; only depth 2 is listed. Nothing renders without parts. |
| `label` | text | `In this article` | The list’s title (also its navigation landmark name). |

## Variants

Desktop (above 1024px): list; the page places it on columns 1–3 with `position: sticky` at `--layout-sticky-top`. Below 1024px: accordion.

## Tokens used

`--border-width-medium`, `--border-width-thin`, `--color-accent`, `--color-number`, `--color-rule`, `--color-text-muted`, `--duration-base`, `--duration-fast`, `--ease-standard`, `--font-size-body`, `--font-size-small`, `--font-weight-semibold`, `--letter-spacing-label`, `--line-height-tight`, `--size-icon-s`, `--size-tap-min`, `--space-2`, `--space-3`, `--space-4`

## Example

```astro
const { Content, headings } = await render(post);
<TableOfContents headings={headings} />
```

## Notes

The current part is marked with `aria-current`. Prose gives each `h2` a `scroll-margin-top` so a jump from the list leaves room above the heading.

See it live at `/styleguide` and on any article. Token values: [design-tokens.md](../../design-tokens.md).
