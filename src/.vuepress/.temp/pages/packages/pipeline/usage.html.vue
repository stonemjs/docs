<template><div><p>To effectively utilize the <code v-pre>Pipeline</code> library,
you can take advantage of its fluent API to transform your data through a series of customizable methods.
These methods allow you to configure, manage, and execute your pipelines with ease,
ensuring that your data processing workflows are both efficient and adaptable.</p>
<p>The available methods are listed below:</p>
<h2 id="creating-a-pipeline" tabindex="-1"><a class="header-anchor" href="#creating-a-pipeline"><span>Creating a Pipeline</span></a></h2>
<p>To create a new pipeline, use the <code v-pre>create</code> static factory method:</p>
<CodeTabs id="12" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Use the static factory method</span></span>
<span class="line"><span class="token keyword">const</span> pipeline <span class="token operator">=</span> Pipeline<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Or with new keyword</span></span>
<span class="line"><span class="token keyword">const</span> pipeline <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Use the static factory method</span></span>
<span class="line"><span class="token keyword">const</span> pipeline <span class="token operator">=</span> Pipeline<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Or with new keyword</span></span>
<span class="line"><span class="token keyword">const</span> pipeline <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="configuring-the-pipeline" tabindex="-1"><a class="header-anchor" href="#configuring-the-pipeline"><span>Configuring the Pipeline</span></a></h2>
<p>You can configure the pipeline by setting the pipes, the method to call on each pipe, and the data to pass through the pipeline.</p>
<h3 id="set-the-passable-object" tabindex="-1"><a class="header-anchor" href="#set-the-passable-object"><span>Set the Passable Object</span></a></h3>
<p>Use the <code v-pre>send</code> method to set the data(<em>that can be any type</em>) to be passed through the pipeline:</p>
<CodeTabs id="32" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">pipeline<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'data'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">pipeline<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'data'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="set-the-pipes" tabindex="-1"><a class="header-anchor" href="#set-the-pipes"><span>Set the Pipes</span></a></h3>
<p>Use the <code v-pre>through</code> method to set the pipes for the pipeline:</p>
<CodeTabs id="46" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">pipeline<span class="token punctuation">.</span><span class="token function">through</span><span class="token punctuation">(</span><span class="token punctuation">[</span>pipe1<span class="token punctuation">,</span> pipe2<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">pipeline<span class="token punctuation">.</span><span class="token function">through</span><span class="token punctuation">(</span><span class="token punctuation">[</span>pipe1<span class="token punctuation">,</span> pipe2<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>You can also add additional pipes using the <code v-pre>pipe</code> method:</p>
<CodeTabs id="57" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">pipeline<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>pipe3<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">pipeline<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>pipe3<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="set-the-method" tabindex="-1"><a class="header-anchor" href="#set-the-method"><span>Set the Method</span></a></h3>
<p>Use the <code v-pre>via</code> method to set the method to call on each pipe, only applied to class pipes:</p>
<CodeTabs id="71" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">pipeline<span class="token punctuation">.</span><span class="token function">via</span><span class="token punctuation">(</span><span class="token string">'handle'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">pipeline<span class="token punctuation">.</span><span class="token function">via</span><span class="token punctuation">(</span><span class="token string">'handle'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="set-default-priority" tabindex="-1"><a class="header-anchor" href="#set-default-priority"><span>Set Default Priority</span></a></h3>
<p>You can set a default priority for all pipes using the <code v-pre>defaultPriority</code> method:</p>
<CodeTabs id="85" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">pipeline<span class="token punctuation">.</span><span class="token function">defaultPriority</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">pipeline<span class="token punctuation">.</span><span class="token function">defaultPriority</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="running-the-pipeline" tabindex="-1"><a class="header-anchor" href="#running-the-pipeline"><span>Running the Pipeline</span></a></h2>
<p>Use the <code v-pre>then</code> method to run the pipeline with a final destination callback:</p>
<CodeTabs id="99" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">await</span> pipeline<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span>  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">await</span> pipeline<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>data <span class="token operator">=></span>  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>If you want to run the pipeline and return the result directly, use the <code v-pre>thenReturn</code> method:</p>
<CodeTabs id="110" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> pipeline<span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> pipeline<span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="sync-and-async-pipelines" tabindex="-1"><a class="header-anchor" href="#sync-and-async-pipelines"><span>Sync and Async Pipelines</span></a></h2>
<p>By default the pipeline is asynchronous but you can configure it to run synchronously using the <code v-pre>sync</code> method:</p>
<CodeTabs id="124" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"> <span class="token comment">// Run synchronously</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> pipeline<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Same as above</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> pipeline<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Run asynchronously, the default configuration</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> pipeline<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Same as above</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> pipeline<span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"> <span class="token comment">// Run synchronously</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> pipeline<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Same as above</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> pipeline<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Run asynchronously, the default configuration</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> pipeline<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Same as above</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> pipeline<span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling"><span>Error Handling</span></a></h2>
<p>The <code v-pre>Pipeline</code> library includes error handling for invalid pipes.
If a pipe is not a function, a class, a service alias string,
or an object with a pipe and its priority, an error will be thrown.</p>
<h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"><span>Conclusion</span></a></h2>
<p>The <code v-pre>Pipeline</code> library provides a powerful and flexible way to manage pipes and middleware in your application.
By following the Chain of Responsibility pattern, it allows for easy configuration and execution of complex data processing pipelines.
Whether you need synchronous or asynchronous execution, the <code v-pre>Pipeline</code> library has you covered.</p>
</div></template>


