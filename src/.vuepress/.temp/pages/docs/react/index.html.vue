<template><div><p>React is one of the most popular libraries for building user interfaces. It focuses entirely on the view layer, leaving the rest of the application structure up to you.</p>
<p>This is where Stone.js comes in.</p>
<p>Stone.js doesn’t modify React or ask you to change how you use it. Instead, it creates the environment around React: handling routing, page lifecycle, request/response handling, layouts, and rendering, whether you're building a single-page app, server-rendered interface, or a fullstack system.</p>
<p>You keep using React as you know it. Stone.js simply gives it a structure to live in, grow in, and adapt to different runtimes with ease.</p>
<p>This documentation is focused on showing you how to use React with Stone.js. It’s not a React tutorial, it’s a guide to merging your React knowledge with the Stone.js ecosystem.</p>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>If you’re new to React, check out the <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">official React documentation</a> before diving in.</p>
</div>
<h2 id="why-react-stays-react" tabindex="-1"><a class="header-anchor" href="#why-react-stays-react"><span><strong>Why React stays React</strong></span></a></h2>
<p>In Stone.js, React remains exactly what it is: a library for building user interfaces. You don’t need to learn a new templating language, or adapt your mental model. No wrappers. No reinvented components. No new syntax.</p>
<p>You write React components, just like you always do.</p>
<p>What Stone.js brings is not a rewrite of React, but an extension of what React can do in a full application context: request handling, routing, SSR, layouts, middleware, dependency injection, and deployment flexibility, without ever touching your components.</p>
<p>React handles the UI. Stone.js handles the system. Together, they form a complete and composable continuum.</p>
<p>If you already know how to build a React app, you won’t have to unlearn anything. You’ll just learn how to <strong>merge</strong> your React knowledge with Stone.js features.<br>
That’s the Stone.js way: <strong>augment, not replace</strong>.</p>
<h2 id="installing-required-packages" tabindex="-1"><a class="header-anchor" href="#installing-required-packages"><span><strong>Installing required packages</strong></span></a></h2>
<p>React isn’t bundled with Stone.js by default, and there’s a good reason for that.</p>
<p>In the Continuum Architecture, a library is a tool, not a foundation. You install it when you need it, use it where it makes sense, and integrate it without compromise. Stone.js doesn’t assume how you want to build your UI, it simply gives you the architecture to support it.</p>
<p>Other platforms may create an entire framework around React, treating it as the core of the system. But in reality, React is just the view layer. You don’t need to wrap it in a framework, you need to <strong>connect it to one</strong>.</p>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>You don't need to install React if your React app was created with the Stone.js CLI. The CLI automatically installs React and the required packages for you.</p>
</div>
<p>To use React with Stone.js, just install the parts you need:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> react react-dom @stone-js/use-react @stone-js/browser-adapter</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Here’s what each package does:</p>
<ul>
<li><code v-pre>react</code> and <code v-pre>react-dom</code>: the standard React packages.</li>
<li><code v-pre>@stone-js/use-react</code>: the bridge that allows Stone.js to render and orchestrate React components.</li>
<li><code v-pre>@stone-js/browser-adapter</code>: enables Stone.js to run your application in the browser as a CSR/SPA app.</li>
</ul>
<p>This way, you stay in control. React remains React. And your architecture stays sound.</p>
<h2 id="activating-react-support" tabindex="-1"><a class="header-anchor" href="#activating-react-support"><span><strong>Activating React support</strong></span></a></h2>
<p>Once your packages are installed, the next step is to <strong>activate React and the browser adapter</strong> inside your Stone.js application.</p>
<p>You can do this in two ways: using the <strong>declarative API</strong> or the <strong>imperative API</strong>. Both approaches achieve the same result, choose the one that best fits your style or your project structure.</p>
<Tabs id="91" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h4 id="declarative-api" tabindex="-1"><a class="header-anchor" href="#declarative-api"><span>Declarative API</span></a></h4>
<p>If you're building your app using class-based modules, the declarative API offers the most concise and readable approach.</p>
<p>You simply decorate your main application class with <code v-pre>@UseReact()</code> to enable React support, and <code v-pre>@Browser()</code> to run the app in a browser environment.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> UseReact <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Browser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/browser-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Browser</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">UseReact</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>These decorators wire everything up: the adapter, the initialization dimension, and the full request lifecycle. Your app is now ready to use React as its rendering engine.</p>
</template>
<template #tab1="{ value, isActive }">
<h4 id="imperative-api" tabindex="-1"><a class="header-anchor" href="#imperative-api"><span>Imperative API</span></a></h4>
<p>Prefer a more functional or flexible setup? The imperative API lets you wire everything manually via blueprint configuration.</p>
<p>This is especially useful when working in factory-based setups or when you want more control over registration order and dynamic composition.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> browserAdapterBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/browser-adapter'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig<span class="token punctuation">,</span> IBlueprint<span class="token punctuation">,</span> stoneBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useReactBlueprint<span class="token punctuation">,</span> defineComponentEventHandler <span class="token punctuation">}</span> <span class="token keyword">from</span>  <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Application</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Your React app logic</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> AppBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token operator">:</span> IBlueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>stoneBlueprint<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>useReactBlueprint<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>browserAdapterBlueprint<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token function">defineComponentEventHandler</span><span class="token punctuation">(</span>Application<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<p>In both approaches, the outcome is the same: <strong>React becomes a first-class citizen in your application</strong>, without compromising structure, runtime clarity, or deployment flexibility.</p>
<h2 id="understanding-adapters-csr-ssr-and-sor" tabindex="-1"><a class="header-anchor" href="#understanding-adapters-csr-ssr-and-sor"><span><strong>Understanding Adapters: CSR, SSR, and SOR</strong></span></a></h2>
<p>Stone.js uses <strong>adapters</strong> to determine how your application behaves at runtime. Whether it renders in the browser, on the server, or both, <strong>you don’t change your code</strong>, you just configure the adapter.</p>
<p>This flexibility means you can build:</p>
<ul>
<li>A <strong>CSR</strong> (Client-Side Rendered) that runs entirely in the browser</li>
<li>A <strong>SSR</strong> (Server-Side Rendered) app that renders HTML on the server and hydrates it in the browser</li>
<li>A <strong>SOR</strong> (Server-Only Rendered) app that renders everything server-side with no client-side React runtime</li>
</ul>
<p>Let’s break them down.</p>
<Tabs id="152" :data='[{"id":"CSR"},{"id":"SSR"},{"id":"SOR"}]' :active="0" tab-id="app-rendering">
<template #title0="{ value, isActive }">CSR</template>
<template #title1="{ value, isActive }">SSR</template>
<template #title2="{ value, isActive }">SOR</template>
<template #tab0="{ value, isActive }">
<h3 id="client-side-rendering-csr" tabindex="-1"><a class="header-anchor" href="#client-side-rendering-csr"><span>Client-Side Rendering (CSR)</span></a></h3>
<p>For browser-only applications, dashboards, admin tools, or lightweight frontends, you can use the browser adapter alone.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> UseReact <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Browser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/browser-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Browser</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">UseReact</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This setup gives you a fully client-side React app. Stone.js handles routing, page lifecycle,
and modular architecture, React handles rendering and events in the DOM.</p>
</template>
<template #tab1="{ value, isActive }">
<h3 id="server-side-rendering-ssr" tabindex="-1"><a class="header-anchor" href="#server-side-rendering-ssr"><span>Server-Side Rendering (SSR)</span></a></h3>
<p>When you want both performance and dynamic content, use both a browser and a server adapter.</p>
<p>This enables:</p>
<ul>
<li>Server-rendered HTML with data already present</li>
<li>Client-side hydration for full interactivity</li>
<li>Snapshot-based data transfer to avoid re-fetching</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> UseReact <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Browser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/browser-adapter'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeHttp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-http-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Browser</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">NodeHttp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">UseReact</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SSR is ideal for marketing sites, e-commerce, or SEO-sensitive content, where the initial render happens on the server, but the app remains interactive on the client.</p>
</template>
<template #tab2="{ value, isActive }">
<h3 id="server-only-rendered-sor" tabindex="-1"><a class="header-anchor" href="#server-only-rendered-sor"><span>Server-Only Rendered (SOR)</span></a></h3>
<p>When you want a <strong>self-contained application</strong>, logic, data access, and view rendering all running on the server, you can use SOR mode.</p>
<p>In SOR, React is used to render HTML on the server, and the resulting markup is sent directly to the client. There’s <strong>no client-side hydration</strong>, no browser runtime, just clean, fast HTML from the server.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> UseReact <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeHttp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-http-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">NodeHttp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">UseReact</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This mode is perfect for traditional monoliths, internal tools, or controlled environments where the client only needs HTML and nothing more.</p>
</template>
</Tabs>
<h3 id="adapter-philosophy-compose-your-runtime" tabindex="-1"><a class="header-anchor" href="#adapter-philosophy-compose-your-runtime"><span>Adapter Philosophy: Compose your runtime</span></a></h3>
<p>This adapter system reflects the <strong>Continuum Architecture</strong> at its core.</p>
<p>Instead of rewriting your app for different platforms, you compose the environment around it. Your pages, components, and lifecycle stay the same, the adapter determines <strong>how and where they execute</strong>.</p>
<table>
<thead>
<tr>
<th>Adapter Setup</th>
<th>Mode</th>
<th>Rendering Location</th>
<th>Client JS</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>@Browser()</code> only</td>
<td>CSR</td>
<td>Browser</td>
<td>✅ Yes</td>
</tr>
<tr>
<td><code v-pre>@Browser()</code> + <code v-pre>@NodeHttp()</code></td>
<td>SSR</td>
<td>Server (with hydration)</td>
<td>✅ Yes</td>
</tr>
<tr>
<td><code v-pre>@NodeHttp()</code> only</td>
<td>SOR</td>
<td>Server only</td>
<td>❌ No</td>
</tr>
</tbody>
</table>
<p>You can even combine multiple server adapters (e.g., HTTP, Lambda, etc.), and Stone.js will infer the right one based on context.</p>
<h2 id="the-continuum-philosophy-in-action" tabindex="-1"><a class="header-anchor" href="#the-continuum-philosophy-in-action"><span><strong>The Continuum Philosophy in Action</strong></span></a></h2>
<p>Stone.js is built on a simple but powerful principle: <strong>everything is a continuum</strong>.</p>
<p>When you use React with Stone.js, you're not switching tools or changing how you write components. You're extending your existing knowledge across new dimensions, <strong>from the browser to the server</strong>, from CSR to SSR to SOR, without reinventing your logic at each step.</p>
<p>In the Continuum Architecture:</p>
<ul>
<li>Your view layer (React) stays decoupled from infrastructure.</li>
<li>Your page logic is reusable across runtime contexts.</li>
<li>Your application's structure is introspectable, modular, and flexible.</li>
</ul>
<p>Stone.js doesn't wrap React, it <strong>hosts</strong> it, it gives it a place to <strong>express</strong> itself in a structured way.</p>
<p>You bring your components. Stone.js brings the structure, the lifecycle, the routing, the deployment flexibility, and the context awareness needed to turn a React UI into a complete application.</p>
<p>This documentation will guide you through that integration, step by step, dimension by dimension.</p>
</div></template>


