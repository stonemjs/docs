import comp from "/Users/evenspierre/Projects/StoneJS/docs2/src/.vuepress/.temp/pages/docs/react/page.html.vue"
const data = JSON.parse("{\"path\":\"/docs/react/page.html\",\"title\":\"Page\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Page\",\"description\":\"In most frameworks, a page is just a UI component mapped to a route. In Stone.js, a page is a context-aware unit of behavior that participates in the entire application lifecycl...\"},\"readingTime\":{\"minutes\":9.61,\"words\":2883},\"filePathRelative\":\"docs/react/page.md\",\"autoDesc\":true}")
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
