[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [NodeHttpAdapter](../README.md) / NodeHttpAdapter

# Class: NodeHttpAdapter

Defined in: [src/NodeHttpAdapter.ts:45](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/NodeHttpAdapter.ts#L45)

Node.js HTTP Adapter for the Stone.js framework.

The `NodeHTTPAdapter` is responsible for integrating a Node.js HTTP/HTTPS server
with the Stone.js framework, converting incoming HTTP requests into `IncomingHttpEvent`
instances, and processing outgoing responses into the `OutgoingHttpResponse` format.

It provides lifecycle hooks for initialization, termination, and error handling,
ensuring seamless integration with Stone.js.

## Template

The raw HTTP event type (e.g., `IncomingMessage`).

## Template

The raw HTTP response type (e.g., `ServerResponse`).

## Template

The server instance type (e.g., `NodeHttpServer`).

## Template

The Stone.js incoming event type (e.g., `IncomingHttpEvent`).

## Template

Options for creating an incoming event.

## Template

The outgoing response type (e.g., `OutgoingHttpResponse`).

## Template

The adapter context type (e.g., `NodeHttpAdapterContext`).

## Extends

- `Adapter`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`, [`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md)\>

## Constructors

### new NodeHttpAdapter()

> `protected` **new NodeHttpAdapter**(`options`): [`NodeHttpAdapter`](NodeHttpAdapter.md)

Defined in: [src/NodeHttpAdapter.ts:93](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/NodeHttpAdapter.ts#L93)

Constructs a `NodeHTTPAdapter` instance.

This constructor is protected and is intended to be used via the static `create` method.

#### Parameters

##### options

`AdapterOptions`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Configuration options for the adapter.

#### Returns

[`NodeHttpAdapter`](NodeHttpAdapter.md)

#### Overrides

`Adapter< IncomingMessage, ServerResponse, NodeHttpServer, IncomingHttpEvent, IncomingHttpEventOptions, OutgoingHttpResponse, NodeHttpAdapterContext >.constructor`

## Properties

### server

> `protected` `readonly` **server**: [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)

Defined in: [src/NodeHttpAdapter.ts:62](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/NodeHttpAdapter.ts#L62)

The HTTP/HTTPS server instance created by the adapter.

***

### url

> `protected` `readonly` **url**: `URL`

Defined in: [src/NodeHttpAdapter.ts:57](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/NodeHttpAdapter.ts#L57)

The base URL for the server, derived from the Stone.js blueprint configuration.

## Methods

### catchUncaughtExceptionListener()

> `protected` **catchUncaughtExceptionListener**(): `void`

Defined in: [src/NodeHttpAdapter.ts:219](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/NodeHttpAdapter.ts#L219)

Adds listeners for uncaught exceptions and unhandled promise rejections.

Logs errors and ensures the server shuts down gracefully in case of critical errors.

#### Returns

`void`

***

### createServer()

> `protected` **createServer**(): [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)

Defined in: [src/NodeHttpAdapter.ts:200](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/NodeHttpAdapter.ts#L200)

Creates the HTTP or HTTPS server based on the adapter's configuration.

#### Returns

[`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)

A `NodeHttpServer` instance.

***

### eventListener()

> `protected` **eventListener**(`rawEvent`, `rawResponse`): `Promise`\<`ServerResponse`\>

Defined in: [src/NodeHttpAdapter.ts:171](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/NodeHttpAdapter.ts#L171)

Handles incoming HTTP requests and sends them through the adapter's event pipeline.

#### Parameters

##### rawEvent

`IncomingMessage`

The raw HTTP request object.

##### rawResponse

`ServerResponse`

The raw HTTP response object.

#### Returns

`Promise`\<`ServerResponse`\>

A promise resolving to a ServerResponse (e.g., `ServerResponse`).

***

### onInit()

> `protected` **onInit**(): `Promise`\<`void`\>

Defined in: [src/NodeHttpAdapter.ts:131](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/NodeHttpAdapter.ts#L131)

Lifecycle hook for adapter initialization.

This method is called during the adapter's startup process and performs tasks
such as setting up exception listeners and verifying the runtime environment.

#### Returns

`Promise`\<`void`\>

#### Throws

If the adapter is used outside a Node.js context.

#### Overrides

`Adapter.onInit`

***

### onTerminate()

> `protected` **onTerminate**(`eventHandler`, `context`): `Promise`\<`void`\>

Defined in: [src/NodeHttpAdapter.ts:152](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/NodeHttpAdapter.ts#L152)

Lifecycle hook for adapter termination.

This method is called when the adapter needs to gracefully terminate,
ensuring all responses are completed before shutdown.

#### Parameters

##### eventHandler

`LifecycleEventHandler`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

The lifecycle event handler.

##### context

[`NodeHttpAdapterContext`](../../declarations/interfaces/NodeHttpAdapterContext.md)

The context for the lifecycle event.

#### Returns

`Promise`\<`void`\>

#### Overrides

`Adapter.onTerminate`

***

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: [src/NodeHttpAdapter.ts:113](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/NodeHttpAdapter.ts#L113)

Starts the HTTP/HTTPS server and listens for incoming requests.

#### Type Parameters

• **ExecutionResultType** = [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)

#### Returns

`Promise`\<`ExecutionResultType`\>

A promise that resolves to an ExecutionResultType (usually `NodeHttpServer`) when the server starts successfully.

#### Throws

If the server encounters an error during initialization.

#### Example

```typescript
const adapter = NodeHTTPAdapter.create(options);
await adapter.run();
console.log('Server is running');
```

#### Overrides

`Adapter.run`

***

### create()

> `static` **create**(`options`): [`NodeHttpAdapter`](NodeHttpAdapter.md)

Defined in: [src/NodeHttpAdapter.ts:81](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/NodeHttpAdapter.ts#L81)

Creates a new `NodeHTTPAdapter` instance.

#### Parameters

##### options

`AdapterOptions`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Configuration options for the adapter, including lifecycle event handlers,
                 logger, and dependency injection via the blueprint.

#### Returns

[`NodeHttpAdapter`](NodeHttpAdapter.md)

A new instance of `NodeHTTPAdapter`.

#### Example

```typescript
const adapter = NodeHTTPAdapter.create({
  blueprint,
  handlerResolver,
  logger,
});
await adapter.run();
```
