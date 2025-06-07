[**Node CLI Adapter Documentation v0.0.0**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [middleware/RawResponseMiddleware](../README.md) / RawResponseMiddleware

# Class: RawResponseMiddleware

Middleware for handling raw responses in the Node CLI adapter.

This middleware processes outgoing responses and attaches the necessary exit code, and status codes to the raw response.

## Constructors

### new RawResponseMiddleware()

> **new RawResponseMiddleware**(): [`RawResponseMiddleware`](RawResponseMiddleware.md)

#### Returns

[`RawResponseMiddleware`](RawResponseMiddleware.md)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`RawResponseWrapper`](../../../RawResponseWrapper/classes/RawResponseWrapper.md)\>

Handles the outgoing response, processes it, and invokes the next middleware in the pipeline.

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

[src/middleware/RawResponseMiddleware.ts:21](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/middleware/RawResponseMiddleware.ts#L21)
