<template><div><p>Sometimes you need dynamic segments in your route paths, like <code v-pre>/users/:id</code>, to capture values directly from the URL. These segments are called <strong>route parameters</strong>.</p>
<p>Stone.js Router supports powerful and expressive parameter handling for both <code v-pre>path</code> and <code v-pre>domain</code> segments. You can define parameters that are required, optional, repeatable, or even validated by regex rules.</p>
<p>All route parameters are automatically extracted and made available via the <code v-pre>event.params</code> object inside your event handler.</p>
<p>Stone Router gives you flexible syntax choices, sensible defaults, and powerful configuration options, all while keeping routing simple and intuitive.</p>
<h2 id="dynamic-parameters" tabindex="-1"><a class="header-anchor" href="#dynamic-parameters"><span>Dynamic Parameters</span></a></h2>
<p>Dynamic parameters allow you to define flexible routes that match variable values in the path or domain. Stone Router supports two syntaxes:</p>
<ul>
<li><code v-pre>/users/:id</code>, <strong>Colon-based</strong> (preferred in this documentation)</li>
<li><code v-pre>/users/{id}</code>, <strong>Brace-based</strong></li>
</ul>
<p>Both are supported and behave identically, but <strong>you should stick to one style for consistency</strong>. We'll use the colon syntax throughout.</p>
<h3 id="path-parameters" tabindex="-1"><a class="header-anchor" href="#path-parameters"><span>Path Parameters</span></a></h3>
<p>To define dynamic segments in the path, use a colon followed by the parameter name:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/users/:id/articles/:slug'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This route will match:</p>
<ul>
<li><code v-pre>/users/12/articles/javascript</code></li>
<li><code v-pre>/users/john/articles/stone.js</code></li>
</ul>
<p>And extract:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">event<span class="token punctuation">.</span>params <span class="token comment">// => { id: '12', slug: 'javascript' }</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="prefixed-parameters" tabindex="-1"><a class="header-anchor" href="#prefixed-parameters"><span>Prefixed Parameters</span></a></h3>
<p>You can add a prefix to your parameters directly in the path:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/users/user-:id/articles/article-:slug'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will match:</p>
<ul>
<li><code v-pre>/users/user-12/articles/article-javascript</code></li>
<li><code v-pre>/users/user-john/articles/article-stone.js</code></li>
</ul>
<p>And extract:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">event<span class="token punctuation">.</span>params <span class="token comment">// => { id: '12', slug: 'javascript' }</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="global-path-prefix" tabindex="-1"><a class="header-anchor" href="#global-path-prefix"><span>Global Path Prefix</span></a></h3>
<p>You can define a global prefix that is automatically prepended to <strong>all route paths</strong>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Setup time</span></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.router.prefix'</span><span class="token punctuation">,</span> <span class="token string">'v1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Runtime</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> prefix<span class="token operator">:</span> <span class="token string">'v1'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For example, defining a path <code v-pre>/users/:id</code> becomes accessible as <code v-pre>/v1/users/:id</code>.</p>
<p>This is especially useful for versioning APIs.</p>
<h3 id="domain-parameters" tabindex="-1"><a class="header-anchor" href="#domain-parameters"><span>Domain Parameters</span></a></h3>
<p>To define dynamic segments in the <strong>domain</strong>, you must use <strong>brace-based</strong> syntax:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  domain<span class="token operator">:</span> <span class="token string">'{subDomain}.example.com'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will match:</p>
<ul>
<li><code v-pre>dev.example.com</code> → <code v-pre>{ subDomain: 'dev' }</code></li>
<li><code v-pre>admin.example.com</code> → <code v-pre>{ subDomain: 'admin' }</code></li>
</ul>
<p>Route parameters in the domain are extracted the same way and made available via <code v-pre>event.params</code>.</p>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>Colon syntax (<code v-pre>:subDomain.example.com</code>) is <strong>not supported</strong> for domain segments.</p>
</div>
<h2 id="strict-segment" tabindex="-1"><a class="header-anchor" href="#strict-segment"><span>Strict Segment</span></a></h2>
<p>By default, Stone Router is forgiving. Route matching is:</p>
<ul>
<li><strong>Case-insensitive</strong></li>
<li><strong>Slash-tolerant</strong> (trailing slashes are ignored)</li>
</ul>
<p>For example, a route defined as <code v-pre>/articles/javascript/functions</code> will match:</p>
<ul>
<li><code v-pre>/ARTICLES/JavaScript/FUNCTIONS/</code></li>
<li><code v-pre>/articles/javascript/functions</code></li>
<li><code v-pre>/articles/javascript/functions/</code></li>
</ul>
<p>This default behavior improves flexibility, but sometimes, you want precision.</p>
<h3 id="enabling-strict-mode" tabindex="-1"><a class="header-anchor" href="#enabling-strict-mode"><span>Enabling Strict Mode</span></a></h3>
<p>To enforce strict matching, <strong>case-sensitive</strong> and <strong>exact slash position</strong>, you can enable the <code v-pre>strict</code> option:</p>
<h4 id="per-route" tabindex="-1"><a class="header-anchor" href="#per-route"><span>Per Route</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/Articles/JavaScript/Functions'</span><span class="token punctuation">,</span></span>
<span class="line">  strict<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Only matches <code v-pre>/Articles/JavaScript/Functions</code> exactly (with case and no trailing slash).</p>
<h4 id="globally-setup-time" tabindex="-1"><a class="header-anchor" href="#globally-setup-time"><span>Globally (Setup Time)</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.router.strict'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="globally-runtime" tabindex="-1"><a class="header-anchor" href="#globally-runtime"><span>Globally (Runtime)</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> strict<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This ensures <strong>all</strong> routes are matched strictly across your app, helping you avoid unintentional matches in critical APIs.</p>
<h2 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters"><span>Optional Parameters</span></a></h2>
<p>Optional parameters allow a route to match whether a given segment is present or not.</p>
<p>You define an optional parameter by adding a <code v-pre>?</code> at the end of its name:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/users/:id/articles/:slug?'</span><span class="token punctuation">,</span></span>
<span class="line">  domain<span class="token operator">:</span> <span class="token string">'{subDomain?}.example.com'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This route will match all of the following:</p>
<ul>
<li><code v-pre>/users/12/articles/javascript</code></li>
<li><code v-pre>/users/12/articles</code></li>
<li><code v-pre>/users/12/articles/</code></li>
</ul>
<p>And extract:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">event<span class="token punctuation">.</span>params <span class="token comment">// => { id: '12', slug: 'javascript' } // or slug: undefined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>For the domain:</p>
<ul>
<li><code v-pre>dev.example.com</code> → <code v-pre>{ subDomain: 'dev' }</code></li>
<li><code v-pre>example.com</code> → <code v-pre>{ subDomain: undefined }</code></li>
</ul>
<h3 id="important-notes" tabindex="-1"><a class="header-anchor" href="#important-notes"><span>Important Notes</span></a></h3>
<ul>
<li>Optional parameters must always be <strong>at the end</strong> of the path or domain.</li>
<li>If an optional parameter is not present, its value will be <code v-pre>undefined</code> (unless a default is configured, more on that later).</li>
<li>Optional segments cannot be followed by required segments, as it would make matching ambiguous.</li>
</ul>
<p>Bad example (don’t do this):</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// ❌ Ambiguous! Don't place required params after optional ones</span></span>
<span class="line">path<span class="token operator">:</span> <span class="token string">'/users/:slug?/edit/:id'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Stick to clean, predictable structures to avoid routing chaos.</p>
<h2 id="repeatable-parameters" tabindex="-1"><a class="header-anchor" href="#repeatable-parameters"><span>Repeatable Parameters</span></a></h2>
<p>Repeatable parameters let you match <strong>multiple path or domain segments</strong> using a single parameter.
This is useful when a parameter can contain slashes (<code v-pre>/</code>) or repeat multiple times.</p>
<p>Stone Router supports two types of repeatable parameters:</p>
<ul>
<li><strong>Required repeatable</strong> → <code v-pre>+</code></li>
<li><strong>Optional repeatable</strong> → <code v-pre>*</code></li>
</ul>
<h3 id="required-repeatable-parameters" tabindex="-1"><a class="header-anchor" href="#required-repeatable-parameters"><span>Required Repeatable Parameters (<code v-pre>+</code>)</span></a></h3>
<p>A required repeatable parameter must match <strong>one or more segments</strong>.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/articles/:slug+'</span><span class="token punctuation">,</span></span>
<span class="line">  domain<span class="token operator">:</span> <span class="token string">'{subDomain+}.example.com'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Matches:</p>
<ul>
<li><code v-pre>/articles/javascript/functions/arrow-function</code></li>
<li><code v-pre>/articles/javascript/functions</code></li>
<li><code v-pre>/articles/javascript</code></li>
</ul>
<p>But <strong>not</strong> <code v-pre>/articles</code></p>
<p>Extracts:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">event<span class="token punctuation">.</span>params<span class="token punctuation">.</span>slug <span class="token comment">// => "javascript/functions/arrow-function"</span></span>
<span class="line">event<span class="token punctuation">.</span>params<span class="token punctuation">.</span>subDomain <span class="token comment">// => "dev.admin"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Domain examples:</p>
<ul>
<li><code v-pre>dev.example.com</code> → <code v-pre>subDomain: 'dev'</code></li>
<li><code v-pre>admin.dev.example.com</code> → <code v-pre>subDomain: 'admin.dev'</code></li>
<li><code v-pre>www.admin.dev.example.com</code> → <code v-pre>subDomain: 'www.admin.dev'</code></li>
</ul>
<h3 id="optional-repeatable-parameters" tabindex="-1"><a class="header-anchor" href="#optional-repeatable-parameters"><span>Optional Repeatable Parameters (<code v-pre>*</code>)</span></a></h3>
<p>An optional repeatable parameter can match <strong>zero or more segments</strong>.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/articles/:slug*'</span><span class="token punctuation">,</span></span>
<span class="line">  domain<span class="token operator">:</span> <span class="token string">'{subDomain*}.example.com'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Matches:</p>
<ul>
<li><code v-pre>/articles/javascript/functions/arrow-function</code></li>
<li><code v-pre>/articles/javascript/functions</code></li>
<li><code v-pre>/articles/javascript</code></li>
<li><code v-pre>/articles</code></li>
</ul>
<p>Extracts:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">event<span class="token punctuation">.</span>params<span class="token punctuation">.</span>slug <span class="token comment">// => can be "javascript/functions" or undefined</span></span>
<span class="line">event<span class="token punctuation">.</span>params<span class="token punctuation">.</span>subDomain <span class="token comment">// => can be "admin.dev" or undefined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h3>
<ul>
<li>Repeatable parameters <strong>consume slashes</strong> in the value (e.g., <code v-pre>functions/arrow-function</code>)</li>
<li>Use repeatable params only when your routing requires deep flexibility (like nested paths or subdomains)</li>
<li>Don’t mix repeatable and non-repeatable parameters of the same name</li>
</ul>
<h2 id="default-parameters" tabindex="-1"><a class="header-anchor" href="#default-parameters"><span>Default Parameters</span></a></h2>
<p>Default parameters let you assign fallback values when a parameter is <strong>optional and not provided</strong> in the route.
They’re especially useful to ensure consistency and reduce conditional logic in your handlers.</p>
<h3 id="local-defaults-per-route" tabindex="-1"><a class="header-anchor" href="#local-defaults-per-route"><span>Local Defaults (Per Route)</span></a></h3>
<p>Use the <code v-pre>defaults</code> option in your route definition:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/users/:id/articles/:slug?'</span><span class="token punctuation">,</span></span>
<span class="line">  domain<span class="token operator">:</span> <span class="token string">'{subDomain?}.example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  defaults<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    slug<span class="token operator">:</span> <span class="token string">'default-article'</span><span class="token punctuation">,</span></span>
<span class="line">    subDomain<span class="token operator">:</span> <span class="token string">'dev'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Given the following requests:</p>
<ul>
<li>
<p><code v-pre>example.com/users/12/articles/javascript</code>
→ <code v-pre>params = { id: '12', slug: 'javascript', subDomain: 'dev' }</code></p>
</li>
<li>
<p><code v-pre>example.com/users/12/articles</code>
→ <code v-pre>params = { id: '12', slug: 'default-article', subDomain: 'dev' }</code></p>
</li>
<li>
<p><code v-pre>admin.example.com/users/12/articles</code>
→ <code v-pre>params = { id: '12', slug: 'default-article', subDomain: 'admin' }</code></p>
</li>
</ul>
<h3 id="global-defaults" tabindex="-1"><a class="header-anchor" href="#global-defaults"><span>Global Defaults</span></a></h3>
<p>To apply defaults across all routes:</p>
<h4 id="setup-time" tabindex="-1"><a class="header-anchor" href="#setup-time"><span>Setup Time</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.router.defaults'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">23</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="runtime" tabindex="-1"><a class="header-anchor" href="#runtime"><span>Runtime</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> defaults<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">23</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This is useful when you want fallback values globally for common parameters like <code v-pre>lang</code>, <code v-pre>locale</code>, <code v-pre>version</code>, or <code v-pre>tenant</code>.</p>
<h3 id="important-notes-1" tabindex="-1"><a class="header-anchor" href="#important-notes-1"><span>Important Notes</span></a></h3>
<ul>
<li>Defaults only apply to <strong>optional parameters</strong></li>
<li>If a value is explicitly present in the URL, it overrides the default</li>
<li>Defaults do <strong>not</strong> work for required or repeatable parameters</li>
</ul>
<h2 id="validation-rules" tabindex="-1"><a class="header-anchor" href="#validation-rules"><span>Validation Rules</span></a></h2>
<p>Stone Router supports built-in validation for route parameters using <strong>regex rules</strong>.
This lets you enforce format constraints directly in your route definitions.</p>
<p>There are three levels of validation:</p>
<ul>
<li><strong>Implicit Rules</strong>, inline regex in the path or domain</li>
<li><strong>Explicit Rules</strong>, using the <code v-pre>rules</code> option</li>
<li><strong>Global Rules</strong>, applied to all routes</li>
</ul>
<h3 id="implicit-rules" tabindex="-1"><a class="header-anchor" href="#implicit-rules"><span>Implicit Rules</span></a></h3>
<p>Add regex patterns directly inside your path or domain parameters:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  domain<span class="token operator">:</span> <span class="token string">'{subDomain([a-z]+)}.example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/users/:id(\\d+)/articles/:slug(.+)?'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This matches:</p>
<ul>
<li><code v-pre>admin.example.com/users/42/articles/stone-router</code> ✅</li>
<li><code v-pre>admin.example.com/users/abc/articles/stone-router</code> ❌ (fails <code v-pre>id</code> validation)</li>
</ul>
<p><strong>Syntax Notes:</strong></p>
<ul>
<li>Use parentheses <code v-pre>()</code> after the parameter name</li>
<li>Escape backslashes in strings (<code v-pre>\\d+</code> not <code v-pre>\d+</code>)</li>
<li>Works with optional params too (e.g., <code v-pre>:slug(.+)?</code>)</li>
</ul>
<h3 id="explicit-rules" tabindex="-1"><a class="header-anchor" href="#explicit-rules"><span>Explicit Rules</span></a></h3>
<p>Define all regex constraints in a clean object with the <code v-pre>rules</code> property:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  domain<span class="token operator">:</span> <span class="token string">'{subDomain}.example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/users/:id/articles/:slug?'</span><span class="token punctuation">,</span></span>
<span class="line">  rules<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    id<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">    slug<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">    subDomain<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-z]+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Benefits:</strong></p>
<ul>
<li>More readable and maintainable</li>
<li>No need to escape backslashes</li>
<li>Easy to reuse and refactor</li>
</ul>
<h3 id="global-validation-rules" tabindex="-1"><a class="header-anchor" href="#global-validation-rules"><span>Global Validation Rules</span></a></h3>
<p>You can enforce validation patterns across all routes for common parameters like <code v-pre>id</code>, <code v-pre>lang</code>, or <code v-pre>env</code>.</p>
<h4 id="setup-time-1" tabindex="-1"><a class="header-anchor" href="#setup-time-1"><span>Setup Time</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.router.rules'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  id<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">  lang<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-z]{2}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="runtime-1" tabindex="-1"><a class="header-anchor" href="#runtime-1"><span>Runtime</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  rules<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    id<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">    lang<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-z]{2}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>These rules will apply to <strong>all parameters with matching names</strong>, unless overridden locally.</p>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>Here are some practical tips to master parameter usage with Stone Router:</p>
<h4 id="stick-to-one-syntax" tabindex="-1"><a class="header-anchor" href="#stick-to-one-syntax"><span>Stick to One Syntax</span></a></h4>
<ul>
<li>Prefer <code v-pre>:param</code> over <code v-pre>{param}</code> in paths for consistency and clarity</li>
<li>Use <code v-pre>{param}</code> only when defining <strong>domain</strong> parameters</li>
</ul>
<h4 id="keep-optional-parameters-at-the-end" tabindex="-1"><a class="header-anchor" href="#keep-optional-parameters-at-the-end"><span>Keep Optional Parameters at the End</span></a></h4>
<ul>
<li>Always define optional parameters (<code v-pre>:slug?</code>) <strong>after</strong> required ones</li>
<li>Avoid ambiguous routes like <code v-pre>/users/:slug?/edit/:id</code>, they lead to confusion and bugs</li>
</ul>
<h4 id="use-defaults-strategically" tabindex="-1"><a class="header-anchor" href="#use-defaults-strategically"><span>Use Defaults Strategically</span></a></h4>
<ul>
<li>Define default values for optional parameters to simplify handler logic</li>
<li>Use global defaults sparingly—only for truly universal parameters (like <code v-pre>lang</code>, <code v-pre>tenant</code>, or <code v-pre>env</code>)</li>
</ul>
<h4 id="validate-inputs-at-the-edge" tabindex="-1"><a class="header-anchor" href="#validate-inputs-at-the-edge"><span>Validate Inputs at the Edge</span></a></h4>
<ul>
<li>Enforce expected formats using validation rules directly in the route (e.g., <code v-pre>:id(\\d+)</code>)</li>
<li>Combine <strong>implicit</strong> and <strong>explicit</strong> rules when needed, but prefer explicit for complex routes</li>
</ul>
<h4 id="avoid-overusing-repeatable-parameters" tabindex="-1"><a class="header-anchor" href="#avoid-overusing-repeatable-parameters"><span>Avoid Overusing Repeatable Parameters</span></a></h4>
<ul>
<li>Repeatable params (<code v-pre>+</code>, <code v-pre>*</code>) are powerful but can reduce clarity</li>
<li>Use them only when slashes are meaningful data (e.g., nested paths, categories)</li>
</ul>
<h4 id="use-global-config-for-consistency" tabindex="-1"><a class="header-anchor" href="#use-global-config-for-consistency"><span>Use Global Config for Consistency</span></a></h4>
<ul>
<li>Set global <code v-pre>prefix</code>, <code v-pre>strict</code>, <code v-pre>defaults</code>, and <code v-pre>rules</code> in one place using <code v-pre>blueprint.set()</code> or <code v-pre>router.configure()</code></li>
<li>This ensures uniform behavior and avoids surprises across routes</li>
</ul>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>Route parameters in Stone Router give you powerful control over how URLs are matched, parsed, and processed.</p>
<p>You can define:</p>
<ul>
<li><strong>Dynamic segments</strong> in paths and domains</li>
<li><strong>Optional</strong> (<code v-pre>?</code>) and <strong>repeatable</strong> (<code v-pre>+</code>, <code v-pre>*</code>) parameters</li>
<li><strong>Default values</strong> for missing optional parameters</li>
<li><strong>Regex validation rules</strong> at the route or global level</li>
</ul>
<p>These parameters are always available in <code v-pre>event.params</code>, giving you full access to the dynamic data of your request context.</p>
<p>When in doubt:</p>
<ul>
<li>Use <strong>colon syntax</strong> (<code v-pre>:id</code>) for paths, and <strong>brace syntax</strong> (<code v-pre>{sub}</code>) for domains</li>
<li>Keep <strong>optional parameters last</strong>, and use <strong>default values</strong> for cleaner code</li>
<li>Use <strong>validation rules</strong> to guard your routes and avoid writing logic downstream</li>
</ul>
<p>Stone Router makes advanced parameter matching feel simple, just define what you need, and the router handles the rest.</p>
</div></template>


