[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [utils](../README.md) / getCharset

# Function: getCharset()

> **getCharset**(`value`, `fallback`): `string`

Defined in: [src/utils.ts:71](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/utils.ts#L71)

Get message content charset.

## Parameters

### value

The incoming message or content type string.

`string` | `IncomingMessage`

### fallback

`string` = `'utf-8'`

Fallback charset if parsing fails.

## Returns

`string`

The charset of the message.
