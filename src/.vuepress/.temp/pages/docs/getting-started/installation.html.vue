<template><div><p>Stone.js is a Node.js framework requiring <strong>JavaScript</strong> or <strong>TypeScript</strong> skills and Node.js installation.</p>
<p>Oh! I forgot! First of all, you need a computer.</p>
<p>Ensure you have:</p>
<ul>
<li>At least the latest version of <a href="https://nodejs.org/download/release/v18.19.0/" target="_blank" rel="noopener noreferrer">Node.js v20</a></li>
<li>A package manager like <code v-pre>npm</code>, <code v-pre>yarn</code> or <code v-pre>pnpm</code></li>
</ul>
<p>Verify Node.js installation:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">node</span> <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>If not installed, download from <a href="https://nodejs.org/en/download" target="_blank" rel="noopener noreferrer">nodejs.org</a>. For multiple Node.js versions, consider <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">Node Version Manager</a>.</p>
<h2 id="creating-a-new-project" tabindex="-1"><a class="header-anchor" href="#creating-a-new-project"><span>Creating a New Project</span></a></h2>
<p>Create a new Stone.js project using one of these:</p>
<ul>
<li><a href="https://docs.npmjs.com/cli/v10/commands/npm-init" target="_blank" rel="noopener noreferrer">npm create</a></li>
<li><a href="https://classic.yarnpkg.com/lang/en/docs/cli/create/" target="_blank" rel="noopener noreferrer">yarn create</a></li>
<li><a href="https://pnpm.io/cli/create" target="_blank" rel="noopener noreferrer">pnpm create</a></li>
</ul>
<p>Execute from the console:</p>
<CodeTabs id="54" :data='[{"id":"npm"},{"id":"yarn"},{"id":"pnpm"}]' :active="0" tab-id="shell">
<template #title0="{ value, isActive }">npm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">pnpm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> create @stone-js@latest hello-world</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> create @stone-js hello-world</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> create @stone-js hello-world</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>You can create a Stone.js project with default configurations by skipping the initialization steps:</p>
<CodeTabs id="68" :data='[{"id":"npm"},{"id":"yarn"},{"id":"pnpm"}]' :active="0" tab-id="shell">
<template #title0="{ value, isActive }">npm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">pnpm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> create @stone-js@latest hello-world -- <span class="token parameter variable">-y</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> create @stone-js hello-world <span class="token parameter variable">-y</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> create @stone-js hello-world <span class="token parameter variable">-y</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="project-initialization-steps" tabindex="-1"><a class="header-anchor" href="#project-initialization-steps"><span>Project Initialization Steps</span></a></h2>
<p>After executing the command to create a new Stone.js project, you'll be guided through a questionnaire.
This questionnaire helps tailor the project setup to your specific needs by asking about various configuration options.</p>
<h3 id="project-name" tabindex="-1"><a class="header-anchor" href="#project-name"><span>Project Name</span></a></h3>
<p>Specify the directory name (must be empty).</p>
<p>Alternatively, run the command in the current directory:</p>
<CodeTabs id="94" :data='[{"id":"npm"},{"id":"yarn"},{"id":"pnpm"}]' :active="0" tab-id="shell">
<template #title0="{ value, isActive }">npm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">pnpm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> create @stone-js@latest <span class="token builtin class-name">.</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> create @stone-js <span class="token builtin class-name">.</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> create @stone-js <span class="token builtin class-name">.</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="typings" tabindex="-1"><a class="header-anchor" href="#typings"><span>Typings</span></a></h3>
<p>Choose between:</p>
<ul>
<li><code v-pre>None (Vanilla)</code> for JavaScript.</li>
<li><code v-pre>TypeScript</code> for TypeScript support.</li>
</ul>
<h3 id="template-selection" tabindex="-1"><a class="header-anchor" href="#template-selection"><span>Template Selection</span></a></h3>
<p>Choose a starter template, they are grouped by their complexity and features:</p>
<ul>
<li><code v-pre>Basic</code>: A basic template with no additional features.</li>
<li><code v-pre>Standard</code>: For medium-sized systems with common features like routing, and middleware.</li>
<li><code v-pre>Full</code>: A full-featured template with advanced features database, authentication, and more.</li>
</ul>
<h3 id="package-manager" tabindex="-1"><a class="header-anchor" href="#package-manager"><span>Package Manager</span></a></h3>
<p>Select:</p>
<ul>
<li><code v-pre>npm</code></li>
<li><code v-pre>yarn</code></li>
<li><code v-pre>pnpm</code></li>
</ul>
<h3 id="modules" tabindex="-1"><a class="header-anchor" href="#modules"><span>Modules</span></a></h3>
<p>Add needed modules during project creation or later.</p>
<h3 id="testing-framework" tabindex="-1"><a class="header-anchor" href="#testing-framework"><span>Testing Framework</span></a></h3>
<p>Choose:</p>
<ul>
<li><code v-pre>vitest</code> for <a href="https://vitest.dev/" target="_blank" rel="noopener noreferrer">vitest</a>.</li>
<li><code v-pre>None</code> for no testing framework.</li>
</ul>
<h3 id="initialize-git" tabindex="-1"><a class="header-anchor" href="#initialize-git"><span>Initialize Git</span></a></h3>
<p>Optionally initialize a Git repository.</p>
<h2 id="running-your-app" tabindex="-1"><a class="header-anchor" href="#running-your-app"><span>Running Your App</span></a></h2>
<p>After completing the questionnaire, you can start in development mode:</p>
<CodeTabs id="205" :data='[{"id":"npm"},{"id":"yarn"},{"id":"pnpm"}]' :active="0" tab-id="shell">
<template #title0="{ value, isActive }">npm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">pnpm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="build-for-production" tabindex="-1"><a class="header-anchor" href="#build-for-production"><span>Build for Production</span></a></h2>
<p>Stone.js needs to be compiled and bundled due to its use of advanced features not yet supported by all <strong>JavaScript</strong> engines. Bundling eliminates the need for <code v-pre>node_modules</code>, creating a single deployable file. During the bundling process, tree shaking ensures only used modules are included, resulting in a lightweight build.</p>
<p>The build output will be in the <code v-pre>dist</code> folder and could contain:</p>
<ul>
<li><code v-pre>dist/index.html</code> for client side project</li>
<li><code v-pre>dist/server.mjs</code> for any server side project</li>
</ul>
<p>ready for deployment anywhere.</p>
<p>Build your project:</p>
<CodeTabs id="243" :data='[{"id":"npm"},{"id":"yarn"},{"id":"pnpm"}]' :active="0" tab-id="shell">
<template #title0="{ value, isActive }">npm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">pnpm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="preview-the-production-build" tabindex="-1"><a class="header-anchor" href="#preview-the-production-build"><span>Preview the Production Build</span></a></h2>
<p>Preview your build as it would be in production. This is useful for testing the production build before deploying it:</p>
<CodeTabs id="260" :data='[{"id":"npm"},{"id":"yarn"},{"id":"pnpm"}]' :active="0" tab-id="shell">
<template #title0="{ value, isActive }">npm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">pnpm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run preview</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> preview</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> preview</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="launch-the-production-build" tabindex="-1"><a class="header-anchor" href="#launch-the-production-build"><span>Launch the Production Build</span></a></h2>
<p>Run your build as a standalone Node.js system, with no <code v-pre>node_modules</code> nor <code v-pre>package.json</code>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">node</span> server.mjs</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Or deploy it on any serverless platform using an appropriate adapter, which we will discuss later.</p>
<p>Sure! Based on everything we’ve discussed about Stone.js and its philosophy—like <strong>the Continuum Architecture</strong>, deployment flexibility, decorator-based or imperative APIs, and keeping things fun and clear—here’s a polished, professional, and easy-to-follow English version of the <strong>Manual Installation</strong> section for the Stone.js documentation:</p>
<h2 id="manual-installation" tabindex="-1"><a class="header-anchor" href="#manual-installation"><span>Manual installation</span></a></h2>
<p>Wanna start your Stone.js app from scratch, like a true master of the continuum? No problem. Here's how to go fully manual and configure everything yourself, step by step.</p>
<p>Whether you're building a backend service, a single-page frontend, or a full-stack universal app, Stone.js has your back. The following guide walks you through setting up a minimal project with either the <strong>declarative</strong> or <strong>imperative</strong> API.</p>
<hr>
<h3 id="step-1-create-package-json" tabindex="-1"><a class="header-anchor" href="#step-1-create-package-json"><span>Step 1: Create <code v-pre>package.json</code></span></a></h3>
<p>Start by initializing your Node.js project:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> init <span class="token parameter variable">-y</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h3 id="step-2-install-the-dependencies" tabindex="-1"><a class="header-anchor" href="#step-2-install-the-dependencies"><span>Step 2: Install the Dependencies</span></a></h3>
<h4 id="backend-e-g-rest-api-microservice" tabindex="-1"><a class="header-anchor" href="#backend-e-g-rest-api-microservice"><span>Backend (e.g. REST API, microservice)</span></a></h4>
<p>Install the Stone.js core, the Node.js HTTP adapter, and the CLI:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i @stone-js/core @stone-js/node-http-adapter @stone-js/cli</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="frontend-react-spa" tabindex="-1"><a class="header-anchor" href="#frontend-react-spa"><span>Frontend (React SPA)</span></a></h4>
<p>If you're building a React single-page system:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i react react-dom @stone-js/core @stone-js/use-react @stone-js/browser-adapter @stone-js/cli</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="dev-dependencies" tabindex="-1"><a class="header-anchor" href="#dev-dependencies"><span>Dev Dependencies</span></a></h4>
<p>Stone.js uses decorators (yes, the fancy JS feature), so you'll need Babel plugins:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @babel/plugin-proposal-decorators @babel/preset-env</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Using TypeScript? Of course you are—you’re classy.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @babel/preset-typescript @types/node @types/react @types/react-dom</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h3 id="step-3-add-cli-scripts" tabindex="-1"><a class="header-anchor" href="#step-3-add-cli-scripts"><span>Step 3: Add CLI Scripts</span></a></h3>
<p>Let’s wire up the <code v-pre>stone</code> CLI so you can build and run your app with style:</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"stone dev"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"stone build"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"preview"</span><span class="token operator">:</span> <span class="token string">"stone preview"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you’re ready to develop, bundle, and preview your app using just a command.</p>
<hr>
<h3 id="step-4-create-your-system-entry-point" tabindex="-1"><a class="header-anchor" href="#step-4-create-your-system-entry-point"><span>Step 4: Create Your System Entry Point</span></a></h3>
<p>Create your system entry point in the <code v-pre>app/</code> folder. You can name it whatever you want (<code v-pre>Application.ts</code>, <code v-pre>main.jsx</code>, <code v-pre>index.js</code>, etc.) as long as it lives inside <code v-pre>app/</code>.</p>
<p>Stone.js will detect it automatically as your app’s root.</p>
<hr>
<h3 id="option-1-declarative-api-decorator-style" tabindex="-1"><a class="header-anchor" href="#option-1-declarative-api-decorator-style"><span>Option 1: Declarative API (Decorator Style)</span></a></h3>
<p>The declarative API lets you define your app with decorators like <code v-pre>@StoneApp()</code> and platform-specific adapters like <code v-pre>@NodeHttp()</code> or <code v-pre>@Browser()</code>.</p>
<h4 id="example-backend-app" tabindex="-1"><a class="header-anchor" href="#example-backend-app"><span>Example: Backend App</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// app/Application.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeHttp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/node-http-adapter"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingEvent<span class="token punctuation">,</span> IEventHandler<span class="token punctuation">,</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/core"</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">NodeHttp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token keyword">implements</span> <span class="token class-name">IEventHandler<span class="token operator">&lt;</span>IncomingEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">"Hello world!"</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-react-frontend-app" tabindex="-1"><a class="header-anchor" href="#example-react-frontend-app"><span>Example: React Frontend App</span></a></h4>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre v-pre><code><span class="line"><span class="token comment">// app/Application.tsx</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ReactNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/core"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Browser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/browser-adapter"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  UseReact<span class="token punctuation">,</span> IComponentEventHandler<span class="token punctuation">,</span> ReactIncomingEvent<span class="token punctuation">,</span> RenderContext</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/use-react"</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">Browser</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">@<span class="token function">UseReact</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">@<span class="token function">StoneApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token keyword">implements</span> <span class="token class-name">IComponentEventHandler<span class="token operator">&lt;</span>ReactIncomingEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> ReactIncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">"Hello world!"</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token operator">:</span> RenderContext<span class="token operator">&lt;</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token operator">:</span> ReactNode <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>data<span class="token operator">?.</span>message<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>You can use regular JavaScript too—just remove the types and keep the logic!</p>
</blockquote>
<h3 id="option-2-imperative-api-full-control" tabindex="-1"><a class="header-anchor" href="#option-2-imperative-api-full-control"><span>Option 2: Imperative API (Full Control)</span></a></h3>
<p>Prefer functional programming or need fine-grained control? Stone.js has your back with its imperative API using blueprints.</p>
<h4 id="example-backend-app-1" tabindex="-1"><a class="header-anchor" href="#example-backend-app-1"><span>Example: Backend App</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// app/Application.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  defineBlueprintConfig<span class="token punctuation">,</span> defineFactoryEventHandler<span class="token punctuation">,</span> IncomingEvent</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/core"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> nodeHttpAdapterBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/node-http-adapter"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">Application</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">"Hello world!"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> AppBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span>nodeHttpAdapterBlueprint<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  stone<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    kernel<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      eventHandler<span class="token operator">:</span> <span class="token function">defineFactoryEventHandler</span><span class="token punctuation">(</span>Application<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-react-frontend-app-1" tabindex="-1"><a class="header-anchor" href="#example-react-frontend-app-1"><span>Example: React Frontend App</span></a></h4>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre v-pre><code><span class="line"><span class="token comment">// app/Application.tsx</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  RenderContext<span class="token punctuation">,</span></span>
<span class="line">  useReactBlueprint<span class="token punctuation">,</span></span>
<span class="line">  UseReactBlueprint<span class="token punctuation">,</span></span>
<span class="line">  ReactIncomingEvent<span class="token punctuation">,</span></span>
<span class="line">  defineFactoryComponent<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/use-react"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ReactNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/core"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> browserAdapterBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/browser-adapter"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Application</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">handle</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> ReactIncomingEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">"Hello world!"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  render<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token operator">:</span> RenderContext<span class="token operator">&lt;</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token operator">:</span> ReactNode <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>data<span class="token operator">?.</span>message<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> AppBlueprint <span class="token operator">=</span> <span class="token generic-function"><span class="token function">defineBlueprintConfig</span><span class="token generic class-name"><span class="token operator">&lt;</span>UseReactBlueprint<span class="token operator">></span></span></span><span class="token punctuation">(</span></span>
<span class="line">  useReactBlueprint<span class="token punctuation">,</span></span>
<span class="line">  browserAdapterBlueprint<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">'stone.useReact.componentEventHandler'</span><span class="token punctuation">,</span> <span class="token function">defineFactoryComponent</span><span class="token punctuation">(</span>Application<span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="optional-typescript-config" tabindex="-1"><a class="header-anchor" href="#optional-typescript-config"><span>Optional: TypeScript Config</span></a></h3>
<p>If you're using TypeScript, create a <code v-pre>tsconfig.json</code> file and configure it to support decorators and JSX (for frontend apps). You can look at <a href="https://github.com/stone-js/starters" target="_blank" rel="noopener noreferrer">Stone.js starter templates</a> for inspiration.</p>
<hr>
<h3 id="step-5-run-the-app" tabindex="-1"><a class="header-anchor" href="#step-5-run-the-app"><span>Step 5: Run the App</span></a></h3>
<p>Use the CLI scripts defined earlier to develop, build, and preview your app:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run dev       <span class="token comment"># Launch the dev server</span></span>
<span class="line"><span class="token function">npm</span> run build     <span class="token comment"># Build your app</span></span>
<span class="line"><span class="token function">npm</span> run preview   <span class="token comment"># Preview the build output</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="that-s-it" tabindex="-1"><a class="header-anchor" href="#that-s-it"><span>That's It!</span></a></h3>
<p>You’re now fully set up to build a <strong>modern</strong>, <strong>cloud-native</strong>, and <strong>context-aware</strong> system with Stone.js.</p>
<p>Start small, think big, and deploy anywhere—because in Stone.js, <strong>everything is a continuum</strong>.</p>
</div></template>


