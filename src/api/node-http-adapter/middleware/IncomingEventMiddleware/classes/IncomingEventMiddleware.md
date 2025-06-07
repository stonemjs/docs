[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [middleware/IncomingEventMiddleware](../README.md) / IncomingEventMiddleware

# Class: IncomingEventMiddleware

Defined in: [src/middleware/IncomingEventMiddleware.ts:44](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/middleware/IncomingEventMiddleware.ts#L44)

Middleware for handling incoming events and transforming them into Stone.js events.

This class processes incoming HTTP requests, extracting relevant data such as URL, IP addresses,
headers, cookies, and more, and forwards them to the next middleware in the pipeline.

## Constructors

### new IncomingEventMiddleware()

> **new IncomingEventMiddleware**(`options`): [`IncomingEventMiddleware`](IncomingEventMiddleware.md)

Defined in: [src/middleware/IncomingEventMiddleware.ts:55](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/middleware/IncomingEventMiddleware.ts#L55)

Create an IncomingEventMiddleware instance.

#### Parameters

##### options

Options containing the blueprint for resolving configuration and dependencies.

###### blueprint

`IBlueprint`

#### Returns

[`IncomingEventMiddleware`](IncomingEventMiddleware.md)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`NodeHttpAdapterResponseBuilder`](../../../declarations/type-aliases/NodeHttpAdapterResponseBuilder.md)\>

Defined in: [src/middleware/IncomingEventMiddleware.ts:67](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/middleware/IncomingEventMiddleware.ts#L67)

Handles the incoming event, processes it, and invokes the next middleware in the pipeline.

#### Parameters

##### context

[`NodeHttpAdapterContext`](../../../declarations/interfaces/NodeHttpAdapterContext.md)

The adapter context containing the raw event, execution context, and other data.

##### next

`NextPipe`\<[`NodeHttpAdapterContext`](../../../declarations/interfaces/NodeHttpAdapterContext.md), [`NodeHttpAdapterResponseBuilder`](../../../declarations/type-aliases/NodeHttpAdapterResponseBuilder.md)\>

The next middleware to be invoked in the pipeline.

#### Returns

`Promise`\<[`NodeHttpAdapterResponseBuilder`](../../../declarations/type-aliases/NodeHttpAdapterResponseBuilder.md)\>

A promise that resolves to the processed context.

#### Throws

If required components are missing in the context.
