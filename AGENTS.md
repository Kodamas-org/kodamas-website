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
  pages/                 routes: index.astro (home), about.astro (Our Story), blogfolio/index.astro (Blogfolio),
                         blogfolio/[slug].astro (one page per article), styleguide.astro
  content/blog/          published articles, one Markdown file each (schema in src/content.config.ts)
  lib/                   small helpers (inline-markdown.ts)
  data/links.ts          every link URL on the site
  data/photos.ts         every portrait, imported from assets/people/
  assets/                photos: people/ (portraits) and blog/ (article photos, named like the article)
public/_redirects        Netlify redirects from the old Squarespace addresses
docs/
  design-tokens.md       every token, with values and usage
  components/            one Markdown file per component, by level
reference/               screenshots of the old Squarespace site (content and brand reference)
content-drafts/          blog articles, interview notes and LinkedIn posts (never published, outside src/)
.claude/skills/          project skills (kodamas-blog-writer: writes the content-drafts articles)
```

## Design direction (decided)

The homepage (formerly Test Home) is the design direction for the whole site, and it is now built from the shared system: tokens in `src/styles/tokens.css`, components in `src/components/`, documented in `docs/` and shown on `/styleguide`. Build every new page from these parts (see `about.astro` for a page built entirely from them). Key traits:

- One dark navy canvas; aqua is reserved for a single bright moment per page (`Section tone="bright"`: the offer on the homepage, the call to action on Our Story). Do not alternate section background colours.
- Typography: Funnel Display Light for large statements against Bold/Heavy for emphasis; Inter for body and UI. Key phrases highlighted in aqua bold.
- Editorial details: small pink section numbers (01, 02…) on hairline rules, generous negative space, an asymmetric 12-column grid (1280px max), a subtle grain texture.
- The drop shape as the visual system (symbol cluster, portrait masks, markers, bullets).
- Motion with meaning (count-ups, focus on the quote being read, kinetic type, live clocks, the name equation), always pausable and off for reduced motion.
- One consistent gap between sections (`--layout-section`, 64 → 120px), applied by `Section`.

If a new page needs something the system lacks, add it as a documented component (and tokens) first, then use it.

## Reference screenshots

The screenshots in `reference/` are the reference for **content, brand and the purpose of each section**, not a layout specification. Keep the copy word for word; do not copy Squarespace layout.

## Naming

- Components: PascalCase file names (`PersonCard.astro`), one component per file, placed in the folder of its atomic level.
- Styles are scoped per component (Astro's attribute strategy): a parent cannot style a class it passes to a child. Use a wrapper element, or `.parent :global(.child)`.
- CSS classes: BEM-style, prefixed with the component name (`.person-card`, `.person-card__name`, `.button--navy`).
- Variant props use short lowercase values (`size="m"`, `tone="bright"`, `variant="navy"`).
- Tokens: `--{category}-{name}`, e.g. `--color-aqua-glow`, `--font-size-heading-2`, `--space-5`, `--radius-drop`. Colour palette names are descriptive (`midnight-navy`, `pink-ink`); role tokens describe purpose (`--color-surface-bright`, `--color-text-on-light`).

## Token rules

- Components use **tokens only**: every colour, font, size, space, radius, shadow, duration and z-index is a `var(--…)` from `src/styles/tokens.css`. Never write hex values, px/rem sizes or durations in a component.
- Need a new value? Add a token to `tokens.css` first, then use it.
- Allowed exceptions: the breakpoints in media queries (`64rem` tablet, `48rem` mobile, `22.5rem` small phone — media queries cannot read tokens; use the small-phone one only for fixes that 320px screens need), structural values (`0`, `100%`, `1fr`, `auto`), SVG icon coordinates, the fixed shape geometry inside `DropCluster` and `WispField`, and animation keyframe offsets (percentages and rotations).
- Responsive size changes go in the tablet/mobile overrides at the bottom of `tokens.css` where possible.

## Accessibility rules

- One `h1` per page; headings in order. Choose `Heading` `level` by structure and `size` by design.
- Text must meet WCAG AA contrast (4.5:1 normal, 3:1 large). Checked pairings are listed in `docs/design-tokens.md`; check new pairings before using them.
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

## Blog articles

- Each article is a Markdown file in `src/content/blog/`; the file name is the slug, so `my-article.md` is published at `/blogfolio/my-article` and listed on `/blogfolio` automatically.
- The frontmatter is the kodamas-blog-writer format (`content-drafts/README.md`); the fields the site uses are in `src/content.config.ts` (`title`, `description`, `summary`, `cardTitle`, `seoTitle`, `label`, `date`, `author`, `photo` (path to `src/assets/blog/<slug>.jpg`, relative to the Markdown file), `photoAlt`, `photoFocus`, `order`, `status`, `cta`). Other draft fields are ignored.
- To publish a final draft: copy `content-drafts/articles/<slug>.md` into `src/content/blog/`, add `summary` (the line under the title), and turn `<!-- IMAGE: … -->` notes into real images or remove them. `status: draft` keeps an article out of the build.
- Articles start at `##` (the page title is the h1); every `##` becomes a numbered part. A `>` quote is the pull statement.
- When an old address changes, add a line to `public/_redirects`.

## Astro documentation

Full documentation: https://docs.astro.build

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Styling](https://docs.astro.build/en/guides/styling/)
