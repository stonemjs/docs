---
title: Configuration
---

Stone.js embraces an **Adaptive Configuration** approach, offering a flexible and robust configuration system through two distinct APIs: 
[Declarative](#declarative) and [Imperative](#imperative). These APIs enable developers to tailor their applications to their specific requirements, achieving a balance between simplicity and flexibility.

## Declarative

Declarative configurations are defined using decorators. To enable a feature or configure a component, simply use a decorator and pass parameters. Stone.js, being modular, offers decorators for each library, with configurations documented within the library.

Three types of decorators are used:

- **Class Decorators**: Applied to classes.
- **Property Decorators**: Applied to properties.
- **Method Decorators**: Applied to methods.

### Key Decorator: `@StoneApp()`
This essential decorator must be present on a single class (`Application`) and serves as the main entry point for your application. It designates the class containing the `handle` method, which intercepts events. It also allows configuration overrides.

**Parameters:**
- `name`: Application name.
- `env`: Environment name (dev, prod, etc.).
- `debug`: Run app in debug mode.
- `timezone`: Define timezone.
- `locale`: Define locale.
- `fallback_locale`: Set a fallback locale.
- `providers`: Import service providers.
- `adapter.current`: Define the current adapter.

A simple example of use:

::: code-tabs#js
@tab:active JavaScript

```js
// app/Application.mjs
import { StoneApp } from '@stone-js/core/decorators'

@StoneApp({
  name: 'MyApp',
  locale: 'en'
})
export class Application {
  handle (event) {}
}
```

@tab TypeScript

```ts
// app/Application.ts
import { StoneApp } from '@stone-js/core/decorators'
import { IncomingEvent, OutgoingResponse } from '@stone-js/core'

@StoneApp({
  name: 'MyApp',
  locale: 'en'
})
export class Application {
  handle (event: IncomingEvent): OutgoingResponse {}
}
```
:::

## Imperative

Imperative configurations provide fine-grained control and are managed in files within the `app/config` directory. By default, this directory does not exist, as Stone.js uses declarative configurations.

### Exporting Configurations

Configurations are exported per library via the command:

```sh
npm run export <library-name>
```

For example, to export core application configurations:

```sh
npm run export @stone-js/core
```

This creates configuration files in the `app/config` directory, ready for customization.

## Configuration Priority

Declarative configurations can be overridden by imperative configurations. For example:

```js
@StoneApp({ name: 'MyApp' })
```

Can be overridden by:

::: code-tabs#js

@tab:active JavaScript

```js
// app/config/AppConfig.mjs
import { Configuration, options } from '@stone-js/core/config';

@Configuration(options)
export class AppConfig {
  get config () {
    return {
      name: 'MyFavoriteApp'
    }
  }
}
```

@tab TypeScript

```ts
// app/config/AppConfig.ts
import { Configuration, options, AppOptions } from '@stone-js/core/config';

@Configuration(options)
export class AppConfig {
  get config (): Partial<AppOptions> {
    return {
      name: 'MyFavoriteApp'
    }
  }
}
```
:::

## Namespaces

Namespaces organize configurations, ensuring efficient management. The `app` namespace is reserved for application configurations, while each library uses its own namespace (e.g., `@stone-js/router` uses `router`).

::: code-tabs#js

@tab:active JavaScript

```js
// config/app.mjs
export const appOptions = {
  app: { // App namespace
    name: 'MyFavoriteApp'
  }
}

// config/router.mjs
export const routerOptions = {
  router: { // Router namespace
    middleware: []
  }
}
```

@tab TypeScript

```ts
// config/app.ts
export const appOptions = {
  app: { // App namespace
    name: 'MyFavoriteApp'
  }
}

// config/router.ts
export const routerOptions = {
  router: { // Router namespace
    middleware: []
  }
}
```
:::

## Environment Configuration

Stone.js supports environment variables using the `@stone-js/env` library and `.env` files. There are two types of `.env` files:
- **Private**: Variables not included in the final build (for backend apps).
- **Public**: Variables included in the final build (for frontend apps).

By default:
- Private variables are in `.env`.
- Public variables are in `.env.public`.

```sh
# .env
APP_NAME=MyApp
APP_SECRET=*******
```

These can be customized in `stone.config.mjs`:
```js
export default {
  dotenv: {
    private: { path: ['.env'] },
    public: { path: ['.env.public'] }
  }
}
```
Refer to `stone.config.mjs` for more details.

### Env

To access your environment variables, use the `@stone-js/env` library, which reads system variables and those defined in `.env` and `.env.public`. First, install the library:

```sh
npm i @stone-js/env
```

All Stone.js modules are plug-and-play. Once installed, you can use it throughout your application:

::: code-tabs#js

@tab:active JavaScript

```js
// app/Application.mjs
import { Env } from '@stone-js/env'
import { StoneApp } from '@stone-js/core/decorators'

@StoneApp()
export class Application {
  handle (event) {
    console.log(Env.get('APP_NAME', 'MyApp'))
  }
}
```

@tab TypeScript

```ts
// app/Application.ts
import { Env } from '@stone-js/env'
import { StoneApp } from '@stone-js/core/decorators'
import { IncomingEvent, OutgoingResponse } from '@stone-js/core'

@StoneApp()
export class Application {
  handle (event: IncomingEvent): OutgoingResponse {
    console.log(Env.get('APP_NAME', 'MyApp'))
  }
}
```
:::

Conventionally, `Env` is best used in imperative configurations:

::: code-tabs#js
@tab:active JavaScript

```js
// app/config/AppConfig.mjs
import { Env } from '@stone-js/env'
import { Configuration, options } from '@stone-js/core/config'

@Configuration(options)
export class AppConfig {
  get config () {
    return {
      name: Env.get('APP_NAME', 'MyApp')
    }
  }
}
```

@tab TypeScript

```ts
// app/config/AppConfig.ts
import { Env } from '@stone-js/env'
import { Configuration, options, AppOptions } from '@stone-js/core/config';

@Configuration(options)
export class AppConfig {
  get config (): Partial<AppOptions> {
    return {
      name: Env.get('APP_NAME', 'MyApp')
    }
  }
}
```
:::

The `@stone-js/env` library is standalone and offers a powerful API for retrieving environment variables. 
Refer to its [documentation](../cookbook/env/usage.md) for more information.

## Accessing Configuration Values

Configurations are accessed using the `@stone-js/config` library, which provides a powerful API. The `Config` object is hydrated with all configuration values and is accessible via the service container.

::: code-tabs#js
@tab:active JavaScript

```js
// app/Application.mjs
import { StoneApp } from '@stone-js/core/decorators'

@StoneApp()
export class Application {
  constructor ({ config }) {
    this.config = config
  }

  handle (event) {
    console.log(this.config.get('app.name', 'MyApp'))
  }
}
```

@tab TypeScript

```ts
// app/Application.ts
import { Config } from '@stone-js/config'
import { StoneApp } from '@stone-js/core/decorators'
import { IncomingEvent, OutgoingResponse } from '@stone-js/core'

interface CustomBinding {
  config: Config
}

@StoneApp()
export class Application {
  private readonly config: Config

  constructor ({ config }: CustomBinding) {
    this.config = config
  }

  handle (event: IncomingEvent): OutgoingResponse {
    console.log(this.config.get('app.name', 'MyApp'))
    ...
  }
}
```
:::

To set configurations at runtime:
```js
config.set('app.name', 'MyUpdatedApp')
```

The `@stone-js/config` library is standalone and offers a powerful API for managing configuration values. 
Refer to its [documentation](../cookbook/config/usage.md) for more information.

### Debug Mode
The `debug` option in configurations determines the amount of information displayed. It should be set to `true` in development and `false` in production to avoid exposing sensitive information.

## Choosing Between Declarative and Imperative

- **Declarative**: Best for quick setups, small projects, and when you prefer to keep configuration within the codebase using decorators.
- **Imperative**: Best for larger projects, requiring fine-grained control and separation of configuration logic from the application code.

Both APIs can be used together in a single project, with the Imperative API overriding the Declarative API where necessary. This dual approach ensures that Stone.js remains both flexible and powerful, catering to a wide range of project requirements.