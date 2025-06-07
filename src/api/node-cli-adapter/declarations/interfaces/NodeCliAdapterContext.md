[**Node CLI Adapter Documentation v0.0.0**](../../README.md)

***

[Node CLI Adapter Documentation](../../modules.md) / [declarations](../README.md) / NodeCliAdapterContext

# Interface: NodeCliAdapterContext

Represents the context for the Node Cli Adapter.

This interface extends `AdapterContext` and includes additional properties
specific to generic Node Cli events.

## Extends

- `AdapterContext`\<[`NodeCliEvent`](NodeCliEvent.md), [`RawResponse`](../type-aliases/RawResponse.md), [`NodeCliExecutionContext`](../type-aliases/NodeCliExecutionContext.md), `IncomingEvent`, `IncomingEventOptions`, `OutgoingResponse`\>

## Properties

### rawResponse

> **rawResponse**: `number`

The raw response associated with the current context.

#### Defined in

[src/declarations.ts:50](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/declarations.ts#L50)
