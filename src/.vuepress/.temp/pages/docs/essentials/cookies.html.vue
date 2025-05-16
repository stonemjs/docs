<template><div><p>Stone.js provides a simple, universal API for managing cookies across all environments, Node.js servers and browsers alike.<br>
In the spirit of the Continuum Architecture, cookie management is fully integrated into the platform layer, offering a <strong>single, context-aware API</strong> regardless of where your code runs.</p>
<p>Cookies can be accessed from incoming events (such as <code v-pre>IncomingHttpEvent</code> and <code v-pre>IncomingBrowserEvent</code>) and attached to outgoing responses (<code v-pre>OutgoingHttpResponse</code>, <code v-pre>OutgoingBrowserResponse</code>).</p>
<p>You can easily:</p>
<ul>
<li><strong>Read</strong> cookies from incoming events.</li>
<li><strong>Set</strong> cookies in outgoing responses.</li>
<li><strong>Clear</strong> cookies when needed.</li>
</ul>
<p>Because the Stone.js Cookie API abstracts the underlying platform differences, you can use exactly the same code on the server and in the browser, no conditions, no special cases.</p>
<p>Here’s a quick glimpse:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Reading a cookie from an incoming event</span></span>
<span class="line"><span class="token keyword">const</span> authToken <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">getCookie</span><span class="token punctuation">(</span><span class="token string">'auth_token'</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Setting a cookie on an outgoing response</span></span>
<span class="line">response</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">'session'</span><span class="token punctuation">,</span> <span class="token string">'abc123'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> httpOnly<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">secureCookies</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Mark all cookies as secure</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now that you know where cookies fit, let's dive into the Cookie API itself.</p>
<h2 id="cookie-api" tabindex="-1"><a class="header-anchor" href="#cookie-api"><span>Cookie API</span></a></h2>
<p>Stone.js offers two main classes to work with cookies:</p>
<ul>
<li><code v-pre>Cookie</code></li>
<li><code v-pre>CookieCollection</code></li>
</ul>
<p>Both are simple, powerful, and fully platform-agnostic.</p>
<h3 id="cookie-class" tabindex="-1"><a class="header-anchor" href="#cookie-class"><span>Cookie Class</span></a></h3>
<p>The <code v-pre>Cookie</code> class represents a single cookie instance.<br>
You usually won’t need to create <code v-pre>Cookie</code> objects manually, Stone.js handles that for you, but it’s good to know how they behave.</p>
<table>
<thead>
<tr>
<th style="text-align:left">Method</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>getValue()</code></td>
<td style="text-align:left">Retrieve the cookie's value, automatically deserialized if needed.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>setExpires(date)</code></td>
<td style="text-align:left">Set an expiration date for the cookie.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>setSecure(true | false)</code></td>
<td style="text-align:left">Mark the cookie as secure or not.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>cloneWith(value, options?)</code></td>
<td style="text-align:left">Create a copy of the cookie with a new value or options.</td>
</tr>
</tbody>
</table>
<p><strong>Example:</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Getting a cookie value</span></span>
<span class="line">event<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'userPreferences'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Setting a cookie securely</span></span>
<span class="line">response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'userPreferences'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSecure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the cookie value is an object, Stone.js will automatically serialize it safely behind the scenes.</p>
<h3 id="cookiecollection-class" tabindex="-1"><a class="header-anchor" href="#cookiecollection-class"><span>CookieCollection Class</span></a></h3>
<p>The <code v-pre>CookieCollection</code> represents a set of cookies.<br>
When you use <code v-pre>event.cookies</code> or <code v-pre>response.cookies</code>, you are dealing with a <code v-pre>CookieCollection</code>.</p>
<table>
<thead>
<tr>
<th style="text-align:left">Method</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>add(name, value, options?)</code></td>
<td style="text-align:left">Add a new cookie.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>update(name, value, options?)</code></td>
<td style="text-align:left">Update an existing cookie.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>get(name)</code></td>
<td style="text-align:left">Get a specific cookie by name.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>getValue(name)</code></td>
<td style="text-align:left">Get a cookie's value directly.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>has(name)</code></td>
<td style="text-align:left">Check if a cookie exists.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>remove(name, options?, force?)</code></td>
<td style="text-align:left">Remove a cookie, optionally forcing immediate deletion.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>clear(force?)</code></td>
<td style="text-align:left">Clear all cookies from the collection.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>all(serialize?)</code></td>
<td style="text-align:left">Get all cookies as an object or serialized strings.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>secure(true | false)</code></td>
<td style="text-align:left">Mark all cookies as secure.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>setOptions(options)</code></td>
<td style="text-align:left">Apply global options to all cookies.</td>
</tr>
</tbody>
</table>
<p><strong>Example:</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> cookies <span class="token operator">=</span> event<span class="token punctuation">.</span>cookies<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> userPref <span class="token operator">=</span> cookies<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">'userPreferences'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> theme<span class="token operator">:</span> <span class="token string">'light'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">response<span class="token punctuation">.</span>cookies</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'session'</span><span class="token punctuation">,</span> <span class="token string">'abc123'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> maxAge<span class="token operator">:</span> <span class="token number">3600</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string">'userPreferences'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> theme<span class="token operator">:</span> <span class="token string">'dark'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>You almost never have to think about cookie parsing or formatting yourself, Stone.js does it automatically.</p>
</div>
<h3 id="cookieoptions-type-quick-overview" tabindex="-1"><a class="header-anchor" href="#cookieoptions-type-quick-overview"><span>CookieOptions Type (Quick Overview)</span></a></h3>
<p>When setting a cookie, you can pass standard options:</p>
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
<td><code v-pre>expires</code></td>
<td><code v-pre>Date</code></td>
<td>Expiration date for the cookie.</td>
</tr>
<tr>
<td><code v-pre>maxAge</code></td>
<td><code v-pre>number</code></td>
<td>Max age in seconds.</td>
</tr>
<tr>
<td><code v-pre>httpOnly</code></td>
<td><code v-pre>boolean</code></td>
<td>If true, cookie is inaccessible to JS.</td>
</tr>
<tr>
<td><code v-pre>secure</code></td>
<td><code v-pre>boolean</code></td>
<td>If true, cookie only sent over HTTPS.</td>
</tr>
<tr>
<td><code v-pre>path</code></td>
<td><code v-pre>string</code></td>
<td>Cookie path (default: <code v-pre>/</code>).</td>
</tr>
<tr>
<td><code v-pre>domain</code></td>
<td><code v-pre>string</code></td>
<td>Cookie domain.</td>
</tr>
<tr>
<td><code v-pre>sameSite</code></td>
<td>`'lax'</td>
<td>'strict'</td>
</tr>
</tbody>
</table>
<p>These are passed when creating or setting cookies, just like in standard HTTP cookies.</p>
<p>Stone.js ensures you interact with cookies in a <strong>typed, structured, and secure</strong> way, no brittle string parsing or manual cookie headers needed.</p>
<h2 id="using-cookies" tabindex="-1"><a class="header-anchor" href="#using-cookies"><span>Using Cookies</span></a></h2>
<p>Stone.js abstracts away all cookie handling differences between Node.js and the browser, so you can write your code once and deploy it anywhere.<br>
Behind the scenes, cookies behave slightly differently depending on the environment, but you almost never have to care.</p>
<h3 id="reading-cookies" tabindex="-1"><a class="header-anchor" href="#reading-cookies"><span>Reading Cookies</span></a></h3>
<p>To access cookies from an incoming event, use the <code v-pre>cookies</code> collection exposed on the event object.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> authToken <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">getCookie</span><span class="token punctuation">(</span><span class="token string">'auth_token'</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Or, if you prefer working with the <code v-pre>CookieCollection</code> directly:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">hasCookie</span><span class="token punctuation">(</span><span class="token string">'isLoggedIn'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> userSession <span class="token operator">=</span> event<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">'session'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Whether you are in a browser or server context, the same code works seamlessly.</p>
<h3 id="setting-cookies" tabindex="-1"><a class="header-anchor" href="#setting-cookies"><span>Setting Cookies</span></a></h3>
<p>To set cookies in the outgoing response, use the <code v-pre>cookies</code> collection, or the shortcut methods on the response.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">response</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">'session'</span><span class="token punctuation">,</span> <span class="token string">'abc123'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> httpOnly<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">'theme'</span><span class="token punctuation">,</span> <span class="token string">'dark'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">secureCookies</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Force all cookies to be secure</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In Node.js, cookies are automatically added to the <code v-pre>Set-Cookie</code> HTTP header.<br>
In the browser, cookies are pushed into <code v-pre>document.cookie</code>.</p>
<h3 id="clearing-cookies" tabindex="-1"><a class="header-anchor" href="#clearing-cookies"><span>Clearing Cookies</span></a></h3>
<p>You can explicitly clear a cookie with <code v-pre>clearCookie(name)</code> or <code v-pre>remove(name)</code>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">response<span class="token punctuation">.</span><span class="token function">clearCookie</span><span class="token punctuation">(</span><span class="token string">'session'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'session'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Internally, this marks the cookie for deletion by setting an expired date.</p>
<p>You can also forcibly remove a cookie from the collection (without touching the client) using the <code v-pre>force</code> flag:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">response<span class="token punctuation">.</span><span class="token function">clearCookie</span><span class="token punctuation">(</span><span class="token string">'session'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'theme'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="signing-unsigning-and-serialization" tabindex="-1"><a class="header-anchor" href="#signing-unsigning-and-serialization"><span>Signing, Unsigning, and Serialization</span></a></h3>
<p>Stone.js can <strong>sign cookies</strong> to ensure they have not been tampered with.</p>
<ul>
<li>If a <strong>secret</strong> is configured, cookies will be signed automatically when serialized.</li>
<li>When reading cookies, signed cookies are verified and rejected if they have been altered.</li>
<li>Complex cookie values (like objects) are automatically serialized into strings using a safe format.</li>
</ul>
<p>Example:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">response<span class="token punctuation">.</span><span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">'settings'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> lang<span class="token operator">:</span> <span class="token string">'en'</span><span class="token punctuation">,</span> theme<span class="token operator">:</span> <span class="token string">'dark'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Even though you're setting an object, Stone.js serializes it transparently.</p>
<h3 id="cookie-configuration" tabindex="-1"><a class="header-anchor" href="#cookie-configuration"><span>Cookie Configuration</span></a></h3>
<p>You can configure default cookie behavior globally through the <strong>blueprint</strong>, using two separate namespaces:</p>
<ul>
<li><code v-pre>stone.http.cookie</code> → for <strong>backend HTTP cookies</strong>.</li>
<li><code v-pre>stone.browser.cookie</code> → for <strong>frontend browser cookies</strong>.</li>
</ul>
<p>This separation is especially important when building <strong>SSR (Server-Side Rendering)</strong> apps, where you handle both environments simultaneously.</p>
<p><strong>Available settings:</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">cookie<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * The secret used for signing cookies (only for backend).</span>
<span class="line">   */</span></span>
<span class="line">  secret<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Additional cookie options.</span>
<span class="line">   */</span></span>
<span class="line">  options<span class="token operator">:</span> CookieOptions</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Options for configuring a cookie.</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">CookieOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  expires<span class="token operator">?</span><span class="token operator">:</span> Date</span>
<span class="line">  domain<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  maxAge<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  secure<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  httpOnly<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  sameSite<span class="token operator">?</span><span class="token operator">:</span> CookieSameSite</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Examples:</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Configure frontend browser cookies</span></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.browser.cookie.maxAge'</span><span class="token punctuation">,</span> <span class="token number">36000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Configure backend HTTP cookies</span></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.http.cookie.secret'</span><span class="token punctuation">,</span> <span class="token string">'my-secret'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Important notes:</strong></p>
<ul>
<li><strong>Backend (<code v-pre>stone.http.cookie</code>)</strong>:
<ul>
<li>You can set a <code v-pre>secret</code> to sign and verify cookies securely.</li>
<li>If no secret is set, Stone.js will fallback to using the global <code v-pre>stone.secret</code> value if available.</li>
</ul>
</li>
<li><strong>Frontend (<code v-pre>stone.browser.cookie</code>)</strong>:
<ul>
<li>Never set a <code v-pre>secret</code> here.</li>
<li>Signing cookies in the browser is insecure because the secret would be exposed to the user.</li>
<li>Frontend cookies should only configure options like <code v-pre>maxAge</code>, <code v-pre>path</code>, <code v-pre>secure</code>, and <code v-pre>sameSite</code>.</li>
</ul>
</li>
</ul>
<p>Stone.js enforces this separation to <strong>protect your application security</strong> and <strong>follow best practices</strong> when handling cookies across environments.</p>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>Managing cookies correctly is crucial for both security and user experience.<br>
Here are some best practices to follow when using Stone.js Cookie API:</p>
<h4 id="always-use-event-and-response-apis" tabindex="-1"><a class="header-anchor" href="#always-use-event-and-response-apis"><span>Always Use Event and Response APIs</span></a></h4>
<p>Instead of manually reading <code v-pre>document.cookie</code> or setting <code v-pre>Set-Cookie</code> headers yourself, always use:</p>
<ul>
<li><code v-pre>event.cookies</code></li>
<li><code v-pre>event.getCookie()</code></li>
<li><code v-pre>event.hasCookie()</code></li>
<li><code v-pre>response.cookies</code></li>
<li><code v-pre>response.setCookie()</code></li>
<li><code v-pre>response.clearCookie()</code></li>
</ul>
<p>Stone.js ensures that cookies are parsed, signed, serialized, and secured properly across environments, don't bypass this layer.</p>
<h4 id="sign-sensitive-cookies-on-the-backend" tabindex="-1"><a class="header-anchor" href="#sign-sensitive-cookies-on-the-backend"><span>Sign Sensitive Cookies on the Backend</span></a></h4>
<p>When dealing with authentication tokens, sessions, or other sensitive data:</p>
<ul>
<li>Always sign cookies by setting a <code v-pre>stone.http.cookie.secret</code> in the blueprint.</li>
<li>Signed cookies prevent tampering: if someone tries to alter a cookie, Stone.js will detect it and reject the value.</li>
</ul>
<p><strong>Do not attempt to sign cookies in the browser</strong>, secrets must stay on the server side.</p>
<h4 id="secure-your-cookies" tabindex="-1"><a class="header-anchor" href="#secure-your-cookies"><span>Secure Your Cookies</span></a></h4>
<p>For production environments:</p>
<ul>
<li>Always use <code v-pre>secure: true</code> to ensure cookies are transmitted over HTTPS.</li>
<li>Mark sensitive cookies as <code v-pre>httpOnly: true</code> so they are not accessible via JavaScript.</li>
</ul>
<p>Stone.js lets you easily enforce security for all cookies using:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">response<span class="token punctuation">.</span><span class="token function">secureCookies</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Or by setting <code v-pre>secure: true</code> globally via the blueprint.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.http.cookie.secure'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="prefer-json-serializable-values" tabindex="-1"><a class="header-anchor" href="#prefer-json-serializable-values"><span>Prefer JSON-Serializable Values</span></a></h4>
<p>Stone.js automatically serializes and deserializes objects stored in cookies.<br>
However, prefer using <strong>small, simple, JSON-serializable values</strong> to avoid bloated cookies.</p>
<p>Example:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">response<span class="token punctuation">.</span><span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">'settings'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> theme<span class="token operator">:</span> <span class="token string">'dark'</span><span class="token punctuation">,</span> lang<span class="token operator">:</span> <span class="token string">'en'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>No manual serialization needed, just pass your object, Stone.js handles it safely.</p>
<h4 id="separate-backend-and-frontend-configurations" tabindex="-1"><a class="header-anchor" href="#separate-backend-and-frontend-configurations"><span>Separate Backend and Frontend Configurations</span></a></h4>
<p>If you are building an SSR application:</p>
<ul>
<li>Configure backend cookies under <code v-pre>stone.http.cookie</code>.</li>
<li>Configure browser cookies separately under <code v-pre>stone.browser.cookie</code>.</li>
<li>Never set a <code v-pre>secret</code> in <code v-pre>stone.browser.cookie</code>, only in <code v-pre>stone.http.cookie</code>.</li>
</ul>
<p>This separation keeps your system flexible, secure, and continuum-compliant.</p>
<p>By following these practices, you ensure your cookies are secure, portable, and work seamlessly across all Stone.js deployment targets.</p>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>The Stone.js Cookie API gives you a simple, structured, and secure way to work with cookies, across both Node.js servers and browsers, without ever worrying about platform differences.</p>
<p>In Stone.js:</p>
<ul>
<li>You <strong>read</strong> cookies from incoming events (<code v-pre>event.cookies</code>, <code v-pre>event.getCookie()</code>).</li>
<li>You <strong>set</strong> cookies in outgoing responses (<code v-pre>response.cookies</code>, <code v-pre>response.setCookie()</code>).</li>
<li>You <strong>clear</strong> cookies easily (<code v-pre>response.clearCookie()</code>).</li>
<li>You <strong>configure</strong> cookie behavior globally via the blueprint (<code v-pre>stone.http.cookie</code>, <code v-pre>stone.browser.cookie</code>).</li>
<li>You <strong>sign</strong> sensitive backend cookies safely, while keeping frontend cookies simple and clean.</li>
<li>You use the <strong>same code</strong> in both frontend and backend applications thanks to the Continuum Architecture.</li>
</ul>
<p>Stone.js handles all the heavy lifting behind the scenes: parsing, serializing, signing, securing, so you can focus on what really matters: building modern, cloud-native applications without friction.</p>
<p><strong>One Cookie API to rule them all.</strong><br>
<strong>Anywhere. Any platform. Any app.</strong></p>
</div></template>


