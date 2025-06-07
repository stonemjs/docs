[**HTTP Core Documentation**](../../../README.md)

***

[HTTP Core Documentation](../../../README.md) / [options/HttpConfig](../README.md) / HttpJsonConfig

# Interface: HttpJsonConfig

Defined in: [src/options/HttpConfig.ts:43](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/options/HttpConfig.ts#L43)

## Properties

### escape

> **escape**: `boolean`

Defined in: [src/options/HttpConfig.ts:51](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/options/HttpConfig.ts#L51)

Whether to escape HTML characters in JSON output.

***

### replacer()?

> `optional` **replacer**: (`this`, `key`, `value`) => `unknown`

Defined in: [src/options/HttpConfig.ts:55](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/options/HttpConfig.ts#L55)

A custom replacer function for JSON serialization.

#### Parameters

##### this

`unknown`

##### key

`string`

##### value

`unknown`

#### Returns

`unknown`

***

### spaces

> **spaces**: `string`

Defined in: [src/options/HttpConfig.ts:47](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/options/HttpConfig.ts#L47)

The number of spaces to use for formatting JSON output.
