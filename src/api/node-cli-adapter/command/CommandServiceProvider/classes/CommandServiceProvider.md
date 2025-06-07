[**Node CLI Adapter Documentation v0.0.0**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [command/CommandServiceProvider](../README.md) / CommandServiceProvider

# Class: CommandServiceProvider

Class representing a CommandServiceProvider.
Responsible for registering router and application commands.

## Author

Mr. Stone <evensstone@gmail.com>

## Implements

- `IProvider`

## Constructors

### new CommandServiceProvider()

> **new CommandServiceProvider**(`container`): [`CommandServiceProvider`](CommandServiceProvider.md)

Create a new instance of CommandServiceProvider.

#### Parameters

##### container

[`CommandServiceProviderOptions`](../interfaces/CommandServiceProviderOptions.md)

The container instance for dependency resolution.

#### Returns

[`CommandServiceProvider`](CommandServiceProvider.md)

#### Defined in

[src/command/CommandServiceProvider.ts:42](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandServiceProvider.ts#L42)

## Methods

### mustSkip()

> **mustSkip**(): `boolean`

Determines if this provider should be skipped.
Useful for registering the provider based on platform.

#### Returns

`boolean`

True if the provider should be skipped; otherwise, false.

#### Implementation of

`IProvider.mustSkip`

#### Defined in

[src/command/CommandServiceProvider.ts:65](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandServiceProvider.ts#L65)

***

### register()

> **register**(): `void`

Registers router components and application commands in the service container.

#### Returns

`void`

#### Implementation of

`IProvider.register`

#### Defined in

[src/command/CommandServiceProvider.ts:72](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandServiceProvider.ts#L72)
