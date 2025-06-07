[**Browser Core Documentation**](../../README.md)

***

[Browser Core Documentation](../../README.md) / [IncomingBrowserEvent](../README.md) / IncomingBrowserEvent

# Class: IncomingBrowserEvent

Defined in: [IncomingBrowserEvent.ts:22](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L22)

Class representing an IncomingBrowserEvent.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- `IncomingEvent`

## Constructors

### Constructor

> `protected` **new IncomingBrowserEvent**(`options`): `IncomingBrowserEvent`

Defined in: [IncomingBrowserEvent.ts:57](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L57)

Constructor for IncomingBrowserEvent.

#### Parameters

##### options

[`IncomingBrowserEventOptions`](../interfaces/IncomingBrowserEventOptions.md)

The options to create an IncomingBrowserEvent instance.

#### Returns

`IncomingBrowserEvent`

#### Throws

If the URL option is not a valid instance of URL.

#### Overrides

`IncomingEvent.constructor`

## Properties

### cookies

> `readonly` **cookies**: [`CookieCollection`](../../cookies/CookieCollection/classes/CookieCollection.md)

Defined in: [IncomingBrowserEvent.ts:32](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L32)

The cookies included in the request.

***

### method

> `readonly` **method**: `"GET"`

Defined in: [IncomingBrowserEvent.ts:30](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L30)

The HTTP method of the request.

***

### protocol

> `readonly` **protocol**: `string`

Defined in: [IncomingBrowserEvent.ts:34](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L34)

The protocol used for the request (e.g., http or https).

***

### query

> `readonly` **query**: `URLSearchParams`

Defined in: [IncomingBrowserEvent.ts:28](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L28)

The query parameters of the request.

***

### queryString?

> `readonly` `optional` **queryString**: `string`

Defined in: [IncomingBrowserEvent.ts:36](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L36)

The query string of the request.

***

### routeResolver()?

> `protected` `optional` **routeResolver**: () => [`IRoute`](../../declarations/interfaces/IRoute.md)

Defined in: [IncomingBrowserEvent.ts:39](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L39)

#### Returns

[`IRoute`](../../declarations/interfaces/IRoute.md)

***

### url

> `readonly` **url**: `URL`

Defined in: [IncomingBrowserEvent.ts:26](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L26)

The URL of the request.

***

### userResolver()?

> `protected` `optional` **userResolver**: () => `unknown`

Defined in: [IncomingBrowserEvent.ts:38](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L38)

#### Returns

`unknown`

***

### INCOMING\_BROWSER\_EVENT

> `static` **INCOMING\_BROWSER\_EVENT**: `string` = `'stonejs@incoming_browser_event'`

Defined in: [IncomingBrowserEvent.ts:23](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L23)

## Accessors

### decodedPathname

#### Get Signature

> **get** **decodedPathname**(): `undefined` \| `string`

Defined in: [IncomingBrowserEvent.ts:81](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L81)

##### Returns

`undefined` \| `string`

The decoded pathname of the URL.

***

### hash

#### Get Signature

> **get** **hash**(): `string`

Defined in: [IncomingBrowserEvent.ts:90](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L90)

##### Returns

`string`

The hash part of the URL.

***

### host

#### Get Signature

> **get** **host**(): `string`

Defined in: [IncomingBrowserEvent.ts:95](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L95)

##### Returns

`string`

The host of the URL (hostname:port).

***

### hostname

#### Get Signature

> **get** **hostname**(): `string`

Defined in: [IncomingBrowserEvent.ts:100](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L100)

##### Returns

`string`

The hostname of the URL.

***

### isSecure

#### Get Signature

> **get** **isSecure**(): `boolean`

Defined in: [IncomingBrowserEvent.ts:135](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L135)

##### Returns

`boolean`

Whether the request was made over a secure connection.

***

### params

#### Get Signature

> **get** **params**(): `undefined` \| `Record`\<`string`, `unknown`\>

Defined in: [IncomingBrowserEvent.ts:105](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L105)

##### Returns

`undefined` \| `Record`\<`string`, `unknown`\>

The route parameters.

***

### path

#### Get Signature

> **get** **path**(): `string`

Defined in: [IncomingBrowserEvent.ts:110](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L110)

##### Returns

`string`

The full path including pathname and search query.

***

### pathname

#### Get Signature

> **get** **pathname**(): `string`

Defined in: [IncomingBrowserEvent.ts:115](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L115)

##### Returns

`string`

The pathname of the URL.

***

### scheme

#### Get Signature

> **get** **scheme**(): `string`

Defined in: [IncomingBrowserEvent.ts:125](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L125)

##### Returns

`string`

The protocol of the URL (e.g., "http" or "https").

***

### segments

