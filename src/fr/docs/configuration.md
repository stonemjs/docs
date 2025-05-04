---
title: Configurations
---

In Stone.js, configuration starts by registering application components and defining their settings. This is done through **Adaptive configuration**, which offers both [**declarative**](#declarative) and [**imperative**](#imperative) approaches. [Declarative configuration](#declarative) uses predefined conventions for simplicity, while [imperative configuration](#imperative) allows for detailed customization when needed. Together, these methods provide flexibility, making Stone.js adaptable for various project needs, balancing simplicity with control.

## Overview

The [setup layer]() in Stone.js introspects application components using metadata provided by decorators. This metadata helps classify and organize components efficiently. At runtime, Stone.js extracts this metadata to create the `StoneBlueprint` a structured configuration that acts as a recipe, containing all the information needed to bootstrap the application effectively.

### Metadata

Metadata in Stone.js is key to organizing and managing components configurations effectively. Decorators add metadata to classes, which the [setup layer]() reads and processes to form a complete representation of the application's configuration structure. This metadata includes details about services, routes, and configurations like database settings, enabling seamless integration and coordination of all components, thereby enhancing maintainability and scalability.

### Stone Blueprint

The `StoneBlueprint` is a structured configuration object that results from the introspection process. It consolidates all essential information required to construct and initialize the application, including:

- **Services**: Details of services that need to be registered in the service container.
- **Route Definitions**: Definitions for routing and endpoint management.
- **User-Provided Configuration**: Additional settings such as database configurations and other environment-specific details for deployment.

The `StoneBlueprint` provides a unified and organized configuration, ensuring consistent and efficient integration, registration, and usage of components throughout the application's lifecycle.

### Terminology

- **Modules**: Application components, which include classes, objects, and functions that make up the functionality of your application.
- **Metadata**: Information added to classes using decorators, which is used by the [setup layer]() to organize and manage application components configurations effectively.
- **Decorator**: A utility that adds metadata to application components, specifically targeting classes to facilitate their identification and management.
- **Introspection**: The process of examining components at runtime to discover and process the attached metadata, enabling automated configuration.
- **Stone Blueprint**: The aggregate object that results from introspection, containing all the necessary information to build, initialize, and run the application efficiently.

### Quick Start Example

Defining configuration options and automatically discovering application components is simple with Stone.js. Here’s a quick glimpse of how it works before we dive deeper.

#### Declarative Configuration

In a declarative context, application components are registered using decorators, where configuration options are provided as parameters. These options are then accessible through the `blueprint` in the constructors of Stone.js components.

```typescript
import { StoneApp, IncomingEvent, OutgoingResponse, IBlueprint } from '@stone-js/core'

@StoneApp({
  name: 'Stone.js',
  debug: true
})
export class MyApp {
  private readonly blueprint: IBlueprint;
  
  constructor({ blueprint }: { blueprint: IBlueprint }) {
    this.blueprint = blueprint;
  }

  handle(event: IncomingEvent): OutgoingResponse {
    return OutgoingResponse.create({
      content: { name: this.blueprint.get('app.name') }
    });
  }
}
```

In this example, we create an instance of a Stone.js application with configurations that can be accessed later when an event enters the application. This is done using the `blueprint` API.

Let’s explore this in more detail in the following sections.

## Blueprint

In this section, we'll explore how you can access the `blueprint` across different layers of Stone.js. The `blueprint` is an instance of [`Config`](), and serves as the central configuration object. Since Stone.js follows the [**Continuum Architecture**](), accessing and utilizing the `blueprint` can vary depending on the layer, whether it's the [**setup**](), [**integration**](), [**initialization**](), or [**feature**]() layer.

### Setup Layer

The primary role of the [Setup Layer]() is to construct the `blueprint` by processing application modules through a series of middleware functions. In this layer, configuration middleware plays a key role in assembling the `blueprint`, which is essentially the centralized configuration object for the entire Stone.js application. The `blueprint` is created dynamically by aggregating metadata from differents modules, and it is accessible exclusively within the middleware's context object during the setup process.

**Context Object**  
The `ConfigContext` provides both the list of application modules and the `blueprint` that is being constructed:

```typescript
interface ConfigContext {
  readonly modules: unknown[];
  readonly blueprint: IBlueprint;
}
```

**Example Middleware**  
The following is an example of a middleware used in the [Setup Layer]():

```typescript
export const ServiceMiddleware = ({ modules, blueprint }: ConfigContext, next: NextPipe<ConfigContext, IBlueprint>): IBlueprint | Promise<IBlueprint> => {
  (modules as ClassType[])
    .filter(module => typeof module === 'function' && hasMetadata(module, SERVICE_KEY))
    .forEach(module => {
      const options: ServiceOptions = getMetadata(module, SERVICE_KEY, { alias: '' });
      blueprint.add('app.services', [[module, options]]);
    });
  return next({ modules, blueprint });
};
```

In this example, the `ServiceMiddleware` is responsible for registering all services that are defined in the application using the `@Service()` decorator. The blueprint is accessed from the middleware's context object (`{ modules, blueprint }: ConfigContext`), and it is then used to register the identified services using `blueprint.add('app.services', [[module, options]])`.

This middleware ensures that any module with a `SERVICE_KEY` metadata (The key used by `@Service` to regsiter it's metadata) is properly registered in the blueprint. By leveraging this setup, the framework can dynamically identify and configure services, allowing for a modular and scalable application structure.

For further details, refer to the [Setup Middleware section](#).

### Integration Layer

The `blueprint`, constructed in the [**Setup Layer**](), becomes accessible in subsequent layers of the [**Continuum Architecture**](), including the [Integration Layer](). The [Integration Layer]()'s primary role is to convert system-level incoming and outgoing events into Stone.js-specific events. This conversion is facilitated through middleware, which acts as the bridge between platform-specific events (e.g., HTTP requests) and the internal Stone.js event system.

Unlike the [**Setup Layer**](), where the `blueprint` is accessed through the middleware's context, the [Integration Layer]() requires middleware to be defined as classes. This is because the `blueprint` is injected into the constructor of these middleware classes, ensuring that it remains accessible throughout the lifecycle of the middleware. Consequently, integration middleware must always be defined as classes, rather than functions, to facilitate this form of dependency injection.

**Example of an Integration Middleware**  
Below is an example of an integration middleware class:

```typescript
export class BodyMiddleware {
  private readonly blueprint: IBlueprint;

  constructor({ blueprint }: { blueprint: IBlueprint }) {
    this.blueprint = blueprint;
  }

  handle(
    context: AdapterContext, 
    next: NextPipe<AdapterContext, IncomingEvent>
  ): IncomingEvent | Promise<IncomingEvent> {
    // Accessing blueprint options
    const alias: string = this.blueprint.get('app.adapter.alias');
    // Do some magic stuffs...
    return next(context)
  }
}
```

In this example, the `BodyMiddleware` class is responsible for handling incoming events, and it requires access to the `blueprint` for configuration purposes. The `blueprint` is injected through the constructor, which allows the middleware to utilize the configuration as needed during the event-handling process. This approach ensures that middleware can efficiently manage platform-specific data transformations while maintaining consistency with the broader application configuration.

As shown, in the [Integration Layer](), the `blueprint` is accessed from within the constructor, unlike the [**Setup Layer**]() where it is part of the middleware context.

For more details, refer to the [Integration Middleware section](#).

### Initialization Layer

A key feature of this layer is the setup of the service container, which manages dependencies throughout the application. The `blueprint` is registered in the container with the aliases `blueprint` and `config`, enabling consistent access to the configuration across all components where the container is available. This avoids the need to pass the `blueprint` directly to each component, ensuring a cleaner and more modular architecture.

**Accessing the Blueprint via the Container**  
With the `blueprint` registered in the container, accessing it becomes simple for any component initialized by the container. Here is an example of accessing the `blueprint` in a service provider:

```typescript
import { IBlueprint } from '@stone-js/core';

export class MyServiceProvider implements IProvider {
  private readonly blueprint: IBlueprint;

  constructor({ blueprint }: { blueprint: IBlueprint }) {
    this.blueprint = blueprint;
  }

  // Use the blueprint for service-specific initialization.
}
```

In this example, `MyServiceProvider` uses the container to resolve the `blueprint` by destructuring, making configuration settings easily accessible during the initialization process.

This approach ensures that all components follow a consistent configuration, providing a unified and flexible initialization process without the need for redundant access patterns or excessive manual passing of configuration data.

### Feature Layer

The Feature Layer is where user-defined components like services, controllers, and other application logic are implemented. 
This layer provides the flexibility to implement the core functionalities and business logic that make up the unique features of your application.
These components can access the `blueprint` via destructuring injection in their constructors, allowing the service container to provide registered components directly.

**Example of Destructuring Injection**  
Using the a decorator like `@Service`, components can directly access the `blueprint`:

```typescript
import { Service } from '@stone-js/core';

@Service()
export class MyService {
  private readonly blueprint: IBlueprint;

  constructor({ blueprint }: { blueprint: IBlueprint }) {
    this.blueprint = blueprint;
  }

  // Use blueprint for feature-specific operations.
}
```

In this example, the `blueprint` is accessed through destructuring injection, leveraging the service container. This allows all necessary configurations to be readily available, making the Feature Layer components easy to manage and consistent across the application.

## Configurations

This section focuses on the various ways you can register application components, Stone.js features, third-party libraries, and define configuration options. Stone.js offers two primary approaches: **declarative** and **imperative**. These approaches allow you to efficiently manage your application's setup, from straightforward component registration using decorators to flexible programmatic configuration, ensuring adaptability for different needs and levels of complexity.

### Declarative

In Stone.js, declarative configuration is achieved implicitly using specific decorators and their options. As demonstrated in the "[Quick Start Example](#quick-start-example)", decorators allow you to define configurations directly on your application components. This method is ideal for quickly configuring components on the fly, though it may be limited in terms of configuration depth.

**Example:**

```typescript
import { StoneApp, IncomingEvent, OutgoingResponse, IBlueprint } from '@stone-js/core';

@StoneApp({
  name: 'Stone.js',
  debug: true
})
export class MyApp {
  private readonly blueprint: IBlueprint;
  
  constructor({ blueprint }: { blueprint: IBlueprint }) {
    this.blueprint = blueprint;
  }

  handle(event: IncomingEvent): OutgoingResponse {
    return OutgoingResponse.create({
      content: { name: this.blueprint.get('app.name') }
    });
  }
}
```

In this example, we create a Stone.js application using the `@StoneApp` decorator, defining basic options such as the application's `name` and `debug` mode. Later, these options are accessed through the `blueprint` during the application's event handling.

### Imperative

Imperative configuration offers flexibility and greater control over application component settings. It can complement declarative configuration by allowing explicit definitions, making it suitable for advanced scenarios like customizing built-in configurations, third-party libraries, or tailoring the application for multi-environment support.

To define configurations imperatively, mark any configuration class with the `@Configuration()` decorator. These configuration classes must use **static properties**, this ensures the configuration is accessible during application initialization without instantiating the class.

**Namespace and Organization**: Similar to other layers of Stone.js, imperative configuration uses namespaces to keep options organized. This approach maintains consistency across all configurations. For instance, use the `app` [namespace](#namespace) to add core framework settings.

**Example:**

```typescript
import { Env } from '@stone-js/env';
import { Configuration, AppConfig } from '@stone-js/core';

@Configuration()
export class MyConfig {
  static readonly app: Partial<AppConfig> = {
    name: Env.get('APP_NAME', 'Stone.js'),
    builder: {
      defaultMiddlewarePriority: 20
    }
  }
}
```
:::important Note
Even when `@Configuration` does not take parameters, it must still be called with parentheses.
:::

#### Modular Configurations

You can split imperative configurations across multiple files, provided that each class follows the [namespace](#namespace) convention of Stone.js. This helps maintain a modular approach to managing your configurations, keeping them organized and easy to maintain, even as complexity grows.

### Asynchronous Configuration

A key advantage of **imperative configuration** in Stone.js is the ability to load configuration options asynchronously. This feature allows you to retrieve configuration settings dynamically from external sources, making it particularly useful for environments where settings may change or need to be fetched at runtime, such as cloud services or remote APIs.

The `load` method is a **static** method within your configuration class that should return configuration options in the form of a `StoneBlueprint`. By following the same [namespace](#namespace) structure as the `blueprint`, the dynamically loaded configurations are seamlessly integrated, ensuring they are readily accessible throughout the application using the appropriate [namespace](#namespace).

**Example:**

```typescript
import { Configuration, AppConfig, StoneBlueprint } from '@stone-js/core';
import { Env } from '@stone-js/env';

@Configuration()
export class MyConfig {
  static readonly app: Partial<AppConfig> = {
    name: Env.get('APP_NAME', 'Stone.js'),
    builder: {
      defaultMiddlewarePriority: 20
    }
  }

  static async load(): Promise<StoneBlueprint> {
    const app = await fetch('https://config-service.example.com/app-config').then(res => res.json());
    return { app };
  }
}
```

In this example, `load()` is used to asynchronously fetch configuration values for the `app` [namespace](#namespace). This setup allows you to dynamically set configuration options based on remote data sources, such as a configuration service or cloud storage, while still following the standard [namespace](#namespace) and `blueprint` structure of Stone.js.

This approach significantly enhances the flexibility of your application, allowing you to easily adapt to changing environments and integrate with external configuration providers without modifying the application's core logic. The asynchronous capability ensures that the `blueprint` is constructed dynamically, providing consistent and up-to-date configurations throughout the lifecycle of the application.

### Namespace

It's important to understand the namespaces within the `blueprint`, as they provide a conventional way to organize configuration in Stone.js.

A `blueprint` is represented by a JavaScript object literal (`{}`) where the core configuration elements of the framework are stored within the `{ app: {} }` property. Outside of this `{ app: {} }` core namespace, you may find additional namespaces representing third-party libraries, for example, `{ app: {}, router: {} }`.

The core `app` namespace contains settings essential for the application, whereas other namespaces like `router` are used for organizing third-party features or additional integrations.

#### Priority

The configuration system follows a specific priority for overrides. Third-party libraries have higher priority over default framework options, declarative configuration (defined via decorators) has a higher priority over third-party configurations, imperative configurations over the declarative configuration,
and asynchronous imperative configurations hold the highest priority.

This organization ensures that settings are consistently overridden in a predictable manner, allowing user-defined settings to take precedence.

**Example Access to Namespaces**  
This is why we access app options in the `blueprint` using dot notation like `blueprint.get('app.name')`, where `app` represents the core namespace. Similarly, for other namespaces, such as the router, you can access configuration values like `blueprint.get('router.rules')`.

This clear separation between namespaces ensures both core features and third-party integrations are easy to access and maintain.

### Manual Imperative Configuration

If you prefer to manage configurations explicitly without using decorators, Stone.js provides a **explicit blueprint configuration** option. This approach allows you to directly control the configuration process, bypassing the automatic discovery of components and instead registering each one explicitly.

With explicit `blueprint` configuration, there's no need for your components to conform to a specific structure they can be `classes` or `functions`. Unlike declarative configuration, which uses decorators to implicitly register components, here you are responsible for ensuring all components are manually registered in a configuration file, often referred to as the `blueprint`, so that the framework is aware of them.

The configurations for this method are organized under the `config/app` directory, specifically in a file named `StoneBlueprint.ts`. This file is the central location where you import all your components and define their configuration. The configuration can be split across several modules and then imported into this main `blueprint` file.

**Folder Structure Example:**

```
config
  └── app
      ├── StoneBlueprint.ts
      └── RoutingBlueprint.ts
```

Within these files, you use the `defineBlueprintConfig(...userBlueprints: StoneBlueprint[])` utility to assemble the configuration options, following the `blueprint` philosophy of Stone.js.

**Example:**

```typescript
// ./config/app/StoneBlueprint.ts
import { Env } from '@stone-js/env';
import { MyService } from '../../app/services/MyService';
import { defineBlueprintConfig, StoneBlueprint } from '@stone-js/core';

export const blueprint: StoneBlueprint = defineBlueprintConfig({
  app: {
    name: Env.get('APP_NAME', 'Stone.js'),
    services: [MyService]
  },
});
```

In this example, `defineBlueprintConfig` is used to assemble all configurations into a `blueprint` object. Unlike the declarative approach where components are discovered and configured automatically, you manually declare everything that needs to be registered in the framework.

By taking this route, the [Setup Layer]() is no longer needed, as the entire configuration process is centralized within `./config/app/StoneBlueprint.ts`. This provides a transparent and centralized view of which components are included in the application, making it particularly useful for scenarios where manual control is preferable.

**Notes:**

- By default, Stone.js uses **declarative configuration**. To switch to **explicit blueprint configuration**, uncomment the line `options: ./config` in `./Stone.config.js`.
  
- The namespace `./config/cli` is reserved for **CLI commands**. CLI modules should be defined separately to avoid including them in the final production package.

- This method also provides **override priority**. The order of priority is as follows:  
  1. **Default Configuration** - Core framework options.
  2. **Third-party Libraries** - Overrides core configurations.
  4. **Manual Imperative Configuration** - Has the highest priority and directly influences the application setup.

Explicit blueprint configuration is ideal when you need **explicit control** and **clarity** in defining how and which components are included in your application. It bypasses the automatic discovery features of Stone.js, giving you the flexibility to decide and register everything manually, which is especially useful for advanced configurations or large-scale projects where predictability and exactness are paramount.

## Feature Activation

Stone.js, as a modular nano-framework, allows you to install and activate features progressively during the development process based on your needs. This flexibility applies to Stone.js features as well as third-party libraries. After installing a feature via `npm install`, you can activate it using one of the following approaches:

1. **Using Explicit Decorators**: You can decorate your main application handler with decorators provided by the library, such as `@StoneApp()` and `@Routing()`. This makes it easy to declaratively enable features.
   ```typescript
   @Routing()
   @StoneApp()
   export class MyApp {}
   ```
   
2. **Importing Blueprints**: Another way to activate features is by importing the library's `blueprint` and passing it as the second parameter to `@StoneApp()`. This allows a modular integration of different components.
   ```typescript
   @StoneApp({}, [RoutingBlueprint])
   export class MyApp {}
   ```
   
3. **Loading Features via Explicit Configuration**: For advanced control, you can use the `load` method in a configuration class to activate components.
   ```typescript
   @Configuration()
   export class MyConfig {
     static readonly app: Partial<AppConfig> = {
       name: Env.get('APP_NAME', 'Stone.js'),
       builder: {
         defaultMiddlewarePriority: 20
       }
     }

     static load(): StoneBlueprint {
       return mergeBlueprints(RoutingBlueprint);
     }
   }
   ```
   You can also import and merge multiple blueprints by using the `mergeBlueprints(...blueprints: StoneBlueprint[])` utility.

:::important Key Concept
Within the Stone.js ecosystem, everything, including Stone.js itself, is considered a library. Thus, the `@StoneApp` decorator is used to designate your project as a Stone.js application by adding the essential core features.
:::

## Custom Decorators

Declarative configurations in Stone.js rely on attaching metadata to your application components via decorators. This facilitates the automatic discovery, registration, and configuration of components at runtime. Whether you use built-in Stone.js decorators, define your own, or leverage third-party library decorators, the workflow remains consistent.

This section explains how to define your own decorators, use the metadata utilities provided by Stone.js, and effectively introspect and access the metadata throughout your application.

### Defining Custom Decorators

To begin, you need to create a decorator that can attach metadata to a class, method, or property.

Stone.js uses the latest version of [`proposal-decorators`](https://github.com/tc39/proposal-decorators) and [`proposal-decorator-metadata`](https://github.com/tc39/proposal-decorator-metadata), version `2023-11`. Here is the signature of a decorator:

```typescript
type Decorator = (value: Input, context: {
  kind: string;
  name: string | symbol;
  access: {
    get?(): unknown;
    set?(value: unknown): void;
  };
  isPrivate?: boolean;
  isStatic?: boolean;
  addInitializer?(initializer: () => void): void;
  metadata?: Record<string | number | symbol, unknown>;
}) => Output | void;
```

A decorator is simply a function with `value` and `context` as parameters, which provide access to both the value being decorated and the metadata context.

#### Creating a Simple Decorator

You can create a decorator directly as a function, which allows you to add metadata without any additional parameters:

```typescript
export const MyDecorator = (value, context) => {
  // Add metadata here
};
```

Usage:

```typescript
@MyDecorator
export class MyClass {}
```

#### Creating a Decorator Factory

Alternatively, you can create a decorator factory to enable passing configuration options:

```typescript
export const MyDecorator = (options) => {
  return (value, context) => {
    // Access `options` here
    // Attach metadata
  };
};
```

Usage:

```typescript
@MyDecorator({ name: 'Stone' })
export class MyClass {}
```

### Metadata Utilities

Most of the time, decorators are used to attach metadata to classes via the `metadata` property in the `context` object. Stone.js provides utility functions to manage metadata effectively:

- `setMetadata(context, key, value)`: Adds metadata to the class.
- `hasMetadata(Class, key)`: Checks if a class has specific metadata.
- `getMetadata(Class, key, defaultValue)`: Retrieves metadata from the class.
- `getAllMetadata(Class, defaultValue)`: Retrieves all metadata from the class.
- `removeMetadata(Class, key)`: Removes metadata from the class.

Here’s how you can define a decorator using these utilities:

```typescript
import { setMetadata, getMetadata, ClassDecoratorContext, ClassType } from '@stone-js/core';

export const MY_DECORATOR_KEY = Symbol('mydecorator');

export const MyDecorator = <T extends ClassType = ClassType>(options: Record<string, unknown>) => {
  return (target: T, context: ClassDecoratorContext<T>) => {
    setMetadata(context, MY_DECORATOR_KEY, options);
  };
};

// Usage
@MyDecorator({ name: 'Stone' })
export class MyClass {}

const options = getMetadata(MY_DECORATOR_KEY); // { name: 'Stone' }
```

### Blueprint Utilities

In addition to metadata utilities, Stone.js provides tools specifically for `blueprints`, allowing you to work directly with structured configuration data:

- `addBlueprint(target, context, blueprint)`: Adds a `blueprint` to the target class.
- `hasBlueprint(Class)`: Checks if a class has an associated `blueprint`.
- `getBlueprint(Class, defaultValue)`: Retrieves the `blueprint` from the class.

For example:

```typescript
import { addBlueprint, getBlueprint, ClassDecoratorContext, ClassType, StoneBlueprint } from '@stone-js/core';

export const MyDecorator = <T extends ClassType = ClassType>(options: StoneBlueprint) => {
  return (target: T, context: ClassDecoratorContext<T>) => {
    addBlueprint(target, context, options);
  };
};

// Usage
@MyDecorator({ name: 'Stone' })
export class MyClass {}

const blueprint = getBlueprint(MyClass); // { name: 'Stone' }
```

### Introspecting Metadata

After defining your custom decorator, you need to introspect your components to gather metadata and identify the components decorated with it. This introspection is carried out in the [Setup Layer]() using configuration middleware:

1. **Create a Configuration Middleware**: Use configuration middleware to filter components that are decorated.
2. **Retrieve Metadata**: Use metadata utilities (`getMetadata`, etc.) to retrieve metadata.
3. **Inject into the Stone Blueprint**: Add the components and metadata to the `StoneBlueprint`, categorizing them under the appropriate [namespace](#namespace).

To create configuration middleware in a Stone.js application, use the `@ConfigMiddleware()` decorator. Here's an example:

```typescript
import { NextPipe } from '@stone-js/pipeline';
import { MY_DECORATOR_KEY } from './my-decorator';
import { hasMetadata, getMetadata, ConfigMiddleware, ConfigContext, IBlueprint } from '@stone-js/core';

@ConfigMiddleware
export class MyConfigMiddleware {
  handle(context: ConfigContext, next: NextPipe<ConfigContext, IBlueprint>): IBlueprint | Promise<IBlueprint> => {
    context.modules
      .filter((module) => hasMetadata(module, MY_DECORATOR_KEY))
      .forEach((module) => {
        context.blueprint.add('app.myConfigs', {
          module,
          metadata: getMetadata(module, MY_DECORATOR_KEY, {}),
        });
      });

    return next(context);
  }
}
```

### Accessing Metadata and Components

Once your components are introspected and registered, you can access them throughout your Stone.js application using the `blueprint` alias, which is an instance of [`Config`](../../packages/config/) available from the service container.

Here’s an example of accessing configuration in a service:

```typescript
import { Service, IBlueprint } from '@stone-js/core'

@Service()
export class FooService {
  private readonly blueprint: IBlueprint;
  
  constructor({ blueprint }: { blueprint: IBlueprint }) {
    this.blueprint = blueprint;
  }

  barMethod() {
    console.log(this.blueprint.get('app.myConfigs'));
  }
}
```

#### Accessing Blueprint in Service Providers

Service providers can also access the `blueprint` during lifecycle hooks (`beforeHandle`, `register`, `boot`, and `onTerminate`). This is especially useful for third-party libraries that need to intercept components or configurations defined via decorators during the `register` or `boot` stages.

```typescript
import { Container } from '@stone-js/service-container';
import { ServiceProvider, IProvider } from '@stone-js/core';

interface MyServiceProviderOptions {
  container: Container
  blueprint: IBlueprint
}

@ServiceProvider()
export class MyServiceProvider implements IProvider {
  private readonly container: Container;
  private readonly blueprint: IBlueprint;
  
  constructor({ blueprint, container }: MyServiceProviderOptions) {
    this.container = container;
    this.blueprint = blueprint;
  }

  register(): void {
    this.blueprint.get('app.myConfigs', []).forEach(({ module, metadata }) => {
      this.container.singleton(() => new module(metadata));
    });
  }
}
```

### Summary

The custom decorator mechanism in Stone.js provides a powerful way to add metadata to your components, allowing them to be dynamically discovered, registered, and configured at runtime. Using the utilities provided by Stone.js, you can easily define decorators, introspect components, and seamlessly integrate them into the Stone `Blueprint`, ensuring a modular and flexible application architecture.

## Final Summary

Stone.js is a modular framework based on [Continuum Architecture](), aimed at next-generation application development. It is divided into four layers:

- **Setup Layer**: Builds the `blueprint` through middleware, which is a centralized configuration object for the entire app.
- **Integration Layer**: Converts platform-level events into Stone.js events, using middleware to bridge the gap.
- **Initialization Layer**: Boots up components and initializes the service container, making the `blueprint` accessible across the app.
- **Feature Layer**: Holds application-specific components like services and controllers.

**Configuration Approaches**

Stone.js offers [**Declarative**](#declarative) and [**Imperative**](#imperative) configurations:

- **Declarative**: Uses decorators to easily register components and attach configuration metadata.
- **Imperative**: Provides advanced control by allowing programmatic definition of configuration options.

For full control, [Manual Imperative Configuration](#manual-imperative-configuration) is also available, allowing direct setup of components without automatic discovery.

**Stone Blueprint**

The `StoneBlueprint` is the core configuration object that consolidates everything needed for application construction. It is organized using namespaces (like `app`, `router`), ensuring a clean, maintainable structure.

**Feature Activation**

Features can be activated in multiple ways, via decorators, importing `blueprints`, or using the `load()` method, providing flexibility in integrating core or third-party features.

**Custom Decorators**

Developers can define **Custom Decorators** to add metadata to components, enabling automatic registration and configuration during runtime. Stone.js provides utilities to help with managing metadata efficiently.

**Conclusion**

Stone.js offers flexible configuration methods, whether **Declarative** for ease or **Imperative** for control, enabling you to progressively build, scale, and customize your applications. It combines simplicity with advanced options, making it adaptable for projects of any complexity.