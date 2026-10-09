# Component documentation

One page per component, in plain language. Components follow atomic design: **atoms** are the smallest pieces, **molecules** combine atoms, **organisms** are full page sections, and the **template** wraps a whole page.

All of them are shown live, with their variants, at `/styleguide` on the site. Token values are listed in [design-tokens.md](../design-tokens.md).

## Atoms

- [Wordmark](atoms/Wordmark.md) — The word “Kodamas” set in Funnel Display Bold.
- [Drop](atoms/Drop.md) — The Kodamas drop: a shape with one square corner (top left) and three rounded corners.
- [Button](atoms/Button.md) — A pill-shaped call to action.
- [Pill](atoms/Pill.md) — A small outlined capsule for a short label, such as a price.
- [Link](atoms/Link.md) — A text link.
- [Heading](atoms/Heading.md) — A title.
- [Text](atoms/Text.md) — Body text in Inter.
- [Highlight](atoms/Highlight.md) — A bold phrase with a thick pink underline.
- [Avatar](atoms/Avatar.md) — A portrait photo cropped to a shape.
- [Eyebrow](atoms/Eyebrow.md) — A small semibold label that sits above a title to introduce it.

## Molecules

- [NavMenu](molecules/NavMenu.md) — The header navigation: text links and a call-to-action button.
- [PersonCard](molecules/PersonCard.md) — A team member: drop-shaped photo, name, role with a linked organisation, and nationality with a flag.
- [FeatureCard](molecules/FeatureCard.md) — An outlined card with a title and a short description.
- [GlassCard](molecules/GlassCard.md) — A frosted, see-through card that lets the animated background show through.
- [StatQuote](molecules/StatQuote.md) — A quoted statistic in an outlined card, with a pink drop on its top-left corner and the source underneath.
- [Testimonial](molecules/Testimonial.md) — A client quote in a pink card, with a round photo overlapping the card’s left edge, the author’s name as a link, and their role.
- [FooterLink](molecules/FooterLink.md) — A footer navigation item: a small pink drop followed by an arrow link.
- [AnimatedBackdrop](molecules/AnimatedBackdrop.md) — The aqua background with soft teal glows that drift slowly, plus a small round pause/play button in the bottom-right corner.

## Organisms

- [SiteHeader](organisms/SiteHeader.md) — The top bar: small aqua wordmark (links home) on the left, navigation on the right.
- [Hero](organisms/Hero.md) — The opening section: the giant two-tone “Kodamas” wordmark (the page’s h1) with a pink drop tucked behind the K, then the intro paragraph.
- [TeamSection](organisms/TeamSection.md) — The founders shown side by side.
- [InfoBand](organisms/InfoBand.md) — A full-width teal strip with one centred line of text.
- [OfferSection](organisms/OfferSection.md) — The offer: a pink card with eyebrow, title, price, duration, note, included items, a closing line and a booking button, followed by optional extra cards, all on the animated aqua background.
- [SplitSection](organisms/SplitSection.md) — A two-column section on the navy background: a large heading on the left and content on the right.
- [TestimonialsSection](organisms/TestimonialsSection.md) — A stack of client testimonials on the animated aqua background.
- [SiteFooter](organisms/SiteFooter.md) — The page footer: a teal card with the white wordmark, copyright line, “Connect With Us” button and four footer links, then an aqua strip with the legal link.

## Template

- [BaseLayout](layouts/BaseLayout.md) — The page template.
