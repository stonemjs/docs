[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [utils](../README.md) / getType

# Function: getType()

> **getType**(`value`, `fallback`): `string`

Defined in: [src/utils.ts:56](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/utils.ts#L56)

Get message content type.

## Parameters

### value

The incoming message or content type string.

`string` | `IncomingMessage`

### fallback

`string` = `'text/plain'`

Fallback content type if parsing fails.

## Returns

`string`

The content type of the message.
