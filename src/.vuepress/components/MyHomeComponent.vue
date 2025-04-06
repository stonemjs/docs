<template>
  <section class="fixed-grid has-1-cols has-2-cols-desktop vp-feature app-section app-mt-8">
    <div class="grid">
      <div class="cell is-flex is-flex-direction-column is-justify-content-center">
        <div class="desktop-pr-6">
          <h2 class="vp-feature-header is-size-1 has-text-weight-bold">Create Once</h2>
          <h3 class="vp-feature-header is-size-2 mb-3 my-primary-color has-text-weight-semibold">From Nano To Macro Applications</h3>
          <p class="mb-5">
            Stone.js enables you to write your code once and scale effortlessly from nano services to complex macro applications. Its adaptive architecture and modular design ensure your project can grow seamlessly, providing a robust foundation for any size application.
          </p>
          <a
            href="./docs/"
            aria-label="Getting started"
            class="vp-link nav-link vp-hero-action primary nav-link vp-hero-action primary"
            @click.prevent="navigateToPage('./docs/')"
          >
            Let's dive in
          </a>
        </div>
      </div>
      <div class="cell has-text-left">
        <CodeTabs :tabs="['Nano', 'Micro']">
          <template v-slot:default="slotProps">
            <div v-bind="slotProps.attrs" :class="slotProps.value === 'Nano' ? 'active' : ''">
              <CodeBlock language="javascript" :code="code" ext="ts" />
            </div>
            <div v-bind="slotProps.attrs" :class="slotProps.value === 'Micro' ? 'active' : ''">
              <CodeBlock language="javascript" :code="macroCode" ext="ts" />
            </div>
          </template>
        </CodeTabs>
      </div>
    </div>
  </section>
  <section class="fixed-grid has-1-cols has-2-cols-desktop vp-feature app-section  app-mt-8">
    <div class="grid app-flex-direction-row-reverse">
      <div class="cell is-flex is-flex-direction-column is-justify-content-center">
        <div class="vp-features custom">
          <a v-for="(item, i) of platforms" :key="`item-${i}`" :href="item.href" class="vp-feature-item has-text-centered">
            <img :src="`/assets/image/providers/${item.icon}`" :alt="item.alt" />
          </a>
        </div>
      </div>
      <div class="cell app-row-start-1 is-flex is-flex-direction-column is-justify-content-center">
        <div class="desktop-pl-6">
          <h2 class="vp-feature-header is-size-1 has-text-weight-bold">Deploy Everywhere</h2>
          <h3 class="vp-feature-header is-size-2 mb-3 my-primary-color has-text-weight-semibold">Seamless Deployment Across Platforms</h3>
          <p class="mb-5">
            Stone.js empowers you to deploy your application effortlessly across any platform. Whether it's on-premises, cloud, or edge environments, its flexible architecture ensures smooth and consistent deployments, adapting to diverse infrastructure needs.
          </p>
          <a
            href="./docs/"
            aria-label="Getting started"
            class="vp-link nav-link vp-hero-action primary nav-link vp-hero-action primary"
            @click.prevent="navigateToPage('./docs/')"
          >
            Let's get started
          </a>
        </div>
      </div>
    </div>
  </section>
  <section class="vp-feature-wrapper app-mt-8">
    <div class="vp-feature">
      <img class="vp-feature-image" src="/assets/image/features.svg" alt="Features">
      <h2 class="vp-feature-header subtitle is-1 has-text-weight-bold">A Framework for Next-Gen Web Apps</h2>
      <p class="vp-feature-description">Stone.js empowers developers to build scalable, cost-effective web apps with adaptive configuration and seamless cloud integration.</p>
      <div class="vp-features app-features">
        <div class="vp-feature-item" v-for="(item, i) of features" :key="`item-${i}`">
          <FontIcon :icon="item.icon.replace('fa-', '')" size="16" />
          <h3 class="vp-feature-title mt-2">
            <span>{{ item.title }}</span>
          </h3>
          <p class="vp-feature-details" v-html="item.desc"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CodeTabs from '@CodeTabs'
