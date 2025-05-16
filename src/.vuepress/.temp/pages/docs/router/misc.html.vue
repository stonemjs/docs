<template><div><p>This page gathers all the essential router features that don’t belong to a single category, but are still crucial to real-world applications. These include advanced configuration, event hooks, route generation, redirection, navigation, middleware usage, and even runtime inspection of your routing system.</p>
<p>Whether you're debugging, navigating, or dynamically configuring your router, this section is your toolbox.</p>
<h2 id="middleware" tabindex="-1"><a class="header-anchor" href="#middleware"><span>Middleware</span></a></h2>
<p>Middleware are a powerful way to run logic before your route handlers are executed. In Stone.js, middleware can be attached globally (via blueprint) or locally per route.</p>
<p>Router middleware are identical to <strong>initialization middleware</strong>,
meaning they’re executed in the <strong>initialization dimension</strong> of the incoming event lifecycle.</p>
<p>They’re applied at the <strong>route level</strong> using either:</p>
<ul>
<li>a <strong>declarative alias</strong>, if defined with <code v-pre>@Middleware({ alias: 'alias' })</code></li>
<li>or an <strong>imperative function</strong>, passed with <code v-pre>defineMiddleware()</code></li>
</ul>
<p>Once defined, they must be explicitly attached to the route definition using the <code v-pre>middleware</code> property.</p>
<Tabs id="33" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h3 id="declarative-middleware-example" tabindex="-1"><a class="header-anchor" href="#declarative-middleware-example"><span>Declarative Middleware Example</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Middleware<span class="token punctuation">,</span> IMiddleware<span class="token punctuation">,</span> NextMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent<span class="token punctuation">,</span> UnauthorizedError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Middleware</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> alias<span class="token operator">:</span> <span class="token string">'auth'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AuthMiddleware</span> <span class="token keyword">implements</span> <span class="token class-name">IMiddleware<span class="token operator">&lt;</span>IncomingHttpEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">,</span> next<span class="token operator">:</span> NextMiddleware<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>event<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>authorization<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnauthorizedError</span><span class="token punctuation">(</span><span class="token string">'Unauthorized'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then apply it to a route using its alias:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">'/secure'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> middleware<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'auth'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getSecureData</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'Authorized content'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<h3 id="imperative-middleware-example" tabindex="-1"><a class="header-anchor" href="#imperative-middleware-example"><span>Imperative Middleware Example</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineMiddleware<span class="token punctuation">,</span> defineRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">logRequest</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Request received:'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token function">defineRoute</span><span class="token punctuation">(</span><span class="token string">'/log'</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    middleware<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">defineMiddleware</span><span class="token punctuation">(</span>logRequest<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h3 id="exclude-middleware" tabindex="-1"><a class="header-anchor" href="#exclude-middleware"><span>Exclude Middleware</span></a></h3>
<p>You can opt-out from middleware execution, either globally or per route, using the <code v-pre>excludeMiddleware</code> property:</p>
<CodeTabs id="57" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">'/public'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> excludeMiddleware<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'auth'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token function">defineRoute</span><span class="token punctuation">(</span><span class="token string">'/public'</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  excludeMiddleware<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">defineMiddleware</span><span class="token punctuation">(</span>authMiddleware<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>This is useful when some routes, like health checks or public endpoints, should bypass default behavior.</p>
<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2>
<p>Stone Router is not just reactive, it’s also <strong>eventful</strong>.
It emits specific lifecycle events during the routing process, giving you a chance to hook into the system at runtime.</p>
<p>This is especially useful for logging, analytics, dynamic behavior injection, or debugging route resolution.</p>
<h3 id="available-router-events" tabindex="-1"><a class="header-anchor" href="#available-router-events"><span>Available Router Events</span></a></h3>
<table>
<thead>
<tr>
<th>Event</th>
<th>When it triggers</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>RouteEvent.ROUTING</code></td>
<td>Right before a route is resolved</td>
</tr>
<tr>
<td><code v-pre>RouteEvent.ROUTED</code></td>
<td>Immediately after a route has been resolved</td>
</tr>
</tbody>
</table>
<p>These events carry the route object and the incoming event inside their metadata.</p>
<h3 id="listening-to-router-events-declarative-listener" tabindex="-1"><a class="header-anchor" href="#listening-to-router-events-declarative-listener"><span>Listening to Router Events (Declarative Listener)</span></a></h3>
<p>You can create an event listener class and attach it to router events using the <code v-pre>@Listener()</code> decorator:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> RouteEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Listener<span class="token punctuation">,</span> IEventListener <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Listener</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> event<span class="token operator">:</span> RouteEvent<span class="token punctuation">.</span><span class="token constant">ROUTING</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LogRouting</span> <span class="token keyword">implements</span> <span class="token class-name">IEventListener<span class="token operator">&lt;</span>RouteEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> RouteEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> route <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'route'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Routing to:'</span><span class="token punctuation">,</span> route<span class="token operator">?.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="listening-to-router-events-runtime" tabindex="-1"><a class="header-anchor" href="#listening-to-router-events-runtime"><span>Listening to Router Events (Runtime)</span></a></h3>
<p>You can also subscribe to router events imperatively via the <code v-pre>router.on()</code> method:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>RouteEvent<span class="token punctuation">.</span><span class="token constant">ROUTED</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> RouteEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> route <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'route'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Finished routing to:'</span><span class="token punctuation">,</span> route<span class="token operator">?.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This allows full flexibility for dynamic behavior injection, especially useful in multi-tenant or dynamic environments.</p>
<h2 id="generate-urls" tabindex="-1"><a class="header-anchor" href="#generate-urls"><span>Generate URLs</span></a></h2>
<p>Sometimes, you need to generate URLs dynamically from your route definitions, whether to build links, redirects, or navigation instructions.
Stone Router provides a straightforward method for this: <code v-pre>router.generate()</code>.</p>
<p>This method only works with <strong>named routes</strong>, so make sure to define the <code v-pre>name</code> property in your route definitions.</p>
<h3 id="generate-method" tabindex="-1"><a class="header-anchor" href="#generate-method"><span><code v-pre>generate()</code> Method</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> url <span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'user.show'</span><span class="token punctuation">,</span></span>
<span class="line">  params<span class="token operator">:</span> <span class="token punctuation">{</span> user<span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="result" tabindex="-1"><a class="header-anchor" href="#result"><span>Result:</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">/users/42</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>You can also include hash fragments, query strings, and override protocols or domains.</p>
<h3 id="generateoptions-interface" tabindex="-1"><a class="header-anchor" href="#generateoptions-interface"><span><code v-pre>GenerateOptions</code> Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">GenerateOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  hash<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  protocol<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  withDomain<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  query<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span></span>
<span class="line">  params<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-with-all-options" tabindex="-1"><a class="header-anchor" href="#example-with-all-options"><span>Example with all options:</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> url <span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'user.profile'</span><span class="token punctuation">,</span></span>
<span class="line">  params<span class="token operator">:</span> <span class="token punctuation">{</span> user<span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  query<span class="token operator">:</span> <span class="token punctuation">{</span> lang<span class="token operator">:</span> <span class="token string">'en'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  hash<span class="token operator">:</span> <span class="token string">'settings'</span><span class="token punctuation">,</span></span>
<span class="line">  protocol<span class="token operator">:</span> <span class="token string">'https'</span><span class="token punctuation">,</span></span>
<span class="line">  withDomain<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="result-assuming-your-route-is-user-profile-→-users-user" tabindex="-1"><a class="header-anchor" href="#result-assuming-your-route-is-user-profile-→-users-user"><span>Result (assuming your route is <code v-pre>user.profile</code> → <code v-pre>/users/:user</code>):</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">https://localhost/users/42?lang=en#settings</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This is especially handy in frontend apps, server-side redirects, or when building hypermedia APIs.</p>
<h2 id="navigation" tabindex="-1"><a class="header-anchor" href="#navigation"><span>Navigation</span></a></h2>
<p>When building frontend applications, you may need to navigate between routes programmatically.
Stone Router provides a <code v-pre>navigate()</code> method for this purpose.</p>
<p>This method only works in environments that support navigation, such as browsers or SPAs.</p>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>It’s important to note that <code v-pre>navigate()</code> is not available in backend environments, as they don’t have a navigation context.</p>
</div>
<h3 id="navigate-method" tabindex="-1"><a class="header-anchor" href="#navigate-method"><span><code v-pre>navigate()</code> Method</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">'/users/42'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This simple call returns the resolved route URL or navigates in supported environments (e.g., browser or SPA).</p>
<p>If you’re using <strong>named routes</strong>, you can navigate using <code v-pre>NavigateOptions</code>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'user.show'</span><span class="token punctuation">,</span></span>
<span class="line">  params<span class="token operator">:</span> <span class="token punctuation">{</span> userId<span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  query<span class="token operator">:</span> <span class="token punctuation">{</span> tab<span class="token operator">:</span> <span class="token string">'profile'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="navigateoptions-interface" tabindex="-1"><a class="header-anchor" href="#navigateoptions-interface"><span><code v-pre>NavigateOptions</code> Interface</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">NavigateOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  hash<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  query<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span></span>
<span class="line">  params<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also pass a second argument <code v-pre>replace: boolean</code> to indicate whether the navigation should replace the current entry in the browser history stack:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'user.edit'</span><span class="token punctuation">,</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> userId<span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="redirection" tabindex="-1"><a class="header-anchor" href="#redirection"><span>Redirection</span></a></h2>
<p>Sometimes, a route doesn’t need to serve an event handler, it just needs to <strong>point somewhere else</strong>.
Whether you’re restructuring your app or managing legacy URLs, Stone Router makes redirection easy with the <code v-pre>redirect</code> option.</p>
<h3 id="static-redirection" tabindex="-1"><a class="header-anchor" href="#static-redirection"><span>Static Redirection</span></a></h3>
<p>To redirect one route to another, simply add the <code v-pre>redirect</code> option in your route definition:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">    method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">    handler<span class="token operator">:</span> showUsersHandler<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">'/people'</span><span class="token punctuation">,</span></span>
<span class="line">    redirect<span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This setup will automatically redirect any request to <code v-pre>/people</code> toward <code v-pre>/users</code>.</p>
<p>By default, the router performs a <strong>temporary</strong> redirect with <strong>HTTP status 302</strong>.</p>
<h3 id="changing-redirect-status-code" tabindex="-1"><a class="header-anchor" href="#changing-redirect-status-code"><span>Changing Redirect Status Code</span></a></h3>
<p>If you want a <strong>permanent redirect</strong> (e.g., status 301), you can pass an object instead:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/people'</span><span class="token punctuation">,</span></span>
<span class="line">  redirect<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token number">301</span><span class="token operator">:</span> <span class="token string">'/users'</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dynamic-redirection" tabindex="-1"><a class="header-anchor" href="#dynamic-redirection"><span>Dynamic Redirection</span></a></h3>
<p>For more advanced use cases, you can use a function to determine the redirect dynamically at runtime:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/people'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">redirect</span><span class="token operator">:</span> <span class="token punctuation">(</span>route<span class="token punctuation">,</span> event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> isLegacy <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> isLegacy <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token number">301</span><span class="token operator">:</span> <span class="token string">'/users'</span> <span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Your function can return either a string or a <code v-pre>{ statusCode: path }</code> object.
This allows total flexibility, for instance, redirecting based on time, headers, or custom logic.</p>
<p>Redirection works consistently across platforms, and like everything in Stone.js, it’s context-aware.</p>
<h2 id="inspections" tabindex="-1"><a class="header-anchor" href="#inspections"><span>Inspections</span></a></h2>
<p>Stone Router provides a clean API to introspect and analyze the routing layer of your application at runtime.
This can be useful for debugging, monitoring, dynamic navigation, or even building custom tooling.</p>
<h3 id="get-all-routes" tabindex="-1"><a class="header-anchor" href="#get-all-routes"><span>Get All Routes</span></a></h3>
<p>To retrieve all defined routes:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">getRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => Array&lt;Route></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Each item is a <code v-pre>Route</code> instance, offering full introspection capabilities.</p>
<h3 id="check-route-existence" tabindex="-1"><a class="header-anchor" href="#check-route-existence"><span>Check Route Existence</span></a></h3>
<p>To check if a named route exists:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">hasRoute</span><span class="token punctuation">(</span><span class="token string">'user.show'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => true or false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>You can also check for multiple names:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">hasRoute</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'user.index'</span><span class="token punctuation">,</span> <span class="token string">'user.create'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="get-current-route" tabindex="-1"><a class="header-anchor" href="#get-current-route"><span>Get Current Route</span></a></h3>
<p>You can retrieve the <strong>current route</strong> at any point during incoming event handling:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> currentRoute <span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">getCurrentRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => Route</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Or just get its name:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">getCurrentRouteName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => 'user.show'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Need to verify the current route name?</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">isCurrentRouteNamed</span><span class="token punctuation">(</span><span class="token string">'user.show'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => true or false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="dump-routes" tabindex="-1"><a class="header-anchor" href="#dump-routes"><span>Dump Routes</span></a></h3>
<p>To export route definitions in a JSON-friendly format (e.g. for debugging or admin UI):</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">await</span> router<span class="token punctuation">.</span><span class="token function">dumpRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => Array&lt;Record&lt;string, unknown>></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This gives you a structured list of all route definitions, including names, paths, methods, and options.</p>
<h3 id="inspect-a-route-instance" tabindex="-1"><a class="header-anchor" href="#inspect-a-route-instance"><span>Inspect a Route Instance</span></a></h3>
<p>Each <code v-pre>Route</code> instance exposes useful properties:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">route<span class="token punctuation">.</span>uri<span class="token punctuation">;</span>           <span class="token comment">// Full URL, e.g., 'http://localhost:3000/users/42'</span></span>
<span class="line">route<span class="token punctuation">.</span>path<span class="token punctuation">;</span>          <span class="token comment">// Path only, e.g., '/users/42'</span></span>
<span class="line">route<span class="token punctuation">.</span>query<span class="token punctuation">;</span>         <span class="token comment">// Parsed query string object</span></span>
<span class="line">route<span class="token punctuation">.</span>hash<span class="token punctuation">;</span>          <span class="token comment">// Hash fragment (e.g., '#tab')</span></span>
<span class="line">route<span class="token punctuation">.</span>method<span class="token punctuation">;</span>        <span class="token comment">// HTTP method, e.g., 'GET'</span></span>
<span class="line">route<span class="token punctuation">.</span>protocol<span class="token punctuation">;</span>      <span class="token comment">// Protocol used, e.g., 'http'</span></span>
<span class="line">route<span class="token punctuation">.</span>domain<span class="token punctuation">;</span>        <span class="token comment">// Domain, if defined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Check route characteristics:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">route<span class="token punctuation">.</span><span class="token function">hasDomain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// => true or false</span></span>
<span class="line">route<span class="token punctuation">.</span><span class="token function">isSecure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// => true if HTTPS</span></span>
<span class="line">route<span class="token punctuation">.</span><span class="token function">isHttpOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// => true if protocol is 'http'</span></span>
<span class="line">route<span class="token punctuation">.</span><span class="token function">isFallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// => true if fallback route</span></span>
<span class="line">route<span class="token punctuation">.</span><span class="token function">isStrict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// => true if strict matching enabled</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-route-options" tabindex="-1"><a class="header-anchor" href="#get-route-options"><span>Get Route Options</span></a></h3>
<p>You can extract any option used in the route definition:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">route<span class="token punctuation">.</span><span class="token function">getOption</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// => '/users/:id'</span></span>
<span class="line">route<span class="token punctuation">.</span><span class="token function">getOption</span><span class="token punctuation">(</span><span class="token string">'method'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// => 'GET'</span></span>
<span class="line">route<span class="token punctuation">.</span><span class="token function">getOption</span><span class="token punctuation">(</span><span class="token string">'strict'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// => true</span></span>
<span class="line">route<span class="token punctuation">.</span><span class="token function">getOption</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// => 'user.show'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the option doesn’t exist, it returns <code v-pre>undefined</code> unless you provide a fallback:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">route<span class="token punctuation">.</span><span class="token function">getOption</span><span class="token punctuation">(</span><span class="token string">'nonexistent'</span><span class="token punctuation">,</span> <span class="token string">'default'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => 'default'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="printing-routes" tabindex="-1"><a class="header-anchor" href="#printing-routes"><span>Printing Routes</span></a></h2>
<p>When developing or debugging, it’s often helpful to see a full list of all registered routes.
Stone Router provides a CLI command to display them neatly.</p>
<h3 id="cli-command" tabindex="-1"><a class="header-anchor" href="#cli-command"><span>CLI Command</span></a></h3>
<p>To list all routes defined in your application:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">npx stone router list</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This command will print a table that includes each route's method, path, name (if defined), and handler type.</p>
<p>Example output:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">METHOD   PATH                  NAME           HANDLER</span>
<span class="line">GET      /users                user.index     FunctionHandler</span>
<span class="line">POST     /users                user.store     FactoryHandler</span>
<span class="line">GET      /users/:id            user.show      ClassHandler@get</span>
<span class="line">GET      /                     home           FunctionHandler</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This view makes it easy to:</p>
<ul>
<li>Check for duplicate routes</li>
<li>Spot missing route names</li>
<li>Confirm handler bindings</li>
<li>Review overall route coverage</li>
</ul>
<h3 id="use-cases" tabindex="-1"><a class="header-anchor" href="#use-cases"><span>Use Cases</span></a></h3>
<ul>
<li>Quickly review routes during development</li>
<li>Document your API endpoints</li>
<li>Verify generated route structure after group nesting</li>
<li>Audit routing setup in large applications</li>
</ul>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>The Stone Router is powerful and flexible, but with great power comes great... routing responsibility.
Here are some practical tips to help you keep your routing clean, maintainable, and continuum-aligned:</p>
<h4 id="prefer-named-routes" tabindex="-1"><a class="header-anchor" href="#prefer-named-routes"><span>Prefer Named Routes</span></a></h4>
<p>Always give your routes a <code v-pre>name</code>.
This allows you to use programmatic features like <code v-pre>generate</code>, <code v-pre>navigate</code>, and <code v-pre>redirect</code> with confidence and clarity.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">'/users/:id'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'user.show'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="use-route-groups-for-shared-options" tabindex="-1"><a class="header-anchor" href="#use-route-groups-for-shared-options"><span>Use Route Groups for Shared Options</span></a></h4>
<p>Avoid repetition by grouping routes with shared <code v-pre>path</code>, <code v-pre>protocol</code>, <code v-pre>middleware</code>, or <code v-pre>name</code> prefixes.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">EventHandler</span></span><span class="token punctuation">(</span><span class="token string">'/admin'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> middleware<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'auth'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'admin'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="always-validate-dynamic-parameters" tabindex="-1"><a class="header-anchor" href="#always-validate-dynamic-parameters"><span>Always Validate Dynamic Parameters</span></a></h4>
<p>Use either inline or explicit rules to ensure your route parameters are predictable:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">path<span class="token operator">:</span> <span class="token string">'/users/:id(\\d+)'</span> <span class="token comment">// or</span></span>
<span class="line">rules<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>This avoids accidental matches and improves route resolution clarity.</p>
<h4 id="leverage-model-binding-for-cleaner-handlers" tabindex="-1"><a class="header-anchor" href="#leverage-model-binding-for-cleaner-handlers"><span>Leverage Model Binding for Cleaner Handlers</span></a></h4>
<p>Instead of writing boilerplate to fetch models from IDs, use <code v-pre>bindings</code> to inject them directly:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">bindings<span class="token operator">:</span> <span class="token punctuation">{</span> userId<span class="token operator">:</span> <span class="token string">'userService@findOneBy'</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>It keeps your handler logic focused on domain behavior, not plumbing.</p>
<h4 id="avoid-deep-route-nesting" tabindex="-1"><a class="header-anchor" href="#avoid-deep-route-nesting"><span>Avoid Deep Route Nesting</span></a></h4>
<p>Stone Router supports deep group nesting, but that doesn’t mean you should abuse it.
Set a reasonable <code v-pre>maxDepth</code> and keep routes flat when possible:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.router.maxDepth'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This improves readability and debuggability.</p>
<h4 id="use-excludemiddleware-sparingly" tabindex="-1"><a class="header-anchor" href="#use-excludemiddleware-sparingly"><span>Use <code v-pre>excludeMiddleware</code> Sparingly</span></a></h4>
<p>It's better to be precise with your <code v-pre>middleware</code> configuration than to globally apply then exclude.
Use <code v-pre>excludeMiddleware</code> only when you have an edge case, not as your primary strategy.</p>
<h4 id="avoid-optional-parameters-in-the-middle-of-paths" tabindex="-1"><a class="header-anchor" href="#avoid-optional-parameters-in-the-middle-of-paths"><span>Avoid Optional Parameters in the Middle of Paths</span></a></h4>
<p>Optional segments should always go at the end to avoid ambiguity:</p>
<p>✅ <code v-pre>/users/:id/:tab?</code>
🚫 <code v-pre>/users/:optional?/settings</code></p>
<h4 id="don-t-over-rely-on-aliased-paths" tabindex="-1"><a class="header-anchor" href="#don-t-over-rely-on-aliased-paths"><span>Don't Over-Rely on Aliased Paths</span></a></h4>
<p>Defining multiple paths for the same route (<code v-pre>path: ['/users', '/people']</code>) is powerful but should be used with moderation, or your routing can quickly become hard to reason about.</p>
<h4 id="dump-and-print-routes-in-development" tabindex="-1"><a class="header-anchor" href="#dump-and-print-routes-in-development"><span>Dump and Print Routes in Development</span></a></h4>
<p>Use <code v-pre>router.dumpRoutes()</code> or <code v-pre>npx stone router list</code> frequently during development to keep an eye on what’s really going on in your system.</p>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>Stone Router goes beyond just defining and resolving routes, it empowers you with tools to introspect, adapt, and navigate with precision.
The miscellaneous features complete the routing experience by offering:</p>
<ul>
<li><strong>Middleware support</strong> for fine-grained control at the route level</li>
<li><strong>Exclusion mechanisms</strong> for tailoring execution flow</li>
<li><strong>Lifecycle events</strong> to hook into the routing process</li>
<li><strong>Generation utilities</strong> to create URLs dynamically from route names</li>
<li><strong>Programmatic navigation</strong> for frontend only applications</li>
<li><strong>Redirection shortcuts</strong> for cleaner aliases and HTTP rewiring</li>
<li><strong>Inspection methods</strong> to audit, debug, and validate route behavior</li>
<li><strong>CLI printing</strong> for an instant view of your route map</li>
</ul>
<p>These capabilities make Stone Router not just a router, but a <strong>routing platform</strong>, deeply integrated into the Continuum, fully aware of its context, and ready to operate seamlessly in both backend and frontend applications.</p>
<p>When in doubt, inspect.
When working at scale, name and group.
And when routing feels messy, remember: with Stone.js, everything is a continuum.</p>
</div></template>


