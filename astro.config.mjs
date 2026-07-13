// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
	site: isGitHubPages ? 'https://romani1173.github.io' : 'http://localhost:4321',
	base: isGitHubPages ? '/porfolio-astrofoto' : '/',
	integrations: [mdx(), sitemap()],
});
