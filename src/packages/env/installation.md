---
title: Installation
---

`Stone Env` is available from the [npm registry](https://www.npmjs.com) and can be installed as follows:

::: code-tabs#shell
@tab:active npm

```bash
npm i @stone-js/env
```

@tab yarn

```bash
yarn add @stone-js/env
```

@tab pnpm

```bash
pnpm add @stone-js/env
```
:::

::: info Note
This package is **Pure ESM**. If you are unfamiliar with what that means or how to handle it in your project, 
please refer to [this guide on Pure ESM packages](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).
:::

Make sure your project setup is compatible with ESM. This might involve updating your `package.json` or using certain bundler configurations.

The `Stone Env` module can only be imported via ESM import syntax:

::: code-tabs#js
@tab:active JavaScript

```js
import { Env } from '@stone-js/env'
```

@tab TypeScript

```ts
import { Env } from '@stone-js/env'
```
:::
