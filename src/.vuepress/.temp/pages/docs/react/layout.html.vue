<template><div><p>In Stone.js, a <strong>layout</strong> is a special kind of component that wraps your pages to provide consistent structure and shared elements, like headers, footers, navigation bars, or global wrappers.</p>
<p>Unlike a <strong>page</strong>, a layout is <strong>not</strong> an event handler.
It doesn’t process incoming events or respond to the request lifecycle, it only participates in the <strong>rendering phase</strong>. You can think of a layout as a <strong>view-dimension scaffold</strong>: it receives the output of a page and determines how that page is framed and displayed.</p>
<h3 id="why-not-treat-a-layout-like-a-page" tabindex="-1"><a class="header-anchor" href="#why-not-treat-a-layout-like-a-page"><span>Why not treat a layout like a page?</span></a></h3>
<p>Because their responsibilities are different:</p>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Page</th>
<th>Layout</th>
</tr>
</thead>
<tbody>
<tr>
<td>Handles events</td>
<td>✅ Yes (event handler)</td>
<td>❌ No</td>
</tr>
<tr>
<td>Has <code v-pre>handle()</code></td>
<td>✅ Yes</td>
<td>❌ No</td>
</tr>
<tr>
<td>Has <code v-pre>render()</code></td>
<td>✅ Yes</td>
<td>✅ Yes</td>
</tr>
<tr>
<td>Can define metadata</td>
<td>✅ Yes</td>
<td>✅ Yes (<code v-pre>head()</code> optional)</td>
</tr>
<tr>
<td>Receives lifecycle</td>
<td>✅ Yes (hooks, middleware)</td>
<td>❌ No</td>
</tr>
<tr>
<td>Wraps other content</td>
<td>❌ No</td>
<td>✅ Yes (via <code v-pre>&lt;StoneOutlet /&gt;</code>)</td>
</tr>
</tbody>
</table>
<p>This separation gives you architectural clarity:</p>
<ul>
<li>Pages handle logic, load data, and respond to context</li>
<li>Layouts provide consistent structure, styling, and UI context</li>
</ul>
<h3 id="how-it-fits-in-the-continuum" tabindex="-1"><a class="header-anchor" href="#how-it-fits-in-the-continuum"><span>How it fits in the Continuum</span></a></h3>
<p>Layouts live entirely in the <strong>view dimension</strong> of your application.
They don’t care about transport protocols, event formats, or middleware.
They exist to make the visual layer modular, composable, and context-aware, without leaking business logic.</p>
<p>Stone.js provides a familiar, React-compatible structure for defining and rendering layouts, while ensuring they remain <strong>platform-agnostic</strong> and <strong>easy to manage</strong> across SPA, SSR, and SOR applications.</p>
<h2 id="defining-layouts" tabindex="-1"><a class="header-anchor" href="#defining-layouts"><span>Defining Layouts</span></a></h2>
<p>Layouts in Stone.js are defined just like pages, as <strong>classes</strong> or <strong>factories</strong>, but with an important distinction:</p>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>Layouts do <strong>not</strong> implement a <code v-pre>handle()</code> method, because they are <strong>not event handlers</strong>.</p>
</div>
<p>Instead, a layout can implement:</p>
<ul>
<li><code v-pre>render()</code>: to return the layout structure as a React component</li>
<li><code v-pre>head()</code>: optionally, to define layout-wide <code v-pre>&lt;title&gt;</code>, <code v-pre>&lt;meta&gt;</code>, <code v-pre>&lt;link&gt;</code>, etc.</li>
</ul>
<p>By design, layouts are <strong>view-only</strong>, and cannot:</p>
<ul>
<li>Intercept or modify incoming events</li>
<li>Use middleware</li>
<li>Rely on lifecycle hooks</li>
</ul>
<p>This keeps their purpose clear and limited: <strong>structure the UI, don’t handle logic</strong>.</p>
<Tabs id="168" :data='[{"id":"Class-based"},{"id":"Factory-based"}]' :active="0" tab-id="class-factory-function">
<template #title0="{ value, isActive }">Class-based</template>
<template #title1="{ value, isActive }">Factory-based</template>
<template #tab0="{ value, isActive }">
<h3 id="class-based-layouts" tabindex="-1"><a class="header-anchor" href="#class-based-layouts"><span>Class-Based Layouts</span></a></h3>
<p>Class-based layouts provide a declarative structure that pairs perfectly with decorators.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IComponentEventHandler<span class="token punctuation">,</span> ReactIncomingEvent<span class="token punctuation">,</span> RenderLayoutContext<span class="token punctuation">,</span> StoneOutlet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BaseLayout</span> <span class="token keyword">implements</span> <span class="token class-name">IComponentEventHandler<span class="token operator">&lt;</span>ReactIncomingEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> RenderLayoutContext<span class="token operator">&lt;</span>ReactNode<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"layout"</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>header<span class="token operator">></span>Header<span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>main<span class="token operator">></span><span class="token operator">&lt;</span>StoneOutlet<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>StoneOutlet<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>footer<span class="token operator">></span>Footer<span class="token operator">&lt;</span><span class="token operator">/</span>footer<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">head</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> HeadContext <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      title<span class="token operator">:</span> <span class="token string">'My App'</span><span class="token punctuation">,</span></span>
<span class="line">      description<span class="token operator">:</span> <span class="token string">'The base layout of the application'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<h3 id="factory-based-layouts" tabindex="-1"><a class="header-anchor" href="#factory-based-layouts"><span>Factory-Based Layouts</span></a></h3>
<p>Prefer factories when you want dynamic construction or are using the <strong>imperative API</strong>.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> definePageLayout<span class="token punctuation">,</span> StoneOutlet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">BaseLayout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> RenderLayoutContext<span class="token operator">&lt;</span>ReactNode<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"layout"</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>nav<span class="token operator">></span>Navigation<span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>StoneOutlet<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>StoneOutlet<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">head</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> HeadContext <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      title<span class="token operator">:</span> <span class="token string">'Base Layout'</span><span class="token punctuation">,</span></span>
<span class="line">      metas<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'viewport'</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">'width=device-width, initial-scale=1'</span> <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>Even though the layout implements IComponentEventHandler, only the render() and head() methods are used.</p>
</div>
<h2 id="registering-layouts" tabindex="-1"><a class="header-anchor" href="#registering-layouts"><span>Registering Layouts</span></a></h2>
<p>Just like pages, layouts in Stone.js must be <strong>explicitly registered</strong> so the framework can associate them with your pages.</p>
<p>You can register a layout using:</p>
<ul>
<li>The <strong>declarative API</strong>, with <code v-pre>@PageLayout()</code>, for class-based layouts</li>
<li>The <strong>imperative API</strong>, with <code v-pre>definePageLayout()</code>, for any layout shape</li>
</ul>
<p>Let’s look at both.</p>
<Tabs id="217" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h3 id="declarative-registration" tabindex="-1"><a class="header-anchor" href="#declarative-registration"><span>Declarative Registration</span></a></h3>
<p>If your layout is defined as a class, simply annotate it with the <code v-pre>@PageLayout()</code> decorator:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PageLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">PageLayout</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'default'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BaseLayout</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code v-pre>name</code> parameter allows you to:</p>
<ul>
<li>Set a default layout for all pages (<code v-pre>name: 'default'</code>)</li>
<li>Register multiple named layouts for different sections (<code v-pre>'admin'</code>, <code v-pre>'auth'</code>, etc.)</li>
</ul>
<p>Any page that does <strong>not</strong> explicitly specify a layout will fall back to the one registered with <code v-pre>name: 'default'</code>.</p>
</template>
<template #tab1="{ value, isActive }">
<h3 id="imperative-registration" tabindex="-1"><a class="header-anchor" href="#imperative-registration"><span>Imperative Registration</span></a></h3>
<p>For factory-based layouts or runtime registration, use <code v-pre>definePageLayout()</code>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> definePageLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token function">definePageLayout</span><span class="token punctuation">(</span>BaseLayout<span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'default'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>The second argument is the same <code v-pre>PageLayoutOptions</code> object as in the decorator.</li>
<li>The third <code v-pre>true</code> flag indicates this is a factory layout (not a class).</li>
</ul>
</template>
</Tabs>
<p>You can define as many layouts as needed, then assign them per-page using their <code v-pre>name</code>.</p>
<h2 id="rendering-with-stoneoutlet" tabindex="-1"><a class="header-anchor" href="#rendering-with-stoneoutlet"><span>Rendering with <code v-pre>&lt;StoneOutlet /&gt;</code></span></a></h2>
<p>Layouts are wrappers, and every wrapper needs a place to render the wrapped content.</p>
<p>That’s the job of the <code v-pre>&lt;StoneOutlet /&gt;</code> component.</p>
<p>It acts as a placeholder in your layout where the <strong>page content will be injected</strong> during rendering. Without it, the layout renders, but the page disappears.</p>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre v-pre><code><span class="line"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> RenderLayoutContext<span class="token operator">&lt;</span>ReactNode<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-shell<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span><span class="token plain-text">Global Header</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">StoneOutlet</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">StoneOutlet</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span><span class="token plain-text">Global Footer</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code v-pre>children</code> prop holds the output of the matched page's <code v-pre>render()</code> method.
<code v-pre>&lt;StoneOutlet /&gt;</code> simply renders those children in the correct place, enabling layout nesting across navigations.</p>
<h3 id="what-happens-without-stoneoutlet" tabindex="-1"><a class="header-anchor" href="#what-happens-without-stoneoutlet"><span>What happens without <code v-pre>&lt;StoneOutlet /&gt;</code>?</span></a></h3>
<p>If you omit <code v-pre>&lt;StoneOutlet /&gt;</code>, your layout will render, but the current page will <strong>not</strong> appear.
This is not an error, it’s just missing the bridge between layout and page.</p>
<p>So always include <code v-pre>&lt;StoneOutlet /&gt;</code> where you want the page content to appear.</p>
<h2 id="choosing-layouts-per-page" tabindex="-1"><a class="header-anchor" href="#choosing-layouts-per-page"><span>Choosing Layouts Per Page</span></a></h2>
<p>Once you’ve defined and registered your layouts, you can assign them to individual pages using the <code v-pre>layout</code> option.</p>
<p>This works the same way whether you’re using the declarative API (<code v-pre>@Page()</code>) or the imperative API (<code v-pre>definePage()</code>).</p>
<h3 id="declarative-example" tabindex="-1"><a class="header-anchor" href="#declarative-example"><span>Declarative Example</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Page</span></span><span class="token punctuation">(</span><span class="token string">'/dashboard'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'dashboard.view'</span><span class="token punctuation">,</span></span>
<span class="line">  layout<span class="token operator">:</span> <span class="token string">'default'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">DashboardPage</span> <span class="token keyword">implements</span> <span class="token class-name">IComponentEventHandler<span class="token operator">&lt;</span>ReactIncomingEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Welcome to the dashboard<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="imperative-example" tabindex="-1"><a class="header-anchor" href="#imperative-example"><span>Imperative Example</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token function">definePage</span><span class="token punctuation">(</span>DashboardPage<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/dashboard'</span><span class="token punctuation">,</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'dashboard.view'</span><span class="token punctuation">,</span></span>
<span class="line">  layout<span class="token operator">:</span> <span class="token string">'default'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="layout-selection-logic" tabindex="-1"><a class="header-anchor" href="#layout-selection-logic"><span>Layout selection logic</span></a></h3>
<ul>
<li>If a page defines a <code v-pre>layout</code>, it will use that layout.</li>
<li>If not, and a layout with <code v-pre>name: 'default'</code> is registered, that layout is used.</li>
<li>If no layout is set and no default exists, the page renders without a layout.</li>
</ul>
<p>This gives you full control while maintaining sensible defaults.</p>
<p>You can also create multiple layouts for different app sections (e.g., <code v-pre>default</code>, <code v-pre>auth</code>, <code v-pre>admin</code>) and assign them per page.</p>
<h2 id="defining-metadata-in-layouts" tabindex="-1"><a class="header-anchor" href="#defining-metadata-in-layouts"><span>Defining Metadata in Layouts</span></a></h2>
<p>Layouts aren’t just visual wrappers, they can also define shared <strong>HTML head tags</strong> like <code v-pre>&lt;title&gt;</code>, <code v-pre>&lt;meta&gt;</code>, <code v-pre>&lt;link&gt;</code>, and more.</p>
<p>This is useful when:</p>
<ul>
<li>You want consistent metadata across a group of pages</li>
<li>You want to provide a base <code v-pre>&lt;title&gt;</code> or <code v-pre>&lt;description&gt;</code> that pages can override or extend</li>
</ul>
<p>To do this, implement a <code v-pre>head()</code> method in your layout.</p>
<h3 id="example-layout-with-head-metadata" tabindex="-1"><a class="header-anchor" href="#example-layout-with-head-metadata"><span>Example: Layout with <code v-pre>head()</code> metadata</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> HeadContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">head</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> HeadContext <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    title<span class="token operator">:</span> <span class="token string">'My App - Powered by Stone.js'</span><span class="token punctuation">,</span></span>
<span class="line">    description<span class="token operator">:</span> <span class="token string">'A fast, universal app using Continuum Architecture'</span><span class="token punctuation">,</span></span>
<span class="line">    metas<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'viewport'</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">'width=device-width, initial-scale=1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'theme-color'</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">'#ffffff'</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    links<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">'icon'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">'/favicon.ico'</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This metadata will be applied when the layout is active, even before any page-specific <code v-pre>head()</code> runs.</p>
<h3 id="page-layout-metadata" tabindex="-1"><a class="header-anchor" href="#page-layout-metadata"><span>Page + Layout metadata</span></a></h3>
<p>When both a <strong>page</strong> and a <strong>layout</strong> define metadata:</p>
<ul>
<li>The layout’s <code v-pre>head()</code> runs first</li>
<li>The page’s <code v-pre>head()</code> can <strong>override or extend</strong> the result</li>
</ul>
<p>This gives you fine-grained control over how your app’s metadata evolves across routes, without duplication.</p>
<p>Stone.js manages this automatically during SSR and hydration.</p>
<h2 id="renderlayoutcontext-reference" tabindex="-1"><a class="header-anchor" href="#renderlayoutcontext-reference"><span>RenderLayoutContext Reference</span></a></h2>
<p>The <code v-pre>render()</code> method of a layout receives a special context object: <code v-pre>RenderLayoutContext</code>.</p>
<p>It extends the standard <code v-pre>RenderContext</code> used in pages, but adds one important property: <code v-pre>children</code>.</p>
<p>This is how layouts can wrap the content rendered by the active page.</p>
<h3 id="type-definition" tabindex="-1"><a class="header-anchor" href="#type-definition"><span>Type definition</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">RenderContext<span class="token operator">&lt;</span>TData <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  data<span class="token operator">?</span><span class="token operator">:</span> TData</span>
<span class="line">  container<span class="token operator">:</span> IContainer</span>
<span class="line">  event<span class="token operator">:</span> ReactIncomingEvent</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">RenderLayoutContext<span class="token operator">&lt;</span>TChildren <span class="token operator">=</span> ReactNode<span class="token punctuation">,</span> UData <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">></span></span></span>
<span class="line">  <span class="token keyword">extends</span> <span class="token class-name">RenderContext<span class="token operator">&lt;</span>UData<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  children<span class="token operator">:</span> TChildren</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="key-properties" tabindex="-1"><a class="header-anchor" href="#key-properties"><span>Key properties</span></a></h3>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>data</code></td>
<td>The data returned by the page handler (SSR-safe)</td>
</tr>
<tr>
<td><code v-pre>container</code></td>
<td>The DI container, to resolve services</td>
</tr>
<tr>
<td><code v-pre>event</code></td>
<td>The current incoming event (SSR-safe)</td>
</tr>
<tr>
<td><code v-pre>children</code></td>
<td>The page content that should be rendered inside layout</td>
</tr>
</tbody>
</table>
<p>You’ll use <code v-pre>children</code> with <code v-pre>&lt;StoneOutlet /&gt;</code> and <code v-pre>container</code> to resolve things like <code v-pre>Router</code>, <code v-pre>Config</code>, or <code v-pre>Logger</code> if needed.</p>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>Layouts are a powerful way to organize your UI, but their simplicity is what makes them effective. These practices will help you keep them clean, consistent, and efficient.</p>
<h4 id="keep-layouts-presentation-only" tabindex="-1"><a class="header-anchor" href="#keep-layouts-presentation-only"><span>Keep layouts presentation-only</span></a></h4>
<p>A layout should never fetch data, modify state, or implement logic. Its only job is to wrap page content in a reusable UI shell.
If you need layout-wide data (e.g., user info, settings), resolve it in the <strong>page handler</strong> or through middleware, and pass it down through context.</p>
<h4 id="always-include-stoneoutlet" tabindex="-1"><a class="header-anchor" href="#always-include-stoneoutlet"><span>Always include <code v-pre>&lt;StoneOutlet /&gt;</code></span></a></h4>
<p>It’s the single most important element of your layout.</p>
<p>If you don’t include it, no page will render inside the layout.
Use it precisely where you want your page content to appear, usually inside a <code v-pre>&lt;main&gt;</code> block or central wrapper.</p>
<h4 id="use-the-head-method-for-layout-wide-metadata" tabindex="-1"><a class="header-anchor" href="#use-the-head-method-for-layout-wide-metadata"><span>Use the <code v-pre>head()</code> method for layout-wide metadata</span></a></h4>
<p>If all your pages share the same title, description, or meta tags, define them in the layout using <code v-pre>head()</code>.
You’ll avoid repetition and ensure consistency across pages.</p>
<h4 id="name-layouts-clearly-and-consistently" tabindex="-1"><a class="header-anchor" href="#name-layouts-clearly-and-consistently"><span>Name layouts clearly and consistently</span></a></h4>
<p>Use layout names that reflect their purpose: <code v-pre>default</code>, <code v-pre>auth</code>, <code v-pre>admin</code>, etc.
Avoid ambiguous names like <code v-pre>main</code> or <code v-pre>wrapper</code>.</p>
<p>This makes it easier to assign layouts declaratively and track them across the codebase.</p>
<h4 id="keep-logic-out-keep-structure-in" tabindex="-1"><a class="header-anchor" href="#keep-logic-out-keep-structure-in"><span>Keep logic out, keep structure in</span></a></h4>
<p>Avoid this:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>someCondition<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* logic here */</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Prefer this:</p>
<ul>
<li>Move logic to the page</li>
<li>Pass down flags via <code v-pre>StoneContext</code> or props</li>
<li>Keep layout code declarative</li>
</ul>
<p>Layouts should <strong>never surprise you</strong>, their output should be predictable and consistent.</p>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>Layouts in Stone.js are simple by design, but powerful in impact.</p>
<p>They provide a clean, reusable way to wrap your pages with consistent UI, structure, and metadata, without mixing in business logic or event handling.</p>
<h3 id="key-takeaways" tabindex="-1"><a class="header-anchor" href="#key-takeaways"><span>Key takeaways:</span></a></h3>
<ul>
<li>
<p>Layouts are <strong>not event handlers</strong>, they don’t have <code v-pre>handle()</code>, middleware, or lifecycle hooks.</p>
</li>
<li>
<p>They implement only <code v-pre>render()</code> (required) and optionally <code v-pre>head()</code> for setting metadata.</p>
</li>
<li>
<p>You can define them as <strong>classes</strong> or <strong>factories</strong>, and register them using:</p>
<ul>
<li><code v-pre>@PageLayout()</code> (declarative)</li>
<li><code v-pre>definePageLayout()</code> (imperative)</li>
</ul>
</li>
<li>
<p>Use <code v-pre>&lt;StoneOutlet /&gt;</code> to inject page content where needed.</p>
</li>
<li>
<p>Assign layouts to pages using the <code v-pre>layout</code> property in your page definition.</p>
</li>
<li>
<p>Layout metadata is combined with page metadata during rendering.</p>
</li>
<li>
<p>Keep layouts <strong>clean, declarative, and logic-free</strong>, focus only on structure.</p>
</li>
</ul>
<p>Stone.js gives you total control over your view architecture,
without polluting your logic layer, and without reinventing the wheel.</p>
<p>That’s the power of separation by dimension.
That’s the <strong>Continuum</strong>.</p>
</div></template>


