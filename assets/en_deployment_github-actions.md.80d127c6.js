import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.477046d0.js";const F=JSON.parse('{"title":"Github Actions","description":"","frontmatter":{},"headers":[],"relativePath":"en/deployment/github-actions.md","filePath":"en/deployment/github-actions.md"}'),l={name:"en/deployment/github-actions.md"},o=p(`<h1 id="github-actions" tabindex="-1">Github Actions <a class="header-anchor" href="#github-actions" aria-label="Permalink to &quot;Github Actions&quot;">​</a></h1><details class="details custom-block"><summary>What are GitHub Actions?</summary><p>GitHub Actions are the most popular and convenient way to automate build, test and deployment, so it is recommended to learn them for both pet and large commercial projects.</p><p>Your code should be on GitHub, naturally.</p><p>Add a file <code>.github/workflows/deploy.yaml</code> (the name of the file itself can be anything) to the root of your repository</p><p>It will contain the GitHub Actions instructions.</p></details><details class="details custom-block"><summary>GitHub Actions - sample deploy on GitHub Pages</summary><p>Sample configuration file of this project (Vue-Faq) with deployment to Github Pages</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># .github/workflows/deploy.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build and Deploy</span></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">]</span><span style="color:#79B8FF;">.</span></span>
<span class="line"><span style="color:#85E89D;">permissions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">contents</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">write</span></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">build-and-deploy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Checkout 🛎️</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Install pnpm</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pnpm/action-setup@v2</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pnpm-install</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8.5.0</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">run_install</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Install dependencies</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pnpm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pnpm build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy 🚀</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">jamesIves/github-pages-deploy-action@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">folder</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">branch</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">gh-pages</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># .github/workflows/deploy.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build and Deploy</span></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">main</span><span style="color:#24292E;">]</span><span style="color:#005CC5;">.</span></span>
<span class="line"><span style="color:#22863A;">permissions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">contents</span><span style="color:#24292E;">: </span><span style="color:#032F62;">write</span></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">build-and-deploy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Checkout 🛎️</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Install pnpm</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm/action-setup@v2</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm-install</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">8.5.0</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">run_install</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Install dependencies</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy 🚀</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">jamesIves/github-pages-deploy-action@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">folder</span><span style="color:#24292E;">: </span><span style="color:#032F62;">docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">branch</span><span style="color:#24292E;">: </span><span style="color:#032F62;">gh-pages</span></span></code></pre></div><p>After each push to the <code>main</code> branch of the repository, the project will be built and a new version of the site will be deployed to GitHub Pages.</p><p>In this case, three GitHub Actions are used: <code>actions/checkout@v3</code> to upload your code from the repository from the <code>main</code> branch, <code>pnpm/action-setup@v2</code> to install the <code>pnpm</code> manager, <code>JamesIves/github-pages-deploy-action@v4</code> to upload the build to the <code>gh-pages</code> branch of your repository (it must already be created). Your GitHub project must be configured for GitHub Pages to grab files from this branch (<code>Settings-&gt;Pages</code>).</p><p>The GitHub Pages documentation describes another way to auto-deploy via Github Actions, but <code>JamesIves/github-pages-deploy-action@v4</code> makes life much easier.</p><p>:::</p><details class="details custom-block"><summary>GitHub Actions - an example of an SSH-based deploy to a remote server</summary><p>A more interesting case of useful CI/CD process automation.</p><p>We have several environments (<code>dev</code>, <code>staging</code>, <code>prod</code>) and need to manually (using <code>workflow_dispatch</code>) deploy to a remote server of our choice with its own parameters. Plus it is automatically deployed to <code>dev</code> when <code>git push</code>.</p><p>Each environment in the project has its own <code>.env</code> file - <code>.env.dev</code>, <code>.env.staging</code> and <code>.env.prod</code>, and each environment has its own directory to deploy to the server - <code>dev.your-site.com</code>, <code>staging.your-site.com</code> and <code>your-site.com</code>.</p><p>There is also a <code>backup</code> directory on the server with subdirectories <code>dev</code>, <code>staging</code> and <code>prod</code>. At deployment we will backup the installed version to the corresponding directory and store the last 5 backups there to be able to rollback if necessary.</p><p>In addition, we will generate a <code>build.json</code> file with the current date and time and possibly other information. It is needed both for informational purposes and to solve the problem of the browser caching the <code>index.html</code> file and showing the user the old version of the site after the actual update. One solution is for the website to download this file when loading the application and check the date in it against the one it previously saved in localStorage. If they don&#39;t match, the site forces a reload of <code>index.html</code> and saves the new timestamp value. The result is a user-transparent and reliable update of the website.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">localStorageName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;BUILD_DATE&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/build.json?version&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  response.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">buildData</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (buildData.date </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> localStorage.</span><span style="color:#B392F0;">getItem</span><span style="color:#E1E4E8;">(localStorageName)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Updating. New version:&quot;</span><span style="color:#E1E4E8;">, buildData.date);</span></span>
<span class="line"><span style="color:#E1E4E8;">      localStorage.</span><span style="color:#B392F0;">setItem</span><span style="color:#E1E4E8;">(localStorageName, buildData.date);</span></span>
<span class="line"><span style="color:#E1E4E8;">      window.location.</span><span style="color:#B392F0;">reload</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Exiting for update&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">localStorageName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;BUILD_DATE&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">fetch</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/build.json?version&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">response</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  response.</span><span style="color:#6F42C1;">json</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">buildData</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (buildData.date </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> localStorage.</span><span style="color:#6F42C1;">getItem</span><span style="color:#24292E;">(localStorageName)) {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Updating. New version:&quot;</span><span style="color:#24292E;">, buildData.date);</span></span>
<span class="line"><span style="color:#24292E;">      localStorage.</span><span style="color:#6F42C1;">setItem</span><span style="color:#24292E;">(localStorageName, buildData.date);</span></span>
<span class="line"><span style="color:#24292E;">      window.location.</span><span style="color:#6F42C1;">reload</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Exiting for update&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>Three new Github Actions are used: <code>appleboy/ssh-action@master</code> to execute commands on the remote host, <code>easingthemes/ssh-deploy@main</code> to upload files to the remote host, and <code>snickerbockers/submodules-init@v4</code> because our project uses Git Submodules</p><p>In addition, we need to put <code>SERVER_SSH_KEY</code> in Github Secrets - the private key for SSH access to the remote host.</p><details class="details custom-block"><summary>deploy.yaml</summary><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># .github/workflows/deploy.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build and deploy</span></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">workflow_dispatch</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">inputs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">target</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Target</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">required</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">default</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">dev</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">choice</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">options</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          - </span><span style="color:#9ECBFF;">dev</span></span>
<span class="line"><span style="color:#E1E4E8;">          - </span><span style="color:#9ECBFF;">staging</span></span>
<span class="line"><span style="color:#E1E4E8;">          - </span><span style="color:#9ECBFF;">prod</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">build-and-deploy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">env</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">TARGET</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ inputs.target }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">HOST</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">your-site.com</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">TARGET_DIR</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ format(&#39;/var/www/your-site/{0}.your-site.com&#39;, inputs.target) }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">PROJECT_DIR</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ format(&#39;{0}.your-site.com&#39;, inputs.target) }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">REMOTE_USER</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">SSH_PRIVATE_KEY</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.SERVER_SSH_KEY }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">ENV_FILE</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ format(&#39;.env.{0}&#39;, inputs.target) }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Setting the environment</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">          echo $TARGET</span></span>
<span class="line"><span style="color:#9ECBFF;">          # deploy on Dev by default</span></span>
<span class="line"><span style="color:#9ECBFF;">          if [[ $TARGET == &quot;&quot; ]]</span></span>
<span class="line"><span style="color:#9ECBFF;">          then</span></span>
<span class="line"><span style="color:#9ECBFF;">            echo &quot;TARGET_DIR=/var/www/your-site/dev.your-site.com&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#9ECBFF;">            echo &quot;PROJECT_DIR=dev.your-site.com&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#9ECBFF;">            echo &quot;ENV_FILE=.env.dev&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#9ECBFF;">          fi          </span></span>
<span class="line"><span style="color:#9ECBFF;">          if [[ $TARGET == &quot;prod&quot; ]]</span></span>
<span class="line"><span style="color:#9ECBFF;">          then</span></span>
<span class="line"><span style="color:#9ECBFF;">            echo &quot;TARGET_DIR=/var/www/your-site/your-site.com&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#9ECBFF;">            echo &quot;PROJECT_DIR=your-site.com&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#9ECBFF;">          fi</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">          echo &quot;target dir: $TARGET_DIR&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">          echo &quot;project dir: $PROJECT_DIR&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">submodules</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">recursive</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">snickerbockers/submodules-init@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">node-version</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pnpm/action-setup@v2</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Install pnpm</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pnpm-install</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8.5.0</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">run_install</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Install dependencies</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pnpm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mv $ENV_FILE .env</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pnpm build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Clean up the server dir</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">appleboy/ssh-action@master</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">host</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ env.HOST }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">username</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ env.REMOTE_USER }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">key</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ env.SSH_PRIVATE_KEY }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">envs</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">TARGET_DIR</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">sudo rm -rf $TARGET_DIR; mkdir $TARGET_DIR</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Transfer files</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">easingthemes/ssh-deploy@main</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">SSH_PRIVATE_KEY</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ env.SSH_PRIVATE_KEY }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">REMOTE_HOST</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ env.HOST }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">REMOTE_USER</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ env.REMOTE_USER }}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">env</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">SOURCE</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">dist/</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">TARGET</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ env.TARGET_DIR }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">EXCLUDE</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;.git, .github, .vscode, *.md, *.yaml, *.sql, .gitignore&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">After deploy scripts</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">appleboy/ssh-action@master</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">host</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ env.HOST }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">username</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ env.REMOTE_USER }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">key</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ env.SSH_PRIVATE_KEY }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">envs</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">TARGET_DIR,REMOTE_USER,PROJECT_DIR</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">            cd $TARGET_DIR</span></span>
<span class="line"><span style="color:#9ECBFF;">            pwd</span></span>
<span class="line"><span style="color:#9ECBFF;">            sudo chgrp -R www-data * .*</span></span>
<span class="line"><span style="color:#9ECBFF;">            backup_date=\`date &quot;+%Y-%m-%d__%H-%M-%S&quot;\`;</span></span>
<span class="line"><span style="color:#9ECBFF;">            printf &quot;{\\&quot;website\\&quot;: \\&quot;$PROJECT_DIR\\&quot;, \\&quot;date\\&quot;: \\&quot;$backup_date\\&quot;}&quot; &gt; build.json</span></span>
<span class="line"><span style="color:#9ECBFF;">            # -------------------</span></span>
<span class="line"><span style="color:#9ECBFF;">            root_backup_dir=\`echo &quot;/var/www/your-site/backup/$PROJECT_DIR&quot;\`;</span></span>
<span class="line"><span style="color:#9ECBFF;">            backup_dir=\`echo &quot;$root_backup_dir/$backup_date&quot;\`;</span></span>
<span class="line"><span style="color:#9ECBFF;">            mkdir $backup_dir -p;</span></span>
<span class="line"><span style="color:#9ECBFF;">            cp -rf $TARGET_DIR/* $backup_dir;</span></span>
<span class="line"><span style="color:#9ECBFF;">            sudo chgrp -R www-data $backup_dir;</span></span>
<span class="line"><span style="color:#9ECBFF;">            backups_remove_count=5;</span></span>
<span class="line"><span style="color:#9ECBFF;">            cd $backup_dir &amp;&amp; rm -rf work logs images;</span></span>
<span class="line"><span style="color:#9ECBFF;">            cd $root_backup_dir &amp;&amp; dirs_to_be_removed=\`ls -dt &quot;$root_backup_dir/&quot;* | tail -n +$backups_remove_count\`;</span></span>
<span class="line"><span style="color:#9ECBFF;">            rm $dirs_to_be_removed -rf;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># .github/workflows/deploy.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build and deploy</span></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">main</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">workflow_dispatch</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">inputs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">target</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Target</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">required</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">default</span><span style="color:#24292E;">: </span><span style="color:#032F62;">dev</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">choice</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">options</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          - </span><span style="color:#032F62;">dev</span></span>
<span class="line"><span style="color:#24292E;">          - </span><span style="color:#032F62;">staging</span></span>
<span class="line"><span style="color:#24292E;">          - </span><span style="color:#032F62;">prod</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">build-and-deploy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">env</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">TARGET</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ inputs.target }}</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">HOST</span><span style="color:#24292E;">: </span><span style="color:#032F62;">your-site.com</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">TARGET_DIR</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ format(&#39;/var/www/your-site/{0}.your-site.com&#39;, inputs.target) }}</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">PROJECT_DIR</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ format(&#39;{0}.your-site.com&#39;, inputs.target) }}</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">REMOTE_USER</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">SSH_PRIVATE_KEY</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.SERVER_SSH_KEY }}</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">ENV_FILE</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ format(&#39;.env.{0}&#39;, inputs.target) }}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Setting the environment</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">          echo $TARGET</span></span>
<span class="line"><span style="color:#032F62;">          # deploy on Dev by default</span></span>
<span class="line"><span style="color:#032F62;">          if [[ $TARGET == &quot;&quot; ]]</span></span>
<span class="line"><span style="color:#032F62;">          then</span></span>
<span class="line"><span style="color:#032F62;">            echo &quot;TARGET_DIR=/var/www/your-site/dev.your-site.com&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#032F62;">            echo &quot;PROJECT_DIR=dev.your-site.com&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#032F62;">            echo &quot;ENV_FILE=.env.dev&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#032F62;">          fi          </span></span>
<span class="line"><span style="color:#032F62;">          if [[ $TARGET == &quot;prod&quot; ]]</span></span>
<span class="line"><span style="color:#032F62;">          then</span></span>
<span class="line"><span style="color:#032F62;">            echo &quot;TARGET_DIR=/var/www/your-site/your-site.com&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#032F62;">            echo &quot;PROJECT_DIR=your-site.com&quot; &gt;&gt; $GITHUB_ENV</span></span>
<span class="line"><span style="color:#032F62;">          fi</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">          echo &quot;target dir: $TARGET_DIR&quot;</span></span>
<span class="line"><span style="color:#032F62;">          echo &quot;project dir: $PROJECT_DIR&quot;</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">submodules</span><span style="color:#24292E;">: </span><span style="color:#032F62;">recursive</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">snickerbockers/submodules-init@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">node-version</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm/action-setup@v2</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Install pnpm</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm-install</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">8.5.0</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">run_install</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Install dependencies</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mv $ENV_FILE .env</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Clean up the server dir</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">appleboy/ssh-action@master</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">host</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ env.HOST }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">username</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ env.REMOTE_USER }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">key</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ env.SSH_PRIVATE_KEY }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">envs</span><span style="color:#24292E;">: </span><span style="color:#032F62;">TARGET_DIR</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">script</span><span style="color:#24292E;">: </span><span style="color:#032F62;">sudo rm -rf $TARGET_DIR; mkdir $TARGET_DIR</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Transfer files</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">easingthemes/ssh-deploy@main</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">SSH_PRIVATE_KEY</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ env.SSH_PRIVATE_KEY }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">REMOTE_HOST</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ env.HOST }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">REMOTE_USER</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ env.REMOTE_USER }}</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">env</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">SOURCE</span><span style="color:#24292E;">: </span><span style="color:#032F62;">dist/</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">TARGET</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ env.TARGET_DIR }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">EXCLUDE</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;.git, .github, .vscode, *.md, *.yaml, *.sql, .gitignore&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">After deploy scripts</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">appleboy/ssh-action@master</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">host</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ env.HOST }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">username</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ env.REMOTE_USER }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">key</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ env.SSH_PRIVATE_KEY }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">envs</span><span style="color:#24292E;">: </span><span style="color:#032F62;">TARGET_DIR,REMOTE_USER,PROJECT_DIR</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">script</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">            cd $TARGET_DIR</span></span>
<span class="line"><span style="color:#032F62;">            pwd</span></span>
<span class="line"><span style="color:#032F62;">            sudo chgrp -R www-data * .*</span></span>
<span class="line"><span style="color:#032F62;">            backup_date=\`date &quot;+%Y-%m-%d__%H-%M-%S&quot;\`;</span></span>
<span class="line"><span style="color:#032F62;">            printf &quot;{\\&quot;website\\&quot;: \\&quot;$PROJECT_DIR\\&quot;, \\&quot;date\\&quot;: \\&quot;$backup_date\\&quot;}&quot; &gt; build.json</span></span>
<span class="line"><span style="color:#032F62;">            # -------------------</span></span>
<span class="line"><span style="color:#032F62;">            root_backup_dir=\`echo &quot;/var/www/your-site/backup/$PROJECT_DIR&quot;\`;</span></span>
<span class="line"><span style="color:#032F62;">            backup_dir=\`echo &quot;$root_backup_dir/$backup_date&quot;\`;</span></span>
<span class="line"><span style="color:#032F62;">            mkdir $backup_dir -p;</span></span>
<span class="line"><span style="color:#032F62;">            cp -rf $TARGET_DIR/* $backup_dir;</span></span>
<span class="line"><span style="color:#032F62;">            sudo chgrp -R www-data $backup_dir;</span></span>
<span class="line"><span style="color:#032F62;">            backups_remove_count=5;</span></span>
<span class="line"><span style="color:#032F62;">            cd $backup_dir &amp;&amp; rm -rf work logs images;</span></span>
<span class="line"><span style="color:#032F62;">            cd $root_backup_dir &amp;&amp; dirs_to_be_removed=\`ls -dt &quot;$root_backup_dir/&quot;* | tail -n +$backups_remove_count\`;</span></span>
<span class="line"><span style="color:#032F62;">            rm $dirs_to_be_removed -rf;</span></span></code></pre></div></details></details></details>`,3),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const m=s(l,[["render",t]]);export{F as __pageData,m as default};
