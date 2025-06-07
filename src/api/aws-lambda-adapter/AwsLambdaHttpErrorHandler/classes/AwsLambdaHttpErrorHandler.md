[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [AwsLambdaHttpErrorHandler](../README.md) / AwsLambdaHttpErrorHandler

# Class: AwsLambdaHttpErrorHandler

Defined in: src/AwsLambdaHttpErrorHandler.ts:18

Class representing an AwsLambdaHttpErrorHandler.

## Implements

- `IAdapterErrorHandler`\<[`AwsLambdaHttpEvent`](../../declarations/interfaces/AwsLambdaHttpEvent.md), [`RawHttpResponse`](../../declarations/type-aliases/RawHttpResponse.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

## Constructors

### new AwsLambdaHttpErrorHandler()

> **new AwsLambdaHttpErrorHandler**(`options`): [`AwsLambdaHttpErrorHandler`](AwsLambdaHttpErrorHandler.md)

Defined in: src/AwsLambdaHttpErrorHandler.ts:26

Create an AwsLambdaHttpErrorHandler.

#### Parameters

##### options

[`AwsLambdaHttpErrorHandlerOptions`](../interfaces/AwsLambdaHttpErrorHandlerOptions.md)

AwsLambdaHttpErrorHandler options.

#### Returns

[`AwsLambdaHttpErrorHandler`](AwsLambdaHttpErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `Promise`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>

Defined in: src/AwsLambdaHttpErrorHandler.ts:41

Handle an error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

`AdapterErrorContext`\<[`AwsLambdaHttpEvent`](../../declarations/interfaces/AwsLambdaHttpEvent.md), [`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

The context of the adapter.

#### Returns

`Promise`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>

The raw response.

#### Implementation of

`IAdapterErrorHandler.handle`
