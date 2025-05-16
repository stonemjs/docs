<template><div><p>In Stone.js, the <code v-pre>OutgoingResponse</code> represents the <strong>effect</strong> of your application, the answer to an incoming intention. Just as the <code v-pre>IncomingEvent</code> expresses what the user or system wants, the <code v-pre>OutgoingResponse</code> expresses what your domain wants to say back.</p>
<p>It travels in the <strong>reverse direction</strong> of an <code v-pre>IncomingEvent</code>, moving from the functional domain, through the initialization layer, and finally into the integration layer, where it’s interpreted by an adapter (HTTP, Browser, CLI, etc.).</p>
<p>Responses in Stone.js are fully <strong>context-aware</strong>. They support:</p>
<p>returning plain values (like strings or objects)</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Handle the event and return a response</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>using rich response classes (<code v-pre>OutgoingHttpResponse</code>, <code v-pre>JsonResponse</code>, <code v-pre>BinaryFileResponse</code>, etc.)</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> JsonResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setting status codes, headers, cookies, and more</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">return</span> OutgoingHttpResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  statusCode<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">  content<span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  headers<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">"X-Custom-Header"</span><span class="token operator">:</span> <span class="token string">"value"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">"session"</span><span class="token punctuation">,</span> <span class="token string">"abc123"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> httpOnly<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and handling advanced content negotiation, caching, and preparation logic</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">return</span> OutgoingHttpResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> statusCode<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">text</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'Hello world!'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">html</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'&lt;p>Hello world!&lt;/p>'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">json</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>While Stone.js automatically wraps primitive return values in an <code v-pre>OutgoingResponse</code> for event handlers, Initialization middleware must explicitly return an <code v-pre>OutgoingResponse</code> or one of its subclasses.</p>
</div>
<p>This gives you a unified, declarative or programmatic way to represent everything from a JSON API payload to a file download, a browser redirect, or a CLI output, all part of the same continuum.</p>
<p>In the Continuum, every intention deserves a meaningful effect.</p>
<h2 id="using-outgoingresponse" tabindex="-1"><a class="header-anchor" href="#using-outgoingresponse"><span>Using <code v-pre>OutgoingResponse</code></span></a></h2>
<p>The <code v-pre>OutgoingResponse</code> is the base class for all response types in Stone.js. It’s a lightweight, dimension-neutral response that lets you set content, status codes, and preparation logic, all without tying your app to a specific adapter like HTTP or Browser.</p>
<p>You can use it:</p>
<ul>
<li><strong>explicitly</strong>, via <code v-pre>OutgoingResponse.create(...)</code>,</li>
<li>or <strong>implicitly</strong>, by returning a value from your event handler (e.g., <code v-pre>return 'Hello World'</code>), in which case Stone.js wraps it for you.</li>
</ul>
<h3 id="when-to-use-it" tabindex="-1"><a class="header-anchor" href="#when-to-use-it"><span>When to Use It</span></a></h3>
<p>Use <code v-pre>OutgoingResponse</code> directly when:</p>
<ul>
<li>You’re building a response in a CLI, test, simple cloud function, or abstract context.</li>
<li>You don’t need headers, cookies, or transport-specific behavior.</li>
<li>You want a clean and portable way to emit content for non-HTTP or non-Browser contexts.</li>
</ul>
<h3 id="static-creation" tabindex="-1"><a class="header-anchor" href="#static-creation"><span>Static Creation</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> response <span class="token operator">=</span> OutgoingResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  content<span class="token operator">:</span> <span class="token string">'Operation complete'</span><span class="token punctuation">,</span></span>
<span class="line">  statusCode<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api-methods" tabindex="-1"><a class="header-anchor" href="#api-methods"><span>API Methods</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">response</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">201</span><span class="token punctuation">,</span> <span class="token string">'Created'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Resource created'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>setStatus(code, message?)</code></td>
<td>Set HTTP-style status code and optional status text</td>
</tr>
<tr>
<td><code v-pre>setContent(content)</code></td>
<td>Set the body of the response</td>
</tr>
</tbody>
</table>
<p>Even if it’s not an HTTP response, you can still set a status code and message. This is useful for CLI or other non-HTTP contexts where you want to convey success or failure.</p>
<h2 id="using-outgoingbrowserresponse" tabindex="-1"><a class="header-anchor" href="#using-outgoingbrowserresponse"><span>Using <code v-pre>OutgoingBrowserResponse</code></span></a></h2>
<p>The <code v-pre>OutgoingBrowserResponse</code> is a frontend-only response type. It mimics the behavior of backend responses, but it’s meant strictly for the <strong>browser environment</strong>, whether you're in a full SPA or using client-side hydration in an SSR app.</p>
<p>This class exists to preserve a <strong>unified API experience</strong> between frontend and backend responses in Stone.js. It allows you to return meaningful responses within a browser-based flow, including redirections, without dealing with transport-specific logic like headers or cookies.</p>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> OutgoingBrowserResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/browser-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> OutgoingBrowserResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  content<span class="token operator">:</span> <span class="token string">'&lt;h1>Welcome!&lt;/h1>'</span><span class="token punctuation">,</span></span>
<span class="line">  statusCode<span class="token operator">:</span> <span class="token number">200</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This response will be interpreted by the browser adapter, it’s never sent as an HTTP response.</p>
<h3 id="api-helpers" tabindex="-1"><a class="header-anchor" href="#api-helpers"><span>API Helpers</span></a></h3>
<p><code v-pre>OutgoingBrowserResponse</code> provides status code helpers, useful for guards or logic conditions in middlewares:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">response<span class="token punctuation">.</span><span class="token function">is2xx</span><span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment">// true if 2xx success</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">isError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// true if 4xx or 5xx</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">isOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment">// true if exactly 200</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">isNotFound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// true if 404</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>These help enforce logic consistency even on the client side.</p>
<h3 id="redirecting-in-the-browser" tabindex="-1"><a class="header-anchor" href="#redirecting-in-the-browser"><span>Redirecting in the Browser</span></a></h3>
<p>When you want to programmatically <strong>redirect the user to a new frontend route</strong>, use <code v-pre>RedirectBrowserResponse</code>. This is typically done in middlewares, for example to protect routes:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> RedirectBrowserResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/browser-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">authMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> securityService <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>event<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>securityService<span class="token punctuation">.</span><span class="token function">isAuthenticated</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> RedirectBrowserResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token operator">:</span> <span class="token string">'/login'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This triggers the browser adapter to invoke a frontend router redirect. It:</p>
<ul>
<li><strong>does not</strong> set HTTP headers like <code v-pre>Location</code>,</li>
<li><strong>does not</strong> support 301/302 status codes,</li>
<li><strong>does not</strong> output HTML or text fallbacks.</li>
</ul>
<p>Instead, it signals the adapter to reroute using the frontend’s router (<code v-pre>window.history.pushState()</code> or SPA-equivalent). It’s perfect for <strong>short-circuiting the pipeline</strong> during initialization or middleware execution.</p>
<h4 id="when-to-use-redirectbrowserresponse" tabindex="-1"><a class="header-anchor" href="#when-to-use-redirectbrowserresponse"><span>When to Use <code v-pre>RedirectBrowserResponse</code></span></a></h4>
<ul>
<li>You’re in a <strong>browser app (SPA/PWA)</strong>, not an HTTP server.</li>
<li>You want to redirect based on middleware logic.</li>
<li>You want to unify your redirect logic with backend apps for code symmetry.</li>
<li>Your app has <strong>multiple routes</strong> managed by a router (not mono-route).</li>
</ul>
<h2 id="using-outgoinghttpresponse" tabindex="-1"><a class="header-anchor" href="#using-outgoinghttpresponse"><span>Using <code v-pre>OutgoingHttpResponse</code></span></a></h2>
<p>The <code v-pre>OutgoingHttpResponse</code> is the main response class for <strong>HTTP server</strong> environments in Stone.js, including REST APIs, SSR applications, and any backend dealing with HTTP transport.</p>
<p>It extends the base <code v-pre>OutgoingResponse</code>, and brings full HTTP capabilities:</p>
<ul>
<li>status codes and messages,</li>
<li>headers,</li>
<li>cookies,</li>
<li>content negotiation,</li>
<li>ETag and cache control.</li>
</ul>
<p>It ensures your API responses are fully formed, properly negotiable, secure, and optimized for client expectations.</p>
<h3 id="creating-an-outgoinghttpresponse" tabindex="-1"><a class="header-anchor" href="#creating-an-outgoinghttpresponse"><span>Creating an <code v-pre>OutgoingHttpResponse</code></span></a></h3>
<p>You can create a new HTTP response by using the static <code v-pre>create()</code> method:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> OutgoingHttpResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> OutgoingHttpResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  content<span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'OK'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  statusCode<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">  headers<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">'X-Powered-By'</span><span class="token operator">:</span> <span class="token string">'Stone.js'</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also build it progressively with fluent chaining:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">return</span> OutgoingHttpResponse</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">201</span><span class="token punctuation">,</span> <span class="token string">'Created'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Location'</span><span class="token punctuation">,</span> <span class="token string">'/items/42'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="core-capabilities" tabindex="-1"><a class="header-anchor" href="#core-capabilities"><span>Core Capabilities</span></a></h3>
<h4 id="_1-status-codes-and-messages" tabindex="-1"><a class="header-anchor" href="#_1-status-codes-and-messages"><span>1. Status Codes and Messages</span></a></h4>
<p>You can control the status code and status message:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">,</span> <span class="token string">'Not Found'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>If no message is given, it automatically uses standard HTTP messages via the <code v-pre>statuses</code> package.</p>
<p><strong>Convenience Methods</strong>:</p>
<ul>
<li><code v-pre>isOk()</code>, <code v-pre>is1xx()</code>, <code v-pre>is2xx()</code>, <code v-pre>is3xx()</code>, <code v-pre>is4xx()</code>, <code v-pre>is5xx()</code></li>
<li><code v-pre>isError()</code>, <code v-pre>isNotError()</code></li>
<li><code v-pre>isEmpty()</code> (e.g., 204, 304)</li>
<li><code v-pre>isRedirect()</code></li>
<li><code v-pre>isUnauthorized()</code>, <code v-pre>isForbidden()</code>, <code v-pre>isNotFound()</code></li>
</ul>
<p>These help classify the response easily without manual checks. Useful for middleware or guards.</p>
<h4 id="_2-headers-management" tabindex="-1"><a class="header-anchor" href="#_2-headers-management"><span>2. Headers Management</span></a></h4>
<p>Set, get, append, and remove headers easily:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">response</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'X-Custom-Header'</span><span class="token punctuation">,</span> <span class="token string">'Hello'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">appendHeader</span><span class="token punctuation">(</span><span class="token string">'Set-Cookie'</span><span class="token punctuation">,</span> <span class="token string">'token=123'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">removeHeader</span><span class="token punctuation">(</span><span class="token string">'X-Unwanted-Header'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Retrieve headers:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">response<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">'X-Custom-Header'</span><span class="token punctuation">)</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">getHeaderNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// All header keys</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Special behavior</p>
<p>Automatically manages <code v-pre>Content-Type</code> charset for text-based types.</p>
</div>
<h4 id="_3-content-handling" tabindex="-1"><a class="header-anchor" href="#_3-content-handling"><span>3. Content Handling</span></a></h4>
<p>Set the response content:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">response<span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> user<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>The system automatically serializes objects, booleans, or numbers into JSON if needed,
while respecting blueprint JSON namespace <code v-pre>stone.http.json</code> settings like <code v-pre>spaces</code>, <code v-pre>replacer</code>, and <code v-pre>escape</code>.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.http.json'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  spaces<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  escape<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">replacer</span><span class="token operator">:</span> <span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">=></span> value<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Charset Management</strong>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">response<span class="token punctuation">.</span><span class="token function">setCharset</span><span class="token punctuation">(</span><span class="token string">'utf-8'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Ensures content types carry the correct charset where appropriate.</p>
<h4 id="_4-cookies-management" tabindex="-1"><a class="header-anchor" href="#_4-cookies-management"><span>4. Cookies Management</span></a></h4>
<p>Manage HTTP cookies securely and flexibly:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">response</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">'session'</span><span class="token punctuation">,</span> <span class="token string">'xyz'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> httpOnly<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">'theme'</span><span class="token punctuation">,</span> <span class="token string">'dark'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">clearCookie</span><span class="token punctuation">(</span><span class="token string">'session'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">secureCookies</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// Force Secure attribute on HTTPS</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Cookies are internally managed through a <code v-pre>CookieCollection</code> and automatically serialized at preparation.</p>
<h4 id="_5-content-negotiation" tabindex="-1"><a class="header-anchor" href="#_5-content-negotiation"><span>5. Content Negotiation</span></a></h4>
<p>You can define a format map:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">return</span> OutgoingHttpResponse</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> statusCode<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">text</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'Hello world!'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'Default Content'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">html</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'&lt;p>Hello world!&lt;/p>'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">json</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>During the <code v-pre>onPreparingResponse</code> stage, Stone.js inspects the <code v-pre>Accept</code> header from the <code v-pre>IncomingHttpEvent</code>, and selects the best format.</p>
<p>If no match, it automatically returns a <strong>406 Not Acceptable</strong>.</p>
<h4 id="_6-cache-control-and-validation" tabindex="-1"><a class="header-anchor" href="#_6-cache-control-and-validation"><span>6. Cache Control and Validation</span></a></h4>
<p>The <code v-pre>OutgoingHttpResponse</code> natively supports:</p>
<ul>
<li><strong>ETag</strong> generation</li>
<li><strong>Last-Modified</strong> headers</li>
<li><strong>Cache Validation</strong></li>
</ul>
<p>If an incoming event signals freshness (<code v-pre>If-None-Match</code> or <code v-pre>If-Modified-Since</code>), Stone.js automatically transforms the response into a <strong>304 Not Modified</strong>.</p>
<p>You can manually set cache headers:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">response</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">setEtag</span><span class="token punctuation">(</span><span class="token string">'abc123'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">setLastModified</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-preparing-the-response" tabindex="-1"><a class="header-anchor" href="#_7-preparing-the-response"><span>7. Preparing the Response</span></a></h4>
<p>Stone.js internally prepares the response during the <code v-pre>onPreparingResponse</code> stage,
providing a final opportunity to modify the response before it's sent to the client.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">onPreparingResponse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> event<span class="token punctuation">,</span> response <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Modify the response before sending</span></span>
<span class="line">  response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'X-Prepared'</span><span class="token punctuation">,</span> <span class="token string">'true'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// Register the hook</span></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.lifecycleHooks.onPreparingResponse'</span><span class="token punctuation">,</span> onPreparingResponse<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The preparation step:</p>
<ul>
<li>Handles content negotiation,</li>
<li>Serializes cookies,</li>
<li>Sets charset if missing,</li>
<li>Calculates and sets <code v-pre>Content-Length</code>,</li>
<li>Generates <code v-pre>ETag</code> if needed,</li>
<li>Removes <code v-pre>Content-Type</code> and <code v-pre>Content-Length</code> for empty responses (204, 304),</li>
<li>Optimizes HEAD method responses.</li>
</ul>
<p>And when the response is ready, the hook <code v-pre>onResponsePrepared</code> is called.</p>
<h3 id="example-typical-api-response" tabindex="-1"><a class="header-anchor" href="#example-typical-api-response"><span>Example: Typical API Response</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> OutgoingHttpResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> OutgoingHttpResponse</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> hello<span class="token operator">:</span> <span class="token string">'world'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'X-API-Version'</span><span class="token punctuation">,</span> <span class="token string">'1.0'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redirectresponse" tabindex="-1"><a class="header-anchor" href="#redirectresponse"><span><code v-pre>RedirectResponse</code></span></a></h3>
<p>Redirect the client with full HTTP semantics (301, 302, 303, 307, 308):</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> RedirectResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> RedirectResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token operator">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span> statusCode<span class="token operator">:</span> <span class="token number">302</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Automatically:</p>
<ul>
<li>sets the <code v-pre>Location</code> header,</li>
<li>formats fallback HTML/text for better browser compatibility,</li>
<li>sets caching headers for 301 if needed.</li>
</ul>
<p>handles <code v-pre>Referrer</code>-based &quot;go back&quot; behavior (<code v-pre>url: 'back'</code>):</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">return</span> RedirectResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token operator">:</span> <span class="token string">'back'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This is useful to redirect users to the previous page they were on.</p>
<h3 id="binaryfileresponse" tabindex="-1"><a class="header-anchor" href="#binaryfileresponse"><span><code v-pre>BinaryFileResponse</code></span></a></h3>
<p>The <code v-pre>BinaryFileResponse</code> class provides a robust way to serve files through HTTP responses, handling all the complexities of file streaming, headers, and browser compatibility.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BinaryFileResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// inline display</span></span>
<span class="line"><span class="token keyword">return</span> BinaryFileResponse<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token punctuation">{</span> file<span class="token operator">:</span> <span class="token string">'./resume.pdf'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// download as attachment</span></span>
<span class="line"><span class="token keyword">return</span> BinaryFileResponse<span class="token punctuation">.</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token punctuation">{</span> file<span class="token operator">:</span> <span class="token string">'./resume.pdf'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Supports:</p>
<ul>
<li>automatic <code v-pre>Content-Disposition</code>,</li>
<li><code v-pre>Content-Length</code>, <code v-pre>ETag</code>, and <code v-pre>Last-Modified</code>,</li>
<li>optional compression encoding (<code v-pre>.br</code>, <code v-pre>.gzip</code>, etc.)</li>
</ul>
<p>Use <code v-pre>file()</code> for inline display or <code v-pre>download()</code> for attachment behavior.</p>
<p>You can configure how the file is served by setting the <code v-pre>stone.http.files.download</code> namespace in your blueprint:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.http.files.download'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  root<span class="token operator">:</span> <span class="token string">'./public'</span><span class="token punctuation">,</span></span>
<span class="line">  extensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'pdf'</span><span class="token punctuation">,</span> <span class="token string">'jpg'</span><span class="token punctuation">,</span> <span class="token string">'png'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Stone.js use the <code v-pre>send</code> package under the hood to handle file streaming and serving. So you can refer to its documentation for more advanced options.</p>
<h3 id="jsonresponse" tabindex="-1"><a class="header-anchor" href="#jsonresponse"><span><code v-pre>JsonResponse</code></span></a></h3>
<p>Shortcut for returning structured JSON:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> JsonResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> JsonResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token punctuation">{</span> hello<span class="token operator">:</span> <span class="token string">'world'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Automatically:</p>
<ul>
<li>sets <code v-pre>Content-Type: application/json</code>,</li>
<li>serializes safely with optional escaping,</li>
<li>supports custom blueprint options (replacer, spacing, etc.).</li>
</ul>
<h3 id="jsonpresponse" tabindex="-1"><a class="header-anchor" href="#jsonpresponse"><span><code v-pre>JsonpResponse</code></span></a></h3>
<p>Legacy-safe JSON wrapped in a callback:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> JsonpResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> JsonpResponse</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token punctuation">{</span> hello<span class="token operator">:</span> <span class="token string">'world'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">setCallback</span><span class="token punctuation">(</span><span class="token string">'myCallback'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sets:</p>
<ul>
<li><code v-pre>application/javascript</code> as content type,</li>
<li>fallback for <code v-pre>&lt;</code>, <code v-pre>&gt;</code>, <code v-pre>&amp;</code> escaping,</li>
<li>secure comment prefix to prevent JSONP abuse.</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Use case</p>
<p>Use it <strong>only when supporting older or cross-domain clients without CORS</strong>.</p>
</div>
<h2 id="factory-utilities-and-status-decorators" tabindex="-1"><a class="header-anchor" href="#factory-utilities-and-status-decorators"><span>Factory Utilities and Status Decorators</span></a></h2>
<p>Stone.js provides powerful shortcuts to help you create <strong>properly structured <code v-pre>OutgoingHttpResponse</code> instances</strong> without manually building everything by hand.</p>
<p>This improves <strong>readability</strong>, <strong>consistency</strong>, and <strong>maintainability</strong> across your application.</p>
<p>You can use:</p>
<ul>
<li><strong>Factory Utilities</strong> for <strong>dynamic</strong>, runtime-defined responses,</li>
<li><strong>Decorators</strong> for <strong>static</strong>, declarative, handler-based responses.</li>
</ul>
<p>Each approach fits a different use case, use the right one depending on your context.</p>
<h3 id="factory-utilities" tabindex="-1"><a class="header-anchor" href="#factory-utilities"><span>Factory Utilities</span></a></h3>
<p>Factory utilities allow you to create ready-to-use responses dynamically at runtime.<br>
They abstract away the boilerplate of instantiating and preparing <code v-pre>OutgoingHttpResponse</code> or its subclasses.</p>
<p>Available utilities:</p>
<table>
<thead>
<tr>
<th>Factory Function</th>
<th>Creates</th>
<th>Default Status Code</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>createHttpResponse()</code></td>
<td><code v-pre>OutgoingHttpResponse</code></td>
<td>200</td>
</tr>
<tr>
<td><code v-pre>okHttpResponse()</code></td>
<td><code v-pre>OutgoingHttpResponse</code> (200 OK)</td>
<td>200</td>
</tr>
<tr>
<td><code v-pre>noContentHttpResponse()</code></td>
<td><code v-pre>OutgoingHttpResponse</code> (204 No Content)</td>
<td>204</td>
</tr>
<tr>
<td><code v-pre>badRequestHttpResponse()</code></td>
<td><code v-pre>OutgoingHttpResponse</code> (400 Bad Request)</td>
<td>400</td>
</tr>
<tr>
<td><code v-pre>unauthorizedHttpResponse()</code></td>
<td><code v-pre>OutgoingHttpResponse</code> (401 Unauthorized)</td>
<td>401</td>
</tr>
<tr>
<td><code v-pre>forbiddenHttpResponse()</code></td>
<td><code v-pre>OutgoingHttpResponse</code> (403 Forbidden)</td>
<td>403</td>
</tr>
<tr>
<td><code v-pre>notFoundHttpResponse()</code></td>
<td><code v-pre>OutgoingHttpResponse</code> (404 Not Found)</td>
<td>404</td>
</tr>
<tr>
<td><code v-pre>methodNotAllowedHttpResponse()</code></td>
<td><code v-pre>OutgoingHttpResponse</code> (405 Method Not Allowed)</td>
<td>405</td>
</tr>
<tr>
<td><code v-pre>serverErrorHttpResponse()</code></td>
<td><code v-pre>OutgoingHttpResponse</code> (500 Internal Server Error)</td>
<td>500</td>
</tr>
<tr>
<td><code v-pre>unavailableHttpResponse()</code></td>
<td><code v-pre>OutgoingHttpResponse</code> (503 Service Unavailable)</td>
<td>503</td>
</tr>
<tr>
<td><code v-pre>htmlHttpResponse()</code></td>
<td><code v-pre>OutgoingHttpResponse</code> (HTML content)</td>
<td>200</td>
</tr>
<tr>
<td><code v-pre>jsonHttpResponse()</code></td>
<td><code v-pre>JsonResponse</code> (JSON content)</td>
<td>200</td>
</tr>
<tr>
<td><code v-pre>jsonpHttpResponse()</code></td>
<td><code v-pre>JsonpResponse</code> (JSONP content)</td>
<td>200</td>
</tr>
<tr>
<td><code v-pre>fileHttpResponse()</code></td>
<td><code v-pre>BinaryFileResponse</code> (File download/inline)</td>
<td>200</td>
</tr>
<tr>
<td><code v-pre>redirectHttpResponse()</code></td>
<td><code v-pre>RedirectResponse</code> (HTTP redirection)</td>
<td>302</td>
</tr>
<tr>
<td><code v-pre>emptyHttpResponse()</code></td>
<td><code v-pre>OutgoingHttpResponse</code> (204 empty JSON)</td>
<td>204</td>
</tr>
</tbody>
</table>
<h4 id="example-of-use" tabindex="-1"><a class="header-anchor" href="#example-of-use"><span>Example of Use</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> jsonHttpResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">jsonHttpResponse</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token string-property property">'X-Custom-Header'</span><span class="token operator">:</span> <span class="token string">'value'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This creates a <code v-pre>JsonResponse</code>, sets the content, status code, and headers in one simple call.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Prefer factory utilities in middlewares, functionnal handlers, or when the response characteristics depend on runtime conditions.</p>
</div>
<h3 id="status-decorators" tabindex="-1"><a class="header-anchor" href="#status-decorators"><span>Status Decorators</span></a></h3>
<p>For <strong>static</strong> and <strong>declarative</strong> responses, Stone.js offers decorators that automatically <strong>wrap your handler’s return value</strong> inside the right <code v-pre>OutgoingHttpResponse</code> subclass.</p>
<p>Available decorators:</p>
<table>
<thead>
<tr>
<th>Decorator</th>
<th>Response Created</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>@HttpResponse()</code></td>
<td><code v-pre>OutgoingHttpResponse</code></td>
</tr>
<tr>
<td><code v-pre>@OkHttpResponse()</code></td>
<td><code v-pre>OutgoingHttpResponse</code> (200 OK)</td>
</tr>
<tr>
<td><code v-pre>@NoContentHttpResponse()</code></td>
<td><code v-pre>OutgoingHttpResponse</code> (204 No Content)</td>
</tr>
<tr>
<td><code v-pre>@JsonHttpResponse()</code></td>
<td><code v-pre>JsonResponse</code></td>
</tr>
<tr>
<td><code v-pre>@JsonpHttpResponse()</code></td>
<td><code v-pre>JsonpResponse</code></td>
</tr>
<tr>
<td><code v-pre>@HtmlHttpResponse()</code></td>
<td><code v-pre>OutgoingHttpResponse</code> with HTML content</td>
</tr>
<tr>
<td><code v-pre>@FileHttpResponse()</code></td>
<td><code v-pre>BinaryFileResponse</code></td>
</tr>
<tr>
<td><code v-pre>@RedirectHttpResponse()</code></td>
<td><code v-pre>RedirectResponse</code></td>
</tr>
</tbody>
</table>
<p>Each decorator accepts optional arguments:</p>
<ul>
<li><code v-pre>statusCode</code> (default depending on decorator)</li>
<li><code v-pre>headers</code> (default <code v-pre>{}</code>)</li>
</ul>
<h4 id="example-of-use-1" tabindex="-1"><a class="header-anchor" href="#example-of-use-1"><span>Example of Use</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> JsonHttpResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">JsonHttpResponse</span></span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">'X-Custom-Header'</span><span class="token operator">:</span> <span class="token string">'value'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">handler</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Your handler stays clean: it just returns plain data.</li>
<li>Stone.js wraps it automatically inside a <code v-pre>JsonResponse</code>.</li>
<li>The status code and headers are enforced declaratively.</li>
</ul>
<h3 id="which-one-should-you-use" tabindex="-1"><a class="header-anchor" href="#which-one-should-you-use"><span>Which One Should You Use?</span></a></h3>
<table>
<thead>
<tr>
<th>Situation</th>
<th>Recommendation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Response shape is <strong>static</strong></td>
<td>Use <strong>decorators</strong></td>
</tr>
<tr>
<td>Response depends on <strong>runtime conditions</strong></td>
<td>Use <strong>factory utilities</strong></td>
</tr>
<tr>
<td>Want <strong>maximum readability</strong> in class handlers</td>
<td>Use <strong>decorators</strong></td>
</tr>
<tr>
<td>Want <strong>maximum flexibility</strong> in functions/middlewares</td>
<td>Use <strong>factories</strong></td>
</tr>
</tbody>
</table>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p><strong>Do not mix both approaches</strong> for the same handler, it could lead to unexpected behavior.</p>
</div>
<h2 id="built-in-http-middleware" tabindex="-1"><a class="header-anchor" href="#built-in-http-middleware"><span>Built-in HTTP Middleware</span></a></h2>
<p>In Stone.js, most HTTP behaviors are <strong>explicit</strong>. You must enable and configure them <strong>yourself</strong> through the Blueprint system.</p>
<p>To help you cover common web requirements easily, Stone.js provides <strong>official built-in middleware</strong> for:</p>
<ul>
<li>CORS handling,</li>
<li>Response compression,</li>
<li>Serving static files.</li>
</ul>
<p>These are powerful, highly customizable, and fully integrated with the Continuum Architecture.</p>
<h4 id="cors-cross-origin-resource-sharing" tabindex="-1"><a class="header-anchor" href="#cors-cross-origin-resource-sharing"><span>CORS (Cross-Origin Resource Sharing)</span></a></h4>
<p>By default, <strong>CORS is disabled</strong> in Stone.js, keeping the system as strict and secure as possible out of the box.</p>
<p>If your application needs CORS (e.g., APIs accessed by a frontend app from another domain), Stone.js provides the official <code v-pre>CORSHeadersMiddleware</code>.</p>
<h6 id="enabling-cors" tabindex="-1"><a class="header-anchor" href="#enabling-cors"><span>Enabling CORS</span></a></h6>
<p>To enable CORS:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> CORSHeadersMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token function">defineBlueprintMiddleware</span><span class="token punctuation">(</span>CORSHeadersMiddleware<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>The <code v-pre>CORSHeadersMiddleware</code> is a <strong>Blueprint Middleware</strong>.</p>
</div>
<h6 id="configuring-cors" tabindex="-1"><a class="header-anchor" href="#configuring-cors"><span>Configuring CORS</span></a></h6>
<p>You can configure CORS behavior via the <code v-pre>stone.http.cors</code> namespace in the Blueprint:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.http.cors'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  origin<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'https://myfrontend.com'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  methods<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'POST'</span><span class="token punctuation">,</span> <span class="token string">'PUT'</span><span class="token punctuation">,</span> <span class="token string">'DELETE'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  allowedHeaders<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'Authorization'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  credentials<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  exposedHeaders<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'X-Custom-Header'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  maxAge<span class="token operator">:</span> <span class="token number">86400</span><span class="token punctuation">,</span></span>
<span class="line">  successStatus<span class="token operator">:</span> <span class="token number">204</span><span class="token punctuation">,</span></span>
<span class="line">  preflightStop<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="cors-options-reference" tabindex="-1"><a class="header-anchor" href="#cors-options-reference"><span>CORS Options Reference</span></a></h6>
<table>
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>origin</code></td>
<td><code v-pre>string | string[]</code></td>
<td>Allowed origins (<code v-pre>*</code> for any).</td>
</tr>
<tr>
<td><code v-pre>methods</code></td>
<td><code v-pre>string | string[]</code></td>
<td>Allowed HTTP methods.</td>
</tr>
<tr>
<td><code v-pre>maxAge</code></td>
<td><code v-pre>number | null</code></td>
<td>Cache duration (seconds) for preflight results.</td>
</tr>
<tr>
<td><code v-pre>credentials</code></td>
<td><code v-pre>boolean</code></td>
<td>Allow credentials (cookies, auth headers).</td>
</tr>
<tr>
<td><code v-pre>exposedHeaders</code></td>
<td><code v-pre>string | string[]</code></td>
<td>Headers exposed to browsers.</td>
</tr>
<tr>
<td><code v-pre>allowedHeaders</code></td>
<td><code v-pre>string | string[]</code></td>
<td>Request headers clients are allowed to use.</td>
</tr>
<tr>
<td><code v-pre>successStatus</code></td>
<td><code v-pre>number</code></td>
<td>Status for successful OPTIONS preflight (default 204).</td>
</tr>
<tr>
<td><code v-pre>preflightStop</code></td>
<td><code v-pre>boolean</code></td>
<td>If true, stop further processing for OPTIONS preflight requests.</td>
</tr>
</tbody>
</table>
<h4 id="compression" tabindex="-1"><a class="header-anchor" href="#compression"><span>Compression</span></a></h4>
<p>Compressing HTTP responses can drastically improve performance by reducing payload size.</p>
<p>Stone.js provides <code v-pre>CompressionMiddleware</code> to handle automatic Gzip or Deflate compression based on client support.</p>
<h6 id="enabling-compression" tabindex="-1"><a class="header-anchor" href="#enabling-compression"><span>Enabling Compression</span></a></h6>
<p>Register the middleware like this:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> CompressionMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token function">defineMiddleware</span><span class="token punctuation">(</span>CompressionMiddleware<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>The <code v-pre>CompressionMiddleware</code> is an <strong>Initialization Middleware</strong>.</p>
</div>
<p>Stone.js will automatically compress responses when the client supports it (based on <code v-pre>Accept-Encoding</code> headers).</p>
<p>You don’t need to manually compress responses, it happens transparently during the response lifecycle.</p>
<h4 id="static-files" tabindex="-1"><a class="header-anchor" href="#static-files"><span>Static Files</span></a></h4>
<p>Need to serve static assets (e.g., images, CSS, JavaScript)?<br>
Stone.js offers <code v-pre>StaticFileMiddleware</code> for this purpose.</p>
<p>It’s flexible, fast, and respects Continuum rules by staying independent from your domain logic.</p>
<h6 id="enabling-static-files-serving" tabindex="-1"><a class="header-anchor" href="#enabling-static-files-serving"><span>Enabling Static Files Serving</span></a></h6>
<p>Register the middleware:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StaticFileMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token function">defineMiddleware</span><span class="token punctuation">(</span>StaticFileMiddleware<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>The <code v-pre>StaticFileMiddleware</code> is an <strong>Initialization Middleware</strong>.</p>
</div>
<h6 id="configuring-static-files" tabindex="-1"><a class="header-anchor" href="#configuring-static-files"><span>Configuring Static Files</span></a></h6>
<p>Control where the files are served from and how compression is applied:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Set the root directory for static assets</span></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.http.files.rootDir'</span><span class="token punctuation">,</span> <span class="token string">'./public'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Configure default compression encoding mappings</span></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.http.files.defaultCompressionEncoding'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'.br'</span><span class="token operator">:</span> <span class="token string">'br'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'.brotli'</span><span class="token operator">:</span> <span class="token string">'br'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'.gzip'</span><span class="token operator">:</span> <span class="token string">'gzip'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'.gz'</span><span class="token operator">:</span> <span class="token string">'gzip'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>rootDir</code> points to your static assets folder relative to your app root.</li>
<li><code v-pre>defaultCompressionEncoding</code> maps file extensions to content-encoding strategies if pre-compressed versions are available (e.g., <code v-pre>index.html.gz</code>).</li>
</ul>
<p>If a compressed version of a file exists, Stone.js can serve it directly to optimize bandwidth.</p>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>Building responses in Stone.js is powerful, but to maximize <strong>clarity</strong>, <strong>flexibility</strong>, and <strong>portability</strong>, you should follow some important best practices.</p>
<h4 id="let-stone-js-infer-responses-in-event-handlers" tabindex="-1"><a class="header-anchor" href="#let-stone-js-infer-responses-in-event-handlers"><span>Let Stone.js Infer Responses in Event Handlers</span></a></h4>
<p>In your <strong>event handlers</strong>, you don't need to manually create a response unless you want to customize it.
<strong>Just return your data as-is</strong>, and Stone.js will automatically infer the correct <code v-pre>OutgoingResponse</code> based on your platform (HTTP, Browser, Console, etc.).</p>
<p>Example:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handler</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Just return the data</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello, world!'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Stone.js will automatically wrap the return value into the appropriate <code v-pre>OutgoingResponse</code> subclass based on the active Adapter.</p>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>Only use explicit response creation when you need to customize headers, status codes, or other response properties.</p>
</div>
<h4 id="always-return-explicit-responses-in-middleware" tabindex="-1"><a class="header-anchor" href="#always-return-explicit-responses-in-middleware"><span>Always Return Explicit Responses in Middleware</span></a></h4>
<p>Middleware has a different role: it manipulates the <strong>flow</strong> of the application.
In <strong>middleware</strong>, you must <strong>always return an explicit response</strong>:</p>
<ul>
<li>Use factory utilities like <code v-pre>jsonHttpResponse()</code>, <code v-pre>redirectHttpResponse()</code>, etc.</li>
<li>Or manually create a response instance if needed (<code v-pre>OutgoingHttpResponse.create({...})</code>).</li>
</ul>
<p>Example:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">authMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">,</span> next<span class="token operator">:</span> NextMiddleware<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>event<span class="token punctuation">.</span><span class="token function">hasHeader</span><span class="token punctuation">(</span><span class="token string">'Authorization'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">unauthorizedHttpResponse</span><span class="token punctuation">(</span><span class="token punctuation">{</span> error<span class="token operator">:</span> <span class="token string">'Missing Authorization Header'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This ensures that the system knows exactly when the pipeline is short-circuited and how to format the outgoing response properly.</p>
<h4 id="choose-declarative-or-imperative-not-both" tabindex="-1"><a class="header-anchor" href="#choose-declarative-or-imperative-not-both"><span>Choose Declarative or Imperative, Not Both</span></a></h4>
<ul>
<li>Use <strong>Status Decorators</strong> (<code v-pre>@JsonHttpResponse</code>, <code v-pre>@HtmlHttpResponse</code>, etc.) when your response shape (status code, headers) is <strong>static and predictable</strong>.</li>
<li>Use <strong>Factory Utilities</strong> (<code v-pre>jsonHttpResponse()</code>, <code v-pre>redirectHttpResponse()</code>, etc.) when your response depends on <strong>runtime conditions</strong> (e.g., different statuses, dynamic headers).</li>
<li><strong>Never mix</strong> both styles for the same event handler.<br>
Mixing declarative and imperative response shaping can cause unexpected behavior and complicate debugging.</li>
</ul>
<p>Pick the right approach once per event handler.</p>
<h4 id="prefer-built-in-factory-utilities" tabindex="-1"><a class="header-anchor" href="#prefer-built-in-factory-utilities"><span>Prefer Built-in Factory Utilities</span></a></h4>
<p>Always use <strong>provided factory utilities</strong> (e.g., <code v-pre>okHttpResponse</code>, <code v-pre>serverErrorHttpResponse</code>) instead of manually creating responses with <code v-pre>OutgoingHttpResponse.create(...)</code>.</p>
<p>Factories keep your code shorter, safer, and future-proof.</p>
<h4 id="configure-cors-compression-and-static-files-at-blueprint-level" tabindex="-1"><a class="header-anchor" href="#configure-cors-compression-and-static-files-at-blueprint-level"><span>Configure CORS, Compression, and Static Files at Blueprint Level</span></a></h4>
<ul>
<li>Register all middleware like <code v-pre>CORSHeadersMiddleware</code>, <code v-pre>CompressionMiddleware</code>, and <code v-pre>StaticFileMiddleware</code> during the <strong>blueprint configuration phase</strong>, not inside handlers.</li>
<li>Always configure their behavior using <strong>Blueprint namespaces</strong> like <code v-pre>stone.http.cors</code>, <code v-pre>stone.http.files.rootDir</code>, etc.</li>
</ul>
<p>Keeps your application <strong>domain logic pure</strong> and your <strong>integration logic centralized</strong>.</p>
<h4 id="control-cors-explicitly" tabindex="-1"><a class="header-anchor" href="#control-cors-explicitly"><span>Control CORS Explicitly</span></a></h4>
<ul>
<li>Never allow <code v-pre>&quot;*&quot;</code> (wildcard origin) in production unless strictly necessary.</li>
<li>Set precise <code v-pre>origin</code>, <code v-pre>methods</code>, and <code v-pre>allowedHeaders</code> to avoid security vulnerabilities.</li>
<li>Always enable <code v-pre>credentials: true</code> only when needed.</li>
</ul>
<p>Proper CORS settings protect your APIs against cross-site security attacks.</p>
<h4 id="serve-static-files-efficiently" tabindex="-1"><a class="header-anchor" href="#serve-static-files-efficiently"><span>Serve Static Files Efficiently</span></a></h4>
<ul>
<li>Prefer <strong>pre-compressed</strong> versions of your files (<code v-pre>.br</code>, <code v-pre>.gzip</code>) if possible.</li>
<li>Configure <code v-pre>stone.http.files.defaultCompressionEncoding</code> to match file extensions with their compression types.</li>
<li>Keep the <code v-pre>rootDir</code> outside your main source code folder to isolate static assets cleanly.</li>
</ul>
<p>This dramatically improves performance for frontend apps and assets.</p>
<p>Follow these practices and your Stone.js application will be <strong>stronger</strong>, <strong>cleaner</strong>, <strong>more extensible</strong>, and <strong>easier to maintain</strong>.</p>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p><code v-pre>OutgoingResponse</code> is how your application sends responses in Stone.js.</p>
<p>You can create responses:</p>
<ul>
<li><strong>Declaratively</strong> with decorators like <code v-pre>@JsonHttpResponse()</code></li>
<li><strong>Imperatively</strong> with factory utilities like <code v-pre>jsonHttpResponse()</code></li>
<li><strong>Manually</strong> with <code v-pre>OutgoingResponse.create()</code> if you need full control (rare)</li>
</ul>
<p>Stone.js automatically handles preparing, wrapping, and sending responses across platforms (backend, frontend, serverless, etc.).</p>
<h4 id="quick-how-to" tabindex="-1"><a class="header-anchor" href="#quick-how-to"><span>Quick How-To</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left">Situation</th>
<th style="text-align:left">Use</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Static response (fixed status, headers)</td>
<td style="text-align:left"><strong>Decorators</strong></td>
</tr>
<tr>
<td style="text-align:left">Dynamic response (runtime decisions)</td>
<td style="text-align:left"><strong>Factory utilities</strong></td>
</tr>
<tr>
<td style="text-align:left">Advanced custom control</td>
<td style="text-align:left"><strong>Manual creation</strong> (rare)</td>
</tr>
</tbody>
</table>
<p>Prefer <strong>decorators</strong> or <strong>factory utilities</strong> for clean, simple code.</p>
<h4 id="built-in-response-types" tabindex="-1"><a class="header-anchor" href="#built-in-response-types"><span>Built-in Response Types</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:left">Type</th>
<th style="text-align:left">When to Use</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>OutgoingResponse</code></td>
<td style="text-align:left">Base class (low-level)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>OutgoingBrowserResponse</code></td>
<td style="text-align:left">Frontend-only responses</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>OutgoingHttpResponse</code></td>
<td style="text-align:left">Standard backend HTTP responses</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>JsonResponse</code>, <code v-pre>JsonpResponse</code></td>
<td style="text-align:left">API responses (JSON/JSONP)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>RedirectResponse</code></td>
<td style="text-align:left">Redirections</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BinaryFileResponse</code></td>
<td style="text-align:left">Serving files</td>
</tr>
</tbody>
</table>
<p>Stone.js wraps your domain output cleanly based on where you deploy.</p>
<h4 id="final-tips" tabindex="-1"><a class="header-anchor" href="#final-tips"><span>Final Tips</span></a></h4>
<ul>
<li>Let Stone.js infer responses in <strong>event handlers</strong>.</li>
<li>Always return an <strong>explicit response</strong> in <strong>middleware</strong>.</li>
<li>Register CORS, Compression, Static Files <strong>through Blueprint</strong>.</li>
<li>Keep your <strong>domain logic pure</strong>, no HTTP pollution inside handlers.</li>
</ul>
<p>You now master how responses flow in Stone.js, from your domain back to the world.<br>
Simple, clean, and continuum-aligned.</p>
</div></template>


