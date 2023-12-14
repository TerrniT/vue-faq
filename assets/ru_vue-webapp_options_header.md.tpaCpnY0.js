import{_ as a,o as t,c as i,R as s,ag as e,ah as d,ai as n,aj as l}from"./chunks/framework.W9JL_T3t.js";const y=JSON.parse('{"title":"Headers","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"Vue webapp"}],["meta",{"name":"og:image","content":"/images/vue-webapp-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp-logo.png"}]]},"headers":[],"relativePath":"ru/vue-webapp/options/header.md","filePath":"ru/vue-webapp/options/header.md","lastUpdated":1702551914000}'),h={name:"ru/vue-webapp/options/header.md"},p=s('<h1 id="headers" tabindex="-1" data-v-f1590026>Headers <a class="header-anchor" href="#headers" aria-label="Permalink to &quot;Headers&quot;" data-v-f1590026>​</a></h1><p data-v-f1590026>Все хедеры адаптивны.</p><h2 id="simpleheader" tabindex="-1" data-v-f1590026>SimpleHeader <a class="header-anchor" href="#simpleheader" aria-label="Permalink to &quot;SimpleHeader&quot;" data-v-f1590026>​</a></h2><p data-v-f1590026><img src="'+e+'" alt="" data-v-f1590026></p><p data-v-f1590026>Простой <code data-v-f1590026>sticky</code> header</p><h2 id="mantinesimpleheader" tabindex="-1" data-v-f1590026>MantineSimpleHeader <a class="header-anchor" href="#mantinesimpleheader" aria-label="Permalink to &quot;MantineSimpleHeader&quot;" data-v-f1590026>​</a></h2><p data-v-f1590026><img src="'+d+'" alt="" data-v-f1590026></p><p data-v-f1590026>Простой <code data-v-f1590026>sticky</code> header в стиле Mantine UI</p><h2 id="mantinelayeredheader" tabindex="-1" data-v-f1590026>MantineLayeredHeader <a class="header-anchor" href="#mantinelayeredheader" aria-label="Permalink to &quot;MantineLayeredHeader&quot;" data-v-f1590026>​</a></h2><p data-v-f1590026><img src="'+n+'" alt="" data-v-f1590026></p><p data-v-f1590026><code data-v-f1590026>sticky</code> header с уровнями в стиле Mantine UI</p><h2 id="slidingheader" tabindex="-1" data-v-f1590026>SlidingHeader <a class="header-anchor" href="#slidingheader" aria-label="Permalink to &quot;SlidingHeader&quot;" data-v-f1590026>​</a></h2><p data-v-f1590026><img src="'+l+`" alt="" data-v-f1590026></p><p data-v-f1590026>Может содержать два разных header-а, второй появляется после того, как пользователь проскроллит страницу вниз</p><div class="language-html vp-adaptive-theme" data-v-f1590026><button title="Copy Code" class="copy" data-v-f1590026></button><span class="lang" data-v-f1590026>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-f1590026><code data-v-f1590026><span class="line" data-v-f1590026><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026>&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-f1590026>AppHeader</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f1590026> :threshold-hide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-f1590026>&quot;200&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f1590026> :threshold-open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-f1590026>&quot;400&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026>&gt;</span></span>
<span class="line" data-v-f1590026><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026>    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-f1590026>template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f1590026> #first-header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026>&gt;</span></span>
<span class="line" data-v-f1590026><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026>        &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-f1590026>AppHeaderFirst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026> /&gt;</span></span>
<span class="line" data-v-f1590026><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026>    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-f1590026>template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026>&gt;</span></span>
<span class="line" data-v-f1590026></span>
<span class="line" data-v-f1590026><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026>    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-f1590026>template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f1590026> #second-header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026>&gt;</span></span>
<span class="line" data-v-f1590026><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026>        &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-f1590026>AppHeaderSecond</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026> /&gt;</span></span>
<span class="line" data-v-f1590026><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026>    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-f1590026>template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026>&gt;</span></span>
<span class="line" data-v-f1590026><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026>&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-f1590026>AppHeader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f1590026>&gt;</span></span></code></pre></div>`,15),r=[p];function k(f,o,v,E,c,g){return t(),i("div",null,r)}const _=a(h,[["render",k],["__scopeId","data-v-f1590026"]]);export{y as __pageData,_ as default};
