---
title: Parameters
---

Sometimes, we need to define dynamic segments for the `path` of our routes, 
to have different matches for the same route. 
These dynamic segments are known as **route parameters**.

## Dynamic Route

To define route parameters, we use either:
- `/users/{id}` curly braces syntax 
- `/users/:id` or colon syntax

For the sake of simplicity, we will use colon syntax `/users/:id` throughout the documentation. It is worth noting that there is no advantage or disadvantage to using either or both at the same time (which is not recommended).

You might wonder why two different syntaxes?\
The answer is simple: for preferences. Stone Router, being developer-friendly, provides multiple options and leaves the choice to developers.

### Path

To define route parameters, simply use colons `:`.

```js
{
  ...
  path: '/users/:id/articles/:slug',
  ...
}
```

Different values of `path` could correspond to:
- `/users/12/articles/javascript`
- `/users/jonh/articles/stone.js`

The `id` parameter will have respective values: `12` and `jonh`, and `slug` as `javascript` and `stone.js` respectively.

#### Prefix

We can also define prefixes for our dynamic segments.

```js
{
  ...
  path: '/users/user-:id/articles/article-:slug',
  ...
}
```

Different values of `path` could correspond to:
- `/users/user-12/articles/article-javascript`
- `/users/user-jonh/articles/article-stone.js`

The `id` parameter will have respective values: `12` and `jonh`, and `slug` as `javascript` and `stone.js` respectively.

### Domain

To make the domain dynamic, only curly braces `{}` should be used instead of colons `:`.

```js
{
  ..
  domain: '{subDomain}.example.com',
  ..
}
```

Different values of `domain` could correspond to:
- `dev.example.com`
- `admin.example.com`

The `subDomain` parameter will have respective values: `dev` and `admin`.

## Strict Route Segment

By default, paths are case-insensitive and do not consider the presence or absence of the trailing slash `/users/`.

This means that this path: `/ARticeS/javaScript/functions/` will match:
- this one: `/articles/javascript/functions`
- and this one: `/ARTICLES/javaScript/functions/`

To make route paths strict so they can be case-sensitive and consider the presence or absence of the trailing slash `/users/`, we set the `strict` property to `true`.

```js
{
  ...
  strict: true,
  ...
}
```

## Optional Parameter

To define optional route parameters, we use a question mark `?`.

```js
{
  domain: '{subDomain?}.example.com',
  path: '/users/:id/articles/:slug?',
}
```

Different values of `domain` could correspond to `dev.example.com` or `example.com`. And the `subDomain` parameter would have a value of `dev` or `null`.

Different values of `path` could correspond to:
- `/users/12/articles/javascript`
- `/users/12/articles/`
- `/users/12/articles`

And the `slug` parameter would have respective values: `javascript`, `null`, and `null`.

Notes:
- To avoid undesired behaviors, optional parameters should be defined at the end.

## Repeatable Parameter

