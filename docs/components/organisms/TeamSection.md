# TeamSection

**Level:** Organism · **File:** `src/components/organisms/TeamSection.astro`

## What it is

The founders side by side. Has a heading (“Our team”) only screen readers hear.

## When to use it

Right after the hero, on the same background, so it adds space only below itself.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| (content) | PersonCards | — | The people. |

## Variants

Two columns (352px max each, 64px apart); one column on phones.

## Tokens used

`--layout-team-column`, `--space-8`, `--space-9`, `--space-section`

## Example

```astro
<TeamSection><PersonCard … /><PersonCard … /></TeamSection>
```

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
