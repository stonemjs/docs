[**HTTP Core Documentation**](../../../README.md)

***

[HTTP Core Documentation](../../../README.md) / [cookies/CookieCollection](../README.md) / CookieCollection

# Class: CookieCollection

Defined in: [src/cookies/CookieCollection.ts:10](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/cookies/CookieCollection.ts#L10)

Class representing a collection of Cookies.

## Constructors

### Constructor

> `protected` **new CookieCollection**(`cookie?`, `options?`, `secret?`): `CookieCollection`

Defined in: [src/cookies/CookieCollection.ts:33](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/cookies/CookieCollection.ts#L33)

Create a CookieCollection.

#### Parameters

##### cookie?

`string`

String cookie from header.

##### options?

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookies options.

##### secret?

`string`

Secret value to sign and unsign cookies.

#### Returns

`CookieCollection`

## Methods

### add()

> **add**(`name`, `value`, `options`): `this`

Defined in: [src/cookies/CookieCollection.ts:46](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/cookies/CookieCollection.ts#L46)

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

> **all**\<`S`\>(`serialize`): `S` *extends* `true` ? `string`[] : `Record`\<`string`, `unknown`\>

Defined in: [src/cookies/CookieCollection.ts:152](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/cookies/CookieCollection.ts#L152)

Get all cookies in the collection.

#### Type Parameters

##### S

`S` *extends* `boolean`

#### Parameters

##### serialize

`S` = `...`

If true, serialize the cookies.

#### Returns

`S` *extends* `true` ? `string`[] : `Record`\<`string`, `unknown`\>

***

### clear()

> **clear**(`force`): `this`

Defined in: [src/cookies/CookieCollection.ts:171](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/cookies/CookieCollection.ts#L171)

Clear all cookies from the collection.

#### Parameters

##### force

`boolean` = `false`

If true, remove only from collection without setting expiry.

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

Defined in: [src/cookies/CookieCollection.ts:72](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/cookies/CookieCollection.ts#L72)

Get a cookie from the collection.

##### Parameters

###### name

`string`

Cookie name.

##### Returns

`undefined` \| [`Cookie`](../../Cookie/classes/Cookie.md)

Cookie value.

##### Param

Cookie name.

##### Param

Fallback value if the cookie does not exist.

#### Call Signature

> **get**(`name`, `fallback`): [`Cookie`](../../Cookie/classes/Cookie.md)

Defined in: [src/cookies/CookieCollection.ts:81](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/cookies/CookieCollection.ts#L81)

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

Cookie value.

##### Param

Cookie name.

##### Param

Fallback value if the cookie does not exist.

***

### getValue()

Get a cookie value from the collection.

#### Param

Cookie name.

#### Param

Fallback value if the cookie does not exist.

#### Call Signature

> **getValue**\<`ValueType`\>(`name`): `undefined` \| `ValueType`

Defined in: [src/cookies/CookieCollection.ts:100](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/cookies/CookieCollection.ts#L100)

Get a cookie value from the collection.

##### Type Parameters

###### ValueType

`ValueType` = `unknown`

##### Parameters

###### name

`string`

Cookie name.

##### Returns

`undefined` \| `ValueType`

Cookie value.

##### Param

Cookie name.

##### Param

Fallback value if the cookie does not exist.

#### Call Signature

> **getValue**\<`ValueType`\>(`name`, `fallback`): `ValueType`

Defined in: [src/cookies/CookieCollection.ts:109](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/cookies/CookieCollection.ts#L109)

Get a cookie value from the collection.

##### Type Parameters

###### ValueType

`ValueType` = `unknown`

##### Parameters

###### name

`string`

Cookie name.

###### fallback

`ValueType`

Fallback value if the cookie does not exist.

##### Returns

`ValueType`

Cookie value.

##### Param

Cookie name.

##### Param

Fallback value if the cookie does not exist.

***

### has()

> **has**(`name`): `boolean`

Defined in: [src/cookies/CookieCollection.ts:127](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/cookies/CookieCollection.ts#L127)

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

Defined in: [src/cookies/CookieCollection.ts:162](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/cookies/CookieCollection.ts#L162)

Check if the collection is empty.

#### Returns

`boolean`

***

### remove()

> **remove**(`name`, `options`, `force`): `this`

Defined in: [src/cookies/CookieCollection.ts:138](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/cookies/CookieCollection.ts#L138)

Remove a cookie from the collection.

#### Parameters

##### name

`string`

Cookie name to remove.

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookie options.

##### force

`boolean` = `false`

If true, remove only from collection without setting expiry.

#### Returns

`this`

***

### secure()

> **secure**(`value`): `this`

Defined in: [src/cookies/CookieCollection.ts:185](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/cookies/CookieCollection.ts#L185)

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

Defined in: [src/cookies/CookieCollection.ts:205](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/cookies/CookieCollection.ts#L205)

Set options for all cookies in the collection.

#### Parameters

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md)

Cookie options.

#### Returns

`this`

***

### setSecret()

> **setSecret**(`value`): `this`

Defined in: [src/cookies/CookieCollection.ts:195](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/cookies/CookieCollection.ts#L195)

Set secret for signing and unsigning cookies.

#### Parameters

##### value

`string`

Secret value.

#### Returns

`this`

***

### update()

> **update**(`name`, `value`, `options`): `this`

Defined in: [src/cookies/CookieCollection.ts:58](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/cookies/CookieCollection.ts#L58)

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

> `static` **create**(`cookie?`, `options?`, `secret?`): `CookieCollection`

Defined in: [src/cookies/CookieCollection.ts:22](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/cookies/CookieCollection.ts#L22)

Create a CookieCollection.

#### Parameters

##### cookie?

`string`

String cookie from header.

##### options?

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookies options.

##### secret?

`string`

Secret value to sign and unsign cookies.

#### Returns

`CookieCollection`
