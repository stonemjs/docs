[**Node CLI Adapter Documentation v0.0.0**](../../../README.md)

***

[Node CLI Adapter Documentation](../../../modules.md) / [command/CommandInput](../README.md) / CommandInput

# Class: CommandInput

Class representing a CommandInput Facade.
Handles user interactions through prompts, such as questions, confirmations, and choices.

## Methods

### ask()

> **ask**(`message`, `fallback`?): `Promise`\<`string`\>

Asks a basic question with an optional fallback.

#### Parameters

##### message

`string`

The message to display.

##### fallback?

`string`

The fallback value if no response is provided.

#### Returns

`Promise`\<`string`\>

The user's response.

#### Defined in

[src/command/CommandInput.ts:67](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandInput.ts#L67)

***

### askNumber()

> **askNumber**(`message`, `fallback`?): `Promise`\<`number`\>

Asks a numeric question with an optional fallback.

#### Parameters

##### message

`string`

The message to display.

##### fallback?

`number`

The fallback value if no response is provided.

#### Returns

`Promise`\<`number`\>

The user's response as a number.

#### Defined in

[src/command/CommandInput.ts:78](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandInput.ts#L78)

***

### choice()

> **choice**(`message`, `choices`, `fallbackIndex`, `multiple`): `Promise`\<`string` \| `string`[]\>

Asks the user to make a choice from a list.

#### Parameters

##### message

`string`

The message to display.

##### choices

`string`[]

The array of choices to present.

##### fallbackIndex

`number` = `0`

The default selected index if no response is provided.

##### multiple

`boolean` = `false`

Whether to allow multiple selections.

#### Returns

`Promise`\<`string` \| `string`[]\>

The user's response.

#### Defined in

[src/command/CommandInput.ts:112](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandInput.ts#L112)

***

### confirm()

> **confirm**(`message`, `fallback`): `Promise`\<`boolean`\>

Asks for a confirmation.

#### Parameters

##### message

`string`

The message to display.

##### fallback

`boolean` = `false`

The fallback value if no response is provided.

#### Returns

`Promise`\<`boolean`\>

The user's response as a boolean.

#### Defined in

[src/command/CommandInput.ts:99](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandInput.ts#L99)

***

### editor()

> **editor**(`message`, `fallback`?): `Promise`\<`string`\>

Opens an editor for the user to input text.

#### Parameters

##### message

`string`

The message to display.

##### fallback?

`string`

The fallback value if no response is provided.

#### Returns

`Promise`\<`string`\>

The user's response as a string.

#### Defined in

[src/command/CommandInput.ts:133](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandInput.ts#L133)

***

### prompt()

> **prompt**\<`T`\>(`question`): `Promise`\<`T`\>

Prompts the user with a single question.

#### Type Parameters

• **T**

#### Parameters

##### question

`UnnamedDistinctQuestion`\<`Answers` & `object`\> & `object`

The question object to display.

#### Returns

`Promise`\<`T`\>

The user's response.

#### Defined in

[src/command/CommandInput.ts:56](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandInput.ts#L56)

***

### questionnaire()

> **questionnaire**(`questions`): `PromptReturnType`\<`Answers`\>

Displays a questionnaire.

#### Parameters

##### questions

`UnnamedDistinctQuestion`\<`Answers` & `object`\> & `object`[]

An array of question objects to be displayed.

#### Returns

`PromptReturnType`\<`Answers`\>

The response from the prompt.

#### Defined in

[src/command/CommandInput.ts:46](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandInput.ts#L46)

***

### secret()

> **secret**(`message`): `Promise`\<`string`\>

Asks for a secret input (e.g., password).

#### Parameters

##### message

`string`

The message to display.

#### Returns

`Promise`\<`string`\>

The user's response as a string.

#### Defined in

[src/command/CommandInput.ts:88](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandInput.ts#L88)

***

### create()

> `static` **create**(`options`): [`CommandInput`](CommandInput.md)

Create a CommandInput instance.

#### Parameters

##### options

[`CommandInputOptions`](../interfaces/CommandInputOptions.md)

The options for creating the CommandInput instance.

#### Returns

[`CommandInput`](CommandInput.md)

#### Defined in

[src/command/CommandInput.ts:27](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/command/CommandInput.ts#L27)
