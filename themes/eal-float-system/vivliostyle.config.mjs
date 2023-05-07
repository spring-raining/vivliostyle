export default {
  language: 'en',
  theme: ['@vivliostyle/theme-base@beta', '.', 'example/main.css'],
  entry: ['example/index.md'],
  workspaceDir: '.vivliostyle',
  size: '150mm,150mm',
  output: [
    'book.pdf',
    {
      path: './book',
      format: 'webpub',
    },
  ],
};
