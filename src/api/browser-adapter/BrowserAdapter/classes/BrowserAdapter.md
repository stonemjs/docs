[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [BrowserAdapter](../README.md) / BrowserAdapter

# Class: BrowserAdapter

Defined in: [src/BrowserAdapter.ts:40](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/BrowserAdapter.ts#L40)

Browser Adapter for Stone.js.

The `BrowserAdapter` provides seamless integration between Stone.js applications
and the Browser environment. It processes incoming events from Browser,
transforms them into `IncomingBrowserEvent` instances, and returns a `BrowserResponse`.

This adapter ensures compatibility with Browser's execution model and
abstracts the event handling process for Stone.js developers.

## Template

The type of the raw event received from Browser.

## Template

The type of the response to send back to Browser.

## Template

The Browser execution context type.

## Template

The type of the processed incoming event.

## Template

Options used to create an incoming event.

## Template

The type of the outgoing response after processing.

## Template

Context type specific to the adapter.

## Example

```typescript
import { BrowserAdapter } from '@stone-js/browser-adapter';

const adapter = BrowserAdapter.create({...});

await adapter.run();
```

## See

[Stone.js Documentation](https://stone-js.com/docs)

## Extends

- `Adapter`\<[`BrowserEvent`](../../declarations/type-aliases/BrowserEvent.md), [`BrowserResponse`](../../declarations/type-aliases/BrowserResponse.md), [`BrowserContext`](../../declarations/type-aliases/BrowserContext.md), [`IncomingBrowserEvent`](../../events/IncomingBrowserEvent/classes/IncomingBrowserEvent.md), [`IncomingBrowserEventOptions`](../../events/IncomingBrowserEvent/interfaces/IncomingBrowserEventOptions.md), [`OutgoingBrowserResponse`](../../events/OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md), [`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md)\>

## Constructors

### new BrowserAdapter()

> `protected` **new BrowserAdapter**(`options`): [`BrowserAdapter`](BrowserAdapter.md)

Defined in: node\_modules/@stone-js/core/dist/index.d.ts:1876

Create an Adapter.

#### Parameters

##### options

`AdapterOptions`\<[`IncomingBrowserEvent`](../../events/IncomingBrowserEvent/classes/IncomingBrowserEvent.md), [`OutgoingBrowserResponse`](../../events/OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md)\>

Adapter options.

#### Returns

[`BrowserAdapter`](BrowserAdapter.md)

#### Inherited from

`Adapter< BrowserEvent, BrowserResponse, BrowserContext, IncomingBrowserEvent, IncomingBrowserEventOptions, OutgoingBrowserResponse, BrowserAdapterContext >.constructor`

## Methods

### eventListener()

> `protected` **eventListener**(`eventHandler`, `rawEvent`, `executionContext`): `Promise`\<[`BrowserResponse`](../../declarations/type-aliases/BrowserResponse.md)\>

Defined in: [src/BrowserAdapter.ts:115](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/BrowserAdapter.ts#L115)

Processes an incoming Browser event.

This method transforms the raw Browser event into a Stone.js `IncomingBrowserEvent`,
processes it through the pipeline, and generates a `RawResponse` to send back.

#### Parameters

##### eventHandler

`EventHandler`\<[`IncomingBrowserEvent`](../../events/IncomingBrowserEvent/classes/IncomingBrowserEvent.md), [`OutgoingBrowserResponse`](../../events/OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md)\>

##### rawEvent

[`BrowserEvent`](../../declarations/type-aliases/BrowserEvent.md)

The raw Browser event to be processed.

##### executionContext

`Window` & *typeof* `globalThis`

The Browser execution context for the event.

#### Returns

`Promise`\<[`BrowserResponse`](../../declarations/type-aliases/BrowserResponse.md)\>

A promise resolving to the processed `RawResponse`.

***

### onInit()

> `protected` **onInit**(): `Promise`\<`void`\>

Defined in: [src/BrowserAdapter.ts:97](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/BrowserAdapter.ts#L97)

Initializes the adapter and validates its execution context.

Ensures the adapter is running in a Browser environment. If not, it
throws an error to prevent misuse.

#### Returns

`Promise`\<`void`\>

#### Throws

If executed outside a Browser context (e.g., node).

#### Overrides

`Adapter.onInit`

***

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: [src/BrowserAdapter.ts:72](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/BrowserAdapter.ts#L72)

Executes the adapter and provides an Browser-compatible handler function.

The `run` method initializes the adapter and listens for incoming Browser events.
It processes these events, generates a response, and sends it back to the Browser.

#### Type Parameters

• **ExecutionResultType** = `undefined`

#### Returns

`Promise`\<`ExecutionResultType`\>

#### Throws

If used outside the Browser environment.

#### Overrides

`Adapter.run`

***

### create()

> `static` **create**(`options`): [`BrowserAdapter`](BrowserAdapter.md)

Defined in: [src/BrowserAdapter.ts:60](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/BrowserAdapter.ts#L60)

Creates an instance of the `BrowserAdapter`.

This factory method allows developers to instantiate the adapter with
the necessary configuration options, ensuring it is correctly set up for
Browser usage.

#### Parameters

##### options

`AdapterOptions`\<[`IncomingBrowserEvent`](../../events/IncomingBrowserEvent/classes/IncomingBrowserEvent.md), [`OutgoingBrowserResponse`](../../events/OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md)\>

The configuration options for the adapter, including
                 handler resolver, error handling, and other settings.

#### Returns

[`BrowserAdapter`](BrowserAdapter.md)

A fully initialized `BrowserAdapter` instance.
