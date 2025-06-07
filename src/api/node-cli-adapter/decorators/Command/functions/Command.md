[**Node CLI Adapter Documentation v0.0.0**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [decorators/Command](../README.md) / Command

# Function: Command()

> **Command**\<`T`\>(`options`): (`target`, `context`) => `void`

Command decorator to mark a class as a command and automatically bind it to the container.

This decorator is useful for marking classes that should be treated as commands by the Stone.js framework,
making them easily injectable and manageable by the command container.

## Type Parameters

• **T** *extends* `ClassType` = `ClassType`

## Parameters

### options

`Partial`\<[`CommandOptions`](../interfaces/CommandOptions.md)\> = `{}`

The configuration options for the command, including singleton and alias settings.

## Returns

`Function`

A decorator function to set metadata on the target class.

### Parameters

#### target

`T`

#### context

`ClassDecoratorContext`\<`T`\>

### Returns

`void`

## Example

```typescript
@Command({ alias: 'MyCommand' })
class MyCommand {
  // Command class logic here.
}
```

## Defined in

[src/decorators/Command.ts:58](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/decorators/Command.ts#L58)
