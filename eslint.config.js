import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

import prettierConfig from './prettier.config.js';

export default [
  // Global plugins declaration (only once)
  {
    settings: {
      react: {
        version: 'detect', // Automatically detects the installed React version
      },
      'react-hooks': {
        version: 'detect', // Automatically detects the installed React version
      },
    },
    plugins: {
      prettier: prettierPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@typescript-eslint': typescriptEslintPlugin,
      'simple-import-sort': simpleImportSortPlugin,
    },
  },
  // Ignore patterns
  {
    ignores: ['node_modules', 'dist'],
  },
  // Shared rules for JavaScript and TypeScript
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // General rules
      'no-unused-vars': 'warn',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'prettier/prettier': ['error', prettierConfig],

      // Simple import sort
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react$'], // React first
            ['^react', '^@?\\w'], // External libraries
            ['^(~)(.*|$)'], // Aliased imports
            ['^\\u0000'], // Side-effect imports
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // Parent imports
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // Sibling imports
            ['^.+\\.?(css|scss)$'], // Styles
          ],
        },
      ],
    },
  },
  // TypeScript-specific rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/semi': ['error', 'always'],
    },
  },
  // React-specific rules
  {
    files: ['**/*.jsx', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react/jsx-uses-react': 'off', // Not needed in React 17+
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/jsx-uses-vars': 'warn',
      'react/prop-types': 'off', // Disable if using TypeScript
      'react/jsx-key': 'error',
      'react-hooks/rules-of-hooks': 'error', // Enforce Hooks rules
      'react-hooks/exhaustive-deps': 'warn', // Check dependencies of Hooks
    },
  },
];
