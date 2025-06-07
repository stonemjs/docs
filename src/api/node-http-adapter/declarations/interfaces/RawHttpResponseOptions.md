[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [declarations](../README.md) / RawHttpResponseOptions

# Interface: RawHttpResponseOptions

Defined in: [src/declarations.ts:74](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/declarations.ts#L74)

Represents options for configuring a raw HTTP response.

Extends the `RawResponseOptions` interface to include additional properties
for managing response content, headers, status codes, and streaming files.

## Extends

- `RawResponseOptions`

## Indexable

\[`k`: `string` \| `number` \| `symbol`\]: `unknown`

## Properties

### body

> **body**: `unknown`

Defined in: [src/declarations.ts:78](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/declarations.ts#L78)

The body of the HTTP response. Can be of any type, including strings, objects, or buffers.

***

### charset?

> `optional` **charset**: `string`

Defined in: [src/declarations.ts:83](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/declarations.ts#L83)

The character set used for encoding the response body. Defaults to `utf-8` if not specified.

***

### headers

> **headers**: `Headers` \| `Map`\<`string`, `string`\>

Defined in: [src/declarations.ts:99](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/declarations.ts#L99)

Headers to include in the HTTP response.
Can be provided as a `Map<string, string>` or `Headers` object.

***

### statusCode

> **statusCode**: `number`

Defined in: [src/declarations.ts:88](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/declarations.ts#L88)

The HTTP status code of the response (e.g., `200`, `404`).

***

### statusMessage

> **statusMessage**: `string`

Defined in: [src/declarations.ts:93](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/declarations.ts#L93)

The status message accompanying the HTTP status code (e.g., `OK`, `Not Found`).

***

### streamFile()

> **streamFile**: () => `void` \| `Promise`\<`void`\>

Defined in: [src/declarations.ts:105](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/declarations.ts#L105)

A function to stream a file as the HTTP response.
Can be synchronous or asynchronous.

#### Returns

`void` \| `Promise`\<`void`\>
