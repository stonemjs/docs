<template><div><p>The Stone Router is a simple yet powerful routing library for both backend and frontend applications. It allows you to define routes, match incoming events, and manage middleware in a clean, context-aware, and efficient way.</p>
<p>By default, Stone.js applications are <strong>mono-routed</strong>, you typically only need a single event handler. But when your application requires <strong>multiple route definitions</strong>, dynamic segments, grouping, or advanced middleware logic, you can enable the full Router by installing the <code v-pre>@stone-js/router</code> package.</p>
<p>The router lives in the <strong>initialization dimension</strong> of the <a href="../architecture/continuum">Continuum Architecture</a>.
It’s globally available, fully integrated into the <a href="../architecture/container">service container</a>,
and seamlessly interoperates with all other parts of the system.</p>
<p>Once enabled, you’ll primarily work with <strong>route definitions</strong> (the blueprint), while the Router handles instantiation and resolution of actual <code v-pre>Route</code> objects behind the scenes. That means you can focus on the “what” of your application’s routes, not the “how”.</p>
<h2 id="install-and-activate" tabindex="-1"><a class="header-anchor" href="#install-and-activate"><span>Install and Activate</span></a></h2>
<p>To get started, install the router module:</p>
<CodeTabs id="18" :data='[{"id":"npm"},{"id":"yarn"},{"id":"pnpm"}]' :active="0" tab-id="package-manager">
<template #title0="{ value, isActive }">npm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">pnpm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @stone-js/router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> @stone-js/router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> @stone-js/router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>Stone.js does not enable the router by default. You must opt-in using either the declarative or imperative API.</p>
<Tabs id="32" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h3 id="declarative-activation" tabindex="-1"><a class="header-anchor" href="#declarative-activation"><span>Declarative Activation</span></a></h3>
<p>Use the <code v-pre>@Routing()</code> decorator alongside your main <code v-pre>@StoneApp()</code> application class:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Routing <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Routing</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is the preferred approach for class-based applications and ensures the router is registered early in the setup phase.</p>
</template>
<template #tab1="{ value, isActive }">
<h3 id="imperative-activation" tabindex="-1"><a class="header-anchor" href="#imperative-activation"><span>Imperative Activation</span></a></h3>
<p>You can also activate the router by imperatively registering the routing blueprint:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> routerBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>routerBlueprint<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is useful in functional or dynamically composed applications.</p>
</template>
</Tabs>
<h2 id="accessing-the-router" tabindex="-1"><a class="header-anchor" href="#accessing-the-router"><span>Accessing the Router</span></a></h2>
<p>Once activated, the <code v-pre>Router</code> instance is created internally and injected into the <strong>service container</strong>. You can retrieve it using the standard container API from anywhere in your application:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'router'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => Router</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Each time an incoming event is processed and a route is matched, the <strong>current <code v-pre>Route</code> instance</strong> is also injected into the container:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> currentRoute <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'route'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => Route</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>The <code v-pre>route</code> binding is only available after the router has matched a route for the current incoming event. If you try to access it too early (e.g., in the onInit hook), it may not be defined yet.</p>
</div>
<h2 id="context-aware-by-design" tabindex="-1"><a class="header-anchor" href="#context-aware-by-design"><span>Context-Aware by Design</span></a></h2>
<p>As with all components in Stone.js, the router is fully <strong>context-aware</strong>. It doesn’t care whether you're running in a Node server, on a serverless function, in a browser SPA, or in an SSR context. Define your routes declaratively or imperatively, and the router will do the rest.</p>
<p>You can also configure it globally, both at <strong>setup time</strong> (e.g. via decorators or blueprint config) and at <strong>runtime</strong> (e.g. dynamic route registration).</p>
<p>This makes the Stone Router ideal for:</p>
<ul>
<li>Cloud-native apps with dynamic route needs</li>
<li>Backend APIs with fine-grained control</li>
<li>Frontend SPAs and SSR apps with deep linking</li>
<li>Multitenant or subdomain-based routing</li>
<li>Any project where context determines behavior</li>
</ul>
</div></template>


