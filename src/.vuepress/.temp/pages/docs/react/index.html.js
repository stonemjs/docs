import comp from "/Users/evenspierre/Projects/StoneJS/docs/src/.vuepress/.temp/pages/docs/react/index.html.vue"
const data = JSON.parse("{\"path\":\"/docs/react/\",\"title\":\"React\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"React\",\"description\":\"Integrating React with Stone.js\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"React\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr. Stone\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://stonejs.com/docs/react/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Stone.js\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"React\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Integrating React with Stone.js\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"readingTime\":{\"minutes\":4.81,\"words\":1442},\"filePathRelative\":\"docs/react/README.md\"}")
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
