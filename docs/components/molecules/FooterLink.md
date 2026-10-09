# FooterLink

**Level:** Molecule · **File:** `src/components/molecules/FooterLink.astro`

## What it is

A footer navigation item: a small pink drop followed by an arrow link.

## When to use it

In the footer’s link list.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `href` | URL | — | Where it goes. |
| (content) | text | — | Link text. |

## Variants

One style, white text.

## Tokens used

`--font-size-body-xl`, `--line-height-ui`, `--space-5`

## Example

```astro
<FooterLink href="/our-story">Our Story</FooterLink>
```

## Notes

Uses atoms: Drop (`s`, flat), Link (`arrow`, white).

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
