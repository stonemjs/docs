---
title: Node HTTP Adapter
---

The `NodeHttpAdapter` is a subclass of the [Adapter](https://github.com/stonemjs/core/blob/main/src/adapter/Adapter.mjs) class, 
which provides the foundational methods and properties for all adapters in **Stone.js**. 
It implements the Adapter pattern to integrate **Stone.js** with the Node.js HTTP server. 
As the main component of the **Integration Layer**, it understands the specifics of the Node.js platform and facilitates communication with it.

## Adaptive Transformation

This is a process that uses a pipeline with middleware to perform data transformation in a dynamic and extensible manner. This concept allows for the application of various middleware components to process and convert data flexibly and customizably. Users can adapt the transformation process to their needs by adding or removing middleware, accommodating different integration requirements and enabling developers to easily extend and modify the transformation process.

For example, the adapter uses the Node.js HTTP server internally and transforms HTTP requests `IncomingMessage` from the Node.js 
HTTP server into **Stone.js** events `IncomingHttpEvent`, and **Stone.js** responses `OutgoingHttpResponse` 
into HTTP responses `OutgoingMessage` from the Node.js HTTP server. 
The adapter can convert a simple HTTP GET request into an event that Stone.js can process, 
and then convert the Stone.js response back into an HTTP response to be sent to the client.

The **Adaptive Transformation** process is handled by the `AdapterMapper`, which ensures smooth integration by applying the necessary middleware components dynamically.

## Middleware

The adapter includes [built-in middleware](https://github.com/stonemjs/node-adapter/tree/main/src/middleware) 
for transforming HTTP requests in Node.js and supports server configuration via various options. 
Additionally, users can create and add their own middleware to extend the adapter's functionality. 
It also handles errors during the transformation process to ensure robust and reliable operations.

## Lifecycle

The adapter provides hooks to the event lifecycle:

- **OnInit Hook**: Runs once before everything when the app first starts, useful for one-time initialization.
- **BeforeHandle Hook**: Runs at each event and just before running the action handler, useful for configuration or initialization at each event.
- **OnTerminate Hook**: Runs after each response has been sent, useful for cleanup or finalization tasks.

## Handler Resolution
The adapter employs a process called **Handler Resolution**, where it uses a factory method passed during its creation to resolve a unique instance of the action handler for each event. This ensures that each event is handled by a fresh instance of the action handler, maintaining isolation and consistency across events.

