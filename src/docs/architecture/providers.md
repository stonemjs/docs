---
title: Service Providers
---

The modularity, scalability, and extensibility of Stone.js reside in its service providers. They serve to extend the functionality of Stone.js, making it both modular and scalable. Service providers represent plug-and-play building blocks that can be added or removed from Stone.js at any time. In other words, they are the plugins of Stone.js.

Service providers register all application components, including service container bindings, routes, middleware, listeners, and more. In short, they are the only way to add functionalities to Stone.js, whether from your application or through a third-party library. All core functionalities and packages of Stone.js are provided via service providers, such as adapters, the router, and commands. Even the main handler of the features layer, your `Application` class decorated with `@StoneApp`, is a service provider.

An application can have multiple service providers, which can be used to modularize the functionalities of large applications or transform them into packages for easier reuse.

## Create Providers

All service providers are ES6 classes composed of optional asynchronous or synchronous methods. It is important to know that the initialization layer hooks are also accessible from service providers.

### Service container

One of the main features of a service provider is to bind components in the service container. You can access the service container from the service provider's constructor.

::: important
At this point, no components have been bound to the container, meaning you cannot take advantage of dependency injection by decomposition in the service provider's constructor. Access to components must be done in the `boot` method.
:::

::: code-tabs#js
@tab:active JavaScript

```js
export class MyServiceProvider {
  constructor (container) {
    this.container = container;
  }
}
```

@tab TypeScript

```ts
import { Container } from '@stone-js/service-container';

export class MyServiceProvider {
  private readonly container: Container;

  constructor (container: Container) {
    this.container = container;
  }
}
```
:::

### OnInit

`onInit` is an optional static method that allows subscribing to the `OnInit` hook to register or initialize things once when the application starts. At this point, the initialization layer kernel is not yet created.

```js
export class MyServiceProvider {
  static onInit () {
    // One time initialization
  }
}
```

### BeforeHandle

`beforeHandle` is an optional instance method that allows subscribing to the `BeforeHandle` hook to register or initialize things before each incoming external event. At this point, the initialization layer kernel is created, but nothing is yet initialized or registered.

```js
export class MyServiceProvider {
  beforeHandle () {
    // Initialization at each incoming event
  }
}
```

### Register

`register` is an optional instance method that allows registering all your application components. Here you can bind your components in the service container. It is important to know that here we only register; nothing else. Otherwise, you risk accidentally using a service provided by a service provider that has not yet been loaded.

```js
export class MyServiceProvider {
  register () {
    this
      .container
      .singleton('router', (container) => new Router(container))
      .instance('apiOptions', { apiUrl: 'https://api.example.com' })
  }
}
```

### Boot

`boot` is an optional instance method that allows configuring your services once they are registered. At this point, you can be sure that all your services have been registered.

```js
export class MyServiceProvider {
  boot () {
    this
      .container
      .make('router')
      .register(routeDefinitions)
  }
}
```

### OnTerminate

`onTerminate` is an optional instance method that allows subscribing to the `OnTerminate` hook, useful for cleanup or finalization tasks.

```js
export class MyServiceProvider {
  onTerminate () {
    console.log('The outgoing response:', this.container.response);
  }
}
```

## Registering Providers

All service providers, including those from third-party libraries or defined within your application, must be registered before you can use their functionalities.

### Decorator

Service providers defined within your application can be registered by decorating your class with the `@Provider` decorator:

```js
import { Provider } from '@stone-js/core/decorators';

@Provider()
export class MyServiceProvider {}
```

### Main Handler

You can also register your service providers, including those from third-party libraries, from the main handler using the `StoneApp` decorator's API:

```js
import { StoneApp } from '@stone-js/core/decorators';
import { RoutingServiceProvider } from '@stone-js/router';

@StoneApp({
  providers: [MyServiceProvider, RoutingServiceProvider]
})
export class Application {}
```

Or by using the decorator provided by the third-party library:

```js
import { StoneApp } from '@stone-js/core/decorators';
import { RouterProvider } from '@stone-js/router/decorators';

@StoneApp()
@RouterProvider()
export class Application {}
```

### Explicit configuration

You can also register your service providers, including those from third-party libraries, from the application's explicit configurations. To do this, first export the application's configurations if they are not already exported using `npm run export app`, then add your provider to the `providers` array:

```js
import { Configuration } from '@stone-js/core/decorators';
import { RoutingServiceProvider } from '@stone-js/router';

@Configuration({
  name: 'app',
  merge: true
})
export class AppConfig {
  getConfig () {
    return {
      ...,
      providers: [
        RoutingServiceProvider,
        MyServiceProvider
      ],
      ...,
    };
  }
}
```

## Conclusion

Service providers enhance the modularity, scalability, and extensibility of Stone.js by extending its functionalities, enhancing flexibility, promoting reusability, supporting dependency injection, and improving the organization of application code.