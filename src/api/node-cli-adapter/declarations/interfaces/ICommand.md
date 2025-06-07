[**Node CLI Adapter Documentation v0.0.0**](../../README.md)

***

[Node CLI Adapter Documentation](../../modules.md) / [declarations](../README.md) / ICommand

# Interface: ICommand\<W, X\>

## Type Parameters

• **W** *extends* `IncomingEvent` = `IncomingEvent`

• **X** *extends* `OutgoingResponse` = `OutgoingResponse`

## Properties

### handle

> **handle**: `EventHandlerFunction`\<`W`, `X`\>

#### Defined in

[src/declarations.ts:20](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/declarations.ts#L20)

***

### match()?

> `optional` **match**: (`event`) => `boolean`

#### Parameters

##### event

`IncomingEvent`

#### Returns

`boolean`

#### Defined in

[src/declarations.ts:21](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/declarations.ts#L21)
