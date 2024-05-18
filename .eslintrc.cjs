module.exports = {
  env: {
    browser: true,
    jest: true,
    'shared-node-browser': true,
    es2021: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'prettier',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', 'jest', 'prettier', 'simple-import-sort'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'linebreak-style': 'off',
    'no-console': 'warn',
    'object-shorthand': 'warn',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },
};
