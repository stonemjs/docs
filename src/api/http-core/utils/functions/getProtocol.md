[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [utils](../README.md) / getProtocol

# Function: getProtocol()

> **getProtocol**(`ip`, `headers`, `encrypted`, `options`): `string`

Defined in: [src/utils.ts:105](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/utils.ts#L105)

Get protocol.

## Parameters

### ip

`string`

The IP address of the request.

### headers

`IncomingHttpHeaders`

The headers from the incoming request.

### encrypted

`boolean`

Whether the connection is encrypted (HTTPS).

### options

Options for trusted and untrusted IPs.

#### trustedIp

`string`[]

#### untrustedIp

`string`[]

## Returns

`string`

The protocol (http or https).
