import { defineComponent as M, ref as g, computed as R, openBlock as $, createElementBlock as b, Fragment as U, createTextVNode as v, withDirectives as I, createElementVNode as c, vModelText as S, toDisplayString as y, renderList as A } from "vue";
const E = '(function(){"use strict";const n=[0,1/0,NaN,Number.MIN_VALUE,Number.MAX_VALUE].flatMap(t=>[t,-t]),s=new DataView(new ArrayBuffer(8));function i(){const t=0|n.length*3*Math.random();return t<n.length?n[t]:(s.setUint32(0,Math.random()*4294967296),s.setUint32(4,Math.random()*4294967296),s.getFloat64(0))}self.onmessage=({data:t})=>{const[o,f]=t,l=new Function(...o,`return ${f}`);let e=0;setInterval(()=>{const c=e+100;for(;e++,e<c;){const r=[];for(let a=0;a<o.length;a++)r.push(i());if(!l(...r)){self.postMessage({type:"fail",arg:r,count:e}),self.close();return}}self.postMessage({type:"ok",count:e})},0)}})();\n', L = typeof self < "u" && self.Blob && new Blob([E], { type: "text/javascript;charset=utf-8" });
function C(n) {
  let e;
  try {
    if (e = L && (self.URL || self.webkitURL).createObjectURL(L), !e) throw "";
    const r = new Worker(e, {
      name: n == null ? void 0 : n.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(e);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(E),
      {
        name: n == null ? void 0 : n.name
      }
    );
  } finally {
    e && (self.URL || self.webkitURL).revokeObjectURL(e);
  }
}
const x = {
  "?": [10, 11],
  "||": [20, 21],
  "&&": [30, 31],
  "=": [50, 51],
  "==": [50, 51],
  "<": [50, 51],
  ">": [50, 51],
  "<=": [50, 51],
  ">=": [50, 51],
  "+": [60, 61],
  "-": [60, 61],
  "*": [70, 71],
  "/": [70, 71],
  "%": [70, 71],
  "^": [91, 90],
  "**": [91, 90]
}, j = {
  "!": 40,
  "+": 80,
  "-": 80
}, N = new RegExp(`(?:${[
  ["num", "[0-9]+(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?"],
  ["nm", "\\p{XIDS}\\p{XIDC}*"],
  ["sym", [..."(,:)", ...Object.keys(x), ...Object.keys(j)].sort((n, e) => e.length - n.length).map((n) => n.replace(/([()|/+*^?])/g, "\\$1")).join("|")],
  ["eof", "$"],
  ["err", ".*"]
].map(([n, e]) => `(?<${n}>${e})`).join("|")})\\s*`, "uy");
function _(n) {
  const e = [];
  for (n = n.trimStart(), N.lastIndex = 0; ; ) {
    const r = N.exec(n).groups;
    if (r.num != null)
      e.push(["num", Number(r.num)]);
    else if (r.nm != null)
      e.push(["nm", r.nm]);
    else if (r.sym != null)
      e.push(["sym", r.sym]);
    else {
      if (r.eof != null)
        return e;
      throw `无法解析："${r.err}"`;
    }
  }
}
function w(n, e) {
  return Object.prototype.hasOwnProperty.call(n, e);
}
function F(n) {
  let e = 0;
  function r() {
    return n[e] ?? ["eof", "EOF"];
  }
  function t() {
    const f = r();
    return e++, f;
  }
  function i(f, o) {
    return f[0] == "sym" && f[1] == o;
  }
  const l = a(0);
  if (r()[0] != "eof") throw `应结束而非 "${r()[1]}"`;
  return l;
  function a(f) {
    let o = t(), u;
    if (o[0] == "eof") throw "不应结束";
    if (o[0] != "sym")
      u = o[1];
    else if (o[1] == "(") {
      if (u = a(0), o = t(), !i(o, ")")) throw `应为右括号而非 "${o[1]}"`;
    } else {
      if (!w(j, o[1])) throw `"${o[1]}" 不是前缀运算`;
      const s = a(j[o[1]]);
      u = ["un", o[1], s];
    }
    for (; o = r(), o[0] != "eof"; ) {
      if (i(o, "(")) {
        if (typeof u != "string") throw `应为函数而非 ${m(u)}`;
        t();
        const p = [];
        if (i(r(), ")")) t();
        else for (; p.push(a(0)), o = t(), !i(o, ")"); )
          if (!i(o, ",")) throw `应为逗号或右括号而非 "${o[1]}"`;
        u = ["fn", u, p];
        continue;
      }
      if (o[0] != "sym" || !w(x, o[1])) break;
      const [s, h] = x[o[1]];
      if (s < f) break;
      if (t(), o[1] == "?") {
        const p = a(0);
        if (o = t(), !i(o, ":")) throw `应为冒号而非 "${o[1]}"`;
        u = ["cond", u, p, a(h)];
      } else {
        const p = a(h);
        u = ["bin", o[1], u, p];
      }
    }
    return u;
  }
}
function m(n) {
  return Array.isArray(n) ? n[0] == "fn" ? `${n[1]}(${n[2].map(m).join(", ")})` : n[0] == "un" ? `(${n[1]}${m(n[2])})` : n[0] == "bin" ? `(${m(n[2])} ${n[1]} ${m(n[3])})` : `(${m(n[1])} ? ${m(n[2])} : ${m(n[3])})` : String(n);
}
const P = {
  NaN: NaN,
  Infinity: 1 / 0,
  E: Math.E,
  PI: Math.PI
}, k = {
  abs: 1,
  acos: 1,
  acosh: 1,
  asin: 1,
  asinh: 1,
  atan: 1,
  atanh: 1,
  cbrt: 1,
  ceil: 1,
  cos: 1,
  cosh: 1,
  exp: 1,
  expm1: 1,
  floor: 1,
  fround: 1,
  log: 1,
  log1p: 1,
  log10: 1,
  log2: 1,
  round: 1,
  sign: 1,
  sin: 1,
  sinh: 1,
  sqrt: 1,
  tan: 1,
  tanh: 1,
  trunc: 1,
  atan2: 2,
  pow: 2,
  hypot: -1,
  max: -1,
  min: -1
};
function V(n) {
  function e(t, i, l) {
    if (i != l) throw `${m(t)} 应为 ${i} 而非 ${l}`;
  }
  e(n, "bool", r(n));
  function r(t) {
    if (!Array.isArray(t)) return "num";
    if (t[0] == "fn")
      return t[2].forEach((l) => e(l, "num", r(l))), "num";
    if (t[0] == "un") {
      const l = t[1] == "!" ? "bool" : "num";
      return e(t[2], l, r(t[2])), l;
    }
    if (t[0] == "bin") {
      const l = t[1] == "&&" || t[1] == "||", a = t[1] == "=" || t[1] == "==", f = ["<", ">", "<=", ">="].includes(t[1]), o = r(t[2]);
      return l ? e(t[2], "bool", o) : a || e(t[2], "num", o), e(t[3], o, r(t[3])), l || a || f ? "bool" : "num";
    }
    e(t[1], "bool", r(t[1]));
    const i = r(t[2]);
    return e(t[3], i, r(t[3])), i;
  }
}
function d(n, e) {
  if (typeof n == "number") return String(n);
  if (typeof n == "string")
    return w(P, n) ? String(n) : (e[n] = 1, n);
  if (n[0] == "fn") {
    if (!w(k, n[1])) throw `"${n[1]}" 不是函数`;
    if (k[n[1]] != -1 && k[n[1]] != n[2].length)
      throw `需要 ${k[n[1]]} 个参数，但给了 ${n[2].length} 个`;
    const r = n[2].map((t) => d(t, e)).join(", ");
    return `Math.${n[1]}(${r})`;
  }
  if (n[0] == "un") return `(${n[1]}${d(n[2], e)})`;
  if (n[0] == "bin") {
    const r = d(n[2], e), t = d(n[3], e);
    switch (n[1]) {
      case "^":
        return `(${r} ** ${t})`;
      case "=":
        return `Object.is(${r}, ${t})`;
      case "==":
        return `(${r} === ${t})`;
      case "!=":
        return `(${r} !== ${t})`;
      default:
        return `(${r} ${n[1]} ${t})`;
    }
  }
  return `(${d(n[1], e)} ? ${d(n[2], e)} : ${d(n[3], e)})`;
}
function O(n) {
  try {
    const e = {}, r = F(_(n));
    return V(r), { kind: "ok", expr: d(r, e), args: Object.keys(e) };
  } catch (e) {
    return { kind: "err", e };
  }
}
const X = { key: 0 }, B = { key: 1 }, D = ["disabled"], W = ["disabled"], T = { key: 2 }, q = { key: 3 }, K = /* @__PURE__ */ M({
  __name: "Main",
  setup(n) {
    const e = g("x + y = y + x"), r = g(O(e.value).args), t = R(() => O(e.value)), i = g(0), l = g(), a = g();
    function f() {
      if (t.value.kind == "err") return;
      i.value = 0, r.value = t.value.args, l.value = void 0, o();
      const u = new C();
      a.value = u, u.postMessage([t.value.args, t.value.expr]), u.onmessage = ({ data: s }) => {
        i.value = s.count, s.type == "fail" && (o(), l.value = s.arg);
      };
    }
    function o() {
      var u;
      (u = a.value) == null || u.terminate(), a.value = void 0;
    }
    return (u, s) => ($(), b(U, null, [
      s[4] || (s[4] = v(" 表达式：")),
      I(c("input", {
        type: "text",
        "onUpdate:modelValue": s[0] || (s[0] = (h) => e.value = h)
      }, null, 512), [
        [S, e.value]
      ]),
      s[5] || (s[5] = v("（结果为布尔值） ")),
      t.value.kind == "ok" ? ($(), b("div", X, [
        v(" 随机变量：" + y(t.value.args.join(", ")), 1),
        s[1] || (s[1] = c("br", null, null, -1)),
        s[2] || (s[2] = v(" 对应的 JS 代码：")),
        c("code", null, y(t.value.expr), 1)
      ])) : ($(), b("div", B, " 解析错误：" + y(t.value.e), 1)),
      s[6] || (s[6] = c("hr", null, null, -1)),
      c("button", {
        type: "button",
        onClick: f,
        disabled: t.value.kind == "err"
      }, "开始测试", 8, D),
      c("button", {
        type: "button",
        onClick: o,
        disabled: a.value == null
      }, "停止测试", 8, W),
      c("div", null, y(a.value ? "正" : "不") + "在运行，已执行 " + y(i.value) + " 次测试。 ", 1),
      l.value != null ? ($(), b("div", T, [
        s[3] || (s[3] = v(" 测试发现问题，参数： ")),
        c("ul", null, [
          ($(!0), b(U, null, A(l.value, (h, p) => ($(), b("li", null, [
            c("code", null, y(r.value[p]) + " = " + y(Object.is(-0, h) ? "-0" : String(h)), 1)
          ]))), 256))
        ])
      ])) : ($(), b("div", q, " 测试暂未发现问题 "))
    ], 64));
  }
});
export {
  K as default
};
