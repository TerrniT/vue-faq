import{_ as a,c as s,o as i,U as e,ae as t}from"./chunks/framework.lBFuN894.js";const o=JSON.parse('{"title":"Vue 3 webapp билдер","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"Vue webapp builder"}],["meta",{"name":"og:image","content":"/images/vue-webapp-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp-logo.png"}]]},"headers":[],"relativePath":"ru/vue-webapp/index.md","filePath":"ru/vue-webapp/index.md","lastUpdated":1705061107000}'),d={name:"ru/vue-webapp/index.md"},n=e(`<h1 id="vue-3-webapp-билдер" tabindex="-1" data-v-6c71d8eb>Vue 3 webapp билдер <a class="header-anchor" href="#vue-3-webapp-билдер" aria-label="Permalink to &quot;Vue 3 webapp билдер&quot;" data-v-6c71d8eb>​</a></h1><h2 id="краткое-описание" tabindex="-1" data-v-6c71d8eb>Краткое описание <a class="header-anchor" href="#краткое-описание" aria-label="Permalink to &quot;Краткое описание&quot;" data-v-6c71d8eb>​</a></h2><p data-v-6c71d8eb>Vue 3 вебсайт билдер (<a href="https://github.com/vuesence/vue-webapp" target="_blank" rel="noreferrer" data-v-6c71d8eb>GitHub</a>) позволяет создать каркас будущего веб приложения, с возможностью выбора бизнес-шаблона (портфолио, блог, магазин и .т.д.), макета сайта, дизайна и элементов функционала (API модуль, i18n, PWA, splash screen, auth модуль, темы и т.д.), для дальнейшей кастомизации и наполнения контентом.</p><div class="language-sh vp-adaptive-theme" data-v-6c71d8eb><button title="Copy Code" class="copy" data-v-6c71d8eb></button><span class="lang" data-v-6c71d8eb>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-6c71d8eb><code data-v-6c71d8eb><span class="line" data-v-6c71d8eb><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-6c71d8eb>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> vue-webapp</span></span>
<span class="line" data-v-6c71d8eb></span>
<span class="line" data-v-6c71d8eb><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-6c71d8eb>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> Project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> my-vue-project</span></span>
<span class="line" data-v-6c71d8eb><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-6c71d8eb>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> Splash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> screen?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> yes</span></span>
<span class="line" data-v-6c71d8eb><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-6c71d8eb>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> Make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> PWA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-6c71d8eb> (adds </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb>service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> worker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> manifest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-6c71d8eb>)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-6c71d8eb>?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-6c71d8eb> ... no / yes</span></span>
<span class="line" data-v-6c71d8eb><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-6c71d8eb>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> Open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> Graph</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> meta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> tags?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> yes</span></span>
<span class="line" data-v-6c71d8eb><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-6c71d8eb>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> Google</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> Analytics</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> code?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-6c71d8eb> yes</span></span>
<span class="line" data-v-6c71d8eb><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-6c71d8eb>...</span></span></code></pre></div><h2 id="обоснование" tabindex="-1" data-v-6c71d8eb>Обоснование <a class="header-anchor" href="#обоснование" aria-label="Permalink to &quot;Обоснование&quot;" data-v-6c71d8eb>​</a></h2><p data-v-6c71d8eb>Существует довольно много (в основном специфичных и быстро устаревающих) бойлерплейтов для создания Vue приложения. Обычно под этим подразумевается создание пустого проекта с определенными библиотеками. Другими словами, это просто настройка окружения для начала разработки без, непосредственно, кода.</p><p data-v-6c71d8eb>В то же время, у многих других фронтенд и бэкенд фреймворков есть стартер-киты, позволяющие быстро создать готовый блог, онлайн магазин, сайт-визитку, портфолио, документацию и т.п., что значительно помогает как и в изучении самого фреймворка, соответствующих технологий и лучших практик, так и для решения стоящих перед бизнесом задач.</p><p data-v-6c71d8eb>В результате может возникнуть впечатление, что Vue - довольно низкоуровневый фреймворк, и чтобы создавать вебприложения быстро, эффективно и удобно, необходимо взять какую-либо надстройку или иное решение - Nuxt, Vue Storefront, Astro, VitePress - которые прямо позиционируют себя как средство для решения определенных (или широкого круга) бизнес задач.</p><p data-v-6c71d8eb>Появилась идея для создания инструмента, аналогичного <code data-v-6c71d8eb>create-vue</code>, создающего каркас готового к работе веб приложения. С одной стороны, вполне работоспособного, адаптивного вебсайта с необходимым функционалом, чтобы начинающий разработчик мог ознакомиться с проверенным подходом в решении встающих при этом задач. С другой, достаточно минималистичным, не навязывающим опытному разработчику нежелаемые им зависимости, и создающим скелет из устоявшихся лучших практик для дальнейшего развития приложения.</p><p data-v-6c71d8eb>Понятно, что определение той или иной &quot;лучшей практики&quot; (fetch или axios?) может быть довольно спорным моментом и зависит от контекста, но тем не менее.</p><p data-v-6c71d8eb><img src="`+t+'" alt="" data-v-6c71d8eb></p>',11),h=[n];function p(k,l,c,F,r,b){return i(),s("div",null,h)}const g=a(d,[["render",p],["__scopeId","data-v-6c71d8eb"]]);export{o as __pageData,g as default};
