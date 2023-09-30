---
title: HTTP Core
---

The `HTTP Core` Library is an essential component of the **Stone.js** ecosystem, designed to handle HTTP communication within **Stone.js** applications. 

**Stone.js** is a modular framework built on a microkernel architecture, allowing developers to include only the necessary modules, 
keeping applications lightweight and efficient. This library provides crucial classes for managing HTTP requests and responses, 
such as `IncomingHttpEvent`, `OutgoingHttpResponse`, and specialized response types like `JsonResponse` and `BinaryFileResponse`.

The primary objective of this documentation is to facilitate the integration and deep understanding of how **Stone.js** handles the HTTP flow. It provides detailed guidance on setting up and using the library, ensuring that developers can seamlessly transform platform-specific requests into **Stone.js** events and return appropriate responses.

In **Stone.js**, everything entering the application is considered an event, specifically `IncomingEvent` or `IncomingHttpEvent` (a subclass of `IncomingEvent`). Similarly, everything exiting the application is a response to the received event, either an `OutgoingResponse` or `OutgoingHttpResponse` (a subclass of `OutgoingResponse`). By leveraging these classes, developers can build robust and efficient web applications that integrate seamlessly with platform-specific HTTP handling. This document aims to help developers integrate this module into a **Stone.js** application and understand the package comprehensively, ensuring that all **Stone.js** packages remain plug-and-play for ease of use and flexibility.
