[**Node CLI Adapter Documentation v0.0.0**](../../README.md)

***

[Node CLI Adapter Documentation](../../modules.md) / [resolvers](../README.md) / nodeCliErrorHandlerResolver

# Function: nodeCliErrorHandlerResolver()

> **nodeCliErrorHandlerResolver**(`blueprint`): `IErrorHandler`\<`number`, `RuntimeError`\>

Error handler resolver for generic Node Cli adapter.

Creates and configures an `ErrorHandler` for managing errors in the generic Node Cli adapter.

## Parameters

### blueprint

`IBlueprint`\<`any`\>

The `IBlueprint` providing configuration and dependencies.

## Returns

`IErrorHandler`\<`number`, `RuntimeError`\>

An `ErrorHandler` instance for handling Node Cli errors.

## Defined in

[src/resolvers.ts:33](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/resolvers.ts#L33)
