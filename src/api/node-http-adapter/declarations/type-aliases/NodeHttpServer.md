[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [declarations](../README.md) / NodeHttpServer

# Type Alias: NodeHttpServer

> **NodeHttpServer**: `HttpsServer`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\> \| `Server`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>

Defined in: [src/declarations.ts:39](https://github.com/stonemjs/node-http-adapter/blob/b3024c4319ed00f9eb0215cf9f549bf3e7da590d/src/declarations.ts#L39)

Represents a Node.js HTTP or HTTPS server.

Combines both HTTP and HTTPS server types to allow flexibility in choosing the server type.
