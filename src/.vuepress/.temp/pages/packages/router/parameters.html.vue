<template><div><p>Sometimes, we need to define dynamic segments for the <code v-pre>path</code> of our routes,
to have different matches for the same route.
These dynamic segments are known as <strong>route parameters</strong>.</p>
<h2 id="dynamic-route" tabindex="-1"><a class="header-anchor" href="#dynamic-route"><span>Dynamic Route</span></a></h2>
<p>To define route parameters, we use either:</p>
<ul>
<li><code v-pre>/users/{id}</code> curly braces syntax</li>
<li><code v-pre>/users/:id</code> or colon syntax</li>
</ul>
<p>For the sake of simplicity, we will use colon syntax <code v-pre>/users/:id</code> throughout the documentation. It is worth noting that there is no advantage or disadvantage to using either or both at the same time (which is not recommended).</p>
<p>You might wonder why two different syntaxes?<br>
The answer is simple: for preferences. Stone Router, being developer-friendly, provides multiple options and leaves the choice to developers.</p>
<h3 id="path" tabindex="-1"><a class="header-anchor" href="#path"><span>Path</span></a></h3>
<p>To define route parameters, simply use colons <code v-pre>:</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id/articles/:slug'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Different values of <code v-pre>path</code> could correspond to:</p>
<ul>
<li><code v-pre>/users/12/articles/javascript</code></li>
<li><code v-pre>/users/jonh/articles/stone.js</code></li>
</ul>
<p>The <code v-pre>id</code> parameter will have respective values: <code v-pre>12</code> and <code v-pre>jonh</code>, and <code v-pre>slug</code> as <code v-pre>javascript</code> and <code v-pre>stone.js</code> respectively.</p>
<h4 id="prefix" tabindex="-1"><a class="header-anchor" href="#prefix"><span>Prefix</span></a></h4>
<p>We can also define prefixes for our dynamic segments.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/user-:id/articles/article-:slug'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Different values of <code v-pre>path</code> could correspond to:</p>
<ul>
<li><code v-pre>/users/user-12/articles/article-javascript</code></li>
<li><code v-pre>/users/user-jonh/articles/article-stone.js</code></li>
</ul>
<p>The <code v-pre>id</code> parameter will have respective values: <code v-pre>12</code> and <code v-pre>jonh</code>, and <code v-pre>slug</code> as <code v-pre>javascript</code> and <code v-pre>stone.js</code> respectively.</p>
<h3 id="domain" tabindex="-1"><a class="header-anchor" href="#domain"><span>Domain</span></a></h3>
<p>To make the domain dynamic, only curly braces <code v-pre>{}</code> should be used instead of colons <code v-pre>:</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">  <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">'{subDomain}.example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Different values of <code v-pre>domain</code> could correspond to:</p>
<ul>
<li><code v-pre>dev.example.com</code></li>
<li><code v-pre>admin.example.com</code></li>
</ul>
<p>The <code v-pre>subDomain</code> parameter will have respective values: <code v-pre>dev</code> and <code v-pre>admin</code>.</p>
<h2 id="strict-route-segment" tabindex="-1"><a class="header-anchor" href="#strict-route-segment"><span>Strict Route Segment</span></a></h2>
<p>By default, paths are case-insensitive and do not consider the presence or absence of the trailing slash <code v-pre>/users/</code>.</p>
<p>This means that this path: <code v-pre>/ARticeS/javaScript/functions/</code> will match:</p>
<ul>
<li>this one: <code v-pre>/articles/javascript/functions</code></li>
<li>and this one: <code v-pre>/ARTICLES/javaScript/functions/</code></li>
</ul>
<p>To make route paths strict so they can be case-sensitive and consider the presence or absence of the trailing slash <code v-pre>/users/</code>, we set the <code v-pre>strict</code> property to <code v-pre>true</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line">  <span class="token literal-property property">strict</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optional-parameter" tabindex="-1"><a class="header-anchor" href="#optional-parameter"><span>Optional Parameter</span></a></h2>
<p>To define optional route parameters, we use a question mark <code v-pre>?</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">'{subDomain?}.example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id/articles/:slug?'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Different values of <code v-pre>domain</code> could correspond to <code v-pre>dev.example.com</code> or <code v-pre>example.com</code>. And the <code v-pre>subDomain</code> parameter would have a value of <code v-pre>dev</code> or <code v-pre>null</code>.</p>
<p>Different values of <code v-pre>path</code> could correspond to:</p>
<ul>
<li><code v-pre>/users/12/articles/javascript</code></li>
<li><code v-pre>/users/12/articles/</code></li>
<li><code v-pre>/users/12/articles</code></li>
</ul>
<p>And the <code v-pre>slug</code> parameter would have respective values: <code v-pre>javascript</code>, <code v-pre>null</code>, and <code v-pre>null</code>.</p>
<p>Notes:</p>
<ul>
<li>To avoid undesired behaviors, optional parameters should be defined at the end.</li>
</ul>
<h2 id="repeatable-parameter" tabindex="-1"><a class="header-anchor" href="#repeatable-parameter"><span>Repeatable Parameter</span></a></h2>
<p>Repeatable route parameters allow repeating route segments as many times as possible.
By default, parameters cannot contain <code v-pre>/</code> as a value, but this is possible through repeatable parameters.
Repeatable route parameters can be <a href="#mandatory-repeatable-parameter">mandatory</a> or <a href="#optional-repeatable-parameter">optional</a>.</p>
<h3 id="mandatory-repeatable-parameter" tabindex="-1"><a class="header-anchor" href="#mandatory-repeatable-parameter"><span>Mandatory Repeatable Parameter</span></a></h3>
<p>For mandatory repeatable parameters, we use a plus sign <code v-pre>+</code>, meaning that the parameter value should repeat at least once.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">'{subDomain+}.example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/articles/:slug+'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Different values of <code v-pre>domain</code> could correspond to:</p>
<ul>
<li><code v-pre>www.admin.dev.example.com</code></li>
<li><code v-pre>admin.dev.example.com</code></li>
<li><code v-pre>dev.example.com</code></li>
<li>And not <code v-pre>example.com</code></li>
</ul>
<p>The <code v-pre>subDomain</code> parameter would have respective values depending on the aforementioned matches:</p>
<ul>
<li><code v-pre>www.admin.dev</code></li>
<li><code v-pre>admin.dev</code></li>
<li><code v-pre>dev</code></li>
</ul>
<p>Different values of <code v-pre>path</code> could correspond to:</p>
<ul>
<li><code v-pre>/articles/javascript/functions/arrow-function</code></li>
<li><code v-pre>/articles/javascript/functions</code></li>
<li><code v-pre>/articles/javascript</code></li>
<li>And not <code v-pre>/articles</code></li>
</ul>
<p>With respective values for the <code v-pre>slug</code> parameter:</p>
<ul>
<li><code v-pre>javascript/functions/arrow-function</code></li>
<li><code v-pre>javascript/functions</code></li>
<li><code v-pre>javascript</code></li>
</ul>
<h3 id="optional-repeatable-parameter" tabindex="-1"><a class="header-anchor" href="#optional-repeatable-parameter"><span>Optional Repeatable Parameter</span></a></h3>
<p>For optional repeatable parameters, we use an asterisk <code v-pre>*</code>, to indicate that the parameter value could be absent or repeated multiple times.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">'{subDomain*}.example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/articles/:slug*'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Different values of <code v-pre>domain</code> could correspond to:</p>
<ul>
<li><code v-pre>www.admin.dev.example.com</code></li>
<li><code v-pre>admin.dev.example.com</code></li>
<li><code v-pre>dev.example.com</code></li>
<li><code v-pre>example.com</code></li>
</ul>
<p>The <code v-pre>subDomain</code> parameter would have respective values depending on the aforementioned matches:</p>
<ul>
<li><code v-pre>www.admin.dev</code></li>
<li><code v-pre>admin.dev</code></li>
<li><code v-pre>dev</code></li>
<li><code v-pre>null</code></li>
</ul>
<p>Different values of <code v-pre>path</code> could correspond to:</p>
<ul>
<li><code v-pre>/articles/javascript/functions/arrow-function</code></li>
<li><code v-pre>/articles/javascript/functions</code></li>
<li><code v-pre>/articles/javascript</code></li>
<li><code v-pre>/articles</code></li>
</ul>
<p>With respective values for the <code v-pre>slug</code> parameter:</p>
<ul>
<li><code v-pre>javascript/functions/arrow-function</code></li>
<li><code v-pre>javascript/functions</code></li>
<li><code v-pre>javascript</code></li>
<li><code v-pre>null</code></li>
</ul>
<h2 id="validation-rules" tabindex="-1"><a class="header-anchor" href="#validation-rules"><span>Validation Rules</span></a></h2>
<p>We can apply validation rules to our route parameters in two ways:</p>
<ul>
<li><a href="#implicit-rules">Implicit</a></li>
<li><a href="#explicit-rules">Explicit</a></li>
</ul>
<h3 id="implicit-rules" tabindex="-1"><a class="header-anchor" href="#implicit-rules"><span>Implicit Rules</span></a></h3>
<p>Implicit rules are defined within route parameters.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">'{subDomain([a-z]+)}.example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id(\\d+)/articles/:slug(.+)?'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notes:</p>
<ul>
<li>Rules are defined within parentheses <code v-pre>([a-z]+)</code>, <code v-pre>(\\d+)</code>, and <code v-pre>(.+)</code></li>
<li>Rules must be Regex</li>
<li>Backslashes in Regex must be escaped, so instead of : <code v-pre>\d+</code> we have: <code v-pre>\\d+</code></li>
<li>Rules can be used with optional parameters <code v-pre>:slug(.+)?</code>.</li>
</ul>
<h3 id="explicit-rules" tabindex="-1"><a class="header-anchor" href="#explicit-rules"><span>Explicit Rules</span></a></h3>
<p>Explicit rules are defined within the <code v-pre>rules</code> option.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">'{subDomain}.example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id/articles/:slug?'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\d+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">slug</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(.+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">subDomain</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]+</span><span class="token regex-delimiter">/</span></span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notes:</p>
<ul>
<li>Values are Regex but they are not escaped as for Regex strings.</li>
<li>Rules can be used with optional parameters <code v-pre>:slug?</code>.</li>
</ul>
<p>Rules can be added or modified at runtime using the <code v-pre>setRules</code> and <code v-pre>addRule</code> methods from the route.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">route<span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span></span>
<span class="line">route<span class="token punctuation">.</span><span class="token function">setRules</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="global-rules" tabindex="-1"><a class="header-anchor" href="#global-rules"><span>Global Rules</span></a></h3>
<p>To apply common rules to all routes, we use the <code v-pre>setRules</code> and <code v-pre>addRule</code> methods from the router.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">setRules</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Notes:</p>
<ul>
<li>The parameter value must be a Regex.</li>
</ul>
<h2 id="default-value" tabindex="-1"><a class="header-anchor" href="#default-value"><span>Default Value</span></a></h2>
<p>We can define default values for optional parameters. This value will be assigned to the route parameter when it is not defined in the request.
We can define default values for our route parameters in two ways:</p>
<ul>
<li><a href="#implicit-default-values">Implicit</a></li>
<li><a href="#explicit-default-values">Explicit</a></li>
</ul>
<h3 id="implicit-default-values" tabindex="-1"><a class="header-anchor" href="#implicit-default-values"><span>Implicit default values</span></a></h3>
<p>Implicit default values are defined within route parameters using <code v-pre>=</code> mark.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">'{subDomain([a-z]+)?=defaultValue}.example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id(\\d+)/articles/:slug(.+)?=defaultValue'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notes:</p>
<ul>
<li>Default values are defined after the equal mark <code v-pre>=defaultValue</code></li>
<li>Default values must be the last item in the definition <code v-pre>:slug(.+)?=defaultValue</code>.</li>
</ul>
<h3 id="explicit-default-values" tabindex="-1"><a class="header-anchor" href="#explicit-default-values"><span>Explicit default values</span></a></h3>
<p>We use the <code v-pre>defaults</code> option to define explicit default values.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">'{subDomain?}.example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id/articles/:slug?'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">defaults</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">'dev'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">slug</span><span class="token operator">:</span> <span class="token string">'default'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For matches:</p>
<ul>
<li><code v-pre>example.com/users/12/articles</code></li>
<li><code v-pre>admin.example.com/users/12/articles/javascript</code></li>
</ul>
<p>The parameter values will be</p>
<ul>
<li><code v-pre>{ domain: 'dev', id: 12, slug: 'default' }</code></li>
<li><code v-pre>{ domain: 'admin', id: 12, slug: 'javascript' }</code></li>
</ul>
<p>Notes:</p>
<ul>
<li>Default values can only be set for optional parameters and will have no effect on mandatory parameters.</li>
</ul>
<h3 id="global-default-values" tabindex="-1"><a class="header-anchor" href="#global-default-values"><span>Global Default Values</span></a></h3>
<p>To define default values common to all routes, we use the <code v-pre>setDefaults</code> and <code v-pre>addDefault</code> methods from the router.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">addDefault</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">setDefaults</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">23</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


