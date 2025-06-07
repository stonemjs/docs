[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [cookies/Cookie](../README.md) / Cookie

# Class: Cookie

Defined in: [src/cookies/Cookie.ts:7](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/Cookie.ts#L7)

Class representing a Cookie.

## Constructors

### new Cookie()

> `protected` **new Cookie**(`name`, `value`, `options`): [`Cookie`](Cookie.md)

Defined in: [src/cookies/Cookie.ts:27](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/Cookie.ts#L27)

#### Parameters

##### name

`string`

Cookie name.

##### value

`unknown`

Cookie value.

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookie options.

#### Returns

[`Cookie`](Cookie.md)

## Properties

### name

> `readonly` **name**: `string`

Defined in: [src/cookies/Cookie.ts:8](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/Cookie.ts#L8)

***

### options

> `readonly` **options**: [`CookieOptions`](../../../declarations/interfaces/CookieOptions.md)

Defined in: [src/cookies/Cookie.ts:10](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/Cookie.ts#L10)

***

### value

> `readonly` **value**: `unknown`

Defined in: [src/cookies/Cookie.ts:9](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/Cookie.ts#L9)

## Methods

### cloneWith()

> **cloneWith**(`value`, `options`): [`Cookie`](Cookie.md)

Defined in: [src/cookies/Cookie.ts:70](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/Cookie.ts#L70)

Clone the cookie with new name, value, and options.

#### Parameters

##### value

`unknown`

New cookie value.

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

New cookie options.

#### Returns

[`Cookie`](Cookie.md)

A new cookie instance.

***

### serialize()

> **serialize**(): `string`

Defined in: [src/cookies/Cookie.ts:54](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/Cookie.ts#L54)

Serialize the cookie value.

#### Returns

`string`

***

### setExpires()

> **setExpires**(`value`): `this`

Defined in: [src/cookies/Cookie.ts:37](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/Cookie.ts#L37)

Set expiration date for the cookie.

#### Parameters

##### value

`Date`

Expiration date.

#### Returns

`this`

***

### setSecure()

> **setSecure**(`value`): `this`

Defined in: [src/cookies/Cookie.ts:46](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/Cookie.ts#L46)

Set secure flag for the cookie.

#### Parameters

##### value

`boolean`

Whether the cookie is secure.

#### Returns

`this`

***

### create()

> `static` **create**(`name`, `value`, `options`): [`Cookie`](Cookie.md)

Defined in: [src/cookies/Cookie.ts:18](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/Cookie.ts#L18)

Create a Cookie.

#### Parameters

##### name

`string`

Cookie name.

##### value

`unknown`

Cookie value.

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookie options.

#### Returns

[`Cookie`](Cookie.md)
