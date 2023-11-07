import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
// https://github.com/withastro/roadmap/pull/381
import relativeLinks from 'astro-relative-links';
// import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import remarkBlockCodeWithCaption from './plugins/remark-code-with-caption';
import { watchModuleFiles } from './plugins/watch-module-files';

// https://astro.build/config
export default defineConfig({
  markdown: {
    // syntaxHighlight: 'prism',
    shikiConfig: {
      theme: 'css-variables',
      wrap: null,
    },
    remarkPlugins: [remarkBlockCodeWithCaption],
  },
  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),
    relativeLinks(),
    watchModuleFiles(),
  ],
  vite: {
    optimizeDeps: {
      exclude: ['fsevents', '@napi-rs/canvas-darwin-x64'],
    },
  },
});
