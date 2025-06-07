[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [declarations](../README.md) / AwsLambdaAdapterContext

# Interface: AwsLambdaAdapterContext

Defined in: [src/declarations.ts:137](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L137)

Represents the context for the AWS Lambda Adapter.

This interface extends `AdapterContext` and includes additional properties
specific to generic AWS Lambda events.

## Extends

- `AdapterContext`\<[`AwsLambdaEvent`](../type-aliases/AwsLambdaEvent.md), [`RawResponse`](../type-aliases/RawResponse.md), [`AwsLambdaContext`](../type-aliases/AwsLambdaContext.md), `IncomingEvent`, `IncomingEventOptions`, `OutgoingResponse`\>

## Properties

### rawResponse

> **rawResponse**: [`RawResponse`](../type-aliases/RawResponse.md)

Defined in: [src/declarations.ts:148](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L148)

The raw response associated with the current context.

#### Overrides

`AdapterContext.rawResponse`
