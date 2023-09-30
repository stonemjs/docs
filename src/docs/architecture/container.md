---
title: Service Container
---

The Service Container is a powerful library that manages dependencies and facilitates dependency injection within your Stone.js application. This allows you to create highly decoupled and maintainable codebases.

Dependency Injection (DI) is a design pattern used to implement Inversion of Control (IoC), where objects receive their dependencies instead of creating them internally.

Configuring your dependencies is straightforward with Stone.js. It provides simple and effective tools to register your dependencies.

Thanks to **Proxy resolution**, which allows you to resolve dependencies as if they were properties of the service container instance itself, and **Destructuring resolution**, which lets you resolve multiple dependencies at once by destructuring the container. With Stone.js, resolving dependencies becomes a seamless process.

## Accessing the Container

In a Stone.js application, the `container` is accessible by default from the main handler, [service provider](./providers.md)
and from any other classes configured to be resolved by the `container`. Regardless of the class, 
you can access the `container` through its constructor.

::: code-tabs#js
@tab:active JavaScript

```js
import { StoneApp } from '@stone-js/core/decorators'

@StoneApp({ name: 'MyApp' })
export class Application {
  constructor (container) {
    this.container = container
  }

  get config () {
    return this.container.config
  }

  handle (event) {
    console.log(this.config.get('app.name')) // Print: MyApp
  }
}
```

@tab TypeScript

```ts
import { Config } from '@stone-js/config'
import { StoneApp } from '@stone-js/core/decorators'

interface CustomBinding {
  config: Config
}

@StoneApp({ name: 'MyApp' })
export class Application {
  private readonly container: CustomBinding

  constructor (container: CustomBinding) {
    this.container = container
  }

  get config () {
    return this.container.config
  }

  handle (event) {
    console.log(this.config.get('app.name')) // Print: MyApp
  }
}
```
:::

In this example, we receive the service container via the constructor, then create a `config` getter to access the `Config` object, which contains the application's configurations. Finally, we use it in the `handle` method to print the application's name.

## Binding

In a Stone.js application, dependency configuration is not done automatically. It is up to you to specify them so that they can be registered in the service container. Stone.js provides efficient tools to facilitate this task.

### Implicit Binding

You can bind your classes directly to the service container using the implicit API, specifically the decorators provided by Stone.js. These decorators allow you to bind any class to the service container:

- `@Injectable`: Used to bind any class to the service container.
- `@Service`: An alias for `@Injectable`, more suitable for your services.

They take two optional parameters:

- `singleton`: Binds your class as a singleton when set to `true`. By default, it is `true`.
- `alias`: Allows you to define one or more aliases for your class, useful for proxy and destructured resolution, a topic we will cover later.

Here is an example:

```js
import { Service } from '@stone-js/core/decorators'

@Service({ singleton: true, alias: 'userService' })
export class UserService {}
```

This service can now be resolved anywhere the service container is accessible.

### Explicit Binding

For more control over the binding of your components, 
you can use the container from the main handler or the [service provider](./providers.md) to bind your instances, 
singletons, and factories.

#### Instance

To bind a single instance or value to the container:

::: code-tabs#js
@tab:active JavaScript

```js
// Bind value
this.container.instance('config', { apiUrl: 'https://api.example.com' })

// Bind instance
this.container.instance('ApiUrl', new URL('https://api.example.com'))
```

@tab TypeScript

```ts
// Bind value
this.container.instance('config', { apiUrl: 'https://api.example.com' })

// Bind instance
this.container.instance('ApiUrl', new URL('https://api.example.com'))
```
:::

#### Singleton

To bind a resolver function that returns a singleton instance:

::: code-tabs#js
@tab:active JavaScript

```js
this.container.singleton('logger', () => new Logger())
```

@tab TypeScript

```ts
this.container.singleton('logger', () => new Logger())
```
:::

#### Factory

To bind a resolver function that returns a new instance each time:

::: code-tabs#js
@tab:active JavaScript

```js
this.container.binding('userService', (container) => new UserService(container))
```

@tab TypeScript

```ts
this.container.binding('userService', (container: Container) => new UserService(container))
```
:::

## Resolving

You can resolve dependencies from the container using the `make` method:

::: code-tabs#js
@tab:active JavaScript

```js
const config = this.container.make('config')
const logger = this.container.make('logger')
const userService = this.container.make('userService')
```

@tab TypeScript

```ts
const config = this.container.make('config')
const logger = this.container.make('logger')
const userService = this.container.make('userService')
```
:::

### Proxied Resolving

Proxied resolving allows you to resolve dependencies through the container using the proxy pattern. 
This means you can access dependencies directly as if they were properties of the container instance, 
making the syntax cleaner and more intuitive.

::: code-tabs#js
@tab:active JavaScript

```js
import { Service } from '@stone-js/core/decorators'

@Service()
export class AdminService {
  constructor (container) {
    this.logger = container.logger
    this.config = container.config
    this.userService = container.userService
  }
}
```

@tab TypeScript

```ts
import { Service } from '@stone-js/core/decorators'

interface CustomBinding {
  config: Config;
  logger: Logger;
  userService: UserService;
}

@Service()
export class AdminService {
  constructor (container: CustomBinding) {
    this.logger = container.logger
    this.config = container.config
    this.userService = container.userService
  }
}
```
:::

### Destructuring Resolving

Destructuring resolving allows you to resolve multiple dependencies at once by destructuring the container. 
This method provides a concise and convenient way to access several dependencies simultaneously.

::: code-tabs#js
@tab:active JavaScript

```js
import { Service } from '@stone-js/core/decorators'

@Service()
export class AdminService {
  constructor ({ config, logger, userService }) {
    this.config = config
    this.logger = logger
    this.userService = userService
  }
}
```

@tab TypeScript

```ts
import { Service } from '@stone-js/core/decorators'

interface CustomBinding {
  config: Config;
  logger: Logger;
  userService: UserService;
}

@Service()
export class AdminService {
  constructor ({ config, logger, userService }: CustomBinding) {
    this.config = config
    this.logger = logger
    this.userService = userService
  }
}
```
:::

## Aliases

Aliases allow you to reference bindings by alternative names.

### Setting Aliases

To set an alias for a binding:

::: code-tabs#js
@tab:active JavaScript

```js
// Alias can be a string
this.container.alias(Logger, 'logging')

// Or an array of string
this.container.alias(Logger, ['logger', 'logging', 'log'])
```

@tab TypeScript

```ts
// Alias can be a string
this.container.alias(Logger, 'logging')

// Or an array of string
this.container.alias(Logger, ['logger', 'logging', 'log'])
```
:::

### Retrieving Aliases

To retrieve a binding by its alias:

::: code-tabs#js
@tab:active JavaScript

```js
const logger = this.container.make('logging')
```

@tab TypeScript

```ts
const logger = this.container.make('logging')
```
:::

## Conclusion

For more detailed information on the service container and its full range of capabilities, 
please refer to the dedicated [service container documentation](../../packages/service-container/). 
A simple summary is presented here for simplicity.