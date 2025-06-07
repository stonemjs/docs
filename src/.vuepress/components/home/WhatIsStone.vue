<template>
  <section class="what-is-stone">
    <div class="continuum-bg" aria-hidden="true">
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          v-for="(color, index) in colors"
          :key="index"
          :d="`M0,${index * 40} C480,${index * 60} 960,${index * 20} 1440,${index * 40} L1440,320 L0,320 Z`"
          :fill="color"
          fill-opacity="0.05"
        />
      </svg>
    </div>

    <div class="container">
      <h2 class="section-title">What is Stone.js?</h2>
      <p class="section-subtitle">
        Stone.js is a future-ready framework designed for full-context development: <br> cloud, serverless, browser, and beyond.
      </p>

      <div class="card-grid">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-card"
        >
          <component :is="feature.icon" class="icon" />
          <h3>{{ feature.title }}</h3>
          <p v-html="feature.desc"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Infinity, Cog, Plug, Terminal, CloudLightning } from 'lucide-vue-next'

const features = [
  { icon: Infinity, title: 'Continuum Architecture', desc: 'One mindset across backend, frontend, serverless, and browser. Learn once, build anything.' },
  { icon: Cog, title: 'Universal by Design', desc: 'Run on Node.js, AWS Lambda, Browser, or anywhere, with zero friction.' },
  { icon: Cog, title: 'Modular & Compact', desc: 'No node_modules. One artifact. Pure ESM. Built for performance and portability.' },
  { icon: Plug, title: 'Adaptive Blueprint API', desc: 'Configure apps declaratively or imperatively. No boilerplate. Full control.' },
  { icon: Terminal, title: 'First-Class CLI', desc: 'Create, build, test and deploy with one simple and powerful command line.' },
  { icon: CloudLightning, title: 'Cloud Native Ready', desc: 'Built with modern development in mind: SSR, FaaS, edge computing, HMR, lazy loading, and more.' }
]

const colors = [
  '#d35400', '#f39c12', '#2980b9', '#8e44ad', '#16a085'
]
</script>

<style scoped>
.what-is-stone {
  position: relative;
  padding: 6rem 2rem;
  background-color: #fff;
  overflow: hidden;
}

.continuum-bg {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  display: none;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 3.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  text-align: center;
  border: 0 none;
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

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  text-align: center;
  transition: transform 0.2s ease-in-out;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.icon {
  width: 2rem;
  height: 2rem;
  color: #d35400;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #7f8c8d;
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
