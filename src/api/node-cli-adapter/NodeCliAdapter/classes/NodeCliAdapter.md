[**Node CLI Adapter Documentation v0.0.0**](../../README.md)

***

[Node CLI Adapter Documentation](../../modules.md) / [NodeCliAdapter](../README.md) / NodeCliAdapter

# Class: NodeCliAdapter

Node Cli Adapter for Stone.js.

The `NodeCliAdapter` provides seamless integration between Stone.js applications
and the Node Cli environment. It processes incoming events from Node Cli,
transforms them into `IncomingEvent` instances, and returns a `RawResponse`.

This adapter ensures compatibility with Node Cli's execution model and
abstracts the event handling process for Stone.js developers.

## Template

The type of the raw event received from Node Cli.

## Template

The type of the response to send back to Node Cli.

## Template

The Node Cli execution context type.

## Template

The type of the processed incoming event.

## Template

Options used to create an incoming event.

## Template

The type of the outgoing response after processing.

## Template

Context type specific to the adapter.

## Example

```typescript
import { NodeCliAdapter } from '@stone-js/node-cli-adapter';

const adapter = NodeCliAdapter.create({...});

const handler = await adapter.run();

export { handler };
```

## See

[Stone.js Documentation](https://stone-js.com/docs)

## Extends

- `Adapter`\<[`NodeCliEvent`](../../declarations/interfaces/NodeCliEvent.md), [`RawResponse`](../../declarations/type-aliases/RawResponse.md), [`NodeCliExecutionContext`](../../declarations/type-aliases/NodeCliExecutionContext.md), `IncomingEvent`, `IncomingEventOptions`, `OutgoingResponse`, [`NodeCliAdapterContext`](../../declarations/interfaces/NodeCliAdapterContext.md)\>

## Constructors

### new NodeCliAdapter()

> `protected` **new NodeCliAdapter**(`options`): [`NodeCliAdapter`](NodeCliAdapter.md)

Create an Adapter.

#### Parameters

##### options

`AdapterOptions`\<`number`, `IncomingEvent`, `OutgoingResponse`\>

Adapter options.

#### Returns

[`NodeCliAdapter`](NodeCliAdapter.md)

#### Inherited from

`Adapter<
NodeCliEvent,
RawResponse,
NodeCliExecutionContext,
IncomingEvent,
IncomingEventOptions,
OutgoingResponse,
NodeCliAdapterContext
>.constructor`

#### Defined in

node\_modules/@stone-js/core/dist/index.d.ts:1772

## Methods

### eventListener()

> `protected` **eventListener**(`rawEvent`, `executionContext`): `Promise`\<`number`\>

Processes an incoming Node Cli event.

This method transforms the raw Node Cli event into a Stone.js `IncomingEvent`,
processes it through the pipeline, and generates a `RawResponse` to send back.

#### Parameters

##### rawEvent

[`NodeCliEvent`](../../declarations/interfaces/NodeCliEvent.md)

The raw Node Cli event to be processed.

##### executionContext

[`CommandBuilder`](../../declarations/type-aliases/CommandBuilder.md)

The Node Cli execution context for the event.

#### Returns

`Promise`\<`number`\>

A promise resolving to the processed `RawResponse`.

#### Defined in

[src/NodeCliAdapter.ts:130](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/NodeCliAdapter.ts#L130)

***

### onInit()

> `protected` **onInit**(): `Promise`\<`void`\>

Initializes the adapter and validates its execution context.

Ensures the adapter is running in an Node Cli environment. If not, it
throws an error to prevent misuse.

#### Returns

`Promise`\<`void`\>

#### Throws

If executed outside an Node Cli context (e.g., browser).

#### Overrides

`Adapter.onInit`

#### Defined in

[src/NodeCliAdapter.ts:110](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/NodeCliAdapter.ts#L110)

***

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Executes the adapter and provides an Node Cli-compatible handler function.

The `run` method processes events, manages context, and returns the appropriate response.

#### Type Parameters

• **ExecutionResultType** = `number`

The type representing the Node Cli event handler function.

#### Returns

`Promise`\<`ExecutionResultType`\>

A promise resolving to the Node Cli handler function.

#### Throws

If used outside the Node Cli environment.

#### Overrides

`Adapter.run`

#### Defined in

[src/NodeCliAdapter.ts:90](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/NodeCliAdapter.ts#L90)

***

### create()

> `static` **create**(`options`): [`NodeCliAdapter`](NodeCliAdapter.md)

Creates an instance of the `NodeCliAdapter`.

This factory method allows developers to instantiate the adapter with
the necessary configuration options, ensuring it is correctly set up for
Node Cli usage.

#### Parameters

##### options

`AdapterOptions`\<`number`, `IncomingEvent`, `OutgoingResponse`\>

The configuration options for the adapter, including
                 handler resolver, error handling, and other settings.

#### Returns

[`NodeCliAdapter`](NodeCliAdapter.md)

A fully initialized `NodeCliAdapter` instance.

#### Defined in

[src/NodeCliAdapter.ts:66](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/NodeCliAdapter.ts#L66)
