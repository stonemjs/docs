---
title: Getting Started
---

To get started with `Config`, you need to create an instance of the `Config` class. 
This instance will hold all your configuration options and provide methods to manage them effectively.

You can then configure the instance with the initial configuration options you need. 
Once your instance is ready, you can use various methods to set, get, and manage your configuration values using **deep string dot notation**.

1. Create an instance of `Config` with your initial configuration options:

::: code-tabs#js
@tab:active JavaScript

```js
import { Config } from '@stone-js/config'

// Your config options
const options = {
  app: {
    name: 'Stone.js',
    version: '1.0.0'
  }
}

// Create your config instance
const config = Config.create(options)
```

@tab TypeScript

```ts
import { Config } from '@stone-js/config'

// Your config options
const options = {
  app: {
    name: 'Stone.js',
    version: '1.0.0'
  }
}

// Create your config instance
const config = Config.create(options)
```
:::

2. Getting Configuration Values


::: code-tabs#js
@tab:active JavaScript

```js
// Get your config using deep string dot notation
const appName = config.get('app.name', 'MyApp')

// Print name
console.log(appName) // Output: Stone.js
```

@tab TypeScript

```ts
// Get your config using deep string dot notation
const appName = config.get('app.name', 'MyApp')

// Print name
console.log(appName) // Output: Stone.js
```
:::