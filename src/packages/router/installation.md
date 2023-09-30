---
title: Installation
---

::: tip Stone.js 
Stone Router est pré-installé lorsqu'une application est construite avec l'utilitaire [`@stone-js/create`](https://www.npmjs.com/package/@stone-js/create)
:::

Stone Router est disponible depuis le [registre npm](https://www.npmjs.com) et peut etre installé comme suit:

::: code-tabs#shell
@tab:active npm

```bash
npm i @stone-js/router
```

@tab yarn

```bash
yarn add @stone-js/router
```

@tab pnpm

```bash
pnpm add @stone-js/router
```
:::

Ensuite les modules de Stone Router peutvent etre importé via ESM ou CommonJS

::: code-tabs#js
@tab:active esm

```js
import { Router } from '@stone-js/router'
```

@tab cjs

```js
const { Router } = require('@stone-js/router');
```
:::