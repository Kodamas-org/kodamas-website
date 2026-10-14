# AuthorCard

**Level:** Molecule · **File:** `src/components/molecules/AuthorCard.astro`

## What it is

The author block under an article, on a hairline. On the left the author’s photo in a drop (Avatar `m`), or the floating Kodamas symbol (DropCluster at avatar size) when the author is Kodamas. On the right: a small pink “Written by”, the name in Funnel Display Bold, the role in aqua, a short bio and a link (LinkedIn for a person, Our Story for Kodamas). Stacks on mobile.

## When to use it

Under every article, through ArticleBody’s `after` slot. The page picks the author with `getAuthor(data.author)`.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `author` | an Author from `src/data/authors.ts` | — | Name, role, bio, optional photo and link. |
| `label` | text | `Written by` | The small label above the name. |

## Variants

With a photo (Emma, Daniela) or with the Kodamas symbol (Kodamas). Side by side above 768px, stacked below.

## Tokens used

`--border-width-thin`, `--color-accent`, `--color-number`, `--color-rule`, `--font-display`, `--font-size-body`, `--font-size-heading-3`, `--font-size-small`, `--font-weight-bold`, `--font-weight-semibold`, `--letter-spacing-display`, `--letter-spacing-label`, `--line-height-body`, `--line-height-snug`, `--size-avatar-m`, `--space-2`, `--space-5`, `--space-6`

## Example

```astro
<AuthorCard author={getAuthor('daniela')} />
```

## Notes

Uses: Avatar, Link, DropCluster. To change a role or bio, edit `src/data/authors.ts`; the copy there comes from the homepage and Our Story.

See it live at `/styleguide` and under every article. Token values: [design-tokens.md](../../design-tokens.md).
