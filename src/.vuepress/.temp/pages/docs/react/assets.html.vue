<template><div><p>In Stone.js, asset management is powered by <a href="https://vite.dev" target="_blank" rel="noopener noreferrer"><strong>Vite</strong></a>, a modern build tool that makes working with CSS, images, fonts, and other static files incredibly fast and intuitive.</p>
<p>You can import assets just like in any modern Vite project, whether you're bundling styles, loading fonts, or referencing images. No special Stone.js syntax required, just write frontend code the way you're used to.</p>
<p>But to align with a clean and consistent application structure, <strong>Stone.js uses an <code v-pre>assets/</code> folder by convention</strong>.</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>This is just a default. You are free to organize your assets however you like.</p>
</div>
<p>If you change the location of your main CSS or other critical files, you can specify the new path in your <code v-pre>stone.config.mjs</code> file:</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="stone.config.mjs">
    <span>stone.config.mjs</span>
  </div>
  <div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/cli'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  input<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    mainCSS<span class="token operator">:</span> <span class="token string">'/styles/main.css'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><p>This lets Stone.js know where to inject global styles during the build and rendering process, across all rendering dimensions (SPA, SSR, SOR).</p>
<p>Stone.js doesn’t force structure, it enables continuity.
You stay in control of your assets, your structure, and your creativity.</p>
<h2 id="importing-css" tabindex="-1"><a class="header-anchor" href="#importing-css"><span>Importing CSS</span></a></h2>
<p>CSS in Stone.js is handled just like in any Vite + React project, no wrappers, no magic. Just import it where you need it.</p>
<p>You can:</p>
<ul>
<li>Import global styles in your app entry or layout</li>
<li>Import component-scoped styles in <code v-pre>.tsx</code> files</li>
<li>Use CSS Modules if you prefer scoped classes</li>
<li>Use PostCSS, Sass, Tailwind, etc., whatever Vite supports, Stone.js supports</li>
</ul>
<h3 id="global-styles" tabindex="-1"><a class="header-anchor" href="#global-styles"><span>Global Styles</span></a></h3>
<p>To define your global CSS (e.g., resets, typography, layout), just put it in your main css file and it will be automatically included in your app.</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="assets/css/main.css">
    <span>assets/css/main.css</span>
  </div>
  <div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><p>If you're using a different global CSS path, be sure to declare it under the <code v-pre>input.mainCSS</code> key:</p>
<div class="code-block-with-title">
  <div class="code-block-title-bar" data-title="stone.config.mjs">
    <span>stone.config.mjs</span>
  </div>
  <div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/cli'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  input<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    mainCSS<span class="token operator">:</span> <span class="token string">'/styles/main.css'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>
