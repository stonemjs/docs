[**Node Adapter Documentation v0.0.21**](../../../README.md)

***

[Node Adapter Documentation](../../../modules.md) / [options/NodeHttpAdapterBlueprint](../README.md) / NodeHttpAdapterBlueprint

# Interface: NodeHttpAdapterBlueprint

Defined in: [src/options/NodeHttpAdapterBlueprint.ts:36](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/options/NodeHttpAdapterBlueprint.ts#L36)

Stone blueprint.

This interface defines the main configuration options for the Stone.js framework.
It includes settings for the builder, adapters, and the main application,
while allowing additional custom options to be added.

## Extends

- `StoneBlueprint`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### stone

> **stone**: `object`

Defined in: [src/options/NodeHttpAdapterBlueprint.ts:40](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/options/NodeHttpAdapterBlueprint.ts#L40)

Application-level settings, including environment, middleware, logging, and service registration.

#### adapters

> **adapters**: [`NodeHttpAdapterConfig`](NodeHttpAdapterConfig.md)[]

#### Overrides

`StoneBlueprint.stone`
