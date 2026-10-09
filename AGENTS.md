# Kodamas website

Marketing site for Kodamas. `CLAUDE.md` is a symlink to this file.

## Stack

- **Astro** (static site), plain `.astro` components and CSS. No CSS framework, no UI framework.
- **Fonts:** self-hosted via Fontsource — `@fontsource-variable/funnel-display` (titles, headings, wordmark, testimonial quotes) and `@fontsource-variable/inter` (body and UI, including real italic). Do not add or substitute fonts.
- **Git:** GitHub `Kodamas-org/kodamas-website`, branch `main`. `archive/old-site` keeps the previous site.
- **Hosting:** Netlify site `hello-kodamas` (https://hello-kodamas.netlify.app), deploys automatically on every push to `main`. Build settings live in the Netlify dashboard (no `netlify.toml`): `npm run build`, publish `dist`.

## Commands

- `npm run dev` — local server at http://localhost:4321
- `npm run build` — production build into `dist/`

When starting the dev server from an agent, use background mode:

```
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status` and `astro dev logs`.

## Folder structure

```
src/
  styles/tokens.css      all design tokens (the only place raw values live)
  styles/global.css      reset, base styles, focus states, .visually-hidden
  components/atoms/      smallest pieces (Button, Link, Heading, Text, Drop…)
  components/molecules/  combinations of atoms (PersonCard, Testimonial…)
  components/organisms/  full page sections (Hero, OfferSection, SiteFooter…)
  layouts/               page templates (BaseLayout)
  pages/                 routes: index.astro, styleguide.astro, test-home.astro (design concept)
  data/links.ts          every link URL on the site
docs/
  design-tokens.md       every token, with values and usage
  components/            one Markdown file per component, by level
reference/               screenshots of the old Squarespace site (content and brand reference)
```

## Design principles

- **Current state (owner's decision):** the main homepage (`index.astro`) and its components intentionally follow the reference screenshot closely. The new design direction is being explored separately on Test Home. Do not restyle the main homepage unless asked.
- The screenshots in `reference/` are the reference for **content, brand and the purpose of each section** — not a layout specification. Do not copy Squarespace layout quirks (sizes, spacing, proportions); follow standard UI/UX practice instead.
- Keep each section's content, purpose, order and brand feel. Layout, sizing and spacing should come from the token system (consistent spacing scale, restrained type scale, defined button sizes), not from pixel-matching the screenshot.

## Test Home concept

`src/pages/test-home.astro` is an art-direction experiment: same fonts, palette and copy, new layout. It uses only the global colour, font, timing and basic spacing tokens; its sizing values are page-scoped copies (`--c-*`) and it draws its own photo placeholders, so it does not change when the main design system changes. It uses no atomic components. If it is adopted, move its values into `tokens.css`, split it into documented components, and remove the "Test Home" nav link.

## Naming

- Components: PascalCase file names (`PersonCard.astro`), one component per file, placed in the folder of its atomic level.
- CSS classes: BEM-style, prefixed with the component name (`.person-card`, `.person-card__role`, `.button--primary`).
- Variant props use short lowercase values (`size="m"`, `tone="aqua"`, `variant="inverse"`).
- Tokens: `--{category}-{name}`, e.g. `--color-aqua-glow`, `--font-size-heading-1`, `--space-5`, `--radius-l`. Colour palette names are descriptive (`midnight-navy`, `pink-deep`); role tokens describe purpose (`--color-surface-pink`, `--color-text-on-light`).

## Token rules

- Components use **tokens only**: every colour, font, size, space, radius, shadow, duration and z-index is a `var(--…)` from `src/styles/tokens.css`. Never write hex values, px/rem sizes or durations in a component.
- Need a new value? Add a token to `tokens.css` first, then use it.
- Allowed exceptions: the two breakpoints in media queries (`64rem` tablet, `48rem` mobile — media queries cannot read tokens), structural values (`0`, `100%`, `1fr`, `auto`), SVG icon coordinates, and the glow geometry inside `AnimatedBackdrop`.
- Responsive size changes go in the tablet/mobile overrides at the bottom of `tokens.css` where possible.

## Accessibility rules

- One `h1` per page; headings in order. Choose `Heading` `level` by structure and `size` by design.
- Text must meet WCAG AA contrast (4.5:1 normal, 3:1 large). Pink surfaces carrying text use `--color-surface-pink` (`pink-deep`). Check new pairings before using them.
- Every interactive element keeps the global `:focus-visible` outline. Surfaces set `--focus-color` (`--color-focus-on-dark` or `--color-focus-on-light`).
- Images need meaningful `alt`; decorative shapes get `aria-hidden="true"`.
- Motion must be pausable and respect `prefers-reduced-motion`.

## Content rules

- Copy comes from the reference screenshots or from the owner, word for word. Never invent copy; if text is missing or unreadable, ask.
- Missing photos use the `Avatar` placeholder; missing URLs stay `'#'` in `src/data/links.ts`.

## Documentation rule

**Whenever a component changes, update in the same commit:**

1. its file in `docs/components/{level}/{Name}.md` (props, variants, tokens used, example),
2. its demo on the `/styleguide` page (`src/pages/styleguide.astro`),
3. `docs/design-tokens.md` if tokens were added or changed.

A new component needs all three plus an entry in `docs/components/README.md`.

## Git and deploy rules

- Commit at the end of each piece of work with a clear message.
- **Ask the owner before every push** — a push to `main` deploys to Netlify.
- Never force-push. Never delete the GitHub repo or the Netlify site.

## Astro documentation

Full documentation: https://docs.astro.build

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Styling](https://docs.astro.build/en/guides/styling/)
