---
title: Event Handler
---

Incoming events represent the category of external events to Stone.js, meaning events originating from the platform. These events may have specific characteristics depending on the platform or context. Currently, `IncomingHttpEvent` is the only specific type, representing all incoming HTTP events in the context of an HTTP application.

## Accessing Events

All `IncomingEvent` instances are accessible from handlers, such as your main handler or route handlers (e.g., controllers).

::: important
When working within the context of the Router, an [`EventContext`](./routing.md#eventcontext) is passed to all route handlers instead of an `IncomingEvent`. This topic will be covered in more detail in the following section.
:::

The incoming event is accessible within the `handle` method of the main handler, which takes the incoming event as a parameter and returns a response, as we will see in the next section:

::: code-tabs#js

@tab:active JavaScript

```js
@StoneApp()
export class Application {
  /**
   * Event Handler
   * 
   * @param {IncomingEvent} event
  */
  handle (event) {
    // Return response
  }
}
```

@tab TypeScript

```ts
import { IncomingEvent } from '@stone-js/core'
import { StoneApp } from '@stone-js/core/decorators'

@StoneApp()
export class Application {
  /**
   * Event Handler
   * 
   * @param {IncomingEvent} event
  */
  handle (event: IncomingEvent) {
    // Return response
  }
}
```
:::

## IncomingEvent

`IncomingEvent` represents all generic incoming events that do not require specific handling beyond accessing the incoming data. For example, a CLI command is represented by an `IncomingEvent`, with all user-provided inputs constituting the incoming data. In the context of an AWS Lambda function, which takes an `event` and a `context` as parameters, the `event` object constitutes the incoming data.

### Accessing Data

Suppose your incoming data is structured as follows:

```js
{
  user: {
    fullname: 'John Doe',
    phone: {
      home: 'XXXXXX'
    }
  }
}
```

To access this data, use the powerful `get` method, which takes the key of the data to access:

```js
const user = event.get('user')
```

You can also use **deep string dot notation**:

```js
const userPhoneHome = event.get('user.phone.home')
```

It also takes a second parameter, which is a default value if the requested key does not exist:

```js
const isAdmin = event.get('user.isAdmin', false)
```

### Adding Data

You can also add data to your event object in addition to the incoming data. Generally, adding data is done from within middleware.

To add data, use the powerful `set` method, which takes the key and value of the data to add:

```js
event.set('permissions', [])
```

You can also use **deep string dot notation**:

```js
event.set('user.isAdmin', false)
```

In summary, `IncomingEvent` serves primarily to access incoming data, making it very generic and suitable for a wide range of use cases.

## IncomingHttpEvent

`IncomingHttpEvent` is a specific type of `IncomingEvent` that represents all incoming HTTP requests in Stone.js. Given its nature, it exposes a comprehensive and unique API to access HTTP elements, regardless of the request's origin.

The `IncomingHttpEvent` provides various properties and methods to access and inspect incoming HTTP requests. Here, we will focus on the most important ones. For more details, please refer to the [API](https://github.com/stonemjs/http-core/blob/main/src/IncomingHttpEvent.mjs).

### Accessing URL Components

For example, consider this URL: `http://user:pass@site.com:80/pa/th?q=val#hash`, represented by this image:

![URL components](/assets/image/url_components.png)

Here’s how to access this URL and its components:

```js
event.url // returns the full URL
event.uri // returns "http://user:pass@site.com:80/pa/th?q=val#hash"
event.protocol // returns "http"
event.host // returns "site.com:80"
event.hostname // returns "site.com"
event.path // returns "/pa/th?q=val"
event.pathname // returns "/pa/th"
event.segments // returns ['pa', 'th']
event.queryString // returns "?q=val"
event.query // returns URLSearchParams { 'q' => 'val' }
event.hash // returns "#hash"
```

### Accessing the Method

You can easily access or inspect the request method:

```js
// Get HTTP method
event.method // returns 'GET'

// Inspect method
event.isMethod('GET') // returns `true` or `false`
event.isMethodSafe() // returns `true` for ['GET', 'HEAD', 'OPTIONS', 'TRACE']
event.isMethodCacheable() // returns `true` for ['GET', 'HEAD']
```

### Accessing Headers

You can easily access or inspect the request headers.

Retrieve all headers via the `headers` getter which is an instance of [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers):

```js
// Get Headers
event.headers // returns Headers
```

To retrieve a header, use the `getHeader` method, which takes the header name and a default value to return if the header does not exist:

```js
// Get header
event.getHeader('authorization') // returns "Bearer XXXXXX"

// Default value
event.getHeader('x-custom-header', 'my-header') // returns "my-header"
```

You can also inspect headers using the `hasHeader` method:

```js
// Has header
event.hasHeader('authorization') // returns `true` or `false`
```

### Accessing Cookies

Stone.js provides a convenient API for retrieving and inspecting cookies.

You can retrieve all cookies via the `cookies` getter, which returns a collection of cookies:

```js
// Get cookies
event.cookies // returns CookieCollection
```

To retrieve a cookie, use the `getCookie` method, which takes the cookie name and a default value to return if the cookie does not exist:

```js
// Get cookie
event.getCookie('my-cookie') // returns "Cookie"
// Same as
event.cookies.get('my-cookie') // returns "Cookie"

// Default value
event.getCookie('my-cookie', 'my-cookie') // returns "my-cookie"
// Same as
event.cookies.get('my-cookie', 'my-cookie') // returns "my-cookie"
```

You can also inspect cookies using the `hasCookie` method:

```js
// Has cookie
event.hasCookie('my-cookie') // returns `true` or `false`
// Same as
event.cookies.has('my-cookie') // returns `true` or `false`
```

### Accessing the Body

To retrieve the request body, use the `body` getter:

```js
// Get request body
event.body // returns { foo: { bar: 'baz' } }
```

You can also access elements within the body using **deep string dot notation** in the case of a JSON request using the `json` method:

```js
// Get request body element
event.json('foo.bar') // returns 'baz'

// Default value
event.json('foo.bar.baz', 'Doe') // returns 'Doe'
```

You can inspect the body of a JSON request using the `hasJson` method:

```js
// Has body element
event.hasJson('foo.bar') // returns `true` or `false`
```

### Content Negotiation

Stone.js provides several getters and methods to inspect the content types requested by the incoming request, useful for content negotiation.

You can use the following getters to access the elements accepted by the request:

```js
event.types // returns ['application/json']
event.charsets // returns ['utf-8']
event.encodings // returns ['gzip']
event.languages // returns ['en-US']

// Get content-type
event.contentType // returns 'application/json'
// Get content-type charset
event.charset // returns 'utf-8'
```

You can use the following methods to inspect the elements accepted by the request:

```js
// Checks if the request is one of the types
// If the request has no body, even if there is a Content-Type header, 
// then null is returned. 
// If the Content-Type header is invalid or does not match any of the types, 
// then false is returned. Otherwise, a string of the type that matched is returned.
event.is(['urlencoded', 'json', 'multipart']) // returns 'json'

// Returns the first accepted type.
// If nothing in types is accepted, then false is returned.
event.acceptsTypes('json', 'html')

// Returns the first accepted encoding.
// If nothing in encodings is accepted, then false is returned.
event.acceptsEncodings('gzip', 'deflate')

// Returns the first accepted charset.
// If nothing in charsets is accepted, then false is returned.
event.acceptsCharsets('utf-8')

// Returns the first accepted language.
// If nothing in languages is accepted, then false is returned.
event.acceptsLanguages('en-US')
```

### Accessing Files

Stone.js provides several getters and methods to retrieve and inspect uploaded files.

Uploaded files are accessible via the `files` getter. The `files` getter returns an object where keys are field names and values are arrays of [`UploadedFile`](https://github.com/stonemjs/http-core/blob/main/src/file/UploadedFile.mjs) instances.

This structure allows you to efficiently manage multiple files uploaded under the same field name, giving you detailed control over each uploaded file.

```js
// Get uploaded files
const files = event.files
const documents = files.documents // returns UploadedFile[]
```

You can also retrieve files via the `getFile` method:

```js
// Get uploaded files
const documents = event.getFile('documents') // returns UploadedFile[]
```

You can filter uploaded files:

```js
// Get filtered uploaded files
const files = event.filterFiles(['documents', 'images'])
const documents = files.documents // returns UploadedFile[]
```

You can check for the existence of a file using the `hasFile` method:

```js
// Check if uploaded files exist
event.hasFile('documents') // returns `true` or `false`
```

You can verify if the file is valid using the `isValid` method of [`UploadedFile`](https://github.com/stonemjs/http-core/blob/main/src/file/UploadedFile.mjs):

```js
// Get the first valid file
const document = event.getFile('documents').find(document => document.isValid())
```

You can access file information using these methods:

```js
// Get the first valid file
const document = event.getFile('documents').find(document => document.isValid())
const filePath = document.getPath()
const fileSize = document.getSize()
const mimeType = document.getClientMimeType()
const fileName = document.getClientOriginalName()
const extension = document.getClientOriginalExtension()
const guessedExtension = document.guessClientExtension()
```

### Saving Files

You can save a file using the `move` method, which takes the relative path of the directory where the file will be saved as a mandatory parameter and an optional parameter to specify the name used for saving the file:

```js
// Get the first valid file
const document = event.getFile('documents').find(document => document.isValid())

// Save with client filename
document.move('./files-directory/')

// Save with provided filename
document.move('./files-directory/', 'file-doc-01')
```

### Metadata

Stone.js allows you to add and retrieve data within an HTTP event, known as metadata. These can be added from middleware using the `set` method:

```js
event.set('customData', { foo: { bar: 'baz' } })
```

You can retrieve all metadata using the `getMetadata` method:

```js
const metadata = event.getMetadata() // { customData: { foo: { bar: 'baz' } } }
```

You can also access metadata using **deep string dot notation** with the `metadata` method:

```js
// Get bar data
const barData = event.metadata('customData.foo.bar') // returns 'baz'

// Default value
const bazData = event.metadata('customData.foo.baz', 'Doe') // returns 'Doe'
```

### Smart Get

The `get` method in the `IncomingHttpEvent` class is a smart and versatile function designed to retrieve request data efficiently. 

It follows a prioritized sequence:

1. **Route Parameters**: First, it checks if the data exists in the route parameters.
2. **Request Body**: If not found, it looks into the request body.
3. **Query Parameters**: Next, it searches within the query parameters.
4. **Headers**: Next, it searches within the headers.
5. **Cookies**: Next, it searches within the cookies.
6. **Metadata**: If the data is still not found, it checks the metadata.
7. **Default**: Finally, if none of the above sources contain the data, it returns a provided default value.

The `get` method ensures that the most relevant data is retrieved in an intelligent and prioritized manner. 
Additionally, you can use the **deep string dot notation** syntax to retrieve nested data, which applies only to the body, query parameters, and metadata.

```js
// Go and search where you can find the name 
// by following the prioritized sequence
const name = event.get('name', 'Stone.js')

// Get user fullname using Deep string dot notation
const fullname = event.get('user.fullname', 'Jonh Doe')
```

This feature provides a flexible and powerful way to access deeply nested values within your request data.

### Other Utilities

Other useful getters to retrieve and inspect HTTP elements:

- `event.ip`: The IP address
- `event.ips`: The IP addresses
- `event.isSecure`: Checks if the request is secure (`https`)
- `event.isXhr` / `event.isAjax`: Checks if the request is an `XMLHttpRequest`
- `event.userAgent`: The user agent
- `event.isPrefetch`: Checks if it is a prefetch request

## Configurations

Stone.js allows you to apply configurations on how incoming events will be created by adapters. These configurations serve to filter and validate system inputs and raise exceptions when certain requirements are not met.

Several checks and validations are performed at the integration layer. If something is wrong, an error is immediately returned to the user, enhancing system security by preventing invalid events from propagating to higher layers.

### IncomingHttpEvent

To apply configurations on how incoming HTTP events will be constructed by HTTP adapters, use the explicit API by exporting the HTTP module configurations to `app/config/HttpConfig.mjs` or `app/config/HttpConfig.ts`:

```sh
npm run export @stone-js/http-core
```

Once the configurations are exported, you can customize them according to your needs. All configurations are commented for easier understanding.

#### Trusted Proxies

When your application is behind a proxy, the proxy may forward the request to your server with modified information such as the protocol, IP address, or hostname, even if the original request from the client had different values. To ensure your application can detect and use the correct original information, you must specify which proxies are trusted.

You can use one of these configurations to provide either a list of trusted proxies `app.adapter.proxies.trusted` or a list of untrusted proxies `app.adapter.proxies.untrusted`. Use either one, not both simultaneously. They take a list of IP addresses or CIDR ranges as values.

```js
@Configuration()
export class HttpConfig {
  getConfig () {
    return {
      app: {
        adapter: {
          proxies: {
            trusted: ['127.0.0.0/8', '10.0.0.0/8'],
            untrusted: ['127.0.0.0/255.0.0.0', '192.168.0.0/255.255.0.0']
          }
        }
      }
    }
  }
}
```

In cases where IP addresses are unknown, you can use `*` to allow all proxies or block all proxies:

```js
{
  proxies: {
    trusted: ['*'],
    untrusted: ['*']
  }
}
```