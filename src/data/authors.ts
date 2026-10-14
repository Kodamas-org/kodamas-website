// The authors of Blogfolio articles, shown in the author block under each
// article. An article's `author` can be a key below or the person's full
// name (as the blog writer drafts use); anything else falls back to Kodamas.
// Copy is taken from the site (homepage hero, Our Story).
import type { ImageMetadata } from 'astro';
import { links } from './links';
import { photos } from './photos';

export interface Author {
	name: string;
	role: string;
	bio: string;
	// No photo: the Kodamas symbol is shown instead
	photo?: ImageMetadata;
	link: { label: string; href: string };
}

export const authors = {
	kodamas: {
		name: 'Kodamas',
		role: 'When your app and team outgrow their DIY phase, we build the tools and processes that keep your people happy and product & growth moving together.',
		bio: 'Ko, “co” meaning together, + Dama, “lady” in Italian, = Kodama, in Japanese the spirit of the tree, + an “S”, because we are two : ) These meanings mirror Daniela’s Italian heritage and Emma’s expat experience in Japan.',
		link: { label: 'Our Story', href: links.ourStory },
	},
	emma: {
		name: 'Emma Cebuliak',
		role: 'Director of Business Growth at HappyCow',
		bio: 'From the Canadian Rocky Mountains 🏔️ 12 years in Japan. Psychology grad. Obsessively organized. Found sitting on a bicycle or on the floor.',
		photo: photos.emma,
		link: { label: 'Visit LinkedIn Profile', href: links.emmaLinkedIn },
	},
	daniela: {
		name: 'Daniela Contessa',
		role: 'Fractional Head of Product, Delivery Manager & Design Lead',
		bio: 'From some of the biggest cities in the world to the countryside growing her own vegetables 🥕🥦🧅. Loves implementing incident & bug reporting flows.',
		photo: photos.daniela,
		link: { label: 'Visit LinkedIn Profile', href: links.danielaLinkedIn },
	},
} satisfies Record<string, Author>;

export type AuthorKey = keyof typeof authors;

/** The author for an article's `author` value: a key or a full name. */
export function getAuthor(value?: string): Author {
	const v = value?.trim().toLowerCase() ?? '';
	const found = Object.entries(authors).find(([key, a]) => key === v || a.name.toLowerCase() === v);
	return found ? found[1] : authors.kodamas;
}
