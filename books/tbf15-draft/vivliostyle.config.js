/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
export default {
  title: 'AstroとVivliostyle CLIでWeb&出版物ハイブリッド開発',
  author: 'spring-raining <harusamex.com@gmail.com>',
  language: 'ja',
  size: 'JIS-B5',
  entry: [
    {
      rel: 'cover',
      path: 'cover.html',
      imageSrc: './P1.png',
      imageAlt: '表紙',
      pageBreakBefore: 'verso',
    },
    { rel: 'contents', path: 'index.html' },
    'node_modules/www/dist/article/raw/tbf15/00_まえがき/index.html',
    'node_modules/www/dist/article/raw/tbf15/10_webと出版物のハイブリッド開発とは/index.html',
    'node_modules/www/dist/article/raw/tbf15/20_node-js-npmを使った開発とファイル構成/index.html',
    'node_modules/www/dist/article/raw/tbf15/30_原稿を書く/index.html',
    'node_modules/www/dist/article/raw/tbf15/40_出版物として出力する/index.html',
    'node_modules/www/dist/article/raw/tbf15/50_cssでデザインする/index.html',
    'node_modules/www/dist/article/raw/tbf15/90_あとがき/index.html',
    {
      rel: 'cover',
      path: 'back-cover.html',
      imageSrc: './P4.png',
      imageAlt: '裏表紙',
    },
  ],
  theme: [
    {
      specifier: '../../themes/tbf15/node_modules/@vivliostyle/theme-base',
      import: 'theme-basic.css',
    },
    '../../themes/tbf15',
  ],
  output: [
    './output.pdf',
    // './output.epub',
    {
      path: './book',
      format: 'webpub',
    },
  ],
  workspaceDir: '.vivliostyle',
  cover: './P1.png',
  copyAsset: {
    includes: ['node_modules/www/dist'],
    excludes: ['node_modules/www/dist/article'],
  },
};
