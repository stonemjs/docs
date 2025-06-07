[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [middleware/FilesEventMiddleware](../README.md) / FilesEventMiddleware

# Class: FilesEventMiddleware

Defined in: [src/middleware/FilesEventMiddleware.ts:13](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/middleware/FilesEventMiddleware.ts#L13)

Class representing a FilesEventMiddleware.

## Author

Mr. Stone <evensstone@gmail.com>

## Constructors

### new FilesEventMiddleware()

> **new FilesEventMiddleware**(`options`): [`FilesEventMiddleware`](FilesEventMiddleware.md)

Defined in: [src/middleware/FilesEventMiddleware.ts:24](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/middleware/FilesEventMiddleware.ts#L24)

Create a FilesEventMiddleware.

#### Parameters

##### options

Options for creating the FilesEventMiddleware.

###### blueprint

`IBlueprint`

#### Returns

[`FilesEventMiddleware`](FilesEventMiddleware.md)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`AwsLambdaHttpAdapterResponseBuilder`](../../../declarations/type-aliases/AwsLambdaHttpAdapterResponseBuilder.md)\>

Defined in: [src/middleware/FilesEventMiddleware.ts:37](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/middleware/FilesEventMiddleware.ts#L37)

Handles the incoming event, processes it, and invokes the next middleware in the pipeline.

#### Parameters

##### context

[`AwsLambdaHttpAdapterContext`](../../../declarations/interfaces/AwsLambdaHttpAdapterContext.md)

The adapter context containing the raw event, execution context, and other data.

##### next

`NextPipe`\<[`AwsLambdaHttpAdapterContext`](../../../declarations/interfaces/AwsLambdaHttpAdapterContext.md), [`AwsLambdaHttpAdapterResponseBuilder`](../../../declarations/type-aliases/AwsLambdaHttpAdapterResponseBuilder.md)\>

The next middleware to be invoked in the pipeline.

#### Returns

`Promise`\<[`AwsLambdaHttpAdapterResponseBuilder`](../../../declarations/type-aliases/AwsLambdaHttpAdapterResponseBuilder.md)\>

A promise that resolves to the destination type after processing.

#### Throws

If required components such as the rawEvent or IncomingEventBuilder are not provided.
