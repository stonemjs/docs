[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [resolvers](../README.md) / awsLambdaHttpAdapterResolver

# Function: awsLambdaHttpAdapterResolver()

> **awsLambdaHttpAdapterResolver**(`blueprint`): `IAdapter`

Defined in: [src/resolvers.ts:34](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/resolvers.ts#L34)

Adapter resolver for AWS Lambda HTTP adapter.

Creates and configures an `AWSLambdaHttpAdapter` for handling HTTP events in AWS Lambda.

## Parameters

### blueprint

`IBlueprint`\<`any`\>

The `IBlueprint` providing configuration and dependencies.

## Returns

`IAdapter`

An `AWSLambdaHttpAdapter` instance.
