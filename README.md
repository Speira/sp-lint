# @speira/lint

This library aims to provide a simple way to centralise prettier configuration.

## Installation

```bash
npm i -D @speira/lint
```

## Usage

In your `prettier.config.js` file :

```js
import speiraPrettier from '@speira/lint/prettier';

export default speiraPrettier;
```

In your `eslint.config.js` file :

```js
import speiraEslint from '@speira/lint/eslint';

export default [...speiraEslint];
```
