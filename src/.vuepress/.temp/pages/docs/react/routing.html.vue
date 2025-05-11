<template><div><p>Routing in Stone.js is not just about navigating between views, it’s about <strong>matching user intent with system logic</strong> in a way that works seamlessly across <strong>all execution contexts</strong>: browser, server, or serverless.</p>
<p>In traditional frameworks, routing is often tightly coupled to components or file-based conventions.
In Stone.js, routing is decoupled, explicit, and unified. It operates on <strong>event handlers</strong>, and since every <strong>page is an event handler</strong>, routing pages becomes a natural extension of the Stone.js architecture.</p>
<p>This gives you a powerful and declarative way to:</p>
<ul>
<li>Match routes to pages</li>
<li>Inject parameters and services</li>
<li>Define bindings</li>
<li>Support dynamic registration</li>
<li>And ensure routing works the same way across SPA, SSR, and SOR</li>
</ul>
<p>Whether you're building a small client-side app or a large distributed system, your routing model stays consistent and continuum-aligned.</p>
<div class="hint-container info">
<p class="hint-container-title">Intentions</p>
<p>In Stone.js, pages don’t just render views, they handle intentions.<br>
And routing is how we connect those intentions to the right handler.</p>
</div>
<h2 id="defining-routes-for-pages" tabindex="-1"><a class="header-anchor" href="#defining-routes-for-pages"><span>Defining Routes for Pages</span></a></h2>
<p>In Stone.js, you define page routes using the same techniques available for any event handler, because <strong>pages are just handlers</strong> in the view dimension.</p>
<p>You can register a route to a page using:</p>
<ul>
<li>The <strong>declarative API</strong>, with the <code v-pre>@Page()</code> decorator</li>
<li>The <strong>imperative API</strong>, with the <code v-pre>definePage()</code> utility</li>
</ul>
<p>These definitions are static, they’re evaluated during the application’s setup phase and are ideal for most applications.</p>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>All advanced router features are available for pages: parameters, regex validation, aliases assignment, bindings, and more.</p>
</div>
<Tabs id="73" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h3 id="declarative-example" tabindex="-1"><a class="header-anchor" href="#declarative-example"><span>Declarative Example</span></a></h3>
<p>Use the <code v-pre>@Page()</code> decorator for class-based pages. It provides better introspection, supports lazy loading out of the box, and works perfectly with the blueprint system.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Page <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Page</span></span><span class="token punctuation">(</span><span class="token string">'/users/:id@user(\\d+)'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'user.view'</span><span class="token punctuation">,</span></span>
<span class="line">  bindings<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'userService@findOneBy'</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserPage</span> <span class="token keyword">implements</span> <span class="token class-name">IComponentEventHandler<span class="token operator">&lt;</span>ReactIncomingEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> event <span class="token punctuation">}</span><span class="token operator">:</span> RenderContext<span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> user <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Hello <span class="token punctuation">{</span>user<span class="token punctuation">.</span>fullname<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<h3 id="imperative-example" tabindex="-1"><a class="header-anchor" href="#imperative-example"><span>Imperative Example</span></a></h3>
<p>Use <code v-pre>definePage()</code> when working with factory-based pages or when you prefer full control.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> definePage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">UserPage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> event <span class="token punctuation">}</span><span class="token operator">:</span> RenderContext<span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> user <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Hello <span class="token punctuation">{</span>user<span class="token punctuation">.</span>fullname<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">definePage</span><span class="token punctuation">(</span>UserPage<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'user.view'</span><span class="token punctuation">,</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/users/:id@user(\\d+)'</span><span class="token punctuation">,</span></span>
<span class="line">  bindings<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'userService@findOneBy'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h3 id="why-static-definitions" tabindex="-1"><a class="header-anchor" href="#why-static-definitions"><span>Why Static Definitions?</span></a></h3>
<p>Static routes:</p>
<ul>
<li>Are fully introspectable</li>
<li>Support lazy-loading</li>
<li>Are compatible with all adapter types (browser/server/etc.)</li>
<li>Integrate naturally with the Blueprint setup</li>
</ul>
<p>For more dynamic or runtime-driven scenarios, refer to the <strong>Runtime Page Registration</strong> section or the <a href="../router/definitions">Router documentation</a>.</p>
<h2 id="dynamic-route-bindings" tabindex="-1"><a class="header-anchor" href="#dynamic-route-bindings"><span>Dynamic Route Bindings</span></a></h2>
<p>Stone.js allows you to define smart, declarative routes that not only match a path, but also <strong>inject data directly into the request context</strong>, before your page handler is even called.</p>
<p>This is done using <strong>route bindings</strong>.</p>
<p>Bindings enable you to:</p>
<ul>
<li>Validate and extract route parameters</li>
<li>Automatically resolve data from services (e.g., load a user by ID)</li>
<li>Reduce boilerplate in your <code v-pre>handle()</code> or <code v-pre>render()</code> methods</li>
</ul>
<h3 id="syntax-param-alias-regex" tabindex="-1"><a class="header-anchor" href="#syntax-param-alias-regex"><span>Syntax: <code v-pre>:param@alias(regex)</code></span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Page</span></span><span class="token punctuation">(</span><span class="token string">'/users/:id@user(\\d+)'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  bindings<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    id<span class="token operator">:</span> <span class="token string">'userService@findOneBy'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This tells Stone.js:</p>
<ul>
<li><code v-pre>:id</code> is the route parameter</li>
<li><code v-pre>user</code> is the binding alias</li>
<li><code v-pre>\\d+</code> is the regex that validates the parameter</li>
<li><code v-pre>userService@findOneBy</code> is the service method to call with <code v-pre>id</code> as argument</li>
</ul>
<h3 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works"><span>How it works</span></a></h3>
<p>With that definition in place:</p>
<ul>
<li>Before your page is executed, Stone.js calls <code v-pre>userService.findOneBy(key, value)</code></li>
<li>The result is injected as <code v-pre>event.params.user</code></li>
<li>No <code v-pre>handle()</code> method is required, you can access the user directly in <code v-pre>render()</code></li>
</ul>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre v-pre><code><span class="line"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> event <span class="token punctuation">}</span><span class="token operator">:</span> RenderContext<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> user <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello, </span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>fullname<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This makes pages lighter, especially when your data model is tightly bound to your URL structure.</p>
</div>
<h3 id="ssr-notice-bindings-are-not-snapshotted-automatically" tabindex="-1"><a class="header-anchor" href="#ssr-notice-bindings-are-not-snapshotted-automatically"><span>SSR Notice: Bindings are not snapshotted automatically</span></a></h3>
<p>If you're using <strong>SSR</strong> and want to pass the bound data to the client without fetching again, you must <strong>explicitly snapshot it</strong> in your service using <code v-pre>reactRuntime.snapshot()</code>.</p>
<p>Refer to the <a href="./fetching#snapshot">Snapshot documentation</a> for guidance.</p>
<h3 id="when-to-use-bindings" tabindex="-1"><a class="header-anchor" href="#when-to-use-bindings"><span>When to use bindings</span></a></h3>
<p>Use bindings when:</p>
<ul>
<li>The parameter maps directly to a resource (e.g., <code v-pre>/users/:id</code>)</li>
<li>You want to inject data into <code v-pre>event</code> with minimal code</li>
<li>You want to keep pages minimal and focused</li>
</ul>
<p>Avoid bindings when:</p>
<ul>
<li>You need conditional logic, branching, or multiple service calls, use <code v-pre>handle()</code> instead.</li>
</ul>
<h2 id="lazy-loading" tabindex="-1"><a class="header-anchor" href="#lazy-loading"><span>Lazy Loading</span></a></h2>
<p>Stone.js fully supports <strong>lazy loading</strong> for pages, allowing you to load only the code needed for the active route. This improves performance, reduces initial bundle size, and makes large applications more scalable.</p>
<p>The way lazy loading is handled depends on which API you use to register your page.</p>
<Tabs id="262" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h3 id="declarative-api-lazy-by-default" tabindex="-1"><a class="header-anchor" href="#declarative-api-lazy-by-default"><span>Declarative API: Lazy by default</span></a></h3>
<p>When you register pages using the <code v-pre>@Page()</code> decorator, <strong>lazy loading is enabled automatically</strong>.</p>
<p>Stone.js uses dynamic imports behind the scenes to ensure your page module is only loaded when its route is accessed.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Page</span></span><span class="token punctuation">(</span><span class="token string">'/about'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'about'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AboutPage</span> <span class="token keyword">implements</span> <span class="token class-name">IComponentEventHandler<span class="token operator">&lt;</span>ReactIncomingEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>About Us<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Even though this looks like a normal class, Stone.js will isolate the file and load it only when the <code v-pre>/about</code> route is activated.</p>
<p>No manual configuration required, declarative pages are lazy by design.</p>
</template>
<template #tab1="{ value, isActive }">
<h3 id="imperative-api-lazy-by-manual-setup" tabindex="-1"><a class="header-anchor" href="#imperative-api-lazy-by-manual-setup"><span>Imperative API: Lazy by manual setup</span></a></h3>
<p>When using the imperative <code v-pre>definePage()</code> function, <strong>you must configure lazy loading explicitly</strong>.</p>
<p>You do this by:</p>
<ol>
<li>Returning a function that performs a dynamic <code v-pre>import()</code></li>
<li>Setting the <code v-pre>lazy: true</code> flag in the route options</li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token function">definePage</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./HomePage'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>v <span class="token operator">=></span> Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">,</span></span>
<span class="line">    lazy<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let’s break it down:</p>
<ul>
<li><code v-pre>() =&gt; import('./HomePage')</code> is a function returning a Promise of the module.</li>
<li><code v-pre>Object.values(v)[0]</code> grabs the first export (your page class or factory).</li>
<li><code v-pre>lazy: true</code> tells the router to defer loading this page until the route is accessed.</li>
</ul>
<p><strong>Important:</strong> The module must contain only <strong>one page per file</strong> to avoid ambiguity.</p>
</template>
</Tabs>
<p>Whether you prefer full control or automatic behavior, Stone.js gives you both:</p>
<ul>
<li><strong>Automatic lazy loading when you want it</strong></li>
<li><strong>Manual control when you need it</strong></li>
</ul>
<h2 id="runtime-page-registration" tabindex="-1"><a class="header-anchor" href="#runtime-page-registration"><span>Runtime Page Registration</span></a></h2>
<p>While static route definitions are ideal for most use cases, Stone.js also supports <strong>runtime page registration</strong>, giving you the flexibility to define routes dynamically after the application has started.</p>
<p>This is useful when:</p>
<ul>
<li>Routes depend on runtime data (e.g. feature toggles, plugin systems)</li>
<li>You want to load routes from external sources</li>
<li>You're building an admin panel, CMS, or multi-tenant app</li>
</ul>
<p>Since pages are just handlers, you register them at runtime using the <strong>same APIs</strong> as any other event handler, via the <code v-pre>router</code> instance.</p>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>Runtime routes should always be registered inside a <strong>service provider’s <code v-pre>boot()</code> method</strong>, where the <code v-pre>Router</code> service is guaranteed to be available.</p>
</div>
<Tabs id="378" :data='[{"id":"Fluent"},{"id":"Option"},{"id":"Collection"}]' :active="0" tab-id="runtime-definitions">
<template #title0="{ value, isActive }">Fluent</template>
<template #title1="{ value, isActive }">Option</template>
<template #title2="{ value, isActive }">Collection</template>
<template #tab0="{ value, isActive }">
<h3 id="fluent-api-chained" tabindex="-1"><a class="header-anchor" href="#fluent-api-chained"><span>Fluent API (Chained)</span></a></h3>
<p>You can define routes fluently using methods like <code v-pre>.page()</code> and pass a page handler directly:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Provider</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PageProvider</span> <span class="token keyword">implements</span> <span class="token class-name">IServiceProvider</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> container<span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">make</span><span class="token generic class-name"><span class="token operator">&lt;</span>Router<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'router'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    router<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span><span class="token string">'/help'</span><span class="token punctuation">,</span> <span class="token function">defineEventHandler</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">render</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> ReactIncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">reactResponse</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Help Page'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<h3 id="option-based-definition" tabindex="-1"><a class="header-anchor" href="#option-based-definition"><span>Option-based Definition</span></a></h3>
<p>Prefer a structured format? Use <code v-pre>router.define()</code> and pass route definitions in array form:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">'/legal'</span><span class="token punctuation">,</span></span>
<span class="line">    handler<span class="token operator">:</span> <span class="token function">defineEventHandler</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">render</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> ReactIncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">reactResponse</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Legal Page'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<h3 id="advanced-collection-api" tabindex="-1"><a class="header-anchor" href="#advanced-collection-api"><span>Advanced: Collection API</span></a></h3>
<p>Need full control over routing structures? Use <code v-pre>Route</code> and <code v-pre>RouteCollection</code>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> routes <span class="token operator">=</span> RouteCollection<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">routes<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Route<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/faq'</span><span class="token punctuation">,</span></span>
<span class="line">  handler<span class="token operator">:</span> <span class="token function">defineEventHandler</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">render</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> ReactIncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token function">reactResponse</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'FAQ Page'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">setRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h3 id="runtime-pages-work-the-same" tabindex="-1"><a class="header-anchor" href="#runtime-pages-work-the-same"><span>Runtime Pages Work the Same</span></a></h3>
<p>The handler for a runtime-registered route can be a valid <strong>page</strong>, as long as it implements the <code v-pre>IComponentEventHandler</code> interface and returns JSX in its <code v-pre>render()</code> method.</p>
<p>But be aware:</p>
<ul>
<li><strong>Lazy loading is not automatic</strong></li>
<li>You must use <code v-pre>import()</code> and pass a proper handler instance</li>
<li>Runtime pages are not introspected during setup</li>
</ul>
<p>For more details on dynamic routing, see the <a href="../router/definitions#runtime-definition">Router documentation</a>.</p>
<h2 id="navigation" tabindex="-1"><a class="header-anchor" href="#navigation"><span>Navigation</span></a></h2>
<p>Stone.js provides two primary ways to navigate between pages:</p>
<ol>
<li><strong>Declaratively</strong>, using the built-in <code v-pre>&lt;StoneLink /&gt;</code> component</li>
<li><strong>Programmatically</strong>, using the <code v-pre>Router</code> service</li>
</ol>
<p>Both approaches are <strong>context-aware</strong> and adapt automatically depending on whether your app is running in <strong>CSR</strong>, <strong>SSR</strong>, or <strong>SOR</strong>.</p>
<h3 id="declarative-navigation-with-stonelink" tabindex="-1"><a class="header-anchor" href="#declarative-navigation-with-stonelink"><span>Declarative Navigation with <code v-pre>&lt;StoneLink /&gt;</code></span></a></h3>
<p>Use <code v-pre>&lt;StoneLink /&gt;</code> to create links between pages in your application.</p>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneLink <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">StoneLink</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/profile<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">  Go to Profile</span>
<span class="line"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">StoneLink</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Why use it instead of a regular <code v-pre>&lt;a&gt;</code> tag?</strong></p>
<p>Because <code v-pre>&lt;StoneLink /&gt;</code> is:</p>
<ul>
<li>Smart: Uses client-side navigation in SPA/SSR</li>
<li>Safe: Falls back to traditional navigation in SOR</li>
<li>Seamless: Keeps routing platform-agnostic</li>
</ul>
<div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre v-pre><code><span class="line">CSR / SSR → router.navigate()</span>
<span class="line">SOR       → &lt;a href="..."></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="programmatic-navigation-with-router-navigate" tabindex="-1"><a class="header-anchor" href="#programmatic-navigation-with-router-navigate"><span>Programmatic Navigation with <code v-pre>Router.navigate()</code></span></a></h3>
<p>You can also navigate manually, typically after a user interaction, like form submission or authentication.</p>
<h4 id="in-a-page-via-di" tabindex="-1"><a class="header-anchor" href="#in-a-page-via-di"><span>In a Page (via DI):</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> router<span class="token operator">:</span> Router<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">'/dashboard'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="in-a-component-via-stonecontext" tabindex="-1"><a class="header-anchor" href="#in-a-component-via-stonecontext"><span>In a Component (via StoneContext):</span></a></h4>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> container <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>StoneContext<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>Router<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">'/logout'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="where-is-navigate-supported" tabindex="-1"><a class="header-anchor" href="#where-is-navigate-supported"><span>Where is <code v-pre>navigate()</code> supported?</span></a></h3>
<table>
<thead>
<tr>
<th>Context</th>
<th>Supported?</th>
<th>Behavior</th>
</tr>
</thead>
<tbody>
<tr>
<td>SPA (CSR)</td>
<td>✅</td>
<td>Uses history API for seamless nav</td>
</tr>
<tr>
<td>SSR (hydrated)</td>
<td>✅</td>
<td>Behaves like CSR after hydration</td>
</tr>
<tr>
<td>SOR</td>
<td>❌</td>
<td>Not available, use <code v-pre>&lt;StoneLink /&gt;</code></td>
</tr>
</tbody>
</table>
<p>In <strong>SOR (Server-Only Rendering)</strong>, there is <strong>no JavaScript runtime</strong> in the browser. That’s why <code v-pre>router.navigate()</code> cannot work there.</p>
<p>To ensure safe navigation in SOR, always use <code v-pre>&lt;StoneLink /&gt;</code>.</p>
<h2 id="router-features-available-to-pages" tabindex="-1"><a class="header-anchor" href="#router-features-available-to-pages"><span>Router Features Available to Pages</span></a></h2>
<p>Because every <strong>page</strong> in Stone.js is just a specialized <strong>event handler</strong>, it inherits <strong>all router features</strong> available through the <code v-pre>@stone-js/router</code> module.</p>
<p>This means you don’t need a separate routing system for pages, everything you can do with the router, you can do with pages.</p>
<p>Here’s what’s available:</p>
<h3 id="declarative-and-imperative-definitions" tabindex="-1"><a class="header-anchor" href="#declarative-and-imperative-definitions"><span>Declarative and Imperative Definitions</span></a></h3>
<p>You can define routes using:</p>
<ul>
<li><code v-pre>@Page()</code> for class-based declarative registration</li>
<li><code v-pre>definePage()</code> for factory-based or runtime control</li>
</ul>
<p>Both support lazy loading, bindings, and more.</p>
<h3 id="route-bindings" tabindex="-1"><a class="header-anchor" href="#route-bindings"><span>Route Bindings</span></a></h3>
<p>Automatically fetch and inject resources based on route parameters:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Page</span></span><span class="token punctuation">(</span><span class="token string">'/articles/:slug@article'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  bindings<span class="token operator">:</span> <span class="token punctuation">{</span> slug<span class="token operator">:</span> <span class="token string">'articleService@findBySlug'</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The resolved <code v-pre>article</code> is available in <code v-pre>event.get('article')</code>.</p>
<div class="hint-container info">
<p class="hint-container-title">Reminder</p>
<p>Bindings are <strong>not</strong> snapshotted automatically, use <code v-pre>reactRuntime.snapshot()</code> when needed.</p>
</div>
<h3 id="nested-grouped-routes" tabindex="-1"><a class="header-anchor" href="#nested-grouped-routes"><span>Nested &amp; Grouped Routes</span></a></h3>
<p>Organize your routes using naming conventions or use nested path structures:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Page</span></span><span class="token punctuation">(</span><span class="token string">'/admin/users/:id'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'admin.users.view'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>You can group routes logically by domain, module, or adapter.</p>
<h3 id="regex-parameter-validation" tabindex="-1"><a class="header-anchor" href="#regex-parameter-validation"><span>Regex Parameter Validation</span></a></h3>
<p>Validate route parameters inline:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Page</span></span><span class="token punctuation">(</span><span class="token string">'/posts/:id(\\d+)'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'posts.detail'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This matches only numeric IDs.</p>
<h3 id="repeatable-optional-parameters" tabindex="-1"><a class="header-anchor" href="#repeatable-optional-parameters"><span>Repeatable &amp; Optional Parameters</span></a></h3>
<p>Use advanced path patterns for more expressive URLs:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Page</span></span><span class="token punctuation">(</span><span class="token string">'/tags/:names*'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'tags.filter'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// Repeatable</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Page</span></span><span class="token punctuation">(</span><span class="token string">'/archive/:year?/:month?'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'archive'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// Optional</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="aliases-and-protocol-specific-routes" tabindex="-1"><a class="header-anchor" href="#aliases-and-protocol-specific-routes"><span>Aliases and Protocol-Specific Routes</span></a></h3>
<p>You can define multiple paths for a single page or restrict a route to a specific protocol (e.g., <code v-pre>http</code>, <code v-pre>https</code>, <code v-pre>ws</code>).</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Page</span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'/faq'</span><span class="token punctuation">,</span> <span class="token string">'/help'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'support.faq'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>📘 For the full list of routing features, see the <RouteLink to="/docs/router/">Router documentation</RouteLink>.
Pages follow the same model and benefit from every router capability.</p>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>Routing in Stone.js gives you an expressive, flexible system with full control over behavior, structure, and context. But with flexibility comes the need for discipline.</p>
<p>Here are the recommended practices to keep your routing layer clean, robust, and continuum-aligned.</p>
<h4 id="use-page-for-most-routes" tabindex="-1"><a class="header-anchor" href="#use-page-for-most-routes"><span>Use <code v-pre>@Page()</code> for most routes</span></a></h4>
<p>Prefer the declarative API (<code v-pre>@Page()</code>) whenever possible:</p>
<ul>
<li>Automatically lazy-loads the page</li>
<li>Keeps route logic close to the handler</li>
<li>Provides better introspection and developer tooling</li>
<li>Aligns with Blueprint and Dimension registration patterns</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Page</span></span><span class="token punctuation">(</span><span class="token string">'/about'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'about'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AboutPage</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="use-definepage-only-when-necessary" tabindex="-1"><a class="header-anchor" href="#use-definepage-only-when-necessary"><span>Use <code v-pre>definePage()</code> only when necessary</span></a></h4>
<p>Reserve imperative registration for:</p>
<ul>
<li>Factory-based pages</li>
<li>Runtime-assembled apps</li>
<li>Dynamic plugin/module injection</li>
<li>Third-party libraries</li>
</ul>
<p>Don't overuse imperative routes just for stylistic reasons, declarative is more maintainable long-term.</p>
<h4 id="don-t-overuse-bindings" tabindex="-1"><a class="header-anchor" href="#don-t-overuse-bindings"><span>Don’t overuse bindings</span></a></h4>
<p>Route bindings are a great way to simplify event handler logic, but they:</p>
<ul>
<li>Don’t snapshot data automatically</li>
<li>Should stay simple and predictable</li>
</ul>
<p>Use bindings for common resource loading (<code v-pre>/users/:id</code>), not for complex logic.</p>
<p>Snapshot your binding results explicitly if needed in SSR.</p>
<h4 id="avoid-router-navigate-in-sor" tabindex="-1"><a class="header-anchor" href="#avoid-router-navigate-in-sor"><span>Avoid <code v-pre>router.navigate()</code> in SOR</span></a></h4>
<p>In Server-Only Rendering (SOR) mode, there’s no JavaScript runtime on the client, so <code v-pre>router.navigate()</code> doesn’t work.</p>
<p>Always use <code v-pre>&lt;StoneLink /&gt;</code> in components and templates when you need cross-platform-safe navigation.</p>
<h4 id="use-stonelink-by-default" tabindex="-1"><a class="header-anchor" href="#use-stonelink-by-default"><span>Use <code v-pre>&lt;StoneLink /&gt;</code> by default</span></a></h4>
<p>Use <code v-pre>&lt;StoneLink to=&quot;...&quot; /&gt;</code> instead of <code v-pre>&lt;a href=&quot;...&quot; /&gt;</code> to:</p>
<ul>
<li>Enable seamless navigation in SPA/SSR</li>
<li>Fallback gracefully to real links in SOR</li>
<li>Keep the user experience consistent</li>
</ul>
<h4 id="keep-routes-grouped-by-domain" tabindex="-1"><a class="header-anchor" href="#keep-routes-grouped-by-domain"><span>Keep routes grouped by domain</span></a></h4>
<p>Use namespaces, naming conventions, or route groups to organize pages:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Page</span></span><span class="token punctuation">(</span><span class="token string">'/admin/settings'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'admin.settings'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Page</span></span><span class="token punctuation">(</span><span class="token string">'/admin/users/:id'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'admin.users.view'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>This improves readability, maintainability, and runtime introspection.</p>
<h4 id="validate-your-dynamic-parameters" tabindex="-1"><a class="header-anchor" href="#validate-your-dynamic-parameters"><span>Validate your dynamic parameters</span></a></h4>
<p>When using dynamic routes (<code v-pre>:id</code>, <code v-pre>:slug</code>), always add regex validation to:</p>
<ul>
<li>Prevent route matching ambiguity</li>
<li>Add light security and clarity</li>
<li>Make behavior predictable</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Page</span></span><span class="token punctuation">(</span><span class="token string">'/orders/:id(\\d+)'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'orders.detail'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="define-runtime-routes-in-boot" tabindex="-1"><a class="header-anchor" href="#define-runtime-routes-in-boot"><span>Define runtime routes in <code v-pre>boot()</code></span></a></h4>
<p>If you're registering routes dynamically, always do it inside a service provider’s <code v-pre>boot()</code> method:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Provider</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyModuleProvider</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">make</span><span class="token generic class-name"><span class="token operator">&lt;</span>Router<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'router'</span><span class="token punctuation">)</span></span>
<span class="line">    router<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span><span class="token string">'/docs'</span><span class="token punctuation">,</span> DocsPageHandler<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This ensures that all dependencies are available and the router is initialized.</p>
<h4 id="don-t-bring-another-router" tabindex="-1"><a class="header-anchor" href="#don-t-bring-another-router"><span>Don’t bring another router</span></a></h4>
<p>Stone.js already provides a unified, multi-context router with support for SPA, SSR, SOR, and middleware.</p>
<p>You don’t need <code v-pre>react-router</code>, or any other third-party navigation library.
Using them will lead to conflicts, redundancy, and unnecessary complexity.</p>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>In Stone.js, routing is not a side feature, it’s a foundational mechanism that connects user intention with application behavior across every dimension of execution.</p>
<p>Pages in Stone.js are just context-aware event handlers, and routing is the way they’re discovered, matched, and invoked.</p>
<p>By aligning routing with the Continuum Architecture:</p>
<ul>
<li>You get consistent, introspectable routing behavior across SPA, SSR, and SOR</li>
<li>You can define routes declaratively or imperatively, statically or at runtime</li>
<li>You gain access to powerful features like route bindings, nested paths, protocol filters, and more</li>
<li>You avoid framework lock-in by using a router designed for both frontend and backend dimensions</li>
</ul>
<p>With <code v-pre>&lt;StoneLink /&gt;</code>, <code v-pre>Router.navigate()</code>, and adapter-aware navigation handling, you're always in control, no matter the environment.</p>
<h3 id="in-short" tabindex="-1"><a class="header-anchor" href="#in-short"><span>In short:</span></a></h3>
<ul>
<li>A <strong>Page</strong> is a handler.</li>
<li>A <strong>route</strong> is an intention pathway.</li>
<li>An <strong>Incoming Event</strong> is an intention.</li>
<li>And <strong>Stone.js routing</strong> is how you map one to the other, elegantly, contextually, and universally.</li>
</ul>
<p>For more advanced features and low-level routing tools, refer to the full <RouteLink to="/docs/router/">Router documentation</RouteLink>.<br>
But when it comes to Pages, this is everything you need to route with power and precision.</p>
</div></template>


