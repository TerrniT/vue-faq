import{_ as e,o as a,c as t,Q as r}from"./chunks/framework.477046d0.js";const _=JSON.parse('{"title":"Изучение Vue","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/learning.md","filePath":"frontend/learning.md"}'),s={name:"frontend/learning.md"},l=r('<h1 id="изучение-vue" tabindex="-1">Изучение Vue <a class="header-anchor" href="#изучение-vue" aria-label="Permalink to &quot;Изучение Vue&quot;">​</a></h1><details class="details custom-block"><summary>Источники информации по Vue</summary><p>Почему-то считается, что на фронтенде есть всего два варианта получать знания - документация Vue и обучающие видео с Ютюба и всевозможных курсов.</p><p>Но документация это не учебник, а справочник, и отделить зерна от плевел на Ютюбе очень сложно. Я встречал полезные видео, но все они предназначались для уже неплохо знающих Vue разработчиков, и показывали какие-то новые или нестандартные моменты.</p><hr><p>Главным учителем должна быть книга, которая именно учит, а не даёт справочную информацию.</p><p>Прекрасный учебник по Vue на английском языке - вышедшая в мае 2023 года <a href="https://www.oreilly.com/library/view/vuejs-3-design/9781803238074/" target="_blank" rel="noreferrer">Vue.js 3 Design Patterns and Best Practices</a>. Можно зарегистрироваться на oReilly и читать 10 дней бесплатно. Даже скачать. Несмотря на название, книга учит именно программированию, причем, довольно с таки начального уровня.</p><p>Перевод данной книги на русский язык находится на этом сайте (<a href="/book/ru/">книга</a>).</p><p><a href="https://github.com/PacktPublishing/Vue.js-3-Design-Patterns-and-Best-Practices" target="_blank" rel="noreferrer">Примеры из книги</a> находятся в открытом доступе и вполне достойны изучения.</p><p>Больше на русском, к сожалению, почти ничего нет, но, во-первых, есть Google translate, а во-вторых, стать уверенным разработчиком без хотя бы среднего знания технического английского вряд ли получится.</p><p>Так же надо отметить, что документация Vue на русском порой сильно отстает от документации на английском.</p></details><details class="details custom-block"><summary>Vue 2 или Vue 3?</summary><p>Vue 3. <br> Composition API.</p><p>Если вам нужен будет Vue 2 для поддержки существующего проекта, то вы сами будете знать ответ на этот вопрос.</p><p>Разница между Vue 2 и Vue 3 большая. Это не тот случай, когда надо выучить предварительно предыдущую версию, чтобы лучше и легче понять следующую.</p></details><details class="details custom-block"><summary>Нужно ли знать JavaScript предварительно?</summary><p>Обязательно, минимум на среднем уровне. Если этого нет, я бы предложил сперва пройти короткий курс javascript-a, чтобы человек знал об объекте document, умел обращаться с методами массива и не очень боялся промисов. Также, HTML и CSS как минимум на базовом уровне.</p><p>Вот легко читаемая книжка - <a href="https://drive.google.com/file/d/1H6HDJeRx2SAXLPJ8Rw0SqchkFZYNiZ9h/view?usp=sharing" target="_blank" rel="noreferrer">&quot;Морган Н. - JavaScript для детей. Самоучитель по программированию - 2016</a>. Перед началом изучения Vue желательно понимать 70% первой части, а также параграфы 10 и 12.</p><p>Также классический ресурс по JavaScript - <a href="https://learn.javascript.ru/" target="_blank" rel="noreferrer">learn.javascript.ru</a></p><p><a href="https://habr.com/ru/articles/486820/#21" target="_blank" rel="noreferrer">70 вопросов по JavaScript для подготовки к собеседованию</a> - отличный тест, проверить себя по знанию языка.</p><hr><div class="tip custom-block"><p class="custom-block-title">Совет</p><p>Также абсолютно необходимый предварительный скилл - умение гуглить.</p></div></details><details class="details custom-block"><summary>Есть ли сертификация по Vue?</summary><p><a href="https://certificates.dev/vuejs" target="_blank" rel="noreferrer">Vue.js Certification</a></p></details><details class="details custom-block"><summary>Vue Style Guide</summary><p>Обязательно ознакомьтесь с <a href="https://vuejs.org/style-guide/" target="_blank" rel="noreferrer">Vue Style Guide</a> и старайтесь придерживаться его лучших практик при написании кода.</p><p>Время от времени возвращайтесь к этому источнику и улучшайте свой код.</p><p>ESlint также помогает держать свой код в соответствии с лучшими практиками.</p></details><details class="details custom-block"><summary>Нужен ли ментор?</summary><p>Ментор полезен и начинающему, и опытному разработчику. Можно бесполезно убить два дня на решение проблемы, которую за 20 минут может объяснить более опытный человек. Причем, этот двухдневный &quot;опыт&quot; больше никогда не пригодится.</p><p>В компаниях эту роль обычно выполняют более компетентные доброжелательные коллеги.</p><p>В интернете есть сервисы типа <a href="https://solvery.io/" target="_blank" rel="noreferrer">Solvery</a>, которые могут помочь в этом вопросе.</p></details><details class="details custom-block"><summary>Всё равно хочу видео</summary><p>Есть качественные у <code>Vue Mastery</code>, однако большинство устарели.</p></details><details class="details custom-block"><summary>Что еще посмотреть кроме Vue? React?</summary><p>Можно и React, если есть реальный вариант использования этих знаний, однако намного лучше расширить свой кругозор разработчика. Попробуйте написать простой API на бэкенде. Самый легкий и удобный язык для этого - PHP, но можно и на Node.js или Python. Попробуйте транспортные протоколы JSON-RPC и WebSockets. Захостите свое приложение на GitHub Pages или другой аналогичный сервис, поэкспериментируйте с GitHub Actions - они очень помогают с автоматизацией деплоя и CI/CD в целом. Поработайте с Cloud провайдерами (многие предлагают бесплатные ресурсы), настройте виртуальный сервер. Зарегистрируйте домен, сделайте продуктовый законченный сайт - даже если это будет просто ваш сайт-резюме или что-то элементарное на VitePress (используется данным сайтом). Поработайте с FireStore и открытыми API для различных данных. Посмотрите Swagger. Поизучайте SQL, установите MySQL и поиграйте с ним, либо сделайте это на SupaBase. Понимание, как данные хранятся и обрабатываются на бэкенде, сильно поможет в выборе правильных стратегий на фронте.</p><p>Изучайте, как работает современный Интернет, и какие технологии и лучшие практики распространены в нем сейчас.</p></details>',9),i=[l];function o(p,c,u,n,d,m){return a(),t("div",null,i)}const f=e(s,[["render",o]]);export{_ as __pageData,f as default};
