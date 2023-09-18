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
        [
          "script",
          {},
          `const init = localStorage.getItem("vue-faq-init") ?? false;
            localStorage.setItem("vue-faq-init", true);
            if (navigator.language != "ru-RU" && !init) document.location="/en/";
            `,
        ],
        ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/images/apple-touch-icon.png" }],
        ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/favicon-32x32.png" }],
        ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
      ],
    },
    en: {
      lang: "en",
      label: "English",
      themeConfig: {
        nav: nav_en,
        sidebar: sidebar_en,
      },
      head: [
        ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-JCCRGKJ88B" }],
        [
          "script",
          {},
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JCCRGKJ88B');`,
        ],
        ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/images/apple-touch-icon.png" }],
        ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/favicon-32x32.png" }],
        ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
      ],
    },
  },
  lang: "en",
  title: "Vue FAQ",
  description: "Vue JavaScript фреймворк FAQ",
  head: [["meta", { attr: "sa", sizes: "180x180", href: "icon.png" }]],
  themeConfig: {
    logo: "/images/vue-faq-logo.webp",
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: nav_ru,
    sidebar: sidebar_ru,
    socialLinks: [{ icon: "github", link: "https://github.com/vuesence/vue-faq" }],
  },
});
