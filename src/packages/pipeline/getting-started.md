---
title: Getting Started
---

To get started with the `Pipeline` library, you need to create an instance of the `Pipeline` class. 

You can then configure the pipeline with the pipes you want to use and the data you want to pass through it.

1. Create your pipes/middlewares

::: code-tabs#js
@tab:active JavaScript

```js
// Your first pipe
const pipe1 = (data, next) => {
  data.push('pipe1')
  return next(data)
}

// Your second pipe
const pipe2 = (data, next) => {
  data.push('pipe2')
  return next(data)
}
```

@tab TypeScript

```ts
// Your first pipe
const pipe1 = (data: string[], next: (data: string[]) => string[]) => {
  data.push('pipe1')
  return next(data)
}

// Your second pipe
const pipe2 = (data: string[], next: (data: string[]) => string[]) => {
  data.push('pipe2')
  return next(data)
}
```
:::

2. Create an instance of the `Pipeline` and process your data

::: code-tabs#js
@tab:active JavaScript

```js
import { Pipeline } from '@stone-js/pipeline'

// Your initial data
const initalData = ['initial data']

// Configure the pipeline
const result = Pipeline
  .create()
  .sync()
  .send(initalData)
  .through([pipe1, pipe2])
  .thenReturn()

console.log(result) // Output: ['initial data', 'pipe1', 'pipe2']
```

@tab TypeScript

```ts
import { Pipeline } from '@stone-js/pipeline'

// Your initial data
const initalData = ['initial data']

// Configure the pipeline
const result = Pipeline
  .create()
  .sync()
  .send(initalData)
  .through([pipe1, pipe2])
  .thenReturn()

console.log(result) // Output: ['initial data', 'pipe1', 'pipe2']
```
:::