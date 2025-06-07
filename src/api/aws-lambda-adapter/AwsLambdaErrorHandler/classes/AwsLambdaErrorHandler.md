[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [AwsLambdaErrorHandler](../README.md) / AwsLambdaErrorHandler

# Class: AwsLambdaErrorHandler

Defined in: src/AwsLambdaErrorHandler.ts:15

Class representing an AwsLambdaErrorHandler.

## Implements

- `IAdapterErrorHandler`\<[`AwsLambdaEvent`](../../declarations/type-aliases/AwsLambdaEvent.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

## Constructors

### new AwsLambdaErrorHandler()

> **new AwsLambdaErrorHandler**(`options`): [`AwsLambdaErrorHandler`](AwsLambdaErrorHandler.md)

Defined in: src/AwsLambdaErrorHandler.ts:23

Create an AwsLambdaErrorHandler.

#### Parameters

##### options

[`AwsLambdaErrorHandlerOptions`](../interfaces/AwsLambdaErrorHandlerOptions.md)

AwsLambdaErrorHandler options.

#### Returns

[`AwsLambdaErrorHandler`](AwsLambdaErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `Promise`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>

Defined in: src/AwsLambdaErrorHandler.ts:38

Handle an error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

`AdapterErrorContext`\<[`AwsLambdaEvent`](../../declarations/type-aliases/AwsLambdaEvent.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

The context of the adapter.

#### Returns

`Promise`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>

The raw response.

#### Implementation of

`IAdapterErrorHandler.handle`
