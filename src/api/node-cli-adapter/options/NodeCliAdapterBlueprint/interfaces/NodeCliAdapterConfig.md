[**Node CLI Adapter Documentation v0.0.0**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [options/NodeCliAdapterBlueprint](../README.md) / NodeCliAdapterConfig

# Interface: NodeCliAdapterConfig

Configuration interface for the Node Cli Adapter.

Extends the `AdapterConfig` interface from the Stone.js framework and provides
customizable options specific to the Node Cli platform. This includes
alias, resolver, middleware, hooks, and various adapter state flags.

## Extends

- `AdapterConfig`

## Properties

### commands

> **commands**: [`ClassType`, [`CommandOptions`](../../../decorators/Command/interfaces/CommandOptions.md)][]

#### Defined in

[src/options/NodeCliAdapterBlueprint.ts:19](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/options/NodeCliAdapterBlueprint.ts#L19)

***

### router?

> `optional` **router**: `ClassType`

#### Defined in

[src/options/NodeCliAdapterBlueprint.ts:18](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/options/NodeCliAdapterBlueprint.ts#L18)
