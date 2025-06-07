[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [options/BrowserAdapterBlueprint](../README.md) / browserAdapterBlueprint

# Variable: browserAdapterBlueprint

> `const` **browserAdapterBlueprint**: [`BrowserAdapterBlueprint`](../interfaces/BrowserAdapterBlueprint.md)

Defined in: [src/options/BrowserAdapterBlueprint.ts:43](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/options/BrowserAdapterBlueprint.ts#L43)

Default blueprint configuration for the Browser Adapter.

This blueprint defines the initial configuration for the Browser adapter
within the Stone.js framework. It includes:
- An alias for the Browser platform (`BROWSER_PLATFORM`).
- A default resolver function (currently a placeholder).
- Middleware, hooks, and state flags (`current`, `default`, `preferred`).
