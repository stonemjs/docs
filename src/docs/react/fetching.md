---
title: Data Fetching
---

Data is the lifeblood of most applications. Whether it's coming from a database, an API, or a service layer, Stone.js gives you multiple ways to fetch, inject, and reuse data, across both frontend and backend, without duplicating logic or coupling view to infrastructure.

This page explores how to handle data fetching properly in a Stone.js + React application, across:

* Page handlers
* Middleware
* Components
* SSR with snapshots

All while staying consistent with the Continuum Architecture.

## Fetching data in `handle()` (the standard way)

The primary and recommended place to fetch data is inside the `handle()` method of a page. This method runs in the **Stone.js lifecycle** and is designed to process the incoming event, validate, call services, and return a structured result.

That result will then be passed to the `render()` method.

```ts
async handle(event: ReactIncomingEvent) {
  const userId = event.get('userId')
  return await this.userService.getUserById(userId)
}
```

You can return:

* `undefined` (if nothing needs to be passed to the view)
* Raw data (Stone.js will wrap it into a response)
* A `ReactOutgoingResponse` for full control

Returning data here ensures it can be snapshotted automatically in SSR mode.

## Fetching data in middleware

Middleware runs before your page handler and can be used to:

* Check access or authentication
* Preload user or context
* Set up shared data across multiple routes

When fetching data in middleware, you **must return a full response** using `reactResponse()` or `reactRedirectResponse()`. You can also use `reactRuntime.snapshot()` to persist data across SSR.

```ts
export const AuthMiddleware = ({ reactRuntime, authService }: { ... }) => {
  return async (event, next) => {
    const user = await reactRuntime.snapshot('user', () => authService.getCurrentUser())
    event.set('user', user)
    return next(event)
  }
}
```

This ensures the user is fetched once and hydrated properly on the client without re-calling the service.

For more informations about the snapshotting data, refer to the [Snapshot](./snapshot) documentation.

## Fetching data inside components

React components themselves can also fetch data, via `useEffect`, `useQuery`, or any other library. But be careful: this happens **after the Stone.js lifecycle has ended**.

That means:

* No automatic snapshotting
* No server-side fetching (unless you replicate it)
* Increased risk of duplicate fetches

This is why Stone.js recommends keeping data fetching **outside the component** when possible, and **passing it in as props** via the `render()` method or via the `StoneContext`.

If you really must fetch inside the component:

* Use `useEffect()` responsibly
* Wrap it in suspense if needed
* Avoid coupling it with container services

## Snapshotting data (SSR only)

Stone.js includes an automatic **snapshot** mechanism for data returned from `handle()`.

During SSR:

* The data is fetched once on the server
* It's serialized and injected into the HTML
* On the client, the page is hydrated using that snapshot
* No additional fetching is needed

This keeps server and client in sync and avoids double-loading.

> You don’t need to do anything, if you return raw data from `handle()`, it will be snapshotted automatically.

### Manual snapshotting (e.g. in middleware)

In some cases, like middleware or custom pipelines, you may want to snapshot manually. Use `reactRuntime.snapshot()`:

```ts
const user = await reactRuntime.snapshot('user', () => userService.getById(id))
```

This ensures that the value is stored during SSR and restored on the client.

## When to use what

| Location   | Use case                              | SSR snapshot support | Notes                        |
| ---------- | ------------------------------------- | -------------------- | ---------------------------- |
| `handle()` | Most data fetching                    | ✅ Yes                | Recommended                  |
| Middleware | Cross-cutting logic (e.g. auth)       | ✅ With snapshot()    | Must return full response    |
| Component  | DOM-dependent or user-triggered fetch | ❌ No                 | Use `useEffect`, no SSR sync |

If your data affects initial rendering, prefer `handle()` or middleware.

If your data is reactive, client-only, or depends on user actions, fetch it inside the component.

## State Management

Once you’ve fetched data, you often need to hold it somewhere, between components, across views, or through user interaction. That’s where **state management** comes in.

In Stone.js, state lives in the **React layer**, not in the system layer. Stone.js doesn't provide its own state system, because React already gives you everything you need.

You can use:

* `useState`, `useReducer`, `useContext` (for local and shared state)
* External tools like Zustand, Redux, or Jotai (manually integrated)
* StoneContext for accessing application-wide context (services, event, data)

But there’s one thing you **shouldn’t do**...

### ❌ Don't use the DI container for reactive state

The container in Stone.js is **not a state store**.

It’s designed to resolve and inject **services**, things like authentication, database access, routing, not reactive values.

Storing mutable state (e.g. current user, UI flags, language) in the container can lead to:

* Memory leaks
* SSR inconsistencies
* Hard-to-track bugs
* Snapshot breakage

> Use the container to **resolve services**, not to **store values**.

### Use `StoneContext` for shared application context

The `StoneContext` is a React context automatically provided by Stone.js. It gives you access to key app-level objects in any React component, **after render**, inside the DOM.

```ts
export interface StoneContextType {
  data: any                  // Data returned from handle()
  container: IContainer      // Access to services
  event: ReactIncomingEvent  // The current incoming event (browser or server)
}
```

To access it:

```tsx
import { useContext } from 'react'
import { StoneContext } from '@stone-js/use-react'

export const ProfileButton = () => {
  const { data, event, container } = useContext(StoneContext)
  const router = container.resolve(Router)

  return (
    <button onClick={() => router.navigate('/profile')}>
      Hello, {data.user.name}
    </button>
  )
}
```

> This lets you stay inside the React ecosystem while still accessing Stone.js context.

You can:

* Use `container.resolve(...)` to access services
* Read the incoming event (e.g., query parameters, headers)
* Get the `data` from your page’s `handle()` method

All without prop-drilling or breaking encapsulation.

### Can I use Zustand, Redux, or other state libraries?

Yes! But they are not officially integrated **yet**. You can install them and use them like in any React app:

```ts
import create from 'zustand'

const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 }))
}))
```

You’re also free to create a Stone.js wrapper package (e.g. `@stone-js/use-redux`) if you want deeper DI or context integration.

> As always: keep your state **outside Stone.js** and **inside React**.


## Best Practices

* ✅ **Use `handle()`** for 90% of your data fetching, it’s where Stone.js expects it.
* ✅ Use **middleware + `snapshot()`** for session/user/global state.
* ✅ Always **return raw data** from `handle()` unless you need headers or control, Stone.js wraps it for you.
* ❌ **Avoid fetching in components** unless absolutely necessary.
* ❌ Don’t use the DI container to hold reactive state, React has its own system for that.
* ✅ **Use route bindings** for quick data injection, but manually snapshot the results if needed.
* ✅ Cache and debounce in your services, not your UI.

## Summary

Stone.js gives you **multiple levels** of control for data fetching:

* Pages (`handle()`) for route-specific data
* Middleware for session or security logic
* Snapshots for seamless SSR
* Components for interactive, dynamic, or client-only behavior

Each one has its place. Together, they allow your data to move smoothly across the backend/frontend divide, without coupling your views to infrastructure.

Stone.js doesn't impose a data layer, it just gives you the architecture to handle it anywhere.
