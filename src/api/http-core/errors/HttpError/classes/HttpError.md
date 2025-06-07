[**HTTP Core Documentation**](../../../README.md)

***

[HTTP Core Documentation](../../../README.md) / [errors/HttpError](../README.md) / HttpError

# Class: HttpError

Defined in: [src/errors/HttpError.ts:10](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/errors/HttpError.ts#L10)

Class representing an HttpError.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- `RuntimeError`

## Constructors

### Constructor

> **new HttpError**(`message`, `statusCode`, `headers`, `options`): `HttpError`

Defined in: [src/errors/HttpError.ts:21](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/errors/HttpError.ts#L21)

Create an HttpError.

#### Parameters

##### message

`string`

The message to log.

##### statusCode

`number` = `500`

##### headers

[`HeadersType`](../../../declarations/type-aliases/HeadersType.md) = `...`

##### options

`ErrorOptions` = `{}`

The error options.

#### Returns

`HttpError`

#### Overrides

`RuntimeError.constructor`

## Properties

### headers

> `readonly` **headers**: [`HeadersType`](../../../declarations/type-aliases/HeadersType.md)

Defined in: [src/errors/HttpError.ts:12](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/errors/HttpError.ts#L12)

***

### statusCode

> `readonly` **statusCode**: `number`

Defined in: [src/errors/HttpError.ts:11](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/errors/HttpError.ts#L11)

***

### statusMessage

> `readonly` **statusMessage**: `string`

Defined in: [src/errors/HttpError.ts:13](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/errors/HttpError.ts#L13)
