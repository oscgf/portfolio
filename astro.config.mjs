import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import remarkExternalLinks from 'remark-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://oscgf.github.io',
  base: '/portfolio',
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [ 
      [remarkExternalLinks, { target: '_blank', rel: 'noopener noreferrer' }],
    ],
  },
});