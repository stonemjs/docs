---
title: Service Providers
---

In Stone.js, **Service Providers** are the official mechanism for plugging functionality into the **initialization dimension** — the moment when the system constructs its internal execution context and binds all core services before handling any request, command, or event.

They are not the only extension point in Stone.js — but they are the main one for **initialization**.  
Other dimensions (like **setup** and **integration**) have their own mechanisms. The service provider belongs solely to the phase where the application is “coming to life.”

A **service provider** is a specialized module that can:

- Register services into the container
- Configure those services once registered
- Attach to system lifecycle hooks
- Extend the system dynamically during initialization

However, in most cases, you won’t need one.

Stone.js favors declarative configuration via **decorators** and imperative configuration via the **blueprint API**. These should be your first tools.  
Reach for a service provider only when you need **explicit**, **fine-grained**, or **programmatic control** over how services are wired — or when building a **third-party package** that needs to extend the system in a reusable way.

Providers are especially useful when:

- You’re registering complex services with runtime logic
- You want to encapsulate feature modules for reuse
- You’re distributing an integration or package for others to use
- You need a consistent location to access lifecycle hooks (`onInit`, `onStart`, etc.)

In summary:

::: tip
Stone.js can be extended in many ways — but the service provider is the main one for the initialization dimension.
:::

It’s your bridge into the internal execution context — and your tool of choice when configuration turns into orchestration.

## Using Service Provider

Service providers in Stone.js come in two variants: **class-based** and **factory-based**.  
Both are valid and first-class citizens in the system — but each serves different needs.

What matters is **what** a provider does: it must implement one or both of these methods:

- `register()` → bind services, listeners, etc.
- `boot()` → configure services after all providers have registered

These methods can be synchronous or asynchronous.  
And depending on your use case, you might choose one variant over the other.

::: tabs#class-factory-function
@tab:active Class-based
### Class-Based Providers

This is the most common shape, and the only one that supports **decorators** and **lifecycle hooks**.

A class-based provider:

- Can inject the `IContainer` in its constructor
- Can define `register()` and/or `boot()` as instance methods

```ts
import { IContainer, IServiceProvider } from '@stone-js/core'

export class AppServiceProvider implements IServiceProvider {
  constructor(private readonly container: IContainer) {}

  register (): void {
    this.container
      .singletonIf(MyService, (c) => new MyService(c))
      .alias(MyService, ['myService'])
  }

  boot (): void {
    this.container.make('myService').initialize()
  }
}
```

@tab Factory-based
### Factory-Based Providers

Factory-based providers offer an alternative for simpler setups or when you want to define everything inline.

A factory provider is just a function that returns an object with a `register()` or `boot()` method.

```ts
import { FactoryServiceProvider, IContainer } from '@stone-js/core'

export const AppServiceProvider: FactoryServiceProvider = (container: IContainer) => ({
  register (): void {
    container
      .singletonIf(MyService, (c) => new MyService(c))
      .alias(MyService, ['myService'])
  }

  boot (): void {
    container.make('myService').initialize()
  }
})
```

This shape is ideal for libraries, or simple modules that don’t need decorators or class behavior.

@tab Function-based
### No Function-Based Providers

You may wonder: why not allow raw functions?

Because the provider system is lifecycle-aware — and lifecycle awareness requires structure.  
A plain function can’t express `register`, `boot`, or hooks reliably. So to stay coherent with the Continuum, Stone.js only accepts **class-based** and **factory-based** variants.
:::

## Lifecycle Methods

A service provider’s power lies in **when** it does things, not just **what** it does.

Stone.js executes all providers during the **initialization phase** — the moment your system is “bootstrapping” itself into a running app. This phase is split into two key steps:

- `register()` → Bind things into the service container.
- `boot()` → Configure or activate them once all bindings are available.

Both are **optional**. But you must implement at least one of them to make your provider useful.

### `register()`

The `register()` method is used to bind services, classes, values, and factories into the service container.  
This is where you describe **what your provider offers** — not how it behaves.

At this stage:

- Your provider can access the service container
- No other provider’s `boot()` method has run yet
- You **should not resolve or use** other services — just bind them
- You have access to the `blueprint` and the `eventEmitter`

```ts
export class MyServiceProvider {
  register () {
    this.container
      .singleton('router', (container) => new Router(container))
      .instance('apiOptions', { apiUrl: 'https://api.example.com' })
  }
}
```

