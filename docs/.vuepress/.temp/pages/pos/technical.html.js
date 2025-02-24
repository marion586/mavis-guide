import comp from "D:/Marion/Odoo 14/vuepress-starter/docs/.vuepress/.temp/pages/pos/technical.html.vue"
const data = JSON.parse("{\"path\":\"/pos/technical.html\",\"title\":\"Integration technique pour développeur\",\"lang\":\"fr-FR\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Introduction\",\"slug\":\"introduction\",\"link\":\"#introduction\",\"children\":[]},{\"level\":2,\"title\":\"Fonctionnalités Principales\",\"slug\":\"fonctionnalites-principales\",\"link\":\"#fonctionnalites-principales\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"pos/technical.md\"}")
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
