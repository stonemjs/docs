[**AWS Lambda Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda Adapter Documentation](../../modules.md) / [declarations](../README.md) / IRoute

# Interface: IRoute

Defined in: [src/declarations.ts:49](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/declarations.ts#L49)

Represents a route.

## Properties

### getParam()

> **getParam**: \<`TReturn`\>(`name`, `fallback`?) => `undefined` \| `TReturn`

Defined in: [src/declarations.ts:51](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/declarations.ts#L51)

#### Type Parameters

• **TReturn** = `unknown`

#### Parameters

##### name

`string`

##### fallback?

`TReturn`

#### Returns

`undefined` \| `TReturn`

***

### params

> **params**: `Record`\<`string`, `unknown`\>

Defined in: [src/declarations.ts:50](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/declarations.ts#L50)
