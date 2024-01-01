import{_ as a,o as e,c as r,R as t}from"./chunks/framework.WpHw1xpL.js";const f=JSON.parse('{"title":"UI дизайн","description":"","frontmatter":{"pageClass":"arty-crafty"},"headers":[],"relativePath":"ru/arty-crafty/analysis/ui-design.md","filePath":"ru/arty-crafty/analysis/ui-design.md","lastUpdated":1704136635000}'),i={name:"ru/arty-crafty/analysis/ui-design.md"},o=t('<h1 id="ui-дизаин" tabindex="-1">UI дизайн <a class="header-anchor" href="#ui-дизаин" aria-label="Permalink to &quot;UI дизайн&quot;">​</a></h1><p>Непосредственно дизайном пользовательского интерфейса мы займемся позже. Пока подберем подходящий лэйаут. Для этого можно посмотреть на уже готовые онлайн магазины в интернете.</p><h2 id="основные-компоненты-страницы" tabindex="-1">Основные компоненты страницы <a class="header-anchor" href="#основные-компоненты-страницы" aria-label="Permalink to &quot;Основные компоненты страницы&quot;">​</a></h2><p>У небольших магазинов обычно лэйаут состоит из четырех частей - header, footer, sidebar слева и центральная панель</p><h3 id="header" tabindex="-1">Header <a class="header-anchor" href="#header" aria-label="Permalink to &quot;Header&quot;">​</a></h3><p>Сверху будет хедер. Слева в нем будет логотип, в середине - строка поиска, справа элементы входа в личный кабинет, корзина, избранное. Сверху основного хедера можно будет добавить дополнительный сабхедер, с ссылками Снизу основного хедера будет подхедер с меню-каталогом. У нас изначально будет всего несколько пунктов там, но в дальнейшем это можно превратить в мегаменю.</p><p>В мобильной версии хедер сильно облегчен.</p><h3 id="sidebar" tabindex="-1">Sidebar <a class="header-anchor" href="#sidebar" aria-label="Permalink to &quot;Sidebar&quot;">​</a></h3><p>При показе страницы категории товаров, слева показывается сайдбар с различными фильтрами. В мобильной версии он переносится наверх. Когда показывается страница товара, то меню слева обычно нет.</p><h3 id="main-panel" tabindex="-1">Main panel <a class="header-anchor" href="#main-panel" aria-label="Permalink to &quot;Main panel&quot;">​</a></h3><p>В центральной панели показывается список товаров выбранной категории либо информация о товаре.</p><h3 id="footer" tabindex="-1">Footer <a class="header-anchor" href="#footer" aria-label="Permalink to &quot;Footer&quot;">​</a></h3><p>Футер - самый простой копонент, в нем функционала практически нет, так что ничем он не примечателен.</p><h2 id="мобильная-версия" tabindex="-1">Мобильная версия <a class="header-anchor" href="#мобильная-версия" aria-label="Permalink to &quot;Мобильная версия&quot;">​</a></h2><p>В мобильной версии внизу появляется отдельное зафиксированное меню с ссылками:</p><ul><li>Главная</li><li>Каталог</li><li>Корзина</li><li>Избранное</li><li>Логин/личный кабинет</li></ul><h2 id="вывод" tabindex="-1">Вывод <a class="header-anchor" href="#вывод" aria-label="Permalink to &quot;Вывод&quot;">​</a></h2><p>Подобное разделение на подсистемы позволяет сохранить между ними слабую связанность. Основная логика подсистемы заключена в ней самой, и с окружающим миром она взаимодействует пока только через router.</p>',18),l=[o];function n(s,d,h,c,p,u){return e(),r("div",null,l)}const b=a(i,[["render",n]]);export{f as __pageData,b as default};
