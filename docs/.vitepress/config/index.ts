import { defineConfig } from "vitepress";
import nav_en from "./nav.en";
import nav_ru from "./nav.ru";
import sidebar_en from "./sidebar.en";
import sidebar_ru from "./sidebar.ru";
import sidebar_book_ru from "./sidebar.book.ru";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/ru/",
  locales: {
    root: {
      lang: "ru",
      label: "Русский",
      head: [
        [
          "script",
          {},
          `const init = localStorage.getItem("vue-faq-init") ?? false;
          localStorage.setItem("vue-faq-init", true);
          const isGoogleBot = window.navigator.userAgent.includes('googlebot');
          console.log("/en" + window.location.pathname);
          if (navigator.language != "ru-RU" && !init && !isGoogleBot) document.location="/en" + window.location.pathname;
          `,
        ],
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
      ],
    },
  },
  lang: "en",
  title: "Vue FAQ",
  description: "Vue JavaScript framework FAQ",
  head: [
    // ["meta", { name: "og:type", content: "article" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "Vue FAQ" }],
    ["meta", { property: "og:image", content: "/images/vue-faq-logo.webp" }],
    ["meta", { name: "twitter:image", content: "/images/vue-faq-logo.webp" }],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/images/apple-touch-icon.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/favicon-32x32.png" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
  ],
  themeConfig: {
    logo: "/images/vue-faq-logo.webp",
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: nav_ru,    
    sidebar: {
      "/": sidebar_ru,
      "/book/": sidebar_book_ru,
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuesence/vue-faq" },
      { icon: {svg: '<svg xmlns="http://www.w3.org/2000/svg"><g><text font-weight="bold" xml:space="preserve" font-size="18" id="svg_1" y="16" x="8" fill="currentColor">Star it!</text></g></svg>'}, link: "https://github.com/vuesence/vue-faq" }
    ],
  },
});