#### Get Signature

> **get** **segments**(): `string`[]

Defined in: [IncomingBrowserEvent.ts:130](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L130)

##### Returns

`string`[]

The URL segments split by '/'.

***

### uri

#### Get Signature

> **get** **uri**(): `string`

Defined in: [IncomingBrowserEvent.ts:120](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L120)

##### Returns

`string`

The full URL as a string.

***

### userAgent

#### Get Signature

> **get** **userAgent**(): `undefined` \| `string`

Defined in: [IncomingBrowserEvent.ts:140](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L140)

##### Returns

`undefined` \| `string`

The user agent of the request.

## Methods

### fingerprint()

> **fingerprint**(): `string`

Defined in: [IncomingBrowserEvent.ts:359](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L359)

Generate a unique fingerprint for the event.

#### Returns

`string`

The generated fingerprint as a base64 string.

***

### get()

Get data from the request.

Priority:
1. Route params
2. Query params
3. Cookies
4. Metadata
5. Fallback value

#### Param

The key to look for.

#### Param

A fallback value if the key is not found.

#### Call Signature

> **get**\<`TReturn`\>(`key`): `undefined` \| `TReturn`

Defined in: [IncomingBrowserEvent.ts:157](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L157)

Get data from the request.

Priority:
1. Route params
2. Query params
3. Cookies
4. Metadata
5. Fallback value

##### Type Parameters

###### TReturn

`TReturn` = `unknown`

##### Parameters

###### key

`string`

The key to look for.

##### Returns

`undefined` \| `TReturn`

The value of the key or the fallback.

##### Param

The key to look for.

##### Param

A fallback value if the key is not found.

##### Overrides

`IncomingEvent.get`

#### Call Signature

> **get**\<`TReturn`\>(`key`, `fallback`): `TReturn`

Defined in: [IncomingBrowserEvent.ts:173](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L173)

Get data from the request.

Priority:
1. Route params
2. Query params
3. Cookies
4. Metadata
5. Fallback value

##### Type Parameters

###### TReturn

`TReturn` = `unknown`

##### Parameters

###### key

`string`

The key to look for.

###### fallback

`TReturn`

A fallback value if the key is not found.

##### Returns

`TReturn`

The value of the key or the fallback.

##### Param

The key to look for.

##### Param

A fallback value if the key is not found.

##### Overrides

`IncomingEvent.get`

***

### getCookie()

Get a cookie value.

#### Param

The cookie name.

#### Param

A fallback value if the cookie is not found.

#### Call Signature

> **getCookie**\<`TReturn`\>(`name`): `undefined` \| `TReturn`

Defined in: [IncomingBrowserEvent.ts:204](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L204)

Get a cookie value.

##### Type Parameters

###### TReturn

`TReturn` *extends* [`Cookie`](../../cookies/Cookie/classes/Cookie.md) = [`Cookie`](../../cookies/Cookie/classes/Cookie.md)

##### Parameters

###### name

`string`

The cookie name.

##### Returns

`undefined` \| `TReturn`

The cookie value or the fallback.

##### Param

The cookie name.

##### Param

A fallback value if the cookie is not found.

#### Call Signature

> **getCookie**\<`TReturn`\>(`name`, `fallback`): `TReturn`

Defined in: [IncomingBrowserEvent.ts:213](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L213)

Get a cookie value.

##### Type Parameters

###### TReturn

`TReturn` *extends* [`Cookie`](../../cookies/Cookie/classes/Cookie.md) = [`Cookie`](../../cookies/Cookie/classes/Cookie.md)

##### Parameters

###### name

`string`

The cookie name.

###### fallback

`TReturn`

A fallback value if the cookie is not found.

##### Returns

`TReturn`

The cookie value or the fallback.

##### Param

The cookie name.

##### Param

A fallback value if the cookie is not found.

***

### getParam()

Retrieve a parameter from the route if it exists.

#### Param

The name of the parameter to retrieve.

#### Param

The fallback value if the parameter does not exist.

#### Call Signature

> **getParam**\<`TReturn`\>(`name`): `undefined` \| `TReturn`

Defined in: [IncomingBrowserEvent.ts:322](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L322)

Retrieve a parameter from the route if it exists.

##### Type Parameters

###### TReturn

`TReturn` = `unknown`

##### Parameters

###### name

`string`

The name of the parameter to retrieve.

##### Returns

`undefined` \| `TReturn`

The value of the parameter if it exists, otherwise undefined.

##### Param

The name of the parameter to retrieve.

##### Param

The fallback value if the parameter does not exist.

#### Call Signature

> **getParam**\<`TReturn`\>(`name`, `fallback`): `TReturn`

Defined in: [IncomingBrowserEvent.ts:331](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L331)

