---
title: Getting Started
---

::: tip
All `Stone.js` modules are plug-and-play in a **Stone** context.
:::

## Stone.js

You can start using `Stone Env` in a `Stone.js` project with no configurations required. 
However, you will need to create one or two `dotenv` files in the root of your project according to your needs.

1. Create a `.env` file in the root of your project:

```bash
# .env
PRIVATE_API_KEY=*********
PRIVATE_API_SECRET=*********
```

2. You can also create a `.env.public` for public frontend variables:

```bash
# .env.public
PUBLIC_API_KEY=2436748999
```

Both `.env` and `.env.public` variables will be merged in the backend context. In the frontend perspective, only the variables in `.env.public` will be included in the final bundle.

3. Now, you can import the library in your code and start using it:

::: code-tabs#js
@tab:active JavaScript

```js
import { Env } from '@stone-js/env';

// Retrieving a mandatory string variable
const appName = Env.string('APP_NAME');

// Retrieving an optional string variable with a default value
const appVersion = Env.string('APP_VERSION', '1.0.0');
```

@tab TypeScript

```ts
import { Env } from '@stone-js/env';

// Retrieving a mandatory string variable
const appName = Env.string('APP_NAME');

// Retrieving an optional string variable with a default value
const appVersion = Env.string('APP_VERSION', '1.0.0');
```
:::

**Explanation**
- We import the module using the ESM import syntax.
- We retrieve a mandatory string variable `APP_NAME`. An exception will be thrown if `APP_NAME` does not exist, is not a string, or is falsy.
- We retrieve an optional string variable `APP_VERSION` by passing a default value as the second parameter. 
This makes the variable optional, and no exceptions will be thrown if it is falsy.

::: info
If you are using `Stone Env` in a `Stone` project, further reading is not necessary; you can skip to the next section.
:::

## Using Stone Env with Node.js

To use `Stone Env` in a Node.js project, ensure your `package.json` includes `"type": "module"`:

```json
{
  "type": "module"
}
```

Or your JavaScript files have `.mjs` extension, because Node.js will process those files as ESM.

1. Install necessary dependencies:

```bash
npm install dotenv
```

2. Create a `.env` file in the root of your project:

```bash
# .env
APP_NAME=Stone.js
APP_VERSION=0.0.1
```

3. Now, you can import the library in your code and start using it:

::: code-tabs#js
@tab:active JavaScript

```js
import Dotenv from 'dotenv'
import { Env } from '@stone-js/env'

// Load our variables from `.env` to `process.env`
Dotenv.config()

// Retrieving a mandatory string variable
const appName = Env.string('APP_NAME')

// Retrieving an optional string variable with a default value
const appVersion = Env.string('APP_VERSION', '1.0.0')
```

@tab TypeScript

```ts
import Dotenv from 'dotenv'
import { Env } from '@stone-js/env'

// Load our variables from `.env` to `process.env`
Dotenv.config()

// Retrieving a mandatory string variable
const appName = Env.string('APP_NAME')

// Retrieving an optional string variable with a default value
const appVersion = Env.string('APP_VERSION', '1.0.0')
```
:::

This setup ensures that your project is configured to use ECMAScript modules, allowing you to utilize `Stone Env` seamlessly.

## Using Stone Env with Bundlers

You might need a bundler like `Vite`, `Rollup` or `Webpack` 
to replace `window.__stone_env__` with the actual environment variables during bundling.

### Vite

1. Install necessary dependencies:

```bash
npm install @rollup/plugin-replace dotenv
```

2. Create a `.env.public` file in the root of your project:

```bash
# .env.public
APP_NAME=Stone.js
APP_VERSION=0.0.1
```

3. Configure Vite to use `dotenv` and `@rollup/plugin-replace`

::: code-tabs#js
@tab:active JavaScript

```js
// vite.config.js
import Dotenv from 'dotenv'
import { defineConfig } from 'vite'
import replace from '@rollup/plugin-replace'

// Load our variables from `.env.public` into `publicVars`
const publicVars = {};
Dotenv.config({ path: '.env.public', processEnv: publicVars })

// Vite config
export default defineConfig({
  plugins: [
    replace({
      preventAssignment: true,
      'window.__stone_env__': JSON.stringify(publicVars)
    })
  ]
});
```

@tab TypeScript

```ts
// vite.config.js
import Dotenv from 'dotenv'
import { defineConfig } from 'vite'
import replace from '@rollup/plugin-replace'

// Load our variables from `.env.public` into `publicVars`
const publicVars = {};
Dotenv.config({ path: '.env.public', processEnv: publicVars })

// Vite config
export default defineConfig({
  plugins: [
    replace({
      preventAssignment: true,
      'window.__stone_env__': JSON.stringify(publicVars)
    })
  ]
});
```
:::

4. Alternatively, you can use Vite's built-in environment variables feature:

::: code-tabs#js
@tab:active JavaScript

```js
// vite.config.js
import Dotenv from 'dotenv'
import { defineConfig } from 'vite'

// Load our variables from `.env.public` into `publicVars`
const publicVars = {};
Dotenv.config({ path: '.env.public', processEnv: publicVars })

// Vite config
export default defineConfig({
  define: {
    'window.__stone_env__': JSON.stringify(publicVars)
  }
});
```

