export default {
  language: 'en',
  theme: ['@vivliostyle/theme-base@beta', '.'],
  entry: ['example/index.md'],
  workspaceDir: '.vivliostyle',
  size: 'JIS-B5',
  output: [
    'book.pdf',
    {
      path: './book',
      format: 'webpub',
    },
  ],
};
