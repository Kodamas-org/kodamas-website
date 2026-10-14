// Content collections. Blog articles and case studies live as Markdown in
// src/content/blog/, one file per article; the file name is the URL slug
// (/blogfolio/<slug>). The frontmatter matches the kodamas-blog-writer drafts
// in content-drafts/articles/, so a final draft can be copied in as is
// (extra draft fields such as keywords or why/relevance/learning are ignored).
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: ({ image }) =>
		z.object({
			// The article's h1
			title: z.string(),
			// Shorter title for the Blogfolio list (defaults to title)
			cardTitle: z.string().optional(),
			// The line under the title, also the summary in the Blogfolio list
			summary: z.string().optional(),
			// <title> and meta description for search engines
			seoTitle: z.string().optional(),
			description: z.string(),
			// Small label above the title (e.g. "Case_1")
			label: z.string().optional(),
			date: z.coerce.date().optional(),
			author: z.string().optional(),
			tags: z.array(z.string()).optional(),
			// Path relative to the Markdown file, e.g. ../../assets/blog/<slug>.jpg
			photo: image().optional(),
			photoAlt: z.string().optional(),
			// Which part of the photo stays in the drop crop (object-position)
			photoFocus: z.string().optional(),
			// Position in the Blogfolio list (lower first); then newest first
			order: z.number().optional(),
			// Drafts are not built
			status: z.enum(['draft', 'final']).default('final'),
			// The closing call to action (defaults to the general one)
			cta: z
				.object({
					title: z.string(),
					body: z.array(z.string()),
				})
				.optional(),
		}),
});

export const collections = { blog };
