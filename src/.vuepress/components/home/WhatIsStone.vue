<template>
  <section class="what-is-stone">
    <div class="continuum-bg" aria-hidden="true">
      <svg ref="svgRef" class="line" viewBox="0 0 1440 450" preserveAspectRatio="none" width="100%" height="100%">
          <path
            v-for="(curve, index) in animatedCurves"
            fill="none"
            :key="index"
            :d="curve.d"
            stroke-width="1"
            :stroke="curve.color"
            :opacity="curve.opacity"
            :style="{ transition: 'stroke 0.5s', mixBlendMode: 'multiply' }"
          />
      </svg>
    </div>

    <div class="section-container">
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
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { Infinity, Cog, Plug, Terminal, Share2, LayoutTemplate, Puzzle } from 'lucide-vue-next'

const features = [
  { icon: Infinity, title: 'Continuum Architecture', desc: 'One mindset across backend, frontend, serverless, and browser. Learn once, build anything.' },
  { icon: Cog, title: 'Universal by Design', desc: 'Designed for the next generation of web development. Run on Node.js, AWS Lambda, Browser, or anywhere, adapt to any platform.' },
  { icon: Cog, title: 'Modular & Compact', desc: 'No <code>node_modules</code>. One artifact. Pure ESM. Built for performance and portability. Ship your app as a single file, with zero install-time dependencies.' },
  { icon: Plug, title: 'Declarative & Functional API', desc: 'Choose your style: class-based declarative or function-first programming, Stone.js supports both, natively.' },
  { icon: Share2, title: 'Universal Routing', desc: 'Define routes once, use them everywhere. Same routing logic for backend and frontend.' },
  { icon: LayoutTemplate, title: 'Frontend-Ready Plugins', desc: 'Use built-in support for React and Vue(soon) with full SSR and hydration, or plug in your own view engine.' },
  { icon: Puzzle, title: 'Pluggable & Extensible', desc: 'Add features through composable plugins. Build microservices, CLI apps, or SPAs without friction.' },
  { icon: Terminal, title: 'First-Class CLI', desc: 'Create, build, test and deploy with one simple and powerful command line.' },
]

const colors = [
  '#d35400', '#f39c12', '#2980b9', '#8e44ad', '#16a085', '#d35400', '#f39c12'
]

const lineCount = 7
const svgRef = ref(null)
const svgWidth = ref(1440)
const animatedCurves = ref([])

function updateSvgWidth() {
  if (svgRef.value) {
    svgWidth.value = svgRef.value.clientWidth
  }
}

function getCurvePath(y, amp, phase, width) {
  const step = width / 4

  const c1 = step + Math.sin(phase + y * 0.1) * amp
  const c2 = step * 2 + Math.cos(phase + y * 0.13) * amp
  const c3 = step * 3 + Math.sin(phase + y * 0.17) * amp

  return `M0,${y} C${c1},${y + amp} ${c2},${y - amp} ${c3},${y + amp} L${width},${y}`
}

let animationFrame
let t = 0

function animate() {
  t += 0.012
  animatedCurves.value = Array.from({ length: lineCount }).map((_, i) => {
    const baseY = 60 + i * 45
    const amp = 24 + Math.sin(t + i) * 8
    const phase = t * (0.7 + i * 0.13)
    return {
      d: getCurvePath(baseY, amp, phase, svgWidth.value + 100),
      color: colors[i % colors.length],
      opacity: 0.7 - i * 0.07
    }
  })
  animationFrame = requestAnimationFrame(animate)
}

onMounted(async () => {
  await nextTick()
  updateSvgWidth()
  window.addEventListener('resize', updateSvgWidth)
  animate()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame)
  window.removeEventListener('resize', updateSvgWidth)
})
</script>

<style scoped lang="scss">
.what-is-stone {
  overflow: hidden;
  position: relative;
  padding: 0rem 0 6rem;
  background-color: #fff;

  @media (max-width: hope-config.$tablet) {
    padding: 0rem 0 3rem;
  }

  .continuum-bg {
    left: 0;
    bottom: 10%;
    z-index: 0;
    display: none;
    width: 100vw;
    height: auto;
    overflow: hidden;
    position: absolute;
    pointer-events: none;

    @media (min-width: hope-config.$pc) {
      display: block;
    }

    .line {
      width: 100%;
      height: auto;
      display: block;
    }
  }
}
</style>
