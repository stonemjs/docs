[**Node Adapter Documentation v0.0.21**](../../README.md)

***

[Node Adapter Documentation](../../modules.md) / [NodeHttpErrorHandler](../README.md) / NodeHttpErrorHandler

# Class: NodeHttpErrorHandler

Defined in: src/NodeHttpErrorHandler.ts:19

Class representing an NodeHttpErrorHandler.

## Implements

- `IAdapterErrorHandler`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)\>

## Constructors

### new NodeHttpErrorHandler()

> **new NodeHttpErrorHandler**(`options`): [`NodeHttpErrorHandler`](NodeHttpErrorHandler.md)

Defined in: src/NodeHttpErrorHandler.ts:27

Create an NodeHttpErrorHandler.

#### Parameters

##### options

[`NodeHttpErrorHandlerOptions`](../interfaces/NodeHttpErrorHandlerOptions.md)

NodeHttpErrorHandler options.

#### Returns

[`NodeHttpErrorHandler`](NodeHttpErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `Promise`\<`ServerResponse`\>

Defined in: src/NodeHttpErrorHandler.ts:42

Handle an error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

`AdapterErrorContext`\<`IncomingMessage`, `ServerResponse`, [`NodeHttpServer`](../../declarations/type-aliases/NodeHttpServer.md)\>

The context of the adapter.

#### Returns

`Promise`\<`ServerResponse`\>

The raw response.

#### Implementation of

`IAdapterErrorHandler.handle`
