import comp from "/Users/evenspierre/Projects/StoneJS/docs/src/.vuepress/.temp/pages/docs/essentials/index.html.vue"
const data = JSON.parse("{\"path\":\"/docs/essentials/\",\"title\":\"Essentials\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Essentials\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Essentials\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://stonejs.com/docs/essentials/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Stone.js\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Essentials\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
