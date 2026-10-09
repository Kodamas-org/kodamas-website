# TeamSection

**Level:** Organism · **File:** `src/components/organisms/TeamSection.astro`

## What it is

The founders shown side by side.

## When to use it

Below the hero. Put one PersonCard per person inside. It has a heading (“Our team”) that only screen readers hear, because the design shows no visible title here.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| (content) | PersonCards | — | The people. |

## Variants

Two columns; one column on phones.

## Tokens used

`--layout-container-max`, `--layout-gutter`, `--layout-team-column`, `--space-9`

## Example

```astro
<TeamSection><PersonCard … /><PersonCard … /></TeamSection>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
