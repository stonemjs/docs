[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [middleware/BodyEventMiddleware](../README.md) / BodyEventMiddleware

# Class: BodyEventMiddleware

Defined in: [src/middleware/BodyEventMiddleware.ts:28](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/middleware/BodyEventMiddleware.ts#L28)

Class representing a BodyEventMiddleware.

This middleware handles platform-specific messages and transforms them into Stone.js IncomingEvent objects.

## Author

Mr. Stone

## Constructors

### new BodyEventMiddleware()

> **new BodyEventMiddleware**(`options`): [`BodyEventMiddleware`](BodyEventMiddleware.md)

Defined in: [src/middleware/BodyEventMiddleware.ts:39](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/middleware/BodyEventMiddleware.ts#L39)

Create a BodyEventMiddleware.

#### Parameters

##### options

Options for creating the BodyEventMiddleware.

###### blueprint

`IBlueprint`

#### Returns

[`BodyEventMiddleware`](BodyEventMiddleware.md)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`NodeHttpAdapterResponseBuilder`](../../../declarations/type-aliases/NodeHttpAdapterResponseBuilder.md)\>

Defined in: [src/middleware/BodyEventMiddleware.ts:52](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/middleware/BodyEventMiddleware.ts#L52)

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

A promise that resolves to the destination type after processing.

#### Throws

If required components such as the rawEvent or IncomingEventBuilder are not provided.
