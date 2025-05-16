<template><div><p>To master Stone.js, you need more than syntax, you need to understand the engine.<br>
This section unveils the <strong>core concepts</strong> behind the framework: how it’s built, how it runs, and why everything in Stone.js is structured around <strong>context and continuity</strong>.</p>
<p>Stone.js is built on the <a href="./continuum"><strong>Continuum Architecture</strong></a>, which means every piece of your system, from configuration to event handling, flows in sync across environments. But before anything runs, it must be built.</p>
<h2 id="build-phase" tabindex="-1"><a class="header-anchor" href="#build-phase"><span>Build Phase</span></a></h2>
<p>Stone.js embraces the <strong>latest ECMAScript features</strong>, including decorators, top-level <code v-pre>await</code>, and more. To unlock these features while ensuring compatibility across platforms, the build process is a key part of the workflow.</p>
<p>Every Stone.js project goes through a build step, not because it's optional, but because it uses the <strong>latest ECMAScript features</strong>. The framework uses <strong>Rollup</strong> and <strong>Babel</strong> to compile backend code, and <strong>Vite</strong> and <strong>Babel</strong> to bundle frontend code. These tools are preconfigured but fully exportable if you need customization.</p>
<p>In dev mode, use <code v-pre>npm run dev</code> to iterate with live rebuilds.<br>
For production, run <code v-pre>npm run build</code> to get a single artifact ready to deploy, to Node.js, a browser, or even a Function-as-a-Service like AWS Lambda.</p>
<p>Everything needed to configure, bootstrap, and launch the app is generated or configurable, and Stone.js gives you full control when you need it, with built-in safety when you don’t.</p>
<h2 id="run-phase-at-a-glance" tabindex="-1"><a class="header-anchor" href="#run-phase-at-a-glance"><span>Run Phase (At a Glance)</span></a></h2>
<p>Once built, the runtime takes over. Stone.js applications run through a set of coordinated layers:
<a href="./adapter">adapters</a>, <a href="./middleware">middleware</a>, <a href="./container">service containers</a>, <a href="../essentials/event-handler">handlers</a>, and <a href="./lifecycle">lifecycle hooks</a>, all bound together by the <a href="./continuum">Continuum</a>.</p>
<p>The runtime is where context becomes king, and Stone.js makes sure your system can handle it dynamically, intelligently, and predictably.</p>
<p>Each runtime concept is explored in detail in the following sections. But first,
let’s understand what it means to run a system in <a href="./continuum"><strong>continuum</strong></a>.</p>
</div></template>


