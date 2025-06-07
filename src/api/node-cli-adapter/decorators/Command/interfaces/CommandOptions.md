[**Node CLI Adapter Documentation v0.0.0**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [decorators/Command](../README.md) / CommandOptions

# Interface: CommandOptions

Command options.

Represents the configuration options for a CLI command.

## Properties

### alias?

> `optional` **alias**: `string` \| `string`[]

Alias or aliases for the command, used for identification or access.
Can be a single alias or an array of aliases.

#### Defined in

[src/decorators/Command.ts:21](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/decorators/Command.ts#L21)

***

### args?

> `optional` **args**: `string` \| `string`[]

The arguments required or accepted by the command.
Can be a single argument or an array of arguments.

#### Defined in

[src/decorators/Command.ts:27](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/decorators/Command.ts#L27)

***

### desc?

> `optional` **desc**: `string`

The description of the command.

#### Defined in

[src/decorators/Command.ts:32](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/decorators/Command.ts#L32)

***

### name

> **name**: `string`

The unique name of the command.

#### Defined in

[src/decorators/Command.ts:15](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/decorators/Command.ts#L15)

***

### options?

> `optional` **options**: `Partial`\<`CommandBuilder`\<`object`\>\>

A map of additional options for the command, where the key is the option name
and the value is its description.

#### Defined in

[src/decorators/Command.ts:38](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/decorators/Command.ts#L38)
