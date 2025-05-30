<template><div><p>At the heart of Continuum Architecture lies a simple equation:</p>
<blockquote>
<p><strong>Application = Domain × Context → Resolution</strong></p>
</blockquote>
<p>In this vision, <strong>an application is not an object</strong>, but an <strong>event</strong>: the act of applying structured domain logic to a real-world context in order to resolve an intention.<br>
This architecture treats both <strong>domain</strong> and <strong>context</strong> as first-class citizens, separated in design, inseparable in execution.</p>
<h2 id="stone-js-the-runtime-context-for-your-domain" tabindex="-1"><a class="header-anchor" href="#stone-js-the-runtime-context-for-your-domain"><span>Stone.js: The Runtime Context for Your Domain</span></a></h2>
<p>Stone.js is not just a framework, it <em>is the context</em> itself.<br>
It implements the Continuum Architecture by taking full responsibility for the <strong>contextual layers</strong> of your system:</p>
<ul>
<li><strong>External context</strong>: platform, environment, runtime, triggers</li>
<li><strong>Internal context</strong>: context setup, adapter orchestration, service lifecycle</li>
<li><strong>Integration &amp; initialization dimensions</strong>: the flow from raw input to domain execution</li>
</ul>
<p>Your job? <strong>Write your domain logic.</strong><br>
Stone.js will handle how and where it runs.</p>
<blockquote>
<p>Instead of adapting your code to your environment,<br>
you let the environment express itself to your domain, through Stone.js.</p>
</blockquote>
<p>Stone.js is the context that applies itself to the domain, not the other way around.</p>
<Mermaid id="mermaid-45" code="eJyN0D1vgzAQBuA9v+LkiC1IQU0XhkrhI1Jnqi4ogwNHONWxkTEKDeK/15gMDJWCF0vvPXfy2fMGkmRCGJip8YYsBHbhLbIdzME318QvAltbGTYArFLSZPRwMjg0PdtNqSCJsRJKT/G2fHs/7PdsM46j520qoe5FzbWBr8RagGOeoekaSOiGsiUlz+D7HxDlkeiw0STN2bnIxXH+KQ1eNTdWLnociWcSOCMn8cwDV0hsToa4oMe/7cmsgjztseiciO1+2D9fkMxj0vzUyWIqc7Ec4XmQmV+7+xUqpYELAVKV2Lre1lYQjvbW6gf9O5WmDu2H7SoSItye3FnIaLWM18tgNU3Wy/VD0xfyDx8Hxl8="></Mermaid><h2 id="dimensions-of-context-in-stone-js" tabindex="-1"><a class="header-anchor" href="#dimensions-of-context-in-stone-js"><span>Dimensions of Context in Stone.js</span></a></h2>
<p>Continuum Architecture defines three contextual dimensions, all implemented in Stone.js:</p>
<ol>
<li>
<p><strong>Setup</strong><br>
Managed by <code v-pre>IBlueprintBuilder</code>. It builds a full context <a href="./blueprint">blueprint</a> at runtime by introspecting your modules, dependencies, through <a href="./blueprint#dynamic-configuration">middleware</a>.</p>
</li>
<li>
<p><strong>Integration</strong><br>
Handled by <code v-pre>IAdapter</code>. Specific to each environment (Browser, Server, FaaS, CLI, etc.), adapters capture <strong>causes</strong> (requests, commands, events) and transform them into <strong>intentions</strong> (<a href="../essentials//incoming-event"><code v-pre>IncomingEvent</code></a>).<br>
These are passed to the system and ultimately produce <strong>response</strong> (<a href="../essentials/outgoing-response"><code v-pre>OutgoingResponse</code></a>), which the adapter sends back as <strong>effects</strong>. <a href="./adapter">Middleware</a> can also participate in this transformation pipeline.</p>
</li>
<li>
<p><strong>Initialization</strong><br>
This is where the <strong>Kernel</strong> applies the <strong>Execution Context (<a href="./container"><code v-pre>Container</code></a>)</strong> to the <strong>domain</strong> according to the intention (<code v-pre>IncomingEvent</code>).
<a href="./middleware">Middleware</a> can intercept intentions <strong>before they reach the domain</strong>, modify them, validate them, or enrich them.</p>
</li>
</ol>
<h2 id="functional-dimension-your-domain-your-way" tabindex="-1"><a class="header-anchor" href="#functional-dimension-your-domain-your-way"><span>Functional Dimension: Your Domain, Your Way</span></a></h2>
<p>The <strong>fourth dimension</strong>, the <strong>functional one</strong>, belongs to you, the developer.</p>
<p>You define your business logic however you like, using the architecture, patterns, or libraries you trust.
Stone.js doesn’t impose any structure, language(<code v-pre>JavaScript</code>/<code v-pre>TypeScript</code>), or paradigm. It simply ensures your domain logic is triggered at <strong>the right time, with the right context, and receives the right data</strong>.</p>
<p>Because <strong>the problem is not the domain, the problem is the context.</strong> And Stone.js solves it for you.</p>
<h2 id="why-it-matters-technically" tabindex="-1"><a class="header-anchor" href="#why-it-matters-technically"><span>Why It Matters Technically</span></a></h2>
<p>This becomes especially relevant when you face common technical dilemmas:</p>
<ul>
<li>You want to run the same app <strong>locally</strong>, on a <strong>server</strong>, in <strong>serverless (FaaS)</strong>, or at the <strong>edge</strong>, without changing the code.</li>
<li>You need to <strong>learn and wire different frameworks specific</strong> to Node HTTP, React, Vue, etc. just to deliver the same business logic on frontend and backend.</li>
<li>You're constantly adapting to different runtimes and APIs when all you're trying to do is apply your domain logic.</li>
</ul>
<p><strong>Stone.js abstracts that away.</strong></p>
<p>Use whatever UI you like. Deploy wherever you want. Write your domain logic once, and Stone.js will apply the context dynamically at runtime.</p>
<blockquote>
<p>Just write the app you mean.<br>
Let Stone.js figure out how and where to run it.</p>
</blockquote>
<h2 id="want-to-go-deeper" tabindex="-1"><a class="header-anchor" href="#want-to-go-deeper"><span>Want to Go Deeper?</span></a></h2>
<p>Continuum Architecture is not just a technical trick, it’s a mindset.<br>
If you want to explore the philosophy behind it and see how it redefines what we call “an application,”
read the full <a href="https://evens-stone.github.io/continuum-manifesto/manifesto" target="_blank" rel="noopener noreferrer">Continuum Architecture Manifesto</a>.</p>
</div></template>


