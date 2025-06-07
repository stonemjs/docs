[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [options/NodeHttpAdapterBlueprint](../README.md) / NodeHttpAdapterConfig

# Interface: NodeHttpAdapterConfig

Defined in: [src/options/NodeHttpAdapterBlueprint.ts:17](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/options/NodeHttpAdapterBlueprint.ts#L17)

NodeHttpAdapterConfig Interface.

This interface defines the configuration options for the Node HTTP adapter
within the Stone.js framework. It includes settings such as the adapter's alias,
resolver, middleware, hooks, and server configurations.

## Extends

- `AdapterConfig`

## Properties

### server

> **server**: [`NodeServerOptions`](../../../declarations/type-aliases/NodeServerOptions.md)

Defined in: [src/options/NodeHttpAdapterBlueprint.ts:26](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/options/NodeHttpAdapterBlueprint.ts#L26)

Additional server configurations for the Node HTTP server.

***

### url

> **url**: `string`

Defined in: [src/options/NodeHttpAdapterBlueprint.ts:21](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/options/NodeHttpAdapterBlueprint.ts#L21)

The base URL used by the node http to run the application.
