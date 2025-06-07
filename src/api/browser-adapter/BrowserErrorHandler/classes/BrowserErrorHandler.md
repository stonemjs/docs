[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [BrowserErrorHandler](../README.md) / BrowserErrorHandler

# Class: BrowserErrorHandler

Defined in: [src/BrowserErrorHandler.ts:14](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/BrowserErrorHandler.ts#L14)

Class representing an BrowserErrorHandler.

## Implements

- `IAdapterErrorHandler`\<[`BrowserEvent`](../../declarations/type-aliases/BrowserEvent.md), [`BrowserResponse`](../../declarations/type-aliases/BrowserResponse.md), [`BrowserContext`](../../declarations/type-aliases/BrowserContext.md)\>

## Constructors

### new BrowserErrorHandler()

> **new BrowserErrorHandler**(`options`): [`BrowserErrorHandler`](BrowserErrorHandler.md)

Defined in: [src/BrowserErrorHandler.ts:22](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/BrowserErrorHandler.ts#L22)

Create an BrowserErrorHandler.

#### Parameters

##### options

[`BrowserErrorHandlerOptions`](../interfaces/BrowserErrorHandlerOptions.md)

BrowserErrorHandler options.

#### Returns

[`BrowserErrorHandler`](BrowserErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `Promise`\<[`BrowserResponse`](../../declarations/type-aliases/BrowserResponse.md)\>

Defined in: [src/BrowserErrorHandler.ts:37](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/BrowserErrorHandler.ts#L37)

Handle an error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

`AdapterErrorContext`\<[`BrowserEvent`](../../declarations/type-aliases/BrowserEvent.md), [`BrowserResponse`](../../declarations/type-aliases/BrowserResponse.md), `Window` & *typeof* `globalThis`\>

The context of the adapter.

#### Returns

`Promise`\<[`BrowserResponse`](../../declarations/type-aliases/BrowserResponse.md)\>

The raw response.

#### Implementation of

`IAdapterErrorHandler.handle`
