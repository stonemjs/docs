<template><div><p><strong>The Blueprint is the centralized place where all configuration lives.</strong><br>
It is the output of the <strong>Setup Dimension</strong> — an object that defines the structure, components, and behaviors of your Stone.js system before it runs. It consolidates all declared modules, services, middleware, handlers, adapters, and more — and crucially, it is also where you register all configuration and settings your modules need to operate correctly.</p>
<p>This object is then passed along the rest of the system lifecycle. It’s available throughout the <strong>Integration</strong>, <strong>Initialization</strong>, and <strong>Functional</strong> dimensions, making it the cornerstone for building predictable, portable, and introspectable software across contexts.</p>
<p>The <strong>Blueprint</strong> is not frozen by default — it remains mutable. However, <strong>mutating it at runtime is discouraged</strong> unless absolutely necessary. It should be treated as a stable artifact once setup is complete. Mutation is possible, but it must be deliberate and controlled; the developer must understand the risks involved and the impact on system coherence.</p>
<h3 id="why-it-exists" tabindex="-1"><a class="header-anchor" href="#why-it-exists"><span>Why It Exists</span></a></h3>
<p>Complex, cross-platform systems need a place to define what they are made of — and how they should behave. The Blueprint provides exactly that: a <strong>declarative manifest</strong> and <strong>runtime instruction model</strong>, separated cleanly from execution logic.</p>
<p>Without it, setup logic becomes fragmented across files, dimensions, and abstractions. With it, everything is unified:</p>
<ul>
<li>System configuration is centralized and introspectable</li>
<li>Dependencies and features are organized and declared up-front</li>
<li>Dynamic behavior remains possible through middleware and hooks</li>
</ul>
<p>Whether your system runs on Node.js, in the browser, or in a FaaS environment — the Blueprint ensures every component is composed consistently and logically.</p>
<h3 id="where-it-fits-in-the-continuum" tabindex="-1"><a class="header-anchor" href="#where-it-fits-in-the-continuum"><span>Where It Fits in the Continuum</span></a></h3>
<p>In the Continuum Architecture, the Blueprint is built only once — in the <strong>Setup Dimension</strong> — and made <strong>accessible in all other dimensions</strong>. It does not <em>drive</em> those dimensions directly, but it provides the necessary context and configuration to operate within them.</p>
<Mermaid id="mermaid-44" code="eJyN0LFuwjAQBuCdpzilyhZUqtKFoRJJCKlEF5C6RAwmucAJY0e2UwqId+/FLJnaeLF0991v+cLwRorcDG6BO+AJgxkEO2ExiOBR+BKGxE6i5c5tBBDUWrkNXb18mTY/QdRVJSlMtNSmKz9Vr2/TySQY3e/3MBzVUp/LgzAOVmu2APNig65tIKUTKktabWE8foe4iGWLjSHltt7FvpwUH8rh3gjHsjfTIykTciQkXf9QiyJrVdn1hewLTxJPsmJeicahsRF8UlVJPAuDEeRaH+0jK/VwyV8w31Qiw1woht3IimosL6XEB114mhdxa3k91sJK76mEZ1i3yvH7MC85gHPDEDbuwjvcQ60NCClB6QqtT7HcYcq30Uccn6lyhxkvPqpJytlT5k9PxoNlMlimg+VisMwGy+Vgmf8jfwG/Depk"></Mermaid><ul>
<li>It is passed into the <strong>Integration Dimension</strong>, enabling adapters, middleware, and hooks to introspect the system’s structure and settings.</li>
<li>It is also passed into the <strong>Initialization Dimension</strong>, making it available inside services, handlers, lifecycle hooks, and modules.</li>
<li>During runtime, any module can access the Blueprint to retrieve configurations or references established during setup.</li>
</ul>
<p>This cross-dimensional accessibility is what enables Stone.js to unify runtime behavior across platforms — all through a consistent, introspected, and purpose-driven configuration model.</p>
<p>In short:</p>
<ul>
<li>The Setup Dimension builds the Blueprint.</li>
<li>The Blueprint supports the entire system.</li>
<li>And every dimension can reach into it to understand what’s been configured.</li>
</ul>
<h2 id="blueprint-api" tabindex="-1"><a class="header-anchor" href="#blueprint-api"><span>Blueprint API</span></a></h2>
<p>The <strong>Blueprint</strong> is an instance of the <code v-pre>Config</code> class — a configuration registry built by the Setup Dimension and shared across all others.</p>
<h3 id="working-with-configuration" tabindex="-1"><a class="header-anchor" href="#working-with-configuration"><span>Working with Configuration</span></a></h3>
<p>The Blueprint provides a set of methods to manage configuration values. These methods are designed to be simple and intuitive, allowing you to easily <strong>retrieve</strong>, <strong>set</strong>, and <strong>manipulate configuration data</strong>.</p>
<h4 id="get-key-default" tabindex="-1"><a class="header-anchor" href="#get-key-default"><span><code v-pre>get(key, default?)</code></span></a></h4>
<p>Returns the configuration value at the given key. This is the most used method across all dimensions.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'stone.name'</span><span class="token punctuation">)</span> <span class="token comment">// "MyStoneApp"</span></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'stone.secret'</span><span class="token punctuation">,</span> <span class="token string">'default-secret'</span><span class="token punctuation">)</span> <span class="token comment">// default value</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-key-value" tabindex="-1"><a class="header-anchor" href="#set-key-value"><span><code v-pre>set(key, value)</code></span></a></h4>
<p>Adds or overrides a value. Can be used during setup or runtime (use cautiously).</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.env'</span><span class="token punctuation">,</span> <span class="token string">'production'</span><span class="token punctuation">)</span></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'myApp.name'</span><span class="token punctuation">,</span> <span class="token string">'StoneBlog'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="setif-key-value" tabindex="-1"><a class="header-anchor" href="#setif-key-value"><span><code v-pre>setIf(key, value)</code></span></a></h4>
<p>Sets a value only if not already present.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">setIf</span><span class="token punctuation">(</span><span class="token string">'stone.debug'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="add-key-value" tabindex="-1"><a class="header-anchor" href="#add-key-value"><span><code v-pre>add(key, value)</code></span></a></h4>
<p>Appends a value to an existing array, plain object or list-based config.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.services'</span><span class="token punctuation">,</span> MyService<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>If you're unsure whether a key exists, always wrap the value in an array. This ensures compatibility with array-based namespaces and prevents configuration errors.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.services'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>MyService<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="has-key" tabindex="-1"><a class="header-anchor" href="#has-key"><span><code v-pre>has(key)</code></span></a></h4>
<p>Checks if a config key is defined.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>blueprint<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">'stone.secret'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="firstmatch-keys-default" tabindex="-1"><a class="header-anchor" href="#firstmatch-keys-default"><span><code v-pre>firstMatch(keys, default?)</code></span></a></h4>
<p>Finds the first key that returns a value.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">firstMatch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'stone.secret'</span><span class="token punctuation">,</span> <span class="token string">'auth.secret'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'default-secret'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="getmany-keys" tabindex="-1"><a class="header-anchor" href="#getmany-keys"><span><code v-pre>getMany(keys)</code></span></a></h4>
<p>Retrieve multiple values at once.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">getMany</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'stone.name'</span><span class="token punctuation">,</span> <span class="token string">'stone.env'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="all" tabindex="-1"><a class="header-anchor" href="#all"><span><code v-pre>all()</code></span></a></h4>
<p>Get the full config as a plain object.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="tojson" tabindex="-1"><a class="header-anchor" href="#tojson"><span><code v-pre>toJson()</code></span></a></h4>
<p>Get the config as a JSON string.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">.</span><span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="namespaces-and-structure" tabindex="-1"><a class="header-anchor" href="#namespaces-and-structure"><span>Namespaces and Structure</span></a></h3>
<p>Stone.js uses <strong>dot-notation</strong> keys to organize config into namespaces. This structure allows modules to cleanly isolate their settings.</p>
<p>You can define:</p>
<ul>
<li><strong>Built-in namespaces</strong> → must live under <code v-pre>stone.*</code></li>
<li><strong>Custom namespaces</strong> → can be anything you want</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.kernel.skipMiddleware'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// built-in namespace</span></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'auth.jwt.secret'</span><span class="token punctuation">,</span> <span class="token string">'abc123'</span><span class="token punctuation">)</span> <span class="token comment">// custom namespace</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-declaring-custom-config" tabindex="-1"><a class="header-anchor" href="#example-declaring-custom-config"><span>Example: Declaring Custom Config</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'myApp.title'</span><span class="token punctuation">,</span> <span class="token string">'Stone Powered'</span><span class="token punctuation">)</span></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'myApp.title'</span><span class="token punctuation">)</span> <span class="token comment">// 'Stone Powered'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="access-via-proxiable" tabindex="-1"><a class="header-anchor" href="#access-via-proxiable"><span>Access via Proxiable</span></a></h4>
<p>The Blueprint extends <code v-pre>Proxiable</code>, which means you can directly access top-level keys like:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span>stone        <span class="token comment">// ✅</span></span>
<span class="line">blueprint<span class="token punctuation">.</span>stone<span class="token punctuation">.</span>kernel <span class="token comment">// ❌ (nested inside stone.kernel)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Only the <strong>first level</strong> of keys is accessible this way. To access nested values, always use the <code v-pre>get()</code> method:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'stone.kernel.middleware'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="core-namespaces" tabindex="-1"><a class="header-anchor" href="#core-namespaces"><span>Core Namespaces</span></a></h3>
<p>Here’s a list of common built-in namespaces under <code v-pre>stone.*</code>. This list is <strong>not exhaustive</strong> — each module can define its own.</p>
<table>
<thead>
<tr>
<th>Namespace</th>
<th>Dimension</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>stone.name</code></td>
<td>Global</td>
<td>Application name</td>
</tr>
<tr>
<td><code v-pre>stone.env</code></td>
<td>Global</td>
<td>Environment mode (dev/prod/test)</td>
</tr>
<tr>
<td><code v-pre>stone.debug</code></td>
<td>Global</td>
<td>Debug toggle</td>
</tr>
<tr>
<td><code v-pre>stone.timezone</code>, <code v-pre>stone.locale</code></td>
<td>Global</td>
<td>Regional settings</td>
</tr>
<tr>
<td><code v-pre>stone.fallback_locale</code></td>
<td>Global</td>
<td>Locale fallback</td>
</tr>
<tr>
<td><code v-pre>stone.secret</code></td>
<td>Global</td>
<td>Encryption key</td>
</tr>
<tr>
<td><code v-pre>stone.blueprint.middleware</code></td>
<td>Setup</td>
<td>Setup middleware list</td>
</tr>
<tr>
<td><code v-pre>stone.blueprint.defaultMiddlewarePriority</code></td>
<td>Setup</td>
<td>Default priority for middleware</td>
</tr>
<tr>
<td><code v-pre>stone.adapter</code></td>
<td>Integration</td>
<td>Current adapter config</td>
</tr>
<tr>
<td><code v-pre>stone.adapter.middleware</code></td>
<td>Integration</td>
<td>Middleware for the current adapter</td>
</tr>
<tr>
<td><code v-pre>stone.adapters</code></td>
<td>Integration</td>
<td>All adapters used</td>
</tr>
<tr>
<td><code v-pre>stone.kernel</code></td>
<td>Initialization</td>
<td>Handlers, middleware, resolvers</td>
</tr>
<tr>
<td><code v-pre>stone.kernel.middleware</code></td>
<td>Initialization</td>
<td>Middleware to register</td>
</tr>
<tr>
<td><code v-pre>stone.services</code></td>
<td>Initialization</td>
<td>Services to register</td>
</tr>
<tr>
<td><code v-pre>stone.providers</code></td>
<td>Initialization</td>
<td>Providers to register</td>
</tr>
<tr>
<td><code v-pre>stone.aliases</code></td>
<td>Initialization</td>
<td>Class aliases</td>
</tr>
<tr>
<td><code v-pre>stone.listeners</code>, <code v-pre>stone.subscribers</code></td>
<td>Initialization</td>
<td>Event handlers</td>
</tr>
<tr>
<td><code v-pre>stone.logger</code></td>
<td>Initialization</td>
<td>Logging and error reporting</td>
</tr>
<tr>
<td><code v-pre>stone.lifecycleHooks</code></td>
<td>Initialization</td>
<td>Hooks for lifecycle observation</td>
</tr>
<tr>
<td><code v-pre>stone.liveConfigurations</code></td>
<td>Initialization</td>
<td>Runtime-refreshed config</td>
</tr>
</tbody>
</table>
<h2 id="blueprint-configuration" tabindex="-1"><a class="header-anchor" href="#blueprint-configuration"><span>Blueprint Configuration</span></a></h2>
<p>Once your system starts, the <strong>Setup Dimension</strong> builds the <strong>Blueprint</strong> — and this is your chance to define exactly what your system should look like. You can configure the Blueprint <a href="#static-configuration"><strong>statically</strong></a> (without control over timing)
or <a href="#dynamic-configuration-with-middleware"><strong>dynamically</strong></a> (using setup middleware, with full control over execution order and logic).</p>
<p>This section explains how to register values, modules, services, middleware, and anything else your system needs — either <strong>declaratively</strong> or <strong>imperatively</strong>.</p>
<h3 id="static-configuration" tabindex="-1"><a class="header-anchor" href="#static-configuration"><span>Static Configuration</span></a></h3>
<p>Static configuration is the simplest way to <strong>configure the Blueprint</strong>. It allows you to define values and register modules during the setup phase, without controlling the execution order. This method is ideal for straightforward or constant configuration logic that doesn’t require introspection or conditional behavior.</p>
<Tabs id="459" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h4 id="declarative" tabindex="-1"><a class="header-anchor" href="#declarative"><span>Declarative</span></a></h4>
<p>To configure the Blueprint declaratively, use the <code v-pre>@Configuration()</code> decorator. This decorator marks a class that exposes a <code v-pre>configure(blueprint)</code> method — called automatically during the setup process.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Configuration<span class="token punctuation">,</span> IConfiguration<span class="token punctuation">,</span> IBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Configuration</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyConfig</span> <span class="token keyword">implements</span> <span class="token class-name">IConfiguration</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">configure</span><span class="token punctuation">(</span>blueprint<span class="token operator">:</span> IBlueprint<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.name'</span><span class="token punctuation">,</span> <span class="token string">'MyStoneApp'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code v-pre>configure</code> method can also be asynchronous:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> fetchSettings <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./settings'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Configuration<span class="token punctuation">,</span> IConfiguration<span class="token punctuation">,</span> IBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Configuration</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyConfig</span> <span class="token keyword">implements</span> <span class="token class-name">IConfiguration</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">configure</span><span class="token punctuation">(</span>blueprint<span class="token operator">:</span> IBlueprint<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> settings <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.name'</span><span class="token punctuation">,</span> settings<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="built-in-decorators" tabindex="-1"><a class="header-anchor" href="#built-in-decorators"><span>Built-in Decorators</span></a></h5>
<p>Many features in Stone.js offer their own decorators. For example, <code v-pre>@Service()</code>, <code v-pre>@Hook()</code>, <code v-pre>@Middleware()</code>, etc. — these often register themselves into the Blueprint automatically. Use <code v-pre>@Configuration()</code> only when no feature-specific decorator exists, or when you need to customize the configuration values.</p>
<p><strong><code v-pre>@StoneApp()</code></strong></p>
<p>The special decorator <code v-pre>@StoneApp()</code> used to define the main entry point of your application, can also initialize the system directly:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'myapp'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>This is equivalent to setting <code v-pre>blueprint.set('stone.name', 'myapp')</code>.</p>
</template>
<template #tab1="{ value, isActive }">
<h4 id="imperative" tabindex="-1"><a class="header-anchor" href="#imperative"><span>Imperative</span></a></h4>
<p>In an imperative setup, use the <code v-pre>defineBlueprintConfig()</code> utility to configure the Blueprint directly.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig<span class="token punctuation">,</span> IBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> appBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token operator">:</span> IBlueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.name'</span><span class="token punctuation">,</span> <span class="token string">'MyStoneApp'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can perform async setup here as well:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> fetchSettings <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./settings'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig<span class="token punctuation">,</span> IBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> appBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>blueprint<span class="token operator">:</span> IBlueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> settings <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.name'</span><span class="token punctuation">,</span> settings<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h3 id="dynamic-configuration" tabindex="-1"><a class="header-anchor" href="#dynamic-configuration"><span>Dynamic Configuration</span></a></h3>
<p><strong>Setup middleware</strong> (also called <strong>Blueprint middleware</strong>) allows you to configure the <strong>Blueprint</strong> dynamically. This gives you full control over the execution flow and lets you introspect modules, apply conditional logic, or modify structure based on other config.</p>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>Setup middleware runs once during the Setup Phase — before any request is received.</p>
</div>
<p>Setup middleware receives a <code v-pre>BlueprintContext</code>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">BlueprintContext</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">readonly</span> blueprint<span class="token operator">:</span> IBlueprint</span>
<span class="line">  <span class="token keyword">readonly</span> modules<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>ClassType <span class="token operator">|</span> PipeClass<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><Tabs id="518" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h4 id="declarative-1" tabindex="-1"><a class="header-anchor" href="#declarative-1"><span>Declarative</span></a></h4>
<p>To register a setup middleware declaratively, use the <code v-pre>@ConfigMiddleware()</code> decorator:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigMiddleware<span class="token punctuation">,</span> BlueprintContext<span class="token punctuation">,</span> IBlueprint<span class="token punctuation">,</span> ClassType<span class="token punctuation">,</span> NextMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">ConfigMiddleware</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> priority<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MySetupMiddleware</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">handle</span> <span class="token punctuation">(</span></span>
<span class="line">    context<span class="token operator">:</span> BlueprintContext<span class="token operator">&lt;</span>IBlueprint<span class="token punctuation">,</span> ClassType<span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">    next<span class="token operator">:</span> NextMiddleware<span class="token operator">&lt;</span>BlueprintContext<span class="token operator">&lt;</span>IBlueprint<span class="token punctuation">,</span> ClassType<span class="token operator">></span><span class="token punctuation">,</span> IBlueprint<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>IBlueprint<span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> blueprint <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>blueprint<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'stone.adapter.platform'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'browser'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.adapter.middleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> module<span class="token operator">:</span> MyMiddleware<span class="token punctuation">,</span> isClass<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> blueprint</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This example adds an integration middleware <em>only if</em> the selected platform is the browser — perfect for cross-platform configurations.</p>
</template>
<template #tab1="{ value, isActive }">
<h4 id="imperative-1" tabindex="-1"><a class="header-anchor" href="#imperative-1"><span>Imperative</span></a></h4>
<p>You can register setup middleware imperatively by adding them to <code v-pre>stone.blueprint.middleware</code> namespace.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig<span class="token punctuation">,</span> BlueprintContext<span class="token punctuation">,</span> IBlueprint<span class="token punctuation">,</span> ClassType<span class="token punctuation">,</span> NextMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Define the setup middleware</span></span>
<span class="line"><span class="token keyword">const</span> MySetupMiddleware <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span></span>
<span class="line">  context<span class="token operator">:</span> BlueprintContext<span class="token operator">&lt;</span>IBlueprint<span class="token punctuation">,</span> ClassType<span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">  next<span class="token operator">:</span> NextMiddleware<span class="token operator">&lt;</span>BlueprintContext<span class="token operator">&lt;</span>IBlueprint<span class="token punctuation">,</span> ClassType<span class="token operator">></span><span class="token punctuation">,</span> IBlueprint<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>IBlueprint<span class="token operator">></span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> blueprint <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>blueprint<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'stone.adapter.platform'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'browser'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.adapter.middleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> module<span class="token operator">:</span> MyMiddleware<span class="token punctuation">,</span> isClass<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> blueprint</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Register the setup middleware</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> appBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token operator">:</span> IBlueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.blueprint.middleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> module<span class="token operator">:</span> MySetupMiddleware <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This example adds an integration middleware <em>only if</em> the selected platform is the browser — perfect for cross-platform configurations.</p>
</template>
</Tabs>
<h3 id="live-configuration" tabindex="-1"><a class="header-anchor" href="#live-configuration"><span>Live Configuration</span></a></h3>
<p>By default, all Blueprint configuration is loaded <strong>once</strong> at application startup and remains static for the lifetime of the system.</p>
<p><strong>Live configuration</strong> allows you to define logic that re-runs and updates the blueprint <strong>at every request</strong>. This is useful when settings change dynamically (e.g., database-driven config, tenant-specific options) and must take effect immediately — without restarting the system.</p>
<p>You can define live configuration both <strong>declaratively</strong> and <strong>imperatively</strong>.</p>
<Tabs id="556" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h4 id="declarative-live-configuration" tabindex="-1"><a class="header-anchor" href="#declarative-live-configuration"><span>Declarative Live Configuration</span></a></h4>
<p>Use the <code v-pre>@Configuration()</code> decorator with <code v-pre>{ live: true }</code>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> fetchSettings <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./settings'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Configuration<span class="token punctuation">,</span> IConfiguration<span class="token punctuation">,</span> IBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Configuration</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> live<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyConfig</span> <span class="token keyword">implements</span> <span class="token class-name">IConfiguration</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">configure</span><span class="token punctuation">(</span>blueprint<span class="token operator">:</span> IBlueprint<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> settings <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.name'</span><span class="token punctuation">,</span> settings<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This configuration will be re-applied before each request, allowing values like <code v-pre>stone.name</code> to reflect up-to-date external sources.</p>
</template>
<template #tab1="{ value, isActive }">
<h4 id="imperative-live-configuration" tabindex="-1"><a class="header-anchor" href="#imperative-live-configuration"><span>Imperative Live Configuration</span></a></h4>
<p>Register a configuration module under the <code v-pre>stone.liveConfigurations</code> namespace:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> fetchSettings <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./settings'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig<span class="token punctuation">,</span> IBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">liveConfig</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>blueprint<span class="token operator">:</span> IBlueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> settings <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.name'</span><span class="token punctuation">,</span> settings<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> appBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token operator">:</span> IBlueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.liveConfigurations'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>liveConfig<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Each live configuration module runs independently on every request, ensuring your Blueprint reflects the most current data or environment.</p>
</template>
</Tabs>
<h3 id="meta-modules-and-imperative-utilities" tabindex="-1"><a class="header-anchor" href="#meta-modules-and-imperative-utilities"><span>Meta Modules and Imperative Utilities</span></a></h3>
<p>When working with the <strong>imperative API</strong>, you interact directly with Stone.js’s meta module system — a low-level, flexible system based on <strong>metaprogramming</strong>. This system is transparent in the declarative API (via decorators), but in the imperative world, <strong>you build and register meta modules yourself</strong>.</p>
<h4 id="meta-modules" tabindex="-1"><a class="header-anchor" href="#meta-modules"><span>Meta Modules</span></a></h4>
<p>A meta module is a small descriptor object that tells the system what type of module you're registering.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">MetaModule</span> <span class="token punctuation">{</span></span>
<span class="line">  module<span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">  isClass<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  isFactory<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You must use the correct flag to describe the shape of the module:</p>
<h6 id="class-module" tabindex="-1"><a class="header-anchor" href="#class-module"><span>Class module</span></a></h6>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.kernel.middleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> module<span class="token operator">:</span> MyMiddleware<span class="token punctuation">,</span> isClass<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="factory-module" tabindex="-1"><a class="header-anchor" href="#factory-module"><span>Factory module</span></a></h6>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.kernel.middleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> module<span class="token operator">:</span> createMiddleware<span class="token punctuation">,</span> isFactory<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="function-module-default" tabindex="-1"><a class="header-anchor" href="#function-module-default"><span>Function module (default)</span></a></h6>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.kernel.middleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>MyMiddleware<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// or explicitly</span></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.kernel.middleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> module<span class="token operator">:</span> MyMiddleware <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>You must always use <code v-pre>add()</code> with an array of modules for array-based namespaces. If the target namespace does not yet exist, the array will be initialized automatically.</p>
</div>
<h4 id="imperative-utilities" tabindex="-1"><a class="header-anchor" href="#imperative-utilities"><span>Imperative Utilities</span></a></h4>
<p>To simplify the registration of meta modules, Stone.js provides utility functions that wrap your modules and assign the proper metadata automatically.</p>
<p>These are especially useful when working with <strong>handlers</strong>, <strong>services</strong>, <strong>providers</strong>, and <strong>middleware</strong>.</p>
<table>
<thead>
<tr>
<th>Utility</th>
<th>Dimension</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>defineBlueprintConfig()</code></td>
<td>Setup</td>
<td>Add configuration to the Blueprint</td>
</tr>
<tr>
<td><code v-pre>defineFactoryService()</code></td>
<td>Initialization</td>
<td>Return a meta service for registration</td>
</tr>
<tr>
<td><code v-pre>defineFactoryServiceProvider()</code></td>
<td>Initialization</td>
<td>Return a meta service provider for registration</td>
</tr>
<tr>
<td><code v-pre>defineFactoryMiddleware()</code></td>
<td>Initialization</td>
<td>Return a meta factory-based middleware for registration</td>
</tr>
<tr>
<td><code v-pre>defineClassMiddleware()</code></td>
<td>Initialization</td>
<td>Return a meta class-based middleware for registration</td>
</tr>
<tr>
<td><code v-pre>defineFactoryEventHandler()</code></td>
<td>Initialization</td>
<td>Return a meta event handler for registration</td>
</tr>
<tr>
<td><code v-pre>defineErrorHandler()</code></td>
<td>Initialization</td>
<td>Return a meta error handler for registration</td>
</tr>
<tr>
<td><code v-pre>defineFactoryErrorHandler()</code></td>
<td>Initialization</td>
<td>Return a meta factory-based error handler for registration</td>
</tr>
<tr>
<td><code v-pre>defineAdapterErrorHandler()</code></td>
<td>Intregation</td>
<td>Return a meta adapter error handler for registration</td>
</tr>
<tr>
<td><code v-pre>defineFactoryEventListener()</code></td>
<td>Initialization</td>
<td>Return a meta event listener for registration</td>
</tr>
<tr>
<td><code v-pre>defineFactoryEventSubscriber()</code></td>
<td>Initialization</td>
<td>Return a meta event subscriber for registration</td>
</tr>
</tbody>
</table>
<h6 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h6>
<p>Registering a functional middleware using a utility:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineFactoryMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.kernel.middleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token function">defineFactoryMiddleware</span><span class="token punctuation">(</span>MyInitMiddleware<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If a utility function exists for your module type, prefer using it — it ensures consistency and reduces the chance of misconfigured metadata. When no utility is available yet, you can fall back to using <code v-pre>add()</code> with a properly formed meta module.</p>
<p>This low-level power is what makes the imperative API flexible and expressive. It lets you build your application exactly how you want — from scratch — while staying aligned with the Continuum Architecture.</p>
<h3 id="let-s-recap" tabindex="-1"><a class="header-anchor" href="#let-s-recap"><span>Let's Recap</span></a></h3>
<p>You can configure the Blueprint in three ways:</p>
<ul>
<li><strong>Statically</strong>, using decorators or <code v-pre>defineBlueprintConfig()</code> to set values once at startup.</li>
<li><strong>Dynamically</strong>, using setup middleware to introspect modules, apply logic conditionally, and control execution order.</li>
<li><strong>Live</strong>, using <code v-pre>@Configuration({ live: true })</code> or the <code v-pre>stone.liveConfigurations</code> namespace to reapply configuration on every request.</li>
</ul>
<p>Use static configuration for simplicity and predictability.<br>
Use dynamic middleware when setup logic depends on discovered modules or runtime conditions.<br>
Use live configuration when values must reflect external changes without restarting the system.</p>
<h2 id="setup-hooks" tabindex="-1"><a class="header-anchor" href="#setup-hooks"><span>Setup Hooks</span></a></h2>
<p>Setup hooks are lifecycle events triggered <strong>only during the Setup Phase</strong>. Their purpose is to give you visibility into the blueprint construction process — whether for logging, debugging, analytics, or performance tracking.</p>
<Mermaid id="mermaid-807" code="eJyV0T1vgzAQBuCdX3FyxJZISUgXhkrhI1MrRUrVBWUg4QCrjo1sI9Ii/nuNoS1DpVIW0Pnxe+bsui3lVPvQEl3iDYkP5JIqJEsYCq+ppOmFoTIrrQNAcsH1iX5YudlVd7Lsq4xyDAUTsi8vMu9ht14Tp+s613VyJpprmUoNL5GxAPvkhLquIMCCcnWG1eoRgkTwo8TKtONFwGqszIc+Wx9YESZHKa6olAHwTLOMYZNKhCchqrNjYWhhtLFZX/Y77GfPEBttBr5N4jtea42T1FFsB+GZwF9ixh6Yje0j738Hjaexw8/3WT2ILTiMgwrFrWKozakc14WTfjfjLiAXElLGgIsMld2lzArC3ryleMNVQzNd+uaOljllzF8c7DORwWwZzpZmqrPpdj71ZtN4tjz8IT8BENf5vw=="></Mermaid><p>These hooks do <strong>not</strong> participate in modifying the system — they exist purely for <strong>observability</strong>.</p>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>If you need to modify the blueprint dynamically, use <strong>setup middleware</strong> instead.<br>
Hooks are for <strong>observation only</strong>.</p>
</div>
<h3 id="available-setup-hooks" tabindex="-1"><a class="header-anchor" href="#available-setup-hooks"><span>Available Setup Hooks</span></a></h3>
<table>
<thead>
<tr>
<th>Hook</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>onPreparingBlueprint</code></td>
<td>Global</td>
<td>Triggered before the blueprint starts building. Useful for timing/debug.</td>
</tr>
<tr>
<td><code v-pre>onBlueprintPrepared</code></td>
<td>Global</td>
<td>Triggered once the blueprint is fully constructed.</td>
</tr>
<tr>
<td><code v-pre>onProcessingBlueprintMiddleware</code></td>
<td>Middleware-specific</td>
<td>Triggered before each middleware is processed.</td>
</tr>
<tr>
<td><code v-pre>onBlueprintMiddlewareProcessed</code></td>
<td>Middleware-specific</td>
<td>Triggered after each middleware is processed.</td>
</tr>
</tbody>
</table>
<h3 id="hook-context" tabindex="-1"><a class="header-anchor" href="#hook-context"><span>Hook Context</span></a></h3>
<p>Each setup hook provides a context object specific to its type.</p>
<h4 id="global-setup-hook-context" tabindex="-1"><a class="header-anchor" href="#global-setup-hook-context"><span>Global setup hook context</span></a></h4>
<p>Used by <code v-pre>onPreparingBlueprint</code> and <code v-pre>onBlueprintPrepared</code>.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">BlueprintContext</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">readonly</span> blueprint<span class="token operator">:</span> IBlueprint</span>
<span class="line">  <span class="token keyword">readonly</span> modules<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>ClassType <span class="token operator">|</span> PipeClass<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="middleware-hook-context" tabindex="-1"><a class="header-anchor" href="#middleware-hook-context"><span>Middleware hook context</span></a></h4>
<p>Used by <code v-pre>onProcessingBlueprintMiddleware</code> and <code v-pre>onBlueprintMiddlewareProcessed</code>.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">BlueprintMiddlewareHookContext</span> <span class="token punctuation">{</span></span>
<span class="line">  passable<span class="token operator">:</span> BlueprintContext</span>
<span class="line">  pipe<span class="token operator">:</span> PipeCustomInstance</span>
<span class="line">  instance<span class="token operator">:</span> PipeCustomInstance</span>
<span class="line">  pipes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>MetaPipe<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="registering-setup-hooks" tabindex="-1"><a class="header-anchor" href="#registering-setup-hooks"><span>Registering Setup Hooks</span></a></h3>
<p>You can register setup hooks using either the <strong>declarative API</strong> or the <strong>imperative API</strong>.</p>
<Tabs id="906" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h4 id="declarative-api" tabindex="-1"><a class="header-anchor" href="#declarative-api"><span>Declarative API</span></a></h4>
<p>Use the <code v-pre>@Hook('&lt;hookName&gt;')</code> method decorator to register a hook. Hook methods can live in any class — but for clarity and separation of concerns, it's best to place them in a dedicated observer class or service provider.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  Hook<span class="token punctuation">,</span> BlueprintContext<span class="token punctuation">,</span> BlueprintMiddlewareHookContext</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BlueprintObserver</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Hook</span></span><span class="token punctuation">(</span><span class="token string">'onBlueprintPrepared'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">blueprintReady</span><span class="token punctuation">(</span><span class="token punctuation">{</span> blueprint <span class="token punctuation">}</span><span class="token operator">:</span> BlueprintContext<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Blueprint is ready:'</span><span class="token punctuation">,</span> blueprint<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'stone.name'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Hook</span></span><span class="token punctuation">(</span><span class="token string">'onProcessingBlueprintMiddleware'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">logEachMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">{</span> pipe <span class="token punctuation">}</span><span class="token operator">:</span> BlueprintMiddlewareHookContext<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Running: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pipe<span class="token punctuation">.</span>module<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Hook methods are executed via reflection. They are <strong>not</strong> tied to class lifecycle — avoid using <code v-pre>this</code>.</p>
</template>
<template #tab1="{ value, isActive }">
<h4 id="imperative-api" tabindex="-1"><a class="header-anchor" href="#imperative-api"><span>Imperative API</span></a></h4>
<p>Register hooks manually using <code v-pre>defineBlueprintConfig()</code> and the <code v-pre>blueprint.add()</code> method.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  defineBlueprintConfig<span class="token punctuation">,</span> BlueprintContext<span class="token punctuation">,</span> BlueprintMiddlewareHookContext</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">logReady</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> blueprint <span class="token punctuation">}</span><span class="token operator">:</span> BlueprintContext<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Blueprint ready:'</span><span class="token punctuation">,</span> blueprint<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'stone.name'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">logMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> pipe <span class="token punctuation">}</span><span class="token operator">:</span> BlueprintMiddlewareHookContext<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Running middleware: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pipe<span class="token punctuation">.</span>module<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> appSetupBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.lifecycleHooks.onBlueprintPrepared'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>logReady<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.lifecycleHooks.onProcessingBlueprintMiddleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>logMiddleware<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<p>That’s it. Setup hooks give you powerful insight into how your system is assembled — without affecting behavior. Use them to instrument your system early and catch issues before runtime.</p>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>Working with the Blueprint gives you full control over your system's configuration. The following practices will help you keep it clean, consistent, and maintainable:</p>
<h4 id="use-namespaced-keys" tabindex="-1"><a class="header-anchor" href="#use-namespaced-keys"><span>Use Namespaced Keys</span></a></h4>
<p>Organize all configuration using meaningful, dot-notation keys.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'auth.jwt.secret'</span><span class="token punctuation">,</span> <span class="token string">'...'</span><span class="token punctuation">)</span></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.logger.level'</span><span class="token punctuation">,</span> <span class="token string">'debug'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Use the <code v-pre>stone.*</code> namespace for all built-in and core configurations.</li>
<li>Use custom namespaces (e.g. <code v-pre>auth.*</code>, <code v-pre>myApp.*</code>) for project-specific or third-party modules.</li>
</ul>
<h4 id="prefer-static-configuration-when-possible" tabindex="-1"><a class="header-anchor" href="#prefer-static-configuration-when-possible"><span>Prefer Static Configuration When Possible</span></a></h4>
<p>Use static configuration (<code v-pre>@Configuration</code>, <code v-pre>defineBlueprintConfig</code>) for simple, constant values that don’t depend on runtime discovery.</p>
<p>It’s easier to read, faster to process, and encourages declarative design.</p>
<h4 id="use-setup-middleware-for-dynamic-logic" tabindex="-1"><a class="header-anchor" href="#use-setup-middleware-for-dynamic-logic"><span>Use Setup Middleware for Dynamic Logic</span></a></h4>
<p>If your configuration depends on conditions, external input, or module introspection, use setup middleware.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">ConfigMiddleware</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MySetupMiddleware</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Middleware gives you:</p>
<ul>
<li>Execution order control via <code v-pre>priority</code></li>
<li>Access to all discovered modules</li>
<li>The ability to modify the blueprint based on context</li>
</ul>
<h4 id="avoid-runtime-mutations" tabindex="-1"><a class="header-anchor" href="#avoid-runtime-mutations"><span>Avoid Runtime Mutations</span></a></h4>
<p>While the Blueprint is mutable, it is designed to be constructed once and used across dimensions. Avoid modifying it at runtime unless absolutely necessary.</p>
<p>If you must mutate it, document the reasoning clearly and isolate the change.</p>
<h4 id="avoid-this-in-hooks" tabindex="-1"><a class="header-anchor" href="#avoid-this-in-hooks"><span>Avoid <code v-pre>this</code> in Hooks</span></a></h4>
<p>Hook methods are called via reflection, independently of any class lifecycle. Do not rely on <code v-pre>this</code> in hook methods — prefer static logic or external utilities.</p>
<h4 id="use-utility-functions-for-clarity" tabindex="-1"><a class="header-anchor" href="#use-utility-functions-for-clarity"><span>Use Utility Functions for Clarity</span></a></h4>
<p>Use blueprint utility functions like <code v-pre>defineFactoryMiddleware()</code> or <code v-pre>defineFactoryService()</code> to register meta modules cleanly.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.kernel.middleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token function">defineFactoryMiddleware</span><span class="token punctuation">(</span>MyInitMiddleware<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>These helpers reduce boilerplate and make intent explicit.</p>
<h4 id="keep-hook-logic-lightweight" tabindex="-1"><a class="header-anchor" href="#keep-hook-logic-lightweight"><span>Keep Hook Logic Lightweight</span></a></h4>
<p>Setup hooks are for <strong>observation only</strong>. Avoid using them for any mutation or heavy logic.</p>
<p>Use them for:</p>
<ul>
<li>Logging</li>
<li>Metrics</li>
<li>Timing</li>
<li>Debugging system setup behavior</li>
</ul>
<h4 id="document-your-custom-namespaces" tabindex="-1"><a class="header-anchor" href="#document-your-custom-namespaces"><span>Document Your Custom Namespaces</span></a></h4>
<p>If you define your own configuration structure, document it clearly for future contributors. This ensures consistent usage and easier onboarding.</p>
<p>Following these practices ensures your blueprint remains structured, predictable, and introspectable — keeping your Stone.js system aligned with the Continuum Architecture.</p>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>The Blueprint is the foundation of your Stone.js system. It defines all configurations, registered modules, middleware, lifecycle hooks, and services — built once during setup, then accessed across all dimensions.</p>
<p>You can populate the Blueprint in three primary ways:</p>
<ul>
<li><strong>Statically</strong>, using <code v-pre>@Configuration()</code> or <code v-pre>defineBlueprintConfig()</code> to set values during setup</li>
<li><strong>Dynamically</strong>, using setup middleware to introspect and register modules based on context</li>
<li><strong>Live</strong>, using <code v-pre>@Configuration({ live: true })</code> or the <code v-pre>stone.liveConfigurations</code> namespace to reapply configuration on every request.</li>
</ul>
<p>You can also observe the setup process using <strong>Setup Hooks</strong>, which allow you to track the blueprint's construction without mutating it.</p>
<p>For imperative applications, the <code v-pre>defineBlueprintConfig()</code> function can be used <strong>anywhere</strong> to register values, hooks, services, and modules. However, there must be <strong>one and only one</strong> call to <code v-pre>defineBlueprintConfig</code> that acts as the <strong>main entry point</strong>.</p>
<p>This entry-point Blueprint must be explicitly imported and set as the root of the system:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig<span class="token punctuation">,</span> stoneBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> mainBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>stoneBlueprint<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once defined, the Blueprint becomes your system’s introspectable, shareable configuration — powering every adapter, every request, and every dimension.</p>
</div></template>


