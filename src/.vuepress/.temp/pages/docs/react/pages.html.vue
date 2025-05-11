<template><div><p>In most frameworks, a page is just a UI component mapped to a route.</p>
<p>In Stone.js, a page is a <strong>context-aware unit of behavior</strong> that participates in the <strong>entire application lifecycle</strong>, before, during, and after rendering.</p>
<p>A page in Stone.js is not simply a visual artifact. It is:</p>
<ul>
<li>A <strong>route-bound event handler</strong></li>
<li>A <strong>renderable component</strong></li>
<li>A <strong>functional unit of context</strong></li>
<li>A <strong>gateway between functional and visual logic</strong></li>
</ul>
<p>Stone.js pages are powered by the <strong>Continuum Architecture</strong>. That means they:</p>
<ul>
<li>Integrate with routing, dependency injection, and middleware</li>
<li>Respond to incoming events from any environment (server, browser, serverless, etc.)</li>
<li>Participate in lifecycle hooks like <code v-pre>onInit</code>, <code v-pre>onPreparingPage</code>, <code v-pre>onTerminate</code></li>
<li>Render UI using a <strong>React functional component</strong></li>
</ul>
<p>This model offers full separation of concerns:</p>
<ul>
<li><strong>Stone.js</strong> handles context, routing, data, and infrastructure</li>
<li><strong>React</strong> handles rendering, DOM interaction, and local component state</li>
</ul>
<p>Together, they form a <strong>continuum</strong> between the system and the view.</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>You don't have to manage the glue between route, lifecycle, and rendering, Stone.js does it for you.</p>
</div>
<h3 id="not-just-another-component" tabindex="-1"><a class="header-anchor" href="#not-just-another-component"><span>Not just another component</span></a></h3>
<p>A Stone.js page is not a React component with a route slapped on top.
It’s a <strong>complete unit of interaction</strong> in a system-aware architecture.</p>
<p>Unlike typical frameworks where you return JSX and sprinkle some router sugar, here, your page:</p>
<ul>
<li>Participates in the functional lifecycle</li>
<li>Handles system incoming events</li>
<li>Can use middleware, lifecycle hooks, dependency injection, and error handling</li>
<li>And only <strong>then</strong>, returns a React tree to render</li>
</ul>
<p>This means a page is <strong>not</strong>:</p>
<ul>
<li>A class component</li>
<li>A hook-based view with <code v-pre>useEffect</code> everywhere</li>
<li>A glorified wrapper around React Router</li>
</ul>
<p>It’s a <strong>system construct</strong> that delegates rendering to React, <strong>not the other way around</strong>.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token keyword">implements</span> <span class="token class-name">IComponentEventHandler<span class="token operator">&lt;</span>ReactIncomingEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> container<span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> ReactIncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token operator">:</span> RenderContext<span class="token operator">&lt;</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token operator">:</span> ReactNode <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>data<span class="token operator">?.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React does the rendering.
Stone.js does the orchestration, context resolution, error management, and hydration.</p>
<p>Together, they form a continuum, not a stack.</p>
<h2 id="defining-pages" tabindex="-1"><a class="header-anchor" href="#defining-pages"><span>Defining Pages</span></a></h2>
<p>A page in Stone.js is an <strong>event handler</strong> that renders a view.</p>
<p>It can be defined using:</p>
<ul>
<li>A <strong>class</strong> (recommended for structure, decorators, and lifecycle)</li>
<li>A <strong>factory function</strong> (useful for dynamic composition or DI-driven construction)</li>
</ul>
<p>Regardless of shape, all pages must implement the <code v-pre>IComponentEventHandler</code> interface from <code v-pre>@stone-js/use-react</code>.</p>
<p>This interface provides three optional hooks:</p>
<ul>
<li><code v-pre>handle()</code>, to process the incoming event</li>
<li><code v-pre>head()</code>, to return metadata like title and meta tags</li>
<li><code v-pre>render()</code>, to return a <strong>React functional component</strong> (required)</li>
</ul>
<p>Stone.js doesn’t enforce a specific file structure or naming convention.
You’re free to organize pages in <code v-pre>app/pages</code>, co-locate them by feature, or group by adapter, it’s your call.</p>
<p>What matters is <strong>what they do</strong>, not how they’re stored.</p>
<Tabs id="190" :data='[{"id":"Class-based"},{"id":"Factory-based"}]' :active="0" tab-id="class-factory">
<template #title0="{ value, isActive }">Class-based</template>
<template #title1="{ value, isActive }">Factory-based</template>
<template #tab0="{ value, isActive }">
<h3 id="class-based-page" tabindex="-1"><a class="header-anchor" href="#class-based-page"><span>Class-based Page</span></a></h3>
<p>Use this shape when you want introspection, lifecycle hooks, and decorator-based configuration. It is the most structured and recommended form.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IComponentEventHandler<span class="token punctuation">,</span> ReactIncomingEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token keyword">implements</span> <span class="token class-name">IComponentEventHandler<span class="token operator">&lt;</span>ReactIncomingEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> ReactIncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'World'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token operator">:</span> RenderContext<span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span>data<span class="token operator">?.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<h3 id="factory-based-page" tabindex="-1"><a class="header-anchor" href="#factory-based-page"><span>Factory-based Page</span></a></h3>
<p>If you need runtime flexibility or functional programming, use the factory shape. It’s fully supported and highly composable.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ReactIncomingEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Application</span> <span class="token operator">=</span> <span class="token punctuation">(</span>container<span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> userService <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>UserService<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> ReactIncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">await</span> userService<span class="token punctuation">.</span><span class="token function">getGreeting</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'userId'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token operator">:</span> RenderContext<span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<p>Both formats are interchangeable and interoperable, you can use class pages in some routes and factory pages in others.</p>
<p>The shape you choose does <strong>not</strong> impact SSR, hydration, routing, or page behavior.
Choose the form that fits your module’s complexity.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>But it is recommended to choose one style and stick to it for consistency.</p>
</div>
<h2 id="registering-pages" tabindex="-1"><a class="header-anchor" href="#registering-pages"><span>Registering Pages</span></a></h2>
<p>Once a page is defined, it must be registered in your application blueprint so that Stone.js knows how to route events to it.</p>
<p>There are two styles of registration:</p>
<ul>
<li><strong>Declarative</strong>, using decorators (for class-based pages)</li>
<li><strong>Imperative</strong>, using blueprint utilities (for class or factory pages)</li>
</ul>
<p>In both cases, pages are treated as event handlers operating in the <strong>functional dimension</strong>.</p>
<Tabs id="245" :data='[{"id":"Declarative"},{"id":"Imperative"}]' :active="0" tab-id="declarative-imperative">
<template #title0="{ value, isActive }">Declarative</template>
<template #title1="{ value, isActive }">Imperative</template>
<template #tab0="{ value, isActive }">
<h3 id="declarative-registration" tabindex="-1"><a class="header-anchor" href="#declarative-registration"><span>Declarative Registration</span></a></h3>
<p>This approach is ideal when using class-based pages and decorators. It gives you maximum introspection and automatic lazy-loading support (in multi-page apps).</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> UseReact <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Browser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/browser-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Browser</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">UseReact</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token keyword">implements</span> <span class="token class-name">IComponentEventHandler<span class="token operator">&lt;</span>ReactIncomingEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> container<span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> ReactIncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token operator">:</span> RenderContext<span class="token operator">&lt;</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token operator">:</span> ReactNode <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>data<span class="token operator">?.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This way, you have a mono-route app that handles all incoming events. Refer to the <a href="./routing">Routing documentation</a> for more details on how to register multiple routes.</p>
</template>
<template #tab1="{ value, isActive }">
<h3 id="imperative-registration" tabindex="-1"><a class="header-anchor" href="#imperative-registration"><span>Imperative Registration</span></a></h3>
<p>Use this approach when:</p>
<ul>
<li>You define your page as a factory function</li>
<li>You want runtime control over route configuration</li>
<li>You need conditional logic during registration</li>
<li>You are doing functional programming</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> browserAdapterBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/browser-adapter'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig<span class="token punctuation">,</span> IBlueprint<span class="token punctuation">,</span> stoneBlueprint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useReactBlueprint<span class="token punctuation">,</span> defineComponentEventHandler <span class="token punctuation">}</span> <span class="token keyword">from</span>  <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Application</span> <span class="token operator">=</span> <span class="token punctuation">(</span>container<span class="token operator">:</span> IContainer<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> userService <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>UserService<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> ReactIncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">await</span> userService<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token operator">:</span> RenderContext<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Welcome<span class="token punctuation">,</span> <span class="token punctuation">{</span>data<span class="token operator">?.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>defineComponentEventHandler()</code>:</p>
<ul>
<li>Works with any shape: class and factory.</li>
<li>The <code v-pre>true</code> flag indicates this is a factory page.</li>
<li>Works only for mono-route apps, for multi-route apps refer to the <a href="./routing">Routing documentation</a>.</li>
</ul>
</template>
</Tabs>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>In a <strong>mono-route app</strong>, you don't need to declare any route, the page is simply your app entry point.<br>
In <strong>multi-route apps</strong>, you must register your routes using the Stone.js Router (see the <a href="./routing">Routing documentation</a>).</p>
</div>
<h3 id="mono-route-vs-multi-route-applications" tabindex="-1"><a class="header-anchor" href="#mono-route-vs-multi-route-applications"><span>Mono-route vs Multi-route Applications</span></a></h3>
<ul>
<li><strong>Mono-route apps</strong> only require one registered page. It will handle all incoming events.</li>
<li><strong>Multi-route apps</strong> require you to define each route explicitly, using either API style.</li>
<li>Routes in Stone.js support advanced features: parameter validation, bindings, aliases, protocols, and more.</li>
</ul>
<p>See the <RouteLink to="/docs/react/Routing.html">Routing documentation</RouteLink> for the full routing API available to your pages.</p>
<h2 id="page-lifecycle" tabindex="-1"><a class="header-anchor" href="#page-lifecycle"><span>Page Lifecycle</span></a></h2>
<p>In Stone.js, every page operates across two interconnected dimensions:</p>
<ul>
<li>The <strong>functional dimension</strong>, where Stone.js manages context, routing, services, middleware, hooks, and data resolution</li>
<li>The <strong>view dimension</strong>, where React takes over to render the UI tree and manage DOM interactions</li>
</ul>
<p>Stone.js orchestrates the entire page flow <strong>up to the rendering point</strong>. After that, control is passed to React.</p>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>Once the page is rendered, Stone.js steps back, and React takes full control.</p>
</div>
<p>This lifecycle ensures that:</p>
<ul>
<li>All data is fetched and injected <strong>before rendering</strong></li>
<li>System-level responsibilities like DI, routing, snapshots, and middleware are resolved</li>
<li>Rendering is <strong>deterministic</strong>, <strong>contextual</strong>, and <strong>isolated</strong></li>
</ul>
<h3 id="lifecycle-flow" tabindex="-1"><a class="header-anchor" href="#lifecycle-flow"><span>Lifecycle flow</span></a></h3>
<p>Here’s what happens when a page is invoked:</p>
<Mermaid id="mermaid-390" code="eJy1kkFPAjEQhe/8imbN3iBxARPDwUTYXSBqYpR4IR4KO0BjaTftKijhvzudCqxc7MU9vbz3dWY63TjeCSWqHttF1QrWEPVYNOMWoibzxgs3gs8kWEx2DcaihVbVs/giMumW26jpXCkUDLTUxtkXReeqe3kZNfb7fRw3loaXKzZJkbudajXGfq+o+6hHXBV4dJl9gCJzMH00eg7WoskeRFFI2HAD7F7rkvJkmm1h/l5BLaWgjeVOZ+/AKJBnSAeR8+DnCBSOSBHw5Q8z0YBgXJj9Co3Rphbm1B1K3JZaPoEttbLUNE/qySNfkjtE80D50A8wcj1OfckbozcBsxaKV3jYbZG1Wjes73ZIauAu51WbVuF1QvvyukP3P6Pdi6Sk8qPK3E2PXu6Vq5T7SkM3PamRm5fUuBHH7Ln6dC/JFtowLiVTugCLCGMWE8ChbWX0G7Q2oqhWPfxzmgshZe8ip69G9oPJQTiZhKPtcLQTjKbBZBZM5v9Bni3quo62024NHQYXHQWT4z/IbzI7bwg="></Mermaid><div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>It is important to understand that these lifecycle hooks are <strong>not</strong> React lifecycle hooks.<br>
They are Stone.js lifecycle hooks that happen before the rendering phase.</p>
</div>
<p>Each step belongs to a <strong>different concern</strong>:</p>
<table>
<thead>
<tr>
<th>Phase</th>
<th>Responsibility</th>
<th>Dimension</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>handle()</code></td>
<td>Fetch data, validate, process event</td>
<td>Functional dimension</td>
</tr>
<tr>
<td><code v-pre>onPreparingPage</code></td>
<td>Last system hook before rendering</td>
<td>Functional dimension</td>
</tr>
<tr>
<td><code v-pre>render()</code></td>
<td>Return JSX tree (React functional component)</td>
<td>View dimension</td>
</tr>
</tbody>
</table>
<h3 id="the-handle-method" tabindex="-1"><a class="header-anchor" href="#the-handle-method"><span>The <code v-pre>handle()</code> method</span></a></h3>
<p>This method is optional but recommended. It runs as part of the <strong>event handling pipeline</strong>.</p>
<p>You can:</p>
<ul>
<li>Use the injected <code v-pre>event</code> to extract params, headers, cookies, etc.</li>
<li>Fetch data from services using the DI container</li>
<li>Return raw data or a full <code v-pre>ReactOutgoingResponse</code></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> ReactIncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> id <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>articleService<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The result of <code v-pre>handle()</code> is passed as the <code v-pre>data</code> parameter to the <code v-pre>render()</code> method.</p>
<div class="hint-container important">
<p class="hint-container-title">Snapshotted automatically</p>
<p>In SSR mode, the result is also <strong>snapshotted automatically</strong> and injected into the HTML.</p>
</div>
<h3 id="the-render-method" tabindex="-1"><a class="header-anchor" href="#the-render-method"><span>The <code v-pre>render()</code> method</span></a></h3>
<p>This method is <strong>required</strong>. It behaves exactly like a <strong>React functional component</strong> ,  but with superpowers.</p>
<p>It receives a <code v-pre>RenderContext</code>, giving it:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">RenderContext<span class="token operator">&lt;</span>TData <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  data<span class="token operator">?</span><span class="token operator">:</span> TData</span>
<span class="line">  container<span class="token operator">:</span> IContainer</span>
<span class="line">  event<span class="token operator">:</span> ReactIncomingEvent</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This means you can:</p>
<ul>
<li>Use <code v-pre>data</code> from <code v-pre>handle()</code></li>
<li>Access services using <code v-pre>container.resolve(...)</code></li>
<li>Inspect the incoming event (headers, query, cookies, etc.)</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data<span class="token punctuation">,</span> event<span class="token punctuation">,</span> container <span class="token punctuation">}</span><span class="token operator">:</span> RenderContext<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> user <span class="token operator">=</span> data<span class="token operator">?.</span>user</span>
<span class="line">  <span class="token keyword">const</span> router <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>Router<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> router<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">'/logout'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>Logout<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Stone.js renders this output using the correct renderer depending on the runtime:</p>
<table>
<thead>
<tr>
<th>Environment</th>
<th>Method used</th>
<th>Result</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>SSR / SOR (server)</strong></td>
<td><code v-pre>renderToString</code> from <code v-pre>react-dom/server</code></td>
<td>HTML string returned to the client</td>
</tr>
<tr>
<td><strong>SSR (client)</strong></td>
<td><code v-pre>hydrateRoot</code> from <code v-pre>react-dom/client</code></td>
<td>Hydrates the HTML and activates React</td>
</tr>
<tr>
<td><strong>SPA / CSR</strong></td>
<td><code v-pre>createRoot</code> from <code v-pre>react-dom/client</code></td>
<td>Standard React rendering in the browser</td>
</tr>
</tbody>
</table>
<h3 id="head-–-html-head-tags" tabindex="-1"><a class="header-anchor" href="#head-–-html-head-tags"><span><code v-pre>head()</code> – HTML head tags</span></a></h3>
<p>Your page can also define a <code v-pre>head()</code> method to populate metadata like title, description, and meta tags.</p>
<p>This is especially useful for:</p>
<ul>
<li>SEO</li>
<li>Dynamic titles based on route data</li>
<li>Sharing/social previews</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token function">head</span><span class="token punctuation">(</span><span class="token punctuation">{</span> event <span class="token punctuation">}</span><span class="token operator">:</span> RenderContext<span class="token punctuation">)</span><span class="token operator">:</span> HeadContext <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    title<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'World'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line">    description<span class="token operator">:</span> <span class="token string">'This is a React page in Stone.js'</span><span class="token punctuation">,</span></span>
<span class="line">    metas<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'author'</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">'Stone.js'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'keywords'</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">'stonejs, react, ssr, framework'</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HeadContext supports:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">HeadContext</span> <span class="token punctuation">{</span></span>
<span class="line">  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  metas<span class="token operator">?</span><span class="token operator">:</span> HTMLMetaDescriptor<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  links<span class="token operator">?</span><span class="token operator">:</span> HTMLLinkDescriptor<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  styles<span class="token operator">?</span><span class="token operator">:</span> HTMLStyleDescriptor<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  scripts<span class="token operator">?</span><span class="token operator">:</span> HTMLScriptDescriptor<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Stone.js will inject these tags into the rendered page, whether on the server (SSR/SOR) or the client (SPA).</p>
<h3 id="onpreparingpage-hook" tabindex="-1"><a class="header-anchor" href="#onpreparingpage-hook"><span><code v-pre>onPreparingPage</code> hook</span></a></h3>
<p>Right before React renders the page, Stone.js emits a special lifecycle hook: <code v-pre>onPreparingPage</code>.</p>
<p>This hook is your <strong>last chance</strong> to inspect or mutate context before rendering happens.</p>
<p>It occurs after:</p>
<ul>
<li>Middleware execution</li>
<li><code v-pre>handle()</code> resolution</li>
</ul>
<p>And before:</p>
<ul>
<li>Snapshot registration (SSR)</li>
<li>React rendering (DOM or hydration)</li>
<li><code v-pre>onResponsePrepared</code> and <code v-pre>onTerminate</code> lifecycle hooks</li>
</ul>
<h4 id="use-cases" tabindex="-1"><a class="header-anchor" href="#use-cases"><span>Use cases:</span></a></h4>
<ul>
<li>Logging or analytics</li>
<li>Injecting flags or metadata</li>
<li>Mutation of the response or event</li>
<li>Preparing SSR-specific rendering context</li>
</ul>
<h4 id="example-decorator-based" tabindex="-1"><a class="header-anchor" href="#example-decorator-based"><span>Example (decorator-based)</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Hook<span class="token punctuation">,</span> UseReactHookListenerContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PageLogger</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Hook</span></span><span class="token punctuation">(</span><span class="token string">'onPreparingPage'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">logBeforeRender</span><span class="token punctuation">(</span>context<span class="token operator">:</span> UseReactHookListenerContext<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Preparing page:'</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code v-pre>@Hook()</code> decorator and the <code v-pre>defineHook</code> utility from <code v-pre>@stone-js/use-react</code> provide full TypeScript support, enabling type safety and rich IDE features like autocompletion and inline documentation for the UseReact hooks.</p>
<h4 id="hook-context" tabindex="-1"><a class="header-anchor" href="#hook-context"><span>Hook Context</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">UseReactHookListenerContext</span> <span class="token punctuation">{</span></span>
<span class="line">  data<span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">  error<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">  head<span class="token operator">?</span><span class="token operator">:</span> HeadContext</span>
<span class="line">  container<span class="token operator">:</span> IContainer</span>
<span class="line">  event<span class="token operator">:</span> ReactIncomingEvent</span>
<span class="line">  snapshot<span class="token operator">:</span> ResponseSnapshotType</span>
<span class="line">  response<span class="token operator">:</span> ReactOutgoingResponse</span>
<span class="line">  componentType<span class="token operator">:</span> React<span class="token punctuation">.</span>ElementType</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssr-dual-execution-lifecycle" tabindex="-1"><a class="header-anchor" href="#ssr-dual-execution-lifecycle"><span>SSR: Dual Execution Lifecycle</span></a></h3>
<p>In SSR mode, the page lifecycle executes <strong>twice</strong>:</p>
<ol>
<li>
<p>On the <strong>server</strong>:</p>
<ul>
<li>Runs <code v-pre>handle()</code></li>
<li>Generates the HTML using <code v-pre>renderToString()</code></li>
<li>Snapshots the result</li>
</ul>
</li>
<li>
<p>On the <strong>client</strong>:</p>
<ul>
<li>Hydrates the page using <code v-pre>hydrateRoot()</code></li>
<li>Replays lifecycle hooks</li>
<li><strong>Does not refetch data</strong> (thanks to snapshots)</li>
</ul>
</li>
</ol>
<p>This guarantees consistency between server and client, while preserving full control over lifecycle and context.</p>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>This dual-execution is necessary: Stone.js defers context detection to runtime, so lifecycle hooks must run on both ends.</p>
</div>
<h2 id="pages-hooks-explained" tabindex="-1"><a class="header-anchor" href="#pages-hooks-explained"><span>Pages Hooks Explained</span></a></h2>
<p>Once your page reaches the <code v-pre>render()</code> phase, Stone.js has already done its job. But your page still has access to <strong>powerful utilities</strong> and <strong>contextual behavior</strong> that help you shape the outcome of an incoming event or interaction.</p>
<p>These hooks and helpers let you respond, redirect, and access data in a context-aware way.</p>
<h3 id="reactincomingevent-one-event-to-rule-them-all" tabindex="-1"><a class="header-anchor" href="#reactincomingevent-one-event-to-rule-them-all"><span><code v-pre>ReactIncomingEvent</code>: One event to rule them all</span></a></h3>
<p>Every page receives a <code v-pre>ReactIncomingEvent</code> as its event type. This object <strong>wraps and abstracts</strong> the underlying runtime event:</p>
<table>
<thead>
<tr>
<th>Runtime</th>
<th>Wrapped Event Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>SSR / SOR</td>
<td><code v-pre>IncomingHttpEvent</code></td>
</tr>
<tr>
<td>CSR / SPA</td>
<td><code v-pre>IncomingBrowserEvent</code></td>
</tr>
</tbody>
</table>
<p>You never need to check where your code is running. Just use the event consistently:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> ReactIncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> locale <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'locale'</span><span class="token punctuation">,</span> <span class="token string">'en'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> query <span class="token operator">=</span> event<span class="token punctuation">.</span>query<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'q'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// Fully context-aware, platform-agnostic</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code v-pre>ReactIncomingEvent</code> unifies request parsing, header access, cookie handling, user agent parsing, and much more.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Wherever your app runs, this event gives you <strong>one consistent interface</strong>.</p>
</div>
<h3 id="reactoutgoingresponse-full-control-when-needed" tabindex="-1"><a class="header-anchor" href="#reactoutgoingresponse-full-control-when-needed"><span><code v-pre>ReactOutgoingResponse</code>: Full control when needed</span></a></h3>
<p>By default, you can return raw data from <code v-pre>handle()</code> and let Stone.js wrap it for you.
But if you want full control over headers, status codes, or advanced behavior (like redirection), you should return a <code v-pre>ReactOutgoingResponse</code>.</p>
<p>Use the utility function <code v-pre>reactResponse()</code> to create one:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> reactResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> ReactIncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token function">reactResponse</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Stone'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">201</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">'x-app-version'</span><span class="token punctuation">,</span> <span class="token string">'1.0.0'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> response</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Stone.js will:</p>
<ul>
<li>Automatically infer the correct response type (<code v-pre>Http</code>, <code v-pre>Browser</code>)</li>
<li>Snapshot the data if SSR is enabled</li>
<li>Send the correct output for your environment</li>
</ul>
<p>You still get full hydration, even with a manual response.</p>
<h3 id="redirection-reactredirectresponse" tabindex="-1"><a class="header-anchor" href="#redirection-reactredirectresponse"><span>Redirection: <code v-pre>reactRedirectResponse()</code></span></a></h3>
<p>If you need to redirect from within your <code v-pre>handle()</code> method or a middleware, use the utility <code v-pre>reactRedirectResponse()</code>.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> reactRedirectResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/use-react'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> ReactIncomingEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">isAuthenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">reactRedirectResponse</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Welcome back!'</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This response:</p>
<ul>
<li>Triggers a browser navigation in CSR</li>
<li>Sends an HTTP 302 in SSR/SOR</li>
<li>Works identically in middleware or page logic</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Don't use the <code v-pre>Router.navigate()</code> method inside <code v-pre>handle()</code> or middleware ,  it only works inside the React component tree <strong>after rendering</strong>.</p>
</div>
<h3 id="meta-tags-head" tabindex="-1"><a class="header-anchor" href="#meta-tags-head"><span>Meta tags: <code v-pre>head()</code></span></a></h3>
<p>As explained earlier, pages can define a <code v-pre>head()</code> method to customize metadata for the rendered page:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token function">head</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token operator">:</span> RenderContext<span class="token punctuation">)</span><span class="token operator">:</span> HeadContext <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    title<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Profile of </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>user<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line">    metas<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'description'</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">'User profile page'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'author'</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">'Stone.js'</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This works in all rendering modes and is essential for SEO, OpenGraph, and analytics.</p>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>Designing pages in Stone.js is not just about wiring up a route and returning JSX, it’s about composing context-aware, modular units that cooperate across dimensions.
Here are best practices to help you get the most out of Stone.js pages:</p>
<h4 id="separate-concerns-clearly" tabindex="-1"><a class="header-anchor" href="#separate-concerns-clearly"><span>Separate concerns clearly</span></a></h4>
<ul>
<li>Use <code v-pre>handle()</code> to process the <strong>intent</strong> (event) and fetch or compute <strong>data</strong>.</li>
<li>Use <code v-pre>render()</code> to output the <strong>view</strong>, keeping it clean and stateless.</li>
<li>Use <code v-pre>head()</code> to define metadata, don’t set it imperatively elsewhere.</li>
</ul>
<p>This clear split between functional and view dimensions keeps logic predictable, testable, and easier to debug.</p>
<h4 id="prefer-class-based-pages-for-most-use-cases" tabindex="-1"><a class="header-anchor" href="#prefer-class-based-pages-for-most-use-cases"><span>Prefer class-based pages for most use cases</span></a></h4>
<p>Class pages give you:</p>
<ul>
<li>Decorator-based registration (<code v-pre>@Page()</code>)</li>
<li>Better introspection for tooling</li>
<li>Lifecycle hook integration</li>
<li>Cleaner dependency injection</li>
</ul>
<p>Factory pages are great when you need dynamic logic or runtime-driven composition, but for most routes, classes are more declarative and maintainable.</p>
<h4 id="let-stone-js-do-the-orchestration" tabindex="-1"><a class="header-anchor" href="#let-stone-js-do-the-orchestration"><span>Let Stone.js do the orchestration</span></a></h4>
<p>Avoid:</p>
<ul>
<li>Manually handling SSR logic</li>
<li>Writing hydration-specific code</li>
<li>Manually injecting metadata</li>
</ul>
<p>Instead:</p>
<ul>
<li>Return raw data from <code v-pre>handle()</code></li>
<li>Let Stone.js snapshot it</li>
<li>Define <code v-pre>head()</code> as needed</li>
</ul>
<p>Trust the framework to manage the flow, <strong>it’s built for that.</strong></p>
<h4 id="use-reactincomingevent-everywhere" tabindex="-1"><a class="header-anchor" href="#use-reactincomingevent-everywhere"><span>Use <code v-pre>ReactIncomingEvent</code> everywhere</span></a></h4>
<p>This event type is platform-agnostic and automatically adapted to your runtime:</p>
<ul>
<li>No need to check if you're in the browser or server</li>
<li>Works the same across SPA, SSR, and SOR</li>
<li>Exposes cookies, headers, query, user-agent, and more</li>
</ul>
<h4 id="keep-pages-light-delegate-logic-to-services" tabindex="-1"><a class="header-anchor" href="#keep-pages-light-delegate-logic-to-services"><span>Keep pages light, delegate logic to services</span></a></h4>
<p>Avoid bloating your <code v-pre>handle()</code> method with deep logic or manual validations.
Instead, inject services and keep your handler focused:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">validateToken</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This keeps pages declarative, and your business logic reusable across multiple modules.</p>
<h4 id="redirect-using-reactredirectresponse" tabindex="-1"><a class="header-anchor" href="#redirect-using-reactredirectresponse"><span>Redirect using <code v-pre>reactRedirectResponse()</code></span></a></h4>
<p>Avoid using <code v-pre>router.navigate()</code> in <code v-pre>handle()</code> or middleware, it won’t work reliably in SSR or SOR.</p>
<p>Instead:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">return</span> <span class="token function">reactRedirectResponse</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>It will adapt to your runtime automatically.</p>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>A <strong>Stone.js Page</strong> is a structured unit that connects <strong>user intention</strong> to <strong>visual outcome</strong>, bridging the <strong>functional dimension</strong> of your application with the <strong>view dimension</strong> powered by React.</p>
<p>Unlike frameworks that reduce pages to route-bound components, Stone.js treats pages as full-fledged <strong>contextual actors</strong>:</p>
<ul>
<li>They receive normalized, platform-agnostic <strong>incoming events</strong></li>
<li>They participate in lifecycle orchestration and system-level hooks</li>
<li>They return fully reactive, renderable <strong>React components</strong></li>
<li>They can control metadata, redirection, error handling, and hydration with precision</li>
</ul>
<p>Each page is made of three core methods:</p>
<ul>
<li><code v-pre>handle()</code> → fetch or process data in the functional dimension</li>
<li><code v-pre>render()</code> → return JSX using React in the view dimension</li>
<li><code v-pre>head()</code> → provide head metadata like title, meta, and links</li>
</ul>
<p>Pages can be registered declaratively or imperatively, and can be structured as classes or factories, depending on how much introspection or flexibility you need.</p>
<p>Stone.js provides automatic:</p>
<ul>
<li><strong>Routing integration</strong></li>
<li><strong>Context injection</strong> (DI container, incoming event, snapshot data)</li>
<li><strong>SSR hydration</strong> using snapshots</li>
<li><strong>Error delegation</strong> and lifecycle visibility</li>
</ul>
<p>And most importantly:
<strong>Once the page is rendered, Stone.js steps back and React takes full control.</strong></p>
<p>That’s the power of the Continuum: clean boundaries, contextual flow, and zero-friction rendering across platforms.</p>
<p>A Stone.js page is not a view.
It’s a conversation between the system and the user, shaped by context, delivered by logic, and rendered through React.</p>
</div></template>


