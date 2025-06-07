[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [declarations](../README.md) / IRoute

# Interface: IRoute

Defined in: [src/declarations.ts:55](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/declarations.ts#L55)

Describes a route definition, including its URI, method, and parameters.

## Properties

### getOptions()

> **getOptions**: \<`TReturn`\>(`keys`) => `Record`\<`string`, `TReturn`\>

Defined in: [src/declarations.ts:59](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/declarations.ts#L59)

#### Type Parameters

##### TReturn

`TReturn` = `unknown`

#### Parameters

##### keys

`string`[]

#### Returns

`Record`\<`string`, `TReturn`\>

***

### getParam()

> **getParam**: \<`TReturn`\>(`name`, `fallback?`) => `undefined` \| `TReturn`

Defined in: [src/declarations.ts:60](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/declarations.ts#L60)

#### Type Parameters

##### TReturn

`TReturn` = `unknown`

#### Parameters

##### name

`string`

##### fallback?

`TReturn`

#### Returns

`undefined` \| `TReturn`

***

### method

> **method**: [`HttpMethod`](../type-aliases/HttpMethod.md)

Defined in: [src/declarations.ts:57](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/declarations.ts#L57)

***

### params

> **params**: `Record`\<`string`, `unknown`\>

Defined in: [src/declarations.ts:58](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/declarations.ts#L58)

***

### uri

> **uri**: `string`

Defined in: [src/declarations.ts:56](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/declarations.ts#L56)
