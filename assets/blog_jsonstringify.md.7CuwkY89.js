import{_ as s,c as a,o as n,b as p}from"./chunks/framework.qhbeIQmB.js";const F=JSON.parse('{"title":"从一篇文章的优化","description":"","frontmatter":{"title":"从一篇文章的优化","create":"2023-07-01T00:00:00.000Z","desc":"一篇文章的问题的解决方案（这是一篇旧文章，日期是后来的）"},"headers":[],"relativePath":"blog/jsonstringify.md","filePath":"blog/jsonstringify.md"}'),l={name:"blog/jsonstringify.md"},o=p(`<p>原文地址：<a href="https://www.jianshu.com/p/f38776414551" target="_blank" rel="noreferrer">https://www.jianshu.com/p/f38776414551</a></p><p>事先声明：我与作者无冤无仇。</p><hr><p>原文是关于<code>JSON.stringify</code>的。</p><p>别的不说，单说第一章中的错误，以及更好的解决方式。</p><hr><h2>需求</h2><p>原文的需求：</p><blockquote><p>首先我们在开发的过程当中遇到这样一个处理数据的需求</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">todayILearn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   _id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">   content: </span><span style="color:#9ECBFF;">&#39;今天学习 JSON.stringify()，我很开心！&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">   created_at: </span><span style="color:#9ECBFF;">&#39;Mon Nov 25 2019 14:03:55 GMT +0800 (中国标准时间)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">   updated_at: </span><span style="color:#9ECBFF;">&#39;Mon Nov 25 2019 16:03:55 GMT +0800 (中国标准时间)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">todayILearn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   _id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">   content: </span><span style="color:#032F62;">&#39;今天学习 JSON.stringify()，我很开心！&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">   created_at: </span><span style="color:#032F62;">&#39;Mon Nov 25 2019 14:03:55 GMT +0800 (中国标准时间)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">   updated_at: </span><span style="color:#032F62;">&#39;Mon Nov 25 2019 16:03:55 GMT +0800 (中国标准时间)&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>我们需要将上面这个对象处理成下面这个对象</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">todayILearn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">   content: </span><span style="color:#9ECBFF;">&#39;今天学习 JSON.stringify()，我很开心！&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">   createdAt: </span><span style="color:#9ECBFF;">&#39;Mon Nov 25 2019 14:03:55 GMT+0800 (中国标准时间)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">   updatedAt: </span><span style="color:#9ECBFF;">&#39;Mon Nov 25 2019 16:03:55 GMT+0800 (中国标准时间)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">todayILearn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">   content: </span><span style="color:#032F62;">&#39;今天学习 JSON.stringify()，我很开心！&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">   createdAt: </span><span style="color:#032F62;">&#39;Mon Nov 25 2019 14:03:55 GMT+0800 (中国标准时间)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">   updatedAt: </span><span style="color:#032F62;">&#39;Mon Nov 25 2019 16:03:55 GMT+0800 (中国标准时间)&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>也就是在不改变属性的值的前提下，将对象属性修改一下。 把<code>_id</code>改成<code>id</code>，把<code>updated_at</code>改成<code>updatedAt</code>，把<code>created_at</code>改成<code>createdAt</code>。</p></blockquote><p>很简单。但是，有几点没有说明：</p><ol><li>是直接在原对象改（可变），还是新创建一个对象（不可变）？</li><li>如果有重复属性（比如已经有<code>id</code>了），或者该有的属性没有（比如没有<code>_id</code>），怎么办？</li><li>如果对象有一些奇怪的东西，比如<code>getter</code>、<code>setter</code>、对象已经被冻住、这些属性不可枚举，或者需要的属性在<code>prototype</code>上，甚至对象是<code>Proxy</code>，怎么办？</li></ol><p>我认为的解决方法：</p><p>第一、二点，没有限制，作为每一个解决方案的<ruby>特性<rt>feature</rt></ruby>。<br> 第三点，就<strong>认为</strong>输入和输出对象都是普通对象。</p><hr><h2>解决</h2><p>解决方案在下面罗列。<br> 也罗列一些思考方法。</p><p>每个方案作为一个函数，<code>this</code>为输入，<code>return</code>为输出。</p><p>每个方案的效果如下：</p><ul><li>顺序变化：键的顺序变化。（默认：没变）</li><li>多余结果：输入有重复属性，输出对其的处理。（默认：后者覆盖前者）</li><li>缺省结果：输入缺少一些属性，输出对其的处理。（默认：缺少的键在输出中不存在）</li><li>可变性：是直接在原对象改（可变），还是新创建一个对象（不可变）。</li><li>错误：输入规范，但输出错误。</li><li>速度：一万次需要的时间。</li><li>评价：我的评价。</li></ul><h4>方案一（文中方案一）：一次遍历+多声明一个变量</h4><ul><li>可变性：不可变</li><li>速度：20~40ms</li><li>评价：还行，但为什么不用<code>switch</code>呢？</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">todayILearnTemp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (key </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;_id&quot;</span><span style="color:#E1E4E8;">) todayILearnTemp[</span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (key </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;created_at&quot;</span><span style="color:#E1E4E8;">) todayILearnTemp[</span><span style="color:#9ECBFF;">&quot;createdAt&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (key </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;updated_at&quot;</span><span style="color:#6A737D;">/*作者这里有一个笔误*/</span><span style="color:#E1E4E8;">) todayILearnTemp[</span><span style="color:#9ECBFF;">&quot;updatedAt&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> todayILearnTemp[key] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> todayILearnTemp;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">todayILearnTemp</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">key</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">value</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">entries</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (key </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;_id&quot;</span><span style="color:#24292E;">) todayILearnTemp[</span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (key </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;created_at&quot;</span><span style="color:#24292E;">) todayILearnTemp[</span><span style="color:#032F62;">&quot;createdAt&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (key </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;updated_at&quot;</span><span style="color:#6A737D;">/*作者这里有一个笔误*/</span><span style="color:#24292E;">) todayILearnTemp[</span><span style="color:#032F62;">&quot;updatedAt&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> todayILearnTemp[key] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> todayILearnTemp;</span></span></code></pre></div><h4>思考一：上面方案的思考方法</h4><p>遍历输入键值对，按顺序加入输出对象。<br> 对于每一个键，用一些方法得到新的键。</p><p>伪代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">for [k,v] in input:</span></span>
<span class="line"><span style="color:#e1e4e8;">    newKV(output, k, v)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">for [k,v] in input:</span></span>
<span class="line"><span style="color:#24292e;">    newKV(output, k, v)</span></span></code></pre></div><p>对于<code>newKV</code>的不同处理，就能得到最终的不同结果。</p><p>例如上方的方法的<code>newKV</code>就是：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (k </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;_id&quot;</span><span style="color:#E1E4E8;">) output[</span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v;</span></span>
<span class="line"><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (k </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;created_at&quot;</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#E1E4E8;">output[</span><span style="color:#9ECBFF;">&quot;createdAt&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v;</span></span>
<span class="line"><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (k </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;updated_at&quot;</span><span style="color:#E1E4E8;">) output[</span><span style="color:#9ECBFF;">&quot;updatedAt&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> output[k] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (k </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;_id&quot;</span><span style="color:#24292E;">) output[</span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v;</span></span>
<span class="line"><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (k </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;created_at&quot;</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">output[</span><span style="color:#032F62;">&quot;createdAt&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v;</span></span>
<span class="line"><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (k </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;updated_at&quot;</span><span style="color:#24292E;">) output[</span><span style="color:#032F62;">&quot;updatedAt&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#D73A49;">else</span><span style="color:#24292E;"> output[k] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v;</span></span></code></pre></div><p>该方法都能轻易控制“顺序变化”“多余结果”“缺省结果”。</p><h4>方案二：最优雅法</h4><ul><li>可变性：不可变</li><li>速度：20~50ms</li><li>评价：基于思考一，非常优雅。理论上一行即可写出。用了解构赋值和空值合并。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> mapObj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	_id: </span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	created_at: </span><span style="color:#9ECBFF;">&quot;createdAt&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	updated_at: </span><span style="color:#9ECBFF;">&quot;updatedAt&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">fromEntries</span><span style="color:#E1E4E8;">(Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">	([</span><span style="color:#FFAB70;">k</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [mapObj[k] </span><span style="color:#F97583;">??</span><span style="color:#E1E4E8;"> k, v]</span></span>
<span class="line"><span style="color:#E1E4E8;">));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> mapObj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	_id: </span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	created_at: </span><span style="color:#032F62;">&quot;createdAt&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	updated_at: </span><span style="color:#032F62;">&quot;updatedAt&quot;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">fromEntries</span><span style="color:#24292E;">(Object.</span><span style="color:#6F42C1;">entries</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	([</span><span style="color:#E36209;">k</span><span style="color:#24292E;">,</span><span style="color:#E36209;">v</span><span style="color:#24292E;">]) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [mapObj[k] </span><span style="color:#D73A49;">??</span><span style="color:#24292E;"> k, v]</span></span>
<span class="line"><span style="color:#24292E;">));</span></span></code></pre></div><h4>方案三：可变法</h4><ul><li>可变性：可变</li><li>顺序变化：会改变顺序。</li><li>多余结果：如果同时有<code>id</code>和<code>_id</code>，则现<code>id</code>（原<code>_id</code>）一定会覆盖原<code>id</code>。</li><li>速度：20~40ms</li><li>评价：基于思考一的唯一可变方法。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> mapObj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	_id: </span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	created_at: </span><span style="color:#9ECBFF;">&quot;createdAt&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	updated_at: </span><span style="color:#9ECBFF;">&quot;updatedAt&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">k</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">mapObj.</span><span style="color:#B392F0;">hasOwnProperty</span><span style="color:#E1E4E8;">(k)) </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">[mapObj[k]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">[k];</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">delete</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">[k];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> mapObj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	_id: </span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	created_at: </span><span style="color:#032F62;">&quot;createdAt&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	updated_at: </span><span style="color:#032F62;">&quot;updatedAt&quot;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">k</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">mapObj.</span><span style="color:#6F42C1;">hasOwnProperty</span><span style="color:#24292E;">(k)) </span><span style="color:#D73A49;">continue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">[mapObj[k]] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">[k];</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">delete</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">[k];</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">;</span></span></code></pre></div><h4>方案四（文中方案二）：暴力<code>delete</code>属性和增加属性</h4><ul><li>可变性：可变</li><li>顺序变化：会改变顺序。</li><li>多余结果：如果同时有<code>id</code>和<code>_id</code>，则现<code>id</code>（原<code>_id</code>）一定会覆盖原<code>id</code>。</li><li>缺省结果：缺少的属性会变成<code>undefined</code>。</li><li>速度：20~40ms</li><li>评价：暴力。使用<code>delete</code>，类似方案三。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">._id;</span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.createdAt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.created_at;</span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.updatedAt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.updated_at;</span></span>
<span class="line"><span style="color:#F97583;">delete</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">._id;</span></span>
<span class="line"><span style="color:#F97583;">delete</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.created_at;</span></span>
<span class="line"><span style="color:#F97583;">delete</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.updated_at;</span></span>
<span class="line"><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">._id;</span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.createdAt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.created_at;</span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.updatedAt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.updated_at;</span></span>
<span class="line"><span style="color:#D73A49;">delete</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">._id;</span></span>
<span class="line"><span style="color:#D73A49;">delete</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.created_at;</span></span>
<span class="line"><span style="color:#D73A49;">delete</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.updated_at;</span></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">;</span></span></code></pre></div><h4>方案五：结构法</h4><ul><li>可变性：不可变</li><li>顺序变化：顺序是定死的，和输入无关。</li><li>多余结果：忽略多余输入。</li><li>缺省结果：缺少的属性会变成<code>undefined</code>。</li><li>速度：10ms</li><li>评价：暴力，但快速简洁。如果是中间操作（输入有保障），建议使用这种。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	id: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">._id,</span></span>
<span class="line"><span style="color:#E1E4E8;">	content: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.content,</span></span>
<span class="line"><span style="color:#E1E4E8;">	createdAt: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.created_at,</span></span>
<span class="line"><span style="color:#E1E4E8;">	updatedAt: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.updated_at</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	id: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">._id,</span></span>
<span class="line"><span style="color:#24292E;">	content: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.content,</span></span>
<span class="line"><span style="color:#24292E;">	createdAt: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.created_at,</span></span>
<span class="line"><span style="color:#24292E;">	updatedAt: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.updated_at</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h4>方案六（文中方案三）：序列化+<code>replace</code>美学典范</h4><ul><li>可变性：不可变</li><li>速度：80~100ms</li><li>错误：若输入字符串含有需要替换的键名，则输出也会被替换。并且无法处理回环引用、函数、<code>Symbol</code>等。</li><li>评价：烂死了，烂到其他特性都懒得写了。无语\\(O_O)/ <ul><li>bug先修了再说吧。</li><li>美个屁，谁愿意莫名其妙看一个正则？</li><li>比其他方案慢了两三倍。</li></ul></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mapObj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	_id: </span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	created_at: </span><span style="color:#9ECBFF;">&quot;createdAt&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	updated_at: </span><span style="color:#9ECBFF;">&quot;updatedAt&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">_id</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">created_at</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">updated_at</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">gi</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#FFAB70;">matched</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">mapObj[matched]));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mapObj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	_id: </span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	created_at: </span><span style="color:#032F62;">&quot;createdAt&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	updated_at: </span><span style="color:#032F62;">&quot;updatedAt&quot;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">/_id</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">created_at</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">updated_at/</span><span style="color:#D73A49;">gi</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#E36209;">matched</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">mapObj[matched]));</span></span></code></pre></div><h4>思考二：键的映射</h4><p>即给定旧的键，映射到新的键。<br> 所有方案都需要这一步。</p><p>方案四、五，是曲线救国，会导致缺少的属性变成<code>undefined</code>。</p><p>方案一，采用一长串<code>if..else</code>来解决这个问题。</p><p>方案二、三、六，采用一个对象来完成这件事。</p><ul><li>若采用对象，还需要考虑没找到的情况。 <ul><li>方案二，需要在一个表达式内完成，因此采用空值合并运算符。</li><li>方案三，添加键后还要<code>delete</code>原来的键，因此只好事先用<code>hasOwnProperty</code>过滤一遍。</li><li>方案六，没考虑！很烂。</li></ul></li></ul><p>另外，从方案一的<code>if..else</code>，还能使用<code>switch</code>。那样更简洁。<br> 方案一的究极进化就是方案二。</p>`,52),e=[o];function t(c,r,E,y,i,d){return n(),a("div",null,e)}const h=s(l,[["render",t]]);export{F as __pageData,h as default};