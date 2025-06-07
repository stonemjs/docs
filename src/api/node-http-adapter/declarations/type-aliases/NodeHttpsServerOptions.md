[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [declarations](../README.md) / NodeHttpsServerOptions

# Type Alias: NodeHttpsServerOptions

> **NodeHttpsServerOptions**: `HttpsServerOptions`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>

Defined in: [src/declarations.ts:29](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/declarations.ts#L29)

Represents options for configuring a Node.js HTTPS server.

Extends the `HttpsServerOptions` type from Node.js to support strongly typed
`IncomingMessage` and `ServerResponse` instances.
