---
title: Adapter
---

The Adapter is the main component of the integration layer, working in conjunction with the platform to ensure the [adaptive transformation](../../cookbook/node-adapter/#adaptive-transformation) of inputs and outputs. It integrates Stone.js applications with various platforms seamlessly.

The primary role of the adapter is to convert platform-specific inputs into a Stone.js `IncomingEvent`, pass this event to an event handler for processing, and return a Stone.js `OutgoingResponse`. Finally, this response is converted back into platform-specific output, all in a dynamic and adaptive manner, thanks to mappers and middleware.

## Mapper

Mappers play a crucial role within the adapter, ensuring the dynamic conversion of system inputs into Stone.js events (input mappers) and Stone.js responses into system outputs (output mappers) through the use of middleware.

### Event Context

The `EventContext` object is created for each new incoming event from the platform, representing the context of the current event. This context is then passed to middleware to handle the conversion of inputs and outputs.

The `EventContext` consists of:
- `event`: Represents a Stone.js `IncomingEvent`.
- `result`: Represents a Stone.js `OutgoingResponse`, used to construct the system `response`.
- `message`: Represents the platform input used to build the `event` object.
- `response`: Represents the platform output returned to the user.
- `context`: Represents the platform context.

### Middleware

Middleware is essential within adapters as it enables the dynamic conversion performed by mappers. The substantial task of converting inputs and outputs is divided into sub-tasks, each handled by different middleware.

Middleware can be either functions or classes. They must have `AdapterMiddleware` as a suffix, and in the case of a class, the `handle` method is mandatory.

Here is an example of middleware that constructs the `event` object from the `message` object of a Node HTTP server:

::: code-tabs#js
@tab:active JavaScript

```js
export class HttpAdapterMiddleware {
  /**
   * Handle
   * 
   * @param   {EventContext} context
   * @param   {Function} next
   * @returns {EventContext}
   */
  handle (context, next) {
    context.event.method = context.message.method
    context.event.headers = context.message.headers
    return next(context)
  }
}
```

@tab TypeScript

```ts
import { EventContext } from '@stone-js/core'

export class HttpAdapterMiddleware {
  /**
   * Handle
   * 
   * @param   {EventContext} context
   * @param   {Function} next
   * @returns {EventContext}
   */
  handle (context: EventContext, next: (context: EventContext) => EventContext) {
    context.event.method = context.message.method
    context.event.headers = context.message.headers
    return next(context)
  }
}
```
:::

Each adapter comes with built-in middleware, but you are free to extend the functionality by creating your own middleware. Please refer to the [middleware documentation](../essentials/middleware.md) for more information on how to create and register middleware within different layers.

## Hooks

The adapter provides hooks to the event lifecycle:

- **`OnInit`**: Runs once before everything when the app first starts, useful for one-time initialization.
- **`BeforeHandle`**: Runs at each event and just before running the action handler, useful for configuration or initialization at each event.
- **`OnTerminate`**: Runs after each response has been sent, useful for cleanup or finalization tasks.

## Handler

The handler is the communication interface with the adapter, used to intercept incoming events (`IncomingEvent`) and return a response (`OutgoingResponse`) to the adapter. A handler can be either a function or a class. In the case of a class, the `handle` method is used to intercept events, while the `beforeHandle` and `onTerminate` methods serve as hooks.

The Kernel of the initialization layer is an example of a handler that ensures communication with the adapter:

```js
export class Kernel {
  /**
   * Hook that runs at each event and before everything else.
   */
  async beforeHandle () {}

  /**
   * Handle IncomingEvent.
   *
   * @param   {IncomingEvent} event
   * @returns {OutgoingResponse}
   */
  async handle (event) {}

  /**
   * Hook that runs just before or just after returning the response.
   */
  async onTerminate () {}
}
```

### Handler Resolution

The adapter uses a process called Handler Resolution, in which it uses a factory method passed during its creation to resolve a unique instance of the action handler for each event. This ensures that each event is managed by a new instance of the action handler, maintaining isolation and consistency between events.

## Usage

Currently, Stone.js comes with the following adapters:
- [`NodeHTTPAdapter`](../../packages/node-adapter): Allows your application to run on a Node HTTP server.
- [`NodeConsoleAdapter`](../deeper/cli.md): Allows your application to run from the command line.
- [`AWSLambdaAdapter`](../../packages/node-adapter/): Allows your application to run in an AWS Lambda function.

::: important
Although these adapters are included, they are not installed by default. Please refer to their respective documentation to learn how to install and configure them.
:::

To use an adapter, simply decorate the main handler with the adapter's decorator:

```js
// app/Application.mjs
import { StoneApp } from '@stone-js/core/decorators'
import { NodeHttpAdapter } from '@stone-js/node-adapter/decorators'

@StoneApp()
@NodeHttpAdapter({ default: true })
export class Application {}
```

In this example, our application will run in a Node HTTP environment. It is important to note that `default` is set to `true` because no adapter is configured by default, so you need to indicate to Stone.js which adapter to use as the default.

### Runtime Adapter

It is possible to use multiple adapters within a single project and choose which one to use at runtime:
- Import the decorators and decorate the main handler.
- Define at least one of them as the default adapter.
- Set the current adapter using `@StoneApp`.

```js
// app/Application.mjs
import { Env } from '@stone-js/env'
import { StoneApp } from '@stone-js/core/decorators'
import { NODE_HTTP_PLATFORM } from '@stone-js/node-adapter'
import { NodeHttpAdapter } from '@stone-js/node-adapter/decorators'
import { AWSLambdaAdapter } from '@stone-js/aws-lambda-adapter/decorators'

@StoneApp({
  adapter: {
    current: Env.string('STONE_ADAPTER', NODE_HTTP_PLATFORM)
  }
})
@AWSLambdaAdapter()
@NodeHttpAdapter({ default: true })
export class Application {}
```

As you can see, we use two adapters: `AWSLambdaAdapter` and `NodeHttpAdapter`. We rely on the environment variable `STONE_ADAPTER` to choose the adapter at runtime. With this setup, the application can easily run both locally and in an AWS Lambda function.

## Conclusion

As you can see, the power of omnipresent applications relies heavily on adapters. Please refer to the documentation for each adapter to learn how to configure and use them effectively.