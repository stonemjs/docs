[**HTTP Core Documentation**](../../../README.md)

***

[HTTP Core Documentation](../../../README.md) / [middleware/HandleCorsMiddleware](../README.md) / HandleCorsMiddleware

# Class: HandleCorsMiddleware

Defined in: [src/middleware/HandleCorsMiddleware.ts:14](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/middleware/HandleCorsMiddleware.ts#L14)

Kernel Middleware for adding Cross-Origin Resource Sharing (CORS) headers to HTTP responses.
It allows controlling how clients from different origins can access the server's resources.

## Template

Represents the type of the incoming HTTP event.

## Template

Represents the type of the outgoing HTTP response.

## Author

Mr. Stone <evensstone@gmail.com>

## Constructors

### Constructor

> **new HandleCorsMiddleware**(`blueprint`): `HandleCorsMiddleware`

Defined in: [src/middleware/HandleCorsMiddleware.ts:24](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/middleware/HandleCorsMiddleware.ts#L24)

Construct an instance of HandleCorsMiddleware.

#### Parameters

##### blueprint

The configuration blueprint used for managing CORS settings.

###### blueprint

`IBlueprint`

#### Returns

`HandleCorsMiddleware`

## Methods

### handle()

> **handle**(`event`, `next`): `Promise`\<[`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

Defined in: [src/middleware/HandleCorsMiddleware.ts:37](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/middleware/HandleCorsMiddleware.ts#L37)

Handle CORS by modifying the response headers based on the configuration.

#### Parameters

##### event

[`IncomingHttpEvent`](../../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

The incoming HTTP event.

##### next

`NextMiddleware`\<[`IncomingHttpEvent`](../../../IncomingHttpEvent/classes/IncomingHttpEvent.md), [`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

The next middleware function to continue processing the event.

#### Returns

`Promise`\<[`OutgoingHttpResponse`](../../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)\>

The outgoing HTTP response with CORS headers.
