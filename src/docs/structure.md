---
title: Project Structure
---

Understanding the project structure of Stone.js is essential for organizing your code and maximizing the framework's capabilities. 

The Stone.js framework embraces an **Adaptive Convention Configuration** approach, 
allowing users to easily customize these conventions to suit their specific project requirements. 

Below is a typical structure for a Stone.js project, designed to be intuitive and efficient.

## Root Directory

The root directory contains essential configuration files and directories:

- **`stone.config.mjs`**: Contains framework configurations such as module autoload paths.
- **`tsconfig.json`**: TypeScript configuration file (for TypeScript projects).
- **`app/`**: Contains the core code of your application, organized as you see fit.
- **`config/`**: Contains explicit configuration files for your application.
- **`commands/`**: Stores custom Stone CLI commands.
- **`dist/`**: Directory for production builds.
- **`.stone/`**: Contains your dev build, useful for local development.
- **`tests/`**: Organizes your application tests.

### stone.config.mjs
This file defines configurations for the framework, including module autoload paths, modules to exclude from the production build and so on. 
Here's an example:

```js
// stone.config.mjs
export default {
  autoload: {
    modules: {
      app: 'app/**/*.mjs',
      options: 'config/*.mjs',
      commands: 'commands/*.mjs'
    },
    exclude: ['commands']
  }
}
```

### App Directory
The core code of your application resides here. You can organize your code as you see fit. 
Modules and autoload configurations are handled by decorators, which will be discussed later.

```
├── app
│  └── Application.mjs
```

The only required file in the `app` directory is the main handler, 
conventionally named `Application.mjs` or `Application.ts` decorated with `StoneApp`:

::: code-tabs#js
@tab:active JavaScript

```js
// app/Application.mjs
import { StoneApp } from '@stone-js/core/decorators'

@StoneApp()
export class Application {
  handle (event) {}
}
```

@tab TypeScript

```ts
// app/Application.ts
import { StoneApp } from '@stone-js/core/decorators'
import { IncomingEvent, OutgoingResponse } from '@stone-js/core'

@StoneApp()
export class Application {
  handle (event: IncomingEvent): OutgoingResponse {}
}
```
:::

### Config Directory
This directory contains your application's explicit configuration files. 
By default, it does not exist because Stone.js uses implicit configurations.
The configurations are covered in the next section.

### Commands Directory
Custom Stone CLI commands are stored here. This directory is optional and can be created as needed.
The CLI commands are covered in this [section](./deeper/cli.md).

### Tests Directory
Organizes your application tests.