---
title: Getting Started
---

The `NodeHttpAdapter` is designed to seamlessly integrate with the **Stone.js** framework, 
allowing you to leverage its powerful features for handling HTTP requests and responses within a Node.js application. 

Whether you are building a new application with **Stone.js** or integrating it into an existing Node.js project, 
the `NodeHttpAdapter` provides the flexibility and functionality needed to manage HTTP interactions efficiently.

**Steps:**

1. **Setup**: Create a new Node.js project or use an existing one.

```sh
mkdir my-stone-js-app
cd my-stone-js-app
npm init -y
```

2. **Install Dependencies**: Install the necessary dependencies, including the core packages.

```sh
npm install @stone/core @stone/http-core @stone-js/node-adapter
```

3. **Create Mappers**: Define input and output mappers to transform platform incomming message to `IncomingHttpEvent`
and `OutgoingHttpResponse` to platform response.

::: code-tabs#js
@tab:active JavaScript

```js
import { AdapterMapper } from '@stone/core'
import { IncomingHttpEvent } from '@stone/http-core'
import {
  SendMiddleware,
  HostMiddleware,
  CommonMiddleware,
  HeaderStatusMiddleware
} from '@stone-js/node-adapter'

// Built in middleware to transform incomming message
// You can define your own middleware
const inputMiddleware = [CommonMiddleware, HostMiddleware]

// Built in middleware to transform OutgoingHttpResponse
// You can define your own middleware
const outputMiddleware = [HeaderStatusMiddleware, SendMiddleware]

// Create an inputMapper to transform incomming message to IncomingHttpEvent
const inputMapper = AdapterMapper.create(null, inputMiddleware, ({ event }) => IncomingHttpEvent.create(event))

// Create an outputMapper to transform Stone OutgoingHttpResponse to platform specific response
const outputMapper = AdapterMapper.create(null, outputMiddleware, ({ event, response }) => response.prepare(event))
```

@tab TypeScript

```ts
import { AdapterMapper } from '@stone/core'
import { IncomingHttpEvent } from '@stone/http-core'
import {
  SendMiddleware,
  HostMiddleware,
  CommonMiddleware,
  HeaderStatusMiddleware
  } from '@stone/@stone-js/node-adapter'

// Built in middleware to transform incomming message
// You can define your own middleware
const inputMiddleware = [CommonMiddleware, HostMiddleware]

// Built in middleware to transform OutgoingHttpResponse
// You can define your own middleware
const outputMiddleware = [HeaderStatusMiddleware, SendMiddleware]

// Create an inputMapper to transform incomming message to IncomingHttpEvent
const inputMapper = AdapterMapper.create(null, inputMiddleware, ({ event }) => IncomingHttpEvent.create(event))

// Create an outputMapper to transform Stone OutgoingHttpResponse to platform specific response
const outputMapper = AdapterMapper.create(null, outputMiddleware, ({ event, response }) => response.prepare(event))
```
:::

4. **Create Action Handler:** Define your action handler class.

::: code-tabs#js
@tab:active JavaScript

```js
import { HttpResponse } from '@stone/http-core'

export class Application {
  // Your Handler
  handle(event) {
    console.log('Received Event from:', event.host)
    return HttpResponse.json({ message: 'Hello, world!' })
  }
}
```

@tab TypeScript

```ts
import {
  HttpResponse,
  IncomingHttpEvent,
  OutgoingHttpResponse
} from '@stone/http-core'

export class Application {
  // Your Handler
  handle(event: IncomingHttpEvent): OutgoingHttpResponse {
    console.log('Received Event from:', event.host)
    return HttpResponse.json({ message: 'Hello, world!' })
  }
}
```
:::

5. **Create Adapter and run it**: Set up the adapter with the necessary parameters.

::: code-tabs#js
@tab:active JavaScript

```js
import { NodeHTTPAdapter } from '@stone-js/node-adapter'

// Create a Node http server adapter and run your App
NodeHTTPAdapter.createAndRun(() => new Application(), { inputMapper, outputMapper })
```

@tab TypeScript

```ts
import { NodeHTTPAdapter } from '@stone-js/node-adapter'

// Create a Node http server adapter and run your App
NodeHTTPAdapter.createAndRun(() => new Application(), { inputMapper, outputMapper })
```
:::

These examples are just for understanding the internal functioning of Stone.js 
because you are more productive when you understand what is happening under the hood.