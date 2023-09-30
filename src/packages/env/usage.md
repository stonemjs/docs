---
title: Usage
---

`Stone Env` offers a fluent API to retrieve, format, and validate your environment variables. 
The available methods are listed below:

### 1. `Env.get(key, options)`

Retrieves the environment variable specified by key with optional validation and formatting defined by `options`.

**Parameters:**

- `key` (string): The name of the environment variable.
- `options` (object|any): Optional settings or a default value.
  - `type` (string): The type of data to return, possible values are: `number`, `boolean`, `array`, `object`, `json`, `enum`, `email`, `host`, `url`, `string`
  - `format` (string): Only applied to string type. Validate the string against those values: `url`, `email`, `host`
  - `default` (any): The default value when variable is falsy

**Example:**

::: code-tabs#js
@tab:active JavaScript

```js
// Retrieving variables as mandatory when there is no default value
const appKey = Env.get('APP_KEY', { type: 'number' })
const appName = Env.get('APP_NAME', { type: 'string' })
const dbConfig = Env.get('DB_CONFIG', { type: 'object' })
const apiUrl = Env.get('API_URL', { type: 'string', format: 'url' })

// Retrieving variables as optional because of the default value
const envList = Env.get('ENV_LIST', { type: 'array', default: [] })
const isDev = Env.get('IS_DEV', { type: 'boolean', default: false })
const appKey = Env.get('APP_KEY', { type: 'number', default: 1234566 })
const appName = Env.get('APP_NAME', { type: 'string', default: 'Stone.js' })
```

@tab TypeScript

```ts
// Retrieving variables as mandatory when there is no default value
const appKey = Env.get('APP_KEY', { type: 'number' })
const appName = Env.get('APP_NAME', { type: 'string' })
const dbConfig = Env.get('DB_CONFIG', { type: 'object' })
const apiUrl = Env.get('API_URL', { type: 'string', format: 'url' })

// Retrieving variables as optional because of the default value
const envList = Env.get('ENV_LIST', { type: 'array', default: [] })
const isDev = Env.get('IS_DEV', { type: 'boolean', default: false })
const appKey = Env.get('APP_KEY', { type: 'number', default: 1234566 })
const appName = Env.get('APP_NAME', { type: 'string', default: 'Stone.js' })
```
:::

### 2. `Env.string(key, options)`

Retrieves the environment variable as a string. 
If the variable does not exist or is not a string, an exception is thrown unless a default value is provided.

**Parameters:**

- `key` (string): The name of the environment variable.
- `options` (object|any): Optional settings or a default value.

**Example:**

::: code-tabs#js
@tab:active JavaScript

```js
// Retrieving a mandatory variable
const appName = Env.string('APP_NAME')
const apiURL = Env.string('API_URL', { format: 'url' })
const appHost = Env.string('APP_HOST', { format: 'host' })
const appEmail = Env.string('CONTACT_EMAIL', { format: 'email' })

// Retrieving an optional variable with a default value
const appName = Env.string('APP_NAME', 'Stone.js')
const appHost = Env.string('APP_HOST', 'localhost')
const appEmail = Env.string('CONTACT_EMAIL', 'username@domain.ext')
const apiURL = Env.string('API_URL', { format: 'url', default: 'http://localhost' })
```

@tab TypeScript

```ts
// Retrieving a mandatory variable
const appName = Env.string('APP_NAME')
const apiURL = Env.string('API_URL', { format: 'url' })
const appHost = Env.string('APP_HOST', { format: 'host' })
const appEmail = Env.string('CONTACT_EMAIL', { format: 'email' })

// Retrieving an optional variable with a default value
const appName = Env.string('APP_NAME', 'Stone.js')
const appHost = Env.string('APP_HOST', 'localhost')
const appEmail = Env.string('CONTACT_EMAIL', 'username@domain.ext')
const apiURL = Env.string('API_URL', { format: 'url', default: 'http://localhost' })
```
:::

### 3. `Env.number(key, options)`

Retrieves the environment variable as a number. 
If the variable does not exist or is not a number, an exception is thrown unless a default value is provided.

**Parameters:**

- `key` (string): The name of the environment variable.
- `options` (object|any): Optional settings or a default value.

**Example:**

::: code-tabs#js
@tab:active JavaScript

