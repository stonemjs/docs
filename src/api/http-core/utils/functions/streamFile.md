[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [utils](../README.md) / streamFile

# Function: streamFile()

> **streamFile**(`message`, `response`, `fileResponse`, `options`): `Promise`\<`void`\>

Defined in: [src/utils.ts:253](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/utils.ts#L253)

Stream files from the file system as an HTTP response.

Only for node http server.

## Parameters

### message

`IncomingMessage`

The incoming message.

### response

`OutgoingMessage`

The outgoing response.

### fileResponse

`File`

The binary file response to be streamed.

### options

[`StreamFileOptions`](../../declarations/type-aliases/StreamFileOptions.md)

The options for streaming.

## Returns

`Promise`\<`void`\>

A promise that resolves when the file streaming is complete.
