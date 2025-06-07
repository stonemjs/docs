[**Browser Core Documentation**](../../README.md)

***

[Browser Core Documentation](../../README.md) / [RedirectBrowserResponse](../README.md) / RedirectBrowserResponse

# Class: RedirectBrowserResponse

Defined in: [RedirectBrowserResponse.ts:17](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/RedirectBrowserResponse.ts#L17)

Class representing a RedirectBrowserResponse.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- [`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md)

## Constructors

### Constructor

> **new RedirectBrowserResponse**(`options`): `RedirectBrowserResponse`

Defined in: [RedirectBrowserResponse.ts:48](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/RedirectBrowserResponse.ts#L48)

Create a RedirectBrowserResponse.

#### Parameters

##### options

[`RedirectBrowserResponseOptions`](../interfaces/RedirectBrowserResponseOptions.md)

Options for creating the RedirectBrowserResponse.

#### Returns

`RedirectBrowserResponse`

#### Throws

HttpError if the status code is not a redirect code.

#### Overrides

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`constructor`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#constructor)

## Properties

### targetUrl?

> `readonly` `optional` **targetUrl**: `string` \| `URL`

Defined in: [RedirectBrowserResponse.ts:19](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/RedirectBrowserResponse.ts#L19)

***

### OUTGOING\_BROWSER\_RESPONSE

> `static` **OUTGOING\_BROWSER\_RESPONSE**: `string` = `'stonejs@redirect_browser_response'`

Defined in: [RedirectBrowserResponse.ts:18](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/RedirectBrowserResponse.ts#L18)

#### Overrides

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`OUTGOING_BROWSER_RESPONSE`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#outgoing_browser_response)

## Methods

### is1xx()

> **is1xx**(): `boolean`

Defined in: [OutgoingBrowserResponse.ts:58](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/OutgoingBrowserResponse.ts#L58)

Check if the status code represents an informational response (1xx).

#### Returns

`boolean`

True if the status code is informational, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`is1xx`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#is1xx)

***

### is2xx()

> **is2xx**(): `boolean`

Defined in: [OutgoingBrowserResponse.ts:67](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/OutgoingBrowserResponse.ts#L67)

Check if the status code represents a successful response (2xx).

#### Returns

`boolean`

True if the status code is successful, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`is2xx`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#is2xx)

***

### is3xx()

> **is3xx**(): `boolean`

Defined in: [OutgoingBrowserResponse.ts:76](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/OutgoingBrowserResponse.ts#L76)

Check if the status code represents a redirection response (3xx).

#### Returns

`boolean`

True if the status code is a redirection, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`is3xx`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#is3xx)

***

### is4xx()

> **is4xx**(): `boolean`

Defined in: [OutgoingBrowserResponse.ts:85](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/OutgoingBrowserResponse.ts#L85)

Check if the status code represents a client error response (4xx).

#### Returns

`boolean`

True if the status code is a client error, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`is4xx`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#is4xx)

***

### is5xx()

> **is5xx**(): `boolean`

Defined in: [OutgoingBrowserResponse.ts:94](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/OutgoingBrowserResponse.ts#L94)

Check if the status code represents a server error response (5xx).

#### Returns

`boolean`

True if the status code is a server error, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`is5xx`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#is5xx)

***

### isError()

> **isError**(): `boolean`

Defined in: [OutgoingBrowserResponse.ts:112](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/OutgoingBrowserResponse.ts#L112)

Check if the status code is an error (i.e., 4xx or 5xx).

#### Returns

`boolean`

True if the status code is an error, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`isError`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#iserror)

***

### isForbidden()

> **isForbidden**(): `boolean`

Defined in: [OutgoingBrowserResponse.ts:139](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/OutgoingBrowserResponse.ts#L139)

Check if the status code is 403 (Forbidden).

#### Returns

`boolean`

True if the status code is 403, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`isForbidden`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#isforbidden)

***

### isInStatusRange()

> **isInStatusRange**(`start`, `end`): `boolean`

Defined in: [OutgoingBrowserResponse.ts:38](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/OutgoingBrowserResponse.ts#L38)

Check if the status code falls within the specified range.

#### Parameters

##### start

`number`

The starting value of the range (inclusive).

##### end

`number`

The ending value of the range (exclusive).

#### Returns

`boolean`

True if the status code is within the specified range, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`isInStatusRange`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#isinstatusrange)

***

### isInvalid()

> **isInvalid**(): `boolean`

Defined in: [OutgoingBrowserResponse.ts:48](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/OutgoingBrowserResponse.ts#L48)

Check if the status code is invalid.

#### Returns

`boolean`

True if the status code is invalid, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`isInvalid`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#isinvalid)

***

### isNotError()

> **isNotError**(): `boolean`

Defined in: [OutgoingBrowserResponse.ts:103](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/OutgoingBrowserResponse.ts#L103)

Check if the status code is not an error (i.e., not 4xx or 5xx).

#### Returns

`boolean`

True if the status code is not an error, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`isNotError`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#isnoterror)

***

### isNotFound()

> **isNotFound**(): `boolean`

Defined in: [OutgoingBrowserResponse.ts:148](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/OutgoingBrowserResponse.ts#L148)

Check if the status code is 404 (Not Found).

#### Returns

`boolean`

True if the status code is 404, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`isNotFound`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#isnotfound)

***

### isOk()

> **isOk**(): `boolean`

Defined in: [OutgoingBrowserResponse.ts:121](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/OutgoingBrowserResponse.ts#L121)

Check if the status code is 200 (OK).

#### Returns

`boolean`

True if the status code is 200, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`isOk`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#isok)

***

### isUnauthorized()

> **isUnauthorized**(): `boolean`

Defined in: [OutgoingBrowserResponse.ts:130](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/OutgoingBrowserResponse.ts#L130)

Check if the status code is 401 (Unauthorized).

#### Returns

`boolean`

True if the status code is 401, otherwise false.

#### Inherited from

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`isUnauthorized`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#isunauthorized)

***

### create()

> `static` **create**(`options`): `RedirectBrowserResponse`

Defined in: [RedirectBrowserResponse.ts:27](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/RedirectBrowserResponse.ts#L27)

Create an instance of RedirectBrowserResponse.

#### Parameters

##### options

[`RedirectBrowserResponseOptions`](../interfaces/RedirectBrowserResponseOptions.md)

Options for the outgoing browser response.

#### Returns

`RedirectBrowserResponse`

A new instance of RedirectBrowserResponse.

#### Overrides

[`OutgoingBrowserResponse`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md).[`create`](../../OutgoingBrowserResponse/classes/OutgoingBrowserResponse.md#create)

***

### to()

> `static` **to**(`url`, `statusCode`): `RedirectBrowserResponse`

Defined in: [RedirectBrowserResponse.ts:38](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/RedirectBrowserResponse.ts#L38)

Create an instance of RedirectBrowserResponse from the given path or URL.

#### Parameters

##### url

The path or URL to redirect to. If a string is provided, it will be treated as a relative path.

`string` | `URL`

##### statusCode

`number` = `302`

The HTTP status code for the redirect (default is 302).

#### Returns

`RedirectBrowserResponse`

A new instance of RedirectBrowserResponse.
