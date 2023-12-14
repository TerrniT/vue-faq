import{_ as a,o as s,c as i,R as t,a9 as e}from"./chunks/framework.YZToRb8g.js";const o=JSON.parse('{"title":"Vue 3 webapp билдер","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"Vue webapp"}],["meta",{"name":"og:image","content":"/images/vue-webapp-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp-logo.png"}]]},"headers":[],"relativePath":"ru/vue-webapp/index.md","filePath":"ru/vue-webapp/index.md","lastUpdated":1702557644000}'),n={name:"ru/vue-webapp/index.md"},h=t(`<h1 id="vue-3-webapp-билдер" tabindex="-1" data-v-764fb77f>Vue 3 webapp билдер <a class="header-anchor" href="#vue-3-webapp-билдер" aria-label="Permalink to &quot;Vue 3 webapp билдер&quot;" data-v-764fb77f>​</a></h1><h2 id="краткое-описание" tabindex="-1" data-v-764fb77f>Краткое описание <a class="header-anchor" href="#краткое-описание" aria-label="Permalink to &quot;Краткое описание&quot;" data-v-764fb77f>​</a></h2><p data-v-764fb77f>Vue 3 вебсайт билдер позволяет создать каркас будущего веб приложения, с возможностью выбора бизнес-шаблона (портфолио, блог, магазин и .т.д.), макета сайта, дизайна и элементов функционала (API модуль, i18n, PWA, splash screen, auth модуль, темы и т.д.), для дальнейшей кастомизации и наполнения контентом.</p><div class="language-sh vp-adaptive-theme" data-v-764fb77f><button title="Copy Code" class="copy" data-v-764fb77f></button><span class="lang" data-v-764fb77f>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-764fb77f><code data-v-764fb77f><span class="line" data-v-764fb77f><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-764fb77f>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> vue-webapp</span></span>
<span class="line" data-v-764fb77f></span>
<span class="line" data-v-764fb77f><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-764fb77f>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> Project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> my-vue-project</span></span>
<span class="line" data-v-764fb77f><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-764fb77f>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> Splash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> screen?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> yes</span></span>
<span class="line" data-v-764fb77f><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-764fb77f>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> Make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> PWA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-764fb77f> (adds </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f>service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> worker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> manifest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-764fb77f>)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-764fb77f>?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-764fb77f> ... no / yes</span></span>
<span class="line" data-v-764fb77f><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-764fb77f>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> Open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> Graph</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> meta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> tags?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> yes</span></span>
<span class="line" data-v-764fb77f><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-764fb77f>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> Google</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> Analytics</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> code?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-764fb77f> yes</span></span>
<span class="line" data-v-764fb77f><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-764fb77f>...</span></span></code></pre></div><h2 id="обоснование" tabindex="-1" data-v-764fb77f>Обоснование <a class="header-anchor" href="#обоснование" aria-label="Permalink to &quot;Обоснование&quot;" data-v-764fb77f>​</a></h2><p data-v-764fb77f>Существует довольно много (в основном специфичных и быстро устаревающих) бойлерплейтов для создания Vue приложения. Обычно под этим подразумевается создание пустого проекта с определенными библиотеками. Другими словами, это просто настройка окружения для начала разработки без, непосредственно, кода.</p><p data-v-764fb77f>В то же время, у многих других фронтенд и бэкенд фреймворков есть стартер-киты, позволяющие быстро создать готовый блог, онлайн магазин, сайт-визитку, портфолио, документацию и т.п., что значительно помогает как и в изучении самого фреймворка, соответствующих технологий и лучших практик, так и для решения стоящих перед бизнесом задач.</p><p data-v-764fb77f>В результате может возникнуть впечатление, что Vue - довольно низкоуровневый фреймворк, и чтобы создавать вебприложения быстро, эффективно и удобно, необходимо взять какую-либо надстройку или иное решение - Nuxt, Vue Storefront, Astro, VitePress - которые прямо позиционируют себя как средство для решения определенных (или широкого круга) бизнес задач.</p><p data-v-764fb77f>Появилась идея для создания инструмента, аналогичного <code data-v-764fb77f>create-vue</code>, создающего каркас готового к работе веб приложения. С одной стороны, вполне работоспособного, адаптивного вебсайта с необходимым функционалом, чтобы начинающий разработчик мог ознакомиться с проверенным подходом в решении встающих при этом задач. С другой, достаточно минималистичным, не навязывающим опытному разработчику нежелаемые им зависимости, и создающим скелет из устоявшихся лучших практик для дальнейшего развития приложения.</p><p data-v-764fb77f>Понятно, что определение той или иной &quot;лучшей практики&quot; (fetch или axios?) может быть довольно спорным моментом и зависит от контекста, но тем не менее.</p><p data-v-764fb77f><img src="`+e+'" alt="" data-v-764fb77f></p>',11),p=[h];function d(f,k,l,F,r,b){return s(),i("div",null,p)}const g=a(n,[["render",d],["__scopeId","data-v-764fb77f"]]);export{o as __pageData,g as default};
