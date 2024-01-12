import{_ as a,c as e,o as d,U as t}from"./chunks/framework.lBFuN894.js";const s="/assets/header-1.2JwfDLlb.gif",i="/assets/website-1.oaXSktFw.gif",u=JSON.parse('{"title":"Кастомизация","description":"","frontmatter":{"pageClass":"arty-crafty","head":[["meta",{"name":"og:site_name","content":"Arty-Crafty - проект онлайн магазина"}],["meta",{"name":"og:image","content":"/images/arty-crafty-logo.png"}],["meta",{"name":"twitter:image","content":"/images/arty-crafty-logo.png"}]]},"headers":[],"relativePath":"ru/arty-crafty/showcase/customization.md","filePath":"ru/arty-crafty/showcase/customization.md","lastUpdated":1705062307000}'),n={name:"ru/arty-crafty/showcase/customization.md"},o=t(`<h1 id="кастомизация" tabindex="-1" data-v-d44601ee>Кастомизация <a class="header-anchor" href="#кастомизация" aria-label="Permalink to &quot;Кастомизация&quot;" data-v-d44601ee>​</a></h1><h2 id="персонализация" tabindex="-1" data-v-d44601ee>Персонализация <a class="header-anchor" href="#персонализация" aria-label="Permalink to &quot;Персонализация&quot;" data-v-d44601ee>​</a></h2><p data-v-d44601ee>Заменим везде имя на &quot;Arty-Crafty&quot;, изменим описание в <code data-v-d44601ee>package.json</code>. Найдем в интернете подходящую иконку для логотипа, и заменим штатную.</p><p data-v-d44601ee>Теперь скроем сайдбар в <code data-v-d44601ee>tablet</code> и <code data-v-d44601ee>desktop</code> режимах, потому что в нем должен быть каталог только в мобильном режиме. Для других каталог будет из меню в хедере.</p><p data-v-d44601ee>Далее, мы будем делать приложение в <a href="/ru/frontend/architecture.html" data-v-d44601ee>модульной архитектуре</a>. Общие компоненты, утилиты, композаблы и ресурсы у нас будут в модуле <code data-v-d44601ee>app</code>, то, что относится к каталогу, категориям товаров и самим товарам - в <code data-v-d44601ee>products</code>, и так далее. Поэтому нужно в <code data-v-d44601ee>src</code> создать дирректорию <code data-v-d44601ee>app</code> и перенести всё в неё, с заменой путей, где надо.</p><p data-v-d44601ee>Загружаем все на GitHub и ставим тэг - <a href="https://github.com/vuesence/arty-crafty/tree/7a829598144028099082e413b00840ef45c644fe" target="_blank" rel="noreferrer" data-v-d44601ee><code data-v-d44601ee>v0.1</code></a>. Для этого нужно опубликовать релиз.</p><h2 id="views" tabindex="-1" data-v-d44601ee>Views <a class="header-anchor" href="#views" aria-label="Permalink to &quot;Views&quot;" data-v-d44601ee>​</a></h2><p data-v-d44601ee>Чистим главную страницу, <code data-v-d44601ee>i18n</code> убираем пока подальше. Переименовываем основные view на:</p><ul data-v-d44601ee><li data-v-d44601ee>HomeView (остается)</li><li data-v-d44601ee>ProductCategoryView</li><li data-v-d44601ee>ProductView</li></ul><div class="info custom-block" data-v-d44601ee><p class="custom-block-title" data-v-d44601ee>Замечание</p><p data-v-d44601ee>Предпочтительно использовать термин View, а не Page потому, что View может быть частью другого View, а Page - нет (семантически).</p></div><p data-v-d44601ee><code data-v-d44601ee>ProductCategoryView</code> и <code data-v-d44601ee>ProductView</code> убираем в директорию <code data-v-d44601ee>views</code> модуля <code data-v-d44601ee>products</code>.</p><h2 id="routes" tabindex="-1" data-v-d44601ee>Routes <a class="header-anchor" href="#routes" aria-label="Permalink to &quot;Routes&quot;" data-v-d44601ee>​</a></h2><p data-v-d44601ee>Обновляем <code data-v-d44601ee>routes</code>. Добавляем роуты для <code data-v-d44601ee>product</code>, <code data-v-d44601ee>category</code>, <code data-v-d44601ee>favourites</code>, <code data-v-d44601ee>cart</code> и <code data-v-d44601ee>login</code></p><div class="language-js vp-adaptive-theme" data-v-d44601ee><button title="Copy Code" class="copy" data-v-d44601ee></button><span class="lang" data-v-d44601ee>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-d44601ee><code data-v-d44601ee><span class="line" data-v-d44601ee><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d44601ee>const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d44601ee> routes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d44601ee>:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d44601ee> RouteRecordRaw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d44601ee>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee> [</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-d44601ee>  // ...</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>  {</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d44601ee>&quot;/product/:productId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>,</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d44601ee>&quot;product&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>,</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>    component: ProductView,</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>  },</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>  {</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d44601ee>&quot;/category/:categoryId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>,</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d44601ee>&quot;category&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>,</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>    component: ProductCategoryView,</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>  },</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>  {</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d44601ee>&quot;/favourites&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>,</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d44601ee>&quot;favourites&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>,</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>    component: ProductCategoryView,</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>  },</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-d44601ee>  // ...</span></span>
<span class="line" data-v-d44601ee><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d44601ee>];</span></span></code></pre></div><p data-v-d44601ee>Маршруты пока оставляем в главном модуле, при росте их числа - разобьем.</p><p data-v-d44601ee>Отмечаем, что в солидных магазинах ссылка на категорию выглядит примерно так: <code data-v-d44601ee>/category/muzhskaya-odezhda-7542/</code>. То есть, slug названия категории и её id. У нас будет пока только <code data-v-d44601ee>categoryId</code>, но в дальнейшем мы сделаем такую человеко-понятную ссылку - это полезно для UX и для SEO. То же самое с продуктами.</p><h2 id="header" tabindex="-1" data-v-d44601ee>Header <a class="header-anchor" href="#header" aria-label="Permalink to &quot;Header&quot;" data-v-d44601ee>​</a></h2><p data-v-d44601ee>Делаем хедер - с лого, поисковой строкой, иконками корзины, логина/аккаунта, избранного справа, и снизу меню с 2-3 категориями.</p><p data-v-d44601ee>На аналогичных сайтах поисковая строка может быть весьма непростой - с выпадающим меню с подсказками, например, или каталогом. Поэтому сразу выделим её в отдельный компонент - <code data-v-d44601ee>AppSearchBar</code>. Находим в интернете подходящую стилизацию <code data-v-d44601ee>input</code> и используем её.</p><p data-v-d44601ee>Подходящие иконки можно поискать на <a href="https://iconbuddy.app/" target="_blank" rel="noreferrer" data-v-d44601ee>iconbuddy.app</a> и <a href="https://icones.js.org/" target="_blank" rel="noreferrer" data-v-d44601ee>icones.js.org</a>. Для их отображения используем <code data-v-d44601ee>BaseIcon</code>.</p><p data-v-d44601ee>Добавляем немного эффектов, адаптивности, и получаем:</p><p data-v-d44601ee><img src="`+s+'" alt="image" data-v-d44601ee></p><h2 id="sidebar" tabindex="-1" data-v-d44601ee>Sidebar <a class="header-anchor" href="#sidebar" aria-label="Permalink to &quot;Sidebar&quot;" data-v-d44601ee>​</a></h2><p data-v-d44601ee>В выдвигающемся слева сайдбаре также захардкодим несколько категорий. Более тщательную кастомизацию оставим на потом.</p><p data-v-d44601ee>В итоге:</p><p data-v-d44601ee><img src="'+i+'" alt="image" data-v-d44601ee></p><h2 id="небольшои-рефакторинг" tabindex="-1" data-v-d44601ee>Небольшой рефакторинг <a class="header-anchor" href="#небольшои-рефакторинг" aria-label="Permalink to &quot;Небольшой рефакторинг&quot;" data-v-d44601ee>​</a></h2><p data-v-d44601ee>Переименуем наш кастомизированный компонент <code data-v-d44601ee>MantineSimpleHeader</code> в <code data-v-d44601ee>AppHeader</code> и все остальные также.</p><p data-v-d44601ee>Загружаем в репозиторий и ставим тэг - <a href="https://github.com/vuesence/arty-crafty/tree/3fedcb52cb3e9c24387f81a40396694d4c9eba75" target="_blank" rel="noreferrer" data-v-d44601ee><code data-v-d44601ee>v0.2</code></a>.</p>',29),p=[o];function r(l,c,h,v,k,E){return d(),e("div",null,p)}const y=a(n,[["render",r],["__scopeId","data-v-d44601ee"]]);export{u as __pageData,y as default};
