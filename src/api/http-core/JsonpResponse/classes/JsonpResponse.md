[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [JsonpResponse](../README.md) / JsonpResponse

# Class: JsonpResponse

Defined in: [src/JsonpResponse.ts:9](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/JsonpResponse.ts#L9)

Class representing a JsonpResponse.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- [`JsonResponse`](../../JsonResponse/classes/JsonResponse.md)

## Constructors

### Constructor

> **new JsonpResponse**(`options`): `JsonpResponse`

Defined in: [src/OutgoingHttpResponse.ts:55](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L55)

Constructor for OutgoingHttpResponse.
Initializes headers and cookies based on the provided options.

#### Parameters

##### options

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md)

Options for the outgoing HTTP response.

#### Returns

`JsonpResponse`

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`constructor`](../../JsonResponse/classes/JsonResponse.md#constructor)

## Properties

### \_blueprintResolver()?

> `protected` `optional` **\_blueprintResolver**: () => `undefined` \| `IBlueprint`

Defined in: [src/OutgoingHttpResponse.ts:34](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L34)

#### Returns

`undefined` \| `IBlueprint`

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`_blueprintResolver`](../../JsonResponse/classes/JsonResponse.md#_blueprintresolver)

***

### \_charset?

> `protected` `optional` **\_charset**: `Encoding`

Defined in: [src/OutgoingHttpResponse.ts:31](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L31)

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`_charset`](../../JsonResponse/classes/JsonResponse.md#_charset)

***

### \_cookieCollection

> `protected` `readonly` **\_cookieCollection**: [`CookieCollection`](../../cookies/CookieCollection/classes/CookieCollection.md)

Defined in: [src/OutgoingHttpResponse.ts:37](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L37)

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`_cookieCollection`](../../JsonResponse/classes/JsonResponse.md#_cookiecollection)

***

### \_formats?

> `protected` `optional` **\_formats**: `Record`\<`string`, () => `unknown`\>

Defined in: [src/OutgoingHttpResponse.ts:32](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L32)

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`_formats`](../../JsonResponse/classes/JsonResponse.md#_formats)

***

### \_headers

> `protected` `readonly` **\_headers**: `Headers`

Defined in: [src/OutgoingHttpResponse.ts:36](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L36)

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`_headers`](../../JsonResponse/classes/JsonResponse.md#_headers)

***

### \_incomingEventResolver()?

> `protected` `optional` **\_incomingEventResolver**: () => [`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

Defined in: [src/OutgoingHttpResponse.ts:33](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L33)

#### Returns

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`_incomingEventResolver`](../../JsonResponse/classes/JsonResponse.md#_incomingeventresolver)

***

### OUTGOING\_HTTP\_RESPONSE

> `readonly` `static` **OUTGOING\_HTTP\_RESPONSE**: `"stonejs@outgoing_http_jsonp_response"` = `'stonejs@outgoing_http_jsonp_response'`

Defined in: [src/JsonpResponse.ts:10](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/JsonpResponse.ts#L10)

#### Overrides

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`OUTGOING_HTTP_RESPONSE`](../../JsonResponse/classes/JsonResponse.md#outgoing_http_response)

## Accessors

### blueprint

#### Get Signature

> **get** **blueprint**(): `undefined` \| `IBlueprint`

Defined in: [src/OutgoingHttpResponse.ts:138](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L138)

Get the blueprint associated with the response.

##### Returns

`undefined` \| `IBlueprint`

The blueprint or undefined if not set.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`blueprint`](../../JsonResponse/classes/JsonResponse.md#blueprint)

***

### charset

#### Get Signature

> **get** **charset**(): `Encoding`

Defined in: [src/OutgoingHttpResponse.ts:89](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L89)

Get the character set encoding.
Defaults to 'utf-8' if not explicitly set.

##### Returns

`Encoding`

The character set encoding.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`charset`](../../JsonResponse/classes/JsonResponse.md#charset)

***

### charsetRegExp

#### Get Signature

> **get** `protected` **charsetRegExp**(): `RegExp`

Defined in: [src/OutgoingHttpResponse.ts:148](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L148)

Get the regular expression for matching charset in content type.

##### Returns

`RegExp`

The regular expression for matching charset in content type.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`charsetRegExp`](../../JsonResponse/classes/JsonResponse.md#charsetregexp)

***

### etag

#### Get Signature

> **get** **etag**(): `undefined` \| `string`

Defined in: [src/OutgoingHttpResponse.ts:98](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L98)

Get the ETag of the response.

##### Returns

`undefined` \| `string`

The value of the ETag header, if present.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`etag`](../../JsonResponse/classes/JsonResponse.md#etag)

***

### headers

#### Get Signature

> **get** **headers**(): `Headers`

Defined in: [src/OutgoingHttpResponse.ts:79](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L79)

Get the headers of the response.

##### Returns

`Headers`

The headers of the response as a Headers object.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`headers`](../../JsonResponse/classes/JsonResponse.md#headers)

***

### incomingEvent

#### Get Signature

> **get** **incomingEvent**(): [`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

Defined in: [src/OutgoingHttpResponse.ts:126](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L126)

Get the associated IncomingHttpEvent.

##### Throws

InternalServerError if the IncomingHttpEvent resolver is not set.

##### Returns

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

The associated IncomingHttpEvent.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`incomingEvent`](../../JsonResponse/classes/JsonResponse.md#incomingevent)

***

### lastModified

#### Get Signature

> **get** **lastModified**(): `undefined` \| `string`

Defined in: [src/OutgoingHttpResponse.ts:116](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L116)

Get the Last-Modified date of the response.

##### Returns

`undefined` \| `string`

The value of the Last-Modified header, if present.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`lastModified`](../../JsonResponse/classes/JsonResponse.md#lastmodified)

***

### status

#### Get Signature

> **get** **status**(): `undefined` \| `number`

Defined in: [src/OutgoingHttpResponse.ts:70](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L70)

Get the HTTP status code.

##### Returns

`undefined` \| `number`

The HTTP status code.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`status`](../../JsonResponse/classes/JsonResponse.md#status)

***

### vary

#### Get Signature

> **get** **vary**(): `undefined` \| `string`[]

Defined in: [src/OutgoingHttpResponse.ts:107](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L107)

Get the Vary header as an array of values.

##### Returns

`undefined` \| `string`[]

The Vary header values split by comma, or undefined if not present.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`vary`](../../JsonResponse/classes/JsonResponse.md#vary)

## Methods

### addVary()

> **addVary**(`field`): `this`

Defined in: [src/OutgoingHttpResponse.ts:406](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L406)

Add a field to the Vary header.

#### Parameters

##### field

The field to add to the Vary header.

`string` | `string`[]

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`addVary`](../../JsonResponse/classes/JsonResponse.md#addvary)

***

### appendHeader()

> **appendHeader**(`key`, `value`): `this`

Defined in: [src/OutgoingHttpResponse.ts:190](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L190)

Append a value to an existing header or create a new header.

#### Parameters

##### key

`string`

The header name.

##### value

`string`

The value to append.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`appendHeader`](../../JsonResponse/classes/JsonResponse.md#appendheader)

***

### calculateContentLength()

> `protected` **calculateContentLength**(`generateETag`): `number`

Defined in: [src/OutgoingHttpResponse.ts:769](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L769)

Calculate the content length.

#### Parameters

##### generateETag

`boolean`

Whether to generate an ETag for the content.

#### Returns

`number`

The content length.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`calculateContentLength`](../../JsonResponse/classes/JsonResponse.md#calculatecontentlength)

***

### clearCookie()

> **clearCookie**(`name`, `options`, `force`): `this`

Defined in: [src/OutgoingHttpResponse.ts:311](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L311)

Clear a specific cookie from the response.

#### Parameters

##### name

`string`

The name of the cookie to be cleared.

##### options

[`CookieOptions`](../../declarations/interfaces/CookieOptions.md) = `{}`

Optional settings for the cookie.

##### force

`boolean` = `false`

Whether to force the removal of the cookie, even if it doesn't exist.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`clearCookie`](../../JsonResponse/classes/JsonResponse.md#clearcookie)

***

### clearCookies()

> **clearCookies**(`force`): `this`

Defined in: [src/OutgoingHttpResponse.ts:323](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L323)

Clear all cookies from the response.

#### Parameters

##### force

`boolean` = `false`

Whether to force the removal of all cookies.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`clearCookies`](../../JsonResponse/classes/JsonResponse.md#clearcookies)

***

### defaultEtagFn()

> `protected` **defaultEtagFn**(`content`, `encoding`): `string`

Defined in: [src/OutgoingHttpResponse.ts:854](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L854)

Generate a default ETag for the given content.

#### Parameters

##### content

`string`

The content to generate an ETag for.

##### encoding

`Encoding`

The encoding to use.

#### Returns

`string`

The generated ETag as a base64 string.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`defaultEtagFn`](../../JsonResponse/classes/JsonResponse.md#defaultetagfn)

***

### ensureCharset()

> `protected` **ensureCharset**(`value`): `this`

Defined in: [src/OutgoingHttpResponse.ts:787](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L787)

Ensure that the "Content-Type" header has a charset specified.

#### Parameters

##### value

`string`

The "Content-Type" header value.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`ensureCharset`](../../JsonResponse/classes/JsonResponse.md#ensurecharset)

***

### format()

> **format**(`formats`): `this`

Defined in: [src/OutgoingHttpResponse.ts:395](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L395)

Handles content negotiation based on the `Accept` header of the incoming request.

#### Parameters

##### formats

`Record`\<`string`, () => `unknown`\>

An object where keys are MIME types and values are functions that return the content for that MIME type.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`format`](../../JsonResponse/classes/JsonResponse.md#format)

***

### getCallback()

> **getCallback**(): `undefined` \| `string`

Defined in: [src/JsonpResponse.ts:29](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/JsonpResponse.ts#L29)

Get callback.

#### Returns

`undefined` \| `string`

The callback function name.

***

### getHashedContent()

> `protected` **getHashedContent**(`content`, `encoding`): `string`

Defined in: [src/OutgoingHttpResponse.ts:865](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L865)

Get the hashed content using the specified encoding.

#### Parameters

##### content

`string`

The content to hash.

##### encoding

`Encoding`

The encoding to use for hashing.

#### Returns

`string`

The hashed content as a hexadecimal string.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`getHashedContent`](../../JsonResponse/classes/JsonResponse.md#gethashedcontent)

***

### getHeader()

Get a header value.

#### Param

The header name.

#### Param

A fallback value if the header is not found.

#### Call Signature

> **getHeader**\<`TReturn`\>(`name`): `undefined` \| `TReturn`

Defined in: [src/OutgoingHttpResponse.ts:206](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L206)

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

##### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`getHeader`](../../JsonResponse/classes/JsonResponse.md#getheader)

#### Call Signature

> **getHeader**\<`TReturn`\>(`name`, `fallback`): `TReturn`

Defined in: [src/OutgoingHttpResponse.ts:215](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L215)

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

##### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`getHeader`](../../JsonResponse/classes/JsonResponse.md#getheader)

***

### getHeaderNames()

> **getHeaderNames**(): `string`[]

Defined in: [src/OutgoingHttpResponse.ts:233](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L233)

Get all header names.

#### Returns

`string`[]

An array of all header names.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`getHeaderNames`](../../JsonResponse/classes/JsonResponse.md#getheadernames)

***

### handleCacheHeaders()

> `protected` **handleCacheHeaders**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:705](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L705)

Handle cache headers like ETag and Last-Modified.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`handleCacheHeaders`](../../JsonResponse/classes/JsonResponse.md#handlecacheheaders)

***

### handleContentNegotiation()

> `protected` **handleContentNegotiation**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:657](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L657)

Handles content negotiation based on the `Accept` header of the incoming request.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`handleContentNegotiation`](../../JsonResponse/classes/JsonResponse.md#handlecontentnegotiation)

***

### hasHeader()

> **hasHeader**(`key`): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:243](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L243)

