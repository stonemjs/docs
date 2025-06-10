import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
  enhance({ router }) {
    if (typeof window !== 'undefined') {
      router.afterEach((to) => {
        if ('gtag' in window && typeof window.gtag === 'function') {
          window.gtag('event', 'page_view', {
            page_path: to.fullPath
          })
        }
      })

      // Load your custom script
      const script = document.createElement('script')
      script.src = '/assets/js/google.features.js'
      script.async = true
      document.head.appendChild(script)
    }
  },
})