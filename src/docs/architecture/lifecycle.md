---
title: Lifecycle
---

In Stone.js, the **context is dynamic** — it evolves through time and dimensions. The lifecycle represents all the moments that surround the act of applying the domain to the context: everything that happens **before** and **after** this application.

To observe and instrument these stages, Stone.js provides **Context Lifecycle Hooks** — a structured way to plug into the internal flow of the context **without mutating it**.

These hooks allow you or third-party tools to:

- Monitor and trace context flow
- Extend features in a modular way
- Debug and audit internal behavior
- Collect metrics or logs

But it’s important to remember: **hooks are not [middleware](./middleware.md)**. They do not intercept, transform, or control the flow — they **observe it**.

## Two Levels of Context

From a lifecycle perspective, the **internal context** is split into two distinct layers:

- **Global Context** — created once when the environment boots, and shared across the context lifecycle
- **Intent Context** — ephemeral and scoped to a single intention ([IncomingEvent](../essentials/incoming-event.md)), created and destroyed for every application act

Each of these layers exposes its own set of lifecycle hooks:

- [**Global Hooks**](#global-hooks): Observe the lifecycle of the global context (setup, startup, shutdown)
- [**Intent Hooks**](#intent-hooks): Instrument the ephemeral context created for each intention

Let’s explore both categories in detail.

## Global Hooks

Global hooks are tied to the **global context** — the stable, long-lived structure that is created once during system startup and destroyed when it shuts down.

They help you trace what happens before the system is ready to handle intentions, and after it’s done.

These hooks are grouped by **dimension**.

### Setup Dimension

| Hook | Description |
|------|-------------|
| `onPreparingBlueprint` | Triggered before the blueprint is prepared. Useful for logging or timing. |
| `onProcessingBlueprintMiddleware` | Triggered before each blueprint middleware is processed. |
| `onBlueprintMiddlewareProcessed` | Triggered after each blueprint middleware is processed. |
| `onBlueprintPrepared` | Triggered once the blueprint is fully ready. |

::: important
If you want to **participate** in the blueprint process, use **setup middleware**. Hooks here are for **observation only**.
:::

### Integration Dimension (Global Phase)

| Hook | Description |
|------|-------------|
| `onStart` | When the system starts. Ideal for registering services, logging system health, or booting external systems. |
| `onStop` | When the system is shutting down. Perfect for cleanup logic, flushing logs, or closing connections. |

## Intent Hooks

Intent hooks instrument the **ephemeral context** — the temporary execution environment created for every single application act (e.g., HTTP request, CLI call, event trigger).

This context is created when an **[IncomingEvent](../essentials/incoming-event.md)** enters the system, and is destroyed after the response is delivered.

Intent hooks let you trace the **full journey of a single [IncomingEvent](../essentials/incoming-event.md)**: from its creation to its final transformation into an effect (raw response).

### Integration Dimension (Intent Phase)

| Hook | Description |
|------|-------------|
| `onProcessingAdapterMiddleware` | Before each adapter middleware is processed. |
| `onAdapterMiddlewareProcessed` | After each adapter middleware is processed. |
| `onBuildingIncomingEvent` | Before transforming the raw input into an [`IncomingEvent`](../essentials/incoming-event.md). |
| `onHandlingAdapterError` | If any adapter middleware or event handling fails. |
| `onBuildingRawResponse` | Just before the final raw response is constructed. |

::: important
You don't use these hooks to intercept or mutate the raw input or response — that’s the role of adapter middleware. Hooks are passive listeners, not active transformers.
:::

### Initialization Dimension

| Hook | Description |
|------|-------------|
| `onInit` | When the **ephemeral context** is initialized for a single **intention**. |
| `onHandlingEvent` | Before the kernel receives the [`IncomingEvent`](../essentials/incoming-event.md). |
| `onProcessingKernelMiddleware` | Before each kernel middleware executes. |
| `onKernelMiddlewareProcessed` | After each kernel middleware executes. |
| `onExecutingEventHandler` | Just before the event handler (business logic) runs. |
| `onExecutingErrorHandler` | If an error is thrown during handler execution. |
| `onPreparingResponse` | When the response is being prepared from the handler result. |
| `onResponsePrepared` | After the response is formatted, before sending. |
| `onEventHandled` | After the kernel has finished handling the event. |
| `onTerminate` | When the intention is fully processed and the **ephemeral context** is destroyed. |

This dimension is where you can attach metrics, logging, trace IDs, performance insights, or anything scoped to the individual request.

## Registering Hooks

Hooks can be registered **declaratively** or **imperatively**, depending on your style and use case.

### Declarative API

Use the `@Hook('<hookName>')` method decorator on any method. These methods can live in a any class: standalone, app entrypoint, [`ServiceProvider`](./providers.md) and so on.

```ts
import { Hook } from '@stone/core';

export class Observability {
  @Hook('onStart')
  systemStarting() {
    console.log('Global context is booting up');
  }

  @Hook('onTerminate')
  teardown({ event }) {
    console.log(`Context for ${event.fingerprint(true)} is shutting down`);
  }
}
```

::: important
Even if the hook method lives in a class, it is **executed independently** of the class lifecycle. It is processed through reflection. Avoid relying on `this`.
:::

### Imperative API

Hooks can also be registered directly in your blueprint definition:

```ts
defineBlueprintConfig([
  ['stone.lifecycleHooks.onStart', () => console.log('Started')],
  ['stone.lifecycleHooks.onTerminate', ctx => console.log('Request done')],
]);
```

## Hooks vs Middleware

Let’s clarify when to use which:

| Use Case | Use |
|----------|-----|
| Transform request, event, or response | **Middleware** |
| Enforce authorization or validation | **Middleware** |
| Observe or log request flow | **Hook** |
| Trace performance or capture metrics | **Hook** |
| Inject business behavior | **Middleware** |
| Instrument behavior | **Hook** |

**Hooks observe. Middleware transforms.**  
Use the right tool for the right dimension of control.

## Summary

Lifecycle hooks give you access to the **internal structure of the context** — both at the global system level and for each individual intention.

They are not about altering the flow, but about **tracing**, **measuring**, and **extending** it.

Context Lifecycle Hooks are divided into:

- **Global Hooks** — observe the boot, setup, and teardown of the global context
- **Intent Hooks** — instrument the ephemeral context created per intention

They are ideal for:
- Performance tracing
- Logging and diagnostics
- Feature extensions
- Lifecycle observability

Hooks let you see through the continuum — without disturbing its balance.
