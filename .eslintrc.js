/* eslint-disable linebreak-style */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    semi: ['error', 'never'],
    'class-methods-use-this': 'off',
    'no-console': 'off',
    'no-await-in-loop': 'off',
    'no-underscore-dangle': 'off',
  },
}
