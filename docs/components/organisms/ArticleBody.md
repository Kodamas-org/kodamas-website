# ArticleBody

**Level:** Organism · **File:** `src/components/organisms/ArticleBody.astro`

## What it is

The body of a long read. On desktop the TableOfContents stays sticky in the left columns (1–3) while the text, set in Prose, runs on columns 4–10. Below 1024px the contents become a closed accordion above the text, and the text takes the full width up to `--layout-text-max`.

## When to use it

Every article (`/blogfolio/<slug>`) and the Privacy Policy & Terms of Service page. Put it after PageIntro.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `headings` | list of { depth, slug, text } | — | From `render(post)` or a Markdown import’s `getHeadings()`; the `h2`s become the contents. |
| `last` | true / false | false | Nothing follows it on the page: keeps the section gap below too (the legal page). |
| `tocLabel` | text | `In this article` | The contents’ title (`On this page` on the legal page). |
| (content) | rendered Markdown | — | The text, starting at `h2`. |
| slot "after" | content | — | Under the text, in the same column (the AuthorCard on articles). |

## Variants

One. Sticky contents on desktop; accordion below 1024px.

## Tokens used

`--layout-col-gap`, `--layout-sticky-top`, `--layout-text-max`, `--space-8`, `--space-10`

## Example

```astro
const { Content, headings } = await render(post);
<ArticleBody headings={headings}><Content /></ArticleBody>
```

## Notes

Uses: Section, TableOfContents, Prose.

See it live on any article and on `/privacy-policy-terms-of-service`. Token values: [design-tokens.md](../../design-tokens.md).
