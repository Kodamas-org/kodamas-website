# PersonCard

**Level:** Molecule · **File:** `src/components/molecules/PersonCard.astro`

## What it is

A team member: drop-shaped photo, name, role with a linked organisation, nationality with a flag.

## When to use it

In TeamSection, one per founder.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `name` | text | — | Full name (also the photo description). |
| `photo` | image path | — | Leave out for a placeholder. |
| `role` | text | — | Job title before the organisation. |
| `org` | { label, href } | — | Linked organisation, e.g. @HappyCow. |
| `nationality` | text | — | Shown in semibold. |
| `flag` | emoji | — | Before the nationality; hidden from screen readers. |

## Variants

One centred layout. Name uses Heading `m`.

## Tokens used

`--space-2`, `--space-4`

## Example

```astro
<PersonCard name="Daniela Contessa" role="Former Head of Product" org={{ label: "@HappyCow", href: "…" }} nationality="Italian" flag="🇮🇹" />
```

## Notes

Uses atoms: Avatar, Heading, Text, Link.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
