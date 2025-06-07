[**HTTP Core Documentation**](../../../README.md)

***

[HTTP Core Documentation](../../../README.md) / [decorators/FileHttpResponse](../README.md) / FileHttpResponse

# Function: FileHttpResponse()

> **FileHttpResponse**\<`T`\>(`statusCode`, `headers`): `MethodDecorator`

Defined in: [src/decorators/FileHttpResponse.ts:26](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/decorators/FileHttpResponse.ts#L26)

Decorator to mark a class method as a file outgoing http response.

## Type Parameters

### T

`T` *extends* `Function` = `Function`

## Parameters

### statusCode

`number` = `HTTP_OK`

The status code of the response.

### headers

[`HeadersType`](../../../declarations/type-aliases/HeadersType.md) = `{}`

The headers for the response.

## Returns

`MethodDecorator`

A method decorator.

## Example

```typescript
import { FileHttpResponse } from '@stone-js/http-core';

class UserController {
  @FileHttpResponse()
  getUsers() {
    return new File('path/to/file');
  }
}
```
