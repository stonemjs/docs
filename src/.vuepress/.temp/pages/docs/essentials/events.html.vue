<template><div><p>Events are a core building block in Stone.js, enabling modular and loosely coupled applications.<br>
However, it is important to understand that <strong>not all events are the same</strong>.</p>
<p>Stone.js distinguishes between two major categories:</p>
<ul>
<li>
<p><strong>Incoming Events</strong>:<br>
These events come from the external world — such as HTTP requests, WebSocket messages, or CLI commands.<br>
They represent <em>intentions</em> from outside the system and are handled using <strong>Event Handlers</strong>, not listeners or subscribers.<br>
To learn more about handling external events, refer to the <a href="./incoming-event"><code v-pre>IncomingEvent</code></a> and <a href="./event-handler"><code v-pre>Event Handlers</code></a> documentations.</p>
</li>
<li>
<p><strong>Internal Events</strong>:<br>
These events are triggered <em>inside</em> your Stone.js application.<br>
For example, when a route is matched, a <code v-pre>RouteEvent</code> is emitted internally. Internal events allow your modules to communicate, coordinate workflows, and react to changes without creating direct dependencies between them.</p>
</li>
</ul>
<p>This documentation focuses exclusively on <strong>Internal Events</strong>:<br>
their structure, their behavior, and how you can listen, subscribe, and dispatch them within your application.</p>
<p>All internal events inherit from the core <code v-pre>Event</code> class, which provides a unified and simple API to:</p>
<ul>
<li>Store and retrieve structured metadata.</li>
<li>Identify the event type.</li>
<li>Track the event source and timestamp.</li>
</ul>
<p>By relying on a common internal event model, Stone.js reinforces the <strong>continuum principle</strong>:<br>
<strong>different modules, one coherent way to react to change.</strong></p>
<p>In the next sections, you’ll learn how to define listeners, group subscriptions, and create your own custom events to build modular and powerful Stone.js applications.</p>
<h2 id="listeners" tabindex="-1"><a class="header-anchor" href="#listeners"><span>Listeners</span></a></h2>
<p>Listeners are the primary way to react to <strong>internal events</strong> in Stone.js. A listener waits for a specific event to occur and then executes its associated logic.</p>
<p>Listeners promote <strong>low coupling</strong> between parts of your system, the module that emits the event doesn't need to know who will react to it — it simply emits the event into the system.</p>
<p>Stone.js supports multiple ways to define listeners, giving you full flexibility depending on your needs.</p>
<h3 id="variants" tabindex="-1"><a class="header-anchor" href="#variants"><span>Variants</span></a></h3>
<p>You can define a listener using one of three shapes:</p>
<ul>
<li><strong>Class-based</strong> (recommended for declarative APIs and introspection)</li>
<li><strong>Function-based</strong> (ideal for quick scripts or nano apps)</li>
<li><strong>Factory-based</strong> (perfect when you need dependency injection via the container)</li>
</ul>
<p>Each variant gives you different tradeoffs between simplicity, structure, and flexibility.</p>
<Tabs id="85" :data='[{"id":"Class-based"},{"id":"Function-based"},{"id":"Factory-based"}]' :active="0" tab-id="class-factory-function">
<template #title0="{ value, isActive }">Class-based</template>
<template #title1="{ value, isActive }">Function-based</template>
<template #title2="{ value, isActive }">Factory-based</template>
<template #tab0="{ value, isActive }">
<h4 id="class-based-listener" tabindex="-1"><a class="header-anchor" href="#class-based-listener"><span>Class-based Listener</span></a></h4>
<p>Class-based listeners are the preferred way in Stone.js, especially when using the declarative API.<br>
They are introspectable by the system, easy to organize, and allow constructor-based dependency injection.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ILogger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> RouteEvent<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LogMatchedRouteEventListener</span> <span class="token keyword">implements</span> <span class="token class-name">IEventListener<span class="token operator">&lt;</span>RouteEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token keyword">readonly</span> logger<span class="token operator">:</span> ILogger</span>
<span class="line"></span>
<span class="line">  <span class="token function">construct</span><span class="token punctuation">(</span><span class="token punctuation">{</span> logger <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> logger<span class="token operator">:</span> ILogger <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>logger <span class="token operator">=</span> logger</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> RouteEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span>Route<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'route'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>uri<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>construct</code> is used to inject services from the container.</li>
<li><code v-pre>handle</code> is automatically called when the event is dispatched.</li>
</ul>
</template>
<template #tab1="{ value, isActive }">
<h4 id="function-based-listener" tabindex="-1"><a class="header-anchor" href="#function-based-listener"><span>Function-based Listener</span></a></h4>
<p>Function-based listeners are simple functions.<br>
They are a great choice when you want a lightweight listener without dependency injection.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">eventListener</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> RouteEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span>Route<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'route'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>uri<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Functions are straightforward but have no automatic dependency injection.</li>
<li>Use them for lightweight or one-off listeners.</li>
</ul>
</template>
<template #tab2="{ value, isActive }">
<h4 id="factory-based-listener" tabindex="-1"><a class="header-anchor" href="#factory-based-listener"><span>Factory-based Listener</span></a></h4>
<p>Factory-based listeners are functions that <strong>return</strong> the actual event handler.<br>
This pattern allows you to inject dependencies manually, while keeping flexibility.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">eventListener</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> logger <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> logger<span class="token operator">:</span> ILogger <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> RouteEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span>Route<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'route'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>uri<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>The first function receives injected services.</li>
<li>It returns the real event handler that will be called when the event occurs.</li>
<li>Factory-based listeners are especially powerful when you need dynamic setup per listener instance.</li>
</ul>
</template>
</Tabs>
<h3 id="register" tabindex="-1"><a class="header-anchor" href="#register"><span>Register</span></a></h3>
<p>Once your listener is defined, you must <strong>register</strong> it so that Stone.js knows it should react to a specific event.</p>
<p>Stone.js offers two ways to register listeners:</p>
<ul>
<li><strong>Declarative API</strong> — using decorators (recommended for class-based modules)</li>
<li><strong>Imperative API</strong> — using blueprint utilities for manual control</li>
</ul>
<p>No matter which variant you choose (class, function, or factory), the registration process ensures your listeners are properly integrated at runtime.</p>
<Tabs id="179" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h4 id="declarative-registration" tabindex="-1"><a class="header-anchor" href="#declarative-registration"><span>Declarative Registration</span></a></h4>
<p>When using a class-based listener, you can register it declaratively using the <code v-pre>@Listener</code> decorator.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Listener <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> RouteEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Listener</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  event<span class="token operator">:</span> RouteEvent<span class="token punctuation">.</span><span class="token constant">ROUTE_MATCHED</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LogMatchedRouteEventListener</span> <span class="token keyword">implements</span> <span class="token class-name">IEventListener<span class="token operator">&lt;</span>RouteEvent<span class="token operator">></span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>@Listener</code> associates your class with a specific event type.</li>
<li>The listener will be automatically discovered and activated by the system during initialization.</li>
</ul>
<p>This is the cleanest and most continuum-aligned way to register listeners.</p>
</template>
<template #tab1="{ value, isActive }">
<h4 id="imperative-registration" tabindex="-1"><a class="header-anchor" href="#imperative-registration"><span>Imperative Registration</span></a></h4>
<p>For more manual or dynamic control, you can register listeners imperatively using <code v-pre>defineBlueprintConfig</code> and <code v-pre>defineEventListener</code>.</p>
<h5 id="function-based-example" tabindex="-1"><a class="header-anchor" href="#function-based-example"><span>Function-based example</span></a></h5>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> AppBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token function">defineEventListener</span><span class="token punctuation">(</span></span>
<span class="line">    LogMatchedRouteEventListener<span class="token punctuation">,</span></span>
<span class="line">    RouteEvent<span class="token punctuation">.</span><span class="token constant">ROUTE_MATCHED</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>This method works for class-based or function-based listeners.</li>
<li>You specify the listener and the event type manually.</li>
</ul>
<h5 id="factory-based-example" tabindex="-1"><a class="header-anchor" href="#factory-based-example"><span>Factory-based example</span></a></h5>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> AppBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token function">defineEventListener</span><span class="token punctuation">(</span></span>
<span class="line">    LogMatchedRouteEventListener<span class="token punctuation">,</span></span>
<span class="line">    RouteEvent<span class="token punctuation">.</span><span class="token constant">ROUTE_MATCHED</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>By passing <code v-pre>true</code> as the third parameter, you tell Stone.js to treat the listener as a factory.</li>
<li>This enables manual dependency injection at runtime.</li>
</ul>
</template>
</Tabs>
<h2 id="subscribers" tabindex="-1"><a class="header-anchor" href="#subscribers"><span>Subscribers</span></a></h2>
<p>While listeners handle a <strong>single event</strong>, subscribers allow you to <strong>subscribe to multiple events</strong> within the same module.</p>
<p>A subscriber receives the <code v-pre>EventEmitter</code> instance and can programmatically attach multiple event handlers inside a single <code v-pre>subscribe</code> method.<br>
This pattern is especially useful when you need to manage several related events together.</p>
<p>Like listeners, subscribers in Stone.js can be defined in three variants.</p>
<h3 id="variants-1" tabindex="-1"><a class="header-anchor" href="#variants-1"><span>Variants</span></a></h3>
<p>You can define a subscriber using one of three shapes:</p>
<ul>
<li><strong>Class-based</strong> (recommended for declarative APIs and introspection)</li>
<li><strong>Function-based</strong> (ideal for quick scripts or nano apps)</li>
<li><strong>Factory-based</strong> (perfect when you need dependency injection via the container)</li>
</ul>
<Tabs id="280" :data='[{"id":"Class-based"},{"id":"Function-based"},{"id":"Factory-based"}]' :active="0" tab-id="class-factory-function">
<template #title0="{ value, isActive }">Class-based</template>
<template #title1="{ value, isActive }">Function-based</template>
<template #title2="{ value, isActive }">Factory-based</template>
<template #tab0="{ value, isActive }">
<h4 id="class-based-subscriber" tabindex="-1"><a class="header-anchor" href="#class-based-subscriber"><span>Class-based Subscriber</span></a></h4>
<p>Class-based subscribers are ideal for maintaining structure and leveraging dependency injection.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> RouteEvent<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IEventSubscriber<span class="token punctuation">,</span> ILogger<span class="token punctuation">,</span> EventEmitter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">RouteEventSubscriber</span> <span class="token keyword">implements</span> <span class="token class-name">IEventSubscriber</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token keyword">readonly</span> logger<span class="token operator">:</span> ILogger</span>
<span class="line"></span>
<span class="line">  <span class="token function">construct</span><span class="token punctuation">(</span><span class="token punctuation">{</span> logger <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> logger<span class="token operator">:</span> ILogger <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>logger <span class="token operator">=</span> logger</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">subscribe</span><span class="token punctuation">(</span>eventEmitter<span class="token operator">:</span> EventEmitter<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    eventEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>RouteEvent<span class="token punctuation">.</span><span class="token constant">ROUTE_MATCHED</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> RouteEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span>Route<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'route'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>uri<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>construct</code> injects dependencies.</li>
<li><code v-pre>subscribe</code> is called automatically, passing the <code v-pre>EventEmitter</code>.</li>
</ul>
</template>
<template #tab1="{ value, isActive }">
<h4 id="function-based-subscriber" tabindex="-1"><a class="header-anchor" href="#function-based-subscriber"><span>Function-based Subscriber</span></a></h4>
<p>Function-based subscribers are simple functions that receive the <code v-pre>EventEmitter</code> directly.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">subscribe</span> <span class="token operator">=</span> <span class="token punctuation">(</span>eventEmitter<span class="token operator">:</span> EventEmitter<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  eventEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>RouteEvent<span class="token punctuation">.</span><span class="token constant">ROUTE_MATCHED</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> RouteEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span>Route<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'route'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>uri<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Lightweight and quick to implement.</li>
<li>No dependency injection — perfect for small tasks or nano apps.</li>
</ul>
</template>
<template #tab2="{ value, isActive }">
<h4 id="factory-based-subscriber" tabindex="-1"><a class="header-anchor" href="#factory-based-subscriber"><span>Factory-based Subscriber</span></a></h4>
<p>Factory-based subscribers allow you to inject services before subscribing.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">subscribe</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> logger <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> logger<span class="token operator">:</span> ILogger <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>eventEmitter<span class="token operator">:</span> EventEmitter<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  eventEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>RouteEvent<span class="token punctuation">.</span><span class="token constant">ROUTE_MATCHED</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> RouteEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span>Route<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'route'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>uri<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>First function receives services.</li>
<li>Second function receives the <code v-pre>EventEmitter</code>.</li>
<li>Very powerful when you need full control over dependencies.</li>
</ul>
</template>
</Tabs>
<h3 id="register-1" tabindex="-1"><a class="header-anchor" href="#register-1"><span>Register</span></a></h3>
<p>After defining your subscriber, you need to <strong>register</strong> it so that Stone.js can activate it during the initialization process.</p>
<p>Stone.js provides two ways to register subscribers:</p>
<ul>
<li><strong>Declarative API</strong> — using decorators (recommended for class-based modules)</li>
<li><strong>Imperative API</strong> — using blueprint utilities for manual control</li>
</ul>
<p>Subscribers behave similarly to listeners during registration but are attached to the system at the subscription level rather than the individual event level.</p>
<Tabs id="374" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h4 id="declarative-registration-1" tabindex="-1"><a class="header-anchor" href="#declarative-registration-1"><span>Declarative Registration</span></a></h4>
<p>When using a class-based subscriber, you can register it declaratively using the <code v-pre>@Subscriber</code> decorator.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Subscriber<span class="token punctuation">,</span> IEventSubscriber <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Subscriber</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">RouteEventSubscriber</span> <span class="token keyword">implements</span> <span class="token class-name">IEventSubscriber</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>@Subscriber()</code> marks the class as an event subscriber.</li>
<li>The system will automatically instantiate it, inject its dependencies, and call its <code v-pre>subscribe</code> method with the <code v-pre>EventEmitter</code>.</li>
</ul>
</template>
<template #tab1="{ value, isActive }">
<h4 id="imperative-registration-1" tabindex="-1"><a class="header-anchor" href="#imperative-registration-1"><span>Imperative Registration</span></a></h4>
<p>If you prefer or need manual control, you can register subscribers imperatively using <code v-pre>defineBlueprintConfig</code> and <code v-pre>defineEventSubscriber</code>.</p>
<h5 id="function-based-example-1" tabindex="-1"><a class="header-anchor" href="#function-based-example-1"><span>Function-based example</span></a></h5>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> AppBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token function">defineEventSubscriber</span><span class="token punctuation">(</span>RouteEventSubscriber<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Suitable for both class-based and function-based subscribers.</li>
<li>Gives you full control over registration.</li>
</ul>
<h5 id="factory-based-example-1" tabindex="-1"><a class="header-anchor" href="#factory-based-example-1"><span>Factory-based example</span></a></h5>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> AppBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token function">defineEventSubscriber</span><span class="token punctuation">(</span>RouteEventSubscriber<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Passing <code v-pre>true</code> tells Stone.js to treat the subscriber as a factory.</li>
<li>Allows manual dependency injection for subscriber setup.</li>
</ul>
</template>
</Tabs>
<h2 id="custom-events" tabindex="-1"><a class="header-anchor" href="#custom-events"><span>Custom Events</span></a></h2>
<p>Stone.js doesn't limit you to built-in events.
You can define your own <strong>custom events</strong> to propagate domain-specific changes inside your application, fully aligned with the internal event system.</p>
<p>Creating custom events allows your modules to communicate through clear, typed messages, without creating tight coupling between them.</p>
<h3 id="event-object" tabindex="-1"><a class="header-anchor" href="#event-object"><span>Event Object</span></a></h3>
<p>To define a custom event, you simply extend the core <code v-pre>Event</code> class provided by Stone.js.</p>
<p>Here’s a typical custom event:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Event <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyCustomEvent</span> <span class="token keyword">extends</span> <span class="token class-name">Event</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * MyCustomEvent name.</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@event</span> MyCustomEvent#MY_CUSTOM_EVENT</span>
<span class="line">   * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
<span class="line">   */</span></span>
<span class="line">  <span class="token keyword">static</span> <span class="token keyword">get</span> <span class="token constant">MY_CUSTOM_EVENT</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">'MY_CUSTOM_EVENT'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Create a MyCustomEvent.</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@param</span> <span class="token parameter">metadata</span> - Event metadata.</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span>metadata<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> MyCustomEvent<span class="token punctuation">.</span><span class="token constant">MY_CUSTOM_EVENT</span><span class="token punctuation">,</span> metadata <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Key points:</p>
<ul>
<li>You define a <strong>static getter</strong> (e.g., <code v-pre>MY_CUSTOM_EVENT</code>) to return the event type.</li>
<li>The event type must be a <strong>static constant</strong> to ensure compatibility with bundlers and minifiers, especially on the frontend.</li>
<li>You pass your event data into the event's <strong>metadata</strong> object when constructing it.</li>
</ul>
<h4 id="why-use-a-static-getter-for-the-event-type" tabindex="-1"><a class="header-anchor" href="#why-use-a-static-getter-for-the-event-type"><span>Why use a static getter for the event type?</span></a></h4>
<p>In frontend builds (or aggressive bundling scenarios), class names can be mangled or renamed.<br>
Using a static string getter ensures that your event names remain <strong>stable</strong>, <strong>predictable</strong>, and <strong>safe</strong> — even after minification.</p>
<h3 id="listener" tabindex="-1"><a class="header-anchor" href="#listener"><span>Listener</span></a></h3>
<p>Listening to custom events works exactly the same way as for built-in internal events.<br>
You simply define a listener and associate it with your custom event type.</p>
<p>Here’s a class-based listener example for <code v-pre>MyCustomEvent</code>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> MyCustomEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./events/MyCustomEvent'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Listener<span class="token punctuation">,</span> IEventListener <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Listener</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  event<span class="token operator">:</span> MyCustomEvent<span class="token punctuation">.</span><span class="token constant">MY_CUSTOM_EVENT</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LogMyCustomEventListener</span> <span class="token keyword">implements</span> <span class="token class-name">IEventListener<span class="token operator">&lt;</span>MyCustomEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> MyCustomEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>metadata<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>The <code v-pre>@Listener</code> decorator binds this class to the <code v-pre>MY_CUSTOM_EVENT</code> event type.</li>
<li>When <code v-pre>MyCustomEvent</code> is emitted, the <code v-pre>handle</code> method will be called automatically.</li>
<li>You can access the event data through the <code v-pre>metadata</code> object or use the <code v-pre>get()</code> method for deep path access.</li>
</ul>
<p>For example, if your metadata is structured:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  user<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    id<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">'Alice'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can safely retrieve nested data like this:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> userId <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'user.id'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This approach ensures that even complex event payloads stay easy to navigate and type-safe.</p>
<h3 id="dispatcher" tabindex="-1"><a class="header-anchor" href="#dispatcher"><span>Dispatcher</span></a></h3>
<p>Once your custom event is defined, you need to <strong>dispatch</strong> it inside your application when the appropriate action occurs.</p>
<p>In Stone.js, event dispatching is done via the <code v-pre>EventEmitter</code>, which is available for dependency injection through the service container
under the <code v-pre>events</code> and <code v-pre>eventEmitter</code> aliases.</p>
<p>Here’s how you dispatch a custom event:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Service <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> MyCustomEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./events/MyCustomEvent'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Service</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token keyword">readonly</span> events<span class="token operator">:</span> EventEmitter</span>
<span class="line"></span>
<span class="line">  <span class="token function">construct</span><span class="token punctuation">(</span><span class="token punctuation">{</span> events <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> events<span class="token operator">:</span> EventEmitter <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>events <span class="token operator">=</span> events</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">saveUser</span><span class="token punctuation">(</span>user<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyCustomEvent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Key points:</p>
<ul>
<li>Inject the <code v-pre>EventEmitter</code> with the <code v-pre>events</code> alias, using the <code v-pre>construct</code> method.</li>
<li>Create an instance of your custom event, passing in the metadata (your data payload).</li>
<li>Emit the event using the <code v-pre>emit()</code> method.</li>
<li>Your data is wrapped, so you can access it through the <code v-pre>event.get('user')</code> method in the listener.</li>
</ul>
<h4 id="why-dispatch-custom-events" tabindex="-1"><a class="header-anchor" href="#why-dispatch-custom-events"><span>Why dispatch custom events?</span></a></h4>
<p>Dispatching custom events allows your system to stay modular:</p>
<ul>
<li>The module emitting the event doesn't need to know who will handle it.</li>
<li>Other parts of the application can subscribe and react without direct dependencies.</li>
<li>You make your application easier to extend, test, and maintain.</li>
</ul>
<h4 id="always-wrap-your-event-data" tabindex="-1"><a class="header-anchor" href="#always-wrap-your-event-data"><span>Always Wrap Your Event Data</span></a></h4>
<p>When creating a custom event, <strong>always wrap your payload inside a key</strong>.</p>
<p>Since the <code v-pre>metadata</code> property must always be an object, it is important to define a structured key when passing your event data.<br>
For example, instead of passing the object directly:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">new</span> <span class="token class-name">MyCustomEvent</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>You should wrap it like this:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">new</span> <span class="token class-name">MyCustomEvent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This practice offers several advantages:</p>
<ul>
<li>
<p>You can easily retrieve the user with:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>You avoid ambiguity if you later expand the event payload.</p>
</li>
<li>
<p>You maintain a consistent event structure across your application.</p>
</li>
</ul>
<p>Also, remember:</p>
<ul>
<li>
<p>You <strong>cannot inject primitive values</strong> (like a string, number, or boolean) directly into the event metadata.<br>
You must always wrap them:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">new</span> <span class="token class-name">MyCustomEvent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Stone'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<p>Following this wrapping convention guarantees a predictable, safe, and continuum-aligned event model.</p>
<p>Stone.js strongly recommends <strong>always wrapping your event data inside a named object key</strong> at the creation phase.</p>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>When working with internal events in Stone.js, following a few simple best practices will help you keep your system clean, modular, and future-proof.</p>
<h4 id="listeners-1" tabindex="-1"><a class="header-anchor" href="#listeners-1"><span>Listeners</span></a></h4>
<ul>
<li>
<p><strong>Use factory-based listeners</strong> only when you need dynamic dependencies injected at runtime.</p>
</li>
<li>
<p><strong>Keep listener methods small and focused</strong>.<br>
Each listener should handle only one clear responsibility per event.</p>
</li>
<li>
<p><strong>Avoid side effects</strong> inside listeners.<br>
If needed, emit new events rather than chaining direct method calls between modules.</p>
</li>
<li>
<p><strong>Return early when necessary</strong>.<br>
If a listener must ignore certain events based on conditions, check quickly and exit.</p>
</li>
</ul>
<h4 id="subscribers-1" tabindex="-1"><a class="header-anchor" href="#subscribers-1"><span>Subscribers</span></a></h4>
<ul>
<li>
<p><strong>Use subscribers when handling multiple related events</strong> together.<br>
It keeps your blueprint clean and groups logic by business concern.</p>
</li>
<li>
<p><strong>Keep subscription setup simple and readable</strong>.<br>
Prefer chaining a few related <code v-pre>on</code> calls rather than mixing unrelated events in the same subscriber.</p>
</li>
<li>
<p><strong>Inject dependencies cleanly</strong>.<br>
Always prefer injecting services via <code v-pre>construct</code>, even in subscribers, instead of fetching manually inside the <code v-pre>subscribe</code> method.</p>
</li>
</ul>
<h4 id="custom-events-1" tabindex="-1"><a class="header-anchor" href="#custom-events-1"><span>Custom Events</span></a></h4>
<ul>
<li>
<p><strong>Always define your event type as a static getter</strong>.<br>
Never rely on class names directly — use constants to guarantee stability after bundling and minification.</p>
</li>
<li>
<p><strong>Design metadata explicitly</strong>.<br>
Keep your event payloads small, predictable, and documented.</p>
</li>
<li>
<p><strong>Use the <code v-pre>get()</code> method</strong> for safe, deep retrieval of nested metadata properties.</p>
</li>
<li>
<p><strong>Always wrap your event data with a key</strong> when creating custom events.<br>
Never pass raw objects or primitives directly; always use a structured key, like <code v-pre>new MyCustomEvent({ user })</code>.<br>
This keeps your metadata consistent, predictable, and easy to access via <code v-pre>event.get()</code>.</p>
</li>
<li>
<p><strong>Clone events if necessary</strong>.<br>
If a module needs to modify an event without affecting the original, use the <code v-pre>clone()</code> method.</p>
</li>
<li>
<p><strong>Dispatch events instead of tight coupling</strong>.<br>
Instead of calling other modules directly, emit events to express changes and let other parts of your system react appropriately.</p>
</li>
</ul>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>In Stone.js, internal events are the backbone of modular, decoupled application design.<br>
They allow different parts of your system to <strong>react to changes</strong> without creating tight dependencies.</p>
<ul>
<li><strong>Listeners</strong> are used to handle a single event at a time.</li>
<li><strong>Subscribers</strong> allow you to organize multiple related event reactions inside one module.</li>
<li><strong>Custom Events</strong> enable you to define your own domain-specific events and propagate structured data across your system.</li>
</ul>
<p>Listeners and subscribers can be defined using classes, functions, or factories — giving you full flexibility depending on your application's size and needs.<br>
Class-based (declarative) patterns are preferred for introspection, clarity, and maintainability.</p>
<p>Every internal event is an instance of the <code v-pre>Event</code> class, ensuring a consistent API for accessing metadata, event type, and origin.</p>
<p>By following Stone.js’s event system best practices, you can create applications that are highly modular, adaptable, and aligned with the <strong>Continuum Architecture</strong> philosophy:<br>
<strong>same principles, everywhere, all the time.</strong></p>
</div></template>


