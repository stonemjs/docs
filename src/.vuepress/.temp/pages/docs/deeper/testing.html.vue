<template><div><p>Testing in Stone.js is a first-class concern, but like everything in the Continuum, <strong>context defines how</strong>.</p>
<p>Stone.js supports <strong>unit testing</strong> out of the box using <a href="https://vitest.dev" target="_blank" rel="noopener noreferrer">Vitest</a>. That means you can write fast, isolated tests to validate your application logic, without needing the full application runtime. Whether you’re working with imperative functions or declarative classes, the goal is the same: <strong>test your behavior, not your wiring</strong>.</p>
<p>At the moment, <strong>only unit testing is officially supported</strong>. There is no native library for full integration testing yet, but the architecture is already designed to support it in the future.</p>
<p>Stone.js offers two programming paradigms, <strong>imperative</strong> and <strong>declarative</strong>, and they influence your testing approach:</p>
<ul>
<li><strong>Imperative code</strong> is straightforward to test. It’s function-first, has no decorators, and can be instantiated directly.</li>
<li><strong>Declarative code</strong> requires some setup. Since it uses decorators (<code v-pre>@StoneApp</code>, <code v-pre>@NodeHttp</code>, <code v-pre>@UseReact</code>, etc.), you’ll need to <strong>mock those decorators</strong> to isolate your logic and avoid triggering the full application lifecycle.</li>
</ul>
<p>This page will walk you through best practices for testing both styles, show you how to mock decorators in declarative modules, and help you maintain testable, reliable code, without depending on platform details.</p>
<p>Because in Stone.js, your domain code doesn’t care where it runs, and neither should your tests.</p>
<h2 id="testing-philosophy-in-stone-js" tabindex="-1"><a class="header-anchor" href="#testing-philosophy-in-stone-js"><span>Testing Philosophy in Stone.js</span></a></h2>
<p>In Stone.js, testing isn’t just a task, it’s a reflection of how you design your system.</p>
<p>Thanks to the <strong>Continuum Architecture</strong>, your application is split between:</p>
<ul>
<li><strong>External context</strong>: unpredictable, adapter-specific inputs like HTTP requests or CLI args.</li>
<li><strong>Internal context</strong>: your logic, services, and decisions, all of which <strong>can and should be tested</strong>.</li>
</ul>
<p>This clean separation means your <strong>handlers, components, and services</strong> are completely testable in isolation. If your handler can’t be tested without spinning up a server or parsing JSON manually, you’re doing something wrong.</p>
<h3 id="what-to-test" tabindex="-1"><a class="header-anchor" href="#what-to-test"><span>What to Test</span></a></h3>
<ul>
<li>Your logic: anything that depends on parameters, state, or injected services.</li>
<li>Your event handlers: inputs go in (<code v-pre>IncomingEvent</code>), outputs come out.</li>
<li>Your render methods (for React/Vue): return valid components based on inputs.</li>
</ul>
<h3 id="what-not-to-test" tabindex="-1"><a class="header-anchor" href="#what-not-to-test"><span>What NOT to Test</span></a></h3>
<ul>
<li>❌ Blueprint behavior (e.g. lifecycle hooks, middleware registration).</li>
<li>❌ Decorator wiring, it’s framework-level.</li>
<li>❌ Platform integration (e.g. “is my CLI adapter running?”), that’s for future integration tests.</li>
</ul>
<h3 id="why-it-works" tabindex="-1"><a class="header-anchor" href="#why-it-works"><span>Why it Works</span></a></h3>
<p>This model works because Stone.js doesn’t blur the lines. <strong>You control your domain</strong>, we take care of the runtime. That’s what allows you to test without setting up servers, configuring routers, or loading environment variables.</p>
<p>If your test has too much setup, ask yourself:</p>
<p>“Am I testing my logic, or the framework?”</p>
<p>Keep it focused. Keep it fast. Keep it pure.</p>
<h2 id="testing-imperative-code" tabindex="-1"><a class="header-anchor" href="#testing-imperative-code"><span>Testing Imperative Code</span></a></h2>
<p>In Stone.js, <strong>imperative code is testing paradise</strong>.</p>
<p>No decorators. No magic. Just pure, explicit code that returns values and logs side effects. Whether you’re building an HTTP handler, a CLI tool, or a React component using <code v-pre>defineComponent</code>, you can test it like any regular function or factory.</p>
<h3 id="factory-based-handlers" tabindex="-1"><a class="header-anchor" href="#factory-based-handlers"><span>Factory-based Handlers</span></a></h3>
<p>Let’s say you’ve created an event handler like this:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Application</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> logger <span class="token punctuation">}</span><span class="token operator">:</span> AppOptions<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> ResponseData <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>event<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'World'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span></span>
<span class="line">    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Your test is simple:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'Application'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> mockedLogger<span class="token operator">:</span> ILogger</span>
<span class="line">  <span class="token keyword">let</span> app<span class="token operator">:</span> FunctionalEventHandler</span>
<span class="line"></span>
<span class="line">  <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    mockedLogger <span class="token operator">=</span> <span class="token punctuation">{</span> info<span class="token operator">:</span> vi<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> ILogger</span>
<span class="line">    app <span class="token operator">=</span> <span class="token function">Application</span><span class="token punctuation">(</span><span class="token punctuation">{</span> logger<span class="token operator">:</span> mockedLogger <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'should respond with the expected message'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'World'</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> IncomingEvent</span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">app</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span>mockedLogger<span class="token punctuation">.</span>info<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There’s <strong>nothing special</strong> about this test, and that’s exactly the point.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Always mock your services (<code v-pre>logger</code>, <code v-pre>env</code>, <code v-pre>db</code>, etc). Your handler should never talk to real infrastructure.</p>
</div>
<h3 id="react-with-factory-imperative" tabindex="-1"><a class="header-anchor" href="#react-with-factory-imperative"><span>React with Factory (Imperative)</span></a></h3>
<p>When using <code v-pre>defineComponent</code>, you usually return two methods: <code v-pre>handle()</code> and <code v-pre>render()</code>.</p>
<p>You can test them separately:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">Application</span><span class="token punctuation">(</span><span class="token punctuation">{</span> logger<span class="token operator">:</span> mockedLogger <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Test handler</span></span>
<span class="line"><span class="token keyword">const</span> response <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">expect</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Test render</span></span>
<span class="line"><span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">renderToString</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data<span class="token operator">:</span> response <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">expect</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Yes, you can even snapshot test your render output, because it's just a function returning JSX.</p>
<div class="hint-container tip">
<p class="hint-container-title">Remember</p>
<p>Stone.js doesn't care about React Server vs Client, <code v-pre>render()</code> is your domain logic, testable like anything else.</p>
</div>
<h2 id="testing-declarative-code" tabindex="-1"><a class="header-anchor" href="#testing-declarative-code"><span>Testing Declarative Code</span></a></h2>
<p>Declarative code in Stone.js is powered by decorators like <code v-pre>@StoneApp</code>, <code v-pre>@NodeHttp</code>, <code v-pre>@UseReact</code>, etc. These decorators are evaluated at runtime, perform metadata injection, and connect your class to the Blueprint system.</p>
<p>That’s awesome in production, but in tests, <strong>you want none of it</strong>.</p>
<h3 id="why-it-s-tricky" tabindex="-1"><a class="header-anchor" href="#why-it-s-tricky"><span>Why It’s Tricky</span></a></h3>
<p>When you write:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">NodeHttp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token keyword">implements</span> <span class="token class-name">IEventHandler<span class="token operator">&lt;</span>IncomingEvent<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You’re telling Stone.js to bootstrap your class with configuration, lifecycle, and platform logic. In a test, however, you just want to:</p>
<ol>
<li>Instantiate the class manually.</li>
<li>Inject mock services.</li>
<li>Call <code v-pre>handle()</code> or <code v-pre>render()</code>.</li>
</ol>
<p>But decorators interfere. They expect runtime metadata and might trigger side effects (like adapter registration). That’s why you need to <strong>mock them</strong> before running tests.,</p>
<h3 id="strategy-mocking-the-decorators" tabindex="-1"><a class="header-anchor" href="#strategy-mocking-the-decorators"><span>Strategy: Mocking the Decorators</span></a></h3>
<p>Here’s how to do it with Vitest:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">vi<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">'@stone-js/core'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>importOriginal<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> actual <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">importOriginal</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">...</span>actual<span class="token punctuation">,</span></span>
<span class="line">    StoneApp<span class="token operator">:</span> vi<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> vi<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You do this for <strong>every decorator</strong> your class uses.</p>
<p>Repeat for:</p>
<ul>
<li><code v-pre>@NodeHttp</code> or <code v-pre>@NodeConsole</code></li>
<li><code v-pre>@Browser</code></li>
<li><code v-pre>@UseReact</code></li>
</ul>
<p>Mocking them ensures that decorators become <strong>no-ops</strong>, your class behaves like any other class.,</p>
<h3 id="example-react-declarative-component" tabindex="-1"><a class="header-anchor" href="#example-react-declarative-component"><span>Example: React Declarative Component</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'Application'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> app<span class="token operator">:</span> Application</span>
<span class="line">  <span class="token keyword">let</span> mockedLogger<span class="token operator">:</span> ILogger</span>
<span class="line"></span>
<span class="line">  <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    mockedLogger <span class="token operator">=</span> <span class="token punctuation">{</span> info<span class="token operator">:</span> vi<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> ILogger</span>
<span class="line">    app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token punctuation">{</span> logger<span class="token operator">:</span> mockedLogger <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'should handle the incoming event correctly'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'World'</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> ReactIncomingEvent</span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span>mockedLogger<span class="token punctuation">.</span>info<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'should render the message'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">renderToString</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data<span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello World!'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Even with decorators mocked, everything else works the same, you instantiate, inject, test. Clean and simple.,</p>
<h3 id="example-backend-declarative-service" tabindex="-1"><a class="header-anchor" href="#example-backend-declarative-service"><span>Example: Backend Declarative Service</span></a></h3>
<p>Same strategy, but for a backend service instead of a React component:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'Application'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> app<span class="token operator">:</span> Application</span>
<span class="line">  <span class="token keyword">let</span> mockedLogger<span class="token operator">:</span> ILogger</span>
<span class="line"></span>
<span class="line">  <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    mockedLogger <span class="token operator">=</span> <span class="token punctuation">{</span> info<span class="token operator">:</span> vi<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> ILogger</span>
<span class="line">    app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token punctuation">{</span> logger<span class="token operator">:</span> mockedLogger <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'should handle the incoming event correctly'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'World'</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> IncomingEvent</span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>You’re not bypassing the framework, you’re focusing on what you control. Your class, your logic, your test.</p>
</div>
<h2 id="test-organization" tabindex="-1"><a class="header-anchor" href="#test-organization"><span>Test Organization</span></a></h2>
<p>A good test suite is like a good blueprint: cleanly structured, easy to navigate, and aware of its context. In Stone.js, your project should maintain a clear separation between:</p>
<ul>
<li><strong>Production code</strong> (loaded and bundled at runtime),</li>
<li><strong>Test code</strong> (used only during testing).</li>
</ul>
<h3 id="required-structure" tabindex="-1"><a class="header-anchor" href="#required-structure"><span>Required Structure</span></a></h3>
<p>The <strong>official Stone.js requirements</strong> is to place all your test files in a dedicated <code v-pre>/tests</code> folder:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">/app</span>
<span class="line">  /Application.ts</span>
<span class="line">/tests</span>
<span class="line">  /Application.test.ts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This keeps your build clean and your concerns separated.
Stone.js uses the <code v-pre>app/</code> folder (or any custom input path) as the source of production code, so test files colocated in <code v-pre>app/</code> can be mistakenly included in your runtime bundle.</p>
<h3 id="can-i-colocate-test-files" tabindex="-1"><a class="header-anchor" href="#can-i-colocate-test-files"><span>Can I Colocate Test Files?</span></a></h3>
<p>No, Support for colocated test files <strong>may be added in a future version</strong> of Stone.js.</p>
<p>But for now, <strong>stick to the <code v-pre>tests/</code> folder</strong>.
It’s clean, safe, and aligns with the continuum principle of separating context.</p>
<h3 id="naming-conventions" tabindex="-1"><a class="header-anchor" href="#naming-conventions"><span>Naming Conventions</span></a></h3>
<p>Use <code v-pre>.test.ts</code>, <code v-pre>.spec.ts</code>, or similar extensions, Vitest detects them automatically.
Good examples:</p>
<ul>
<li><code v-pre>Application.test.ts</code></li>
<li><code v-pre>Logger.spec.ts</code></li>
</ul>
<p>Avoid vague names like <code v-pre>main.test.ts</code> unless it’s really your app entry point.</p>
<h3 id="grouping-and-structure-tips" tabindex="-1"><a class="header-anchor" href="#grouping-and-structure-tips"><span>Grouping and Structure Tips</span></a></h3>
<ul>
<li>Use <code v-pre>describe()</code> blocks to group tests by behavior or module.</li>
<li>Use <code v-pre>beforeEach()</code> for common setup.</li>
<li>Keep tests short, specific, and named by <em>what</em> they do, not <em>how</em>.</li>
</ul>
<p>If you’re testing both <code v-pre>handle()</code> and <code v-pre>render()</code> in a component, you can split them into focused files:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">Application.handle.test.ts</span>
<span class="line">Application.render.test.ts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="limitations-and-what-s-next" tabindex="-1"><a class="header-anchor" href="#limitations-and-what-s-next"><span>Limitations and What’s Next</span></a></h2>
<p>Stone.js is designed for <strong>unit testing first</strong>, and it does that exceptionally well thanks to its <strong>clean separation of internal and external context</strong>.</p>
<p>But when it comes to <strong>integration testing</strong>, things are a bit more nuanced.</p>
<h3 id="what-you-can-t-do-yet" tabindex="-1"><a class="header-anchor" href="#what-you-can-t-do-yet"><span>What You <em>Can’t</em> Do (Yet)</span></a></h3>
<ul>
<li>❌ You can’t simulate a <strong>full internal context lifecycle</strong> from the outside.</li>
<li>❌ You can’t programmatically test the blueprint as it runs through <code v-pre>configure</code>, <code v-pre>afterConfigure</code>, and internal lifecycle hooks like <code v-pre>onStart</code>, <code v-pre>onInit</code>, or <code v-pre>onStop</code>.</li>
<li>❌ You can’t test how adapters and decorators behave <strong>in real runtime conditions</strong> within a Vitest test suite.</li>
<li>❌ You can’t test lifecycle behavior triggered by <code v-pre>IncomingEvent</code> through Stone’s runtime stack, yet.</li>
</ul>
<p>Why? Because:</p>
<ul>
<li>Decorators don’t execute their full effect outside of the framework’s dimensions.</li>
<li>The Blueprint lifecycle is dynamic, introspected, and adapter-dependent.</li>
<li>Adapters are event-driven (HTTP, CLI, Lambda, etc.) and can’t be invoked in Vitest without faking the whole environment.</li>
</ul>
<h3 id="real-world-workaround-manual-integration-testing-with-postman" tabindex="-1"><a class="header-anchor" href="#real-world-workaround-manual-integration-testing-with-postman"><span>Real-World Workaround: Manual Integration Testing with Postman</span></a></h3>
<p>You can still test your full stack, manually.</p>
<p>If your app exposes a real adapter (e.g. HTTP via <code v-pre>@NodeHttp()</code>), just run the app and <strong>send real events using Postman, Curl, or any HTTP client</strong>.</p>
<p>This allows you to:</p>
<ul>
<li>Validate request/response behavior.</li>
<li>See logs, status codes, and returned payloads.</li>
<li>Confirm your Blueprint is wired correctly.</li>
<li>Trigger the actual internal context lifecycle (<code v-pre>onStart</code>, <code v-pre>onInit</code>, etc.).</li>
</ul>
<p>It's not automated yet, but it’s real integration testing, and great for catching wiring mistakes, decorator bugs, and lifecycle issues.</p>
<h3 id="what-s-coming" tabindex="-1"><a class="header-anchor" href="#what-s-coming"><span>What’s Coming</span></a></h3>
<p>We’re working toward providing official support for:</p>
<ul>
<li>🧪 <strong>Integration test utilities</strong>: programmatically run the full <strong>Blueprint and internal context lifecycle</strong>, including hooks like <code v-pre>onStart</code>, <code v-pre>onInit</code>, and <code v-pre>onStop</code>.</li>
<li>🧠 <strong>Runtime-aware test harness</strong>: test classes with decorators <em>without</em> mocking, by simulating the application runtime.</li>
<li>🧰 Maybe even a <strong>Stone.js test runner</strong>, designed specifically to run isolated, full-context app instances in test environments.</li>
</ul>
<p>Until then, <strong>unit tests keep your logic rock solid</strong>, and <strong>manual tests</strong> help validate your configuration and runtime behavior.</p>
<p>Think of it this way: unit tests are for your brain, integration tests are for your nerves.</p>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2>
<p>Whether you write imperative or declarative Stone.js code,
the goal of testing is the same: <strong>test the effect of your logic, not the glue of the framework</strong>.
Because the framework is already tested, and you don’t need to repeat that.</p>
<p>Here are some essential best practices to keep your test suite clean, fast, and meaningful.</p>
<h4 id="prefer-imperative-code-for-testability" tabindex="-1"><a class="header-anchor" href="#prefer-imperative-code-for-testability"><span>Prefer imperative code for testability</span></a></h4>
<ul>
<li>It’s simpler to instantiate.</li>
<li>No decorators to mock.</li>
<li>Perfect for handlers, factories, utilities, and even render logic.</li>
</ul>
<p>If test coverage matters and you don’t need the benefits of decorators, go imperative.</p>
<h4 id="mock-everything-external" tabindex="-1"><a class="header-anchor" href="#mock-everything-external"><span>Mock everything external</span></a></h4>
<ul>
<li>
<p>Use <code v-pre>vi.fn()</code> or <code v-pre>vi.mock()</code> to replace:</p>
<ul>
<li>Loggers</li>
<li>Environment access</li>
<li>HTTP clients</li>
<li>Database services</li>
</ul>
</li>
</ul>
<p>If it wasn’t created in your test, assume it’s external and mock it.</p>
<h4 id="always-mock-decorators-in-declarative-code" tabindex="-1"><a class="header-anchor" href="#always-mock-decorators-in-declarative-code"><span>Always mock decorators in declarative code</span></a></h4>
<p>You don’t want decorators to register metadata or execute platform logic in your test. Use <code v-pre>vi.mock()</code> to replace them with no-op functions.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">vi<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">'@stone-js/core'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>importOriginal<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> actual <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">importOriginal</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">...</span>actual<span class="token punctuation">,</span></span>
<span class="line">    StoneApp<span class="token operator">:</span> vi<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> vi<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This way, your class behaves like a plain class.</p>
<h4 id="separate-handler-logic-from-rendering" tabindex="-1"><a class="header-anchor" href="#separate-handler-logic-from-rendering"><span>Separate handler logic from rendering</span></a></h4>
<p>If you're writing components with both <code v-pre>handle()</code> and <code v-pre>render()</code>, test each one in isolation.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> response <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">expect</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">renderToString</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data<span class="token operator">:</span> response <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">expect</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="use-consistent-test-structure" tabindex="-1"><a class="header-anchor" href="#use-consistent-test-structure"><span>Use consistent test structure</span></a></h4>
<ul>
<li><code v-pre>beforeEach</code> for shared setup (e.g., mocking the logger).</li>
<li>Use <code v-pre>describe()</code> to group tests by module/class.</li>
<li>Prefer <code v-pre>*.test.ts</code> files colocated in a <code v-pre>/tests</code> directory.</li>
</ul>
<h4 id="focus-on-behavior-not-implementation" tabindex="-1"><a class="header-anchor" href="#focus-on-behavior-not-implementation"><span>Focus on behavior, not implementation</span></a></h4>
<p>Don't test internal properties. Test:</p>
<ul>
<li>The response returned</li>
<li>The methods called (via mocks)</li>
<li>The side effects (like logging)</li>
</ul>
<p>Assert what the user sees, not how it’s done.</p>
<h4 id="❌-don-t-test-blueprint-wiring" tabindex="-1"><a class="header-anchor" href="#❌-don-t-test-blueprint-wiring"><span>❌ Don’t test Blueprint wiring</span></a></h4>
<p>That’s not your responsibility. Stone.js bootstraps everything at runtime, your test shouldn’t care whether the <code v-pre>defineBlueprintConfig()</code> works. It’s framework territory.</p>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>Testing in Stone.js is all about <strong>clarity, control, and context</strong>.</p>
<p>Thanks to the Continuum Architecture, your logic lives in a clean, testable internal context, and your runtime-specific adapters stay out of the way. That means your code can be tested like any pure function or class, using fast and familiar tools like Vitest.</p>
<p>Here’s the TL;DR:</p>
<ul>
<li>✅ <strong>Unit testing is fully supported</strong> with Vitest.</li>
<li>✅ <strong>Imperative code</strong> is easy to test, no decorators, no surprises.</li>
<li>✅ <strong>Declarative code</strong> is also testable, just mock the decorators.</li>
<li>✅ <strong>Render logic</strong> can be tested with snapshot or string-based assertions.</li>
<li>⚠️ <strong>Integration testing</strong> is not automated yet, but can be done manually using tools like Postman.</li>
<li>🔜 Full-context integration test support (including lifecycle hooks like <code v-pre>onStart</code>, <code v-pre>onInit</code>, and <code v-pre>onStop</code>) is planned for future releases.</li>
</ul>
<p>So for now, keep your code modular, mock your context, and test what you control. You don’t need a runtime to prove your logic is solid.</p>
<p>Because in Stone.js, logic should be universal, and testable anywhere.</p>
</div></template>


