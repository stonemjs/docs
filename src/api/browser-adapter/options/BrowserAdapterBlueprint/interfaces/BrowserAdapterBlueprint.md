[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [options/BrowserAdapterBlueprint](../README.md) / BrowserAdapterBlueprint

# Interface: BrowserAdapterBlueprint

Defined in: [src/options/BrowserAdapterBlueprint.ts:28](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/options/BrowserAdapterBlueprint.ts#L28)

Blueprint interface for the Browser Adapter.

This interface extends `StoneBlueprint` and defines the structure of the
Browser adapter blueprint used in the Stone.js framework. It includes
a `stone` object with an array of `BrowserAdapterConfig` items.

## Extends

- `StoneBlueprint`

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### stone

> **stone**: `object`

Defined in: [src/options/BrowserAdapterBlueprint.ts:29](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/options/BrowserAdapterBlueprint.ts#L29)

Application-level settings, including environment, middleware, logging, and service registration.

#### adapters

> **adapters**: [`BrowserAdapterConfig`](BrowserAdapterConfig.md)[]

#### Overrides

`StoneBlueprint.stone`
