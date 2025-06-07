[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [declarations](../README.md) / AwsLambdaHttpAdapterContext

# Interface: AwsLambdaHttpAdapterContext

Defined in: [src/declarations.ts:117](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L117)

Represents the context for the AWS Lambda HTTP Adapter.

This interface extends `AdapterContext` and includes additional properties specific
to HTTP events in AWS Lambda.

## Extends

- `AdapterContext`\<[`AwsLambdaHttpEvent`](AwsLambdaHttpEvent.md), [`RawHttpResponse`](../type-aliases/RawHttpResponse.md), [`AwsLambdaContext`](../type-aliases/AwsLambdaContext.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`\>

## Properties

### rawResponse

> **rawResponse**: [`RawHttpResponseOptions`](RawHttpResponseOptions.md)

Defined in: [src/declarations.ts:128](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L128)

The raw HTTP response associated with the current context.

#### Overrides

`AdapterContext.rawResponse`
