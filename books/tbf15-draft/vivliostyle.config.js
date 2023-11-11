/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
const base = {
  title: 'AstroとVivliostyle CLIでWeb&出版物ハイブリッド開発',
  author: 'spring-raining <harusamex.com@gmail.com>',
  language: 'ja',
  size: 'JIS-B5',
  copyAsset: {
    includes: ['node_modules/www/dist/pages/articles/tbf15'],
  },
};

const entryWithoutCover = [
  { rel: 'contents', path: 'index.html' },
  'node_modules/www/dist/article/raw/tbf15/00_preface/index.html',
  'node_modules/www/dist/article/raw/tbf15/10_what-is-hybrid-development-of-web-and-publications/index.html',
  'node_modules/www/dist/article/raw/tbf15/20_development-and-file-structure-using-nodejs-and-npm/index.html',
  'node_modules/www/dist/article/raw/tbf15/30_writing-the-manuscript/index.html',
  'node_modules/www/dist/article/raw/tbf15/40_output-as-a-publication/index.html',
  'node_modules/www/dist/article/raw/tbf15/50_design-with-css/index.html',
  'node_modules/www/dist/article/raw/tbf15/90_afterword/index.html',
];

const entryWithCover = [
  {
    rel: 'cover',
    path: 'cover.html',
    imageSrc: './P1.png',
    imageAlt: '表紙',
    pageBreakBefore: 'verso',
  },
  ...entryWithoutCover,
  {
    rel: 'cover',
    path: 'back-cover.html',
    imageSrc: './P4.png',
    imageAlt: '裏表紙',
  },
];

const theme = [
  {
    specifier: '../../themes/tbf15/node_modules/@vivliostyle/theme-base',
    import: 'theme-basic.css',
  },
  '../../themes/tbf15',
];

export default [
  // For digital devices (styled)
  {
    ...base,
    entry: entryWithCover,
    output: ['output.pdf', 'output-styled.epub'],
    theme,
    workspaceDir: '.vivliostyle/styled',
    cover: './P1.png',
  },
  // For digital devices (unstyled)
  {
    ...base,
    entry: entryWithCover,
    output: ['output-unstyled.epub'],
    workspaceDir: '.vivliostyle/unstyled',
    cover: './P1.png',
  },
  // For printing
  {
    ...base,
    entry: entryWithoutCover,
    output: ['output-printing.pdf'],
    theme: [...theme, 'print.css'],
    workspaceDir: '.vivliostyle/styled',
  },
];