Repeatable route parameters allow repeating route segments as many times as possible.
By default, parameters cannot contain `/` as a value, but this is possible through repeatable parameters.
Repeatable route parameters can be [mandatory](#mandatory-repeatable-parameter) or [optional](#optional-repeatable-parameter).

### Mandatory Repeatable Parameter

For mandatory repeatable parameters, we use a plus sign `+`, meaning that the parameter value should repeat at least once.

```js
{
  domain: '{subDomain+}.example.com',
  path: '/articles/:slug+',
}
```

Different values of `domain` could correspond to:
- `www.admin.dev.example.com`
- `admin.dev.example.com`
- `dev.example.com`
- And not `example.com`

The `subDomain` parameter would have respective values depending on the aforementioned matches:
- `www.admin.dev`
- `admin.dev`
- `dev`

Different values of `path` could correspond to:
- `/articles/javascript/functions/arrow-function`
- `/articles/javascript/functions`
- `/articles/javascript`
- And not `/articles`

With respective values for the `slug` parameter:
- `javascript/functions/arrow-function`
- `javascript/functions`
- `javascript`

### Optional Repeatable Parameter

For optional repeatable parameters, we use an asterisk `*`, to indicate that the parameter value could be absent or repeated multiple times.

```js
{
  domain: '{subDomain*}.example.com',
  path: '/articles/:slug*',
}
```

Different values of `domain` could correspond to:
- `www.admin.dev.example.com`
- `admin.dev.example.com`
- `dev.example.com`
- `example.com`

The `subDomain` parameter would have respective values depending on the aforementioned matches:
- `www.admin.dev`
- `admin.dev`
- `dev`
- `null`

Different values of `path` could correspond to:
- `/articles/javascript/functions/arrow-function`
- `/articles/javascript/functions`
- `/articles/javascript`
- `/articles`

With respective values for the `slug` parameter:
- `javascript/functions/arrow-function`
- `javascript/functions`
- `javascript`
- `null`

## Validation Rules

We can apply validation rules to our route parameters in two ways:
- [Implicit](#implicit-rules)
- [Explicit](#explicit-rules)

### Implicit Rules

Implicit rules are defined within route parameters.

```js
{
  domain: '{subDomain([a-z]+)}.example.com',
  path: '/users/:id(\\d+)/articles/:slug(.+)?',
  ...
}
```

Notes:
- Rules are defined within parentheses `([a-z]+)`, `(\\d+)`, and `(.+)`
- Rules must be Regex
- Backslashes in Regex must be escaped, so instead of : `\d+` we have: `\\d+`
- Rules can be used with optional parameters `:slug(.+)?`.

### Explicit Rules

Explicit rules are defined within the `rules` option.

```js
{
  domain: '{subDomain}.example.com',
  path: '/users/:id/articles/:slug?',
  rules: {
    id: /(\d+)/,
    slug: /(.+)/,
    subDomain: /[a-z]+/
  }
  ...
}
```

Notes:
- Values are Regex but they are not escaped as for Regex strings.
- Rules can be used with optional parameters `:slug?`.

Rules can be added or modified at runtime using the `setRules` and `addRule` methods from the route.

```js
route.addRule('id', /\d+/)
route.setRules({ id: /\d+/ })
```

### Global Rules

To apply common rules to all routes, we use the `setRules` and `addRule` methods from the router.

```js
router.addRule('id', /\d+/)
router.setRules({ id: /\d+/ })
```

Notes:
- The parameter value must be a Regex.


## Default Value

We can define default values for optional parameters. This value will be assigned to the route parameter when it is not defined in the request.
We can define default values for our route parameters in two ways:
- [Implicit](#implicit-default-values)
- [Explicit](#explicit-default-values)

### Implicit default values

Implicit default values are defined within route parameters using `=` mark.

```js
{
  domain: '{subDomain([a-z]+)?=defaultValue}.example.com',
  path: '/users/:id(\\d+)/articles/:slug(.+)?=defaultValue',
  ...
}
```

Notes:
- Default values are defined after the equal mark `=defaultValue`
- Default values must be the last item in the definition `:slug(.+)?=defaultValue`.

### Explicit default values

We use the `defaults` option to define explicit default values.

```js
{
  domain: '{subDomain?}.example.com',
  path: '/users/:id/articles/:slug?',
  defaults: {
    domain: 'dev',
    slug: 'default'
  }
}
```

For matches:
- `example.com/users/12/articles`
- `admin.example.com/users/12/articles/javascript`

The parameter values will be
- `{ domain: 'dev', id: 12, slug: 'default' }`
- `{ domain: 'admin', id: 12, slug: 'javascript' }`

Notes:
- Default values can only be set for optional parameters and will have no effect on mandatory parameters.

### Global Default Values

To define default values common to all routes, we use the `setDefaults` and `addDefault` methods from the router.

```js
router.addDefault('id', 12)
router.setDefaults({ id: 23 })
```