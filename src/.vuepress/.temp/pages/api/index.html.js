import comp from "/Users/evenspierre/Projects/StoneJS/docs/src/.vuepress/.temp/pages/api/index.html.vue"
const data = JSON.parse("{\"path\":\"/api/\",\"title\":\"API\",\"lang\":\"en-US\",\"frontmatter\":{\"containerClass\":\"api-page\",\"home\":true,\"title\":\"API\",\"heroText\":false,\"tagline\":false,\"highlights\":[{\"header\":\"API Documentation\",\"description\":\"Stone.js is a modular framework designed for flexibility and scalability. This page serves as the central hub for accessing the API documentation of each module within Stone.js. Explore the links below to find detailed information for integrating and utilizing the powerful features of Stone.js in your applications.\",\"features\":[{\"title\":\"Core\",\"icon\":\"layer-group\",\"details\":\"Essential functionalities and base classes for Stone.js framework operations\",\"link\":\"./core\"},{\"title\":\"Service Container\",\"icon\":\"cube\",\"details\":\"Manages dependencies and services, enabling efficient service registration and retrieval\",\"link\":\"./service-container\"},{\"title\":\"Env\",\"icon\":\"leaf\",\"details\":\"Handles environment variables and configuration settings for various deployment environments\",\"link\":\"./env\"},{\"title\":\"Config\",\"icon\":\"sliders\",\"details\":\"Provides configuration management with easy-to-use APIs for setting and retrieving configurations\",\"link\":\"./config\"},{\"title\":\"Pipeline\",\"icon\":\"timeline\",\"details\":\"Implements middleware pipelines to process data seamlessly\",\"link\":\"./pipeline\"},{\"title\":\"HTTP Core\",\"icon\":\"network-wired\",\"details\":\"Core HTTP functionalities, including request handling and response generation\",\"link\":\"./http-core\"},{\"title\":\"Node Adapter\",\"icon\":\"plug\",\"details\":\"Facilitates seamless integration and compatibility with Node.js environments\",\"link\":\"./node-adapter\"},{\"title\":\"CLI\",\"icon\":\"terminal\",\"details\":\"Command Line Interface tools for managing and interacting with Stone.js applications\",\"link\":\"./cli\"},{\"title\":\"Router\",\"icon\":\"sitemap\",\"details\":\"Advanced routing capabilities for defining and handling application routes efficiently\",\"link\":\"./router\"}]}],\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"API\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://stonejs.com/api/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Stone.js\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"API\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"readingTime\":{\"minutes\":0.74,\"words\":222},\"filePathRelative\":\"api/README.md\"}")
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
