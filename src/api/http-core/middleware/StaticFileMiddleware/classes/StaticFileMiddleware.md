[**HTTP Core Documentation**](../../../README.md)

***

[HTTP Core Documentation](../../../README.md) / [middleware/StaticFileMiddleware](../README.md) / StaticFileMiddleware

# Class: StaticFileMiddleware

Defined in: [src/middleware/StaticFileMiddleware.ts:12](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/middleware/StaticFileMiddleware.ts#L12)

Kernel Middleware for serving static files from a directory.
If a static file is found, it serves the file; otherwise, the request is passed to the next middleware.

## Constructors

### Constructor

> **new StaticFileMiddleware**(`container`): `StaticFileMiddleware`

Defined in: [src/middleware/StaticFileMiddleware.ts:22](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/middleware/StaticFileMiddleware.ts#L22)

Create a new StaticFileMiddleware instance.

#### Parameters

##### container

The service container to inject dependencies.

###### blueprint

`IBlueprint`

###### logger

`ILogger`

#### Returns

`StaticFileMiddleware`

## Methods

### handle()

> **handle**(`event`, `next`): `Promise`\<[`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

Defined in: [src/middleware/StaticFileMiddleware.ts:36](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/middleware/StaticFileMiddleware.ts#L36)

Handle incoming HTTP events and serve static files if applicable.

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

#### Throws

If access to the file is forbidden.
