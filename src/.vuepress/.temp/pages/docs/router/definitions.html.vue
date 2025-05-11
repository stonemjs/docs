<template><div><p>Before using the router, you need to define your routes.</p>
<p>Stone.js separates <strong>route definitions</strong> from <strong>route instances</strong>. A <strong>route definition</strong> is a blueprint describing the path, method, handler and options for a route. The router uses these definitions to create <code v-pre>Route</code> instances, which are then matched against incoming events.</p>
<p>There are three main ways to define routes:</p>
<ul>
<li><strong>Declaratively</strong> – via decorators on a class-based event handler.</li>
<li><strong>Imperatively</strong> – via blueprint utilities like <code v-pre>defineRoute()</code> or <code v-pre>defineRoutes()</code>.</li>
<li><strong>At runtime</strong> – using the router instance once initialized.</li>
</ul>
<p>Each approach has its own use case, but all integrate seamlessly into the Continuum. Whether you’re building an API, a frontend app, or a serverless function, defining routes is consistent and context-aware.</p>
<h2 id="static-route-definitions" tabindex="-1"><a class="header-anchor" href="#static-route-definitions"><span>Static Route Definitions</span></a></h2>
<p>Static route definitions are declared at setup time, before the application starts.</p>
<p>Stone.js supports two primary ways to define routes statically:</p>
<ul>
<li><strong>Declaratively</strong>, using decorators on class-based event handlers</li>
<li><strong>Imperatively</strong>, using functions like <code v-pre>defineRoute()</code> or <code v-pre>defineRoutes()</code></li>
</ul>
<p>Both approaches are evaluated during the setup phase and are ideal for most use cases. They provide introspection, better tooling, and full compatibility with the blueprint system.</p>
<p>Use static definitions when your routes are known in advance and don’t depend on runtime conditions.</p>
<Tabs id="56" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h3 id="declarative-definitions" tabindex="-1"><a class="header-anchor" href="#declarative-definitions"><span>Declarative Definitions</span></a></h3>
<p>The declarative approach allows you to define routes using class decorators, providing a clean, organized structure, perfect for modular and introspectable code.</p>
<p>In Stone.js, you declare routes by decorating a class with <code v-pre>@EventHandler()</code>. This marks the class as a valid event handler for incoming events. The router also offers an alias: <code v-pre>@Controller()</code>, for those more comfortable with traditional controller-based naming, but <strong><code v-pre>@EventHandler()</code> is preferred</strong>, as it stays true to the Continuum philosophy.</p>
<p>Once the class is decorated, you define your route handlers using HTTP method decorators. Here's a summary of them:</p>
<table>
<thead>
<tr>
<th>Decorator</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>@Get()</code></td>
<td>Defines a route that handles <code v-pre>GET</code> requests.</td>
</tr>
<tr>
<td><code v-pre>@Post()</code></td>
<td>Defines a route that handles <code v-pre>POST</code> requests.</td>
</tr>
<tr>
<td><code v-pre>@Put()</code></td>
<td>Defines a route that handles <code v-pre>PUT</code> requests.</td>
</tr>
<tr>
<td><code v-pre>@Patch()</code></td>
<td>Defines a route that handles <code v-pre>PATCH</code> requests.</td>
</tr>
<tr>
<td><code v-pre>@Delete()</code></td>
<td>Defines a route that handles <code v-pre>DELETE</code> requests.</td>
</tr>
<tr>
<td><code v-pre>@Options()</code></td>
<td>Defines a route that handles <code v-pre>OPTIONS</code> requests.</td>
</tr>
<tr>
<td><code v-pre>@Match()</code></td>
<td>Defines a route for a specific method manually.</td>
</tr>
<tr>
<td><code v-pre>@Any()</code></td>
<td>Matches any HTTP method.</td>
</tr>
<tr>
<td><code v-pre>@Fallback()</code></td>
<td>Used to define a fallback route.</td>
</tr>
</tbody>
</table>
<p>Each decorator accepts:</p>
<ul>
<li>A <strong>path</strong> as the first argument (e.g., <code v-pre>/users/:id</code>)</li>
<li>An optional <strong>options object</strong> as the second argument (we’ll cover options in detail later)</li>
</ul>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> EventHandler<span class="token punctuation">,</span> Get<span class="token punctuation">,</span> Post<span class="token punctuation">,</span> Put<span class="token punctuation">,</span> Delete <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">EventHandler</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyController</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">getUsers</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Handle GET /users</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">createUser</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> event<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> user<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Put</span></span><span class="token punctuation">(</span><span class="token string">'/users/:id'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">updateUser</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Handle PUT /users/:id</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Delete</span></span><span class="token punctuation">(</span><span class="token string">'/users/:id'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">deleteUser</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Handle DELETE /users/:id</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This approach is recommended for most Stone.js applications. It offers maximum readability, supports introspection, and aligns naturally with the setup dimension.</p>
</template>
<template #tab1="{ value, isActive }">
<h3 id="imperative-definitions" tabindex="-1"><a class="header-anchor" href="#imperative-definitions"><span>Imperative Definitions</span></a></h3>
<p>If you prefer functional composition or need more dynamic control over route registration, you can define routes imperatively using blueprint utilities.</p>
<p>The router provides two main utilities for this:</p>
<ul>
<li><code v-pre>defineRoute()</code> – to define a single route</li>
<li><code v-pre>defineRoutes()</code> – to define multiple routes at once</li>
</ul>
<p>These functions can be passed to the <code v-pre>blueprint.set()</code> method, making them part of your app’s setup phase.</p>
<h3 id="example-single-route" tabindex="-1"><a class="header-anchor" href="#example-single-route"><span>Example: Single Route</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Handle GET /users</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token function">defineRoute</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span> method<span class="token operator">:</span> <span class="token string">'GET'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example-multiple-routes" tabindex="-1"><a class="header-anchor" href="#example-multiple-routes"><span>Example: Multiple Routes</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineRoutes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Handle request here</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> definitions <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">'/users'</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span> method<span class="token operator">:</span> <span class="token string">'GET'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">'/users'</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span> method<span class="token operator">:</span> <span class="token string">'POST'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">'/users/:id'</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span> method<span class="token operator">:</span> <span class="token string">'PUT'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">'/users/:id'</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span> method<span class="token operator">:</span> <span class="token string">'DELETE'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token function">defineRoutes</span><span class="token punctuation">(</span>definitions<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This approach gives you maximum control and works great for:</p>
<ul>
<li>Function-based modules</li>
<li>Applications with dynamic setup</li>
<li>When combining multiple route definitions from different modules or conditions</li>
</ul>
<p>Use imperative definitions when you want flexibility, especially in non-class-based designs or external integrations.</p>
</template>
</Tabs>
<h2 id="runtime-definition" tabindex="-1"><a class="header-anchor" href="#runtime-definition"><span>Runtime Definition</span></a></h2>
<p>In some scenarios, you may need to define routes dynamically, after the application has started. This is called <strong>runtime route definition</strong> and is handled directly through the <code v-pre>router</code> instance.</p>
<p>Unlike static routes, runtime routes are registered after the router has been initialized. That’s why the only valid place to define them is in a <strong>service provider’s <code v-pre>boot()</code> method</strong>, where the <code v-pre>router</code> is guaranteed to be available.</p>
<Tabs id="246" :data='[{"id":"Fluent"},{"id":"Option"},{"id":"Collection"}]' :active="0" tab-id="runtime-definitions">
<template #title0="{ value, isActive }">Fluent</template>
<template #title1="{ value, isActive }">Option</template>
<template #title2="{ value, isActive }">Collection</template>
<template #tab0="{ value, isActive }">
<h3 id="chained-route-definitions" tabindex="-1"><a class="header-anchor" href="#chained-route-definitions"><span>Chained Route Definitions</span></a></h3>
<p>The router provides a fluent API (a chaining-style method) for registering routes dynamically. You can call methods like <code v-pre>.get()</code>, <code v-pre>.post()</code>, <code v-pre>.put()</code> and so on, directly on the router instance, the first argument is the path, and the second is the handler function or a route definition options:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Provider<span class="token punctuation">,</span> IServiceProvider<span class="token punctuation">,</span> IContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Provider</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyServiceProvider</span> <span class="token keyword">implements</span> <span class="token class-name">IServiceProvider</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> container<span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">make</span><span class="token generic class-name"><span class="token operator">&lt;</span>Router<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'router'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    router</span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">'/users/:id'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'/users/:id'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may refer to this as the <strong>fluent API</strong> or <strong>chained method API</strong>.</p>
</template>
<template #tab1="{ value, isActive }">
<h3 id="option-based-definitions-define" tabindex="-1"><a class="header-anchor" href="#option-based-definitions-define"><span>Option-Based Definitions (<code v-pre>define</code>)</span></a></h3>
<p>If you prefer a fine-grained structure at runtime, the router also exposes a <code v-pre>define()</code>
method that accepts an array of route definition options. This is similar to the static <code v-pre>defineRoutes()</code> method but allows you to define routes at runtime:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> definitions <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span> path<span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> method<span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span> path<span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span>definitions<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<h3 id="collection-based-registration" tabindex="-1"><a class="header-anchor" href="#collection-based-registration"><span>Collection-Based Registration</span></a></h3>
<p>For even more control, you can work directly with <code v-pre>Route</code> and <code v-pre>RouteCollection</code> classes:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Route<span class="token punctuation">,</span> RouteCollection <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> routes <span class="token operator">=</span> RouteCollection<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">routes</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Route<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span> path<span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Route<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> method<span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span> path<span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">setRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This method is useful if you need to manipulate routes manually or store them in collections before applying them.</p>
</template>
</Tabs>
<h3 id="handler-variants-with-defineeventhandler" tabindex="-1"><a class="header-anchor" href="#handler-variants-with-defineeventhandler"><span>Handler Variants with <code v-pre>defineEventHandler</code></span></a></h3>
<p>You can register any handler type (class-based, factory-based, or function-based) using the <code v-pre>defineEventHandler()</code> utility:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token function">defineEventHandler</span><span class="token punctuation">(</span>MyClassHandler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">'getAll'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// class-based</span></span>
<span class="line"><span class="token function">defineEventHandler</span><span class="token punctuation">(</span>MyFactoryHandler<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// factory-based</span></span>
<span class="line"><span class="token function">defineEventHandler</span><span class="token punctuation">(</span>MyFunctionHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">// function-based</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example:</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineEventHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token function">defineEventHandler</span><span class="token punctuation">(</span>MyFactoryHandler<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This utility ensures consistent handler behavior across all dimensions and integrates with dependency injection.</p>
<h2 id="definition-object" tabindex="-1"><a class="header-anchor" href="#definition-object"><span>Definition Object</span></a></h2>
<p>Every route in Stone.js is defined using a <strong>route definition object</strong>, which specifies how and when a route should match, and how it should behave. This object is used across all route registration APIs, whether declarative, imperative, fluent, or collection-based.</p>
<p>You can set options in any route using the appropriate API:</p>
<h3 id="setting-options" tabindex="-1"><a class="header-anchor" href="#setting-options"><span>Setting Options</span></a></h3>
<p>You can set options in any route using the appropriate API:</p>
<CodeTabs id="310" :data='[{"id":"Declarative"},{"id":"Imperative"},{"id":"Fluent"},{"id":"Option"},{"id":"Collection"}]' :active="0" tab-id="router-apis">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #title2="{ value, isActive }">Fluent</template>
<template #title3="{ value, isActive }">Option</template>
<template #title4="{ value, isActive }">Collection</template>
<template #tab0="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Declarative API</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'user.list'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Handle GET /users</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Imperative API</span></span>
<span class="line"><span class="token function">defineRoute</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'user.list'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">defineRoutes</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">'/users'</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'user.list'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Fluent API</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'user.list'</span><span class="token punctuation">,</span></span>
<span class="line">  handler<span class="token operator">:</span> <span class="token function">defineEventHandler</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab3="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Option-based API</span></span>
<span class="line"><span class="token keyword">const</span> definitions <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">    method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">'user.list'</span><span class="token punctuation">,</span></span>
<span class="line">    handler<span class="token operator">:</span> <span class="token function">defineEventHandler</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span>definitions<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab4="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Collection-based API</span></span>
<span class="line">routes<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Route<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">  method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'user.list'</span><span class="token punctuation">,</span></span>
<span class="line">  handler<span class="token operator">:</span> <span class="token function">defineEventHandler</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="route-definition-properties" tabindex="-1"><a class="header-anchor" href="#route-definition-properties"><span>Route Definition Properties</span></a></h3>
<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>path</code></td>
<td><code v-pre>string | string[]</code></td>
<td>Required. The route path(s). Can be a single or multiple values (alias).</td>
</tr>
<tr>
<td><code v-pre>method</code></td>
<td><code v-pre>HttpMethod</code></td>
<td>HTTP method for the route (<code v-pre>GET</code>, <code v-pre>POST</code>, etc.).</td>
</tr>
<tr>
<td><code v-pre>methods</code></td>
<td><code v-pre>HttpMethod[]</code></td>
<td>An array of HTTP methods for the same path and handler.</td>
</tr>
<tr>
<td><code v-pre>name</code></td>
<td><code v-pre>string</code></td>
<td>Named route identifier (used for redirection, generation, etc.).</td>
</tr>
<tr>
<td><code v-pre>fallback</code></td>
<td><code v-pre>boolean</code></td>
<td>If true, the route will act as a fallback when no other route matches.</td>
</tr>
<tr>
<td><code v-pre>strict</code></td>
<td><code v-pre>boolean</code></td>
<td>Enforces strict segment matching.</td>
</tr>
<tr>
<td><code v-pre>protocol</code></td>
<td><code v-pre>string | string[]</code></td>
<td>Limits matching to specific protocols (<code v-pre>http</code>, <code v-pre>https</code>, etc.).</td>
</tr>
<tr>
<td><code v-pre>domain</code></td>
<td><code v-pre>string | string[]</code></td>
<td>Limits matching to specific domains.</td>
</tr>
<tr>
<td><code v-pre>defaults</code></td>
<td><code v-pre>Record&lt;string, unknown&gt;</code></td>
<td>Default values for route parameters.</td>
</tr>
<tr>
<td><code v-pre>rules</code></td>
<td><code v-pre>Record&lt;string, RegExp | string&gt;</code></td>
<td>Validation rules for dynamic parameters.</td>
</tr>
<tr>
<td><code v-pre>bindings</code></td>
<td><code v-pre>Record&lt;string, Binding&gt;</code></td>
<td>Automatically binds parameters to models or resolvers.</td>
</tr>
<tr>
<td><code v-pre>middleware</code></td>
<td><code v-pre>Pipe[]</code></td>
<td>Middleware to apply to this route.</td>
</tr>
<tr>
<td><code v-pre>excludeMiddleware</code></td>
<td><code v-pre>Pipe[]</code></td>
<td>Middleware to explicitly exclude for this route.</td>
</tr>
<tr>
<td><code v-pre>redirect</code></td>
<td><code v-pre>string | object | Function</code></td>
<td>Redirect instructions when this route is matched.</td>
</tr>
<tr>
<td><code v-pre>handler</code></td>
<td><code v-pre>Function | Class | Factory</code></td>
<td>Required. The handler to execute when the route matches.</td>
</tr>
<tr>
<td><code v-pre>children</code></td>
<td><code v-pre>RouteDefinition[]</code></td>
<td>Child routes for nested matching. Applies only to the option-based API</td>
</tr>
</tbody>
</table>
<p>Let’s now explore some of the most used and powerful route options in more detail:</p>
<h3 id="method-methods" tabindex="-1"><a class="header-anchor" href="#method-methods"><span>method / methods</span></a></h3>
<p>Use <code v-pre>method</code> to assign a single HTTP verb, or <code v-pre>methods</code> for an array of verbs.</p>
<CodeTabs id="532" :data='[{"id":"Imperative"},{"id":"Option"}]' :active="0" tab-id="router-apis">
<template #title0="{ value, isActive }">Imperative</template>
<template #title1="{ value, isActive }">Option</template>
<template #tab0="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Imperative</span></span>
<span class="line"><span class="token function">defineRoute</span><span class="token punctuation">(</span><span class="token string">'/users/me'</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span> method<span class="token operator">:</span> <span class="token string">'GET'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">defineRoute</span><span class="token punctuation">(</span><span class="token string">'/users/posts'</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span> methods<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'PUT'</span><span class="token punctuation">,</span> <span class="token string">'PATCH'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Option-based</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'/users/me'</span><span class="token punctuation">,</span> method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span> handler <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'/users/posts'</span><span class="token punctuation">,</span> methods<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'PUT'</span><span class="token punctuation">,</span> <span class="token string">'PATCH'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> handler <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>Note: <code v-pre>methods</code> is only available via option-based, or imperative APIs—<strong>not</strong> in declarative, fluent or collection-based APIs.</p>
<h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name</span></a></h3>
<p>Use <code v-pre>name</code> to assign a unique identifier to the route. This name can be used later for redirection, inspection, and URL generation.</p>
<CodeTabs id="549" :data='[{"id":"Declarative"},{"id":"Imperative"},{"id":"Fluent"},{"id":"Option"},{"id":"Collection"}]' :active="0" tab-id="router-apis">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #title2="{ value, isActive }">Fluent</template>
<template #title3="{ value, isActive }">Option</template>
<template #title4="{ value, isActive }">Collection</template>
<template #tab0="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Declarative</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">'/users/me'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'user.me'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Imperative</span></span>
<span class="line"><span class="token function">defineRoute</span><span class="token punctuation">(</span><span class="token string">'/users/me'</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'user.me'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Fluent</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/users/me'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'user.me'</span><span class="token punctuation">,</span></span>
<span class="line">  handler<span class="token operator">:</span> <span class="token function">defineEventHandler</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab3="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Option</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'/users/me'</span><span class="token punctuation">,</span> method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'user.me'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab4="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Collection</span></span>
<span class="line">routes<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Route<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">  method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'user.list'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="alias-multiple-paths" tabindex="-1"><a class="header-anchor" href="#alias-multiple-paths"><span>alias (multiple paths)</span></a></h3>
<p>To create route aliases, you can provide an array of strings as the <code v-pre>path</code>:</p>
<CodeTabs id="572" :data='[{"id":"Declarative"},{"id":"Imperative"},{"id":"Fluent"},{"id":"Option"}]' :active="0" tab-id="router-apis">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #title2="{ value, isActive }">Fluent</template>
<template #title3="{ value, isActive }">Option</template>
<template #tab0="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Declarative</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'/users/me'</span><span class="token punctuation">,</span> <span class="token string">'/me'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'user.me'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Imperative</span></span>
<span class="line"><span class="token function">defineRoute</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'/users/me'</span><span class="token punctuation">,</span> <span class="token string">'/me'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'user.me'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Fluent</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'/users/me'</span><span class="token punctuation">,</span> <span class="token string">'/me'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'user.me'</span><span class="token punctuation">,</span></span>
<span class="line">  handler<span class="token operator">:</span> <span class="token function">defineEventHandler</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab3="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Option</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/users/me'</span><span class="token punctuation">,</span> <span class="token string">'/me'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'user.me'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>Each alias shares the same handler and configuration.</p>
<h3 id="protocol" tabindex="-1"><a class="header-anchor" href="#protocol"><span>protocol</span></a></h3>
<p>Restrict a route to specific protocols, like <code v-pre>http</code>, <code v-pre>https</code>, or custom schemes:</p>
<CodeTabs id="595" :data='[{"id":"Declarative"},{"id":"Imperative"},{"id":"Fluent"},{"id":"Option"},{"id":"Collection"}]' :active="0" tab-id="router-apis">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #title2="{ value, isActive }">Fluent</template>
<template #title3="{ value, isActive }">Option</template>
<template #title4="{ value, isActive }">Collection</template>
<template #tab0="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Declarative</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">'/users/me'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> protocol<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'http'</span><span class="token punctuation">,</span> <span class="token string">'https'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Imperative</span></span>
<span class="line"><span class="token function">defineRoute</span><span class="token punctuation">(</span><span class="token string">'/users/me'</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span> protocol<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'http'</span><span class="token punctuation">,</span> <span class="token string">'https'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Fluent</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/users/me'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  protocol<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'http'</span><span class="token punctuation">,</span> <span class="token string">'https'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  handler<span class="token operator">:</span> <span class="token function">defineEventHandler</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab3="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Option</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'/users/me'</span><span class="token punctuation">,</span> method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span> protocol<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'http'</span><span class="token punctuation">,</span> <span class="token string">'https'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab4="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Collection</span></span>
<span class="line">routes<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Route<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">  method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">  protocol<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'http'</span><span class="token punctuation">,</span> <span class="token string">'https'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="fallback" tabindex="-1"><a class="header-anchor" href="#fallback"><span>fallback</span></a></h3>
<p>Fallback routes are special routes that catch unmatched requests:</p>
<CodeTabs id="618" :data='[{"id":"Declarative"},{"id":"Imperative"},{"id":"Fluent"},{"id":"Option"},{"id":"Collection"}]' :active="0" tab-id="router-apis">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #title2="{ value, isActive }">Fluent</template>
<template #title3="{ value, isActive }">Option</template>
<template #title4="{ value, isActive }">Collection</template>
<template #tab0="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Declarative</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Fallback</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// Or</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">'/fallback'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> fallback<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Imperative</span></span>
<span class="line"><span class="token function">defineRoute</span><span class="token punctuation">(</span><span class="token string">'/fallback'</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span> fallback<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Fluent</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/fallback'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  fallback<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  handler<span class="token operator">:</span> <span class="token function">defineEventHandler</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab3="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Option</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'/fallback'</span><span class="token punctuation">,</span> fallback<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab4="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Collection</span></span>
<span class="line">routes<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Route<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/fallback'</span><span class="token punctuation">,</span></span>
<span class="line">  fallback<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>Only one fallback should be defined per route group or domain/protocol combo to avoid ambiguity.</p>
<h2 id="group-route-definitions" tabindex="-1"><a class="header-anchor" href="#group-route-definitions"><span>Group Route Definitions</span></a></h2>
<p>Route groups allow you to share common options, like <code v-pre>middleware</code>, <code v-pre>path</code> prefixes, <code v-pre>name</code> prefixes, or <code v-pre>protocols</code>, across multiple routes without repeating yourself.</p>
<p>Stone.js merges route group options intelligently:</p>
<ul>
<li><strong>Strings</strong> (e.g. names, paths) are joined with <code v-pre>.</code> or <code v-pre>/</code></li>
<li><strong>Booleans</strong> are merged as-is</li>
<li><strong>Numbers</strong> are merged as-is</li>
<li><strong>Functions</strong> are merged as-is</li>
<li><strong>Objects</strong> are shallow-merged using spread</li>
<li><strong>Arrays</strong> are concatenated</li>
</ul>
<p>This enables clean, composable routing structures at any depth. Groups can be nested, scoped, and reused across the entire router API.</p>
<p>Let’s explore how grouping works across all supported APIs.</p>
<h3 id="static-grouping" tabindex="-1"><a class="header-anchor" href="#static-grouping"><span>Static Grouping</span></a></h3>
<Tabs id="688" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h4 id="declarative-api" tabindex="-1"><a class="header-anchor" href="#declarative-api"><span>Declarative API</span></a></h4>
<p>In the declarative approach, you can group routes directly inside a class decorated with <code v-pre>@EventHandler()</code> (or <code v-pre>@Controller()</code> as an alias).</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> EventHandler<span class="token punctuation">,</span> Get <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">EventHandler</span></span><span class="token punctuation">(</span><span class="token string">'/api'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'app'</span><span class="token punctuation">,</span> protocol<span class="token operator">:</span> <span class="token string">'http'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyEventHandler</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">'/hello'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'hello'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => /api/hello, name: app.hello</span></span>
<span class="line">  <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">'Hello World'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">'/goodbye'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'goodbye'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// => /api/goodbye, name: app.goodbye</span></span>
<span class="line">  <span class="token function">goodbye</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">'Goodbye World'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>All options provided at the class level (group-level) will be merged with the child routes. This is the cleanest and most readable way to group routes declaratively.</p>
</template>
<template #tab1="{ value, isActive }">
<h4 id="imperative-api" tabindex="-1"><a class="header-anchor" href="#imperative-api"><span>Imperative API</span></a></h4>
<p>When using <code v-pre>defineRoutes</code>, you can define groups by nesting route definitions using the <code v-pre>children</code> property:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineRoutes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token function">defineRoutes</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">'/api'</span><span class="token punctuation">,</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">'app'</span><span class="token punctuation">,</span></span>
<span class="line">    protocol<span class="token operator">:</span> <span class="token string">'http'</span><span class="token punctuation">,</span></span>
<span class="line">    children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        path<span class="token operator">:</span> <span class="token string">'/hello'</span><span class="token punctuation">,</span></span>
<span class="line">        method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">        name<span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span></span>
<span class="line">        handler<span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        path<span class="token operator">:</span> <span class="token string">'/goodbye'</span><span class="token punctuation">,</span></span>
<span class="line">        method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">        name<span class="token operator">:</span> <span class="token string">'goodbye'</span><span class="token punctuation">,</span></span>
<span class="line">        handler<span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The final paths will be <code v-pre>/api/hello</code> and <code v-pre>/api/goodbye</code> and the names will be <code v-pre>app.hello</code> and <code v-pre>app.goodbye</code>.</p>
</template>
</Tabs>
<h3 id="runtime-grouping" tabindex="-1"><a class="header-anchor" href="#runtime-grouping"><span>Runtime Grouping</span></a></h3>
<Tabs id="717" :data='[{"id":"Fluent"},{"id":"Option"}]' :active="0" tab-id="runtime-definitions">
<template #title0="{ value, isActive }">Fluent</template>
<template #title1="{ value, isActive }">Option</template>
<template #tab0="{ value, isActive }">
<h4 id="fluent-api" tabindex="-1"><a class="header-anchor" href="#fluent-api"><span>Fluent API</span></a></h4>
<p>The router provides a <code v-pre>group()</code> method that applies shared options to all subsequent routes in the chain.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">router</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">'/api'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'app'</span><span class="token punctuation">,</span> protocol<span class="token operator">:</span> <span class="token string">'http'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/hello'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span> handler <span class="token punctuation">}</span><span class="token punctuation">)</span>        <span class="token comment">// => /api/hello</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/goodbye'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'goodbye'</span><span class="token punctuation">,</span> handler <span class="token punctuation">}</span><span class="token punctuation">)</span>    <span class="token comment">// => /api/goodbye</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To remove the active group and reset the scope, use <code v-pre>noGroup()</code>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">router</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">'/api'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'app'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/hello'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span> handler <span class="token punctuation">}</span><span class="token punctuation">)</span>     <span class="token comment">// => /api/hello</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">noGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/hello'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span> handler <span class="token punctuation">}</span><span class="token punctuation">)</span>     <span class="token comment">// => /hello</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can switch groups as needed:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">router</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">'/api/v1'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'v1'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/hello'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span> handler <span class="token punctuation">}</span><span class="token punctuation">)</span>     <span class="token comment">// => /api/v1/hello</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">'/api/v2'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'v2'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/hello'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span> handler <span class="token punctuation">}</span><span class="token punctuation">)</span>     <span class="token comment">// => /api/v2/hello</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<h4 id="option-based-api" tabindex="-1"><a class="header-anchor" href="#option-based-api"><span>Option-based API</span></a></h4>
<p>Grouping also works with the <code v-pre>router.define()</code> API, using the <code v-pre>children</code> field exactly as with the static imperative API:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">'/api'</span><span class="token punctuation">,</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">'app'</span><span class="token punctuation">,</span></span>
<span class="line">    protocol<span class="token operator">:</span> <span class="token string">'http'</span><span class="token punctuation">,</span></span>
<span class="line">    children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        path<span class="token operator">:</span> <span class="token string">'/hello'</span><span class="token punctuation">,</span></span>
<span class="line">        method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">        name<span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span></span>
<span class="line">        handler<span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        path<span class="token operator">:</span> <span class="token string">'/goodbye'</span><span class="token punctuation">,</span></span>
<span class="line">        method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">        name<span class="token operator">:</span> <span class="token string">'goodbye'</span><span class="token punctuation">,</span></span>
<span class="line">        handler<span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As always, group-level options are automatically merged with children.</p>
</template>
</Tabs>
<h3 id="limiting-group-depth" tabindex="-1"><a class="header-anchor" href="#limiting-group-depth"><span>Limiting Group Depth</span></a></h3>
<p>To avoid overly deep and unreadable routing trees, Stone Router allows you to set a <strong>group depth limit</strong>.</p>
<p>You can configure the <code v-pre>maxDepth</code> value globally:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Setup time</span></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.router.maxDepth'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Runtime</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> maxDepth<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This prevents merging group options beyond the configured level. If <code v-pre>maxDepth</code> is set to <code v-pre>2</code>, nested groups beyond the second level will no longer inherit or merge parent options.</p>
<p>Set it to <code v-pre>0</code> to disable the depth limit entirely.</p>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>Here are some tips to keep your route definitions clean, efficient, and maintainable across all APIs:</p>
<h4 id="prefer-declarative-for-clarity" tabindex="-1"><a class="header-anchor" href="#prefer-declarative-for-clarity"><span>Prefer Declarative for Clarity</span></a></h4>
<ul>
<li>Use the <strong>declarative API</strong> (<code v-pre>@EventHandler</code>, <code v-pre>@Get</code>, etc.) for most static routes.</li>
<li>It promotes introspection, modularity, and better structure.</li>
<li>Reserve <strong>imperative or runtime</strong> definitions for dynamic or plugin-based use cases.</li>
</ul>
<h4 id="group-routes-to-avoid-repetition" tabindex="-1"><a class="header-anchor" href="#group-routes-to-avoid-repetition"><span>Group Routes to Avoid Repetition</span></a></h4>
<ul>
<li>Always use route groups (<code v-pre>group</code>, <code v-pre>children</code>, or decorator options) when routes share common prefixes, middleware, or protocols.</li>
<li>This improves consistency and reduces duplication.</li>
</ul>
<h4 id="use-name-for-maintainability" tabindex="-1"><a class="header-anchor" href="#use-name-for-maintainability"><span>Use <code v-pre>name</code> for Maintainability</span></a></h4>
<ul>
<li>Naming routes lets you reference them easily in redirections, links, or route-based logic.</li>
<li>Use dot notation to reflect structure: e.g., <code v-pre>api.users.create</code>.</li>
</ul>
<h4 id="avoid-over-nesting" tabindex="-1"><a class="header-anchor" href="#avoid-over-nesting"><span>Avoid Over-Nesting</span></a></h4>
<ul>
<li>Keep route group nesting shallow.</li>
<li>Use <code v-pre>maxDepth</code> to prevent unintentional deep merges and preserve readability.</li>
</ul>
<h4 id="don-t-overuse-runtime-definitions" tabindex="-1"><a class="header-anchor" href="#don-t-overuse-runtime-definitions"><span>Don’t Overuse Runtime Definitions</span></a></h4>
<ul>
<li>Runtime definitions are powerful but should be limited to plugin modules, dynamic loading, or advanced use cases.</li>
<li>For all known-at-setup routes, stick to static registration.</li>
</ul>
<h4 id="understand-the-api-strengths" tabindex="-1"><a class="header-anchor" href="#understand-the-api-strengths"><span>Understand the API Strengths</span></a></h4>
<table>
<thead>
<tr>
<th>API Style</th>
<th>Best For</th>
</tr>
</thead>
<tbody>
<tr>
<td>Declarative</td>
<td>Most apps, clear structure, IDE-friendly</td>
</tr>
<tr>
<td>Imperative</td>
<td>Dynamic conditions, functional-driven setups</td>
</tr>
<tr>
<td>Fluent</td>
<td>Runtime logic, adaptive app structure</td>
</tr>
<tr>
<td>Option-based</td>
<td>Bulk registration, JSON-style configs</td>
</tr>
<tr>
<td>Collection-based</td>
<td>Manual <code v-pre>Route</code> control, advanced filters</td>
</tr>
</tbody>
</table>
<h4 id="use-defineeventhandler-for-all-handler-types" tabindex="-1"><a class="header-anchor" href="#use-defineeventhandler-for-all-handler-types"><span>Use <code v-pre>defineEventHandler</code> for All Handler Types</span></a></h4>
<ul>
<li>This utility ensures consistency when using function-based, factory-based, or class-based handlers.</li>
<li>It’s especially useful when registering routes imperatively or at runtime.</li>
</ul>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>In Stone.js, defining routes is simple, flexible, and context-aware.</p>
<p>You can choose from several route definition styles, <strong>declarative</strong>, <strong>imperative</strong>, <strong>fluent</strong>, <strong>option-based</strong>, or <strong>collection-based</strong>, depending on your application’s structure and runtime needs. Behind the scenes, all of them produce the same powerful <code v-pre>Route</code> instances that integrate into the Continuum.</p>
<p>Routes can be grouped, composed, and extended with middleware, bindings, validation rules, and more. With clean merging logic, support for nesting, and route, level configuration, you can express complex routing trees with minimal repetition.</p>
<p>When in doubt:</p>
<ul>
<li>Use <strong>declarative</strong> definitions for structure.</li>
<li>Use <strong>imperative</strong> or <strong>option</strong> APIs when you need flexibility.</li>
<li>Use <strong>groups</strong> to reduce boilerplate.</li>
<li>Use <strong>named routes</strong> for maintainability.</li>
</ul>
<p>No matter the style, the Stone Router ensures consistency, modularity, and portability across all dimensions of your application.</p>
</div></template>


