# Prose

**Level:** Molecule · **File:** `src/components/molecules/Prose.astro`

## What it is

Long-form text rendered from Markdown. It styles the plain elements Markdown produces: each `h2` opens a numbered part (a small pink 01, 02… on a hairline, then the heading in Funnel Display Bold), bold text turns aqua, list bullets are small drops, numbered lists use pink numbers, a blockquote becomes a large aqua pull statement in Funnel Display Light, and images get soft corners.

## When to use it

The body of every article (`src/pages/blogfolio/[slug].astro`), around the rendered Markdown `<Content />`.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| (content) | rendered Markdown | — | The article body, starting at `h2`. |

## Variants

One. The article page places it on columns 4–10 of the grid on desktop; full width (up to `--layout-text-max`) below 1024px.

## Tokens used

`--border-width-medium`, `--border-width-thin`, `--color-accent`, `--color-number`, `--color-rule`, `--font-body`, `--font-display`, `--font-size-heading-3`, `--font-size-lead`, `--font-size-quote`, `--font-size-small`, `--font-weight-bold`, `--font-weight-light`, `--font-weight-semibold`, `--gradient-drop`, `--letter-spacing-display`, `--letter-spacing-label`, `--line-height-lead`, `--line-height-snug`, `--radius-drop`, `--radius-s`, `--size-icon-s`, `--size-underline-offset`, `--space-3`, `--space-4`, `--space-5`, `--space-6`, `--space-8`, `--space-10`

## Example

```astro
<Prose><Content /></Prose>
```

## Notes

Styles reach the Markdown through `:global()` inside `.prose`. Emoji at the start of a paragraph (the Impact lists) are kept as written.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
