# TeamSection

**Level:** Organism · **File:** `src/components/organisms/TeamSection.astro`

## What it is

The founders: a statement line with live clocks (one line across the grid on desktop), then PersonCards side by side.

## When to use it

Homepage.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `num` | text | — | Section number. |
| `title` | text | — | Visually hidden h2. |
| slot "lead" | content | — | The statement (with Clock; wrap a word and its clock in `<span class="nowrap">`). |
| (content) | PersonCards | — | The people. |

## Variants

Cards stack on mobile.

## Tokens used

`--font-display`, `--font-size-statement`, `--font-size-statement-fit`, `--font-weight-light`, `--layout-team-column`, `--letter-spacing-display`, `--line-height-heading`, `--space-10`, `--space-8`

## Example

```astro
<TeamSection num="04" title="Our team">…</TeamSection>
```

## Notes

Uses: Section, PersonCard, Clock.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
