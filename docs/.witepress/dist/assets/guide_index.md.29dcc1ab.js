import{_ as s,c as n,o as a,a as e}from"./app.3b6acc86.js";const C=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Starting a new project","slug":"starting-a-new-project"},{"level":2,"title":"Updating Rindo","slug":"updating-rindo"}],"relativePath":"guide/index.md"}'),o={name:"guide/index.md"},p=e(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><h2 id="starting-a-new-project" tabindex="-1">Starting a new project <a class="header-anchor" href="#starting-a-new-project" aria-hidden="true">#</a></h2><p>Rindo requires a recent LTS version of <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">NodeJS</a> and npm. Make sure you&#39;ve installed and/or updated Node before continuing.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Note that you will need to use npm 6 or higher.</p></div><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm init rindo</span></span>
<span class="line"></span></code></pre></div><p>Rindo can be used to create standalone components, or entire apps. When running <code>npm init rindo</code>, you will be provided with a prompt so that you can choose the type of project to start.</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> Select a starter project.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Starters marked as </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">community</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> are developed by the Rindo</span></span>
<span class="line"><span style="color:#A6ACCD;">Community, rather than Navify. For more information on the </span></span>
<span class="line"><span style="color:#A6ACCD;">Rindo Community, please see github.com/rindo-community</span></span>
<span class="line"><span style="color:#A6ACCD;">\u203A - Use arrow-keys. Return to submit.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u276F   component          Collection of web components that can be</span></span>
<span class="line"><span style="color:#A6ACCD;">                       used anywhere</span></span>
<span class="line"><span style="color:#A6ACCD;">    app </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">community</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">    Minimal starter </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> building a Rindo </span></span>
<span class="line"><span style="color:#A6ACCD;">                       app or website</span></span>
<span class="line"></span></code></pre></div><p>Selecting the &#39;component&#39; option will prompt you for the name of your project.</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u2714 Pick a starter \u203A component</span></span>
<span class="line"><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> Project name \u203A my-first-rindo-project</span></span>
<span class="line"></span></code></pre></div><p>Here, we&#39;ve named our project &#39;my-first-rindo-project&#39;. After hitting <code>ENTER</code> to confirm your choices, the CLI will scaffold a Rindo project for us in a directory that matches the project name you provided.</p><p>Upon successfully creating our project, the CLI will print something similar to the following to the console:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u2714 Project name \u203A my-first-rindo-project</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2714 All setup  </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> 26 ms</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  We suggest that you begin by typing:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  $ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> my-first-rindo-project</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ npm install</span></span>
<span class="line"><span style="color:#A6ACCD;">  $ npm start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  $ npm start</span></span>
<span class="line"><span style="color:#A6ACCD;">    Starts the development server.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  $ npm run build</span></span>
<span class="line"><span style="color:#A6ACCD;">    Builds your project </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> production mode.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  $ npm </span><span style="color:#82AAFF;">test</span></span>
<span class="line"><span style="color:#A6ACCD;">    Starts the </span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;"> runner.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  Further reading:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   - https://github.com/navify/rindo-component-starter</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  Happy coding</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> \u{1F388}</span></span>
<span class="line"></span></code></pre></div><p>The first section describes a few commands required to finish getting your project bootstrapped.</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    $ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> my-first-rindo-project</span></span>
<span class="line"><span style="color:#A6ACCD;">    $ npm install</span></span>
<span class="line"><span style="color:#A6ACCD;">    $ npm start</span></span>
<span class="line"></span></code></pre></div><p>This will change your current directory to my-first-rindo-project (or whatever you named your project), install your dependencies for you, and start the development server.</p><p>The second section of the output describes a few useful commands available during the development process:</p><ul><li><p><code>npm start</code> starts a local development server. The development server will open a new browser tab containing your project&#39;s components. The dev-server uses hot-module reloading to update your components in the browser as you modify them for a rapid feedback cycle.</p></li><li><p><code>npm run build</code> creates a production-ready version of your components. The components generated in this step are not meant to be used in the local development server, but rather within a project that consumes your components.</p></li><li><p><code>npm test</code> runs your project&#39;s tests. The Rindo CLI has created both end-to-end and unit tests when scaffolding your project.</p></li></ul><p>At this time, Rindo does not interact with any version control systems (VCS) when running <code>npm init rindo</code>. If you wish to place your project under version control, we recommend initializing your VCS now. If you wish to use git, run the following after changing your current directory to the root of your Rindo project:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git init</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add -A</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit -m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">initialize project using rindo cli</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h2 id="updating-rindo" tabindex="-1">Updating Rindo <a class="header-anchor" href="#updating-rindo" aria-hidden="true">#</a></h2><p>To get the latest version of @rindo/core you can run:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install @rindo/core@latest --save-exact</span></span>
<span class="line"></span></code></pre></div>`,22),t=[p];function l(r,c,i,d,y,u){return a(),n("div",null,t)}const h=s(o,[["render",l]]);export{C as __pageData,h as default};
