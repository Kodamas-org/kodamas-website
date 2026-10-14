# Component documentation

One page per component, in plain language. Components follow atomic design: **atoms** are the smallest pieces, **molecules** combine atoms, **organisms** are full page sections, and the **template** wraps a whole page.

The system comes from the approved homepage design (formerly Test Home): one navy canvas with a single bright aqua moment per page, Funnel Display Light against Bold, editorial section numbers, the drop as the visual system, and motion with meaning that is always pausable and off for reduced motion.

All components are shown live at `/styleguide`, except Hero, NameHero and PageIntro, which hold a page’s h1 and are shown on `/`, `/about` and `/blogfolio`, and ArticleBody, shown on the articles and the legal page. Token values are listed in [design-tokens.md](../design-tokens.md).

## Shared data and styles

Things that appear in several places live in one place, so a change there shows everywhere:

- `src/data/navigation.ts`: page links with their labels (`pages`), the two actions (`actions.connect`, `actions.bookCall`), the header and footer menus, `articleHref()`.
- `src/data/ctas.ts`: the closing calls to action, by key (pages spread them; articles name one in `cta`).
- `src/data/authors.ts`, `src/data/photos.ts`, `src/data/links.ts`.
- `src/styles/global.css`: `.drop-list` (drop bullets), `rise` (rising into place), `grain-shift` (moving film grain), `[data-avatar-morph]` (drop photo turns round on hover).

## Atoms

- [Container](atoms/Container.md) — Centres content on the 12-column grid: 1280px wide at most, plus the fluid side gutters.
- [SectionIndex](atoms/SectionIndex.md) — The editorial section number (01, 02…) with an optional uppercase label, on a hairline.
- [Heading](atoms/Heading.md) — A title in Funnel Display.
- [Text](atoms/Text.md) — Body text in Inter.
- [Highlight](atoms/Highlight.md) — Emphasis for a key phrase inside a sentence (renders `<em>`).
- [Eyebrow](atoms/Eyebrow.md) — A small uppercase semibold label that introduces a group.
- [Button](atoms/Button.md) — A pill-shaped call to action. A link when `href` is given, otherwise a `<button>`.
- [Link](atoms/Link.md) — A text link.
- [Tag](atoms/Tag.md) — An outlined capsule for a short topic label. Renders an `<li>`.
- [Drop](atoms/Drop.md) — The Kodamas drop: one square corner (top left), three rounded. Decorative, hidden from screen readers.
- [Wordmark](atoms/Wordmark.md) — The name “Kodamas” in Funnel Display, in aqua.
- [Avatar](atoms/Avatar.md) — A photo cropped to a shape, with a moving film grain, or a dashed placeholder saying a photo is needed.
- [Clock](atoms/Clock.md) — A live local-time pill with a clock icon (e.g. Italy, Japan).
- [PauseButton](atoms/PauseButton.md) — A small round pause/play button for a looping animation.
- [Grain](atoms/Grain.md) — A fine noise texture fixed over the whole page for depth. Decorative.

## Molecules

