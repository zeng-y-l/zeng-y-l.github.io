import{_ as a,a as e,G as n,o as p}from"./chunks/framework.DP4o1etF.js";const d=JSON.parse('{"title":"小狼毫监控程序","description":"","frontmatter":{"title":"小狼毫监控程序","create":"2024-05-01T00:00:00.000Z","desc":"用 AHK 自动重启小狼毫"},"headers":[],"relativePath":"blog/weasel.md","filePath":"blog/weasel.md"}'),t={name:"blog/weasel.md"};function l(o,s,r,i,c,u){return p(),e("div",null,s[0]||(s[0]=[n(`<p>用 <a href="https://rime.im/" target="_blank" rel="noreferrer">RIME</a> 输入法，Windows 上即<strong>小狼毫</strong>。它有个大问题：经常莫名其妙就退出了，打字打不了，只好重新打开。</p><p>手动重启很麻烦，我不堪其扰，于是前几天写了个 <a href="https://www.autohotkey.com/" target="_blank" rel="noreferrer">AutoHotkey</a> 脚本，用于自动重启。每隔半秒判断（避免占用过多 CPU）小狼毫是否退出，若退出则重启并提示。重启后等两秒，若又退出则弹窗报错。</p><p>脚本如下。右键托盘图标可得<em>程序文件夹</em>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>loop {</span></span>
<span class="line"><span>    Sleep 500</span></span>
<span class="line"><span>    if ProcessExist(&quot;WeaselServer.exe&quot;) == 0 {</span></span>
<span class="line"><span>        Run &quot;程序文件夹\\WeaselServer.exe&quot;</span></span>
<span class="line"><span>        TrayTip &quot;已重启小狼毫&quot;</span></span>
<span class="line"><span>        Sleep 2000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if ProcessExist(&quot;WeaselServer.exe&quot;) == 0 {</span></span>
<span class="line"><span>            MsgBox &quot;小狼毫重启失败&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4)]))}const m=a(t,[["render",l]]);export{d as __pageData,m as default};
