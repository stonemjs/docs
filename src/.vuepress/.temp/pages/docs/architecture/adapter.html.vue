<template><div><p>Adapters in Stone.js are the official bridge between your application and the outside world. Whether you’re running in a Node.js server,
a FaaS like AWS Lambda, a browser, or a CLI, adapters make it all feel the same from your application’s perspective.</p>
<h3 id="what-is-an-adapter" tabindex="-1"><a class="header-anchor" href="#what-is-an-adapter"><span>What is an adapter?</span></a></h3>
<p>An adapter is a module that translates an external request into a normalized internal event (<code v-pre>IncomingEvent</code>) and transforms your system's response (<code v-pre>OutgoingResponse</code>) back into a format that the underlying platform understands.</p>
<p>Think of it as a platform-specific translator. It wraps the unpredictable, environment-specific inputs and outputs into the standardized flow that your Stone.js system expects.</p>
<h3 id="why-use-adapters" tabindex="-1"><a class="header-anchor" href="#why-use-adapters"><span>Why use adapters?</span></a></h3>
<p>Adapters let you write one system that runs everywhere. They abstract away the platform-specific protocols, runtimes, and APIs, giving you:</p>
<ul>
<li><strong>Runtime independence</strong>: The same logic works in the browser, on a server, or in a FaaS.</li>
<li><strong>Seamless event handling</strong>: Every platform ends up producing the same kind of internal event.</li>
<li><strong>Unified development model</strong>: You don't need to worry about how requests arrive, just what they mean.</li>
</ul>
<p>Adapters are central to Stone.js's mission: <strong>build once, deploy anywhere</strong>.</p>
<h3 id="where-adapters-fit-in-the-continuum-architecture" tabindex="-1"><a class="header-anchor" href="#where-adapters-fit-in-the-continuum-architecture"><span>Where adapters fit in the Continuum Architecture</span></a></h3>
<p>In the Continuum Architecture, adapters belong to the <strong>Integration Dimension</strong>.</p>
<Mermaid id="mermaid-44" code="eJyNjzFPwzAQhff8iidX3mKpiLJkqJQEkJCYqMRSdXDJpbFw7cq21ECU/87FLDDBLXf37runOykn40yqMIk00JlEBXHUkUSJb+FVB6OPliJPpgIQvXdpZz4zebO5jKJcVGsctd76sMir7vZus16LYp5nKYve+uvboEPC8wuzQL1/GBMFpy1adqMxHaCU2qLZP3F7CjoZ73BvzuTiUinUnb7wSjxkg4bxLdpM/7IppMQuffA1J/Q+QFsL5zuKeS3yhFBzDv6d1NV0aaj4hbI31larxxw/yObfZPsH+QU3DHB1"></Mermaid><p>This is the layer that mediates between:</p>
<ul>
<li>The <strong>external context</strong> (HTTP server, CLI input, browser events, FaaS triggers...)</li>
<li>And the <strong>internal system</strong> (your application logic and domain)</li>
</ul>
<p>Adapters <strong>transform context</strong>, letting your business logic ignore where requests come from, and still respond correctly.</p>
<p>They're the gatekeepers of your application. Every event starts with them.</p>
<h3 id="how-adapters-work-at-runtime" tabindex="-1"><a class="header-anchor" href="#how-adapters-work-at-runtime"><span>How adapters work at runtime</span></a></h3>
<p>At runtime and after the Setup Phase, an adapter is the first thing executed. It:</p>
<ol>
<li>Receives a platform-native request (like an HTTP request, console args, or FaaS event).</li>
<li>Uses an <strong>input builder</strong> to create a standardized <code v-pre>IncomingEvent</code>.</li>
<li>Passes the event to the system’s kernel for processing.</li>
<li>Receives the <code v-pre>OutgoingResponse</code>.</li>
<li>Uses an <strong>output builder</strong> to convert it back into a format the platform understands.</li>
</ol>
<p>The entire journey, from real-world input to platform-specific output, is encapsulated within the adapter.</p>
<h2 id="using-adapters" tabindex="-1"><a class="header-anchor" href="#using-adapters"><span>Using Adapters</span></a></h2>
<p>Stone.js adapters are the entry points into your system.
They let you connect your code to any execution context, Node.js, FaaS, the browser, or the CLI, without changing your internal logic.</p>
<p>This section explains how to <strong>install</strong>, <strong>activate</strong>, <strong>configure</strong>, and <strong>orchestrate</strong> multiple adapters, using both the declarative and imperative APIs. We'll use the Node.js HTTP adapter in examples, but the same concepts apply to any other adapter.</p>
<h3 id="registering-adapters" tabindex="-1"><a class="header-anchor" href="#registering-adapters"><span>Registering Adapters</span></a></h3>
<p>Before using any adapter, you must install and register it.</p>
<h4 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h4>
<p>Stone.js is framework-agnostic by design, no adapter is bundled by default. You choose what to install:</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>The Node HTTP adapter is installed and activated by default when you create a new Stone.js project using the CLI.</p>
</div>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @stone-js/node-http-adapter</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Once installed, you're ready to activate it in your system.</p>
<h4 id="activate" tabindex="-1"><a class="header-anchor" href="#activate"><span>Activate</span></a></h4>
<p>You can register adapters using either the <strong>declarative</strong> or <strong>imperative</strong> API.</p>
<Tabs id="138" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h5 id="declarative" tabindex="-1"><a class="header-anchor" href="#declarative"><span>Declarative</span></a></h5>
<p>Use the adapter’s decorator (e.g., <code v-pre>@NodeHttp()</code>) on your main entry point class:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeHttp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-http-adapter'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingEvent<span class="token punctuation">,</span> IEventHandler<span class="token punctuation">,</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">NodeHttp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token keyword">implements</span> <span class="token class-name">IEventHandler<span class="token operator">&lt;</span>IncomingEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This automatically binds the adapter to your application in a platform-aware way.</p>
</template>
<template #tab1="{ value, isActive }">
<h5 id="imperative" tabindex="-1"><a class="header-anchor" href="#imperative"><span>Imperative</span></a></h5>
<p>Register the adapter blueprint using <code v-pre>defineBlueprintConfig</code>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig<span class="token punctuation">,</span> IncomingEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> nodeHttpAdapterBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-http-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">Application</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> mainBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nodeHttpAdapterBlueprint<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.kernel.eventHandler'</span><span class="token punctuation">,</span> Application<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This provides full programmatic control over registration.</p>
</template>
</Tabs>
<h3 id="built-in-adapters" tabindex="-1"><a class="header-anchor" href="#built-in-adapters"><span>Built-in Adapters</span></a></h3>
<p>Stone.js comes with several built-in adapters, each tailored for a specific environment. You can also create your own custom adapters if needed.</p>
<h4 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h4>
<p>In this table, you can find the available adapters and their installation commands.</p>
<table>
<thead>
<tr>
<th>Adapter</th>
<th>Description</th>
<th>Install Command</th>
</tr>
</thead>
<tbody>
<tr>
<td>Node HTTP</td>
<td>Runs on a Node.js HTTP server</td>
<td><code v-pre>npm install @stone-js/node-http-adapter</code></td>
</tr>
<tr>
<td>Node CLI</td>
<td>For command-line applications</td>
<td><code v-pre>npm install @stone-js/node-cli-adapter</code></td>
</tr>
<tr>
<td>Browser</td>
<td>Runs in SPA/SSR client-side apps</td>
<td><code v-pre>npm install @stone-js/browser-adapter</code></td>
</tr>
<tr>
<td>AWS Lambda</td>
<td>Runs in a generic AWS Lambda function</td>
<td><code v-pre>npm install @stone-js/aws-lambda-adapter</code></td>
</tr>
<tr>
<td>AWS Lambda HTTP</td>
<td>Runs in HTTP-based AWS Lambda function</td>
<td><code v-pre>npm install @stone-js/aws-lambda-http-adapter</code></td>
</tr>
</tbody>
</table>
<h4 id="registration" tabindex="-1"><a class="header-anchor" href="#registration"><span>Registration</span></a></h4>
<p>In this table, you can find their registration methods.</p>
<table>
<thead>
<tr>
<th>Adapter</th>
<th>Declarative Decorator</th>
<th>Imperative Blueprint</th>
</tr>
</thead>
<tbody>
<tr>
<td>Node HTTP</td>
<td><code v-pre>NodeHttp</code></td>
<td><code v-pre>nodeHttpAdapterBlueprint</code></td>
</tr>
<tr>
<td>Node CLI</td>
<td><code v-pre>NodeConsole</code></td>
<td><code v-pre>nodeConsoleAdapterBlueprint</code></td>
</tr>
<tr>
<td>Browser</td>
<td><code v-pre>Browser</code></td>
<td><code v-pre>browserAdapterBlueprint</code></td>
</tr>
<tr>
<td>AWS Lambda</td>
<td><code v-pre>AwsLambda</code></td>
<td><code v-pre>awsLambdaAdapterBlueprint</code></td>
</tr>
<tr>
<td>AWS Lambda HTTP</td>
<td><code v-pre>AwsLambdaHttp</code></td>
<td><code v-pre>awsLambdaHttpAdapterBlueprint</code></td>
</tr>
</tbody>
</table>
<h3 id="multiple-adapters" tabindex="-1"><a class="header-anchor" href="#multiple-adapters"><span>Multiple Adapters</span></a></h3>
<p>Stone.js lets you register multiple adapters at once. This allows your app to run in different environments (e.g., Node + Browser) from a single system definition.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @stone-js/node-http-adapter @stone-js/browser-adapter</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Then register them either declaratively or imperatively, they can coexist without conflict.</p>
<Tabs id="336" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h5 id="declarative-1" tabindex="-1"><a class="header-anchor" href="#declarative-1"><span>Declarative</span></a></h5>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Browser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/browser-adapter'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeHttp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-http-adapter'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingEvent<span class="token punctuation">,</span> IEventHandler<span class="token punctuation">,</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Browser</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">NodeHttp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<h5 id="imperative-1" tabindex="-1"><a class="header-anchor" href="#imperative-1"><span>Imperative</span></a></h5>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> browserAdapterBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/browser-adapter'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig<span class="token punctuation">,</span> IncomingEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> nodeHttpAdapterBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-http-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> mainBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>browserAdapterBlueprint<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nodeHttpAdapterBlueprint<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h3 id="implicit-activation-contextual-decoherence" tabindex="-1"><a class="header-anchor" href="#implicit-activation-contextual-decoherence"><span>Implicit Activation (Contextual Decoherence)</span></a></h3>
<p>When multiple adapters are installed, Stone.js keeps them in a <strong>superposition</strong> state.
At runtime, it infers the appropriate adapter based on the external context, this is called <strong>contextual decoherence</strong> in the Continuum.</p>
<p>You don’t need to decide; the system does it for you. This makes Stone.js feel magically universal.</p>
<h3 id="explicit-activation" tabindex="-1"><a class="header-anchor" href="#explicit-activation"><span>Explicit Activation</span></a></h3>
<p>For full control, you can explicitly define which adapter should be used at runtime.</p>
<Tabs id="365" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h4 id="declarative-control" tabindex="-1"><a class="header-anchor" href="#declarative-control"><span>Declarative Control</span></a></h4>
<p>You can use options directly in the adapter decorators:</p>
<ul>
<li><code v-pre>current</code>: Forces this adapter to be the one used at runtime</li>
<li><code v-pre>default</code>: Marks this adapter as the fallback if none are explicitly selected</li>
<li><code v-pre>alias</code>: Names this adapter so you can refer to it later</li>
</ul>
<p>Example:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Browser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/browser-adapter'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeHttp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-http-adapter'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp<span class="token punctuation">,</span> IncomingEvent<span class="token punctuation">,</span> IEventHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">NodeHttp</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> alias<span class="token operator">:</span> <span class="token string">'MyNodeAdapter'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Browser</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> alias<span class="token operator">:</span> <span class="token string">'MyBrowserAdapter'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token keyword">implements</span> <span class="token class-name">IEventHandler<span class="token operator">&lt;</span>IncomingEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can then resolve the current adapter based on runtime conditions using configuration:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Configuration<span class="token punctuation">,</span> IConfiguration<span class="token punctuation">,</span> IBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Configuration</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyConfig</span> <span class="token keyword">implements</span> <span class="token class-name">IConfiguration</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">configure</span><span class="token punctuation">(</span>blueprint<span class="token operator">:</span> IBlueprint<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span></span>
<span class="line">      <span class="token string">'stone.adapter.alias'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">'undefined'</span> <span class="token operator">?</span> <span class="token string">'MyBrowserAdapter'</span> <span class="token operator">:</span> <span class="token string">'MyNodeAdapter'</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Stone.js will use the <code v-pre>MyBrowserAdapter</code>'s adapter if running in a browser, or <code v-pre>MyNodeAdapter</code>'s adapter otherwise.</p>
</template>
<template #tab1="{ value, isActive }">
<h4 id="imperative-control" tabindex="-1"><a class="header-anchor" href="#imperative-control"><span>Imperative Control</span></a></h4>
<p>You can also use pure logic in your <code v-pre>defineBlueprintConfig</code> to select the adapter based on platform:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> browserAdapterBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/browser-adapter'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig<span class="token punctuation">,</span> IncomingEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> nodeHttpAdapterBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-http-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">Application</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> mainBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.kernel.eventHandler'</span><span class="token punctuation">,</span> Application<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span></span>
<span class="line">      <span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">'undefined'</span></span>
<span class="line">        <span class="token operator">?</span> browserAdapterBlueprint</span>
<span class="line">        <span class="token operator">:</span> nodeHttpAdapterBlueprint</span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Stone.js will use the <code v-pre>browserAdapterBlueprint</code> if running in a browser, or <code v-pre>nodeHttpAdapterBlueprint</code> otherwise.</p>
</template>
</Tabs>
<h3 id="configure-adapters" tabindex="-1"><a class="header-anchor" href="#configure-adapters"><span>Configure Adapters</span></a></h3>
<p>Because the current adapter is resolved dynamically at runtime,
you also need to configure it at runtime using the <a href="./blueprint#dynamic-configuration">Blueprint Middleware</a>.</p>
<Tabs id="421" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h4 id="declarative-setup" tabindex="-1"><a class="header-anchor" href="#declarative-setup"><span>Declarative Setup</span></a></h4>
<p>Use the <code v-pre>@ConfigMiddleware()</code> decorator to define a Blueprint Middleware:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> MyMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./my-middleware'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  ConfigMiddleware<span class="token punctuation">,</span> BlueprintContext<span class="token punctuation">,</span> NextMiddleware</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">ConfigMiddleware</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MySetupMiddleware</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">handle</span><span class="token punctuation">(</span>context<span class="token operator">:</span> BlueprintContext<span class="token punctuation">,</span> next<span class="token operator">:</span> NextMiddleware<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> blueprint <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>blueprint<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'stone.adapter.platform'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'browser'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token string">'stone.adapter.middleware'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">[</span><span class="token punctuation">{</span> module<span class="token operator">:</span> MyMiddleware<span class="token punctuation">,</span> isClass<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> blueprint</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<h4 id="imperative-setup" tabindex="-1"><a class="header-anchor" href="#imperative-setup"><span>Imperative Setup</span></a></h4>
<p>Define the setup middleware as a function:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> MyMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./my-middleware'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  defineBlueprintConfig<span class="token punctuation">,</span> BlueprintContext<span class="token punctuation">,</span> NextMiddleware</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">MySetupMiddleware</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span></span>
<span class="line">  context<span class="token operator">:</span> BlueprintContext<span class="token punctuation">,</span></span>
<span class="line">  next<span class="token operator">:</span> NextMiddleware</span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> blueprint <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>blueprint<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'stone.adapter.platform'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'browser'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span></span>
<span class="line">      <span class="token string">'stone.adapter.middleware'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span><span class="token punctuation">{</span> module<span class="token operator">:</span> MyMiddleware<span class="token punctuation">,</span> isClass<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> blueprint</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> appBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.blueprint.middleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>MySetupMiddleware<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<p>In this example we first get the <code v-pre>Blueprint</code> from <code v-pre>next</code> to make sure the current adapter is already inferred.
Then we check the <code v-pre>stone.adapter.platform</code> property to see if the current adapter is a browser adapter.
If it is, we add our custom middleware to the <code v-pre>stone.adapter.middleware</code> property.</p>
<h3 id="built-in-adapter-options" tabindex="-1"><a class="header-anchor" href="#built-in-adapter-options"><span>Built-in Adapter Options</span></a></h3>
<p>Each adapter exposes custom options to fine-tune its behavior. Here are some examples:</p>
<table>
<thead>
<tr>
<th>Option</th>
<th>Description</th>
<th>Adapter</th>
<th>Readonly</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>middleware</code></td>
<td>List of middleware modules to be used by the adapter</td>
<td>All</td>
<td>No</td>
</tr>
<tr>
<td><code v-pre>alias</code></td>
<td>The name of the adapter, used for resolving the current adapter at runtime</td>
<td>All</td>
<td>No</td>
</tr>
<tr>
<td><code v-pre>current</code></td>
<td>Whether this adapter should be used as the current one at runtime</td>
<td>All</td>
<td>No</td>
</tr>
<tr>
<td><code v-pre>default</code></td>
<td>Whether this adapter should be used as the default if no other is selected</td>
<td>All</td>
<td>No</td>
</tr>
<tr>
<td><code v-pre>platform</code></td>
<td>The platform the adapter is running on (e.g., <code v-pre>node_http</code>, <code v-pre>browser</code>, <code v-pre>aws_lambda_http</code>)</td>
<td>All</td>
<td>Yes</td>
</tr>
<tr>
<td><code v-pre>variant</code></td>
<td>The variant of the adapter (e.g., <code v-pre>server</code>, <code v-pre>browser</code>, <code v-pre>console</code>)</td>
<td>All</td>
<td>Yes</td>
</tr>
<tr>
<td><code v-pre>url</code></td>
<td>Base URL used to launch the HTTP server</td>
<td>Node HTTP</td>
<td>No</td>
</tr>
<tr>
<td><code v-pre>isSsl</code></td>
<td>Whether to use HTTPS</td>
<td>Node HTTP</td>
<td>No</td>
</tr>
<tr>
<td><code v-pre>server</code></td>
<td>Node HTTP server options (e.g., port, cert, host)</td>
<td>Node HTTP</td>
<td>No</td>
</tr>
<tr>
<td><code v-pre>printUrls</code></td>
<td>If <code v-pre>true</code>, prints the final server URL at startup</td>
<td>Node HTTP</td>
<td>No</td>
</tr>
<tr>
<td><code v-pre>serverMiddleware</code></td>
<td>Low-level HTTP middleware (like <code v-pre>connect</code> or <code v-pre>express</code>) before Stone Adapter middleware</td>
<td>Node HTTP</td>
<td>No</td>
</tr>
<tr>
<td><code v-pre>events</code></td>
<td>Array of DOM event types to transform into Stone <code v-pre>IncomingEvent</code>s</td>
<td>Browser</td>
<td>No</td>
</tr>
<tr>
<td><code v-pre>commands</code></td>
<td>List of command definitions as <code v-pre>MetaCommandHandler[]</code></td>
<td>Node CLI</td>
<td>No</td>
</tr>
</tbody>
</table>
<h2 id="adapter-middleware" tabindex="-1"><a class="header-anchor" href="#adapter-middleware"><span>Adapter Middleware</span></a></h2>
<p>Adapter middleware in Stone.js are not general-purpose middlewares. They don’t handle authentication, logging, or cross-cutting concerns. Instead, they serve a very specific purpose: they are <strong>builders</strong> that translate raw external inputs into normalized system events, and convert system responses back into platform-native outputs.</p>
<p>These middlewares operate at the <strong>adapter level</strong>, and are executed <strong>before</strong> your system logic runs. They allow you to participate in the construction of:</p>
<ul>
<li><code v-pre>IncomingEvent</code>: the standardized event passed to your system</li>
<li><code v-pre>rawResponse</code>: the platform-native response that is sent back to the external context</li>
</ul>
<p>To do this, they expose two builder objects:</p>
<ul>
<li><code v-pre>incomingEventBuilder</code>: used to assemble the <code v-pre>IncomingEvent</code></li>
<li><code v-pre>rawResponseBuilder</code>: used to generate the final platform response from the <code v-pre>OutgoingResponse</code></li>
</ul>
<p>Adapter middleware are a critical part of the <strong>Integration Dimension</strong>, responsible for transforming raw, unpredictable context into clean, normalized system flow, before your application logic even sees it.</p>
<h3 id="context-and-builders" tabindex="-1"><a class="header-anchor" href="#context-and-builders"><span>Context and Builders</span></a></h3>
<p>Each adapter middleware receives an <code v-pre>AdapterContext</code>, a structured object that provides access to both the raw platform data and the tools needed to build normalized system events and responses.</p>
<p>This context varies slightly depending on the adapter (Node.js, Lambda, Browser, etc.), but always follows the same structure:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">AdapterContext</span> <span class="token punctuation">{</span></span>
<span class="line">  rawEvent<span class="token operator">:</span> RawEventType</span>
<span class="line">  rawResponse<span class="token operator">?</span><span class="token operator">:</span> RawResponseType</span>
<span class="line">  executionContext<span class="token operator">:</span> ExecutionContextType</span>
<span class="line">  incomingEvent<span class="token operator">?</span><span class="token operator">:</span> IncomingEventType</span>
<span class="line">  outgoingResponse<span class="token operator">?</span><span class="token operator">:</span> OutgoingResponseType</span>
<span class="line">  incomingEventBuilder<span class="token operator">:</span> IAdapterEventBuilder</span>
<span class="line">  rawResponseBuilder<span class="token operator">:</span> IAdapterEventBuilder</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here’s what each property represents:</p>
<ul>
<li>
<p><strong><code v-pre>rawEvent</code></strong><br>
The original request or trigger received from the platform. This could be an HTTP request in Node.js, a Lambda event, CLI arguments, or a browser event.<br>
→ <em>You use this to extract data when building the <code v-pre>IncomingEvent</code>.</em></p>
</li>
<li>
<p><strong><code v-pre>rawResponse</code></strong> <em>(optional)</em><br>
The raw platform-specific response object (e.g., Node.js response stream).<br>
→ <em>Never modify this directly, always use <code v-pre>rawResponseBuilder</code> to shape the response.</em></p>
</li>
<li>
<p><strong><code v-pre>executionContext</code></strong><br>
A platform-specific object related to the environment in which the adapter is running. For example, this could be the Node HTTP server or AWS Lambda context object.<br>
→ <em>Used for platform-related metadata if needed.</em></p>
</li>
<li>
<p><strong><code v-pre>incomingEvent</code></strong> <em>(optional)</em><br>
The normalized <code v-pre>IncomingEvent</code> built from the <code v-pre>incomingEventBuilder</code>.<br>
→ <em>Do not mutate this. If you want to affect it, use the builder before calling <code v-pre>next()</code>.</em></p>
</li>
<li>
<p><strong><code v-pre>outgoingResponse</code></strong> <em>(optional)</em><br>
The final <code v-pre>OutgoingResponse</code> returned by your system logic after <code v-pre>next()</code> has been called.<br>
→ <em>You can read this to help shape the final output using <code v-pre>rawResponseBuilder</code>.</em></p>
</li>
<li>
<p><strong><code v-pre>incomingEventBuilder</code></strong><br>
A mutable builder object used to construct the <code v-pre>IncomingEvent</code>.<br>
→ <em>Call <code v-pre>add()</code> or <code v-pre>addIf()</code> to incrementally build the event.</em></p>
</li>
<li>
<p><strong><code v-pre>rawResponseBuilder</code></strong><br>
A builder for producing the final platform-native response from the system’s <code v-pre>OutgoingResponse</code>.<br>
→ <em>Also uses <code v-pre>add()</code> and <code v-pre>addIf()</code> to shape the output before returning it to the platform.</em></p>
</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>Only the builders (<code v-pre>incomingEventBuilder</code>, <code v-pre>rawResponseBuilder</code>) are meant to be mutated inside middleware. All other fields are for reading or inspection.</p>
</div>
<h3 id="working-with-builders" tabindex="-1"><a class="header-anchor" href="#working-with-builders"><span>Working with Builders</span></a></h3>
<p>Each builder offers two methods:</p>
<ul>
<li><code v-pre>add(key, value)</code>: Adds a key-value pair to the builder.</li>
<li><code v-pre>addIf(key, value)</code>: Adds value only if the key is not already present.</li>
</ul>
<h4 id="input-builder-incomingeventbuilder" tabindex="-1"><a class="header-anchor" href="#input-builder-incomingeventbuilder"><span>Input Builder: <code v-pre>incomingEventBuilder</code></span></a></h4>
<p>Transforms the external platform request into a normalized <code v-pre>IncomingEvent</code>.</p>
<p>Example:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">context<span class="token punctuation">.</span>incomingEventBuilder</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'headers'</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>rawEvent<span class="token punctuation">.</span>headers<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">addIf</span><span class="token punctuation">(</span><span class="token string">'method'</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>rawEvent<span class="token punctuation">.</span>method<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="output-builder-rawresponsebuilder" tabindex="-1"><a class="header-anchor" href="#output-builder-rawresponsebuilder"><span>Output Builder: <code v-pre>rawResponseBuilder</code></span></a></h4>
<p>Converts the <code v-pre>OutgoingResponse</code> back to the platform-native format, using <code v-pre>context.outgoingResponse</code> after the handler has executed.</p>
<p>You gain access to both the <code v-pre>incomingEvent</code> and <code v-pre>outgoingResponse</code> <strong>after</strong> calling <code v-pre>next()</code>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> rawResponseBuilder <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">rawResponseBuilder</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'headers'</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>outgoingResponse<span class="token punctuation">.</span>headers<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'statusCode'</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>outgoingResponse<span class="token punctuation">.</span>statusCode<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> rawResponseBuilder</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>For adapter-specific details about the context structure and available builder options, refer to the README of the corresponding adapter package on npm or GitHub.</p>
</div>
<h3 id="defining-middleware" tabindex="-1"><a class="header-anchor" href="#defining-middleware"><span>Defining Middleware</span></a></h3>
<p>Adapter middleware can be defined either <strong>declaratively</strong> using decorators, or <strong>imperatively</strong> using factory functions. Both approaches allow you to inject logic into the building of <code v-pre>IncomingEvent</code> before your system logic executes, and to shape the <code v-pre>rawResponse</code> before it is sent back to the platform.</p>
<Tabs id="795" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h4 id="declarative-middleware" tabindex="-1"><a class="header-anchor" href="#declarative-middleware"><span>Declarative Middleware</span></a></h4>
<p>The simplest way to define adapter middleware is through a class decorated with <code v-pre>@AdapterMiddleware()</code>.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  AdapterMiddleware<span class="token punctuation">,</span> NextMiddleware<span class="token punctuation">,</span> IBlueprint</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  NodeHttpAdapterContext<span class="token punctuation">,</span> NodeHttpAdapterResponseBuilder</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-http-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">AdapterMiddleware</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyAdapterMiddleware</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token keyword">readonly</span> blueprint<span class="token operator">:</span> IBlueprint</span>
<span class="line"></span>
<span class="line">  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> blueprint <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> blueprint<span class="token operator">:</span> IBlueprint <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>blueprint <span class="token operator">=</span> blueprint</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">handle</span><span class="token punctuation">(</span></span>
<span class="line">    context<span class="token operator">:</span> NodeHttpAdapterContext<span class="token punctuation">,</span></span>
<span class="line">    next<span class="token operator">:</span> NextMiddleware<span class="token operator">&lt;</span>NodeHttpAdapterContext<span class="token punctuation">,</span> NodeHttpAdapterResponseBuilder<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>NodeHttpAdapterResponseBuilder<span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">    context<span class="token punctuation">.</span>incomingEventBuilder</span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'headers'</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>rawEvent<span class="token punctuation">.</span>headers<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'metadata'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>blueprint<span class="token punctuation">.</span>metadata<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This middleware will apply to <strong>all adapters</strong>, unless explicitly scoped.</p>
</template>
<template #tab1="{ value, isActive }">
<h4 id="imperative-middleware" tabindex="-1"><a class="header-anchor" href="#imperative-middleware"><span>Imperative Middleware</span></a></h4>
<p>You can also define middleware as a factory function and register it manually during blueprint setup:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NextMiddleware<span class="token punctuation">,</span> IBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  NodeHttpAdapterContext<span class="token punctuation">,</span> NodeHttpAdapterResponseBuilder</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-http-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">MyAdapterMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> blueprint <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> blueprint<span class="token operator">:</span> IBlueprint <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span></span>
<span class="line">    context<span class="token operator">:</span> NodeHttpAdapterContext<span class="token punctuation">,</span></span>
<span class="line">    next<span class="token operator">:</span> NextMiddleware<span class="token operator">&lt;</span>NodeHttpAdapterContext<span class="token punctuation">,</span> NodeHttpAdapterResponseBuilder<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>NodeHttpAdapterResponseBuilder<span class="token operator">></span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    context<span class="token punctuation">.</span>incomingEventBuilder</span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'metadata'</span><span class="token punctuation">,</span> blueprint<span class="token punctuation">.</span>metadata<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'headers'</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>rawEvent<span class="token punctuation">.</span>headers<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To register this middleware, use a setup middleware:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">MySetupMiddleware</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> blueprint <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.adapter.middleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> module<span class="token operator">:</span> MyAdapterMiddleware<span class="token punctuation">,</span> isFactory<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> blueprint</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> appBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.blueprint.middleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>MySetupMiddleware<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>At the time adapter middleware is constructed, whether as a class or factory, only the blueprint is available, as the Stone.js container has not yet been initialized.</p>
</div>
<h3 id="scoping-middleware" tabindex="-1"><a class="header-anchor" href="#scoping-middleware"><span>Scoping Middleware</span></a></h3>
<p>When your system uses multiple adapters, it's important to scope each middleware to the adapter it is intended for. This avoids accidental misbehavior across platforms.</p>
<Tabs id="833" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h4 id="declarative-scoping" tabindex="-1"><a class="header-anchor" href="#declarative-scoping"><span>Declarative Scoping</span></a></h4>
<p>You can scope middleware by using one of the following options in the decorator:</p>
<ul>
<li><code v-pre>platform</code>: a string identifier for the adapter's platform (e.g., <code v-pre>'node_http'</code>, <code v-pre>'browser'</code>)</li>
<li><code v-pre>adapterAlias</code>: the alias assigned to the adapter when it was registered</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">AdapterMiddleware</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> platform<span class="token operator">:</span> <span class="token string">'node_http'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">NodeOnlyMiddleware</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">AdapterMiddleware</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> adapterAlias<span class="token operator">:</span> <span class="token string">'MyBrowserAdapter'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BrowserOnlyMiddleware</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<h4 id="imperative-scoping" tabindex="-1"><a class="header-anchor" href="#imperative-scoping"><span>Imperative Scoping</span></a></h4>
<p>You can also perform manual checks during blueprint setup and conditionally add the middleware:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">MySetupMiddleware</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> blueprint <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>blueprint<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'stone.adapter.platform'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'browser'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.adapter.middleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> module<span class="token operator">:</span> MyAdapterMiddleware<span class="token punctuation">,</span> isFactory<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> blueprint</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This approach offers complete flexibility, especially useful when adapter selection depends on runtime context.</p>
</template>
</Tabs>
<h3 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h3>
<ul>
<li>To see what fields are available for <code v-pre>incomingEventBuilder</code>, refer to the <a href="../essentials/incoming-event"><strong>Incoming Event</strong></a> documentation.</li>
<li>To understand what values are accessible from <code v-pre>OutgoingResponse</code>, check the <a href="../essentials/outgoing-response"><strong>Outgoing Response</strong></a> documentation.</li>
</ul>
<h2 id="integration-hooks" tabindex="-1"><a class="header-anchor" href="#integration-hooks"><span>Integration Hooks</span></a></h2>
<p>Integration hooks in Stone.js allow you to observe and react to the platform-specific phases of your system, including adapter startup, event transformation, middleware execution, and shutdown.</p>
<Mermaid id="mermaid-889" code="eJyV0jtvwjAQB/CdT3EKygYSULowVOIRXmqlCqouUQcTX4pVY6e2aaCI717HDgKpQ10WlPv/7s55xPGJCWYGcIrMFncYDSDaEI1RC3zhlShGNhy1TU4NgCiXwqzZt5PdfnGIWlWVM4FjyaWqyk16d9/vdKLG+XyO40bOZZltiTLwMrEWYJiuj9rgDrSx1Tdotx9glEqxdpee+GL3KmXhk1HXRz3XcKl6P06Tg0ElCAeFn3vU9bSxSye2Y7RnnDLxvhCZ3Nn/5AtFjSYOJemzkhlqbUN4YpRyLIlCeJTVKgcTB6d22pUOKSns5muDnzl1dGaPhdne4M1An89cPrejfg2oZyOtt87/d7zFzc2uSLlCXUih67WeLC2ZE0Htu7ucP1FKKjsnjmFtjlUAuVRAOAchKWrXrW2C9olro+QHtktGzXZgv4RWzjgfNKfudyNH4bIbTnvBdBwsJ8EyCZbTYDkLlvNguQiWyz/kD8NvTLc="></Mermaid><p>These hooks belong to the <strong>Integration Dimension</strong> of the Continuum Architecture. They do not affect your application logic directly, but instead provide a clean mechanism to tap into low-level system behavior. They're useful for logging, metrics, debugging, diagnostics, and graceful shutdowns, all without polluting your core system logic.</p>
<p>There are two types of integration hooks:</p>
<ul>
<li><strong>Global hooks</strong>, triggered during lifecycle events like startup or shutdown.</li>
<li><strong>Per-intention hooks</strong>, triggered during adapter-level processing, such as when building events, running middleware, or handling adapter-level errors.</li>
</ul>
<h3 id="available-integration-hooks" tabindex="-1"><a class="header-anchor" href="#available-integration-hooks"><span>Available Integration Hooks</span></a></h3>
<p>Here’s a list of all built-in integration hooks available in Stone.js:</p>
<table>
<thead>
<tr>
<th>Hook Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>onStart</code></td>
<td>Global</td>
<td>Called once when the system starts</td>
</tr>
<tr>
<td><code v-pre>onStop</code></td>
<td>Global</td>
<td>Called once when the system shuts down</td>
</tr>
<tr>
<td><code v-pre>onProcessingAdapterMiddleware</code></td>
<td>Per-intention</td>
<td>Triggered before each adapter middleware is executed</td>
</tr>
<tr>
<td><code v-pre>onAdapterMiddlewareProcessed</code></td>
<td>Per-intention</td>
<td>Triggered after all adapter middleware have executed</td>
</tr>
<tr>
<td><code v-pre>onBuildingIncomingEvent</code></td>
<td>Per-intention</td>
<td>Triggered while building the <code v-pre>IncomingEvent</code></td>
</tr>
<tr>
<td><code v-pre>onBuildingRawResponse</code></td>
<td>Per-intention</td>
<td>Triggered while building the final platform-native response</td>
</tr>
<tr>
<td><code v-pre>onHandlingAdapterError</code></td>
<td>Per-intention</td>
<td>Triggered if an error occurs during adapter processing (e.g., event build)</td>
</tr>
</tbody>
</table>
<p>These hooks help you instrument the edges of your system without coupling to specific adapters or transports.</p>
<h3 id="hook-contexts" tabindex="-1"><a class="header-anchor" href="#hook-contexts"><span>Hook Contexts</span></a></h3>
<p>Each hook receives a context object that gives it visibility into the system’s current state.</p>
<h4 id="adapter-hook-context" tabindex="-1"><a class="header-anchor" href="#adapter-hook-context"><span>Adapter Hook Context</span></a></h4>
<p>This is the context used for hooks like <code v-pre>onStart</code>, <code v-pre>onStop</code>, <code v-pre>onBuildingRawResponse</code>, <code v-pre>onBuildingIncomingEvent</code>, and <code v-pre>onHandlingAdapterError</code>.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">AdapterHookListenerContext</span> <span class="token punctuation">{</span></span>
<span class="line">  error<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">  blueprint<span class="token operator">:</span> IBlueprint</span>
<span class="line">  context<span class="token operator">?</span><span class="token operator">:</span> AdapterContext</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong><code v-pre>blueprint</code></strong> – The current blueprint object (always present)</li>
<li><strong><code v-pre>context</code></strong> – Optional. Contains adapter-specific details (see below)</li>
<li><strong><code v-pre>error</code></strong> – Present only in failure hooks like <code v-pre>onHandlingAdapterError</code></li>
</ul>
<p>The <code v-pre>context</code> property refers to the adapter context:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">AdapterContext</span> <span class="token punctuation">{</span></span>
<span class="line">  rawEvent<span class="token operator">:</span> RawEventType</span>
<span class="line">  rawResponse<span class="token operator">?</span><span class="token operator">:</span> RawResponseType</span>
<span class="line">  executionContext<span class="token operator">:</span> ExecutionContextType</span>
<span class="line">  incomingEvent<span class="token operator">?</span><span class="token operator">:</span> IncomingEventType</span>
<span class="line">  outgoingResponse<span class="token operator">?</span><span class="token operator">:</span> OutgoingResponseType</span>
<span class="line">  incomingEventBuilder<span class="token operator">:</span> IAdapterEventBuilder</span>
<span class="line">  rawResponseBuilder<span class="token operator">:</span> IAdapterEventBuilder</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For more on adapter context and builders, refer to the <a href="#adapter-middleware"><strong>Adapter Middleware</strong></a> section.</p>
<h4 id="middleware-hook-context" tabindex="-1"><a class="header-anchor" href="#middleware-hook-context"><span>Middleware Hook Context</span></a></h4>
<p>Used specifically by middleware-related hooks like <code v-pre>onProcessingAdapterMiddleware</code>.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">MiddlewareHookContext</span> <span class="token punctuation">{</span></span>
<span class="line">  passable<span class="token operator">:</span> AdapterContext</span>
<span class="line">  pipe<span class="token operator">:</span> PipeCustomInstance</span>
<span class="line">  instance<span class="token operator">:</span> PipeCustomInstance</span>
<span class="line">  pipes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>MetaPipe<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong><code v-pre>passable</code></strong> – The current adapter context (same as above)</li>
<li><strong><code v-pre>pipe</code></strong> – The current middleware being executed</li>
<li><strong><code v-pre>instance</code></strong> – The resolved instance of the middleware (class or function)</li>
<li><strong><code v-pre>pipes</code></strong> – The full list of middleware for the adapter</li>
</ul>
<p>These fields let you trace which middleware is running and access the current context being passed through the pipeline.</p>
<h3 id="registering-integration-hooks" tabindex="-1"><a class="header-anchor" href="#registering-integration-hooks"><span>Registering Integration Hooks</span></a></h3>
<p>Hooks can be registered using either the <strong>declarative</strong> or <strong>imperative</strong> API.</p>
<Tabs id="1086" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h4 id="declarative-hook-registration" tabindex="-1"><a class="header-anchor" href="#declarative-hook-registration"><span>Declarative Hook Registration</span></a></h4>
<p>Use the <code v-pre>@Hook('&lt;hookName&gt;')</code> method decorator to register a hook. Hook methods can live in any class, but for clarity and separation of concerns, it's best to place them in a dedicated observer class or service provider.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  Hook<span class="token punctuation">,</span> MiddlewareHookContext<span class="token punctuation">,</span> AdapterHookListenerContext</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AdapterObserver</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Hook</span></span><span class="token punctuation">(</span><span class="token string">'onStart'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">onStarting</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Starting up...'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Hook</span></span><span class="token punctuation">(</span><span class="token string">'onBuildingIncomingEvent'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">buildingEvent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> context <span class="token punctuation">}</span><span class="token operator">:</span> AdapterHookListenerContext<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Building event from'</span><span class="token punctuation">,</span> context<span class="token operator">?.</span>rawEvent<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Hook</span></span><span class="token punctuation">(</span><span class="token string">'onProcessingAdapterMiddleware'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">logMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">{</span> pipe <span class="token punctuation">}</span><span class="token operator">:</span> MiddlewareHookContext<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Running adapter middleware: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pipe<span class="token punctuation">.</span>module<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Hooks are automatically registered and matched based on their names. All parameters are injected automatically.</p>
<p>Hook methods are executed via reflection. They are <strong>not</strong> tied to class lifecycle, avoid using <code v-pre>this</code>.</p>
</template>
<template #tab1="{ value, isActive }">
<h4 id="imperative-hook-registration" tabindex="-1"><a class="header-anchor" href="#imperative-hook-registration"><span>Imperative Hook Registration</span></a></h4>
<p>For more dynamic scenarios, you can register integration hooks programmatically via the blueprint:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  defineBlueprintConfig<span class="token punctuation">,</span></span>
<span class="line">  MiddlewareHookContext<span class="token punctuation">,</span></span>
<span class="line">  AdapterHookListenerContext</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">onStarting</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'System is starting...'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">buildingEvent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> context <span class="token punctuation">}</span><span class="token operator">:</span> AdapterHookListenerContext<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Transforming raw input into IncomingEvent:'</span><span class="token punctuation">,</span> context<span class="token operator">?.</span>rawEvent<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">logMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> pipe <span class="token punctuation">}</span><span class="token operator">:</span> MiddlewareHookContext<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Executing middleware: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pipe<span class="token punctuation">.</span>module<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> appSetupBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.lifecycleHooks.onStart'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>onStarting<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.lifecycleHooks.onBuildingIncomingEvent'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>buildingEvent<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.lifecycleHooks.onProcessingAdapterMiddleware'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>logMiddleware<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The hook names follow the namespace format: <code v-pre>stone.lifecycleHooks.&lt;hookName&gt;</code>. You can add multiple functions per hook.</p>
</template>
</Tabs>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>Using adapters effectively in Stone.js means understanding the execution context while keeping your system logic pure and portable. Here are the recommended patterns to follow when working with adapters and their supporting features.</p>
<h4 id="don-t-mutate-events-directly-use-builders" tabindex="-1"><a class="header-anchor" href="#don-t-mutate-events-directly-use-builders"><span>Don’t Mutate Events Directly, Use Builders</span></a></h4>
<p>Inside adapter middleware, always use <code v-pre>incomingEventBuilder</code> and <code v-pre>rawResponseBuilder</code>:</p>
<p>✅ Good:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">context<span class="token punctuation">.</span>incomingEventBuilder<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'headers'</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>rawEvent<span class="token punctuation">.</span>headers<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>🚫 Bad:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">context<span class="token punctuation">.</span>incomingEvent <span class="token operator">=</span> <span class="token operator">...</span> <span class="token comment">// Never do this</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>These builders ensure events are correctly constructed and introspected by the system.
And any mutation will be overwritten when the event is built.</p>
<h4 id="scope-middleware-when-using-multiple-adapters" tabindex="-1"><a class="header-anchor" href="#scope-middleware-when-using-multiple-adapters"><span>Scope Middleware When Using Multiple Adapters</span></a></h4>
<p>Adapter contexts are platform-specific. If you're using more than one adapter, <strong>always scope your middleware</strong>:</p>
<ul>
<li>Declaratively with <code v-pre>@AdapterMiddleware({ platform: 'node_http' })</code></li>
<li>Imperatively by checking <code v-pre>stone.adapter.platform</code> or <code v-pre>stone.adapter.alias</code></li>
</ul>
<p>This prevents a mismatch between middleware logic and the runtime context.</p>
<h4 id="keep-adapter-middleware-focused" tabindex="-1"><a class="header-anchor" href="#keep-adapter-middleware-focused"><span>Keep Adapter Middleware Focused</span></a></h4>
<p>Adapter middleware should do exactly one thing: <strong>build normalized data</strong>.</p>
<p>Avoid:</p>
<ul>
<li>Business logic</li>
<li>Database access</li>
</ul>
<p>Instead:</p>
<ul>
<li>Extract headers, metadata, user agent, request ID, etc.</li>
<li>Format them cleanly for use inside the <code v-pre>IncomingEvent</code> or <code v-pre>rawResponse</code></li>
</ul>
<h4 id="use-integration-hooks-for-observability" tabindex="-1"><a class="header-anchor" href="#use-integration-hooks-for-observability"><span>Use Integration Hooks for Observability</span></a></h4>
<p>Want to track startup, middleware flow, or raw events?</p>
<p>Use hooks like <code v-pre>onStart</code>, <code v-pre>onBuildingIncomingEvent</code>, or <code v-pre>onProcessingAdapterMiddleware</code> to monitor the system from the edge.</p>
<p>Hooks are the right place for:</p>
<ul>
<li>Logging</li>
<li>Tracing</li>
<li>Lifecycle alerts</li>
<li>External monitoring</li>
</ul>
<p>They let you <strong>observe without interfering</strong>.</p>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>Keep your adapter layer <strong>thin and testable</strong>.</p>
</div>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>Adapters are the entry point of every Stone.js application. They translate platform-specific inputs into standardized <code v-pre>IncomingEvent</code> objects and convert your system's <code v-pre>OutgoingResponse</code> into native output, no matter where your app runs.</p>
<p>Stone.js offers built-in adapters for:</p>
<ul>
<li>Node.js (HTTP, CLI)</li>
<li>AWS Lambda (event or HTTP)</li>
<li>Browser (SPA, SSR)</li>
</ul>
<p>You can register adapters <strong>declaratively</strong> using decorators or <strong>imperatively</strong> using blueprints, giving you flexibility based on the level of control you need.</p>
<p>Adapter middleware lets you participate in the construction of events and responses, using builder objects instead of direct mutation. Scoped middleware ensures clean multi-platform behavior.</p>
<p>Integration hooks provide a powerful observability layer. Whether you want to log startup, trace middleware execution, or debug event transformations, hooks give you visibility, without coupling to your app logic.</p>
<p>Adapters live in the <strong>Integration Dimension</strong> of the Continuum Architecture. They form the boundary between the external world and your internal logic. You don’t have to think in platforms, just intentions.</p>
</div></template>


