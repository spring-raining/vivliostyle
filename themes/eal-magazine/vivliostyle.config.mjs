export default {
  language: 'en',
  theme: ['@vivliostyle/theme-base@beta', '../eal-float-system', '.'],
  entry: ['example/index.md'],
  workspaceDir: '.vivliostyle',
  size: 'A4',
  output: [
    'book.pdf',
    {
      path: './book',
      format: 'webpub',
    },
  ],
};
