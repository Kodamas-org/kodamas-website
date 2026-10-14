# CaseStudy

**Level:** Molecule · **File:** `src/components/molecules/CaseStudy.astro`

## What it is

A Blogfolio entry: a drop-shaped photo on one side; on the other, the case label with a small pink drop, the title as an aqua underlined link with an arrow, and a one-line summary. The whole card is clickable through the title link; on hover the photo turns round and the arrow slides.

## When to use it

The Blogfolio list, one per `<li>`, alternating `reverse`. The page builds it from the articles in `src/content/blog/`.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `label` | text | — | Optional case label (e.g. `Case_1`), shown uppercase in pink. |
| `title` | text | — | The case title; the link text. |
| `href` | URL | — | Where the case leads (from `src/data/links.ts`). |
| `photo` | imported image · URL | — | The photo (the article’s `photo`); omitted shows the “photo needed” placeholder. |
| `focus` | object-position | — | Which part of the photo stays in the drop crop (the article’s `photoFocus`, e.g. `80% 50%`). |
| `alt` | text | `''` | Photo description; empty when decorative (the title already names the case). |
| `reverse` | boolean | false | Photo on the right. |
| `level` | 2 · 3 · 4 | 2 | Title heading level. |
| (content) | text | — | The one-line summary. |

## Variants

Default (photo left, columns 1–4) and `reverse` (photo right, columns 9–12). Below 768px photo and text stack.

## Tokens used

`--border-width-medium`, `--border-width-thin`, `--color-accent`, `--color-number`, `--duration-base`, `--ease-standard`, `--font-display`, `--font-size-heading-2`, `--font-size-lead`, `--font-weight-bold`, `--layout-col-gap`, `--layout-text-max`, `--letter-spacing-display`, `--line-height-heading`, `--line-height-lead`, `--radius-round`, `--size-avatar-l`, `--size-underline-offset`, `--space-2`, `--space-3`, `--space-4`, `--space-6`

## Example

```astro
<CaseStudy label="Case_1" title="Bug Reporting Workflow Optimization" href="/blogfolio/bug-reporting-workflow-optimization">
	How We Built a Seamless, Automated System That Scales
</CaseStudy>
```

## Notes

Uses atoms: Avatar, Drop, Eyebrow. Fades up on scroll (`data-reveal`).

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
