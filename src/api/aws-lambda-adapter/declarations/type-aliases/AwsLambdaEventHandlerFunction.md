[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [declarations](../README.md) / AwsLambdaEventHandlerFunction

# Type Alias: AwsLambdaEventHandlerFunction()\<RawResponseType\>

> **AwsLambdaEventHandlerFunction**\<`RawResponseType`\>: (`rawEvent`, `context`) => `Promise`\<`RawResponseType`\>

Defined in: [src/declarations.ts:34](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/declarations.ts#L34)

Represents an AWS Lambda event handler function.

## Type Parameters

• **RawResponseType** = [`RawResponse`](RawResponse.md)

The type of the response returned by the handler.

## Parameters

### rawEvent

[`AwsLambdaEvent`](AwsLambdaEvent.md)

The raw event received by the AWS Lambda function.

### context

[`AwsLambdaContext`](AwsLambdaContext.md)

The AWS Lambda execution context.

## Returns

`Promise`\<`RawResponseType`\>

A promise resolving to the response of type `RawResponseType`.
