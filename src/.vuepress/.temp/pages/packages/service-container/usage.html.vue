<template><div><p>The true power of <code v-pre>Stone Service Container</code> lies in its ability to simplify
and enhance the management of dependencies within your application.
By leveraging the Inversion of Control (IoC) and Proxy patterns,
the library offers a highly flexible and intuitive way to bind, resolve,
and inject dependencies. Whether you're working with simple instances, complex singletons, or dynamic factories,
the Service Container provides a robust foundation for building scalable and maintainable applications.</p>
<h2 id="binding" tabindex="-1"><a class="header-anchor" href="#binding"><span>Binding</span></a></h2>
<p>You can bind instances, singletons, and factories to the container using various methods provided by the Container class.</p>
<h3 id="instance" tabindex="-1"><a class="header-anchor" href="#instance"><span>Instance</span></a></h3>
<p>To bind a single instance or value to the container:</p>
<CodeTabs id="15" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Bind value</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">instance</span><span class="token punctuation">(</span><span class="token string">'config'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">apiUrl</span><span class="token operator">:</span> <span class="token string">'https://api.example.com'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Bind instance</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">instance</span><span class="token punctuation">(</span><span class="token string">'ApiUrl'</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Bind value</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">instance</span><span class="token punctuation">(</span><span class="token string">'config'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> apiUrl<span class="token operator">:</span> <span class="token string">'https://api.example.com'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Bind instance</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">instance</span><span class="token punctuation">(</span><span class="token string">'ApiUrl'</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">'https://api.example.com'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="singleton" tabindex="-1"><a class="header-anchor" href="#singleton"><span>Singleton</span></a></h3>
<p>To bind a resolver function that returns a singleton instance:</p>
<CodeTabs id="29" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="factory" tabindex="-1"><a class="header-anchor" href="#factory"><span>Factory</span></a></h3>
<p>To bind a resolver function that returns a new instance each time:</p>
<CodeTabs id="43" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span><span class="token function">binding</span><span class="token punctuation">(</span><span class="token string">'userService'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">UserService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span><span class="token function">binding</span><span class="token punctuation">(</span><span class="token string">'userService'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">UserService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="auto-binding" tabindex="-1"><a class="header-anchor" href="#auto-binding"><span>Auto Binding</span></a></h2>
<p>The <code v-pre>autoBinding</code> method in the service container simplifies the process of binding
dependencies by ensuring they are only bound if not already present in the container.
This method can be used implicitly or explicitly, providing flexibility in how dependencies are registered and resolved.</p>
<h3 id="implicit-auto-binding" tabindex="-1"><a class="header-anchor" href="#implicit-auto-binding"><span>Implicit auto binding</span></a></h3>
<p>Implicit auto binding allows you to automatically register and bind a class to the container using the class's own name.
This approach simplifies dependency management by using the class name as the key for resolution.</p>
<CodeTabs id="63" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Auto binding Logger</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">autoBinding</span><span class="token punctuation">(</span>Logger<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Resolve Logger</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span>Logger<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Auto binding Logger</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">autoBinding</span><span class="token punctuation">(</span>Logger<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Resolve Logger</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span>Logger<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="explicit-auto-binding" tabindex="-1"><a class="header-anchor" href="#explicit-auto-binding"><span>Explicit auto binding</span></a></h3>
<p>Explicit auto binding allows you to register and bind a class to the container with a specified key, as a singleton or factory and optional aliases.
This method offers greater flexibility in naming and accessing dependencies.</p>
<CodeTabs id="77" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Auto binding Logger</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">autoBinding</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">,</span> Logger<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'logging'</span><span class="token punctuation">,</span> <span class="token string">'log'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Resolve Logger</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'logging'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Auto binding Logger</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">autoBinding</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">,</span> Logger<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'logging'</span><span class="token punctuation">,</span> <span class="token string">'log'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Resolve Logger</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'logging'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="conditionnal-binding" tabindex="-1"><a class="header-anchor" href="#conditionnal-binding"><span>Conditionnal Binding</span></a></h2>
<p>You can bind instances, singletons, and factories to the container conditionnaly using various methods provided by the Container class.</p>
<h3 id="instance-1" tabindex="-1"><a class="header-anchor" href="#instance-1"><span>Instance</span></a></h3>
<p>To bind a single instance or value to the container, if it is not already bound:</p>
<CodeTabs id="97" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Bind value</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">instanceIf</span><span class="token punctuation">(</span><span class="token string">'config'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">apiUrl</span><span class="token operator">:</span> <span class="token string">'https://api.example.com'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Bind instance</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">instanceIf</span><span class="token punctuation">(</span><span class="token string">'ApiUrl'</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Bind value</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">instanceIf</span><span class="token punctuation">(</span><span class="token string">'config'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> apiUrl<span class="token operator">:</span> <span class="token string">'https://api.example.com'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Bind instance</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">instanceIf</span><span class="token punctuation">(</span><span class="token string">'ApiUrl'</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">'https://api.example.com'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="singleton-1" tabindex="-1"><a class="header-anchor" href="#singleton-1"><span>Singleton</span></a></h3>
<p>To bind a resolver function that returns a singleton instance, if it is not already bound:</p>
<CodeTabs id="111" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span><span class="token function">singletonIf</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span><span class="token function">singletonIf</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="factory-1" tabindex="-1"><a class="header-anchor" href="#factory-1"><span>Factory</span></a></h3>
<p>To bind a resolver function that returns a new instance each time, if it is not already bound:</p>
<CodeTabs id="125" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span><span class="token function">bindingIf</span><span class="token punctuation">(</span><span class="token string">'userService'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">UserService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span><span class="token function">bindingIf</span><span class="token punctuation">(</span><span class="token string">'userService'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">UserService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="resolving-dependencies" tabindex="-1"><a class="header-anchor" href="#resolving-dependencies"><span>Resolving Dependencies</span></a></h2>
<p>You can resolve dependencies from the container using the <code v-pre>make</code> method:</p>
<CodeTabs id="139" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'config'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> userService <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'userService'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'config'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> userService <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'userService'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="proxied-resolving" tabindex="-1"><a class="header-anchor" href="#proxied-resolving"><span>Proxied Resolving</span></a></h3>
<p>Proxied resolving allows you to resolve dependencies through the container using the proxy pattern.
This means you can access dependencies directly as if they were properties of the container instance,
making the syntax cleaner and more intuitive.</p>
<CodeTabs id="153" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span>logger</span>
<span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> container<span class="token punctuation">.</span>config</span>
<span class="line"><span class="token keyword">const</span> userService <span class="token operator">=</span> container<span class="token punctuation">.</span>userService</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// N/A</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="destructuring-resolving" tabindex="-1"><a class="header-anchor" href="#destructuring-resolving"><span>Destructuring Resolving</span></a></h3>
<p>Destructuring resolving allows you to resolve multiple dependencies at once by destructuring the container.
This method provides a concise and convenient way to access several dependencies simultaneously.</p>
<CodeTabs id="167" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> config<span class="token punctuation">,</span> logger<span class="token punctuation">,</span> userService <span class="token punctuation">}</span> <span class="token operator">=</span> container</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// N/A</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="on-demand-resolving" tabindex="-1"><a class="header-anchor" href="#on-demand-resolving"><span>On-Demand Resolving</span></a></h3>
<p>This method provides a convenient way to resolve a value from the container by its key and return it wrapped in a factory function.
This approach is useful when you need to create multiple instances of a dependency on demand.</p>
<CodeTabs id="181" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Get the logger factory</span></span>
<span class="line"><span class="token keyword">const</span> loggerFactory <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">factory</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Resolve later</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">loggerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Get the logger factory</span></span>
<span class="line"><span class="token keyword">const</span> loggerFactory <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">factory</span><span class="token punctuation">(</span><span class="token string">'logger'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Resolve later</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">loggerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="conditional-resolving" tabindex="-1"><a class="header-anchor" href="#conditional-resolving"><span>Conditional Resolving</span></a></h3>
<p>This method checks if the dependency is already bound in the container. If it is, the dependency is resolved.
If not, the method binds the dependency and then resolves it.
This ensures that dependencies are always available when needed, without redundant bindings.</p>
<CodeTabs id="195" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Assuming Logger is a class that we want to ensure is bound and resolved</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>Logger<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// The first time resolve is called, Logger will be bound and resolved</span></span>
<span class="line"><span class="token comment">// Subsequent calls will simply resolve the already bound Logger instance</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Assuming Logger is a class that we want to ensure is bound and resolved</span></span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>Logger<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// The first time resolve is called, Logger will be bound and resolved</span></span>
<span class="line"><span class="token comment">// Subsequent calls will simply resolve the already bound Logger instance</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="using-aliases" tabindex="-1"><a class="header-anchor" href="#using-aliases"><span>Using Aliases</span></a></h2>
<p>Aliases allow you to reference bindings by alternative names.</p>
<h3 id="setting-aliases" tabindex="-1"><a class="header-anchor" href="#setting-aliases"><span>Setting Aliases</span></a></h3>
<p>To set an alias for a binding:</p>
<CodeTabs id="215" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Alias can be a string</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span>Logger<span class="token punctuation">,</span> <span class="token string">'logging'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Or an array of string</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span>Logger<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'logger'</span><span class="token punctuation">,</span> <span class="token string">'logging'</span><span class="token punctuation">,</span> <span class="token string">'log'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Alias can be a string</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span>Logger<span class="token punctuation">,</span> <span class="token string">'logging'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Or an array of string</span></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span>Logger<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'logger'</span><span class="token punctuation">,</span> <span class="token string">'logging'</span><span class="token punctuation">,</span> <span class="token string">'log'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="retrieving-aliases" tabindex="-1"><a class="header-anchor" href="#retrieving-aliases"><span>Retrieving Aliases</span></a></h3>
<p>To retrieve a binding by its alias:</p>
<CodeTabs id="229" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'logging'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">'logging'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="checking-bindings" tabindex="-1"><a class="header-anchor" href="#checking-bindings"><span>Checking Bindings</span></a></h2>
<p>You can check if a binding or alias exists in the container:</p>
<CodeTabs id="243" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// With bound method</span></span>
<span class="line"><span class="token keyword">const</span> hasLogger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">bound</span><span class="token punctuation">(</span>Logger<span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Can be used with alias</span></span>
<span class="line"><span class="token keyword">const</span> hasLogger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">bound</span><span class="token punctuation">(</span><span class="token string">'logging'</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// An alias of bound method</span></span>
<span class="line"><span class="token keyword">const</span> hasLogger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>Logger<span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check if this alias exists</span></span>
<span class="line"><span class="token keyword">const</span> isAlias <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">isAlias</span><span class="token punctuation">(</span><span class="token string">'logging'</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// With bound method</span></span>
<span class="line"><span class="token keyword">const</span> hasLogger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">bound</span><span class="token punctuation">(</span>Logger<span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Can be used with alias</span></span>
<span class="line"><span class="token keyword">const</span> hasLogger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">bound</span><span class="token punctuation">(</span><span class="token string">'logging'</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// An alias of bound method</span></span>
<span class="line"><span class="token keyword">const</span> hasLogger <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>Logger<span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check if this alias exists</span></span>
<span class="line"><span class="token keyword">const</span> isAlias <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">isAlias</span><span class="token punctuation">(</span><span class="token string">'logging'</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="clearing-the-container" tabindex="-1"><a class="header-anchor" href="#clearing-the-container"><span>Clearing the Container</span></a></h2>
<p>To remove all bindings and reset the container:</p>
<CodeTabs id="257" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>With this library, managing dependencies in your application becomes much simpler and more efficient.
By adhering to the principles of Inversion of Control and Dependency Injection, you can create more modular,
testable, and maintainable code.</p>
</div></template>


