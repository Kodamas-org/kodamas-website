// The closing calls to action (CallToActionSection), each written once and
// used by key: by pages, and by articles through their `cta` frontmatter.
// Body paragraphs are inline Markdown (**bold** for the brand name).
const designSystems =
	'At **Kodamas**, we help teams design scalable systems that reduce friction, improve communication, and make collaboration effortless.';
const opsChaos = 'If your bug reporting or internal ops feel like chaos, let’s turn them into clarity.';

export const ctas = {
	// Our Story, case 1
	workflows: {
		title: 'Want to optimize your internal workflows?',
		body: [designSystems, opsChaos],
	},
	// Case 2
	b2b: {
		title: 'Want to Launch a B2B Product That Sticks?',
		body: [designSystems, opsChaos],
	},
	// Case 3
	roadmap: {
		title: 'Want to align your team around a unified roadmap?',
		body: [designSystems, 'If your plan for the future feels like chaos, let’s turn that into clarity.'],
	},
	// Blogfolio, and any article without its own
	delivery: {
		title: 'Want your delivery management to be aligned and effortless?',
		body: [
			'At **Kodamas**, we help teams move faster, collaborate better, and sale with ease.',
			'If your internal delivery ops feel like chaos, let’s turn them into clarity.',
		],
	},
};

export type CtaKey = keyof typeof ctas;
export type Cta = { title: string; body: string[] };
