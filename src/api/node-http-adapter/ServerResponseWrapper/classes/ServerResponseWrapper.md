[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [ServerResponseWrapper](../README.md) / ServerResponseWrapper

# Class: ServerResponseWrapper

Defined in: [src/ServerResponseWrapper.ts:11](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/ServerResponseWrapper.ts#L11)

A wrapper for the Node.js HTTP `ServerResponse` to implement the `IRawResponseWrapper` interface.

This class provides methods for configuring and sending HTTP responses in a consistent and
flexible manner. It supports setting status codes, headers, streaming files, or sending raw body content.

## Implements

- `IRawResponseWrapper`\<`ServerResponse`\>

## Properties

### options

> `readonly` **options**: `Partial`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\> = `{}`

Defined in: [src/ServerResponseWrapper.ts:33](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/ServerResponseWrapper.ts#L33)

Partial configuration for customizing the response.

***

### response

> `readonly` **response**: `ServerResponse`

Defined in: [src/ServerResponseWrapper.ts:32](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/ServerResponseWrapper.ts#L32)

The Node.js `ServerResponse` object to be wrapped.

## Methods

### respond()

> **respond**(): `Promise`\<`ServerResponse`\>

Defined in: [src/ServerResponseWrapper.ts:49](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/ServerResponseWrapper.ts#L49)

Sends the HTTP response based on the configured options.

This method:
- Sets the `statusCode` and `statusMessage` if provided.
- Configures response `headers` if specified.
- Streams a file if `streamFile` is defined.
- Sends raw content if `body` is provided.

#### Returns

`Promise`\<`ServerResponse`\>

A promise that resolves to the HTTP status code of the response.

#### Throws

An error if the response cannot be sent due to an issue in `streamFile`.

#### Implementation of

`IRawResponseWrapper.respond`

***

### create()

> `static` **create**(`response`, `options`): [`ServerResponseWrapper`](ServerResponseWrapper.md)

Defined in: [src/ServerResponseWrapper.ts:19](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/ServerResponseWrapper.ts#L19)

Creates a new `ServerResponseWrapper` instance.

#### Parameters

##### response

`ServerResponse`

The Node.js `ServerResponse` object to be wrapped.

##### options

`Partial`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\> = `{}`

Partial configuration for customizing the response.

#### Returns

[`ServerResponseWrapper`](ServerResponseWrapper.md)

A new instance of `ServerResponseWrapper`.