Check if a specific header exists.

#### Parameters

##### key

`string`

The header name to check.

#### Returns

`boolean`

True if the header exists, false otherwise.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`hasHeader`](../../JsonResponse/classes/JsonResponse.md#hasheader)

***

### is1xx()

> **is1xx**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:492](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L492)

Check if the status code represents an informational response (1xx).

#### Returns

`boolean`

True if the status code is informational, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`is1xx`](../../JsonResponse/classes/JsonResponse.md#is1xx)

***

### is2xx()

> **is2xx**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:501](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L501)

Check if the status code represents a successful response (2xx).

#### Returns

`boolean`

True if the status code is successful, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`is2xx`](../../JsonResponse/classes/JsonResponse.md#is2xx)

***

### is3xx()

> **is3xx**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:510](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L510)

Check if the status code represents a redirection response (3xx).

#### Returns

`boolean`

True if the status code is a redirection, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`is3xx`](../../JsonResponse/classes/JsonResponse.md#is3xx)

***

### is4xx()

> **is4xx**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:519](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L519)

Check if the status code represents a client error response (4xx).

#### Returns

`boolean`

True if the status code is a client error, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`is4xx`](../../JsonResponse/classes/JsonResponse.md#is4xx)

***

### is5xx()

> **is5xx**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:528](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L528)

