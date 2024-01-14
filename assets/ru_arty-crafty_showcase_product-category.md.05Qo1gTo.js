import{_ as e,c as a,o as t,U as o}from"./chunks/framework.P5TqXf0g.js";const r="/assets/product-category.K5z70KMk.jpg",g=JSON.parse('{"title":"Категория товаров","description":"","frontmatter":{"pageClass":"arty-crafty","head":[["meta",{"name":"og:site_name","content":"Arty-Crafty - проект онлайн магазина"}],["meta",{"name":"og:image","content":"/images/arty-crafty-logo.png"}],["meta",{"name":"twitter:image","content":"/images/arty-crafty-logo.png"}]]},"headers":[],"relativePath":"ru/arty-crafty/showcase/product-category.md","filePath":"ru/arty-crafty/showcase/product-category.md","lastUpdated":1705249693000}'),c={name:"ru/arty-crafty/showcase/product-category.md"},s=o('<h1 id="категория-товаров" tabindex="-1">Категория товаров <a class="header-anchor" href="#категория-товаров" aria-label="Permalink to &quot;Категория товаров&quot;">​</a></h1><h2 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;Layout&quot;">​</a></h2><p>Страница категории товаров выглядит как идущие рядами и колонками карточки товаров. Число колонок зависит от ширины экрана. В мобильном варианте - только одна колонка на ширину устройства.</p><p>Сверху страницы название категории, возможно её описание и breadcrumbs (путь к категории в каталоге).</p><p>Карточки разместить можно с помощью <code>flexbox</code> (flex-wrap) и <code>grid</code>. Мне привычнее первый, поэтому использую его. Для самой карточки товара создаем компонент <code>ProductCard</code>.</p><p><img src="'+r+'" alt="image"></p><h2 id="данные-и-api" tabindex="-1">Данные и API <a class="header-anchor" href="#данные-и-api" aria-label="Permalink to &quot;Данные и API&quot;">​</a></h2><p>Если посмотреть другие магазины, то на карточках товара обычно одна или несколько картинок, название, краткое описание, стоимость, дополнительная информация (рейтинг, скидка, вес, материал и т.п.)</p><p>Данные будем получать по сети. Лежать они будут в json файлах в директории <code>public/api</code>. Создадим несколько файлов вроде <code>category-products-3.json</code>.</p><p>Как может быть устроена схема REST API на бэкенде для серьезных магазинов можно посмотреть на примере <a href="https://developer.adobe.com/commerce/webapi/rest/quick-reference/" target="_blank" rel="noreferrer">Magento WebAPI</a>.</p>',10),d=[s];function n(p,i,l,_,m,u){return t(),a("div",null,d)}const y=e(c,[["render",n]]);export{g as __pageData,y as default};
