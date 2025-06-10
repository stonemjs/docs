<template>
  <section class="what-is-stone">
    <div class="continuum-bg" aria-hidden="true">
      <svg ref="svgRef" class="line" viewBox="0 0 1440 420" preserveAspectRatio="none" width="100%" height="100%">
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
import { Infinity, Cog, Plug, Terminal, CloudLightning, Layers, ShieldCheck } from 'lucide-vue-next'

const features = [
  { icon: Infinity, title: 'Continuum Architecture', desc: 'One mindset across backend, frontend, serverless, and browser. Learn once, build anything.' },
  { icon: Cog, title: 'Universal by Design', desc: 'Run on Node.js, AWS Lambda, Browser, or anywhere, with zero friction.' },
  { icon: Cog, title: 'Modular & Compact', desc: 'No node_modules. One artifact. Pure ESM. Built for performance and portability.' },
  { icon: Plug, title: 'Adaptive Blueprint API', desc: 'Configure apps declaratively or imperatively. No boilerplate. Full control.' },
  { icon: Terminal, title: 'First-Class CLI', desc: 'Create, build, test and deploy with one simple and powerful command line.' },
  { icon: CloudLightning, title: 'Cloud Native Ready', desc: 'Built with modern development in mind: SSR, FaaS, edge computing, HMR, lazy loading, and more.' },
  { icon: Layers, title: 'Multi-Dimensional Runtime', desc: 'Stone.js executes across multiple dimensions, functional, integration, and view, while preserving internal logic.' },
  { icon: ShieldCheck, title: 'Zero Context Leakage', desc: 'Strict separation of domain and context using adapters and blueprints. Your app stays clean, testable, and portable.' }
]

const colors = [
  '#d35400', '#f39c12', '#2980b9', '#fff', '#16a085', '#d35400', '#f39c12'
  // '#d35400', '#f39c12', '#2980b9', '#8e44ad', '#16a085', '#d35400', '#f39c12'
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
    const baseY = 60 + i * 40
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

  .continuum-bg {
    position: absolute;
    top: 32%;
    left: 0;
    width: 100vw;
    height: auto;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;

    .line {
      width: 100%;
      height: auto;
      display: block;
    }
  }
}
</style>
