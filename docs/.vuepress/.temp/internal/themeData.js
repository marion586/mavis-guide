export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"navbar\":[{\"text\":\"Accueil\",\"link\":\"/\"},{\"text\":\"Introduction\",\"link\":\"/introduction\"},{\"text\":\"Point de vente\",\"children\":[{\"text\":\"Service Santé\",\"link\":\"/pos/health-service\"},{\"text\":\"Intégration technique\",\"link\":\"/pos/technical\"}]},{\"text\":\"Inventaire\",\"link\":\"/stock\"},{\"text\":\"Achats\",\"link\":\"/purchase\"},{\"text\":\"Service Santé\",\"link\":\"/health-service\"}],\"sidebar\":{\"/\":[{\"text\":\"Accueil\",\"children\":[\"/introduction\"]},{\"text\":\"Point de vente\",\"children\":[\"/pos/health-service\",\"/pos/technical\"]},{\"text\":\"Inventaire\",\"children\":[\"/stock\"]},{\"text\":\"Achats\",\"children\":[\"/purchase\"]},{\"text\":\"Service Santé\",\"children\":[\"/health-service\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
