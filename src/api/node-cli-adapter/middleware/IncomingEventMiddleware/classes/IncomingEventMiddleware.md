[**Node CLI Adapter Documentation v0.0.0**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [middleware/IncomingEventMiddleware](../README.md) / IncomingEventMiddleware

# Class: IncomingEventMiddleware

Middleware for handling incoming events in the Node CLI adapter.

This middleware processes the incoming event and prepares it for the next middleware in the pipeline.

## Constructors

### new IncomingEventMiddleware()

> **new IncomingEventMiddleware**(): [`IncomingEventMiddleware`](IncomingEventMiddleware.md)

#### Returns

[`IncomingEventMiddleware`](IncomingEventMiddleware.md)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`RawResponseWrapper`](../../../RawResponseWrapper/classes/RawResponseWrapper.md)\>

Handles the incoming event, processes it, and invokes the next middleware in the pipeline.

#### Parameters

##### context

[`NodeCliAdapterContext`](../../../declarations/interfaces/NodeCliAdapterContext.md)

The adapter context containing the raw event, execution context, and other data.

##### next

`NextPipe`\<[`NodeCliAdapterContext`](../../../declarations/interfaces/NodeCliAdapterContext.md), [`RawResponseWrapper`](../../../RawResponseWrapper/classes/RawResponseWrapper.md)\>

The next middleware to be invoked in the pipeline.

#### Returns

`Promise`\<[`RawResponseWrapper`](../../../RawResponseWrapper/classes/RawResponseWrapper.md)\>

A promise that resolves to the processed context.

#### Throws

If required components are missing in the context.

#### Defined in

[src/middleware/IncomingEventMiddleware.ts:20](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/middleware/IncomingEventMiddleware.ts#L20)
