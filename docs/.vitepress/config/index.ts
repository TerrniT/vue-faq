import { defineConfig } from "vitepress";
import nav_en from "./nav.en";
import nav_ru from "./nav.ru";
import sidebar_en from "./sidebar.en";
import sidebar_ru from "./sidebar.ru";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/ru/",
  locales: {
    root: {
      lang: "ru",
      label: "Русский",
    },
    en: {
      lang: "en",
      label: "English",
      themeConfig: {
        nav: nav_en,
        sidebar: sidebar_en,
      },
    },
  },
  lang: "en-US",
  title: "Vue FAQ",
  description: "Vue JavaScript фреймворк FAQ",
  head: [
    ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-JL65GWRNZZ" }],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JL65GWRNZZ');`,
    ],
  ],
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: nav_ru,

    sidebar: sidebar_ru,

    socialLinks: [{ icon: "github", link: "https://github.com/vuesence/vue-faq" }],
  },
});
