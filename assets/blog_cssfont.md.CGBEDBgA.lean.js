import{_ as i,a,k as e,o as t}from"./chunks/framework.GMhoYFqv.js";const d=JSON.parse('{"title":"CSS 字体奇技","description":"","frontmatter":{"title":"CSS 字体奇技","create":"2023-09-01T00:00:00.000Z","desc":"CSS 实现一些字体的功能的技巧"},"headers":[],"relativePath":"blog/cssfont.md","filePath":"blog/cssfont.md"}'),n={name:"blog/cssfont.md"};function l(p,s,h,k,o,r){return t(),a("div",null,s[0]||(s[0]=[e(`<p>网页排版效果常常不佳，许多功能没有，如标点挤压。不过，这些功能本就复杂，坑很多，不用也罢。但一些简单的需求，实现并不复杂，只是需要技巧（多是<code>@font-face</code>），绕些弯路。实现这些功能，性价比可观，而且很有趣！新博客就使用了一些技巧实现之。</p><p>举例：<em>斜体“Italic”</em> 正常“Normal” <code>代码“Code”</code></p><p>容易看出，三者字体有不同。以下介绍。</p><h2>中文斜体</h2><p>中文没有“意大利体”，生硬的斜体并不好看。不斜的楷体和仿宋可以替代之，我选用楷体。</p><p>使用楷体容易，但如何让它不斜？同时，不用楷体的部分，如英文，以及没有安装楷体的移动端设备，还是要斜。</p><p>这是一个技巧。使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face" target="_blank" rel="noreferrer"><code>@font-face</code></a> 引入本地的楷体，同时设定 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face/font-style" target="_blank" rel="noreferrer"><code>font-style</code></a> 为 <code>italic</code>。此时，系统将认为这个不斜的字体是斜体，从而在需要斜体的地方显示它。把它放在英文字体后面，效果好。示例代码如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@font-face</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ItalicKaiTi;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    font-style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">italic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;KaiTi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2>中文符号</h2><p>为了美观，英文字体总是优先于中文字体。这导致一些符号，如引号，总使用英文字体，不是全宽。</p><p>如何让这些特定的符号使用中文字体呢？容易想到，如果有一款中文字体，只有这些符号，该字体优先于英文字体，那么问题就可以解决。</p><p>这又是一个技巧，不需要自己新制作一款字体。利用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range" target="_blank" rel="noreferrer"><code>unicode-range</code></a>，<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face" target="_blank" rel="noreferrer"><code>@font-face</code></a> 可以只采用原字体的一些字。引入本地的中文字体，只采用一些符号，以此制成一款“新字体”。将其排在英文字体前面，即可优先采用中文的符号。此法相比自制新字体，有诸多优点，例如：风格统一（都是用户的字体）、技术简单。示例代码如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@font-face</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: SymbolYaHei;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    unicode-range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">U+201C-201D</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 双引号 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Microsoft YaHei&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2>英文部分</h2><p>斜体使用货真价实的意大利体，代码使用等宽字体。此二者皆有回落，一般都可以显示。</p><p>正常部分使用 Inter 字体，这是我较喜欢的一款字体。以 Web Font 引入，使用 <code>ss02</code> 变体以区分 I 和 l 。也有回落。</p><h2>顺序</h2><p>一般，先英文，后中文。在英文前，又有中文符号、Inter 字体、Mac 使用的字体，此三者优先选用。</p><p>斜体则在此前添加斜体所用的字体，同样有中英文、中文符号。代码则在此前添加各大等宽字体。</p>`,19)]))}const E=i(n,[["render",l]]);export{d as __pageData,E as default};