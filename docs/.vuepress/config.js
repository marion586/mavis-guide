import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "fr-FR",

  title: "Guide d'utilisation Mavis",
  description: "Guide d'utilisation Mavis",

  theme: defaultTheme({
    logo: "/images/logo.png",

    navbar: [
      { text: "Accueil", link: "/" },
      { text: "Introduction", link: "/introduction" },
      {
        text: "Point de vente",
        children: [
          { text: "Service Santé", link: "/pos/health-service" },
          { text: "Intégration technique", link: "/pos/technical" },
        ],
      },
      { text: "Inventaire", link: "/stock" },
      { text: "Achats", link: "/purchase" },
      { text: "Service Santé", link: "/health-service" },
    ],

    sidebar: {
      "/": [
        {
          text: "Accueil",
          children: ["/introduction"],
        },
        {
          text: "Point de vente",
          children: ["/pos/health-service", "/pos/technical"],
        },
        {
          text: "Inventaire",
          children: ["/stock"],
        },
        {
          text: "Achats",
          children: ["/purchase"],
        },
        {
          text: "Service Santé",
          children: ["/health-service"],
        },
      ],
    },
  }),

  bundler: viteBundler(),
});