Check if the status code represents a server error response (5xx).

#### Returns

`boolean`

True if the status code is a server error, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`is5xx`](../../JsonResponse/classes/JsonResponse.md#is5xx)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:573](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L573)

Check if the response is empty.

#### Returns

`boolean`

True if the status code indicates an empty response, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`isEmpty`](../../JsonResponse/classes/JsonResponse.md#isempty)

***

### isError()

> **isError**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:546](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L546)

Check if the status code is an error (i.e., 4xx or 5xx).

#### Returns

`boolean`

True if the status code is an error, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`isError`](../../JsonResponse/classes/JsonResponse.md#iserror)

***

### isForbidden()

> **isForbidden**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:611](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L611)

Check if the status code is 403 (Forbidden).

#### Returns

`boolean`

True if the status code is 403, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`isForbidden`](../../JsonResponse/classes/JsonResponse.md#isforbidden)

***

### isInStatusRange()

> **isInStatusRange**(`start`, `end`): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:472](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L472)

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

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`isInStatusRange`](../../JsonResponse/classes/JsonResponse.md#isinstatusrange)

***

### isInvalid()

> **isInvalid**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:482](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L482)

Check if the status code is invalid.

#### Returns

`boolean`

True if the status code is invalid, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`isInvalid`](../../JsonResponse/classes/JsonResponse.md#isinvalid)

***

### isMovedPermanently()

> **isMovedPermanently**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:593](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L593)

