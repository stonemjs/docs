[**Node CLI Adapter Documentation v0.0.0**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [command/CommandOutput](../README.md) / CommandOutput

# Class: CommandOutput

Class representing a CommandOutput Facade.
Provides utility methods for logging, colored outputs, spinners, and progress bars.

## Properties

### format

> `readonly` **format**: `ChalkInstance`

A formatting library (e.g., `chalk`).

#### Defined in

[src/command/CommandOutput.ts:22](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandOutput.ts#L22)

## Methods

### breakLine()

> **breakLine**(`value`): `this`

Output a line break.

#### Parameters

##### value

`number`

The number of newlines to add.

#### Returns

`this`

The current instance for chaining.

#### Defined in

[src/command/CommandOutput.ts:84](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandOutput.ts#L84)

***

### error()

> **error**(`value`, `color`): `this`

Output error-colored text.

#### Parameters

##### value

`string`

The text to display.

##### color

`boolean` = `true`

Whether to color the text. Defaults to true.

#### Returns

`this`

The current instance for chaining.

#### Defined in

[src/command/CommandOutput.ts:108](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandOutput.ts#L108)

***

### info()

> **info**(`value`, `color`): `this`

Output info-colored text.

#### Parameters

##### value

`string`

The text to display.

##### color

`boolean` = `true`

Whether to color the text. Defaults to true.

#### Returns

`this`

The current instance for chaining.

#### Defined in

[src/command/CommandOutput.ts:96](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandOutput.ts#L96)

***

### progressBar()

> **progressBar**(`tokens`, `options`): `ProgressBar`

Create a progress bar.

#### Parameters

##### tokens

`string`

The template string for the progress bar.

##### options

`ProgressBarOptions`

Configuration options for the progress bar.

#### Returns

`ProgressBar`

A new ProgressBar instance.

#### Defined in

[src/command/CommandOutput.ts:164](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandOutput.ts#L164)

***

### show()

> **show**(`value`): `this`

Output uncolored text.

#### Parameters

##### value

`string`

The text to display.

#### Returns

`this`

The current instance for chaining.

#### Defined in

[src/command/CommandOutput.ts:62](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandOutput.ts#L62)

***

### spin()

> **spin**(`value`): `Ora`

Output a spinner.

#### Parameters

##### value

`string`

The spinner's initial message. Defaults to null.

#### Returns

`Ora`

The spinner instance started.

#### Defined in

[src/command/CommandOutput.ts:143](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandOutput.ts#L143)

***

### spinner()

> **spinner**(`value`): `Ora`

Creates a spinner instance.

#### Parameters

##### value

`string`

The spinner's initial message. Defaults to null.

#### Returns

`Ora`

The spinner instance.

#### Defined in

[src/command/CommandOutput.ts:153](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandOutput.ts#L153)

***

### succeed()

> **succeed**(`value`, `color`): `this`

Output success-colored text.

#### Parameters

##### value

`string`

The text to display.

##### color

`boolean` = `true`

Whether to color the text. Defaults to true.

#### Returns

`this`

The current instance for chaining.

#### Defined in

[src/command/CommandOutput.ts:132](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandOutput.ts#L132)

***

### table()

> **table**(`value`): `this`

Output a table.

#### Parameters

##### value

`unknown`

The value to display as a table.

#### Returns

`this`

The current instance for chaining.

#### Defined in

[src/command/CommandOutput.ts:73](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandOutput.ts#L73)

***

### warn()

> **warn**(`value`, `color`): `this`

Output warn-colored text.

#### Parameters

##### value

`string`

The text to display.

##### color

`boolean` = `true`

Whether to color the text. Defaults to true.

#### Returns

`this`

The current instance for chaining.

#### Defined in

[src/command/CommandOutput.ts:120](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandOutput.ts#L120)

***

### create()

> `static` **create**(`options`): [`CommandOutput`](CommandOutput.md)

Create a CommandOutput instance.

#### Parameters

##### options

[`CommandOutputOptions`](../interfaces/CommandOutputOptions.md)

The options for creating the CommandOutput instance.

#### Returns

[`CommandOutput`](CommandOutput.md)

#### Defined in

[src/command/CommandOutput.ts:39](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandOutput.ts#L39)