import CodeBlock from '@CodeBlock'
import { nanoApp, macroApp } from '../examples/home-apps';

export default {
  computed: {
    code () {
      return nanoApp
    },
    macroCode () {
      return macroApp
    },
    features () {
      return [
        { icon: 'fa-cogs', title: 'Universal Framework', desc: 'Works seamlessly across different platforms and environments.' },
        { icon: 'fa-globe', title: 'Omnipresent App', desc: 'Build applications that run everywhere seamlessly.' },
        { icon: 'fa-layer-group', title: 'Continuum Architecture', desc: 'Scalable architecture for apps of any size.' },
        { icon: 'fa-cogs', title: 'Declarative and Imperative', desc: 'Supports both declarative and imperative programming styles.' },
        { icon: 'fa-cogs', title: 'Universal API', desc: 'Unified developpement API for both client and server.' },
        { icon: 'fa-cogs', title: 'Universal Routing', desc: 'Unified routing system for both client and server.' },
        { icon: 'fa-cogs', title: 'Adaptive Configuration', desc: 'Configuration that adapts to your needs.' },
        { icon: 'fa-code', title: 'TypeScript Support', desc: 'Built-in TypeScript support for type safety.' },
        { icon: 'fa-cloud', title: 'Cloud Native Friendly', desc: 'Designed for cloud environments and deployments.' },
        { icon: 'fa-sack-dollar', title: 'Edge Computing', desc: 'Efficiently utilizes resources to reduce latency.' },
        { icon: 'fa-cogs', title: 'Serverless Ready', desc: 'Optimized for serverless architectures and deployments.' },
        { icon: 'fa-cogs', title: 'Micro Frontend Ready', desc: 'Easily integrates with micro frontend architectures.' },
        { icon: 'fa-cogs', title: 'Microservices Ready', desc: 'Designed for microservices architecture.' },
        { icon: 'fa-suitcase', title: 'Portable and Compact', desc: 'No need for <code>node_modules</code> and <code>package.json</code>, fully portable.' },
        { icon: 'fa-cogs', title: 'Automatic Code Splitting', desc: 'Splits code automatically for better performance.' },
        { icon: 'fa-code-branch', title: 'Automatic Tree Shaking', desc: 'Removes unused code automatically.' },
        { icon: 'fa-cogs', title: 'Lazy loading', desc: 'Lazy load your modules out of the box.' },
        { icon: 'fa-bolt', title: 'Fast and Lightweight', desc: 'Minimal overhead for maximum performance.' },
        { icon: 'fa-cogs', title: 'HMR', desc: 'Hot module replacement or reloading.' },
        { icon: 'fa-plug', title: 'Plugin System', desc: 'Easily extendable with a plugin system.' },
        { icon: 'fa-random', title: 'Proxied and Destructuring DI', desc: 'Simplified dependency injection with proxy and destructuring.' },
        { icon: 'fa-puzzle-piece', title: 'Modular and Flexible', desc: 'Customize and extend functionalities easily.' },
        { icon: 'fa-terminal', title: 'Automation via CLI', desc: 'Automate tasks and streamline development.' },
        { icon: 'fa-sliders-h', title: 'Zero Configuration', desc: 'Get started quickly without complex setup.' },
        { icon: 'fa-cube', title: 'Pure ESM', desc: 'Utilizes ECMAScript Modules for modern development.' },
        { icon: 'fa-sync-alt', title: 'Evergreen', desc: 'Always up-to-date with the latest standards.' },
        { icon: 'fa-shield-alt', title: 'Security Focused', desc: 'Robust security measures to protect your applications.' },
        { icon: 'fa-tachometer-alt', title: 'High Performance', desc: 'Optimized for speed and efficiency.' },
        { icon: 'fa-users', title: 'Community and Support', desc: 'Active community and comprehensive support resources.' },
        { icon: 'fa-book', title: 'Extensive Documentation', desc: 'Detailed guides and documentation to help you get started and troubleshoot.' }
      ]
    },
    platforms () {
      return [
        { icon: 'node_js.png', alt: 'Node.js', href: 'https://nodejs.org' },
        { icon: 'aws.png', alt: 'AWS', href: 'https://nodejs.org' },
        { icon: 'azure.png', alt: 'Azure', href: 'https://nodejs.org' },
        { icon: 'google_cloud.png', alt: 'Google Cloud', href: 'https://nodejs.org' },
        { icon: 'browser.png', alt: 'Browser', href: 'https://nodejs.org' },
        { icon: 'aws_ec2.png', alt: 'AWS EC2', href: 'https://nodejs.org' },
        { icon: 'aws_lambda.png', alt: 'AWS Lambda', href: 'https://nodejs.org' },
        { icon: 'azure_functions.png', alt: 'Azure functions', href: 'https://nodejs.org' },
        { icon: 'google_cloud_functions.png', alt: 'Google Cloud Functions', href: 'https://nodejs.org' },
        { icon: 'cli.png', alt: 'cli', href: 'https://nodejs.org' },
      ]
    }
  },
  components: {
    CodeTabs,
    CodeBlock
  },
  methods: {
    navigateToPage(name) {
      this.$router.push(name)
    }
  }
}
</script>

