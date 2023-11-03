/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
export default {
  title: 'tbf15-draft',
  author: 'spring-raining <harusamex.com@gmail.com>',
  language: 'ja',
  size: 'JIS-B5',
  entry: ['manuscript.md'],
  theme: './node_modules/tbf15-theme',
  output: [
    './output.pdf',
    {
      path: './book',
      format: 'webpub',
    },
  ],
  workspaceDir: '.vivliostyle',
  // cover: './cover.png',
};
