<template><div><p>In Stone.js, a <strong>lifecycle hook</strong> is a listener function that is executed at a specific point in the evolution of the internal context. Hooks provide a structured way to observe what happens inside the system without altering its behavior. They are deeply integrated into the Continuum Architecture, where every application act is scoped within a dynamic, dimension-driven context.</p>
<p>Lifecycle hooks are dimension-scoped: each dimension in the context has its own set of hook points corresponding to its responsibilities. This makes hooks highly predictable and composable. They allow you to instrument and monitor the system at various phases, whether at boot time, per request, or during teardown.</p>
<p>However, hooks are strictly <strong>observational</strong>. They are not meant to intercept, control, or mutate context data. If you need to transform or intervene in the lifecycle of an intention or response, you must use middleware instead.</p>
<p>This page focuses specifically on the <strong>initialization hooks</strong>, the hooks triggered during the lifecycle of each <strong>intention</strong> (e.g., request, event, CLI input). These hooks allow you to trace and instrument everything that happens from the moment a request is received to the moment the response is finalized and the ephemeral execution context is destroyed.</p>
<p>Low-level lifecycle hooks related to <a href="./blueprint#setup-hooks"><strong>setup</strong></a> and <a href="./adapter#integration-hooks"><strong>integration</strong></a> dimensions will be documented separately.</p>
<h2 id="initialization-hooks" tabindex="-1"><a class="header-anchor" href="#initialization-hooks"><span>Initialization Hooks</span></a></h2>
<p>The following hooks are executed during the lifecycle of each intention (e.g. HTTP request, CLI call, event trigger). These hooks are scoped to the <strong>ephemeral execution context</strong> and allow you to observe its evolution from creation to teardown.</p>
<Mermaid id="mermaid-21" code="eJyNkktPwkAUhff8iklNd5BQipsuTKQP2qiJEeKGuCj0AhOHmWamCkr47965lYdsnK5Oz/lm7qP1/T2XvInY3mvWsAEvYt68NOB1WWu8lpqXcwEGk32HMW+pZDPh30QGw3rnda0ruIRYCaWtfVOFt8N+3+scDgff76x0Wa/ZNEHufqZkgfXeUI9Q56Ws8Ogq/QRJZjx71moBxqDJnnhVCdiWGtijUjXlwSzdweKjgYuUggFedz77AFqCuEJCRK6D3yNQWSJBoL3+2BM1CNqG6Z9Qa6UvwoyqQ43bkqsXMLWShoqOMTi+t0BbKre3nSuQV6A3Bb3hsmzwsN0X6/Xu2Mhui1Rsx2jVgIZudUCbaXVIk17RdvcJqeykUjvTyctIjW3HpHLbI6mi4/ts0nzZ78SWSrNSCCZVBQYRxgwmgI2aRqt36G151awj/C+6Sy5EdJPRc0GOnMnYnQzc0YE7GjqjiTOZOpOZMzl2JnNnsviH/AGwtErQ"></Mermaid><p>Below is the full list of per-intent lifecycle hooks provided by the Initialization Dimension.</p>
<table>
<thead>
<tr>
<th>Hook Name</th>
<th>When It Runs</th>
<th>Typical Use Cases</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>onInit</code></td>
<td>When the execution context is created</td>
<td>Assign trace IDs, inject request-specific services, log start</td>
</tr>
<tr>
<td><code v-pre>onHandlingEvent</code></td>
<td>When the <code v-pre>IncomingEvent</code> is passed to the kernel</td>
<td>Track when the domain is about to be executed</td>
</tr>
<tr>
<td><code v-pre>onProcessingKernelMiddleware</code></td>
<td>Before each kernel middleware runs</td>
<td>Log middleware order, start timing, setup middleware-specific context</td>
</tr>
<tr>
<td><code v-pre>onKernelMiddlewareProcessed</code></td>
<td>After each kernel middleware completes</td>
<td>Track execution time, collect metrics, debug effects</td>
</tr>
<tr>
<td><code v-pre>onExecutingEventHandler</code></td>
<td>Just before the event handler runs</td>
<td>Attach timing markers, wrap handler in observability logic</td>
</tr>
<tr>
<td><code v-pre>onExecutingErrorHandler</code></td>
<td>If the event handler throws an error</td>
<td>Log and report exceptions, trigger alerts</td>
</tr>
<tr>
<td><code v-pre>onPreparingResponse</code></td>
<td>Before preparing the internal response</td>
<td>Normalize output, enrich response metadata</td>
</tr>
<tr>
<td><code v-pre>onResponsePrepared</code></td>
<td>After the internal response is finalized</td>
<td>Validate structure, inject post-processing metrics</td>
</tr>
<tr>
<td><code v-pre>onEventHandled</code></td>
<td>After the domain logic is complete</td>
<td>Log successful execution, audit events</td>
</tr>
<tr>
<td><code v-pre>onTerminate</code></td>
<td>When the request lifecycle ends</td>
<td>Cleanup, release resources, flush async tasks</td>
</tr>
</tbody>
</table>
<h2 id="hook-listener-registration" tabindex="-1"><a class="header-anchor" href="#hook-listener-registration"><span>Hook Listener Registration</span></a></h2>
<p>In Stone.js, hook listeners can be registered in two ways:</p>
<ul>
<li><strong>Declaratively</strong>, using the <code v-pre>@Hook()</code> decorator on a method</li>
<li><strong>Imperatively</strong>, using the <code v-pre>defineBlueprintConfig()</code> utility</li>
</ul>
<p>Both approaches allow you to attach logic to any hook point in the system. However, the way hook listeners are resolved and executed reflects the architecture's introspective and flexible nature.</p>
<Tabs id="173" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h3 id="declarative-registration" tabindex="-1"><a class="header-anchor" href="#declarative-registration"><span>Declarative Registration</span></a></h3>
<p>You can declare hook listeners by annotating methods with the <code v-pre>@Hook('&lt;hookName&gt;')</code> decorator. This is the most common and readable way to bind custom behavior to lifecycle stages.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Hook <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LifecycleLogger</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Hook</span></span><span class="token punctuation">(</span><span class="token string">'onInit'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">logInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Execution context initialized.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Hook</span></span><span class="token punctuation">(</span><span class="token string">'onTerminate'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">cleanup</span><span class="token punctuation">(</span><span class="token punctuation">{</span> event <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Event </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>event<span class="token punctuation">.</span><span class="token function">fingerprint</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> ended</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Where to declare hooks:</strong></p>
<ul>
<li>In the <strong>application entrypoint class</strong></li>
<li>In a <strong>ServiceProvider</strong> (we’ll see this in a later section)</li>
<li>In <strong>any other class</strong>, but note the following:</li>
</ul>
<p>Hook-decorated methods are <strong>not tied to the class instance</strong>. They are resolved <strong>by reflection</strong>, and may be invoked even if the class is never instantiated. Avoid using <code v-pre>this</code> or relying on instance state.</p>
<p>This ensures that hooks remain introspectable, context-agnostic, and safe to execute in isolated scopes.</p>
</template>
<template #tab1="{ value, isActive }">
<h3 id="imperative-registration" tabindex="-1"><a class="header-anchor" href="#imperative-registration"><span>Imperative Registration</span></a></h3>
<p>Hooks can also be registered manually in the blueprint definition. This approach is useful when you want full control over listener setup, for example, when registering hooks conditionally, injecting them dynamically, or composing from external libraries.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">logInit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Init triggered'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">logTerminate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> event <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Event </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>event<span class="token punctuation">.</span><span class="token function">fingerprint</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> ended</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> mainBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.lifecycleHooks.onInit'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>logInit<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.lifecycleHooks.onTerminate'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>logTerminate<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This method attaches the listener directly to the context lifecycle under the <code v-pre>stone.lifecycleHooks.&lt;hookName&gt;</code> namespace.</p>
<p><strong>Use this approach when:</strong></p>
<ul>
<li>You need to register hooks <strong>outside class structures</strong></li>
<li>You want to <strong>compose hooks dynamically</strong></li>
<li>You are building <strong>framework extensions or plugins</strong></li>
</ul>
</template>
</Tabs>
<h2 id="hook-vs-middleware" tabindex="-1"><a class="header-anchor" href="#hook-vs-middleware"><span>Hook vs. Middleware</span></a></h2>
<p>In Stone.js, both <strong>hooks</strong> and <a href="./middleware"><strong>middleware</strong></a> allow you to react to different stages of the context lifecycle, but they serve <strong>fundamentally different purposes</strong>.</p>
<p>Understanding this distinction is key to writing clear, maintainable, and continuum-aligned systems.</p>
<h3 id="hooks-observers" tabindex="-1"><a class="header-anchor" href="#hooks-observers"><span>Hooks: Observers</span></a></h3>
<p>Hooks are passive. They are triggered automatically by the framework at well-defined execution points. They cannot interrupt the flow, short-circuit execution, or return alternative results. They exist <strong>outside the pipeline</strong>, and their purpose is to <strong>observe and instrument</strong> the context.</p>
<ul>
<li>Listen to internal events</li>
<li>Measure performance</li>
<li>Collect analytics</li>
<li>Log execution</li>
<li>Extend features in a modular way</li>
<li>React to success/failure states</li>
</ul>
<p>Hooks do not mutate the <a href="../essentials/incoming-event"><code v-pre>IncomingEvent</code></a>, the <a href="../essentials/outgoing-response"><code v-pre>OutgoingResponse</code></a>, or the execution pipeline. They are safe, side-effect-free tools for <strong>observability and diagnostics</strong>.</p>
<h3 id="middleware-participants" tabindex="-1"><a class="header-anchor" href="#middleware-participants"><span>Middleware: Participants</span></a></h3>
<p>Middleware are active. They are part of the execution pipeline and can:</p>
<ul>
<li>Short-circuit the flow</li>
<li>Modify the <a href="../essentials/incoming-event"><code v-pre>IncomingEvent</code></a> or <a href="../essentials/outgoing-response"><code v-pre>OutgoingResponse</code></a></li>
<li>Apply validation, authentication, or business-specific rules</li>
<li>Catch and transform errors</li>
<li>Inject data into the context</li>
</ul>
<p>Middleware lives <strong>inside the dimensions</strong>, especially in the <a href="./blueprint"><strong>Setup</strong></a>, <a href="./adapter"><strong>Integration</strong></a>, and <strong>Initialization</strong> dimensions, and is responsible for shaping the behavior of the context.</p>
<p>They define <strong>how</strong> intentions are interpreted, and <strong>what</strong> happens in response.</p>
<h3 id="comparison-table" tabindex="-1"><a class="header-anchor" href="#comparison-table"><span>Comparison Table</span></a></h3>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Hook</th>
<th>Middleware</th>
</tr>
</thead>
<tbody>
<tr>
<td>Role</td>
<td>Observer</td>
<td>Participant</td>
</tr>
<tr>
<td>Execution scope</td>
<td>Outside the pipeline</td>
<td>Inside the pipeline</td>
</tr>
<tr>
<td>Can mutate context?</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Can short-circuit flow?</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Access to <code v-pre>next()</code></td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Purpose</td>
<td>Monitoring, logging, metrics</td>
<td>Behavior, transformation, control</td>
</tr>
<tr>
<td>Typical usage</td>
<td>Tracing, audit logs, cleanup</td>
<td>Auth, validation, response shaping</td>
</tr>
</tbody>
</table>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>Lifecycle hooks in Stone.js provide a structured, dimension-aware way to <strong>observe</strong> the internal evolution of the context, from system startup to per-intent execution and teardown.</p>
<p>They are:</p>
<ul>
<li><strong>Dimension-scoped</strong>: Each hook is bound to a specific phase of the continuum</li>
<li><strong>Passive</strong>: Hooks cannot modify or interrupt the flow, they listen, they don’t act</li>
<li><strong>Safe and isolated</strong>: Hook execution is side-effect-tolerant and does not depend on class instantiation</li>
<li><strong>Crucial for instrumentation</strong>: Ideal for logging, tracing, performance measurement, debugging, and system introspection</li>
</ul>
<p>In this documentation, we focused specifically on the <strong>Initialization Dimension</strong>, where per-intent hooks are triggered for each ephemeral execution context.</p>
<p>Hooks are registered using:</p>
<ul>
<li><code v-pre>@Hook()</code> decorators for declarative class-based listeners</li>
<li><code v-pre>defineBlueprintConfig</code> for flexible, imperative registration</li>
</ul>
<p>And most importantly:</p>
<blockquote>
<p>Use <strong>hooks</strong> when you want to observe what’s happening.<br>
Use <strong>middleware</strong> when you want to control what happens.</p>
</blockquote>
<p>If your code <strong>returns</strong>, <strong>transforms</strong>, or <strong>decides</strong>, it’s middleware.<br>
If your code just <strong>records</strong>, <strong>measures</strong>, or <strong>responds after the fact</strong>, it’s a hook.</p>
<p>To go deeper:</p>
<ul>
<li>Explore <a href="./blueprint#setup-hooks"><strong>Setup Hooks</strong></a> to instrument blueprint construction</li>
<li>Explore <a href="./adapter#integration-hooks"><strong>Integration Hooks</strong></a> to track adapter-level behavior</li>
<li>See the <a href="./middleware"><strong>Middleware</strong></a> documentation to learn how to intercept and control flow across dimensions</li>
</ul>
<p>The more you align your instrumentation strategy with the Continuum, the more modular, observable, and resilient your application will become.</p>
</div></template>


