---
title: Usage
---

To effectively utilize the `Pipeline` library, 
you can take advantage of its fluent API to transform your data through a series of customizable methods. 
These methods allow you to configure, manage, and execute your pipelines with ease, 
ensuring that your data processing workflows are both efficient and adaptable. 

The available methods are listed below:

## Creating a Pipeline

To create a new pipeline, use the `create` static factory method:

::: code-tabs#js
@tab:active JavaScript

```js
// Use the static factory method
const pipeline = Pipeline.create()

// Or with new keyword
const pipeline = new Pipeline()
```

@tab TypeScript

```ts
// Use the static factory method
const pipeline = Pipeline.create()

// Or with new keyword
const pipeline = new Pipeline()
```
:::

## Configuring the Pipeline

You can configure the pipeline by setting the pipes, the method to call on each pipe, and the data to pass through the pipeline.

### Set the Passable Object

Use the `send` method to set the data(*that can be any type*) to be passed through the pipeline:

::: code-tabs#js
@tab:active JavaScript

```js
pipeline.send(['data'])
```

@tab TypeScript

```ts
pipeline.send(['data'])
```
:::

### Set the Pipes

Use the `through` method to set the pipes for the pipeline:

::: code-tabs#js
@tab:active JavaScript

```js
pipeline.through([pipe1, pipe2])
```

@tab TypeScript

```ts
pipeline.through([pipe1, pipe2])
```
:::

You can also add additional pipes using the `pipe` method:

::: code-tabs#js
@tab:active JavaScript

```js
pipeline.pipe(pipe3)
```

@tab TypeScript

```ts
pipeline.pipe(pipe3)
```
:::

### Set the Method

Use the `via` method to set the method to call on each pipe, only applied to class pipes:

::: code-tabs#js
@tab:active JavaScript

```js
pipeline.via('handle')
```

@tab TypeScript

```ts
pipeline.via('handle')
```
:::

### Set Default Priority

You can set a default priority for all pipes using the `defaultPriority` method:

::: code-tabs#js
@tab:active JavaScript

```js
pipeline.defaultPriority(5)
```

@tab TypeScript

```ts
pipeline.defaultPriority(5)
```
:::

## Running the Pipeline

Use the `then` method to run the pipeline with a final destination callback:

::: code-tabs#js
@tab:active JavaScript

```js
await pipeline.then(data =>  console.log(data))
```

@tab TypeScript

```ts
await pipeline.then(data =>  console.log(data))
```
:::

If you want to run the pipeline and return the result directly, use the `thenReturn` method:

::: code-tabs#js
@tab:active JavaScript

```js
const result = await pipeline.thenReturn()
console.log(result)
```

@tab TypeScript

```ts
const result = await pipeline.thenReturn()
console.log(result)
```
:::

## Sync and Async Pipelines

By default the pipeline is asynchronous but you can configure it to run synchronously using the `sync` method:

::: code-tabs#js
@tab:active JavaScript

```js
 // Run synchronously
const result = pipeline.sync(true).thenReturn()

// Same as above
const result = pipeline.sync().thenReturn()

// Run asynchronously, the default configuration
const result = await pipeline.sync(false).thenReturn()

// Same as above
const result = await pipeline.thenReturn()
```

@tab TypeScript

```ts
 // Run synchronously
const result = pipeline.sync(true).thenReturn()

// Same as above
const result = pipeline.sync().thenReturn()

// Run asynchronously, the default configuration
const result = await pipeline.sync(false).thenReturn()

// Same as above
const result = await pipeline.thenReturn()
```
:::

## Error Handling

The `Pipeline` library includes error handling for invalid pipes. 
If a pipe is not a function, a class, a service alias string, 
or an object with a pipe and its priority, an error will be thrown.


## Conclusion
The `Pipeline` library provides a powerful and flexible way to manage pipes and middleware in your application. 
By following the Chain of Responsibility pattern, it allows for easy configuration and execution of complex data processing pipelines. 
Whether you need synchronous or asynchronous execution, the `Pipeline` library has you covered.
