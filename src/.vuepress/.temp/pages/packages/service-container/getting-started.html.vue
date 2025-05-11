<template><div><p>To get started with <code v-pre>Stone Service Container</code>, you need to import the Container class and create an instance of it.
This instance will act as the central registry for all your dependencies in your application.</p>
<p>Let's begin with a simple example to discover the power of the service container by logging a message.</p>
<ol>
<li><strong>Create the Logger:</strong></li>
</ol>
<CodeTabs id="13" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Your Logger class</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">log</span> <span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Your Logger class</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">log</span> <span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<ol start="2">
<li><strong>Create the class that provides the message:</strong></li>
</ol>
<CodeTabs id="28" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Your class A</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">getMessage</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">'Hello World!'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Your class A</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">getMessage</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">'Hello World!'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<ol start="3">
<li><strong>Create the class that will log the message using the logger:</strong></li>
</ol>
<CodeTabs id="43" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Your class B</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> a<span class="token punctuation">,</span> logger <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Dependency injection by destructuring in action</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> a</span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>logger <span class="token operator">=</span> logger</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">logMessage</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Binding <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/service-container'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Your class B</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token keyword">readonly</span> a<span class="token operator">:</span> <span class="token constant">A</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token keyword">readonly</span> logger<span class="token operator">:</span> Logger</span>
<span class="line"></span>
<span class="line">  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> a<span class="token punctuation">,</span> logger <span class="token punctuation">}</span><span class="token operator">:</span> Binding<span class="token operator">&lt;</span><span class="token constant">A</span> <span class="token operator">|</span> Logger<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Dependency injection by destructuring in action</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> a <span class="token keyword">as</span> <span class="token constant">A</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>logger <span class="token operator">=</span> logger <span class="token keyword">as</span> Logger</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">logMessage</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<ol start="4">
<li><strong>Use the container to manage these dependencies:</strong></li>
</ol>
<CodeTabs id="58" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Container <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/service-container'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create a container instance</span></span>
<span class="line"><span class="token keyword">const</span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Auto-binding classes</span></span>
<span class="line">container</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">autoBinding</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">autoBinding</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">autoBinding</span><span class="token punctuation">(</span>Logger<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span>Logger<span class="token punctuation">,</span> <span class="token string">'logger'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Make B instance</span></span>
<span class="line"><span class="token keyword">const</span> b <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Or Via proxy</span></span>
<span class="line"><span class="token keyword">const</span> b <span class="token operator">=</span> container<span class="token punctuation">.</span>b</span>
<span class="line"></span>
<span class="line"><span class="token comment">// Or via destructuring assignment</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> b <span class="token punctuation">}</span> <span class="token operator">=</span> container</span>
<span class="line"></span>
<span class="line"><span class="token comment">// Call logMessage method</span></span>
<span class="line">b<span class="token punctuation">.</span><span class="token function">logMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Output: Hello World!</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Container <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/service-container'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create a container instance</span></span>
<span class="line"><span class="token keyword">const</span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Auto-register components</span></span>
<span class="line">container</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">autoBinding</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">autoBinding</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">autoBinding</span><span class="token punctuation">(</span>Logger<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span>Logger<span class="token punctuation">,</span> <span class="token string">'logger'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Make B instance</span></span>
<span class="line"><span class="token keyword">const</span> b <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Call logMessage method</span></span>
<span class="line">b<span class="token punctuation">.</span><span class="token function">logMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Output: Hello World!</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>We covered how to define and register dependencies using the <code v-pre>Container</code> class, and how to leverage dependency injection through destructuring and the Proxy pattern.</p>
<p>By following these steps, you can effectively manage dependencies in your applications, making them more modular, testable, and maintainable.</p>
</div></template>


