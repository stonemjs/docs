<template><div><p>The <code v-pre>NodeHttpAdapter</code> is a subclass of the <a href="https://github.com/stonemjs/core/blob/main/src/adapter/Adapter.mjs" target="_blank" rel="noopener noreferrer">Adapter</a> class,
which provides the foundational methods and properties for all adapters in <strong>Stone.js</strong>.
It implements the Adapter pattern to integrate <strong>Stone.js</strong> with the Node.js HTTP server.
As the main component of the <strong>Integration Layer</strong>, it understands the specifics of the Node.js platform and facilitates communication with it.</p>
<h2 id="adaptive-transformation" tabindex="-1"><a class="header-anchor" href="#adaptive-transformation"><span>Adaptive Transformation</span></a></h2>
<p>This is a process that uses a pipeline with middleware to perform data transformation in a dynamic and extensible manner. This concept allows for the application of various middleware components to process and convert data flexibly and customizably. Users can adapt the transformation process to their needs by adding or removing middleware, accommodating different integration requirements and enabling developers to easily extend and modify the transformation process.</p>
<p>For example, the adapter uses the Node.js HTTP server internally and transforms HTTP requests <code v-pre>IncomingMessage</code> from the Node.js
HTTP server into <strong>Stone.js</strong> events <code v-pre>IncomingHttpEvent</code>, and <strong>Stone.js</strong> responses <code v-pre>OutgoingHttpResponse</code>
into HTTP responses <code v-pre>OutgoingMessage</code> from the Node.js HTTP server.
The adapter can convert a simple HTTP GET request into an event that Stone.js can process,
and then convert the Stone.js response back into an HTTP response to be sent to the client.</p>
<p>The <strong>Adaptive Transformation</strong> process is handled by the <code v-pre>AdapterMapper</code>, which ensures smooth integration by applying the necessary middleware components dynamically.</p>
<h2 id="middleware" tabindex="-1"><a class="header-anchor" href="#middleware"><span>Middleware</span></a></h2>
<p>The adapter includes <a href="https://github.com/stonemjs/node-adapter/tree/main/src/middleware" target="_blank" rel="noopener noreferrer">built-in middleware</a>
for transforming HTTP requests in Node.js and supports server configuration via various options.
Additionally, users can create and add their own middleware to extend the adapter's functionality.
It also handles errors during the transformation process to ensure robust and reliable operations.</p>
<h2 id="lifecycle" tabindex="-1"><a class="header-anchor" href="#lifecycle"><span>Lifecycle</span></a></h2>
<p>The adapter provides hooks to the event lifecycle:</p>
<ul>
<li><strong>OnInit Hook</strong>: Runs once before everything when the app first starts, useful for one-time initialization.</li>
<li><strong>BeforeHandle Hook</strong>: Runs at each event and just before running the action handler, useful for configuration or initialization at each event.</li>
<li><strong>OnTerminate Hook</strong>: Runs after each response has been sent, useful for cleanup or finalization tasks.</li>
</ul>
<h2 id="handler-resolution" tabindex="-1"><a class="header-anchor" href="#handler-resolution"><span>Handler Resolution</span></a></h2>
<p>The adapter employs a process called <strong>Handler Resolution</strong>, where it uses a factory method passed during its creation to resolve a unique instance of the action handler for each event. This ensures that each event is handled by a fresh instance of the action handler, maintaining isolation and consistency across events.</p>
</div></template>


