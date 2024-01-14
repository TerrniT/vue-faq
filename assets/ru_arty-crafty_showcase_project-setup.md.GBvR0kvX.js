import{_ as a,c as s,o as i,U as t}from"./chunks/framework.P5TqXf0g.js";const e="/assets/project-setup.hs31F5ED.png",y=JSON.parse('{"title":"Создание проекта","description":"","frontmatter":{"pageClass":"arty-crafty","head":[["meta",{"name":"og:site_name","content":"Arty-Crafty - проект онлайн магазина"}],["meta",{"name":"og:image","content":"/images/arty-crafty-logo.png"}],["meta",{"name":"twitter:image","content":"/images/arty-crafty-logo.png"}]]},"headers":[],"relativePath":"ru/arty-crafty/showcase/project-setup.md","filePath":"ru/arty-crafty/showcase/project-setup.md","lastUpdated":1705249693000}'),h={name:"ru/arty-crafty/showcase/project-setup.md"},n=t(`<h1 id="создание-проекта" tabindex="-1" data-v-00c879ae>Создание проекта <a class="header-anchor" href="#создание-проекта" aria-label="Permalink to &quot;Создание проекта&quot;" data-v-00c879ae>​</a></h1><h2 id="репозитории-на-github" tabindex="-1" data-v-00c879ae>Репозиторий на GitHub <a class="header-anchor" href="#репозитории-на-github" aria-label="Permalink to &quot;Репозиторий на GitHub&quot;" data-v-00c879ae>​</a></h2><p data-v-00c879ae>Создаем репозиторий на GitHub, клонируем локально</p><div class="language-sh vp-adaptive-theme" data-v-00c879ae><button title="Copy Code" class="copy" data-v-00c879ae></button><span class="lang" data-v-00c879ae>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-00c879ae><code data-v-00c879ae><span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> https://github.com/vuesence/arty-crafty.git</span></span></code></pre></div><h2 id="vue-webapp" tabindex="-1" data-v-00c879ae>vue-webapp <a class="header-anchor" href="#vue-webapp" aria-label="Permalink to &quot;vue-webapp&quot;" data-v-00c879ae>​</a></h2><p data-v-00c879ae>Используем, естественно, <a href="/ru/vue-webapp/" data-v-00c879ae>vue-webapp</a> для создания скелета проекта со следующими опциями:</p><div class="language-sh vp-adaptive-theme" data-v-00c879ae><button title="Copy Code" class="copy" data-v-00c879ae></button><span class="lang" data-v-00c879ae>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-00c879ae><code data-v-00c879ae><span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> arty-crafty</span></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> vue-webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> .</span></span>
<span class="line" data-v-00c879ae></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> arty-crafty</span></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Splash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> screen?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> yes</span></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> PWA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-00c879ae> (adds </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae>service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> worker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> manifest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-00c879ae>)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-00c879ae>?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-00c879ae> ... yes</span></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Graph</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> meta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> tags?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> yes</span></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Google</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Analytics</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> code?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> no</span></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Github</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Workflow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> publishing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> GitHub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Pages?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> yes</span></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> application</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> layout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> MainLayout</span></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> navigation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> drawer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> TouchSlideoutDrawer</span></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> navbar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> MantineSimpleNavbar</span></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> MantineSimpleHeader</span></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> footer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> MantineSimpleFooter</span></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> light</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> i18n?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> yes</span></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> API</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> layer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-00c879ae> (REST)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-00c879ae>?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-00c879ae> ... yes</span></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> JSON-RPC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> adapter?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> no</span></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Current</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> directory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> empty.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Please</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> choose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> how</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> proceed:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> Ignore</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> files</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> continue</span></span>
<span class="line" data-v-00c879ae></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>Scaffolding</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-00c879ae> \\V</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae>uesence</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-00c879ae>\\a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae>rty-crafty...</span></span></code></pre></div><p data-v-00c879ae>Запускаем:</p><div class="language-sh vp-adaptive-theme" data-v-00c879ae><button title="Copy Code" class="copy" data-v-00c879ae></button><span class="lang" data-v-00c879ae>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-00c879ae><code data-v-00c879ae><span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> i</span></span>
<span class="line" data-v-00c879ae><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-00c879ae>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-00c879ae> dev</span></span></code></pre></div><p data-v-00c879ae>Работает:</p><p data-v-00c879ae><img src="`+e+'" alt="image" data-v-00c879ae></p><p data-v-00c879ae>Теперь ставим <code data-v-00c879ae>base: &quot;/arty-crafty/&quot;</code> в <code data-v-00c879ae>vite.config.ts</code>. Также надо поставить этот префикс перед путями в инъекциях <code data-v-00c879ae>sw.js</code> и <code data-v-00c879ae>splash-screen.html</code>, и в путях к иконкам в <code data-v-00c879ae>manifest.json</code>. При хостинге со своим доменом нужно будет этот префикс убрать.</p><p data-v-00c879ae>Загружаем все на GitHub.</p><p data-v-00c879ae>Далее настраиваем GitHub Pages и получаем наш сайт по адресу: <a href="https://vuesence.github.io/arty-crafty/" target="_blank" rel="noreferrer" data-v-00c879ae>https://vuesence.github.io/arty-crafty/</a></p><p data-v-00c879ae>Сайт задеплоится сам автоматически из-за того, что у нас есть соответствующий GitHub Actions Workflow файл в проекте. Ветка <code data-v-00c879ae>gh-pages</code> тоже создастся автоматически.</p><p data-v-00c879ae>Теперь закомментируем подключение <code data-v-00c879ae>service-worker.js</code> в файле <code data-v-00c879ae>sw.js</code> - во время разработки кэширование сильно мешает. Включим его уже в продакшне.</p>',16),p=[n];function k(d,l,F,c,r,v){return i(),s("div",null,p)}const C=a(h,[["render",k],["__scopeId","data-v-00c879ae"]]);export{y as __pageData,C as default};
