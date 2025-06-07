[**Node CLI Adapter Documentation v0.0.0**](../../README.md)

***

[Node CLI Adapter Documentation](../../modules.md) / [RawResponseWrapper](../README.md) / RawResponseWrapper

# Class: RawResponseWrapper

Wrapper for generic raw responses.

The `RawResponseWrapper` is responsible for encapsulating a raw response
and returning it in a structure that aligns with the Stone.js framework's requirements.
It implements the `IRawResponseWrapper` interface, ensuring compatibility with the framework.

## Implements

- `IRawResponseWrapper`\<[`RawResponse`](../../declarations/type-aliases/RawResponse.md)\>

## Methods

### respond()

> **respond**(): `number`

Constructs and returns the raw response.

The `respond` method generates and returns the raw response based on
the provided options. The response is returned as-is, allowing for
maximum flexibility in defining its structure.

#### Returns

`number`

A `RawResponse` object containing the response options.

#### Example

```typescript
const responseWrapper = RawResponseWrapper.create({ exitCode: 1 });
const response = responseWrapper.respond();
console.log(response); // 1
```

#### Implementation of

`IRawResponseWrapper.respond`

#### Defined in

[src/RawResponseWrapper.ts:62](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/RawResponseWrapper.ts#L62)

***

### create()

> `static` **create**(`options`): [`RawResponseWrapper`](RawResponseWrapper.md)

Factory method to create an instance of `RawResponseWrapper`.

This method initializes the wrapper with a set of partial response options.

#### Parameters

##### options

`Partial`\<`RawResponseOptions`\>

Partial options to configure the raw response.

#### Returns

[`RawResponseWrapper`](RawResponseWrapper.md)

A new instance of `RawResponseWrapper`.

#### Example

```typescript
const responseWrapper = RawResponseWrapper.create({
  headers: { 'Content-Type': 'application/json' },
  body: { message: 'Success' },
  statusCode: 200,
});

const response = responseWrapper.respond();
console.log(response); // { headers: { 'Content-Type': 'application/json' }, body: { message: 'Success' }, statusCode: 200 }
```

#### Defined in

[src/RawResponseWrapper.ts:32](https://github.com/stonemjs/node-cli-adapter/blob/30743f7aaaae46db17826e810be4549d56406b6f/src/RawResponseWrapper.ts#L32)
