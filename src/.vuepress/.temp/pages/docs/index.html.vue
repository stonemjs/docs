<template><div><p><strong>Stone.js</strong> is a bold, next-generation <strong>JavaScript</strong> and <strong>TypeScript</strong> framework, fully modern, proudly <strong>cloud-native friendly</strong>, and designed to help you build scalable systems that run smoothly across environments like local machines, containers, edge networks, serverless platforms, and the browser.</p>
<p>It’s built on the <RouteLink to="/docs/architecture/continuum.html"><strong>Continuum Architecture</strong></RouteLink>, a unified design that lets you use a <strong>single API</strong> and <strong>one mindset</strong> to build backend services, frontend apps, serverless functions, and even command-line tools, all with the same codebase, same logic, and same developer experience.</p>
<p>No more jumping between frameworks, paradigms, or runtimes. Whether you're building an API, a web UI, a CLI,
or deploying to serverless platforms, <strong><strong>Stone.js</strong> adapts to your context, not the other way around.</strong></p>
<p>Oh, and forget <code v-pre>node_modules</code>. <strong>Stone.js</strong> is modern, modular, and minimal, powered by <strong>ESNext</strong>, <strong>TypeScript</strong>, and the freedom to choose between <RouteLink to="/docs/architecture/paradigms.html#declarative-api"><strong>declarative</strong></RouteLink> (decorators) or <RouteLink to="/docs/architecture/paradigms.html#imperative-api"><strong>imperative</strong></RouteLink> (functional) APIs.</p>
<blockquote>
<p><strong>One framework. One brain. Infinite possibilities.</strong></p>
</blockquote>
<h2 id="the-problems" tabindex="-1"><a class="header-anchor" href="#the-problems"><span>The Problems</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">😔</p>
<p>Modern frameworks promise productivity, but often deliver pain.</p>
</div>
<p>You juggle tools for backend, frontend, CLI, cloud functions, and SSR, each with its own philosophy, structure, deployment complexity, and learning curve. You rewrite the same logic five times just to fit the tool, instead of focusing on what matters: your <strong>business domain</strong>.</p>
<p>Frameworks force you to choose your <strong>context</strong> too early: the routing style, the transport, the data-fetching strategy, the deployment target, the view library. And when any of these change? You patch. You bend. You break.</p>
<p>There’s no standard for handling events across environments, so you end up duplicating logic for HTTP, CLI, FaaS, and the browser. Every platform means rewriting boilerplate that should have been abstracted away.</p>
<p>Most frameworks offer <strong>tools</strong>, not <strong>architecture</strong>.
And under all of that, there’s a deeper issue:
<strong>Context is treated as a constant, not a variable.</strong></p>
<p>That’s not developer freedom, that’s architectural debt.</p>
<h2 id="our-philosophy" tabindex="-1"><a class="header-anchor" href="#our-philosophy"><span>Our Philosophy</span></a></h2>
<p><strong>Stone.js</strong> is built on a simple truth:</p>
<p>We do not create applications,
we create systems that allow them to emerge,
because an application is not an object, it’s an action: the act of applying your domain to a real context, to meet a need.<br>
Most frameworks ask you to choose your context up front, are you building for Node? The browser? Serverless? CLI? React? Vue?<br>
You end up adapting the same logic again and again, just to fit into different runtimes or APIs.</p>
<p><strong>Stone.js</strong> takes a different path.</p>
<p>It’s built on the <RouteLink to="/docs/architecture/continuum.html">Continuum Architecture</RouteLink>,
where the <strong>domain</strong> (your business logic) and the <strong>context</strong> (your environment) are not layered in hierarchy, but linked in a <strong>continuum</strong>.
The domain is not ignorant of the context, it is <strong>uncertain</strong> of it.
And the context is not a constant, it is a <strong>variable</strong>: it moves through space and evolves over time.</p>
<p><strong>Stone.js</strong> embraces that uncertainty.</p>
<p>It orchestrates the connection between domain and context <strong>dynamically at runtime</strong>, resolving intention into action, wherever your code runs.
Your domain doesn’t belong to a framework, it belongs to the problem it was meant to solve.</p>
<p>And your context?</p>
<p>It doesn’t ask to be chosen, it arrives when the moment comes.
You don’t adapt your logic to the world, you let the world adapt to your logic.</p>
<p>Because in the continuum:</p>
<p><strong>The domain stays ready, the context stays open, and the application happens, when the two align.</strong></p>
<h2 id="why-stone-js" tabindex="-1"><a class="header-anchor" href="#why-stone-js"><span>Why Stone.js?</span></a></h2>
<p>Because the modern stack shouldn’t stack complexity.
And because most frameworks were built for the past.</p>
<ul>
<li>They split frontend and backend like opposing camps, each with their own tools, patterns, and gotchas.</li>
<li>They enforce one paradigm, declarative or imperative, and good luck switching mid-project.</li>
<li>They work <strong>somewhere</strong>, but not <strong>everywhere</strong>.</li>
<li>Need to handle CLI, HTTP, FaaS, or browser events? Get ready to reinvent the wheel.</li>
<li>Your business logic ends up tangled in platform-specific glue and fragile <code v-pre>process.env</code> hacks.</li>
</ul>
<p>It’s not flexibility, it’s fragmentation.</p>
<p><strong>Stone.js</strong> solves the <strong>context problem</strong> with a clean, modular, cloud-friendly architecture. Here’s what makes it different:</p>
<ul>
<li><strong>Run anywhere</strong>, from local dev to the edge, serverless, or browser.</li>
<li><RouteLink to="/docs/architecture/continuum.html"><strong>Continuum Architecture</strong></RouteLink>, the domain logic and the context are linked in a <strong>continuum</strong>.</li>
<li><strong>Context-awareness</strong>, let Stone.js choose the platform when it actually matters.</li>
<li><strong>Cloud-native friendly</strong>, deploy to FaaS, containers, or edge without a rewrite.</li>
<li><strong>Zero <code v-pre>node_modules</code> bloat</strong>, just build, ship, and go.</li>
<li><strong>ESNext &amp; ESM-native</strong>, no legacy baggage, no transpiler traps.</li>
<li><strong>Universal API</strong>, one flow for frontend, backend, CLI, SSR, same logic, everywhere.</li>
<li><strong>Two paradigms</strong>, decorators or functions? Your call. Mix them freely.</li>
<li><strong>Micro to macro</strong>, start small, scale huge, without switching tools.</li>
<li><strong>TS/JS first</strong>, fully typed, fully flexible, fully future-proof.</li>
</ul>
<p>In short: <strong>Less boilerplate. More power. Real freedom.</strong></p>
<h2 id="api-styles" tabindex="-1"><a class="header-anchor" href="#api-styles"><span>API Styles</span></a></h2>
<p><strong>Stone.js</strong> lets you build the way that fits you best:</p>
<div class="hint-container tip">
<p class="hint-container-title">😌</p>
<p><strong>Declarative</strong> when you want it, <strong>imperative</strong> when you need it.</p>
</div>
<h3 id="declarative" tabindex="-1"><a class="header-anchor" href="#declarative"><span><strong>Declarative</strong></span></a></h3>
<p>Use modern decorators with ES6 classes to configure your app with clarity and structure.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeHttp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-http-adapter'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingEvent<span class="token punctuation">,</span> IEventHandler<span class="token punctuation">,</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">NodeHttp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token keyword">implements</span> <span class="token class-name">IEventHandler<span class="token operator">&lt;</span>IncomingEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="imperative" tabindex="-1"><a class="header-anchor" href="#imperative"><span><strong>Imperative</strong></span></a></h3>
<p>Go functional and dynamic when you need full control.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStoneApp<span class="token punctuation">,</span> IncomingEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> nodeHttpAdapterBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-http-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Define your app as a function</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Application</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Register your app with the Node HTTP adapter</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> MyStoneApp <span class="token operator">=</span> <span class="token function">defineStoneApp</span><span class="token punctuation">(</span>Application<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>nodeHttpAdapterBlueprint<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Short on time? You only need one paradigm to build your app.
Pick the one that fits your style, forget the rest, or mix and match later.
Stone.js doesn’t judge, doesn’t lock you in, and definitely doesn’t ghost you when you switch sides. 😄</p>
<h2 id="open-source-and-community" tabindex="-1"><a class="header-anchor" href="#open-source-and-community"><span>Open Source and Community</span></a></h2>
<p><strong>Stone.js</strong> is proudly open source, built with ❤️ by developers, for developers.</p>
<p>Our mission is to create a strong, vibrant community that values simplicity, context-awareness, and elegant architecture. Contributions, discussions, and feedback are all welcome, let’s build the future together.</p>
<p>Published under the <a href="https://mit-license.org" target="_blank" rel="noopener noreferrer">MIT License</a>, Stone.js stands on the shoulders of giants, using market standards, best practices, and the wonderful libraries available on <a href="https://www.npmjs.com" target="_blank" rel="noopener noreferrer">npmjs</a>.</p>
<h2 id="target-audience" tabindex="-1"><a class="header-anchor" href="#target-audience"><span>Target Audience</span></a></h2>
<p><strong>Stone.js</strong> is made for:</p>
<ul>
<li><strong>Solo devs</strong> who want to ship fast without choosing a stack but a continuum.</li>
<li><strong>Startups</strong> that need to scale without rewriting from scratch.</li>
<li><strong>Enterprises</strong> looking to standardize frontend/backend logic and reduce tech fragmentation.</li>
<li><strong>Platform engineers</strong> who care about clean architecture, testability, and deployment portability.</li>
<li><strong>Framework hoppers</strong> tired of reinventing the wheel with every new context.</li>
</ul>
<h2 id="stone-js-is-not-a-framework-it-s-a-foundation" tabindex="-1"><a class="header-anchor" href="#stone-js-is-not-a-framework-it-s-a-foundation"><span><strong>Stone.js</strong> Is Not a Framework. It’s a Foundation.</span></a></h2>
<p>Frameworks solve specific problems (e.g., routing, rendering, API handling). <strong>Stone.js</strong> gives you a model to solve <strong>your</strong> problems, in your context, at your pace.</p>
<p>With its <strong>event abstraction</strong>, <strong>adapter layer</strong>, and <strong>context-awareness</strong> structure, <strong>Stone.js</strong> allows you to define how and where you want to apply logic, making it adaptable and scalable over time.</p>
<p>It’s not just a tool you use today, it’s an architectural foundation you can grow on tomorrow.</p>
<p><strong>Stop choosing tools. Start designing systems.</strong><br>
<strong>Stop adapting your logic. Start owning your context.</strong></p>
<div class="hint-container info">
<p class="hint-container-title">Javascript vs TypeScript</p>
<p>TypeScript is used throughout the documentation for clarity and type safety.<br>
If you prefer JavaScript, just remove the types and keep the logic.</p>
</div>
<p>Welcome to <strong>Stone.js</strong>, a place where dreams come true: <RouteLink to="/docs/getting-started/installation.html">Installation</RouteLink>.</p>
</div></template>


