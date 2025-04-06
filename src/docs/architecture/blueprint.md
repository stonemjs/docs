---
title: Blueprint
---

## Blueprint Utility Functions

When building your Stone.js app using the **Imperative API**, you use a set of functions to define its structure in a clear and explicit way.  
We call these the **blueprint utility functions** — and they’re your go-to tools for shaping how your app behaves, no matter where it runs.

### Core Blueprint Utility Functions

| Function | Purpose |
|----------|---------|
| `defineAppBlueprint()` | Defines the main structure of your app |
| `defineEventHandler()` | Declares how to handle events (HTTP, CLI, etc.) |
| `defineErrorHandler()` | Catches and handles errors |
| `defineAdapterErrorHandler()` | Handles adapter-level errors (e.g., HTTP, Lambda) |
| `defineFactoryEventHandler()` | Creates dynamic event handlers with context |
| `defineFactoryErrorHandler()` | Creates dynamic error handlers |
| `defineFactoryServiceProvider()` | Declares external services |
| `defineFactoryService()` | Creates services with full access to context |
| `defineFactoryEventListener()` | Adds one-time event listeners |
| `defineFactoryEventSubscriber()` | Subscribes to one or more events |
| `defineFactoryMiddleware()` | Registers functional middleware |
| `defineClassMiddleware()` | Registers class-based middleware (with decorators) |

All of these are just **functions** — meaning you can:
- compose them
- test them
- reuse them
- and understand them at a glance

### Stone.js Wisdom Drop

> Prefer simplicity and magic? Use **decorators**.  
> Prefer control and functional purity? Use **blueprint utility functions**.

### Decorators
....