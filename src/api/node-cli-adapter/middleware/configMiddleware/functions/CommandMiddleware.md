[**Node CLI Adapter Documentation v0.0.0**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / CommandMiddleware

# Function: CommandMiddleware()

> **CommandMiddleware**(`configContext`, `next`): `IBlueprint` \| `Promise`\<`IBlueprint`\>

Middleware to process and register modules as command handlers.

## Parameters

### configContext

`ConfigContext`

The configuration context containing the modules and blueprint.

### next

`NextPipe`\<`ConfigContext`, `IBlueprint`\>

The next middleware in the pipeline to call.

## Returns

`IBlueprint` \| `Promise`\<`IBlueprint`\>

The updated blueprint or a promise resolving to it.

## Defined in

[src/middleware/configMiddleware.ts:14](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/middleware/configMiddleware.ts#L14)
