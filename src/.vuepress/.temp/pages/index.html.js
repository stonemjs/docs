import comp from "/Users/evenspierre/Projects/StoneJS/docs/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/assets/image/moai_img_5.png\",\"heroText\":\"Stone.js\",\"tagline\":\"The next-generation agnostic micro framework that uses the Continuum Architecture to build Omniplex applications.\",\"actions\":[{\"text\":\"Getting started\",\"icon\":\"lightbulb\",\"link\":\"./docs/\",\"type\":\"primary\"},{\"text\":\"View on GitHub\",\"icon\":\"github\",\"link\":\"https://github.com/orgs/stonemjs/repositories\"}],\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Home\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://stonejs.com/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Stone.js\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Home\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"readingTime\":{\"minutes\":0.17,\"words\":52},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