<style lang="scss" scoped>
@use "bulma/sass/utilities/mixins";
@import 'bulma';

p {
  font-size: 1.125rem;
  line-height: 2rem;
}
.vp-link:hover {
  text-decoration: none;
}
.vp-feature-title {
  font-weight: 700;
  font-size: 1.3rem;
  margin: .25rem 0 .5rem;
}
.vp-feature-image {
  height: 10rem;
  margin: 0 auto;
}
.my-primary-color {
  color: var(--theme-color)!important;
}
.app-features {
  .vp-feature-item {
    border: 1px solid var(--border-color);
    flex-basis: 100%;
  }
  .vp-feature-details {
    line-height: 1.5rem;
  }
}
.vp-features.custom {
  border: 0 none;
  .vp-feature-item {
    padding: 0;
    margin: 1rem;
    height: 6.25rem;
    border-radius: .75rem;
    flex-basis: calc(50% - 3.2rem);
    &:hover {
      box-shadow: 0 0 0 0 transparent;
    }
    img {
      margin: 0;
      height: 6.25rem;
      max-width: 6.25rem;
      border-radius: .75rem;
    }
  }
}
.app-mt-8 {
  margin-top: 8rem!important;
}
.app-flex-direction-row-reverse {
  flex-direction: row-reverse;
}

@include mixins.tablet {
  .app-features {
    .vp-feature-item {
      flex-basis: calc(50% - 3.2rem);
    }
  }
  .vp-feature-description {
    padding-left: 5rem;
    padding-right: 5rem;
  }
  .vp-features.custom {
    .vp-feature-item {
      flex-basis: calc(25% - 3.2rem);
    }
  }
}

.app-row-start-1 {
  --bulma-grid-cell-row-start: 1;
}

@include mixins.desktop {
  .desktop-pr-6 {
    padding-right: 3rem !important;
  }
  .desktop-pl-6 {
    padding-left: 3rem !important;
  }
  .app-section {
    &,h2,h3 {
      text-align: left;
    }
  }
  .vp-feature-description {
    padding-left: 10rem;
    padding-right: 10rem;
  }
  .app-features {
    .vp-feature-item {
      flex-basis: calc(25% - 3.2rem);
    }
  }
  .app-flex-direction-row-reverse {
    flex-direction: row;
  }
  .app-row-start-1 {
    --bulma-grid-cell-row-start: 0;
  }
}
</style>