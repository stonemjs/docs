[**Filesystem Documentation**](../../README.md)

***

[Filesystem Documentation](../../README.md) / [utils](../README.md) / importModule

# Function: importModule()

> **importModule**\<`R`\>(`relativePath`): `Promise`\<`undefined` \| `R`\>

Defined in: [utils.ts:95](https://github.com/stonemjs/filesystem/blob/064ba29e1d5559c367f9a7471b75a6d308ebe158/src/utils.ts#L95)

Asynchronously imports a module given its relative path.

## Type Parameters

### R

`R`

## Parameters

### relativePath

`string`

The relative path to the module to be imported.

## Returns

`Promise`\<`undefined` \| `R`\>

A promise that resolves to the imported module, or null if the import fails.
