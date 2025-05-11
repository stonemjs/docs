<template><div><p><RouteLink to="/api/env/"><strong>Env Documentation v0.0.2</strong></RouteLink> • <strong>Docs</strong></p>
<hr>
<p><RouteLink to="/api/env/modules.html">Env Documentation v0.0.2</RouteLink> / <RouteLink to="/api/env/Env/">Env</RouteLink> / getEnum</p>
<h1 id="function-getenum" tabindex="-1"><a class="header-anchor" href="#function-getenum"><span>Function: getEnum()</span></a></h1>
<blockquote>
<p><strong>getEnum</strong>(<code v-pre>key</code>, <code v-pre>enums</code>, <code v-pre>defaultValue</code>?, <code v-pre>options</code>?): <code v-pre>string</code></p>
</blockquote>
<p>Get the specified env variable value as an enum.</p>
<h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2>
<p>• <strong>key</strong>: <code v-pre>string</code></p>
<p>The environment variable key.</p>
<p>• <strong>enums</strong>: <RouteLink to="/api/env/declarations/interfaces/Options.html"><code v-pre>Options</code></RouteLink> | <code v-pre>string</code>[] = <code v-pre>[]</code></p>
<p>Array of possible enum values or options.</p>
<p>• <strong>defaultValue?</strong>: <code v-pre>string</code></p>
<p>Default value if not set.</p>
<p>• <strong>options?</strong>: <RouteLink to="/api/env/declarations/interfaces/Options.html"><code v-pre>Options</code></RouteLink></p>
<p>Options for retrieving the value.</p>
<h2 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h2>
<p><code v-pre>string</code></p>
<p>The value as an enum.</p>
<h2 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in"><span>Defined in</span></a></h2>
<p><a href="https://github.com/stonemjs/env/blob/695c924d11add6d23337945b2dffa763b18be5aa/src/Env.ts#L192" target="_blank" rel="noopener noreferrer">Env.ts:192</a></p>
</div></template>


