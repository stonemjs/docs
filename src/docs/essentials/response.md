---
title: Outgoing Responses
---

`OutgoingResponse` represents a category of external events created by Stone.js and directed towards the platform. These events are transformed into platform-specific events at the integration layer.
These events may have specific characteristics depending on the context. Currently, `OutgoingHttpResponse` is the only specific type, representing all outgoing HTTP events in the context of an HTTP application.
It is important to know that all handlers, including the main handler and route handlers, must return a response.

## OutgoingResponse

`OutgoingResponse` represents all generic outgoing events without any specific characteristics regarding the outgoing data. It contains only the body and status of the data to be returned to the platform.

### Creating Responses

Creating an `OutgoingResponse` object is simple. It takes the content as a mandatory parameter, with optional status code and status message.

```js
import { OutgoingResponse } from '@stone-js/core'
import { StoneApp } from '@stone-js/core/decorators'

@StoneApp()
export class Application {
  handle(event) {
    return new OutgoingResponse({ fullname: 'John Doe' })
  }
}
```

You can also use the factory method `create`:

```js
import { OutgoingResponse } from '@stone-js/core'
import { StoneApp } from '@stone-js/core/decorators'

@StoneApp()
export class Application {
  handle(event) {
    return OutgoingResponse.create({ fullname: 'John Doe' })
  }
}
```

As you can see, the usage of `OutgoingResponse` is very simple. It serves just to return data towards the platform, making it very generic and suitable for a wide range of use cases.

## OutgoingHttpResponse

`OutgoingHttpResponse` is a specific type of `OutgoingResponse` that represents all outgoing HTTP responses in Stone.js. Given its nature, it exposes a complete and unique API for constructing HTTP responses, regardless of the destination of the response.

