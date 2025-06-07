<template>
  <section class="continuum-section">
    <div class="container">
      <h2 class="section-title">Continuum in Action</h2>
      <p class="section-subtitle">
        Stone.js isn't built on layers, it's built on a flow — from raw events to rendered experiences. That flow is called the Continuum.
      </p>

      <div class="flow-line">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flow-step"
        >
          <component :is="step.icon" class="icon" />
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
          <div v-if="index < steps.length - 1" class="arrow">→</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Server, Settings, Share2, MonitorPlay } from 'lucide-vue-next'

const steps = [
  {
    title: 'Integration',
    description: 'Convert external requests into contextual events (from Lambda, Node, or browser).',
    icon: Server
  },
  {
    title: 'Initialization',
    description: 'Register configs, services, plugins — prepare your app for logic.',
    icon: Settings
  },
  {
    title: 'Functional',
    description: 'Handle intentions using event handlers and return responses.',
    icon: Share2
  },
  {
    title: 'View',
    description: 'Render your response in React or Vue — same logic, different surface.',
    icon: MonitorPlay
  }
]
</script>

<style scoped>
.continuum-section {
  padding: 6rem 2rem;
  background: linear-gradient(to right, #fefefe, #f8f8f8);
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.flow-line {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: relative;
}

.flow-step {
  max-width: 240px;
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  position: relative;
}

.flow-step .icon {
  width: 40px;
  height: 40px;
  margin-bottom: 1rem;
  color: #d35400;
}

.arrow {
  font-size: 2rem;
  color: #ccc;
  margin: 0 1rem;
  font-weight: bold;
}
</style>
