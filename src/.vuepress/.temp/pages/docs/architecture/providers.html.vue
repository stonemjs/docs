<template><div><p>In Stone.js, <strong>Service Providers</strong> are the official mechanism for plugging functionality into the <strong>initialization dimension</strong> — the moment when the system constructs its internal execution context and binds all core services before handling any request, command, or event.</p>
<p>They are not the only extension point in Stone.js — but they are the main one for <strong>initialization</strong>.<br>
Other dimensions (like <strong>setup</strong> and <strong>integration</strong>) have their own mechanisms. The service provider belongs solely to the phase where the application is “coming to life.”</p>
<p>A <strong>service provider</strong> is a specialized module that can:</p>
<ul>
<li>Register services into the container</li>
<li>Configure those services once registered</li>
<li>Attach to system lifecycle hooks</li>
<li>Extend the system dynamically during initialization</li>
</ul>
<p>However, in most cases, you won’t need one.</p>
<p>Stone.js favors declarative configuration via <strong>decorators</strong> and imperative configuration via the <strong>blueprint API</strong>. These should be your first tools.<br>
Reach for a service provider only when you need <strong>explicit</strong>, <strong>fine-grained</strong>, or <strong>programmatic control</strong> over how services are wired — or when building a <strong>third-party package</strong> that needs to extend the system in a reusable way.</p>
<p>Providers are especially useful when:</p>
<ul>
<li>You’re registering complex services with runtime logic</li>
<li>You want to encapsulate feature modules for reuse</li>
<li>You’re distributing an integration or package for others to use</li>
<li>You need a consistent location to access lifecycle hooks (<code v-pre>onInit</code>, <code v-pre>onStart</code>, etc.)</li>
</ul>
<p>In summary:</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Stone.js can be extended in many ways — but the service provider is the main one for the initialization dimension.</p>
</div>
<p>It’s your bridge into the internal execution context — and your tool of choice when configuration turns into orchestration.</p>
<h2 id="using-service-provider" tabindex="-1"><a class="header-anchor" href="#using-service-provider"><span>Using Service Provider</span></a></h2>
<p>Service providers in Stone.js come in two variants: <strong>class-based</strong> and <strong>factory-based</strong>.<br>
Both are valid and first-class citizens in the system — but each serves different needs.</p>
<p>What matters is <strong>what</strong> a provider does: it must implement one or both of these methods:</p>
<ul>
<li><code v-pre>register()</code> → bind services, listeners, etc.</li>
<li><code v-pre>boot()</code> → configure services after all providers have registered</li>
</ul>
<p>These methods can be synchronous or asynchronous.<br>
And depending on your use case, you might choose one variant over the other.</p>
<Tabs id="97" :data='[{"id":"Class-based"},{"id":"Factory-based"},{"id":"Function-based"}]' :active="0" tab-id="class-factory-function">
<template #title0="{ value, isActive }">Class-based</template>
<template #title1="{ value, isActive }">Factory-based</template>
<template #title2="{ value, isActive }">Function-based</template>
<template #tab0="{ value, isActive }">
<h3 id="class-based-providers" tabindex="-1"><a class="header-anchor" href="#class-based-providers"><span>Class-Based Providers</span></a></h3>
<p>This is the most common shape, and the only one that supports <strong>decorators</strong> and <strong>lifecycle hooks</strong>.</p>
<p>A class-based provider:</p>
<ul>
<li>Can inject the <code v-pre>IContainer</code> in its constructor</li>
<li>Can define <code v-pre>register()</code> and/or <code v-pre>boot()</code> as instance methods</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IContainer<span class="token punctuation">,</span> IServiceProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppServiceProvider</span> <span class="token keyword">implements</span> <span class="token class-name">IServiceProvider</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> container<span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">register</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container</span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">singletonIf</span><span class="token punctuation">(</span>MyService<span class="token punctuation">,</span> <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">MyService</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span>MyService<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'myService'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">boot</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'myService'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<h3 id="factory-based-providers" tabindex="-1"><a class="header-anchor" href="#factory-based-providers"><span>Factory-Based Providers</span></a></h3>
<p>Factory-based providers offer an alternative for simpler setups or when you want to define everything inline.</p>
<p>A factory provider is just a function that returns an object with a <code v-pre>register()</code> or <code v-pre>boot()</code> method.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FactoryServiceProvider<span class="token punctuation">,</span> IContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> AppServiceProvider<span class="token operator">:</span> <span class="token function-variable function">FactoryServiceProvider</span> <span class="token operator">=</span> <span class="token punctuation">(</span>container<span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">register</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span></span>
<span class="line">    container</span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">singletonIf</span><span class="token punctuation">(</span>MyService<span class="token punctuation">,</span> <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">MyService</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span>MyService<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'myService'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">boot</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span></span>
<span class="line">    container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'myService'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This shape is ideal for libraries, or simple modules that don’t need decorators or class behavior.</p>
</template>
<template #tab2="{ value, isActive }">
<h3 id="no-function-based-providers" tabindex="-1"><a class="header-anchor" href="#no-function-based-providers"><span>No Function-Based Providers</span></a></h3>
<p>You may wonder: why not allow raw functions?</p>
<p>Because the provider system is lifecycle-aware — and lifecycle awareness requires structure.<br>
A plain function can’t express <code v-pre>register</code>, <code v-pre>boot</code>, or hooks reliably. So to stay coherent with the Continuum, Stone.js only accepts <strong>class-based</strong> and <strong>factory-based</strong> variants.</p>
</template>
</Tabs>
<h2 id="lifecycle-methods" tabindex="-1"><a class="header-anchor" href="#lifecycle-methods"><span>Lifecycle Methods</span></a></h2>
<p>A service provider’s power lies in <strong>when</strong> it does things, not just <strong>what</strong> it does.</p>
<p>Stone.js executes all providers during the <strong>initialization phase</strong> — the moment your system is “bootstrapping” itself into a running app. This phase is split into two key steps:</p>
<ul>
<li><code v-pre>register()</code> → Bind things into the service container.</li>
<li><code v-pre>boot()</code> → Configure or activate them once all bindings are available.</li>
</ul>
<p>Both are <strong>optional</strong>. But you must implement at least one of them to make your provider useful.</p>
<h3 id="register" tabindex="-1"><a class="header-anchor" href="#register"><span><code v-pre>register()</code></span></a></h3>
<p>The <code v-pre>register()</code> method is used to bind services, classes, values, and factories into the service container.<br>
This is where you describe <strong>what your provider offers</strong> — not how it behaves.</p>
<p>At this stage:</p>
<ul>
<li>Your provider can access the service container</li>
<li>No other provider’s <code v-pre>boot()</code> method has run yet</li>
<li>You <strong>should not resolve or use</strong> other services — just bind them</li>
<li>You have access to the <code v-pre>blueprint</code> and the <code v-pre>eventEmitter</code></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyServiceProvider</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">register</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container</span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string">'router'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>container<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">instance</span><span class="token punctuation">(</span><span class="token string">'apiOptions'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> apiUrl<span class="token operator">:</span> <span class="token string">'https://api.example.com'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This ensures the system builds a complete registry before any configuration or execution begins.</p>
<h3 id="boot" tabindex="-1"><a class="header-anchor" href="#boot"><span><code v-pre>boot()</code></span></a></h3>
<p>Once all providers have been registered, Stone.js calls their <code v-pre>boot()</code> methods — in the order they were loaded.</p>
<p>Now is the time to:</p>
<ul>
<li>Resolve services (<code v-pre>container.make(...)</code>)</li>
<li>Register routes</li>
<li>Set event listeners</li>
<li>Configure middleware</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyServiceProvider</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">boot</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'router'</span><span class="token punctuation">)</span></span>
<span class="line">    router<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>routeDefinitions<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code v-pre>boot()</code> phase is the safe place to <strong>use</strong> the things you registered earlier — or to coordinate logic between multiple providers.</p>
<h3 id="hooks-hook" tabindex="-1"><a class="header-anchor" href="#hooks-hook"><span>Hooks (<code v-pre>@Hook</code>)</span></a></h3>
<p>Stone.js supports a lifecycle hook system, and providers are the best place to listen to major system events.</p>
<p>This works only with <strong>class-based providers</strong>, using the <code v-pre>@Hook</code> decorator:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Hook <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyServiceProvider</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Hook</span></span><span class="token punctuation">(</span><span class="token string">'onInit'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">logInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Execution context initialized.'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This makes your providers reactive and introspectable — and allows third-party packages to extend the framework behavior in clean, declarative ways.</p>
<p>You can subscribe to any of the documented <a href="./blueprint#setup-hooks">setup</a>, <a href="./adapter#integration-hooks">integration</a>, or <a href="./lifecycle">initialization</a> hooks.
It’s one more reason to use class-based providers when you need deep integration.</p>
<h2 id="accessing-the-service-container" tabindex="-1"><a class="header-anchor" href="#accessing-the-service-container"><span>Accessing the Service Container</span></a></h2>
<p>The service container is the beating heart of your Stone.js application — and service providers are its surgeons.<br>
But timing matters: <strong>not everything is available all the time</strong>.</p>
<h3 id="constructor-access" tabindex="-1"><a class="header-anchor" href="#constructor-access"><span>Constructor Access</span></a></h3>
<p>In class-based providers, the service container is injected via the constructor, and via the function argument in factory-based providers.<br>
This lets you store and reuse it across <code v-pre>register()</code>, <code v-pre>boot()</code>, and hook methods.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IContainer<span class="token punctuation">,</span> IServiceProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyServiceProvider</span> <span class="token keyword">implements</span> <span class="token class-name">IServiceProvider</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> container<span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>But be careful: at construction time, only the <strong>blueprint</strong> and the <strong>event emitter</strong> are available, <strong>no other services are registered yet</strong>.
Don’t try to <code v-pre>make()</code> anything else in the constructor — wait for <code v-pre>boot()</code>.</p>
</div>
<h3 id="what-s-safe-to-use-and-when" tabindex="-1"><a class="header-anchor" href="#what-s-safe-to-use-and-when"><span>What’s Safe to Use (and When)</span></a></h3>
<table>
<thead>
<tr>
<th>Method</th>
<th>Can bind services</th>
<th>Can resolve services</th>
<th>Has all providers registered?</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>constructor()</code></td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td><code v-pre>register()</code></td>
<td>✅</td>
<td>⚠️<em>only your own</em></td>
<td>❌</td>
</tr>
<tr>
<td><code v-pre>boot()</code></td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>
</tbody>
</table>
<p>So the rule is simple:</p>
<ul>
<li><strong>Register early</strong> (<code v-pre>register()</code>)</li>
<li><strong>Configure late</strong> (<code v-pre>boot()</code>)</li>
</ul>
<p>That’s the continuum between <strong>definition</strong> and <strong>activation</strong> — don’t mix them up.</p>
<h3 id="common-container-patterns" tabindex="-1"><a class="header-anchor" href="#common-container-patterns"><span>Common Container Patterns</span></a></h3>
<p>You’ll mostly use three methods:</p>
<ul>
<li><code v-pre>singletonIf(key, factory)</code> – registers a singleton only if not yet registered</li>
<li><code v-pre>instanceIf(key, value)</code> – registers a static instance only if not yet registered</li>
<li><code v-pre>make(key)</code> – resolves a previously registered item</li>
</ul>
<p>They allow your provider to be modular and respectful of other providers’ boundaries.</p>
<h2 id="registering-providers" tabindex="-1"><a class="header-anchor" href="#registering-providers"><span>Registering Providers</span></a></h2>
<p>Creating a provider is just the first step.<br>
To make it part of the system, you need to <strong>register it</strong> — either <strong>declaratively</strong> or <strong>imperatively</strong>.</p>
<p>Stone.js offers both options, so you can pick what fits your architecture and context best.</p>
<Tabs id="395" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h3 id="declarative-registration" tabindex="-1"><a class="header-anchor" href="#declarative-registration"><span>Declarative Registration</span></a></h3>
<p>For most applications, this is the go-to method.<br>
Just decorate your class with <code v-pre>@Provider()</code>, and Stone.js will detect and load it automatically.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Provider</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyServiceProvider</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Bind services here</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Configure them here</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>When to use it:</strong></p>
<ul>
<li>When the provider is part of your app codebase</li>
<li>When you want automatic integration</li>
<li>When you want to use hooks (<code v-pre>@Hook</code>) or decorators</li>
</ul>
<p>Under the hood, the decorator tells Stone.js to include this provider during the app’s initialization phase.</p>
</template>
<template #tab1="{ value, isActive }">
<h3 id="imperative-registration" tabindex="-1"><a class="header-anchor" href="#imperative-registration"><span>Imperative Registration</span></a></h3>
<p>Need more control? Want to include third-party or factory-based providers?<br>
Use the <strong>Blueprint API</strong> to register them manually.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> UserProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./providers/UserProvider'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> mainBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.providers'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> module<span class="token operator">:</span> UserProvider<span class="token punctuation">,</span> isFactory<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Each provider entry is an object with:</p>
<ul>
<li><code v-pre>module</code>: the class or factory</li>
<li><code v-pre>isFactory</code>: <code v-pre>true</code> if it’s a factory provider</li>
<li><code v-pre>isClass</code>: <code v-pre>true</code> if it’s a class-based provider</li>
</ul>
<p>You can mix class-based and factory-based providers here, and even load them dynamically from libraries, conditionally, or by environment.</p>
<p><strong>When to use it:</strong></p>
<ul>
<li>When integrating third-party packages</li>
<li>When you want lazy or environment-based loading</li>
<li>When you don’t want to use decorators</li>
</ul>
</template>
</Tabs>
<p>So in short:</p>
<table>
<thead>
<tr>
<th>Type</th>
<th>Supports Hooks</th>
<th>Easy to Modularize</th>
<th>Works for 3rd Party</th>
</tr>
</thead>
<tbody>
<tr>
<td>Declarative (<code v-pre>@Provider()</code>)</td>
<td>✅</td>
<td>✅</td>
<td>⚠️ Needs code access</td>
</tr>
<tr>
<td>Imperative (<code v-pre>stone.providers</code>)</td>
<td>❌</td>
<td>✅</td>
<td>✅</td>
</tr>
</tbody>
</table>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>Service providers are one of the most powerful mechanisms in Stone.js. But with great power comes great modularity.
Here’s how to make the most of them — without shooting yourself in the boot phase.</p>
<h4 id="prefer-declarative-or-blueprint-configuration-first" tabindex="-1"><a class="header-anchor" href="#prefer-declarative-or-blueprint-configuration-first"><span>Prefer Declarative or Blueprint Configuration First</span></a></h4>
<p>Stone.js is designed to be highly declarative.
Whenever possible, configure your system using decorators (<code v-pre>@Controller</code>, <code v-pre>@Service</code>, <code v-pre>@Middleware</code>, etc.) or the <code v-pre>defineBlueprintConfig()</code> API.</p>
<p>Reach for a service provider <strong>only</strong> when:</p>
<ul>
<li>You need precise control over the timing and structure of service registration</li>
<li>You’re integrating advanced logic that decorators or blueprint fields can’t express</li>
<li>You’re building a reusable <strong>third-party extension</strong> to plug into the initialization phase</li>
</ul>
<p>This keeps your system clean, introspectable, and aligned with the Continuum — where configuration is separated by <strong>dimension</strong>, not just by type.</p>
<h4 id="keep-providers-focused" tabindex="-1"><a class="header-anchor" href="#keep-providers-focused"><span>Keep Providers Focused</span></a></h4>
<p>Split your logic across <strong>multiple small providers</strong> instead of a giant one.</p>
<p>Bad:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Provider</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">KitchenSinkProvider</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string">'router'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string">'db'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">DB</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string">'mail'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Mailer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string">'featureX'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">X</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string">'featureY'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">Y</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Good:</p>
<ul>
<li><code v-pre>RouterProvider</code></li>
<li><code v-pre>DatabaseProvider</code></li>
<li><code v-pre>LoggerProvider</code></li>
<li><code v-pre>FeatureXProvider</code></li>
<li>...</li>
</ul>
<p>This improves reuse, testing, maintainability — and your sanity.</p>
<h4 id="use-register-to-declare-—-not-to-execute" tabindex="-1"><a class="header-anchor" href="#use-register-to-declare-—-not-to-execute"><span>Use <code v-pre>register()</code> to declare — not to execute</span></a></h4>
<p>Your <code v-pre>register()</code> method should <strong>only bind</strong> things, never resolve or execute them.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// ❌ Don't do this in register()</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'db'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ✅ Do this in boot()</span></span>
<span class="line"><span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'db'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Why? Because another provider might not have registered <code v-pre>db</code> yet.<br>
Let the system finish wiring everything before you flip the switch.</p>
<h4 id="prefer-class-based-for-complex-behavior" tabindex="-1"><a class="header-anchor" href="#prefer-class-based-for-complex-behavior"><span>Prefer class-based for complex behavior</span></a></h4>
<p>Need hooks? Need constructor injection? Want to use decorators?</p>
<p>Then <strong>class-based providers</strong> are your best friend.</p>
<p>Reserve factory-based providers for:</p>
<ul>
<li>Simple one-off modules</li>
<li>Third-party integration</li>
<li>If you are doing functional programming</li>
</ul>
<h4 id="alias-wisely" tabindex="-1"><a class="header-anchor" href="#alias-wisely"><span>Alias wisely</span></a></h4>
<p>If you bind a class with a long or verbose name, make it friendlier to use.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>container</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">singletonIf</span><span class="token punctuation">(</span>LongVerboseHttpClientName<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">LongVerboseHttpClientName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span>LongVerboseHttpClientName<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'httpClient'</span><span class="token punctuation">,</span> <span class="token string">'axiosClient'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Shorter aliases improve readability and reduce coupling to implementation names.</p>
<h4 id="use-lifecycle-hooks-for-diagnostics-or-extension" tabindex="-1"><a class="header-anchor" href="#use-lifecycle-hooks-for-diagnostics-or-extension"><span>Use lifecycle hooks for diagnostics or extension</span></a></h4>
<p>Hooks are not just for fun — they let you:</p>
<ul>
<li>Log startup/shutdown</li>
<li>Add diagnostics</li>
<li>Trigger async setup steps</li>
<li>Track errors</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Hook</span></span><span class="token punctuation">(</span><span class="token string">'onStart'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">startBanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'🔥 System is starting...'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="make-it-reusable" tabindex="-1"><a class="header-anchor" href="#make-it-reusable"><span>Make it reusable</span></a></h4>
<p>A good provider should be easy to extract into a library or share across apps.</p>
<ul>
<li>Avoid hardcoding environment-specific values</li>
<li>Use config injection (<code v-pre>blueprint.get(...)</code>)</li>
<li>Keep dependencies explicit and controlled</li>
</ul>
<p>Your future self — or the next developer — will thank you.</p>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>While service providers are powerful, they are not the default way to configure your app.
Use them when you need control over the <strong>initialization dimension</strong> — and prefer decorators and blueprint-based configuration for everything else.</p>
<p>Think of providers as your advanced toolkit — precise, low-level, and perfect for libraries or complex orchestration.
But for common scenarios, let the Continuum guide you: configure declaratively, and only dive deeper when you must.</p>
<p>Here’s what to remember:</p>
<ul>
<li>A service provider is a <strong>class</strong> or <strong>factory</strong> that implements <code v-pre>register()</code> and/or <code v-pre>boot()</code></li>
<li>It lives in the <strong>initialization dimension</strong> of the Continuum Architecture</li>
<li>It binds services to the <strong>container</strong> during <code v-pre>register()</code></li>
<li>It configures or activates services during <code v-pre>boot()</code></li>
<li>It can listen to <strong>system lifecycle hooks</strong> using decorators</li>
<li>It can be registered via the <strong>declarative API</strong> (<code v-pre>@Provider()</code>) or <strong>imperative API</strong> (<code v-pre>stone.providers</code>)</li>
</ul>
<p>By organizing your system into clean, focused, reusable providers, you unlock the full power of Stone.js’s modular and scalable architecture.</p>
<blockquote>
<p>You don’t “use” Stone.js —<br>
You <em>provide</em> it.</p>
</blockquote>
</div></template>


