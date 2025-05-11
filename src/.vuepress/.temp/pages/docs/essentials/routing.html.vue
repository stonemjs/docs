<template><div><p>The Stone Router is a flexible routing system for defining routes to application functionalities. It offers a robust API for defining routes, both implicitly and explicitly, using decorators, handling nested routes, and managing route parameters, aliases, and middleware, ensuring a smooth development experience.</p>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2>
<div class="hint-container important">
<p class="hint-container-title">info</p>
<p>If you created your Stone.js project using the <code v-pre>create-stone</code> utility and chose the <code v-pre>api</code> template, the router should already be installed and ready to use.</p>
</div>
<p>Stone Router is available on the <a href="https://www.npmjs.com" target="_blank" rel="noopener noreferrer">npm registry</a> and can be installed as follows:</p>
<CodeTabs id="14" :data='[{"id":"npm"},{"id":"yarn"},{"id":"pnpm"}]' :active="0" tab-id="shell">
<template #title0="{ value, isActive }">npm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">pnpm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i @stone-js/router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> @stone-js/router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> @stone-js/router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2>
<p>Given that Stone.js adopts an adaptive configuration approach, there are two ways to configure the router. Choose the one that suits you best:</p>
<h3 id="implicit-configuration" tabindex="-1"><a class="header-anchor" href="#implicit-configuration"><span>Implicit Configuration</span></a></h3>
<p>The simplest way is implicit configuration, which involves using the <code v-pre>RouterProvider</code> decorator.</p>
<p>An example with the decorator:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core/decorators'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> RouterProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router/decorators'</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">StoneApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">@<span class="token function">RouterProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="explicit-configuration" tabindex="-1"><a class="header-anchor" href="#explicit-configuration"><span>Explicit Configuration</span></a></h3>
<p>The other way is through explicit configuration, which involves exporting the router's configuration and adapting it as needed.</p>
<p>Here is the command to export the configuration to the <code v-pre>config</code> directory:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run <span class="token builtin class-name">export</span> @stone-js/router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This script will create the file <code v-pre>config/router.mjs</code> or <code v-pre>config/router.ts</code> for TypeScript applications with default configurations, but you can adapt it to your needs as all configuration fields are documented within the file.</p>
<h2 id="route-definition" tabindex="-1"><a class="header-anchor" href="#route-definition"><span>Route Definition</span></a></h2>
<p>Stone.js, being a flexible framework, allows you to define your routes either explicitly or implicitly. You are free to choose the method that best suits your needs. For simplicity, we will focus on explicit definitions for now and cover implicit definitions in the controller section.</p>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>For best practices, uniformity, and coherence, it is recommended to adopt and maintain a single approach to route definition per project.</p>
</div>
<h3 id="explicit-route-definition" tabindex="-1"><a class="header-anchor" href="#explicit-route-definition"><span>Explicit Route Definition</span></a></h3>
<p>The router provides several APIs for defining routes explicitly:</p>
<ul>
<li><code v-pre>router.get({})</code></li>
<li><code v-pre>router.post({})</code></li>
<li><code v-pre>router.put({})</code></li>
<li><code v-pre>router.patch({})</code></li>
<li><code v-pre>router.delete({})</code></li>
<li><code v-pre>router.options({})</code></li>
<li><code v-pre>router.any({})</code></li>
<li><code v-pre>router.match({})</code></li>
<li><code v-pre>router.register([])</code></li>
</ul>
<p>Here is a simple example of defining routes:</p>
<CodeTabs id="121" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> HttpResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/http-core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core/decorators'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> RouterProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router/decorators'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeHttpAdapter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-adapter/decorators'</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">StoneApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">@<span class="token function">RouterProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">@<span class="token function">NodeHttpAdapter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container <span class="token operator">=</span> container</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">eventContext</span><span class="token punctuation">)</span> <span class="token operator">=></span> HttpResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> EventContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/router'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> HttpResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/http-core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core/decorators'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> RouterProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router/decorators'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeHttpAdapter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-adapter/decorators'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">CustomBinding</span> <span class="token punctuation">{</span></span>
<span class="line">  router<span class="token operator">:</span> Router</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">RouterProvider</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">NodeHttpAdapter</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token keyword">readonly</span> container<span class="token operator">:</span> CustomBinding</span>
<span class="line"></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span>container<span class="token operator">:</span> CustomBinding<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container <span class="token operator">=</span> container</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      path<span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token punctuation">(</span>eventContext<span class="token operator">:</span> EventContext<span class="token punctuation">)</span> <span class="token operator">=></span> HttpResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h4 id="register" tabindex="-1"><a class="header-anchor" href="#register"><span>Register</span></a></h4>
<p>The <code v-pre>register</code> API offers greater flexibility in defining routes, allowing us to group our routes in a hierarchical parent-child structure, which will be discussed later.</p>
<p>Here is a simple example using the <code v-pre>register</code> API:</p>
<CodeTabs id="138" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> HttpResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/http-core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core/decorators'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> RouterProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router/decorators'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeHttpAdapter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-adapter/decorators'</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">StoneApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">@<span class="token function">RouterProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">@<span class="token function">NodeHttpAdapter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">routeDefinitions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">routeDefinitions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">eventContext</span><span class="token punctuation">)</span> <span class="token operator">=></span> HttpResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core/decorators'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Router<span class="token punctuation">,</span> EventContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/router'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> RouterProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router/decorators'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeHttpAdapter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-adapter/decorators'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> HttpResponse<span class="token punctuation">,</span> OutgoingHttpResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">CustomBinding</span> <span class="token punctuation">{</span></span>
<span class="line">  router<span class="token operator">:</span> Router</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">RouterProvider</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">NodeHttpAdapter</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token keyword">readonly</span> container<span class="token operator">:</span> CustomBinding</span>
<span class="line"></span>
<span class="line">  <span class="token function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">routeDefinitions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">routeDefinitions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        path<span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">        method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token punctuation">(</span>eventContext<span class="token operator">:</span> EventContext<span class="token punctuation">)</span> <span class="token operator">=></span> HttpResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>As you can see, the routes are registered within the <code v-pre>boot</code> method because by the time this hook is executed, all services are registered and ready to be used.</p>
<h3 id="controller" tabindex="-1"><a class="header-anchor" href="#controller"><span>Controller</span></a></h3>
<p>The previous example served as a starting point to facilitate understanding, but the best way to use routes is with controllers. Controllers help you organize your application's functionalities and keep your main handler clean.</p>
<h4 id="implicit" tabindex="-1"><a class="header-anchor" href="#implicit"><span>Implicit</span></a></h4>
<p>The router provides several decorators for defining routes implicitly:</p>
<ul>
<li><code v-pre>Get({})</code></li>
<li><code v-pre>Post({})</code></li>
<li><code v-pre>Put({})</code></li>
<li><code v-pre>Patch({})</code></li>
<li><code v-pre>Delete({})</code></li>
<li><code v-pre>Options({})</code></li>
<li><code v-pre>Any({})</code></li>
<li><code v-pre>Match({})</code></li>
<li><code v-pre>Group({})</code></li>
<li><code v-pre>Controller({})</code></li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">info</p>
<p>All decorators are method decorators, except for <code v-pre>Controller</code>. The <code v-pre>Controller</code> decorator is mandatory in the context of implicit route definitions.</p>
</div>
<p>Here is a simple example of usage:</p>
<CodeTabs id="221" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> EventContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/router'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> HttpResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/http-core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Get<span class="token punctuation">,</span> Post<span class="token punctuation">,</span> Controller <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router/decorators'</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">Controller</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line">  @<span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> event <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> HttpResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  @<span class="token function">Post</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">saveUser</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> event <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> HttpResponse<span class="token punctuation">.</span><span class="token function">noContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> EventContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/router'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Get<span class="token punctuation">,</span> Post<span class="token punctuation">,</span> Controller <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router/decorators'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> HttpResponse<span class="token punctuation">,</span> OutgoingHttpResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'/users'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token punctuation">{</span> event <span class="token punctuation">}</span><span class="token operator">:</span> EventContext<span class="token punctuation">)</span><span class="token operator">:</span> OutgoingHttpResponse <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> HttpResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'/users'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">saveUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span> event <span class="token punctuation">}</span><span class="token operator">:</span> EventContext<span class="token punctuation">)</span><span class="token operator">:</span> OutgoingHttpResponse <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> HttpResponse<span class="token punctuation">.</span><span class="token function">noContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h4 id="explicit" tabindex="-1"><a class="header-anchor" href="#explicit"><span>Explicit</span></a></h4>
<p>Routes can also be explicitly defined for controllers to offer greater flexibility. To do this, we use a class with the mandatory <code v-pre>definitions</code> method that returns the route definitions. The <code v-pre>Routes</code> decorator ensures the automatic registration of routes and takes global options to apply to the routes as parameters.</p>
<CodeTabs id="235" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">GET</span><span class="token punctuation">,</span> <span class="token constant">POST</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Routes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router/decorators'</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">@<span class="token function">Routes</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">'/v1'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// Define global routes config here</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppRoutes</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">definitions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token constant">GET</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">getUsers</span><span class="token operator">:</span> UserController <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token constant">POST</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">saveUser</span><span class="token operator">:</span> UserController <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">GET</span><span class="token punctuation">,</span> <span class="token constant">POST</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Routes<span class="token punctuation">,</span> Definition <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router/decorators'</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Routes</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> prefix<span class="token operator">:</span> <span class="token string">'/v1'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// Define global routes config here</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppRoutes</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">definitions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Definition<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        path<span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">        method<span class="token operator">:</span> <span class="token constant">GET</span><span class="token punctuation">,</span></span>
<span class="line">        action<span class="token operator">:</span> <span class="token punctuation">{</span> getUsers<span class="token operator">:</span> UserController <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        path<span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">        method<span class="token operator">:</span> <span class="token constant">POST</span><span class="token punctuation">,</span></span>
<span class="line">        action<span class="token operator">:</span> <span class="token punctuation">{</span> saveUser<span class="token operator">:</span> UserController <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>As you can see, for a controller, the <code v-pre>action</code> takes a key-value literal object, with the key being the method to call and the value being the class that contains the method.</p>
<h3 id="naming-routes" tabindex="-1"><a class="header-anchor" href="#naming-routes"><span>Naming Routes</span></a></h3>
<p>To name our routes, we use the <code v-pre>name</code> property in the definition.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/v1/users'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'users.list'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fallback" tabindex="-1"><a class="header-anchor" href="#fallback"><span>Fallback</span></a></h3>
<p>To define a route as a fallback, simply add <code v-pre>fallback: true</code> in the definition.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/v1/:fallback*'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grouping-routes" tabindex="-1"><a class="header-anchor" href="#grouping-routes"><span>Grouping Routes</span></a></h3>
<p>To group route definitions, use the <code v-pre>children</code> property, which takes an array of route definitions.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'users'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'list'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">getUsers</span><span class="token operator">:</span> UserController <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="route-parameters" tabindex="-1"><a class="header-anchor" href="#route-parameters"><span>Route Parameters</span></a></h2>
<p>Sometimes, we need to define dynamic segments for the path of our routes to have different matches for the same route. These dynamic segments are known as route parameters.</p>
<p>To define route parameters, simply use colons <code v-pre>:</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters"><span>Optional Parameters</span></a></h3>
<p>To define optional route parameters, we use a question mark <code v-pre>?</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id?'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="validation-rules" tabindex="-1"><a class="header-anchor" href="#validation-rules"><span>Validation Rules</span></a></h3>
<p>We can apply validation rules to our route parameters:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id(\\d+)'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notes:</p>
<ul>
<li>Rules are defined within parentheses <code v-pre>(\\d+)</code>.</li>
<li>Rules must be Regex.</li>
<li>Backslashes in Regex must be escaped, so instead of <code v-pre>\d+</code> we use <code v-pre>\\d+</code>.</li>
<li>Rules can be used with optional parameters <code v-pre>:id(\\d+)?</code>.</li>
</ul>
<h3 id="default-value" tabindex="-1"><a class="header-anchor" href="#default-value"><span>Default Value</span></a></h3>
<p>We can define default values for optional parameters. This value will be assigned to the route parameter when it is not defined in the request.</p>
<p>Default values are defined within route parameters using the <code v-pre>=</code> mark.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id(\\d+)?=defaultValue'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notes:</p>
<ul>
<li>Default values are defined after the equal mark <code v-pre>=defaultValue</code>.</li>
<li>Default values must be the last item in the definition <code v-pre>:id(\\d+)?=defaultValue</code>.</li>
</ul>
<h2 id="eventcontext" tabindex="-1"><a class="header-anchor" href="#eventcontext"><span>EventContext</span></a></h2>
<p>When in the context of the Router, an <code v-pre>EventContext</code> instead of an <code v-pre>event</code> is passed as a parameter to all route actions.</p>
<CodeTabs id="347" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Controller</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token parameter">eventContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventContext<span class="token punctuation">.</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Route definitions</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">eventContext</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventContext<span class="token punctuation">.</span>event<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> EventContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Controller</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">getUsers</span><span class="token punctuation">(</span>eventContext<span class="token operator">:</span> EventContext<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventContext<span class="token punctuation">.</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Route definitions</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token punctuation">(</span>eventContext<span class="token operator">:</span> EventContext<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventContext<span class="token punctuation">.</span>event<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>Here is what the <code v-pre>EventContext</code> object looks like:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">EventContext</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  route<span class="token operator">:</span> Route<span class="token punctuation">;</span> <span class="token comment">// Current route</span></span>
<span class="line">  event<span class="token operator">:</span> IncomingEvent <span class="token operator">|</span> IncomingHttpEvent<span class="token punctuation">;</span> <span class="token comment">// Current incoming event</span></span>
<span class="line">  request<span class="token operator">:</span> IncomingEvent <span class="token operator">|</span> IncomingHttpEvent<span class="token punctuation">;</span> <span class="token comment">// An alias of event</span></span>
<span class="line">  parameters<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// Route parameters if exist</span></span>
<span class="line">  params<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// An alias of parameters</span></span>
<span class="line">  body<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span> <span class="token comment">// Event body if exists</span></span>
<span class="line">  payload<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span> <span class="token comment">// An alias of body</span></span>
<span class="line">  query<span class="token operator">:</span> URLSearchParams<span class="token punctuation">;</span> <span class="token comment">// Event query parameters if exist</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="accessing-the-current-route" tabindex="-1"><a class="header-anchor" href="#accessing-the-current-route"><span>Accessing the Current Route</span></a></h2>
<p>You can access the current route from the router using the <code v-pre>current</code> method:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>You can access the name of the current route using the <code v-pre>currentRouteName</code> method:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">currentRouteName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>You can inspect the name of the current route using the <code v-pre>isCurrentRouteNamed</code> method:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">isCurrentRouteNamed</span><span class="token punctuation">(</span><span class="token string">'users.list'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="middleware" tabindex="-1"><a class="header-anchor" href="#middleware"><span>Middleware</span></a></h2>
<p>To apply middleware directly to routes, use the <code v-pre>middleware</code> property, which takes an array of middleware.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line">  <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>AuthMiddleware<span class="token punctuation">,</span> AdminMiddleware<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generating-routes" tabindex="-1"><a class="header-anchor" href="#generating-routes"><span>Generating Routes</span></a></h2>
<p>To generate a URL from a route name, use the <code v-pre>generate</code> method from the router:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token string">'users.list'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="model-binding" tabindex="-1"><a class="header-anchor" href="#model-binding"><span>Model Binding</span></a></h2>
<p>Often, the values of route parameters are used to fetch models from the database. With model binding, Stone Router can fetch models for you and inject them directly into the routes. Instead of injecting a user ID, the router will inject the user model fetched from the database.</p>
<p>Let's define your model:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Your model or service</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">resolveRouteBinding</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findOneBy</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">:</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Fetch data example</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now let's define your controller:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">@<span class="token function">Controller</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line">  @<span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:user@id(\\d+)'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">bindings</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> User <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>user<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> HttpResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example <code v-pre>:user@id(\\d+)</code>, the model will be injected into <code v-pre>params.user</code> and <code v-pre>id</code> will be used as the key for the <code v-pre>resolveRouteBinding</code> method to resolve the model.</p>
<p>Notes:</p>
<ul>
<li>The <code v-pre>bindings</code> option is used to bind models or services to route parameter values.</li>
<li>The <code v-pre>bindings</code> option takes a literal object as a value, with keys corresponding to parameter values and the model or service as the value.</li>
<li>The keys' values in <code v-pre>bindings</code> must be classes.</li>
<li>The <code v-pre>resolveRouteBinding</code> method must be present in the model or service and can be a static or instance method.</li>
<li>The logic for fetching the model should be implemented in the <code v-pre>resolveRouteBinding</code> method.</li>
<li>It should return the model or null if no model is found.</li>
</ul>
<h2 id="listing-routes-from-the-cli" tabindex="-1"><a class="header-anchor" href="#listing-routes-from-the-cli"><span>Listing Routes from the CLI</span></a></h2>
<p>The Router allows you to list all the routes exposed within your application using the Stone.js CLI:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">stone router list</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="global-configuration" tabindex="-1"><a class="header-anchor" href="#global-configuration"><span>Global Configuration</span></a></h2>
<p>All global parameters can be defined via <code v-pre>RouterProvider</code> or <code v-pre>Routes</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Example with RouterProvider</span></span>
<span class="line">@<span class="token function">RouterProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">'/v1'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">strict</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">skipMiddleware</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Example with Routes</span></span>
<span class="line">@<span class="token function">Routes</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">'/v1'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">strict</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">skipMiddleware</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppRoutes</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="further-reading" tabindex="-1"><a class="header-anchor" href="#further-reading"><span>Further Reading</span></a></h2>
<p>We strongly recommend looking into the <RouteLink to="/packages/router/getting-started.html">router documentation</RouteLink>,
as this section provides only a brief overview of the router's features.
The documentation is very detailed and offers many use cases.</p>
</div></template>


