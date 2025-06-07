[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [declarations](../README.md) / AwsLambdaHttpEvent

# Interface: AwsLambdaHttpEvent

Defined in: [src/declarations.ts:55](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L55)

Represents the structure of an AWS Lambda HTTP event.

This interface defines the standard properties of an HTTP event in AWS Lambda,
including headers, query parameters, the request context, and other metadata.

## Extends

- `Record`\<`string`, `unknown`\>

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### body?

> `optional` **body**: `unknown`

Defined in: [src/declarations.ts:64](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L64)

The body of the HTTP request.

***

### encoding?

> `optional` **encoding**: `string`

Defined in: [src/declarations.ts:69](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L69)

The encoding format of the body, such as `base64`.

***

### headers

> **headers**: `Record`\<`string`, `string`\>

Defined in: [src/declarations.ts:84](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L84)

The headers of the HTTP request as key-value pairs.

***

### httpMethod?

> `optional` **httpMethod**: `string`

Defined in: [src/declarations.ts:89](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L89)

The HTTP method of the request (e.g., `GET`, `POST`).

***

### isBase64Encoded?

> `optional` **isBase64Encoded**: `boolean`

Defined in: [src/declarations.ts:79](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L79)

Indicates whether the request body is base64-encoded.

***

### path?

> `optional` **path**: `string`

Defined in: [src/declarations.ts:59](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L59)

The path of the HTTP request.

***

### queryStringParameters?

> `optional` **queryStringParameters**: `Record`\<`string`, `string`\>

Defined in: [src/declarations.ts:94](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L94)

The query string parameters included in the request.

***

### rawPath?

> `optional` **rawPath**: `string`

Defined in: [src/declarations.ts:74](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L74)

The raw path of the HTTP request, as sent by the client.

***

### requestContext?

> `optional` **requestContext**: `object`

Defined in: [src/declarations.ts:99](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L99)

The context of the request, including identity and HTTP metadata.

#### http?

> `optional` **http**: `object`

##### http.method?

> `optional` **method**: `string`

##### http.sourceIp?

> `optional` **sourceIp**: `string`

#### httpMethod?

> `optional` **httpMethod**: `string`

#### identity?

> `optional` **identity**: `object`

##### identity.sourceIp?

> `optional` **sourceIp**: `string`
