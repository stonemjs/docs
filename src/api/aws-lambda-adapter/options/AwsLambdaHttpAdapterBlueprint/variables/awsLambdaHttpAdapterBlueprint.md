[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [options/AwsLambdaHttpAdapterBlueprint](../README.md) / awsLambdaHttpAdapterBlueprint

# Variable: awsLambdaHttpAdapterBlueprint

> `const` **awsLambdaHttpAdapterBlueprint**: [`AwsLambdaHttpAdapterBlueprint`](../interfaces/AwsLambdaHttpAdapterBlueprint.md)

Defined in: [src/options/AwsLambdaHttpAdapterBlueprint.ts:36](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/options/AwsLambdaHttpAdapterBlueprint.ts#L36)

Default blueprint configuration for the AWS Lambda Http Adapter.

This blueprint defines the initial configuration for the AWS Lambda Http adapter
within the Stone.js framework. It includes:
- An alias for the AWS Lambda platform (`AWS_LAMBDA_HTTP_PLATFORM`).
- A default resolver function (currently a placeholder).
- Middleware, hooks, and state flags (`current`, `default`, `preferred`).
