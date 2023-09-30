---
title: Usage
---

The true power of `Stone Service Container` lies in its ability to simplify 
and enhance the management of dependencies within your application. 
By leveraging the Inversion of Control (IoC) and Proxy patterns, 
the library offers a highly flexible and intuitive way to bind, resolve, 
and inject dependencies. Whether you're working with simple instances, complex singletons, or dynamic factories, 
the Service Container provides a robust foundation for building scalable and maintainable applications.

## Binding

You can bind instances, singletons, and factories to the container using various methods provided by the Container class.

### Instance

To bind a single instance or value to the container:

::: code-tabs#js
@tab:active JavaScript

```js
// Bind value
container.instance('config', { apiUrl: 'https://api.example.com' })

// Bind instance
container.instance('ApiUrl', new URL('https://api.example.com'))
```

@tab TypeScript

```ts
// Bind value
container.instance('config', { apiUrl: 'https://api.example.com' })

// Bind instance
container.instance('ApiUrl', new URL('https://api.example.com'))
```
:::

### Singleton

To bind a resolver function that returns a singleton instance:

::: code-tabs#js
@tab:active JavaScript

```js
container.singleton('logger', () => new Logger())
```

@tab TypeScript

```ts
container.singleton('logger', () => new Logger())
```
:::

### Factory

To bind a resolver function that returns a new instance each time:

::: code-tabs#js
@tab:active JavaScript

```js
container.binding('userService', () => new UserService())
```

@tab TypeScript

```ts
container.binding('userService', () => new UserService())
```
:::

## Auto Binding

The `autoBinding` method in the service container simplifies the process of binding 
dependencies by ensuring they are only bound if not already present in the container. 
This method can be used implicitly or explicitly, providing flexibility in how dependencies are registered and resolved.

### Implicit auto binding

Implicit auto binding allows you to automatically register and bind a class to the container using the class's own name. 
This approach simplifies dependency management by using the class name as the key for resolution.

::: code-tabs#js
@tab:active JavaScript

```js
// Auto binding Logger
container.autoBinding(Logger)

// Resolve Logger
const logger = container.make(Logger)
```

@tab TypeScript

```ts
// Auto binding Logger
container.autoBinding(Logger)

// Resolve Logger
const logger = container.make(Logger)
```
:::

### Explicit auto binding

Explicit auto binding allows you to register and bind a class to the container with a specified key, as a singleton or factory and optional aliases. 
This method offers greater flexibility in naming and accessing dependencies.

::: code-tabs#js
@tab:active JavaScript

```js
// Auto binding Logger
container.autoBinding('logger', Logger, true, ['logging', 'log'])

// Resolve Logger
const logger = container.make('logger')
const logger = container.make('logging')
```

@tab TypeScript

```ts
// Auto binding Logger
container.autoBinding('logger', Logger, true, ['logging', 'log'])

// Resolve Logger
const logger = container.make('logger')
const logger = container.make('logging')
```
:::

## Conditionnal Binding

You can bind instances, singletons, and factories to the container conditionnaly using various methods provided by the Container class.

### Instance

To bind a single instance or value to the container, if it is not already bound:

::: code-tabs#js
@tab:active JavaScript

```js
// Bind value
container.instanceIf('config', { apiUrl: 'https://api.example.com' })

// Bind instance
container.instanceIf('ApiUrl', new URL('https://api.example.com'))
```

@tab TypeScript

```ts
// Bind value
container.instanceIf('config', { apiUrl: 'https://api.example.com' })

// Bind instance
container.instanceIf('ApiUrl', new URL('https://api.example.com'))
```
:::

### Singleton

To bind a resolver function that returns a singleton instance, if it is not already bound:

::: code-tabs#js
@tab:active JavaScript

```js
container.singletonIf('logger', () => new Logger())
```

@tab TypeScript

```ts
container.singletonIf('logger', () => new Logger())
```
:::

### Factory

To bind a resolver function that returns a new instance each time, if it is not already bound:

::: code-tabs#js
@tab:active JavaScript

```js
container.bindingIf('userService', () => new UserService())
```

@tab TypeScript

```ts
container.bindingIf('userService', () => new UserService())
```
:::

## Resolving Dependencies

