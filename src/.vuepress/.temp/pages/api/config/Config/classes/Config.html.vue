<template><div><p><RouteLink to="/api/config/"><strong>Config Documentation v0.0.0</strong></RouteLink> • <strong>Docs</strong></p>
<hr>
<p><RouteLink to="/api/config/modules.html">Config Documentation v0.0.0</RouteLink> / <RouteLink to="/api/config/Config/">Config</RouteLink> / Config</p>
<h1 id="class-config-t" tabindex="-1"><a class="header-anchor" href="#class-config-t"><span>Class: Config&lt;T&gt;</span></a></h1>
<p>Class representing a Config.</p>
<h2 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>Author</span></a></h2>
<p>Mr. Stone <a href="mailto:evensstone@gmail.com" target="_blank" rel="noopener noreferrer">evensstone@gmail.com</a></p>
<h2 id="extends" tabindex="-1"><a class="header-anchor" href="#extends"><span>Extends</span></a></h2>
<ul>
<li><RouteLink to="/api/config/Proxiable/classes/Proxiable.html"><code v-pre>Proxiable</code></RouteLink></li>
</ul>
<h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h2>
<p>• <strong>T</strong> = <code v-pre>any</code></p>
<h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2>
<h3 id="new-config" tabindex="-1"><a class="header-anchor" href="#new-config"><span>new Config()</span></a></h3>
<blockquote>
<p><strong>new Config</strong>&lt;<code v-pre>T</code>&gt;(<code v-pre>items</code>): <RouteLink to="/api/config/Config/classes/Config.html"><code v-pre>Config</code></RouteLink>&lt;<code v-pre>T</code>&gt;</p>
</blockquote>
<p>Create a Config.</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4>
<p>• <strong>items</strong>: <RouteLink to="/api/config/definitions/type-aliases/ConfigItems.html"><code v-pre>ConfigItems</code></RouteLink>&lt;<code v-pre>T</code>&gt; = <code v-pre>{}</code></p>
<p>Initial configuration items.</p>
<h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h4>
<p><RouteLink to="/api/config/Config/classes/Config.html"><code v-pre>Config</code></RouteLink>&lt;<code v-pre>T</code>&gt;</p>
<h4 id="overrides" tabindex="-1"><a class="header-anchor" href="#overrides"><span>Overrides</span></a></h4>
<p><RouteLink to="/api/config/Proxiable/classes/Proxiable.html"><code v-pre>Proxiable</code></RouteLink>.<RouteLink to="/api/config/Proxiable/classes/Proxiable.html#constructors"><code v-pre>constructor</code></RouteLink></p>
<h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L30" target="_blank" rel="noopener noreferrer">Config.ts:30</a></p>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2>
<h3 id="all" tabindex="-1"><a class="header-anchor" href="#all"><span>all()</span></a></h3>
<blockquote>
<p><strong>all</strong>(): <RouteLink to="/api/config/definitions/type-aliases/ConfigItems.html"><code v-pre>ConfigItems</code></RouteLink>&lt;<code v-pre>T</code>&gt;</p>
</blockquote>
<p>Get all of the configuration items as a literal object.</p>
<h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4>
<p><RouteLink to="/api/config/definitions/type-aliases/ConfigItems.html"><code v-pre>ConfigItems</code></RouteLink>&lt;<code v-pre>T</code>&gt;</p>
<p>All configuration items.</p>
<h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L129" target="_blank" rel="noopener noreferrer">Config.ts:129</a></p>
<hr>
<h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear"><span>clear()</span></a></h3>
<blockquote>
<p><strong>clear</strong>(): <code v-pre>this</code></p>
</blockquote>
<p>Clear all of the configuration items.</p>
<h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The current Config instance.</p>
<h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L138" target="_blank" rel="noopener noreferrer">Config.ts:138</a></p>
<hr>
<h3 id="defaults" tabindex="-1"><a class="header-anchor" href="#defaults"><span>defaults()</span></a></h3>
<blockquote>
<p><strong>defaults</strong>&lt;<code v-pre>R</code>&gt;(<code v-pre>key</code>, <code v-pre>value</code>): <code v-pre>this</code></p>
</blockquote>
<p>Allows providers to define the default config for a module.</p>
<h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1"><span>Type Parameters</span></a></h4>
<p>• <strong>R</strong></p>
<h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4>
<p>• <strong>key</strong>: <code v-pre>string</code> | <code v-pre>string</code>[] | <RouteLink to="/api/config/definitions/type-aliases/ConfigItems.html"><code v-pre>ConfigItems</code></RouteLink>&lt;<code v-pre>R</code>&gt;</p>
<p>The key or keys to set as defaults.</p>
<p>• <strong>value</strong>: <code v-pre>R</code> | <RouteLink to="/api/config/definitions/type-aliases/ConfigItems.html"><code v-pre>ConfigItems</code></RouteLink>&lt;<code v-pre>R</code>&gt;</p>
<p>The value to set as default.</p>
<h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The current Config instance.</p>
<h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L116" target="_blank" rel="noopener noreferrer">Config.ts:116</a></p>
<hr>
<h3 id="firstmatch" tabindex="-1"><a class="header-anchor" href="#firstmatch"><span>firstMatch()</span></a></h3>
<blockquote>
<p><strong>firstMatch</strong>&lt;<code v-pre>R</code>&gt;(<code v-pre>keys</code>, <code v-pre>fallback</code>): <code v-pre>R</code></p>
</blockquote>
<p>Get the first match configuration value.</p>
<h4 id="type-parameters-2" tabindex="-1"><a class="header-anchor" href="#type-parameters-2"><span>Type Parameters</span></a></h4>
<p>• <strong>R</strong></p>
<h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4>
<p>• <strong>keys</strong>: <code v-pre>string</code>[]</p>
<p>An array of keys to check.</p>
<p>• <strong>fallback</strong>: <code v-pre>null</code> | <code v-pre>R</code> = <code v-pre>null</code></p>
<p>The fallback value if no key matches.</p>
<h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4"><span>Returns</span></a></h4>
<p><code v-pre>R</code></p>
<p>The first matching configuration value.</p>
<h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L66" target="_blank" rel="noopener noreferrer">Config.ts:66</a></p>
<hr>
<h3 id="get" tabindex="-1"><a class="header-anchor" href="#get"><span>get()</span></a></h3>
<blockquote>
<p><strong>get</strong>&lt;<code v-pre>R</code>&gt;(<code v-pre>key</code>, <code v-pre>fallback</code>): <code v-pre>R</code> | <RouteLink to="/api/config/definitions/type-aliases/ConfigItems.html"><code v-pre>ConfigItems</code></RouteLink>&lt;<code v-pre>R</code>&gt;</p>
</blockquote>
<p>Get the specified configuration value.</p>
<h4 id="type-parameters-3" tabindex="-1"><a class="header-anchor" href="#type-parameters-3"><span>Type Parameters</span></a></h4>
<p>• <strong>R</strong></p>
<h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3"><span>Parameters</span></a></h4>
<p>• <strong>key</strong>: <code v-pre>string</code> | <code v-pre>string</code>[] | <RouteLink to="/api/config/definitions/type-aliases/ConfigItems.html"><code v-pre>ConfigItems</code></RouteLink>&lt;<code v-pre>R</code>&gt;</p>
<p>The key or keys to retrieve from the configuration.</p>
<p>• <strong>fallback</strong>: <code v-pre>null</code> | <code v-pre>R</code> = <code v-pre>null</code></p>
<p>The fallback value if the key does not exist.</p>
<h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5"><span>Returns</span></a></h4>
<p><code v-pre>R</code> | <RouteLink to="/api/config/definitions/type-aliases/ConfigItems.html"><code v-pre>ConfigItems</code></RouteLink>&lt;<code v-pre>R</code>&gt;</p>
<p>The configuration value.</p>
<h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L51" target="_blank" rel="noopener noreferrer">Config.ts:51</a></p>
<hr>
<h3 id="getmany" tabindex="-1"><a class="header-anchor" href="#getmany"><span>getMany()</span></a></h3>
<blockquote>
<p><strong>getMany</strong>&lt;<code v-pre>R</code>&gt;(<code v-pre>keys</code>): <RouteLink to="/api/config/definitions/type-aliases/ConfigItems.html"><code v-pre>ConfigItems</code></RouteLink>&lt;<code v-pre>R</code>&gt;</p>
</blockquote>
<p>Get many configuration values.</p>
<h4 id="type-parameters-4" tabindex="-1"><a class="header-anchor" href="#type-parameters-4"><span>Type Parameters</span></a></h4>
<p>• <strong>R</strong></p>
<h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4"><span>Parameters</span></a></h4>
<p>• <strong>keys</strong>: <code v-pre>string</code>[] | <RouteLink to="/api/config/definitions/type-aliases/ConfigItems.html"><code v-pre>ConfigItems</code></RouteLink>&lt;<code v-pre>R</code>&gt;</p>
<p>The keys to retrieve from the configuration.</p>
<h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6"><span>Returns</span></a></h4>
<p><RouteLink to="/api/config/definitions/type-aliases/ConfigItems.html"><code v-pre>ConfigItems</code></RouteLink>&lt;<code v-pre>R</code>&gt;</p>
<p>An object containing the requested configuration values.</p>
<h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L77" target="_blank" rel="noopener noreferrer">Config.ts:77</a></p>
<hr>
<h3 id="has" tabindex="-1"><a class="header-anchor" href="#has"><span>has()</span></a></h3>
<blockquote>
<p><strong>has</strong>(<code v-pre>key</code>): <code v-pre>boolean</code></p>
</blockquote>
<p>Determine if the given configuration value exists.</p>
<h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5"><span>Parameters</span></a></h4>
<p>• <strong>key</strong>: <code v-pre>string</code> | <code v-pre>string</code>[]</p>
<p>The key or keys to check.</p>
<h4 id="returns-7" tabindex="-1"><a class="header-anchor" href="#returns-7"><span>Returns</span></a></h4>
<p><code v-pre>boolean</code></p>
<p>True if the key exists, false otherwise.</p>
<h4 id="defined-in-7" tabindex="-1"><a class="header-anchor" href="#defined-in-7"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L88" target="_blank" rel="noopener noreferrer">Config.ts:88</a></p>
<hr>
<h3 id="set" tabindex="-1"><a class="header-anchor" href="#set"><span>set()</span></a></h3>
<blockquote>
<p><strong>set</strong>&lt;<code v-pre>R</code>&gt;(<code v-pre>key</code>, <code v-pre>value</code>): <code v-pre>this</code></p>
</blockquote>
<p>Set a given configuration value.</p>
<h4 id="type-parameters-5" tabindex="-1"><a class="header-anchor" href="#type-parameters-5"><span>Type Parameters</span></a></h4>
<p>• <strong>R</strong></p>
<h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6"><span>Parameters</span></a></h4>
<p>• <strong>key</strong>: <code v-pre>string</code> | <code v-pre>string</code>[] | <RouteLink to="/api/config/definitions/type-aliases/ConfigItems.html"><code v-pre>ConfigItems</code></RouteLink>&lt;<code v-pre>R</code>&gt;</p>
<p>The key or keys to set in the configuration.</p>
<p>• <strong>value</strong>: <code v-pre>null</code> | <code v-pre>R</code> = <code v-pre>null</code></p>
<p>The value to set.</p>
<h4 id="returns-8" tabindex="-1"><a class="header-anchor" href="#returns-8"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The current Config instance.</p>
<h4 id="defined-in-8" tabindex="-1"><a class="header-anchor" href="#defined-in-8"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L99" target="_blank" rel="noopener noreferrer">Config.ts:99</a></p>
<hr>
<h3 id="create" tabindex="-1"><a class="header-anchor" href="#create"><span>create()</span></a></h3>
<blockquote>
<p><code v-pre>static</code> <strong>create</strong>&lt;<code v-pre>T</code>&gt;(<code v-pre>items</code>): <RouteLink to="/api/config/Config/classes/Config.html"><code v-pre>Config</code></RouteLink>&lt;<code v-pre>T</code>&gt;</p>
</blockquote>
<p>Create a Config.</p>
<h4 id="type-parameters-6" tabindex="-1"><a class="header-anchor" href="#type-parameters-6"><span>Type Parameters</span></a></h4>
<p>• <strong>T</strong></p>
<h4 id="parameters-7" tabindex="-1"><a class="header-anchor" href="#parameters-7"><span>Parameters</span></a></h4>
<p>• <strong>items</strong>: <RouteLink to="/api/config/definitions/type-aliases/ConfigItems.html"><code v-pre>ConfigItems</code></RouteLink>&lt;<code v-pre>T</code>&gt; = <code v-pre>{}</code></p>
<p>Initial configuration items.</p>
<h4 id="returns-9" tabindex="-1"><a class="header-anchor" href="#returns-9"><span>Returns</span></a></h4>
<p><RouteLink to="/api/config/Config/classes/Config.html"><code v-pre>Config</code></RouteLink>&lt;<code v-pre>T</code>&gt;</p>
<p>A new Config instance.</p>
<h4 id="defined-in-9" tabindex="-1"><a class="header-anchor" href="#defined-in-9"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/config/blob/8247fd841f2fbb89c217bf9411d5c108c3731ae0/src/Config.ts#L21" target="_blank" rel="noopener noreferrer">Config.ts:21</a></p>
</div></template>


