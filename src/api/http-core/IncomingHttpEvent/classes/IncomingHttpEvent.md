[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [IncomingHttpEvent](../README.md) / IncomingHttpEvent

# Class: IncomingHttpEvent

Defined in: [src/IncomingHttpEvent.ts:37](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L37)

Class representing an IncomingHttpEvent.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- `IncomingEvent`

## Constructors

### Constructor

> `protected` **new IncomingHttpEvent**(`options`): `IncomingHttpEvent`

Defined in: [src/IncomingHttpEvent.ts:84](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L84)

Constructor for IncomingHttpEvent.

#### Parameters

##### options

[`IncomingHttpEventOptions`](../interfaces/IncomingHttpEventOptions.md)

The options to create an IncomingHttpEvent instance.

#### Returns

`IncomingHttpEvent`

#### Throws

If the URL option is not a valid instance of URL.

#### Overrides

`IncomingEvent.constructor`

## Properties

### \_headers

> `protected` `readonly` **\_headers**: `Headers`

Defined in: [src/IncomingHttpEvent.ts:57](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L57)

The headers of the request.

***

### accepts

> `readonly` **accepts**: `Accepts`

Defined in: [src/IncomingHttpEvent.ts:55](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L55)

The content negotiation handler for the request.

***

### body

> `readonly` **body**: `Record`\<`string`, `unknown`\>

Defined in: [src/IncomingHttpEvent.ts:47](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L47)

The body of the request.

***

### cookies

> `readonly` **cookies**: [`CookieCollection`](../../cookies/CookieCollection/classes/CookieCollection.md)

Defined in: [src/IncomingHttpEvent.ts:59](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L59)

The cookies included in the request.

***

### files

> `readonly` **files**: `Record`\<`string`, `UploadedFile`[]\>

Defined in: [src/IncomingHttpEvent.ts:49](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L49)

The files included in the request.

***

### ip

> `readonly` **ip**: `string`

Defined in: [src/IncomingHttpEvent.ts:41](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L41)

The IP address of the client making the request.

***

### ips

> `readonly` **ips**: `string`[]

Defined in: [src/IncomingHttpEvent.ts:43](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L43)

The list of IP addresses, typically for proxies.

***

### method

> `readonly` **method**: [`HttpMethods`](../../declarations/enumerations/HttpMethods.md)

Defined in: [src/IncomingHttpEvent.ts:53](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L53)

The HTTP method of the request.

***

### protocol

> `readonly` **protocol**: `string`

Defined in: [src/IncomingHttpEvent.ts:61](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L61)

The protocol used for the request (e.g., http or https).

***

### query

> `readonly` **query**: `URLSearchParams`

Defined in: [src/IncomingHttpEvent.ts:51](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L51)

The query parameters of the request.

***

### queryString?

> `readonly` `optional` **queryString**: `string`

Defined in: [src/IncomingHttpEvent.ts:63](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L63)

The query string of the request.

***

### routeResolver()?

> `protected` `optional` **routeResolver**: () => [`IRoute`](../../declarations/interfaces/IRoute.md)

Defined in: [src/IncomingHttpEvent.ts:66](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L66)

#### Returns

[`IRoute`](../../declarations/interfaces/IRoute.md)

***

### url

> `readonly` **url**: `URL`

Defined in: [src/IncomingHttpEvent.ts:45](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L45)

The URL of the request.

***

### userResolver()?

> `protected` `optional` **userResolver**: () => `unknown`

Defined in: [src/IncomingHttpEvent.ts:65](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L65)

#### Returns

`unknown`

***

### INCOMING\_HTTP\_EVENT

> `readonly` `static` **INCOMING\_HTTP\_EVENT**: `"stonejs@incoming_http_event"` = `'stonejs@incoming_http_event'`

Defined in: [src/IncomingHttpEvent.ts:38](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L38)

## Accessors

### charset

#### Get Signature

> **get** **charset**(): `undefined` \| `string`

Defined in: [src/IncomingHttpEvent.ts:236](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L236)

##### Returns

`undefined` \| `string`

The charset specified in the content-type header.

***

### charsets

#### Get Signature

> **get** **charsets**(): `string`[]

Defined in: [src/IncomingHttpEvent.ts:216](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L216)

##### Returns

`string`[]

An array of acceptable character sets for the request.

***

### contentType

#### Get Signature

> **get** **contentType**(): `string`

Defined in: [src/IncomingHttpEvent.ts:231](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L231)

##### Returns

`string`

The content type specified in the headers.

***

### decodedPathname

#### Get Signature

> **get** **decodedPathname**(): `undefined` \| `string`

Defined in: [src/IncomingHttpEvent.ts:127](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L127)

##### Returns

`undefined` \| `string`

The decoded pathname of the URL.

***

### encodings

#### Get Signature

> **get** **encodings**(): `string`[]

Defined in: [src/IncomingHttpEvent.ts:226](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L226)

##### Returns

`string`[]

An array of acceptable encodings for the request.

***

### etag

#### Get Signature

> **get** **etag**(): `undefined` \| `string`

Defined in: [src/IncomingHttpEvent.ts:206](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L206)

##### Returns

`undefined` \| `string`

The ETag of the request, if present.

***

### hash

#### Get Signature

> **get** **hash**(): `string`

Defined in: [src/IncomingHttpEvent.ts:136](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L136)

##### Returns

`string`

The hash part of the URL.

***

### headers

#### Get Signature

> **get** **headers**(): `Record`\<`string`, `string`\>

Defined in: [src/IncomingHttpEvent.ts:122](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L122)

##### Returns

`Record`\<`string`, `string`\>

The headers of the request.

***

### host

#### Get Signature

> **get** **host**(): `string`

Defined in: [src/IncomingHttpEvent.ts:141](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L141)

##### Returns

`string`

The host of the URL (hostname:port).

***

### hostname

#### Get Signature

> **get** **hostname**(): `string`

Defined in: [src/IncomingHttpEvent.ts:146](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L146)

##### Returns

`string`

The hostname of the URL.

***

### isAjax

#### Get Signature

> **get** **isAjax**(): `boolean`

Defined in: [src/IncomingHttpEvent.ts:191](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L191)

##### Returns

`boolean`

Whether the request is an AJAX request.

***

### isPrefetch

#### Get Signature

> **get** **isPrefetch**(): `boolean`

Defined in: [src/IncomingHttpEvent.ts:201](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L201)

##### Returns

`boolean`

Whether the request was prefetch.

***

### isSecure

#### Get Signature

> **get** **isSecure**(): `boolean`

Defined in: [src/IncomingHttpEvent.ts:181](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L181)

##### Returns

`boolean`

Whether the request was made over a secure connection.

***

### isXhr

#### Get Signature

> **get** **isXhr**(): `boolean`

Defined in: [src/IncomingHttpEvent.ts:186](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L186)

##### Returns

`boolean`

Whether the request is an XMLHttpRequest.

***

### languages

#### Get Signature

> **get** **languages**(): `string`[]

Defined in: [src/IncomingHttpEvent.ts:221](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L221)

##### Returns

`string`[]

An array of acceptable languages for the request.

***

### params

#### Get Signature

> **get** **params**(): `undefined` \| `Record`\<`string`, `unknown`\>

Defined in: [src/IncomingHttpEvent.ts:151](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L151)

##### Returns

`undefined` \| `Record`\<`string`, `unknown`\>

The route parameters.

***

### path

#### Get Signature

> **get** **path**(): `string`

Defined in: [src/IncomingHttpEvent.ts:156](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L156)

##### Returns

`string`

The full path including pathname and search query.

***

### pathname

#### Get Signature

> **get** **pathname**(): `string`

Defined in: [src/IncomingHttpEvent.ts:161](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L161)

##### Returns

`string`

The pathname of the URL.

***

### scheme

#### Get Signature

> **get** **scheme**(): `string`

Defined in: [src/IncomingHttpEvent.ts:171](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L171)

##### Returns

`string`

The protocol of the URL (e.g., "http" or "https").

***

### segments

#### Get Signature

> **get** **segments**(): `string`[]

Defined in: [src/IncomingHttpEvent.ts:176](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L176)

##### Returns

`string`[]

The URL segments split by '/'.

***

### types

#### Get Signature

> **get** **types**(): `string`[]

Defined in: [src/IncomingHttpEvent.ts:211](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L211)

##### Returns

`string`[]

An array of acceptable content types for the request.

***

### uri

#### Get Signature

> **get** **uri**(): `string`

Defined in: [src/IncomingHttpEvent.ts:166](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L166)

##### Returns

`string`

The full URL as a string.

***

### userAgent

#### Get Signature

> **get** **userAgent**(): `undefined` \| `string`

Defined in: [src/IncomingHttpEvent.ts:196](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L196)

##### Returns

`undefined` \| `string`

The user agent of the request.

## Methods

### acceptsCharsets()

> **acceptsCharsets**(...`values`): `string` \| `false` \| `string`[]

Defined in: [src/IncomingHttpEvent.ts:438](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L438)

Return the first accepted charset.

#### Parameters

##### values

...`string`[]

The charsets to check.

#### Returns

`string` \| `false` \| `string`[]

The first accepted charset, or false if none are accepted.

***

### acceptsEncodings()

> **acceptsEncodings**(...`values`): `string` \| `false` \| `string`[]

Defined in: [src/IncomingHttpEvent.ts:428](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L428)

Return the first accepted encoding.

#### Parameters

##### values

...`string`[]

The encodings to check.

#### Returns

`string` \| `false` \| `string`[]

The first accepted encoding, or false if none are accepted.

***

### acceptsLanguages()

> **acceptsLanguages**(...`values`): `string` \| `false` \| `string`[]

Defined in: [src/IncomingHttpEvent.ts:448](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L448)

Return the first accepted language.

#### Parameters

##### values

...`string`[]

The languages to check.

#### Returns

`string` \| `false` \| `string`[]

The first accepted language, or false if none are accepted.

***

### acceptsTypes()

> **acceptsTypes**(...`values`): `string` \| `false` \| `string`[]

Defined in: [src/IncomingHttpEvent.ts:418](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L418)

Return the first accepted content type.

#### Parameters

##### values

...`string`[]

The content types to check.

#### Returns

`string` \| `false` \| `string`[]

The first accepted type, or false if none are accepted.

***

### filterFiles()

> **filterFiles**(`files`): `Record`\<`string`, `UploadedFile`[]\>

Defined in: [src/IncomingHttpEvent.ts:594](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L594)

Filter and return files based on their names.

#### Parameters

##### files

`string`[]

The array of file names to filter.

#### Returns

`Record`\<`string`, `UploadedFile`[]\>

An object containing the filtered files.

***

### fingerprint()

> **fingerprint**(`full?`): `string`

Defined in: [src/IncomingHttpEvent.ts:730](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L730)

Generate a unique fingerprint for the event.

#### Parameters

##### full?

`boolean`

Whether to include the user agent and IP address in the fingerprint.

#### Returns

`string`

The generated fingerprint as a base64 string.

***

### get()

Get data from the request.

Priority:
1. Route params
2. Body
3. Query params
4. Headers
5. Cookies
6. Metadata
7. Fallback value

#### Param

The key to look for.

#### Param

A fallback value if the key is not found.

#### Call Signature

> **get**\<`TReturn`\>(`key`): `undefined` \| `TReturn`

Defined in: [src/IncomingHttpEvent.ts:255](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L255)

Get data from the request.

Priority:
1. Route params
2. Body
3. Query params
4. Headers
5. Cookies
6. Metadata
7. Fallback value

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

Defined in: [src/IncomingHttpEvent.ts:273](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L273)

Get data from the request.

Priority:
1. Route params
2. Body
3. Query params
4. Headers
5. Cookies
6. Metadata
7. Fallback value

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

### getBody()

Get the body of the request.

#### Param

The fallback value if the body is not found.

#### Call Signature

> **getBody**\<`TReturn`\>(): `undefined` \| `TReturn`

Defined in: [src/IncomingHttpEvent.ts:392](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L392)

Get the body of the request.

##### Type Parameters

###### TReturn

`TReturn` = `unknown`

##### Returns

`undefined` \| `TReturn`

The body of the request or the fallback.

##### Param

The fallback value if the body is not found.

#### Call Signature

> **getBody**\<`TReturn`\>(`fallback`): `TReturn`

Defined in: [src/IncomingHttpEvent.ts:400](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L400)

Get the body of the request.

##### Type Parameters

###### TReturn

`TReturn` = `unknown`

##### Parameters

###### fallback

`TReturn`

The fallback value if the body is not found.

##### Returns

`TReturn`

The body of the request or the fallback.

##### Param

The fallback value if the body is not found.

***

### getCookie()

Get a cookie value.

#### Param

The cookie name.

#### Param

A fallback value if the cookie is not found.

#### Call Signature

> **getCookie**\<`TReturn`\>(`name`): `undefined` \| `TReturn`

Defined in: [src/IncomingHttpEvent.ts:353](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L353)

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

Defined in: [src/IncomingHttpEvent.ts:362](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L362)

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

### getFile()

> **getFile**(`name`): `undefined` \| `UploadedFile`[]

Defined in: [src/IncomingHttpEvent.ts:604](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L604)

Get a file by its name.

#### Parameters

##### name

`string`

The name of the file.

#### Returns

`undefined` \| `UploadedFile`[]

The file if it exists, otherwise undefined.

***

### getFormat()

> **getFormat**(`mimeType`): `undefined` \| `string`

Defined in: [src/IncomingHttpEvent.ts:468](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L468)

Get file extension for a given MIME type.

#### Parameters

##### mimeType

`string`

The MIME type.

#### Returns

`undefined` \| `string`

The corresponding file extension, or undefined if not found.

***

### getHeader()

Get a header value.

#### Param

The header name.

#### Param

A fallback value if the header is not found.

#### Throws

If the header name is not a valid string.

#### Call Signature

> **getHeader**\<`TReturn`\>(`name`): `undefined` \| `TReturn`

Defined in: [src/IncomingHttpEvent.ts:309](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L309)

Get a header value.

##### Type Parameters

###### TReturn

`TReturn` = `string`

##### Parameters

###### name

`string`

The header name.

##### Returns

`undefined` \| `TReturn`

The header value or the fallback value.

##### Param

The header name.

##### Param

A fallback value if the header is not found.

##### Throws

If the header name is not a valid string.

##### Throws

If the header name is not a valid string.

#### Call Signature

> **getHeader**\<`TReturn`\>(`name`, `fallback`): `TReturn`

Defined in: [src/IncomingHttpEvent.ts:319](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L319)

Get a header value.

##### Type Parameters

###### TReturn

`TReturn` = `string`

##### Parameters

###### name

`string`

The header name.

###### fallback

`TReturn`

A fallback value if the header is not found.

##### Returns

`TReturn`

The header value or the fallback value.

##### Param

The header name.

##### Param

A fallback value if the header is not found.

##### Throws

If the header name is not a valid string.

##### Throws

If the header name is not a valid string.

***

### getMimeType()

> **getMimeType**(`format`): `undefined` \| `string`

Defined in: [src/IncomingHttpEvent.ts:458](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L458)

Get MIME type for a given file path or extension.

#### Parameters

##### format

`string`

The file path or extension.

#### Returns

`undefined` \| `string`

The corresponding MIME type, or undefined if not found.

***

### getParam()

Retrieve a parameter from the route if it exists.

#### Param

The name of the parameter to retrieve.

#### Param

The fallback value if the parameter does not exist.

#### Call Signature

> **getParam**\<`TReturn`\>(`name`): `undefined` \| `TReturn`

Defined in: [src/IncomingHttpEvent.ts:742](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L742)

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

Defined in: [src/IncomingHttpEvent.ts:751](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L751)

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

Defined in: [src/IncomingHttpEvent.ts:720](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L720)

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

Defined in: [src/IncomingHttpEvent.ts:700](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L700)

Get the route resolver function.

#### Returns

The route resolver function.

> (): `undefined` \| [`IRoute`](../../declarations/interfaces/IRoute.md)

##### Returns

`undefined` \| [`IRoute`](../../declarations/interfaces/IRoute.md)

***

### getUri()

> **getUri**(`withDomain`): `undefined` \| `string`

Defined in: [src/IncomingHttpEvent.ts:662](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L662)

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

Defined in: [src/IncomingHttpEvent.ts:671](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L671)

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

Defined in: [src/IncomingHttpEvent.ts:680](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L680)

Get the user resolver function.

#### Returns

The user resolver function.

> (): `unknown`

##### Returns

`unknown`

***

### hasCookie()

> **hasCookie**(`name`): `boolean`

Defined in: [src/IncomingHttpEvent.ts:382](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L382)

Check if a cookie exists.

#### Parameters

##### name

`string`

The cookie name to check.

#### Returns

`boolean`

True if the cookie exists, otherwise false.

***

### hasFile()

> **hasFile**(`name`): `boolean`

Defined in: [src/IncomingHttpEvent.ts:614](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L614)

Check if a file exists by its name.

#### Parameters

##### name

`string`

The name of the file.

#### Returns

`boolean`

True if the file exists, otherwise false.

***

### hasHeader()

> **hasHeader**(`name`): `boolean`

Defined in: [src/IncomingHttpEvent.ts:342](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L342)

Check if a header exists.

#### Parameters

##### name

`string`

The header name to check.

#### Returns

`boolean`

True if the header exists, otherwise false.

***

### hasJson()

> **hasJson**(`key`): `boolean`

Defined in: [src/IncomingHttpEvent.ts:558](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L558)

Check if a key exists in the JSON body.

#### Parameters

##### key

`string`

The key to check for.

#### Returns

`boolean`

True if the key exists, otherwise false.

***

### isFresh()

> **isFresh**(`response`): `boolean`

Defined in: [src/IncomingHttpEvent.ts:568](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L568)

Determine if the response cache is fresh.

#### Parameters

##### response

[`IOutgoingHttpResponse`](../../declarations/interfaces/IOutgoingHttpResponse.md)

The outgoing HTTP response to check freshness against.

#### Returns

`boolean`

True if the cache is fresh, otherwise false.

***

### isMethod()

> **isMethod**(`method`): `boolean`

Defined in: [src/IncomingHttpEvent.ts:624](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L624)

Check if the current event method matches the given method.

#### Parameters

##### method

`string`

The method to check.

#### Returns

`boolean`

True if the event method matches, otherwise false.

***

### isMethodCacheable()

> **isMethodCacheable**(): `boolean`

Defined in: [src/IncomingHttpEvent.ts:642](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L642)

Check if the current event method is cacheable.

#### Returns

`boolean`

True if the method is cacheable, otherwise false.

***

### isMethodSafe()

> **isMethodSafe**(): `boolean`

Defined in: [src/IncomingHttpEvent.ts:633](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L633)

Check if the current event method is considered safe.

#### Returns

`boolean`

True if the method is safe, otherwise false.

***

### isStale()

> **isStale**(`response`): `boolean`

Defined in: [src/IncomingHttpEvent.ts:584](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L584)

Determine if the response cache is stale.

#### Parameters

##### response

[`IOutgoingHttpResponse`](../../declarations/interfaces/IOutgoingHttpResponse.md)

The outgoing HTTP response to check staleness against.

#### Returns

`boolean`

True if the cache is stale, otherwise false.

***

### isType()

> **isType**(...`types`): `string` \| `false`

Defined in: [src/IncomingHttpEvent.ts:478](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L478)

Check if the request matches one of the given content types.

#### Parameters

##### types

...`string`[]

The content types to check.

#### Returns

`string` \| `false`

The best match, or false if no match is found.

***

### json()

Get a value from the JSON body.

#### Param

The key to look for in the JSON body.

#### Param

A fallback value if the key is not found.

#### Call Signature

> **json**\<`TReturn`\>(`key`): `undefined` \| `TReturn`

Defined in: [src/IncomingHttpEvent.ts:527](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L527)

Get a value from the JSON body.

##### Type Parameters

###### TReturn

`TReturn` = `unknown`

##### Parameters

###### key

`string`

The key to look for in the JSON body.

##### Returns

`undefined` \| `TReturn`

The value of the key or the fallback.

##### Param

The key to look for in the JSON body.

##### Param

A fallback value if the key is not found.

#### Call Signature

> **json**\<`TReturn`\>(`key`, `fallback`): `TReturn`

Defined in: [src/IncomingHttpEvent.ts:536](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L536)

Get a value from the JSON body.

##### Type Parameters

###### TReturn

`TReturn` = `unknown`

##### Parameters

###### key

`string`

The key to look for in the JSON body.

###### fallback

`TReturn`

A fallback value if the key is not found.

##### Returns

`TReturn`

The value of the key or the fallback.

##### Param

The key to look for in the JSON body.

##### Param

A fallback value if the key is not found.

***

### preferredType()

> **preferredType**(`types`, `defaultType`): `string`

Defined in: [src/IncomingHttpEvent.ts:490](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L490)

Determines the preferred response type based on content negotiation.
Uses Accept, Content-Type, User-Agent, and AJAX detection.

#### Parameters

##### types

`string`[] = `...`

Allowed response types, in priority order.

##### defaultType

`string` = `'json'`

Default type if none match.

#### Returns

`string`

The best response type as a string.

***

### range()

> **range**(`size`, `combine`): `undefined` \| `Result` \| `Ranges`

Defined in: [src/IncomingHttpEvent.ts:516](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L516)

Get request range.

#### Parameters

##### size

`number`

The maximum size of the resource.

##### combine

`boolean` = `false`

Specifies if overlapping & adjacent ranges should be combined.

#### Returns

`undefined` \| `Result` \| `Ranges`

The parsed range, or undefined if not applicable.

***

### setRouteResolver()

> **setRouteResolver**\<`RouteType`\>(`resolver`): `this`

Defined in: [src/IncomingHttpEvent.ts:710](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L710)

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

Defined in: [src/IncomingHttpEvent.ts:690](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L690)

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

Defined in: [src/IncomingHttpEvent.ts:652](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L652)

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

> `static` **create**(`options`): `IncomingHttpEvent`

Defined in: [src/IncomingHttpEvent.ts:74](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/IncomingHttpEvent.ts#L74)

Create an IncomingHttpEvent.

#### Parameters

##### options

[`IncomingHttpEventOptions`](../interfaces/IncomingHttpEventOptions.md)

The IncomingHttpEvent options.

#### Returns

`IncomingHttpEvent`

A new instance of IncomingHttpEvent.

#### Overrides

`IncomingEvent.create`
