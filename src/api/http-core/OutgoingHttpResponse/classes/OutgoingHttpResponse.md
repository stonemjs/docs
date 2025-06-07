[**HTTP Core Documentation**](../../README.md)

***

[HTTP Core Documentation](../../README.md) / [OutgoingHttpResponse](../README.md) / OutgoingHttpResponse

# Class: OutgoingHttpResponse

Defined in: [src/OutgoingHttpResponse.ts:28](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L28)

Class representing an Outgoing HTTP Response.
Extends the OutgoingResponse class and provides additional features
such as setting headers, cookies, and interacting with IncomingHttpEvent.

## Extends

- `OutgoingResponse`

## Extended by

- [`BinaryFileResponse`](../../BinaryFileResponse/classes/BinaryFileResponse.md)
- [`JsonResponse`](../../JsonResponse/classes/JsonResponse.md)
- [`RedirectResponse`](../../RedirectResponse/classes/RedirectResponse.md)

## Implements

- [`IOutgoingHttpResponse`](../../declarations/interfaces/IOutgoingHttpResponse.md)

## Constructors

### Constructor

> **new OutgoingHttpResponse**(`options`): `OutgoingHttpResponse`

Defined in: [src/OutgoingHttpResponse.ts:55](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L55)

Constructor for OutgoingHttpResponse.
Initializes headers and cookies based on the provided options.

#### Parameters

##### options

[`OutgoingHttpResponseOptions`](../interfaces/OutgoingHttpResponseOptions.md)

Options for the outgoing HTTP response.

#### Returns

`OutgoingHttpResponse`

#### Overrides

`OutgoingResponse.constructor`

## Properties

### \_blueprintResolver()?

> `protected` `optional` **\_blueprintResolver**: () => `undefined` \| `IBlueprint`

Defined in: [src/OutgoingHttpResponse.ts:34](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L34)

#### Returns

`undefined` \| `IBlueprint`

***

### \_charset?

> `protected` `optional` **\_charset**: `Encoding`

Defined in: [src/OutgoingHttpResponse.ts:31](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L31)

***

### \_cookieCollection

> `protected` `readonly` **\_cookieCollection**: [`CookieCollection`](../../cookies/CookieCollection/classes/CookieCollection.md)

Defined in: [src/OutgoingHttpResponse.ts:37](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L37)

***

### \_formats?

> `protected` `optional` **\_formats**: `Record`\<`string`, () => `unknown`\>

Defined in: [src/OutgoingHttpResponse.ts:32](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L32)

***

### \_headers

> `protected` `readonly` **\_headers**: `Headers`

Defined in: [src/OutgoingHttpResponse.ts:36](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L36)

***

### \_incomingEventResolver()?