Check if the status code is 301 (Moved Permanently).

#### Returns

`boolean`

True if the status code is 301, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`isMovedPermanently`](../../JsonResponse/classes/JsonResponse.md#ismovedpermanently)

***

### isNotError()

> **isNotError**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:537](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L537)

Check if the status code is not an error (i.e., not 4xx or 5xx).

#### Returns

`boolean`

True if the status code is not an error, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`isNotError`](../../JsonResponse/classes/JsonResponse.md#isnoterror)

***

### isNotFound()

> **isNotFound**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:620](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L620)

Check if the status code is 404 (Not Found).

#### Returns

`boolean`

True if the status code is 404, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`isNotFound`](../../JsonResponse/classes/JsonResponse.md#isnotfound)

***

### isOk()

> **isOk**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:555](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L555)

Check if the status code is 200 (OK).

#### Returns

`boolean`

True if the status code is 200, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`isOk`](../../JsonResponse/classes/JsonResponse.md#isok)

***

### isRedirect()

> **isRedirect**(`location?`): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:583](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L583)

Check if the response is a redirect.

#### Parameters

##### location?

`string`

The optional location to check for redirection.

#### Returns

`boolean`

True if the status code indicates a redirect, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`isRedirect`](../../JsonResponse/classes/JsonResponse.md#isredirect)

***

### isResetContent()

> **isResetContent**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:564](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L564)

