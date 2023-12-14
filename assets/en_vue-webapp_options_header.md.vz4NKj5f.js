import{_ as a,o as t,c as i,R as s,ag as e,ah as d,ai as n,aj as l}from"./chunks/framework.W9JL_T3t.js";const y=JSON.parse('{"title":"Headers","description":"","frontmatter":{"head":[["meta",{"name":"og:site_name","content":"Vue webapp"}],["meta",{"name":"og:image","content":"/images/vue-webapp-logo.png"}],["meta",{"name":"twitter:image","content":"/images/vue-webapp-logo.png"}]]},"headers":[],"relativePath":"en/vue-webapp/options/header.md","filePath":"en/vue-webapp/options/header.md","lastUpdated":1702541074000}'),h={name:"en/vue-webapp/options/header.md"},f=s('<h1 id="headers" tabindex="-1" data-v-4aa140ff>Headers <a class="header-anchor" href="#headers" aria-label="Permalink to &quot;Headers&quot;" data-v-4aa140ff>​</a></h1><p data-v-4aa140ff>All headers are adaptive.</p><h2 id="simpleheader" tabindex="-1" data-v-4aa140ff>SimpleHeader <a class="header-anchor" href="#simpleheader" aria-label="Permalink to &quot;SimpleHeader&quot;" data-v-4aa140ff>​</a></h2><p data-v-4aa140ff><img src="'+e+'" alt="" data-v-4aa140ff></p><p data-v-4aa140ff>Simple <code data-v-4aa140ff>sticky</code> header</p><h2 id="mantinesimpleheader" tabindex="-1" data-v-4aa140ff>MantineSimpleHeader <a class="header-anchor" href="#mantinesimpleheader" aria-label="Permalink to &quot;MantineSimpleHeader&quot;" data-v-4aa140ff>​</a></h2><p data-v-4aa140ff><img src="'+d+'" alt="" data-v-4aa140ff></p><p data-v-4aa140ff>Simple <code data-v-4aa140ff>sticky</code> header in Mantine UI style</p><h2 id="mantinelayeredheader" tabindex="-1" data-v-4aa140ff>MantineLayeredHeader <a class="header-anchor" href="#mantinelayeredheader" aria-label="Permalink to &quot;MantineLayeredHeader&quot;" data-v-4aa140ff>​</a></h2><p data-v-4aa140ff><img src="'+n+'" alt="" data-v-4aa140ff></p><p data-v-4aa140ff><code data-v-4aa140ff>sticky</code> header with Mantine UI style levels</p><h2 id="slidingheader" tabindex="-1" data-v-4aa140ff>SlidingHeader <a class="header-anchor" href="#slidingheader" aria-label="Permalink to &quot;SlidingHeader&quot;" data-v-4aa140ff>​</a></h2><p data-v-4aa140ff><img src="'+l+`" alt="" data-v-4aa140ff></p><p data-v-4aa140ff>Can contain two different headers, the second one appears after the user scrolls down the page</p><div class="language-html vp-adaptive-theme" data-v-4aa140ff><button title="Copy Code" class="copy" data-v-4aa140ff></button><span class="lang" data-v-4aa140ff>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-4aa140ff><code data-v-4aa140ff><span class="line" data-v-4aa140ff><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff>&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-4aa140ff>AppHeader</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-4aa140ff> :threshold-hide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-4aa140ff>&quot;200&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-4aa140ff> :threshold-open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-4aa140ff>&quot;400&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff>&gt;</span></span>
<span class="line" data-v-4aa140ff><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff>    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-4aa140ff>template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-4aa140ff> #first-header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff>&gt;</span></span>
<span class="line" data-v-4aa140ff><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff>        &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-4aa140ff>AppHeaderFirst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff> /&gt;</span></span>
<span class="line" data-v-4aa140ff><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff>    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-4aa140ff>template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff>&gt;</span></span>
<span class="line" data-v-4aa140ff></span>
<span class="line" data-v-4aa140ff><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff>    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-4aa140ff>template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-4aa140ff> #second-header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff>&gt;</span></span>
<span class="line" data-v-4aa140ff><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff>        &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-4aa140ff>AppHeaderSecond</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff> /&gt;</span></span>
<span class="line" data-v-4aa140ff><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff>    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-4aa140ff>template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff>&gt;</span></span>
<span class="line" data-v-4aa140ff><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff>&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-4aa140ff>AppHeader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-4aa140ff>&gt;</span></span></code></pre></div>`,15),p=[f];function r(k,o,v,E,c,g){return t(),i("div",null,p)}const _=a(h,[["render",r],["__scopeId","data-v-4aa140ff"]]);export{y as __pageData,_ as default};
