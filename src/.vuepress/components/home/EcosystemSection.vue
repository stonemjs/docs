<template>
  <section class="ecosystem-tooling">
    <div class="ecosystem-bg" aria-hidden="true">
      <svg viewBox="0 0 1440 700" preserveAspectRatio="none">
        <path
          d="M0,160 C360,280 1080,40 1440,160 L1440,700 L0,700 Z"
          fill="#d35400"
          fill-opacity="0.05"
        />
      </svg>
    </div>

    <div class="container">
      <h2 class="section-title">Ecosystem & Tooling</h2>
      <p class="section-subtitle">
        Everything you need to build modern, scalable, and flexible applications.
      </p>

      <div class="tooling-grid">
        <div class="tool" v-for="(tool, index) in tools" :key="index">
          <component :is="tool.icon" class="tool-icon" />
          <div>
            <h3>{{ tool.title }}</h3>
            <p>{{ tool.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Terminal, Wrench, Plug, Cloud, FileText, Rocket, Package } from 'lucide-vue-next';

const tools = [
  { icon: Terminal, title: 'Stone CLI', desc: 'Generate, build, and test with ease using the built-in CLI.' },
  { icon: Wrench, title: 'Plugin System', desc: 'Extend core functionalities without rewriting code.' },
  { icon: Plug, title: 'Adapters', desc: 'Run your app in the browser, Node, AWS Lambda, and more.' },
  { icon: Cloud, title: 'Cloud Native Ready', desc: 'Optimized for serverless, edge, and container platforms.' },
  { icon: FileText, title: 'Typed Config & Env', desc: 'Manage configuration using blueprint and typed env helpers.' },
  { icon: Rocket, title: 'Zero-config Dev Experience', desc: 'Start coding right away. No config files required.' },
  { icon: Package, title: 'Single Artifact Builds', desc: 'Build compact deployable bundles without node_modules.' }
]
</script>

<style scoped>
.ecosystem-tooling {
  overflow: hidden;
  position: relative;
  padding: 6rem 2rem;
  background-color: #fdfdfd;
}

.ecosystem-bg {
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  text-align: center;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #7f8c8d;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.tooling-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  align-items: start;
}

.tool {
  display: flex;
  gap: 1rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  transition: all 0.2s ease-in-out;
  align-items: center;
}

.tool:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.tool-icon {
  width: 2rem;
  height: 2rem;
  color: #d35400;
  flex-shrink: 0;
}

.tool h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #2c3e50;
}

.tool p {
  margin: 0.25rem 0 0;
  color: #7f8c8d;
  font-size: 0.9rem;
}
</style>
