[**HTTP Core Documentation**](../../../README.md)

***

[HTTP Core Documentation](../../../README.md) / [hooks/EnsureCorsHeadersHook](../README.md) / EnsureCorsHeadersHook

# Function: EnsureCorsHeadersHook()

> **EnsureCorsHeadersHook**(`options`): `Promise`\<`void`\>

Defined in: [src/hooks/EnsureCorsHeadersHook.ts:27](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/hooks/EnsureCorsHeadersHook.ts#L27)

Ensure CORS headers at the "onBuildingRawResponse" stage.

This adapter hook ensures that CORS headers are applied even when the middleware is not executed.
It is useful for scenarios where an error occurs before reaching the middleware chain
or when a request bypasses the intended processing.

## Parameters

### options

`AdapterHookListenerContext`\<[`AdapterContextType`](../type-aliases/AdapterContextType.md)\>

The adapter hook listener context containing the blueprint and context.

## Returns

`Promise`\<`void`\>
