export default {
  language: 'en',
  theme: ['node_modules/@vivliostyle/theme-base', '.'],
  entry: ['example/index.md'],
  workspaceDir: '.vivliostyle',
  output: [
    'book.pdf',
    {
      path: './book',
      format: 'webpub',
    },
  ],
};
