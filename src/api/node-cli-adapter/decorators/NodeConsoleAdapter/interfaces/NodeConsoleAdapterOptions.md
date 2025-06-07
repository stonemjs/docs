[**Node CLI Adapter Documentation v0.0.0**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [decorators/NodeConsoleAdapter](../README.md) / NodeConsoleAdapterOptions

# Interface: NodeConsoleAdapterOptions

Configuration options for the `NodeConsoleAdapter` decorator.
These options extend the default Node Cli adapter configuration.

## Extends

- `Partial`\<[`NodeCliAdapterConfig`](../../../options/NodeCliAdapterBlueprint/interfaces/NodeCliAdapterConfig.md)\>

## Properties

### commands?

> `optional` **commands**: [`ClassType`, [`CommandOptions`](../../Command/interfaces/CommandOptions.md)][]

#### Inherited from

`Partial.commands`

#### Defined in

[src/options/NodeCliAdapterBlueprint.ts:19](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/options/NodeCliAdapterBlueprint.ts#L19)

***

### router?

> `optional` **router**: `ClassType`

#### Inherited from

`Partial.router`

#### Defined in

[src/options/NodeCliAdapterBlueprint.ts:18](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/options/NodeCliAdapterBlueprint.ts#L18)
