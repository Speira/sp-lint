export const eslintDefault = {
  extends: ['../.eslintrc.react.cjs'],
};
export const prettierDefault = {
  arrowParens: 'always',
  bracketSameLine: true,
  endOfLine: 'auto',
  plugins: [
    'prettier-plugin-jsdoc',
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson',
  ],
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
};
