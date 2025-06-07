[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [utils](../README.md) / getHostname

# Function: getHostname()

> **getHostname**(`ip`, `headers`, `options`): `undefined` \| `string`

Defined in: [src/utils.ts:151](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/utils.ts#L151)

Get hostname.

## Parameters

### ip

`string`

The IP address of the request.

### headers

`IncomingHttpHeaders`

The headers from the incoming request.

### options

Options for trusted IPs, fallback, etc.

#### trusted

(`string` \| `RegExp`)[]

#### trustedIp

`string`[]

#### untrustedIp

`string`[]

## Returns

`undefined` \| `string`

The hostname from the request.