> `protected` `optional` **\_incomingEventResolver**: () => [`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

Defined in: [src/OutgoingHttpResponse.ts:33](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L33)

#### Returns

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

***

### OUTGOING\_HTTP\_RESPONSE

> `static` **OUTGOING\_HTTP\_RESPONSE**: `string` = `'stonejs@outgoing_http_response'`

Defined in: [src/OutgoingHttpResponse.ts:29](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L29)

## Accessors

### blueprint

#### Get Signature

> **get** **blueprint**(): `undefined` \| `IBlueprint`

Defined in: [src/OutgoingHttpResponse.ts:138](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L138)

Get the blueprint associated with the response.

##### Returns

`undefined` \| `IBlueprint`

The blueprint or undefined if not set.

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

***

### charsetRegExp

#### Get Signature

> **get** `protected` **charsetRegExp**(): `RegExp`

Defined in: [src/OutgoingHttpResponse.ts:148](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L148)

Get the regular expression for matching charset in content type.

##### Returns

`RegExp`

The regular expression for matching charset in content type.

***

### etag

#### Get Signature

> **get** **etag**(): `undefined` \| `string`

Defined in: [src/OutgoingHttpResponse.ts:98](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L98)

Get the ETag of the response.

##### Returns

`undefined` \| `string`

The value of the ETag header, if present.

#### Implementation of

[`IOutgoingHttpResponse`](../../declarations/interfaces/IOutgoingHttpResponse.md).[`etag`](../../declarations/interfaces/IOutgoingHttpResponse.md#etag)

***

### headers

#### Get Signature

> **get** **headers**(): `Headers`

Defined in: [src/OutgoingHttpResponse.ts:79](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L79)

Get the headers of the response.

##### Returns

`Headers`

The headers of the response as a Headers object.

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

***

### lastModified

#### Get Signature

> **get** **lastModified**(): `undefined` \| `string`

Defined in: [src/OutgoingHttpResponse.ts:116](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L116)

Get the Last-Modified date of the response.

##### Returns

`undefined` \| `string`

The value of the Last-Modified header, if present.

#### Implementation of

[`IOutgoingHttpResponse`](../../declarations/interfaces/IOutgoingHttpResponse.md).[`lastModified`](../../declarations/interfaces/IOutgoingHttpResponse.md#lastmodified)

***

### status

#### Get Signature

> **get** **status**(): `undefined` \| `number`

Defined in: [src/OutgoingHttpResponse.ts:70](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L70)

Get the HTTP status code.

##### Returns

`undefined` \| `number`

The HTTP status code.

#### Implementation of

[`IOutgoingHttpResponse`](../../declarations/interfaces/IOutgoingHttpResponse.md).[`status`](../../declarations/interfaces/IOutgoingHttpResponse.md#status)

***

### vary

#### Get Signature

> **get** **vary**(): `undefined` \| `string`[]

Defined in: [src/OutgoingHttpResponse.ts:107](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L107)

Get the Vary header as an array of values.

##### Returns

`undefined` \| `string`[]

The Vary header values split by comma, or undefined if not present.

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

***

### getHeaderNames()

> **getHeaderNames**(): `string`[]

Defined in: [src/OutgoingHttpResponse.ts:233](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L233)

Get all header names.

#### Returns

`string`[]

An array of all header names.

***

### handleCacheHeaders()

> `protected` **handleCacheHeaders**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:705](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L705)

Handle cache headers like ETag and Last-Modified.

#### Returns

`this`

The current instance of the response for chaining.

***

### handleContentNegotiation()

> `protected` **handleContentNegotiation**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:657](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L657)

Handles content negotiation based on the `Accept` header of the incoming request.

#### Returns

`this`

The current instance of OutgoingHttpResponse for chaining.

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

***

### is1xx()

> **is1xx**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:492](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L492)

Check if the status code represents an informational response (1xx).

#### Returns

`boolean`

True if the status code is informational, otherwise false.

***

### is2xx()

> **is2xx**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:501](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L501)

Check if the status code represents a successful response (2xx).

#### Returns

`boolean`

True if the status code is successful, otherwise false.

***

### is3xx()

> **is3xx**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:510](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L510)

Check if the status code represents a redirection response (3xx).

#### Returns

`boolean`

True if the status code is a redirection, otherwise false.

***

### is4xx()

> **is4xx**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:519](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L519)

Check if the status code represents a client error response (4xx).

#### Returns

`boolean`

True if the status code is a client error, otherwise false.

***

### is5xx()

> **is5xx**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:528](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L528)

Check if the status code represents a server error response (5xx).

#### Returns

`boolean`

True if the status code is a server error, otherwise false.

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:573](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L573)

Check if the response is empty.

#### Returns

`boolean`

True if the status code indicates an empty response, otherwise false.

***

### isError()

> **isError**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:546](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L546)

Check if the status code is an error (i.e., 4xx or 5xx).

#### Returns

`boolean`

True if the status code is an error, otherwise false.

***

### isForbidden()

> **isForbidden**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:611](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L611)

Check if the status code is 403 (Forbidden).

#### Returns

`boolean`

True if the status code is 403, otherwise false.

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

***

### isInvalid()

> **isInvalid**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:482](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L482)

Check if the status code is invalid.

#### Returns

`boolean`

True if the status code is invalid, otherwise false.

***

### isMovedPermanently()

> **isMovedPermanently**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:593](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L593)

Check if the status code is 301 (Moved Permanently).

#### Returns

`boolean`

True if the status code is 301, otherwise false.

***

### isNotError()

> **isNotError**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:537](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L537)

Check if the status code is not an error (i.e., not 4xx or 5xx).

#### Returns

`boolean`

True if the status code is not an error, otherwise false.

***

### isNotFound()

> **isNotFound**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:620](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L620)

Check if the status code is 404 (Not Found).

#### Returns

`boolean`

True if the status code is 404, otherwise false.

***

### isOk()

> **isOk**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:555](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L555)

Check if the status code is 200 (OK).

#### Returns

`boolean`

True if the status code is 200, otherwise false.

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

***

### isResetContent()

> **isResetContent**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:564](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L564)

Check if the status code is 205 (Reset Content).

#### Returns

`boolean`

True if the status code is 205, otherwise false.

***

### isUnauthorized()

> **isUnauthorized**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:602](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L602)

Check if the status code is 401 (Unauthorized).

#### Returns

`boolean`

True if the status code is 401, otherwise false.

***

### isValidateable()

> **isValidateable**(): `boolean`

Defined in: [src/OutgoingHttpResponse.ts:629](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L629)

Check if the response is validateable.

#### Returns

`boolean`

True if the response has Last-Modified or ETag headers, otherwise false.

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

***

### prepare()

> **prepare**(`event`, `container?`): `OutgoingHttpResponse` \| `Promise`\<`OutgoingHttpResponse`\>

Defined in: [src/OutgoingHttpResponse.ts:640](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L640)

Prepare the response before sending.

#### Parameters

##### event

[`IncomingHttpEvent`](../../IncomingHttpEvent/classes/IncomingHttpEvent.md)

The incoming HTTP event.

##### container?

`Container`

The service container.

#### Returns

`OutgoingHttpResponse` \| `Promise`\<`OutgoingHttpResponse`\>

The current instance of the response for chaining.

#### Overrides

`OutgoingResponse.prepare`

***

### prepareContentHeaders()

> `protected` **prepareContentHeaders**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:717](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L717)

Prepare content-related headers such as Content-Length and ETag.

#### Returns

`this`

The current instance of the response for chaining.

***

### prepareCookies()

> `protected` **prepareCookies**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:831](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L831)

Prepare cookies by setting the appropriate headers.

#### Returns

`this`

The current instance of the response for chaining.

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

#### Overrides

`OutgoingResponse.setContent`

***

### setContentHeaders()

> `protected` **setContentHeaders**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:733](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L733)

Set content headers such as Content-Length and ETag.

#### Returns

`this`

The current instance of the response for chaining.

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

***

### setContentTypeIfNeeded()

> `protected` **setContentTypeIfNeeded**(): `this`

Defined in: [src/OutgoingHttpResponse.ts:679](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L679)

Set the content type if it's not already set.

#### Returns

`this`

The current instance of the response for chaining.

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

#### Overrides

`OutgoingResponse.setStatus`

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

***

### create()

> `static` **create**\<`T`\>(`options`): `T`

Defined in: [src/OutgoingHttpResponse.ts:45](https://github.com/stonemjs/http-core/blob/0d369869add0f1630e9b5b2cd1421e57ee8d3865/src/OutgoingHttpResponse.ts#L45)

Create an instance of OutgoingHttpResponse.

#### Type Parameters

##### T

`T` *extends* `OutgoingHttpResponse` = `OutgoingHttpResponse`

#### Parameters

##### options

[`OutgoingHttpResponseOptions`](../interfaces/OutgoingHttpResponseOptions.md)

Options for the outgoing HTTP response.

#### Returns

`T`

A new instance of OutgoingHttpResponse.

#### Overrides

`OutgoingResponse.create`
