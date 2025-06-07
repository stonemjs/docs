[**HTTP Core Documentation**](../../../README.md)

***

[HTTP Core Documentation](../../../README.md) / [middleware/CompressionMiddleware](../README.md) / CompressionMiddleware

# Class: CompressionMiddleware

Defined in: [src/middleware/CompressionMiddleware.ts:8](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/middleware/CompressionMiddleware.ts#L8)

Kernel Middleware to compress response content based on the Accept-Encoding header.

## Constructors

### Constructor

> **new CompressionMiddleware**(): `CompressionMiddleware`

#### Returns

`CompressionMiddleware`

## Methods

### handle()

> **handle**(`event`, `next`): `Promise`\<[`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

Defined in: [src/middleware/CompressionMiddleware.ts:16](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/middleware/CompressionMiddleware.ts#L16)

Compress the response content based on the Accept-Encoding header.

#### Parameters

##### event

[`IncomingHttpEvent`](../../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

The incoming HTTP event.

##### next

`NextMiddleware`\<[`IncomingHttpEvent`](../../../IncomingHttpEvent/classes/IncomingHttpEvent.md), [`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

The next middleware in the pipeline.

#### Returns

`Promise`\<[`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

The outgoing HTTP response.
