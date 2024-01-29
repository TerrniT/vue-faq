import{_ as a,c as d,o as s,U as i}from"./chunks/framework.P5TqXf0g.js";const t="/assets/project-setup.hs31F5ED.png",y=JSON.parse('{"title":"Создание проекта","description":"","frontmatter":{"pageClass":"arty-crafty","head":[["meta",{"name":"og:site_name","content":"Arty-Crafty - проект онлайн магазина"}],["meta",{"name":"og:image","content":"/images/arty-crafty-logo.png"}],["meta",{"name":"twitter:image","content":"/images/arty-crafty-logo.png"}]]},"headers":[],"relativePath":"ru/arty-crafty/showcase/project-setup.md","filePath":"ru/arty-crafty/showcase/project-setup.md","lastUpdated":1706553672000}'),h={name:"ru/arty-crafty/showcase/project-setup.md"},n=i(`<h1 id="создание-проекта" tabindex="-1" data-v-ad8ddfa1>Создание проекта <a class="header-anchor" href="#создание-проекта" aria-label="Permalink to &quot;Создание проекта&quot;" data-v-ad8ddfa1>​</a></h1><h2 id="репозитории-на-github" tabindex="-1" data-v-ad8ddfa1>Репозиторий на GitHub <a class="header-anchor" href="#репозитории-на-github" aria-label="Permalink to &quot;Репозиторий на GitHub&quot;" data-v-ad8ddfa1>​</a></h2><p data-v-ad8ddfa1>Создаем репозиторий на GitHub, клонируем локально</p><div class="language-sh vp-adaptive-theme" data-v-ad8ddfa1><button title="Copy Code" class="copy" data-v-ad8ddfa1></button><span class="lang" data-v-ad8ddfa1>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-ad8ddfa1><code data-v-ad8ddfa1><span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> https://github.com/vuesence/arty-crafty.git</span></span></code></pre></div><h2 id="vue-webapp" tabindex="-1" data-v-ad8ddfa1>vue-webapp <a class="header-anchor" href="#vue-webapp" aria-label="Permalink to &quot;vue-webapp&quot;" data-v-ad8ddfa1>​</a></h2><p data-v-ad8ddfa1>Используем, естественно, <a href="/ru/vue-webapp/" data-v-ad8ddfa1>vue-webapp</a> для создания скелета проекта со следующими опциями:</p><div class="language-sh vp-adaptive-theme" data-v-ad8ddfa1><button title="Copy Code" class="copy" data-v-ad8ddfa1></button><span class="lang" data-v-ad8ddfa1>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-ad8ddfa1><code data-v-ad8ddfa1><span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> arty-crafty</span></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> vue-webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> .</span></span>
<span class="line" data-v-ad8ddfa1></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> arty-crafty</span></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Splash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> screen?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> yes</span></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> PWA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ad8ddfa1> (adds </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1>service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> worker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> manifest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ad8ddfa1>)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ad8ddfa1>?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ad8ddfa1> ... yes</span></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Graph</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> meta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> tags?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> yes</span></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Google</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Analytics</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> code?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> no</span></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Github</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Action</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Workflow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> publishing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> GitHub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Pages?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> yes</span></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> application</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> layout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> MainLayout</span></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> navigation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> drawer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> TouchSlideoutDrawer</span></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> navbar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> MantineSimpleNavbar</span></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> MantineSimpleHeader</span></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> webapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> footer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> MantineSimpleFooter</span></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> light</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> i18n?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> yes</span></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> API</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> layer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ad8ddfa1> (REST)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ad8ddfa1>?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ad8ddfa1> ... yes</span></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> JSON-RPC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> adapter?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> no</span></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Current</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> directory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> empty.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Please</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> choose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> how</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> proceed:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> »</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> Ignore</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> files</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> continue</span></span>
<span class="line" data-v-ad8ddfa1></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>Scaffolding</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ad8ddfa1> \\V</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1>uesence</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ad8ddfa1>\\a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1>rty-crafty...</span></span></code></pre></div><p data-v-ad8ddfa1>Запускаем:</p><div class="language-sh vp-adaptive-theme" data-v-ad8ddfa1><button title="Copy Code" class="copy" data-v-ad8ddfa1></button><span class="lang" data-v-ad8ddfa1>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-ad8ddfa1><code data-v-ad8ddfa1><span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> i</span></span>
<span class="line" data-v-ad8ddfa1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ad8ddfa1>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ad8ddfa1> dev</span></span></code></pre></div><p data-v-ad8ddfa1>Работает:</p><p data-v-ad8ddfa1><img src="`+t+'" alt="image" data-v-ad8ddfa1></p><p data-v-ad8ddfa1>Теперь ставим <code data-v-ad8ddfa1>base: &quot;/arty-crafty/&quot;</code> в <code data-v-ad8ddfa1>vite.config.ts</code>. Также надо поставить этот префикс перед путями в инъекциях <code data-v-ad8ddfa1>sw.js</code> и <code data-v-ad8ddfa1>splash-screen.html</code>, и в путях к иконкам в <code data-v-ad8ddfa1>manifest.json</code>. При хостинге со своим доменом нужно будет этот префикс убрать.</p><p data-v-ad8ddfa1>Загружаем все на GitHub.</p><p data-v-ad8ddfa1>Далее настраиваем GitHub Pages и получаем наш сайт по адресу: <a href="https://vuesence.github.io/arty-crafty/" target="_blank" rel="noreferrer" data-v-ad8ddfa1>https://vuesence.github.io/arty-crafty/</a></p><p data-v-ad8ddfa1>Сайт задеплоится сам автоматически из-за того, что у нас есть соответствующий GitHub Actions Workflow файл в проекте. Ветка <code data-v-ad8ddfa1>gh-pages</code> тоже создастся автоматически.</p><p data-v-ad8ddfa1>Теперь закомментируем подключение <code data-v-ad8ddfa1>service-worker.js</code> в файле <code data-v-ad8ddfa1>sw.js</code> - во время разработки кэширование сильно мешает. Включим его уже в продакшне.</p>',16),p=[n];function k(e,l,F,r,f,v){return s(),d("div",null,p)}const C=a(h,[["render",k],["__scopeId","data-v-ad8ddfa1"]]);export{y as __pageData,C as default};
