---
title: Usage
---

To effectively utilize the `Config` library, you can take advantage of its flexible 
API to manage your application's configuration settings seamlessly. 
The methods provided allow you to set, get, and manipulate configuration values efficiently, 
ensuring that your configuration management is both robust and adaptable.

The available methods are listed below:

## Creating a Config

This can be done by calling the `create` static factory method with an optional object of initial configuration options.

::: code-tabs#js
@tab:active JavaScript

```js
const config = Config.create({
  app: {
    name: 'MyApp',
    version: '1.0.0'
  }
})
```

@tab TypeScript

```ts
const config = Config.create({
  app: {
    name: 'MyApp',
    version: '1.0.0'
  }
});
```
:::

## Setting Configuration Values

You can set configuration values using the `set` method. This method allows setting values using **deep string dot notation**.

::: code-tabs#js
@tab:active JavaScript

```js
config.set('app.name', 'MyUpdatedApp')
config.set('database.host', 'localhost')
config.set({
  'api.url': 'https://api.example.com',
  'api.timeout': 5000
})
```

@tab TypeScript

```ts
config.set('app.name', 'MyUpdatedApp');
config.set('database.host', 'localhost');
config.set({
  'api.url': 'https://api.example.com',
  'api.timeout': 5000
});
```
:::

## Getting Configuration Values

To retrieve configuration values, use the `get` method. 
If the key does not exist, it returns the default value that you provide as second parameter.
This method also supports **deep string dot notation**.

::: code-tabs#js
@tab:active JavaScript

```js
const appName = config.get('app.name', 'MyApp');
const apiTimeout = config.get('api.timeout', 3000);
```

@tab TypeScript

```ts
const appName = config.get('app.name', 'MyApp');
const apiTimeout = config.get('api.timeout', 3000);
```
:::

### Proxied Retrieving

The `Config` class supports proxied retrieving, allowing you to access top-level configuration values 
directly as properties of the Config instance. 
This feature leverages JavaScript proxies to provide a more intuitive way to access top-level configuration values.

::: code-tabs#js
@tab:active JavaScript

```js
// Direct property access (top-level only)
const dbConfig = config.database

// Note: For nested levels, use the `get` method
const nestedValue = config.get('database.host')
```

@tab TypeScript

```ts
// Direct property access (top-level only)
const dbConfig = config.database;

// Note: For nested levels, use the `get` method
const nestedValue = config.get('database.host');
```
:::

### FirstMatch

The `firstMatch` method retrieves the first matching configuration value from a list of keys. 
If none of the keys exist, it returns the default value that you provide as second parameter.

::: code-tabs#js
@tab:active JavaScript

```js
const dbHost = config.firstMatch(['database.host', 'database.url'], 'localhost')
```

@tab TypeScript

```ts
const dbHost = config.firstMatch(['database.host', 'database.url'], 'localhost');
```
:::

### GetMany

The `getMany` method retrieves multiple configuration values at once. 
It accepts either an array of keys or an object with keys and their default values.

::: code-tabs#js
@tab:active JavaScript

```js
// Get both name and host
const multipleValues = config.getMany(['app.name', 'database.host'])

// or with default values
const multipleValuesWithDefaults = config.getMany({
  'app.name': 'DefaultAppName',
  'database.host': 'DefaultHost'
})
```

@tab TypeScript

```ts
// Get both name and host
const multipleValues = config.getMany(['app.name', 'database.host']);

// or with default values
const multipleValuesWithDefaults = config.getMany({
  'app.name': 'DefaultAppName',
  'database.host': 'DefaultHost'
});
```
:::

## Checking if a Configuration Value Exists

The `has` method allows you to check if a specific configuration value exists.

::: code-tabs#js
@tab:active JavaScript

```js
const hasDatabaseHost = config.has('database.host') // true
```

@tab TypeScript

```ts
const hasDatabaseHost = config.has('database.host'); // true
```
:::

## Setting Default Configuration Values

The `defaults` method allows providers to define default configuration values. 
If a key already exists, it merges the new value with the existing one.

::: code-tabs#js
@tab:active JavaScript

```js
config.defaults('api.url', 'https://default-api.example.com')
```

@tab TypeScript

```ts
config.defaults('api.url', 'https://default-api.example.com')
```
:::

## Retrieving All Configuration Items

The `all` method returns all the configuration items as a literal object.

::: code-tabs#js
@tab:active JavaScript

```js
// Get all config
const allConfig = config.all()

// Print
console.log(allConfig)
```

@tab TypeScript

```ts
// Get all config
const allConfig = config.all()

// Print
console.log(allConfig)
```
:::

## Clearing All Configuration Items

The `clear` method clears all configuration items.

::: code-tabs#js
@tab:active JavaScript

```js
config.clear()
```

@tab TypeScript

```ts
config.clear();
```
:::

The `Config` library provides a simple yet powerful way to manage configuration options in your JavaScript/TypeScript applications. 
With its support for **deep string dot notation** and flexible methods, you can easily set, get, and manage configuration values, 
making it an essential tool for any developer looking to streamline their application's configuration management.