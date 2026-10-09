# Hero

**Level:** Organism · **File:** `src/components/organisms/Hero.astro`

## What it is

The opening section: the giant two-tone “Kodamas” wordmark (the page’s h1) with a pink drop tucked behind the K, then the intro paragraph.

## When to use it

Once, at the top of the homepage.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| (content) | text | — | The intro paragraph. Can include a Highlight. |

## Variants

On phones the paragraph loses its indent and the drop gets smaller.

## Tokens used

`--indent-hero-intro`, `--layout-header-gutter`, `--layout-page-max`, `--layout-text-max`, `--overlap-hero-drop`, `--space-10`, `--space-7`, `--space-9`

## Example

```astro
<Hero>When your app and team <Highlight>outgrow their DIY phase</Highlight>, …</Hero>
```

## Notes

Uses: Wordmark (`xl`, two-tone), Drop (`l`), Text (`xl`).

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
