// The authors of Blogfolio articles, shown in the author block under each
// article. An article's `author` can be a key below or the person's full
// name (as the blog writer drafts use); anything else falls back to Kodamas.
// Emma's and Daniela's bios come from Our Story; Kodamas' role and bio
// (from the manifesto, in the third person) were agreed with the owners.
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
		role: 'Growth, product and operations consultancy for startups and small teams',
		bio: 'Delivery isn’t about control; it’s about clarity. Kodamas builds lean, empathetic frameworks that help ambitious teams focus on what matters, anticipate what’s next, and ship with confidence - in a way that empowers, not diminishes.',
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
