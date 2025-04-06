---
title: Introduction
---

Understanding how a tool works is crucial to using it effectively. This section aims to present the core concepts of Stone.js, its architecture, and its operating mode, so you can be comfortable and confident in using it.

Not only does Stone.js allow you to create omnipresent applications, but it also lets you enjoy the syntactic benefits of the latest ECMAScript features, including stage 3 features like decorators.

Every Stone.js application goes through two phases in its lifecycle: 
- the [build phase](#build-phase) 
- and the [run phase](#run-phase)

Each offering exciting things to discover.

## Build Phase

Since Stone.js uses the latest ECMAScript features, it is essential to build your project to ensure it runs smoothly across different JavaScript environments.

The build process of a Stone.js project is done using the following commands:
- `npm run serve`: Builds and launches the project in watcher mode, rebuilding and restarting the project with every modification. Useful for local development.
- `npm run build`: Creates the production build `dist/stone.mjs`, which can be deployed anywhere without `node_modules` and `package.json`.

### Rollup Config

Stone.js uses [Rollup](https://rollupjs.org) in conjunction with [Babel](https://babeljs.io) to transpile and bundle your server project. The Rollup configuration file is used internally by default.

#### Customization

To customize Rollup, you can export the configuration file used internally by Stone.js:

::: important Caution
Be cautious with the configurations, as they ensure the proper functioning of Stone.js, unless you know exactly what you are doing.
:::

```sh
npx stone export rollup
```

The exported file will be present at the root of the project as `rollup.config.mjs`, where you can configure both Rollup and Babel.

### Vite Config

Stone.js uses [Vite](https://vite.dev) in conjunction with [Babel](https://babeljs.io) to transpile and bundle your client project. The Vite configuration file is used internally by default.

#### Customization

To customize Vite, you can export the configuration file used internally by Stone.js:

::: important Caution
Be cautious with the configurations, as they ensure the proper functioning of Stone.js, unless you know exactly what you are doing.
:::

```sh
npx stone export vite
```

The exported file will be present at the root of the project as `vite.config.js`, where you can configure both Vite and Babel.

### Stone Config

The configuration file: `stone.config.mjs` is used to define the build information of a Stone.js project and is present by default at the root of the project. It is used internally by Rollup to build your project correctly. In this file, you will find modules to autoload, those to exclude from the production build, etc. Be well-advised before modifying anything in this file, as incorrect configuration could harm your application's functioning.

### Bootstrap File

When you run your application in dev mode with the command `npm run serve`, a bootstrap file is created `.stone/app.bootstrap.mjs` to bootstrap your application. The production build will be created from this file.

::: important Caution
It is important to know that this file is auto-generated, so it is not advisable to modify it, as your changes may be lost in the next build.
:::

#### Customization

You can customize this file by exporting it, and Stone.js will use your file for bootstrapping:

```sh
npm run export app
```

Again, be sure of what you are doing.

## Run Phase

When your Stone.js application is running, the Continuum architecture takes over, allowing its different layers to communicate and fulfill their roles.

### Config Builder

The `ConfigBuilder` is the main element of the configuration layer that ensures the dynamic construction of configurations used by other layers. It identifies, organizes, and builds configurations for adapters, providers, services, controllers, listeners, third-party library, and your features. In summary, it knows everything your Stone.js application needs for its functioning and constructs it.

Here is an example of how the Builder is used in `.stone/app.bootstrap.mjs` to build the configuration:

```js
import * as app from './app.mjs'
import { ConfigBuilder } from '@stone-js/core/config'

const configurations = await ConfigBuilder.createAndBuild({ app })
```

#### Middleware

All this is possible thanks to middleware, which provides the adaptability and dynamism of Stone.js, allowing you to customize configurations as needed or configure your project by defining your own decorators. Middleware plays a crucial role in the Stone.js ecosystem and is used in all layers. Each configuration element is identified, organized, and built via middleware.

Here is an example of Middleware that discovers services decorated with the `@Service()` decorator:

::: code-tabs#js
@tab:active JavaScript

```js
/**
 * ServiceConfigMiddleware
 * 
 * @param   {ConfigContext} context
 * @param   {Function} next
 * @returns {ConfigContext}
 */
export const ServiceConfigMiddleware = (context, next) => {
  const modules = context.app.filter(module => Metadata.has(module, 'service'))
  context.config.app.services = modules.concat(context.config.app.services)
  return next(context)
}
```

@tab TypeScript

```ts
/**
 * ServiceConfigMiddleware
 * 
 * @param   {ConfigContext} context
 * @param   {Function} next
 * @returns {ConfigContext}
 */
export const ServiceConfigMiddleware = (context: ConfigContext, next: (context: ConfigContext) => ConfigContext) => {
  const modules = context.app.filter(module => Metadata.has(module, 'service'))
  context.config.app.services = modules.concat(context.config.app.services)
  return next(context)
}
```
:::

As you can see, the middleware's job is to identify modules in `app` and organize them in `config`. This is the true job of configuration layer middleware, and all middleware in this layer has the suffix `ConfigMiddleware`. We will discuss this subject later to show how to customize configurations and create your own middleware.

### Adapter

The Adapter is the main element of the integration layer, coupled with the platform, ensuring the conversion of inputs and outputs. It handles the mapping of inputs and outputs using middleware. This will be discussed in its respective [section](./adapter.md).

### Kernel

The Kernel is the main element of the initialization layer that receives a Stone.js event `IncomingEvent` from the Adapter, 
processes it, and returns an output response `OutgoingResponse` to the Adapter. 
It ensures the bootstrapping and coordination of various application components. This will be discussed in the next sections.

### Main Handler

The main handler is the primary element of the features layer that serves as the entry point for the application's configurations and features. When no `router` is defined, it directly intercepts Stone.js events from the Kernel, processes them, and returns a response to the Kernel. The `Application` class with the `@StoneApp` decorator, present by default in a Stone.js project, constitutes the main handler.

However, you are free to name this class as you wish. The only requirements are that there should be only one main handler per project, the main handler should have the `handle` method that takes the event as a parameter when the `router` is not defined, and the class should be decorated with `@StoneApp`.

Here is a simple example of the main handler:

::: code-tabs#js
@tab:active JavaScript

```js
import { StoneApp } from '@stone-js/core/decorator'

@StoneApp()
export class Application {
  handle (event) {}
}
```

@tab TypeScript

```ts
import { IncomingEvent } from '@stone-js/core'
import { StoneApp } from '@stone-js/core/decorator'

@StoneApp()
export class Application {
  handle (event: IncomingEvent) {}
}
```
:::

::: important
As mentioned earlier, the main handler no longer intercepts events when the `router` is configured, as events are dispatched directly to defined actions, namely controllers.
:::

### Stone Factory

The Stone Factory allows creating a new instance of a ready-to-use Stone.js application, hiding the complexity of setting up a Stone.js application. It takes configuration options to know how to build the application.

Here is a simple example of using `StoneFactory` found in `.stone/app.bootstrap.mjs`:

```js
import * as app from './app.mjs'
import { StoneFactory } from '@stone-js/core'
import { ConfigBuilder } from '@stone-js/core/config'

/**
 * Auto build configurations.
 */
const configurations = await ConfigBuilder.createAndBuild({ app })

/**
 * Create application.
 */
const stoneApp = StoneFactory.create(configurations)

/**
 * Run application
 */
await stoneApp.run()
```

As you can see, we build the configuration from the `ConfigBuilder` of the configuration layer, create an instance of Stone App with the configurations, and then run our application.

## ESNext Features

Stone.js uses the latest ECMAScript features to enhance the developer experience, allowing them to enjoy the syntactic benefits offered by the language. Feel free to use everything the language offers, and Stone.js will have your back. Some of these features include:
- Top-Level `await`
- Optional Chaining (`?.`)
- Nullish Coalescing (`??`)
- Logical Nullish Assignment (`??=`)
- Private Class Fields (`#privateField`)
- Decorators (`@StoneApp()`), using the latest revision, currently version `2023-11`

---

Let's continue this adventure with [Events](./events.md)