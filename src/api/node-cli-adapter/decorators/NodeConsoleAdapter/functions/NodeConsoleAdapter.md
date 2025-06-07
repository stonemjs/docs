[**Node CLI Adapter Documentation v0.0.0**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [decorators/NodeConsoleAdapter](../README.md) / NodeConsoleAdapter

# Function: NodeConsoleAdapter()

> **NodeConsoleAdapter**\<`T`\>(`options`): (`target`, `context`) => `void`

A Stone.js decorator that integrates the Node Cli Adapter with a class.

This decorator modifies the class to seamlessly enable Node Cli as the
execution environment for a Stone.js application. By applying this decorator,
the class is automatically configured with the necessary blueprint for Node Cli.

## Type Parameters

• **T** *extends* `ClassType` = `ClassType`

The type of the class being decorated. Defaults to `ClassType`.

## Parameters

### options

[`NodeConsoleAdapterOptions`](../interfaces/NodeConsoleAdapterOptions.md) = `{}`

Optional configuration to customize the Node Cli Adapter.

## Returns

`Function`

A class decorator that applies the Node Cli adapter configuration.

### Parameters

#### target

`T`

#### context

`ClassDecoratorContext`\<`T`\>

### Returns

`void`

## Example

```typescript
import { NodeConsoleAdapter } from '@stone-js/node-cli-adapter';

@NodeConsoleAdapter({
  alias: 'NodeConsoleAdapter',
})
class App {
  // Your application logic here
}
```

## Defined in

[src/decorators/NodeConsoleAdapter.ts:34](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/decorators/NodeConsoleAdapter.ts#L34)
