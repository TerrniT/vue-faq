import{_ as a,c as e,o as t,U as r}from"./chunks/framework.lBFuN894.js";const f=JSON.parse('{"title":"Анализ рынка","description":"","frontmatter":{"pageClass":"arty-crafty","head":[["meta",{"name":"og:site_name","content":"Arty-Crafty - проект онлайн магазина"}],["meta",{"name":"og:image","content":"/images/arty-crafty-logo.png"}],["meta",{"name":"twitter:image","content":"/images/arty-crafty-logo.png"}]]},"headers":[],"relativePath":"ru/arty-crafty/analysis/research.md","filePath":"ru/arty-crafty/analysis/research.md","lastUpdated":1704891671000}'),o={name:"ru/arty-crafty/analysis/research.md"},s=r('<h1 id="анализ-рынка" tabindex="-1">Анализ рынка <a class="header-anchor" href="#анализ-рынка" aria-label="Permalink to &quot;Анализ рынка&quot;">​</a></h1><h2 id="изучение-конкурентов" tabindex="-1">Изучение конкурентов <a class="header-anchor" href="#изучение-конкурентов" aria-label="Permalink to &quot;Изучение конкурентов&quot;">​</a></h2><p>Исследуем вебсайты других магазинов и маркетплейсов, чтобы изучить, как они выглядят и функционируют.</p><h2 id="саиты-аналоги" tabindex="-1">Сайты-аналоги <a class="header-anchor" href="#саиты-аналоги" aria-label="Permalink to &quot;Сайты-аналоги&quot;">​</a></h2><p>Погуглим &quot;best marketplace&quot;. Мне выпало в том числе:</p><ul><li><a href="https://www.alibris.com/" target="_blank" rel="noreferrer">alibris.com</a></li><li><a href="https://www.etsy.com/" target="_blank" rel="noreferrer">etsy.com</a></li><li><a href="https://www.walmart.com/" target="_blank" rel="noreferrer">walmart.com</a></li></ul><p>Для начала отмечаем, что для фронтенда разница между маркетплейсом и магазином - минимальна. Как функционально, так и в дизайне страницы. В случае маркетплейса на странице товара есть маленькая ссылка на магазин, и есть фильтрация по магазинам, которую можно представлять, как отдельную категорию для каждого магазина. Правда отображение товаров в этой категории отличается от обычных категорий.</p><p>Делаем мы на первом этапе витрину, но в уме держим маркетплейс. Мы не должны принимать таких решений, которые бы в будущем заставили сильно рефакторить код. Но, очевидно, что мы можем ориентироваться в дизайне на простые магазины. Расширить потом до маркетплейса будет несложно.</p><p>Самый удобный магазин/маркетплейс, с моей точки зрения, <a href="https://ozon.ru" target="_blank" rel="noreferrer">Ozon</a>, что подтверждается его успешностью. Его структуру мы и будем копировать.</p><div class="tip custom-block"><p class="custom-block-title">Совет</p><p>Изучать похожие сайты полезно не только для вдохновения по дизайну, но и, например, при выборе наименования того или иного компонента - посмотрите через DevTools какие названия классов используются на аналогичном <code>html</code> блоке у конкурентов.</p></div>',10),l=[s];function c(n,i,h,m,p,_){return t(),e("div",null,l)}const u=a(o,[["render",c]]);export{f as __pageData,u as default};
