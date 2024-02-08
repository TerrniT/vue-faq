import{_ as a,o as s,c as i,U as t,ae as e}from"./chunks/framework.pGgzIhWR.js";const g=JSON.parse('{"title":"Scaffolding a Vue webapp","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"vue-webapp"}],["meta",{"name":"og:image","content":"/images/vue-webapp-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp-logo.png"}]]},"headers":[],"relativePath":"en/vue-webapp/index.md","filePath":"en/vue-webapp/index.md","lastUpdated":1707379020000}'),n={name:"en/vue-webapp/index.md"},l=t(`<h1 id="scaffolding-a-vue-webapp" tabindex="-1" data-v-0a71456c>Scaffolding a Vue webapp <a class="header-anchor" href="#scaffolding-a-vue-webapp" aria-label="Permalink to &quot;Scaffolding a Vue webapp&quot;" data-v-0a71456c>​</a></h1><h2 id="summary" tabindex="-1" data-v-0a71456c>Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;" data-v-0a71456c>​</a></h2><p data-v-0a71456c>Vue 3 website builder/scaffolder (<a href="https://github.com/vuesence/vue-webapp" target="_blank" rel="noreferrer" data-v-0a71456c>GitHub</a>) for developers, with a choice of business template (portfolio, blog, store, etc.), layout template, design and functionality (API module, i18n, PWA, splash screen, auth module, themes, etc.), for further convenient customization and content filling.</p><div class="language-sh vp-adaptive-theme" data-v-0a71456c><button title="Copy Code" class="copy" data-v-0a71456c></button><span class="lang" data-v-0a71456c>sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-0a71456c><code data-v-0a71456c><span class="line" data-v-0a71456c><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-0a71456c>$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> vue-webapp</span></span>
<span class="line" data-v-0a71456c></span>
<span class="line" data-v-0a71456c><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-0a71456c>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> Project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> my-vue-project</span></span>
<span class="line" data-v-0a71456c><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-0a71456c>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> Splash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> screen?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> yes</span></span>
<span class="line" data-v-0a71456c><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-0a71456c>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> Make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> PWA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0a71456c> (adds </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c>service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> worker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> manifest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0a71456c>)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0a71456c>?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0a71456c> ... no / yes</span></span>
<span class="line" data-v-0a71456c><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-0a71456c>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> Open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> Graph</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> meta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> tags?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> yes</span></span>
<span class="line" data-v-0a71456c><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-0a71456c>√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> Google</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> Analytics</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> code?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0a71456c> yes</span></span>
<span class="line" data-v-0a71456c><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-0a71456c>...</span></span></code></pre></div><h2 id="justification" tabindex="-1" data-v-0a71456c>Justification <a class="header-anchor" href="#justification" aria-label="Permalink to &quot;Justification&quot;" data-v-0a71456c>​</a></h2><p data-v-0a71456c>There are quite a few (mostly specific and quickly becoming obsolete) boilerplate templates for creating a Vue application. Usually it means creating an empty project with certain libraries. In other words, it&#39;s just setting up an environment to start development without, actually, code.</p><p data-v-0a71456c>At the same time, many other frontend and backend frameworks have starter-kits that allow you to quickly create a ready-made blog, online store, business card site, portfolio, documentation, etc., which greatly helps in learning the framework itself, relevant technologies and best practices, as well as for solving business tasks.</p><p data-v-0a71456c>As a result, it may seem that Vue is a rather low-level framework, and to create web applications quickly, efficiently and conveniently, you need to take some &quot;metaframwork&quot; or other solution - like Nuxt, Astro, VitePress, Vue Storefront - which explicitly position themselves as tools for solving certain (or a wide range of) business tasks.</p><p data-v-0a71456c>There is a need for a tool similar to <code data-v-0a71456c>create-vue</code>, for scaffolding a ready-to-go web application. On the one hand, a quite workable, adaptive website with the necessary functionality so that a novice developer could familiarize himself with a proven approach to solving the tasks involved. On the other hand, it should be minimalistic enough not to impose unwanted technologies and libraries on an experienced developer and create a skeleton of established best practices for further development of the application.</p><p data-v-0a71456c>It is clear that defining one or another &quot;best practice&quot; (fetch or axios?) can be quite controversial, but nevertheless.</p><p data-v-0a71456c><img src="`+e+'" alt="image" data-v-0a71456c></p>',11),h=[l];function d(p,c,o,r,k,F){return s(),i("div",null,h)}const u=a(n,[["render",d],["__scopeId","data-v-0a71456c"]]);export{g as __pageData,u as default};
