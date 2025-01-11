# @speira/lint

This library aims to provide a simple way to centralise prettier configuration.

## Installation

```bash
npm i -D @speira/lint
```

## Usage

In your `.prettierrc.cjs` file :

```js
const { prettierDefault } = require('@speira/lint');

module.exports = prettierDefault;
```
