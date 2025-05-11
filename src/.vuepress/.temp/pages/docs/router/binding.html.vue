<template><div><p>Most of the time, route parameters are used to fetch models from a database or external API.</p>
<p>With <strong>route model binding</strong>, Stone Router can handle this for you, automatically resolving models and injecting them into your route handlers.</p>
<p>In short: instead of manually fetching a <code v-pre>User</code> from <code v-pre>params.id</code>, Stone Router can fetch the <code v-pre>User</code> for you and inject it directly into <code v-pre>params.user</code>.</p>
<p>Goodbye boilerplate. Hello clean handlers.</p>
<h2 id="local-binding" tabindex="-1"><a class="header-anchor" href="#local-binding"><span>Local Binding</span></a></h2>
<p>You can define bindings directly in the route definition using the <code v-pre>bindings</code> option.</p>
<Tabs id="18" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h3 id="declarative-api" tabindex="-1"><a class="header-anchor" href="#declarative-api"><span>Declarative API</span></a></h3>
<p>First, create a service with a method that resolves the model:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Service <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Service</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> alias<span class="token operator">:</span> <span class="token string">'userService'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">findOneBy</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Fetch the user from DB or API</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, define your event handler with the <code v-pre>bindings</code> option:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> EventHandler<span class="token punctuation">,</span> Get <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">EventHandler</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyController</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">'/users/:id(\\d+)'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> bindings<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'userService@findOneBy'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">getUser</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> event<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">;</span> <span class="token comment">// this is now a full User model</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<p>First, define a factory-based service:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">userService</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">findOneBy</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// Fetch the user from DB or API</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token function">defineService</span><span class="token punctuation">(</span>userService<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> alias<span class="token operator">:</span> <span class="token string">'userService'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, define your route definition with the <code v-pre>bindings</code> option:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> definition <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/users/:id(\\d+)'</span><span class="token punctuation">,</span></span>
<span class="line">  bindings<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'userService@findOneBy'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> event<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">;</span> <span class="token comment">// this is now a full User model</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h3 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works"><span>How it Works</span></a></h3>
<ul>
<li><code v-pre>bindings</code> takes an object where each <strong>parameter key</strong> maps to a <strong>service method</strong></li>
<li>The value must be in the format: <code v-pre>serviceAlias@methodName</code></li>
<li>The method must accept <strong>two arguments</strong>: the parameter name and value</li>
<li>It must return the resolved model or <code v-pre>undefined</code></li>
</ul>
<p>Stone Router will call this method before your handler and replace the parameter value with the resolved result.</p>
<h3 id="custom-binding-key" tabindex="-1"><a class="header-anchor" href="#custom-binding-key"><span>Custom Binding Key</span></a></h3>
<p>Sometimes you want to inject the resolved model into a <strong>different parameter name</strong> than the one used in the URL.</p>
<p>You can do that with the <code v-pre>@</code> symbol in the path definition:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/users/:user@id(\\d+)'</span><span class="token punctuation">,</span></span>
<span class="line">  bindings<span class="token operator">:</span> <span class="token punctuation">{</span> user<span class="token operator">:</span> <span class="token string">'userService@findOneBy'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>params<span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Resolved model</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Still available too (raw ID)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>user@id</code> means:</p>
<ul>
<li>Use <code v-pre>id</code> as the <strong>raw parameter</strong></li>
<li>Inject the resolved model under <code v-pre>params.user</code></li>
</ul>
</li>
</ul>
<h3 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters"><span>Optional Parameters</span></a></h3>
<p>If the bound parameter is <strong>optional</strong>, and no value is present in the request, Stone Router <strong>won’t call the service method</strong> and will simply inject <code v-pre>undefined</code>.</p>
<p>However, if the parameter is required and no model is found, an <strong>error will be thrown</strong>.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/users/:user@id(\\d+)?'</span><span class="token punctuation">,</span></span>
<span class="line">  bindings<span class="token operator">:</span> <span class="token punctuation">{</span> user<span class="token operator">:</span> <span class="token string">'userService@findOneBy'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// event.params.user is either the model or undefined</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="global-binding" tabindex="-1"><a class="header-anchor" href="#global-binding"><span>Global Binding</span></a></h2>
<p>If you want to apply the same model binding logic across multiple routes, you don’t have to repeat yourself.
Stone Router supports <strong>global bindings</strong> to automatically resolve parameters system-wide.</p>
<h3 id="setup-time" tabindex="-1"><a class="header-anchor" href="#setup-time"><span>Setup Time</span></a></h3>
<p>Use the <code v-pre>blueprint.set</code> method to declare bindings before the app starts:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.router.bindings'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  user<span class="token operator">:</span> <span class="token string">'userService@findOneBy'</span><span class="token punctuation">,</span></span>
<span class="line">  post<span class="token operator">:</span> <span class="token string">'postService@findOneBy'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This means that <em>any</em> route with <code v-pre>:user</code> or <code v-pre>:post</code> will automatically resolve the associated model, as long as the route includes the matching parameter.</p>
<h3 id="runtime" tabindex="-1"><a class="header-anchor" href="#runtime"><span>Runtime</span></a></h3>
<p>You can also define or override global bindings at runtime using <code v-pre>router.configure()</code>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  bindings<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    user<span class="token operator">:</span> <span class="token string">'userService@findOneBy'</span><span class="token punctuation">,</span></span>
<span class="line">    post<span class="token operator">:</span> <span class="token string">'postService@findOneBy'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is handy for dynamic apps or multi-tenant setups where bindings may change based on configuration or environment.</p>
<h3 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h3>
<ul>
<li>Global bindings apply to all matching parameter names across all routes.</li>
<li>Local <code v-pre>bindings</code> always take precedence over global ones.</li>
<li>Just like local bindings, the resolver methods must accept <code v-pre>(key: string, value: any)</code> and return the model (or <code v-pre>undefined</code>).</li>
</ul>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>Stone Router’s binding system is powerful — but with great power comes great responsibility. Here’s how to get the most out of it:</p>
<h4 id="use-binding-for-models-not-logic" tabindex="-1"><a class="header-anchor" href="#use-binding-for-models-not-logic"><span>Use Binding for Models, Not Logic</span></a></h4>
<p>Bindings are ideal for fetching entities like users, posts, products, etc.
Avoid using them to perform business logic or side effects. Keep it clean and predictable.</p>
<h4 id="prefer-local-bindings-when-specific" tabindex="-1"><a class="header-anchor" href="#prefer-local-bindings-when-specific"><span>Prefer Local Bindings When Specific</span></a></h4>
<p>If a route needs a unique way to fetch a model, define the binding locally in that route.
This makes the behavior explicit and easier to debug.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">bindings<span class="token operator">:</span> <span class="token punctuation">{</span> user<span class="token operator">:</span> <span class="token string">'customUserService@resolveSuspendedUser'</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="use-global-bindings-for-common-entities" tabindex="-1"><a class="header-anchor" href="#use-global-bindings-for-common-entities"><span>Use Global Bindings for Common Entities</span></a></h4>
<p>If the same parameter shows up everywhere (<code v-pre>:user</code>, <code v-pre>:post</code>), define a global binding in <code v-pre>blueprint.set()</code> or <code v-pre>router.configure()</code>.
It keeps routes DRY and consistent.</p>
<h4 id="always-handle-undefined" tabindex="-1"><a class="header-anchor" href="#always-handle-undefined"><span>Always Handle <code v-pre>undefined</code></span></a></h4>
<p>Bindings return <code v-pre>undefined</code> when the model isn’t found.
Your handlers should expect that, especially for optional parameters.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> isEmpty <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NotFoundError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core-http'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NotFoundError</span><span class="token punctuation">(</span><span class="token string">'User not found'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="use-aliases-for-services" tabindex="-1"><a class="header-anchor" href="#use-aliases-for-services"><span>Use Aliases for Services</span></a></h4>
<p>Make sure the services you bind are registered with a clean <code v-pre>alias</code> using the <code v-pre>@Service({ alias })</code> decorator.
It avoids verbose class names and helps with maintainability.</p>
<h4 id="keep-resolution-methods-small-and-focused" tabindex="-1"><a class="header-anchor" href="#keep-resolution-methods-small-and-focused"><span>Keep Resolution Methods Small and Focused</span></a></h4>
<p>Binding resolution methods should:</p>
<ul>
<li>Take <code v-pre>(key, value)</code> as arguments</li>
<li>Return the resolved model or <code v-pre>undefined</code></li>
<li>Avoid heavy logic or side effects</li>
</ul>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>Stone Router’s binding system allows you to automatically resolve route parameters into fully-loaded models.
Instead of receiving an ID, your handler can receive the actual object, cleaner, safer, and faster to code.</p>
<p>You can bind models:</p>
<ul>
<li><strong>Locally</strong>, per route, using the <code v-pre>bindings</code> option</li>
<li><strong>Globally</strong>, across all routes, via <code v-pre>blueprint.set()</code> or <code v-pre>router.configure()</code></li>
<li>With <strong>custom parameter keys</strong> like <code v-pre>:user@id</code> to decouple URL naming from variable naming</li>
</ul>
<p>The binding system supports:</p>
<ul>
<li>Optional parameters</li>
<li>Regex-based route params</li>
<li>Service aliases with method names (<code v-pre>'userService@findOneBy'</code>)</li>
<li>Consistent injection via <code v-pre>event.params</code></li>
</ul>
<p>Handle <code v-pre>undefined</code> when needed, throw smart errors, and keep your resolution logic minimal.</p>
<p>Stone Router takes care of the boilerplate — so you can focus on your domain logic, not your plumbing.<br>
Feel the power of the Continuum! 😎</p>
</div></template>


