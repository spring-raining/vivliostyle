/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--vs-font-family)',
        mono: 'var(--vs--monospace-font-family)',
      },
    },
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true,
  },
};
