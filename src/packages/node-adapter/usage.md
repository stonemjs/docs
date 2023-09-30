---
title: Usage
---

The `NodeHttpAdapter` is a wrapper around the Node.js HTTP and HTTPS modules. 
Its purpose is to run a Stone.js HTTP application in a Node.js environment. 
It converts inputs and outputs into Stone.js events using mappers, with the event lifecycle managed via hooks.

## Creating a New Adapter

To create a new adapter, you can use the static factory method `create` or the `new` keyword. It requires a [handler factory](#handler-factory) as a parameter and options.

**Options:**
- `inputMapper`: The mapper for converting inputs into Stone.js events.
- `outputMapper`: The mapper for converting Stone.js outputs into Node.js responses.
- `url`: The URL where the Node.js server will run to receive requests. The default value is `http://localhost:8080`.
- `server`: Options to be passed to the Node.js HTTP server.
- `logger`: The logger for logging errors.

::: code-tabs#js
@tab:active JavaScript

```js
const options = { url: 'http://localhost:8080' };
const app = (event) => console.log('Hello world!', event);
const httpAdapter = NodeHttpAdapter.create(() => app, options);
```

@tab TypeScript

```ts
import { IncomingHttpEvent } from '@stone-js/http-core';

const options = { url: 'http://localhost:8080' };
const app = (event: IncomingHttpEvent) => console.log('Hello world!', event);
const httpAdapter = NodeHttpAdapter.create(() => app, options);
```
:::

We will analyze each aspect of these configurations in depth.

### Handler
A handler is the entry point to your application and is used by the adapters to intercept incoming events and provide an output response. The handler is mandatory when creating an adapter.

**Stone.js adapters support two types of handlers:**
- Implicit handler
- Explicit handler

**Implicit Handler**
An implicit handler is a function that takes an event as a parameter and returns a response. It is called for each new request and allows using adapters in standalone mode with minimal, simple, and low-level usage.

Example of an implicit handler:

```js
const app = (event) => {
  console.log('I am the event handler', event);
};
```

**Explicit Handler**
An explicit handler can be either a literal object or an instance of a class containing a `handle` method, which takes the event as a parameter and returns a response. It is called for each new request. In the context of an object, if lifecycle methods are present, they are called in order. With an object, you can benefit from hooks within the object itself. The only mandatory method for an object handler is the `handle` method, while the lifecycle methods are:
- `beforeHandle`: Executes at each event before calling the `handle` method.
- `onTerminate`: Executes after each response is sent to the user.

Example of an explicit handler:

```js
// ES6 class
class Application {
  beforeHandle() {
    console.log('I ran at each request and just before the event handler');
  }

  handle(event) {
    console.log('I am the event handler', event);
  }

  onTerminate() {
    console.log('I ran after each response sent by the event handler');
  }
}

// POJO
const Application = {
  beforeHandle() {
    console.log('I ran at each request and just before the event handler');
  },

  handle(event) {
    console.log('I am the event handler', event);
  },

  onTerminate() {
    console.log('I ran after each response sent by the event handler');
  }
};
```

### Handler Factory
Handler resolution is made possible by the handler factory. It is a function responsible for providing a handler, which means a new instance of your application for each call. This ensures that each call is isolated and consistent according to the event.

Example of a handler factory:

```js
// Explicit factory handler
const factoryHandler = () => new Application();

// Implicit factory handler
const factoryHandler = () => (event) => console.log('I am the event handler', event);
```

### Hooks
Hooks manage the event lifecycle. The available hooks are:
- `onInit`: Runs once before everything when the app first starts. Useful for one-time initialization.
- `beforeHandle`: Runs at each event just before the action handler. Useful for configuration or initialization at each event.
- `onTerminate`: Runs after each response has been sent.

You can subscribe to these hooks from the adapter instance or from your explicit handler. Note that the only way to subscribe to the `onInit` hook is through the adapter directly, as the application is not yet initialized when it executes.

**From the adapter:**

```js
httpAdapter.hook('onInit', () => console.log('Application started'));
httpAdapter.hook('beforeHandle', () => console.log('Will handle event'));
httpAdapter.hook('onTerminate', () => console.log('Event handled'));
```

**From your explicit handler:**

```js
// ES6 class
class Application {
  beforeHandle() {
    console.log('Will handle event');
  }

  onTerminate() {
    console.log('Event handled');
  }
}

// POJO
const Application = {
  beforeHandle() {
    console.log('Will handle event');
  },

  onTerminate() {
    console.log('Event handled');
  }
};
```

### AdapterMapper
Mappers are mandatory for transforming inputs and outputs.

**Introduction:**
- It ensures the conversion of inputs and outputs via pipes.
- It allows customization of inputs and outputs through pipes.
- This forms the concept of Adaptive Transformation, enabling you to choose what to convert for inputs and outputs.

**Usage:**
To create an adapter mapper, you need:
- A service container.
- A list of pipes/middleware to ensure the conversion.
- A destination resolver, useful for handling the final result, the output of the pipes.

Middlewares can be functions or classes and must have a `handle` method in the case of a class. They take a passable object and a `next` function, which must be called with the passable object, and then return the passable object. The passable object contains the following properties:
- `message`: Represents the input event from Node.js.
- `response`: Represents the output event from Node.js.
- `event`: Represents the event transformed through the pipes.
- `result`: Represents the Stone.js response to be transformed into a Node.js response.

**Destination Resolver:**
The destination resolver is useful for finalizing the transformation. For example, the `event` property of the passable object is a literal object and must be converted into a Stone.js event. This work is done at the end of the transformation by the destination resolver. The destination resolver must be a function that takes the passable object as a parameter and returns a value.

Example of a destination resolver:

```js
import { IncomingHttpEvent } from '@stone-js/http-core';

// Input resolver
const inputResolver = (passable) => IncomingHttpEvent.create(passable.event);

// Output resolver
const outputResolver = (passable) => passable.response;
```

Given the overview, here is an example of a mapper:

```js
import { AdapterMapper } from '@stone-js/http';
import { IncomingHttpEvent } from '@stone-js/http-core';

// We create our middleware
const inputMiddleware = (passable, next) => {
  passable.event.method = passable.message.method;
  passable.event.headers = passable.message.headers;
  return next(passable);
};

const outputMiddleware = (passable, next) => {
  passable.response.send = () => passable.response.end(passable.result.content);
  return next(passable);
};

// Input resolver
const inputResolver = (passable) => IncomingHttpEvent.create(passable.event);

// Output resolver
const outputResolver = (passable) => passable.response;

// We create our Adapter
const inputAdapter = AdapterMapper.create(null, [inputMiddleware], inputResolver);
const outputAdapter = AdapterMapper.create(null, [outputMiddleware], outputResolver);
```

## Running the Application
To run the application, use the `run` method from the adapter:

```js
adapter.run();
```

### Hot Launch
You can create and run the application simultaneously using the static method `createAndRun`, which takes the same parameters as `create` but also starts the application immediately:

```js
NodeHttpAdapter.createAndRun();
```