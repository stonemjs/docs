[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [middleware/FilesEventMiddleware](../README.md) / FilesEventMiddleware

# Class: FilesEventMiddleware

Defined in: [src/middleware/FilesEventMiddleware.ts:12](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/middleware/FilesEventMiddleware.ts#L12)

Class representing a FilesEventMiddleware.

## Author

Mr. Stone <evensstone@gmail.com>

## Constructors

### new FilesEventMiddleware()

> **new FilesEventMiddleware**(`options`): [`FilesEventMiddleware`](FilesEventMiddleware.md)

Defined in: [src/middleware/FilesEventMiddleware.ts:23](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/middleware/FilesEventMiddleware.ts#L23)

Create a FilesEventMiddleware.

#### Parameters

##### options

Options for creating the FilesEventMiddleware.

###### blueprint

`IBlueprint`

#### Returns

[`FilesEventMiddleware`](FilesEventMiddleware.md)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`NodeHttpAdapterResponseBuilder`](../../../declarations/type-aliases/NodeHttpAdapterResponseBuilder.md)\>

Defined in: [src/middleware/FilesEventMiddleware.ts:36](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/middleware/FilesEventMiddleware.ts#L36)

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
