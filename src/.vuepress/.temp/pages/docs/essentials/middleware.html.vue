<template><div><p>The flexibility and modularity of Stone.js lie in its middleware system.
Middleware intercepts incoming data, allowing for inspection, filtering, transformation, and rejection before it reaches its destination.
For instance, middleware can verify if a user is authenticated, permitting the request to proceed if authenticated or rejecting it otherwise.</p>
<p>Middleware is essential within the Stone.js ecosystem and is utilized across all levels of the <strong>Continuum architecture</strong>:</p>
<ul>
<li><a href="#configuration-middleware"><strong>Configuration Middleware (Pipes)</strong></a>: Ensures dynamic and adaptive configuration at the configuration layer.</li>
<li><a href="#integration-middleware"><strong>Integration Middleware</strong></a>: Transforms platform inputs into Stone.js events and vice versa at the integration layer.</li>
<li><a href="#initialization-middleware"><strong>Initialization Middleware</strong></a>: Intercepts, transforms, filters, validates, and rejects events as necessary at the initialization layer, applicable globally across functionalities.</li>
<li><a href="#feature-middleware"><strong>Feature Middleware</strong></a>: Intercepts, transforms, filters, validates, and rejects events at the feature layer, applicable either globally or to specific features via the Router and routes.</li>
</ul>
<h2 id="definitions" tabindex="-1"><a class="header-anchor" href="#definitions"><span>Definitions</span></a></h2>
<p>A middleware in Stone.js is a class that must have a <code v-pre>handle</code> method, which can be synchronous or asynchronous,
and be decorated with <code v-pre>@Middleware()</code>. This decorator binds the middleware automatically to the service container,
giving it access to services within the container through its constructor.</p>
<p>Each middleware receives a passable as the first parameter of the <code v-pre>handle</code> method, which contains the data to be transformed.
Note that the passable differs across layers.
Refer to the specific documentation for each layer for detailed information on using middleware; here, we provide a brief overview.</p>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>The service container is initialized at the initialization layer, so middleware at lower layers cannot access it since it doesn't exist there. Only middleware at or above the initialization layer can use the services provided by the container.</p>
</div>
<p>Here is an example of middleware from the initialization and feature layer:</p>
<CodeTabs id="45" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> HttpError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Middleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core/decorators'</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">Middleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AuthMiddleware</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> config <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>config <span class="token operator">=</span> config</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">handle</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>event<span class="token punctuation">.</span><span class="token function">hasHeader</span><span class="token punctuation">(</span><span class="token string">'Authorization'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpError</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">,</span> <span class="token string">'Unauthorized'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/config'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Middleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core/decorators'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent<span class="token punctuation">,</span> HttpError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">CustomBinding</span> <span class="token punctuation">{</span></span>
<span class="line">  config<span class="token operator">:</span> Config</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Middleware</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AuthMiddleware</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token keyword">readonly</span> config<span class="token operator">:</span> Config</span>
<span class="line"></span>
<span class="line">  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> config <span class="token punctuation">}</span><span class="token operator">:</span> CustomBinding<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>config <span class="token operator">=</span> config</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">handle</span> <span class="token punctuation">(</span></span>
<span class="line">    event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span> <span class="token operator">=></span> IncomingHttpEvent</span>
<span class="line">  <span class="token punctuation">)</span><span class="token operator">:</span> IncomingHttpEvent <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>event<span class="token punctuation">.</span><span class="token function">hasHeader</span><span class="token punctuation">(</span><span class="token string">'Authorization'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpError</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">,</span> <span class="token string">'Unauthorized'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>By convention, middleware is registered in the <code v-pre>app/middleware</code> directory.
However, since middleware is defined using decorators, you are free to organize them as you see fit,
as long as they reside in the <code v-pre>app</code> directory of your application.</p>
<h2 id="registration" tabindex="-1"><a class="header-anchor" href="#registration"><span>Registration</span></a></h2>
<p>Middleware can be registered implicitly or explicitly. Implicit registration is done using decorators,
while explicit registration is handled through configuration files in the <code v-pre>config</code> directory.</p>
<h3 id="configuration-middleware" tabindex="-1"><a class="header-anchor" href="#configuration-middleware"><span>Configuration Middleware</span></a></h3>
<p>Here, we give just an overview to facilitate a general understanding of Configuration Middleware within Stone.js.
For a deeper understanding, please refer to the section on <a href="../architecture/blueprint">adaptive configurations</a>.</p>
<h4 id="implicit-registration" tabindex="-1"><a class="header-anchor" href="#implicit-registration"><span>Implicit Registration</span></a></h4>
<p>Registered via the <code v-pre>@StoneApp()</code> decorator:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">@<span class="token function">StoneApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">builder</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">pipes</span><span class="token operator">:</span> <span class="token punctuation">[</span>MigrationMiddleware<span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="explicit-registration" tabindex="-1"><a class="header-anchor" href="#explicit-registration"><span>Explicit Registration</span></a></h4>
<p>Registered in <code v-pre>config/app.mjs</code>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> appOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">builder</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">pipes</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      MigrationMiddleware</span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="integration-middleware" tabindex="-1"><a class="header-anchor" href="#integration-middleware"><span>Integration Middleware</span></a></h3>
<p>Here, we give just an overview to facilitate a general understanding of Integration Middleware within Stone.js.
For a deeper understanding, please refer to the section on <RouteLink to="/docs/http/adapters.html">adapters</RouteLink>.</p>
<h4 id="simultaneous-registration" tabindex="-1"><a class="header-anchor" href="#simultaneous-registration"><span>Simultaneous Registration</span></a></h4>
<p>Define and register middleware, specifying <code v-pre>adapter</code> for the integration layer, <code v-pre>input</code> or <code v-pre>output</code> type, and platform (e.g., <code v-pre>NODE_HTTP_PLATFORM</code>):</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Middleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core/decorators'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">NODE_HTTP_PLATFORM</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-adapter'</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">Middleware</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'input'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">layer</span><span class="token operator">:</span> <span class="token string">'adapter'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">platform</span><span class="token operator">:</span> <span class="token constant">NODE_HTTP_PLATFORM</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BodyMiddleware</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="implicit-registration-1" tabindex="-1"><a class="header-anchor" href="#implicit-registration-1"><span>Implicit Registration</span></a></h4>
<p>Registered via the adapter decorator:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">@<span class="token function">StoneApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">@<span class="token function">NodeHttpAdapter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">[</span>BodyMiddleware<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">[</span>SendFileMiddleware<span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="explicit-registration-1" tabindex="-1"><a class="header-anchor" href="#explicit-registration-1"><span>Explicit Registration</span></a></h4>
<p>Registered in the adapter configuration file (e.g., <code v-pre>config/node-http.adapter.mjs</code>):</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> nodeHttpAdapterOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">adapters</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">mapper</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>BodyMiddleware<span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>SendFileMiddleware<span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="initialization-middleware" tabindex="-1"><a class="header-anchor" href="#initialization-middleware"><span>Initialization Middleware</span></a></h3>
<h4 id="simultaneous-registration-1" tabindex="-1"><a class="header-anchor" href="#simultaneous-registration-1"><span>Simultaneous Registration</span></a></h4>
<p>Define and register middleware, specifying <code v-pre>kernel</code> for the initialization layer and <code v-pre>input</code>, <code v-pre>output</code>, or <code v-pre>terminate</code> type:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Middleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core/decorators'</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">Middleware</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'input'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">layer</span><span class="token operator">:</span> <span class="token string">'kernel'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AuthMiddleware</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="implicit-registration-2" tabindex="-1"><a class="header-anchor" href="#implicit-registration-2"><span>Implicit Registration</span></a></h4>
<p>Registered via the <code v-pre>@StoneApp()</code> decorator:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">@<span class="token function">StoneApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">kernel</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token punctuation">[</span>AuthMiddleware<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token punctuation">[</span>CORSMiddleware<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">terminate</span><span class="token operator">:</span> <span class="token punctuation">[</span>TerminateMiddleware<span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="explicit-registration-2" tabindex="-1"><a class="header-anchor" href="#explicit-registration-2"><span>Explicit Registration</span></a></h4>
<p>Registered in <code v-pre>config/app.mjs</code>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> appOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">kernel</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token punctuation">[</span>AuthMiddleware<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token punctuation">[</span>CORSMiddleware<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">terminate</span><span class="token operator">:</span> <span class="token punctuation">[</span>TerminateMiddleware<span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="feature-middleware" tabindex="-1"><a class="header-anchor" href="#feature-middleware"><span>Feature Middleware</span></a></h3>
<p>Here, we give just an overview to facilitate a general understanding of Feature Middleware within Stone.js.
For a deeper understanding, please refer to the section on <RouteLink to="/cookbook/router/">router</RouteLink>.</p>
<h4 id="simultaneous-registration-2" tabindex="-1"><a class="header-anchor" href="#simultaneous-registration-2"><span>Simultaneous Registration</span></a></h4>
<p>Define and register middleware, specifying <code v-pre>router</code> for the feature layer:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Middleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core/decorators'</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">Middleware</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">layer</span><span class="token operator">:</span> <span class="token string">'router'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AuthMiddleware</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="implicit-registration-3" tabindex="-1"><a class="header-anchor" href="#implicit-registration-3"><span>Implicit Registration</span></a></h4>
<p>Registered via the <code v-pre>@RouterProvider()</code> decorator for common middleware:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> RouterProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router/decorators'</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">RouterProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>AuthMiddleware<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Registered via route decorators for specific functionalities:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router/decorators'</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">Controller</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line">  @<span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>AuthMiddleware<span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="explicit-registration-3" tabindex="-1"><a class="header-anchor" href="#explicit-registration-3"><span>Explicit Registration</span></a></h4>
<p>Registered in <code v-pre>config/router.mjs</code>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> routerOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">router</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>AuthMiddleware<span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="middleware-alias" tabindex="-1"><a class="header-anchor" href="#middleware-alias"><span>Middleware Alias</span></a></h2>
<p>Stone.js allows the use of aliases for middleware, eliminating the need to import classes for registration. Aliases apply only to initialization and feature middleware.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Middleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core/decorators'</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">Middleware</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'auth'</span><span class="token punctuation">,</span> <span class="token string">'authMiddleware'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AuthMiddleware</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Registering via alias:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> RouterProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router/decorators'</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">RouterProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'auth'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sorting-middleware" tabindex="-1"><a class="header-anchor" href="#sorting-middleware"><span>Sorting Middleware</span></a></h2>
<p>Stone.js allows specifying execution priority for middleware using an object literal with <code v-pre>priority</code> and <code v-pre>pipe</code> properties.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> RouterProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router/decorators'</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">RouterProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">pipe</span><span class="token operator">:</span> <span class="token string">'auth'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="middleware-parameters" tabindex="-1"><a class="header-anchor" href="#middleware-parameters"><span>Middleware Parameters</span></a></h2>
<p>Additional parameters can be passed to middleware, useful for scenarios like permission checks.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Middleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core/decorators'</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">Middleware</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'hasPermission'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">HasPermissionMiddleware</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> next<span class="token punctuation">,</span> permissions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// handle logic</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Using middleware with parameters:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get<span class="token punctuation">,</span> Post <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router/decorators'</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">Controller</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line">  @<span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">pipe</span><span class="token operator">:</span> <span class="token string">'hasPermission'</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'LIST_USER_PERMISSION'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  @<span class="token function">Post</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">pipe</span><span class="token operator">:</span> <span class="token string">'hasPermission'</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'SAVE_USER_PERMISSION'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">saveUser</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> event <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"><span>Conclusion</span></a></h2>
<p>Stone.js's flexibility and modularity offer extensive possibilities with middleware, making it a vital component of the framework. Understanding and effectively utilizing middleware is crucial for harnessing the full potential of Stone.js.</p>
</div></template>


