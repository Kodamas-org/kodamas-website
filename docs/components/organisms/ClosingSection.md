# ClosingSection

**Level:** Organism · **File:** `src/components/organisms/ClosingSection.astro`

## What it is

The closing: a full-width kinetic Marquee, then a short message and the call to action with the marquee’s PauseButton.

## When to use it

Last section of the homepage.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `num` | text | — | Section number. |
| `title` | text | — | Visually hidden h2. |
| `words` | { outline, fill } | — | Marquee words. |
| `cta` | { label, href } | — | Aqua button. |
| (content) | paragraphs | — | Message; the first `<p>` is the lead-in. |

## Variants

One.

## Tokens used

`--font-display`, `--font-size-heading-3`, `--font-size-lead`, `--font-weight-bold`, `--layout-col-gap`, `--line-height-lead`, `--space-4`, `--space-7`, `--space-9`

## Example

```astro
<ClosingSection num="05" title="Keep Going" words={{ outline: "Keep", fill: "Going" }} cta={…}>…</ClosingSection>
```

## Notes

Uses: Section, Marquee, Button, PauseButton.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
