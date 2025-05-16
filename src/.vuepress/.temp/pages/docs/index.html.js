import comp from "/Users/evenspierre/Projects/StoneJS/docs/src/.vuepress/.temp/pages/docs/index.html.vue"
const data = JSON.parse("{\"path\":\"/docs/\",\"title\":\"Introduction\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Introduction\",\"shortTitle\":\"Documentation\",\"description\":\"Stone.js is a bold, next-generation JavaScript and TypeScript framework, fully modern, proudly cloud-native friendly, and designed to help you build scalable systems that run sm...\"},\"readingTime\":{\"minutes\":4.12,\"words\":1235},\"filePathRelative\":\"docs/README.md\",\"autoDesc\":true}")
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
