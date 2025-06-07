[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [decorators/AwsLambda](../README.md) / AwsLambda

# Function: AwsLambda()

> **AwsLambda**\<`T`\>(`options`): (`target`, `context`) => `void`

Defined in: src/decorators/AwsLambda.ts:35

A Stone.js decorator that integrates the AWS Lambda Adapter with a class.

This decorator modifies the class to seamlessly enable AWS Lambda as the
execution environment for a Stone.js application. By applying this decorator,
the class is automatically configured with the necessary blueprint for AWS Lambda.

## Type Parameters

• **T** *extends* `ClassType` = `ClassType`

The type of the class being decorated. Defaults to `ClassType`.

## Parameters

### options

[`AwsLambdaOptions`](../interfaces/AwsLambdaOptions.md) = `{}`

Optional configuration to customize the AWS Lambda Adapter.

## Returns

`Function`

A class decorator that applies the AWS Lambda adapter configuration.

### Parameters

#### target

`T`

#### context

`ClassDecoratorContext`\<`T`\>

### Returns

`void`

## Example

```typescript
import { AwsLambda } from '@stone-js/aws-lambda-adapter';

@AwsLambda({
  alias: 'MyAWSLambda',
})
class App {
  // Your application logic here
}
```
