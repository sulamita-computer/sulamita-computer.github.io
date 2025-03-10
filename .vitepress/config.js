import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Головна",
  description:
    "Християнська ініціатива, покликана зробити комп’ютер не прокляттям, а благословенням для віруючих.",
  head: [["link", { rel: "icon", href: "/logo-mini.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Logos", link: "/logos" },
      { text: "SulamitaOS", link: "/os" },
    ],

    sidebar: {
      "/os/": [{ text: "Загальна інформація", link: "/os/" }],
      "/logos/": [{ text: "Загальна інформація", link: "/logos/" }],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/sulamita-computer/sulamita-computer.github.io",
      },
    ],
  },
});
