<template><div><p>The <strong>Service Container</strong> is Stone.js’s powerful internal dependency injection engine — your system's backstage manager.</p>
<p>It lives in the <strong>Initialization Dimension</strong>, where your system is bootstrapped and prepared to respond to intentions. Within the Continuum Architecture, the service container acts as the <strong>ephemeral internal context</strong>, managing the concrete dependencies that your system needs <em>right now</em> to apply its domain logic in the current execution context.</p>
<p>Think of it as the backstage of a play: it doesn’t care about the story (domain), the audience (users), or even the theater (runtime). It just makes sure everyone has their props when they enter the stage.</p>
<h3 id="why-it-exists" tabindex="-1"><a class="header-anchor" href="#why-it-exists"><span>Why It Exists</span></a></h3>
<p>Most applications need to assemble various parts: configs, loggers, services, clients, and helpers. You could wire them together manually... or you could let the Service Container do the job for you.</p>
<p>It provides:</p>
<ul>
<li>A clean and automatic way to <strong>register</strong>, <strong>resolve</strong>, and <strong>inject</strong> dependencies</li>
<li>Support for <strong>singleton</strong> and <strong>factory</strong> lifecycles</li>
<li>A unified interface for <strong>declarative</strong>, <strong>imperative</strong>, and <strong>explicit</strong> service binding</li>
<li>Advanced resolution via <strong>destructuring</strong> and <strong>proxy access</strong></li>
</ul>
<p>And it does all of this without tying your domain logic to any specific platform or environment.</p>
<h3 id="where-it-fits-in-the-continuum" tabindex="-1"><a class="header-anchor" href="#where-it-fits-in-the-continuum"><span>Where It Fits in the Continuum</span></a></h3>
<p>In Stone.js, everything revolves around managing <strong>context</strong>. The container represents the <strong>internal execution context</strong>, tailored and scoped to each system instance. It’s:</p>
<ul>
<li>Created during system initialization when an incoming event is received</li>
<li>Passed into your services and factories</li>
<li>Destroyed when the system is done processing the event</li>
</ul>
<p>It is <strong>ephemeral</strong>, which means it lives only for the lifetime of the current event, but it's <strong>universal</strong> — the same mechanism powers your CLI, Lambda, SSR server, or frontend app.</p>
<h3 id="core-responsibilities" tabindex="-1"><a class="header-anchor" href="#core-responsibilities"><span>Core Responsibilities</span></a></h3>
<ul>
<li><strong>Register services</strong>: via decorators, blueprint configuration, or manual bindings</li>
<li><strong>Resolve dependencies</strong>: using <code v-pre>make</code>, <code v-pre>resolve</code>, or proxy access</li>
<li><strong>Manage lifecycle</strong>: singleton or transient per binding</li>
<li><strong>Alias bindings</strong>: make your services portable across build tools and environments</li>
</ul>
<h2 id="accessing-the-container" tabindex="-1"><a class="header-anchor" href="#accessing-the-container"><span>Accessing the Container</span></a></h2>
<p>In Stone.js, the <strong>Service Container</strong> is passed to your services so they can resolve their own dependencies. How you access it depends on how your service is defined — <strong>class-based</strong>, <strong>factory-based</strong>, or <strong>function-based</strong> (spoiler: that one’s not allowed).</p>
<p>Let’s break it down.</p>
<Tabs id="103" :data='[{"id":"Class-based"},{"id":"Factory-based"},{"id":"Function-based"}]' :active="0" tab-id="class-factory-function">
<template #title0="{ value, isActive }">Class-based</template>
<template #title1="{ value, isActive }">Factory-based</template>
<template #title2="{ value, isActive }">Function-based</template>
<template #tab0="{ value, isActive }">
<h3 id="class-based-services" tabindex="-1"><a class="header-anchor" href="#class-based-services"><span>Class-Based Services</span></a></h3>
<p>If your service is a class, the container is injected into the constructor. You can receive it either as a single parameter or via destructuring for multiple dependencies.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp<span class="token punctuation">,</span> IContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> container<span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also destructure the container to directly access dependencies:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Service <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">AdminServiceOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  config<span class="token operator">:</span> Config<span class="token punctuation">;</span></span>
<span class="line">  userService<span class="token operator">:</span> UserService<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Service</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AdminService</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span> config<span class="token punctuation">,</span> userService <span class="token punctuation">}</span><span class="token operator">:</span> AdminServiceOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Use config and userService directly</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This works because the container is a <strong>Proxy</strong> — it resolves dependencies as properties.</p>
</template>
<template #tab1="{ value, isActive }">
<h3 id="factory-based-services" tabindex="-1"><a class="header-anchor" href="#factory-based-services"><span>Factory-Based Services</span></a></h3>
<p>Factory functions receive the container as their first argument. You can use it directly or destructure it just like in classes.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig<span class="token punctuation">,</span> IContainer<span class="token punctuation">,</span> IncomingEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">Application</span> <span class="token operator">=</span> <span class="token punctuation">(</span>container<span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With destructuring:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ApplicationOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  config<span class="token operator">:</span> Config<span class="token punctuation">;</span></span>
<span class="line">  userService<span class="token operator">:</span> UserService<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">Application</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> config<span class="token punctuation">,</span> userService <span class="token punctuation">}</span><span class="token operator">:</span> ApplicationOptions<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> config<span class="token punctuation">.</span>greeting <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Factory-based access is ideal when you need dynamic setup or want to pass the container to multiple handlers.</p>
</template>
<template #tab2="{ value, isActive }">
<h3 id="function-based-services-not-allowed" tabindex="-1"><a class="header-anchor" href="#function-based-services-not-allowed"><span>Function-Based Services: Not Allowed</span></a></h3>
<p>Function-based handlers — that is, direct <code v-pre>(event) =&gt; {}</code> functions — don’t receive the container. Why?</p>
<p>Because there's no place to inject it. They’re not a class, not a factory, and not wrapped in anything.</p>
<p>If you want access to the container in a function-style handler, just wrap it in a factory:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> config <span class="token punctuation">}</span><span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> config<span class="token punctuation">.</span>greeting <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>As you can see we don't use <code v-pre>IContainer</code> directly in the constructor. Instead, we use a custom interface that describes the dependencies we need.<br>
This is a good practice because it makes your code more readable and maintainable.</p>
</div>
<h2 id="registering-services" tabindex="-1"><a class="header-anchor" href="#registering-services"><span>Registering Services</span></a></h2>
<p>In Stone.js, services can be registered in three main ways, depending on your style and needs:</p>
<ul>
<li><strong>Declarative API</strong> — Clean and class-friendly</li>
<li><strong>Imperative API</strong> — Blueprint-based and flexible</li>
<li><strong>Explicit API</strong> — Full manual control (for advanced use)</li>
</ul>
<p>All these methods inject your service into the <strong>Service Container</strong>, making it available for resolution anywhere in the system.</p>
<Tabs id="183" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h3 id="declarative-api" tabindex="-1"><a class="header-anchor" href="#declarative-api"><span>Declarative API</span></a></h3>
<p>This is the easiest and most elegant way to register a service — just decorate your class.</p>
<h4 id="stone-—-the-foundation" tabindex="-1"><a class="header-anchor" href="#stone-—-the-foundation"><span><code v-pre>@Stone()</code> — The Foundation</span></a></h4>
<p>Use the <code v-pre>@Stone()</code> decorator to register any class into the container. It’s the most generic form — like placing a foundational stone in your app.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Stone <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Stone</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LoggerService</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> container<span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="service-—-the-specialized-shortcut" tabindex="-1"><a class="header-anchor" href="#service-—-the-specialized-shortcut"><span><code v-pre>@Service()</code> — The Specialized Shortcut</span></a></h4>
<p>Prefer this when registering actual services. It behaves the same as <code v-pre>@Stone()</code>, but it's semantically clearer.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Service <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Service</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> container<span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, both decorators register your service as a <strong>singleton</strong>. If you want a new instance each time (i.e. a <strong>factory</strong>), set <code v-pre>singleton: false</code>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Service</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> singleton<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">TempService</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also add an alias:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Stone</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> alias<span class="token operator">:</span> <span class="token string">'logger'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LoggerService</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>You’ll learn more about aliases in the <a href="#aliases">Aliases</a> section.</p>
</template>
<template #tab1="{ value, isActive }">
<h3 id="imperative-api" tabindex="-1"><a class="header-anchor" href="#imperative-api"><span>Imperative API</span></a></h3>
<p>For more control — or for programmatic setups — use the <code v-pre>defineBlueprintConfig()</code> function. You register services in the <code v-pre>stone.services</code> namespace.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> mainBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.services'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> module<span class="token operator">:</span> LoggerService<span class="token punctuation">,</span> isClass<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> module<span class="token operator">:</span> TempService<span class="token punctuation">,</span> isClass<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> singleton<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> alias<span class="token operator">:</span> <span class="token string">'temp'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also register factory-based services:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">TempService</span> <span class="token operator">=</span> <span class="token punctuation">(</span>container<span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">doSomething</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/* ... */</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.services'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> module<span class="token operator">:</span> TempService<span class="token punctuation">,</span> isFactory<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h3 id="explicit-api-advanced-use" tabindex="-1"><a class="header-anchor" href="#explicit-api-advanced-use"><span>Explicit API (Advanced Use)</span></a></h3>
<p>If you want <strong>full control</strong>, you can interact directly with the container. This is only allowed inside a <strong>Service Provider</strong>, not in runtime code.</p>
<p>Here are your options:</p>
<h4 id="bind-a-constant-or-instance" tabindex="-1"><a class="header-anchor" href="#bind-a-constant-or-instance"><span>Bind a constant or instance:</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span><span class="token function">instance</span><span class="token punctuation">(</span><span class="token string">'apiUrl'</span><span class="token punctuation">,</span> <span class="token string">'https://api.example.com'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="bind-a-singleton-resolver" tabindex="-1"><a class="header-anchor" href="#bind-a-singleton-resolver"><span>Bind a singleton resolver:</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>container<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">LoggerService</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="bind-a-factory-new-instance-each-time" tabindex="-1"><a class="header-anchor" href="#bind-a-factory-new-instance-each-time"><span>Bind a factory (new instance each time):</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span><span class="token function">binding</span><span class="token punctuation">(</span><span class="token string">'temp'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>container<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">TempService</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="conditional-bindings-only-if-not-already-bound" tabindex="-1"><a class="header-anchor" href="#conditional-bindings-only-if-not-already-bound"><span>Conditional bindings (only if not already bound):</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span><span class="token function">instanceIf</span><span class="token punctuation">(</span><span class="token string">'apiUrl'</span><span class="token punctuation">,</span> <span class="token string">'https://api.example.com'</span><span class="token punctuation">)</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">singletonIf</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">LoggerService</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">bindingIf</span><span class="token punctuation">(</span><span class="token string">'temp'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">TempService</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As demonstrated in these examples, the container is passed directly to the class constructor. Since the container is proxied, this enables the destructuring dependency injection (DI) pattern to function seamlessly.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Remember: declarative and blueprint-based bindings are preferred for most apps. Explicit binding is for custom infrastructure, service providers, or deep-level modules.</p>
</div>
<h2 id="resolving-services" tabindex="-1"><a class="header-anchor" href="#resolving-services"><span>Resolving Services</span></a></h2>
<p>Once your services are registered, it’s time to use them. The Stone.js Service Container offers several ways to <strong>resolve</strong> dependencies, from classic methods to some truly elegant tricks using destructuring and proxies.</p>
<h3 id="make-—-classic-resolution" tabindex="-1"><a class="header-anchor" href="#make-—-classic-resolution"><span><code v-pre>make()</code> — Classic Resolution</span></a></h3>
<p>Use <code v-pre>make()</code> to resolve a registered binding by its name or class.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'config'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span>LoggerService<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>If the binding doesn’t exist, <code v-pre>make()</code> throws an error. Use it when you expect the service to already be bound.</p>
<h3 id="resolve-—-auto-binding-included" tabindex="-1"><a class="header-anchor" href="#resolve-—-auto-binding-included"><span><code v-pre>resolve()</code> — Auto-Binding Included</span></a></h3>
<p>Use <code v-pre>resolve()</code> when you're not sure if a service is registered. It tries to resolve the binding, and if it doesn't exist, it <strong>automatically binds and returns</strong> it.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>LoggerService<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This is particularly useful for classes that haven’t been registered manually — they’ll be auto-bound as singletons by default.</p>
<p>You can also control that behavior:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> temp <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>TempService<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// Bind as factory instead</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="destructuring-resolution" tabindex="-1"><a class="header-anchor" href="#destructuring-resolution"><span>Destructuring Resolution</span></a></h3>
<p>Because the container is a Proxy, you can <strong>destructure</strong> multiple dependencies at once — clean and elegant, especially in constructor or factory parameters.</p>
<Tabs id="300" :data='[{"id":"Class-based"},{"id":"Factory-based"}]' :active="0" tab-id="class-factory-function">
<template #title0="{ value, isActive }">Class-based</template>
<template #title1="{ value, isActive }">Factory-based</template>
<template #tab0="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Service</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AdminService</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span> config<span class="token punctuation">,</span> logger <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> config<span class="token operator">:</span> Config<span class="token punctuation">;</span> logger<span class="token operator">:</span> Logger <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">AdminService started with config: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>config<span class="token punctuation">.</span>appName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<p>It works the same for factory-based services:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> config<span class="token punctuation">,</span> logger <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> config<span class="token operator">:</span> Config<span class="token punctuation">;</span> logger<span class="token operator">:</span> Logger <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Handling </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>event<span class="token punctuation">.</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This is our favorite method — readable, intuitive, and type-safe in TypeScript.</p>
</div>
<h3 id="proxy-based-resolution" tabindex="-1"><a class="header-anchor" href="#proxy-based-resolution"><span>Proxy-Based Resolution</span></a></h3>
<p>Want to access services like properties? Go for it — the container is a Proxy!</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span>logger</span>
<span class="line"><span class="token keyword">const</span> userService <span class="token operator">=</span> container<span class="token punctuation">.</span>userService</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>This works thanks to <code v-pre>Proxy.get</code>, which intercepts property access and calls <code v-pre>make()</code> under the hood.</p>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>But don’t get carried away — only one-level property resolution is supported. No <code v-pre>container.services.user</code>, just <code v-pre>container.userService</code>.</p>
</div>
<h3 id="factory-access" tabindex="-1"><a class="header-anchor" href="#factory-access"><span>Factory Access</span></a></h3>
<p>Need a factory instead of a direct instance? Use:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> factory <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">factory</span><span class="token punctuation">(</span><span class="token string">'myService'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>This is useful for passing service creators around without resolving them yet.</p>
<h2 id="aliases" tabindex="-1"><a class="header-anchor" href="#aliases"><span>Aliases</span></a></h2>
<p>In Stone.js, you can assign <strong>aliases</strong> to your services — alternate names used when resolving a service. This is more than just syntactic sugar. It’s a <strong>best practice</strong> that safeguards your app against name mangling (like minification during bundling), Facilitates destructuring DI, and improves long-term flexibility.</p>
<h3 id="why-use-aliases" tabindex="-1"><a class="header-anchor" href="#why-use-aliases"><span>Why Use Aliases?</span></a></h3>
<p>Class names can change. Builds can obfuscate. But <strong>aliases</strong> stay consistent.</p>
<ul>
<li>Facilitate destructuring DI</li>
<li>Ensure your code still works after bundling or uglifying</li>
<li>Make service names friendlier or more descriptive</li>
<li>Abstract away implementation details</li>
</ul>
<h3 id="setting-aliases" tabindex="-1"><a class="header-anchor" href="#setting-aliases"><span>Setting Aliases</span></a></h3>
<p>You can set aliases <strong>declaratively</strong>, <strong>imperatively</strong>, or <strong>explicitly</strong>.</p>
<Tabs id="381" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h4 id="declarative-via-decorator" tabindex="-1"><a class="header-anchor" href="#declarative-via-decorator"><span>Declarative (via decorator)</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Service <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Service</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> alias<span class="token operator">:</span> <span class="token string">'userService'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or with the more generic <code v-pre>@Stone()</code>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Stone</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> alias<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'logger'</span><span class="token punctuation">,</span> <span class="token string">'logService'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LoggerService</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<h4 id="imperative-via-blueprint-config" tabindex="-1"><a class="header-anchor" href="#imperative-via-blueprint-config"><span>Imperative (via blueprint config)</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.services'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> module<span class="token operator">:</span> UserService<span class="token punctuation">,</span> isClass<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> alias<span class="token operator">:</span> <span class="token string">'userService'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> module<span class="token operator">:</span> LoggerService<span class="token punctuation">,</span> isClass<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> alias<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'logger'</span><span class="token punctuation">,</span> <span class="token string">'logService'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h4 id="explicit-via-container-method-—-inside-a-service-provider-only" tabindex="-1"><a class="header-anchor" href="#explicit-via-container-method-—-inside-a-service-provider-only"><span>Explicit (via container method — inside a Service Provider only)</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span>UserService<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'userService'</span><span class="token punctuation">,</span> <span class="token string">'usr'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>You can assign multiple aliases at once by passing an array.</p>
<h3 id="resolving-by-alias" tabindex="-1"><a class="header-anchor" href="#resolving-by-alias"><span>Resolving by Alias</span></a></h3>
<p>Once aliased, you can use the alias anywhere you'd use the class:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> userService <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'userService'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>This also works with destructuring:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">HandlerOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  logger<span class="token operator">:</span> Logger</span>
<span class="line">  userService<span class="token operator">:</span> UserService</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> logger<span class="token punctuation">,</span> userService <span class="token punctuation">}</span><span class="token operator">:</span> HandlerOptions<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Handling request'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Aliases are just keys mapped to real bindings. They’re lightweight, powerful, and totally worth using.</p>
<h3 id="always-alias" tabindex="-1"><a class="header-anchor" href="#always-alias"><span>Always Alias</span></a></h3>
<p>For every registered service, give it an alias. Whether it’s class-based, factory-based, or even just a plain object — an alias guarantees consistency.</p>
<p>Especially important when:</p>
<ul>
<li>Doing destructuring DI</li>
<li>Using <code v-pre>resolve()</code> with auto-binding</li>
<li>Writing frontend code that goes through a build step</li>
<li>You want to decouple class names from usage</li>
</ul>
<h2 id="checking-bindings" tabindex="-1"><a class="header-anchor" href="#checking-bindings"><span>Checking Bindings</span></a></h2>
<p>Sometimes you need to know if a service is already registered in the container before resolving or binding it. Maybe you're writing fallback logic, conditional registration, or just debugging your setup.</p>
<p>Stone.js gives you two methods for this, and they’re functionally identical:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">'myService'</span><span class="token punctuation">)</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">bound</span><span class="token punctuation">(</span><span class="token string">'myService'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="which-one-to-use" tabindex="-1"><a class="header-anchor" href="#which-one-to-use"><span>Which One to Use?</span></a></h3>
<ul>
<li><code v-pre>has</code> — Feels like you're querying a map or dictionary.</li>
<li><code v-pre>bound</code> — Feels like you're asking “has this been bound already?”</li>
</ul>
<p>Choose whichever fits your mental model. Under the hood, they do the same thing.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>container<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">'config'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> cfg <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'config'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>container<span class="token punctuation">.</span><span class="token function">bound</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  container<span class="token punctuation">.</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">LoggerService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-cases" tabindex="-1"><a class="header-anchor" href="#use-cases"><span>Use Cases</span></a></h3>
<ul>
<li>Registering conditionally with <code v-pre>instanceIf</code>, <code v-pre>singletonIf</code>, or <code v-pre>bindingIf</code></li>
<li>Avoiding duplicate bindings when initializing</li>
<li>Writing fallbacks for dev/test environments</li>
<li>Debugging container state</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Need to inspect everything? Use <code v-pre>container.getBindings()</code> and <code v-pre>container.getAliases()</code> to peek inside the internals.</p>
</div>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>The Service Container in Stone.js is simple by design — but with great power comes great… opportunity for mistakes. Here are the best ways to use it effectively (and avoid common traps).</p>
<h4 id="_1-prefer-declarative-binding-when-possible" tabindex="-1"><a class="header-anchor" href="#_1-prefer-declarative-binding-when-possible"><span>1. <strong>Prefer Declarative Binding When Possible</strong></span></a></h4>
<p>Use <code v-pre>@Service()</code> or <code v-pre>@Stone()</code> decorators for most use cases.</p>
<ul>
<li>It's clean, readable, and auto-registers the class</li>
<li>Works well with destructuring</li>
<li>Encourages a modular, testable architecture</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Service</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> alias<span class="token operator">:</span> <span class="token string">'userService'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-use-the-imperative-api-for-conditional-or-dynamic-setup" tabindex="-1"><a class="header-anchor" href="#_2-use-the-imperative-api-for-conditional-or-dynamic-setup"><span>2. <strong>Use the Imperative API for Conditional or Dynamic Setup</strong></span></a></h4>
<p>Blueprint config (<code v-pre>defineBlueprintConfig</code>) is great when you need to:</p>
<ul>
<li>Register services dynamically based on environment or feature flags</li>
<li>Set <code v-pre>isFactory</code>, <code v-pre>singleton</code>, or <code v-pre>alias</code> explicitly</li>
<li>Avoid decorators (e.g. in a shared module or external lib)</li>
</ul>
<h4 id="_3-use-explicit-api-in-infrastructure-code-only" tabindex="-1"><a class="header-anchor" href="#_3-use-explicit-api-in-infrastructure-code-only"><span>3. <strong>Use Explicit API in Infrastructure Code Only</strong></span></a></h4>
<p>Explicit binding (<code v-pre>container.singleton</code>, <code v-pre>container.binding</code>, etc.) is for advanced use:</p>
<ul>
<li>Inside <strong>Service Providers</strong></li>
<li>During system bootstrapping or testing</li>
<li>For edge cases like external libraries, raw values, or mocking</li>
</ul>
<p>Avoid using it <strong>inside event handlers or business logic</strong> — it breaks the dependency model and can lead to hidden side effects.</p>
<h4 id="_4-alias-everything" tabindex="-1"><a class="header-anchor" href="#_4-alias-everything"><span>4. <strong>Alias Everything</strong></span></a></h4>
<p>Always give your services an alias, even if you're registering them by class.</p>
<ul>
<li>Keeps your app safe from class name changes or build minification</li>
<li>Makes services easier to resolve consistently across dimensions</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Service</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> alias<span class="token operator">:</span> <span class="token string">'logger'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LoggerService</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-use-resolve-over-make-for-auto-binding" tabindex="-1"><a class="header-anchor" href="#_5-use-resolve-over-make-for-auto-binding"><span>5. <strong>Use <code v-pre>resolve()</code> Over <code v-pre>make()</code> for Auto-Binding</strong></span></a></h4>
<p>If you’re not 100% sure the service is already registered, use <code v-pre>resolve()</code>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><code v-pre>resolve()</code> will auto-bind and return the service if it’s not already present. <code v-pre>make()</code> will throw if it’s missing.</p>
<h4 id="_6-destructure-whenever-you-can" tabindex="-1"><a class="header-anchor" href="#_6-destructure-whenever-you-can"><span>6. <strong>Destructure Whenever You Can</strong></span></a></h4>
<p>Destructuring the container is the cleanest way to get multiple services at once.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">HandlerOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  logger<span class="token operator">:</span> Logger</span>
<span class="line">  userService<span class="token operator">:</span> UserService</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> logger<span class="token punctuation">,</span> userService <span class="token punctuation">}</span><span class="token operator">:</span> HandlerOptions<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Handling request'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Works in factories, class constructors, and even service providers with basic binding modules.</p>
<h4 id="_7-don-t-bind-during-runtime" tabindex="-1"><a class="header-anchor" href="#_7-don-t-bind-during-runtime"><span>7. <strong>Don’t Bind During Runtime</strong></span></a></h4>
<p>Avoid calling <code v-pre>container.instance()</code> or similar methods during request/event handling. All bindings should happen:</p>
<ul>
<li>At boot time</li>
<li>In a blueprint</li>
<li>Inside a service provider</li>
</ul>
<p>Runtime bindings are hard to track and often lead to inconsistent behavior.</p>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>The <strong>Service Container</strong> is the beating heart of Stone.js’ initialization flow. It powers your application behind the scenes by managing service lifecycles, resolving dependencies, and keeping your system loosely coupled and easy to evolve.</p>
<p>Let’s recap what you’ve learned:</p>
<ul>
<li>The container lives in the <strong>Initialization Dimension</strong> as the <strong>ephemeral internal context</strong>.</li>
<li>It supports <strong>class-based</strong> and <strong>factory-based</strong> services — but <strong>not</strong> raw function-based handlers.</li>
<li>You can register services through:
<ul>
<li><strong>Declarative decorators</strong> (<code v-pre>@Stone</code>, <code v-pre>@Service</code>)</li>
<li><strong>Blueprint configuration</strong> (<code v-pre>defineBlueprintConfig</code>)</li>
<li><strong>Explicit bindings</strong> (<code v-pre>singleton</code>, <code v-pre>binding</code>, <code v-pre>instance</code>) — for power users</li>
</ul>
</li>
<li>Services can be resolved using:
<ul>
<li><code v-pre>make()</code> — strict resolution</li>
<li><code v-pre>resolve()</code> — with fallback auto-binding</li>
<li><strong>Destructuring</strong> — elegant and type-safe</li>
<li><strong>Proxy access</strong> — clean syntax, but only one level deep</li>
</ul>
</li>
<li>Aliases are your friends. They protect your code from name changes and build processes.</li>
<li>The container offers both <strong>flexibility</strong> and <strong>discipline</strong>. Follow the best practices and it will stay clean, efficient, and predictable.</li>
</ul>
<p>Stone.js doesn’t just inject dependencies — it injects clarity into your architecture.</p>
</div></template>


