[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [decorators/Browser](../README.md) / BrowserOptions

# Interface: BrowserOptions

Defined in: [src/decorators/Browser.ts:9](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/decorators/Browser.ts#L9)

Configuration options for the `Browser` decorator.
These options extend the default Browser adapter configuration.

## Extends

- `Partial`\<[`BrowserAdapterConfig`](../../../options/BrowserAdapterBlueprint/interfaces/BrowserAdapterConfig.md)\>

## Properties

### events?

> `optional` **events**: `string`[]

Defined in: [src/options/BrowserAdapterBlueprint.ts:18](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/options/BrowserAdapterBlueprint.ts#L18)

Browser-specific events that the adapter should listen for.

#### Inherited from

`Partial.events`
