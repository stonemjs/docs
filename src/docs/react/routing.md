---
title: Routing
---

Routing in Stone.js is not an afterthought, it’s the backbone of how pages are matched, resolved, and rendered across browser and server contexts.

Instead of coupling routing with components or relying on static file-based structures, Stone.js uses a **router-first, handler-driven architecture**. This makes routing:

* Explicit
* Modular
* Extensible
* And shared across all dimensions (SPA, SSR, SOR)

Every **page** in Stone.js is an event handler, and every route is mapped directly to a page using the full power of the Stone.js [Router](../router/).

## Defining Routes for Pages

Whether you use the declarative API with `@Page()` or the imperative API with `definePage()`, you have access to all the advanced router features.

::: tabs#declarative-imperative
@tab:active Declarative
### Declarative Example

```ts
@Page('/users/:id@user(\\d+)', {
  name: 'user.view',
  bindings: { id: 'userService@findOneBy' }
})
export class UserPage implements IComponentEventHandler<ReactIncomingEvent> {
  render({ event }: RenderContext): React.ReactNode {
    return <div>Hello {event.get('user.fullname', 'Jonh Doe')}!</div>
  }
}
```
@tab Imperative
### Imperative Example

```ts
const UserPage = () => ({
  render({ event }: RenderContext): React.ReactNode {
    return <div>Hello {event.get('user.fullname', 'Jonh Doe')}!</div>
  }
})

definePage(UserPage, {
  name: 'user.view',
  path: '/users/:id@user(\\d+)',
  bindings: { id: 'userService@findOneBy' }
}, true)
```
:::

Thanks to router bindings, the user data is automatically fetched before the page loads, no `handle()` method required!

This uses a **dynamic route with bindings**:

* `:id@user(\\d+)` defines a route param named `id`, validates it with a regex, and creates a local binding named `user`.
* `bindings` tells the router to call `userService.findOneBy(id)` and inject the result.

The resolved `user` is available directly inside `event.get('user')`. No need to fetch it manually.

## Using Route Bindings

Route bindings allow you to attach services and fetch data **before the page handler is even called**. 
This can greatly simplify your `handle()` logic or get rid of it entirely.

However, data fetched through bindings is **not automatically snapshotted**.

If you want that data to be available on the client in SSR mode, 
you need to explicitly snapshot it directly in your services using `reactRuntime.snapshot()`.

Refer to the **Snapshot** section for more details.

## Routing Features Available to Pages

Since Stone.js pages are just handlers bound to routes, **all the router features apply**. This includes:

* ✅ Declarative & Imperative route definitions
* ✅ Runtime route registration
* ✅ Aliased paths
* ✅ Nested routes
* ✅ Parameter validation with regex
* ✅ Repeatable parameters
* ✅ Defaults and optional segments
* ✅ Protocol-specific routes (`http`, `https`, `ws`, etc.)
* ✅ Grouping routes for modular structure

You can define your routes using the full power of the `@stone-js/router` module, and they’ll behave the same way when attached to pages.

For complete details, refer to the [Router documentation](../router/). 
Stone pages are event handlers at their core, and follow the same principles, so you can use the same patterns and features.

## Navigation

### Declarative Navigation: `<StoneLink />`

Stone.js provides a built-in component for linking to other pages: `<StoneLink />`.

```tsx
<StoneLink to="/profile" className="btn">My Profile</StoneLink>
```

This component:

* Works in **SPA** and **SSR** by using the router to trigger navigation
* Falls back to a traditional `<a href>` when used in **SOR** (Server-Only Rendering)

So no matter where your app runs, `<StoneLink />` behaves correctly, **without any special configuration**.

### Programmatic Navigation with `Router`

If you need to navigate based on logic (e.g. after form submission or auth), use the `Router` service.

You can access it:

* In the `constructor()` of your page (via DI)
* Inside a React component (via `StoneContext`)

#### In a Page:

```ts
this.router.navigate('/dashboard')
```

#### In a React Component:

```tsx
import { useContext } from 'react'
import { StoneContext } from '@stone-js/use-react'

const { container } = useContext(StoneContext)
const router = container.resolve(Router)

router.navigate('/logout')
```

### Where can `router.navigate()` be used?

| Context        | Supported? | Notes                                                    |
| -------------- | ---------- | -------------------------------------------------------- |
| CSR (SPA)      | ✅         | Standard navigation                                      |
| SSR (hydrated) | ✅         | Acts like SPA after hydration                            |
| SOR            | ❌         | Not available,  use `<StoneLink />` or redirect response |

In **SOR**, no JavaScript runs in the browser. For navigation in this context, rely on `<StoneLink />`, which will render a real `<a href>` and trigger a traditional page reload.

## Best Practices

Routing is powerful in Stone.js, but with great power comes the chance to overcomplicate things. These best practices help you get the most out of the router while keeping your app clean and maintainable.

#### Prefer declarative registration for most pages

Use the `@Page()` decorator when possible. It makes routes self-contained, introspectable, and lazy-loadable by default.

```ts
@Page('/about', { name: 'about' })
export class AboutPage { ... }
```

#### Use route bindings for quick access, not full control

Route bindings are excellent for fetching associated models or parameters. But avoid using them for complex logic or chaining multiple service calls, use the `handle()` method for that.

Also, remember: **bindings are not snapshotted automatically**. If you want the data to survive into the client during SSR, use `reactRuntime.snapshot()` explicitly in your service.

#### Use `<StoneLink />` for navigation

Use `<StoneLink />` for declarative navigation, and only use `router.navigate()` inside your page or component logic only when necessary.

#### In SOR apps, never rely on `router.navigate()`

Server-Only Rendering (SOR) doesn’t run React in the browser. There is no router service on the client.
Use `<StoneLink />` for navigation, it will render a standard `<a>` tag and work as expected.

#### Keep routes modular and grouped by domain

Use route grouping and nested paths to keep your route definitions organized. This makes large apps easier to navigate and extend.

```ts
@Page('/admin/users/:id', { name: 'admin.user.view' })
```

#### Don’t abuse dynamic routes

Dynamic routes are powerful (`/users/:id@user(\\d+)`), but be deliberate:

* Add validations using regex when needed.
* Use consistent parameter naming.
* Prefer specificity over overly generic patterns.

#### Avoid client-side routing libraries

React frameworks often introduce their own routing systems (`react-router`, `next/router`, etc.). You don’t need them here.

Stone.js provides the router, manages the lifecycle, and abstracts platform differences. Adding a second router leads to conflict, not flexibility.

With these practices, you’ll keep your routing layer:

* Declarative when possible
* Composable when needed
* Platform-agnostic always

## Summary

* Every Stone.js page is a route handler.
* Routing is **context-aware**, adapter-agnostic, and extensible.
* You can declaratively or imperatively define routes using powerful patterns.
* You can navigate with `<StoneLink />` declaratively or use the `Router` service for programmatic control.
* Route bindings allow auto-fetching data before the page loads, but don’t forget to snapshot manually if needed.

The routing layer in Stone.js gives you the **power of a backend router**, the **ease of frontend navigation**, and the **continuity of context across dimensions**.

This is routing rethought, from request to render.

