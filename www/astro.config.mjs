import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://github.com/withastro/roadmap/pull/381
import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: 'prism',
  },
  integrations: [mdx(), tailwind(), relativeLinks()],

  vite: {
    optimizeDeps: {
      exclude: ['fsevents', '@napi-rs/canvas-darwin-x64'],
    },
  },
});
