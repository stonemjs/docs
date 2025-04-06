---
title: Events
---

Internal events represent the category of events that occur within Stone.js, including events propagated by various application modules and user-defined events.

Events are an excellent way to decouple different aspects of your application, as a single event can have multiple listeners that do not depend on each other. For example, if you want to log all outgoing responses within your application, instead of coupling your logging logic with all controllers, you can create a listener that listens to the `KernelEvent` triggered by the Stone.js kernel to perform your logging. This allows you to remove your listener without impacting the application's functionality when you no longer need it.

## Listen to Events

Stone.js provides a simple and effective API for subscribing to and listening to various events within your application.

::: important
All built-in and custom events are implementations of the [`Event`](https://github.com/stonemjs/core/blob/main/src/events/Event.mjs) class.
:::

### Listener

To listen for internal events, you need a `Listener`, which is an ES6 class with a `handle` method that can be synchronous or asynchronous and takes the propagated event as a parameter.

To register your listener, decorate it with the `@Listener` decorator, specifying the event to subscribe to:

```js
import { KernelEvent } from '@stone-js/core'
import { Listener } from '@stone-js/core/decorators'

@Listener({
  event: KernelEvent.EVENT_HANDLED
})
export class LogResponse {
  /**
   * Handle KernelEvent.
   *
   * @param {KernelEvent}
   */
  handle(event) {
    console.log(event.get('response'))
  }
}
```

All listeners are resolved from the service container, allowing you to take advantage of dependency injection through their constructors:

```js
import { KernelEvent } from '@stone-js/core'
import { Listener } from '@stone-js/core/decorators'

@Listener({
  event: KernelEvent.EVENT_HANDLED
})
export class LogResponse {
  construct({ loggingService }) {
    this.loggingService = loggingService
  }

  /**
   * Handle KernelEvent.
   *
   * @param {KernelEvent}
   */
  handle(event) {
    this.loggingService.log(event.get('response'))
  }
}
```

### Subscriber

A subscriber allows you to subscribe to multiple events within a single class. 

A subscriber is an ES6 class with a `subscribe` method that takes an [`EventEmitter`](https://github.com/stonemjs/core/blob/main/src/events/EventEmitter.mjs) instance, 
which can be used to subscribe to events. You can then call the `on` method of the `EventEmitter` to register your listeners.

To register your subscriber, decorate it with the `@Subscriber` decorator:

```js
import { KernelEvent } from '@stone-js/core'
import { Subscriber } from '@stone-js/core/decorators'

@Subscriber()
export class LogEventSubscriber {
  /**
   * Subscribe to events.
   *
   * @param {EventEmitter}
   */
  subscribe(events) {
    events.on(KernelEvent.EVENT_HANDLED, (event) => this.#logResponse(event))
  }

  #logResponse(event) {
    console.log(event.get('response'))
  }
}
```

All subscribers are resolved from the service container, allowing you to take advantage of dependency injection through their constructors:

```js
import { KernelEvent } from '@stone-js/core'
import { Subscriber } from '@stone-js/core/decorators'

@Subscriber()
export class LogEventSubscriber {
  construct({ loggingService }) {
    this.loggingService = loggingService
  }

  /**
   * Subscribe to events.
   *
   * @param {EventEmitter}
   */
  subscribe(events) {
    events.on(KernelEvent.EVENT_HANDLED, (event) => this.#logResponse(event))
  }

  #logResponse(event) {
    this.loggingService.log(event.get('response'))
  }
}
```

## Custom Events

With Stone.js, you are not limited to subscribing only to built-in events. You can also create and propagate your own custom events using its API.

### Defining

A custom event is essentially a data container that holds the information related to the event, as well as the event name used by listeners to subscribe.

All custom events inherit from [`Event`](https://github.com/stonemjs/core/blob/main/src/events/Event.mjs) and define the event name as a static getter:

```js
import { Event } from '@stone-js/core'

export class UserEvent extends Event {
  /**
   * USER_INFO Event name.
   *
   * @event  UserEvent#USER_INFO
   * @return {string}
   */
  static get USER_INFO() {
    return 'USER_INFO'
  }

  /**
   * Create an UserEvent.
   *
   * @param {User} data - Event data.
   */
  constructor(data) {
    super(UserEvent.USER_INFO, data)
  }
}
```

As you can see, the event name is defined in the `USER_INFO` getter. Then, the parent constructor is called to pass the event name and data, which will hydrate your event.

### Listening

The principle remains the same for subscribing to custom events. You just need to define a listener and decorate it properly:

```js
import { Listener } from '@stone-js/core/decorators'

@Listener({
  event: UserEvent.USER_INFO
})
export class LogUserInfo {
  /**
   * Handle UserEvent.
   *
   * @param {UserEvent}
   */
  handle(event) {
    console.log(event.details)
  }
}
```

Here, the `event.details` getter is used to access the data passed to the event. You could also use the `get` method when your data is literal objects, which supports **deep string dot notation**.

### Dispatching

Once your event is created, you can dispatch it using the `EventEmitter`, accessible from the constructor of all components resolved by the service container. Use the `emit` method to dispatch your custom events.

```js
import { Service } from '@stone-js/core/decorators'

@Service()
export class UserService {
  construct({ events }) {
    this.events = events
  }

  /**
   * Save user.
   *
   * @param {User} user
   */
  saveUser(user) {
    this.events.emit(new UserEvent(user))
  }
}
```

As you can see, we resolved the event emitter from the container and then used it in the `saveUser` method to trigger our custom event via its `emit` method. The custom event takes the user object as a parameter.