</div><p>This tells Stone.js to inject it correctly into the server-rendered HTML and to include it in the client bundle.</p>
<h3 id="component-styles" tabindex="-1"><a class="header-anchor" href="#component-styles"><span>Component Styles</span></a></h3>
<p>You can also import CSS directly inside your component:</p>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">'./LoginForm.css'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">LoginForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>login-form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This pattern is recommended for <strong>isolated component styling</strong>.</p>
<h3 id="css-modules-optional" tabindex="-1"><a class="header-anchor" href="#css-modules-optional"><span>CSS Modules (Optional)</span></a></h3>
<p>If you prefer CSS Modules:</p>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">'./Button.module.css'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Button</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>primary<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Click me</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This works out of the box with Vite, no extra config needed.</p>
<h3 id="preprocessors" tabindex="-1"><a class="header-anchor" href="#preprocessors"><span>Preprocessors</span></a></h3>
<p>You can also use:</p>
<ul>
<li><strong>Sass/SCSS</strong> (<code v-pre>.scss</code>)</li>
<li><strong>PostCSS</strong></li>
<li><strong>Stylus</strong></li>
<li>Or integrate a <strong>utility-first framework</strong> like Tailwind CSS</li>
</ul>
<p>Simply install the appropriate plugin and import your styles, Stone.js doesn't restrict your setup.</p>
<h2 id="importing-fonts" tabindex="-1"><a class="header-anchor" href="#importing-fonts"><span>Importing Fonts</span></a></h2>
<p>In Stone.js, fonts are handled just like in any modern Vite-based project, <strong>no constraints, full flexibility</strong>. You can import fonts:</p>
<ul>
<li>Locally from your <code v-pre>assets/</code> (or any custom) folder</li>
<li>Remotely via a CDN (e.g., Google Fonts)</li>
<li>Through CSS <code v-pre>@font-face</code> declarations</li>
<li>Or via a CSS framework (like Tailwind, Bootstrap, etc.)</li>
</ul>
<h3 id="importing-local-fonts" tabindex="-1"><a class="header-anchor" href="#importing-local-fonts"><span>Importing Local Fonts</span></a></h3>
<p>If you want to host your fonts in your project, drop them in your custom assets directory:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">/assets/fonts/</span>
<span class="line">├── Inter-Regular.woff2</span>
<span class="line">├── Inter-Bold.woff2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then reference them in your global CSS file:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Inter'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'/assets/fonts/Inter-Regular.woff2'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'woff2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Inter'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Stone.js (via Vite) will correctly serve and cache these assets.</p>
<h3 id="importing-fonts-via-cdn" tabindex="-1"><a class="header-anchor" href="#importing-fonts-via-cdn"><span>Importing Fonts via CDN</span></a></h3>
<p>You can also include fonts in your <code v-pre>index.html</code> file, generated with:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">stone <span class="token builtin class-name">export</span> app</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Once exported, add this to the <code v-pre>&lt;head&gt;</code>:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.googleapis.com/css2?family=Inter:wght@400;700&amp;display=swap<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This is ideal if you're using popular fonts without needing to host them.</p>
<h3 id="using-fonts-from-a-css-framework" tabindex="-1"><a class="header-anchor" href="#using-fonts-from-a-css-framework"><span>Using Fonts from a CSS Framework</span></a></h3>
<p>If you're using a UI or CSS framework (like Tailwind, Bootstrap, or Material UI), fonts may be included by default. You can override them via CSS or configure them at the framework level.</p>
<p>Stone.js gives you <strong>zero interference</strong>, so your font strategy is entirely yours.</p>
<h2 id="importing-images" tabindex="-1"><a class="header-anchor" href="#importing-images"><span>Importing Images</span></a></h2>
<p>In Stone.js, importing images is simple and optimized thanks to Vite's asset handling system. Whether you're referencing static images via <code v-pre>&lt;img&gt;</code>, using background images in CSS, or importing them into your components, everything works seamlessly.</p>
<h3 id="referencing-static-images-via-src" tabindex="-1"><a class="header-anchor" href="#referencing-static-images-via-src"><span>Referencing Static Images via <code v-pre>src</code></span></a></h3>
<p>If you place images in your <code v-pre>assets/</code> folder (or whatever custom path you’ve configured in <code v-pre>stone.config.mjs</code>), you can reference them directly in your JSX:</p>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/img/logo.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Stone.js Logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This path is relative to the root of the Vite dev server and will be properly resolved at build time.</p>
<h3 id="importing-images-in-javascript-or-typescript" tabindex="-1"><a class="header-anchor" href="#importing-images-in-javascript-or-typescript"><span>Importing Images in JavaScript or TypeScript</span></a></h3>
<p>You can also import images as modules:</p>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> logo <span class="token keyword">from</span> <span class="token string">'/assets/img/logo.png'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Header</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>logo<span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Stone.js Logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vite will optimize the image and replace the path with a fingerprinted version during the build.</p>
<h3 id="using-images-in-css" tabindex="-1"><a class="header-anchor" href="#using-images-in-css"><span>Using Images in CSS</span></a></h3>
<p>In your CSS or Sass files, you can reference image assets just like you would in any Vite-powered project:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.hero</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'/assets/img/hero.jpg'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>These paths will be resolved and bundled properly.</p>
<h3 id="placing-global-static-images" tabindex="-1"><a class="header-anchor" href="#placing-global-static-images"><span>Placing Global Static Images</span></a></h3>
<p>If you need a truly static asset (like a favicon, Open Graph image, or site verification file), place it in the <code v-pre>public/</code> folder:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">/public/</span>
<span class="line">  ├── favicon.ico</span>
<span class="line">  ├── og-image.jpg</span>
<span class="line">  └── robots.txt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can then reference it directly:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/favicon.ico<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>og:image<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/og-image.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code v-pre>public/</code> folder is never processed by Vite, so use it for raw assets only.</p>
<h2 id="importing-javascript-files" tabindex="-1"><a class="header-anchor" href="#importing-javascript-files"><span>Importing JavaScript Files</span></a></h2>
<p>Stone.js supports JavaScript imports the same way as any modern Vite-powered app. Whether you're integrating utility libraries, injecting third-party scripts, or adding custom JS logic, it all works naturally in the Stone.js ecosystem.</p>
<h3 id="javascript-modules" tabindex="-1"><a class="header-anchor" href="#javascript-modules"><span>JavaScript Modules</span></a></h3>
<p>You can import JS modules directly into your TypeScript or JSX files:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> formatDate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'/assets/js/utils.js'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> formatted <span class="token operator">=</span> <span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the file is placed in your asset folder or within your project structure, Vite will include and optimize it at build time.</p>
<h3 id="third-party-libraries" tabindex="-1"><a class="header-anchor" href="#third-party-libraries"><span>Third-Party Libraries</span></a></h3>
<p>Need to use a third-party script (like Chart.js or a legacy analytics SDK)? Install it via npm and import it like usual:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> chart.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Chart <span class="token keyword">from</span> <span class="token string">'chart.js/auto'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Stone.js handles these modules through Vite’s native ESM bundling.</p>
<h3 id="inline-scripts-in-layouts" tabindex="-1"><a class="header-anchor" href="#inline-scripts-in-layouts"><span>Inline Scripts in Layouts</span></a></h3>
<p>If you want to include a script tag (e.g., for a chat widget or analytics snippet), you can use the <code v-pre>head()</code> method in your page or layout:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token function">head</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    scripts<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        src<span class="token operator">:</span> <span class="token string">'https://cdn.example.com/sdk.js'</span><span class="token punctuation">,</span></span>
<span class="line">        defer<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or if you're editing the HTML template directly (after <code v-pre>stone export app</code>), you can add it manually in <code v-pre>index.html</code>:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.example.com/sdk.js<span class="token punctuation">"</span></span> <span class="token attr-name">defer</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="using-global-scripts-via-public" tabindex="-1"><a class="header-anchor" href="#using-global-scripts-via-public"><span>Using Global Scripts via <code v-pre>public/</code></span></a></h3>
<p>If you drop a JS file into the <code v-pre>public/</code> folder, you can link to it statically:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/my-widget.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This is great for vendor files or legacy integrations you don’t want Vite to bundle.</p>
<h2 id="using-design-systems-in-stone-js" tabindex="-1"><a class="header-anchor" href="#using-design-systems-in-stone-js"><span>Using Design Systems in Stone.js</span></a></h2>
<p>Stone.js is completely compatible with any design system or UI library from the React ecosystem, because it doesn’t stand in the way.</p>
<p>Since Stone.js pages are just React functional components, you can bring in <strong>Material UI</strong>, <strong>Ant Design</strong>, <strong>Bootstrap</strong>, <strong>Tailwind</strong>, or any custom design system you like, with zero configuration beyond what React itself requires.</p>
<p>Let’s explore how to integrate a few of the most popular design systems.</p>
<h3 id="material-ui-mui" tabindex="-1"><a class="header-anchor" href="#material-ui-mui"><span>Material UI (MUI)</span></a></h3>
<p><strong>Installation</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @mui/material @emotion/react @emotion/styled</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Usage</strong></p>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'@mui/material/Button'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>contained<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Click Me</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MUI themes and providers can be added globally by wrapping your layout's <code v-pre>render()</code> method or using React’s context system.</p>
<h3 id="ant-design" tabindex="-1"><a class="header-anchor" href="#ant-design"><span>Ant Design</span></a></h3>
<p><strong>Installation</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> antd</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Import Styles</strong></p>
<p>Ant Design requires global CSS import, which you can include in your <code v-pre>main.css</code> (configured in <code v-pre>stone.config.mjs</code>) or directly in your component if needed:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">'antd/dist/reset.css'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Usage</strong></p>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bootstrap-react-bootstrap" tabindex="-1"><a class="header-anchor" href="#bootstrap-react-bootstrap"><span>Bootstrap (React-Bootstrap)</span></a></h3>
<p><strong>Installation</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> react-bootstrap bootstrap</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Import Styles</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">'bootstrap/dist/css/bootstrap.min.css'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Usage</strong></p>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'react-bootstrap/Button'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Save</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tailwind-css" tabindex="-1"><a class="header-anchor" href="#tailwind-css"><span>Tailwind CSS</span></a></h3>
<p>Tailwind is a utility-first CSS framework that integrates seamlessly with Vite.</p>
<p><strong>Installation</strong></p>
<p>Follow the official Tailwind + Vite setup guide:
<a href="https://tailwindcss.com/docs/guides/vite" target="_blank" rel="noopener noreferrer">https://tailwindcss.com/docs/guides/vite</a></p>
<p><strong>Usage</strong></p>
<p>You can now write utility classes directly in your JSX:</p>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-blue-500 hover:bg-blue-700 text-white px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Submit</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="custom-design-systems" tabindex="-1"><a class="header-anchor" href="#custom-design-systems"><span>Custom Design Systems</span></a></h3>
<p>You’re not limited to libraries. You can define your own design system by:</p>
<ul>
<li>Placing reusable components in <code v-pre>src/components/</code></li>
<li>Defining a <code v-pre>theme.css</code> or <code v-pre>variables.css</code> in your assets</li>
<li>Using your own <code v-pre>ThemeProvider</code> via React Context in your layout</li>
</ul>
<p>Stone.js doesn’t interfere with these choices, it embraces them. Because your UI decisions belong to the <strong>view dimension</strong>, and Stone.js only takes care of the <strong>functional dimension</strong>.</p>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>Managing assets in a Stone.js application is all about clarity, portability, and performance. Here are some best practices to keep your setup clean and scalable:</p>
<h4 id="organize-your-assets-clearly" tabindex="-1"><a class="header-anchor" href="#organize-your-assets-clearly"><span>Organize Your Assets Clearly</span></a></h4>
<p>Structure your assets folder logically:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">public/              ← For static files like favicon, robots.txt, etc.</span>
<span class="line">assets/</span>
<span class="line">├── img/             ← Images used in JSX (imported or linked)</span>
<span class="line">├── fonts/           ← Web fonts</span>
<span class="line">├── styles/          ← CSS, Tailwind, or design system overrides</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And keep your entry points consistent with your <code v-pre>stone.config.mjs</code>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  input<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    mainCSS<span class="token operator">:</span> <span class="token string">'/styles/main.css'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="use-absolute-paths" tabindex="-1"><a class="header-anchor" href="#use-absolute-paths"><span>Use Absolute Paths</span></a></h4>
<p>When importing assets (CSS, images, etc.), prefer absolute paths relative to the project root (<code v-pre>/assets/...</code>) instead of relative imports (<code v-pre>../../assets/...</code>). This ensures consistent resolution across modules and avoids broken imports.</p>
<h4 id="import-css-once" tabindex="-1"><a class="header-anchor" href="#import-css-once"><span>Import CSS Once</span></a></h4>
<p>Avoid importing the same CSS file in multiple components. Instead, configure a main CSS file (like <code v-pre>main.css</code>) and Stone.js will handle the rest. This keeps your bundle size smaller and avoids duplication.</p>
<h4 id="snapshot-your-images-when-needed-ssr-tip" tabindex="-1"><a class="header-anchor" href="#snapshot-your-images-when-needed-ssr-tip"><span>Snapshot Your Images When Needed (SSR Tip)</span></a></h4>
<p>When using SSR, static assets like images should be referenced with <strong>absolute paths</strong> that will exist on both the server and the client. Do not dynamically compute image URLs unless necessary, serve them directly from the <code v-pre>assets/</code> or <code v-pre>public/</code> directory.</p>
<h4 id="don-t-overload-public" tabindex="-1"><a class="header-anchor" href="#don-t-overload-public"><span>Don’t Overload <code v-pre>public/</code></span></a></h4>
<p>Use <code v-pre>public/</code> only for truly static files that don’t go through Vite’s build pipeline (like <code v-pre>.txt</code>, <code v-pre>.ico</code>, etc.). For everything else, styles, fonts, images, prefer using the <code v-pre>assets/</code> folder and import them via JavaScript or CSS.</p>
<h4 id="wrap-design-systems-with-your-own-components-optional" tabindex="-1"><a class="header-anchor" href="#wrap-design-systems-with-your-own-components-optional"><span>Wrap Design Systems with Your Own Components (Optional)</span></a></h4>
<p>If you're using a third-party UI library like MUI or Ant Design, wrap them in your own components (<code v-pre>&lt;MyButton&gt;</code>, <code v-pre>&lt;MyCard&gt;</code>, etc.). This gives you a future escape hatch and keeps your codebase consistent if you decide to change libraries later.</p>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<ul>
<li>Stone.js uses <strong>Vite</strong> under the hood, so you can handle assets exactly like any modern React/Vite app.</li>
<li>Use <code v-pre>assets/</code> for bundled files and <code v-pre>public/</code> for static files.</li>
<li>Configure your main CSS entry in <code v-pre>stone.config.mjs</code> with <code v-pre>input.mainCSS</code> if you change the default path.</li>
<li>Import fonts, images, JavaScript, and design systems using standard ES modules or Vite conventions.</li>
<li>Use absolute paths (<code v-pre>/assets/...</code>) for reliability across dimensions.</li>
<li>You can integrate <strong>any</strong> design system, Material UI, Ant Design, Bootstrap, Tailwind, or even your custom one, without any special configuration.</li>
<li>The <strong>view stays yours</strong>. Stone.js never dictates how your UI should look, only that it should work seamlessly across contexts.</li>
</ul>
</div></template>


