// Every link that appears with the same label in more than one place: the
// site's pages, the two actions, and the header and footer menus. Change a
// label here and it changes everywhere. URLs come from links.ts.
import { links } from './links';

export const pages = {
	ourStory: { label: 'Our Story', href: links.ourStory },
	blogfolio: { label: 'Blogfolio', href: links.blogfolio },
	privacyTerms: { label: 'Privacy Policy & Terms of Service', href: links.privacyTerms },
};

export const actions = {
	// short: the label on small phones (must be the start of label)
	connect: { label: 'Connect With Us', short: 'Connect', href: links.connect },
	bookCall: { label: 'Book a call', href: links.bookCall },
};

/** The address of an article (its Markdown file name in src/content/blog/). */
export const articleHref = (slug: string) => `${links.blogfolio}/${slug}`;

/** The header menu (the Connect button is added by SiteHeader). */
export const mainNav = [pages.blogfolio, pages.ourStory];

/** The footer's large navigation rows. */
export const footerNav = [
	pages.ourStory,
	pages.blogfolio,
	{ label: 'Emma’s LinkedIn', href: links.emmaLinkedIn },
	{ label: 'Daniela’s LinkedIn', href: links.danielaLinkedIn },
];
