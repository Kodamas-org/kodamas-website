# BaseLayout

**Level:** Template · **File:** `src/layouts/BaseLayout.astro`

## What it is

The page template. It sets up the document (language, title, description), loads the fonts, tokens and base styles, adds a “Skip to content” link for keyboard users, lays the Grain texture over the page, and wraps the page between SiteHeader and SiteFooter. It preloads the two fonts every page shows on load (Funnel Display and Inter, latin, variable) so text appears sooner. It links the favicon (`public/favicon.svg`: a kodama wisp, a round orb of light on navy, that breathes where the browser animates SVG favicons, Firefox today; still elsewhere), the home-screen icon (`public/apple-touch-icon.png`, a still 180px render of it) and the navy theme colour. It also runs the fade-up reveal: any element with `data-reveal` fades up when scrolled into view (only when motion is allowed; content stays visible otherwise).

## When to use it

Every page starts with it.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `title` | text | — | Browser tab title. |
| `description` | text | — | Search-result description. |
| `noindex` | true / false | false | Hide the page from search engines (used by the styleguide). |
| (content) | page sections | — | Goes inside `<main>`. |

## Variants

One template.

## Tokens used

`--color-aqua-glow`, `--color-midnight-navy`, `--color-white`, `--radius-pill`, `--space-2`, `--space-4`, `--z-grain`

## Example

```astro
<BaseLayout title="Kodamas" description="…">…sections…</BaseLayout>
```

## Notes

Lives in `src/layouts/` (Astro’s standard place for templates).

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
