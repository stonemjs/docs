<template><div><p>In Stone.js, middleware is how you <strong>act on the internal context</strong>.</p>
<p>Unlike <a href="./lifecycle">Hooks</a>, which observe and react, middleware <strong>participates directly</strong> in the flow. It can <strong>intercept, transform, short-circuit</strong>, or fully redirect the system’s behavior as it unfolds across dimensions.</p>
<p>Middleware is always <strong>dimension-specific</strong>, but its structure remains consistent. It gives you the power to shape both the <strong>creation</strong> and the <strong>execution</strong> of context, making it one of the most expressive tools in the framework.</p>
<p>This page focuses on <strong>Initialization middleware</strong>, which operates at the kernel or route level, where intentions are fully formed and ready to meet the domain. It’s where most user-level logic lives, and where middleware becomes your primary tool to <strong>control the interaction between context and domain logic</strong>.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The principles described here apply to <strong>all middleware</strong>, regardless of dimension.<br>
Even if you’re working with Integration or Setup middleware, this page lays the foundation.<br>
For dimension-specific details, refer to the <a href="../blueprint">Blueprint</a> and <a href="../adapter">Adapter</a> documentation.</p>
</div>
<p>Middleware is how you shape the continuum <strong>from within</strong>. Use it intentionally, and use it often.</p>
<h2 id="using-middleware" tabindex="-1"><a class="header-anchor" href="#using-middleware"><span>Using Middleware</span></a></h2>
<p>In Stone.js, all middleware follow a <strong>shared structure</strong>, no matter which dimension they belong to. This structural consistency is a core part of the Continuum Architecture: <strong>only the context and return type change</strong>, the shape remains the same.</p>
<p>Whether you're enriching a blueprint, transforming an adapter’s raw input, or intercepting a request before it reaches the domain, middleware always receives a <strong>context</strong>, a <code v-pre>next()</code> function, and must return a result.</p>
<p>Stone.js supports three interchangeable middleware variants:</p>
<ul>
<li><strong>Class-based</strong>, required when using the Declarative API with decorators</li>
<li><strong>Function-based</strong>, simple, flexible, ideal for functional or imperative registration</li>
<li><strong>Factory-based</strong>, dynamic and dependency-aware, used when function-based middleware needs to be parameterized or contextualized</li>
</ul>
<p>You can use any of these shapes in <strong>any dimension</strong>. The continuum doesn’t restrict you, it empowers you to choose what fits best.</p>
<h3 id="middleware-signature" tabindex="-1"><a class="header-anchor" href="#middleware-signature"><span>Middleware Signature</span></a></h3>
<p>All middleware in Stone.js share the <strong>same function signature</strong>, regardless of the dimension they operate in:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> middleware <span class="token operator">=</span> <span class="token operator">&lt;</span>ContextType<span class="token punctuation">,</span> ReturnType<span class="token operator">></span><span class="token punctuation">(</span></span>
<span class="line">  context<span class="token operator">:</span> ContextType<span class="token punctuation">,</span></span>
<span class="line">  next<span class="token operator">:</span> NextMiddleware<span class="token operator">&lt;</span>ContextType<span class="token punctuation">,</span> ReturnType<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> ReturnType <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Each middleware receives:</p>
<ul>
<li>A <code v-pre>context</code>: the dimension-specific data for that phase (e.g. <code v-pre>IncomingHttpEvent</code>, <code v-pre>BlueprintContext</code>, etc.)</li>
<li>A <code v-pre>next()</code> function: used to forward the context to the next middleware in the chain</li>
<li>A return value: either the result of <code v-pre>next()</code> or a short-circuited custom response</li>
</ul>
<p>The middleware can:</p>
<ul>
<li><strong>Mutate</strong> the context before calling <code v-pre>next()</code></li>
<li><strong>Intercept and modify</strong> the result after <code v-pre>next()</code> returns</li>
<li><strong>Short-circuit</strong> the flow by returning early (e.g. an error response)</li>
<li><strong>Break the chain</strong> entirely by throwing an exception</li>
</ul>
<p>This structure makes middleware expressive, composable, and highly controllable, regardless of where it runs in the continuum.</p>
<h3 id="middleware-variants" tabindex="-1"><a class="header-anchor" href="#middleware-variants"><span>Middleware Variants</span></a></h3>
<p>Stone.js middleware can be written in three interchangeable forms: <strong>class</strong>, <strong>function</strong>, or <strong>factory</strong>.<br>
Each variant provides the same capabilities and can be used in any dimension, choose the shape that best fits your design or context.</p>
<Tabs id="113" :data='[{"id":"Class-based"},{"id":"Function-based"},{"id":"Factory-based"}]' :active="0" tab-id="class-factory-function">
<template #title0="{ value, isActive }">Class-based</template>
<template #title1="{ value, isActive }">Function-based</template>
<template #title2="{ value, isActive }">Factory-based</template>
<template #tab0="{ value, isActive }">
<h4 id="class-based-middleware" tabindex="-1"><a class="header-anchor" href="#class-based-middleware"><span>Class-based Middleware</span></a></h4>
<p>In class-based middleware, you implement a <code v-pre>handle()</code> method.<br>
This form is compatible with the Declarative API and supports dependency injection via the constructor.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IMiddleware<span class="token punctuation">,</span> NextMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent<span class="token punctuation">,</span> OutgoingHttpResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyMiddleware</span> <span class="token keyword">implements</span> <span class="token class-name">IMiddleware<span class="token operator">&lt;</span>IncomingHttpEvent<span class="token punctuation">,</span> OutgoingHttpResponse<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token keyword">readonly</span> userService<span class="token operator">:</span> UserService</span>
<span class="line"></span>
<span class="line">  <span class="token comment">// Destructuring dependencies injection from the container</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span> userService <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> userService<span class="token operator">:</span> UserService <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>userService <span class="token operator">=</span> userService</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">handle</span><span class="token punctuation">(</span></span>
<span class="line">    event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">,</span></span>
<span class="line">    next<span class="token operator">:</span> NextMiddleware<span class="token operator">&lt;</span>IncomingHttpEvent<span class="token punctuation">,</span> OutgoingHttpResponse<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>OutgoingHttpResponse<span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Add contextual info</span></span>
<span class="line">    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userService<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'user-id'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    event<span class="token punctuation">.</span><span class="token function">setUserResolver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> user<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Short-circuit if missing header</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>event<span class="token punctuation">.</span><span class="token function">hasHeader</span><span class="token punctuation">(</span><span class="token string">'X-Request-ID'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> OutgoingHttpResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">'Missing X-Request-ID header'</span> <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Break the flow completely</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?.</span>role <span class="token operator">!==</span> <span class="token string">'admin'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnauthorizedError</span><span class="token punctuation">(</span><span class="token string">'Unauthorized'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Continue</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Add header to result</span></span>
<span class="line">    response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'X-Request-ID'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">'X-Request-ID'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> response</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use this shape when working with decorators or when you want access to constructor-injected dependencies.</p>
</template>
<template #tab1="{ value, isActive }">
<h4 id="function-based-middleware" tabindex="-1"><a class="header-anchor" href="#function-based-middleware"><span>Function-based Middleware</span></a></h4>
<p>Function-based middleware is concise, expressive, and ideal for functional use cases or manual registration.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NextMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent<span class="token punctuation">,</span> OutgoingHttpResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> MyMiddleware <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span></span>
<span class="line">  event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">,</span></span>
<span class="line">  next<span class="token operator">:</span> NextMiddleware<span class="token operator">&lt;</span>IncomingHttpEvent<span class="token punctuation">,</span> OutgoingHttpResponse<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>OutgoingHttpResponse<span class="token operator">></span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  event<span class="token punctuation">.</span><span class="token function">setUserResolver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'John Doe'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Function middleware offers full control with minimal boilerplate, and is preferred for most imperative scenarios.</p>
</template>
<template #tab2="{ value, isActive }">
<h4 id="factory-based-middleware" tabindex="-1"><a class="header-anchor" href="#factory-based-middleware"><span>Factory-based Middleware</span></a></h4>
<p>Use a factory when your function-based middleware needs to receive configuration or services from the container.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NextMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent<span class="token punctuation">,</span> OutgoingHttpResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createUserResolverMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> userService <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> userService<span class="token operator">:</span> UserService <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">async</span> <span class="token punctuation">(</span></span>
<span class="line">  event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">,</span></span>
<span class="line">  next<span class="token operator">:</span> NextMiddleware<span class="token operator">&lt;</span>IncomingHttpEvent<span class="token punctuation">,</span> OutgoingHttpResponse<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>OutgoingHttpResponse<span class="token operator">></span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> userService<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'user-id'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  event<span class="token punctuation">.</span><span class="token function">setUserResolver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> user<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> result</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This shape is useful when you need dynamic logic based on runtime conditions, environment, or resolved services, without using a class.</p>
</template>
</Tabs>
<h3 id="why-call-next" tabindex="-1"><a class="header-anchor" href="#why-call-next"><span>Why call <code v-pre>next()</code></span></a></h3>
<p>Calling <code v-pre>next()</code> signals that your middleware has finished its work and the context should proceed to the next middleware in the chain, or to the final handler if none remain.<br>
Every middleware <strong>must return a value</strong>, either by returning early, forwarding the result of <code v-pre>next()</code>, or throwing an error.</p>
<p>This mechanism gives you full control over the execution flow:</p>
<h4 id="_1-modify-the-context-before-continuing" tabindex="-1"><a class="header-anchor" href="#_1-modify-the-context-before-continuing"><span>1. Modify the context before continuing</span></a></h4>
<p>Mutate the context before forwarding it to the next step.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">event<span class="token punctuation">.</span><span class="token function">setUserResolver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> user<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here, we attach the user to the <code v-pre>IncomingHttpEvent</code> before it reaches the handler.</p>
<h4 id="_2-short-circuit-the-middleware-chain" tabindex="-1"><a class="header-anchor" href="#_2-short-circuit-the-middleware-chain"><span>2. Short-circuit the middleware chain</span></a></h4>
<p>Return early without calling <code v-pre>next()</code> to skip the rest of the chain.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>event<span class="token punctuation">.</span><span class="token function">hasHeader</span><span class="token punctuation">(</span><span class="token string">'X-Request-ID'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> OutgoingHttpResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">'Missing X-Request-ID header'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Middleware must always return an <code v-pre>OutgoingResponse</code> or a subclass of it. In this case, we return a <code v-pre>400</code> response and prevent the handler from running.</p>
<h4 id="_3-break-the-flow-entirely" tabindex="-1"><a class="header-anchor" href="#_3-break-the-flow-entirely"><span>3. Break the flow entirely</span></a></h4>
<p>Throw an error to stop execution.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?.</span>role <span class="token operator">!==</span> <span class="token string">'admin'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnauthorizedError</span><span class="token punctuation">(</span><span class="token string">'Unauthorized'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This halts the pipeline and triggers error handling logic.</p>
<h4 id="_4-act-after-the-rest-of-the-chain" tabindex="-1"><a class="header-anchor" href="#_4-act-after-the-rest-of-the-chain"><span>4. Act after the rest of the chain</span></a></h4>
<p>Capture and modify the result after downstream middleware or the handler.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span>
<span class="line">result<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'X-Request-ID'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">'X-Request-ID'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">return</span> result</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This lets you wrap, modify, or augment the final response before it leaves the system.</p>
<p>This simple yet powerful pattern is what makes middleware composable, interruptible, and expressive across all dimensions.</p>
<h3 id="sync-or-async-both" tabindex="-1"><a class="header-anchor" href="#sync-or-async-both"><span>Sync or Async? Both.</span></a></h3>
<p>Middleware can be <strong>synchronous</strong> or <strong>asynchronous</strong>, as long as it returns the appropriate value.<br>
Stone.js handles middleware flow seamlessly, so you're free to mix sync and async styles without friction.</p>
<h3 id="use-any-variant-in-any-dimension" tabindex="-1"><a class="header-anchor" href="#use-any-variant-in-any-dimension"><span>Use Any Variant, in Any Dimension</span></a></h3>
<p>Stone.js does not restrict middleware variants by dimension.</p>
<p>You can use:</p>
<ul>
<li><strong>Class-based</strong> middleware</li>
<li><strong>Function-based</strong> middleware</li>
<li><strong>Factory-based</strong> middleware</li>
</ul>
<p>…in any dimension:</p>
<ul>
<li><a href="./blueprint#dynamic-configuration">Setup</a></li>
<li>Integration</li>
<li>Initialization</li>
</ul>
<p>The only difference is the <strong>context and return type</strong>, which are defined by the dimension itself.</p>
<p><strong>Continuum means flexibility</strong>, choose the shape that suits your logic, and let the system adapt to it.</p>
<h2 id="middleware-registration" tabindex="-1"><a class="header-anchor" href="#middleware-registration"><span>Middleware Registration</span></a></h2>
<p>Once your middleware is defined, it needs to be <strong>registered</strong> so Stone.js can discover and execute it at the appropriate point in the system lifecycle.</p>
<p>There are two ways to register middleware:</p>
<ul>
<li><strong>Declarative API</strong>, via decorators on class-based middleware</li>
<li><strong>Imperative API</strong>, via the blueprint, using namespace keys and metadata</li>
</ul>
<CodeTabs id="282" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<a class="header-anchor" href="#declarative-api"><span>Declarative API</span></a><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Middleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Middleware</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyMiddleware</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<a class="header-anchor" href="#imperative-api"><span>Imperative API</span></a><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> mainBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.kernel.middleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> module<span class="token operator">:</span> MyMiddleware <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="priority-and-execution-order" tabindex="-1"><a class="header-anchor" href="#priority-and-execution-order"><span>Priority and Execution Order</span></a></h3>
<p>Stone.js executes middleware in the order they are defined, unless you specify a <code v-pre>priority</code>.</p>
<ul>
<li>Lower values run first (<code v-pre>priority: 0</code> runs before <code v-pre>priority: 10</code>)</li>
<li>If no priority is defined, middleware are executed in registration order</li>
</ul>
<CodeTabs id="329" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Middleware</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> priority<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyMiddleware</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.kernel.middleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> module<span class="token operator">:</span> MyMiddleware<span class="token punctuation">,</span> priority<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="middleware-options" tabindex="-1"><a class="header-anchor" href="#middleware-options"><span>Middleware Options</span></a></h3>
<p>Whether registered declaratively or imperatively, you can configure middleware using the following options:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MiddlewareOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  alias<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  priority<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  global<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>A complete example:</strong></p>
<CodeTabs id="347" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Middleware</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> priority<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> alias<span class="token operator">:</span> <span class="token string">'auth'</span><span class="token punctuation">,</span> global<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyMiddleware</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.kernel.middleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> module<span class="token operator">:</span> MyMiddleware<span class="token punctuation">,</span> priority<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> alias<span class="token operator">:</span> <span class="token string">'auth'</span><span class="token punctuation">,</span> global<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h4 id="alias" tabindex="-1"><a class="header-anchor" href="#alias"><span><code v-pre>alias</code></span></a></h4>
<p>A named identifier you can use to reference the middleware later, for example, in route definitions:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> middleware<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'auth'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="global" tabindex="-1"><a class="header-anchor" href="#global"><span><code v-pre>global</code></span></a></h4>
<p>Set to <code v-pre>true</code> to apply this middleware to <strong>all IncomingEvent executions</strong> by default.<br>
If omitted or <code v-pre>false</code>, the middleware is considered <strong>route-specific</strong> and must be explicitly referenced.</p>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>Middleware is one of the most flexible and expressive features in Stone.js, but with great power comes great opportunity for chaos. Follow these guidelines to get the most out of your middleware design while keeping your system clean, scalable, and continuum-aligned.</p>
<h4 id="keep-middleware-single-purpose" tabindex="-1"><a class="header-anchor" href="#keep-middleware-single-purpose"><span>Keep Middleware Single-Purpose</span></a></h4>
<p>Each middleware should do <strong>one thing well</strong>.</p>
<p>Good:</p>
<ul>
<li>One middleware for authentication</li>
<li>Another for input validation</li>
<li>Another for response shaping</li>
</ul>
<p>Avoid building &quot;mega-middleware&quot; that tries to handle multiple unrelated concerns.</p>
<h4 id="don-t-skip-the-return" tabindex="-1"><a class="header-anchor" href="#don-t-skip-the-return"><span>Don’t Skip the Return</span></a></h4>
<p>Every middleware <strong>must return a value</strong>, either:</p>
<ul>
<li>A custom response</li>
<li>The result of <code v-pre>next(context)</code></li>
<li>Or throw an error</li>
</ul>
<p>Returning <code v-pre>undefined</code> will break the chain and can result in runtime errors.</p>
<h4 id="use-next-with-intention" tabindex="-1"><a class="header-anchor" href="#use-next-with-intention"><span>Use <code v-pre>next()</code> with Intention</span></a></h4>
<p>Call <code v-pre>next()</code> only when you're ready to pass control forward.<br>
Modify the context before it, and the result after it, but avoid calling it conditionally or in multiple branches unless absolutely necessary.</p>
<h4 id="use-aliases-for-reusability" tabindex="-1"><a class="header-anchor" href="#use-aliases-for-reusability"><span>Use Aliases for Reusability</span></a></h4>
<p>Register middleware with an <code v-pre>alias</code> to reuse it across routes declaratively.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Middleware</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> alias<span class="token operator">:</span> <span class="token string">'auth'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Then reference it in routes:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> middleware<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'auth'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="use-global-when-appropriate" tabindex="-1"><a class="header-anchor" href="#use-global-when-appropriate"><span>Use <code v-pre>global</code> When Appropriate</span></a></h4>
<p>Global middleware applies to <strong>all intentions</strong>(<code v-pre>IncomingEvent</code>). Use this for:</p>
<ul>
<li>Logging</li>
<li>Security headers</li>
<li>Feature toggles</li>
</ul>
<p>Avoid <code v-pre>global: true</code> for logic that only applies to a subset of routes or domains.</p>
<h4 id="choose-the-right-shape" tabindex="-1"><a class="header-anchor" href="#choose-the-right-shape"><span>Choose the Right Shape</span></a></h4>
<ul>
<li>Use <strong>class-based middleware</strong> when you rely on the Declarative API</li>
<li>Use <strong>function-based middleware</strong> for quick, clear logic</li>
<li>Use <strong>factory-based middleware</strong> for dynamic, parameterized logic or need DI</li>
</ul>
<p>All shapes are valid, choose based on context, not preference.</p>
<h4 id="avoid-cross-dimensional-confusion" tabindex="-1"><a class="header-anchor" href="#avoid-cross-dimensional-confusion"><span>Avoid Cross-Dimensional Confusion</span></a></h4>
<p>Keep dimension-specific logic in its place:</p>
<ul>
<li>Use <strong>Setup middleware</strong> for configuration</li>
<li>Use <strong>Integration middleware</strong> for transforming raw input</li>
<li>Use <strong>Initialization middleware</strong> for per-intention logic</li>
<li>Use <a href="./lifecycle"><strong>Hooks</strong></a> for passive observation</li>
<li>Use <strong>Middleware</strong> for active transformation</li>
<li>Use <strong>Blueprint</strong> for system-wide configuration</li>
<li>Follow the lifecycle, middleware is powerful because it's scoped</li>
</ul>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>Middleware in Stone.js gives you the power to <strong>actively shape the flow of your system</strong>, from the moment an intention is created to the point a response is returned.</p>
<p>In this document, we focused on <strong>initialization middleware</strong>, the most common type used to handle per-intention logic like authentication, validation, and context enrichment. But the same principles apply across all dimensions.</p>
<p><strong>Key takeaways:</strong></p>
<ul>
<li>Middleware always receives a <code v-pre>context</code>, a <code v-pre>next()</code> function, and must return a value</li>
<li>You can write middleware as a <strong>class</strong>, <strong>function</strong>, or <strong>factory</strong></li>
<li>Stone.js supports both <strong>Declarative</strong> (via decorators) and <strong>Imperative</strong> (via blueprint) registration</li>
<li>Middleware can mutate, intercept, short-circuit, or wrap the execution, giving you full control</li>
<li>Always return a result and keep middleware <strong>single-responsibility and focused</strong></li>
<li>Use <code v-pre>alias</code> and <code v-pre>global</code> for composability and reuse</li>
</ul>
<p>When you need to <strong>transform</strong> the system, use middleware.<br>
When you only need to <strong>observe</strong>, use <a href="./lifecycle">Hooks</a>.<br>
The dimension defines the context. The shape is your choice.<br>
That’s the continuum.</p>
</div></template>


