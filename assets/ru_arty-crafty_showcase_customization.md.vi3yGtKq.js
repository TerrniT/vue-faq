import{_ as a,o as t,c as s,a4 as e}from"./chunks/framework.B8KxSsRZ.js";const i="/assets/header-1.DYnB8MuV.gif",c="/assets/website-1.ChpdKS0X.gif",E=JSON.parse('{"title":"Кастомизация","description":"","frontmatter":{"pageClass":"arty-crafty","head":[["meta",{"name":"og:site_name","content":"Arty-Crafty - проект онлайн магазина"}],["meta",{"name":"og:image","content":"/images/arty-crafty-logo.png"}],["meta",{"name":"twitter:image","content":"/images/arty-crafty-logo.png"}]]},"headers":[],"relativePath":"ru/arty-crafty/showcase/customization.md","filePath":"ru/arty-crafty/showcase/customization.md","lastUpdated":1715855801000}'),d={name:"ru/arty-crafty/showcase/customization.md"},b=e(`<h1 id="кастомизация" tabindex="-1" data-v-b9c3b15f>Кастомизация <a class="header-anchor" href="#кастомизация" aria-label="Permalink to &quot;Кастомизация&quot;" data-v-b9c3b15f>​</a></h1><h2 id="персонализация" tabindex="-1" data-v-b9c3b15f>Персонализация <a class="header-anchor" href="#персонализация" aria-label="Permalink to &quot;Персонализация&quot;" data-v-b9c3b15f>​</a></h2><p data-v-b9c3b15f>Заменим везде имя на &quot;Arty-Crafty&quot;, изменим описание в <code data-v-b9c3b15f>package.json</code>. Найдем в интернете подходящую иконку для логотипа, и заменим штатную.</p><p data-v-b9c3b15f>Теперь скроем сайдбар в <code data-v-b9c3b15f>tablet</code> и <code data-v-b9c3b15f>desktop</code> режимах, потому что в нем должен быть каталог только в мобильном режиме. Для других каталог будет из меню в хедере.</p><p data-v-b9c3b15f>Далее, мы будем делать приложение в <a href="/ru/frontend/architecture.html" data-v-b9c3b15f>модульной архитектуре</a>. Общие компоненты, утилиты, композаблы и ресурсы у нас будут в модуле <code data-v-b9c3b15f>app</code>, то, что относится к каталогу, категориям товаров и самим товарам - в <code data-v-b9c3b15f>products</code>, и так далее. Поэтому нужно в <code data-v-b9c3b15f>src</code> создать дирректорию <code data-v-b9c3b15f>app</code> и перенести всё в неё, с заменой путей, где надо.</p><p data-v-b9c3b15f>Загружаем все на GitHub и ставим тэг - <a href="https://github.com/vuesence/arty-crafty/tree/7a829598144028099082e413b00840ef45c644fe" target="_blank" rel="noreferrer" data-v-b9c3b15f><code data-v-b9c3b15f>v0.1</code></a>. Для этого нужно опубликовать релиз.</p><h2 id="views" tabindex="-1" data-v-b9c3b15f>Views <a class="header-anchor" href="#views" aria-label="Permalink to &quot;Views&quot;" data-v-b9c3b15f>​</a></h2><p data-v-b9c3b15f>Чистим главную страницу, <code data-v-b9c3b15f>i18n</code> убираем пока подальше. Переименовываем основные view на:</p><ul data-v-b9c3b15f><li data-v-b9c3b15f>HomeView (остается)</li><li data-v-b9c3b15f>ProductCategoryView</li><li data-v-b9c3b15f>ProductView</li></ul><div class="info custom-block" data-v-b9c3b15f><p class="custom-block-title" data-v-b9c3b15f>Замечание</p><p data-v-b9c3b15f>Предпочтительно использовать термин View, а не Page потому, что View может быть частью другого View, а Page - нет (семантически).</p></div><p data-v-b9c3b15f><code data-v-b9c3b15f>ProductCategoryView</code> и <code data-v-b9c3b15f>ProductView</code> убираем в директорию <code data-v-b9c3b15f>views</code> модуля <code data-v-b9c3b15f>products</code>.</p><h2 id="routes" tabindex="-1" data-v-b9c3b15f>Routes <a class="header-anchor" href="#routes" aria-label="Permalink to &quot;Routes&quot;" data-v-b9c3b15f>​</a></h2><p data-v-b9c3b15f>Обновляем <code data-v-b9c3b15f>routes</code>. Добавляем роуты для <code data-v-b9c3b15f>product</code>, <code data-v-b9c3b15f>category</code>, <code data-v-b9c3b15f>favourites</code>, <code data-v-b9c3b15f>cart</code> и <code data-v-b9c3b15f>login</code></p><div class="language-js vp-adaptive-theme" data-v-b9c3b15f><button title="Copy Code" class="copy" data-v-b9c3b15f></button><span class="lang" data-v-b9c3b15f>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-b9c3b15f><code data-v-b9c3b15f><span class="line" data-v-b9c3b15f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b9c3b15f>const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-b9c3b15f> routes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b9c3b15f>:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b9c3b15f> RouteRecordRaw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b9c3b15f>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f> [</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-b9c3b15f>  // ...</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>  {</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-b9c3b15f>&quot;/product/:productId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>,</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-b9c3b15f>&quot;product&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>,</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>    component: ProductView,</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>  },</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>  {</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-b9c3b15f>&quot;/category/:categoryId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>,</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-b9c3b15f>&quot;category&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>,</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>    component: ProductCategoryView,</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>  },</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>  {</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-b9c3b15f>&quot;/favourites&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>,</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-b9c3b15f>&quot;favourites&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>,</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>    component: ProductCategoryView,</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>  },</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-b9c3b15f>  // ...</span></span>
<span class="line" data-v-b9c3b15f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b9c3b15f>];</span></span></code></pre></div><p data-v-b9c3b15f>Маршруты пока оставляем в главном модуле, при росте их числа - разобьем.</p><p data-v-b9c3b15f>Отмечаем, что в солидных магазинах ссылка на категорию выглядит примерно так: <code data-v-b9c3b15f>/category/muzhskaya-odezhda-7542/</code>. То есть, slug названия категории и её id. У нас будет пока только <code data-v-b9c3b15f>categoryId</code>, но в дальнейшем мы сделаем такую человеко-понятную ссылку - это полезно для UX и для SEO. То же самое с продуктами.</p><h2 id="header" tabindex="-1" data-v-b9c3b15f>Header <a class="header-anchor" href="#header" aria-label="Permalink to &quot;Header&quot;" data-v-b9c3b15f>​</a></h2><p data-v-b9c3b15f>Делаем хедер - с лого, поисковой строкой, иконками корзины, логина/аккаунта, избранного справа, и снизу меню с 2-3 категориями.</p><p data-v-b9c3b15f>На аналогичных сайтах поисковая строка может быть весьма непростой - с выпадающим меню с подсказками, например, или каталогом. Поэтому сразу выделим её в отдельный компонент - <code data-v-b9c3b15f>AppSearchBar</code>. Находим в интернете подходящую стилизацию <code data-v-b9c3b15f>input</code> и используем её.</p><p data-v-b9c3b15f>Подходящие иконки можно поискать на <a href="https://iconbuddy.app/" target="_blank" rel="noreferrer" data-v-b9c3b15f>iconbuddy.app</a> и <a href="https://icones.js.org/" target="_blank" rel="noreferrer" data-v-b9c3b15f>icones.js.org</a>. Для их отображения используем <code data-v-b9c3b15f>BaseIcon</code>.</p><p data-v-b9c3b15f>Добавляем немного эффектов, адаптивности, и получаем:</p><p data-v-b9c3b15f><img src="`+i+'" alt="image" data-v-b9c3b15f></p><h2 id="sidebar" tabindex="-1" data-v-b9c3b15f>Sidebar <a class="header-anchor" href="#sidebar" aria-label="Permalink to &quot;Sidebar&quot;" data-v-b9c3b15f>​</a></h2><p data-v-b9c3b15f>В выдвигающемся слева сайдбаре также захардкодим несколько категорий. Более тщательную кастомизацию оставим на потом.</p><p data-v-b9c3b15f>В итоге:</p><p data-v-b9c3b15f><img src="'+c+'" alt="image" data-v-b9c3b15f></p><h2 id="небольшои-рефакторинг" tabindex="-1" data-v-b9c3b15f>Небольшой рефакторинг <a class="header-anchor" href="#небольшои-рефакторинг" aria-label="Permalink to &quot;Небольшой рефакторинг&quot;" data-v-b9c3b15f>​</a></h2><p data-v-b9c3b15f>Переименуем наш кастомизированный компонент <code data-v-b9c3b15f>MantineSimpleHeader</code> в <code data-v-b9c3b15f>AppHeader</code> и все остальные также.</p><p data-v-b9c3b15f>Загружаем в репозиторий и ставим тэг - <a href="https://github.com/vuesence/arty-crafty/tree/3fedcb52cb3e9c24387f81a40396694d4c9eba75" target="_blank" rel="noreferrer" data-v-b9c3b15f><code data-v-b9c3b15f>v0.2</code></a>.</p>',29),n=[b];function o(p,r,l,h,f,v){return t(),s("div",null,n)}const u=a(d,[["render",o],["__scopeId","data-v-b9c3b15f"]]);export{E as __pageData,u as default};
