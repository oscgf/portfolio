import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  site: 'https://oscgf.github.io',
  base: '/portfolio',
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [ [remarkToc, { heading: 'toc', maxDepth: 3 } ] ],
  },
});