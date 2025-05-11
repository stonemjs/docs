import comp from "/Users/evenspierre/Projects/StoneJS/docs/src/.vuepress/.temp/pages/docs/deeper/index.html.vue"
const data = JSON.parse("{\"path\":\"/docs/deeper/\",\"title\":\"Digging Deeper\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Digging Deeper\",\"index\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Digging Deeper\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr. Stone\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://stonejs.com/docs/deeper/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Stone.js\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Digging Deeper\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"readingTime\":{\"minutes\":0.02,\"words\":7},\"filePathRelative\":\"docs/deeper/README.md\"}")
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
