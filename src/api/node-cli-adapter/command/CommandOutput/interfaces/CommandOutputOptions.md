[**Node CLI Adapter Documentation v0.0.0**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [command/CommandOutput](../README.md) / CommandOutputOptions

# Interface: CommandOutputOptions

CommandOutputOptions

## Properties

### format

> **format**: `ChalkInstance`

#### Defined in

[src/command/CommandOutput.ts:10](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandOutput.ts#L10)

***

### smartConsole()

> **smartConsole**: (`options`?) => `Ora`

Elegant terminal spinner.

#### Parameters

##### options?

If a string is provided, it is treated as a shortcut for `options.text`.

`string` | `Options`

#### Returns

`Ora`

#### Example

```
import ora from 'ora';

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 1000);
```

#### Defined in

[src/command/CommandOutput.ts:11](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandOutput.ts#L11)

***

### stdConsole

> **stdConsole**: `Console`

#### Defined in

[src/command/CommandOutput.ts:9](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandOutput.ts#L9)
