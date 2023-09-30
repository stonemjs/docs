---
title: Usage
---

To effectively utilize the `HTTP Core` library, you can leverage its comprehensive API to handle HTTP requests and responses seamlessly. 
The provided classes and methods enable you to manage HTTP communication efficiently.

This section will guide you through practical examples and best practices, 
ensuring that your HTTP interactions are both robust and adaptable to your application's needs.

## Handling Incoming Requests

The `IncomingHttpEvent` class represents an incoming HTTP request.
It provides properties and methods to access the request's details such as the HTTP verb, URL, headers, and body.

::: code-tabs#js
@tab:active JavaScript

```js
import { IncomingHttpEvent } from '@stone/http-core'

// Event instance
const httpEvent = IncomingHttpEvent.create({})

// Available props
httpEvent.method       // Request method (e.g., 'GET')
httpEvent.url          // Request URL (e.g., 'https://example.com/api/data')
httpEvent.headers      // Request headers (e.g., { 'Accept': 'application/json' })
httpEvent.body         // Request body (e.g., JSON.stringify({ key: 'value' }))
httpEvent.host         // Request host (e.g., 'example.com')
httpEvent.protocol     // Request protocol (e.g., 'https')
httpEvent.params       // URL parameters (e.g., { id: '123' })
httpEvent.query        // Query parameters (e.g., { search: 'test' })
httpEvent.cookies      // Request cookies (e.g., { session: 'abcd1234' })
httpEvent.files        // Uploaded files (e.g., [])
httpEvent.ip           // Request IP address (e.g., '192.168.1.1')
httpEvent.userAgent    // User agent string (e.g., 'Mozilla/5.0')
httpEvent.referrer     // Referrer URL (e.g., 'https://referrer.com')
httpEvent.path         // Request path (e.g., '/api/data')

// Available methods
httpEvent.hasHeader('accept')
httpEvent.getHeader('accept', null)

// Check the IncomingHttpEvent on Github:
// https://github.com/stonemjs/http-core/blob/main/src/IncomingHttpEvent.mjs
```

@tab TypeScript

```ts
import { IncomingHttpEvent } from '@stone/http-core'

// Event instance
const httpEvent = IncomingHttpEvent.create({})

// Available props
httpEvent.method       // Request method (e.g., 'GET')
httpEvent.url          // Request URL (e.g., 'https://example.com/api/data')
httpEvent.headers      // Request headers (e.g., { 'Accept': 'application/json' })
httpEvent.body         // Request body (e.g., JSON.stringify({ key: 'value' }))
httpEvent.host         // Request host (e.g., 'example.com')
httpEvent.protocol     // Request protocol (e.g., 'https')
httpEvent.params       // URL parameters (e.g., { id: '123' })
httpEvent.query        // Query parameters (e.g., { search: 'test' })
httpEvent.cookies      // Request cookies (e.g., { session: 'abcd1234' })
httpEvent.files        // Uploaded files (e.g., [])
httpEvent.ip           // Request IP address (e.g., '192.168.1.1')
httpEvent.userAgent    // User agent string (e.g., 'Mozilla/5.0')
httpEvent.referrer     // Referrer URL (e.g., 'https://referrer.com')
httpEvent.path         // Request path (e.g., '/api/data')

// Available methods
httpEvent.hasHeader('accept')
httpEvent.getHeader('accept', null)

// Check the IncomingHttpEvent on Github:
// https://github.com/stonemjs/http-core/blob/main/src/IncomingHttpEvent.mjs
```
:::

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
Additionally, you can use the **deep string dot notation** syntax to retrieve nested data, 
which applies only to body and query parameters. 

::: code-tabs#js
@tab:active JavaScript

```js
// Go and search where you can find the name 
// by following the prioritized sequence
const name = httpEvent.get('name', 'Stone.js')

// Get user fullname using Deep string dot notation
const fullname = httpEvent.get('user.fullname', 'Jonh Doe')

// Print them
console.log(name, fullname)
```

@tab TypeScript

```ts
const name = httpEvent.get('name', 'Stone.js')
console.log(name)
```
:::

This feature provides a flexible and powerful way to access deeply nested values within your request data.

### Handling File Uploads

The `UploadedFile` class manages file uploads by providing properties and methods to access file details and save them to the server. 

Uploaded files can be accessed through the `files` property in the `IncomingHttpEvent` instance. 
The `files` property is an object where keys are field names and values are arrays of `UploadedFile` instances. 

This structure allows you to handle multiple files uploaded under the same field name efficiently, giving you detailed control over each uploaded file.


::: code-tabs#js
@tab:active JavaScript

```js
// Get uploaded files
const files = httpEvent.files

// Get uploaded files filtered by field name
const files = httpEvent.filterFiles(['documents', 'images'])

// Save documents
files.documents.forEach((file) => file.move('./documents-directory/'))

// Save images with new name
files.images.forEach((file, i) => file.move('./image-directory/', `file-${i}`))

// Save files with default name
Object
  .entries(files)
  .forEach(([fieldName, uploadedFiles]) => {
    uploadedFiles.forEach((file) => file.move('./files-directory/'))
  })

// Save files with new name
Object
  .entries(files)
  .forEach(([fieldName, uploadedFiles]) => {
    uploadedFiles.forEach((file, i) => file.move('./files-directory/', `file-${i}`))
  })
```

@tab TypeScript

```ts
const name = httpEvent.get('name', 'Stone.js')
console.log(name)
```
:::


