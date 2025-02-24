export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/Marion/Odoo 14/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/health-service.html", { loader: () => import(/* webpackChunkName: "health-service.html" */"D:/Marion/Odoo 14/vuepress-starter/docs/.vuepress/.temp/pages/health-service.html.js"), meta: {"title":"Service Santé"} }],
  ["/introduction.html", { loader: () => import(/* webpackChunkName: "introduction.html" */"D:/Marion/Odoo 14/vuepress-starter/docs/.vuepress/.temp/pages/introduction.html.js"), meta: {"title":"Introduction generale"} }],
  ["/purchase.html", { loader: () => import(/* webpackChunkName: "purchase.html" */"D:/Marion/Odoo 14/vuepress-starter/docs/.vuepress/.temp/pages/purchase.html.js"), meta: {"title":"Achats"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Marion/Odoo 14/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/stock.html", { loader: () => import(/* webpackChunkName: "stock.html" */"D:/Marion/Odoo 14/vuepress-starter/docs/.vuepress/.temp/pages/stock.html.js"), meta: {"title":"Inventaire"} }],
  ["/pos/health-service.html", { loader: () => import(/* webpackChunkName: "pos_health-service.html" */"D:/Marion/Odoo 14/vuepress-starter/docs/.vuepress/.temp/pages/pos/health-service.html.js"), meta: {"title":"POS Health Service Guide"} }],
  ["/pos/technical.html", { loader: () => import(/* webpackChunkName: "pos_technical.html" */"D:/Marion/Odoo 14/vuepress-starter/docs/.vuepress/.temp/pages/pos/technical.html.js"), meta: {"title":"Integration technique pour développeur"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Marion/Odoo 14/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
