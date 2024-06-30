import{_ as a,o as e,c as t,a4 as s}from"./chunks/framework.B8KxSsRZ.js";const i="/assets/header-1.DYnB8MuV.gif",c="/assets/website-1.ChpdKS0X.gif",E=JSON.parse('{"title":"Кастомизация","description":"","frontmatter":{"pageClass":"arty-crafty","head":[["meta",{"name":"og:site_name","content":"Arty-Crafty - проект онлайн магазина"}],["meta",{"name":"og:image","content":"/images/arty-crafty-logo.png"}],["meta",{"name":"twitter:image","content":"/images/arty-crafty-logo.png"}]]},"headers":[],"relativePath":"ru/arty-crafty/showcase/customization.md","filePath":"ru/arty-crafty/showcase/customization.md","lastUpdated":1719725718000}'),d={name:"ru/arty-crafty/showcase/customization.md"},n=s(`<h1 id="кастомизация" tabindex="-1" data-v-e2068bcf>Кастомизация <a class="header-anchor" href="#кастомизация" aria-label="Permalink to &quot;Кастомизация&quot;" data-v-e2068bcf>​</a></h1><h2 id="персонализация" tabindex="-1" data-v-e2068bcf>Персонализация <a class="header-anchor" href="#персонализация" aria-label="Permalink to &quot;Персонализация&quot;" data-v-e2068bcf>​</a></h2><p data-v-e2068bcf>Заменим везде имя на &quot;Arty-Crafty&quot;, изменим описание в <code data-v-e2068bcf>package.json</code>. Найдем в интернете подходящую иконку для логотипа, и заменим штатную.</p><p data-v-e2068bcf>Теперь скроем сайдбар в <code data-v-e2068bcf>tablet</code> и <code data-v-e2068bcf>desktop</code> режимах, потому что в нем должен быть каталог только в мобильном режиме. Для других каталог будет из меню в хедере.</p><p data-v-e2068bcf>Далее, мы будем делать приложение в <a href="/ru/frontend/architecture.html" data-v-e2068bcf>модульной архитектуре</a>. Общие компоненты, утилиты, композаблы и ресурсы у нас будут в модуле <code data-v-e2068bcf>app</code>, то, что относится к каталогу, категориям товаров и самим товарам - в <code data-v-e2068bcf>products</code>, и так далее. Поэтому нужно в <code data-v-e2068bcf>src</code> создать дирректорию <code data-v-e2068bcf>app</code> и перенести всё в неё, с заменой путей, где надо.</p><p data-v-e2068bcf>Загружаем все на GitHub и ставим тэг - <a href="https://github.com/vuesence/arty-crafty/tree/7a829598144028099082e413b00840ef45c644fe" target="_blank" rel="noreferrer" data-v-e2068bcf><code data-v-e2068bcf>v0.1</code></a>. Для этого нужно опубликовать релиз.</p><h2 id="views" tabindex="-1" data-v-e2068bcf>Views <a class="header-anchor" href="#views" aria-label="Permalink to &quot;Views&quot;" data-v-e2068bcf>​</a></h2><p data-v-e2068bcf>Чистим главную страницу, <code data-v-e2068bcf>i18n</code> убираем пока подальше. Переименовываем основные view на:</p><ul data-v-e2068bcf><li data-v-e2068bcf>HomeView (остается)</li><li data-v-e2068bcf>ProductCategoryView</li><li data-v-e2068bcf>ProductView</li></ul><div class="info custom-block" data-v-e2068bcf><p class="custom-block-title" data-v-e2068bcf>Замечание</p><p data-v-e2068bcf>Предпочтительно использовать термин View, а не Page потому, что View может быть частью другого View, а Page - нет (семантически).</p></div><p data-v-e2068bcf><code data-v-e2068bcf>ProductCategoryView</code> и <code data-v-e2068bcf>ProductView</code> убираем в директорию <code data-v-e2068bcf>views</code> модуля <code data-v-e2068bcf>products</code>.</p><h2 id="routes" tabindex="-1" data-v-e2068bcf>Routes <a class="header-anchor" href="#routes" aria-label="Permalink to &quot;Routes&quot;" data-v-e2068bcf>​</a></h2><p data-v-e2068bcf>Обновляем <code data-v-e2068bcf>routes</code>. Добавляем роуты для <code data-v-e2068bcf>product</code>, <code data-v-e2068bcf>category</code>, <code data-v-e2068bcf>favourites</code>, <code data-v-e2068bcf>cart</code> и <code data-v-e2068bcf>login</code></p><div class="language-js vp-adaptive-theme" data-v-e2068bcf><button title="Copy Code" class="copy" data-v-e2068bcf></button><span class="lang" data-v-e2068bcf>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-e2068bcf><code data-v-e2068bcf><span class="line" data-v-e2068bcf><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e2068bcf>const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e2068bcf> routes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e2068bcf>:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e2068bcf> RouteRecordRaw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e2068bcf>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf> [</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-e2068bcf>  // ...</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>  {</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e2068bcf>&quot;/product/:productId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>,</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e2068bcf>&quot;product&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>,</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>    component: ProductView,</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>  },</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>  {</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e2068bcf>&quot;/category/:categoryId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>,</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e2068bcf>&quot;category&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>,</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>    component: ProductCategoryView,</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>  },</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>  {</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>    path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e2068bcf>&quot;/favourites&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>,</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e2068bcf>&quot;favourites&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>,</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>    component: ProductCategoryView,</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>  },</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-e2068bcf>  // ...</span></span>
<span class="line" data-v-e2068bcf><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e2068bcf>];</span></span></code></pre></div><p data-v-e2068bcf>Маршруты пока оставляем в главном модуле, при росте их числа - разобьем.</p><p data-v-e2068bcf>Отмечаем, что в солидных магазинах ссылка на категорию выглядит примерно так: <code data-v-e2068bcf>/category/muzhskaya-odezhda-7542/</code>. То есть, slug названия категории и её id. У нас будет пока только <code data-v-e2068bcf>categoryId</code>, но в дальнейшем мы сделаем такую человеко-понятную ссылку - это полезно для UX и для SEO. То же самое с продуктами.</p><h2 id="header" tabindex="-1" data-v-e2068bcf>Header <a class="header-anchor" href="#header" aria-label="Permalink to &quot;Header&quot;" data-v-e2068bcf>​</a></h2><p data-v-e2068bcf>Делаем хедер - с лого, поисковой строкой, иконками корзины, логина/аккаунта, избранного справа, и снизу меню с 2-3 категориями.</p><p data-v-e2068bcf>На аналогичных сайтах поисковая строка может быть весьма непростой - с выпадающим меню с подсказками, например, или каталогом. Поэтому сразу выделим её в отдельный компонент - <code data-v-e2068bcf>AppSearchBar</code>. Находим в интернете подходящую стилизацию <code data-v-e2068bcf>input</code> и используем её.</p><p data-v-e2068bcf>Подходящие иконки можно поискать на <a href="https://iconbuddy.app/" target="_blank" rel="noreferrer" data-v-e2068bcf>iconbuddy.app</a> и <a href="https://icones.js.org/" target="_blank" rel="noreferrer" data-v-e2068bcf>icones.js.org</a>. Для их отображения используем <code data-v-e2068bcf>BaseIcon</code>.</p><p data-v-e2068bcf>Добавляем немного эффектов, адаптивности, и получаем:</p><p data-v-e2068bcf><img src="`+i+'" alt="image" data-v-e2068bcf></p><h2 id="sidebar" tabindex="-1" data-v-e2068bcf>Sidebar <a class="header-anchor" href="#sidebar" aria-label="Permalink to &quot;Sidebar&quot;" data-v-e2068bcf>​</a></h2><p data-v-e2068bcf>В выдвигающемся слева сайдбаре также захардкодим несколько категорий. Более тщательную кастомизацию оставим на потом.</p><p data-v-e2068bcf>В итоге:</p><p data-v-e2068bcf><img src="'+c+'" alt="image" data-v-e2068bcf></p><h2 id="небольшои-рефакторинг" tabindex="-1" data-v-e2068bcf>Небольшой рефакторинг <a class="header-anchor" href="#небольшои-рефакторинг" aria-label="Permalink to &quot;Небольшой рефакторинг&quot;" data-v-e2068bcf>​</a></h2><p data-v-e2068bcf>Переименуем наш кастомизированный компонент <code data-v-e2068bcf>MantineSimpleHeader</code> в <code data-v-e2068bcf>AppHeader</code> и все остальные также.</p><p data-v-e2068bcf>Загружаем в репозиторий и ставим тэг - <a href="https://github.com/vuesence/arty-crafty/tree/3fedcb52cb3e9c24387f81a40396694d4c9eba75" target="_blank" rel="noreferrer" data-v-e2068bcf><code data-v-e2068bcf>v0.2</code></a>.</p>',29),o=[n];function p(r,l,h,f,b,v){return e(),t("div",null,o)}const u=a(d,[["render",p],["__scopeId","data-v-e2068bcf"]]);export{E as __pageData,u as default};