Check if the status code is 205 (Reset Content).

#### Returns

`boolean`

True if the status code is 205, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`isResetContent`](../../JsonResponse/classes/JsonResponse.md#isresetcontent)

***

### isUnauthorized()

> **isUnauthorized**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:602](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L602)

Check if the status code is 401 (Unauthorized).

#### Returns

`boolean`

True if the status code is 401, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`isUnauthorized`](../../JsonResponse/classes/JsonResponse.md#isunauthorized)

***

### isValidateable()

> **isValidateable**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:629](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L629)

Check if the response is validateable.

#### Returns

`boolean`

True if the response has Last-Modified or ETag headers, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`isValidateable`](../../JsonResponse/classes/JsonResponse.md#isvalidateable)

***

### makeJson()

> `protected` **makeJson**(): `this`

Defined in: [src/JsonpResponse.ts:40](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/JsonpResponse.ts#L40)

Make JSONP response.

#### Returns

`this`

The current instance for method chaining.

#### Throws

If no callback is provided.

#### Overrides

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`makeJson`](../../JsonResponse/classes/JsonResponse.md#makejson)

***

### morphToJson()

> `protected` **morphToJson**(`content`, `options`): `string`

Defined in: [src/OutgoingHttpResponse.ts:818](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L818)

Convert the given content to a JSON string.

#### Parameters

##### content

`unknown`

The content to convert.

##### options

`Partial`\<[`HttpJsonConfig`](../../options/HttpConfig/interfaces/HttpJsonConfig.md)\> = `{}`

Options to customize the serialization process.

#### Returns

`string`

A JSON string representation of the content.

#### Throws

InternalServerError if the content cannot be converted to JSON.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`morphToJson`](../../JsonResponse/classes/JsonResponse.md#morphtojson)

***

### prepare()

> **prepare**(`event`, `container?`): `JsonpResponse` \| `Promise`\<`JsonpResponse`\>

Defined in: [src/JsonResponse.ts:19](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/JsonResponse.ts#L19)

Prepare the response before sending.

#### Parameters

##### event

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

The incoming HTTP event.

##### container?

`Container`

The service container.

#### Returns

`JsonpResponse` \| `Promise`\<`JsonpResponse`\>

The current instance of the response for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`prepare`](../../JsonResponse/classes/JsonResponse.md#prepare)

***

### prepareContentHeaders()

> `protected` **prepareContentHeaders**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:717](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L717)

Prepare content-related headers such as Content-Length and ETag.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`prepareContentHeaders`](../../JsonResponse/classes/JsonResponse.md#preparecontentheaders)

***

### prepareCookies()

> `protected` **prepareCookies**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:831](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L831)

Prepare cookies by setting the appropriate headers.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`prepareCookies`](../../JsonResponse/classes/JsonResponse.md#preparecookies)

***

### removeHeader()

> **removeHeader**(`key`): `this`

Defined in: [src/OutgoingHttpResponse.ts:253](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L253)

Remove headers from the response.

#### Parameters

##### key

The header or headers to be removed.

`string` | `string`[]

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`removeHeader`](../../JsonResponse/classes/JsonResponse.md#removeheader)

***

### secureCookies()

> **secureCookies**(`value`): `this`

Defined in: [src/OutgoingHttpResponse.ts:334](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L334)

Secure all cookies by setting the "Secure" attribute.

#### Parameters

##### value

`boolean` = `true`

Whether to set or unset the "Secure" attribute for cookies.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`secureCookies`](../../JsonResponse/classes/JsonResponse.md#securecookies)

***

### setBlueprintResolver()

> **setBlueprintResolver**(`resolver`): `this`

Defined in: [src/OutgoingHttpResponse.ts:460](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L460)

Set the resolver for the blueprint.

#### Parameters

##### resolver

() => `undefined` \| `IBlueprint`

A function that returns the blueprint.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`setBlueprintResolver`](../../JsonResponse/classes/JsonResponse.md#setblueprintresolver)

***

### setCallback()

> **setCallback**(`callback`): `this`

Defined in: [src/JsonpResponse.ts:19](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/JsonpResponse.ts#L19)

Set callback.

#### Parameters

##### callback

The callback function name or array of names.

`string` | `string`[]

#### Returns

`this`

The current instance for method chaining.

***

### setCharset()

> **setCharset**(`value`): `this`

Defined in: [src/OutgoingHttpResponse.ts:345](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L345)

Set the character set for the response.

#### Parameters

##### value

`string`

The character encoding to use.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`setCharset`](../../JsonResponse/classes/JsonResponse.md#setcharset)

***

### setContent()

> **setContent**(`value`, `options`): `this`

Defined in: [src/OutgoingHttpResponse.ts:284](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L284)

Set the response content.
If the content should be JSON, it will be converted appropriately.

#### Parameters

##### value

`unknown`

The content to set.

##### options

`Partial`\<[`HttpJsonConfig`](../../options/HttpConfig/interfaces/HttpJsonConfig.md)\> = `{}`

The JSON options.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`setContent`](../../JsonResponse/classes/JsonResponse.md#setcontent)

***

### setContentHeaders()

> `protected` **setContentHeaders**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:733](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L733)

Set content headers such as Content-Length and ETag.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`setContentHeaders`](../../JsonResponse/classes/JsonResponse.md#setcontentheaders)

***

### setContentType()

> **setContentType**(`value`): `this`

Defined in: [src/OutgoingHttpResponse.ts:357](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L357)

Set the content type of the response.

#### Parameters

##### value

`string`

The MIME type for the response.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Throws

InternalServerError if the provided MIME type is invalid.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`setContentType`](../../JsonResponse/classes/JsonResponse.md#setcontenttype)

***

### setContentTypeIfNeeded()

> `protected` **setContentTypeIfNeeded**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:679](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L679)

