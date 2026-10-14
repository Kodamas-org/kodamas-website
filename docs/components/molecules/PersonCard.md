# PersonCard

**Level:** Molecule · **File:** `src/components/molecules/PersonCard.astro`

## What it is

A team member, centred: drop-shaped portrait (turns round on hover) with a flag badge, name, role with linked organisation, and nationality.

## When to use it

In TeamSection.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `name` | text | — | Name. |
| `role` | text | — | Role. |
| `org` | { label, href } | — | Linked organisation. |
| `nationality` | text | — | Shown uppercase. |
| `flag` | emoji | — | Flag badge (decorative). |
| `photo` | imported image · URL | — | Photo (from `src/data/photos.ts`); placeholder without it. |

## Variants

One.

## Tokens used

`--color-accent`, `--color-midnight-navy`, `--color-text-muted`, `--font-display`, `--font-size-heading-3`, `--font-size-lead`, `--font-size-small`, `--font-weight-bold`, `--font-weight-semibold`, `--layout-team-column`, `--letter-spacing-label`, `--line-height-snug`, `--radius-round`, `--size-avatar-l`, `--size-tap-min`, `--size-underline-offset`, `--space-2`, `--space-5`

## Example

```astro
<PersonCard name="Daniela Contessa" role="Former Head of Product" org={{ label: "@HappyCow", href: "#" }} nationality="Italian" flag="🇮🇹" />
```

## Notes

Uses atoms: Avatar.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
