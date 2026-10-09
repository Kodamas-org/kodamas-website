# SplitSection

**Level:** Organism · **File:** `src/components/organisms/SplitSection.astro`

## What it is

A two-column section on navy: section title (Heading `l`) on the left, content (max 640px) on the right.

## When to use it

“Keep Going” and “Why is streamlining processes early on a good idea?”. Two SplitSections in a row share one section gap instead of doubling it.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `title` | text | — | Heading (h2). |
| `id` | text | — | Unique id for the heading. |
| `align` | `start` · `center` | `start` | Vertical alignment of the columns. |
| (content) | anything | — | Right-hand column. |

## Variants

Two columns on desktop; stacks on tablet and mobile.

## Tokens used

`--layout-text-max`, `--space-4`, `--space-6`, `--space-9`, `--space-section`

## Example

```astro
<SplitSection title="Keep Going" id="keep-going-title"><Text size="l">…</Text></SplitSection>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
