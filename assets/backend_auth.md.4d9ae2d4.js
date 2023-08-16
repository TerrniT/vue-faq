import{_ as e,o as a,c as s,S as t}from"./chunks/framework.216f95b1.js";const h=JSON.parse('{"title":"Авторизация и аутентификация","description":"","frontmatter":{},"headers":[],"relativePath":"backend/auth.md","filePath":"backend/auth.md"}'),o={name:"backend/auth.md"},l=t('<h1 id="авторизация-и-аутентификация" tabindex="-1">Авторизация и аутентификация <a class="header-anchor" href="#авторизация-и-аутентификация" aria-label="Permalink to &quot;Авторизация и аутентификация&quot;">​</a></h1><details class="details custom-block"><summary>Что такое авторизация и аутентификация</summary><p>Грубо говоря:</p><p>Аутентификация - когда система удостоверяется, что в неё залогинился именно Вася Пупкин, например, проверив его логин и пароль</p><p>Авторизация - когда система удостоверяется, что запрашивающий ресурс пользователь имеет право доступа к нему. Например, старший менеджер имеет право удаления товара в админке, а простой менеджер - нет.</p></details><details class="details custom-block"><summary>Как сделать систему аутентификации на сайта</summary><p>Для SPA самый распространенный способ - на JWT токенах. Вариантов это сделать много, в зависимости от требований уровня безопасности (личный блог Васи Пупкина с комментариями гостей и онлайн магазин с депозитами и бонусами - две большие разницы).</p><p>JWT - это стандарт записи небольшого количества информации в строку (токен) и подписывания её (криптография). Делает это бэкенд. Таким образом бэкенд может удостовериться, что токен выписан им, и в нем действительная информация.</p><p>Аутентификация на токенах - стандарта как такового нет, есть бест практики.</p><p>Варианты:</p><ol><li><p>Бэкенд генерит токен (access token - AT) и кладет в httpOnly cookie. Фронтэнд доступа к токену не имеет, просто возвращает куку. Бэкенд на каждом запросе проверяет токен, определяет того кому выписан этот токен и его права, и дальше решает разрешать ли доступ. Метод незаслужено редко используемый, но вполне надежный. С фронта снимаются все заморочки по манипуляции с АТ.</p></li><li><p>Бэкенд генерит токен (access token - AT) и передаёт фронту. Фронт каждый раз отправляет его обратно. По сути то же самое, что и в первом случае, плюс лишние телодвижения.</p></li><li><p>Используются два токена - короткоживущий access token (AT) и дольше живущий refresh token (RT) пересылаемый в httpOnly cookie. AT работает как во втором случае. Когда записанный в нем срок его жизни кончается, бэкенд проверяет RT, и если он валиден, обновляет AT. Кончается RT - пользователь направляется на перелогин.</p></li></ol><p>Подробнее по данной теме можно ознакомиться в, например, <a href="https://habr.com/ru/articles/710552/" target="_blank" rel="noreferrer">этой статье</a></p></details><details class="details custom-block"><summary>Где хранить access token на фронте?</summary><p>В 95% случаев в LocalStorage</p></details><details class="details custom-block"><summary>Что такое oAuth и SSO?</summary><p>oAuth - когда, например, у пользователь есть возможность на твоем сайте сохранить что-то в Google Drive. Чтобы получить разрешение для твоего сайта работы с Google Drive аккаунтом пользователя, ты просишь его дать через Google разрешения твоему сайту лазить в его аккаунт. Итого у нас есть четыре части - Google (авторизационный центр), сторонний ресурс (Google Drive), твой сайт и пользователь</p><p>SSO - single sign-on - логин пользователя на твой сайт используя его Google (или VK) аккаунт. В этом случае ты перенаправляешь пользователя на Google логин, и после этого Google присылает тебе специальный идентификационный токен (ИТ) в котором содержится некоторая информация о пользователе. После этого твой сайт, используя свою систему аутентификации описанную выше и полученный ИТ, &quot;логинит&quot; пользователя и позволяет ему работу с сайтом.</p></details><details class="details custom-block"><summary>Дает ли аутентификация через JWT безопасность?</summary><p>Безопасность - очень комплексное понятие, аутентификация через JWT - всего лишь один из её элементов. Для критичных приложений можно снимать отпечаток системы пользователя (browser fingerprint) и заставлять пользователя перелогиниваться как только он изменился. То же самое с IP. Таким образом можно бороться с кражей АТ. Также ставить очень маленький срок жизни AT, если используется RT. Но основные меры безопасности связаны не с аутентификацией, а с постоянным мониторингом системы на подозрительные действия.</p></details><details class="details custom-block"><summary>Авторизация</summary><p>Если нужно давать пользователям разный уровень доступа к ресурсам сайта, то обычно применяется или RBAC (Role-based access control) или PBA - Policy-Based Authorization (Permission-Based Authorization).</p><p>В первом случае пользователи распределяются по ролям (админ, менеджер, юзер) и уровень доступа определяется ролью.</p><p>Во-втором можно более гранулировано задать разрешение каждому пользователю индивидуально на любое действие.</p><p>Нужно понимать, что на фронте авторизация делается для удобства (пользователь не видит разделы сайта, которые ему запрещены), но за безопасность отвечает бэк - он должен проверять каждый раз, имеет ли пользователь право доуступа к запрашиваемому ресурсу, даже если на фронте его как бы видно не должно быть. Сломать фронт - очень несложно.</p></details>',7),r=[l];function c(i,p,m,n,d,u){return a(),s("div",null,r)}const k=e(o,[["render",c]]);export{h as __pageData,k as default};