```js
// Retrieving a mandatory variable
const maxUsers = Env.number('MAX_USERS')

// Retrieving an optional variable with a default value
const maxUsers = Env.number('MAX_USERS', 100)
```

@tab TypeScript

```ts
// Retrieving a mandatory variable
const maxUsers = Env.number('MAX_USERS')

// Retrieving an optional variable with a default value
const maxUsers = Env.number('MAX_USERS', 100)
```
:::

### 4. `Env.boolean(key, options)`

Retrieves the environment variable as a boolean. 
If the variable does not exist or is not a boolean, an exception is thrown unless a default value is provided.

**Parameters:**

- `key` (string): The name of the environment variable.
- `options` (object|any): Optional settings or a default value.

**Example:**

::: code-tabs#js
@tab:active JavaScript

```js
// Retrieving a mandatory variable
const isDev = Env.boolean('IS_DEV')

// Retrieving an optional variable with a default value
const isDev = Env.boolean('IS_DEV', true)
```

@tab TypeScript

```ts
// Retrieving a mandatory variable
const isDev = Env.boolean('IS_DEV')

// Retrieving an optional variable with a default value
const isDev = Env.boolean('IS_DEV', true)
```
:::

### 5. `Env.array(key, options)`

Retrieves the environment variable as an array. 
If the variable does not exist or is not a valid array, an exception is thrown unless a default value is provided.

**Parameters:**

- `key` (string): The name of the environment variable.
- `options` (object|any): Optional settings or a default value.
  - `separator` (string): The separator to split values into array, default is: `,`

**Example:**

```bash
# .env
LANGS=en,fr,es
```

::: code-tabs#js
@tab:active JavaScript

```js
// Retrieving a mandatory variable
const langs = Env.array('LANGS')
const langs = Env.array('LANGS', { separator: '-' })

// Retrieving an optional variable with a default value
const langs = Env.array('LANGS', ['en', 'fr'])
const langs = Env.array('LANGS', { default: ['en', 'fr']  separator: ',' })
```

@tab TypeScript

```ts
// Retrieving a mandatory variable
const langs = Env.array('LANGS')
const langs = Env.array('LANGS', { separator: '-' })

// Retrieving an optional variable with a default value
const langs = Env.array('LANGS', ['en', 'fr'])
const langs = Env.array('LANGS', { default: ['en', 'fr']  separator: ',' })
```
:::

### 6. `Env.object(key, options)`

Retrieves the environment variable as an object. 
If the variable does not exist or is not a valid object, an exception is thrown unless a default value is provided.

**Parameters:**

- `key` (string): The name of the environment variable.
- `options` (object|any): Optional settings.
  - `separator` (string): The separator to split values into object, default is: `,`

**Example:**

```bash
# .env
DB_CONFIG=dbName:name,dbPass:****
```

::: code-tabs#js
@tab:active JavaScript

```js
// Retrieving a mandatory variable
const dbConfig = Env.object('DB_CONFIG')
const dbConfig = Env.object('DB_CONFIG', { separator: ',' })

// Retrieving an optional variable with a default value
// Default must be used here to return a default value
const dbConfig = Env.object('DB_CONFIG', { default: { dbName: 'name' } })
```

@tab TypeScript

```ts
// Retrieving a mandatory variable
const dbConfig = Env.object('DB_CONFIG')
const dbConfig = Env.object('DB_CONFIG', { separator: ',' })

// Retrieving an optional variable with a default value
// Default must be used here to return a default value
const dbConfig = Env.object('DB_CONFIG', { default: { dbName: 'name' } })
```
:::

### 7. `Env.json(key, options)`

Retrieves the environment variable as a json. 
If the variable does not exist or is not a valid json, an exception is thrown unless a default value is provided.

**Parameters:**

- `key` (string): The name of the environment variable.
- `options` (object|any): Optional settings.

**Example:**

```bash
# .env
DB_CONFIG={"dbName":"name","dbPass":"****"}
```

::: code-tabs#js
@tab:active JavaScript

```js
// Retrieving a mandatory variable
const dbConfig = Env.json('DB_CONFIG')

// Retrieving an optional variable with a default value
// Default must be used here to return a default value
const dbConfig = Env.json('DB_CONFIG', { default: { dbName: 'name' } })
```

@tab TypeScript