`OutgoingHttpResponse` provides various properties and methods for constructing and inspecting outgoing HTTP responses. Here, we will focus on the most important ones. For more details, please refer to the [API documentation](https://github.com/stonemjs/http-core/blob/main/src/OutgoingHttpResponse.mjs).

### Installation

The HTTP package is not installed by default in all Stone.js projects except for HTTP projects.

::: important info
If you created your Stone.js project using the `create-stone` utility and chose the `api` template, the HTTP package should already be installed and ready to use.
:::

The HTTP package is available on the [npm registry](https://www.npmjs.com) and can be installed as follows:

::: code-tabs#shell
@tab:active npm

```bash
npm i @stone-js/http-core
```

@tab yarn

```bash
yarn add @stone-js/http-core
```

@tab pnpm

```bash
pnpm add @stone-js/http-core
```
:::

### Creating Responses

Creating an `OutgoingHttpResponse` object is simple. It takes the response body as a mandatory parameter, with optional status code and headers.

```js
import { StoneApp } from '@stone-js/core/decorators'
import { OutgoingHttpResponse } from '@stone-js/http-core'

@StoneApp()
export class Application {
  handle(event) {
    return new OutgoingHttpResponse({ fullname: 'John Doe' }, 200)
  }
}
```

You can also use the factory method `create`:

```js
import { StoneApp } from '@stone-js/core/decorators'
import { OutgoingHttpResponse } from '@stone-js/http-core'

@StoneApp()
export class Application {
  handle(event) {
    return OutgoingHttpResponse.create({ fullname: 'John Doe' }, 200)
  }
}
```

#### Setting Status

You can add or change the status code and message at any time using `setStatus`, which takes the status code and status message as parameters:

```js
return OutgoingHttpResponse
  .create({ fullname: 'John Doe' })
  .setStatus(200, 'Ok')
```

The status message is optional.

#### Setting Headers

You can add headers to your response at creation:

```js
return OutgoingHttpResponse
  .create({ fullname: 'John Doe' }, 200, { 'Content-Type': 'application/json' })
```

You can also use various chainable methods dedicated to headers:

##### `setHeaders`

Allows adding multiple headers at once and accepts an `Object`, `Map`, or [`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers) as parameters:

```js
return response.setHeaders({ 'Content-Type': 'application/json' })
```

##### `setHeader`

Allows adding a single header at a time and takes the header name and value as parameters:

```js
return response.setHeader('Content-Type', 'application/json')
```

##### `appendHeader`

Allows adding a new value to an existing header in a `Headers` object or adds the header if it does not already exist. It takes the header name and value as parameters:

```js
return response
  .appendHeader('Vary', 'Cookie')
  .appendHeader('Vary', 'Accept-Encoding')
```

#### Other Methods

You can use these getters and methods to access, inspect, or remove headers:

```js
response.headers // returns Headers { 'Content-Type': 'application/json' }
response.getHeaders() // returns Headers { 'Content-Type', 'application/json' }
response.getHeaders(true) // returns Map { 'Content-Type', 'application/json' }
response.getHeaderNames() // returns ['Content-Type']
response.hasHeader('Content-Type') // returns `true` or `false`
response.removeHeader('Content-Type')
```

### Setting Cookies

You can also use various chainable methods dedicated to cookies:

#### `setCookie`

Allows adding a cookie and takes the cookie name, value, and options as parameters:

```js
return response.setCookie('foo', 'bar', { secure: true, httpOnly: true })
```

The complete list of cookie options:

```ts
type cookieOptions = {
    path: string;
    expires: Date;
    domain: string;
    maxAge: number;
    secure: boolean;
    sameSite: string;
    httpOnly: boolean;
};
```

#### `clearCookie`

Allows removing a cookie and takes the cookie name to remove as a parameter:

```js
return response.clearCookie('foo')
```

#### `clearCookies`

Allows removing all cookies:

```js
return response.clearCookies()
```

### Cookie Encryption

By default, all cookies generated by Stone.js are encrypted and signed so they cannot be modified or read by the client.

### Redirect Response

To perform a redirect, use the `RedirectResponse` class which takes the redirect URL and the status code as parameters, defaulting to `302` for a temporary redirect:

```js
import { RedirectResponse } from '@stone-js/http-core'
...
return RedirectResponse.create('https://site.com', 302)
```

### JSON Response

To return a JSON response, use the `JsonResponse` class which serializes the response body using `JSON.stringify()` and adds the necessary headers like `Content-Type: 'application/json'`:

```js
import { JsonResponse } from '@stone-js/http-core'
...
return JsonResponse.create({ foo: 'bar' })
```

To return a JSONP response, use the `JsonpResponse` class and provide the `callback` using the `setCallback` method:

```js
import { JsonpResponse } from '@stone-js/http-core'
...
return JsonpResponse
  .create({ foo: 'bar' })
  .setCallback(event.get('callback'))
```

### File Response

To return a file as a response to the user, use the factory method `download` of the `BinaryFileResponse` class which takes the absolute path to the file to be downloaded or an instance of [`File`](https://github.com/stonemjs/http-core/blob/main/src/file/File.mjs):

```js
import { File, BinaryFileResponse } from '@stone-js/http-core'
...
return BinaryFileResponse.download('/absolute/path/to/your/file')

// With file instance
return BinaryFileResponse.download(new File('/absolute/path/to/your/file'))
```

To allow the user to view the file in the browser, such as an image or PDF, rather than downloading it, use the factory method `file` of the same class:

```js
import { File, BinaryFileResponse } from '@stone-js/http-core'
...
return BinaryFileResponse.file('/absolute/path/to/your/file')

// With file instance
return BinaryFileResponse.file(new File('/absolute/path/to/your/file'))
```

### HttpResponse Utility Class

It can be challenging to remember all these classes just to return a response, which is why Stone.js provides the utility class [`HttpResponse`](https://github.com/stonemjs/http-core/blob/main/src/HttpResponse.mjs) that simplifies managing HTTP responses through its API. It simplifies common tasks such as setting headers, status codes, and body content.

```js
import { HttpResponse } from '@stone-js/http-core'

// Return JSON response
return HttpResponse.json({ foo: 'bar' })

// Return no content response
return HttpResponse.noContent()

// Return bad request response
return HttpResponse.badRequest()
```

Please refer to its [API](https://github.com/stonemjs/http-core/blob/main/src/HttpResponse.mjs) for more details.

## Configuration

To apply global configurations to all your outgoing HTTP responses, use the explicit API by exporting the HTTP module configurations to `app/config/HttpConfig.mjs` or `app/config/HttpConfig.ts`:

```sh
npm run export @stone-js/http-core
```

Once the configurations are exported, you can customize them according to your needs. All configurations are commented for easier understanding.