This ensures the system builds a complete registry before any configuration or execution begins.

### `boot()`

Once all providers have been registered, Stone.js calls their `boot()` methods — in the order they were loaded.

Now is the time to:

- Resolve services (`container.make(...)`)
- Register routes
- Set event listeners
- Configure middleware

```ts
export class MyServiceProvider {
  boot () {
    const router = this.container.make('router')
    router.register(routeDefinitions)
  }
}
```

The `boot()` phase is the safe place to **use** the things you registered earlier — or to coordinate logic between multiple providers.

### Hooks (`@Hook`)

Stone.js supports a lifecycle hook system, and providers are the best place to listen to major system events.

This works only with **class-based providers**, using the `@Hook` decorator:

```ts
import { Hook } from '@stone-js/core'

export class MyServiceProvider {
  @Hook('onInit')
  logInit() {
    console.log('Execution context initialized.')
  }
}
```

This makes your providers reactive and introspectable — and allows third-party packages to extend the framework behavior in clean, declarative ways.

You can subscribe to any of the documented [setup](./blueprint#setup-hooks), [integration](./adapter#integration-hooks), or [initialization](./lifecycle) hooks. 
It’s one more reason to use class-based providers when you need deep integration.

## Accessing the Service Container

The service container is the beating heart of your Stone.js application — and service providers are its surgeons.  
But timing matters: **not everything is available all the time**.

### Constructor Access

In class-based providers, the service container is injected via the constructor, and via the function argument in factory-based providers.  
This lets you store and reuse it across `register()`, `boot()`, and hook methods.

```ts
import { IContainer, IServiceProvider } from '@stone-js/core'

export class MyServiceProvider implements IServiceProvider {
  constructor(private readonly container: IContainer) {}
}
```

::: important
But be careful: at construction time, only the **blueprint** and the **event emitter** are available, **no other services are registered yet**.
Don’t try to `make()` anything else in the constructor — wait for `boot()`.
:::

### What’s Safe to Use (and When)

| Method          | Can bind services | Can resolve services | Has all providers registered? |
| --------------- | ----------------- | -------------------- | ----------------------------- |
| `constructor()` | ❌                | ❌                    | ❌                            |
| `register()`    | ✅                | ⚠️*only your own*     | ❌                            |
| `boot()`        | ✅                | ✅                    | ✅                            |

So the rule is simple:

- **Register early** (`register()`)
- **Configure late** (`boot()`)

That’s the continuum between **definition** and **activation** — don’t mix them up.

### Common Container Patterns

You’ll mostly use three methods:

- `singletonIf(key, factory)` – registers a singleton only if not yet registered
- `instanceIf(key, value)` – registers a static instance only if not yet registered
- `make(key)` – resolves a previously registered item

They allow your provider to be modular and respectful of other providers’ boundaries.

## Registering Providers

Creating a provider is just the first step.  
To make it part of the system, you need to **register it** — either **declaratively** or **imperatively**.

Stone.js offers both options, so you can pick what fits your architecture and context best.

::: tabs#declarative-imperative
@tab:active Declarative
### Declarative Registration

For most applications, this is the go-to method.  
Just decorate your class with `@Provider()`, and Stone.js will detect and load it automatically.

```ts
import { Provider } from '@stone-js/core'

@Provider()
export class MyServiceProvider {
  register() {
    // Bind services here
  }

  boot() {
    // Configure them here
  }
}
```

**When to use it:**

- When the provider is part of your app codebase
- When you want automatic integration
- When you want to use hooks (`@Hook`) or decorators

Under the hood, the decorator tells Stone.js to include this provider during the app’s initialization phase.

@tab Imperative
### Imperative Registration

Need more control? Want to include third-party or factory-based providers?  
Use the **Blueprint API** to register them manually.

```ts
import { defineBlueprintConfig } from '@stone-js/core'
import { UserProvider } from './providers/UserProvider'

export const mainBlueprint = defineBlueprintConfig((blueprint) => {
  blueprint.add('stone.providers', [
    { module: UserProvider, isFactory: true }
  ])
})
```

Each provider entry is an object with:

- `module`: the class or factory
- `isFactory`: `true` if it’s a factory provider
- `isClass`: `true` if it’s a class-based provider

You can mix class-based and factory-based providers here, and even load them dynamically from libraries, conditionally, or by environment.

**When to use it:**

- When integrating third-party packages
- When you want lazy or environment-based loading
- When you don’t want to use decorators
:::

So in short:

| Type                           | Supports Hooks | Easy to Modularize | Works for 3rd Party    |
| ------------------------------ | -------------- | ------------------ | ---------------------- |
| Declarative (`@Provider()`)    | ✅             | ✅                 | ⚠️ Needs code access |
| Imperative (`stone.providers`) | ❌             | ✅                 | ✅                     |

## Best Practices

Service providers are one of the most powerful mechanisms in Stone.js. But with great power comes great modularity.
Here’s how to make the most of them — without shooting yourself in the boot phase.

#### Prefer Declarative or Blueprint Configuration First

Stone.js is designed to be highly declarative. 
Whenever possible, configure your system using decorators (`@Controller`, `@Service`, `@Middleware`, etc.) or the `defineBlueprintConfig()` API.

Reach for a service provider **only** when:

- You need precise control over the timing and structure of service registration
- You’re integrating advanced logic that decorators or blueprint fields can’t express
- You’re building a reusable **third-party extension** to plug into the initialization phase

This keeps your system clean, introspectable, and aligned with the Continuum — where configuration is separated by **dimension**, not just by type.


#### Keep Providers Focused

Split your logic across **multiple small providers** instead of a giant one.

Bad:

```ts
@Provider()
export class KitchenSinkProvider {
  register() {
    this.container.singleton('router', () => new Router())
    this.container.singleton('db', () => new DB())
    this.container.singleton('logger', () => new Logger())
    this.container.singleton('mail', () => new Mailer())
    this.container.singleton('featureX', () => new X())
    this.container.singleton('featureY', () => new Y())
  }
}
```

Good:

- `RouterProvider`
- `DatabaseProvider`
- `LoggerProvider`
- `FeatureXProvider`
- ...

This improves reuse, testing, maintainability — and your sanity.

#### Use `register()` to declare — not to execute

Your `register()` method should **only bind** things, never resolve or execute them.

```ts
// ❌ Don't do this in register()
this.container.make('db').connect()

// ✅ Do this in boot()
const db = this.container.make('db')
await db.connect()
```

Why? Because another provider might not have registered `db` yet.  
Let the system finish wiring everything before you flip the switch.

#### Prefer class-based for complex behavior

Need hooks? Need constructor injection? Want to use decorators?

Then **class-based providers** are your best friend.

Reserve factory-based providers for:

- Simple one-off modules
- Third-party integration
- If you are doing functional programming

#### Alias wisely

If you bind a class with a long or verbose name, make it friendlier to use.

```ts
this.container
  .singletonIf(LongVerboseHttpClientName, () => new LongVerboseHttpClientName())
  .alias(LongVerboseHttpClientName, ['httpClient', 'axiosClient'])
```

Shorter aliases improve readability and reduce coupling to implementation names.

#### Use lifecycle hooks for diagnostics or extension

Hooks are not just for fun — they let you:

- Log startup/shutdown
- Add diagnostics
- Trigger async setup steps
- Track errors

```ts
@Hook('onStart')
startBanner() {
  console.log('🔥 System is starting...')
}
```

#### Make it reusable

A good provider should be easy to extract into a library or share across apps.

- Avoid hardcoding environment-specific values
- Use config injection (`blueprint.get(...)`)
- Keep dependencies explicit and controlled

Your future self — or the next developer — will thank you.

## Summary

While service providers are powerful, they are not the default way to configure your app.
Use them when you need control over the **initialization dimension** — and prefer decorators and blueprint-based configuration for everything else.

Think of providers as your advanced toolkit — precise, low-level, and perfect for libraries or complex orchestration.
But for common scenarios, let the Continuum guide you: configure declaratively, and only dive deeper when you must.

Here’s what to remember:

- A service provider is a **class** or **factory** that implements `register()` and/or `boot()`
- It lives in the **initialization dimension** of the Continuum Architecture
- It binds services to the **container** during `register()`
- It configures or activates services during `boot()`
- It can listen to **system lifecycle hooks** using decorators
- It can be registered via the **declarative API** (`@Provider()`) or **imperative API** (`stone.providers`)

By organizing your system into clean, focused, reusable providers, you unlock the full power of Stone.js’s modular and scalable architecture.

> You don’t “use” Stone.js —  
> You *provide* it.
