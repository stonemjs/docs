[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [resolvers](../README.md) / awsLambdaAdapterResolver

# Function: awsLambdaAdapterResolver()

> **awsLambdaAdapterResolver**(`blueprint`): `IAdapter`

Defined in: [src/resolvers.ts:13](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/resolvers.ts#L13)

Adapter resolver for generic AWS Lambda adapter.

Creates and configures an `AWSLambdaAdapter` for handling generic events in AWS Lambda.

## Parameters

### blueprint

`IBlueprint`\<`any`\>

The `IBlueprint` providing configuration and dependencies.

## Returns

`IAdapter`

An `AWSLambdaAdapter` instance.
