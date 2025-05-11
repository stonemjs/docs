<template><div><p>Not everything fits in a tidy box, and that’s okay.</p>
<p>This page covers <strong>miscellaneous features</strong> of Stone.js’ React integration: small utilities, advanced configuration, third-party library integration, and template customization. These aren’t core to how pages or layouts work, but they can make a huge difference when polishing your app or wiring it into your larger system.</p>
<p>You’ll learn how to:</p>
<ul>
<li>Control rendering context with <code v-pre>&lt;StoneClient&gt;</code> and <code v-pre>&lt;StoneServer&gt;</code></li>
<li>Customize the HTML template used during server rendering</li>
<li>Configure core React integration settings via the <strong>blueprint</strong></li>
<li>Integrate powerful tools like <code v-pre>react-query</code> and <code v-pre>react-helmet</code> (if you want to)</li>
<li>Stay aligned with the Continuum Architecture while leveraging the React ecosystem</li>
</ul>
<p>If you're building serious apps, this is where the real-world polish begins.</p>
<h3 id="stone-js-rendering-utilities-stoneclient-and-stoneserver" tabindex="-1"><a class="header-anchor" href="#stone-js-rendering-utilities-stoneclient-and-stoneserver"><span>Stone.js Rendering Utilities: <code v-pre>&lt;StoneClient&gt;</code> and <code v-pre>&lt;StoneServer&gt;</code></span></a></h3>
<p>In Stone.js, rendering isn’t just a one-shot operation, it’s a <strong>context-aware process</strong>. Whether you're rendering on the server, in the browser, or preparing for hydration, Stone.js offers utilities to help you control <strong>what renders where</strong>.</p>
<p>Sometimes, you may want to:</p>
<ul>
<li>Render something <strong>only on the client</strong> (e.g., animations, browser-only APIs)</li>
<li>Render something <strong>only on the server</strong> (e.g., SSR-only placeholders, skeletons)</li>
<li>Avoid flashing content during hydration</li>
</ul>
<p>That’s where these two small but powerful utilities come in.</p>
<h4 id="stoneclient-client-only-rendering" tabindex="-1"><a class="header-anchor" href="#stoneclient-client-only-rendering"><span><code v-pre>&lt;StoneClient&gt;</code>: Client-Only Rendering</span></a></h4>
<p>Use this component to wrap parts of your JSX that should <strong>only appear in the browser</strong>, after hydration.</p>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">This is universal content</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">StoneClient</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">This will only render on the client.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">StoneClient</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>During SSR, the content inside <code v-pre>&lt;StoneClient&gt;</code> is <strong>not rendered at all</strong>, only the surrounding elements are sent to the browser. This avoids hydration mismatches and protects browser-only logic.</p>
<h4 id="stoneserver-server-only-rendering" tabindex="-1"><a class="header-anchor" href="#stoneserver-server-only-rendering"><span><code v-pre>&lt;StoneServer&gt;</code>: Server-Only Rendering</span></a></h4>
<p>Likewise, use <code v-pre>&lt;StoneServer&gt;</code> to render content <strong>only during SSR</strong>, perfect for skeletons, preloaders, or analytics injection.</p>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneServer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">StoneServer</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Loading...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">StoneServer</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the app hydrates in the browser, the contents inside <code v-pre>&lt;StoneServer&gt;</code> are discarded. They never run on the client.</p>
<h3 id="best-use-cases" tabindex="-1"><a class="header-anchor" href="#best-use-cases"><span>Best Use Cases</span></a></h3>
<table>
<thead>
<tr>
<th>Utility</th>
<th>When to use it</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>&lt;StoneClient&gt;</code></td>
<td>Browser-only logic (e.g. <code v-pre>window</code>, <code v-pre>localStorage</code>)</td>
</tr>
<tr>
<td><code v-pre>&lt;StoneServer&gt;</code></td>
<td>Skeletons, SEO placeholders, SSR-only tags or markup</td>
</tr>
</tbody>
</table>
<p>This helps you build precise, <strong>context-aware interfaces</strong>, without worrying about hydration mismatches or throwing errors in the wrong environment.</p>
<h3 id="customizing-the-html-template" tabindex="-1"><a class="header-anchor" href="#customizing-the-html-template"><span>Customizing the HTML Template</span></a></h3>
<p>Stone.js uses a <strong>server-rendered HTML template</strong> as the entry point for every page. This template is fully customizable and allows you to inject global assets, meta tags, fonts, stylesheets, or scripts, <strong>just like you would in any standard HTML file</strong>.</p>
<p>But there's a twist: Stone.js makes it <strong>context-aware</strong> through special placeholders.</p>
<h4 id="exporting-the-default-template" tabindex="-1"><a class="header-anchor" href="#exporting-the-default-template"><span>Exporting the Default Template</span></a></h4>
<p>To begin customization, you first need to export the default HTML template using the Stone CLI:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">stone <span class="token builtin class-name">export</span> app</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This will generate a file named <code v-pre>index.html</code> at the root of your project, typically structured like this:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Stone.js + React<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/assets/styles/main.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">&lt;!--app-head--></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token comment">&lt;!--app-html--></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/src/index.ts<span class="token punctuation">"</span></span> <span class="token attr-name">defer</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="special-placeholders" tabindex="-1"><a class="header-anchor" href="#special-placeholders"><span>Special Placeholders</span></a></h4>
<p>There are two <strong>required</strong> placeholders that Stone.js uses during SSR and hydration:</p>
<ul>
<li><code v-pre>&lt;!--app-head--&gt;</code>: This is where Stone.js will inject <code v-pre>&lt;title&gt;</code>, <code v-pre>&lt;meta&gt;</code>, and any tags returned by your <code v-pre>head()</code> method from pages or layouts.</li>
<li><code v-pre>&lt;!--app-html--&gt;</code>: This is where the actual rendered React content goes.</li>
</ul>
<p><strong>Do not remove or rename these</strong>, they’re essential for proper hydration and SSR.</p>
<h4 id="common-customizations" tabindex="-1"><a class="header-anchor" href="#common-customizations"><span>Common Customizations</span></a></h4>
<p>You can freely add anything else to the template:</p>
<ul>
<li>Google Fonts or custom fonts via <code v-pre>&lt;link&gt;</code></li>
<li>Meta tags for SEO or social sharing</li>
<li>Favicon or manifest files</li>
<li>Scripts for analytics or tag managers</li>
<li>Global stylesheets</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/favicon.svg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/assets/styles/theme.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://example.com/script.js<span class="token punctuation">"</span></span> <span class="token attr-name">async</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Stone.js will preserve and serve them correctly in all rendering contexts.</p>
<h4 id="setting-the-template-path-optional" tabindex="-1"><a class="header-anchor" href="#setting-the-template-path-optional"><span>Setting the Template Path (optional)</span></a></h4>
<p>If you move your HTML template to a custom path, you can update it in the blueprint:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.useReact.htmlTemplatePath'</span><span class="token punctuation">,</span> <span class="token string">'./template.html'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This tells Stone.js where to find your base template during build and SSR.</p>
<h3 id="configuring-react-behavior-in-stone-js" tabindex="-1"><a class="header-anchor" href="#configuring-react-behavior-in-stone-js"><span>Configuring React Behavior in Stone.js</span></a></h3>
<p>Stone.js uses <strong>React</strong> under the hood to render your components, but the way React is initialized and controlled is entirely <strong>context-aware</strong> and <strong>blueprint-driven</strong>.</p>
<p>That means: you don’t need <code v-pre>ReactDOM.createRoot()</code> or <code v-pre>hydrateRoot()</code> scattered around, Stone.js abstracts this for you and gives you a clean way to configure everything via the blueprint.</p>
<p>Let’s explore how to control the key behaviors.</p>
<h4 id="setting-the-root-element-id" tabindex="-1"><a class="header-anchor" href="#setting-the-root-element-id"><span>Setting the Root Element ID</span></a></h4>
<p>Stone.js uses a default <code v-pre>div</code> element with an ID of <code v-pre>app</code> to mount your React application:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token comment">&lt;!--app-html--></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>If you want to change this to something else, like <code v-pre>#root</code>, simply set the root element ID in the blueprint:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.useReact.rootElementId'</span><span class="token punctuation">,</span> <span class="token string">'#root'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>This is particularly useful if you’re integrating Stone.js into a larger frontend that already has a specific mounting structure.</p>
</blockquote>
<h4 id="setting-the-html-template-path" tabindex="-1"><a class="header-anchor" href="#setting-the-html-template-path"><span>Setting the HTML Template Path</span></a></h4>
<p>As mentioned before, you can customize where your base HTML template lives:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.useReact.htmlTemplatePath'</span><span class="token punctuation">,</span> <span class="token string">'./template.html'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This file will be used by the server during SSR, and it must include the <code v-pre>&lt;!--app-head--&gt;</code> and <code v-pre>&lt;!--app-html--&gt;</code> placeholders.</p>
<h4 id="registering-layouts-imperatively" tabindex="-1"><a class="header-anchor" href="#registering-layouts-imperatively"><span>Registering Layouts Imperatively</span></a></h4>
<p>If you don’t use decorators and prefer full control over your layout registration, you can do this imperatively:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.useReact.layout'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">default</span><span class="token operator">:</span> DefaultLayout<span class="token punctuation">,</span></span>
<span class="line">  admin<span class="token operator">:</span> AdminLayout<span class="token punctuation">,</span></span>
<span class="line">  auth<span class="token operator">:</span> AuthLayout</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Each layout name (<code v-pre>default</code>, <code v-pre>admin</code>, etc.) can then be referenced in your page registration:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Page</span></span><span class="token punctuation">(</span><span class="token string">'/dashboard'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> layout<span class="token operator">:</span> <span class="token string">'admin'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>You can also change layouts at runtime by setting them conditionally or dynamically based on user roles or context.</p>
<h4 id="putting-it-all-together" tabindex="-1"><a class="header-anchor" href="#putting-it-all-together"><span>Putting It All Together</span></a></h4>
<p>Here’s a quick example of setting everything up in your main configuration:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> AppBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.useReact.rootElementId'</span><span class="token punctuation">,</span> <span class="token string">'#root'</span><span class="token punctuation">)</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.useReact.htmlTemplatePath'</span><span class="token punctuation">,</span> <span class="token string">'./template.html'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.useReact.layout'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span> DefaultLayout<span class="token punctuation">,</span></span>
<span class="line">    error<span class="token operator">:</span> ErrorLayout<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With this setup, you’re telling Stone.js:</p>
<ul>
<li>Where to mount the app</li>
<li>What template to use for SSR</li>
<li>How to resolve layout names declaratively</li>
</ul>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>This page brought together several advanced and practical topics that help you <strong>fine-tune, extend, and deeply customize</strong> your Stone.js + React applications.</p>
<p>Here’s what you now know how to do:</p>
<ul>
<li>
<p><strong>Use StoneClient and StoneServer</strong> components to control execution based on environment, allowing you to render conditionally in universal apps.</p>
</li>
<li>
<p><strong>Customize the HTML template</strong> for your app, including layout, meta tags, scripts, and styles, while preserving the key placeholders (<code v-pre>&lt;!--app-head--&gt;</code>, <code v-pre>&lt;!--app-html--&gt;</code>) that Stone.js needs to hydrate your app.</p>
</li>
<li>
<p><strong>Configure React-specific settings</strong> such as:</p>
<ul>
<li>The root DOM element (<code v-pre>rootElementId</code>)</li>
<li>The path to the HTML template (<code v-pre>htmlTemplatePath</code>)</li>
<li>Custom layouts via <code v-pre>stone.useReact.layout</code></li>
</ul>
</li>
<li>
<p><strong>Integrate third-party libraries</strong> cleanly, thanks to the architectural boundaries Stone.js provides. From <code v-pre>react-query</code> and <code v-pre>react-router</code>, to UI libraries like <code v-pre>react-helmet</code>, you remain fully in control.</p>
</li>
<li>
<p>Work seamlessly across <strong>server-side, client-side, or hybrid modes</strong>, always with contextual awareness and clean separation of concerns.</p>
</li>
</ul>
<p>The <strong>Continuum Architecture</strong> behind Stone.js ensures you’re never boxed in, you can shape your runtime, ecosystem, and user experience exactly as needed.</p>
<p>Stone.js doesn’t get in your way. It gets out of your way, and gives you <strong>real power</strong> to build the way you want, wherever you deploy.</p>
</div></template>


