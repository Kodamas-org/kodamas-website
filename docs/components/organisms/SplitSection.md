# SplitSection

**Level:** Organism · **File:** `src/components/organisms/SplitSection.astro`

## What it is

A two-column section on the navy background: a large heading on the left and content on the right.

## When to use it

“Keep Going” (`display-l` heading, text on the right) and “Why is streamlining processes early on a good idea?” (`heading-1`, centred, with a StatQuote). Use it for any heading-plus-content block.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `title` | text | — | The heading (an h2). |
| `id` | text | — | Unique id for the heading. |
| `headingSize` | `display-l` · `heading-1` | `display-l` | Size of the heading. |
| `align` | `start` · `center` | `start` | Vertical alignment of the two columns. |
| (content) | anything | — | The right-hand column. |

## Variants

Two columns on desktop; stacks on tablet and mobile.

## Tokens used

`--layout-container-max`, `--layout-gutter`, `--space-10`, `--space-4`, `--space-7`, `--space-9`

## Example

```astro
<SplitSection title="Keep Going" id="keep-going-title"><Text size="xl">…</Text></SplitSection>
```

## Notes

This one component replaces the separate KeepGoingSection and WhyStreamlineSection from the plan, because both share the same layout.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
