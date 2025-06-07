[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [middleware/ServerResponseMiddleware](../README.md) / ServerResponseMiddleware

# Class: ServerResponseMiddleware

Defined in: [src/middleware/ServerResponseMiddleware.ts:14](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/middleware/ServerResponseMiddleware.ts#L14)

Middleware for handling server responses and transforming them into the appropriate HTTP responses.

This middleware processes outgoing responses and attaches the necessary headers, status codes,
and body content to the HTTP response.

## Constructors

### new ServerResponseMiddleware()

> **new ServerResponseMiddleware**(`options`): [`ServerResponseMiddleware`](ServerResponseMiddleware.md)

Defined in: [src/middleware/ServerResponseMiddleware.ts:25](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/middleware/ServerResponseMiddleware.ts#L25)

Create a ServerResponseMiddleware.

#### Parameters

##### options

Options for creating the ServerResponseMiddleware.

###### blueprint

`IBlueprint`

#### Returns

[`ServerResponseMiddleware`](ServerResponseMiddleware.md)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`NodeHttpAdapterResponseBuilder`](../../../declarations/type-aliases/NodeHttpAdapterResponseBuilder.md)\>

Defined in: [src/middleware/ServerResponseMiddleware.ts:37](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/middleware/ServerResponseMiddleware.ts#L37)

Handles the outgoing response, processes it, and invokes the next middleware in the pipeline.

#### Parameters

##### context

[`NodeHttpAdapterContext`](../../../declarations/interfaces/NodeHttpAdapterContext.md)

The adapter context containing the raw event, execution context, and other data.

##### next

`NextPipe`\<[`NodeHttpAdapterContext`](../../../declarations/interfaces/NodeHttpAdapterContext.md), [`NodeHttpAdapterResponseBuilder`](../../../declarations/type-aliases/NodeHttpAdapterResponseBuilder.md)\>

The next middleware to be invoked in the pipeline.

#### Returns

`Promise`\<[`NodeHttpAdapterResponseBuilder`](../../../declarations/type-aliases/NodeHttpAdapterResponseBuilder.md)\>

A promise resolving to the processed context.

#### Throws

If required components are missing in the context.