@tab TypeScript

```ts
// vite.config.js
import Dotenv from 'dotenv'
import { defineConfig } from 'vite'

// Load our variables from `.env.public` into `publicVars`
const publicVars = {};
Dotenv.config({ path: '.env.public', processEnv: publicVars })

// Vite config
export default defineConfig({
  define: {
    'window.__stone_env__': JSON.stringify(publicVars)
  }
});
```
:::

5. Import and use `Stone Env` in your source code:

::: code-tabs#js
@tab:active JavaScript

```js
import { Env } from '@stone-js/env';

// Retrieving a mandatory string variable
const appName = Env.string('APP_NAME');

// Retrieving an optional string variable with a default value
const appVersion = Env.string('APP_VERSION', '1.0.0');
```

@tab TypeScript

```ts
import { Env } from '@stone-js/env';

// Retrieving a mandatory string variable
const appName = Env.string('APP_NAME');

// Retrieving an optional string variable with a default value
const appVersion = Env.string('APP_VERSION', '1.0.0');
```
:::

### Rollup

1. Install necessary dependencies:

```bash
npm install @rollup/plugin-replace dotenv
```

2. Create a `.env.public` file in the root of your project:

```bash
# .env.public
APP_NAME=Stone.js
APP_VERSION=0.0.1
```

3. Configure Rollup to use `dotenv` and `replace`:

::: code-tabs#js
@tab:active JavaScript

```js
import Dotenv from 'dotenv'
import replace from '@rollup/plugin-replace'

// Load our variables from `.env.public` into `publicVars`
const publicVars = {};
Dotenv.config({ path: '.env.public', processEnv: publicVars })

// Rollup config
export default {
  // other configuration settings...
  plugins: [
    replace({
      preventAssignment: true,
      'window.__stone_env__': JSON.stringify(publicVars)
    })
  ]
}
```

@tab TypeScript

```ts
import Dotenv from 'dotenv'
import replace from '@rollup/plugin-replace'

// Load our variables from `.env.public` into `publicVars`
const publicVars = {};
Dotenv.config({ path: '.env.public', processEnv: publicVars })

// Rollup config
export default {
  // other configuration settings...
  plugins: [
    replace({
      preventAssignment: true,
      'window.__stone_env__': JSON.stringify(publicVars)
    })
  ]
}
```
:::

4. Import and use `Stone Env` in your source code:

::: code-tabs#js
@tab:active JavaScript

```js
import { Env } from '@stone-js/env';

// Retrieving a mandatory string variable
const appName = Env.string('APP_NAME');

// Retrieving an optional string variable with a default value
const appVersion = Env.string('APP_VERSION', '1.0.0');
```

@tab TypeScript

```ts
import { Env } from '@stone-js/env';

// Retrieving a mandatory string variable
const appName = Env.string('APP_NAME');

// Retrieving an optional string variable with a default value
const appVersion = Env.string('APP_VERSION', '1.0.0');
```
:::

### Webpack

1. Install necessary dependencies:

```bash
npm install dotenv
```

2. Create a `.env.public` file in the root of your project:

```bash
# .env.public
APP_NAME=Stone.js
APP_VERSION=0.0.1
```

3. Configure Webpack to use `dotenv` and `DefinePlugin`:

::: code-tabs#js
@tab:active JavaScript

```js
// webpack.config.js
const Dotenv = require('dotenv')
const webpack = require('webpack')

// Load our variables from `.env.public` into `publicVars`
const publicVars = {};
Dotenv.config({ path: '.env.public', processEnv: publicVars });

module.exports = {
  // other configuration settings...
  plugins: [
    new webpack.DefinePlugin({
      'window.__stone_env__': JSON.stringify(publicVars)
    })
  ]
}
```

@tab TypeScript

```ts
// webpack.config.js
const Dotenv = require('dotenv')
const webpack = require('webpack')

// Load our variables from `.env.public` into `publicVars`
const publicVars = {};
Dotenv.config({ path: '.env.public', processEnv: publicVars });

module.exports = {
  // other configuration settings...
  plugins: [
    new webpack.DefinePlugin({
      'window.__stone_env__': JSON.stringify(publicVars)
    })
  ]
}
```
:::

4. Import and use `Stone Env` in your source code:

::: code-tabs#js
@tab:active JavaScript

```js
import { Env } from '@stone-js/env';

// Retrieving a mandatory string variable
const appName = Env.string('APP_NAME');

// Retrieving an optional string variable with a default value
const appVersion = Env.string('APP_VERSION', '1.0.0');
```

@tab TypeScript

```ts
import { Env } from '@stone-js/env';

// Retrieving a mandatory string variable
const appName = Env.string('APP_NAME');

// Retrieving an optional string variable with a default value
const appVersion = Env.string('APP_VERSION', '1.0.0');
```
:::

## Summary

- No configurations are required in the `Stone.js` context.
- For `Node.js`, you'll need to install `dotenv` if you plan to use `.env` files.
- Use a bundler to replace this value `window.__stone_env__` with your variables at build time.

By following these steps, you ensure that `Stone Env` can access environment variables correctly in both backend and frontend environments.
