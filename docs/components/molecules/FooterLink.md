# FooterLink

**Level:** Molecule · **File:** `src/components/molecules/FooterLink.astro`

## What it is

A footer navigation item: a small pink drop and an arrow link.

## When to use it

In the footer link list.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `href` | URL | — | Where it goes. |
| (content) | text | — | Link text. |

## Variants

One style; each item is at least 44px tall for touch.

## Tokens used

`--font-size-body`, `--line-height-ui`, `--size-tap-min`, `--space-3`

## Example

```astro
<FooterLink href="/our-story">Our Story</FooterLink>
```

## Notes

Uses atoms: Drop (`s`, flat), Link (`arrow`, white).

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