```ts
// Retrieving a mandatory variable
const dbConfig = Env.json('DB_CONFIG')

// Retrieving an optional variable with a default value
// Default must be used here to return a default value
const dbConfig = Env.json('DB_CONFIG', { default: { dbName: 'name' } })
```
:::

### 8. `Env.enum(key, enums, defaultValue)`

Retrieves the environment variable as an enum. 
If the variable does not exist or is not a valid enum, an exception is thrown unless a default value is provided.

**Parameters:**

- `key` (string): The name of the environment variable.
- `enums` (array): Array of valid enum values.
- `defaultValue` (any): Default value if the variable is not set.

**Example:**

::: code-tabs#js
@tab:active JavaScript

```js
// Retrieving a mandatory variable
const logLevel = Env.enum('LOG_LEVEL', ['debug', 'info', 'warn', 'error'])

// Retrieving an optional variable with a default value
const logLevel = Env.enum('LOG_LEVEL', ['debug', 'info', 'warn', 'error'], 'info')
```

@tab TypeScript

```ts
// Retrieving a mandatory variable
const logLevel = Env.enum('LOG_LEVEL', ['debug', 'info', 'warn', 'error'])

// Retrieving an optional variable with a default value
const logLevel = Env.enum('LOG_LEVEL', ['debug', 'info', 'warn', 'error'], 'info')
```
:::

### 10. `Env.custom(key, validator, options)`

Retrieves the environment variable with a custom validator function.

**Parameters:**

- `key` (string): The name of the environment variable.
- `validator` (Function): Custom validation function.
- `options` (object|any): Optional settings, including a default value.

**Example:**

::: code-tabs#js
@tab:active JavaScript

```js
const customValue = Env.custom('CUSTOM_KEY', (key, value, options) => {
  // Custom validation logic
  return value ? String(value) : options.default;
}, { default: 'defaultValue' })
```

@tab TypeScript

```ts
import { Env, Options } from '@stone-js/env'

const customValue = Env.custom('CUSTOM_KEY', (key: string, value: unknown, options: Options) => {
  // Custom validation logic
  return value ? String(value) : options.default;
}, { default: 'defaultValue' })
```
:::

### 11. Other useful methods

Other useful string methods.

::: code-tabs#js
@tab:active JavaScript

```js
// Email
const adminEmail = Env.email('ADMIN_EMAIL', 'admin@example.com')
// URL
const apiUrl = Env.url('API_URL', 'https://api.example.com')
// Host
const dbHost = Env.host('DB_HOST', 'localhost')
```

@tab TypeScript

```ts
// Email
const adminEmail = Env.email('ADMIN_EMAIL', 'admin@example.com')
// URL
const apiUrl = Env.url('API_URL', 'https://api.example.com')
// Host
const dbHost = Env.host('DB_HOST', 'localhost')
```
:::

Check against `NODE_ENV` variable value

::: code-tabs#js
@tab:active JavaScript

```js
// Assert against `NODE_ENV` variable value
Env.is('production')

// Check if NODE_ENV === 'production'
Env.isProduction()

// Check if NODE_ENV === 'prod'
Env.isProd()

// Check if NODE_ENV !== 'production'
Env.isNotProduction()

// Check if NODE_ENV !== 'prod'
Env.isNotProd()

// Check if NODE_ENV === 'test' || NODE_ENV === 'testing'
Env.isTesting()
```

@tab TypeScript

```ts
// Assert against `NODE_ENV` variable value
Env.is('production')

// Check if NODE_ENV === 'production'
Env.isProduction()

// Check if NODE_ENV === 'prod'
Env.isProd()

// Check if NODE_ENV !== 'production'
Env.isNotProduction()

// Check if NODE_ENV !== 'prod'
Env.isNotProd()

// Check if NODE_ENV === 'test' || NODE_ENV === 'testing'
Env.isTesting()
```
:::

Clears the cached environment variables.

::: code-tabs#js
@tab:active JavaScript

```js
Env.clearCache()
```

@tab TypeScript

```ts
Env.clearCache()
```
:::

### Conclusion
Stone Env is a powerful and flexible library for managing environment variables in JavaScript applications. 
With its comprehensive API, you can easily retrieve and validate configuration values, 
ensuring that your application runs smoothly and reliably in any environment.