---
title: Routing
---

The Stone Router is a flexible routing system for defining routes to application functionalities. It offers a robust API for defining routes, both implicitly and explicitly, using decorators, handling nested routes, and managing route parameters, aliases, and middleware, ensuring a smooth development experience.

## Installation

::: important info
If you created your Stone.js project using the `create-stone` utility and chose the `api` template, the router should already be installed and ready to use.
:::

Stone Router is available on the [npm registry](https://www.npmjs.com) and can be installed as follows:

::: code-tabs#shell
@tab:active npm

```bash
npm i @stone-js/router
```

@tab yarn

```bash
yarn add @stone-js/router
```

@tab pnpm

```bash
pnpm add @stone-js/router
```
:::

## Configuration

Given that Stone.js adopts an adaptive configuration approach, there are two ways to configure the router. Choose the one that suits you best:

### Implicit Configuration

The simplest way is implicit configuration, which involves using the `RouterProvider` decorator.

An example with the decorator:

```js
import { StoneApp } from '@stone-js/core/decorators'
import { RouterProvider } from '@stone-js/router/decorators'

@StoneApp()
@RouterProvider()
export class Application {}
```

### Explicit Configuration

The other way is through explicit configuration, which involves exporting the router's configuration and adapting it as needed.

Here is the command to export the configuration to the `config` directory:

```sh
npm run export @stone-js/router
```

This script will create the file `config/router.mjs` or `config/router.ts` for TypeScript applications with default configurations, but you can adapt it to your needs as all configuration fields are documented within the file.

## Route Definition

Stone.js, being a flexible framework, allows you to define your routes either explicitly or implicitly. You are free to choose the method that best suits your needs. For simplicity, we will focus on explicit definitions for now and cover implicit definitions in the controller section.

::: important
For best practices, uniformity, and coherence, it is recommended to adopt and maintain a single approach to route definition per project.
:::

### Explicit Route Definition

The router provides several APIs for defining routes explicitly:

- `router.get({})`
- `router.post({})`
- `router.put({})`
- `router.patch({})`
- `router.delete({})`
- `router.options({})`
- `router.any({})`
- `router.match({})`
- `router.register([])`

Here is a simple example of defining routes:

::: code-tabs#js

@tab:active JavaScript

```js
import { HttpResponse } from '@stone/http-core'
import { StoneApp } from '@stone-js/core/decorators'
import { RouterProvider } from '@stone-js/router/decorators'
import { NodeHttpAdapter } from '@stone-js/node-adapter/decorators'

@StoneApp()
@RouterProvider()
@NodeHttpAdapter({ default: true })
export class Application {
  constructor(container) {
    this.container = container
  }

  boot() {
    this.container.router.get({
      path: '/users',
      action: (eventContext) => HttpResponse.json([])
    })
  }
}
```

@tab TypeScript

```ts
import { EventContext } from '@stone/router'
import { HttpResponse } from '@stone/http-core'
import { StoneApp } from '@stone-js/core/decorators'
import { RouterProvider } from '@stone-js/router/decorators'
import { NodeHttpAdapter } from '@stone-js/node-adapter/decorators'

interface CustomBinding {
  router: Router
}

@StoneApp()
@RouterProvider()
@NodeHttpAdapter({ default: true })
export class Application {
  private readonly container: CustomBinding

  constructor(container: CustomBinding) {
    this.container = container
  }

  boot() {
    this.container.router.get({
      path: '/users',
      action: (eventContext: EventContext) => HttpResponse.json([])
    })
  }
}
```
:::

#### Register

The `register` API offers greater flexibility in defining routes, allowing us to group our routes in a hierarchical parent-child structure, which will be discussed later.

Here is a simple example using the `register` API:

::: code-tabs#js

@tab:active JavaScript

```js
import { HttpResponse } from '@stone/http-core'
import { StoneApp } from '@stone-js/core/decorators'
import { RouterProvider } from '@stone-js/router/decorators'
import { NodeHttpAdapter } from '@stone-js/node-adapter/decorators'

@StoneApp()
@RouterProvider()
@NodeHttpAdapter({ default: true })
export class Application {
  boot() {
    this.container.router.register(this.routeDefinitions())
  }

  routeDefinitions() {
    return [
      {
        path: '/users',
        method: 'GET',
        action: (eventContext) => HttpResponse.json([])
      }
    ]
  }
}
```

@tab TypeScript

```ts
import { StoneApp } from '@stone-js/core/decorators'
import { Router, EventContext } from '@stone/router'
import { RouterProvider } from '@stone-js/router/decorators'
import { NodeHttpAdapter } from '@stone-js/node-adapter/decorators'
import { HttpResponse, OutgoingHttpResponse } from '@stone/http-core'

interface CustomBinding {
  router: Router
}

@StoneApp()
@RouterProvider()
@NodeHttpAdapter({ default: true })
export class Application {
  private readonly container: CustomBinding

  boot() {
    this.container.router.register(this.routeDefinitions())
  }

  routeDefinitions() {
    return [
      {
        path: '/users',
        method: 'GET',
        action: (eventContext: EventContext) => HttpResponse.json([])
      }
    ]
  }
}
```
:::

As you can see, the routes are registered within the `boot` method because by the time this hook is executed, all services are registered and ready to be used.

### Controller

The previous example served as a starting point to facilitate understanding, but the best way to use routes is with controllers. Controllers help you organize your application's functionalities and keep your main handler clean.

#### Implicit

The router provides several decorators for defining routes implicitly:

- `Get({})`
- `Post({})`
- `Put({})`
- `Patch({})`
- `Delete({})`
- `Options({})`
- `Any({})`
- `Match({})`
- `Group({})`
- `Controller({})`

::: important info
All decorators are method decorators, except for `Controller`. The `Controller` decorator is mandatory in the context of implicit route definitions.
:::

Here is a simple example of usage:

::: code-tabs#js

@tab:active JavaScript

```js
import { EventContext } from '@stone/router'
import { HttpResponse } from '@stone/http-core'
import { Get, Post, Controller } from '@stone-js/router/decorators'

@Controller()
export class UserController {
  @Get({ path: '/users' })
  getUsers({ event }) {
    return HttpResponse.json([])
  }

  @Post({ path: '/users' })
  saveUser({ event }) {
    return HttpResponse.noContent()
  }
}
```

@tab TypeScript

```ts
import { EventContext } from '@stone/router'
import { Get, Post, Controller } from '@stone-js/router/decorators'
import { HttpResponse, OutgoingHttpResponse } from '@stone/http-core'

@Controller()
export class UserController {
  @Get({ path: '/users' })
  getUsers({ event }: EventContext): OutgoingHttpResponse {
    return HttpResponse.json([])
  }

  @Post({ path: '/users' })
  saveUser({ event }: EventContext): OutgoingHttpResponse {
    return HttpResponse.noContent()
  }
}
```
:::

#### Explicit

Routes can also be explicitly defined for controllers to offer greater flexibility. To do this, we use a class with the mandatory `definitions` method that returns the route definitions. The `Routes` decorator ensures the automatic registration of routes and takes global options to apply to the routes as parameters.

::: code-tabs#js

@tab:active JavaScript

```js
import { GET, POST } from '@stone-js/http-core'
import { Routes } from '@stone-js/router/decorators'


@Routes({ prefix: '/v1' }) // Define global routes config here
export class AppRoutes {
  definitions() {
    return [
      {
        path: '/users',
        method: GET,
        action: { getUsers: UserController }
      },
      {
        path: '/users',
        method: POST,
        action: { saveUser: UserController }
      }
    ]
  }
}
```

@tab TypeScript

```ts
import { GET, POST } from '@stone-js/http-core'
import { Routes, Definition } from '@stone-js/router/decorators'


@Routes({ prefix: '/v1' }) // Define global routes config here
export class AppRoutes {
  definitions(): Definition[] {
    return [
      {
        path: '/users',
        method: GET,
        action: { getUsers: UserController }
      },
      {
        path: '/users',
        method: POST,
        action: { saveUser: UserController }
      }
    ]
  }
}
```
:::

As you can see, for a controller, the `action` takes a key-value literal object, with the key being the method to call and the value being the class that contains the method.

### Naming Routes

To name our routes, we use the `name` property in the definition.

```js
{
  path: '/v1/users',
  name: 'users.list'
}
```

### Fallback

To define a route as a fallback, simply add `fallback: true` in the definition.

```js
{
  path: '/v1/:fallback*',
  fallback: true
}
```

### Grouping Routes

To group route definitions, use the `children` property, which takes an array of route definitions.

```js
{
  path: '/users',
  name: 'users',
  children: [
    {
      path: '/',
      method: 'GET',
      name: 'list',
      action: { getUsers: UserController }
    }
  ]
}
```

## Route Parameters

Sometimes, we need to define dynamic segments for the path of our routes to have different matches for the same route. These dynamic segments are known as route parameters.

To define route parameters, simply use colons `:`.

```js
{
  ...
  path: '/users/:id',
  ...
}
```

### Optional Parameters

To define optional route parameters, we use a question mark `?`.

```js
{
  ...
  path: '/users/:id?',
  ...
}
```

### Validation Rules

We can apply validation rules to our route parameters:

```js
{
  path: '/users/:id(\\d+)',
}
```

Notes:

- Rules are defined within parentheses `(\\d+)`.
- Rules must be Regex.
- Backslashes in Regex must be escaped, so instead of `\d+` we use `\\d+`.
- Rules can be used with optional parameters `:id(\\d+)?`.

### Default Value

We can define default values for optional parameters. This value will be assigned to the route parameter when it is not defined in the request.

Default values are defined within route parameters using the `=` mark.

```js
{
  path: '/users/:id(\\d+)?=defaultValue',
}
```

Notes:

- Default values are defined after the equal mark `=defaultValue`.
- Default values must be the last item in the definition `:id(\\d+)?=defaultValue`.

## EventContext

When in the context of the Router, an `EventContext` instead of an `event` is passed as a parameter to all route actions.

::: code-tabs#js

@tab:active JavaScript

```js
// Controller
export class UserController {
  getUsers(eventContext) {
    console.log(eventContext.event);
  }
}

// Route definitions
{
  path: '/users',
  action: (eventContext) => console.log(eventContext.event)
}
```

@tab TypeScript

```ts
import { EventContext } from '@stone-js/router';

// Controller
export class UserController {
  getUsers(eventContext: EventContext) {
    console.log(eventContext.event);
  }
}

// Route definitions
{
  path: '/users',
  action: (eventContext: EventContext) => console.log(eventContext.event)
}
```
:::

Here is what the `EventContext` object looks like:

```ts
type EventContext = {
  route: Route; // Current route
  event: IncomingEvent | IncomingHttpEvent; // Current incoming event
  request: IncomingEvent | IncomingHttpEvent; // An alias of event
  parameters: { [key: string]: any }; // Route parameters if exist
  params: { [key: string]: any }; // An alias of parameters
  body?: any; // Event body if exists
  payload?: any; // An alias of body
  query: URLSearchParams; // Event query parameters if exist
};
```

## Accessing the Current Route

You can access the current route from the router using the `current` method:

```js
router.current();
```

You can access the name of the current route using the `currentRouteName` method:

```js
router.currentRouteName();
```

You can inspect the name of the current route using the `isCurrentRouteNamed` method:

```js
router.isCurrentRouteNamed('users.list');
```

## Middleware

To apply middleware directly to routes, use the `middleware` property, which takes an array of middleware.

```js
{
  ...
  middleware: [AuthMiddleware, AdminMiddleware],
  ...
}
```

## Generating Routes

To generate a URL from a route name, use the `generate` method from the router:

```js
router.generate('users.list');
```

## Model Binding

Often, the values of route parameters are used to fetch models from the database. With model binding, Stone Router can fetch models for you and inject them directly into the routes. Instead of injecting a user ID, the router will inject the user model fetched from the database.

Let's define your model:

```js
// Your model or service
export class User {
  resolveRouteBinding(key, value) {
    return this.findOneBy({ [key]: value }); // Fetch data example
  }
}
```

Now let's define your controller:

```js
@Controller()
export class UserController {
  @Get({ 
    path: '/users/:user@id(\\d+)',
    bindings: { id: User },
  })
  getUsers({ params }) {
    console.log(params.user)
    return HttpResponse.json([])
  }
}
```

In this example `:user@id(\\d+)`, the model will be injected into `params.user` and `id` will be used as the key for the `resolveRouteBinding` method to resolve the model.

Notes:

- The `bindings` option is used to bind models or services to route parameter values.
- The `bindings` option takes a literal object as a value, with keys corresponding to parameter values and the model or service as the value.
- The keys' values in `bindings` must be classes.
- The `resolveRouteBinding` method must be present in the model or service and can be a static or instance method.
- The logic for fetching the model should be implemented in the `resolveRouteBinding` method.
- It should return the model or null if no model is found.

## Listing Routes from the CLI

The Router allows you to list all the routes exposed within your application using the Stone.js CLI:

```sh
stone router list
```

## Global Configuration

All global parameters can be defined via `RouterProvider` or `Routes`.

```js
// Example with RouterProvider
@RouterProvider({
  prefix: '/v1',
  strict: false,
  skipMiddleware: false,
  ...
})
export class Application {}

// Example with Routes
@Routes({
  prefix: '/v1',
  strict: false,
  skipMiddleware: false,
  ...
})
export class AppRoutes {}
```

## Further Reading

We strongly recommend looking into the [router documentation](../../packages/router/getting-started.md), 
as this section provides only a brief overview of the router's features. 
The documentation is very detailed and offers many use cases.