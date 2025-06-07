[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [middleware/BodyEventMiddleware](../README.md) / BodyEventMiddleware

# Class: BodyEventMiddleware

Defined in: [src/middleware/BodyEventMiddleware.ts:26](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/middleware/BodyEventMiddleware.ts#L26)

Class representing a BodyEventMiddleware.

This middleware handles platform-specific messages and transforms them into Stone.js IncomingEvent objects.

## Author

Mr. Stone

## Constructors

### new BodyEventMiddleware()

> **new BodyEventMiddleware**(`options`): [`BodyEventMiddleware`](BodyEventMiddleware.md)

Defined in: [src/middleware/BodyEventMiddleware.ts:37](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/middleware/BodyEventMiddleware.ts#L37)

Create a BodyEventMiddleware.

#### Parameters

##### options

Options for creating the BodyEventMiddleware.

###### blueprint

`IBlueprint`

#### Returns

[`BodyEventMiddleware`](BodyEventMiddleware.md)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`AwsLambdaHttpAdapterResponseBuilder`](../../../declarations/type-aliases/AwsLambdaHttpAdapterResponseBuilder.md)\>

Defined in: [src/middleware/BodyEventMiddleware.ts:50](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/middleware/BodyEventMiddleware.ts#L50)

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

***

### toNodeMessage()

> **toNodeMessage**(`rawEvent`): `IncomingMessage`

Defined in: [src/middleware/BodyEventMiddleware.ts:62](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/middleware/BodyEventMiddleware.ts#L62)

#### Parameters

##### rawEvent

[`AwsLambdaHttpEvent`](../../../declarations/interfaces/AwsLambdaHttpEvent.md)

#### Returns

`IncomingMessage`
