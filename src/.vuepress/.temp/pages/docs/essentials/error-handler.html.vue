<template><div><p>In Stone.js, an <strong>Error Handler</strong> is your domain’s safety net. It’s where uncertainty becomes clarity — where thrown errors meet intentional handling. Just like an event handler responds to intentions, an error handler responds to disruptions. It’s not an afterthought — it’s a first-class citizen of the framework.</p>
<p>Stone.js encourages you to throw errors freely when something goes wrong. You don’t need to wrap everything in try/catch. Instead, trust the system: <strong>throw first, handle later</strong>. That’s the philosophy. And error handlers are the mechanism that makes it work.</p>
<p>These handlers are context-aware and dimension-specific. In the <strong>initialization dimension</strong>, they help your domain respond gracefully to unexpected situations. In the <strong>integration dimension</strong>, they help adapters transform errors into platform-friendly responses (e.g., an HTTP 500).</p>
<p>No matter where the error happens, Stone.js provides a clean, structured way to:</p>
<ul>
<li>Catch and process it</li>
<li>Log it (if needed)</li>
<li>Return a proper response (or not)</li>
</ul>
<p>This clean separation of concerns makes your application more robust, testable, and expressive — fully aligned with the <strong>Continuum Architecture</strong>. Because in a continuum, <strong>the context can fail too</strong> — and your system must respond accordingly.</p>
<h2 id="error-handler-fundamentals" tabindex="-1"><a class="header-anchor" href="#error-handler-fundamentals"><span>Error Handler Fundamentals</span></a></h2>
<p>Stone.js treats errors as first-class context events. Errors can occur at any point in the system — during setup, initialization, middleware execution, event handling, adapter processing, or even within a user-defined service. That’s expected. What matters is <strong>how you react</strong>.</p>
<h3 id="throw-early-handle-later" tabindex="-1"><a class="header-anchor" href="#throw-early-handle-later"><span>Throw Early, Handle Later</span></a></h3>
<p>In Stone.js, you’re encouraged to <strong>throw errors freely</strong> — wherever something invalid, unexpected, or critical happens. Don't second-guess yourself. If it's an error, <code v-pre>throw</code>.<br>
Stone.js will intercept it and route it to the appropriate error handler — based on the <strong>error’s class name</strong> and the <strong>current dimension</strong> (initialization or integration).</p>
<p>This leads to cleaner domain code: you don't litter your logic with try/catch blocks. You express intent through exceptions — and handle them <strong>declaratively</strong> or <strong>imperatively</strong> elsewhere.</p>
<h3 id="custom-error-classes-your-best-friends" tabindex="-1"><a class="header-anchor" href="#custom-error-classes-your-best-friends"><span>Custom Error Classes: Your Best Friends</span></a></h3>
<p>Stone.js matches errors to handlers using the <strong>name</strong> of the error class.
That’s why it’s <strong>strongly recommended</strong> to define your own error classes and explicitly set their names.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UnauthorizedError</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"UnauthorizedError"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>It's crucial to define a class name explicitly. Because class names can be minified or obfuscated in production, using the class name directly (like <code v-pre>UnauthorizedError</code>) ensures that your error handlers can always find the right match.</p>
</div>
<p>This gives your system semantic clarity and fine-grained control. You can:</p>
<ul>
<li>Handle <code v-pre>UnauthorizedError</code> differently from <code v-pre>NotFoundError</code></li>
<li>Create default fallbacks for all unrecognized errors</li>
<li>Log critical errors differently from user mistakes</li>
</ul>
<h3 id="error-handler-resolution" tabindex="-1"><a class="header-anchor" href="#error-handler-resolution"><span>Error Handler Resolution</span></a></h3>
<p>When an error is thrown:</p>
<ol>
<li>Stone.js checks for a handler matching the error’s class name.</li>
<li>If not found, it checks for a <code v-pre>&quot;default&quot;</code> handler.</li>
<li>If none exists, the system may re-throw or log depending on context.</li>
</ol>
<p>This resolution is <strong>dimension-specific</strong>, meaning different handlers apply in:</p>
<ul>
<li>The <strong>Initialization Dimension</strong> (runtime request, event processing, services)</li>
<li>The <strong>Integration Dimension</strong> (adapter level: raw input/output handling)</li>
</ul>
<p>By modeling errors as first-class events, Stone.js turns failure into an opportunity to <strong>observe, adapt, and respond</strong> — all without entangling your business logic.</p>
<h2 id="defining-an-error-handler" tabindex="-1"><a class="header-anchor" href="#defining-an-error-handler"><span>Defining an Error Handler</span></a></h2>
<p>Stone.js supports <strong>three shapes</strong> of error handlers: <strong>class-based</strong>, <strong>function-based</strong>, and <strong>factory-based</strong>. They all share the same goal — to react to a thrown error — but offer flexibility depending on how much context and dependency injection you need.</p>
<Tabs id="126" :data='[{"id":"Class-based"},{"id":"Function-based"},{"id":"Factory-based"}]' :active="0" tab-id="class-factory-function">
<template #title0="{ value, isActive }">Class-based</template>
<template #title1="{ value, isActive }">Function-based</template>
<template #title2="{ value, isActive }">Factory-based</template>
<template #tab0="{ value, isActive }">
<h3 id="class-based-error-handler" tabindex="-1"><a class="header-anchor" href="#class-based-error-handler"><span>Class-based Error Handler</span></a></h3>
<p>Use this shape when you want a clean, injectable class with optional constructor dependencies.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyErrorHandler</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>error<span class="token operator">:</span> Error<span class="token punctuation">,</span> context<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Handle the error</span></span>
<span class="line">    <span class="token comment">// Optionally return a response</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code v-pre>handle</code> method will be automatically invoked when the matched error is thrown. If you need services from the container (like a logger), just inject them via the constructor — Stone.js will take care of wiring.</p>
</template>
<template #tab1="{ value, isActive }">
<h3 id="function-based-error-handler" tabindex="-1"><a class="header-anchor" href="#function-based-error-handler"><span>Function-based Error Handler</span></a></h3>
<p>This is the simplest form — just a plain function. Great for quick logic or when DI isn’t needed.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">myErrorHandler</span><span class="token punctuation">(</span>error<span class="token operator">:</span> Error<span class="token punctuation">,</span> context<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Handle the error</span></span>
<span class="line">  <span class="token comment">// Optionally return a response</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use this when you don’t need state, services, or complexity — just direct reaction to an exception.</p>
</template>
<template #tab2="{ value, isActive }">
<h3 id="factory-based-error-handler" tabindex="-1"><a class="header-anchor" href="#factory-based-error-handler"><span>Factory-based Error Handler</span></a></h3>
<p>Need dynamic behavior, contextual setup, or access to the container or blueprint? Use a factory.
The factory returns the actual function-based error handler.</p>
<p>In the <strong>initialization dimension</strong>, the factory receives the container:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">myErrorHandlerFactory</span><span class="token punctuation">(</span>container<span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span>error<span class="token operator">:</span> Error<span class="token punctuation">,</span> context<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Something went wrong'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the <strong>integration dimension</strong>, it receives the blueprint instead (since no container exists there):</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">adapterErrorHandlerFactory</span><span class="token punctuation">(</span><span class="token punctuation">{</span> blueprint <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> blueprint<span class="token operator">:</span> IBlueprint <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span>error<span class="token operator">:</span> Error<span class="token punctuation">,</span> context<span class="token operator">:</span> AdapterErrorContext<span class="token operator">&lt;</span><span class="token builtin">unknown</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Build the raw platform-specific response</span></span>
<span class="line">    <span class="token keyword">return</span> context<span class="token punctuation">.</span>rawResponseBuilder<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'statusCode'</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This pattern gives you the full flexibility of dependency injection <em>and</em> functional purity.</p>
</template>
</Tabs>
<h2 id="dimension-specific-behavior" tabindex="-1"><a class="header-anchor" href="#dimension-specific-behavior"><span>Dimension-specific Behavior</span></a></h2>
<p>Stone.js separates error handling concerns between the <strong>initialization</strong> and <strong>integration</strong> dimensions — each with its own context shape and return expectations.</p>
<Tabs id="177" :data='[{"id":"Initialization"},{"id":"Integration"}]' :active="0" tab-id="dimensions">
<template #title0="{ value, isActive }">Initialization</template>
<template #title1="{ value, isActive }">Integration</template>
<template #tab0="{ value, isActive }">
<h3 id="initialization-dimension" tabindex="-1"><a class="header-anchor" href="#initialization-dimension"><span>Initialization Dimension</span></a></h3>
<p>This is where most error handling occurs — at runtime, while processing requests, executing services, or running handlers. Here, the error handler receives:</p>
<ul>
<li>The <code v-pre>error</code>: any thrown object (ideally a subclass of <code v-pre>Error</code>)</li>
<li>The <code v-pre>context</code>: always an <code v-pre>IncomingEvent</code></li>
</ul>
<p>You can return:</p>
<ul>
<li><code v-pre>undefined</code> — if you just want to log or swallow the error</li>
<li>A plain object — to be auto-wrapped as a response</li>
<li>An <code v-pre>OutgoingResponse</code> — if you want full control over status code, headers, etc.</li>
</ul>
<p>Example:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UnauthorizedErrorHandler</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>error<span class="token operator">:</span> UnauthorizedError<span class="token punctuation">,</span> context<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> OutgoingHttpResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      statusCode<span class="token operator">:</span> <span class="token number">401</span><span class="token punctuation">,</span></span>
<span class="line">      content<span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Access denied'</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This dimension is perfect for expressing domain-level meaning — treating errors as part of your application's intentional flow.</p>
</template>
<template #tab1="{ value, isActive }">
<h3 id="integration-dimension" tabindex="-1"><a class="header-anchor" href="#integration-dimension"><span>Integration Dimension</span></a></h3>
<p>This is lower-level — inside the adapter layer. You’ll only need this if you’re customizing how the system interacts with external runtimes (e.g., AWS Lambda, HTTP server, CLI).</p>
<p>The error handler receives:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">AdapterErrorContext<span class="token operator">&lt;</span>RawEventType<span class="token punctuation">,</span> RawResponseType<span class="token punctuation">,</span> ExecutionContextType<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  rawEvent<span class="token operator">:</span> RawEventType</span>
<span class="line">  executionContext<span class="token operator">:</span> ExecutionContextType</span>
<span class="line">  rawResponseBuilder<span class="token operator">:</span> IAdapterEventBuilder<span class="token operator">&lt;</span>RawResponseOptions<span class="token punctuation">,</span> IRawResponseWrapper<span class="token operator">&lt;</span>RawResponseType<span class="token operator">>></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And must return the <code v-pre>rawResponseBuilder</code>.</p>
<p>Example:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">DefaultAdapterErrorHandler</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">handle</span><span class="token punctuation">(</span>error<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> context<span class="token operator">:</span> AdapterErrorContext<span class="token operator">&lt;</span><span class="token builtin">unknown</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> context<span class="token punctuation">.</span>rawResponseBuilder<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'statusCode'</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You don’t need this in most apps — but it’s essential for adapter authors or advanced customization.</p>
</template>
</Tabs>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Remember: <strong>the integration dimension speaks the language of the platform</strong>, while the <strong>initialization dimension speaks the language of your domain</strong>.</p>
</div>
<h2 id="registering-error-handlers" tabindex="-1"><a class="header-anchor" href="#registering-error-handlers"><span>Registering Error Handlers</span></a></h2>
<p>Stone.js gives you two clean ways to register your error handlers — <strong>declaratively</strong> via decorators, or <strong>imperatively</strong> via the blueprint API. Both approaches let you specify which error(s) the handler should respond to.</p>
<Tabs id="259" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h3 id="declarative-registration" tabindex="-1"><a class="header-anchor" href="#declarative-registration"><span>Declarative Registration</span></a></h3>
<p>Use decorators when working with class-based handlers. Each dimension has its own decorator:</p>
<ul>
<li><code v-pre>@ErrorHandler()</code> for the <strong>initialization</strong> dimension</li>
<li><code v-pre>@AdapterErrorHandler()</code> for the <strong>integration</strong> dimension</li>
</ul>
<p>You can target a specific error class, multiple errors, or set a fallback with <code v-pre>&quot;default&quot;</code>.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ErrorHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">ErrorHandler</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> error<span class="token operator">:</span> <span class="token string">'UnauthorizedError'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UnauthorizedErrorHandler</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> AdapterErrorHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">AdapterErrorHandler</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> error<span class="token operator">:</span> <span class="token string">'default'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">FallbackAdapterErrorHandler</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code v-pre>error</code> option accepts:</p>
<ul>
<li>A string (the class name of the error)</li>
<li>An array of strings (multiple error class names)</li>
<li>The literal <code v-pre>&quot;default&quot;</code> (for fallback behavior)</li>
</ul>
<p>This makes error handler resolution predictable and easy to trace.</p>
</template>
<template #tab1="{ value, isActive }">
<h3 id="imperative-registration" tabindex="-1"><a class="header-anchor" href="#imperative-registration"><span>Imperative Registration</span></a></h3>
<p>Use this when working with function-based or factory-based handlers — or when you prefer full control over setup.</p>
<p>In the <strong>initialization dimension</strong>, register under:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">stone.kernel.errorHandlers.&lt;ErrorClassName></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>In the <strong>integration dimension</strong>, use:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">stone.adapter.errorHandlers.&lt;ErrorClassName></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Where <code v-pre>&lt;ErrorClassName&gt;</code> is either a specific class or <code v-pre>&quot;default&quot;</code>.</p>
<p>Example:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.kernel.errorHandlers.UnauthorizedError'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  module<span class="token operator">:</span> myErrorHandlerFactory<span class="token punctuation">,</span></span>
<span class="line">  isFactory<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or, for a class-based handler:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.adapter.errorHandlers.default'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  module<span class="token operator">:</span> FallbackAdapterErrorHandler<span class="token punctuation">,</span></span>
<span class="line">  isClass<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>These keys support both shapes by using the flags:</p>
<ul>
<li><code v-pre>isClass: true</code> → for class-based</li>
<li><code v-pre>isFactory: true</code> → for factory-based</li>
<li>no flag → assumes function-based</li>
</ul>
<p>This structure gives you flexibility without ambiguity. And thanks to the Blueprint system, you’re always working within a well-scoped, testable setup.</p>
<p>Remember, the current adapter is resolved dynamically at runtime. To ensure your error handler is properly registered in the <strong>integration dimension</strong>, you must use a <a href="../architecture/blueprint#dynamic-configuration"><strong>blueprint middleware</strong></a>.</p>
</template>
</Tabs>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>Error handling isn’t just about catching problems — it’s about responding to them meaningfully, without coupling your domain to every possible failure. Here’s how to get it right in Stone.js:</p>
<h4 id="create-a-custom-error-class-for-every-meaningful-error" tabindex="-1"><a class="header-anchor" href="#create-a-custom-error-class-for-every-meaningful-error"><span>Create a Custom Error Class for Every Meaningful Error</span></a></h4>
<p>Using named classes lets you separate concerns cleanly:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserNotFoundError</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'UserNotFoundError'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">InvalidPaymentError</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'InvalidPaymentError'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This makes your domain expressive and your error handlers precise. No more <code v-pre>if (error.message.includes(...))</code> hacks.<br>
And always set the class name explicitly (<code v-pre>this.name = 'UserNotFoundError'</code>) to avoid minification issues.</p>
<h4 id="avoid-manual-try-catch-except-in-specific-use-cases" tabindex="-1"><a class="header-anchor" href="#avoid-manual-try-catch-except-in-specific-use-cases"><span>Avoid Manual try/catch (Except in Specific Use Cases)</span></a></h4>
<p>Unless you’re doing something low-level (like a retry wrapper), don’t wrap your services or handlers in <code v-pre>try/catch</code>.<br>
Just <code v-pre>throw</code> — and let Stone.js route the error to the right handler, based on dimension and class.</p>
<h4 id="prefer-class-or-factory-based-handlers-in-apps-with-dependency-injection" tabindex="-1"><a class="header-anchor" href="#prefer-class-or-factory-based-handlers-in-apps-with-dependency-injection"><span>Prefer Class or Factory-Based Handlers in Apps With Dependency Injection</span></a></h4>
<p>Class-based handlers let you inject services (like a logger or reporter) easily. Factory-based handlers do the same, while remaining functional.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LoggingErrorHandler</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token keyword">readonly</span> logger<span class="token operator">:</span> Logger</span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span> logger <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> logger<span class="token operator">:</span> Logger <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>logger <span class="token operator">=</span> logger</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>error<span class="token operator">:</span> Error<span class="token punctuation">,</span> context<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> statusCode<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Oops.'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="use-the-default-handler-as-a-safety-net" tabindex="-1"><a class="header-anchor" href="#use-the-default-handler-as-a-safety-net"><span>Use the <code v-pre>&quot;default&quot;</code> Handler as a Safety Net</span></a></h4>
<p>Always register a fallback error handler. You never know when a surprise error might slip through.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">ErrorHandler</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> error<span class="token operator">:</span> <span class="token string">'default'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">DefaultHandler</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>error<span class="token operator">:</span> Error<span class="token punctuation">,</span> context<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> OutgoingHttpResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      statusCode<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span></span>
<span class="line">      content<span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Unexpected error'</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="keep-adapter-level-handlers-platform-specific" tabindex="-1"><a class="header-anchor" href="#keep-adapter-level-handlers-platform-specific"><span>Keep Adapter-Level Handlers Platform-Specific</span></a></h4>
<p>Only use <code v-pre>@AdapterErrorHandler</code> or <code v-pre>stone.adapter.errorHandlers.*</code> if you're building custom adapters or doing raw event translation.<br>
For everything else, stick with the initialization dimension.</p>
<h4 id="never-silently-swallow-errors-unless-you-know-why" tabindex="-1"><a class="header-anchor" href="#never-silently-swallow-errors-unless-you-know-why"><span>Never Silently Swallow Errors (Unless You Know Why)</span></a></h4>
<p>You can return <code v-pre>undefined</code> from an error handler — but only if you really mean to. Otherwise, make sure the handler logs or transforms the error meaningfully.</p>
<h4 id="never-return-raw-error-messages-to-the-user" tabindex="-1"><a class="header-anchor" href="#never-return-raw-error-messages-to-the-user"><span>Never Return Raw Error Messages to the User</span></a></h4>
<p>Returning <code v-pre>error.message</code> directly in a response can expose sensitive implementation details — like internal logic, validation secrets, or even stack traces in some cases. This is a <strong>security leak</strong> and should always be avoided in production.</p>
<p>Instead:</p>
<ul>
<li><strong>Log the real error</strong> for debugging or audit purposes.</li>
<li><strong>Return a sanitized message</strong> that is meaningful to the user, but not too revealing.</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token function">handle</span><span class="token punctuation">(</span>error<span class="token operator">:</span> Error<span class="token punctuation">,</span> context<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token comment">// Log the real error</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> OutgoingHttpResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    statusCode<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span></span>
<span class="line">    content<span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Something went wrong. Please try again later.'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This keeps your system secure, your logs useful, and your users informed — without oversharing.</p>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>Error handlers in Stone.js are more than catch blocks — they’re part of your system’s architecture. They allow you to separate failure handling from business logic, keeping your domain expressive and clean.</p>
<ul>
<li>Use <strong>class</strong>, <strong>function</strong>, or <strong>factory</strong> shapes depending on your needs.</li>
<li>Register them <strong>declaratively</strong> with decorators or <strong>imperatively</strong> using the blueprint.</li>
<li>Handle errors by <strong>class name</strong> or set a <code v-pre>&quot;default&quot;</code> fallback.</li>
<li>Use the right <strong>dimension</strong>:
<ul>
<li>Initialization → domain-level errors</li>
<li>Integration → low-level adapter errors</li>
</ul>
</li>
<li>Always <strong>log the real error</strong>, and <strong>never expose internal messages</strong> to users.</li>
</ul>
<p>In a continuum-aware system, errors are not an exception — they’re expected. And now, you’ve got everything you need to handle them like a pro.</p>
</div></template>