Set the content type if it's not already set.

#### Returns

`this`

The current instance of the response for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`setContentTypeIfNeeded`](../../JsonResponse/classes/JsonResponse.md#setcontenttypeifneeded)

***

### setCookie()

> **setCookie**(`name`, `value`, `options`): `this`

Defined in: [src/OutgoingHttpResponse.ts:297](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L297)

Set a cookie for the response.

#### Parameters

##### name

`string`

The name of the cookie.

##### value

`unknown`

The value of the cookie.

##### options

[`CookieOptions`](../../declarations/interfaces/CookieOptions.md) = `{}`

Optional settings for the cookie.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`setCookie`](../../JsonResponse/classes/JsonResponse.md#setcookie)

***

### setEtag()

> **setEtag**(`etag?`, `weak?`): `this`

Defined in: [src/OutgoingHttpResponse.ts:418](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L418)

Set the ETag for the response.

#### Parameters

##### etag?

`string`

The ETag value to set.

##### weak?

`boolean` = `false`

Whether the ETag should be marked as weak.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`setEtag`](../../JsonResponse/classes/JsonResponse.md#setetag)

***

### setHeader()

> **setHeader**(`key`, `value`): `this`

Defined in: [src/OutgoingHttpResponse.ts:172](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L172)

Set a single header for the response.
If the header is "Content-Type," ensures charset is set appropriately.

#### Parameters

##### key

`string`

The header name.

##### value

The value of the header.

`string` | `string`[]

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`setHeader`](../../JsonResponse/classes/JsonResponse.md#setheader)

***

### setHeaders()

> **setHeaders**(`values`): `this`

Defined in: [src/OutgoingHttpResponse.ts:158](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L158)

Set multiple headers for the response.

#### Parameters

##### values

[`HeadersType`](../../declarations/type-aliases/HeadersType.md)

A key-value pair of headers to be set.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`setHeaders`](../../JsonResponse/classes/JsonResponse.md#setheaders)

***

### setIncomingEventResolver()

> **setIncomingEventResolver**(`resolver`): `this`

Defined in: [src/OutgoingHttpResponse.ts:449](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L449)

Set the resolver for the incoming HTTP event.

#### Parameters

##### resolver

() => [`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

A function that returns the incoming HTTP event.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`setIncomingEventResolver`](../../JsonResponse/classes/JsonResponse.md#setincomingeventresolver)

***

### setLastModified()

> **setLastModified**(`date?`): `this`

Defined in: [src/OutgoingHttpResponse.ts:434](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L434)

Set the Last-Modified header for the response.

#### Parameters

##### date?

`Date`

The date to set as the Last-Modified header.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`setLastModified`](../../JsonResponse/classes/JsonResponse.md#setlastmodified)

***

### setLinks()

> **setLinks**(`links`): `this`

Defined in: [src/OutgoingHttpResponse.ts:382](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L382)

Set link headers for the response.

#### Parameters

##### links

`Record`\<`string`, `string`\>

An object representing links to set.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`setLinks`](../../JsonResponse/classes/JsonResponse.md#setlinks)

***

### setStatus()

> **setStatus**(`code`, `text?`): `this`

Defined in: [src/OutgoingHttpResponse.ts:267](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L267)

Set the HTTP status code of the response.
Also sets a default status message if none is provided.

#### Parameters

##### code

`number`

The HTTP status code.

##### text?

`string`

Optional status message.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Throws

InternalServerError if the status code is invalid.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`setStatus`](../../JsonResponse/classes/JsonResponse.md#setstatus)

***

### setType()

> **setType**(`value`): `this`

Defined in: [src/OutgoingHttpResponse.ts:372](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L372)

Set the content type by file extension.

#### Parameters

##### value

`string`

The file extension.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`setType`](../../JsonResponse/classes/JsonResponse.md#settype)

***

### shouldBeJson()

> `protected` **shouldBeJson**(`content`): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:806](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L806)

Determine if the content should be serialized as JSON.

#### Parameters

##### content

`unknown`

The content to check.

#### Returns

`boolean`

True if the content should be serialized as JSON, otherwise false.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`shouldBeJson`](../../JsonResponse/classes/JsonResponse.md#shouldbejson)

***

### stringify()

> `protected` **stringify**(`value`, `replacer?`, `spaces?`, `escape?`): `string`

Defined in: [src/OutgoingHttpResponse.ts:878](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L878)

Convert the given value to a JSON string with optional escaping.

#### Parameters

##### value

`unknown`

The value to convert.

##### replacer?

(`this`, `key`, `value`) => `unknown`

A function or array that alters the behavior of the stringification process.

##### spaces?

`string`

The number of spaces to use for pretty-printing the JSON string.

##### escape?

`boolean`

Whether to escape special characters.

#### Returns

`string`

The JSON string representation of the value.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`stringify`](../../JsonResponse/classes/JsonResponse.md#stringify)

***

### create()

> `static` **create**\<`T`\>(`options`): `T`

Defined in: [src/OutgoingHttpResponse.ts:45](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L45)

Create an instance of OutgoingHttpResponse.

#### Type Parameters

##### T

`T` *extends* [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md) = [`OutgoingHttpResponse`](../../OutgoingHttpResponse/classes/OutgoingHttpResponse.md)

#### Parameters

##### options

[`OutgoingHttpResponseOptions`](../../OutgoingHttpResponse/interfaces/OutgoingHttpResponseOptions.md)

Options for the outgoing HTTP response.

#### Returns

`T`

A new instance of OutgoingHttpResponse.

#### Inherited from

[`JsonResponse`](../../JsonResponse/classes/JsonResponse.md).[`create`](../../JsonResponse/classes/JsonResponse.md#create)
