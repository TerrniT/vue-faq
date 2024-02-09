import{_ as a,o as s,c as i,U as t}from"./chunks/framework.pGgzIhWR.js";const d="/assets/project-setup.hs31F5ED.png",C=JSON.parse('{"title":"Создание проекта","description":"","frontmatter":{"pageClass":"arty-crafty","head":[["meta",{"name":"og:site_name","content":"Arty-Crafty - проект онлайн магазина"}],["meta",{"name":"og:image","content":"/images/arty-crafty-logo.png"}],["meta",{"name":"twitter:image","content":"/images/arty-crafty-logo.png"}]]},"headers":[],"relativePath":"ru/arty-crafty/showcase/project-setup.md","filePath":"ru/arty-crafty/showcase/project-setup.md","lastUpdated":1707467593000}'),h={name:"ru/arty-crafty/showcase/project-setup.md"},n=t(`<h1 id="создание-проекта" tabindex="-1" data-v-da680141>Создание проекта <a class="header-anchor" href="#создание-проекта" aria-label="Permalink to &quot;Создание проекта&quot;" data-v-da680141>​</a></h1><h2 id="репозитории-на-github" tabindex="-1" data-v-da680141>Репозиторий на GitHub <a class="header-anchor" href="#репозитории-на-github" aria-label="Permalink to &quot;Репозиторий на GitHub&quot;" data-v-da680141>​</a></h2><p data-v-da680141>Создаем репозиторий на GitHub, клонируем локально</p><div class="language-sh vp-adaptive-theme" data-v-da680141><button title="Copy Code" class="copy" data-v-da680141></button><span class="lang" data-v-da680141>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-da680141><code data-v-da680141><span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> https://github.com/vuesence/arty-crafty.git</span></span></code></pre></div><h2 id="vue-webapp" tabindex="-1" data-v-da680141>vue-webapp <a class="header-anchor" href="#vue-webapp" aria-label="Permalink to &quot;vue-webapp&quot;" data-v-da680141>​</a></h2><p data-v-da680141>Используем, естественно, <a href="/ru/vue-webapp/" data-v-da680141>vue-webapp</a> для создания скелета проекта со следующими опциями:</p><div class="language-sh vp-adaptive-theme" data-v-da680141><button title="Copy Code" class="copy" data-v-da680141></button><span class="lang" data-v-da680141>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-da680141><code data-v-da680141><span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> arty-crafty</span></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> vue-webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> .</span></span>
<span class="line" data-v-da680141></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> arty-crafty</span></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Splash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> screen?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> yes</span></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> PWA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da680141> (adds </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141>service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> worker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> manifest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da680141>)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da680141>?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da680141> ... yes</span></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Graph</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> meta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> tags?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> yes</span></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Google</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Analytics</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> code?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> no</span></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Github</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Workflow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> publishing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> GitHub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Pages?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> yes</span></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> application</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> layout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> MainLayout</span></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> navigation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> drawer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> TouchSlideoutDrawer</span></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> navbar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> MantineSimpleNavbar</span></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> MantineSimpleHeader</span></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> footer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> MantineSimpleFooter</span></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> light</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> i18n?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> yes</span></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> API</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> layer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da680141> (REST)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da680141>?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da680141> ... yes</span></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> JSON-RPC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> adapter?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> no</span></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Current</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> directory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> empty.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Please</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> choose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> how</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> proceed:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> Ignore</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> files</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> continue</span></span>
<span class="line" data-v-da680141></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>Scaffolding</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da680141> \\V</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141>uesence</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da680141>\\a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141>rty-crafty...</span></span></code></pre></div><p data-v-da680141>Запускаем:</p><div class="language-sh vp-adaptive-theme" data-v-da680141><button title="Copy Code" class="copy" data-v-da680141></button><span class="lang" data-v-da680141>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-da680141><code data-v-da680141><span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> i</span></span>
<span class="line" data-v-da680141><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da680141>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da680141> dev</span></span></code></pre></div><p data-v-da680141>Работает:</p><p data-v-da680141><img src="`+d+'" alt="image" data-v-da680141></p><p data-v-da680141>Теперь ставим <code data-v-da680141>base: &quot;/arty-crafty/&quot;</code> в <code data-v-da680141>vite.config.ts</code>. Также надо поставить этот префикс перед путями в инъекциях <code data-v-da680141>sw.js</code> и <code data-v-da680141>splash-screen.html</code>, и в путях к иконкам в <code data-v-da680141>manifest.json</code>. При хостинге со своим доменом нужно будет этот префикс убрать.</p><p data-v-da680141>Загружаем все на GitHub.</p><p data-v-da680141>Далее настраиваем GitHub Pages и получаем наш сайт по адресу: <a href="https://vuesence.github.io/arty-crafty/" target="_blank" rel="noreferrer" data-v-da680141>https://vuesence.github.io/arty-crafty/</a></p><p data-v-da680141>Сайт задеплоится сам автоматически из-за того, что у нас есть соответствующий GitHub Actions Workflow файл в проекте. Ветка <code data-v-da680141>gh-pages</code> тоже создастся автоматически.</p><p data-v-da680141>Теперь закомментируем подключение <code data-v-da680141>service-worker.js</code> в файле <code data-v-da680141>sw.js</code> - во время разработки кэширование сильно мешает. Включим его уже в продакшне.</p>',16),p=[n];function k(e,l,F,r,v,g){return s(),i("div",null,p)}const c=a(h,[["render",k],["__scopeId","data-v-da680141"]]);export{C as __pageData,c as default};
