import{_ as a}from"./chunks/use-case.b7dbd9d8.js";import{_ as c,o as s,c as t,Q as n}from"./chunks/framework.254bf437.js";const C=JSON.parse('{"title":"Vue 3 webapp билдер","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"Vue webapp"}],["meta",{"name":"og:image","content":"/images/vue-webapp-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp-logo.png"}]]},"headers":[],"relativePath":"ru/vue-webapp/index.md","filePath":"ru/vue-webapp/index.md"}'),d={name:"ru/vue-webapp/index.md"},p=n(`<h1 id="vue-3-webapp-билдер" tabindex="-1" data-v-c6a5cbd8>Vue 3 webapp билдер <a class="header-anchor" href="#vue-3-webapp-билдер" aria-label="Permalink to &quot;Vue 3 webapp билдер&quot;" data-v-c6a5cbd8>​</a></h1><h2 id="краткое-описание" tabindex="-1" data-v-c6a5cbd8>Краткое описание <a class="header-anchor" href="#краткое-описание" aria-label="Permalink to &quot;Краткое описание&quot;" data-v-c6a5cbd8>​</a></h2><p data-v-c6a5cbd8>Vue 3 вебсайт билдер позволяет создать каркас будущего веб приложения, с возможностью выбора бизнес-шаблона (портфолио, блог, магазин и .т.д.), макета сайта, дизайна и элементов функционала (API модуль, i18n, PWA, splash screen, auth модуль, темы и т.д.), для дальнейшей кастомизации и наполнения контентом.</p><div class="language-sh vp-adaptive-theme" data-v-c6a5cbd8><button title="Copy Code" class="copy" data-v-c6a5cbd8></button><span class="lang" data-v-c6a5cbd8>sh</span><pre class="shiki github-dark vp-code-dark" data-v-c6a5cbd8><code data-v-c6a5cbd8><span class="line" data-v-c6a5cbd8><span style="color:#B392F0;" data-v-c6a5cbd8>$</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>pnpm</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>create</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>vue-webapp</span></span>
<span class="line" data-v-c6a5cbd8></span>
<span class="line" data-v-c6a5cbd8><span style="color:#B392F0;" data-v-c6a5cbd8>✔</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>Project</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>name:</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>…</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>my-vue-project</span></span>
<span class="line" data-v-c6a5cbd8><span style="color:#B392F0;" data-v-c6a5cbd8>✔</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>Make</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>it</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>PWA</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> ( </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>adds</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>service</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>worker</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>and</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>manifest</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> )</span><span style="color:#F97583;" data-v-c6a5cbd8>?</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> … yes</span></span>
<span class="line" data-v-c6a5cbd8><span style="color:#B392F0;" data-v-c6a5cbd8>✔</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>Add</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>Github</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>Action</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>Workflow</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>for</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>publishing</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>it</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>on</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>GitHub</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>Pages?</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>…</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>no</span></span>
<span class="line" data-v-c6a5cbd8><span style="color:#B392F0;" data-v-c6a5cbd8>✔</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>Select</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>navigation</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>drawer</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>›</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>TouchSlideoutDrawer</span></span>
<span class="line" data-v-c6a5cbd8><span style="color:#B392F0;" data-v-c6a5cbd8>✔</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>Select</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>webapp</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>footer</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>›</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>RichFooter</span></span>
<span class="line" data-v-c6a5cbd8><span style="color:#B392F0;" data-v-c6a5cbd8>✔</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>Add</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>&#39;BaseIcon&#39;</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>component?</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>…</span><span style="color:#E1E4E8;" data-v-c6a5cbd8> </span><span style="color:#9ECBFF;" data-v-c6a5cbd8>yes</span></span>
<span class="line" data-v-c6a5cbd8><span style="color:#79B8FF;" data-v-c6a5cbd8>...</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-c6a5cbd8><code data-v-c6a5cbd8><span class="line" data-v-c6a5cbd8><span style="color:#6F42C1;" data-v-c6a5cbd8>$</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>pnpm</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>create</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>vue-webapp</span></span>
<span class="line" data-v-c6a5cbd8></span>
<span class="line" data-v-c6a5cbd8><span style="color:#6F42C1;" data-v-c6a5cbd8>✔</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>Project</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>name:</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>…</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>my-vue-project</span></span>
<span class="line" data-v-c6a5cbd8><span style="color:#6F42C1;" data-v-c6a5cbd8>✔</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>Make</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>it</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>PWA</span><span style="color:#24292E;" data-v-c6a5cbd8> ( </span><span style="color:#032F62;" data-v-c6a5cbd8>adds</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>service</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>worker</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>and</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>manifest</span><span style="color:#24292E;" data-v-c6a5cbd8> )</span><span style="color:#D73A49;" data-v-c6a5cbd8>?</span><span style="color:#24292E;" data-v-c6a5cbd8> … yes</span></span>
<span class="line" data-v-c6a5cbd8><span style="color:#6F42C1;" data-v-c6a5cbd8>✔</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>Add</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>Github</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>Action</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>Workflow</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>for</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>publishing</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>it</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>on</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>GitHub</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>Pages?</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>…</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>no</span></span>
<span class="line" data-v-c6a5cbd8><span style="color:#6F42C1;" data-v-c6a5cbd8>✔</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>Select</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>navigation</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>drawer</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>›</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>TouchSlideoutDrawer</span></span>
<span class="line" data-v-c6a5cbd8><span style="color:#6F42C1;" data-v-c6a5cbd8>✔</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>Select</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>webapp</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>footer</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>›</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>RichFooter</span></span>
<span class="line" data-v-c6a5cbd8><span style="color:#6F42C1;" data-v-c6a5cbd8>✔</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>Add</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>&#39;BaseIcon&#39;</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>component?</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>…</span><span style="color:#24292E;" data-v-c6a5cbd8> </span><span style="color:#032F62;" data-v-c6a5cbd8>yes</span></span>
<span class="line" data-v-c6a5cbd8><span style="color:#005CC5;" data-v-c6a5cbd8>...</span></span></code></pre></div><h2 id="обоснование" tabindex="-1" data-v-c6a5cbd8>Обоснование <a class="header-anchor" href="#обоснование" aria-label="Permalink to &quot;Обоснование&quot;" data-v-c6a5cbd8>​</a></h2><p data-v-c6a5cbd8>Существует довольно много (в основном специфичных и быстро устаревающих) бойлерплейтов для создания Vue приложения. Обычно по этим подразумевается создание пустого проекта с определенными библиотеками. Другими словами, это просто настройка окружения для начала разработки без, непосредственно, кода.</p><p data-v-c6a5cbd8>В то же время, у многих других фронтенд и бэкенд фреймворков есть стартер-киты, позволяющие быстро создать готовый блог, онлайн магазин, сайт-визитку, портфолио, документацию и т.п., что значительно помогает как и в изучении самого фреймворка, соответствующих технологий и лучших практик, так и для решения стоящих перед бизнесом задач.</p><p data-v-c6a5cbd8>В результате может возникнуть впечатление, что Vue - довольно низкоуровневый фреймворк, и чтобы создавать вебприложения быстро, эффективно и удобно, необходимо взять какую-либо надстройку или иное решение - Nuxt, Vue Storefront, Astro, VitePress - которые прямо позиционируют себя как средство для решения определенных (или широкого круга) бизнес задач.</p><p data-v-c6a5cbd8>Появилась идея для создания инструмента, аналогичного <code data-v-c6a5cbd8>create-vue</code>, создающего каркас готового к работе веб приложения. С одной стороны, вполне работоспособного, адаптивного вебсайта с необходимым функционалом, чтобы начинающий разработчик мог ознакомиться с проверенным подходом в решении встающих при этом задач. С другой, достаточно минималистичным, не навязывающим опытному разработчику нежелаемые им зависимости, и создающим скелет из устоявшихся лучших практик для дальнейшего развития приложения.</p><p data-v-c6a5cbd8>Понятно, что определение той или иной &quot;лучшей практики&quot; (fetch или axios?) может быть довольно спорным моментом, но тем не менее.</p><p data-v-c6a5cbd8><img src="`+a+'" alt="" data-v-c6a5cbd8></p>',11),o=[p];function l(e,r,b,v,E,y){return s(),t("div",null,o)}const u=c(d,[["render",l],["__scopeId","data-v-c6a5cbd8"]]);export{C as __pageData,u as default};
