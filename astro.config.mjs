import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://leechingfon.netlify.app',
  output: 'static',
  integrations: [sitemap()],
});
