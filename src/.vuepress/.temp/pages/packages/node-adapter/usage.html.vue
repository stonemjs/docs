<template><div><p>The <code v-pre>NodeHttpAdapter</code> is a wrapper around the Node.js HTTP and HTTPS modules.
Its purpose is to run a Stone.js HTTP application in a Node.js environment.
It converts inputs and outputs into Stone.js events using mappers, with the event lifecycle managed via hooks.</p>
<h2 id="creating-a-new-adapter" tabindex="-1"><a class="header-anchor" href="#creating-a-new-adapter"><span>Creating a New Adapter</span></a></h2>
<p>To create a new adapter, you can use the static factory method <code v-pre>create</code> or the <code v-pre>new</code> keyword. It requires a <a href="#handler-factory">handler factory</a> as a parameter and options.</p>
<p><strong>Options:</strong></p>
<ul>
<li><code v-pre>inputMapper</code>: The mapper for converting inputs into Stone.js events.</li>
<li><code v-pre>outputMapper</code>: The mapper for converting Stone.js outputs into Node.js responses.</li>
<li><code v-pre>url</code>: The URL where the Node.js server will run to receive requests. The default value is <code v-pre>http://localhost:8080</code>.</li>
<li><code v-pre>server</code>: Options to be passed to the Node.js HTTP server.</li>
<li><code v-pre>logger</code>: The logger for logging errors.</li>
</ul>
<CodeTabs id="39" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://localhost:8080'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">app</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello world!'</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> httpAdapter <span class="token operator">=</span> NodeHttpAdapter<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> app<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span> url<span class="token operator">:</span> <span class="token string">'http://localhost:8080'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">app</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello world!'</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> httpAdapter <span class="token operator">=</span> NodeHttpAdapter<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> app<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>We will analyze each aspect of these configurations in depth.</p>
<h3 id="handler" tabindex="-1"><a class="header-anchor" href="#handler"><span>Handler</span></a></h3>
<p>A handler is the entry point to your application and is used by the adapters to intercept incoming events and provide an output response. The handler is mandatory when creating an adapter.</p>
<p><strong>Stone.js adapters support two types of handlers:</strong></p>
<ul>
<li>Implicit handler</li>
<li>Explicit handler</li>
</ul>
<p><strong>Implicit Handler</strong>
An implicit handler is a function that takes an event as a parameter and returns a response. It is called for each new request and allows using adapters in standalone mode with minimal, simple, and low-level usage.</p>
<p>Example of an implicit handler:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">app</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I am the event handler'</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Explicit Handler</strong>
An explicit handler can be either a literal object or an instance of a class containing a <code v-pre>handle</code> method, which takes the event as a parameter and returns a response. It is called for each new request. In the context of an object, if lifecycle methods are present, they are called in order. With an object, you can benefit from hooks within the object itself. The only mandatory method for an object handler is the <code v-pre>handle</code> method, while the lifecycle methods are:</p>
<ul>
<li><code v-pre>beforeHandle</code>: Executes at each event before calling the <code v-pre>handle</code> method.</li>
<li><code v-pre>onTerminate</code>: Executes after each response is sent to the user.</li>
</ul>
<p>Example of an explicit handler:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// ES6 class</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">beforeHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I ran at each request and just before the event handler'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I am the event handler'</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onTerminate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I ran after each response sent by the event handler'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// POJO</span></span>
<span class="line"><span class="token keyword">const</span> Application <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">beforeHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I ran at each request and just before the event handler'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I am the event handler'</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onTerminate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I ran after each response sent by the event handler'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="handler-factory" tabindex="-1"><a class="header-anchor" href="#handler-factory"><span>Handler Factory</span></a></h3>
<p>Handler resolution is made possible by the handler factory. It is a function responsible for providing a handler, which means a new instance of your application for each call. This ensures that each call is isolated and consistent according to the event.</p>
<p>Example of a handler factory:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Explicit factory handler</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">factoryHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Implicit factory handler</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">factoryHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'I am the event handler'</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks"><span>Hooks</span></a></h3>
<p>Hooks manage the event lifecycle. The available hooks are:</p>
<ul>
<li><code v-pre>onInit</code>: Runs once before everything when the app first starts. Useful for one-time initialization.</li>
<li><code v-pre>beforeHandle</code>: Runs at each event just before the action handler. Useful for configuration or initialization at each event.</li>
<li><code v-pre>onTerminate</code>: Runs after each response has been sent.</li>
</ul>
<p>You can subscribe to these hooks from the adapter instance or from your explicit handler. Note that the only way to subscribe to the <code v-pre>onInit</code> hook is through the adapter directly, as the application is not yet initialized when it executes.</p>
<p><strong>From the adapter:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">httpAdapter<span class="token punctuation">.</span><span class="token function">hook</span><span class="token punctuation">(</span><span class="token string">'onInit'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Application started'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">httpAdapter<span class="token punctuation">.</span><span class="token function">hook</span><span class="token punctuation">(</span><span class="token string">'beforeHandle'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Will handle event'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">httpAdapter<span class="token punctuation">.</span><span class="token function">hook</span><span class="token punctuation">(</span><span class="token string">'onTerminate'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Event handled'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>From your explicit handler:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// ES6 class</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">beforeHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Will handle event'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onTerminate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Event handled'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// POJO</span></span>
<span class="line"><span class="token keyword">const</span> Application <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">beforeHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Will handle event'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onTerminate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Event handled'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="adaptermapper" tabindex="-1"><a class="header-anchor" href="#adaptermapper"><span>AdapterMapper</span></a></h3>
<p>Mappers are mandatory for transforming inputs and outputs.</p>
<p><strong>Introduction:</strong></p>
<ul>
<li>It ensures the conversion of inputs and outputs via pipes.</li>
<li>It allows customization of inputs and outputs through pipes.</li>
<li>This forms the concept of Adaptive Transformation, enabling you to choose what to convert for inputs and outputs.</li>
</ul>
<p><strong>Usage:</strong>
To create an adapter mapper, you need:</p>
<ul>
<li>A service container.</li>
<li>A list of pipes/middleware to ensure the conversion.</li>
<li>A destination resolver, useful for handling the final result, the output of the pipes.</li>
</ul>
<p>Middlewares can be functions or classes and must have a <code v-pre>handle</code> method in the case of a class. They take a passable object and a <code v-pre>next</code> function, which must be called with the passable object, and then return the passable object. The passable object contains the following properties:</p>
<ul>
<li><code v-pre>message</code>: Represents the input event from Node.js.</li>
<li><code v-pre>response</code>: Represents the output event from Node.js.</li>
<li><code v-pre>event</code>: Represents the event transformed through the pipes.</li>
<li><code v-pre>result</code>: Represents the Stone.js response to be transformed into a Node.js response.</li>
</ul>
<p><strong>Destination Resolver:</strong>
The destination resolver is useful for finalizing the transformation. For example, the <code v-pre>event</code> property of the passable object is a literal object and must be converted into a Stone.js event. This work is done at the end of the transformation by the destination resolver. The destination resolver must be a function that takes the passable object as a parameter and returns a value.</p>
<p>Example of a destination resolver:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Input resolver</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">inputResolver</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">passable</span><span class="token punctuation">)</span> <span class="token operator">=></span> IncomingHttpEvent<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>passable<span class="token punctuation">.</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Output resolver</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">outputResolver</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">passable</span><span class="token punctuation">)</span> <span class="token operator">=></span> passable<span class="token punctuation">.</span>response<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Given the overview, here is an example of a mapper:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> AdapterMapper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// We create our middleware</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">inputMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">passable<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  passable<span class="token punctuation">.</span>event<span class="token punctuation">.</span>method <span class="token operator">=</span> passable<span class="token punctuation">.</span>message<span class="token punctuation">.</span>method<span class="token punctuation">;</span></span>
<span class="line">  passable<span class="token punctuation">.</span>event<span class="token punctuation">.</span>headers <span class="token operator">=</span> passable<span class="token punctuation">.</span>message<span class="token punctuation">.</span>headers<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>passable<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">outputMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">passable<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  passable<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function-variable function">send</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> passable<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>passable<span class="token punctuation">.</span>result<span class="token punctuation">.</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>passable<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Input resolver</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">inputResolver</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">passable</span><span class="token punctuation">)</span> <span class="token operator">=></span> IncomingHttpEvent<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>passable<span class="token punctuation">.</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Output resolver</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">outputResolver</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">passable</span><span class="token punctuation">)</span> <span class="token operator">=></span> passable<span class="token punctuation">.</span>response<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// We create our Adapter</span></span>
<span class="line"><span class="token keyword">const</span> inputAdapter <span class="token operator">=</span> AdapterMapper<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>inputMiddleware<span class="token punctuation">]</span><span class="token punctuation">,</span> inputResolver<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> outputAdapter <span class="token operator">=</span> AdapterMapper<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>outputMiddleware<span class="token punctuation">]</span><span class="token punctuation">,</span> outputResolver<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="running-the-application" tabindex="-1"><a class="header-anchor" href="#running-the-application"><span>Running the Application</span></a></h2>
<p>To run the application, use the <code v-pre>run</code> method from the adapter:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">adapter<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="hot-launch" tabindex="-1"><a class="header-anchor" href="#hot-launch"><span>Hot Launch</span></a></h3>
<p>You can create and run the application simultaneously using the static method <code v-pre>createAndRun</code>, which takes the same parameters as <code v-pre>create</code> but also starts the application immediately:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">NodeHttpAdapter<span class="token punctuation">.</span><span class="token function">createAndRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


