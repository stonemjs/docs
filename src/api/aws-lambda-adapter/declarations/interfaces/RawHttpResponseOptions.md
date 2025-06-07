[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [declarations](../README.md) / RawHttpResponseOptions

# Interface: RawHttpResponseOptions

Defined in: [src/declarations.ts:157](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L157)

Represents options for configuring a raw HTTP response.

Extends the `RawResponseOptions` interface to include additional properties
for managing response content, headers, status codes, and streaming files.

## Extends

- `RawResponseOptions`

## Indexable

\[`k`: `string` \| `number` \| `symbol`\]: `unknown`

## Properties

### body?

> `optional` **body**: `unknown`

Defined in: [src/declarations.ts:161](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L161)

The body of the HTTP response. Can be of any type, including strings, objects, or buffers.

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Defined in: [src/declarations.ts:177](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L177)

Headers to include in the HTTP response.
Can be provided as key-value pairs.

***

### statusCode

> **statusCode**: `number`

Defined in: [src/declarations.ts:166](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L166)

The HTTP status code of the response (e.g., `200`, `404`).

***

### statusMessage?

> `optional` **statusMessage**: `string`

Defined in: [src/declarations.ts:171](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L171)

The status message accompanying the HTTP status code (e.g., `OK`, `Not Found`).
