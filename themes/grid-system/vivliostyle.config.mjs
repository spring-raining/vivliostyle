export default {
  language: 'en',
  theme: ['node_modules/@vivliostyle/theme-base', '.'],
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
