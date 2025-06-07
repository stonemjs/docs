[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [options/BrowserAdapterBlueprint](../README.md) / BrowserAdapterConfig

# Interface: BrowserAdapterConfig

Defined in: [src/options/BrowserAdapterBlueprint.ts:14](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/options/BrowserAdapterBlueprint.ts#L14)

Configuration interface for the Browser Adapter.

Extends the `AdapterConfig` interface from the Stone.js framework and provides
customizable options specific to the Browser platform. This includes
alias, resolver, middleware, hooks, and various adapter state flags.

## Extends

- `AdapterConfig`

## Properties

### events

> **events**: `string`[]

Defined in: [src/options/BrowserAdapterBlueprint.ts:18](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/options/BrowserAdapterBlueprint.ts#L18)

Browser-specific events that the adapter should listen for.
