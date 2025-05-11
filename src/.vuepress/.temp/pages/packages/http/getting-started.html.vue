<template><div><p>The <code v-pre>HTTP Core</code> Library is designed to seamlessly integrate with <strong>the Stone.js</strong> framework as well as function as a standalone library.</p>
<h2 id="stone-js" tabindex="-1"><a class="header-anchor" href="#stone-js"><span>Stone.js</span></a></h2>
<p>In a <strong>Stone.js</strong> application, the <code v-pre>HTTP Core</code> library is already packed with any HTTP adapter, requiring no additional configuration.</p>
<h2 id="standalone" tabindex="-1"><a class="header-anchor" href="#standalone"><span>Standalone</span></a></h2>
<p>The <code v-pre>HTTP Core</code> library can also be used as a standalone library for handling HTTP requests and responses in a Node.js application.
This approach provides flexibility and allows you to integrate the library into any existing project.</p>
<p><strong>Steps:</strong></p>
<ol>
<li><strong>Setup</strong>: Create a new Node.js project or use an existing one.</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">mkdir</span> my-stone-js-app</span>
<span class="line"><span class="token builtin class-name">cd</span> my-stone-js-app</span>
<span class="line"><span class="token function">npm</span> init <span class="token parameter variable">-y</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><strong>Install Dependencies</strong>: Install the necessary dependencies, including an HTTP adapter.</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @stone/core @stone/http-core @stone-js/node-adapter</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li><strong>Create Mappers</strong>: Define input and output mappers to transform platform incomming message to <code v-pre>IncomingHttpEvent</code>
and <code v-pre>OutgoingHttpResponse</code> to platform response.</li>
</ol>
<CodeTabs id="41" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> AdapterMapper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/http-core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  SendMiddleware<span class="token punctuation">,</span></span>
<span class="line">  HostMiddleware<span class="token punctuation">,</span></span>
<span class="line">  CommonMiddleware<span class="token punctuation">,</span></span>
<span class="line">  HeaderStatusMiddleware</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Built in middleware to transform incomming message</span></span>
<span class="line"><span class="token comment">// You can define your own middleware</span></span>
<span class="line"><span class="token keyword">const</span> inputMiddleware <span class="token operator">=</span> <span class="token punctuation">[</span>CommonMiddleware<span class="token punctuation">,</span> HostMiddleware<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Built in middleware to transform OutgoingHttpResponse</span></span>
<span class="line"><span class="token comment">// You can define your own middleware</span></span>
<span class="line"><span class="token keyword">const</span> outputMiddleware <span class="token operator">=</span> <span class="token punctuation">[</span>HeaderStatusMiddleware<span class="token punctuation">,</span> SendMiddleware<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create an inputMapper to transform incomming message to IncomingHttpEvent</span></span>
<span class="line"><span class="token keyword">const</span> inputMapper <span class="token operator">=</span> AdapterMapper<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> inputMiddleware<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> event <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> IncomingHttpEvent<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create an outputMapper to transform Stone OutgoingHttpResponse to platform specific response</span></span>
<span class="line"><span class="token keyword">const</span> outputMapper <span class="token operator">=</span> AdapterMapper<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> outputMiddleware<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> event<span class="token punctuation">,</span> response <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> AdapterMapper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/http-core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  SendMiddleware<span class="token punctuation">,</span></span>
<span class="line">  HostMiddleware<span class="token punctuation">,</span></span>
<span class="line">  CommonMiddleware<span class="token punctuation">,</span></span>
<span class="line">  HeaderStatusMiddleware</span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/@stone-js/node-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Built in middleware to transform incomming message</span></span>
<span class="line"><span class="token comment">// You can define your own middleware</span></span>
<span class="line"><span class="token keyword">const</span> inputMiddleware <span class="token operator">=</span> <span class="token punctuation">[</span>CommonMiddleware<span class="token punctuation">,</span> HostMiddleware<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Built in middleware to transform OutgoingHttpResponse</span></span>
<span class="line"><span class="token comment">// You can define your own middleware</span></span>
<span class="line"><span class="token keyword">const</span> outputMiddleware <span class="token operator">=</span> <span class="token punctuation">[</span>HeaderStatusMiddleware<span class="token punctuation">,</span> SendMiddleware<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create an inputMapper to transform incomming message to IncomingHttpEvent</span></span>
<span class="line"><span class="token keyword">const</span> inputMapper <span class="token operator">=</span> AdapterMapper<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> inputMiddleware<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> event <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> IncomingHttpEvent<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create an outputMapper to transform Stone OutgoingHttpResponse to platform specific response</span></span>
<span class="line"><span class="token keyword">const</span> outputMapper <span class="token operator">=</span> AdapterMapper<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> outputMiddleware<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> event<span class="token punctuation">,</span> response <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<ol start="4">
<li><strong>Create Event Handler:</strong> Define your event handler class.</li>
</ol>
<CodeTabs id="56" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> HttpResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Your Handler</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Received Event from:'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>host<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> HttpResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello, world!'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  HttpResponse<span class="token punctuation">,</span></span>
<span class="line">  IncomingHttpEvent<span class="token punctuation">,</span></span>
<span class="line">  OutgoingHttpResponse</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Your Handler</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingHttpEvent<span class="token punctuation">)</span><span class="token operator">:</span> OutgoingHttpResponse <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Received Event from:'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>host<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> HttpResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello, world!'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<ol start="5">
<li><strong>Create Adapter and run it</strong>: Set up the adapter with the necessary parameters.</li>
</ol>
<CodeTabs id="71" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeHTTPAdapter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create a Node http server adapter and run your App</span></span>
<span class="line">NodeHTTPAdapter<span class="token punctuation">.</span><span class="token function">createAndRun</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> inputMapper<span class="token punctuation">,</span> outputMapper <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeHTTPAdapter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create a Node http server adapter and run your App</span></span>
<span class="line">NodeHTTPAdapter<span class="token punctuation">.</span><span class="token function">createAndRun</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> inputMapper<span class="token punctuation">,</span> outputMapper <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>These examples are just for understanding the internal functioning of Stone.js
because you are more productive when you understand what is happening under the hood.</p>
</div></template>


