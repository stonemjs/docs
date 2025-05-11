<template><div><p><RouteLink to="/api/env/"><strong>Env Documentation v0.0.2</strong></RouteLink> • <strong>Docs</strong></p>
<hr>
<p><RouteLink to="/api/env/modules.html">Env Documentation v0.0.2</RouteLink> / <RouteLink to="/api/env/Env/">Env</RouteLink> / getEnv</p>
<h1 id="function-getenv" tabindex="-1"><a class="header-anchor" href="#function-getenv"><span>Function: getEnv()</span></a></h1>
<blockquote>
<p><strong>getEnv</strong>(<code v-pre>key</code>): <code v-pre>string</code> | <code v-pre>undefined</code></p>
</blockquote>
<p>Get system env variables.
For Node.js environment get variables from process.env at runtime.
For Browser environment get variables from .env at buildtime.</p>
<h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2>
<p>• <strong>key</strong>: <code v-pre>string</code></p>
<p>The environment variable key.</p>
<h2 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h2>
<p><code v-pre>string</code> | <code v-pre>undefined</code></p>
<p>The value of the environment variable.</p>
<h2 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in"><span>Defined in</span></a></h2>
<p><a href="https://github.com/stonemjs/env/blob/695c924d11add6d23337945b2dffa763b18be5aa/src/Env.ts#L325" target="_blank" rel="noopener noreferrer">Env.ts:325</a></p>
</div></template>


