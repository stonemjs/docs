[**Node CLI Adapter Documentation v0.0.0**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [command/CommandRouter](../README.md) / CommandRouter

# Class: CommandRouter\<W, X\>

Class representing a CommandRouter.
Responsible for finding and dispatching commands based on incoming events.

## Author

Mr. Stone <evensstone@gmail.com>

## Type Parameters

• **W** *extends* `IncomingEvent` = `IncomingEvent`

• **X** *extends* `OutgoingResponse` = `OutgoingResponse`

## Implements

- `IRouter`\<`W`, `X`\>

## Constructors

### new CommandRouter()

> **new CommandRouter**\<`W`, `X`\>(`container`): [`CommandRouter`](CommandRouter.md)\<`W`, `X`\>

Create a new instance of CommandRouter.

#### Parameters

##### container

[`CommandRouterOptions`](../interfaces/CommandRouterOptions.md)

The container instance for dependency resolution.

#### Returns

[`CommandRouter`](CommandRouter.md)\<`W`, `X`\>

#### Defined in

[src/command/CommandRouter.ts:39](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandRouter.ts#L39)

## Methods

### dispatch()

> **dispatch**(`event`): `Promise`\<`X`\>

Dispatches an event to the appropriate command.

#### Parameters

##### event

`W`

The incoming event to be dispatched.

#### Returns

`Promise`\<`X`\>

The result of the command execution.

#### Implementation of

`IRouter.dispatch`

#### Defined in

[src/command/CommandRouter.ts:59](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandRouter.ts#L59)

***

### findCommand()

> **findCommand**(`event`): `undefined` \| [`ICommand`](../../../declarations/interfaces/ICommand.md)\<`W`, `X`\>

Finds a command that matches the given event.

#### Parameters

##### event

`W`

The incoming event to match against commands.

#### Returns

`undefined` \| [`ICommand`](../../../declarations/interfaces/ICommand.md)\<`W`, `X`\>

The matching command, or undefined if no match is found.

#### Defined in

[src/command/CommandRouter.ts:69](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandRouter.ts#L69)

***

### runCommand()

> **runCommand**(`event`, `command`?): `Promise`\<`X`\>

Runs the given command with the provided event.

#### Parameters

##### event

`W`

The event to handle.

##### command?

[`ICommand`](../../../declarations/interfaces/ICommand.md)\<`W`, `X`\>

The command to execute.

#### Returns

`Promise`\<`X`\>

The result of the command execution, or void if no command is found.

#### Defined in

[src/command/CommandRouter.ts:82](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandRouter.ts#L82)
