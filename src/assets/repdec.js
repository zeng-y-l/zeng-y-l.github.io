import { defineComponent as x, ref as p, createElementBlock as B, openBlock as y, createElementVNode as d, createTextVNode as g, withDirectives as v, vModelText as f } from "vue";
const I = /^[0-9]*$/, m = /^[0-9]+$/;
function V(u, n) {
  if (!m.test(u) || !m.test(n)) throw null;
  const o = BigInt(u), l = BigInt(n);
  if (l === 0n) throw null;
  const i = String(o / l);
  let s = o % l, a = "";
  const c = /* @__PURE__ */ new Map();
  for (; ; ) {
    const e = c.get(s);
    if (e != null) return {
      int: i,
      frac: a.substring(0, e),
      rep: a.substring(e)
    };
    c.set(s, a.length), s *= 10n, a += String(s / l), s %= l;
  }
}
function w(u, n, o) {
  if (!m.test(u) || !I.test(n) || !I.test(o)) throw null;
  const l = BigInt(u), i = BigInt(n), s = BigInt(o), a = 10n ** BigInt(n.length), c = s === 0n ? 1n : 10n ** BigInt(o.length) - 1n, e = c * a, t = e * l + c * i + s, r = U(t, e);
  return { num: String(t / r), den: String(e / r) };
}
function U(u, n) {
  for (; n !== 0n; ) [u, n] = [n, u % n];
  return u;
}
const M = { class: "eqn" }, $ = { class: "frac" }, k = { class: "dec" }, D = /* @__PURE__ */ x({
  __name: "Main",
  setup(u) {
    const n = p("355"), o = p("113"), l = p(""), i = p(""), s = p("");
    a();
    function a() {
      try {
        const e = V(n.value, o.value);
        l.value = e.int, i.value = e.frac, s.value = e.rep;
      } catch {
      }
    }
    function c() {
      try {
        const e = w(l.value, i.value, s.value);
        n.value = e.num, o.value = e.den;
      } catch {
      }
    }
    return (e, t) => (y(), B("div", M, [
      d("div", $, [
        v(d("input", {
          type: "text",
          "onUpdate:modelValue": t[0] || (t[0] = (r) => n.value = r),
          onInput: a
        }, null, 544), [
          [f, n.value]
        ]),
        t[5] || (t[5] = d("div", { class: "line" }, "   ", -1)),
        v(d("input", {
          type: "text",
          "onUpdate:modelValue": t[1] || (t[1] = (r) => o.value = r),
          onInput: a
        }, null, 544), [
          [f, o.value]
        ])
      ]),
      t[9] || (t[9] = g(" = ")),
      d("div", k, [
        v(d("input", {
          type: "text",
          "onUpdate:modelValue": t[2] || (t[2] = (r) => l.value = r),
          onInput: c
        }, null, 544), [
          [f, l.value]
        ]),
        t[6] || (t[6] = g(". ")),
        v(d("input", {
          type: "text",
          "onUpdate:modelValue": t[3] || (t[3] = (r) => i.value = r),
          onInput: c
        }, null, 544), [
          [f, i.value]
        ]),
        t[7] || (t[7] = g(" (")),
        v(d("input", {
          type: "text",
          class: "rep",
          "onUpdate:modelValue": t[4] || (t[4] = (r) => s.value = r),
          onInput: c
        }, null, 544), [
          [f, s.value]
        ]),
        t[8] || (t[8] = g(") "))
      ])
    ]));
  }
}), E = (u, n) => {
  const o = u.__vccOpts || u;
  for (const [l, i] of n)
    o[l] = i;
  return o;
}, T = /* @__PURE__ */ E(D, [["__scopeId", "data-v-252b0717"]]);
export {
  T as default
};
