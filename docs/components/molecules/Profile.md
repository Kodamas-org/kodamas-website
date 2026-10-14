# Profile

**Level:** Molecule · **File:** `src/components/molecules/Profile.astro`

## What it is

A founder profile: large drop portrait on one side; name (Heavy) with a live clock, a personal motto set large and light, a short bio and a profile link on the other.

## When to use it

Our Story. Alternate `reverse` between profiles.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `name` | text | — | Display name (heading). |
| `fullName` | text | name | Used for the photo placeholder and alt. |
| `photo` | imported image · URL | — | Photo (from `src/data/photos.ts`); placeholder without it. |
| `zone` | IANA time zone | — | Clock next to the name. |
| `link` | { label, href } | — | Profile link with →. |
| `reverse` | true / false | false | Portrait on the right. |
| `level` | 2 · 3 | 3 | Name heading level. |
| slot "quote" | text | — | The motto, without quotation marks; `<em>` for the key phrase. |
| (content) | paragraphs | — | The bio. |
| slot "more" | a `<ul>` | — | Optional. Hidden behind “Read more about {name}” (a native `<details>` between hairlines, + turning into ×); bullets are small drops. |

## Variants

Normal or reversed. Photo and text are top-aligned, so opening “Read more” only grows downwards. Stacks on mobile.

## Tokens used

`--border-width-medium`, `--border-width-thin`, `--color-accent`, `--color-rule`, `--duration-base`, `--ease-standard`, `--font-display`, `--font-size-heading-2`, `--font-size-quote-long`, `--font-weight-bold`, `--font-weight-heavy`, `--font-weight-light`, `--font-weight-semibold`, `--gradient-drop`, `--layout-col-gap`, `--layout-text-max`, `--letter-spacing-display`, `--line-height-none`, `--line-height-snug`, `--radius-drop`, `--radius-round`, `--size-avatar-l`, `--size-icon-s`, `--size-tap-min`, `--size-underline-offset`, `--space-2`, `--space-3`, `--space-4`, `--space-5`, `--space-6`

## Example

```astro
<Profile name="Emma" zone="Asia/Tokyo" link={{ label: "Visit LinkedIn Profile", href: "#" }}>…</Profile>
```

## Notes

“Read more” is a Disclosure; its list bullets come from `.drop-list` (global.css). The photo turns round on hover via `data-avatar-morph`.

Uses atoms: Avatar, Clock, Link.

See it live at `/styleguide`. Token values: [design-tokens.md](../../design-tokens.md).
