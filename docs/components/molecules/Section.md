# Section

**Level:** Molecule · **File:** `src/components/molecules/Section.astro`

## What it is

A page section on the 12-column grid with its section number and the one consistent section gap.

## When to use it

Wrap every page section in it (the organisms already do).

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `id` | text | — | Section id. |
| `labelledby` | id | — | The id of its heading. |
| `tone` | `navy` · `bright` | `navy` | bright: aqua with navy text; the one bright moment per page. It switches numbers, accent and focus colours for the light surface. |
| `spacing` | `top` · `block` | `top` | top: gap above only (navy sections follow each other). block: gap above and below (bright sections, last section). |
| num / label / rule | — | — | Passed to SectionIndex. `rule` defaults to on for navy, off for bright. |
| slot "full" | content | — | Full-bleed content after the container (e.g. a marquee). |
| slot "after" | content | — | A second container after the full-bleed content. |

## Variants

Two tones, two spacings.

## Tokens used

`--color-focus-on-light`, `--color-midnight-navy`, `--color-number-on-light`, `--color-surface-bright`, `--color-text-on-light`, `--layout-section`

## Example

```astro
<Section labelledby="manifesto-title" num="02">…</Section>
```

## Notes

Uses atoms: Container, SectionIndex.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
