import{_ as o,a as p,k as t,o as d}from"./chunks/framework.CkYULkJI.js";const F=JSON.parse('{"title":"Unicode 常见问题","description":"","frontmatter":{"title":"Unicode 常见问题","create":"2023-12-06T00:00:00.000Z","desc":"实际会遇到的坑"},"headers":[],"relativePath":"blog/unicode.md","filePath":"blog/unicode.md"}'),c={name:"blog/unicode.md"};function a(m,e,r,n,i,l){return d(),p("div",null,e[0]||(e[0]=[t('<p>编程中，字符串一般使用 Unicode。但是，绝大部分人并不了解 Unicode，常常犯一些低级错误。本文列出一些问题，都常在实际情况下遇到。不讲过于技术性或理论性的东西，因为我不懂。</p><p>本文也为我自己备忘。和绝大部分人一样，我也不了解 Unicode，本文可能有错误。</p><h2>资料</h2><p>这个术语表很好用，简洁明了：<a href="https://www.unicode.org/glossary/" target="_blank" rel="noreferrer">Glossary</a>。</p><p>或者直接看<a href="https://www.unicode.org/versions/Unicode15.0.0/UnicodeStandard-15.0.pdf" target="_blank" rel="noreferrer">标准</a>（文件很大！）。</p><h2>字符</h2><p>字符类型常常<strong>不是</strong>一般认知的字符。</p><p>以下几种通常用作字符类型：</p><ol><li><em>Code unit</em>。通常是 <em>UTF-16</em> 的，也就是十六位无符号整数。也有 <em>UTF-8</em> 的，八位。</li><li><em>Code point</em>。0 到 10FFFF 的整数。</li><li><em>Scalar value</em>。<em>Code point</em> 去除代理字符，也就是 0 到 D7FF，或 E000 到 10FFFF。</li></ol><p>Java 使用第一种。Haskell 使用第二种。Rust 使用第三种。<br> 偶尔还有用 <em>grapheme cluster</em> 的，那更符合一般认知。</p><h2>字符串</h2><p>标准的字符串表示 <em>scalar value</em> 序列，表示为 <em>code unit</em> 序列。</p><p>字符串类型通常使用 <em>UTF-16</em> 或 <em>UTF-8</em>。许多使用 <em>UTF-16</em> 的语言（如 JavaScript）允许字符串格式错误，也就等同于十六位无符号整数序列（非正式名称 <em>WTF-16</em>）。</p><h2>字符串操作</h2><p>正确的字符串连接后依然正确，切分则不一定。<em>WTF-16</em> 随便怎么弄都依然是 <em>WTF-16</em>。</p><p>正确的字符串，首尾切除若干 <em>code unit</em> 后，若把一个字符切两半就会错误。但是，正确与否一定可以检测出来，即便错误，也一定可以剔除错误部分，不会连累其他字符，也不会多出莫名其妙的字符。不过 <em>WTF-16</em> 不行。</p><p>字符串匹配（子串查找）可以直接在 <em>code unit</em> 层面进行，如果字符串格式正确，结果也正确。</p><p>字符串的相等比较，应当正规化：<code>NFC</code>、<code>NFD</code>、<code>NFKC</code>、<code>NFKD</code>。正规化是上下文相关的，转换后连接不等于连接后转换。</p><h2>字符操作</h2><p>通过字符串的下标访问 <em>scalar value</em> 或者 <em>code point</em>，通常是线性复杂度的。如果复杂度很低，一般说明访问的其实是 <em>code unit</em>。</p><p>一般<strong>不需要</strong>通过字符串的下标访问字符（例如 <em>scalar value</em>）。如果用到了，一般说明方案不好。建议使用字符串匹配，或者正则表达式。</p><p>要获取字符串中的字符，建议获取 <em>grapheme cluster</em>。这通常都是最佳方案，例如在翻转字符串时。</p><p>绝对不要自己处理字符的性质，包括但不限于大小写的转换和判断。例如语法解析，可以用 <code>Xid_Start</code> 之类的来解析标识符。</p><h2>大小写转换</h2><p>大小写转换会改变长度。</p><p>大小写转换是上下文相关的，转换后连接不等于连接后转换。</p><p>大小写转换可以是本地化的，不同地区转换结果可以不同。</p><p>转过去再转回来，不等于原来的（废话）。转过去再转回来再转过去，不等于直接转过去。</p><p>大小写无关形式应当使用专门的 <code>toCasefold</code> 方法，不要转成大写或小写。</p><p>如果要规范化，<code>NFC</code> 或 <code>NFD</code> 规范化应当在 <code>toCasefold</code> 前后各进行一遍，进而是幂等的。例如 <code>NFD(toCasefold(NFD(x)))</code>。</p>',30)]))}const u=o(c,[["render",a]]);export{F as __pageData,u as default};