You can resolve dependencies from the container using the `make` method:

::: code-tabs#js
@tab:active JavaScript

```js
const config = container.make('config')
const logger = container.make('logger')
const userService = container.make('userService')
```

@tab TypeScript

```ts
const config = container.make('config')
const logger = container.make('logger')
const userService = container.make('userService')
```
:::

### Proxied Resolving

Proxied resolving allows you to resolve dependencies through the container using the proxy pattern. 
This means you can access dependencies directly as if they were properties of the container instance, 
making the syntax cleaner and more intuitive.

::: code-tabs#js
@tab:active JavaScript

```js
const logger = container.logger
const config = container.config
const userService = container.userService
```

@tab TypeScript

```ts
// N/A
```
:::

### Destructuring Resolving

Destructuring resolving allows you to resolve multiple dependencies at once by destructuring the container. 
This method provides a concise and convenient way to access several dependencies simultaneously.

::: code-tabs#js
@tab:active JavaScript

```js
const { config, logger, userService } = container
```

@tab TypeScript

```ts
// N/A
```
:::

### On-Demand Resolving

This method provides a convenient way to resolve a value from the container by its key and return it wrapped in a factory function. 
This approach is useful when you need to create multiple instances of a dependency on demand.

::: code-tabs#js
@tab:active JavaScript

```js
// Get the logger factory
const loggerFactory = container.factory('logger')

// Resolve later
const logger = loggerFactory()
```

@tab TypeScript

```ts
// Get the logger factory
const loggerFactory = container.factory('logger')

// Resolve later
const logger = loggerFactory()
```
:::

### Conditional Resolving

This method checks if the dependency is already bound in the container. If it is, the dependency is resolved. 
If not, the method binds the dependency and then resolves it. 
This ensures that dependencies are always available when needed, without redundant bindings.

::: code-tabs#js
@tab:active JavaScript

```js
// Assuming Logger is a class that we want to ensure is bound and resolved
const logger = container.resolve(Logger);

// The first time resolve is called, Logger will be bound and resolved
// Subsequent calls will simply resolve the already bound Logger instance
```

@tab TypeScript

```ts
// Assuming Logger is a class that we want to ensure is bound and resolved
const logger = container.resolve(Logger);

// The first time resolve is called, Logger will be bound and resolved
// Subsequent calls will simply resolve the already bound Logger instance
```
:::

## Using Aliases

Aliases allow you to reference bindings by alternative names.

### Setting Aliases

To set an alias for a binding:

::: code-tabs#js
@tab:active JavaScript

```js
// Alias can be a string
container.alias(Logger, 'logging')

// Or an array of string
container.alias(Logger, ['logger', 'logging', 'log'])
```

@tab TypeScript

```ts
// Alias can be a string
container.alias(Logger, 'logging')

// Or an array of string
container.alias(Logger, ['logger', 'logging', 'log'])
```
:::

### Retrieving Aliases

To retrieve a binding by its alias:

::: code-tabs#js
@tab:active JavaScript

```js
const logger = container.make('logging')
```

@tab TypeScript

```ts
const logger = container.make('logging')
```
:::

## Checking Bindings

You can check if a binding or alias exists in the container:

::: code-tabs#js
@tab:active JavaScript

```js
// With bound method
const hasLogger = container.bound(Logger) // true

// Can be used with alias
const hasLogger = container.bound('logging') // true

// An alias of bound method
const hasLogger = container.has(Logger) // true

// Check if this alias exists
const isAlias = container.isAlias('logging') // true
```

@tab TypeScript

```ts
// With bound method
const hasLogger = container.bound(Logger) // true

// Can be used with alias
const hasLogger = container.bound('logging') // true

// An alias of bound method
const hasLogger = container.has(Logger) // true

// Check if this alias exists
const isAlias = container.isAlias('logging') // true
```
:::

## Clearing the Container

To remove all bindings and reset the container:

::: code-tabs#js
@tab:active JavaScript

```js
container.clear()
```

@tab TypeScript

```ts
container.clear()
```
:::

With this library, managing dependencies in your application becomes much simpler and more efficient. 
By adhering to the principles of Inversion of Control and Dependency Injection, you can create more modular, 
testable, and maintainable code.