Retrieve a parameter from the route if it exists.

##### Type Parameters

###### TReturn

`TReturn` = `unknown`

##### Parameters

###### name

`string`

The name of the parameter to retrieve.

###### fallback

`TReturn`

The fallback value if the parameter does not exist.

##### Returns

`TReturn`

The value of the parameter if it exists, otherwise undefined.

##### Param

The name of the parameter to retrieve.

##### Param

The fallback value if the parameter does not exist.

***

### getRoute()

> **getRoute**\<`RouteType`\>(): `undefined` \| `RouteType`

Defined in: [IncomingBrowserEvent.ts:312](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L312)

Return the current route or a route parameter.

#### Type Parameters

##### RouteType

`RouteType` *extends* [`IRoute`](../../declarations/interfaces/IRoute.md) = [`IRoute`](../../declarations/interfaces/IRoute.md)

#### Returns

`undefined` \| `RouteType`

The route parameter or the route object.

***

### getRouteResolver()

> **getRouteResolver**(): () => `undefined` \| [`IRoute`](../../declarations/interfaces/IRoute.md)

Defined in: [IncomingBrowserEvent.ts:292](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L292)

Get the route resolver function.

#### Returns

The route resolver function.

> (): `undefined` \| [`IRoute`](../../declarations/interfaces/IRoute.md)

##### Returns

`undefined` \| [`IRoute`](../../declarations/interfaces/IRoute.md)

***

### getUri()

> **getUri**(`withDomain`): `undefined` \| `string`

Defined in: [IncomingBrowserEvent.ts:254](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L254)

Get the URI with or without the domain.

#### Parameters

##### withDomain

`boolean` = `false`

Whether to include the domain in the URI.

#### Returns

`undefined` \| `string`

The URI with or without the domain.

***

### getUser()

> **getUser**\<`T`\>(): `undefined` \| `T`

Defined in: [IncomingBrowserEvent.ts:263](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L263)

Get the user instance.

#### Type Parameters

##### T

`T`

#### Returns

`undefined` \| `T`

The user object, resolved through a user resolver function if available.

***

### getUserResolver()

> **getUserResolver**(): () => `unknown`

Defined in: [IncomingBrowserEvent.ts:272](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L272)

Get the user resolver function.

#### Returns

The user resolver function.

> (): `unknown`

##### Returns

`unknown`

***

### hasCookie()

> **hasCookie**(`name`): `boolean`

Defined in: [IncomingBrowserEvent.ts:233](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L233)

Check if a cookie exists.

#### Parameters

##### name

`string`

The cookie name to check.

#### Returns

`boolean`

True if the cookie exists, otherwise false.

***

### isMethod()

> **isMethod**(`method`): `boolean`

Defined in: [IncomingBrowserEvent.ts:350](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L350)

Check if the current event method matches the given method.

#### Parameters

##### method

`string`

The method to check.

#### Returns

`boolean`

True if the event method matches, otherwise false.

***

### setRouteResolver()

> **setRouteResolver**\<`RouteType`\>(`resolver`): `this`

Defined in: [IncomingBrowserEvent.ts:302](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L302)

Set the route resolver function.

#### Type Parameters

##### RouteType

`RouteType` *extends* [`IRoute`](../../declarations/interfaces/IRoute.md) = [`IRoute`](../../declarations/interfaces/IRoute.md)

#### Parameters

##### resolver

() => `RouteType`

The route resolver function.

#### Returns

`this`

The current instance for method chaining.

***

### setUserResolver()

> **setUserResolver**(`resolver`): `this`

Defined in: [IncomingBrowserEvent.ts:282](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L282)

Set the user resolver function.

#### Parameters

##### resolver

() => `unknown`

The user resolver function.

#### Returns

`this`

The current instance for method chaining.

***

### uriForPath()

> **uriForPath**(`path`): `string`

Defined in: [IncomingBrowserEvent.ts:244](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L244)

Generate a full URL for the given path.

#### Parameters

##### path

`string`

The path to append to the base URL.

#### Returns

`string`

The full URL for the given path.

***

### create()

> `static` **create**(`options`): `IncomingBrowserEvent`

Defined in: [IncomingBrowserEvent.ts:47](https://github.com/stonemjs/browser-core/blob/361f0c0c27ded9b8e26c081642a73881c7a22507/src/IncomingBrowserEvent.ts#L47)

Create an IncomingBrowserEvent.

#### Parameters

##### options

[`IncomingBrowserEventOptions`](../interfaces/IncomingBrowserEventOptions.md)

The IncomingBrowserEvent options.

#### Returns

`IncomingBrowserEvent`

A new instance of IncomingBrowserEvent.

#### Overrides

`IncomingEvent.create`
