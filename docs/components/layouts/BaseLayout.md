# BaseLayout

**Level:** Template · **File:** `src/layouts/BaseLayout.astro`

## What it is

The page template: document head, fonts, tokens and base styles, a “Skip to content” link for keyboard users, and the page between SiteHeader and SiteFooter.

## When to use it

Every page starts with it.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `title` | text | — | Browser tab title. |
| `description` | text | — | Search-result description. |
| `noindex` | true / false | false | Hide from search engines (styleguide). |
| (content) | page sections | — | Goes inside `<main>`. |
| slot "footer" | a `<footer>` | — | Optional. Replaces the standard SiteFooter (used by the Test Home concept). |

## Variants

One template. Also provides the shared `.container` class (from global.css) for the page width and margins.

## Tokens used

`--color-aqua-glow`, `--color-midnight-navy`, `--color-white`, `--radius-pill`, `--space-2`, `--space-4`, `--z-header`

## Example

```astro
<BaseLayout title="Kodamas" description="…">…sections…</BaseLayout>
```

## Notes

Lives in `src/layouts/`.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
