# PageIntro

**Level:** Organism · **File:** `src/components/organisms/PageIntro.astro`

## What it is

The opening of a simple page: a small pink label with a drop, the page title as the h1 set as a large statement (a key word in `<em>` turns aqua bold), and an intro paragraph on the right.

## When to use it

Pages that open with a title and a short intro, such as Blogfolio (its title is the h1). Shown on `/blogfolio`, not on the styleguide.

## Props

| Prop | Options | Default | What it does |
|---|---|---|---|
| `label` | text | — | The small label above the title. |
| slot "title" | text | — | The h1 content; `<em>` for the key word. |
| (content) | text | — | Intro paragraph. |

## Variants

Label, title and intro rise in turn, half a beat (`--duration-beat`) apart; no motion for reduced motion.

## Tokens used

`--color-number`, `--duration-beat`, `--duration-rise`, `--ease-standard`, `--font-size-lead`, `--layout-text-max`, `--line-height-lead`, `--space-3`, `--space-6`, `--space-7`, `--space-8`

## Example

```astro
<PageIntro label="Welcome to our Blogfolio">
	<Fragment slot="title">Notes from the <em>Doing</em></Fragment>
	Before Kodamas, we helped build…
</PageIntro>
```

## Notes

Uses: Container, Drop, Eyebrow, Heading.

See it live at `/blogfolio`. Token values: [design-tokens.md](../../design-tokens.md).
