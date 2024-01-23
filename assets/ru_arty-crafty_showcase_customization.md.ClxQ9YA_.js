import{_ as a,c as e,o as d,U as t}from"./chunks/framework.P5TqXf0g.js";const s="/assets/header-1.2JwfDLlb.gif",i="/assets/website-1.oaXSktFw.gif",g=JSON.parse('{"title":"Кастомизация","description":"","frontmatter":{"pageClass":"arty-crafty","head":[["meta",{"name":"og:site_name","content":"Arty-Crafty - проект онлайн магазина"}],["meta",{"name":"og:image","content":"/images/arty-crafty-logo.png"}],["meta",{"name":"twitter:image","content":"/images/arty-crafty-logo.png"}]]},"headers":[],"relativePath":"ru/arty-crafty/showcase/customization.md","filePath":"ru/arty-crafty/showcase/customization.md","lastUpdated":1706026503000}'),n={name:"ru/arty-crafty/showcase/customization.md"},o=t(`<h1 id="кастомизация" tabindex="-1" data-v-e1d7e0db>Кастомизация <a class="header-anchor" href="#кастомизация" aria-label="Permalink to &quot;Кастомизация&quot;" data-v-e1d7e0db>​</a></h1><h2 id="персонализация" tabindex="-1" data-v-e1d7e0db>Персонализация <a class="header-anchor" href="#персонализация" aria-label="Permalink to &quot;Персонализация&quot;" data-v-e1d7e0db>​</a></h2><p data-v-e1d7e0db>Заменим везде имя на &quot;Arty-Crafty&quot;, изменим описание в <code data-v-e1d7e0db>package.json</code>. Найдем в интернете подходящую иконку для логотипа, и заменим штатную.</p><p data-v-e1d7e0db>Теперь скроем сайдбар в <code data-v-e1d7e0db>tablet</code> и <code data-v-e1d7e0db>desktop</code> режимах, потому что в нем должен быть каталог только в мобильном режиме. Для других каталог будет из меню в хедере.</p><p data-v-e1d7e0db>Далее, мы будем делать приложение в <a href="/ru/frontend/architecture.html" data-v-e1d7e0db>модульной архитектуре</a>. Общие компоненты, утилиты, композаблы и ресурсы у нас будут в модуле <code data-v-e1d7e0db>app</code>, то, что относится к каталогу, категориям товаров и самим товарам - в <code data-v-e1d7e0db>products</code>, и так далее. Поэтому нужно в <code data-v-e1d7e0db>src</code> создать дирректорию <code data-v-e1d7e0db>app</code> и перенести всё в неё, с заменой путей, где надо.</p><p data-v-e1d7e0db>Загружаем все на GitHub и ставим тэг - <a href="https://github.com/vuesence/arty-crafty/tree/7a829598144028099082e413b00840ef45c644fe" target="_blank" rel="noreferrer" data-v-e1d7e0db><code data-v-e1d7e0db>v0.1</code></a>. Для этого нужно опубликовать релиз.</p><h2 id="views" tabindex="-1" data-v-e1d7e0db>Views <a class="header-anchor" href="#views" aria-label="Permalink to &quot;Views&quot;" data-v-e1d7e0db>​</a></h2><p data-v-e1d7e0db>Чистим главную страницу, <code data-v-e1d7e0db>i18n</code> убираем пока подальше. Переименовываем основные view на:</p><ul data-v-e1d7e0db><li data-v-e1d7e0db>HomeView (остается)</li><li data-v-e1d7e0db>ProductCategoryView</li><li data-v-e1d7e0db>ProductView</li></ul><div class="info custom-block" data-v-e1d7e0db><p class="custom-block-title" data-v-e1d7e0db>Замечание</p><p data-v-e1d7e0db>Предпочтительно использовать термин View, а не Page потому, что View может быть частью другого View, а Page - нет (семантически).</p></div><p data-v-e1d7e0db><code data-v-e1d7e0db>ProductCategoryView</code> и <code data-v-e1d7e0db>ProductView</code> убираем в директорию <code data-v-e1d7e0db>views</code> модуля <code data-v-e1d7e0db>products</code>.</p><h2 id="routes" tabindex="-1" data-v-e1d7e0db>Routes <a class="header-anchor" href="#routes" aria-label="Permalink to &quot;Routes&quot;" data-v-e1d7e0db>​</a></h2><p data-v-e1d7e0db>Обновляем <code data-v-e1d7e0db>routes</code>. Добавляем роуты для <code data-v-e1d7e0db>product</code>, <code data-v-e1d7e0db>category</code>, <code data-v-e1d7e0db>favourites</code>, <code data-v-e1d7e0db>cart</code> и <code data-v-e1d7e0db>login</code></p><div class="language-js vp-adaptive-theme" data-v-e1d7e0db><button title="Copy Code" class="copy" data-v-e1d7e0db></button><span class="lang" data-v-e1d7e0db>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-e1d7e0db><code data-v-e1d7e0db><span class="line" data-v-e1d7e0db><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e1d7e0db>const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e1d7e0db> routes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e1d7e0db>:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e1d7e0db> RouteRecordRaw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e1d7e0db>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db> [</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-e1d7e0db>  // ...</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>  {</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e1d7e0db>&quot;/product/:productId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>,</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e1d7e0db>&quot;product&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>,</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>    component: ProductView,</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>  },</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>  {</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e1d7e0db>&quot;/category/:categoryId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>,</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e1d7e0db>&quot;category&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>,</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>    component: ProductCategoryView,</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>  },</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>  {</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e1d7e0db>&quot;/favourites&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>,</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e1d7e0db>&quot;favourites&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>,</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>    component: ProductCategoryView,</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>  },</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-e1d7e0db>  // ...</span></span>
<span class="line" data-v-e1d7e0db><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e1d7e0db>];</span></span></code></pre></div><p data-v-e1d7e0db>Маршруты пока оставляем в главном модуле, при росте их числа - разобьем.</p><p data-v-e1d7e0db>Отмечаем, что в солидных магазинах ссылка на категорию выглядит примерно так: <code data-v-e1d7e0db>/category/muzhskaya-odezhda-7542/</code>. То есть, slug названия категории и её id. У нас будет пока только <code data-v-e1d7e0db>categoryId</code>, но в дальнейшем мы сделаем такую человеко-понятную ссылку - это полезно для UX и для SEO. То же самое с продуктами.</p><h2 id="header" tabindex="-1" data-v-e1d7e0db>Header <a class="header-anchor" href="#header" aria-label="Permalink to &quot;Header&quot;" data-v-e1d7e0db>​</a></h2><p data-v-e1d7e0db>Делаем хедер - с лого, поисковой строкой, иконками корзины, логина/аккаунта, избранного справа, и снизу меню с 2-3 категориями.</p><p data-v-e1d7e0db>На аналогичных сайтах поисковая строка может быть весьма непростой - с выпадающим меню с подсказками, например, или каталогом. Поэтому сразу выделим её в отдельный компонент - <code data-v-e1d7e0db>AppSearchBar</code>. Находим в интернете подходящую стилизацию <code data-v-e1d7e0db>input</code> и используем её.</p><p data-v-e1d7e0db>Подходящие иконки можно поискать на <a href="https://iconbuddy.app/" target="_blank" rel="noreferrer" data-v-e1d7e0db>iconbuddy.app</a> и <a href="https://icones.js.org/" target="_blank" rel="noreferrer" data-v-e1d7e0db>icones.js.org</a>. Для их отображения используем <code data-v-e1d7e0db>BaseIcon</code>.</p><p data-v-e1d7e0db>Добавляем немного эффектов, адаптивности, и получаем:</p><p data-v-e1d7e0db><img src="`+s+'" alt="image" data-v-e1d7e0db></p><h2 id="sidebar" tabindex="-1" data-v-e1d7e0db>Sidebar <a class="header-anchor" href="#sidebar" aria-label="Permalink to &quot;Sidebar&quot;" data-v-e1d7e0db>​</a></h2><p data-v-e1d7e0db>В выдвигающемся слева сайдбаре также захардкодим несколько категорий. Более тщательную кастомизацию оставим на потом.</p><p data-v-e1d7e0db>В итоге:</p><p data-v-e1d7e0db><img src="'+i+'" alt="image" data-v-e1d7e0db></p><h2 id="небольшои-рефакторинг" tabindex="-1" data-v-e1d7e0db>Небольшой рефакторинг <a class="header-anchor" href="#небольшои-рефакторинг" aria-label="Permalink to &quot;Небольшой рефакторинг&quot;" data-v-e1d7e0db>​</a></h2><p data-v-e1d7e0db>Переименуем наш кастомизированный компонент <code data-v-e1d7e0db>MantineSimpleHeader</code> в <code data-v-e1d7e0db>AppHeader</code> и все остальные также.</p><p data-v-e1d7e0db>Загружаем в репозиторий и ставим тэг - <a href="https://github.com/vuesence/arty-crafty/tree/3fedcb52cb3e9c24387f81a40396694d4c9eba75" target="_blank" rel="noreferrer" data-v-e1d7e0db><code data-v-e1d7e0db>v0.2</code></a>.</p>',29),p=[o];function r(l,c,h,b,v,k){return d(),e("div",null,p)}const u=a(n,[["render",r],["__scopeId","data-v-e1d7e0db"]]);export{g as __pageData,u as default};