- [NavMenu](molecules/NavMenu.md) — The header navigation: text links and a call-to-action button.
- [Section](molecules/Section.md) — A page section on the 12-column grid with its section number and the one consistent section gap.
- [NumberedItem](molecules/NumberedItem.md) — A numbered list item: big number, title and short text between hairlines. Renders an `<li>`.
- [Price](molecules/Price.md) — A price between two hairlines: the amount large, duration in bold and a note in italic beside it.
- [Stat](molecules/Stat.md) — A big figure that counts up when scrolled into view, with a caption and a pink icon.
- [Citation](molecules/Citation.md) — A sourced quotation in small muted text with the source underneath.
- [Testimonial](molecules/Testimonial.md) — A client quote set large in Funnel Display Light (key phrase in `<em>` turns aqua bold) with a byline: round photo, linked name and role.
- [PersonCard](molecules/PersonCard.md) — A team member, centred: drop-shaped portrait (turns round on hover) with a flag badge, name, role with linked organisation, and nationality.
- [Profile](molecules/Profile.md) — A founder profile: large drop portrait on one side; name (Heavy) with a live clock, a personal motto set large and light, a short bio and a profile link on the other.
- [Principle](molecules/Principle.md) — One manifesto principle: a pink drop and the principle as an aqua heading, then two columns. A first paragraph in the right column reads as a pull statement; list bullets are small drops.
- [CaseStudy](molecules/CaseStudy.md) — A Blogfolio entry: drop-shaped photo on one side; case label with a pink drop, the title as an aqua link with an arrow, and a one-line summary on the other. The whole card is clickable.
- [Prose](molecules/Prose.md) — Long-form article text from Markdown: numbered parts (h2 on a hairline with a pink 01, 02…), aqua bold, drop bullets, a large pull statement for quotes.
- [TableOfContents](molecules/TableOfContents.md) — An article’s parts, numbered like Prose. Desktop: a sticky list in the left column with the part being read in aqua. Mobile: an accordion, closed by default.
- [AuthorCard](molecules/AuthorCard.md) — The author block under an article: photo in a drop (or the Kodamas symbol), “Written by”, name, role, short bio and a link.
- [Disclosure](molecules/Disclosure.md) — A native `<details>` between hairlines: summary row with a + that turns into ×, content below. Variants `action` (Read more) and `label` (contents on mobile).
- [DropLabel](molecules/DropLabel.md) — A small pink label led by a pink drop (“Welcome to our Blogfolio”, “Case_1”).
- [DropCluster](molecules/DropCluster.md) — The brand symbol: a large pink drop, an aqua outline drop and a small aqua drop, overlapping and floating slowly. Decorative.
- [WispField](molecules/WispField.md) — Kodama wisps: white-aqua flames with a blue halo and twinkling sparks. They fade in when scrolled into view, flicker and drift, and rise away as the page scrolls. Decorative.
- [Marquee](molecules/Marquee.md) — Kinetic type: two words in huge Heavy type (first outlined, second filled aqua) with a pink drop, scrolling sideways forever. Decorative.
- [FooterLink](molecules/FooterLink.md) — A footer navigation row: the label large in Funnel Display Light with ↗ on the right, between hairlines. Slides in and turns aqua on hover. Renders an `<li>`.

## Organisms

- [SiteHeader](organisms/SiteHeader.md) — The top bar: aqua wordmark (links home) and NavMenu. Sticks to the top, slides away when scrolling down and returns when scrolling up.
- [Hero](organisms/Hero.md) — The homepage opening. The giant wordmark (the page’s h1) fills the grid width exactly, letters rising one after another; below it the intro statement and actions, and the floating DropCluster.
- [NameHero](organisms/NameHero.md) — The Our Story opening: the name as an equation. Two terms (word + meaning) joined by pink drops with + and =, then the result as the giant wordmark; the final letter drops in last, in pink, with its note. Then the intro paragraph.
- [PageIntro](organisms/PageIntro.md) — The opening of a simple page or an article: optional back link, a small pink label with a drop, the h1 as a large statement, an intro paragraph and an optional meta line, rising in turn.
- [ArticleBody](organisms/ArticleBody.md) — The body of a long read: TableOfContents sticky in the left columns (accordion on mobile) beside the text in Prose. Used by articles and the legal page.
- [OfferSection](organisms/OfferSection.md) — The offer, on the bright surface: sticky aside with title, price and button; numbered items, covered tags and a closing statement on the right.
- [ProofSection](organisms/ProofSection.md) — Evidence: a large statement question, a row of counting figures between hairlines, and the sourced quotation.
- [TestimonialsSection](organisms/TestimonialsSection.md) — Client voices with a sticky aside (pink drop and 01 / 03 counter). The quote in the middle of the screen is in focus; the others step back.
- [TeamSection](organisms/TeamSection.md) — The founders: a statement line with live clocks (one line across the grid on desktop), then PersonCards side by side.
- [ClosingSection](organisms/ClosingSection.md) — The closing: a full-width kinetic Marquee, then a short message and the call to action with the marquee’s PauseButton.
- [CallToActionSection](organisms/CallToActionSection.md) — A closing invitation on the bright surface: large title on the left, message and navy button on the right.
- [SiteFooter](organisms/SiteFooter.md) — The footer: large FooterLink rows, then a bar with the sign-off wordmark, copyright and the legal link.

## Templates

- [BaseLayout](layouts/BaseLayout.md) — The page template: head, fonts, tokens, grain, header, footer and the fade-up reveal.
- [ArticleLayout](layouts/ArticleLayout.md) — The template for every long read (all Blogfolio articles, the legal page): intro, sticky contents beside the text, author block, closing call to action. Change it once, every article changes.
