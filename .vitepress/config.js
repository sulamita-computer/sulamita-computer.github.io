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
      { text: "Quiz", link: "/quiz" },
    ],

    sidebar: {
      "/os/": [{ text: "Загальна інформація", link: "/os/" }],
      "/logos/": [
        { text: "Загальна інформація", link: "/logos/" },
        { text: "Ресурсна система", link: "/logos/resources" },
        {
          text: "Інтерфейс",
          link: "/logos/interface",
          items: [
            { text: "Веб-застосунок", link: "/logos/interface/web" },
            { text: "Мобільний додаток", link: "/logos/interface/phone" },
          ],
        },
      ],
      "/quiz/": [
        { text: "Загальна інформація", link: "/quiz/" },
        { text: "0.1", link: "/quiz/0-1" },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/sulamita-computer/sulamita-computer.github.io",
      },
    ],
  },
});
