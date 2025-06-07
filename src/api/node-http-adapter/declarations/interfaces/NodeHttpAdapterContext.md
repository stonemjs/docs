[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [declarations](../README.md) / NodeHttpAdapterContext

# Interface: NodeHttpAdapterContext

Defined in: [src/declarations.ts:49](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/declarations.ts#L49)

Extends the `AdapterContext` interface to provide additional properties for the Node.js HTTP adapter.

This context includes the raw HTTP response (`ServerResponse`) in addition to the standard
Stone.js adapter context properties.

## Extends

- `AdapterContext`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../type-aliases/NodeHttpServer.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`\>

## Properties

### rawResponse

> **rawResponse**: `ServerResponse`

Defined in: [src/declarations.ts:60](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/declarations.ts#L60)

The raw HTTP response object associated with the current request.

#### Overrides

`AdapterContext.rawResponse`
