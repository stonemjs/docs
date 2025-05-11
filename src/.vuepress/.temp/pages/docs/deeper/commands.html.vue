<template><div><p>Stone.js offers a powerful and unified command system made of two complementary parts:</p>
<ul>
<li><strong>The Stone CLI</strong>, which provides built-in commands like <code v-pre>serve</code>, <code v-pre>build</code>, or <code v-pre>init</code>, and helps automate development workflows across all types of Stone.js projects.</li>
<li><strong>Custom Commands</strong>, which let you define your own CLI commands directly in your application, turning any Stone.js app into a fully functional CLI tool.</li>
</ul>
<p>With this system, you can run, build, scaffold, or extend your projects, and even publish your own CLI tools, using the same familiar Stone.js architecture.</p>
<h3 id="why-it-exists" tabindex="-1"><a class="header-anchor" href="#why-it-exists"><span>Why It Exists</span></a></h3>
<p>CLI tools are essential in any developer’s workflow. Instead of reinventing the wheel for each tool, Stone.js lets you:</p>
<ul>
<li>Use one consistent, event-driven system to handle CLI input/output.</li>
<li>Write CLI commands just like you would write HTTP handlers or frontend page handlers.</li>
<li>Reuse your application logic, services, and configuration across all execution modes (web, serverless, CLI).</li>
</ul>
<p>The goal is clear: <strong>one continuum, one skillset</strong>, from server to script.</p>
<h3 id="where-it-fits-in-the-continuum" tabindex="-1"><a class="header-anchor" href="#where-it-fits-in-the-continuum"><span>Where It Fits in the Continuum</span></a></h3>
<p>In the Continuum Architecture:</p>
<ul>
<li>CLI commands are triggered from the <strong>Integration dimension</strong> via the <strong>CLI adapter</strong>.</li>
<li>This produces an <code v-pre>IncomingEvent</code>, just like HTTP, browser or Lambda triggers.</li>
<li>Your event handler (in the <strong>Functional dimension</strong>) processes the intention and returns a response, or just prints it to the console.</li>
</ul>
<p>Whether you're writing a complex admin tool or a quick script, you're still operating inside the same contextual flow as the rest of your Stone.js app.</p>
<h2 id="stone-cli" tabindex="-1"><a class="header-anchor" href="#stone-cli"><span>Stone CLI</span></a></h2>
<p>The <strong>Stone CLI</strong> is the official command-line tool for Stone.js. It helps you bootstrap new projects, run development servers, build production bundles, and export third-party configurations, all from a single entry point.</p>
<p>Stone CLI comes preinstalled in every Stone.js project, but to unlock its full potential, you should install it globally on your machine.</p>
<p>It offers a consistent, developer-friendly interface to perform essential tasks across all environments, whether you're building a backend API, frontend app, fullstack project, or CLI tool.</p>
<h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h3>
<h4 id="global-installation-recommended" tabindex="-1"><a class="header-anchor" href="#global-installation-recommended"><span>Global Installation (Recommended)</span></a></h4>
<p>To use the Stone CLI everywhere from your terminal, install it globally from the npm registry:</p>
<CodeTabs id="91" :data='[{"id":"npm"},{"id":"yarn"},{"id":"pnpm"}]' :active="0" tab-id="shell">
<template #title0="{ value, isActive }">npm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">pnpm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-g</span> @stone-js/cli</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-g</span> @stone-js/cli</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-g</span> @stone-js/cli</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h4 id="local-usage" tabindex="-1"><a class="header-anchor" href="#local-usage"><span>Local Usage</span></a></h4>
<p>If you prefer not to install globally, you can still use the CLI in a local project via <code v-pre>npx</code>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">npx stone</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="built-in-commands" tabindex="-1"><a class="header-anchor" href="#built-in-commands"><span>Built-in Commands</span></a></h3>
<p>Once installed, you can view all available built-in commands using:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">stone <span class="token parameter variable">--help</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Each command also has its own help screen:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">stone <span class="token builtin class-name">export</span> <span class="token parameter variable">--help</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="main-commands" tabindex="-1"><a class="header-anchor" href="#main-commands"><span>Main Commands</span></a></h4>
<ul>
<li>
<p><code v-pre>stone serve</code>
Start your application in development mode.</p>
</li>
<li>
<p><code v-pre>stone build</code>
Build your application for production.</p>
</li>
<li>
<p><code v-pre>stone preview</code>
Preview the production build locally.</p>
</li>
<li>
<p><code v-pre>stone init</code>
Create a new Stone.js application. A questionnaire will guide you through the setup.</p>
</li>
<li>
<p><code v-pre>stone export</code>
Export preconfigured settings for third-party libraries. Example:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">stone <span class="token builtin class-name">export</span> rollup</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>stone typings</code>
Perform static type validation for TypeScript projects.</p>
</li>
<li>
<p><code v-pre>stone cache-clear</code>
Clear internal cache, useful during development.</p>
</li>
<li>
<p><code v-pre>stone list</code>
List all available custom commands, including your custom ones and those provided by third-party libraries.</p>
</li>
<li>
<p><code v-pre>stone --version</code>
Show the current version of the Stone CLI.</p>
</li>
</ul>
<h2 id="custom-commands" tabindex="-1"><a class="header-anchor" href="#custom-commands"><span>Custom Commands</span></a></h2>
<p>In addition to built-in commands, Stone.js lets you create your own custom commands.</p>
<p>A <strong>custom command</strong> is an event handler designed to respond to a CLI-triggered <code v-pre>IncomingEvent</code>.
You write it just like you would write an HTTP event handler or a browser event handler, same shape, same lifecycle, same power.</p>
<p>Not only can you build your own CLI tools, but third-party libraries can also expose their own custom commands. This makes the Stone CLI ecosystem modular, extensible, and highly adaptable to real-world project needs.</p>
<h3 id="cli-adapter-installation" tabindex="-1"><a class="header-anchor" href="#cli-adapter-installation"><span>CLI Adapter Installation</span></a></h3>
<p>To run your custom commands, you’ll need to install the CLI adapter package:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i @stone-js/node-cli-adapter</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Important, this adapter is <strong>not</strong> the same as <code v-pre>@stone-js/cli</code>.</p>
<ul>
<li><code v-pre>@stone-js/cli</code> is the command orchestrator. It launches your app, parses the CLI input, and wires up the system.</li>
<li><code v-pre>@stone-js/node-cli-adapter</code> is what allows your application to receive command events and act on them.</li>
</ul>
<p>The CLI tool talks to your app through the CLI adapter. Without it, your custom commands won’t be executed.</p>
<div class="hint-container tip">
<p class="hint-container-title">Fun Fact</p>
<p>No better demonstration of Stone.js's power than its own CLI, it was the first application built with Stone.js.<br>
Talk about dogfooding!<br>
We used Stone.js to build the tool that builds Stone.js apps. 🤓</p>
</div>
<h3 id="cli-adapter-activation" tabindex="-1"><a class="header-anchor" href="#cli-adapter-activation"><span>CLI Adapter Activation</span></a></h3>
<p>Like any other adapter in Stone.js, you must activate the CLI adapter before it can process command line events.</p>
<Tabs id="219" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h4 id="declarative-activation" tabindex="-1"><a class="header-anchor" href="#declarative-activation"><span>Declarative Activation</span></a></h4>
<p>You can activate the CLI adapter declaratively, by adding the <code v-pre>@NodeConsole()</code> decorator to your main application handler.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeConsole <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-cli-adapter'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp<span class="token punctuation">,</span> IEventHandler<span class="token punctuation">,</span> IncomingEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">NodeConsole</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token keyword">implements</span> <span class="token class-name">IEventHandler<span class="token operator">&lt;</span>IncomingEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Your code here</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<h4 id="imperative-activation" tabindex="-1"><a class="header-anchor" href="#imperative-activation"><span>Imperative Activation</span></a></h4>
<p>You can activate the CLI adapter imperatively, by adding it's blueprint <code v-pre>nodeConsoleAdapterBlueprint</code> to your app's configuration.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> nodeConsoleAdapterBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-cli-adapter'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingEvent<span class="token punctuation">,</span> stoneBlueprint<span class="token punctuation">,</span> defineEventHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Application</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Your code here</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> AppBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>stoneBlueprint<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nodeConsoleAdapterBlueprint<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token function">defineEventHandler</span><span class="token punctuation">(</span>Application<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>All your global initialization middleware are disabled when your app runs in CLI mode.</p>
</div>
<h5 id="fallback" tabindex="-1"><a class="header-anchor" href="#fallback"><span>Fallback</span></a></h5>
<p>By default, when the CLI adapter is active and no custom command handler is defined, your main application handler will act as a fallback for any command not explicitly defined.
This means that if you run a command that doesn't match any custom command, or you don't have any custom command defined, the CLI adapter will call your main application handler.</p>
<p>To avoid this, simply remove the <code v-pre>handle</code> method from the main application handler and Stone.js will handle the command as an unrecognized command.</p>
<h5 id="contextual-decoherence" tabindex="-1"><a class="header-anchor" href="#contextual-decoherence"><span>Contextual decoherence</span></a></h5>
<p>You can add the CLI adapter to <strong>any existing Stone.js project</strong>, just like any other adapter.
Stone.js supports <strong>adapter overlay</strong>, which means you can combine CLI, HTTP, Browser, and more within the same app.</p>
<p>Thanks to <strong>contextual decoherence</strong>, Stone.js automatically infers the runtime environment and uses the appropriate adapter during execution. Don’t worry, the CLI adapter is automatically stripped out of frontend bundles, since it only applies to backend runtimes.</p>
<p>If you’re building a mono app, your <code v-pre>Application</code> handler can receive events from <strong>any environment</strong>, including CLI input, HTTP requests, cloud functions, or browser app.</p>
<p>Just activate the adapters you need, and your handler will serve them all.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Browser</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">UseReact</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">NodeHttp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">NodeConsole</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">AwsLambdaHttp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>event<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'World'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token operator">:</span> RenderContext<span class="token operator">&lt;</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token operator">:</span> ReactNode <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>data<span class="token operator">?.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This React app can now run custom commands and run as a serverless function or as a web app in both Node.js and browser environments, all from the same codebase.</p>
<h3 id="defining-a-custom-command" tabindex="-1"><a class="header-anchor" href="#defining-a-custom-command"><span>Defining a Custom Command</span></a></h3>
<p>Stone.js treats every CLI command as an event handler. This means your command can be structured just like a web route or background task, and it will benefit from the same context injection, introspection, and modularity.</p>
<p>There are <strong>three ways</strong> to define a custom command in Stone.js:</p>
<ul>
<li>Class-based</li>
<li>Function-based</li>
<li>Factory-based</li>
</ul>
<p>You can pick the shape that best suits your needs, from structured applications to one-off utilities.</p>
<p>No matter which shape you choose, your command handler always receives an <code v-pre>IncomingEvent</code> and optionally returns a response.</p>
<Tabs id="304" :data='[{"id":"Class-based"},{"id":"Function-based"},{"id":"Factory-based"}]' :active="0" tab-id="class-factory-function">
<template #title0="{ value, isActive }">Class-based</template>
<template #title1="{ value, isActive }">Function-based</template>
<template #title2="{ value, isActive }">Factory-based</template>
<template #tab0="{ value, isActive }">
<h4 id="class-based-command-handler" tabindex="-1"><a class="header-anchor" href="#class-based-command-handler"><span>Class-based Command Handler</span></a></h4>
<p>This is the most robust and introspectable shape, recommended for production apps or when using the declarative API.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/core"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ICommandHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/node-cli-adapter"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyCommand</span> <span class="token keyword">implements</span> <span class="token class-name">ICommandHandler<span class="token operator">&lt;</span>IncomingEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Handle the event here</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<h4 id="function-based-command-handler" tabindex="-1"><a class="header-anchor" href="#function-based-command-handler"><span>Function-based Command Handler</span></a></h4>
<p>Ideal for small scripts, automation tasks, or single-purpose tools.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/core"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> MyCommand <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Handle CLI input here</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lightweight, testable, and expressive.</p>
</template>
<template #tab2="{ value, isActive }">
<h4 id="factory-based-command-handler" tabindex="-1"><a class="header-anchor" href="#factory-based-command-handler"><span>Factory-based Command Handler</span></a></h4>
<p>When you need runtime dependencies from the service container, use a factory.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IContainer<span class="token punctuation">,</span> IncomingEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/core"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">MyCommand</span> <span class="token operator">=</span> <span class="token punctuation">(</span>container<span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> name <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'World'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!!</span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Factory-based commands give you maximum flexibility and seamless access to your internal services.</p>
</template>
</Tabs>
<p>Each shape is valid, and they’re all interoperable.
Use the one that matches your command’s complexity, lifecycle, and ecosystem needs.</p>
<h3 id="registering-the-command-handler" tabindex="-1"><a class="header-anchor" href="#registering-the-command-handler"><span>Registering the Command Handler</span></a></h3>
<p>Once your command handler is defined, you need to register it so that Stone.js can recognize it and execute it when a matching CLI event occurs.</p>
<p>Stone.js offers <strong>two registration styles</strong>, depending on how much control you want:</p>
<ul>
<li>Declarative API, using the <code v-pre>@Command()</code> decorator (for class-based handlers only)</li>
<li>Imperative API, using <code v-pre>defineCommand()</code> (for any shape)</li>
</ul>
<Tabs id="363" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h4 id="declarative-registration" tabindex="-1"><a class="header-anchor" href="#declarative-registration"><span>Declarative Registration</span></a></h4>
<p>This is the most concise and recommended approach for most CLI commands.</p>
<p>You decorate your handler class with <code v-pre>@Command</code>, passing its metadata like name, alias, description, arguments, and options:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/core"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ICommandHandler<span class="token punctuation">,</span> Command <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/node-cli-adapter"</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Command</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'greet'</span><span class="token punctuation">,</span> desc<span class="token operator">:</span> <span class="token string">'Say hello to someone'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">GreetCommand</span> <span class="token keyword">implements</span> <span class="token class-name">ICommandHandler<span class="token operator">&lt;</span>IncomingEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> name <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'World'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once your class is decorated, and your app is bootstrapped with <code v-pre>@StoneApp()</code>, it will be automatically detected and registered at runtime.</p>
</template>
<template #tab1="{ value, isActive }">
<h4 id="imperative-registration" tabindex="-1"><a class="header-anchor" href="#imperative-registration"><span>Imperative Registration</span></a></h4>
<p>If you prefer more manual control, or want to use function or factory-based shapes, you can register your commands using <code v-pre>defineCommand</code>.</p>
<h6 id="function-based-handler" tabindex="-1"><a class="header-anchor" href="#function-based-handler"><span>Function-based Handler</span></a></h6>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineCommand <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-cli-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">GreetCommand</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello from function!'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token function">defineCommand</span><span class="token punctuation">(</span>GreetCommand<span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'greet'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="factory-based-handler" tabindex="-1"><a class="header-anchor" href="#factory-based-handler"><span>Factory-based Handler</span></a></h6>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">GreetCommandFactory</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> name <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'World'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token function">defineCommand</span><span class="token punctuation">(</span>GreetCommandFactory<span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'greet'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This mode gives you flexibility for dynamic registration, runtime assembly, or advanced CLI composition.</p>
</template>
</Tabs>
<p>Once registered, your command handler becomes available to the kernel, and will be executed every time a matching CLI event is received.</p>
<h3 id="command-signature" tabindex="-1"><a class="header-anchor" href="#command-signature"><span>Command Signature</span></a></h3>
<p>Stone.js gives you full control over how your CLI commands are defined and invoked, including their names, aliases, descriptions, arguments, and options.</p>
<p>You can declare the signature through:</p>
<ul>
<li>The <code v-pre>@Command({...})</code> decorator (declarative)</li>
<li>The <code v-pre>defineCommand(..., options)</code> function (imperative)</li>
</ul>
<p>Both approaches support the same set of metadata.</p>
<h4 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>Name</span></a></h4>
<p>Every command needs a unique <code v-pre>name</code>. This is the string the user types in the terminal to invoke your command:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Command</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'user:list'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">stone user:list</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="alias" tabindex="-1"><a class="header-anchor" href="#alias"><span>Alias</span></a></h4>
<p>You can define one or more shortcuts using the <code v-pre>alias</code> property:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Command</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'user:list'</span><span class="token punctuation">,</span> alias<span class="token operator">:</span> <span class="token string">'ul'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">stone ul</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Multiple aliases can be defined as an array:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Command</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'user:list'</span><span class="token punctuation">,</span> alias<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'ul'</span><span class="token punctuation">,</span> <span class="token string">'usli'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h4>
<p>The <code v-pre>desc</code> property provides a human-readable explanation of what your command does. It’s shown in the help screen:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Command</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'user:list'</span><span class="token punctuation">,</span> desc<span class="token operator">:</span> <span class="token string">'List application users'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">stone user:list <span class="token parameter variable">--help</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This helps users understand your command’s purpose at a glance.</p>
<h4 id="arguments" tabindex="-1"><a class="header-anchor" href="#arguments"><span>Arguments</span></a></h4>
<p>Arguments are positional inputs passed after the command name.
You define them using the <code v-pre>args</code> property:</p>
<ul>
<li>Required arguments are wrapped in angle brackets: <code v-pre>&lt;email&gt;</code></li>
<li>Optional arguments are wrapped in square brackets: <code v-pre>[status]</code></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Command</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'user:list'</span><span class="token punctuation">,</span></span>
<span class="line">  args<span class="token operator">:</span> <span class="token string">'&lt;email> [status]'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Used like this:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">stone user:list jonh.doe@domain.com active</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Stone.js will throw a helpful error and show the command signature if required arguments are missing.</p>
<h4 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h4>
<p>Options are named inputs prefixed by <code v-pre>--</code>, useful for flags and toggles.</p>
<p>You define them using the <code v-pre>options</code> property. Each key defines an option name and accepts an object of metadata:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Command</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'user:list'</span><span class="token punctuation">,</span></span>
<span class="line">  options<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    admin<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      alias<span class="token operator">:</span> <span class="token string">'ad'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      describe<span class="token operator">:</span> <span class="token string">'List only admins'</span><span class="token punctuation">,</span></span>
<span class="line">      type<span class="token operator">:</span> <span class="token string">'boolean'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Used like this:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">stone user:list <span class="token parameter variable">--admin</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="supported-option-parameters" tabindex="-1"><a class="header-anchor" href="#supported-option-parameters"><span>Supported Option Parameters</span></a></h4>
<ul>
<li><code v-pre>alias</code>, shortcut for the option</li>
<li><code v-pre>default</code>, default value if not provided</li>
<li><code v-pre>describe</code>, description shown in help output</li>
<li><code v-pre>type</code>, one of <code v-pre>'boolean'</code>, <code v-pre>'string'</code>, <code v-pre>'number'</code>, etc.</li>
</ul>
<p>Stone.js uses <a href="https://yargs.js.org/docs/#api-reference-optionskey-opt" target="_blank" rel="noopener noreferrer">Yargs</a> behind the scenes to parse arguments and options. You can refer to their documentation for even more advanced configurations.</p>
<h3 id="custom-matching-logic" tabindex="-1"><a class="header-anchor" href="#custom-matching-logic"><span>Custom Matching Logic</span></a></h3>
<p>Sometimes, you may want more control over which handler responds to a command, especially when multiple handlers are available.
Stone.js provides a clean solution for this through the optional <code v-pre>match</code> method.</p>
<p>The <code v-pre>match</code> method allows your handler to inspect the <code v-pre>IncomingEvent</code> and decide whether it should handle it.
This is particularly useful when:</p>
<ul>
<li>You have multiple command handlers registered</li>
<li>You want to filter by arguments, options, or context</li>
<li>You’re building dynamic CLI tools</li>
</ul>
<h4 id="supported-shapes" tabindex="-1"><a class="header-anchor" href="#supported-shapes"><span>Supported Shapes</span></a></h4>
<ul>
<li>✅ <strong>Class-based handlers</strong>: just define a <code v-pre>match(event)</code> method alongside your <code v-pre>handle(event)</code> method.</li>
<li>✅ <strong>Factory-based handlers</strong>: return an object with both <code v-pre>match</code> and <code v-pre>handle</code> functions.</li>
<li>❌ <strong>Function-based handlers</strong>: do not support custom matching. They're always treated as default handlers for the given command name.</li>
</ul>
<Tabs id="571" :data='[{"id":"Class-based"},{"id":"Factory-based"}]' :active="0" tab-id="class-factory-function">
<template #title0="{ value, isActive }">Class-based</template>
<template #title1="{ value, isActive }">Factory-based</template>
<template #tab0="{ value, isActive }">
<h4 id="example-class-based" tabindex="-1"><a class="header-anchor" href="#example-class-based"><span>Example, Class-based</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyCommand</span> <span class="token keyword">implements</span> <span class="token class-name">ICommandHandler<span class="token operator">&lt;</span>IncomingEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">match</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> event<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'role'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'admin'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Executed only if match returns true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<h4 id="example-factory-based" tabindex="-1"><a class="header-anchor" href="#example-factory-based"><span>Example, Factory-based</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">MyCommand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">match</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token operator">=></span> event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'env'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'production'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">handle</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// Only runs in production</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<p>If the <code v-pre>match</code> function returns <code v-pre>false</code>, Stone.js will skip this handler and continue searching for another match.
If no handler matches, the main handler will act as fallback (unless disabled).</p>
<p>This small function can be the gatekeeper for complex CLI logic, keep it focused and efficient.</p>
<h3 id="command-input-api" tabindex="-1"><a class="header-anchor" href="#command-input-api"><span>Command Input API</span></a></h3>
<p>Once your command is running, you’ll want to interact with the user, whether by reading passed arguments and options, or by asking for input dynamically.</p>
<p>Stone.js provides two powerful tools to help you handle CLI input:</p>
<ul>
<li>The <code v-pre>IncomingEvent</code> object, which gives you access to parsed arguments and options</li>
<li>The <code v-pre>CommandInput</code> class, which allows interactive user prompts</li>
</ul>
<h4 id="accessing-parsed-input" tabindex="-1"><a class="header-anchor" href="#accessing-parsed-input"><span>Accessing Parsed Input</span></a></h4>
<p>Every command handler receives an <code v-pre>IncomingEvent</code> instance.
You can use the <code v-pre>.get()</code> method to retrieve values by key, whether it's an argument or an option.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> email <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'email'</span><span class="token punctuation">)</span>             <span class="token comment">// From args</span></span>
<span class="line">  <span class="token keyword">const</span> status <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'status'</span><span class="token punctuation">)</span>           <span class="token comment">// From args</span></span>
<span class="line">  <span class="token keyword">const</span> isAdmin <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'admin'</span><span class="token punctuation">)</span>           <span class="token comment">// From options</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also provide a default value as the second argument:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> isAdmin <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'admin'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> email <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'email'</span><span class="token punctuation">,</span> <span class="token string">'unknown@stone.dev'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>This gives you a safe, consistent way to extract CLI data.</p>
<h4 id="prompting-for-input-interactive" tabindex="-1"><a class="header-anchor" href="#prompting-for-input-interactive"><span>Prompting for Input (Interactive)</span></a></h4>
<p>Stone.js goes further by offering a set of async utilities for interactive input, such as asking questions or requesting confirmation.</p>
<p>You access these through the <code v-pre>CommandInput</code> instance, which is injected into your command via the factory shape or constructor.</p>
<h6 id="example-with-factory-injection" tabindex="-1"><a class="header-anchor" href="#example-with-factory-injection"><span>Example with Factory Injection</span></a></h6>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> CommandInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-cli-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">askCommand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> input <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> input<span class="token operator">:</span> CommandInput <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token keyword">await</span> input<span class="token punctuation">.</span><span class="token function">ask</span><span class="token punctuation">(</span><span class="token string">'What is your name?'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Welcome </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="prompt-methods" tabindex="-1"><a class="header-anchor" href="#prompt-methods"><span>Prompt Methods</span></a></h4>
<h6 id="ask" tabindex="-1"><a class="header-anchor" href="#ask"><span>ask</span></a></h6>
<p>Ask the user for a string input.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> email <span class="token operator">=</span> <span class="token keyword">await</span> input<span class="token punctuation">.</span><span class="token function">ask</span><span class="token punctuation">(</span><span class="token string">'Provide your email?'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>With default value:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> email <span class="token operator">=</span> <span class="token keyword">await</span> input<span class="token punctuation">.</span><span class="token function">ask</span><span class="token punctuation">(</span><span class="token string">'Provide your email?'</span><span class="token punctuation">,</span> <span class="token string">'jonh.doe@domain.com'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h6 id="asknumber" tabindex="-1"><a class="header-anchor" href="#asknumber"><span>askNumber</span></a></h6>
<p>Prompt for a numeric input. If the user enters invalid data, the system will re-prompt.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token keyword">await</span> input<span class="token punctuation">.</span><span class="token function">askNumber</span><span class="token punctuation">(</span><span class="token string">'Your age?'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h6 id="secret" tabindex="-1"><a class="header-anchor" href="#secret"><span>secret</span></a></h6>
<p>Same as <code v-pre>ask</code>, but input is hidden (e.g., for passwords):</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token keyword">await</span> input<span class="token punctuation">.</span><span class="token function">secret</span><span class="token punctuation">(</span><span class="token string">'Enter your password'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h6 id="confirm" tabindex="-1"><a class="header-anchor" href="#confirm"><span>confirm</span></a></h6>
<p>Ask a yes/no question. Returns <code v-pre>true</code> or <code v-pre>false</code>.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> confirm <span class="token operator">=</span> <span class="token keyword">await</span> input<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">'Proceed with deployment?'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>With default value:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> confirm <span class="token operator">=</span> <span class="token keyword">await</span> input<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">'Proceed?'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h6 id="choice" tabindex="-1"><a class="header-anchor" href="#choice"><span>choice</span></a></h6>
<p>Let the user select from a predefined list of options.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token keyword">await</span> input<span class="token punctuation">.</span><span class="token function">choice</span><span class="token punctuation">(</span><span class="token string">'Choose a color'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'Red'</span><span class="token punctuation">,</span> <span class="token string">'Green'</span><span class="token punctuation">,</span> <span class="token string">'Blue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Enable multiple selections by passing <code v-pre>true</code> as the fourth argument:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> colors <span class="token operator">=</span> <span class="token keyword">await</span> input<span class="token punctuation">.</span><span class="token function">choice</span><span class="token punctuation">(</span><span class="token string">'Pick your favorite'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'Red'</span><span class="token punctuation">,</span> <span class="token string">'Green'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h6 id="editor" tabindex="-1"><a class="header-anchor" href="#editor"><span>editor</span></a></h6>
<p>Let the user enter a large amount of text in their preferred system editor.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> bio <span class="token operator">=</span> <span class="token keyword">await</span> input<span class="token punctuation">.</span><span class="token function">editor</span><span class="token punctuation">(</span><span class="token string">'Your biography?'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>With fallback content:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> bio <span class="token operator">=</span> <span class="token keyword">await</span> input<span class="token punctuation">.</span><span class="token function">editor</span><span class="token punctuation">(</span><span class="token string">'Your biography?'</span><span class="token punctuation">,</span> <span class="token string">'I am a passionate developer.'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Stone.js uses <a href="https://www.npmjs.com/package/prompts" target="_blank" rel="noopener noreferrer">Prompts</a> under the hood to provide these prompts, but you never have to touch it directly.</p>
<h3 id="command-output-api" tabindex="-1"><a class="header-anchor" href="#command-output-api"><span>Command Output API</span></a></h3>
<p>When building CLI tools, presenting information clearly is just as important as receiving input.
Stone.js offers a rich <code v-pre>CommandOutput</code> utility to help you format and display your messages cleanly and efficiently.</p>
<p>This object is injected into your command the same way as <code v-pre>CommandInput</code>, either via the class constructor or factory parameters.</p>
<h4 id="example-with-factory-injection-1" tabindex="-1"><a class="header-anchor" href="#example-with-factory-injection-1"><span>Example with Factory Injection</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> CommandInput<span class="token punctuation">,</span> CommandOutput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-cli-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">greetCommand</span> <span class="token operator">=</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token punctuation">{</span> input<span class="token punctuation">,</span> output <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> input<span class="token operator">:</span> CommandInput<span class="token punctuation">,</span> output<span class="token operator">:</span> CommandOutput <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token keyword">await</span> input<span class="token punctuation">.</span><span class="token function">ask</span><span class="token punctuation">(</span><span class="token string">'Your name?'</span><span class="token punctuation">)</span></span>
<span class="line">    output<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="basic-output-methods" tabindex="-1"><a class="header-anchor" href="#basic-output-methods"><span>Basic Output Methods</span></a></h4>
<h6 id="info" tabindex="-1"><a class="header-anchor" href="#info"><span>info</span></a></h6>
<p>Display a general message (usually blue):</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">output<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Processing complete.'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h6 id="warn" tabindex="-1"><a class="header-anchor" href="#warn"><span>warn</span></a></h6>
<p>Display a warning message (yellow):</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">output<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'Some entries were skipped.'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h6 id="error" tabindex="-1"><a class="header-anchor" href="#error"><span>error</span></a></h6>
<p>Display an error message (red):</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">output<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Failed to connect to database.'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h6 id="succeed" tabindex="-1"><a class="header-anchor" href="#succeed"><span>succeed</span></a></h6>
<p>Display a success message (green):</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">output<span class="token punctuation">.</span><span class="token function">succeed</span><span class="token punctuation">(</span><span class="token string">'All users imported successfully!'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h6 id="breakline" tabindex="-1"><a class="header-anchor" href="#breakline"><span>breakLine</span></a></h6>
<p>Insert a blank line in the terminal:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">output<span class="token punctuation">.</span><span class="token function">breakLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Useful to improve readability between sections.</p>
<h4 id="advanced-output" tabindex="-1"><a class="header-anchor" href="#advanced-output"><span>Advanced Output</span></a></h4>
<h6 id="table" tabindex="-1"><a class="header-anchor" href="#table"><span>table</span></a></h6>
<p>Display tabular data in rows and columns.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Jonh Doe'</span><span class="token punctuation">,</span> email<span class="token operator">:</span> <span class="token string">'jonh.doe@domain.com'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Jane Doe'</span><span class="token punctuation">,</span> email<span class="token operator">:</span> <span class="token string">'jane.doe@domain.com'</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">output<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'email'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can pass either an array of objects, or a single object, and optionally filter specific columns.</p>
<h6 id="spin" tabindex="-1"><a class="header-anchor" href="#spin"><span>spin</span></a></h6>
<p>Start a loading spinner, great for tasks that take time.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> spinner <span class="token operator">=</span> output<span class="token punctuation">.</span><span class="token function">spin</span><span class="token punctuation">(</span><span class="token string">'Uploading file...'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Stop the spinner when done:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">spinner<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This gives your commands a polished, responsive feel.</p>
<h6 id="progressbar" tabindex="-1"><a class="header-anchor" href="#progressbar"><span>progressBar</span></a></h6>
<p>Display a visual progress bar for iterative tasks.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> progress <span class="token operator">=</span> output<span class="token punctuation">.</span><span class="token function">progressBar</span><span class="token punctuation">(</span><span class="token string">':bar'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> total<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  progress<span class="token punctuation">.</span><span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>progress<span class="token punctuation">.</span>complete<span class="token punctuation">)</span> <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Stone.js uses the <a href="https://www.npmjs.com/package/progress" target="_blank" rel="noopener noreferrer"><code v-pre>progress</code></a> library under the hood, so you can pass any supported format and options.</p>
<p>Clear, styled output helps users understand what your CLI is doing, and turns scripts into professional tools.</p>
<h2 id="extensibility" tabindex="-1"><a class="header-anchor" href="#extensibility"><span>Extensibility</span></a></h2>
<p>Stone.js was designed to be modular and library-friendly. That means you can not only create your own commands, but also consume commands from third-party packages, or provide them yourself if you’re building reusable libraries.</p>
<h3 id="third-party-commands" tabindex="-1"><a class="header-anchor" href="#third-party-commands"><span>Third-party Commands</span></a></h3>
<p>Any third-party library can register its own built-in commands. These commands can be implemented using:</p>
<ul>
<li>Class-based handlers</li>
<li>Factory-based handlers</li>
<li>Function-based handlers</li>
</ul>
<p>They behave just like your own commands and are executed through the same CLI interface.
For example:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">stone router list</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This command could come from an external library that provides routing features, and it will be seamlessly available in your CLI once the library is activated.</p>
<h3 id="registration-requirements" tabindex="-1"><a class="header-anchor" href="#registration-requirements"><span>Registration Requirements</span></a></h3>
<p>Third-party commands <strong>must</strong> use the <strong>Imperative API</strong> for registration.</p>
<p>Why? Because commands are attached to the CLI adapter, and the adapter is only resolved at runtime. This means the command registration must be dynamic, during the blueprint resolution phase.</p>
<p>Libraries do this by registering a <strong>Blueprint Middleware</strong>, which adds their command definitions when the current platform is <code v-pre>node-console</code>.</p>
<h3 id="example-router-command-from-a-third-party-library" tabindex="-1"><a class="header-anchor" href="#example-router-command-from-a-third-party-library"><span>Example: Router Command from a Third-party Library</span></a></h3>
<h4 id="step-1-define-command-options-and-handler" tabindex="-1"><a class="header-anchor" href="#step-1-define-command-options-and-handler"><span>Step 1, Define Command Options and Handler</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> routerCommandOptions<span class="token operator">:</span> CommandOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'router'</span><span class="token punctuation">,</span></span>
<span class="line">  alias<span class="token operator">:</span> <span class="token string">'r'</span><span class="token punctuation">,</span></span>
<span class="line">  args<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'&lt;action>'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  desc<span class="token operator">:</span> <span class="token string">'Router utility commands'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">options</span><span class="token operator">:</span> <span class="token punctuation">(</span>yargs<span class="token operator">:</span> IArgv<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> yargs<span class="token punctuation">.</span><span class="token function">positional</span><span class="token punctuation">(</span><span class="token string">'action'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      type<span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span></span>
<span class="line">      choices<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'list'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      desc<span class="token operator">:</span> <span class="token string">'Display route definitions'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">RouterCommand</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> container<span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> action <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'action'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>action <span class="token operator">===</span> <span class="token string">'list'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token keyword">await</span> Router<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRouterOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dumpRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">private</span> <span class="token function">getRouterOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> RouterOptions <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> routerOptions <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>container</span>
<span class="line">      <span class="token punctuation">.</span><span class="token generic-function"><span class="token function">make</span><span class="token generic class-name"><span class="token operator">&lt;</span>IBlueprint<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'blueprint'</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span>RouterOptions<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'stone.router'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>routerOptions<span class="token punctuation">,</span> dependencyResolver<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>container <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="step-2-register-commands-dynamically-via-middleware" tabindex="-1"><a class="header-anchor" href="#step-2-register-commands-dynamically-via-middleware"><span>Step 2, Register Commands Dynamically via Middleware</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> SetRouterCommandsMiddleware <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span></span>
<span class="line">  context<span class="token operator">:</span> BlueprintContext<span class="token operator">&lt;</span>IBlueprint<span class="token punctuation">,</span> ClassType<span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">  next<span class="token operator">:</span> NextMiddleware<span class="token operator">&lt;</span>BlueprintContext<span class="token operator">&lt;</span>IBlueprint<span class="token punctuation">,</span> ClassType<span class="token operator">></span><span class="token punctuation">,</span> IBlueprint<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>IBlueprint<span class="token operator">></span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>blueprint<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'stone.adapter.platform'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token constant">NODE_CONSOLE_PLATFORM</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    context<span class="token punctuation">.</span>blueprint<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'stone.adapter.commands'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> options<span class="token operator">:</span> routerCommandOptions<span class="token punctuation">,</span> isClass<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> module<span class="token operator">:</span> RouterCommand <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="step-3-expose-the-middleware-in-your-library-s-blueprint" tabindex="-1"><a class="header-anchor" href="#step-3-expose-the-middleware-in-your-library-s-blueprint"><span>Step 3, Expose the Middleware in Your Library's Blueprint</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> myLibBlueprint <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  stone<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    blueprint<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      middleware<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> module<span class="token operator">:</span> SetRouterCommandsMiddleware <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once your library is used and its blueprint is registered, the command becomes available to the user automatically.</p>
<p>This mechanism ensures:</p>
<ul>
<li>Third-party commands are only registered when relevant (CLI context)</li>
<li>Registration is dynamic and scoped to the CLI adapter</li>
<li>No pollution of environments like browser or Lambda</li>
</ul>
<p>Stone.js makes sure that commands defined in libraries remain lightweight, discoverable, and executable, all while keeping full control over the CLI namespace.</p>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<h4 id="choose-the-right-handler-shape" tabindex="-1"><a class="header-anchor" href="#choose-the-right-handler-shape"><span>Choose the Right Handler Shape</span></a></h4>
<p>Each handler shape has its own sweet spot. Here’s how to pick the right one:</p>
<ul>
<li>
<p><strong>Class-based</strong>
Best for structured CLI tools with decorators, metadata, and clear organization.
Recommended when using the Declarative API.</p>
</li>
<li>
<p><strong>Function-based</strong>
Ideal for scripts, automation, or quick utilities.
Simple and direct, but limited (no dependency injection, no match function).</p>
</li>
<li>
<p><strong>Factory-based</strong>
Perfect when you need runtime access to services, containers, or need to inject <code v-pre>input</code> and <code v-pre>output</code> explicitly.
Best choice for advanced CLI applications.</p>
</li>
</ul>
<h4 id="register-explicit-handlers" tabindex="-1"><a class="header-anchor" href="#register-explicit-handlers"><span>Register Explicit Handlers</span></a></h4>
<p>Avoid defining a <code v-pre>handle()</code> method in your main <code v-pre>Application</code> class unless you're using a wildcard pattern.</p>
<p>Once the CLI adapter is activated, the main handler will be invoked for <strong>any command</strong> that doesn’t match a custom handler.
To prevent accidental fallbacks, leave <code v-pre>handle()</code> undefined when you're only using explicit commands.</p>
<h4 id="use-descriptions-and-aliases" tabindex="-1"><a class="header-anchor" href="#use-descriptions-and-aliases"><span>Use Descriptions and Aliases</span></a></h4>
<p>Always define:</p>
<ul>
<li>A <code v-pre>desc</code> so users understand the command’s purpose</li>
<li>One or more <code v-pre>alias</code> values for convenience</li>
</ul>
<p>This improves <code v-pre>--help</code> output and makes your CLI friendlier to use.</p>
<h4 id="use-commandinput-when-appropriate" tabindex="-1"><a class="header-anchor" href="#use-commandinput-when-appropriate"><span>Use CommandInput When Appropriate</span></a></h4>
<p>Don’t overload your command signature with arguments and options.
Instead, use <code v-pre>CommandInput</code> to collect additional or sensitive data interactively:</p>
<ul>
<li>Ask for passwords with <code v-pre>secret()</code></li>
<li>Confirm destructive actions with <code v-pre>confirm()</code></li>
<li>Get long input with <code v-pre>editor()</code></li>
</ul>
<p>Your users will thank you.</p>
<h4 id="structure-your-output" tabindex="-1"><a class="header-anchor" href="#structure-your-output"><span>Structure Your Output</span></a></h4>
<p>Use <code v-pre>CommandOutput</code> to:</p>
<ul>
<li>Group steps visually with <code v-pre>breakLine()</code></li>
<li>Display lists with <code v-pre>table()</code></li>
<li>Handle longer operations with <code v-pre>spin()</code> and <code v-pre>progressBar()</code></li>
<li>Keep things colorful and readable using <code v-pre>info()</code>, <code v-pre>warn()</code>, <code v-pre>error()</code>, and <code v-pre>succeed()</code></li>
</ul>
<p>Avoid <code v-pre>console.log()</code> unless you’re printing raw data for scripting purposes.</p>
<h4 id="one-command-one-purpose" tabindex="-1"><a class="header-anchor" href="#one-command-one-purpose"><span>One Command, One Purpose</span></a></h4>
<p>Keep each command focused on a single task. If your command does too many things, break it down into subcommands or split logic into services.</p>
<h4 id="prefer-declarative-api-for-simplicity" tabindex="-1"><a class="header-anchor" href="#prefer-declarative-api-for-simplicity"><span>Prefer Declarative API for Simplicity</span></a></h4>
<p>Unless you need manual control, prefer <code v-pre>@Command()</code> for its clarity and automatic wiring.
If you're building a library, you can even expose reusable command classes with their own decorators.</p>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>Stone.js provides a unified, flexible, and extensible system for building CLI tools, whether you're working on a single project or an entire ecosystem of libraries.</p>
<p>Here’s what you’ve learned:</p>
<ul>
<li>
<p><strong>Stone CLI</strong> is the official command-line tool, installed globally or locally, offering built-in commands like <code v-pre>serve</code>, <code v-pre>build</code>, and <code v-pre>init</code>.</p>
</li>
<li>
<p><strong>Custom Commands</strong> let you turn your application into a full CLI tool by defining handlers that respond to CLI input.</p>
</li>
<li>
<p>You can define commands using <strong>class-based</strong>, <strong>function-based</strong>, or <strong>factory-based</strong> shapes depending on your needs.</p>
</li>
<li>
<p>You can register command handlers via:</p>
<ul>
<li><strong>Declarative API</strong> using the <code v-pre>@Command()</code> decorator</li>
<li><strong>Imperative API</strong> using <code v-pre>defineCommand(...)</code></li>
</ul>
</li>
<li>
<p>Stone.js allows you to define your command’s <strong>name</strong>, <strong>alias</strong>, <strong>description</strong>, <strong>arguments</strong>, and <strong>options</strong> using a clean and declarative format.</p>
</li>
<li>
<p>Use the <code v-pre>IncomingEvent.get()</code> method to retrieve arguments and options, and the <code v-pre>CommandInput</code> class for interactive prompts like <code v-pre>ask</code>, <code v-pre>secret</code>, <code v-pre>choice</code>, etc.</p>
</li>
<li>
<p>Use the <code v-pre>CommandOutput</code> class to print messages, render tables, spin loaders, and show progress bars.</p>
</li>
<li>
<p>You can create libraries that expose CLI commands by dynamically registering them through <strong>Blueprint Middleware</strong>, targeting the CLI adapter only when relevant.</p>
</li>
</ul>
<p>Whether you’re building dev tools, setup scripts, admin CLIs, or internal utilities, the Stone.js command system gives you power, clarity, and consistency, across every dimension of the Continuum.</p>
<p>Welcome to the CLI continuum, where your terminal just got a whole lot smarter.</p>
</div></template>


