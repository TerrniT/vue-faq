import{_ as a,o as d,c as t,aa as s}from"./chunks/framework.D5hYG7Sk.js";const e="/assets/header-1.DYnB8MuV.gif",i="/assets/website-1.ChpdKS0X.gif",E=JSON.parse('{"title":"Кастомизация","description":"","frontmatter":{"pageClass":"arty-crafty","head":[["meta",{"name":"og:site_name","content":"Arty-Crafty - проект онлайн магазина"}],["meta",{"name":"og:image","content":"/images/arty-crafty-logo.png"}],["meta",{"name":"twitter:image","content":"/images/arty-crafty-logo.png"}]]},"headers":[],"relativePath":"ru/arty-crafty/showcase/customization.md","filePath":"ru/arty-crafty/showcase/customization.md","lastUpdated":1711765728000}'),n={name:"ru/arty-crafty/showcase/customization.md"},o=s(`<h1 id="кастомизация" tabindex="-1" data-v-3a5abd3f>Кастомизация <a class="header-anchor" href="#кастомизация" aria-label="Permalink to &quot;Кастомизация&quot;" data-v-3a5abd3f>​</a></h1><h2 id="персонализация" tabindex="-1" data-v-3a5abd3f>Персонализация <a class="header-anchor" href="#персонализация" aria-label="Permalink to &quot;Персонализация&quot;" data-v-3a5abd3f>​</a></h2><p data-v-3a5abd3f>Заменим везде имя на &quot;Arty-Crafty&quot;, изменим описание в <code data-v-3a5abd3f>package.json</code>. Найдем в интернете подходящую иконку для логотипа, и заменим штатную.</p><p data-v-3a5abd3f>Теперь скроем сайдбар в <code data-v-3a5abd3f>tablet</code> и <code data-v-3a5abd3f>desktop</code> режимах, потому что в нем должен быть каталог только в мобильном режиме. Для других каталог будет из меню в хедере.</p><p data-v-3a5abd3f>Далее, мы будем делать приложение в <a href="/ru/frontend/architecture.html" data-v-3a5abd3f>модульной архитектуре</a>. Общие компоненты, утилиты, композаблы и ресурсы у нас будут в модуле <code data-v-3a5abd3f>app</code>, то, что относится к каталогу, категориям товаров и самим товарам - в <code data-v-3a5abd3f>products</code>, и так далее. Поэтому нужно в <code data-v-3a5abd3f>src</code> создать дирректорию <code data-v-3a5abd3f>app</code> и перенести всё в неё, с заменой путей, где надо.</p><p data-v-3a5abd3f>Загружаем все на GitHub и ставим тэг - <a href="https://github.com/vuesence/arty-crafty/tree/7a829598144028099082e413b00840ef45c644fe" target="_blank" rel="noreferrer" data-v-3a5abd3f><code data-v-3a5abd3f>v0.1</code></a>. Для этого нужно опубликовать релиз.</p><h2 id="views" tabindex="-1" data-v-3a5abd3f>Views <a class="header-anchor" href="#views" aria-label="Permalink to &quot;Views&quot;" data-v-3a5abd3f>​</a></h2><p data-v-3a5abd3f>Чистим главную страницу, <code data-v-3a5abd3f>i18n</code> убираем пока подальше. Переименовываем основные view на:</p><ul data-v-3a5abd3f><li data-v-3a5abd3f>HomeView (остается)</li><li data-v-3a5abd3f>ProductCategoryView</li><li data-v-3a5abd3f>ProductView</li></ul><div class="info custom-block" data-v-3a5abd3f><p class="custom-block-title" data-v-3a5abd3f>Замечание</p><p data-v-3a5abd3f>Предпочтительно использовать термин View, а не Page потому, что View может быть частью другого View, а Page - нет (семантически).</p></div><p data-v-3a5abd3f><code data-v-3a5abd3f>ProductCategoryView</code> и <code data-v-3a5abd3f>ProductView</code> убираем в директорию <code data-v-3a5abd3f>views</code> модуля <code data-v-3a5abd3f>products</code>.</p><h2 id="routes" tabindex="-1" data-v-3a5abd3f>Routes <a class="header-anchor" href="#routes" aria-label="Permalink to &quot;Routes&quot;" data-v-3a5abd3f>​</a></h2><p data-v-3a5abd3f>Обновляем <code data-v-3a5abd3f>routes</code>. Добавляем роуты для <code data-v-3a5abd3f>product</code>, <code data-v-3a5abd3f>category</code>, <code data-v-3a5abd3f>favourites</code>, <code data-v-3a5abd3f>cart</code> и <code data-v-3a5abd3f>login</code></p><div class="language-js vp-adaptive-theme" data-v-3a5abd3f><button title="Copy Code" class="copy" data-v-3a5abd3f></button><span class="lang" data-v-3a5abd3f>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-3a5abd3f><code data-v-3a5abd3f><span class="line" data-v-3a5abd3f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3a5abd3f>const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-3a5abd3f> routes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3a5abd3f>:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-3a5abd3f> RouteRecordRaw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-3a5abd3f>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f> [</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-3a5abd3f>  // ...</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>  {</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-3a5abd3f>&quot;/product/:productId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>,</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-3a5abd3f>&quot;product&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>,</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>    component: ProductView,</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>  },</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>  {</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-3a5abd3f>&quot;/category/:categoryId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>,</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-3a5abd3f>&quot;category&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>,</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>    component: ProductCategoryView,</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>  },</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>  {</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-3a5abd3f>&quot;/favourites&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>,</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-3a5abd3f>&quot;favourites&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>,</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>    component: ProductCategoryView,</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>  },</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-3a5abd3f>  // ...</span></span>
<span class="line" data-v-3a5abd3f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-3a5abd3f>];</span></span></code></pre></div><p data-v-3a5abd3f>Маршруты пока оставляем в главном модуле, при росте их числа - разобьем.</p><p data-v-3a5abd3f>Отмечаем, что в солидных магазинах ссылка на категорию выглядит примерно так: <code data-v-3a5abd3f>/category/muzhskaya-odezhda-7542/</code>. То есть, slug названия категории и её id. У нас будет пока только <code data-v-3a5abd3f>categoryId</code>, но в дальнейшем мы сделаем такую человеко-понятную ссылку - это полезно для UX и для SEO. То же самое с продуктами.</p><h2 id="header" tabindex="-1" data-v-3a5abd3f>Header <a class="header-anchor" href="#header" aria-label="Permalink to &quot;Header&quot;" data-v-3a5abd3f>​</a></h2><p data-v-3a5abd3f>Делаем хедер - с лого, поисковой строкой, иконками корзины, логина/аккаунта, избранного справа, и снизу меню с 2-3 категориями.</p><p data-v-3a5abd3f>На аналогичных сайтах поисковая строка может быть весьма непростой - с выпадающим меню с подсказками, например, или каталогом. Поэтому сразу выделим её в отдельный компонент - <code data-v-3a5abd3f>AppSearchBar</code>. Находим в интернете подходящую стилизацию <code data-v-3a5abd3f>input</code> и используем её.</p><p data-v-3a5abd3f>Подходящие иконки можно поискать на <a href="https://iconbuddy.app/" target="_blank" rel="noreferrer" data-v-3a5abd3f>iconbuddy.app</a> и <a href="https://icones.js.org/" target="_blank" rel="noreferrer" data-v-3a5abd3f>icones.js.org</a>. Для их отображения используем <code data-v-3a5abd3f>BaseIcon</code>.</p><p data-v-3a5abd3f>Добавляем немного эффектов, адаптивности, и получаем:</p><p data-v-3a5abd3f><img src="`+e+'" alt="image" data-v-3a5abd3f></p><h2 id="sidebar" tabindex="-1" data-v-3a5abd3f>Sidebar <a class="header-anchor" href="#sidebar" aria-label="Permalink to &quot;Sidebar&quot;" data-v-3a5abd3f>​</a></h2><p data-v-3a5abd3f>В выдвигающемся слева сайдбаре также захардкодим несколько категорий. Более тщательную кастомизацию оставим на потом.</p><p data-v-3a5abd3f>В итоге:</p><p data-v-3a5abd3f><img src="'+i+'" alt="image" data-v-3a5abd3f></p><h2 id="небольшои-рефакторинг" tabindex="-1" data-v-3a5abd3f>Небольшой рефакторинг <a class="header-anchor" href="#небольшои-рефакторинг" aria-label="Permalink to &quot;Небольшой рефакторинг&quot;" data-v-3a5abd3f>​</a></h2><p data-v-3a5abd3f>Переименуем наш кастомизированный компонент <code data-v-3a5abd3f>MantineSimpleHeader</code> в <code data-v-3a5abd3f>AppHeader</code> и все остальные также.</p><p data-v-3a5abd3f>Загружаем в репозиторий и ставим тэг - <a href="https://github.com/vuesence/arty-crafty/tree/3fedcb52cb3e9c24387f81a40396694d4c9eba75" target="_blank" rel="noreferrer" data-v-3a5abd3f><code data-v-3a5abd3f>v0.2</code></a>.</p>',29),p=[o];function r(l,c,h,f,b,v){return d(),t("div",null,p)}const u=a(n,[["render",r],["__scopeId","data-v-3a5abd3f"]]);export{E as __pageData,u as default};
