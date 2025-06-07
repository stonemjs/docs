[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [decorators/NodeHttp](../README.md) / NodeHttpOptions

# Interface: NodeHttpOptions

Defined in: src/decorators/NodeHttp.ts:11

Interface for configuring the `NodeHttp` decorator.

This interface extends `NodeHttpAdapterConfig` and allows partial customization
of the Node.js HTTP adapter blueprint configuration.

## Extends

- `Partial`\<[`NodeHttpAdapterConfig`](../../../options/NodeHttpAdapterBlueprint/interfaces/NodeHttpAdapterConfig.md)\>

## Properties

### server?

> `optional` **server**: [`NodeServerOptions`](../../../declarations/type-aliases/NodeServerOptions.md)

Defined in: [src/options/NodeHttpAdapterBlueprint.ts:26](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/options/NodeHttpAdapterBlueprint.ts#L26)

Additional server configurations for the Node HTTP server.

#### Inherited from

`Partial.server`

***

### url?

> `optional` **url**: `string`

Defined in: [src/options/NodeHttpAdapterBlueprint.ts:21](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/options/NodeHttpAdapterBlueprint.ts#L21)

The base URL used by the node http to run the application.

#### Inherited from

`Partial.url`
