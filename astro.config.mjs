// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// The site's public address, for the absolute share-image URL. Netlify sets
	// URL to the main domain on every build, so it follows a custom domain.
	site: process.env.URL || 'https://www.kodamas.io',
});
