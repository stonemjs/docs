import comp from "/Users/evenspierre/Projects/StoneJS/docs/src/.vuepress/.temp/pages/docs/getting-started/index.html.vue"
const data = JSON.parse("{\"path\":\"/docs/getting-started/\",\"title\":\"Getting Started\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Getting Started\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Getting Started\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://stonejs.com/docs/getting-started/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Stone.js\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Getting Started\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
