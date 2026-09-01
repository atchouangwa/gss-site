import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://gsscorporate.com',
  integrations: [sitemap()],
  adapter: node({ mode: 'standalone' }),
  build: {
    format: 'directory',
  },
});
