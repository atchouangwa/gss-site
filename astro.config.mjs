import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://gsscorporate.com',
  // Industry pages stay out of the sitemap (and are noindexed) until their copy is approved.
  // /founder/ and /leadership/ are now redirects to sections of the About page.
  integrations: [sitemap({ filter: (page) => !/\/(industries|founder|leadership)\//.test(page) })],
  adapter: vercel(),
  build: {
    format: 'directory',
  },
});
