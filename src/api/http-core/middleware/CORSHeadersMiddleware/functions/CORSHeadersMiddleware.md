[**HTTP Core Documentation**](../../../README.md)

***

[HTTP Core Documentation](../../../README.md) / [middleware/CORSHeadersMiddleware](../README.md) / CORSHeadersMiddleware

# Function: CORSHeadersMiddleware()

> **CORSHeadersMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [src/middleware/CORSHeadersMiddleware.ts:22](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/middleware/CORSHeadersMiddleware.ts#L22)

Blueprint Middleware for setting Cross-Origin Resource Sharing (CORS) headers in the HTTP response.

This middleware adds the necessary headers to the HTTP response
to allow clients from different origins to access the server's resources.

And also ensures that CORS headers are applied even when the middleware is not executed.

## Parameters

### context

`BlueprintContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing modules and blueprint.

### next

`NextMiddleware`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next function in the pipeline.

## Returns

`Promise`\<`IBlueprint`\>

The updated blueprint.

## Example

```typescript
CORSHeadersMiddleware({ modules, blueprint }, next);
```
