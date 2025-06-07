[**AWS Lambda Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda Adapter Documentation](../../../modules.md) / [cookies/CookieCollection](../README.md) / CookieCollection

# Class: CookieCollection

Defined in: [src/cookies/CookieCollection.ts:8](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/CookieCollection.ts#L8)

Class representing a collection of Cookies.

## Constructors

### new CookieCollection()

> `protected` **new CookieCollection**(`cookie`?, `options`?, `domDocument`?): [`CookieCollection`](CookieCollection.md)

Defined in: [src/cookies/CookieCollection.ts:29](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/CookieCollection.ts#L29)

Create a CookieCollection.

#### Parameters

##### cookie?

`string`

String cookie from header.

##### options?

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookies options.

##### domDocument?

`Document`

#### Returns

[`CookieCollection`](CookieCollection.md)

## Methods

### add()

> **add**(`name`, `value`, `options`): `this`

Defined in: [src/cookies/CookieCollection.ts:42](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/CookieCollection.ts#L42)

Add a cookie to the collection.

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

`this`

***

### all()

> **all**(): [`Cookie`](../../Cookie/classes/Cookie.md)[]

Defined in: [src/cookies/CookieCollection.ts:117](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/CookieCollection.ts#L117)

Get all cookies in the collection.

#### Returns

[`Cookie`](../../Cookie/classes/Cookie.md)[]

***

### clear()

> **clear**(): `this`

Defined in: [src/cookies/CookieCollection.ts:131](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/CookieCollection.ts#L131)

Clear all cookies from the collection.

#### Returns

`this`

***

### get()

Get a cookie from the collection.

#### Param

Cookie name.

#### Param

Fallback value if the cookie does not exist.

#### Call Signature

> **get**(`name`): `undefined` \| [`Cookie`](../../Cookie/classes/Cookie.md)

Defined in: [src/cookies/CookieCollection.ts:71](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/CookieCollection.ts#L71)

Get a cookie from the collection.

##### Parameters

###### name

`string`

Cookie name.

##### Returns

`undefined` \| [`Cookie`](../../Cookie/classes/Cookie.md)

##### Param

Cookie name.

##### Param

Fallback value if the cookie does not exist.

#### Call Signature

> **get**(`name`, `fallback`): [`Cookie`](../../Cookie/classes/Cookie.md)

Defined in: [src/cookies/CookieCollection.ts:79](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/CookieCollection.ts#L79)

Get a cookie from the collection.

##### Parameters

###### name

`string`

Cookie name.

###### fallback

[`Cookie`](../../Cookie/classes/Cookie.md)

Fallback value if the cookie does not exist.

##### Returns

[`Cookie`](../../Cookie/classes/Cookie.md)

##### Param

Cookie name.

##### Param

Fallback value if the cookie does not exist.

***

### has()

> **has**(`name`): `boolean`

Defined in: [src/cookies/CookieCollection.ts:96](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/CookieCollection.ts#L96)

Check if the collection has a cookie.

#### Parameters

##### name

`string`

Cookie name.

#### Returns

`boolean`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/cookies/CookieCollection.ts:124](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/CookieCollection.ts#L124)

Check if the collection is empty.

#### Returns

`boolean`

***

### remove()

> **remove**(`name`): `this`

Defined in: [src/cookies/CookieCollection.ts:105](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/CookieCollection.ts#L105)

Remove a cookie from the collection.

#### Parameters

##### name

`string`

Cookie name to remove.

#### Returns

`this`

***

### secure()

> **secure**(`value`): `this`

Defined in: [src/cookies/CookieCollection.ts:141](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/CookieCollection.ts#L141)

Set secure flag for all cookies in the collection.

#### Parameters

##### value

`boolean` = `false`

Whether the cookies are secure.

#### Returns

`this`

***

### setOptions()

> **setOptions**(`options`): `this`

Defined in: [src/cookies/CookieCollection.ts:151](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/CookieCollection.ts#L151)

Set options for all cookies in the collection.

#### Parameters

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md)

Cookie options.

#### Returns

`this`

***

### update()

> **update**(`name`, `value`, `options`): `this`

Defined in: [src/cookies/CookieCollection.ts:56](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/CookieCollection.ts#L56)

Update a cookie in the collection.

#### Parameters

##### name

`string`

Cookie name.

##### value

`unknown`

New cookie value.

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookie options.

#### Returns

`this`

***

### create()

> `static` **create**(`cookie`?, `options`?, `domDocument`?): [`CookieCollection`](CookieCollection.md)

Defined in: [src/cookies/CookieCollection.ts:19](https://github.com/stonemjs/browser-adapter/blob/2a6ec5410a97b6bc45328cca33b607b5a6b7ed84/src/cookies/CookieCollection.ts#L19)

Create a CookieCollection.

#### Parameters

##### cookie?

`string`

String cookie from header.

##### options?

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookies options.

##### domDocument?

`Document`

#### Returns

[`CookieCollection`](CookieCollection.md)
