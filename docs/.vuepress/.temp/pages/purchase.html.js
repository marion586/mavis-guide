import comp from "D:/Marion/Odoo 14/vuepress-starter/docs/.vuepress/.temp/pages/purchase.html.vue"
const data = JSON.parse("{\"path\":\"/purchase.html\",\"title\":\"Achats\",\"lang\":\"fr-FR\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"purchase.md\"}")
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
