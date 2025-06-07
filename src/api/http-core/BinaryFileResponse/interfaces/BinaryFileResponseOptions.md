[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [BinaryFileResponse](../README.md) / BinaryFileResponseOptions

# Interface: BinaryFileResponseOptions

Defined in: [src/BinaryFileResponse.ts:12](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/BinaryFileResponse.ts#L12)

Options for creating a BinaryFile HTTP Response.

## Extends

- [`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md)

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### autoEncoding?

> `optional` **autoEncoding**: `boolean`

Defined in: [src/BinaryFileResponse.ts:15](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/BinaryFileResponse.ts#L15)

***

### autoEtag?

> `optional` **autoEtag**: `boolean`

Defined in: [src/BinaryFileResponse.ts:13](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/BinaryFileResponse.ts#L13)

***

### autoLastModified?

> `optional` **autoLastModified**: `boolean`

Defined in: [src/BinaryFileResponse.ts:16](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/BinaryFileResponse.ts#L16)

***

### contentDispositionType?

> `optional` **contentDispositionType**: `string`

Defined in: [src/BinaryFileResponse.ts:17](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/BinaryFileResponse.ts#L17)

***

### file

> **file**: `string` \| `File`

Defined in: [src/BinaryFileResponse.ts:14](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/BinaryFileResponse.ts#L14)

***

### headers?

> `optional` **headers**: [`HeadersType`](../../declarations/type-aliases/HeadersType.md)

Defined in: [src/OutgoingHttpResponse.ts:20](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L20)

#### Inherited from

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md).[`headers`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md#headers)
