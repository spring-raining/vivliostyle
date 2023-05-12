/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
module.exports = {
  title: 'CSS組版をマスター！ Vivliostyle Themeレシピ集',
  author: 'spring-raining <harusamex.com@gmail.com>',
  language: 'ja',
  size: 'A4',
  theme: '@vivliostyle/theme-base@beta',
  entry: [
    {
      rel: 'contents',
      theme: '../../themes/tbf14',
    },
    {
      path: 'manuscripts/01_maegaki.md',
      theme: '../../themes/tbf14',
    },
    {
      path: 'node_modules/www/dist/articles/grid-system/index.html',
    },
    {
      path: 'node_modules/@spring-raining/vs-theme-photo-book/example/index.md',
      theme: ['../../themes/grid-system', '../../themes/photo-book'],
    },
    {
      path: 'node_modules/www/dist/articles/eal-float-system/index.html',
    },
    {
      path: 'node_modules/@spring-raining/vs-theme-magazine/example/index.md',
      theme: ['../../themes/eal-float-system', '../../themes/magazine'],
    },
    {
      path: 'manuscripts/99_atogaki.md',
      theme: '../../themes/tbf14',
    },
  ],
  output: [
    './output.pdf',
    {
      path: './book',
      format: 'webpub',
    },
  ],
  workspaceDir: '.vivliostyle',
  includeAssets: [
    'node_modules/www/dist/**/*',
    'node_modules/@spring-raining/**/*.svg',
  ],
};
