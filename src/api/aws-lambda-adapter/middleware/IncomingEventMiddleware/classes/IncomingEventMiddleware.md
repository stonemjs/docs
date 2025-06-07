[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [middleware/IncomingEventMiddleware](../README.md) / IncomingEventMiddleware

# Class: IncomingEventMiddleware

Defined in: [src/middleware/IncomingEventMiddleware.ts:37](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/middleware/IncomingEventMiddleware.ts#L37)

Middleware for handling incoming events and transforming them into Stone.js events.

This class processes incoming HTTP requests, extracting relevant data such as URL, IP addresses,
headers, cookies, and more, and forwards them to the next middleware in the pipeline.

## Constructors

### new IncomingEventMiddleware()

> **new IncomingEventMiddleware**(`options`): [`IncomingEventMiddleware`](IncomingEventMiddleware.md)

Defined in: [src/middleware/IncomingEventMiddleware.ts:48](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/middleware/IncomingEventMiddleware.ts#L48)

Create an IncomingEventMiddleware instance.

#### Parameters

##### options

Options containing the blueprint for resolving configuration and dependencies.

###### blueprint

`IBlueprint`

#### Returns

[`IncomingEventMiddleware`](IncomingEventMiddleware.md)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`AwsLambdaHttpAdapterResponseBuilder`](../../../declarations/type-aliases/AwsLambdaHttpAdapterResponseBuilder.md)\>

Defined in: [src/middleware/IncomingEventMiddleware.ts:60](https://github.com/stonemjs/aws-lambda-adapter/blob/9de4b38bb7a5afd4d5599dae1399969698a2422d/src/middleware/IncomingEventMiddleware.ts#L60)

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

A promise that resolves to the processed context.

#### Throws

If required components are missing in the context.
