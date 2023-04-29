module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:astro/jsx-a11y-recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'jsx-a11y', 'astro'],
  overrides: [
    {
      files: ['*.astro'],
      plugins: ['astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
      },
    },
  ],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    'no-console': 'warn',
  },
};
