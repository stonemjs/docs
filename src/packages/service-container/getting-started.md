---
title: Getting Started
---

To get started with `Stone Service Container`, you need to import the Container class and create an instance of it. 
This instance will act as the central registry for all your dependencies in your application.

Let's begin with a simple example to discover the power of the service container by logging a message.

1. **Create the Logger:**

::: code-tabs#js
@tab:active JavaScript

```js
// Your Logger class
class Logger {
  log (message) {
    return console.log(message)
  }
}
```

@tab TypeScript

```ts
// Your Logger class
class Logger {
  log (message: string) {
    return console.log(message)
  }
}
```
:::

2. **Create the class that provides the message:**

::: code-tabs#js
@tab:active JavaScript

```js
// Your class A
class A {
  getMessage () {
    return 'Hello World!'
  }
}
```

@tab TypeScript

```ts
// Your class A
class A {
  getMessage (): string {
    return 'Hello World!'
  }
}
```
:::

3. **Create the class that will log the message using the logger:**

::: code-tabs#js
@tab:active JavaScript

```js
// Your class B
class B {
  constructor ({ a, logger }) { // Dependency injection by destructuring in action
    this.a = a
    this.logger = logger
  }

  logMessage () {
    this.logger.log(this.a.getMessage())
  }
}
```

@tab TypeScript

```ts
import { Binding } from '@stone-js/service-container'

// Your class B
class B {
  private readonly a: A
  private readonly logger: Logger

  constructor ({ a, logger }: Binding<A | Logger>) { // Dependency injection by destructuring in action
    this.a = a as A
    this.logger = logger as Logger
  }

  logMessage () {
    this.logger.log(this.a.getMessage())
  }
}
```
:::

4. **Use the container to manage these dependencies:**

::: code-tabs#js
@tab:active JavaScript

```js
import { Container } from '@stone-js/service-container'

// Create a container instance
const container = new Container()

// Auto-binding classes
container
  .autoBinding(A)
  .autoBinding(B)
  .autoBinding(Logger)
  .alias(A, 'a')
  .alias(B, 'b')
  .alias(Logger, 'logger')

// Make B instance
const b = container.make(B)

// Or Via proxy
const b = container.b

// Or via destructuring assignment
const { b } = container

// Call logMessage method
b.logMessage() // Output: Hello World!
```

@tab TypeScript

```ts
import { Container } from '@stone-js/service-container'

// Create a container instance
const container = new Container()

// Auto-register components
container
  .autoBinding(A)
  .autoBinding(B)
  .autoBinding(Logger)
  .alias(A, 'a')
  .alias(B, 'b')
  .alias(Logger, 'logger')

// Make B instance
const b = container.make(B)

// Call logMessage method
b.logMessage() // Output: Hello World!
```
:::

We covered how to define and register dependencies using the `Container` class, and how to leverage dependency injection through destructuring and the Proxy pattern. 

By following these steps, you can effectively manage dependencies in your applications, making them more modular, testable, and maintainable.