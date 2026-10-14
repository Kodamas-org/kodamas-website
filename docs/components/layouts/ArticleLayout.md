# ArticleLayout

**Level:** Template · **File:** `src/layouts/ArticleLayout.astro`

## What it is

The template for every long read: all Blogfolio articles and the Privacy Policy & Terms of Service page. It holds their whole layout in one place, so changing it changes every article at once:

1. **PageIntro**: back link (← Blogfolio), pink label (Case_1), the title as the h1, the summary line, a small meta line (author · date, or “Last updated”).
2. **ArticleBody**: the table of contents sticky in the left column on desktop (an accordion on mobile) beside the text in Prose, with the AuthorCard under the text.
3. **CallToActionSection**: the closing call to action. Without one, the page ends with the text and keeps the section gap below it.

It wraps BaseLayout, so header, footer, fonts and grain come with it.

## When to use it

Every article page (`src/pages/blogfolio/[slug].astro` passes each Markdown file’s data) and the legal page. Any new long read, for example another policy page, should use it too.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `title` | text | — | The page `<title>` (search engines; “ · Kodamas” is added). |
| `description` | text | — | Meta description. |
| `heading` | text | `title` | The h1, when it differs from the SEO title. |
| `label` | text | — | Small pink label above the title. |
| `back` | { label, href } | — | Link above the label. |
| `summary` | text | — | The line under the title. |
| `meta` | text | — | Small muted line under the summary. |
| `headings` | from `render()` / `getHeadings()` | — | The parts for the table of contents. |
| `tocLabel` | text | `In this article` | The contents’ title. |
| `author` | an Author (`getAuthor`) | — | Shows the author block under the text. |
| `cta` | a Cta (`src/data/ctas.ts`) | — | The closing call to action. |
| (content) | rendered Markdown | — | The text. |

## Variants

Article (author + call to action) and plain long read (neither: the legal page).

## Tokens used

None of its own: spacing comes from PageIntro, ArticleBody and CallToActionSection.

## Example

```astro
<ArticleLayout title={data.title} description={data.description} headings={headings} author={author} cta={ctas.workflows}>
	<Content />
</ArticleLayout>
```

## Notes

Uses: BaseLayout, PageIntro, ArticleBody, AuthorCard, CallToActionSection.

See it live on any article and on `/privacy-policy-terms-of-service`.
