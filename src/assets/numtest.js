import { defineComponent as O, ref as g, computed as S, onUnmounted as A, openBlock as p, createElementBlock as y, Fragment as L, createTextVNode as v, withDirectives as _, createElementVNode as m, vModelText as C, toDisplayString as b, renderList as F } from "vue";
const I = '(function(){"use strict";const n=[0,1/0,NaN,Number.MIN_VALUE,Number.MAX_VALUE].flatMap(t=>[t,-t]),s=new DataView(new ArrayBuffer(8));function i(){const t=0|n.length*5*Math.random();return t<n.length?n[t]:(s.setUint32(0,Math.random()*4294967296),s.setUint32(4,Math.random()*4294967296),s.getFloat64(0))}self.onmessage=({data:t})=>{const[o,f]=t,l=new Function(...o,`return ${f}`);let e=0;setInterval(()=>{const c=e+100;for(;e++,e<c;){const r=[];for(let a=0;a<o.length;a++)r.push(i());if(!l(...r)){self.postMessage({type:"fail",arg:r,count:e}),self.close();return}}self.postMessage({type:"ok",count:e})},0)}})();\n', N = typeof self < "u" && self.Blob && new Blob([I], { type: "text/javascript;charset=utf-8" });
function P(n) {
  let t;
  try {
    if (t = N && (self.URL || self.webkitURL).createObjectURL(N), !t) throw "";
    const r = new Worker(t, {
      name: n == null ? void 0 : n.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(I),
      {
        name: n == null ? void 0 : n.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const x = {
  "?": [10, 11],
  "->": [21, 20],
  "||": [30, 31],
  "&&": [40, 41],
  "=": [60, 61],
  "==": [60, 61],
  "<": [60, 61],
  ">": [60, 61],
  "<=": [60, 61],
  ">=": [60, 61],
  "+": [100, 101],
  "-": [100, 101],
  "*": [110, 111],
  "/": [110, 111],
  "%": [110, 111],
  "^": [131, 130],
  "**": [131, 130]
}, U = {
  "!": 50,
  "+": 120,
  "-": 120
}, E = new RegExp(`(?:${[
  ["num", "[0-9]+(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?"],
  ["nm", "\\p{XIDS}\\p{XIDC}*"],
  ["sym", [..."(,:)", ...Object.keys(x), ...Object.keys(U)].sort((n, t) => t.length - n.length).map((n) => n.replace(/([()|/+*^?])/g, "\\$1")).join("|")],
  ["eof", "$"],
  ["err", ".*"]
].map(([n, t]) => `(?<${n}>${t})`).join("|")})\\s*`, "uy");
function V(n) {
  const t = [];
  for (n = n.trimStart(), E.lastIndex = 0; ; ) {
    const r = E.exec(n).groups;
    if (r.num != null)
      t.push(["num", Number(r.num)]);
    else if (r.nm != null)
      t.push(["nm", r.nm]);
    else if (r.sym != null)
      t.push(["sym", r.sym]);
    else {
      if (r.eof != null)
        return t;
      throw `无法解析："${r.err}"`;
    }
  }
}
function j(n, t) {
  return Object.prototype.hasOwnProperty.call(n, t);
}
function X(n) {
  let t = 0;
  function r() {
    return n[t] ?? ["eof", "EOF"];
  }
  function e() {
    const c = r();
    return t++, c;
  }
  function s(c, o) {
    return c[0] == "sym" && c[1] == o;
  }
  const i = a(0);
  if (r()[0] != "eof") throw `应结束而非 "${r()[1]}"`;
  return i;
  function a(c) {
    let o = e(), l;
    if (o[0] == "eof") throw "不应结束";
    if (o[0] != "sym")
      l = o[1];
    else if (o[1] == "(") {
      if (l = a(0), o = e(), !s(o, ")")) throw `应为右括号而非 "${o[1]}"`;
    } else {
      if (!j(U, o[1])) throw `"${o[1]}" 不是前缀运算`;
      const d = a(U[o[1]]);
      l = ["un", o[1], d];
    }
    let u = !1;
    for (; o = r(), o[0] != "eof"; ) {
      if (s(o, "(")) {
        if (typeof l != "string") throw `应为函数而非 ${$(l)}`;
        e();
        const h = [];
        if (s(r(), ")")) e();
        else for (; h.push(a(0)), o = e(), !s(o, ")"); )
          if (!s(o, ",")) throw `应为逗号或右括号而非 "${o[1]}"`;
        l = ["fn", l, h], u = !1;
        continue;
      }
      if (o[0] != "sym" || !j(x, o[1])) break;
      const [d, k] = x[o[1]];
      if (d < c) break;
      if (e(), o[1] == "?") {
        const h = a(0);
        if (o = e(), !s(o, ":")) throw `应为冒号而非 "${o[1]}"`;
        l = ["cond", l, h, a(k)], u = !1;
      } else {
        const h = a(k);
        ["=", "==", "<", ">", "<=", ">="].includes(o[1]) ? u && Array.isArray(l) && l[0] === "chain" ? l[2].push([o[1], h]) : (l = ["chain", l, [[o[1], h]]], u = !0) : (l = ["bin", o[1], l, h], u = !1);
      }
    }
    return l;
  }
}
function $(n) {
  return Array.isArray(n) ? n[0] == "fn" ? `${n[1]}(${n[2].map($).join(", ")})` : n[0] == "un" ? `(${n[1]}${$(n[2])})` : n[0] == "bin" ? `(${$(n[2])} ${n[1]} ${$(n[3])})` : n[0] == "cond" ? `(${$(n[1])} ? ${$(n[2])} : ${$(n[3])})` : `(${$(n[1])} ${n[2].map(([t, r]) => ` ${t} ${r}`).join("")}` : String(n);
}
const M = {
  NaN: NaN,
  Infinity: 1 / 0,
  E: Math.E,
  PI: Math.PI
}, w = {
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
function B(n) {
  function t(e, s, i) {
    if (s != i) throw `${$(e)} 应为 ${s} 而非 ${i}`;
  }
  t(n, "bool", r(n));
  function r(e) {
    if (!Array.isArray(e)) return "num";
    switch (e[0]) {
      case "fn":
        return e[2].forEach((s) => t(s, "num", r(s))), "num";
      case "un": {
        const s = e[1] == "!" ? "bool" : "num";
        return t(e[2], s, r(e[2])), s;
      }
      case "bin": {
        const s = ["&&", "||", "->"].includes(e[1]), i = r(e[2]);
        return s && t(e[2], "bool", i), t(e[3], i, r(e[3])), s ? "bool" : "num";
      }
      case "chain": {
        let s = e[1], i = r(s);
        for (const [a, c] of e[2]) {
          const o = r(c);
          a != "=" && a != "==" && t(s, i, "num"), t(c, i, o), s = c, i = o;
        }
        return "bool";
      }
      case "cond": {
        t(e[1], "bool", r(e[1]));
        const s = r(e[2]);
        return t(e[3], s, r(e[3])), s;
      }
    }
  }
}
function f(n, t) {
  if (typeof n == "number") return String(n);
  if (typeof n == "string")
    return j(M, n) ? String(M[n]) : (t[n] = 1, n);
  switch (n[0]) {
    case "fn": {
      if (!j(w, n[1])) throw `"${n[1]}" 不是函数`;
      if (w[n[1]] != -1 && w[n[1]] != n[2].length)
        throw `需要 ${w[n[1]]} 个参数，但给了 ${n[2].length} 个`;
      const r = n[2].map((e) => f(e, t)).join(", ");
      return `Math.${n[1]}(${r})`;
    }
    case "un":
      return `(${n[1]}${f(n[2], t)})`;
    case "bin": {
      const r = f(n[2], t), e = f(n[3], t);
      switch (n[1]) {
        case "^":
          return `(${r} ** ${e})`;
        case "->":
          return `(!${r} || ${e})`;
        default:
          return `(${r} ${n[1]} ${e})`;
      }
    }
    case "chain": {
      const r = (e, s, i) => {
        switch (e) {
          case "=":
            return `Object.is(${s}, ${i})`;
          case "==":
            return `(${s} === ${i})`;
          default:
            return `(${s} ${e} ${i})`;
        }
      };
      return n[2].length == 1 ? r(n[2][0][0], f(n[1], t), f(n[2][0][1], t)) : `(($0, ${n[2].map((e, s) => `$${s + 1}`).join(", ")}) => ${n[2].map(([e], s) => r(e, `$${s}`, `$${s + 1}`)).join(" && ")})(${f(n[1], t)}, ${n[2].map(([, e]) => f(e, t)).join(", ")})`;
    }
    case "cond":
      return `(${f(n[1], t)} ? ${f(n[2], t)} : ${f(n[3], t)})`;
  }
}
function R(n) {
  try {
    const t = {}, r = X(V(n));
    return B(r), { kind: "ok", expr: f(r, t), args: Object.keys(t) };
  } catch (t) {
    return { kind: "err", e: t };
  }
}
const D = { key: 0 }, T = { key: 1 }, W = ["disabled"], q = ["disabled"], J = { key: 2 }, K = { key: 3 }, G = /* @__PURE__ */ O({
  __name: "Main",
  setup(n) {
    const t = g("x + y = y + x"), r = g(R(t.value).args), e = S(() => R(t.value)), s = g(0), i = g(), a = g();
    A(o);
    function c() {
      if (e.value.kind == "err") return;
      s.value = 0, r.value = e.value.args, i.value = void 0, o();
      const l = new P();
      a.value = l, l.postMessage([e.value.args, e.value.expr]), l.onmessage = ({ data: u }) => {
        s.value = u.count, u.type == "fail" && (o(), i.value = u.arg);
      };
    }
    function o() {
      var l;
      (l = a.value) == null || l.terminate(), a.value = void 0;
    }
    return (l, u) => (p(), y(L, null, [
      u[4] || (u[4] = v(" 表达式：")),
      _(m("input", {
        type: "text",
        "onUpdate:modelValue": u[0] || (u[0] = (d) => t.value = d)
      }, null, 512), [
        [C, t.value]
      ]),
      u[5] || (u[5] = v("（结果为布尔值） ")),
      e.value.kind == "ok" ? (p(), y("div", D, [
        v(" 随机变量：" + b(e.value.args.join(", ")), 1),
        u[1] || (u[1] = m("br", null, null, -1)),
        u[2] || (u[2] = v(" 对应的 JS 代码：")),
        m("code", null, b(e.value.expr), 1)
      ])) : (p(), y("div", T, " 解析错误：" + b(e.value.e), 1)),
      u[6] || (u[6] = m("hr", null, null, -1)),
      m("button", {
        type: "button",
        onClick: c,
        disabled: e.value.kind == "err"
      }, "开始测试", 8, W),
      m("button", {
        type: "button",
        onClick: o,
        disabled: a.value == null
      }, "停止测试", 8, q),
      m("div", null, b(a.value ? "正" : "不") + "在运行，已执行 " + b(s.value) + " 次测试。 ", 1),
      i.value != null ? (p(), y("div", J, [
        u[3] || (u[3] = v(" 测试发现问题，参数： ")),
        m("ul", null, [
          (p(!0), y(L, null, F(i.value, (d, k) => (p(), y("li", null, [
            m("code", null, b(r.value[k]) + " = " + b(Object.is(-0, d) ? "-0" : String(d)), 1)
          ]))), 256))
        ])
      ])) : (p(), y("div", K, " 测试暂未发现问题 "))
    ], 64));
  }
});
export {
  G as default
};
