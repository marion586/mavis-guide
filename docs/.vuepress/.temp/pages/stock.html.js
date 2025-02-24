import comp from "D:/Marion/Odoo 14/vuepress-starter/docs/.vuepress/.temp/pages/stock.html.vue"
const data = JSON.parse("{\"path\":\"/stock.html\",\"title\":\"Inventaire\",\"lang\":\"fr-FR\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"stock.md\"}")
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
