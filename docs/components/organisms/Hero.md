# Hero

**Level:** Organism · **File:** `src/components/organisms/Hero.astro`

## What it is

The opening section: the two-tone “Kodamas” wordmark (the page’s h1) with a pink drop tucked behind the K, then the intro paragraph. The K and the paragraph share the container’s left edge; the drop sits in the page margin.

## When to use it

Once, at the top of the homepage.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| (content) | text | — | Intro paragraph (lead size, max 640px wide). Can include a Highlight. |

## Variants

Wordmark 72–200px; drop shrinks on tablet and mobile.

## Tokens used

`--layout-gutter`, `--layout-text-max`, `--overlap-hero-drop`, `--space-6`, `--space-8`, `--space-section`

## Example

```astro
<Hero>When your app and team <Highlight>outgrow their DIY phase</Highlight>, …</Hero>
```

## Notes

Uses: Wordmark (`xl`, two-tone), Drop (`l`), Text (`l`).

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