## Sending Responses

The `OutgoingHttpResponse` class is used to create and send HTTP responses. It allows setting headers, status codes, and the response body.

::: code-tabs#js
@tab:active JavaScript

```js
// Response instance
const response = OutgoingHttpResponse.create({ name: 'Stone.js' }, 200, { 'application/json' })

// or
const response = OutgoingHttpResponse.create({ name: 'Stone.js' })

// Set status code
response.setStatus(200)

// Set header
response.setHeader('Content-Type', 'application/json')

// Set cookie
response.setCookie('session_id', '********', { httpOnly: true })

// Encrypt cookies
response.secureCookies('secret_salt_value')

// Check the OutgoingHttpResponse on Github:
// https://github.com/stonemjs/http-core/blob/main/src/OutgoingHttpResponse.mjs
```

@tab TypeScript

```ts
// Response instance
const response = OutgoingHttpResponse.create({ name: 'Stone.js' }, 200, { 'application/json' })

// or
const response = OutgoingHttpResponse.create({ name: 'Stone.js' })

// Set status code
response.setStatus(200)

// Set header
response.setHeader('Content-Type', 'application/json')

// Set cookie
response.setCookie('session_id', '********', { path: '/', httpOnly: true })

// Encrypt cookies
response.secureCookies('secret_salt_value')

// Check the OutgoingHttpResponse on Github:
// https://github.com/stonemjs/http-core/blob/main/src/OutgoingHttpResponse.mjs
```
:::

### Sending Binary Files

The `BinaryFileResponse` class is a specialized response for sending binary files, such as PDFs, images, or other binary data.

::: code-tabs#js
@tab:active JavaScript

```js
// Response instance
const response = BinaryFileResponse.create('/path/to/file.pdf')

// Set status code
response.setStatus(200)

// Set header
response.setHeader('Content-Type', 'application/json')
```

@tab TypeScript

```ts
// Response instance
const response = BinaryFileResponse.create('/path/to/file.pdf')

// Set status code
response.setStatus(200)

// Set header
response.setHeader('Content-Type', 'application/json')
```
:::

### JSON Responses

The `JsonResponse` class sends JSON responses with appropriate headers.

::: code-tabs#js
@tab:active JavaScript

```js
// Response instance
const response = JsonResponse.create({ success: true })

// Set status code
response.setStatus(200)
```

@tab TypeScript

```ts
// Response instance
const response = JsonResponse.create({ success: true })

// Set status code
response.setStatus(200)
```
:::

### JSONP Responses

The `JsonpResponse` class sends JSONP responses for cross-domain requests.

::: code-tabs#js
@tab:active JavaScript

```js
// Response instance
const response = JsonpResponse.create({ success: true })

// Set status code
response.setStatus(200)

// Set callback function
response.setCallback('callbackFunction')
```

@tab TypeScript

```ts
// Response instance
const response = JsonpResponse.create({ success: true })

// Set status code
response.setStatus(200)

// Set callback function
response.setCallback('callbackFunction')
```
:::

### Redirect Responses

The RedirectResponse class handles HTTP redirects.

::: code-tabs#js
@tab:active JavaScript

```js
// Response instance
const response = RedirectResponse.create('https://example.com')

// Set status code
response.setStatus(302)
```

@tab TypeScript

```ts
// Response instance
const response = RedirectResponse.create('https://example.com')

// Set status code
response.setStatus(302)
```
:::

### HttpResponse Utility Class

The `HttpResponse` utility class provides additional methods for handling HTTP responses. 
It simplifies common tasks such as setting headers, status codes, and body content.

::: code-tabs#js
@tab:active JavaScript

```js
// Available static methods
HttpResponse.ok(...)
HttpResponse.noContent()
HttpResponse.badRequest(...)
HttpResponse.unauthorized(...)
HttpResponse.forbidden(...)
HttpResponse.notFound(...)
HttpResponse.methodNotAllowed(...)
HttpResponse.serverError(...)
HttpResponse.unavailable(...)
HttpResponse.html(...)
HttpResponse.json(...)
HttpResponse.jsonp(...)
HttpResponse.file(...)
HttpResponse.redirect(...)
HttpResponse.empty(...)

// Check the HttpResponse on Github:
// https://github.com/stonemjs/http-core/blob/main/src/HttpResponse.mjs
```

@tab TypeScript

```ts
// Available static methods
HttpResponse.ok(...)
HttpResponse.noContent()
HttpResponse.badRequest(...)
HttpResponse.unauthorized(...)
HttpResponse.forbidden(...)
HttpResponse.notFound(...)
HttpResponse.methodNotAllowed(...)
HttpResponse.serverError(...)
HttpResponse.unavailable(...)
HttpResponse.html(...)
HttpResponse.json(...)
HttpResponse.jsonp(...)
HttpResponse.file(...)
HttpResponse.redirect(...)
HttpResponse.empty(...)

// Check the HttpResponse on Github:
// https://github.com/stonemjs/http-core/blob/main/src/HttpResponse.mjs
```
:::

## Conclusion

The `HTTP Core` Library offers essential tools for handling HTTP requests and responses within the **Stone.js** framework. 
By leveraging these classes, you can build robust and efficient web applications that seamlessly integrate with platform-specific HTTP handling.

This documentation covers the basic usage and installation of the `HTTP Core` Library. For more advanced topics and contributions, please refer to the repository on [Github](https://github.com/stonemjs/http-core/blob/main/).