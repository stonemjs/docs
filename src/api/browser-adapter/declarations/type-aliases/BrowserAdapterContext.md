[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [declarations](../README.md) / BrowserAdapterContext

# Type Alias: BrowserAdapterContext

> **BrowserAdapterContext**: `AdapterContext`\<[`BrowserEvent`](BrowserEvent.md), [`BrowserResponse`](BrowserResponse.md), [`BrowserContext`](BrowserContext.md), [`IncomingBrowserEvent`](../../events/IncomingBrowserEvent/classes/IncomingBrowserEvent.md), [`IncomingBrowserEventOptions`](../../events/IncomingBrowserEvent/interfaces/IncomingBrowserEventOptions.md), [`OutgoingBrowserResponse`](../../events/OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md)\>

Defined in: [src/declarations.ts:27](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/declarations.ts#L27)

Represents the context for the Browser Adapter.

This interface extends `AdapterContext` and includes additional properties
specific to generic Browser events.
