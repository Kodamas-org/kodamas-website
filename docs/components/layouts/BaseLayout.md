# BaseLayout

**Level:** Template · **File:** `src/layouts/BaseLayout.astro`

## What it is

The page template. It sets up the document (language, title, description), loads the fonts, tokens and base styles, adds a “Skip to content” link for keyboard users, and wraps the page between SiteHeader and SiteFooter.

## When to use it

Every page starts with it.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `title` | text | — | Browser tab title. |
| `description` | text | — | Search-result description. |
| `noindex` | true / false | false | Hide the page from search engines (used by the styleguide). |
| (content) | page sections | — | Goes inside `<main>`. |
| slot "footer" | a `<footer>` | — | Optional. Replaces the standard SiteFooter (used by Test Home). |

## Variants

One template.

## Tokens used

`--color-aqua-glow`, `--color-midnight-navy`, `--color-white`, `--radius-pill`, `--space-2`, `--space-4`, `--z-header`

## Example

```astro
<BaseLayout title="Kodamas" description="…">…sections…</BaseLayout>
```

## Notes

Lives in `src/layouts/` (Astro’s standard place for templates).

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
