[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [IncomingHttpEvent](../README.md) / IncomingHttpEventOptions

# Interface: IncomingHttpEventOptions

Defined in: [src/IncomingHttpEvent.ts:19](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L19)

IncomingHttpEventOptions interface.

## Extends

- `IncomingEventOptions`

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### body?

> `optional` **body**: `Record`\<`string`, `unknown`\>

Defined in: [src/IncomingHttpEvent.ts:27](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L27)

***

### cookies?

> `optional` **cookies**: [`CookieCollection`](../../cookies/CookieCollection/classes/CookieCollection.md)

Defined in: [src/IncomingHttpEvent.ts:26](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L26)

***

### files?

> `optional` **files**: `Record`\<`string`, `UploadedFile`[]\>

Defined in: [src/IncomingHttpEvent.ts:28](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L28)

***

### headers?

> `optional` **headers**: `Headers` \| `Record`\<`string`, `string`\>

Defined in: [src/IncomingHttpEvent.ts:29](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L29)

***

### ip

> **ip**: `string`

Defined in: [src/IncomingHttpEvent.ts:21](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L21)

***

### ips?

> `optional` **ips**: `string`[]

Defined in: [src/IncomingHttpEvent.ts:22](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L22)

***

### method?

> `optional` **method**: [`HttpMethods`](../../declarations/enumerations/HttpMethods.md)

Defined in: [src/IncomingHttpEvent.ts:24](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L24)

***

### protocol?

> `optional` **protocol**: `string`

Defined in: [src/IncomingHttpEvent.ts:23](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L23)

***

### queryString?

> `optional` **queryString**: `string`

Defined in: [src/IncomingHttpEvent.ts:25](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L25)

***

### url

> **url**: `URL`

Defined in: [src/IncomingHttpEvent.ts:20](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L20)
