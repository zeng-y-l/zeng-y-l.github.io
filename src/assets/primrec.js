import { defineComponent as Om, ref as Mm, useTemplateRef as Tm, onMounted as $m, onUnmounted as Pm, createElementBlock as Dm, openBlock as Rm, Fragment as Bm, createElementVNode as Yt, createTextVNode as Lm, unref as Ft } from "vue";
let ol = [], Qf = [];
(() => {
  let i = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((t) => t ? parseInt(t, 36) : 1);
  for (let t = 0, e = 0; t < i.length; t++)
    (t % 2 ? Qf : ol).push(e = e + i[t]);
})();
function Em(i) {
  if (i < 768) return !1;
  for (let t = 0, e = ol.length; ; ) {
    let n = t + e >> 1;
    if (i < ol[n]) e = n;
    else if (i >= Qf[n]) t = n + 1;
    else return !0;
    if (t == e) return !1;
  }
}
function Ah(i) {
  return i >= 127462 && i <= 127487;
}
const Oh = 8205;
function Im(i, t, e = !0, n = !0) {
  return (e ? Kf : _m)(i, t, n);
}
function Kf(i, t, e) {
  if (t == i.length) return t;
  t && jf(i.charCodeAt(t)) && Uf(i.charCodeAt(t - 1)) && t--;
  let n = Ro(i, t);
  for (t += Mh(n); t < i.length; ) {
    let s = Ro(i, t);
    if (n == Oh || s == Oh || e && Em(s))
      t += Mh(s), n = s;
    else if (Ah(s)) {
      let r = 0, o = t - 2;
      for (; o >= 0 && Ah(Ro(i, o)); )
        r++, o -= 2;
      if (r % 2 == 0) break;
      t += 2;
    } else
      break;
  }
  return t;
}
function _m(i, t, e) {
  for (; t > 0; ) {
    let n = Kf(i, t - 2, e);
    if (n < t) return n;
    t--;
  }
  return 0;
}
function Ro(i, t) {
  let e = i.charCodeAt(t);
  if (!Uf(e) || t + 1 == i.length) return e;
  let n = i.charCodeAt(t + 1);
  return jf(n) ? (e - 55296 << 10) + (n - 56320) + 65536 : e;
}
function jf(i) {
  return i >= 56320 && i < 57344;
}
function Uf(i) {
  return i >= 55296 && i < 56320;
}
function Mh(i) {
  return i < 65536 ? 1 : 2;
}
class J {
  /**
  Get the line description around the given position.
  */
  lineAt(t) {
    if (t < 0 || t > this.length)
      throw new RangeError(`Invalid position ${t} in document of length ${this.length}`);
    return this.lineInner(t, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(t) {
    if (t < 1 || t > this.lines)
      throw new RangeError(`Invalid line number ${t} in ${this.lines}-line document`);
    return this.lineInner(t, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(t, e, n) {
    [t, e] = ti(this, t, e);
    let s = [];
    return this.decompose(
      0,
      t,
      s,
      2
      /* Open.To */
    ), n.length && n.decompose(
      0,
      n.length,
      s,
      3
      /* Open.To */
    ), this.decompose(
      e,
      this.length,
      s,
      1
      /* Open.From */
    ), we.from(s, this.length - (e - t) + n.length);
  }
  /**
  Append another document to this one.
  */
  append(t) {
    return this.replace(this.length, this.length, t);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(t, e = this.length) {
    [t, e] = ti(this, t, e);
    let n = [];
    return this.decompose(t, e, n, 0), we.from(n, e - t);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(t) {
    if (t == this)
      return !0;
    if (t.length != this.length || t.lines != this.lines)
      return !1;
    let e = this.scanIdentical(t, 1), n = this.length - this.scanIdentical(t, -1), s = new Pi(this), r = new Pi(t);
    for (let o = e, l = e; ; ) {
      if (s.next(o), r.next(o), o = 0, s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value)
        return !1;
      if (l += s.value.length, s.done || l >= n)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(t = 1) {
    return new Pi(this, t);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(t, e = this.length) {
    return new Jf(this, t, e);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(t, e) {
    let n;
    if (t == null)
      n = this.iter();
    else {
      e == null && (e = this.lines + 1);
      let s = this.line(t).from;
      n = this.iterRange(s, Math.max(s, e == this.lines + 1 ? this.length : e <= 1 ? 0 : this.line(e - 1).to));
    }
    return new Gf(n);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let t = [];
    return this.flatten(t), t;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(t) {
    if (t.length == 0)
      throw new RangeError("A document must have at least one line");
    return t.length == 1 && !t[0] ? J.empty : t.length <= 32 ? new at(t) : we.from(at.split(t, []));
  }
}
class at extends J {
  constructor(t, e = Nm(t)) {
    super(), this.text = t, this.length = e;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(t, e, n, s) {
    for (let r = 0; ; r++) {
      let o = this.text[r], l = s + o.length;
      if ((e ? n : l) >= t)
        return new Fm(s, l, n, o);
      s = l + 1, n++;
    }
  }
  decompose(t, e, n, s) {
    let r = t <= 0 && e >= this.length ? this : new at(Th(this.text, t, e), Math.min(e, this.length) - Math.max(0, t));
    if (s & 1) {
      let o = n.pop(), l = Xs(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32)
        n.push(new at(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        n.push(new at(l.slice(0, a)), new at(l.slice(a)));
      }
    } else
      n.push(r);
  }
  replace(t, e, n) {
    if (!(n instanceof at))
      return super.replace(t, e, n);
    [t, e] = ti(this, t, e);
    let s = Xs(this.text, Xs(n.text, Th(this.text, 0, t)), e), r = this.length + n.length - (e - t);
    return s.length <= 32 ? new at(s, r) : we.from(at.split(s, []), r);
  }
  sliceString(t, e = this.length, n = `
`) {
    [t, e] = ti(this, t, e);
    let s = "";
    for (let r = 0, o = 0; r <= e && o < this.text.length; o++) {
      let l = this.text[o], a = r + l.length;
      r > t && o && (s += n), t < a && e > r && (s += l.slice(Math.max(0, t - r), e - r)), r = a + 1;
    }
    return s;
  }
  flatten(t) {
    for (let e of this.text)
      t.push(e);
  }
  scanIdentical() {
    return 0;
  }
  static split(t, e) {
    let n = [], s = -1;
    for (let r of t)
      n.push(r), s += r.length + 1, n.length == 32 && (e.push(new at(n, s)), n = [], s = -1);
    return s > -1 && e.push(new at(n, s)), e;
  }
}
class we extends J {
  constructor(t, e) {
    super(), this.children = t, this.length = e, this.lines = 0;
    for (let n of t)
      this.lines += n.lines;
  }
  lineInner(t, e, n, s) {
    for (let r = 0; ; r++) {
      let o = this.children[r], l = s + o.length, a = n + o.lines - 1;
      if ((e ? a : l) >= t)
        return o.lineInner(t, e, n, s);
      s = l + 1, n = a + 1;
    }
  }
  decompose(t, e, n, s) {
    for (let r = 0, o = 0; o <= e && r < this.children.length; r++) {
      let l = this.children[r], a = o + l.length;
      if (t <= a && e >= o) {
        let h = s & ((o <= t ? 1 : 0) | (a >= e ? 2 : 0));
        o >= t && a <= e && !h ? n.push(l) : l.decompose(t - o, e - o, n, h);
      }
      o = a + 1;
    }
  }
  replace(t, e, n) {
    if ([t, e] = ti(this, t, e), n.lines < this.lines)
      for (let s = 0, r = 0; s < this.children.length; s++) {
        let o = this.children[s], l = r + o.length;
        if (t >= r && e <= l) {
          let a = o.replace(t - r, e - r, n), h = this.lines - o.lines + a.lines;
          if (a.lines < h >> 4 && a.lines > h >> 6) {
            let c = this.children.slice();
            return c[s] = a, new we(c, this.length - (e - t) + n.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(t, e, n);
  }
  sliceString(t, e = this.length, n = `
`) {
    [t, e] = ti(this, t, e);
    let s = "";
    for (let r = 0, o = 0; r < this.children.length && o <= e; r++) {
      let l = this.children[r], a = o + l.length;
      o > t && r && (s += n), t < a && e > o && (s += l.sliceString(t - o, e - o, n)), o = a + 1;
    }
    return s;
  }
  flatten(t) {
    for (let e of this.children)
      e.flatten(t);
  }
  scanIdentical(t, e) {
    if (!(t instanceof we))
      return 0;
    let n = 0, [s, r, o, l] = e > 0 ? [0, 0, this.children.length, t.children.length] : [this.children.length - 1, t.children.length - 1, -1, -1];
    for (; ; s += e, r += e) {
      if (s == o || r == l)
        return n;
      let a = this.children[s], h = t.children[r];
      if (a != h)
        return n + a.scanIdentical(h, e);
      n += a.length + 1;
    }
  }
  static from(t, e = t.reduce((n, s) => n + s.length + 1, -1)) {
    let n = 0;
    for (let d of t)
      n += d.lines;
    if (n < 32) {
      let d = [];
      for (let p of t)
        p.flatten(d);
      return new at(d, e);
    }
    let s = Math.max(
      32,
      n >> 5
      /* Tree.BranchShift */
    ), r = s << 1, o = s >> 1, l = [], a = 0, h = -1, c = [];
    function f(d) {
      let p;
      if (d.lines > r && d instanceof we)
        for (let m of d.children)
          f(m);
      else d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof at && a && (p = c[c.length - 1]) instanceof at && d.lines + p.lines <= 32 ? (a += d.lines, h += d.length + 1, c[c.length - 1] = new at(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > s && u(), a += d.lines, h += d.length + 1, c.push(d));
    }
    function u() {
      a != 0 && (l.push(c.length == 1 ? c[0] : we.from(c, h)), h = -1, a = c.length = 0);
    }
    for (let d of t)
      f(d);
    return u(), l.length == 1 ? l[0] : new we(l, e);
  }
}
J.empty = /* @__PURE__ */ new at([""], 0);
function Nm(i) {
  let t = -1;
  for (let e of i)
    t += e.length + 1;
  return t;
}
function Xs(i, t, e = 0, n = 1e9) {
  for (let s = 0, r = 0, o = !0; r < i.length && s <= n; r++) {
    let l = i[r], a = s + l.length;
    a >= e && (a > n && (l = l.slice(0, n - s)), s < e && (l = l.slice(e - s)), o ? (t[t.length - 1] += l, o = !1) : t.push(l)), s = a + 1;
  }
  return t;
}
function Th(i, t, e) {
  return Xs(i, [""], t, e);
}
class Pi {
  constructor(t, e = 1) {
    this.dir = e, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [t], this.offsets = [e > 0 ? 1 : (t instanceof at ? t.text.length : t.children.length) << 1];
  }
  nextInner(t, e) {
    for (this.done = this.lineBreak = !1; ; ) {
      let n = this.nodes.length - 1, s = this.nodes[n], r = this.offsets[n], o = r >> 1, l = s instanceof at ? s.text.length : s.children.length;
      if (o == (e > 0 ? l : 0)) {
        if (n == 0)
          return this.done = !0, this.value = "", this;
        e > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (e > 0 ? 0 : 1)) {
        if (this.offsets[n] += e, t == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        t--;
      } else if (s instanceof at) {
        let a = s.text[o + (e < 0 ? -1 : 0)];
        if (this.offsets[n] += e, a.length > Math.max(0, t))
          return this.value = t == 0 ? a : e > 0 ? a.slice(t) : a.slice(0, a.length - t), this;
        t -= a.length;
      } else {
        let a = s.children[o + (e < 0 ? -1 : 0)];
        t > a.length ? (t -= a.length, this.offsets[n] += e) : (e < 0 && this.offsets[n]--, this.nodes.push(a), this.offsets.push(e > 0 ? 1 : (a instanceof at ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(t = 0) {
    return t < 0 && (this.nextInner(-t, -this.dir), t = this.value.length), this.nextInner(t, this.dir);
  }
}
class Jf {
  constructor(t, e, n) {
    this.value = "", this.done = !1, this.cursor = new Pi(t, e > n ? -1 : 1), this.pos = e > n ? t.length : 0, this.from = Math.min(e, n), this.to = Math.max(e, n);
  }
  nextInner(t, e) {
    if (e < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    t += Math.max(0, e < 0 ? this.pos - this.to : this.from - this.pos);
    let n = e < 0 ? this.pos - this.from : this.to - this.pos;
    t > n && (t = n), n -= t;
    let { value: s } = this.cursor.next(t);
    return this.pos += (s.length + t) * e, this.value = s.length <= n ? s : e < 0 ? s.slice(s.length - n) : s.slice(0, n), this.done = !this.value, this;
  }
  next(t = 0) {
    return t < 0 ? t = Math.max(t, this.from - this.pos) : t > 0 && (t = Math.min(t, this.to - this.pos)), this.nextInner(t, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class Gf {
  constructor(t) {
    this.inner = t, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(t = 0) {
    let { done: e, lineBreak: n, value: s } = this.inner.next(t);
    return e && this.afterBreak ? (this.value = "", this.afterBreak = !1) : e ? (this.done = !0, this.value = "") : n ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = s, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (J.prototype[Symbol.iterator] = function() {
  return this.iter();
}, Pi.prototype[Symbol.iterator] = Jf.prototype[Symbol.iterator] = Gf.prototype[Symbol.iterator] = function() {
  return this;
});
class Fm {
  /**
  @internal
  */
  constructor(t, e, n, s) {
    this.from = t, this.to = e, this.number = n, this.text = s;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
function ti(i, t, e) {
  return t = Math.max(0, Math.min(i.length, t)), [t, Math.max(t, Math.min(i.length, e))];
}
function wt(i, t, e = !0, n = !0) {
  return Im(i, t, e, n);
}
function Vm(i) {
  return i >= 56320 && i < 57344;
}
function Wm(i) {
  return i >= 55296 && i < 56320;
}
function Vt(i, t) {
  let e = i.charCodeAt(t);
  if (!Wm(e) || t + 1 == i.length)
    return e;
  let n = i.charCodeAt(t + 1);
  return Vm(n) ? (e - 55296 << 10) + (n - 56320) + 65536 : e;
}
function ua(i) {
  return i <= 65535 ? String.fromCharCode(i) : (i -= 65536, String.fromCharCode((i >> 10) + 55296, (i & 1023) + 56320));
}
function ke(i) {
  return i < 65536 ? 1 : 2;
}
const ll = /\r\n?|\n/;
var Rt = /* @__PURE__ */ function(i) {
  return i[i.Simple = 0] = "Simple", i[i.TrackDel = 1] = "TrackDel", i[i.TrackBefore = 2] = "TrackBefore", i[i.TrackAfter = 3] = "TrackAfter", i;
}(Rt || (Rt = {}));
class Pe {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(t) {
    this.sections = t;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let t = 0;
    for (let e = 0; e < this.sections.length; e += 2)
      t += this.sections[e];
    return t;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let t = 0;
    for (let e = 0; e < this.sections.length; e += 2) {
      let n = this.sections[e + 1];
      t += n < 0 ? this.sections[e] : n;
    }
    return t;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(t) {
    for (let e = 0, n = 0, s = 0; e < this.sections.length; ) {
      let r = this.sections[e++], o = this.sections[e++];
      o < 0 ? (t(n, s, r), s += r) : s += o, n += r;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(t, e = !1) {
    al(this, t, e);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let t = [];
    for (let e = 0; e < this.sections.length; ) {
      let n = this.sections[e++], s = this.sections[e++];
      s < 0 ? t.push(n, s) : t.push(s, n);
    }
    return new Pe(t);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(t) {
    return this.empty ? t : t.empty ? this : Xf(this, t);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(t, e = !1) {
    return t.empty ? this : hl(this, t, e);
  }
  mapPos(t, e = -1, n = Rt.Simple) {
    let s = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], h = s + l;
      if (a < 0) {
        if (h > t)
          return r + (t - s);
        r += l;
      } else {
        if (n != Rt.Simple && h >= t && (n == Rt.TrackDel && s < t && h > t || n == Rt.TrackBefore && s < t || n == Rt.TrackAfter && h > t))
          return null;
        if (h > t || h == t && e < 0 && !l)
          return t == s || e < 0 ? r : r + a;
        r += a;
      }
      s = h;
    }
    if (t > s)
      throw new RangeError(`Position ${t} is out of range for changeset of length ${s}`);
    return r;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(t, e = t) {
    for (let n = 0, s = 0; n < this.sections.length && s <= e; ) {
      let r = this.sections[n++], o = this.sections[n++], l = s + r;
      if (o >= 0 && s <= e && l >= t)
        return s < t && l > e ? "cover" : !0;
      s = l;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let t = "";
    for (let e = 0; e < this.sections.length; ) {
      let n = this.sections[e++], s = this.sections[e++];
      t += (t ? " " : "") + n + (s >= 0 ? ":" + s : "");
    }
    return t;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(t) {
    if (!Array.isArray(t) || t.length % 2 || t.some((e) => typeof e != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new Pe(t);
  }
  /**
  @internal
  */
  static create(t) {
    return new Pe(t);
  }
}
class mt extends Pe {
  constructor(t, e) {
    super(t), this.inserted = e;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(t) {
    if (this.length != t.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return al(this, (e, n, s, r, o) => t = t.replace(s, s + (n - e), o), !1), t;
  }
  mapDesc(t, e = !1) {
    return hl(this, t, e, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(t) {
    let e = this.sections.slice(), n = [];
    for (let s = 0, r = 0; s < e.length; s += 2) {
      let o = e[s], l = e[s + 1];
      if (l >= 0) {
        e[s] = l, e[s + 1] = o;
        let a = s >> 1;
        for (; n.length < a; )
          n.push(J.empty);
        n.push(o ? t.slice(r, r + o) : J.empty);
      }
      r += o;
    }
    return new mt(e, n);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(t) {
    return this.empty ? t : t.empty ? this : Xf(this, t, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(t, e = !1) {
    return t.empty ? this : hl(this, t, e, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(t, e = !1) {
    al(this, t, e);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return Pe.create(this.sections);
  }
  /**
  @internal
  */
  filter(t) {
    let e = [], n = [], s = [], r = new Wi(this);
    t: for (let o = 0, l = 0; ; ) {
      let a = o == t.length ? 1e9 : t[o++];
      for (; l < a || l == a && r.len == 0; ) {
        if (r.done)
          break t;
        let c = Math.min(r.len, a - l);
        Ot(s, c, -1);
        let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        Ot(e, c, f), f > 0 && Ze(n, e, r.text), r.forward(c), l += c;
      }
      let h = t[o++];
      for (; l < h; ) {
        if (r.done)
          break t;
        let c = Math.min(r.len, h - l);
        Ot(e, c, -1), Ot(s, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(c), l += c;
      }
    }
    return {
      changes: new mt(e, n),
      filtered: Pe.create(s)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let t = [];
    for (let e = 0; e < this.sections.length; e += 2) {
      let n = this.sections[e], s = this.sections[e + 1];
      s < 0 ? t.push(n) : s == 0 ? t.push([n]) : t.push([n].concat(this.inserted[e >> 1].toJSON()));
    }
    return t;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(t, e, n) {
    let s = [], r = [], o = 0, l = null;
    function a(c = !1) {
      if (!c && !s.length)
        return;
      o < e && Ot(s, e - o, -1);
      let f = new mt(s, r);
      l = l ? l.compose(f.map(l)) : f, s = [], r = [], o = 0;
    }
    function h(c) {
      if (Array.isArray(c))
        for (let f of c)
          h(f);
      else if (c instanceof mt) {
        if (c.length != e)
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${e})`);
        a(), l = l ? l.compose(c.map(l)) : c;
      } else {
        let { from: f, to: u = f, insert: d } = c;
        if (f > u || f < 0 || u > e)
          throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${e})`);
        let p = d ? typeof d == "string" ? J.of(d.split(n || ll)) : d : J.empty, m = p.length;
        if (f == u && m == 0)
          return;
        f < o && a(), f > o && Ot(s, f - o, -1), Ot(s, u - f, m), Ze(r, s, p), o = u;
      }
    }
    return h(t), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(t) {
    return new mt(t ? [t, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(t) {
    if (!Array.isArray(t))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let e = [], n = [];
    for (let s = 0; s < t.length; s++) {
      let r = t[s];
      if (typeof r == "number")
        e.push(r, -1);
      else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          e.push(r[0], 0);
        else {
          for (; n.length < s; )
            n.push(J.empty);
          n[s] = J.of(r.slice(1)), e.push(r[0], n[s].length);
        }
      }
    }
    return new mt(e, n);
  }
  /**
  @internal
  */
  static createSet(t, e) {
    return new mt(t, e);
  }
}
function Ot(i, t, e, n = !1) {
  if (t == 0 && e <= 0)
    return;
  let s = i.length - 2;
  s >= 0 && e <= 0 && e == i[s + 1] ? i[s] += t : s >= 0 && t == 0 && i[s] == 0 ? i[s + 1] += e : n ? (i[s] += t, i[s + 1] += e) : i.push(t, e);
}
function Ze(i, t, e) {
  if (e.length == 0)
    return;
  let n = t.length - 2 >> 1;
  if (n < i.length)
    i[i.length - 1] = i[i.length - 1].append(e);
  else {
    for (; i.length < n; )
      i.push(J.empty);
    i.push(e);
  }
}
function al(i, t, e) {
  let n = i.inserted;
  for (let s = 0, r = 0, o = 0; o < i.sections.length; ) {
    let l = i.sections[o++], a = i.sections[o++];
    if (a < 0)
      s += l, r += l;
    else {
      let h = s, c = r, f = J.empty;
      for (; h += l, c += a, a && n && (f = f.append(n[o - 2 >> 1])), !(e || o == i.sections.length || i.sections[o + 1] < 0); )
        l = i.sections[o++], a = i.sections[o++];
      t(s, h, r, c, f), s = h, r = c;
    }
  }
}
function hl(i, t, e, n = !1) {
  let s = [], r = n ? [] : null, o = new Wi(i), l = new Wi(t);
  for (let a = -1; ; ) {
    if (o.done && l.len || l.done && o.len)
      throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      Ot(s, h, -1), o.forward(h), l.forward(h);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !e))) {
      let h = l.len;
      for (Ot(s, l.ins, -1); h; ) {
        let c = Math.min(o.len, h);
        o.ins >= 0 && a < o.i && o.len <= c && (Ot(s, 0, o.ins), r && Ze(r, s, o.text), a = o.i), o.forward(c), h -= c;
      }
      l.next();
    } else if (o.ins >= 0) {
      let h = 0, c = o.len;
      for (; c; )
        if (l.ins == -1) {
          let f = Math.min(c, l.len);
          h += f, c -= f, l.forward(f);
        } else if (l.ins == 0 && l.len < c)
          c -= l.len, l.next();
        else
          break;
      Ot(s, h, a < o.i ? o.ins : 0), r && a < o.i && Ze(r, s, o.text), a = o.i, o.forward(o.len - c);
    } else {
      if (o.done && l.done)
        return r ? mt.createSet(s, r) : Pe.create(s);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Xf(i, t, e = !1) {
  let n = [], s = e ? [] : null, r = new Wi(i), o = new Wi(t);
  for (let l = !1; ; ) {
    if (r.done && o.done)
      return s ? mt.createSet(n, s) : Pe.create(n);
    if (r.ins == 0)
      Ot(n, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done)
      Ot(n, 0, o.ins, l), s && Ze(s, n, o.text), o.next();
    else {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len), h = n.length;
        if (r.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          Ot(n, a, c, l), s && c && Ze(s, n, o.text);
        } else o.ins == -1 ? (Ot(n, r.off ? 0 : r.len, a, l), s && Ze(s, n, r.textBit(a))) : (Ot(n, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), s && !o.off && Ze(s, n, o.text));
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || n.length > h), r.forward2(a), o.forward(a);
      }
    }
  }
}
class Wi {
  constructor(t) {
    this.set = t, this.i = 0, this.next();
  }
  next() {
    let { sections: t } = this.set;
    this.i < t.length ? (this.len = t[this.i++], this.ins = t[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: t } = this.set, e = this.i - 2 >> 1;
    return e >= t.length ? J.empty : t[e];
  }
  textBit(t) {
    let { inserted: e } = this.set, n = this.i - 2 >> 1;
    return n >= e.length && !t ? J.empty : e[n].slice(this.off, t == null ? void 0 : this.off + t);
  }
  forward(t) {
    t == this.len ? this.next() : (this.len -= t, this.off += t);
  }
  forward2(t) {
    this.ins == -1 ? this.forward(t) : t == this.ins ? this.next() : (this.ins -= t, this.off += t);
  }
}
class Cn {
  constructor(t, e, n) {
    this.from = t, this.to = e, this.flags = n;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let t = this.flags & 7;
    return t == 7 ? null : t;
  }
  /**
  The goal column (stored vertical offset) associated with a
  cursor. This is used to preserve the vertical position when
  [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
  lines of different length.
  */
  get goalColumn() {
    let t = this.flags >> 6;
    return t == 16777215 ? void 0 : t;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(t, e = -1) {
    let n, s;
    return this.empty ? n = s = t.mapPos(this.from, e) : (n = t.mapPos(this.from, 1), s = t.mapPos(this.to, -1)), n == this.from && s == this.to ? this : new Cn(n, s, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(t, e = t) {
    if (t <= this.anchor && e >= this.anchor)
      return A.range(t, e);
    let n = Math.abs(t - this.anchor) > Math.abs(e - this.anchor) ? t : e;
    return A.range(this.anchor, n);
  }
  /**
  Compare this range to another range.
  */
  eq(t, e = !1) {
    return this.anchor == t.anchor && this.head == t.head && (!e || !this.empty || this.assoc == t.assoc);
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(t) {
    if (!t || typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return A.range(t.anchor, t.head);
  }
  /**
  @internal
  */
  static create(t, e, n) {
    return new Cn(t, e, n);
  }
}
class A {
  constructor(t, e) {
    this.ranges = t, this.mainIndex = e;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(t, e = -1) {
    return t.empty ? this : A.create(this.ranges.map((n) => n.map(t, e)), this.mainIndex);
  }
  /**
  Compare this selection to another selection. By default, ranges
  are compared only by position. When `includeAssoc` is true,
  cursor ranges must also have the same
  [`assoc`](https://codemirror.net/6/docs/ref/#state.SelectionRange.assoc) value.
  */
  eq(t, e = !1) {
    if (this.ranges.length != t.ranges.length || this.mainIndex != t.mainIndex)
      return !1;
    for (let n = 0; n < this.ranges.length; n++)
      if (!this.ranges[n].eq(t.ranges[n], e))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new A([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(t, e = !0) {
    return A.create([t].concat(this.ranges), e ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(t, e = this.mainIndex) {
    let n = this.ranges.slice();
    return n[e] = t, A.create(n, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((t) => t.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(t) {
    if (!t || !Array.isArray(t.ranges) || typeof t.main != "number" || t.main >= t.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new A(t.ranges.map((e) => Cn.fromJSON(e)), t.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(t, e = t) {
    return new A([A.range(t, e)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(t, e = 0) {
    if (t.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let n = 0, s = 0; s < t.length; s++) {
      let r = t[s];
      if (r.empty ? r.from <= n : r.from < n)
        return A.normalized(t.slice(), e);
      n = r.to;
    }
    return new A(t, e);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(t, e = 0, n, s) {
    return Cn.create(t, t, (e == 0 ? 0 : e < 0 ? 8 : 16) | (n == null ? 7 : Math.min(6, n)) | (s ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(t, e, n, s) {
    let r = (n ?? 16777215) << 6 | (s == null ? 7 : Math.min(6, s));
    return e < t ? Cn.create(e, t, 48 | r) : Cn.create(t, e, (e > t ? 8 : 0) | r);
  }
  /**
  @internal
  */
  static normalized(t, e = 0) {
    let n = t[e];
    t.sort((s, r) => s.from - r.from), e = t.indexOf(n);
    for (let s = 1; s < t.length; s++) {
      let r = t[s], o = t[s - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from, a = Math.max(r.to, o.to);
        s <= e && e--, t.splice(--s, 2, r.anchor > r.head ? A.range(a, l) : A.range(l, a));
      }
    }
    return new A(t, e);
  }
}
function Yf(i, t) {
  for (let e of i.ranges)
    if (e.to > t)
      throw new RangeError("Selection points outside of document");
}
let da = 0;
class D {
  constructor(t, e, n, s, r) {
    this.combine = t, this.compareInput = e, this.compare = n, this.isStatic = s, this.id = da++, this.default = t([]), this.extensions = typeof r == "function" ? r(this) : r;
  }
  /**
  Returns a facet reader for this facet, which can be used to
  [read](https://codemirror.net/6/docs/ref/#state.EditorState.facet) it but not to define values for it.
  */
  get reader() {
    return this;
  }
  /**
  Define a new facet.
  */
  static define(t = {}) {
    return new D(t.combine || ((e) => e), t.compareInput || ((e, n) => e === n), t.compare || (t.combine ? (e, n) => e === n : pa), !!t.static, t.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(t) {
    return new Ys([], this, 0, t);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(t, e) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Ys(t, this, 1, e);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(t, e) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Ys(t, this, 2, e);
  }
  from(t, e) {
    return e || (e = (n) => n), this.compute([t], (n) => e(n.field(t)));
  }
}
function pa(i, t) {
  return i == t || i.length == t.length && i.every((e, n) => e === t[n]);
}
class Ys {
  constructor(t, e, n, s) {
    this.dependencies = t, this.facet = e, this.type = n, this.value = s, this.id = da++;
  }
  dynamicSlot(t) {
    var e;
    let n = this.value, s = this.facet.compareInput, r = this.id, o = t[r] >> 1, l = this.type == 2, a = !1, h = !1, c = [];
    for (let f of this.dependencies)
      f == "doc" ? a = !0 : f == "selection" ? h = !0 : (((e = t[f.id]) !== null && e !== void 0 ? e : 1) & 1) == 0 && c.push(t[f.id]);
    return {
      create(f) {
        return f.values[o] = n(f), 1;
      },
      update(f, u) {
        if (a && u.docChanged || h && (u.docChanged || u.selection) || cl(f, c)) {
          let d = n(f);
          if (l ? !$h(d, f.values[o], s) : !s(d, f.values[o]))
            return f.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (f, u) => {
        let d, p = u.config.address[r];
        if (p != null) {
          let m = ur(u, p);
          if (this.dependencies.every((g) => g instanceof D ? u.facet(g) === f.facet(g) : g instanceof kt ? u.field(g, !1) == f.field(g, !1) : !0) || (l ? $h(d = n(f), m, s) : s(d = n(f), m)))
            return f.values[o] = m, 0;
        } else
          d = n(f);
        return f.values[o] = d, 1;
      }
    };
  }
}
function $h(i, t, e) {
  if (i.length != t.length)
    return !1;
  for (let n = 0; n < i.length; n++)
    if (!e(i[n], t[n]))
      return !1;
  return !0;
}
function cl(i, t) {
  let e = !1;
  for (let n of t)
    Di(i, n) & 1 && (e = !0);
  return e;
}
function Hm(i, t, e) {
  let n = e.map((a) => i[a.id]), s = e.map((a) => a.type), r = n.filter((a) => !(a & 1)), o = i[t.id] >> 1;
  function l(a) {
    let h = [];
    for (let c = 0; c < n.length; c++) {
      let f = ur(a, n[c]);
      if (s[c] == 2)
        for (let u of f)
          h.push(u);
      else
        h.push(f);
    }
    return t.combine(h);
  }
  return {
    create(a) {
      for (let h of n)
        Di(a, h);
      return a.values[o] = l(a), 1;
    },
    update(a, h) {
      if (!cl(a, r))
        return 0;
      let c = l(a);
      return t.compare(c, a.values[o]) ? 0 : (a.values[o] = c, 1);
    },
    reconfigure(a, h) {
      let c = cl(a, n), f = h.config.facets[t.id], u = h.facet(t);
      if (f && !c && pa(e, f))
        return a.values[o] = u, 0;
      let d = l(a);
      return t.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1);
    }
  };
}
const As = /* @__PURE__ */ D.define({ static: !0 });
class kt {
  constructor(t, e, n, s, r) {
    this.id = t, this.createF = e, this.updateF = n, this.compareF = s, this.spec = r, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(t) {
    let e = new kt(da++, t.create, t.update, t.compare || ((n, s) => n === s), t);
    return t.provide && (e.provides = t.provide(e)), e;
  }
  create(t) {
    let e = t.facet(As).find((n) => n.field == this);
    return ((e == null ? void 0 : e.create) || this.createF)(t);
  }
  /**
  @internal
  */
  slot(t) {
    let e = t[this.id] >> 1;
    return {
      create: (n) => (n.values[e] = this.create(n), 1),
      update: (n, s) => {
        let r = n.values[e], o = this.updateF(r, s);
        return this.compareF(r, o) ? 0 : (n.values[e] = o, 1);
      },
      reconfigure: (n, s) => {
        let r = n.facet(As), o = s.facet(As), l;
        return (l = r.find((a) => a.field == this)) && l != o.find((a) => a.field == this) ? (n.values[e] = l.create(n), 1) : s.config.address[this.id] != null ? (n.values[e] = s.field(this), 0) : (n.values[e] = this.create(n), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(t) {
    return [this, As.of({ field: this, create: t })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const bn = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function gi(i) {
  return (t) => new Zf(t, i);
}
const En = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ gi(bn.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ gi(bn.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ gi(bn.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ gi(bn.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ gi(bn.lowest)
};
class Zf {
  constructor(t, e) {
    this.inner = t, this.prec = e;
  }
}
class Xr {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(t) {
    return new fl(this, t);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(t) {
    return Xr.reconfigure.of({ compartment: this, extension: t });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(t) {
    return t.config.compartments.get(this);
  }
}
class fl {
  constructor(t, e) {
    this.compartment = t, this.inner = e;
  }
}
class fr {
  constructor(t, e, n, s, r, o) {
    for (this.base = t, this.compartments = e, this.dynamicSlots = n, this.address = s, this.staticValues = r, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < n.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(t) {
    let e = this.address[t.id];
    return e == null ? t.default : this.staticValues[e >> 1];
  }
  static resolve(t, e, n) {
    let s = [], r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let u of zm(t, e, o))
      u instanceof kt ? s.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = /* @__PURE__ */ Object.create(null), a = [], h = [];
    for (let u of s)
      l[u.id] = h.length << 1, h.push((d) => u.slot(d));
    let c = n == null ? void 0 : n.config.facets;
    for (let u in r) {
      let d = r[u], p = d[0].facet, m = c && c[u] || [];
      if (d.every(
        (g) => g.type == 0
        /* Provider.Static */
      ))
        if (l[p.id] = a.length << 1 | 1, pa(m, d))
          a.push(n.facet(p));
        else {
          let g = p.combine(d.map((y) => y.value));
          a.push(n && p.compare(g, n.facet(p)) ? n.facet(p) : g);
        }
      else {
        for (let g of d)
          g.type == 0 ? (l[g.id] = a.length << 1 | 1, a.push(g.value)) : (l[g.id] = h.length << 1, h.push((y) => g.dynamicSlot(y)));
        l[p.id] = h.length << 1, h.push((g) => Hm(g, p, d));
      }
    }
    let f = h.map((u) => u(l));
    return new fr(t, o, f, l, a, r);
  }
}
function zm(i, t, e) {
  let n = [[], [], [], [], []], s = /* @__PURE__ */ new Map();
  function r(o, l) {
    let a = s.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let h = n[a].indexOf(o);
      h > -1 && n[a].splice(h, 1), o instanceof fl && e.delete(o.compartment);
    }
    if (s.set(o, l), Array.isArray(o))
      for (let h of o)
        r(h, l);
    else if (o instanceof fl) {
      if (e.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = t.get(o.compartment) || o.inner;
      e.set(o.compartment, h), r(h, l);
    } else if (o instanceof Zf)
      r(o.inner, o.prec);
    else if (o instanceof kt)
      n[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof Ys)
      n[l].push(o), o.facet.extensions && r(o.facet.extensions, bn.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(h, l);
    }
  }
  return r(i, bn.default), n.reduce((o, l) => o.concat(l));
}
function Di(i, t) {
  if (t & 1)
    return 2;
  let e = t >> 1, n = i.status[e];
  if (n == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (n & 2)
    return n;
  i.status[e] = 4;
  let s = i.computeSlot(i, i.config.dynamicSlots[e]);
  return i.status[e] = 2 | s;
}
function ur(i, t) {
  return t & 1 ? i.config.staticValues[t >> 1] : i.values[t >> 1];
}
const tu = /* @__PURE__ */ D.define(), ul = /* @__PURE__ */ D.define({
  combine: (i) => i.some((t) => t),
  static: !0
}), eu = /* @__PURE__ */ D.define({
  combine: (i) => i.length ? i[0] : void 0,
  static: !0
}), nu = /* @__PURE__ */ D.define(), iu = /* @__PURE__ */ D.define(), su = /* @__PURE__ */ D.define(), ru = /* @__PURE__ */ D.define({
  combine: (i) => i.length ? i[0] : !1
});
class Qe {
  /**
  @internal
  */
  constructor(t, e) {
    this.type = t, this.value = e;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new qm();
  }
}
class qm {
  /**
  Create an instance of this annotation.
  */
  of(t) {
    return new Qe(this, t);
  }
}
class Qm {
  /**
  @internal
  */
  constructor(t) {
    this.map = t;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(t) {
    return new H(this, t);
  }
}
class H {
  /**
  @internal
  */
  constructor(t, e) {
    this.type = t, this.value = e;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(t) {
    let e = this.type.map(this.value, t);
    return e === void 0 ? void 0 : e == this.value ? this : new H(this.type, e);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(t) {
    return this.type == t;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(t = {}) {
    return new Qm(t.map || ((e) => e));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(t, e) {
    if (!t.length)
      return t;
    let n = [];
    for (let s of t) {
      let r = s.map(e);
      r && n.push(r);
    }
    return n;
  }
}
H.reconfigure = /* @__PURE__ */ H.define();
H.appendConfig = /* @__PURE__ */ H.define();
class yt {
  constructor(t, e, n, s, r, o) {
    this.startState = t, this.changes = e, this.selection = n, this.effects = s, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, n && Yf(n, e.newLength), r.some((l) => l.type == yt.time) || (this.annotations = r.concat(yt.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(t, e, n, s, r, o) {
    return new yt(t, e, n, s, r, o);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(t) {
    for (let e of this.annotations)
      if (e.type == t)
        return e.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(t) {
    let e = this.annotation(yt.userEvent);
    return !!(e && (e == t || e.length > t.length && e.slice(0, t.length) == t && e[t.length] == "."));
  }
}
yt.time = /* @__PURE__ */ Qe.define();
yt.userEvent = /* @__PURE__ */ Qe.define();
yt.addToHistory = /* @__PURE__ */ Qe.define();
yt.remote = /* @__PURE__ */ Qe.define();
function Km(i, t) {
  let e = [];
  for (let n = 0, s = 0; ; ) {
    let r, o;
    if (n < i.length && (s == t.length || t[s] >= i[n]))
      r = i[n++], o = i[n++];
    else if (s < t.length)
      r = t[s++], o = t[s++];
    else
      return e;
    !e.length || e[e.length - 1] < r ? e.push(r, o) : e[e.length - 1] < o && (e[e.length - 1] = o);
  }
}
function ou(i, t, e) {
  var n;
  let s, r, o;
  return e ? (s = t.changes, r = mt.empty(t.changes.length), o = i.changes.compose(t.changes)) : (s = t.changes.map(i.changes), r = i.changes.mapDesc(t.changes, !0), o = i.changes.compose(s)), {
    changes: o,
    selection: t.selection ? t.selection.map(r) : (n = i.selection) === null || n === void 0 ? void 0 : n.map(s),
    effects: H.mapEffects(i.effects, s).concat(H.mapEffects(t.effects, r)),
    annotations: i.annotations.length ? i.annotations.concat(t.annotations) : t.annotations,
    scrollIntoView: i.scrollIntoView || t.scrollIntoView
  };
}
function dl(i, t, e) {
  let n = t.selection, s = Kn(t.annotations);
  return t.userEvent && (s = s.concat(yt.userEvent.of(t.userEvent))), {
    changes: t.changes instanceof mt ? t.changes : mt.of(t.changes || [], e, i.facet(eu)),
    selection: n && (n instanceof A ? n : A.single(n.anchor, n.head)),
    effects: Kn(t.effects),
    annotations: s,
    scrollIntoView: !!t.scrollIntoView
  };
}
function lu(i, t, e) {
  let n = dl(i, t.length ? t[0] : {}, i.doc.length);
  t.length && t[0].filter === !1 && (e = !1);
  for (let r = 1; r < t.length; r++) {
    t[r].filter === !1 && (e = !1);
    let o = !!t[r].sequential;
    n = ou(n, dl(i, t[r], o ? n.changes.newLength : i.doc.length), o);
  }
  let s = yt.create(i, n.changes, n.selection, n.effects, n.annotations, n.scrollIntoView);
  return Um(e ? jm(s) : s);
}
function jm(i) {
  let t = i.startState, e = !0;
  for (let s of t.facet(nu)) {
    let r = s(i);
    if (r === !1) {
      e = !1;
      break;
    }
    Array.isArray(r) && (e = e === !0 ? r : Km(e, r));
  }
  if (e !== !0) {
    let s, r;
    if (e === !1)
      r = i.changes.invertedDesc, s = mt.empty(t.doc.length);
    else {
      let o = i.changes.filter(e);
      s = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    i = yt.create(t, s, i.selection && i.selection.map(r), H.mapEffects(i.effects, r), i.annotations, i.scrollIntoView);
  }
  let n = t.facet(iu);
  for (let s = n.length - 1; s >= 0; s--) {
    let r = n[s](i);
    r instanceof yt ? i = r : Array.isArray(r) && r.length == 1 && r[0] instanceof yt ? i = r[0] : i = lu(t, Kn(r), !1);
  }
  return i;
}
function Um(i) {
  let t = i.startState, e = t.facet(su), n = i;
  for (let s = e.length - 1; s >= 0; s--) {
    let r = e[s](i);
    r && Object.keys(r).length && (n = ou(n, dl(t, r, i.changes.newLength), !0));
  }
  return n == i ? i : yt.create(t, i.changes, i.selection, n.effects, n.annotations, n.scrollIntoView);
}
const Jm = [];
function Kn(i) {
  return i == null ? Jm : Array.isArray(i) ? i : [i];
}
var lt = /* @__PURE__ */ function(i) {
  return i[i.Word = 0] = "Word", i[i.Space = 1] = "Space", i[i.Other = 2] = "Other", i;
}(lt || (lt = {}));
const Gm = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let pl;
try {
  pl = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Xm(i) {
  if (pl)
    return pl.test(i);
  for (let t = 0; t < i.length; t++) {
    let e = i[t];
    if (/\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Gm.test(e)))
      return !0;
  }
  return !1;
}
function Ym(i) {
  return (t) => {
    if (!/\S/.test(t))
      return lt.Space;
    if (Xm(t))
      return lt.Word;
    for (let e = 0; e < i.length; e++)
      if (t.indexOf(i[e]) > -1)
        return lt.Word;
    return lt.Other;
  };
}
class X {
  constructor(t, e, n, s, r, o) {
    this.config = t, this.doc = e, this.selection = n, this.values = s, this.status = t.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      Di(this, l << 1);
    this.computeSlot = null;
  }
  field(t, e = !0) {
    let n = this.config.address[t.id];
    if (n == null) {
      if (e)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return Di(this, n), ur(this, n);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...t) {
    return lu(this, t, !0);
  }
  /**
  @internal
  */
  applyTransaction(t) {
    let e = this.config, { base: n, compartments: s } = e;
    for (let l of t.effects)
      l.is(Xr.reconfigure) ? (e && (s = /* @__PURE__ */ new Map(), e.compartments.forEach((a, h) => s.set(h, a)), e = null), s.set(l.value.compartment, l.value.extension)) : l.is(H.reconfigure) ? (e = null, n = l.value) : l.is(H.appendConfig) && (e = null, n = Kn(n).concat(l.value));
    let r;
    e ? r = t.startState.values.slice() : (e = fr.resolve(n, s, this), r = new X(e, this.doc, this.selection, e.dynamicSlots.map(() => null), (a, h) => h.reconfigure(a, this), null).values);
    let o = t.startState.facet(ul) ? t.newSelection : t.newSelection.asSingle();
    new X(e, t.newDoc, o, r, (l, a) => a.update(l, t), t);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(t) {
    return typeof t == "string" && (t = this.toText(t)), this.changeByRange((e) => ({
      changes: { from: e.from, to: e.to, insert: t },
      range: A.cursor(e.from + t.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(t) {
    let e = this.selection, n = t(e.ranges[0]), s = this.changes(n.changes), r = [n.range], o = Kn(n.effects);
    for (let l = 1; l < e.ranges.length; l++) {
      let a = t(e.ranges[l]), h = this.changes(a.changes), c = h.map(s);
      for (let u = 0; u < l; u++)
        r[u] = r[u].map(c);
      let f = s.mapDesc(h, !0);
      r.push(a.range.map(f)), s = s.compose(c), o = H.mapEffects(o, c).concat(H.mapEffects(Kn(a.effects), f));
    }
    return {
      changes: s,
      selection: A.create(r, e.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(t = []) {
    return t instanceof mt ? t : mt.of(t, this.doc.length, this.facet(X.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(t) {
    return J.of(t.split(this.facet(X.lineSeparator) || ll));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(t = 0, e = this.doc.length) {
    return this.doc.sliceString(t, e, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(t) {
    let e = this.config.address[t.id];
    return e == null ? t.default : (Di(this, e), ur(this, e));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(t) {
    let e = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (t)
      for (let n in t) {
        let s = t[n];
        s instanceof kt && this.config.address[s.id] != null && (e[n] = s.spec.toJSON(this.field(t[n]), this));
      }
    return e;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(t, e = {}, n) {
    if (!t || typeof t.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let s = [];
    if (n) {
      for (let r in n)
        if (Object.prototype.hasOwnProperty.call(t, r)) {
          let o = n[r], l = t[r];
          s.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return X.create({
      doc: t.doc,
      selection: A.fromJSON(t.selection),
      extensions: e.extensions ? s.concat([e.extensions]) : s
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(t = {}) {
    let e = fr.resolve(t.extensions || [], /* @__PURE__ */ new Map()), n = t.doc instanceof J ? t.doc : J.of((t.doc || "").split(e.staticFacet(X.lineSeparator) || ll)), s = t.selection ? t.selection instanceof A ? t.selection : A.single(t.selection.anchor, t.selection.head) : A.single(0);
    return Yf(s, n.length), e.staticFacet(ul) || (s = s.asSingle()), new X(e, n, s, e.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(X.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(X.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(ru);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(t, ...e) {
    for (let n of this.facet(X.phrases))
      if (Object.prototype.hasOwnProperty.call(n, t)) {
        t = n[t];
        break;
      }
    return e.length && (t = t.replace(/\$(\$|\d*)/g, (n, s) => {
      if (s == "$")
        return "$";
      let r = +(s || 1);
      return !r || r > e.length ? n : e[r - 1];
    })), t;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(t, e, n = -1) {
    let s = [];
    for (let r of this.facet(tu))
      for (let o of r(this, e, n))
        Object.prototype.hasOwnProperty.call(o, t) && s.push(o[t]);
    return s;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(t) {
    return Ym(this.languageDataAt("wordChars", t).join(""));
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(t) {
    let { text: e, from: n, length: s } = this.doc.lineAt(t), r = this.charCategorizer(t), o = t - n, l = t - n;
    for (; o > 0; ) {
      let a = wt(e, o, !1);
      if (r(e.slice(a, o)) != lt.Word)
        break;
      o = a;
    }
    for (; l < s; ) {
      let a = wt(e, l);
      if (r(e.slice(l, a)) != lt.Word)
        break;
      l = a;
    }
    return o == l ? null : A.range(o + n, l + n);
  }
}
X.allowMultipleSelections = ul;
X.tabSize = /* @__PURE__ */ D.define({
  combine: (i) => i.length ? i[0] : 4
});
X.lineSeparator = eu;
X.readOnly = ru;
X.phrases = /* @__PURE__ */ D.define({
  compare(i, t) {
    let e = Object.keys(i), n = Object.keys(t);
    return e.length == n.length && e.every((s) => i[s] == t[s]);
  }
});
X.languageData = tu;
X.changeFilter = nu;
X.transactionFilter = iu;
X.transactionExtender = su;
Xr.reconfigure = /* @__PURE__ */ H.define();
function Be(i, t, e = {}) {
  let n = {};
  for (let s of i)
    for (let r of Object.keys(s)) {
      let o = s[r], l = n[r];
      if (l === void 0)
        n[r] = o;
      else if (!(l === o || o === void 0)) if (Object.hasOwnProperty.call(e, r))
        n[r] = e[r](l, o);
      else
        throw new Error("Config merge conflict for field " + r);
    }
  for (let s in t)
    n[s] === void 0 && (n[s] = t[s]);
  return n;
}
class $n {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(t) {
    return this == t;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(t, e = t) {
    return gl.create(t, e, this);
  }
}
$n.prototype.startSide = $n.prototype.endSide = 0;
$n.prototype.point = !1;
$n.prototype.mapMode = Rt.TrackDel;
let gl = class au {
  constructor(t, e, n) {
    this.from = t, this.to = e, this.value = n;
  }
  /**
  @internal
  */
  static create(t, e, n) {
    return new au(t, e, n);
  }
};
function ml(i, t) {
  return i.from - t.from || i.value.startSide - t.value.startSide;
}
class ga {
  constructor(t, e, n, s) {
    this.from = t, this.to = e, this.value = n, this.maxPoint = s;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(t, e, n, s = 0) {
    let r = n ? this.to : this.from;
    for (let o = s, l = r.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, h = r[a] - t || (n ? this.value[a].endSide : this.value[a].startSide) - e;
      if (a == o)
        return h >= 0 ? o : l;
      h >= 0 ? l = a : o = a + 1;
    }
  }
  between(t, e, n, s) {
    for (let r = this.findIndex(e, -1e9, !0), o = this.findIndex(n, 1e9, !1, r); r < o; r++)
      if (s(this.from[r] + t, this.to[r] + t, this.value[r]) === !1)
        return !1;
  }
  map(t, e) {
    let n = [], s = [], r = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a], c = this.from[a] + t, f = this.to[a] + t, u, d;
      if (c == f) {
        let p = e.mapPos(c, h.startSide, h.mapMode);
        if (p == null || (u = d = p, h.startSide != h.endSide && (d = e.mapPos(c, h.endSide), d < u)))
          continue;
      } else if (u = e.mapPos(c, h.startSide), d = e.mapPos(f, h.endSide), u > d || u == d && h.startSide > 0 && h.endSide <= 0)
        continue;
      (d - u || h.endSide - h.startSide) < 0 || (o < 0 && (o = u), h.point && (l = Math.max(l, d - u)), n.push(h), s.push(u - o), r.push(d - o));
    }
    return { mapped: n.length ? new ga(s, r, n, l) : null, pos: o };
  }
}
class U {
  constructor(t, e, n, s) {
    this.chunkPos = t, this.chunk = e, this.nextLayer = n, this.maxPoint = s;
  }
  /**
  @internal
  */
  static create(t, e, n, s) {
    return new U(t, e, n, s);
  }
  /**
  @internal
  */
  get length() {
    let t = this.chunk.length - 1;
    return t < 0 ? 0 : Math.max(this.chunkEnd(t), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let t = this.nextLayer.size;
    for (let e of this.chunk)
      t += e.value.length;
    return t;
  }
  /**
  @internal
  */
  chunkEnd(t) {
    return this.chunkPos[t] + this.chunk[t].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(t) {
    let { add: e = [], sort: n = !1, filterFrom: s = 0, filterTo: r = this.length } = t, o = t.filter;
    if (e.length == 0 && !o)
      return this;
    if (n && (e = e.slice().sort(ml)), this.isEmpty)
      return e.length ? U.of(e) : this;
    let l = new hu(this, null, -1).goto(0), a = 0, h = [], c = new He();
    for (; l.value || a < e.length; )
      if (a < e.length && (l.from - e[a].from || l.startSide - e[a].value.startSide) >= 0) {
        let f = e[a++];
        c.addInner(f.from, f.to, f.value) || h.push(f);
      } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == e.length || this.chunkEnd(l.chunkIndex) < e[a].from) && (!o || s > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) && (c.addInner(l.from, l.to, l.value) || h.push(gl.create(l.from, l.to, l.value))), l.next());
    return c.finishInner(this.nextLayer.isEmpty && !h.length ? U.empty : this.nextLayer.update({ add: h, filter: o, filterFrom: s, filterTo: r }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(t) {
    if (t.empty || this.isEmpty)
      return this;
    let e = [], n = [], s = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], h = t.touchesRange(l, l + a.length);
      if (h === !1)
        s = Math.max(s, a.maxPoint), e.push(a), n.push(t.mapPos(l));
      else if (h === !0) {
        let { mapped: c, pos: f } = a.map(l, t);
        c && (s = Math.max(s, c.maxPoint), e.push(c), n.push(f));
      }
    }
    let r = this.nextLayer.map(t);
    return e.length == 0 ? r : new U(n, e, r || U.empty, s);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(t, e, n) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let r = this.chunkPos[s], o = this.chunk[s];
        if (e >= r && t <= r + o.length && o.between(r, t - r, e - r, n) === !1)
          return;
      }
      this.nextLayer.between(t, e, n);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(t = 0) {
    return Hi.from([this]).goto(t);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(t, e = 0) {
    return Hi.from(t).goto(e);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(t, e, n, s, r = -1) {
    let o = t.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), l = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), a = Ph(o, l, n), h = new mi(o, a, r), c = new mi(l, a, r);
    n.iterGaps((f, u, d) => Dh(h, f, c, u, d, s)), n.empty && n.length == 0 && Dh(h, 0, c, 0, 0, s);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(t, e, n = 0, s) {
    s == null && (s = 999999999);
    let r = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0), o = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0);
    if (r.length != o.length)
      return !1;
    if (!r.length)
      return !0;
    let l = Ph(r, o), a = new mi(r, l, 0).goto(n), h = new mi(o, l, 0).goto(n);
    for (; ; ) {
      if (a.to != h.to || !yl(a.active, h.active) || a.point && (!h.point || !a.point.eq(h.point)))
        return !1;
      if (a.to > s)
        return !0;
      a.next(), h.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(t, e, n, s, r = -1) {
    let o = new mi(t, null, r).goto(e), l = e, a = o.openStart;
    for (; ; ) {
      let h = Math.min(o.to, n);
      if (o.point) {
        let c = o.activeForPoint(o.to), f = o.pointFrom < e ? c.length + 1 : o.point.startSide < 0 ? c.length : Math.min(c.length, a);
        s.point(l, h, o.point, c, f, o.pointRank), a = Math.min(o.openEnd(h), c.length);
      } else h > l && (s.span(l, h, o.active, a), a = o.openEnd(h));
      if (o.to > n)
        return a + (o.point && o.to > n ? 1 : 0);
      l = o.to, o.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(t, e = !1) {
    let n = new He();
    for (let s of t instanceof gl ? [t] : e ? Zm(t) : t)
      n.add(s.from, s.to, s.value);
    return n.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(t) {
    if (!t.length)
      return U.empty;
    let e = t[t.length - 1];
    for (let n = t.length - 2; n >= 0; n--)
      for (let s = t[n]; s != U.empty; s = s.nextLayer)
        e = new U(s.chunkPos, s.chunk, e, Math.max(s.maxPoint, e.maxPoint));
    return e;
  }
}
U.empty = /* @__PURE__ */ new U([], [], null, -1);
function Zm(i) {
  if (i.length > 1)
    for (let t = i[0], e = 1; e < i.length; e++) {
      let n = i[e];
      if (ml(t, n) > 0)
        return i.slice().sort(ml);
      t = n;
    }
  return i;
}
U.empty.nextLayer = U.empty;
class He {
  finishChunk(t) {
    this.chunks.push(new ga(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, t && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(t, e, n) {
    this.addInner(t, e, n) || (this.nextLayer || (this.nextLayer = new He())).add(t, e, n);
  }
  /**
  @internal
  */
  addInner(t, e, n) {
    let s = t - this.lastTo || n.startSide - this.last.endSide;
    if (s <= 0 && (t - this.lastFrom || n.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return s < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = t), this.from.push(t - this.chunkStart), this.to.push(e - this.chunkStart), this.last = n, this.lastFrom = t, this.lastTo = e, this.value.push(n), n.point && (this.maxPoint = Math.max(this.maxPoint, e - t)), !0);
  }
  /**
  @internal
  */
  addChunk(t, e) {
    if ((t - this.lastTo || e.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, e.maxPoint), this.chunks.push(e), this.chunkPos.push(t);
    let n = e.value.length - 1;
    return this.last = e.value[n], this.lastFrom = e.from[n] + t, this.lastTo = e.to[n] + t, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(U.empty);
  }
  /**
  @internal
  */
  finishInner(t) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return t;
    let e = U.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(t) : t, this.setMaxPoint);
    return this.from = null, e;
  }
}
function Ph(i, t, e) {
  let n = /* @__PURE__ */ new Map();
  for (let r of i)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && n.set(r.chunk[o], r.chunkPos[o]);
  let s = /* @__PURE__ */ new Set();
  for (let r of t)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = n.get(r.chunk[o]);
      l != null && (e ? e.mapPos(l) : l) == r.chunkPos[o] && !(e != null && e.touchesRange(l, l + r.chunk[o].length)) && s.add(r.chunk[o]);
    }
  return s;
}
class hu {
  constructor(t, e, n, s = 0) {
    this.layer = t, this.skip = e, this.minPoint = n, this.rank = s;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(t, e = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(t, e, !1), this;
  }
  gotoInner(t, e, n) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let s = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(s) || this.layer.chunkEnd(this.chunkIndex) < t || s.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, n = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(t - this.layer.chunkPos[this.chunkIndex], e, !0);
      (!n || this.rangeIndex < s) && this.setRangeIndex(s);
    }
    this.next();
  }
  forward(t, e) {
    (this.to - t || this.endSide - e) < 0 && this.gotoInner(t, e, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let t = this.layer.chunkPos[this.chunkIndex], e = this.layer.chunk[this.chunkIndex], n = t + e.from[this.rangeIndex];
        if (this.from = n, this.to = t + e.to[this.rangeIndex], this.value = e.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(t) {
    if (t == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = t;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(t) {
    return this.from - t.from || this.startSide - t.startSide || this.rank - t.rank || this.to - t.to || this.endSide - t.endSide;
  }
}
class Hi {
  constructor(t) {
    this.heap = t;
  }
  static from(t, e = null, n = -1) {
    let s = [];
    for (let r = 0; r < t.length; r++)
      for (let o = t[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= n && s.push(new hu(o, e, n, r));
    return s.length == 1 ? s[0] : new Hi(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(t, e = -1e9) {
    for (let n of this.heap)
      n.goto(t, e);
    for (let n = this.heap.length >> 1; n >= 0; n--)
      Bo(this.heap, n);
    return this.next(), this;
  }
  forward(t, e) {
    for (let n of this.heap)
      n.forward(t, e);
    for (let n = this.heap.length >> 1; n >= 0; n--)
      Bo(this.heap, n);
    (this.to - t || this.value.endSide - e) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let t = this.heap[0];
      this.from = t.from, this.to = t.to, this.value = t.value, this.rank = t.rank, t.value && t.next(), Bo(this.heap, 0);
    }
  }
}
function Bo(i, t) {
  for (let e = i[t]; ; ) {
    let n = (t << 1) + 1;
    if (n >= i.length)
      break;
    let s = i[n];
    if (n + 1 < i.length && s.compare(i[n + 1]) >= 0 && (s = i[n + 1], n++), e.compare(s) < 0)
      break;
    i[n] = e, i[t] = s, t = n;
  }
}
class mi {
  constructor(t, e, n) {
    this.minPoint = n, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Hi.from(t, e, n);
  }
  goto(t, e = -1e9) {
    return this.cursor.goto(t, e), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = t, this.endSide = e, this.openStart = -1, this.next(), this;
  }
  forward(t, e) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - t || this.active[this.minActive].endSide - e) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(t, e);
  }
  removeActive(t) {
    Os(this.active, t), Os(this.activeTo, t), Os(this.activeRank, t), this.minActive = Rh(this.active, this.activeTo);
  }
  addActive(t) {
    let e = 0, { value: n, to: s, rank: r } = this.cursor;
    for (; e < this.activeRank.length && (r - this.activeRank[e] || s - this.activeTo[e]) > 0; )
      e++;
    Ms(this.active, e, n), Ms(this.activeTo, e, s), Ms(this.activeRank, e, r), t && Ms(t, e, this.cursor.from), this.minActive = Rh(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let t = this.to, e = this.point;
    this.point = null;
    let n = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let s = this.minActive;
      if (s > -1 && (this.activeTo[s] - this.cursor.from || this.active[s].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[s] > t) {
          this.to = this.activeTo[s], this.endSide = this.active[s].endSide;
          break;
        }
        this.removeActive(s), n && Os(n, s);
      } else if (this.cursor.value)
        if (this.cursor.from > t) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point)
            this.addActive(n), this.cursor.next();
          else if (e && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (n) {
      this.openStart = 0;
      for (let s = n.length - 1; s >= 0 && n[s] < t; s--)
        this.openStart++;
    }
  }
  activeForPoint(t) {
    if (!this.active.length)
      return this.active;
    let e = [];
    for (let n = this.active.length - 1; n >= 0 && !(this.activeRank[n] < this.pointRank); n--)
      (this.activeTo[n] > t || this.activeTo[n] == t && this.active[n].endSide >= this.point.endSide) && e.push(this.active[n]);
    return e.reverse();
  }
  openEnd(t) {
    let e = 0;
    for (let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > t; n--)
      e++;
    return e;
  }
}
function Dh(i, t, e, n, s, r) {
  i.goto(t), e.goto(n);
  let o = n + s, l = n, a = n - t;
  for (; ; ) {
    let h = i.to + a - e.to, c = h || i.endSide - e.endSide, f = c < 0 ? i.to + a : e.to, u = Math.min(f, o);
    if (i.point || e.point ? i.point && e.point && (i.point == e.point || i.point.eq(e.point)) && yl(i.activeForPoint(i.to), e.activeForPoint(e.to)) || r.comparePoint(l, u, i.point, e.point) : u > l && !yl(i.active, e.active) && r.compareRange(l, u, i.active, e.active), f > o)
      break;
    (h || i.openEnd != e.openEnd) && r.boundChange && r.boundChange(f), l = f, c <= 0 && i.next(), c >= 0 && e.next();
  }
}
function yl(i, t) {
  if (i.length != t.length)
    return !1;
  for (let e = 0; e < i.length; e++)
    if (i[e] != t[e] && !i[e].eq(t[e]))
      return !1;
  return !0;
}
function Os(i, t) {
  for (let e = t, n = i.length - 1; e < n; e++)
    i[e] = i[e + 1];
  i.pop();
}
function Ms(i, t, e) {
  for (let n = i.length - 1; n >= t; n--)
    i[n + 1] = i[n];
  i[t] = e;
}
function Rh(i, t) {
  let e = -1, n = 1e9;
  for (let s = 0; s < t.length; s++)
    (t[s] - n || i[s].endSide - i[e].endSide) < 0 && (e = s, n = t[s]);
  return e;
}
function fi(i, t, e = i.length) {
  let n = 0;
  for (let s = 0; s < e && s < i.length; )
    i.charCodeAt(s) == 9 ? (n += t - n % t, s++) : (n++, s = wt(i, s));
  return n;
}
function bl(i, t, e, n) {
  for (let s = 0, r = 0; ; ) {
    if (r >= t)
      return s;
    if (s == i.length)
      break;
    r += i.charCodeAt(s) == 9 ? e - r % e : 1, s = wt(i, s);
  }
  return n === !0 ? -1 : i.length;
}
const vl = "ͼ", Bh = typeof Symbol > "u" ? "__" + vl : Symbol.for(vl), xl = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), Lh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class on {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(t, e) {
    this.rules = [];
    let { finish: n } = e || {};
    function s(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, l, a, h) {
      let c = [], f = /^@(\w+)\b/.exec(o[0]), u = f && f[1] == "keyframes";
      if (f && l == null) return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          r(
            d.split(/,\s*/).map((m) => o.map((g) => m.replace(/&/, g))).reduce((m, g) => m.concat(g)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!f) throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          r(s(d), p, c, u);
        } else p != null && c.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()) + ": " + p + ";");
      }
      (c.length || u) && a.push((n && !f && !h ? o.map(n) : o).join(", ") + " {" + c.join(" ") + "}");
    }
    for (let o in t) r(s(o), t[o], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let t = Lh[Bh] || 1;
    return Lh[Bh] = t + 1, vl + t.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  //
  // If a Content Security Policy nonce is provided, it is added to
  // the `<style>` tag generated by the library.
  static mount(t, e, n) {
    let s = t[xl], r = n && n.nonce;
    s ? r && s.setNonce(r) : s = new t0(t, r), s.mount(Array.isArray(e) ? e : [e], t);
  }
}
let Eh = /* @__PURE__ */ new Map();
class t0 {
  constructor(t, e) {
    let n = t.ownerDocument || t, s = n.defaultView;
    if (!t.head && t.adoptedStyleSheets && s.CSSStyleSheet) {
      let r = Eh.get(n);
      if (r) return t[xl] = r;
      this.sheet = new s.CSSStyleSheet(), Eh.set(n, this);
    } else
      this.styleTag = n.createElement("style"), e && this.styleTag.setAttribute("nonce", e);
    this.modules = [], t[xl] = this;
  }
  mount(t, e) {
    let n = this.sheet, s = 0, r = 0;
    for (let o = 0; o < t.length; o++) {
      let l = t[o], a = this.modules.indexOf(l);
      if (a < r && a > -1 && (this.modules.splice(a, 1), r--, a = -1), a == -1) {
        if (this.modules.splice(r++, 0, l), n) for (let h = 0; h < l.rules.length; h++)
          n.insertRule(l.rules[h], s++);
      } else {
        for (; r < a; ) s += this.modules[r++].rules.length;
        s += l.rules.length, r++;
      }
    }
    if (n)
      e.adoptedStyleSheets.indexOf(this.sheet) < 0 && (e.adoptedStyleSheets = [this.sheet, ...e.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++)
        o += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = o;
      let l = e.head || e;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(t) {
    this.styleTag && this.styleTag.getAttribute("nonce") != t && this.styleTag.setAttribute("nonce", t);
  }
}
var ln = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, zi = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, e0 = typeof navigator < "u" && /Mac/.test(navigator.platform), n0 = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var St = 0; St < 10; St++) ln[48 + St] = ln[96 + St] = String(St);
for (var St = 1; St <= 24; St++) ln[St + 111] = "F" + St;
for (var St = 65; St <= 90; St++)
  ln[St] = String.fromCharCode(St + 32), zi[St] = String.fromCharCode(St);
for (var Lo in ln) zi.hasOwnProperty(Lo) || (zi[Lo] = ln[Lo]);
function i0(i) {
  var t = e0 && i.metaKey && i.shiftKey && !i.ctrlKey && !i.altKey || n0 && i.shiftKey && i.key && i.key.length == 1 || i.key == "Unidentified", e = !t && i.key || (i.shiftKey ? zi : ln)[i.keyCode] || i.key || "Unidentified";
  return e == "Esc" && (e = "Escape"), e == "Del" && (e = "Delete"), e == "Left" && (e = "ArrowLeft"), e == "Up" && (e = "ArrowUp"), e == "Right" && (e = "ArrowRight"), e == "Down" && (e = "ArrowDown"), e;
}
function qi(i) {
  let t;
  return i.nodeType == 11 ? t = i.getSelection ? i : i.ownerDocument : t = i, t.getSelection();
}
function Sl(i, t) {
  return t ? i == t || i.contains(t.nodeType != 1 ? t.parentNode : t) : !1;
}
function Zs(i, t) {
  if (!t.anchorNode)
    return !1;
  try {
    return Sl(i, t.anchorNode);
  } catch {
    return !1;
  }
}
function Qi(i) {
  return i.nodeType == 3 ? Dn(i, 0, i.nodeValue.length).getClientRects() : i.nodeType == 1 ? i.getClientRects() : [];
}
function Ri(i, t, e, n) {
  return e ? Ih(i, t, e, n, -1) || Ih(i, t, e, n, 1) : !1;
}
function Pn(i) {
  for (var t = 0; ; t++)
    if (i = i.previousSibling, !i)
      return t;
}
function dr(i) {
  return i.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(i.nodeName);
}
function Ih(i, t, e, n, s) {
  for (; ; ) {
    if (i == e && t == n)
      return !0;
    if (t == (s < 0 ? 0 : De(i))) {
      if (i.nodeName == "DIV")
        return !1;
      let r = i.parentNode;
      if (!r || r.nodeType != 1)
        return !1;
      t = Pn(i) + (s < 0 ? 0 : 1), i = r;
    } else if (i.nodeType == 1) {
      if (i = i.childNodes[t + (s < 0 ? -1 : 0)], i.nodeType == 1 && i.contentEditable == "false")
        return !1;
      t = s < 0 ? De(i) : 0;
    } else
      return !1;
  }
}
function De(i) {
  return i.nodeType == 3 ? i.nodeValue.length : i.childNodes.length;
}
function Yr(i, t) {
  let e = t ? i.left : i.right;
  return { left: e, right: e, top: i.top, bottom: i.bottom };
}
function s0(i) {
  let t = i.visualViewport;
  return t ? {
    left: 0,
    right: t.width,
    top: 0,
    bottom: t.height
  } : {
    left: 0,
    right: i.innerWidth,
    top: 0,
    bottom: i.innerHeight
  };
}
function cu(i, t) {
  let e = t.width / i.offsetWidth, n = t.height / i.offsetHeight;
  return (e > 0.995 && e < 1.005 || !isFinite(e) || Math.abs(t.width - i.offsetWidth) < 1) && (e = 1), (n > 0.995 && n < 1.005 || !isFinite(n) || Math.abs(t.height - i.offsetHeight) < 1) && (n = 1), { scaleX: e, scaleY: n };
}
function r0(i, t, e, n, s, r, o, l) {
  let a = i.ownerDocument, h = a.defaultView || window;
  for (let c = i, f = !1; c && !f; )
    if (c.nodeType == 1) {
      let u, d = c == a.body, p = 1, m = 1;
      if (d)
        u = s0(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (f = !0), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let b = c.getBoundingClientRect();
        ({ scaleX: p, scaleY: m } = cu(c, b)), u = {
          left: b.left,
          right: b.left + c.clientWidth * p,
          top: b.top,
          bottom: b.top + c.clientHeight * m
        };
      }
      let g = 0, y = 0;
      if (s == "nearest")
        t.top < u.top ? (y = t.top - (u.top + o), e > 0 && t.bottom > u.bottom + y && (y = t.bottom - u.bottom + o)) : t.bottom > u.bottom && (y = t.bottom - u.bottom + o, e < 0 && t.top - y < u.top && (y = t.top - (u.top + o)));
      else {
        let b = t.bottom - t.top, S = u.bottom - u.top;
        y = (s == "center" && b <= S ? t.top + b / 2 - S / 2 : s == "start" || s == "center" && e < 0 ? t.top - o : t.bottom - S + o) - u.top;
      }
      if (n == "nearest" ? t.left < u.left ? (g = t.left - (u.left + r), e > 0 && t.right > u.right + g && (g = t.right - u.right + r)) : t.right > u.right && (g = t.right - u.right + r, e < 0 && t.left < u.left + g && (g = t.left - (u.left + r))) : g = (n == "center" ? t.left + (t.right - t.left) / 2 - (u.right - u.left) / 2 : n == "start" == l ? t.left - r : t.right - (u.right - u.left) + r) - u.left, g || y)
        if (d)
          h.scrollBy(g, y);
        else {
          let b = 0, S = 0;
          if (y) {
            let w = c.scrollTop;
            c.scrollTop += y / m, S = (c.scrollTop - w) * m;
          }
          if (g) {
            let w = c.scrollLeft;
            c.scrollLeft += g / p, b = (c.scrollLeft - w) * p;
          }
          t = {
            left: t.left - b,
            top: t.top - S,
            right: t.right - b,
            bottom: t.bottom - S
          }, b && Math.abs(b - g) < 1 && (n = "nearest"), S && Math.abs(S - y) < 1 && (s = "nearest");
        }
      if (d)
        break;
      (t.top < u.top || t.bottom > u.bottom || t.left < u.left || t.right > u.right) && (t = {
        left: Math.max(t.left, u.left),
        right: Math.min(t.right, u.right),
        top: Math.max(t.top, u.top),
        bottom: Math.min(t.bottom, u.bottom)
      }), c = c.assignedSlot || c.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
}
function o0(i) {
  let t = i.ownerDocument, e, n;
  for (let s = i.parentNode; s && !(s == t.body || e && n); )
    if (s.nodeType == 1)
      !n && s.scrollHeight > s.clientHeight && (n = s), !e && s.scrollWidth > s.clientWidth && (e = s), s = s.assignedSlot || s.parentNode;
    else if (s.nodeType == 11)
      s = s.host;
    else
      break;
  return { x: e, y: n };
}
class l0 {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(t) {
    return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset;
  }
  setRange(t) {
    let { anchorNode: e, focusNode: n } = t;
    this.set(e, Math.min(t.anchorOffset, e ? De(e) : 0), n, Math.min(t.focusOffset, n ? De(n) : 0));
  }
  set(t, e, n, s) {
    this.anchorNode = t, this.anchorOffset = e, this.focusNode = n, this.focusOffset = s;
  }
}
let _n = null;
function fu(i) {
  if (i.setActive)
    return i.setActive();
  if (_n)
    return i.focus(_n);
  let t = [];
  for (let e = i; e && (t.push(e, e.scrollTop, e.scrollLeft), e != e.ownerDocument); e = e.parentNode)
    ;
  if (i.focus(_n == null ? {
    get preventScroll() {
      return _n = { preventScroll: !0 }, !0;
    }
  } : void 0), !_n) {
    _n = !1;
    for (let e = 0; e < t.length; ) {
      let n = t[e++], s = t[e++], r = t[e++];
      n.scrollTop != s && (n.scrollTop = s), n.scrollLeft != r && (n.scrollLeft = r);
    }
  }
}
let _h;
function Dn(i, t, e = t) {
  let n = _h || (_h = document.createRange());
  return n.setEnd(i, e), n.setStart(i, t), n;
}
function jn(i, t, e, n) {
  let s = { key: t, code: t, keyCode: e, which: e, cancelable: !0 };
  n && ({ altKey: s.altKey, ctrlKey: s.ctrlKey, shiftKey: s.shiftKey, metaKey: s.metaKey } = n);
  let r = new KeyboardEvent("keydown", s);
  r.synthetic = !0, i.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", s);
  return o.synthetic = !0, i.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented;
}
function a0(i) {
  for (; i; ) {
    if (i && (i.nodeType == 9 || i.nodeType == 11 && i.host))
      return i;
    i = i.assignedSlot || i.parentNode;
  }
  return null;
}
function uu(i) {
  for (; i.attributes.length; )
    i.removeAttributeNode(i.attributes[0]);
}
function h0(i, t) {
  let e = t.focusNode, n = t.focusOffset;
  if (!e || t.anchorNode != e || t.anchorOffset != n)
    return !1;
  for (n = Math.min(n, De(e)); ; )
    if (n) {
      if (e.nodeType != 1)
        return !1;
      let s = e.childNodes[n - 1];
      s.contentEditable == "false" ? n-- : (e = s, n = De(e));
    } else {
      if (e == i)
        return !0;
      n = Pn(e), e = e.parentNode;
    }
}
function du(i) {
  return i.scrollTop > Math.max(1, i.scrollHeight - i.clientHeight - 4);
}
function pu(i, t) {
  for (let e = i, n = t; ; ) {
    if (e.nodeType == 3 && n > 0)
      return { node: e, offset: n };
    if (e.nodeType == 1 && n > 0) {
      if (e.contentEditable == "false")
        return null;
      e = e.childNodes[n - 1], n = De(e);
    } else if (e.parentNode && !dr(e))
      n = Pn(e), e = e.parentNode;
    else
      return null;
  }
}
function gu(i, t) {
  for (let e = i, n = t; ; ) {
    if (e.nodeType == 3 && n < e.nodeValue.length)
      return { node: e, offset: n };
    if (e.nodeType == 1 && n < e.childNodes.length) {
      if (e.contentEditable == "false")
        return null;
      e = e.childNodes[n], n = 0;
    } else if (e.parentNode && !dr(e))
      n = Pn(e) + 1, e = e.parentNode;
    else
      return null;
  }
}
class Mt {
  constructor(t, e, n = !0) {
    this.node = t, this.offset = e, this.precise = n;
  }
  static before(t, e) {
    return new Mt(t.parentNode, Pn(t), e);
  }
  static after(t, e) {
    return new Mt(t.parentNode, Pn(t) + 1, e);
  }
}
const ma = [];
class nt {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(t) {
    let e = this.posAtStart;
    for (let n of this.children) {
      if (n == t)
        return e;
      e += n.length + n.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(t) {
    return this.posBefore(t) + t.length;
  }
  sync(t, e) {
    if (this.flags & 2) {
      let n = this.dom, s = null, r;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (r = s ? s.nextSibling : n.firstChild)) {
            let l = nt.get(r);
            (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(r);
          }
          o.sync(t, e), o.flags &= -8;
        }
        if (r = s ? s.nextSibling : n.firstChild, e && !e.written && e.node == n && r != o.dom && (e.written = !0), o.dom.parentNode == n)
          for (; r && r != o.dom; )
            r = Nh(r);
        else
          n.insertBefore(o.dom, r);
        s = o.dom;
      }
      for (r = s ? s.nextSibling : n.firstChild, r && e && e.node == n && (e.written = !0); r; )
        r = Nh(r);
    } else if (this.flags & 1)
      for (let n of this.children)
        n.flags & 7 && (n.sync(t, e), n.flags &= -8);
  }
  reuseDOM(t) {
  }
  localPosFromDOM(t, e) {
    let n;
    if (t == this.dom)
      n = this.dom.childNodes[e];
    else {
      let s = De(t) == 0 ? 0 : e == 0 ? -1 : 1;
      for (; ; ) {
        let r = t.parentNode;
        if (r == this.dom)
          break;
        s == 0 && r.firstChild != r.lastChild && (t == r.firstChild ? s = -1 : s = 1), t = r;
      }
      s < 0 ? n = t : n = t.nextSibling;
    }
    if (n == this.dom.firstChild)
      return 0;
    for (; n && !nt.get(n); )
      n = n.nextSibling;
    if (!n)
      return this.length;
    for (let s = 0, r = 0; ; s++) {
      let o = this.children[s];
      if (o.dom == n)
        return r;
      r += o.length + o.breakAfter;
    }
  }
  domBoundsAround(t, e, n = 0) {
    let s = -1, r = -1, o = -1, l = -1;
    for (let a = 0, h = n, c = n; a < this.children.length; a++) {
      let f = this.children[a], u = h + f.length;
      if (h < t && u > e)
        return f.domBoundsAround(t, e, h);
      if (u >= t && s == -1 && (s = a, r = h), h > e && f.dom.parentNode == this.dom) {
        o = a, l = c;
        break;
      }
      c = u, h = u + f.breakAfter;
    }
    return {
      from: r,
      to: l < 0 ? n + this.length : l,
      startDOM: (s ? this.children[s - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
    };
  }
  markDirty(t = !1) {
    this.flags |= 2, this.markParentsDirty(t);
  }
  markParentsDirty(t) {
    for (let e = this.parent; e; e = e.parent) {
      if (t && (e.flags |= 2), e.flags & 1)
        return;
      e.flags |= 1, t = !1;
    }
  }
  setParent(t) {
    this.parent != t && (this.parent = t, this.flags & 7 && this.markParentsDirty(!0));
  }
  setDOM(t) {
    this.dom != t && (this.dom && (this.dom.cmView = null), this.dom = t, t.cmView = this);
  }
  get rootView() {
    for (let t = this; ; ) {
      let e = t.parent;
      if (!e)
        return t;
      t = e;
    }
  }
  replaceChildren(t, e, n = ma) {
    this.markDirty();
    for (let s = t; s < e; s++) {
      let r = this.children[s];
      r.parent == this && n.indexOf(r) < 0 && r.destroy();
    }
    n.length < 250 ? this.children.splice(t, e - t, ...n) : this.children = [].concat(this.children.slice(0, t), n, this.children.slice(e));
    for (let s = 0; s < n.length; s++)
      n[s].setParent(this);
  }
  ignoreMutation(t) {
    return !1;
  }
  ignoreEvent(t) {
    return !1;
  }
  childCursor(t = this.length) {
    return new mu(this.children, t, this.children.length);
  }
  childPos(t, e = 1) {
    return this.childCursor().findPos(t, e);
  }
  toString() {
    let t = this.constructor.name.replace("View", "");
    return t + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (t == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(t) {
    return t.cmView;
  }
  get isEditable() {
    return !0;
  }
  get isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  merge(t, e, n, s, r, o) {
    return !1;
  }
  become(t) {
    return !1;
  }
  canReuseDOM(t) {
    return t.constructor == this.constructor && !((this.flags | t.flags) & 8);
  }
  // When this is a zero-length view with a side, this should return a
  // number <= 0 to indicate it is before its position, or a
  // number > 0 when after its position.
  getSide() {
    return 0;
  }
  destroy() {
    for (let t of this.children)
      t.parent == this && t.destroy();
    this.parent = null;
  }
}
nt.prototype.breakAfter = 0;
function Nh(i) {
  let t = i.nextSibling;
  return i.parentNode.removeChild(i), t;
}
class mu {
  constructor(t, e, n) {
    this.children = t, this.pos = e, this.i = n, this.off = 0;
  }
  findPos(t, e = 1) {
    for (; ; ) {
      if (t > this.pos || t == this.pos && (e > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
        return this.off = t - this.pos, this;
      let n = this.children[--this.i];
      this.pos -= n.length + n.breakAfter;
    }
  }
}
function yu(i, t, e, n, s, r, o, l, a) {
  let { children: h } = i, c = h.length ? h[t] : null, f = r.length ? r[r.length - 1] : null, u = f ? f.breakAfter : o;
  if (!(t == n && c && !o && !u && r.length < 2 && c.merge(e, s, r.length ? f : null, e == 0, l, a))) {
    if (n < h.length) {
      let d = h[n];
      d && (s < d.length || d.breakAfter && (f != null && f.breakAfter)) ? (t == n && (d = d.split(s), s = 0), !u && f && d.merge(0, s, f, !0, 0, a) ? r[r.length - 1] = d : ((s || d.children.length && !d.children[0].length) && d.merge(0, s, null, !1, 0, a), r.push(d))) : d != null && d.breakAfter && (f ? f.breakAfter = 1 : o = 1), n++;
    }
    for (c && (c.breakAfter = o, e > 0 && (!o && r.length && c.merge(e, c.length, r[0], !1, l, 0) ? c.breakAfter = r.shift().breakAfter : (e < c.length || c.children.length && c.children[c.children.length - 1].length == 0) && c.merge(e, c.length, null, !1, l, 0), t++)); t < n && r.length; )
      if (h[n - 1].become(r[r.length - 1]))
        n--, r.pop(), a = r.length ? 0 : l;
      else if (h[t].become(r[0]))
        t++, r.shift(), l = r.length ? 0 : a;
      else
        break;
    !r.length && t && n < h.length && !h[t - 1].breakAfter && h[n].merge(0, 0, h[t - 1], !1, l, a) && t--, (t < n || r.length) && i.replaceChildren(t, n, r);
  }
}
function bu(i, t, e, n, s, r) {
  let o = i.childCursor(), { i: l, off: a } = o.findPos(e, 1), { i: h, off: c } = o.findPos(t, -1), f = t - e;
  for (let u of n)
    f += u.length;
  i.length += f, yu(i, h, c, l, a, n, 0, s, r);
}
let Wt = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, wl = typeof document < "u" ? document : { documentElement: { style: {} } };
const kl = /* @__PURE__ */ /Edge\/(\d+)/.exec(Wt.userAgent), vu = /* @__PURE__ */ /MSIE \d/.test(Wt.userAgent), Cl = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Wt.userAgent), Zr = !!(vu || Cl || kl), Fh = !Zr && /* @__PURE__ */ /gecko\/(\d+)/i.test(Wt.userAgent), Eo = !Zr && /* @__PURE__ */ /Chrome\/(\d+)/.exec(Wt.userAgent), Vh = "webkitFontSmoothing" in wl.documentElement.style, xu = !Zr && /* @__PURE__ */ /Apple Computer/.test(Wt.vendor), Wh = xu && (/* @__PURE__ */ /Mobile\/\w+/.test(Wt.userAgent) || Wt.maxTouchPoints > 2);
var $ = {
  mac: Wh || /* @__PURE__ */ /Mac/.test(Wt.platform),
  windows: /* @__PURE__ */ /Win/.test(Wt.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(Wt.platform),
  ie: Zr,
  ie_version: vu ? wl.documentMode || 6 : Cl ? +Cl[1] : kl ? +kl[1] : 0,
  gecko: Fh,
  gecko_version: Fh ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(Wt.userAgent) || [0, 0])[1] : 0,
  chrome: !!Eo,
  chrome_version: Eo ? +Eo[1] : 0,
  ios: Wh,
  android: /* @__PURE__ */ /Android\b/.test(Wt.userAgent),
  webkit: Vh,
  safari: xu,
  webkit_version: Vh ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(Wt.userAgent) || [0, 0])[1] : 0,
  tabSize: wl.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const c0 = 256;
class pe extends nt {
  constructor(t) {
    super(), this.text = t;
  }
  get length() {
    return this.text.length;
  }
  createDOM(t) {
    this.setDOM(t || document.createTextNode(this.text));
  }
  sync(t, e) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = !0), this.dom.nodeValue = this.text);
  }
  reuseDOM(t) {
    t.nodeType == 3 && this.createDOM(t);
  }
  merge(t, e, n) {
    return this.flags & 8 || n && (!(n instanceof pe) || this.length - (e - t) + n.length > c0 || n.flags & 8) ? !1 : (this.text = this.text.slice(0, t) + (n ? n.text : "") + this.text.slice(e), this.markDirty(), !0);
  }
  split(t) {
    let e = new pe(this.text.slice(t));
    return this.text = this.text.slice(0, t), this.markDirty(), e.flags |= this.flags & 8, e;
  }
  localPosFromDOM(t, e) {
    return t == this.dom ? e : e ? this.text.length : 0;
  }
  domAtPos(t) {
    return new Mt(this.dom, t);
  }
  domBoundsAround(t, e, n) {
    return { from: n, to: n + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(t, e) {
    return f0(this.dom, t, e);
  }
}
class ze extends nt {
  constructor(t, e = [], n = 0) {
    super(), this.mark = t, this.children = e, this.length = n;
    for (let s of e)
      s.setParent(this);
  }
  setAttrs(t) {
    if (uu(t), this.mark.class && (t.className = this.mark.class), this.mark.attrs)
      for (let e in this.mark.attrs)
        t.setAttribute(e, this.mark.attrs[e]);
    return t;
  }
  canReuseDOM(t) {
    return super.canReuseDOM(t) && !((this.flags | t.flags) & 8);
  }
  reuseDOM(t) {
    t.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(t), this.flags |= 6);
  }
  sync(t, e) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(t, e);
  }
  merge(t, e, n, s, r, o) {
    return n && (!(n instanceof ze && n.mark.eq(this.mark)) || t && r <= 0 || e < this.length && o <= 0) ? !1 : (bu(this, t, e, n ? n.children.slice() : [], r - 1, o - 1), this.markDirty(), !0);
  }
  split(t) {
    let e = [], n = 0, s = -1, r = 0;
    for (let l of this.children) {
      let a = n + l.length;
      a > t && e.push(n < t ? l.split(t - n) : l), s < 0 && n >= t && (s = r), n = a, r++;
    }
    let o = this.length - t;
    return this.length = t, s > -1 && (this.children.length = s, this.markDirty()), new ze(this.mark, e, o);
  }
  domAtPos(t) {
    return Su(this, t);
  }
  coordsAt(t, e) {
    return ku(this, t, e);
  }
}
function f0(i, t, e) {
  let n = i.nodeValue.length;
  t > n && (t = n);
  let s = t, r = t, o = 0;
  t == 0 && e < 0 || t == n && e >= 0 ? $.chrome || $.gecko || (t ? (s--, o = 1) : r < n && (r++, o = -1)) : e < 0 ? s-- : r < n && r++;
  let l = Dn(i, s, r).getClientRects();
  if (!l.length)
    return null;
  let a = l[(o ? o < 0 : e >= 0) ? 0 : l.length - 1];
  return $.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (h) => h.width) || a), o ? Yr(a, o < 0) : a || null;
}
class tn extends nt {
  static create(t, e, n) {
    return new tn(t, e, n);
  }
  constructor(t, e, n) {
    super(), this.widget = t, this.length = e, this.side = n, this.prevWidget = null;
  }
  split(t) {
    let e = tn.create(this.widget, this.length - t, this.side);
    return this.length -= t, e;
  }
  sync(t) {
    (!this.dom || !this.widget.updateDOM(this.dom, t)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(t, e, n, s, r, o) {
    return n && (!(n instanceof tn) || !this.widget.compare(n.widget) || t > 0 && r <= 0 || e < this.length && o <= 0) ? !1 : (this.length = t + (n ? n.length : 0) + (this.length - e), !0);
  }
  become(t) {
    return t instanceof tn && t.side == this.side && this.widget.constructor == t.widget.constructor ? (this.widget.compare(t.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(t) {
    return this.widget.ignoreEvent(t);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return J.empty;
    let t = this;
    for (; t.parent; )
      t = t.parent;
    let { view: e } = t, n = e && e.state.doc, s = this.posAtStart;
    return n ? n.slice(s, s + this.length) : J.empty;
  }
  domAtPos(t) {
    return (this.length ? t == 0 : this.side > 0) ? Mt.before(this.dom) : Mt.after(this.dom, t == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t, e) {
    let n = this.widget.coordsAt(this.dom, t, e);
    if (n)
      return n;
    let s = this.dom.getClientRects(), r = null;
    if (!s.length)
      return null;
    let o = this.side ? this.side < 0 : t > 0;
    for (let l = o ? s.length - 1 : 0; r = s[l], !(t > 0 ? l == 0 : l == s.length - 1 || r.top < r.bottom); l += o ? -1 : 1)
      ;
    return Yr(r, !o);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class ei extends nt {
  constructor(t) {
    super(), this.side = t;
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(t) {
    return t instanceof ei && t.side == this.side;
  }
  split() {
    return new ei(this.side);
  }
  sync() {
    if (!this.dom) {
      let t = document.createElement("img");
      t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), this.setDOM(t);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(t) {
    return this.side > 0 ? Mt.before(this.dom) : Mt.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return J.empty;
  }
  get isHidden() {
    return !0;
  }
}
pe.prototype.children = tn.prototype.children = ei.prototype.children = ma;
function Su(i, t) {
  let e = i.dom, { children: n } = i, s = 0;
  for (let r = 0; s < n.length; s++) {
    let o = n[s], l = r + o.length;
    if (!(l == r && o.getSide() <= 0)) {
      if (t > r && t < l && o.dom.parentNode == e)
        return o.domAtPos(t - r);
      if (t <= r)
        break;
      r = l;
    }
  }
  for (let r = s; r > 0; r--) {
    let o = n[r - 1];
    if (o.dom.parentNode == e)
      return o.domAtPos(o.length);
  }
  for (let r = s; r < n.length; r++) {
    let o = n[r];
    if (o.dom.parentNode == e)
      return o.domAtPos(0);
  }
  return new Mt(e, 0);
}
function wu(i, t, e) {
  let n, { children: s } = i;
  e > 0 && t instanceof ze && s.length && (n = s[s.length - 1]) instanceof ze && n.mark.eq(t.mark) ? wu(n, t.children[0], e - 1) : (s.push(t), t.setParent(i)), i.length += t.length;
}
function ku(i, t, e) {
  let n = null, s = -1, r = null, o = -1;
  function l(h, c) {
    for (let f = 0, u = 0; f < h.children.length && u <= c; f++) {
      let d = h.children[f], p = u + d.length;
      p >= c && (d.children.length ? l(d, c - u) : (!r || r.isHidden && e > 0) && (p > c || u == p && d.getSide() > 0) ? (r = d, o = c - u) : (u < c || u == p && d.getSide() < 0 && !d.isHidden) && (n = d, s = c - u)), u = p;
    }
  }
  l(i, t);
  let a = (e < 0 ? n : r) || n || r;
  return a ? a.coordsAt(Math.max(0, a == n ? s : o), e) : u0(i);
}
function u0(i) {
  let t = i.dom.lastChild;
  if (!t)
    return i.dom.getBoundingClientRect();
  let e = Qi(t);
  return e[e.length - 1] || null;
}
function Al(i, t) {
  for (let e in i)
    e == "class" && t.class ? t.class += " " + i.class : e == "style" && t.style ? t.style += ";" + i.style : t[e] = i[e];
  return t;
}
const Hh = /* @__PURE__ */ Object.create(null);
function pr(i, t, e) {
  if (i == t)
    return !0;
  i || (i = Hh), t || (t = Hh);
  let n = Object.keys(i), s = Object.keys(t);
  if (n.length - (e && n.indexOf(e) > -1 ? 1 : 0) != s.length - (e && s.indexOf(e) > -1 ? 1 : 0))
    return !1;
  for (let r of n)
    if (r != e && (s.indexOf(r) == -1 || i[r] !== t[r]))
      return !1;
  return !0;
}
function Ol(i, t, e) {
  let n = !1;
  if (t)
    for (let s in t)
      e && s in e || (n = !0, s == "style" ? i.style.cssText = "" : i.removeAttribute(s));
  if (e)
    for (let s in e)
      t && t[s] == e[s] || (n = !0, s == "style" ? i.style.cssText = e[s] : i.setAttribute(s, e[s]));
  return n;
}
function d0(i) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e = 0; e < i.attributes.length; e++) {
    let n = i.attributes[e];
    t[n.name] = n.value;
  }
  return t;
}
class fn {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(t) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(t, e) {
    return !1;
  }
  /**
  @internal
  */
  compare(t) {
    return this == t || this.constructor == t.constructor && this.eq(t);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(t) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(t, e, n) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  @internal
  */
  get editable() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(t) {
  }
}
var Lt = /* @__PURE__ */ function(i) {
  return i[i.Text = 0] = "Text", i[i.WidgetBefore = 1] = "WidgetBefore", i[i.WidgetAfter = 2] = "WidgetAfter", i[i.WidgetRange = 3] = "WidgetRange", i;
}(Lt || (Lt = {}));
class V extends $n {
  constructor(t, e, n, s) {
    super(), this.startSide = t, this.endSide = e, this.widget = n, this.spec = s;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(t) {
    return new os(t);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(t) {
    let e = Math.max(-1e4, Math.min(1e4, t.side || 0)), n = !!t.block;
    return e += n && !t.inlineOrder ? e > 0 ? 3e8 : -4e8 : e > 0 ? 1e8 : -1e8, new an(t, e, e, n, t.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(t) {
    let e = !!t.block, n, s;
    if (t.isBlockGap)
      n = -5e8, s = 4e8;
    else {
      let { start: r, end: o } = Cu(t, e);
      n = (r ? e ? -3e8 : -1 : 5e8) - 1, s = (o ? e ? 2e8 : 1 : -6e8) + 1;
    }
    return new an(t, n, s, e, t.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(t) {
    return new ls(t);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(t, e = !1) {
    return U.of(t, e);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
V.none = U.empty;
class os extends V {
  constructor(t) {
    let { start: e, end: n } = Cu(t);
    super(e ? -1 : 5e8, n ? 1 : -6e8, null, t), this.tagName = t.tagName || "span", this.class = t.class || "", this.attrs = t.attributes || null;
  }
  eq(t) {
    var e, n;
    return this == t || t instanceof os && this.tagName == t.tagName && (this.class || ((e = this.attrs) === null || e === void 0 ? void 0 : e.class)) == (t.class || ((n = t.attrs) === null || n === void 0 ? void 0 : n.class)) && pr(this.attrs, t.attrs, "class");
  }
  range(t, e = t) {
    if (t >= e)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(t, e);
  }
}
os.prototype.point = !1;
class ls extends V {
  constructor(t) {
    super(-2e8, -2e8, null, t);
  }
  eq(t) {
    return t instanceof ls && this.spec.class == t.spec.class && pr(this.spec.attributes, t.spec.attributes);
  }
  range(t, e = t) {
    if (e != t)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(t, e);
  }
}
ls.prototype.mapMode = Rt.TrackBefore;
ls.prototype.point = !0;
class an extends V {
  constructor(t, e, n, s, r, o) {
    super(e, n, r, t), this.block = s, this.isReplace = o, this.mapMode = s ? e <= 0 ? Rt.TrackBefore : Rt.TrackAfter : Rt.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? Lt.WidgetRange : this.startSide <= 0 ? Lt.WidgetBefore : Lt.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(t) {
    return t instanceof an && p0(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
  }
  range(t, e = t) {
    if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && e != t)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(t, e);
  }
}
an.prototype.point = !0;
function Cu(i, t = !1) {
  let { inclusiveStart: e, inclusiveEnd: n } = i;
  return e == null && (e = i.inclusive), n == null && (n = i.inclusive), { start: e ?? t, end: n ?? t };
}
function p0(i, t) {
  return i == t || !!(i && t && i.compare(t));
}
function tr(i, t, e, n = 0) {
  let s = e.length - 1;
  s >= 0 && e[s] + n >= i ? e[s] = Math.max(e[s], t) : e.push(i, t);
}
class dt extends nt {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  // Consumes source
  merge(t, e, n, s, r, o) {
    if (n) {
      if (!(n instanceof dt))
        return !1;
      this.dom || n.transferDOM(this);
    }
    return s && this.setDeco(n ? n.attrs : null), bu(this, t, e, n ? n.children.slice() : [], r, o), !0;
  }
  split(t) {
    let e = new dt();
    if (e.breakAfter = this.breakAfter, this.length == 0)
      return e;
    let { i: n, off: s } = this.childPos(t);
    s && (e.append(this.children[n].split(s), 0), this.children[n].merge(s, this.children[n].length, null, !1, 0, 0), n++);
    for (let r = n; r < this.children.length; r++)
      e.append(this.children[r], 0);
    for (; n > 0 && this.children[n - 1].length == 0; )
      this.children[--n].destroy();
    return this.children.length = n, this.markDirty(), this.length = t, e;
  }
  transferDOM(t) {
    this.dom && (this.markDirty(), t.setDOM(this.dom), t.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(t) {
    pr(this.attrs, t) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t);
  }
  append(t, e) {
    wu(this, t, e);
  }
  // Only called when building a line view in ContentBuilder
  addLineDeco(t) {
    let e = t.spec.attributes, n = t.spec.class;
    e && (this.attrs = Al(e, this.attrs || {})), n && (this.attrs = Al({ class: n }, this.attrs || {}));
  }
  domAtPos(t) {
    return Su(this, t);
  }
  reuseDOM(t) {
    t.nodeName == "DIV" && (this.setDOM(t), this.flags |= 6);
  }
  sync(t, e) {
    var n;
    this.dom ? this.flags & 4 && (uu(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (Ol(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t, e);
    let s = this.dom.lastChild;
    for (; s && nt.get(s) instanceof ze; )
      s = s.lastChild;
    if (!s || !this.length || s.nodeName != "BR" && ((n = nt.get(s)) === null || n === void 0 ? void 0 : n.isEditable) == !1 && (!$.ios || !this.children.some((r) => r instanceof pe))) {
      let r = document.createElement("BR");
      r.cmIgnore = !0, this.dom.appendChild(r);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let t = 0, e;
    for (let n of this.children) {
      if (!(n instanceof pe) || /[^ -~]/.test(n.text))
        return null;
      let s = Qi(n.dom);
      if (s.length != 1)
        return null;
      t += s[0].width, e = s[0].height;
    }
    return t ? {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: t / this.length,
      textHeight: e
    } : null;
  }
  coordsAt(t, e) {
    let n = ku(this, t, e);
    if (!this.children.length && n && this.parent) {
      let { heightOracle: s } = this.parent.view.viewState, r = n.bottom - n.top;
      if (Math.abs(r - s.lineHeight) < 2 && s.textHeight < r) {
        let o = (r - s.textHeight) / 2;
        return { top: n.top + o, bottom: n.bottom - o, left: n.left, right: n.left };
      }
    }
    return n;
  }
  become(t) {
    return t instanceof dt && this.children.length == 0 && t.children.length == 0 && pr(this.attrs, t.attrs) && this.breakAfter == t.breakAfter;
  }
  covers() {
    return !0;
  }
  static find(t, e) {
    for (let n = 0, s = 0; n < t.children.length; n++) {
      let r = t.children[n], o = s + r.length;
      if (o >= e) {
        if (r instanceof dt)
          return r;
        if (o > e)
          break;
      }
      s = o + r.breakAfter;
    }
    return null;
  }
}
class Ve extends nt {
  constructor(t, e, n) {
    super(), this.widget = t, this.length = e, this.deco = n, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(t, e, n, s, r, o) {
    return n && (!(n instanceof Ve) || !this.widget.compare(n.widget) || t > 0 && r <= 0 || e < this.length && o <= 0) ? !1 : (this.length = t + (n ? n.length : 0) + (this.length - e), !0);
  }
  domAtPos(t) {
    return t == 0 ? Mt.before(this.dom) : Mt.after(this.dom, t == this.length);
  }
  split(t) {
    let e = this.length - t;
    this.length = t;
    let n = new Ve(this.widget, e, this.deco);
    return n.breakAfter = this.breakAfter, n;
  }
  get children() {
    return ma;
  }
  sync(t) {
    (!this.dom || !this.widget.updateDOM(this.dom, t)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : J.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(t) {
    return t instanceof Ve && t.widget.constructor == this.widget.constructor ? (t.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, this.deco = t.deco, this.breakAfter = t.breakAfter, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(t) {
    return this.widget.ignoreEvent(t);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  coordsAt(t, e) {
    let n = this.widget.coordsAt(this.dom, t, e);
    return n || (this.widget instanceof Ml ? null : Yr(this.dom.getBoundingClientRect(), this.length ? t == 0 : e <= 0));
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(t) {
    let { startSide: e, endSide: n } = this.deco;
    return e == n ? !1 : t < 0 ? e < 0 : n > 0;
  }
}
class Ml extends fn {
  constructor(t) {
    super(), this.height = t;
  }
  toDOM() {
    let t = document.createElement("div");
    return t.className = "cm-gap", this.updateDOM(t), t;
  }
  eq(t) {
    return t.height == this.height;
  }
  updateDOM(t) {
    return t.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
class Bi {
  constructor(t, e, n, s) {
    this.doc = t, this.pos = e, this.end = n, this.disallowBlockEffectsFor = s, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t.iter(), this.skip = e;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let t = this.content[this.content.length - 1];
    return !(t.breakAfter || t instanceof Ve && t.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new dt()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(t = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(Ts(new ei(-1), t), t.length), this.pendingBuffer = 0);
  }
  addBlockWidget(t) {
    this.flushBuffer(), this.curLine = null, this.content.push(t);
  }
  finish(t) {
    this.pendingBuffer && t <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(t && this.content.length && this.content[this.content.length - 1] instanceof Ve) && this.getLine();
  }
  buildText(t, e, n) {
    for (; t > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: r, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (this.skip = 0, l)
          throw new Error("Ran out of text content when drawing inline views");
        if (o) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, t--;
          continue;
        } else
          this.text = r, this.textOff = 0;
      }
      let s = Math.min(
        this.text.length - this.textOff,
        t,
        512
        /* T.Chunk */
      );
      this.flushBuffer(e.slice(e.length - n)), this.getLine().append(Ts(new pe(this.text.slice(this.textOff, this.textOff + s)), e), n), this.atCursorPos = !0, this.textOff += s, t -= s, n = 0;
    }
  }
  span(t, e, n, s) {
    this.buildText(e - t, n, s), this.pos = e, this.openStart < 0 && (this.openStart = s);
  }
  point(t, e, n, s, r, o) {
    if (this.disallowBlockEffectsFor[o] && n instanceof an) {
      if (n.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (e > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = e - t;
    if (n instanceof an)
      if (n.block)
        n.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new Ve(n.widget || ni.block, l, n));
      else {
        let a = tn.create(n.widget || ni.inline, l, l ? 0 : n.startSide), h = this.atCursorPos && !a.isEditable && r <= s.length && (t < e || n.startSide > 0), c = !a.isEditable && (t < e || r > s.length || n.startSide <= 0), f = this.getLine();
        this.pendingBuffer == 2 && !h && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(s), h && (f.append(Ts(new ei(1), s), r), r = s.length + Math.max(0, r - s.length)), f.append(Ts(a, s), r), this.atCursorPos = c, this.pendingBuffer = c ? t < e || r > s.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = s.slice());
      }
    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(n);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e), this.openStart < 0 && (this.openStart = r);
  }
  static build(t, e, n, s, r) {
    let o = new Bi(t, e, n, r);
    return o.openEnd = U.spans(s, e, n, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function Ts(i, t) {
  for (let e of t)
    i = new ze(e, [i], i.length);
  return i;
}
class ni extends fn {
  constructor(t) {
    super(), this.tag = t;
  }
  eq(t) {
    return t.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(t) {
    return t.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
ni.inline = /* @__PURE__ */ new ni("span");
ni.block = /* @__PURE__ */ new ni("div");
var rt = /* @__PURE__ */ function(i) {
  return i[i.LTR = 0] = "LTR", i[i.RTL = 1] = "RTL", i;
}(rt || (rt = {}));
const Rn = rt.LTR, ya = rt.RTL;
function Au(i) {
  let t = [];
  for (let e = 0; e < i.length; e++)
    t.push(1 << +i[e]);
  return t;
}
const g0 = /* @__PURE__ */ Au("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), m0 = /* @__PURE__ */ Au("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Tl = /* @__PURE__ */ Object.create(null), be = [];
for (let i of ["()", "[]", "{}"]) {
  let t = /* @__PURE__ */ i.charCodeAt(0), e = /* @__PURE__ */ i.charCodeAt(1);
  Tl[t] = e, Tl[e] = -t;
}
function Ou(i) {
  return i <= 247 ? g0[i] : 1424 <= i && i <= 1524 ? 2 : 1536 <= i && i <= 1785 ? m0[i - 1536] : 1774 <= i && i <= 2220 ? 4 : 8192 <= i && i <= 8204 ? 256 : 64336 <= i && i <= 65023 ? 4 : 1;
}
const y0 = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class en {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? ya : Rn;
  }
  /**
  @internal
  */
  constructor(t, e, n) {
    this.from = t, this.to = e, this.level = n;
  }
  /**
  @internal
  */
  side(t, e) {
    return this.dir == e == t ? this.to : this.from;
  }
  /**
  @internal
  */
  forward(t, e) {
    return t == (this.dir == e);
  }
  /**
  @internal
  */
  static find(t, e, n, s) {
    let r = -1;
    for (let o = 0; o < t.length; o++) {
      let l = t[o];
      if (l.from <= e && l.to >= e) {
        if (l.level == n)
          return o;
        (r < 0 || (s != 0 ? s < 0 ? l.from < e : l.to > e : t[r].level > l.level)) && (r = o);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
function Mu(i, t) {
  if (i.length != t.length)
    return !1;
  for (let e = 0; e < i.length; e++) {
    let n = i[e], s = t[e];
    if (n.from != s.from || n.to != s.to || n.direction != s.direction || !Mu(n.inner, s.inner))
      return !1;
  }
  return !0;
}
const et = [];
function b0(i, t, e, n, s) {
  for (let r = 0; r <= n.length; r++) {
    let o = r ? n[r - 1].to : t, l = r < n.length ? n[r].from : e, a = r ? 256 : s;
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = Ou(i.charCodeAt(h));
      u == 512 ? u = c : u == 8 && f == 4 && (u = 16), et[h] = u == 4 ? 2 : u, u & 7 && (f = u), c = u;
    }
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = et[h];
      if (u == 128)
        h < l - 1 && c == et[h + 1] && c & 24 ? u = et[h] = c : et[h] = 256;
      else if (u == 64) {
        let d = h + 1;
        for (; d < l && et[d] == 64; )
          d++;
        let p = h && c == 8 || d < e && et[d] == 8 ? f == 1 ? 1 : 8 : 256;
        for (let m = h; m < d; m++)
          et[m] = p;
        h = d - 1;
      } else u == 8 && f == 1 && (et[h] = 1);
      c = u, u & 7 && (f = u);
    }
  }
}
function v0(i, t, e, n, s) {
  let r = s == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= n.length; o++) {
    let h = o ? n[o - 1].to : t, c = o < n.length ? n[o].from : e;
    for (let f = h, u, d, p; f < c; f++)
      if (d = Tl[u = i.charCodeAt(f)])
        if (d < 0) {
          for (let m = l - 3; m >= 0; m -= 3)
            if (be[m + 1] == -d) {
              let g = be[m + 2], y = g & 2 ? s : g & 4 ? g & 1 ? r : s : 0;
              y && (et[f] = et[be[m]] = y), l = m;
              break;
            }
        } else {
          if (be.length == 189)
            break;
          be[l++] = f, be[l++] = u, be[l++] = a;
        }
      else if ((p = et[f]) == 2 || p == 1) {
        let m = p == s;
        a = m ? 0 : 1;
        for (let g = l - 3; g >= 0; g -= 3) {
          let y = be[g + 2];
          if (y & 2)
            break;
          if (m)
            be[g + 2] |= 2;
          else {
            if (y & 4)
              break;
            be[g + 2] |= 4;
          }
        }
      }
  }
}
function x0(i, t, e, n) {
  for (let s = 0, r = n; s <= e.length; s++) {
    let o = s ? e[s - 1].to : i, l = s < e.length ? e[s].from : t;
    for (let a = o; a < l; ) {
      let h = et[a];
      if (h == 256) {
        let c = a + 1;
        for (; ; )
          if (c == l) {
            if (s == e.length)
              break;
            c = e[s++].to, l = s < e.length ? e[s].from : t;
          } else if (et[c] == 256)
            c++;
          else
            break;
        let f = r == 1, u = (c < t ? et[c] : n) == 1, d = f == u ? f ? 1 : 2 : n;
        for (let p = c, m = s, g = m ? e[m - 1].to : i; p > a; )
          p == g && (p = e[--m].from, g = m ? e[m - 1].to : i), et[--p] = d;
        a = c;
      } else
        r = h, a++;
    }
  }
}
function $l(i, t, e, n, s, r, o) {
  let l = n % 2 ? 2 : 1;
  if (n % 2 == s % 2)
    for (let a = t, h = 0; a < e; ) {
      let c = !0, f = !1;
      if (h == r.length || a < r[h].from) {
        let m = et[a];
        m != l && (c = !1, f = m == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? n : n + 1, p = a;
      t: for (; ; )
        if (h < r.length && p == r[h].from) {
          if (f)
            break t;
          let m = r[h];
          if (!c)
            for (let g = m.to, y = h + 1; ; ) {
              if (g == e)
                break t;
              if (y < r.length && r[y].from == g)
                g = r[y++].to;
              else {
                if (et[g] == l)
                  break t;
                break;
              }
            }
          if (h++, u)
            u.push(m);
          else {
            m.from > a && o.push(new en(a, m.from, d));
            let g = m.direction == Rn != !(d % 2);
            Pl(i, g ? n + 1 : n, s, m.inner, m.from, m.to, o), a = m.to;
          }
          p = m.to;
        } else {
          if (p == e || (c ? et[p] != l : et[p] == l))
            break;
          p++;
        }
      u ? $l(i, a, p, n + 1, s, u, o) : a < p && o.push(new en(a, p, d)), a = p;
    }
  else
    for (let a = e, h = r.length; a > t; ) {
      let c = !0, f = !1;
      if (!h || a > r[h - 1].to) {
        let m = et[a - 1];
        m != l && (c = !1, f = m == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? n : n + 1, p = a;
      t: for (; ; )
        if (h && p == r[h - 1].to) {
          if (f)
            break t;
          let m = r[--h];
          if (!c)
            for (let g = m.from, y = h; ; ) {
              if (g == t)
                break t;
              if (y && r[y - 1].to == g)
                g = r[--y].from;
              else {
                if (et[g - 1] == l)
                  break t;
                break;
              }
            }
          if (u)
            u.push(m);
          else {
            m.to < a && o.push(new en(m.to, a, d));
            let g = m.direction == Rn != !(d % 2);
            Pl(i, g ? n + 1 : n, s, m.inner, m.from, m.to, o), a = m.from;
          }
          p = m.from;
        } else {
          if (p == t || (c ? et[p - 1] != l : et[p - 1] == l))
            break;
          p--;
        }
      u ? $l(i, p, a, n + 1, s, u, o) : p < a && o.push(new en(p, a, d)), a = p;
    }
}
function Pl(i, t, e, n, s, r, o) {
  let l = t % 2 ? 2 : 1;
  b0(i, s, r, n, l), v0(i, s, r, n, l), x0(s, r, n, l), $l(i, s, r, t, e, n, o);
}
function S0(i, t, e) {
  if (!i)
    return [new en(0, 0, t == ya ? 1 : 0)];
  if (t == Rn && !e.length && !y0.test(i))
    return Tu(i.length);
  if (e.length)
    for (; i.length > et.length; )
      et[et.length] = 256;
  let n = [], s = t == Rn ? 0 : 1;
  return Pl(i, s, s, e, 0, i.length, n), n;
}
function Tu(i) {
  return [new en(0, i, 0)];
}
let $u = "";
function w0(i, t, e, n, s) {
  var r;
  let o = n.head - i.from, l = en.find(t, o, (r = n.bidiLevel) !== null && r !== void 0 ? r : -1, n.assoc), a = t[l], h = a.side(s, e);
  if (o == h) {
    let u = l += s ? 1 : -1;
    if (u < 0 || u >= t.length)
      return null;
    a = t[l = u], o = a.side(!s, e), h = a.side(s, e);
  }
  let c = wt(i.text, o, a.forward(s, e));
  (c < a.from || c > a.to) && (c = h), $u = i.text.slice(Math.min(o, c), Math.max(o, c));
  let f = l == (s ? t.length - 1 : 0) ? null : t[l + (s ? 1 : -1)];
  return f && c == h && f.level + (s ? 0 : 1) < a.level ? A.cursor(f.side(!s, e) + i.from, f.forward(s, e) ? 1 : -1, f.level) : A.cursor(c + i.from, a.forward(s, e) ? -1 : 1, a.level);
}
function k0(i, t, e) {
  for (let n = t; n < e; n++) {
    let s = Ou(i.charCodeAt(n));
    if (s == 1)
      return Rn;
    if (s == 2 || s == 4)
      return ya;
  }
  return Rn;
}
const Pu = /* @__PURE__ */ D.define(), Du = /* @__PURE__ */ D.define(), Ru = /* @__PURE__ */ D.define(), Bu = /* @__PURE__ */ D.define(), Dl = /* @__PURE__ */ D.define(), Lu = /* @__PURE__ */ D.define(), Eu = /* @__PURE__ */ D.define(), ba = /* @__PURE__ */ D.define(), va = /* @__PURE__ */ D.define(), Iu = /* @__PURE__ */ D.define({
  combine: (i) => i.some((t) => t)
}), _u = /* @__PURE__ */ D.define({
  combine: (i) => i.some((t) => t)
}), Nu = /* @__PURE__ */ D.define();
class Un {
  constructor(t, e = "nearest", n = "nearest", s = 5, r = 5, o = !1) {
    this.range = t, this.y = e, this.x = n, this.yMargin = s, this.xMargin = r, this.isSnapshot = o;
  }
  map(t) {
    return t.empty ? this : new Un(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(t) {
    return this.range.to <= t.doc.length ? this : new Un(A.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const $s = /* @__PURE__ */ H.define({ map: (i, t) => i.map(t) }), Fu = /* @__PURE__ */ H.define();
function Bt(i, t, e) {
  let n = i.facet(Bu);
  n.length ? n[0](t) : window.onerror ? window.onerror(String(t), e, void 0, void 0, t) : e ? console.error(e + ":", t) : console.error(t);
}
const _e = /* @__PURE__ */ D.define({ combine: (i) => i.length ? i[0] : !0 });
let C0 = 0;
const Si = /* @__PURE__ */ D.define();
class ft {
  constructor(t, e, n, s, r) {
    this.id = t, this.create = e, this.domEventHandlers = n, this.domEventObservers = s, this.extension = r(this);
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(t, e) {
    const { eventHandlers: n, eventObservers: s, provide: r, decorations: o } = e || {};
    return new ft(C0++, t, n, s, (l) => {
      let a = [Si.of(l)];
      return o && a.push(Ki.of((h) => {
        let c = h.plugin(l);
        return c ? o(c) : V.none;
      })), r && a.push(r(l)), a;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(t, e) {
    return ft.define((n) => new t(n), e);
  }
}
class Io {
  constructor(t) {
    this.spec = t, this.mustUpdate = null, this.value = null;
  }
  update(t) {
    if (this.value) {
      if (this.mustUpdate) {
        let e = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(e);
          } catch (n) {
            if (Bt(e.state, n, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(t);
      } catch (e) {
        Bt(t.state, e, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(t) {
    var e;
    if (!((e = this.value) === null || e === void 0) && e.destroy)
      try {
        this.value.destroy();
      } catch (n) {
        Bt(t.state, n, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Vu = /* @__PURE__ */ D.define(), xa = /* @__PURE__ */ D.define(), Ki = /* @__PURE__ */ D.define(), Wu = /* @__PURE__ */ D.define(), Sa = /* @__PURE__ */ D.define(), Hu = /* @__PURE__ */ D.define();
function zh(i, t) {
  let e = i.state.facet(Hu);
  if (!e.length)
    return e;
  let n = e.map((r) => r instanceof Function ? r(i) : r), s = [];
  return U.spans(n, t.from, t.to, {
    point() {
    },
    span(r, o, l, a) {
      let h = r - t.from, c = o - t.from, f = s;
      for (let u = l.length - 1; u >= 0; u--, a--) {
        let d = l[u].spec.bidiIsolate, p;
        if (d == null && (d = k0(t.text, h, c)), a > 0 && f.length && (p = f[f.length - 1]).to == h && p.direction == d)
          p.to = c, f = p.inner;
        else {
          let m = { from: h, to: c, direction: d, inner: [] };
          f.push(m), f = m.inner;
        }
      }
    }
  }), s;
}
const zu = /* @__PURE__ */ D.define();
function wa(i) {
  let t = 0, e = 0, n = 0, s = 0;
  for (let r of i.state.facet(zu)) {
    let o = r(i);
    o && (o.left != null && (t = Math.max(t, o.left)), o.right != null && (e = Math.max(e, o.right)), o.top != null && (n = Math.max(n, o.top)), o.bottom != null && (s = Math.max(s, o.bottom)));
  }
  return { left: t, right: e, top: n, bottom: s };
}
const wi = /* @__PURE__ */ D.define();
class se {
  constructor(t, e, n, s) {
    this.fromA = t, this.toA = e, this.fromB = n, this.toB = s;
  }
  join(t) {
    return new se(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB));
  }
  addToSet(t) {
    let e = t.length, n = this;
    for (; e > 0; e--) {
      let s = t[e - 1];
      if (!(s.fromA > n.toA)) {
        if (s.toA < n.fromA)
          break;
        n = n.join(s), t.splice(e - 1, 1);
      }
    }
    return t.splice(e, 0, n), t;
  }
  static extendWithRanges(t, e) {
    if (e.length == 0)
      return t;
    let n = [];
    for (let s = 0, r = 0, o = 0, l = 0; ; s++) {
      let a = s == t.length ? null : t[s], h = o - l, c = a ? a.fromB : 1e9;
      for (; r < e.length && e[r] < c; ) {
        let f = e[r], u = e[r + 1], d = Math.max(l, f), p = Math.min(c, u);
        if (d <= p && new se(d + h, p + h, d, p).addToSet(n), u > c)
          break;
        r += 2;
      }
      if (!a)
        return n;
      new se(a.fromA, a.toA, a.fromB, a.toB).addToSet(n), o = a.toA, l = a.toB;
    }
  }
}
class gr {
  constructor(t, e, n) {
    this.view = t, this.state = e, this.transactions = n, this.flags = 0, this.startState = t.state, this.changes = mt.empty(this.startState.doc.length);
    for (let r of n)
      this.changes = this.changes.compose(r.changes);
    let s = [];
    this.changes.iterChangedRanges((r, o, l, a) => s.push(new se(r, o, l, a))), this.changedRanges = s;
  }
  /**
  @internal
  */
  static create(t, e, n) {
    return new gr(t, e, n);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Returns true when
  [`viewportChanged`](https://codemirror.net/6/docs/ref/#view.ViewUpdate.viewportChanged) is true
  and the viewport change is not just the result of mapping it in
  response to document changes.
  */
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((t) => t.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
class qh extends nt {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(t) {
    super(), this.view = t, this.decorations = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = V.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(t.contentDOM), this.children = [new dt()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new se(0, 0, 0, t.state.doc.length)], 0, null);
  }
  // Update the document view to a given state.
  update(t) {
    var e;
    let n = t.changedRanges;
    this.minWidth > 0 && n.length && (n.every(({ fromA: h, toA: c }) => c < this.minWidthFrom || h > this.minWidthTo) ? (this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(t);
    let s = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((e = this.domChanged) === null || e === void 0) && e.newSel ? s = this.domChanged.newSel.head : !D0(t.changes, this.hasComposition) && !t.selectionSet && (s = t.state.selection.main.head));
    let r = s > -1 ? O0(this.view, t.changes, s) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: h, to: c } = this.hasComposition;
      n = new se(h, c, t.changes.mapPos(h, -1), t.changes.mapPos(c, 1)).addToSet(n.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, ($.ie || $.chrome) && !r && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.updateDeco(), a = $0(o, l, t.changes);
    return n = se.extendWithRanges(n, a), !(this.flags & 7) && n.length == 0 ? !1 : (this.updateInner(n, t.startState.doc.length, r), t.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(t, e, n) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(t, e, n);
    let { observer: s } = this.view;
    s.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = $.chrome || $.ios ? { node: s.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || s.selectionRange.focusNode != o.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach(
      (o) => o.flags &= -9
      /* ViewFlag.Composition */
    );
    let r = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children)
        o instanceof Ve && o.widget instanceof Ml && r.push(o.dom);
    s.updateGaps(r);
  }
  updateChildren(t, e, n) {
    let s = n ? n.range.addToSet(t.slice()) : t, r = this.childCursor(e);
    for (let o = s.length - 1; ; o--) {
      let l = o >= 0 ? s[o] : null;
      if (!l)
        break;
      let { fromA: a, toA: h, fromB: c, toB: f } = l, u, d, p, m;
      if (n && n.range.fromB < f && n.range.toB > c) {
        let w = Bi.build(this.view.state.doc, c, n.range.fromB, this.decorations, this.dynamicDecorationMap), v = Bi.build(this.view.state.doc, n.range.toB, f, this.decorations, this.dynamicDecorationMap);
        d = w.breakAtStart, p = w.openStart, m = v.openEnd;
        let C = this.compositionView(n);
        v.breakAtStart ? C.breakAfter = 1 : v.content.length && C.merge(C.length, C.length, v.content[0], !1, v.openStart, 0) && (C.breakAfter = v.content[0].breakAfter, v.content.shift()), w.content.length && C.merge(0, 0, w.content[w.content.length - 1], !0, 0, w.openEnd) && w.content.pop(), u = w.content.concat(C).concat(v.content);
      } else
        ({ content: u, breakAtStart: d, openStart: p, openEnd: m } = Bi.build(this.view.state.doc, c, f, this.decorations, this.dynamicDecorationMap));
      let { i: g, off: y } = r.findPos(h, 1), { i: b, off: S } = r.findPos(a, -1);
      yu(this, b, S, g, y, u, d, p, m);
    }
    n && this.fixCompositionDOM(n);
  }
  updateEditContextFormatting(t) {
    this.editContextFormatting = this.editContextFormatting.map(t.changes);
    for (let e of t.transactions)
      for (let n of e.effects)
        n.is(Fu) && (this.editContextFormatting = n.value);
  }
  compositionView(t) {
    let e = new pe(t.text.nodeValue);
    e.flags |= 8;
    for (let { deco: s } of t.marks)
      e = new ze(s, [e], e.length);
    let n = new dt();
    return n.append(e, 0), n;
  }
  fixCompositionDOM(t) {
    let e = (r, o) => {
      o.flags |= 8 | (o.children.some(
        (a) => a.flags & 7
        /* ViewFlag.Dirty */
      ) ? 1 : 0), this.markedForComposition.add(o);
      let l = nt.get(r);
      l && l != o && (l.dom = null), o.setDOM(r);
    }, n = this.childPos(t.range.fromB, 1), s = this.children[n.i];
    e(t.line, s);
    for (let r = t.marks.length - 1; r >= -1; r--)
      n = s.childPos(n.off, 1), s = s.children[n.i], e(r >= 0 ? t.marks[r].node : t.text, s);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(t = !1, e = !1) {
    (t || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let n = this.view.root.activeElement, s = n == this.dom, r = !s && !(this.view.state.facet(_e) || this.dom.tabIndex > -1) && Zs(this.dom, this.view.observer.selectionRange) && !(n && this.dom.contains(n));
    if (!(s || e || r))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), h = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if ($.gecko && l.empty && !this.hasComposition && A0(a)) {
      let f = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(f, a.node.childNodes[a.offset] || null)), a = h = new Mt(f, 0), o = !0;
    }
    let c = this.view.observer.selectionRange;
    (o || !c.focusNode || (!Ri(a.node, a.offset, c.anchorNode, c.anchorOffset) || !Ri(h.node, h.offset, c.focusNode, c.focusOffset)) && !this.suppressWidgetCursorChange(c, l)) && (this.view.observer.ignore(() => {
      $.android && $.chrome && this.dom.contains(c.focusNode) && P0(c.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let f = qi(this.view.root);
      if (f) if (l.empty) {
        if ($.gecko) {
          let u = M0(a.node, a.offset);
          if (u && u != 3) {
            let d = (u == 1 ? pu : gu)(a.node, a.offset);
            d && (a = new Mt(d.node, d.offset));
          }
        }
        f.collapse(a.node, a.offset), l.bidiLevel != null && f.caretBidiLevel !== void 0 && (f.caretBidiLevel = l.bidiLevel);
      } else if (f.extend) {
        f.collapse(a.node, a.offset);
        try {
          f.extend(h.node, h.offset);
        } catch {
        }
      } else {
        let u = document.createRange();
        l.anchor > l.head && ([a, h] = [h, a]), u.setEnd(h.node, h.offset), u.setStart(a.node, a.offset), f.removeAllRanges(), f.addRange(u);
      }
      r && this.view.root.activeElement == this.dom && (this.dom.blur(), n && n.focus());
    }), this.view.observer.setSelectionRange(a, h)), this.impreciseAnchor = a.precise ? null : new Mt(c.anchorNode, c.anchorOffset), this.impreciseHead = h.precise ? null : new Mt(c.focusNode, c.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(t, e) {
    return this.hasComposition && e.empty && Ri(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset) && this.posFromDOM(t.focusNode, t.focusOffset) == e.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: t } = this, e = t.state.selection.main, n = qi(t.root), { anchorNode: s, anchorOffset: r } = t.observer.selectionRange;
    if (!n || !e.empty || !e.assoc || !n.modify)
      return;
    let o = dt.find(this, e.head);
    if (!o)
      return;
    let l = o.posAtStart;
    if (e.head == l || e.head == l + o.length)
      return;
    let a = this.coordsAt(e.head, -1), h = this.coordsAt(e.head, 1);
    if (!a || !h || a.bottom > h.top)
      return;
    let c = this.domAtPos(e.head + e.assoc);
    n.collapse(c.node, c.offset), n.modify("move", e.assoc < 0 ? "forward" : "backward", "lineboundary"), t.observer.readSelectionRange();
    let f = t.observer.selectionRange;
    t.docView.posFromDOM(f.anchorNode, f.anchorOffset) != e.from && n.collapse(s, r);
  }
  // If a position is in/near a block widget, move it to a nearby text
  // line, since we don't want the cursor inside a block widget.
  moveToLine(t) {
    let e = this.dom, n;
    if (t.node != e)
      return t;
    for (let s = t.offset; !n && s < e.childNodes.length; s++) {
      let r = nt.get(e.childNodes[s]);
      r instanceof dt && (n = r.domAtPos(0));
    }
    for (let s = t.offset - 1; !n && s >= 0; s--) {
      let r = nt.get(e.childNodes[s]);
      r instanceof dt && (n = r.domAtPos(r.length));
    }
    return n ? new Mt(n.node, n.offset, !0) : t;
  }
  nearest(t) {
    for (let e = t; e; ) {
      let n = nt.get(e);
      if (n && n.rootView == this)
        return n;
      e = e.parentNode;
    }
    return null;
  }
  posFromDOM(t, e) {
    let n = this.nearest(t);
    if (!n)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return n.localPosFromDOM(t, e) + n.posAtStart;
  }
  domAtPos(t) {
    let { i: e, off: n } = this.childCursor().findPos(t, -1);
    for (; e < this.children.length - 1; ) {
      let s = this.children[e];
      if (n < s.length || s instanceof dt)
        break;
      e++, n = 0;
    }
    return this.children[e].domAtPos(n);
  }
  coordsAt(t, e) {
    let n = null, s = 0;
    for (let r = this.length, o = this.children.length - 1; o >= 0; o--) {
      let l = this.children[o], a = r - l.breakAfter, h = a - l.length;
      if (a < t)
        break;
      if (h <= t && (h < t || l.covers(-1)) && (a > t || l.covers(1)) && (!n || l instanceof dt && !(n instanceof dt && e >= 0)))
        n = l, s = h;
      else if (n && h == t && a == t && l instanceof Ve && Math.abs(e) < 2) {
        if (l.deco.startSide < 0)
          break;
        o && (n = null);
      }
      r = h;
    }
    return n ? n.coordsAt(t - s, e) : null;
  }
  coordsForChar(t) {
    let { i: e, off: n } = this.childPos(t, 1), s = this.children[e];
    if (!(s instanceof dt))
      return null;
    for (; s.children.length; ) {
      let { i: l, off: a } = s.childPos(n, 1);
      for (; ; l++) {
        if (l == s.children.length)
          return null;
        if ((s = s.children[l]).length)
          break;
      }
      n = a;
    }
    if (!(s instanceof pe))
      return null;
    let r = wt(s.text, n);
    if (r == n)
      return null;
    let o = Dn(s.dom, n, r).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || a.top < a.bottom && a.left < a.right)
        return a;
    }
    return null;
  }
  measureVisibleLineHeights(t) {
    let e = [], { from: n, to: s } = t, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == rt.LTR;
    for (let h = 0, c = 0; c < this.children.length; c++) {
      let f = this.children[c], u = h + f.length;
      if (u > s)
        break;
      if (h >= n) {
        let d = f.dom.getBoundingClientRect();
        if (e.push(d.height), o) {
          let p = f.dom.lastChild, m = p ? Qi(p) : [];
          if (m.length) {
            let g = m[m.length - 1], y = a ? g.right - d.left : d.right - g.left;
            y > l && (l = y, this.minWidth = r, this.minWidthFrom = h, this.minWidthTo = u);
          }
        }
      }
      h = u + f.breakAfter;
    }
    return e;
  }
  textDirectionAt(t) {
    let { i: e } = this.childPos(t, 1);
    return getComputedStyle(this.children[e].dom).direction == "rtl" ? rt.RTL : rt.LTR;
  }
  measureTextSize() {
    for (let r of this.children)
      if (r instanceof dt) {
        let o = r.measureTextSize();
        if (o)
          return o;
      }
    let t = document.createElement("div"), e, n, s;
    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(t);
      let r = Qi(t.firstChild)[0];
      e = t.getBoundingClientRect().height, n = r ? r.width / 27 : 7, s = r ? r.height : e, t.remove();
    }), { lineHeight: e, charWidth: n, textHeight: s };
  }
  childCursor(t = this.length) {
    let e = this.children.length;
    return e && (t -= this.children[--e].length), new mu(this.children, t, e);
  }
  computeBlockGapDeco() {
    let t = [], e = this.view.viewState;
    for (let n = 0, s = 0; ; s++) {
      let r = s == e.viewports.length ? null : e.viewports[s], o = r ? r.from - 1 : this.length;
      if (o > n) {
        let l = (e.lineBlockAt(o).bottom - e.lineBlockAt(n).top) / this.view.scaleY;
        t.push(V.replace({
          widget: new Ml(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(n, o));
      }
      if (!r)
        break;
      n = r.to + 1;
    }
    return V.set(t);
  }
  updateDeco() {
    let t = 1, e = this.view.state.facet(Ki).map((r) => (this.dynamicDecorationMap[t++] = typeof r == "function") ? r(this.view) : r), n = !1, s = this.view.state.facet(Wu).map((r, o) => {
      let l = typeof r == "function";
      return l && (n = !0), l ? r(this.view) : r;
    });
    for (s.length && (this.dynamicDecorationMap[t++] = n, e.push(U.join(s))), this.decorations = [
      this.editContextFormatting,
      ...e,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; t < this.decorations.length; )
      this.dynamicDecorationMap[t++] = !1;
    return this.decorations;
  }
  scrollIntoView(t) {
    if (t.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(t.range.head);
      this.view.scrollDOM.scrollTop = h.top - t.yMargin, this.view.scrollDOM.scrollLeft = t.xMargin;
      return;
    }
    for (let h of this.view.state.facet(Nu))
      try {
        if (h(this.view, t.range, t))
          return !0;
      } catch (c) {
        Bt(this.view.state, c, "scroll handler");
      }
    let { range: e } = t, n = this.coordsAt(e.head, e.empty ? e.assoc : e.head > e.anchor ? -1 : 1), s;
    if (!n)
      return;
    !e.empty && (s = this.coordsAt(e.anchor, e.anchor > e.head ? -1 : 1)) && (n = {
      left: Math.min(n.left, s.left),
      top: Math.min(n.top, s.top),
      right: Math.max(n.right, s.right),
      bottom: Math.max(n.bottom, s.bottom)
    });
    let r = wa(this.view), o = {
      left: n.left - r.left,
      top: n.top - r.top,
      right: n.right + r.right,
      bottom: n.bottom + r.bottom
    }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    r0(this.view.scrollDOM, o, e.head < e.anchor ? -1 : 1, t.x, t.y, Math.max(Math.min(t.xMargin, l), -l), Math.max(Math.min(t.yMargin, a), -a), this.view.textDirection == rt.LTR);
  }
}
function A0(i) {
  return i.node.nodeType == 1 && i.node.firstChild && (i.offset == 0 || i.node.childNodes[i.offset - 1].contentEditable == "false") && (i.offset == i.node.childNodes.length || i.node.childNodes[i.offset].contentEditable == "false");
}
function qu(i, t) {
  let e = i.observer.selectionRange;
  if (!e.focusNode)
    return null;
  let n = pu(e.focusNode, e.focusOffset), s = gu(e.focusNode, e.focusOffset), r = n || s;
  if (s && n && s.node != n.node) {
    let l = nt.get(s.node);
    if (!l || l instanceof pe && l.text != s.node.nodeValue)
      r = s;
    else if (i.docView.lastCompositionAfterCursor) {
      let a = nt.get(n.node);
      !a || a instanceof pe && a.text != n.node.nodeValue || (r = s);
    }
  }
  if (i.docView.lastCompositionAfterCursor = r != n, !r)
    return null;
  let o = t - r.offset;
  return { from: o, to: o + r.node.nodeValue.length, node: r.node };
}
function O0(i, t, e) {
  let n = qu(i, e);
  if (!n)
    return null;
  let { node: s, from: r, to: o } = n, l = s.nodeValue;
  if (/[\n\r]/.test(l) || i.state.doc.sliceString(n.from, n.to) != l)
    return null;
  let a = t.invertedDesc, h = new se(a.mapPos(r), a.mapPos(o), r, o), c = [];
  for (let f = s.parentNode; ; f = f.parentNode) {
    let u = nt.get(f);
    if (u instanceof ze)
      c.push({ node: f, deco: u.mark });
    else {
      if (u instanceof dt || f.nodeName == "DIV" && f.parentNode == i.contentDOM)
        return { range: h, text: s, marks: c, line: f };
      if (f != i.contentDOM)
        c.push({ node: f, deco: new os({
          inclusive: !0,
          attributes: d0(f),
          tagName: f.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function M0(i, t) {
  return i.nodeType != 1 ? 0 : (t && i.childNodes[t - 1].contentEditable == "false" ? 1 : 0) | (t < i.childNodes.length && i.childNodes[t].contentEditable == "false" ? 2 : 0);
}
let T0 = class {
  constructor() {
    this.changes = [];
  }
  compareRange(t, e) {
    tr(t, e, this.changes);
  }
  comparePoint(t, e) {
    tr(t, e, this.changes);
  }
  boundChange(t) {
    tr(t, t, this.changes);
  }
};
function $0(i, t, e) {
  let n = new T0();
  return U.compare(i, t, e, n), n.changes;
}
function P0(i, t) {
  for (let e = i; e && e != t; e = e.assignedSlot || e.parentNode)
    if (e.nodeType == 1 && e.contentEditable == "false")
      return !0;
  return !1;
}
function D0(i, t) {
  let e = !1;
  return t && i.iterChangedRanges((n, s) => {
    n < t.to && s > t.from && (e = !0);
  }), e;
}
function R0(i, t, e = 1) {
  let n = i.charCategorizer(t), s = i.doc.lineAt(t), r = t - s.from;
  if (s.length == 0)
    return A.cursor(t);
  r == 0 ? e = 1 : r == s.length && (e = -1);
  let o = r, l = r;
  e < 0 ? o = wt(s.text, r, !1) : l = wt(s.text, r);
  let a = n(s.text.slice(o, l));
  for (; o > 0; ) {
    let h = wt(s.text, o, !1);
    if (n(s.text.slice(h, o)) != a)
      break;
    o = h;
  }
  for (; l < s.length; ) {
    let h = wt(s.text, l);
    if (n(s.text.slice(l, h)) != a)
      break;
    l = h;
  }
  return A.range(o + s.from, l + s.from);
}
function B0(i, t) {
  return t.left > i ? t.left - i : Math.max(0, i - t.right);
}
function L0(i, t) {
  return t.top > i ? t.top - i : Math.max(0, i - t.bottom);
}
function _o(i, t) {
  return i.top < t.bottom - 1 && i.bottom > t.top + 1;
}
function Qh(i, t) {
  return t < i.top ? { top: t, left: i.left, right: i.right, bottom: i.bottom } : i;
}
function Kh(i, t) {
  return t > i.bottom ? { top: i.top, left: i.left, right: i.right, bottom: t } : i;
}
function Rl(i, t, e) {
  let n, s, r, o, l = !1, a, h, c, f;
  for (let p = i.firstChild; p; p = p.nextSibling) {
    let m = Qi(p);
    for (let g = 0; g < m.length; g++) {
      let y = m[g];
      s && _o(s, y) && (y = Qh(Kh(y, s.bottom), s.top));
      let b = B0(t, y), S = L0(e, y);
      if (b == 0 && S == 0)
        return p.nodeType == 3 ? jh(p, t, e) : Rl(p, t, e);
      if (!n || o > S || o == S && r > b) {
        n = p, s = y, r = b, o = S;
        let w = S ? e < y.top ? -1 : 1 : b ? t < y.left ? -1 : 1 : 0;
        l = !w || (w > 0 ? g < m.length - 1 : g > 0);
      }
      b == 0 ? e > y.bottom && (!c || c.bottom < y.bottom) ? (a = p, c = y) : e < y.top && (!f || f.top > y.top) && (h = p, f = y) : c && _o(c, y) ? c = Kh(c, y.bottom) : f && _o(f, y) && (f = Qh(f, y.top));
    }
  }
  if (c && c.bottom >= e ? (n = a, s = c) : f && f.top <= e && (n = h, s = f), !n)
    return { node: i, offset: 0 };
  let u = Math.max(s.left, Math.min(s.right, t));
  if (n.nodeType == 3)
    return jh(n, u, e);
  if (l && n.contentEditable != "false")
    return Rl(n, u, e);
  let d = Array.prototype.indexOf.call(i.childNodes, n) + (t >= (s.left + s.right) / 2 ? 1 : 0);
  return { node: i, offset: d };
}
function jh(i, t, e) {
  let n = i.nodeValue.length, s = -1, r = 1e9, o = 0;
  for (let l = 0; l < n; l++) {
    let a = Dn(i, l, l + 1).getClientRects();
    for (let h = 0; h < a.length; h++) {
      let c = a[h];
      if (c.top == c.bottom)
        continue;
      o || (o = t - c.left);
      let f = (c.top > e ? c.top - e : e - c.bottom) - 1;
      if (c.left - 1 <= t && c.right + 1 >= t && f < r) {
        let u = t >= (c.left + c.right) / 2, d = u;
        if (($.chrome || $.gecko) && Dn(i, l).getBoundingClientRect().left == c.right && (d = !u), f <= 0)
          return { node: i, offset: l + (d ? 1 : 0) };
        s = l + (d ? 1 : 0), r = f;
      }
    }
  }
  return { node: i, offset: s > -1 ? s : o > 0 ? i.nodeValue.length : 0 };
}
function Qu(i, t, e, n = -1) {
  var s, r;
  let o = i.contentDOM.getBoundingClientRect(), l = o.top + i.viewState.paddingTop, a, { docHeight: h } = i.viewState, { x: c, y: f } = t, u = f - l;
  if (u < 0)
    return 0;
  if (u > h)
    return i.state.doc.length;
  for (let w = i.viewState.heightOracle.textHeight / 2, v = !1; a = i.elementAtHeight(u), a.type != Lt.Text; )
    for (; u = n > 0 ? a.bottom + w : a.top - w, !(u >= 0 && u <= h); ) {
      if (v)
        return e ? null : 0;
      v = !0, n = -n;
    }
  f = l + u;
  let d = a.from;
  if (d < i.viewport.from)
    return i.viewport.from == 0 ? 0 : e ? null : Uh(i, o, a, c, f);
  if (d > i.viewport.to)
    return i.viewport.to == i.state.doc.length ? i.state.doc.length : e ? null : Uh(i, o, a, c, f);
  let p = i.dom.ownerDocument, m = i.root.elementFromPoint ? i.root : p, g = m.elementFromPoint(c, f);
  g && !i.contentDOM.contains(g) && (g = null), g || (c = Math.max(o.left + 1, Math.min(o.right - 1, c)), g = m.elementFromPoint(c, f), g && !i.contentDOM.contains(g) && (g = null));
  let y, b = -1;
  if (g && ((s = i.docView.nearest(g)) === null || s === void 0 ? void 0 : s.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let w = p.caretPositionFromPoint(c, f);
      w && ({ offsetNode: y, offset: b } = w);
    } else if (p.caretRangeFromPoint) {
      let w = p.caretRangeFromPoint(c, f);
      w && ({ startContainer: y, startOffset: b } = w, (!i.contentDOM.contains(y) || $.safari && E0(y, b, c) || $.chrome && I0(y, b, c)) && (y = void 0));
    }
    y && (b = Math.min(De(y), b));
  }
  if (!y || !i.docView.dom.contains(y)) {
    let w = dt.find(i.docView, d);
    if (!w)
      return u > a.top + a.height / 2 ? a.to : a.from;
    ({ node: y, offset: b } = Rl(w.dom, c, f));
  }
  let S = i.docView.nearest(y);
  if (!S)
    return null;
  if (S.isWidget && ((r = S.dom) === null || r === void 0 ? void 0 : r.nodeType) == 1) {
    let w = S.dom.getBoundingClientRect();
    return t.y < w.top || t.y <= w.bottom && t.x <= (w.left + w.right) / 2 ? S.posAtStart : S.posAtEnd;
  } else
    return S.localPosFromDOM(y, b) + S.posAtStart;
}
function Uh(i, t, e, n, s) {
  let r = Math.round((n - t.left) * i.defaultCharacterWidth);
  if (i.lineWrapping && e.height > i.defaultLineHeight * 1.5) {
    let l = i.viewState.heightOracle.textHeight, a = Math.floor((s - e.top - (i.defaultLineHeight - l) * 0.5) / l);
    r += a * i.viewState.heightOracle.lineLength;
  }
  let o = i.state.sliceDoc(e.from, e.to);
  return e.from + bl(o, r, i.state.tabSize);
}
function E0(i, t, e) {
  let n;
  if (i.nodeType != 3 || t != (n = i.nodeValue.length))
    return !1;
  for (let s = i.nextSibling; s; s = s.nextSibling)
    if (s.nodeType != 1 || s.nodeName != "BR")
      return !1;
  return Dn(i, n - 1, n).getBoundingClientRect().left > e;
}
function I0(i, t, e) {
  if (t != 0)
    return !1;
  for (let s = i; ; ) {
    let r = s.parentNode;
    if (!r || r.nodeType != 1 || r.firstChild != s)
      return !1;
    if (r.classList.contains("cm-line"))
      break;
    s = r;
  }
  let n = i.nodeType == 1 ? i.getBoundingClientRect() : Dn(i, 0, Math.max(i.nodeValue.length, 1)).getBoundingClientRect();
  return e - n.left > 5;
}
function Bl(i, t) {
  let e = i.lineBlockAt(t);
  if (Array.isArray(e.type)) {
    for (let n of e.type)
      if (n.to > t || n.to == t && (n.to == e.to || n.type == Lt.Text))
        return n;
  }
  return e;
}
function _0(i, t, e, n) {
  let s = Bl(i, t.head), r = !n || s.type != Lt.Text || !(i.lineWrapping || s.widgetLineBreaks) ? null : i.coordsAtPos(t.assoc < 0 && t.head > s.from ? t.head - 1 : t.head);
  if (r) {
    let o = i.dom.getBoundingClientRect(), l = i.textDirectionAt(s.from), a = i.posAtCoords({
      x: e == (l == rt.LTR) ? o.right - 1 : o.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (a != null)
      return A.cursor(a, e ? -1 : 1);
  }
  return A.cursor(e ? s.to : s.from, e ? -1 : 1);
}
function Jh(i, t, e, n) {
  let s = i.state.doc.lineAt(t.head), r = i.bidiSpans(s), o = i.textDirectionAt(s.from);
  for (let l = t, a = null; ; ) {
    let h = w0(s, r, o, l, e), c = $u;
    if (!h) {
      if (s.number == (e ? i.state.doc.lines : 1))
        return l;
      c = `
`, s = i.state.doc.line(s.number + (e ? 1 : -1)), r = i.bidiSpans(s), h = i.visualLineSide(s, !e);
    }
    if (a) {
      if (!a(c))
        return l;
    } else {
      if (!n)
        return h;
      a = n(c);
    }
    l = h;
  }
}
function N0(i, t, e) {
  let n = i.state.charCategorizer(t), s = n(e);
  return (r) => {
    let o = n(r);
    return s == lt.Space && (s = o), s == o;
  };
}
function F0(i, t, e, n) {
  let s = t.head, r = e ? 1 : -1;
  if (s == (e ? i.state.doc.length : 0))
    return A.cursor(s, t.assoc);
  let o = t.goalColumn, l, a = i.contentDOM.getBoundingClientRect(), h = i.coordsAtPos(s, t.assoc || -1), c = i.documentTop;
  if (h)
    o == null && (o = h.left - a.left), l = r < 0 ? h.top : h.bottom;
  else {
    let d = i.viewState.lineBlockAt(s);
    o == null && (o = Math.min(a.right - a.left, i.defaultCharacterWidth * (s - d.from))), l = (r < 0 ? d.top : d.bottom) + c;
  }
  let f = a.left + o, u = n ?? i.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (u + d) * r, m = Qu(i, { x: f, y: p }, !1, r);
    if (p < a.top || p > a.bottom || (r < 0 ? m < s : m > s)) {
      let g = i.docView.coordsForChar(m), y = !g || p < g.top ? -1 : 1;
      return A.cursor(m, y, void 0, o);
    }
  }
}
function er(i, t, e) {
  for (; ; ) {
    let n = 0;
    for (let s of i)
      s.between(t - 1, t + 1, (r, o, l) => {
        if (t > r && t < o) {
          let a = n || e || (t - r < o - t ? -1 : 1);
          t = a < 0 ? r : o, n = a;
        }
      });
    if (!n)
      return t;
  }
}
function No(i, t, e) {
  let n = er(i.state.facet(Sa).map((s) => s(i)), e.from, t.head > e.from ? -1 : 1);
  return n == e.from ? e : A.cursor(n, n < e.from ? 1 : -1);
}
const ki = "￿";
class V0 {
  constructor(t, e) {
    this.points = t, this.text = "", this.lineSeparator = e.facet(X.lineSeparator);
  }
  append(t) {
    this.text += t;
  }
  lineBreak() {
    this.text += ki;
  }
  readRange(t, e) {
    if (!t)
      return this;
    let n = t.parentNode;
    for (let s = t; ; ) {
      this.findPointBefore(n, s);
      let r = this.text.length;
      this.readNode(s);
      let o = s.nextSibling;
      if (o == e)
        break;
      let l = nt.get(s), a = nt.get(o);
      (l && a ? l.breakAfter : (l ? l.breakAfter : dr(s)) || dr(o) && (s.nodeName != "BR" || s.cmIgnore) && this.text.length > r) && this.lineBreak(), s = o;
    }
    return this.findPointBefore(n, e), this;
  }
  readTextNode(t) {
    let e = t.nodeValue;
    for (let n of this.points)
      n.node == t && (n.pos = this.text.length + Math.min(n.offset, e.length));
    for (let n = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, o = 1, l;
      if (this.lineSeparator ? (r = e.indexOf(this.lineSeparator, n), o = this.lineSeparator.length) : (l = s.exec(e)) && (r = l.index, o = l[0].length), this.append(e.slice(n, r < 0 ? e.length : r)), r < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == t && a.pos > this.text.length && (a.pos -= o - 1);
      n = r + o;
    }
  }
  readNode(t) {
    if (t.cmIgnore)
      return;
    let e = nt.get(t), n = e && e.overrideDOMText;
    if (n != null) {
      this.findPointInside(t, n.length);
      for (let s = n.iter(); !s.next().done; )
        s.lineBreak ? this.lineBreak() : this.append(s.value);
    } else t.nodeType == 3 ? this.readTextNode(t) : t.nodeName == "BR" ? t.nextSibling && this.lineBreak() : t.nodeType == 1 && this.readRange(t.firstChild, null);
  }
  findPointBefore(t, e) {
    for (let n of this.points)
      n.node == t && t.childNodes[n.offset] == e && (n.pos = this.text.length);
  }
  findPointInside(t, e) {
    for (let n of this.points)
      (t.nodeType == 3 ? n.node == t : t.contains(n.node)) && (n.pos = this.text.length + (W0(t, n.node, n.offset) ? e : 0));
  }
}
function W0(i, t, e) {
  for (; ; ) {
    if (!t || e < De(t))
      return !1;
    if (t == i)
      return !0;
    e = Pn(t) + 1, t = t.parentNode;
  }
}
class Gh {
  constructor(t, e) {
    this.node = t, this.offset = e, this.pos = -1;
  }
}
class H0 {
  constructor(t, e, n, s) {
    this.typeOver = s, this.bounds = null, this.text = "", this.domChanged = e > -1;
    let { impreciseHead: r, impreciseAnchor: o } = t.docView;
    if (t.state.readOnly && e > -1)
      this.newSel = null;
    else if (e > -1 && (this.bounds = t.docView.domBoundsAround(e, n, 0))) {
      let l = r || o ? [] : Q0(t), a = new V0(l, t.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = K0(l, this.bounds.from);
    } else {
      let l = t.observer.selectionRange, a = r && r.node == l.focusNode && r.offset == l.focusOffset || !Sl(t.contentDOM, l.focusNode) ? t.state.selection.main.head : t.docView.posFromDOM(l.focusNode, l.focusOffset), h = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !Sl(t.contentDOM, l.anchorNode) ? t.state.selection.main.anchor : t.docView.posFromDOM(l.anchorNode, l.anchorOffset), c = t.viewport;
      if (($.ios || $.chrome) && t.state.selection.main.empty && a != h && (c.from > 0 || c.to < t.state.doc.length)) {
        let f = Math.min(a, h), u = Math.max(a, h), d = c.from - f, p = c.to - u;
        (d == 0 || d == 1 || f == 0) && (p == 0 || p == -1 || u == t.state.doc.length) && (a = 0, h = t.state.doc.length);
      }
      this.newSel = A.single(h, a);
    }
  }
}
function Ku(i, t) {
  let e, { newSel: n } = t, s = i.state.selection.main, r = i.inputState.lastKeyTime > Date.now() - 100 ? i.inputState.lastKeyCode : -1;
  if (t.bounds) {
    let { from: o, to: l } = t.bounds, a = s.from, h = null;
    (r === 8 || $.android && t.text.length < l - o) && (a = s.to, h = "end");
    let c = q0(i.state.doc.sliceString(o, l, ki), t.text, a - o, h);
    c && ($.chrome && r == 13 && c.toB == c.from + 2 && t.text.slice(c.from, c.toB) == ki + ki && c.toB--, e = {
      from: o + c.from,
      to: o + c.toA,
      insert: J.of(t.text.slice(c.from, c.toB).split(ki))
    });
  } else n && (!i.hasFocus && i.state.facet(_e) || n.main.eq(s)) && (n = null);
  if (!e && !n)
    return !1;
  if (!e && t.typeOver && !s.empty && n && n.main.empty ? e = { from: s.from, to: s.to, insert: i.state.doc.slice(s.from, s.to) } : ($.mac || $.android) && e && e.from == e.to && e.from == s.head - 1 && /^\. ?$/.test(e.insert.toString()) && i.contentDOM.getAttribute("autocorrect") == "off" ? (n && e.insert.length == 2 && (n = A.single(n.main.anchor - 1, n.main.head - 1)), e = { from: e.from, to: e.to, insert: J.of([e.insert.toString().replace(".", " ")]) }) : e && e.from >= s.from && e.to <= s.to && (e.from != s.from || e.to != s.to) && s.to - s.from - (e.to - e.from) <= 4 ? e = {
    from: s.from,
    to: s.to,
    insert: i.state.doc.slice(s.from, e.from).append(e.insert).append(i.state.doc.slice(e.to, s.to))
  } : $.chrome && e && e.from == e.to && e.from == s.head && e.insert.toString() == `
 ` && i.lineWrapping && (n && (n = A.single(n.main.anchor - 1, n.main.head - 1)), e = { from: s.from, to: s.to, insert: J.of([" "]) }), e)
    return ka(i, e, n, r);
  if (n && !n.main.eq(s)) {
    let o = !1, l = "select";
    return i.inputState.lastSelectionTime > Date.now() - 50 && (i.inputState.lastSelectionOrigin == "select" && (o = !0), l = i.inputState.lastSelectionOrigin), i.dispatch({ selection: n, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function ka(i, t, e, n = -1) {
  if ($.ios && i.inputState.flushIOSKey(t))
    return !0;
  let s = i.state.selection.main;
  if ($.android && (t.to == s.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (t.from == s.from || t.from == s.from - 1 && i.state.sliceDoc(t.from, s.from) == " ") && t.insert.length == 1 && t.insert.lines == 2 && jn(i.contentDOM, "Enter", 13) || (t.from == s.from - 1 && t.to == s.to && t.insert.length == 0 || n == 8 && t.insert.length < t.to - t.from && t.to > s.head) && jn(i.contentDOM, "Backspace", 8) || t.from == s.from && t.to == s.to + 1 && t.insert.length == 0 && jn(i.contentDOM, "Delete", 46)))
    return !0;
  let r = t.insert.toString();
  i.inputState.composing >= 0 && i.inputState.composing++;
  let o, l = () => o || (o = z0(i, t, e));
  return i.state.facet(Lu).some((a) => a(i, t.from, t.to, r, l)) || i.dispatch(l()), !0;
}
function z0(i, t, e) {
  let n, s = i.state, r = s.selection.main;
  if (t.from >= r.from && t.to <= r.to && t.to - t.from >= (r.to - r.from) / 3 && (!e || e.main.empty && e.main.from == t.from + t.insert.length) && i.inputState.composing < 0) {
    let l = r.from < t.from ? s.sliceDoc(r.from, t.from) : "", a = r.to > t.to ? s.sliceDoc(t.to, r.to) : "";
    n = s.replaceSelection(i.state.toText(l + t.insert.sliceString(0, void 0, i.state.lineBreak) + a));
  } else {
    let l = s.changes(t), a = e && e.main.to <= l.newLength ? e.main : void 0;
    if (s.selection.ranges.length > 1 && i.inputState.composing >= 0 && t.to <= r.to && t.to >= r.to - 10) {
      let h = i.state.sliceDoc(t.from, t.to), c, f = e && qu(i, e.main.head);
      if (f) {
        let p = t.insert.length - (t.to - t.from);
        c = { from: f.from, to: f.to - p };
      } else
        c = i.state.doc.lineAt(r.head);
      let u = r.to - t.to, d = r.to - r.from;
      n = s.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to)
          return { changes: l, range: a || p.map(l) };
        let m = p.to - u, g = m - h.length;
        if (p.to - p.from != d || i.state.sliceDoc(g, m) != h || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        p.to >= c.from && p.from <= c.to)
          return { range: p };
        let y = s.changes({ from: g, to: m, insert: t.insert }), b = p.to - r.to;
        return {
          changes: y,
          range: a ? A.range(Math.max(0, a.anchor + b), Math.max(0, a.head + b)) : p.map(y)
        };
      });
    } else
      n = {
        changes: l,
        selection: a && s.selection.replaceRange(a)
      };
  }
  let o = "input.type";
  return (i.composing || i.inputState.compositionPendingChange && i.inputState.compositionEndedAt > Date.now() - 50) && (i.inputState.compositionPendingChange = !1, o += ".compose", i.inputState.compositionFirstChange && (o += ".start", i.inputState.compositionFirstChange = !1)), s.update(n, { userEvent: o, scrollIntoView: !0 });
}
function q0(i, t, e, n) {
  let s = Math.min(i.length, t.length), r = 0;
  for (; r < s && i.charCodeAt(r) == t.charCodeAt(r); )
    r++;
  if (r == s && i.length == t.length)
    return null;
  let o = i.length, l = t.length;
  for (; o > 0 && l > 0 && i.charCodeAt(o - 1) == t.charCodeAt(l - 1); )
    o--, l--;
  if (n == "end") {
    let a = Math.max(0, r - Math.min(o, l));
    e -= o + a - r;
  }
  if (o < r && i.length < t.length) {
    let a = e <= r && e >= o ? r - e : 0;
    r -= a, l = r + (l - o), o = r;
  } else if (l < r) {
    let a = e <= r && e >= l ? r - e : 0;
    r -= a, o = r + (o - l), l = r;
  }
  return { from: r, toA: o, toB: l };
}
function Q0(i) {
  let t = [];
  if (i.root.activeElement != i.contentDOM)
    return t;
  let { anchorNode: e, anchorOffset: n, focusNode: s, focusOffset: r } = i.observer.selectionRange;
  return e && (t.push(new Gh(e, n)), (s != e || r != n) && t.push(new Gh(s, r))), t;
}
function K0(i, t) {
  if (i.length == 0)
    return null;
  let e = i[0].pos, n = i.length == 2 ? i[1].pos : e;
  return e > -1 && n > -1 ? A.single(e + t, n + t) : null;
}
class j0 {
  setSelectionOrigin(t) {
    this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now();
  }
  constructor(t) {
    this.view = t, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t.hasFocus, $.safari && t.contentDOM.addEventListener("input", () => null), $.gecko && h1(t.contentDOM.ownerDocument);
  }
  handleEvent(t) {
    !e1(this.view, t) || this.ignoreDuringComposition(t) || t.type == "keydown" && this.keydown(t) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(t.type, t)) : this.runHandlers(t.type, t));
  }
  runHandlers(t, e) {
    let n = this.handlers[t];
    if (n) {
      for (let s of n.observers)
        s(this.view, e);
      for (let s of n.handlers) {
        if (e.defaultPrevented)
          break;
        if (s(this.view, e)) {
          e.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(t) {
    let e = U0(t), n = this.handlers, s = this.view.contentDOM;
    for (let r in e)
      if (r != "scroll") {
        let o = !e[r].handlers.length, l = n[r];
        l && o != !l.handlers.length && (s.removeEventListener(r, this.handleEvent), l = null), l || s.addEventListener(r, this.handleEvent, { passive: o });
      }
    for (let r in n)
      r != "scroll" && !e[r] && s.removeEventListener(r, this.handleEvent);
    this.handlers = e;
  }
  keydown(t) {
    if (this.lastKeyCode = t.keyCode, this.lastKeyTime = Date.now(), t.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && t.keyCode != 27 && Uu.indexOf(t.keyCode) < 0 && (this.tabFocusMode = -1), $.android && $.chrome && !t.synthetic && (t.keyCode == 13 || t.keyCode == 8))
      return this.view.observer.delayAndroidKey(t.key, t.keyCode), !0;
    let e;
    return $.ios && !t.synthetic && !t.altKey && !t.metaKey && ((e = ju.find((n) => n.keyCode == t.keyCode)) && !t.ctrlKey || J0.indexOf(t.key) > -1 && t.ctrlKey && !t.shiftKey) ? (this.pendingIOSKey = e || t, setTimeout(() => this.flushIOSKey(), 250), !0) : (t.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(t) {
    let e = this.pendingIOSKey;
    return !e || e.key == "Enter" && t && t.from < t.to && /^\S+$/.test(t.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, jn(this.view.contentDOM, e.key, e.keyCode, e instanceof KeyboardEvent ? e : void 0));
  }
  ignoreDuringComposition(t) {
    return /^key/.test(t.type) ? this.composing > 0 ? !0 : $.safari && !$.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
  }
  startMouseSelection(t) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t;
  }
  update(t) {
    this.view.observer.update(t), this.mouseSelection && this.mouseSelection.update(t), this.draggedContent && t.docChanged && (this.draggedContent = this.draggedContent.map(t.changes)), t.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function Xh(i, t) {
  return (e, n) => {
    try {
      return t.call(i, n, e);
    } catch (s) {
      Bt(e.state, s);
    }
  };
}
function U0(i) {
  let t = /* @__PURE__ */ Object.create(null);
  function e(n) {
    return t[n] || (t[n] = { observers: [], handlers: [] });
  }
  for (let n of i) {
    let s = n.spec;
    if (s && s.domEventHandlers)
      for (let r in s.domEventHandlers) {
        let o = s.domEventHandlers[r];
        o && e(r).handlers.push(Xh(n.value, o));
      }
    if (s && s.domEventObservers)
      for (let r in s.domEventObservers) {
        let o = s.domEventObservers[r];
        o && e(r).observers.push(Xh(n.value, o));
      }
  }
  for (let n in ge)
    e(n).handlers.push(ge[n]);
  for (let n in oe)
    e(n).observers.push(oe[n]);
  return t;
}
const ju = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], J0 = "dthko", Uu = [16, 17, 18, 20, 91, 92, 224, 225], Ps = 6;
function Ds(i) {
  return Math.max(0, i) * 0.7 + 8;
}
function G0(i, t) {
  return Math.max(Math.abs(i.clientX - t.clientX), Math.abs(i.clientY - t.clientY));
}
class X0 {
  constructor(t, e, n, s) {
    this.view = t, this.startEvent = e, this.style = n, this.mustSelect = s, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = e, this.scrollParents = o0(t.contentDOM), this.atoms = t.state.facet(Sa).map((o) => o(t));
    let r = t.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(X.allowMultipleSelections) && Y0(t, e), this.dragging = t1(t, e) && Xu(e) == 1 ? null : !1;
  }
  start(t) {
    this.dragging === !1 && this.select(t);
  }
  move(t) {
    if (t.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && G0(this.startEvent, t) < 10)
      return;
    this.select(this.lastEvent = t);
    let e = 0, n = 0, s = 0, r = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: s, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: r, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = wa(this.view);
    t.clientX - a.left <= s + Ps ? e = -Ds(s - t.clientX) : t.clientX + a.right >= o - Ps && (e = Ds(t.clientX - o)), t.clientY - a.top <= r + Ps ? n = -Ds(r - t.clientY) : t.clientY + a.bottom >= l - Ps && (n = Ds(t.clientY - l)), this.setScrollSpeed(e, n);
  }
  up(t) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || t.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let t = this.view.contentDOM.ownerDocument;
    t.removeEventListener("mousemove", this.move), t.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(t, e) {
    this.scrollSpeed = { x: t, y: e }, t || e ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: t, y: e } = this.scrollSpeed;
    t && this.scrollParents.x && (this.scrollParents.x.scrollLeft += t, t = 0), e && this.scrollParents.y && (this.scrollParents.y.scrollTop += e, e = 0), (t || e) && this.view.win.scrollBy(t, e), this.dragging === !1 && this.select(this.lastEvent);
  }
  skipAtoms(t) {
    let e = null;
    for (let n = 0; n < t.ranges.length; n++) {
      let s = t.ranges[n], r = null;
      if (s.empty) {
        let o = er(this.atoms, s.from, 0);
        o != s.from && (r = A.cursor(o, -1));
      } else {
        let o = er(this.atoms, s.from, -1), l = er(this.atoms, s.to, 1);
        (o != s.from || l != s.to) && (r = A.range(s.from == s.anchor ? o : l, s.from == s.head ? o : l));
      }
      r && (e || (e = t.ranges.slice()), e[n] = r);
    }
    return e ? A.create(e, t.mainIndex) : t;
  }
  select(t) {
    let { view: e } = this, n = this.skipAtoms(this.style.get(t, this.extend, this.multiple));
    (this.mustSelect || !n.eq(e.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: n,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(t) {
    t.transactions.some((e) => e.isUserEvent("input.type")) ? this.destroy() : this.style.update(t) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function Y0(i, t) {
  let e = i.state.facet(Pu);
  return e.length ? e[0](t) : $.mac ? t.metaKey : t.ctrlKey;
}
function Z0(i, t) {
  let e = i.state.facet(Du);
  return e.length ? e[0](t) : $.mac ? !t.altKey : !t.ctrlKey;
}
function t1(i, t) {
  let { main: e } = i.state.selection;
  if (e.empty)
    return !1;
  let n = qi(i.root);
  if (!n || n.rangeCount == 0)
    return !0;
  let s = n.getRangeAt(0).getClientRects();
  for (let r = 0; r < s.length; r++) {
    let o = s[r];
    if (o.left <= t.clientX && o.right >= t.clientX && o.top <= t.clientY && o.bottom >= t.clientY)
      return !0;
  }
  return !1;
}
function e1(i, t) {
  if (!t.bubbles)
    return !0;
  if (t.defaultPrevented)
    return !1;
  for (let e = t.target, n; e != i.contentDOM; e = e.parentNode)
    if (!e || e.nodeType == 11 || (n = nt.get(e)) && n.ignoreEvent(t))
      return !1;
  return !0;
}
const ge = /* @__PURE__ */ Object.create(null), oe = /* @__PURE__ */ Object.create(null), Ju = $.ie && $.ie_version < 15 || $.ios && $.webkit_version < 604;
function n1(i) {
  let t = i.dom.parentNode;
  if (!t)
    return;
  let e = t.appendChild(document.createElement("textarea"));
  e.style.cssText = "position: fixed; left: -10000px; top: 10px", e.focus(), setTimeout(() => {
    i.focus(), e.remove(), Gu(i, e.value);
  }, 50);
}
function to(i, t, e) {
  for (let n of i.facet(t))
    e = n(e, i);
  return e;
}
function Gu(i, t) {
  t = to(i.state, ba, t);
  let { state: e } = i, n, s = 1, r = e.toText(t), o = r.lines == e.selection.ranges.length;
  if (Ll != null && e.selection.ranges.every((a) => a.empty) && Ll == r.toString()) {
    let a = -1;
    n = e.changeByRange((h) => {
      let c = e.doc.lineAt(h.from);
      if (c.from == a)
        return { range: h };
      a = c.from;
      let f = e.toText((o ? r.line(s++).text : t) + e.lineBreak);
      return {
        changes: { from: c.from, insert: f },
        range: A.cursor(h.from + f.length)
      };
    });
  } else o ? n = e.changeByRange((a) => {
    let h = r.line(s++);
    return {
      changes: { from: a.from, to: a.to, insert: h.text },
      range: A.cursor(a.from + h.length)
    };
  }) : n = e.replaceSelection(r);
  i.dispatch(n, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
oe.scroll = (i) => {
  i.inputState.lastScrollTop = i.scrollDOM.scrollTop, i.inputState.lastScrollLeft = i.scrollDOM.scrollLeft;
};
ge.keydown = (i, t) => (i.inputState.setSelectionOrigin("select"), t.keyCode == 27 && i.inputState.tabFocusMode != 0 && (i.inputState.tabFocusMode = Date.now() + 2e3), !1);
oe.touchstart = (i, t) => {
  i.inputState.lastTouchTime = Date.now(), i.inputState.setSelectionOrigin("select.pointer");
};
oe.touchmove = (i) => {
  i.inputState.setSelectionOrigin("select.pointer");
};
ge.mousedown = (i, t) => {
  if (i.observer.flush(), i.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let e = null;
  for (let n of i.state.facet(Ru))
    if (e = n(i, t), e)
      break;
  if (!e && t.button == 0 && (e = r1(i, t)), e) {
    let n = !i.hasFocus;
    i.inputState.startMouseSelection(new X0(i, t, e, n)), n && i.observer.ignore(() => {
      fu(i.contentDOM);
      let r = i.root.activeElement;
      r && !r.contains(i.contentDOM) && r.blur();
    });
    let s = i.inputState.mouseSelection;
    if (s)
      return s.start(t), s.dragging === !1;
  }
  return !1;
};
function Yh(i, t, e, n) {
  if (n == 1)
    return A.cursor(t, e);
  if (n == 2)
    return R0(i.state, t, e);
  {
    let s = dt.find(i.docView, t), r = i.state.doc.lineAt(s ? s.posAtEnd : t), o = s ? s.posAtStart : r.from, l = s ? s.posAtEnd : r.to;
    return l < i.state.doc.length && l == r.to && l++, A.range(o, l);
  }
}
let Zh = (i, t, e) => t >= e.top && t <= e.bottom && i >= e.left && i <= e.right;
function i1(i, t, e, n) {
  let s = dt.find(i.docView, t);
  if (!s)
    return 1;
  let r = t - s.posAtStart;
  if (r == 0)
    return 1;
  if (r == s.length)
    return -1;
  let o = s.coordsAt(r, -1);
  if (o && Zh(e, n, o))
    return -1;
  let l = s.coordsAt(r, 1);
  return l && Zh(e, n, l) ? 1 : o && o.bottom >= n ? -1 : 1;
}
function tc(i, t) {
  let e = i.posAtCoords({ x: t.clientX, y: t.clientY }, !1);
  return { pos: e, bias: i1(i, e, t.clientX, t.clientY) };
}
const s1 = $.ie && $.ie_version <= 11;
let ec = null, nc = 0, ic = 0;
function Xu(i) {
  if (!s1)
    return i.detail;
  let t = ec, e = ic;
  return ec = i, ic = Date.now(), nc = !t || e > Date.now() - 400 && Math.abs(t.clientX - i.clientX) < 2 && Math.abs(t.clientY - i.clientY) < 2 ? (nc + 1) % 3 : 1;
}
function r1(i, t) {
  let e = tc(i, t), n = Xu(t), s = i.state.selection;
  return {
    update(r) {
      r.docChanged && (e.pos = r.changes.mapPos(e.pos), s = s.map(r.changes));
    },
    get(r, o, l) {
      let a = tc(i, r), h, c = Yh(i, a.pos, a.bias, n);
      if (e.pos != a.pos && !o) {
        let f = Yh(i, e.pos, e.bias, n), u = Math.min(f.from, c.from), d = Math.max(f.to, c.to);
        c = u < c.from ? A.range(u, d) : A.range(d, u);
      }
      return o ? s.replaceRange(s.main.extend(c.from, c.to)) : l && n == 1 && s.ranges.length > 1 && (h = o1(s, a.pos)) ? h : l ? s.addRange(c) : A.create([c]);
    }
  };
}
function o1(i, t) {
  for (let e = 0; e < i.ranges.length; e++) {
    let { from: n, to: s } = i.ranges[e];
    if (n <= t && s >= t)
      return A.create(i.ranges.slice(0, e).concat(i.ranges.slice(e + 1)), i.mainIndex == e ? 0 : i.mainIndex - (i.mainIndex > e ? 1 : 0));
  }
  return null;
}
ge.dragstart = (i, t) => {
  let { selection: { main: e } } = i.state;
  if (t.target.draggable) {
    let s = i.docView.nearest(t.target);
    if (s && s.isWidget) {
      let r = s.posAtStart, o = r + s.length;
      (r >= e.to || o <= e.from) && (e = A.range(r, o));
    }
  }
  let { inputState: n } = i;
  return n.mouseSelection && (n.mouseSelection.dragging = !0), n.draggedContent = e, t.dataTransfer && (t.dataTransfer.setData("Text", to(i.state, va, i.state.sliceDoc(e.from, e.to))), t.dataTransfer.effectAllowed = "copyMove"), !1;
};
ge.dragend = (i) => (i.inputState.draggedContent = null, !1);
function sc(i, t, e, n) {
  if (e = to(i.state, ba, e), !e)
    return;
  let s = i.posAtCoords({ x: t.clientX, y: t.clientY }, !1), { draggedContent: r } = i.inputState, o = n && r && Z0(i, t) ? { from: r.from, to: r.to } : null, l = { from: s, insert: e }, a = i.state.changes(o ? [o, l] : l);
  i.focus(), i.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(s, -1), head: a.mapPos(s, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  }), i.inputState.draggedContent = null;
}
ge.drop = (i, t) => {
  if (!t.dataTransfer)
    return !1;
  if (i.state.readOnly)
    return !0;
  let e = t.dataTransfer.files;
  if (e && e.length) {
    let n = Array(e.length), s = 0, r = () => {
      ++s == e.length && sc(i, t, n.filter((o) => o != null).join(i.state.lineBreak), !1);
    };
    for (let o = 0; o < e.length; o++) {
      let l = new FileReader();
      l.onerror = r, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (n[o] = l.result), r();
      }, l.readAsText(e[o]);
    }
    return !0;
  } else {
    let n = t.dataTransfer.getData("Text");
    if (n)
      return sc(i, t, n, !0), !0;
  }
  return !1;
};
ge.paste = (i, t) => {
  if (i.state.readOnly)
    return !0;
  i.observer.flush();
  let e = Ju ? null : t.clipboardData;
  return e ? (Gu(i, e.getData("text/plain") || e.getData("text/uri-list")), !0) : (n1(i), !1);
};
function l1(i, t) {
  let e = i.dom.parentNode;
  if (!e)
    return;
  let n = e.appendChild(document.createElement("textarea"));
  n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.value = t, n.focus(), n.selectionEnd = t.length, n.selectionStart = 0, setTimeout(() => {
    n.remove(), i.focus();
  }, 50);
}
function a1(i) {
  let t = [], e = [], n = !1;
  for (let s of i.selection.ranges)
    s.empty || (t.push(i.sliceDoc(s.from, s.to)), e.push(s));
  if (!t.length) {
    let s = -1;
    for (let { from: r } of i.selection.ranges) {
      let o = i.doc.lineAt(r);
      o.number > s && (t.push(o.text), e.push({ from: o.from, to: Math.min(i.doc.length, o.to + 1) })), s = o.number;
    }
    n = !0;
  }
  return { text: to(i, va, t.join(i.lineBreak)), ranges: e, linewise: n };
}
let Ll = null;
ge.copy = ge.cut = (i, t) => {
  let { text: e, ranges: n, linewise: s } = a1(i.state);
  if (!e && !s)
    return !1;
  Ll = s ? e : null, t.type == "cut" && !i.state.readOnly && i.dispatch({
    changes: n,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let r = Ju ? null : t.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", e), !0) : (l1(i, e), !1);
};
const Yu = /* @__PURE__ */ Qe.define();
function Zu(i, t) {
  let e = [];
  for (let n of i.facet(Eu)) {
    let s = n(i, t);
    s && e.push(s);
  }
  return e ? i.update({ effects: e, annotations: Yu.of(!0) }) : null;
}
function td(i) {
  setTimeout(() => {
    let t = i.hasFocus;
    if (t != i.inputState.notifiedFocused) {
      let e = Zu(i.state, t);
      e ? i.dispatch(e) : i.update([]);
    }
  }, 10);
}
oe.focus = (i) => {
  i.inputState.lastFocusTime = Date.now(), !i.scrollDOM.scrollTop && (i.inputState.lastScrollTop || i.inputState.lastScrollLeft) && (i.scrollDOM.scrollTop = i.inputState.lastScrollTop, i.scrollDOM.scrollLeft = i.inputState.lastScrollLeft), td(i);
};
oe.blur = (i) => {
  i.observer.clearSelectionRange(), td(i);
};
oe.compositionstart = oe.compositionupdate = (i) => {
  i.observer.editContext || (i.inputState.compositionFirstChange == null && (i.inputState.compositionFirstChange = !0), i.inputState.composing < 0 && (i.inputState.composing = 0));
};
oe.compositionend = (i) => {
  i.observer.editContext || (i.inputState.composing = -1, i.inputState.compositionEndedAt = Date.now(), i.inputState.compositionPendingKey = !0, i.inputState.compositionPendingChange = i.observer.pendingRecords().length > 0, i.inputState.compositionFirstChange = null, $.chrome && $.android ? i.observer.flushSoon() : i.inputState.compositionPendingChange ? Promise.resolve().then(() => i.observer.flush()) : setTimeout(() => {
    i.inputState.composing < 0 && i.docView.hasComposition && i.update([]);
  }, 50));
};
oe.contextmenu = (i) => {
  i.inputState.lastContextMenu = Date.now();
};
ge.beforeinput = (i, t) => {
  var e, n;
  if (t.inputType == "insertReplacementText" && i.observer.editContext) {
    let r = (e = t.dataTransfer) === null || e === void 0 ? void 0 : e.getData("text/plain"), o = t.getTargetRanges();
    if (r && o.length) {
      let l = o[0], a = i.posAtDOM(l.startContainer, l.startOffset), h = i.posAtDOM(l.endContainer, l.endOffset);
      return ka(i, { from: a, to: h, insert: i.state.toText(r) }, null), !0;
    }
  }
  let s;
  if ($.chrome && $.android && (s = ju.find((r) => r.inputType == t.inputType)) && (i.observer.delayAndroidKey(s.key, s.keyCode), s.key == "Backspace" || s.key == "Delete")) {
    let r = ((n = window.visualViewport) === null || n === void 0 ? void 0 : n.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > r + 10 && i.hasFocus && (i.contentDOM.blur(), i.focus());
    }, 100);
  }
  return $.ios && t.inputType == "deleteContentForward" && i.observer.flushSoon(), $.safari && t.inputType == "insertText" && i.inputState.composing >= 0 && setTimeout(() => oe.compositionend(i, t), 20), !1;
};
const rc = /* @__PURE__ */ new Set();
function h1(i) {
  rc.has(i) || (rc.add(i), i.addEventListener("copy", () => {
  }), i.addEventListener("cut", () => {
  }));
}
const oc = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let ii = !1;
function lc() {
  ii = !1;
}
class c1 {
  constructor(t) {
    this.lineWrapping = t, this.doc = J.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(t, e) {
    let n = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
    return this.lineWrapping && (n += Math.max(0, Math.ceil((e - t - n * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * n;
  }
  heightForLine(t) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(t) {
    return this.doc = t, this;
  }
  mustRefreshForWrapping(t) {
    return oc.indexOf(t) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(t) {
    let e = !1;
    for (let n = 0; n < t.length; n++) {
      let s = t[n];
      s < 0 ? n++ : this.heightSamples[Math.floor(s * 10)] || (e = !0, this.heightSamples[Math.floor(s * 10)] = !0);
    }
    return e;
  }
  refresh(t, e, n, s, r, o) {
    let l = oc.indexOf(t) > -1, a = Math.round(e) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = e, this.charWidth = n, this.textHeight = s, this.lineLength = r, a) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let c = o[h];
        c < 0 ? h++ : this.heightSamples[Math.floor(c * 10)] = !0;
      }
    }
    return a;
  }
}
class f1 {
  constructor(t, e) {
    this.from = t, this.heights = e, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Ce {
  /**
  @internal
  */
  constructor(t, e, n, s, r) {
    this.from = t, this.length = e, this.top = n, this.height = s, this._content = r;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? Lt.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof an ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(t) {
    let e = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t._content) ? t._content : [t]);
    return new Ce(this.from, this.length + t.length, this.top, this.height + t.height, e);
  }
}
var st = /* @__PURE__ */ function(i) {
  return i[i.ByPos = 0] = "ByPos", i[i.ByHeight = 1] = "ByHeight", i[i.ByPosNoHeight = 2] = "ByPosNoHeight", i;
}(st || (st = {}));
const nr = 1e-3;
class Et {
  constructor(t, e, n = 2) {
    this.length = t, this.height = e, this.flags = n;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(t) {
    this.flags = (t ? 2 : 0) | this.flags & -3;
  }
  setHeight(t) {
    this.height != t && (Math.abs(this.height - t) > nr && (ii = !0), this.height = t);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(t, e, n) {
    return Et.of(n);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(t, e) {
    e.push(this);
  }
  decomposeRight(t, e) {
    e.push(this);
  }
  applyChanges(t, e, n, s) {
    let r = this, o = n.doc;
    for (let l = s.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: c, toB: f } = s[l], u = r.lineAt(a, st.ByPosNoHeight, n.setDoc(e), 0, 0), d = u.to >= h ? u : r.lineAt(h, st.ByPosNoHeight, n, 0, 0);
      for (f += d.to - h, h = d.to; l > 0 && u.from <= s[l - 1].toA; )
        a = s[l - 1].fromA, c = s[l - 1].fromB, l--, a < u.from && (u = r.lineAt(a, st.ByPosNoHeight, n, 0, 0));
      c += u.from - a, a = u.from;
      let p = Ca.build(n.setDoc(o), t, c, f);
      r = mr(r, r.replace(a, h, p));
    }
    return r.updateHeight(n, 0);
  }
  static empty() {
    return new Ut(0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(t) {
    if (t.length == 1)
      return t[0];
    let e = 0, n = t.length, s = 0, r = 0;
    for (; ; )
      if (e == n)
        if (s > r * 2) {
          let l = t[e - 1];
          l.break ? t.splice(--e, 1, l.left, null, l.right) : t.splice(--e, 1, l.left, l.right), n += 1 + l.break, s -= l.size;
        } else if (r > s * 2) {
          let l = t[n];
          l.break ? t.splice(n, 1, l.left, null, l.right) : t.splice(n, 1, l.left, l.right), n += 2 + l.break, r -= l.size;
        } else
          break;
      else if (s < r) {
        let l = t[e++];
        l && (s += l.size);
      } else {
        let l = t[--n];
        l && (r += l.size);
      }
    let o = 0;
    return t[e - 1] == null ? (o = 1, e--) : t[e] == null && (o = 1, n++), new u1(Et.of(t.slice(0, e)), o, Et.of(t.slice(n)));
  }
}
function mr(i, t) {
  return i == t ? i : (i.constructor != t.constructor && (ii = !0), t);
}
Et.prototype.size = 1;
class ed extends Et {
  constructor(t, e, n) {
    super(t, e), this.deco = n;
  }
  blockAt(t, e, n, s) {
    return new Ce(s, this.length, n, this.height, this.deco || 0);
  }
  lineAt(t, e, n, s, r) {
    return this.blockAt(0, n, s, r);
  }
  forEachLine(t, e, n, s, r, o) {
    t <= r + this.length && e >= r && o(this.blockAt(0, n, s, r));
  }
  updateHeight(t, e = 0, n = !1, s) {
    return s && s.from <= e && s.more && this.setHeight(s.heights[s.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class Ut extends ed {
  constructor(t, e) {
    super(t, e, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(t, e, n, s) {
    return new Ce(s, this.length, n, this.height, this.breaks);
  }
  replace(t, e, n) {
    let s = n[0];
    return n.length == 1 && (s instanceof Ut || s instanceof xt && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof xt ? s = new Ut(s.length, this.height) : s.height = this.height, this.outdated || (s.outdated = !1), s) : Et.of(n);
  }
  updateHeight(t, e = 0, n = !1, s) {
    return s && s.from <= e && s.more ? this.setHeight(s.heights[s.index++]) : (n || this.outdated) && this.setHeight(Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed)) + this.breaks * t.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class xt extends Et {
  constructor(t) {
    super(t, 0);
  }
  heightMetrics(t, e) {
    let n = t.doc.lineAt(e).number, s = t.doc.lineAt(e + this.length).number, r = s - n + 1, o, l = 0;
    if (t.lineWrapping) {
      let a = Math.min(this.height, t.lineHeight * r);
      o = a / r, this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1));
    } else
      o = this.height / r;
    return { firstLine: n, lastLine: s, perLine: o, perChar: l };
  }
  blockAt(t, e, n, s) {
    let { firstLine: r, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(e, s);
    if (e.lineWrapping) {
      let h = s + (t < e.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t - n) / this.height)) * this.length)), c = e.doc.lineAt(h), f = l + c.length * a, u = Math.max(n, t - f / 2);
      return new Ce(c.from, c.length, u, f, 0);
    } else {
      let h = Math.max(0, Math.min(o - r, Math.floor((t - n) / l))), { from: c, length: f } = e.doc.line(r + h);
      return new Ce(c, f, n + l * h, l, 0);
    }
  }
  lineAt(t, e, n, s, r) {
    if (e == st.ByHeight)
      return this.blockAt(t, n, s, r);
    if (e == st.ByPosNoHeight) {
      let { from: d, to: p } = n.doc.lineAt(t);
      return new Ce(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(n, r), h = n.doc.lineAt(t), c = l + h.length * a, f = h.number - o, u = s + l * f + a * (h.from - r - f);
    return new Ce(h.from, h.length, Math.max(s, Math.min(u, s + this.height - c)), c, 0);
  }
  forEachLine(t, e, n, s, r, o) {
    t = Math.max(t, r), e = Math.min(e, r + this.length);
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(n, r);
    for (let c = t, f = s; c <= e; ) {
      let u = n.doc.lineAt(c);
      if (c == t) {
        let p = u.number - l;
        f += a * p + h * (t - r - p);
      }
      let d = a + h * u.length;
      o(new Ce(u.from, u.length, f, d, 0)), f += d, c = u.to + 1;
    }
  }
  replace(t, e, n) {
    let s = this.length - e;
    if (s > 0) {
      let r = n[n.length - 1];
      r instanceof xt ? n[n.length - 1] = new xt(r.length + s) : n.push(null, new xt(s - 1));
    }
    if (t > 0) {
      let r = n[0];
      r instanceof xt ? n[0] = new xt(t + r.length) : n.unshift(new xt(t - 1), null);
    }
    return Et.of(n);
  }
  decomposeLeft(t, e) {
    e.push(new xt(t - 1), null);
  }
  decomposeRight(t, e) {
    e.push(null, new xt(this.length - t - 1));
  }
  updateHeight(t, e = 0, n = !1, s) {
    let r = e + this.length;
    if (s && s.from <= e + this.length && s.more) {
      let o = [], l = Math.max(e, s.from), a = -1;
      for (s.from > e && o.push(new xt(s.from - e - 1).updateHeight(t, e)); l <= r && s.more; ) {
        let c = t.doc.lineAt(l).length;
        o.length && o.push(null);
        let f = s.heights[s.index++];
        a == -1 ? a = f : Math.abs(f - a) >= nr && (a = -2);
        let u = new Ut(c, f);
        u.outdated = !1, o.push(u), l += c + 1;
      }
      l <= r && o.push(null, new xt(r - l).updateHeight(t, l));
      let h = Et.of(o);
      return (a < 0 || Math.abs(h.height - this.height) >= nr || Math.abs(a - this.heightMetrics(t, e).perLine) >= nr) && (ii = !0), mr(this, h);
    } else (n || this.outdated) && (this.setHeight(t.heightForGap(e, e + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class u1 extends Et {
  constructor(t, e, n) {
    super(t.length + e + n.length, t.height + n.height, e | (t.outdated || n.outdated ? 2 : 0)), this.left = t, this.right = n, this.size = t.size + n.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(t, e, n, s) {
    let r = n + this.left.height;
    return t < r ? this.left.blockAt(t, e, n, s) : this.right.blockAt(t, e, r, s + this.left.length + this.break);
  }
  lineAt(t, e, n, s, r) {
    let o = s + this.left.height, l = r + this.left.length + this.break, a = e == st.ByHeight ? t < o : t < l, h = a ? this.left.lineAt(t, e, n, s, r) : this.right.lineAt(t, e, n, o, l);
    if (this.break || (a ? h.to < l : h.from > l))
      return h;
    let c = e == st.ByPosNoHeight ? st.ByPosNoHeight : st.ByPos;
    return a ? h.join(this.right.lineAt(l, c, n, o, l)) : this.left.lineAt(l, c, n, s, r).join(h);
  }
  forEachLine(t, e, n, s, r, o) {
    let l = s + this.left.height, a = r + this.left.length + this.break;
    if (this.break)
      t < a && this.left.forEachLine(t, e, n, s, r, o), e >= a && this.right.forEachLine(t, e, n, l, a, o);
    else {
      let h = this.lineAt(a, st.ByPos, n, s, r);
      t < h.from && this.left.forEachLine(t, h.from - 1, n, s, r, o), h.to >= t && h.from <= e && o(h), e > h.to && this.right.forEachLine(h.to + 1, e, n, l, a, o);
    }
  }
  replace(t, e, n) {
    let s = this.left.length + this.break;
    if (e < s)
      return this.balanced(this.left.replace(t, e, n), this.right);
    if (t > this.left.length)
      return this.balanced(this.left, this.right.replace(t - s, e - s, n));
    let r = [];
    t > 0 && this.decomposeLeft(t, r);
    let o = r.length;
    for (let l of n)
      r.push(l);
    if (t > 0 && ac(r, o - 1), e < this.length) {
      let l = r.length;
      this.decomposeRight(e, r), ac(r, l);
    }
    return Et.of(r);
  }
  decomposeLeft(t, e) {
    let n = this.left.length;
    if (t <= n)
      return this.left.decomposeLeft(t, e);
    e.push(this.left), this.break && (n++, t >= n && e.push(null)), t > n && this.right.decomposeLeft(t - n, e);
  }
  decomposeRight(t, e) {
    let n = this.left.length, s = n + this.break;
    if (t >= s)
      return this.right.decomposeRight(t - s, e);
    t < n && this.left.decomposeRight(t, e), this.break && t < s && e.push(null), e.push(this.right);
  }
  balanced(t, e) {
    return t.size > 2 * e.size || e.size > 2 * t.size ? Et.of(this.break ? [t, null, e] : [t, e]) : (this.left = mr(this.left, t), this.right = mr(this.right, e), this.setHeight(t.height + e.height), this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break + e.length, this);
  }
  updateHeight(t, e = 0, n = !1, s) {
    let { left: r, right: o } = this, l = e + r.length + this.break, a = null;
    return s && s.from <= e + r.length && s.more ? a = r = r.updateHeight(t, e, n, s) : r.updateHeight(t, e, n), s && s.from <= l + o.length && s.more ? a = o = o.updateHeight(t, l, n, s) : o.updateHeight(t, l, n), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function ac(i, t) {
  let e, n;
  i[t] == null && (e = i[t - 1]) instanceof xt && (n = i[t + 1]) instanceof xt && i.splice(t - 1, 3, new xt(e.length + 1 + n.length));
}
const d1 = 5;
class Ca {
  constructor(t, e) {
    this.pos = t, this.oracle = e, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(t, e) {
    if (this.lineStart > -1) {
      let n = Math.min(e, this.lineEnd), s = this.nodes[this.nodes.length - 1];
      s instanceof Ut ? s.length += n - this.pos : (n > this.pos || !this.isCovered) && this.nodes.push(new Ut(n - this.pos, -1)), this.writtenTo = n, e > n && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = e;
  }
  point(t, e, n) {
    if (t < e || n.heightRelevant) {
      let s = n.widget ? n.widget.estimatedHeight : 0, r = n.widget ? n.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let o = e - t;
      n.block ? this.addBlock(new ed(o, s, n)) : (o || r || s >= d1) && this.addLineDeco(s, r, o);
    } else e > t && this.span(t, e);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: t, to: e } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = t, this.lineEnd = e, this.writtenTo < t && ((this.writtenTo < t - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, t - 1)), this.nodes.push(null)), this.pos > t && this.nodes.push(new Ut(this.pos - t, -1)), this.writtenTo = this.pos;
  }
  blankContent(t, e) {
    let n = new xt(e - t);
    return this.oracle.doc.lineAt(t).to == e && (n.flags |= 4), n;
  }
  ensureLine() {
    this.enterLine();
    let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (t instanceof Ut)
      return t;
    let e = new Ut(0, -1);
    return this.nodes.push(e), e;
  }
  addBlock(t) {
    this.enterLine();
    let e = t.deco;
    e && e.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(t), this.writtenTo = this.pos = this.pos + t.length, e && e.endSide > 0 && (this.covering = t);
  }
  addLineDeco(t, e, n) {
    let s = this.ensureLine();
    s.length += n, s.collapsed += n, s.widgetHeight = Math.max(s.widgetHeight, t), s.breaks += e, this.writtenTo = this.pos = this.pos + n;
  }
  finish(t) {
    let e = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(e instanceof Ut) && !this.isCovered ? this.nodes.push(new Ut(0, -1)) : (this.writtenTo < this.pos || e == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let n = t;
    for (let s of this.nodes)
      s instanceof Ut && s.updateHeight(this.oracle, n), n += s ? s.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(t, e, n, s) {
    let r = new Ca(n, t);
    return U.spans(e, n, s, r, 0), r.finish(n);
  }
}
function p1(i, t, e) {
  let n = new g1();
  return U.compare(i, t, e, n, 0), n.changes;
}
class g1 {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(t, e, n, s) {
    (t < e || n && n.heightRelevant || s && s.heightRelevant) && tr(t, e, this.changes, 5);
  }
}
function m1(i, t) {
  let e = i.getBoundingClientRect(), n = i.ownerDocument, s = n.defaultView || window, r = Math.max(0, e.left), o = Math.min(s.innerWidth, e.right), l = Math.max(0, e.top), a = Math.min(s.innerHeight, e.bottom);
  for (let h = i.parentNode; h && h != n.body; )
    if (h.nodeType == 1) {
      let c = h, f = window.getComputedStyle(c);
      if ((c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) && f.overflow != "visible") {
        let u = c.getBoundingClientRect();
        r = Math.max(r, u.left), o = Math.min(o, u.right), l = Math.max(l, u.top), a = Math.min(h == i.parentNode ? s.innerHeight : a, u.bottom);
      }
      h = f.position == "absolute" || f.position == "fixed" ? c.offsetParent : c.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
  return {
    left: r - e.left,
    right: Math.max(r, o) - e.left,
    top: l - (e.top + t),
    bottom: Math.max(l, a) - (e.top + t)
  };
}
function y1(i) {
  let t = i.getBoundingClientRect(), e = i.ownerDocument.defaultView || window;
  return t.left < e.innerWidth && t.right > 0 && t.top < e.innerHeight && t.bottom > 0;
}
function b1(i, t) {
  let e = i.getBoundingClientRect();
  return {
    left: 0,
    right: e.right - e.left,
    top: t,
    bottom: e.bottom - (e.top + t)
  };
}
class Fo {
  constructor(t, e, n, s) {
    this.from = t, this.to = e, this.size = n, this.displaySize = s;
  }
  static same(t, e) {
    if (t.length != e.length)
      return !1;
    for (let n = 0; n < t.length; n++) {
      let s = t[n], r = e[n];
      if (s.from != r.from || s.to != r.to || s.size != r.size)
        return !1;
    }
    return !0;
  }
  draw(t, e) {
    return V.replace({
      widget: new v1(this.displaySize * (e ? t.scaleY : t.scaleX), e)
    }).range(this.from, this.to);
  }
}
class v1 extends fn {
  constructor(t, e) {
    super(), this.size = t, this.vertical = e;
  }
  eq(t) {
    return t.size == this.size && t.vertical == this.vertical;
  }
  toDOM() {
    let t = document.createElement("div");
    return this.vertical ? t.style.height = this.size + "px" : (t.style.width = this.size + "px", t.style.height = "2px", t.style.display = "inline-block"), t;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class hc {
  constructor(t) {
    this.state = t, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = cc, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = rt.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let e = t.facet(xa).some((n) => typeof n != "function" && n.class == "cm-lineWrapping");
    this.heightOracle = new c1(e), this.stateDeco = t.facet(Ki).filter((n) => typeof n != "function"), this.heightMap = Et.empty().applyChanges(this.stateDeco, J.empty, this.heightOracle.setDoc(t.doc), [new se(0, 0, 0, t.doc.length)]);
    for (let n = 0; n < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); n++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = V.set(this.lineGaps.map((n) => n.draw(this, !1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let t = [this.viewport], { main: e } = this.state.selection;
    for (let n = 0; n <= 1; n++) {
      let s = n ? e.head : e.anchor;
      if (!t.some(({ from: r, to: o }) => s >= r && s <= o)) {
        let { from: r, to: o } = this.lineBlockAt(s);
        t.push(new Rs(r, o));
      }
    }
    return this.viewports = t.sort((n, s) => n.from - s.from), this.updateScaler();
  }
  updateScaler() {
    let t = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? cc : new Aa(this.heightOracle, this.heightMap, this.viewports), t.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t) => {
      this.viewportLines.push(Ci(t, this.scaler));
    });
  }
  update(t, e = null) {
    this.state = t.state;
    let n = this.stateDeco;
    this.stateDeco = this.state.facet(Ki).filter((c) => typeof c != "function");
    let s = t.changedRanges, r = se.extendWithRanges(s, p1(n, this.stateDeco, t ? t.changes : mt.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    lc(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), r), (this.heightMap.height != o || ii) && (t.flags |= 2), l ? (this.scrollAnchorPos = t.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let a = r.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
    (e && (e.range.head < a.from || e.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, e));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, t.flags |= this.updateForViewport(), (h || !t.changes.empty || t.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(t.changes), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && t.selectionSet && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && !t.state.facet(_u) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(t) {
    let e = t.contentDOM, n = window.getComputedStyle(e), s = this.heightOracle, r = n.whiteSpace;
    this.defaultTextDirection = n.direction == "rtl" ? rt.RTL : rt.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r), l = e.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let h = 0, c = 0;
    if (l.width && l.height) {
      let { scaleX: w, scaleY: v } = cu(e, l);
      (w > 5e-3 && Math.abs(this.scaleX - w) > 5e-3 || v > 5e-3 && Math.abs(this.scaleY - v) > 5e-3) && (this.scaleX = w, this.scaleY = v, h |= 16, o = a = !0);
    }
    let f = (parseInt(n.paddingTop) || 0) * this.scaleY, u = (parseInt(n.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != f || this.paddingBottom != u) && (this.paddingTop = f, this.paddingBottom = u, h |= 18), this.editorWidth != t.scrollDOM.clientWidth && (s.lineWrapping && (a = !0), this.editorWidth = t.scrollDOM.clientWidth, h |= 16);
    let d = t.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d && (this.scrollAnchorHeight = -1, this.scrollTop = d), this.scrolledToBottom = du(t.scrollDOM);
    let p = (this.printing ? b1 : m1)(e, this.paddingTop), m = p.top - this.pixelViewport.top, g = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let y = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (y != this.inView && (this.inView = y, y && (a = !0)), !this.inView && !this.scrollTarget && !y1(t.dom))
      return 0;
    let b = l.width;
    if ((this.contentDOMWidth != b || this.editorHeight != t.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = t.scrollDOM.clientHeight, h |= 16), a) {
      let w = t.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights(w) && (o = !0), o || s.lineWrapping && Math.abs(b - this.contentDOMWidth) > s.charWidth) {
        let { lineHeight: v, charWidth: C, textHeight: k } = t.docView.measureTextSize();
        o = v > 0 && s.refresh(r, v, C, k, b / C, w), o && (t.docView.minWidth = 0, h |= 16);
      }
      m > 0 && g > 0 ? c = Math.max(m, g) : m < 0 && g < 0 && (c = Math.min(m, g)), lc();
      for (let v of this.viewports) {
        let C = v.from == this.viewport.from ? w : t.docView.measureVisibleLineHeights(v);
        this.heightMap = (o ? Et.empty().applyChanges(this.stateDeco, J.empty, this.heightOracle, [new se(0, 0, 0, t.state.doc.length)]) : this.heightMap).updateHeight(s, 0, o, new f1(v.from, C));
      }
      ii && (h |= 2);
    }
    let S = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return S && (h & 2 && (h |= this.updateScaler()), this.viewport = this.getViewport(c, this.scrollTarget), h |= this.updateForViewport()), (h & 2 || S) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, t)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, t.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(t, e) {
    let n = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1e3 / 2)), s = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new Rs(s.lineAt(o - n * 1e3, st.ByHeight, r, 0, 0).from, s.lineAt(l + (1 - n) * 1e3, st.ByHeight, r, 0, 0).to);
    if (e) {
      let { head: h } = e.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = s.lineAt(h, st.ByPos, r, 0, 0), u;
        e.y == "center" ? u = (f.top + f.bottom) / 2 - c / 2 : e.y == "start" || e.y == "nearest" && h < a.from ? u = f.top : u = f.bottom - c, a = new Rs(s.lineAt(u - 1e3 / 2, st.ByHeight, r, 0, 0).from, s.lineAt(u + c + 1e3 / 2, st.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(t, e) {
    let n = e.mapPos(t.from, -1), s = e.mapPos(t.to, 1);
    return new Rs(this.heightMap.lineAt(n, st.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, st.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: t, to: e }, n = 0) {
    if (!this.inView)
      return !0;
    let { top: s } = this.heightMap.lineAt(t, st.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(e, st.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (t == 0 || s <= o - Math.max(10, Math.min(
      -n,
      250
      /* VP.MaxCoverMargin */
    ))) && (e == this.state.doc.length || r >= l + Math.max(10, Math.min(
      n,
      250
      /* VP.MaxCoverMargin */
    ))) && s > o - 2 * 1e3 && r < l + 2 * 1e3;
  }
  mapLineGaps(t, e) {
    if (!t.length || e.empty)
      return t;
    let n = [];
    for (let s of t)
      e.touchesRange(s.from, s.to) || n.push(new Fo(e.mapPos(s.from), e.mapPos(s.to), s.size, s.displaySize));
    return n;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(t, e) {
    let n = this.heightOracle.lineWrapping, s = n ? 1e4 : 2e3, r = s >> 1, o = s << 1;
    if (this.defaultTextDirection != rt.LTR && !n)
      return [];
    let l = [], a = (c, f, u, d) => {
      if (f - c < r)
        return;
      let p = this.state.selection.main, m = [p.from];
      p.empty || m.push(p.to);
      for (let y of m)
        if (y > c && y < f) {
          a(c, y - 10, u, d), a(y + 10, f, u, d);
          return;
        }
      let g = S1(t, (y) => y.from >= u.from && y.to <= u.to && Math.abs(y.from - c) < r && Math.abs(y.to - f) < r && !m.some((b) => y.from < b && y.to > b));
      if (!g) {
        if (f < u.to && e && n && e.visibleRanges.some((S) => S.from <= f && S.to >= f)) {
          let S = e.moveToLineBoundary(A.cursor(f), !1, !0).head;
          S > c && (f = S);
        }
        let y = this.gapSize(u, c, f, d), b = n || y < 2e6 ? y : 2e6;
        g = new Fo(c, f, y, b);
      }
      l.push(g);
    }, h = (c) => {
      if (c.length < o || c.type != Lt.Text)
        return;
      let f = x1(c.from, c.to, this.stateDeco);
      if (f.total < o)
        return;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, d, p;
      if (n) {
        let m = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, g, y;
        if (u != null) {
          let b = Ls(f, u), S = ((this.visibleBottom - this.visibleTop) / 2 + m) / c.height;
          g = b - S, y = b + S;
        } else
          g = (this.visibleTop - c.top - m) / c.height, y = (this.visibleBottom - c.top + m) / c.height;
        d = Bs(f, g), p = Bs(f, y);
      } else {
        let m = f.total * this.heightOracle.charWidth, g = s * this.heightOracle.charWidth, y = 0;
        if (m > 2e6)
          for (let C of t)
            C.from >= c.from && C.from < c.to && C.size != C.displaySize && C.from * this.heightOracle.charWidth + y < this.pixelViewport.left && (y = C.size - C.displaySize);
        let b = this.pixelViewport.left + y, S = this.pixelViewport.right + y, w, v;
        if (u != null) {
          let C = Ls(f, u), k = ((S - b) / 2 + g) / m;
          w = C - k, v = C + k;
        } else
          w = (b - g) / m, v = (S + g) / m;
        d = Bs(f, w), p = Bs(f, v);
      }
      d > c.from && a(c.from, d, c, f), p < c.to && a(p, c.to, c, f);
    };
    for (let c of this.viewportLines)
      Array.isArray(c.type) ? c.type.forEach(h) : h(c);
    return l;
  }
  gapSize(t, e, n, s) {
    let r = Ls(s, n) - Ls(s, e);
    return this.heightOracle.lineWrapping ? t.height * r : s.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(t) {
    Fo.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = V.set(t.map((e) => e.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(t) {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let n = [];
    U.spans(e, this.viewport.from, this.viewport.to, {
      span(r, o) {
        n.push({ from: r, to: o });
      },
      point() {
      }
    }, 20);
    let s = 0;
    if (n.length != this.visibleRanges.length)
      s = 12;
    else
      for (let r = 0; r < n.length && !(s & 8); r++) {
        let o = this.visibleRanges[r], l = n[r];
        (o.from != l.from || o.to != l.to) && (s |= 4, t && t.mapPos(o.from, -1) == l.from && t.mapPos(o.to, 1) == l.to || (s |= 8));
      }
    return this.visibleRanges = n, s;
  }
  lineBlockAt(t) {
    return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find((e) => e.from <= t && e.to >= t) || Ci(this.heightMap.lineAt(t, st.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(t) {
    return t >= this.viewportLines[0].top && t <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((e) => e.top <= t && e.bottom >= t) || Ci(this.heightMap.lineAt(this.scaler.fromDOM(t), st.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(t) {
    let e = this.lineBlockAtHeight(t + 8);
    return e.from >= this.viewport.from || this.viewportLines[0].top - t > 200 ? e : this.viewportLines[0];
  }
  elementAtHeight(t) {
    return Ci(this.heightMap.blockAt(this.scaler.fromDOM(t), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Rs {
  constructor(t, e) {
    this.from = t, this.to = e;
  }
}
function x1(i, t, e) {
  let n = [], s = i, r = 0;
  return U.spans(e, i, t, {
    span() {
    },
    point(o, l) {
      o > s && (n.push({ from: s, to: o }), r += o - s), s = l;
    }
  }, 20), s < t && (n.push({ from: s, to: t }), r += t - s), { total: r, ranges: n };
}
function Bs({ total: i, ranges: t }, e) {
  if (e <= 0)
    return t[0].from;
  if (e >= 1)
    return t[t.length - 1].to;
  let n = Math.floor(i * e);
  for (let s = 0; ; s++) {
    let { from: r, to: o } = t[s], l = o - r;
    if (n <= l)
      return r + n;
    n -= l;
  }
}
function Ls(i, t) {
  let e = 0;
  for (let { from: n, to: s } of i.ranges) {
    if (t <= s) {
      e += t - n;
      break;
    }
    e += s - n;
  }
  return e / i.total;
}
function S1(i, t) {
  for (let e of i)
    if (t(e))
      return e;
}
const cc = {
  toDOM(i) {
    return i;
  },
  fromDOM(i) {
    return i;
  },
  scale: 1,
  eq(i) {
    return i == this;
  }
};
class Aa {
  constructor(t, e, n) {
    let s = 0, r = 0, o = 0;
    this.viewports = n.map(({ from: l, to: a }) => {
      let h = e.lineAt(l, st.ByPos, t, 0, 0).top, c = e.lineAt(a, st.ByPos, t, 0, 0).bottom;
      return s += c - h, { from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - s) / (e.height - s);
    for (let l of this.viewports)
      l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom;
  }
  toDOM(t) {
    for (let e = 0, n = 0, s = 0; ; e++) {
      let r = e < this.viewports.length ? this.viewports[e] : null;
      if (!r || t < r.top)
        return s + (t - n) * this.scale;
      if (t <= r.bottom)
        return r.domTop + (t - r.top);
      n = r.bottom, s = r.domBottom;
    }
  }
  fromDOM(t) {
    for (let e = 0, n = 0, s = 0; ; e++) {
      let r = e < this.viewports.length ? this.viewports[e] : null;
      if (!r || t < r.domTop)
        return n + (t - s) / this.scale;
      if (t <= r.domBottom)
        return r.top + (t - r.domTop);
      n = r.bottom, s = r.domBottom;
    }
  }
  eq(t) {
    return t instanceof Aa ? this.scale == t.scale && this.viewports.length == t.viewports.length && this.viewports.every((e, n) => e.from == t.viewports[n].from && e.to == t.viewports[n].to) : !1;
  }
}
function Ci(i, t) {
  if (t.scale == 1)
    return i;
  let e = t.toDOM(i.top), n = t.toDOM(i.bottom);
  return new Ce(i.from, i.length, e, n - e, Array.isArray(i._content) ? i._content.map((s) => Ci(s, t)) : i._content);
}
const Es = /* @__PURE__ */ D.define({ combine: (i) => i.join(" ") }), El = /* @__PURE__ */ D.define({ combine: (i) => i.indexOf(!0) > -1 }), Il = /* @__PURE__ */ on.newName(), nd = /* @__PURE__ */ on.newName(), id = /* @__PURE__ */ on.newName(), sd = { "&light": "." + nd, "&dark": "." + id };
function _l(i, t, e) {
  return new on(t, {
    finish(n) {
      return /&/.test(n) ? n.replace(/&\w*/, (s) => {
        if (s == "&")
          return i;
        if (!e || !e[s])
          throw new RangeError(`Unsupported selector: ${s}`);
        return e[s];
      }) : i + " " + n;
    }
  });
}
const w1 = /* @__PURE__ */ _l("." + Il, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    // https://github.com/codemirror/dev/issues/456
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    // For IE
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    // For Safari, which doesn't support overflow-wrap: anywhere
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": { display: "none" }
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    insetInlineStart: 0,
    zIndex: 200
  },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    borderRight: "1px solid #ddd"
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    // Necessary -- prevents margin collapsing
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top"
  },
  ".cm-highlightSpace": {
    backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
    backgroundPosition: "center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, sd), k1 = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Vo = $.ie && $.ie_version <= 11;
class C1 {
  constructor(t) {
    this.view = t, this.active = !1, this.editContext = null, this.selectionRange = new l0(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver((e) => {
      for (let n of e)
        this.queue.push(n);
      ($.ie && $.ie_version <= 11 || $.ios && t.composing) && e.some((n) => n.type == "childList" && n.removedNodes.length || n.type == "characterData" && n.oldValue.length > n.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && t.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !($.chrome && $.chrome_version < 126) && (this.editContext = new O1(t), t.state.facet(_e) && (t.contentDOM.editContext = this.editContext.editContext)), Vo && (this.onCharData = (e) => {
      this.queue.push({
        target: e.target,
        type: "characterData",
        oldValue: e.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var e;
      ((e = this.view.docView) === null || e === void 0 ? void 0 : e.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(t.scrollDOM)), this.addWindowListeners(this.win = t.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((e) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), e.length > 0 && e[e.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((e) => {
      e.length > 0 && e[e.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(t) {
    this.view.inputState.runHandlers("scroll", t), this.intersecting && this.view.measure();
  }
  onScroll(t) {
    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(t);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(t) {
    (t.type == "change" || !t.type) && !t.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(t) {
    if (this.gapIntersection && (t.length != this.gaps.length || this.gaps.some((e, n) => e != t[n]))) {
      this.gapIntersection.disconnect();
      for (let e of t)
        this.gapIntersection.observe(e);
      this.gaps = t;
    }
  }
  onSelectionChange(t) {
    let e = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: n } = this, s = this.selectionRange;
    if (n.state.facet(_e) ? n.root.activeElement != this.dom : !Zs(this.dom, s))
      return;
    let r = s.anchorNode && n.docView.nearest(s.anchorNode);
    if (r && r.ignoreEvent(t)) {
      e || (this.selectionChanged = !1);
      return;
    }
    ($.ie && $.ie_version <= 11 || $.android && $.chrome) && !n.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    s.focusNode && Ri(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: t } = this, e = qi(t.root);
    if (!e)
      return !1;
    let n = $.safari && t.root.nodeType == 11 && t.root.activeElement == this.dom && A1(this.view, e) || e;
    if (!n || this.selectionRange.eq(n))
      return !1;
    let s = Zs(this.dom, n);
    return s && !this.selectionChanged && t.inputState.lastFocusTime > Date.now() - 200 && t.inputState.lastTouchTime < Date.now() - 300 && h0(this.dom, n) ? (this.view.inputState.lastFocusTime = 0, t.docView.updateSelection(), !1) : (this.selectionRange.setRange(n), s && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(t, e) {
    this.selectionRange.set(t.node, t.offset, e.node, e.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let t = 0, e = null;
    for (let n = this.dom; n; )
      if (n.nodeType == 1)
        !e && t < this.scrollTargets.length && this.scrollTargets[t] == n ? t++ : e || (e = this.scrollTargets.slice(0, t)), e && e.push(n), n = n.assignedSlot || n.parentNode;
      else if (n.nodeType == 11)
        n = n.host;
      else
        break;
    if (t < this.scrollTargets.length && !e && (e = this.scrollTargets.slice(0, t)), e) {
      for (let n of this.scrollTargets)
        n.removeEventListener("scroll", this.onScroll);
      for (let n of this.scrollTargets = e)
        n.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(t) {
    if (!this.active)
      return t();
    try {
      return this.stop(), t();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, k1), Vo && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), Vo && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(t, e) {
    var n;
    if (!this.delayedAndroidKey) {
      let s = () => {
        let r = this.delayedAndroidKey;
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && jn(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
    }
    (!this.delayedAndroidKey || t == "Enter") && (this.delayedAndroidKey = {
      key: t,
      keyCode: e,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((n = this.delayedAndroidKey) === null || n === void 0) && n.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let t of this.observer.takeRecords())
      this.queue.push(t);
    return this.queue;
  }
  processRecords() {
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let e = -1, n = -1, s = !1;
    for (let r of t) {
      let o = this.readMutation(r);
      o && (o.typeOver && (s = !0), e == -1 ? { from: e, to: n } = o : (e = Math.min(o.from, e), n = Math.max(o.to, n)));
    }
    return { from: e, to: n, typeOver: s };
  }
  readChange() {
    let { from: t, to: e, typeOver: n } = this.processRecords(), s = this.selectionChanged && Zs(this.dom, this.selectionRange);
    if (t < 0 && !s)
      return null;
    t > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let r = new H0(this.view, t, e, n);
    return this.view.docView.domChanged = { newSel: r.newSel ? r.newSel.main : null }, r;
  }
  // Apply pending changes, if any
  flush(t = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    t && this.readSelectionRange();
    let e = this.readChange();
    if (!e)
      return this.view.requestMeasure(), !1;
    let n = this.view.state, s = Ku(this.view, e);
    return this.view.state == n && (e.domChanged || e.newSel && !e.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), s;
  }
  readMutation(t) {
    let e = this.view.docView.nearest(t.target);
    if (!e || e.ignoreMutation(t))
      return null;
    if (e.markDirty(t.type == "attributes"), t.type == "attributes" && (e.flags |= 4), t.type == "childList") {
      let n = fc(e, t.previousSibling || t.target.previousSibling, -1), s = fc(e, t.nextSibling || t.target.nextSibling, 1);
      return {
        from: n ? e.posAfter(n) : e.posAtStart,
        to: s ? e.posBefore(s) : e.posAtEnd,
        typeOver: !1
      };
    } else return t.type == "characterData" ? { from: e.posAtStart, to: e.posAtEnd, typeOver: t.target.nodeValue == t.oldValue } : null;
  }
  setWindow(t) {
    t != this.win && (this.removeWindowListeners(this.win), this.win = t, this.addWindowListeners(this.win));
  }
  addWindowListeners(t) {
    t.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : t.addEventListener("beforeprint", this.onPrint), t.addEventListener("scroll", this.onScroll), t.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(t) {
    t.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : t.removeEventListener("beforeprint", this.onPrint), t.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(t) {
    this.editContext && (this.editContext.update(t), t.startState.facet(_e) != t.state.facet(_e) && (t.view.contentDOM.editContext = t.state.facet(_e) ? this.editContext.editContext : null));
  }
  destroy() {
    var t, e, n;
    this.stop(), (t = this.intersection) === null || t === void 0 || t.disconnect(), (e = this.gapIntersection) === null || e === void 0 || e.disconnect(), (n = this.resizeScroll) === null || n === void 0 || n.disconnect();
    for (let s of this.scrollTargets)
      s.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function fc(i, t, e) {
  for (; t; ) {
    let n = nt.get(t);
    if (n && n.parent == i)
      return n;
    let s = t.parentNode;
    t = s != i.dom ? s : e > 0 ? t.nextSibling : t.previousSibling;
  }
  return null;
}
function uc(i, t) {
  let e = t.startContainer, n = t.startOffset, s = t.endContainer, r = t.endOffset, o = i.docView.domAtPos(i.state.selection.main.anchor);
  return Ri(o.node, o.offset, s, r) && ([e, n, s, r] = [s, r, e, n]), { anchorNode: e, anchorOffset: n, focusNode: s, focusOffset: r };
}
function A1(i, t) {
  if (t.getComposedRanges) {
    let s = t.getComposedRanges(i.root)[0];
    if (s)
      return uc(i, s);
  }
  let e = null;
  function n(s) {
    s.preventDefault(), s.stopImmediatePropagation(), e = s.getTargetRanges()[0];
  }
  return i.contentDOM.addEventListener("beforeinput", n, !0), i.dom.ownerDocument.execCommand("indent"), i.contentDOM.removeEventListener("beforeinput", n, !0), e ? uc(i, e) : null;
}
class O1 {
  constructor(t) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(t.state);
    let e = this.editContext = new window.EditContext({
      text: t.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, t.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(t.state.selection.main.head)
    });
    this.handlers.textupdate = (n) => {
      let s = t.state.selection.main, { anchor: r, head: o } = s, l = this.toEditorPos(n.updateRangeStart), a = this.toEditorPos(n.updateRangeEnd);
      t.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: n.updateRangeStart, editorBase: l, drifted: !1 });
      let h = { from: l, to: a, insert: J.of(n.text.split(`
`)) };
      if (h.from == this.from && r < this.from ? h.from = r : h.to == this.to && r > this.to && (h.to = r), h.from == h.to && !h.insert.length) {
        let c = A.single(this.toEditorPos(n.selectionStart), this.toEditorPos(n.selectionEnd));
        c.main.eq(s) || t.dispatch({ selection: c, userEvent: "select" });
        return;
      }
      if (($.mac || $.android) && h.from == o - 1 && /^\. ?$/.test(n.text) && t.contentDOM.getAttribute("autocorrect") == "off" && (h = { from: l, to: a, insert: J.of([n.text.replace(".", " ")]) }), this.pendingContextChange = h, !t.state.readOnly) {
        let c = this.to - this.from + (h.to - h.from + h.insert.length);
        ka(t, h, A.single(this.toEditorPos(n.selectionStart, c), this.toEditorPos(n.selectionEnd, c)));
      }
      this.pendingContextChange && (this.revertPending(t.state), this.setSelection(t.state));
    }, this.handlers.characterboundsupdate = (n) => {
      let s = [], r = null;
      for (let o = this.toEditorPos(n.rangeStart), l = this.toEditorPos(n.rangeEnd); o < l; o++) {
        let a = t.coordsForChar(o);
        r = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || r || new DOMRect(), s.push(r);
      }
      e.updateCharacterBounds(n.rangeStart, s);
    }, this.handlers.textformatupdate = (n) => {
      let s = [];
      for (let r of n.getTextFormats()) {
        let o = r.underlineStyle, l = r.underlineThickness;
        if (o != "None" && l != "None") {
          let a = this.toEditorPos(r.rangeStart), h = this.toEditorPos(r.rangeEnd);
          if (a < h) {
            let c = `text-decoration: underline ${o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${l == "Thin" ? 1 : 2}px`;
            s.push(V.mark({ attributes: { style: c } }).range(a, h));
          }
        }
      }
      t.dispatch({ effects: Fu.of(V.set(s)) });
    }, this.handlers.compositionstart = () => {
      t.inputState.composing < 0 && (t.inputState.composing = 0, t.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (t.inputState.composing = -1, t.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: n } = this.composing;
        this.composing = null, n && this.reset(t.state);
      }
    };
    for (let n in this.handlers)
      e.addEventListener(n, this.handlers[n]);
    this.measureReq = { read: (n) => {
      this.editContext.updateControlBounds(n.contentDOM.getBoundingClientRect());
      let s = qi(n.root);
      s && s.rangeCount && this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(t) {
    let e = 0, n = !1, s = this.pendingContextChange;
    return t.changes.iterChanges((r, o, l, a, h) => {
      if (n)
        return;
      let c = h.length - (o - r);
      if (s && o >= s.to)
        if (s.from == r && s.to == o && s.insert.eq(h)) {
          s = this.pendingContextChange = null, e += c, this.to += c;
          return;
        } else
          s = null, this.revertPending(t.state);
      if (r += e, o += e, o <= this.from)
        this.from += c, this.to += c;
      else if (r < this.to) {
        if (r < this.from || o > this.to || this.to - this.from + h.length > 3e4) {
          n = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(r), this.toContextPos(o), h.toString()), this.to += c;
      }
      e += c;
    }), s && !n && this.revertPending(t.state), !n;
  }
  update(t) {
    let e = this.pendingContextChange, n = t.startState.selection.main;
    this.composing && (this.composing.drifted || !t.changes.touchesRange(n.from, n.to) && t.transactions.some((s) => !s.isUserEvent("input.type") && s.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = t.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(t) || !this.rangeIsValid(t.state) ? (this.pendingContextChange = null, this.reset(t.state)) : (t.docChanged || t.selectionSet || e) && this.setSelection(t.state), (t.geometryChanged || t.docChanged || t.selectionSet) && t.view.requestMeasure(this.measureReq);
  }
  resetRange(t) {
    let { head: e } = t.selection.main;
    this.from = Math.max(
      0,
      e - 1e4
      /* CxVp.Margin */
    ), this.to = Math.min(
      t.doc.length,
      e + 1e4
      /* CxVp.Margin */
    );
  }
  reset(t) {
    this.resetRange(t), this.editContext.updateText(0, this.editContext.text.length, t.doc.sliceString(this.from, this.to)), this.setSelection(t);
  }
  revertPending(t) {
    let e = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(e.from), this.toContextPos(e.from + e.insert.length), t.doc.sliceString(e.from, e.to));
  }
  setSelection(t) {
    let { main: e } = t.selection, n = this.toContextPos(Math.max(this.from, Math.min(this.to, e.anchor))), s = this.toContextPos(e.head);
    (this.editContext.selectionStart != n || this.editContext.selectionEnd != s) && this.editContext.updateSelection(n, s);
  }
  rangeIsValid(t) {
    let { head: e } = t.selection.main;
    return !(this.from > 0 && e - this.from < 500 || this.to < t.doc.length && this.to - e < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(t, e = this.to - this.from) {
    t = Math.min(t, e);
    let n = this.composing;
    return n && n.drifted ? n.editorBase + (t - n.contextBase) : t + this.from;
  }
  toContextPos(t) {
    let e = this.composing;
    return e && e.drifted ? e.contextBase + (t - e.editorBase) : t - this.from;
  }
  destroy() {
    for (let t in this.handlers)
      this.editContext.removeEventListener(t, this.handlers[t]);
  }
}
class P {
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(t = {}) {
    var e;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), t.parent && t.parent.appendChild(this.dom);
    let { dispatch: n } = t;
    this.dispatchTransactions = t.dispatchTransactions || n && ((s) => s.forEach((r) => n(r, this))) || ((s) => this.update(s)), this.dispatch = this.dispatch.bind(this), this._root = t.root || a0(t.parent) || document, this.viewState = new hc(t.state || X.create(t)), t.scrollTo && t.scrollTo.is($s) && (this.viewState.scrollTarget = t.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Si).map((s) => new Io(s));
    for (let s of this.plugins)
      s.update(this);
    this.observer = new C1(this), this.inputState = new j0(this), this.inputState.ensureHandlers(this.plugins), this.docView = new qh(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((e = document.fonts) === null || e === void 0) && e.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...t) {
    let e = t.length == 1 && t[0] instanceof yt ? t : t.length == 1 && Array.isArray(t[0]) ? t[0] : [this.state.update(...t)];
    this.dispatchTransactions(e, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(t) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let e = !1, n = !1, s, r = this.state;
    for (let u of t) {
      if (u.startState != r)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    t.some((u) => u.annotation(Yu)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = Zu(r, o), a || (l = 1));
    let h = this.observer.delayedAndroidKey, c = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (c = null)) : this.observer.clear(), r.facet(X.phrases) != this.state.facet(X.phrases))
      return this.setState(r);
    s = gr.create(this, r, t), s.flags |= l;
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of t) {
        if (f && (f = f.map(u.changes)), u.scrollIntoView) {
          let { main: d } = u.state.selection;
          f = new Un(d.empty ? d : A.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of u.effects)
          d.is($s) && (f = d.value.clip(this.state));
      }
      this.viewState.update(s, f), this.bidiCache = yr.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), e = this.docView.update(s), this.state.facet(wi) != this.styleModules && this.mountStyles(), n = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(e, t.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet(Es) != s.state.facet(Es) && (this.viewState.mustMeasureContent = !0), (e || n || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), e && this.docViewUpdate(), !s.empty)
      for (let u of this.state.facet(Dl))
        try {
          u(s);
        } catch (d) {
          Bt(this.state, d, "update listener");
        }
    (a || c) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), c && !Ku(this, c) && h.force && jn(this.contentDOM, h.key, h.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(t) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = t;
      return;
    }
    this.updateState = 2;
    let e = this.hasFocus;
    try {
      for (let n of this.plugins)
        n.destroy(this);
      this.viewState = new hc(t), this.plugins = t.facet(Si).map((n) => new Io(n)), this.pluginMap.clear();
      for (let n of this.plugins)
        n.update(this);
      this.docView.destroy(), this.docView = new qh(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    e && this.focus(), this.requestMeasure();
  }
  updatePlugins(t) {
    let e = t.startState.facet(Si), n = t.state.facet(Si);
    if (e != n) {
      let s = [];
      for (let r of n) {
        let o = e.indexOf(r);
        if (o < 0)
          s.push(new Io(r));
        else {
          let l = this.plugins[o];
          l.mustUpdate = t, s.push(l);
        }
      }
      for (let r of this.plugins)
        r.mustUpdate != t && r.destroy(this);
      this.plugins = s, this.pluginMap.clear();
    } else
      for (let s of this.plugins)
        s.mustUpdate = t;
    for (let s = 0; s < this.plugins.length; s++)
      this.plugins[s].update(this);
    e != n && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let t of this.plugins) {
      let e = t.value;
      if (e && e.docViewUpdate)
        try {
          e.docViewUpdate(this);
        } catch (n) {
          Bt(this.state, n, "doc view update listener");
        }
    }
  }
  /**
  @internal
  */
  measure(t = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, t && this.observer.forceFlush();
    let e = null, n = this.scrollDOM, s = n.scrollTop * this.scaleY, { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    Math.abs(s - this.viewState.scrollTop) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (du(n))
            r = -1, o = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(s);
            r = d.from, o = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let h = [];
        a & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let c = h.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return Bt(this.state, p), dc;
          }
        }), f = gr.create(this, this.state, []), u = !1;
        f.flags |= a, e ? e.flags |= a : e = f, this.updateState = 2, f.empty || (this.updatePlugins(f), this.inputState.update(f), this.updateAttrs(), u = this.docView.update(f), u && this.docViewUpdate());
        for (let d = 0; d < h.length; d++)
          if (c[d] != dc)
            try {
              let p = h[d];
              p.write && p.write(c[d], this);
            } catch (p) {
              Bt(this.state, p);
            }
        if (u && this.docView.updateSelection(!0), !f.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
              continue;
            } else {
              let p = (r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o;
              if (p > 1 || p < -1) {
                s = s + p, n.scrollTop = s / this.scaleY, o = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (e && !e.empty)
      for (let l of this.state.facet(Dl))
        l(e);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return Il + " " + (this.state.facet(El) ? id : nd) + " " + this.state.facet(Es);
  }
  updateAttrs() {
    let t = pc(this, Vu, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), e = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(_e) ? "true" : "false",
      class: "cm-content",
      style: `${$.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (e["aria-readonly"] = "true"), pc(this, xa, e);
    let n = this.observer.ignore(() => {
      let s = Ol(this.contentDOM, this.contentAttrs, e), r = Ol(this.dom, this.editorAttrs, t);
      return s || r;
    });
    return this.editorAttrs = t, this.contentAttrs = e, n;
  }
  showAnnouncements(t) {
    let e = !0;
    for (let n of t)
      for (let s of n.effects)
        if (s.is(P.announce)) {
          e && (this.announceDOM.textContent = ""), e = !1;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(wi);
    let t = this.state.facet(P.cspNonce);
    on.mount(this.root, this.styleModules.concat(w1).reverse(), t ? { nonce: t } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(t) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), t) {
      if (this.measureRequests.indexOf(t) > -1)
        return;
      if (t.key != null) {
        for (let e = 0; e < this.measureRequests.length; e++)
          if (this.measureRequests[e].key === t.key) {
            this.measureRequests[e] = t;
            return;
          }
      }
      this.measureRequests.push(t);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(t) {
    let e = this.pluginMap.get(t);
    return (e === void 0 || e && e.spec != t) && this.pluginMap.set(t, e = this.plugins.find((n) => n.spec == t) || null), e && e.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  If the editor is transformed with CSS, this provides the scale
  along the X axis. Otherwise, it will just be 1. Note that
  transforms other than translation and scaling are not supported.
  */
  get scaleX() {
    return this.viewState.scaleX;
  }
  /**
  Provide the CSS transformed scale along the Y axis.
  */
  get scaleY() {
    return this.viewState.scaleY;
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(t) {
    return this.readMeasured(), this.viewState.elementAtHeight(t);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(t) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(t);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line break, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(t) {
    return this.viewState.lineBlockAt(t);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(t, e, n) {
    return No(this, t, Jh(this, t, e, n));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(t, e) {
    return No(this, t, Jh(this, t, e, (n) => N0(this, t.head, n)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(t, e) {
    let n = this.bidiSpans(t), s = this.textDirectionAt(t.from), r = n[e ? n.length - 1 : 0];
    return A.cursor(r.side(e, s) + t.from, r.forward(!e, s) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(t, e, n = !0) {
    return _0(this, t, e, n);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(t, e, n) {
    return No(this, t, F0(this, t, e, n));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(t) {
    return this.docView.domAtPos(t);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(t, e = 0) {
    return this.docView.posFromDOM(t, e);
  }
  posAtCoords(t, e = !0) {
    return this.readMeasured(), Qu(this, t, e);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(t, e = 1) {
    this.readMeasured();
    let n = this.docView.coordsAt(t, e);
    if (!n || n.left == n.right)
      return n;
    let s = this.state.doc.lineAt(t), r = this.bidiSpans(s), o = r[en.find(r, t - s.from, -1, e)];
    return Yr(n, o.dir == rt.LTR == e > 0);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(t) {
    return this.readMeasured(), this.docView.coordsForChar(t);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(t) {
    return !this.state.facet(Iu) || t < this.viewport.from || t > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(t) {
    if (t.length > M1)
      return Tu(t.length);
    let e = this.textDirectionAt(t.from), n;
    for (let r of this.bidiCache)
      if (r.from == t.from && r.dir == e && (r.fresh || Mu(r.isolates, n = zh(this, t))))
        return r.order;
    n || (n = zh(this, t));
    let s = S0(t.text, e, n);
    return this.bidiCache.push(new yr(t.from, t.to, e, n, !0, s)), s;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var t;
    return (this.dom.ownerDocument.hasFocus() || $.safari && ((t = this.inputState) === null || t === void 0 ? void 0 : t.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      fu(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(t) {
    this._root != t && (this._root = t, this.observer.setWindow((t.nodeType == 9 ? t : t.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let t of this.plugins)
      t.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(t, e = {}) {
    return $s.of(new Un(typeof t == "number" ? A.cursor(t) : t, e.y, e.x, e.yMargin, e.xMargin));
  }
  /**
  Return an effect that resets the editor to its current (at the
  time this method was called) scroll position. Note that this
  only affects the editor's own scrollable element, not parents.
  See also
  [`EditorViewConfig.scrollTo`](https://codemirror.net/6/docs/ref/#view.EditorViewConfig.scrollTo).
  
  The effect should be used with a document identical to the one
  it was created for. Failing to do so is not an error, but may
  not scroll to the expected position. You can
  [map](https://codemirror.net/6/docs/ref/#state.StateEffect.map) the effect to account for changes.
  */
  scrollSnapshot() {
    let { scrollTop: t, scrollLeft: e } = this.scrollDOM, n = this.viewState.scrollAnchorAt(t);
    return $s.of(new Un(A.cursor(n.from), "start", "start", n.top - t, e, !0));
  }
  /**
  Enable or disable tab-focus mode, which disables key bindings
  for Tab and Shift-Tab, letting the browser's default
  focus-changing behavior go through instead. This is useful to
  prevent trapping keyboard users in your editor.
  
  Without argument, this toggles the mode. With a boolean, it
  enables (true) or disables it (false). Given a number, it
  temporarily enables the mode until that number of milliseconds
  have passed or another non-Tab key is pressed.
  */
  setTabFocusMode(t) {
    t == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof t == "boolean" ? this.inputState.tabFocusMode = t ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + t);
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(t) {
    return ft.define(() => ({}), { eventHandlers: t });
  }
  /**
  Create an extension that registers DOM event observers. Contrary
  to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
  observers can't be prevented from running by a higher-precedence
  handler returning true. They also don't prevent other handlers
  and observers from running when they return true, and should not
  call `preventDefault`.
  */
  static domEventObservers(t) {
    return ft.define(() => ({}), { eventObservers: t });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(t, e) {
    let n = on.newName(), s = [Es.of(n), wi.of(_l(`.${n}`, t))];
    return e && e.dark && s.push(El.of(!0)), s;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(t) {
    return En.lowest(wi.of(_l("." + Il, t, sd)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(t) {
    var e;
    let n = t.querySelector(".cm-content"), s = n && nt.get(n) || nt.get(t);
    return ((e = s == null ? void 0 : s.rootView) === null || e === void 0 ? void 0 : e.view) || null;
  }
}
P.styleModule = wi;
P.inputHandler = Lu;
P.clipboardInputFilter = ba;
P.clipboardOutputFilter = va;
P.scrollHandler = Nu;
P.focusChangeEffect = Eu;
P.perLineTextDirection = Iu;
P.exceptionSink = Bu;
P.updateListener = Dl;
P.editable = _e;
P.mouseSelectionStyle = Ru;
P.dragMovesSelection = Du;
P.clickAddsSelectionRange = Pu;
P.decorations = Ki;
P.outerDecorations = Wu;
P.atomicRanges = Sa;
P.bidiIsolatedRanges = Hu;
P.scrollMargins = zu;
P.darkTheme = El;
P.cspNonce = /* @__PURE__ */ D.define({ combine: (i) => i.length ? i[0] : "" });
P.contentAttributes = xa;
P.editorAttributes = Vu;
P.lineWrapping = /* @__PURE__ */ P.contentAttributes.of({ class: "cm-lineWrapping" });
P.announce = /* @__PURE__ */ H.define();
const M1 = 4096, dc = {};
class yr {
  constructor(t, e, n, s, r, o) {
    this.from = t, this.to = e, this.dir = n, this.isolates = s, this.fresh = r, this.order = o;
  }
  static update(t, e) {
    if (e.empty && !t.some((r) => r.fresh))
      return t;
    let n = [], s = t.length ? t[t.length - 1].dir : rt.LTR;
    for (let r = Math.max(0, t.length - 10); r < t.length; r++) {
      let o = t[r];
      o.dir == s && !e.touchesRange(o.from, o.to) && n.push(new yr(e.mapPos(o.from, 1), e.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return n;
  }
}
function pc(i, t, e) {
  for (let n = i.state.facet(t), s = n.length - 1; s >= 0; s--) {
    let r = n[s], o = typeof r == "function" ? r(i) : r;
    o && Al(o, e);
  }
  return e;
}
const T1 = $.mac ? "mac" : $.windows ? "win" : $.linux ? "linux" : "key";
function $1(i, t) {
  const e = i.split(/-(?!$)/);
  let n = e[e.length - 1];
  n == "Space" && (n = " ");
  let s, r, o, l;
  for (let a = 0; a < e.length - 1; ++a) {
    const h = e[a];
    if (/^(cmd|meta|m)$/i.test(h))
      l = !0;
    else if (/^a(lt)?$/i.test(h))
      s = !0;
    else if (/^(c|ctrl|control)$/i.test(h))
      r = !0;
    else if (/^s(hift)?$/i.test(h))
      o = !0;
    else if (/^mod$/i.test(h))
      t == "mac" ? l = !0 : r = !0;
    else
      throw new Error("Unrecognized modifier name: " + h);
  }
  return s && (n = "Alt-" + n), r && (n = "Ctrl-" + n), l && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function Is(i, t, e) {
  return t.altKey && (i = "Alt-" + i), t.ctrlKey && (i = "Ctrl-" + i), t.metaKey && (i = "Meta-" + i), e !== !1 && t.shiftKey && (i = "Shift-" + i), i;
}
const P1 = /* @__PURE__ */ En.default(/* @__PURE__ */ P.domEventHandlers({
  keydown(i, t) {
    return od(rd(t.state), i, t, "editor");
  }
})), eo = /* @__PURE__ */ D.define({ enables: P1 }), gc = /* @__PURE__ */ new WeakMap();
function rd(i) {
  let t = i.facet(eo), e = gc.get(t);
  return e || gc.set(t, e = B1(t.reduce((n, s) => n.concat(s), []))), e;
}
function D1(i, t, e) {
  return od(rd(i.state), t, i, e);
}
let Ye = null;
const R1 = 4e3;
function B1(i, t = T1) {
  let e = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), s = (o, l) => {
    let a = n[o];
    if (a == null)
      n[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (o, l, a, h, c) => {
    var f, u;
    let d = e[o] || (e[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((y) => $1(y, t));
    for (let y = 1; y < p.length; y++) {
      let b = p.slice(0, y).join(" ");
      s(b, !0), d[b] || (d[b] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(S) => {
          let w = Ye = { view: S, prefix: b, scope: o };
          return setTimeout(() => {
            Ye == w && (Ye = null);
          }, R1), !0;
        }]
      });
    }
    let m = p.join(" ");
    s(m, !1);
    let g = d[m] || (d[m] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((u = (f = d._any) === null || f === void 0 ? void 0 : f.run) === null || u === void 0 ? void 0 : u.slice()) || []
    });
    a && g.run.push(a), h && (g.preventDefault = !0), c && (g.stopPropagation = !0);
  };
  for (let o of i) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let h of l) {
        let c = e[h] || (e[h] = /* @__PURE__ */ Object.create(null));
        c._any || (c._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: f } = o;
        for (let u in c)
          c[u].run.push((d) => f(d, Nl));
      }
    let a = o[t] || o.key;
    if (a)
      for (let h of l)
        r(h, a, o.run, o.preventDefault, o.stopPropagation), o.shift && r(h, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return e;
}
let Nl = null;
function od(i, t, e, n) {
  Nl = t;
  let s = i0(t), r = Vt(s, 0), o = ke(r) == s.length && s != " ", l = "", a = !1, h = !1, c = !1;
  Ye && Ye.view == e && Ye.scope == n && (l = Ye.prefix + " ", Uu.indexOf(t.keyCode) < 0 && (h = !0, Ye = null));
  let f = /* @__PURE__ */ new Set(), u = (g) => {
    if (g) {
      for (let y of g.run)
        if (!f.has(y) && (f.add(y), y(e)))
          return g.stopPropagation && (c = !0), !0;
      g.preventDefault && (g.stopPropagation && (c = !0), h = !0);
    }
    return !1;
  }, d = i[n], p, m;
  return d && (u(d[l + Is(s, t, !o)]) ? a = !0 : o && (t.altKey || t.metaKey || t.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !($.windows && t.ctrlKey && t.altKey) && (p = ln[t.keyCode]) && p != s ? (u(d[l + Is(p, t, !0)]) || t.shiftKey && (m = zi[t.keyCode]) != s && m != p && u(d[l + Is(m, t, !1)])) && (a = !0) : o && t.shiftKey && u(d[l + Is(s, t, !0)]) && (a = !0), !a && u(d._any) && (a = !0)), h && (a = !0), a && c && t.stopPropagation(), Nl = null, a;
}
class as {
  /**
  Create a marker with the given class and dimensions. If `width`
  is null, the DOM element will get no width style.
  */
  constructor(t, e, n, s, r) {
    this.className = t, this.left = e, this.top = n, this.width = s, this.height = r;
  }
  draw() {
    let t = document.createElement("div");
    return t.className = this.className, this.adjust(t), t;
  }
  update(t, e) {
    return e.className != this.className ? !1 : (this.adjust(t), !0);
  }
  adjust(t) {
    t.style.left = this.left + "px", t.style.top = this.top + "px", this.width != null && (t.style.width = this.width + "px"), t.style.height = this.height + "px";
  }
  eq(t) {
    return this.left == t.left && this.top == t.top && this.width == t.width && this.height == t.height && this.className == t.className;
  }
  /**
  Create a set of rectangles for the given selection range,
  assigning them theclass`className`. Will create a single
  rectangle for empty ranges, and a set of selection-style
  rectangles covering the range's content (in a bidi-aware
  way) for non-empty ones.
  */
  static forRange(t, e, n) {
    if (n.empty) {
      let s = t.coordsAtPos(n.head, n.assoc || 1);
      if (!s)
        return [];
      let r = ld(t);
      return [new as(e, s.left - r.left, s.top - r.top, null, s.bottom - s.top)];
    } else
      return L1(t, e, n);
  }
}
function ld(i) {
  let t = i.scrollDOM.getBoundingClientRect();
  return { left: (i.textDirection == rt.LTR ? t.left : t.right - i.scrollDOM.clientWidth * i.scaleX) - i.scrollDOM.scrollLeft * i.scaleX, top: t.top - i.scrollDOM.scrollTop * i.scaleY };
}
function mc(i, t, e, n) {
  let s = i.coordsAtPos(t, e * 2);
  if (!s)
    return n;
  let r = i.dom.getBoundingClientRect(), o = (s.top + s.bottom) / 2, l = i.posAtCoords({ x: r.left + 1, y: o }), a = i.posAtCoords({ x: r.right - 1, y: o });
  return l == null || a == null ? n : { from: Math.max(n.from, Math.min(l, a)), to: Math.min(n.to, Math.max(l, a)) };
}
function L1(i, t, e) {
  if (e.to <= i.viewport.from || e.from >= i.viewport.to)
    return [];
  let n = Math.max(e.from, i.viewport.from), s = Math.min(e.to, i.viewport.to), r = i.textDirection == rt.LTR, o = i.contentDOM, l = o.getBoundingClientRect(), a = ld(i), h = o.querySelector(".cm-line"), c = h && window.getComputedStyle(h), f = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0), u = l.right - (c ? parseInt(c.paddingRight) : 0), d = Bl(i, n), p = Bl(i, s), m = d.type == Lt.Text ? d : null, g = p.type == Lt.Text ? p : null;
  if (m && (i.lineWrapping || d.widgetLineBreaks) && (m = mc(i, n, 1, m)), g && (i.lineWrapping || p.widgetLineBreaks) && (g = mc(i, s, -1, g)), m && g && m.from == g.from && m.to == g.to)
    return b(S(e.from, e.to, m));
  {
    let v = m ? S(e.from, null, m) : w(d, !1), C = g ? S(null, e.to, g) : w(p, !0), k = [];
    return (m || d).to < (g || p).from - (m && g ? 1 : 0) || d.widgetLineBreaks > 1 && v.bottom + i.defaultLineHeight / 2 < C.top ? k.push(y(f, v.bottom, u, C.top)) : v.bottom < C.top && i.elementAtHeight((v.bottom + C.top) / 2).type == Lt.Text && (v.bottom = C.top = (v.bottom + C.top) / 2), b(v).concat(k).concat(b(C));
  }
  function y(v, C, k, R) {
    return new as(t, v - a.left, C - a.top, k - v, R - C);
  }
  function b({ top: v, bottom: C, horizontal: k }) {
    let R = [];
    for (let E = 0; E < k.length; E += 2)
      R.push(y(k[E], v, k[E + 1], C));
    return R;
  }
  function S(v, C, k) {
    let R = 1e9, E = -1e9, N = [];
    function I(T, F, z, j, Z) {
      let G = i.coordsAtPos(T, T == k.to ? -2 : 2), it = i.coordsAtPos(z, z == k.from ? 2 : -2);
      !G || !it || (R = Math.min(G.top, it.top, R), E = Math.max(G.bottom, it.bottom, E), Z == rt.LTR ? N.push(r && F ? f : G.left, r && j ? u : it.right) : N.push(!r && j ? f : it.left, !r && F ? u : G.right));
    }
    let M = v ?? k.from, _ = C ?? k.to;
    for (let T of i.visibleRanges)
      if (T.to > M && T.from < _)
        for (let F = Math.max(T.from, M), z = Math.min(T.to, _); ; ) {
          let j = i.state.doc.lineAt(F);
          for (let Z of i.bidiSpans(j)) {
            let G = Z.from + j.from, it = Z.to + j.from;
            if (G >= z)
              break;
            it > F && I(Math.max(G, F), v == null && G <= M, Math.min(it, z), C == null && it >= _, Z.dir);
          }
          if (F = j.to + 1, F >= z)
            break;
        }
    return N.length == 0 && I(M, v == null, _, C == null, i.textDirection), { top: R, bottom: E, horizontal: N };
  }
  function w(v, C) {
    let k = l.top + (C ? v.top : v.bottom);
    return { top: k, bottom: k, horizontal: [] };
  }
}
function E1(i, t) {
  return i.constructor == t.constructor && i.eq(t);
}
class I1 {
  constructor(t, e) {
    this.view = t, this.layer = e, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = t.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), e.above && this.dom.classList.add("cm-layer-above"), e.class && this.dom.classList.add(e.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(t.state), t.requestMeasure(this.measureReq), e.mount && e.mount(this.dom, t);
  }
  update(t) {
    t.startState.facet(ir) != t.state.facet(ir) && this.setOrder(t.state), (this.layer.update(t, this.dom) || t.geometryChanged) && (this.scale(), t.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(t) {
    this.layer.updateOnDocViewUpdate !== !1 && t.requestMeasure(this.measureReq);
  }
  setOrder(t) {
    let e = 0, n = t.facet(ir);
    for (; e < n.length && n[e] != this.layer; )
      e++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - e);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: t, scaleY: e } = this.view;
    (t != this.scaleX || e != this.scaleY) && (this.scaleX = t, this.scaleY = e, this.dom.style.transform = `scale(${1 / t}, ${1 / e})`);
  }
  draw(t) {
    if (t.length != this.drawn.length || t.some((e, n) => !E1(e, this.drawn[n]))) {
      let e = this.dom.firstChild, n = 0;
      for (let s of t)
        s.update && e && s.constructor && this.drawn[n].constructor && s.update(e, this.drawn[n]) ? (e = e.nextSibling, n++) : this.dom.insertBefore(s.draw(), e);
      for (; e; ) {
        let s = e.nextSibling;
        e.remove(), e = s;
      }
      this.drawn = t;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const ir = /* @__PURE__ */ D.define();
function ad(i) {
  return [
    ft.define((t) => new I1(t, i)),
    ir.of(i)
  ];
}
const hd = !($.ios && $.webkit && $.webkit_version < 534), ji = /* @__PURE__ */ D.define({
  combine(i) {
    return Be(i, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0
    }, {
      cursorBlinkRate: (t, e) => Math.min(t, e),
      drawRangeCursor: (t, e) => t || e
    });
  }
});
function _1(i = {}) {
  return [
    ji.of(i),
    N1,
    F1,
    V1,
    _u.of(!0)
  ];
}
function cd(i) {
  return i.startState.facet(ji) != i.state.facet(ji);
}
const N1 = /* @__PURE__ */ ad({
  above: !0,
  markers(i) {
    let { state: t } = i, e = t.facet(ji), n = [];
    for (let s of t.selection.ranges) {
      let r = s == t.selection.main;
      if (s.empty ? !r || hd : e.drawRangeCursor) {
        let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = s.empty ? s : A.cursor(s.head, s.head > s.anchor ? -1 : 1);
        for (let a of as.forRange(i, o, l))
          n.push(a);
      }
    }
    return n;
  },
  update(i, t) {
    i.transactions.some((n) => n.selection) && (t.style.animationName = t.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let e = cd(i);
    return e && yc(i.state, t), i.docChanged || i.selectionSet || e;
  },
  mount(i, t) {
    yc(t.state, i);
  },
  class: "cm-cursorLayer"
});
function yc(i, t) {
  t.style.animationDuration = i.facet(ji).cursorBlinkRate + "ms";
}
const F1 = /* @__PURE__ */ ad({
  above: !1,
  markers(i) {
    return i.state.selection.ranges.map((t) => t.empty ? [] : as.forRange(i, "cm-selectionBackground", t)).reduce((t, e) => t.concat(e));
  },
  update(i, t) {
    return i.docChanged || i.selectionSet || i.viewportChanged || cd(i);
  },
  class: "cm-selectionLayer"
}), Fl = {
  ".cm-line": {
    "& ::selection, &::selection": { backgroundColor: "transparent !important" }
  },
  ".cm-content": {
    "& :focus": {
      caretColor: "initial !important",
      "&::selection, & ::selection": {
        backgroundColor: "Highlight !important"
      }
    }
  }
};
hd && (Fl[".cm-line"].caretColor = Fl[".cm-content"].caretColor = "transparent !important");
const V1 = /* @__PURE__ */ En.highest(/* @__PURE__ */ P.theme(Fl)), fd = /* @__PURE__ */ H.define({
  map(i, t) {
    return i == null ? null : t.mapPos(i);
  }
}), Ai = /* @__PURE__ */ kt.define({
  create() {
    return null;
  },
  update(i, t) {
    return i != null && (i = t.changes.mapPos(i)), t.effects.reduce((e, n) => n.is(fd) ? n.value : e, i);
  }
}), W1 = /* @__PURE__ */ ft.fromClass(class {
  constructor(i) {
    this.view = i, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(i) {
    var t;
    let e = i.state.field(Ai);
    e == null ? this.cursor != null && ((t = this.cursor) === null || t === void 0 || t.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (i.startState.field(Ai) != e || i.docChanged || i.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: i } = this, t = i.state.field(Ai), e = t != null && i.coordsAtPos(t);
    if (!e)
      return null;
    let n = i.scrollDOM.getBoundingClientRect();
    return {
      left: e.left - n.left + i.scrollDOM.scrollLeft * i.scaleX,
      top: e.top - n.top + i.scrollDOM.scrollTop * i.scaleY,
      height: e.bottom - e.top
    };
  }
  drawCursor(i) {
    if (this.cursor) {
      let { scaleX: t, scaleY: e } = this.view;
      i ? (this.cursor.style.left = i.left / t + "px", this.cursor.style.top = i.top / e + "px", this.cursor.style.height = i.height / e + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(i) {
    this.view.state.field(Ai) != i && this.view.dispatch({ effects: fd.of(i) });
  }
}, {
  eventObservers: {
    dragover(i) {
      this.setDropPos(this.view.posAtCoords({ x: i.clientX, y: i.clientY }));
    },
    dragleave(i) {
      (i.target == this.view.contentDOM || !this.view.contentDOM.contains(i.relatedTarget)) && this.setDropPos(null);
    },
    dragend() {
      this.setDropPos(null);
    },
    drop() {
      this.setDropPos(null);
    }
  }
});
function H1() {
  return [Ai, W1];
}
function bc(i, t, e, n, s) {
  t.lastIndex = 0;
  for (let r = i.iterRange(e, n), o = e, l; !r.next().done; o += r.value.length)
    if (!r.lineBreak)
      for (; l = t.exec(r.value); )
        s(o + l.index, l);
}
function z1(i, t) {
  let e = i.visibleRanges;
  if (e.length == 1 && e[0].from == i.viewport.from && e[0].to == i.viewport.to)
    return e;
  let n = [];
  for (let { from: s, to: r } of e)
    s = Math.max(i.state.doc.lineAt(s).from, s - t), r = Math.min(i.state.doc.lineAt(r).to, r + t), n.length && n[n.length - 1].to >= s ? n[n.length - 1].to = r : n.push({ from: s, to: r });
  return n;
}
class q1 {
  /**
  Create a decorator.
  */
  constructor(t) {
    const { regexp: e, decoration: n, decorate: s, boundary: r, maxLength: o = 1e3 } = t;
    if (!e.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = e, s)
      this.addMatch = (l, a, h, c) => s(c, h, h + l[0].length, l, a);
    else if (typeof n == "function")
      this.addMatch = (l, a, h, c) => {
        let f = n(l, a, h);
        f && c(h, h + l[0].length, f);
      };
    else if (n)
      this.addMatch = (l, a, h, c) => c(h, h + l[0].length, n);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = r, this.maxLength = o;
  }
  /**
  Compute the full set of decorations for matches in the given
  view's viewport. You'll want to call this when initializing your
  plugin.
  */
  createDeco(t) {
    let e = new He(), n = e.add.bind(e);
    for (let { from: s, to: r } of z1(t, this.maxLength))
      bc(t.state.doc, this.regexp, s, r, (o, l) => this.addMatch(l, t, o, n));
    return e.finish();
  }
  /**
  Update a set of decorations for a view update. `deco` _must_ be
  the set of decorations produced by _this_ `MatchDecorator` for
  the view state before the update.
  */
  updateDeco(t, e) {
    let n = 1e9, s = -1;
    return t.docChanged && t.changes.iterChanges((r, o, l, a) => {
      a >= t.view.viewport.from && l <= t.view.viewport.to && (n = Math.min(l, n), s = Math.max(a, s));
    }), t.viewportMoved || s - n > 1e3 ? this.createDeco(t.view) : s > -1 ? this.updateRange(t.view, e.map(t.changes), n, s) : e;
  }
  updateRange(t, e, n, s) {
    for (let r of t.visibleRanges) {
      let o = Math.max(r.from, n), l = Math.min(r.to, s);
      if (l > o) {
        let a = t.state.doc.lineAt(o), h = a.to < l ? t.state.doc.lineAt(l) : a, c = Math.max(r.from, a.from), f = Math.min(r.to, h.to);
        if (this.boundary) {
          for (; o > a.from; o--)
            if (this.boundary.test(a.text[o - 1 - a.from])) {
              c = o;
              break;
            }
          for (; l < h.to; l++)
            if (this.boundary.test(h.text[l - h.from])) {
              f = l;
              break;
            }
        }
        let u = [], d, p = (m, g, y) => u.push(y.range(m, g));
        if (a == h)
          for (this.regexp.lastIndex = c - a.from; (d = this.regexp.exec(a.text)) && d.index < f - a.from; )
            this.addMatch(d, t, d.index + a.from, p);
        else
          bc(t.state.doc, this.regexp, c, f, (m, g) => this.addMatch(g, t, m, p));
        e = e.update({ filterFrom: c, filterTo: f, filter: (m, g) => m < c || g > f, add: u });
      }
    }
    return e;
  }
}
const Vl = /x/.unicode != null ? "gu" : "g", Q1 = /* @__PURE__ */ new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, Vl), K1 = {
  0: "null",
  7: "bell",
  8: "backspace",
  10: "newline",
  11: "vertical tab",
  13: "carriage return",
  27: "escape",
  8203: "zero width space",
  8204: "zero width non-joiner",
  8205: "zero width joiner",
  8206: "left-to-right mark",
  8207: "right-to-left mark",
  8232: "line separator",
  8237: "left-to-right override",
  8238: "right-to-left override",
  8294: "left-to-right isolate",
  8295: "right-to-left isolate",
  8297: "pop directional isolate",
  8233: "paragraph separator",
  65279: "zero width no-break space",
  65532: "object replacement"
};
let Wo = null;
function j1() {
  var i;
  if (Wo == null && typeof document < "u" && document.body) {
    let t = document.body.style;
    Wo = ((i = t.tabSize) !== null && i !== void 0 ? i : t.MozTabSize) != null;
  }
  return Wo || !1;
}
const sr = /* @__PURE__ */ D.define({
  combine(i) {
    let t = Be(i, {
      render: null,
      specialChars: Q1,
      addSpecialChars: null
    });
    return (t.replaceTabs = !j1()) && (t.specialChars = new RegExp("	|" + t.specialChars.source, Vl)), t.addSpecialChars && (t.specialChars = new RegExp(t.specialChars.source + "|" + t.addSpecialChars.source, Vl)), t;
  }
});
function U1(i = {}) {
  return [sr.of(i), J1()];
}
let vc = null;
function J1() {
  return vc || (vc = ft.fromClass(class {
    constructor(i) {
      this.view = i, this.decorations = V.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(i.state.facet(sr)), this.decorations = this.decorator.createDeco(i);
    }
    makeDecorator(i) {
      return new q1({
        regexp: i.specialChars,
        decoration: (t, e, n) => {
          let { doc: s } = e.state, r = Vt(t[0], 0);
          if (r == 9) {
            let o = s.lineAt(n), l = e.state.tabSize, a = fi(o.text, l, n - o.from);
            return V.replace({
              widget: new Z1((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX)
            });
          }
          return this.decorationCache[r] || (this.decorationCache[r] = V.replace({ widget: new Y1(i, r) }));
        },
        boundary: i.replaceTabs ? void 0 : /[^]/
      });
    }
    update(i) {
      let t = i.state.facet(sr);
      i.startState.facet(sr) != t ? (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(i.view)) : this.decorations = this.decorator.updateDeco(i, this.decorations);
    }
  }, {
    decorations: (i) => i.decorations
  }));
}
const G1 = "•";
function X1(i) {
  return i >= 32 ? G1 : i == 10 ? "␤" : String.fromCharCode(9216 + i);
}
class Y1 extends fn {
  constructor(t, e) {
    super(), this.options = t, this.code = e;
  }
  eq(t) {
    return t.code == this.code;
  }
  toDOM(t) {
    let e = X1(this.code), n = t.state.phrase("Control character") + " " + (K1[this.code] || "0x" + this.code.toString(16)), s = this.options.render && this.options.render(this.code, n, e);
    if (s)
      return s;
    let r = document.createElement("span");
    return r.textContent = e, r.title = n, r.setAttribute("aria-label", n), r.className = "cm-specialChar", r;
  }
  ignoreEvent() {
    return !1;
  }
}
class Z1 extends fn {
  constructor(t) {
    super(), this.width = t;
  }
  eq(t) {
    return t.width == this.width;
  }
  toDOM() {
    let t = document.createElement("span");
    return t.textContent = "	", t.className = "cm-tab", t.style.width = this.width + "px", t;
  }
  ignoreEvent() {
    return !1;
  }
}
function ty() {
  return ny;
}
const ey = /* @__PURE__ */ V.line({ class: "cm-activeLine" }), ny = /* @__PURE__ */ ft.fromClass(class {
  constructor(i) {
    this.decorations = this.getDeco(i);
  }
  update(i) {
    (i.docChanged || i.selectionSet) && (this.decorations = this.getDeco(i.view));
  }
  getDeco(i) {
    let t = -1, e = [];
    for (let n of i.state.selection.ranges) {
      let s = i.lineBlockAt(n.head);
      s.from > t && (e.push(ey.range(s.from)), t = s.from);
    }
    return V.set(e);
  }
}, {
  decorations: (i) => i.decorations
}), Wl = 2e3;
function iy(i, t, e) {
  let n = Math.min(t.line, e.line), s = Math.max(t.line, e.line), r = [];
  if (t.off > Wl || e.off > Wl || t.col < 0 || e.col < 0) {
    let o = Math.min(t.off, e.off), l = Math.max(t.off, e.off);
    for (let a = n; a <= s; a++) {
      let h = i.doc.line(a);
      h.length <= l && r.push(A.range(h.from + o, h.to + l));
    }
  } else {
    let o = Math.min(t.col, e.col), l = Math.max(t.col, e.col);
    for (let a = n; a <= s; a++) {
      let h = i.doc.line(a), c = bl(h.text, o, i.tabSize, !0);
      if (c < 0)
        r.push(A.cursor(h.to));
      else {
        let f = bl(h.text, l, i.tabSize);
        r.push(A.range(h.from + c, h.from + f));
      }
    }
  }
  return r;
}
function sy(i, t) {
  let e = i.coordsAtPos(i.viewport.from);
  return e ? Math.round(Math.abs((e.left - t) / i.defaultCharacterWidth)) : -1;
}
function xc(i, t) {
  let e = i.posAtCoords({ x: t.clientX, y: t.clientY }, !1), n = i.state.doc.lineAt(e), s = e - n.from, r = s > Wl ? -1 : s == n.length ? sy(i, t.clientX) : fi(n.text, i.state.tabSize, e - n.from);
  return { line: n.number, col: r, off: s };
}
function ry(i, t) {
  let e = xc(i, t), n = i.state.selection;
  return e ? {
    update(s) {
      if (s.docChanged) {
        let r = s.changes.mapPos(s.startState.doc.line(e.line).from), o = s.state.doc.lineAt(r);
        e = { line: o.number, col: e.col, off: Math.min(e.off, o.length) }, n = n.map(s.changes);
      }
    },
    get(s, r, o) {
      let l = xc(i, s);
      if (!l)
        return n;
      let a = iy(i.state, e, l);
      return a.length ? o ? A.create(a.concat(n.ranges)) : A.create(a) : n;
    }
  } : null;
}
function oy(i) {
  let t = (e) => e.altKey && e.button == 0;
  return P.mouseSelectionStyle.of((e, n) => t(n) ? ry(e, n) : null);
}
const ly = {
  Alt: [18, (i) => !!i.altKey],
  Control: [17, (i) => !!i.ctrlKey],
  Shift: [16, (i) => !!i.shiftKey],
  Meta: [91, (i) => !!i.metaKey]
}, ay = { style: "cursor: crosshair" };
function hy(i = {}) {
  let [t, e] = ly[i.key || "Alt"], n = ft.fromClass(class {
    constructor(s) {
      this.view = s, this.isDown = !1;
    }
    set(s) {
      this.isDown != s && (this.isDown = s, this.view.update([]));
    }
  }, {
    eventObservers: {
      keydown(s) {
        this.set(s.keyCode == t || e(s));
      },
      keyup(s) {
        (s.keyCode == t || !e(s)) && this.set(!1);
      },
      mousemove(s) {
        this.set(e(s));
      }
    }
  });
  return [
    n,
    P.contentAttributes.of((s) => {
      var r;
      return !((r = s.plugin(n)) === null || r === void 0) && r.isDown ? ay : null;
    })
  ];
}
const yi = "-10000px";
class ud {
  constructor(t, e, n, s) {
    this.facet = e, this.createTooltipView = n, this.removeTooltipView = s, this.input = t.state.facet(e), this.tooltips = this.input.filter((o) => o);
    let r = null;
    this.tooltipViews = this.tooltips.map((o) => r = n(o, r));
  }
  update(t, e) {
    var n;
    let s = t.state.facet(this.facet), r = s.filter((a) => a);
    if (s === this.input) {
      for (let a of this.tooltipViews)
        a.update && a.update(t);
      return !1;
    }
    let o = [], l = e ? [] : null;
    for (let a = 0; a < r.length; a++) {
      let h = r[a], c = -1;
      if (h) {
        for (let f = 0; f < this.tooltips.length; f++) {
          let u = this.tooltips[f];
          u && u.create == h.create && (c = f);
        }
        if (c < 0)
          o[a] = this.createTooltipView(h, a ? o[a - 1] : null), l && (l[a] = !!h.above);
        else {
          let f = o[a] = this.tooltipViews[c];
          l && (l[a] = e[c]), f.update && f.update(t);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 && (this.removeTooltipView(a), (n = a.destroy) === null || n === void 0 || n.call(a));
    return e && (l.forEach((a, h) => e[h] = a), e.length = l.length), this.input = s, this.tooltips = r, this.tooltipViews = o, !0;
  }
}
function cy(i) {
  let t = i.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: t.clientHeight, right: t.clientWidth };
}
const Ho = /* @__PURE__ */ D.define({
  combine: (i) => {
    var t, e, n;
    return {
      position: $.ios ? "absolute" : ((t = i.find((s) => s.position)) === null || t === void 0 ? void 0 : t.position) || "fixed",
      parent: ((e = i.find((s) => s.parent)) === null || e === void 0 ? void 0 : e.parent) || null,
      tooltipSpace: ((n = i.find((s) => s.tooltipSpace)) === null || n === void 0 ? void 0 : n.tooltipSpace) || cy
    };
  }
}), Sc = /* @__PURE__ */ new WeakMap(), Oa = /* @__PURE__ */ ft.fromClass(class {
  constructor(i) {
    this.view = i, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let t = i.state.facet(Ho);
    this.position = t.position, this.parent = t.parent, this.classes = i.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new ud(i, Ma, (e, n) => this.createTooltip(e, n), (e) => {
      this.resizeObserver && this.resizeObserver.unobserve(e.dom), e.dom.remove();
    }), this.above = this.manager.tooltips.map((e) => !!e.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((e) => {
      Date.now() > this.lastTransaction - 50 && e.length > 0 && e[e.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), i.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let i of this.manager.tooltipViews)
        this.intersectionObserver.observe(i.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(i) {
    i.transactions.length && (this.lastTransaction = Date.now());
    let t = this.manager.update(i, this.above);
    t && this.observeIntersection();
    let e = t || i.geometryChanged, n = i.state.facet(Ho);
    if (n.position != this.position && !this.madeAbsolute) {
      this.position = n.position;
      for (let s of this.manager.tooltipViews)
        s.dom.style.position = this.position;
      e = !0;
    }
    if (n.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = n.parent, this.createContainer();
      for (let s of this.manager.tooltipViews)
        this.container.appendChild(s.dom);
      e = !0;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    e && this.maybeMeasure();
  }
  createTooltip(i, t) {
    let e = i.create(this.view), n = t ? t.dom : null;
    if (e.dom.classList.add("cm-tooltip"), i.arrow && !e.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let s = document.createElement("div");
      s.className = "cm-tooltip-arrow", e.dom.appendChild(s);
    }
    return e.dom.style.position = this.position, e.dom.style.top = yi, e.dom.style.left = "0px", this.container.insertBefore(e.dom, n), e.mount && e.mount(this.view), this.resizeObserver && this.resizeObserver.observe(e.dom), e;
  }
  destroy() {
    var i, t, e;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let n of this.manager.tooltipViews)
      n.dom.remove(), (i = n.destroy) === null || i === void 0 || i.call(n);
    this.parent && this.container.remove(), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), (e = this.intersectionObserver) === null || e === void 0 || e.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let i = 1, t = 1, e = !1;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: r } = this.manager.tooltipViews[0];
      if ($.gecko)
        e = r.offsetParent != this.container.ownerDocument.body;
      else if (r.style.top == yi && r.style.left == "0px") {
        let o = r.getBoundingClientRect();
        e = Math.abs(o.top + 1e4) > 1 || Math.abs(o.left) > 1;
      }
    }
    if (e || this.position == "absolute")
      if (this.parent) {
        let r = this.parent.getBoundingClientRect();
        r.width && r.height && (i = r.width / this.parent.offsetWidth, t = r.height / this.parent.offsetHeight);
      } else
        ({ scaleX: i, scaleY: t } = this.view.viewState);
    let n = this.view.scrollDOM.getBoundingClientRect(), s = wa(this.view);
    return {
      visible: {
        left: n.left + s.left,
        top: n.top + s.top,
        right: n.right - s.right,
        bottom: n.bottom - s.bottom
      },
      parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
      pos: this.manager.tooltips.map((r, o) => {
        let l = this.manager.tooltipViews[o];
        return l.getCoords ? l.getCoords(r.pos) : this.view.coordsAtPos(r.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: r }) => r.getBoundingClientRect()),
      space: this.view.state.facet(Ho).tooltipSpace(this.view),
      scaleX: i,
      scaleY: t,
      makeAbsolute: e
    };
  }
  writeMeasure(i) {
    var t;
    if (i.makeAbsolute) {
      this.madeAbsolute = !0, this.position = "absolute";
      for (let l of this.manager.tooltipViews)
        l.dom.style.position = "absolute";
    }
    let { visible: e, space: n, scaleX: s, scaleY: r } = i, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], h = this.manager.tooltipViews[l], { dom: c } = h, f = i.pos[l], u = i.size[l];
      if (!f || a.clip !== !1 && (f.bottom <= Math.max(e.top, n.top) || f.top >= Math.min(e.bottom, n.bottom) || f.right < Math.max(e.left, n.left) - 0.1 || f.left > Math.min(e.right, n.right) + 0.1)) {
        c.style.top = yi;
        continue;
      }
      let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null, p = d ? 7 : 0, m = u.right - u.left, g = (t = Sc.get(h)) !== null && t !== void 0 ? t : u.bottom - u.top, y = h.offset || uy, b = this.view.textDirection == rt.LTR, S = u.width > n.right - n.left ? b ? n.left : n.right - u.width : b ? Math.max(n.left, Math.min(f.left - (d ? 14 : 0) + y.x, n.right - m)) : Math.min(Math.max(n.left, f.left - m + (d ? 14 : 0) - y.x), n.right - m), w = this.above[l];
      !a.strictSide && (w ? f.top - g - p - y.y < n.top : f.bottom + g + p + y.y > n.bottom) && w == n.bottom - f.bottom > f.top - n.top && (w = this.above[l] = !w);
      let v = (w ? f.top - n.top : n.bottom - f.bottom) - p;
      if (v < g && h.resize !== !1) {
        if (v < this.view.defaultLineHeight) {
          c.style.top = yi;
          continue;
        }
        Sc.set(h, g), c.style.height = (g = v) / r + "px";
      } else c.style.height && (c.style.height = "");
      let C = w ? f.top - g - p - y.y : f.bottom + p + y.y, k = S + m;
      if (h.overlap !== !0)
        for (let R of o)
          R.left < k && R.right > S && R.top < C + g && R.bottom > C && (C = w ? R.top - g - 2 - p : R.bottom + p + 2);
      if (this.position == "absolute" ? (c.style.top = (C - i.parent.top) / r + "px", wc(c, (S - i.parent.left) / s)) : (c.style.top = C / r + "px", wc(c, S / s)), d) {
        let R = f.left + (b ? y.x : -y.x) - (S + 14 - 7);
        d.style.left = R / s + "px";
      }
      h.overlap !== !0 && o.push({ left: S, top: C, right: k, bottom: C + g }), c.classList.toggle("cm-tooltip-above", w), c.classList.toggle("cm-tooltip-below", !w), h.positioned && h.positioned(i.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let i of this.manager.tooltipViews)
        i.dom.style.top = yi;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function wc(i, t) {
  let e = parseInt(i.style.left, 10);
  (isNaN(e) || Math.abs(t - e) > 1) && (i.style.left = t + "px");
}
const fy = /* @__PURE__ */ P.baseTheme({
  ".cm-tooltip": {
    zIndex: 500,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: "7px",
    width: `${7 * 2}px`,
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent"
    },
    ".cm-tooltip-above &": {
      bottom: "-7px",
      "&:before": {
        borderTop: "7px solid #bbb"
      },
      "&:after": {
        borderTop: "7px solid #f5f5f5",
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: "-7px",
      "&:before": {
        borderBottom: "7px solid #bbb"
      },
      "&:after": {
        borderBottom: "7px solid #f5f5f5",
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
}), uy = { x: 0, y: 0 }, Ma = /* @__PURE__ */ D.define({
  enables: [Oa, fy]
}), br = /* @__PURE__ */ D.define({
  combine: (i) => i.reduce((t, e) => t.concat(e), [])
});
class no {
  // Needs to be static so that host tooltip instances always match
  static create(t) {
    return new no(t);
  }
  constructor(t) {
    this.view = t, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new ud(t, br, (e, n) => this.createHostedView(e, n), (e) => e.dom.remove());
  }
  createHostedView(t, e) {
    let n = t.create(this.view);
    return n.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(n.dom, e ? e.dom.nextSibling : this.dom.firstChild), this.mounted && n.mount && n.mount(this.view), n;
  }
  mount(t) {
    for (let e of this.manager.tooltipViews)
      e.mount && e.mount(t);
    this.mounted = !0;
  }
  positioned(t) {
    for (let e of this.manager.tooltipViews)
      e.positioned && e.positioned(t);
  }
  update(t) {
    this.manager.update(t);
  }
  destroy() {
    var t;
    for (let e of this.manager.tooltipViews)
      (t = e.destroy) === null || t === void 0 || t.call(e);
  }
  passProp(t) {
    let e;
    for (let n of this.manager.tooltipViews) {
      let s = n[t];
      if (s !== void 0) {
        if (e === void 0)
          e = s;
        else if (e !== s)
          return;
      }
    }
    return e;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const dy = /* @__PURE__ */ Ma.compute([br], (i) => {
  let t = i.facet(br);
  return t.length === 0 ? null : {
    pos: Math.min(...t.map((e) => e.pos)),
    end: Math.max(...t.map((e) => {
      var n;
      return (n = e.end) !== null && n !== void 0 ? n : e.pos;
    })),
    create: no.create,
    above: t[0].above,
    arrow: t.some((e) => e.arrow)
  };
});
class py {
  constructor(t, e, n, s, r) {
    this.view = t, this.source = e, this.field = n, this.setHover = s, this.hoverTime = r, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: t.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), t.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), t.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length)
      return;
    let t = Date.now() - this.lastMove.time;
    t < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - t) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: t, lastMove: e } = this, n = t.docView.nearest(e.target);
    if (!n)
      return;
    let s, r = 1;
    if (n instanceof tn)
      s = n.posAtStart;
    else {
      if (s = t.posAtCoords(e), s == null)
        return;
      let l = t.coordsAtPos(s);
      if (!l || e.y < l.top || e.y > l.bottom || e.x < l.left - t.defaultCharacterWidth || e.x > l.right + t.defaultCharacterWidth)
        return;
      let a = t.bidiSpans(t.state.doc.lineAt(s)).find((c) => c.from <= s && c.to >= s), h = a && a.dir == rt.RTL ? -1 : 1;
      r = e.x < l.left ? -h : h;
    }
    let o = this.source(t, s, r);
    if (o != null && o.then) {
      let l = this.pending = { pos: s };
      o.then((a) => {
        this.pending == l && (this.pending = null, a && !(Array.isArray(a) && !a.length) && t.dispatch({ effects: this.setHover.of(Array.isArray(a) ? a : [a]) }));
      }, (a) => Bt(t.state, a, "hover tooltip"));
    } else o && !(Array.isArray(o) && !o.length) && t.dispatch({ effects: this.setHover.of(Array.isArray(o) ? o : [o]) });
  }
  get tooltip() {
    let t = this.view.plugin(Oa), e = t ? t.manager.tooltips.findIndex((n) => n.create == no.create) : -1;
    return e > -1 ? t.manager.tooltipViews[e] : null;
  }
  mousemove(t) {
    var e, n;
    this.lastMove = { x: t.clientX, y: t.clientY, target: t.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: s, tooltip: r } = this;
    if (s.length && r && !gy(r.dom, t) || this.pending) {
      let { pos: o } = s[0] || this.pending, l = (n = (e = s[0]) === null || e === void 0 ? void 0 : e.end) !== null && n !== void 0 ? n : o;
      (o == l ? this.view.posAtCoords(this.lastMove) != o : !my(this.view, o, l, t.clientX, t.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
    }
  }
  mouseleave(t) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
    let { active: e } = this;
    if (e.length) {
      let { tooltip: n } = this;
      n && n.dom.contains(t.relatedTarget) ? this.watchTooltipLeave(n.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(t) {
    let e = (n) => {
      t.removeEventListener("mouseleave", e), this.active.length && !this.view.dom.contains(n.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
    };
    t.addEventListener("mouseleave", e);
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const _s = 4;
function gy(i, t) {
  let { left: e, right: n, top: s, bottom: r } = i.getBoundingClientRect(), o;
  if (o = i.querySelector(".cm-tooltip-arrow")) {
    let l = o.getBoundingClientRect();
    s = Math.min(l.top, s), r = Math.max(l.bottom, r);
  }
  return t.clientX >= e - _s && t.clientX <= n + _s && t.clientY >= s - _s && t.clientY <= r + _s;
}
function my(i, t, e, n, s, r) {
  let o = i.scrollDOM.getBoundingClientRect(), l = i.documentTop + i.documentPadding.top + i.contentHeight;
  if (o.left > n || o.right < n || o.top > s || Math.min(o.bottom, l) < s)
    return !1;
  let a = i.posAtCoords({ x: n, y: s }, !1);
  return a >= t && a <= e;
}
function yy(i, t = {}) {
  let e = H.define(), n = kt.define({
    create() {
      return [];
    },
    update(s, r) {
      if (s.length && (t.hideOnChange && (r.docChanged || r.selection) ? s = [] : t.hideOn && (s = s.filter((o) => !t.hideOn(r, o))), r.docChanged)) {
        let o = [];
        for (let l of s) {
          let a = r.changes.mapPos(l.pos, -1, Rt.TrackDel);
          if (a != null) {
            let h = Object.assign(/* @__PURE__ */ Object.create(null), l);
            h.pos = a, h.end != null && (h.end = r.changes.mapPos(h.end)), o.push(h);
          }
        }
        s = o;
      }
      for (let o of r.effects)
        o.is(e) && (s = o.value), o.is(by) && (s = []);
      return s;
    },
    provide: (s) => br.from(s)
  });
  return {
    active: n,
    extension: [
      n,
      ft.define((s) => new py(
        s,
        i,
        n,
        e,
        t.hoverTime || 300
        /* Hover.Time */
      )),
      dy
    ]
  };
}
function dd(i, t) {
  let e = i.plugin(Oa);
  if (!e)
    return null;
  let n = e.manager.tooltips.indexOf(t);
  return n < 0 ? null : e.manager.tooltipViews[n];
}
const by = /* @__PURE__ */ H.define(), kc = /* @__PURE__ */ D.define({
  combine(i) {
    let t, e;
    for (let n of i)
      t = t || n.topContainer, e = e || n.bottomContainer;
    return { topContainer: t, bottomContainer: e };
  }
});
function Ui(i, t) {
  let e = i.plugin(pd), n = e ? e.specs.indexOf(t) : -1;
  return n > -1 ? e.panels[n] : null;
}
const pd = /* @__PURE__ */ ft.fromClass(class {
  constructor(i) {
    this.input = i.state.facet(Ji), this.specs = this.input.filter((e) => e), this.panels = this.specs.map((e) => e(i));
    let t = i.state.facet(kc);
    this.top = new Ns(i, !0, t.topContainer), this.bottom = new Ns(i, !1, t.bottomContainer), this.top.sync(this.panels.filter((e) => e.top)), this.bottom.sync(this.panels.filter((e) => !e.top));
    for (let e of this.panels)
      e.dom.classList.add("cm-panel"), e.mount && e.mount();
  }
  update(i) {
    let t = i.state.facet(kc);
    this.top.container != t.topContainer && (this.top.sync([]), this.top = new Ns(i.view, !0, t.topContainer)), this.bottom.container != t.bottomContainer && (this.bottom.sync([]), this.bottom = new Ns(i.view, !1, t.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let e = i.state.facet(Ji);
    if (e != this.input) {
      let n = e.filter((a) => a), s = [], r = [], o = [], l = [];
      for (let a of n) {
        let h = this.specs.indexOf(a), c;
        h < 0 ? (c = a(i.view), l.push(c)) : (c = this.panels[h], c.update && c.update(i)), s.push(c), (c.top ? r : o).push(c);
      }
      this.specs = n, this.panels = s, this.top.sync(r), this.bottom.sync(o);
      for (let a of l)
        a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else
      for (let n of this.panels)
        n.update && n.update(i);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, {
  provide: (i) => P.scrollMargins.of((t) => {
    let e = t.plugin(i);
    return e && { top: e.top.scrollMargin(), bottom: e.bottom.scrollMargin() };
  })
});
class Ns {
  constructor(t, e, n) {
    this.view = t, this.top = e, this.container = n, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(t) {
    for (let e of this.panels)
      e.destroy && t.indexOf(e) < 0 && e.destroy();
    this.panels = t, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let e = this.container || this.view.dom;
      e.insertBefore(this.dom, this.top ? e.firstChild : null);
    }
    let t = this.dom.firstChild;
    for (let e of this.panels)
      if (e.dom.parentNode == this.dom) {
        for (; t != e.dom; )
          t = Cc(t);
        t = t.nextSibling;
      } else
        this.dom.insertBefore(e.dom, t);
    for (; t; )
      t = Cc(t);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let t of this.classes.split(" "))
        t && this.container.classList.remove(t);
      for (let t of (this.classes = this.view.themeClasses).split(" "))
        t && this.container.classList.add(t);
    }
  }
}
function Cc(i) {
  let t = i.nextSibling;
  return i.remove(), t;
}
const Ji = /* @__PURE__ */ D.define({
  enables: pd
});
class qe extends $n {
  /**
  @internal
  */
  compare(t) {
    return this == t || this.constructor == t.constructor && this.eq(t);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(t) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(t) {
  }
}
qe.prototype.elementClass = "";
qe.prototype.toDOM = void 0;
qe.prototype.mapMode = Rt.TrackBefore;
qe.prototype.startSide = qe.prototype.endSide = -1;
qe.prototype.point = !0;
const rr = /* @__PURE__ */ D.define(), vy = /* @__PURE__ */ D.define(), xy = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => U.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {}
}, Li = /* @__PURE__ */ D.define();
function Sy(i) {
  return [gd(), Li.of(Object.assign(Object.assign({}, xy), i))];
}
const Ac = /* @__PURE__ */ D.define({
  combine: (i) => i.some((t) => t)
});
function gd(i) {
  return [
    wy
  ];
}
const wy = /* @__PURE__ */ ft.fromClass(class {
  constructor(i) {
    this.view = i, this.prevViewport = i.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = i.state.facet(Li).map((t) => new Mc(i, t));
    for (let t of this.gutters)
      this.dom.appendChild(t.dom);
    this.fixed = !i.state.facet(Ac), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), i.scrollDOM.insertBefore(this.dom, i.contentDOM);
  }
  update(i) {
    if (this.updateGutters(i)) {
      let t = this.prevViewport, e = i.view.viewport, n = Math.min(t.to, e.to) - Math.max(t.from, e.from);
      this.syncGutters(n < (e.to - e.from) * 0.8);
    }
    i.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(Ac) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = i.view.viewport;
  }
  syncGutters(i) {
    let t = this.dom.nextSibling;
    i && this.dom.remove();
    let e = U.iter(this.view.state.facet(rr), this.view.viewport.from), n = [], s = this.gutters.map((r) => new ky(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (n.length && (n = []), Array.isArray(r.type)) {
        let o = !0;
        for (let l of r.type)
          if (l.type == Lt.Text && o) {
            Hl(e, n, l.from);
            for (let a of s)
              a.line(this.view, l, n);
            o = !1;
          } else if (l.widget)
            for (let a of s)
              a.widget(this.view, l);
      } else if (r.type == Lt.Text) {
        Hl(e, n, r.from);
        for (let o of s)
          o.line(this.view, r, n);
      } else if (r.widget)
        for (let o of s)
          o.widget(this.view, r);
    for (let r of s)
      r.finish();
    i && this.view.scrollDOM.insertBefore(this.dom, t);
  }
  updateGutters(i) {
    let t = i.startState.facet(Li), e = i.state.facet(Li), n = i.docChanged || i.heightChanged || i.viewportChanged || !U.eq(i.startState.facet(rr), i.state.facet(rr), i.view.viewport.from, i.view.viewport.to);
    if (t == e)
      for (let s of this.gutters)
        s.update(i) && (n = !0);
    else {
      n = !0;
      let s = [];
      for (let r of e) {
        let o = t.indexOf(r);
        o < 0 ? s.push(new Mc(this.view, r)) : (this.gutters[o].update(i), s.push(this.gutters[o]));
      }
      for (let r of this.gutters)
        r.dom.remove(), s.indexOf(r) < 0 && r.destroy();
      for (let r of s)
        this.dom.appendChild(r.dom);
      this.gutters = s;
    }
    return n;
  }
  destroy() {
    for (let i of this.gutters)
      i.destroy();
    this.dom.remove();
  }
}, {
  provide: (i) => P.scrollMargins.of((t) => {
    let e = t.plugin(i);
    return !e || e.gutters.length == 0 || !e.fixed ? null : t.textDirection == rt.LTR ? { left: e.dom.offsetWidth * t.scaleX } : { right: e.dom.offsetWidth * t.scaleX };
  })
});
function Oc(i) {
  return Array.isArray(i) ? i : [i];
}
function Hl(i, t, e) {
  for (; i.value && i.from <= e; )
    i.from == e && t.push(i.value), i.next();
}
class ky {
  constructor(t, e, n) {
    this.gutter = t, this.height = n, this.i = 0, this.cursor = U.iter(t.markers, e.from);
  }
  addElement(t, e, n) {
    let { gutter: s } = this, r = (e.top - this.height) / t.scaleY, o = e.height / t.scaleY;
    if (this.i == s.elements.length) {
      let l = new md(t, o, r, n);
      s.elements.push(l), s.dom.appendChild(l.dom);
    } else
      s.elements[this.i].update(t, o, r, n);
    this.height = e.bottom, this.i++;
  }
  line(t, e, n) {
    let s = [];
    Hl(this.cursor, s, e.from), n.length && (s = s.concat(n));
    let r = this.gutter.config.lineMarker(t, e, s);
    r && s.unshift(r);
    let o = this.gutter;
    s.length == 0 && !o.config.renderEmptyElements || this.addElement(t, e, s);
  }
  widget(t, e) {
    let n = this.gutter.config.widgetMarker(t, e.widget, e), s = n ? [n] : null;
    for (let r of t.state.facet(vy)) {
      let o = r(t, e.widget, e);
      o && (s || (s = [])).push(o);
    }
    s && this.addElement(t, e, s);
  }
  finish() {
    let t = this.gutter;
    for (; t.elements.length > this.i; ) {
      let e = t.elements.pop();
      t.dom.removeChild(e.dom), e.destroy();
    }
  }
}
class Mc {
  constructor(t, e) {
    this.view = t, this.config = e, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let n in e.domEventHandlers)
      this.dom.addEventListener(n, (s) => {
        let r = s.target, o;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; )
            r = r.parentNode;
          let a = r.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else
          o = s.clientY;
        let l = t.lineBlockAtHeight(o - t.documentTop);
        e.domEventHandlers[n](t, l, s) && s.preventDefault();
      });
    this.markers = Oc(e.markers(t)), e.initialSpacer && (this.spacer = new md(t, 0, 0, [e.initialSpacer(t)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(t) {
    let e = this.markers;
    if (this.markers = Oc(this.config.markers(t.view)), this.spacer && this.config.updateSpacer) {
      let s = this.config.updateSpacer(this.spacer.markers[0], t);
      s != this.spacer.markers[0] && this.spacer.update(t.view, 0, 0, [s]);
    }
    let n = t.view.viewport;
    return !U.eq(this.markers, e, n.from, n.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(t) : !1);
  }
  destroy() {
    for (let t of this.elements)
      t.destroy();
  }
}
class md {
  constructor(t, e, n, s) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t, e, n, s);
  }
  update(t, e, n, s) {
    this.height != e && (this.height = e, this.dom.style.height = e + "px"), this.above != n && (this.dom.style.marginTop = (this.above = n) ? n + "px" : ""), Cy(this.markers, s) || this.setMarkers(t, s);
  }
  setMarkers(t, e) {
    let n = "cm-gutterElement", s = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let l = o, a = r < e.length ? e[r++] : null, h = !1;
      if (a) {
        let c = a.elementClass;
        c && (n += " " + c);
        for (let f = o; f < this.markers.length; f++)
          if (this.markers[f].compare(a)) {
            l = f, h = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; o < l; ) {
        let c = this.markers[o++];
        if (c.toDOM) {
          c.destroy(s);
          let f = s.nextSibling;
          s.remove(), s = f;
        }
      }
      if (!a)
        break;
      a.toDOM && (h ? s = s.nextSibling : this.dom.insertBefore(a.toDOM(t), s)), h && o++;
    }
    this.dom.className = n, this.markers = e;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function Cy(i, t) {
  if (i.length != t.length)
    return !1;
  for (let e = 0; e < i.length; e++)
    if (!i[e].compare(t[e]))
      return !1;
  return !0;
}
const Ay = /* @__PURE__ */ D.define(), Oy = /* @__PURE__ */ D.define(), zn = /* @__PURE__ */ D.define({
  combine(i) {
    return Be(i, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(t, e) {
        let n = Object.assign({}, t);
        for (let s in e) {
          let r = n[s], o = e[s];
          n[s] = r ? (l, a, h) => r(l, a, h) || o(l, a, h) : o;
        }
        return n;
      }
    });
  }
});
class zo extends qe {
  constructor(t) {
    super(), this.number = t;
  }
  eq(t) {
    return this.number == t.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function qo(i, t) {
  return i.state.facet(zn).formatNumber(t, i.state);
}
const My = /* @__PURE__ */ Li.compute([zn], (i) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(t) {
    return t.state.facet(Ay);
  },
  lineMarker(t, e, n) {
    return n.some((s) => s.toDOM) ? null : new zo(qo(t, t.state.doc.lineAt(e.from).number));
  },
  widgetMarker: (t, e, n) => {
    for (let s of t.state.facet(Oy)) {
      let r = s(t, e, n);
      if (r)
        return r;
    }
    return null;
  },
  lineMarkerChange: (t) => t.startState.facet(zn) != t.state.facet(zn),
  initialSpacer(t) {
    return new zo(qo(t, Tc(t.state.doc.lines)));
  },
  updateSpacer(t, e) {
    let n = qo(e.view, Tc(e.view.state.doc.lines));
    return n == t.number ? t : new zo(n);
  },
  domEventHandlers: i.facet(zn).domEventHandlers
}));
function Ty(i = {}) {
  return [
    zn.of(i),
    gd(),
    My
  ];
}
function Tc(i) {
  let t = 9;
  for (; t < i; )
    t = t * 10 + 9;
  return t;
}
const $y = /* @__PURE__ */ new class extends qe {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), Py = /* @__PURE__ */ rr.compute(["selection"], (i) => {
  let t = [], e = -1;
  for (let n of i.selection.ranges) {
    let s = i.doc.lineAt(n.head).from;
    s > e && (e = s, t.push($y.range(s)));
  }
  return U.of(t);
});
function Dy() {
  return Py;
}
const yd = 1024;
let Ry = 0;
class Qo {
  constructor(t, e) {
    this.from = t, this.to = e;
  }
}
class q {
  /**
  Create a new node prop type.
  */
  constructor(t = {}) {
    this.id = Ry++, this.perNode = !!t.perNode, this.deserialize = t.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  /**
  This is meant to be used with
  [`NodeSet.extend`](#common.NodeSet.extend) or
  [`LRParser.configure`](#lr.ParserConfig.props) to compute
  prop values for each node type in the set. Takes a [match
  object](#common.NodeType^match) or function that returns undefined
  if the node type doesn't get this prop, and the prop's value if
  it does.
  */
  add(t) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof t != "function" && (t = Qt.match(t)), (e) => {
      let n = t(e);
      return n === void 0 ? null : [this, n];
    };
  }
}
q.closedBy = new q({ deserialize: (i) => i.split(" ") });
q.openedBy = new q({ deserialize: (i) => i.split(" ") });
q.group = new q({ deserialize: (i) => i.split(" ") });
q.isolate = new q({ deserialize: (i) => {
  if (i && i != "rtl" && i != "ltr" && i != "auto")
    throw new RangeError("Invalid value for isolate: " + i);
  return i || "auto";
} });
q.contextHash = new q({ perNode: !0 });
q.lookAhead = new q({ perNode: !0 });
q.mounted = new q({ perNode: !0 });
class vr {
  constructor(t, e, n) {
    this.tree = t, this.overlay = e, this.parser = n;
  }
  /**
  @internal
  */
  static get(t) {
    return t && t.props && t.props[q.mounted.id];
  }
}
const By = /* @__PURE__ */ Object.create(null);
class Qt {
  /**
  @internal
  */
  constructor(t, e, n, s = 0) {
    this.name = t, this.props = e, this.id = n, this.flags = s;
  }
  /**
  Define a node type.
  */
  static define(t) {
    let e = t.props && t.props.length ? /* @__PURE__ */ Object.create(null) : By, n = (t.top ? 1 : 0) | (t.skipped ? 2 : 0) | (t.error ? 4 : 0) | (t.name == null ? 8 : 0), s = new Qt(t.name || "", e, t.id, n);
    if (t.props) {
      for (let r of t.props)
        if (Array.isArray(r) || (r = r(s)), r) {
          if (r[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          e[r[0].id] = r[1];
        }
    }
    return s;
  }
  /**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */
  prop(t) {
    return this.props[t.id];
  }
  /**
  True when this is the top node of a grammar.
  */
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /**
  True when this node is produced by a skip rule.
  */
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /**
  Indicates whether this is an error node.
  */
  get isError() {
    return (this.flags & 4) > 0;
  }
  /**
  When true, this node type doesn't correspond to a user-declared
  named node, for example because it is used to cache repetition.
  */
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /**
  Returns true when this node's name or one of its
  [groups](#common.NodeProp^group) matches the given string.
  */
  is(t) {
    if (typeof t == "string") {
      if (this.name == t)
        return !0;
      let e = this.prop(q.group);
      return e ? e.indexOf(t) > -1 : !1;
    }
    return this.id == t;
  }
  /**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */
  static match(t) {
    let e = /* @__PURE__ */ Object.create(null);
    for (let n in t)
      for (let s of n.split(" "))
        e[s] = t[n];
    return (n) => {
      for (let s = n.prop(q.group), r = -1; r < (s ? s.length : 0); r++) {
        let o = e[r < 0 ? n.name : s[r]];
        if (o)
          return o;
      }
    };
  }
}
Qt.none = new Qt(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
class Ta {
  /**
  Create a set with the given types. The `id` property of each
  type should correspond to its position within the array.
  */
  constructor(t) {
    this.types = t;
    for (let e = 0; e < t.length; e++)
      if (t[e].id != e)
        throw new RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  /**
  Create a copy of this set with some node properties added. The
  arguments to this method can be created with
  [`NodeProp.add`](#common.NodeProp.add).
  */
  extend(...t) {
    let e = [];
    for (let n of this.types) {
      let s = null;
      for (let r of t) {
        let o = r(n);
        o && (s || (s = Object.assign({}, n.props)), s[o[0].id] = o[1]);
      }
      e.push(s ? new Qt(n.name, s, n.id, n.flags) : n);
    }
    return new Ta(e);
  }
}
const Fs = /* @__PURE__ */ new WeakMap(), $c = /* @__PURE__ */ new WeakMap();
var bt;
(function(i) {
  i[i.ExcludeBuffers = 1] = "ExcludeBuffers", i[i.IncludeAnonymous = 2] = "IncludeAnonymous", i[i.IgnoreMounts = 4] = "IgnoreMounts", i[i.IgnoreOverlays = 8] = "IgnoreOverlays";
})(bt || (bt = {}));
class pt {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(t, e, n, s, r) {
    if (this.type = t, this.children = e, this.positions = n, this.length = s, this.props = null, r && r.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of r)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  /**
  @internal
  */
  toString() {
    let t = vr.get(this);
    if (t && !t.overlay)
      return t.tree.toString();
    let e = "";
    for (let n of this.children) {
      let s = n.toString();
      s && (e && (e += ","), e += s);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (e.length ? "(" + e + ")" : "") : e;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(t = 0) {
    return new ql(this.topNode, t);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(t, e = 0, n = 0) {
    let s = Fs.get(this) || this.topNode, r = new ql(s);
    return r.moveTo(t, e), Fs.set(this, r._tree), r;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new re(this, 0, 0, null);
  }
  /**
  Get the [syntax node](#common.SyntaxNode) at the given position.
  If `side` is -1, this will move into nodes that end at the
  position. If 1, it'll move into nodes that start at the
  position. With 0, it'll only enter nodes that cover the position
  from both sides.
  
  Note that this will not enter
  [overlays](#common.MountedTree.overlay), and you often want
  [`resolveInner`](#common.Tree.resolveInner) instead.
  */
  resolve(t, e = 0) {
    let n = Gi(Fs.get(this) || this.topNode, t, e, !1);
    return Fs.set(this, n), n;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(t, e = 0) {
    let n = Gi($c.get(this) || this.topNode, t, e, !0);
    return $c.set(this, n), n;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(t, e = 0) {
    return Iy(this, t, e);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(t) {
    let { enter: e, leave: n, from: s = 0, to: r = this.length } = t, o = t.mode || 0, l = (o & bt.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | bt.IncludeAnonymous); ; ) {
      let h = !1;
      if (a.from <= r && a.to >= s && (!l && a.type.isAnonymous || e(a) !== !1)) {
        if (a.firstChild())
          continue;
        h = !0;
      }
      for (; h && n && (l || !a.type.isAnonymous) && n(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        h = !0;
      }
    }
  }
  /**
  Get the value of the given [node prop](#common.NodeProp) for this
  node. Works with both per-node and per-type props.
  */
  prop(t) {
    return t.perNode ? this.props ? this.props[t.id] : void 0 : this.type.prop(t);
  }
  /**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */
  get propValues() {
    let t = [];
    if (this.props)
      for (let e in this.props)
        t.push([+e, this.props[e]]);
    return t;
  }
  /**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */
  balance(t = {}) {
    return this.children.length <= 8 ? this : Da(Qt.none, this.children, this.positions, 0, this.children.length, 0, this.length, (e, n, s) => new pt(this.type, e, n, s, this.propValues), t.makeTree || ((e, n, s) => new pt(Qt.none, e, n, s)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(t) {
    return _y(t);
  }
}
pt.empty = new pt(Qt.none, [], [], 0);
class $a {
  constructor(t, e) {
    this.buffer = t, this.index = e;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new $a(this.buffer, this.index);
  }
}
class hn {
  /**
  Create a tree buffer.
  */
  constructor(t, e, n) {
    this.buffer = t, this.length = e, this.set = n;
  }
  /**
  @internal
  */
  get type() {
    return Qt.none;
  }
  /**
  @internal
  */
  toString() {
    let t = [];
    for (let e = 0; e < this.buffer.length; )
      t.push(this.childString(e)), e = this.buffer[e + 3];
    return t.join(",");
  }
  /**
  @internal
  */
  childString(t) {
    let e = this.buffer[t], n = this.buffer[t + 3], s = this.set.types[e], r = s.name;
    if (/\W/.test(r) && !s.isError && (r = JSON.stringify(r)), t += 4, n == t)
      return r;
    let o = [];
    for (; t < n; )
      o.push(this.childString(t)), t = this.buffer[t + 3];
    return r + "(" + o.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(t, e, n, s, r) {
    let { buffer: o } = this, l = -1;
    for (let a = t; a != e && !(bd(r, s, o[a + 1], o[a + 2]) && (l = a, n > 0)); a = o[a + 3])
      ;
    return l;
  }
  /**
  @internal
  */
  slice(t, e, n) {
    let s = this.buffer, r = new Uint16Array(e - t), o = 0;
    for (let l = t, a = 0; l < e; ) {
      r[a++] = s[l++], r[a++] = s[l++] - n;
      let h = r[a++] = s[l++] - n;
      r[a++] = s[l++] - t, o = Math.max(o, h);
    }
    return new hn(r, o, this.set);
  }
}
function bd(i, t, e, n) {
  switch (i) {
    case -2:
      return e < t;
    case -1:
      return n >= t && e < t;
    case 0:
      return e < t && n > t;
    case 1:
      return e <= t && n > t;
    case 2:
      return n > t;
    case 4:
      return !0;
  }
}
function Gi(i, t, e, n) {
  for (var s; i.from == i.to || (e < 1 ? i.from >= t : i.from > t) || (e > -1 ? i.to <= t : i.to < t); ) {
    let o = !n && i instanceof re && i.index < 0 ? null : i.parent;
    if (!o)
      return i;
    i = o;
  }
  let r = n ? 0 : bt.IgnoreOverlays;
  if (n)
    for (let o = i, l = o.parent; l; o = l, l = o.parent)
      o instanceof re && o.index < 0 && ((s = l.enter(t, e, r)) === null || s === void 0 ? void 0 : s.from) != o.from && (i = l);
  for (; ; ) {
    let o = i.enter(t, e, r);
    if (!o)
      return i;
    i = o;
  }
}
class vd {
  cursor(t = 0) {
    return new ql(this, t);
  }
  getChild(t, e = null, n = null) {
    let s = Pc(this, t, e, n);
    return s.length ? s[0] : null;
  }
  getChildren(t, e = null, n = null) {
    return Pc(this, t, e, n);
  }
  resolve(t, e = 0) {
    return Gi(this, t, e, !1);
  }
  resolveInner(t, e = 0) {
    return Gi(this, t, e, !0);
  }
  matchContext(t) {
    return zl(this.parent, t);
  }
  enterUnfinishedNodesBefore(t) {
    let e = this.childBefore(t), n = this;
    for (; e; ) {
      let s = e.lastChild;
      if (!s || s.to != e.to)
        break;
      s.type.isError && s.from == s.to ? (n = e, e = s.prevSibling) : e = s;
    }
    return n;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class re extends vd {
  constructor(t, e, n, s) {
    super(), this._tree = t, this.from = e, this.index = n, this._parent = s;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(t, e, n, s, r = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, h = e > 0 ? l.length : -1; t != h; t += e) {
        let c = l[t], f = a[t] + o.from;
        if (bd(s, n, f, f + c.length)) {
          if (c instanceof hn) {
            if (r & bt.ExcludeBuffers)
              continue;
            let u = c.findChild(0, c.buffer.length, e, n - f, s);
            if (u > -1)
              return new nn(new Ly(o, c, t, f), null, u);
          } else if (r & bt.IncludeAnonymous || !c.type.isAnonymous || Pa(c)) {
            let u;
            if (!(r & bt.IgnoreMounts) && (u = vr.get(c)) && !u.overlay)
              return new re(u.tree, f, t, o);
            let d = new re(c, f, t, o);
            return r & bt.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(e < 0 ? c.children.length - 1 : 0, e, n, s);
          }
        }
      }
      if (r & bt.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? t = o.index + e : t = e < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(t) {
    return this.nextChild(
      0,
      1,
      t,
      2
      /* Side.After */
    );
  }
  childBefore(t) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      t,
      -2
      /* Side.Before */
    );
  }
  enter(t, e, n = 0) {
    let s;
    if (!(n & bt.IgnoreOverlays) && (s = vr.get(this._tree)) && s.overlay) {
      let r = t - this.from;
      for (let { from: o, to: l } of s.overlay)
        if ((e > 0 ? o <= r : o < r) && (e < 0 ? l >= r : l > r))
          return new re(s.tree, s.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, t, e, n);
  }
  nextSignificantParent() {
    let t = this;
    for (; t.type.isAnonymous && t._parent; )
      t = t._parent;
    return t;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  /**
  @internal
  */
  toString() {
    return this._tree.toString();
  }
}
function Pc(i, t, e, n) {
  let s = i.cursor(), r = [];
  if (!s.firstChild())
    return r;
  if (e != null) {
    for (let o = !1; !o; )
      if (o = s.type.is(e), !s.nextSibling())
        return r;
  }
  for (; ; ) {
    if (n != null && s.type.is(n))
      return r;
    if (s.type.is(t) && r.push(s.node), !s.nextSibling())
      return n == null ? r : [];
  }
}
function zl(i, t, e = t.length - 1) {
  for (let n = i; e >= 0; n = n.parent) {
    if (!n)
      return !1;
    if (!n.type.isAnonymous) {
      if (t[e] && t[e] != n.name)
        return !1;
      e--;
    }
  }
  return !0;
}
class Ly {
  constructor(t, e, n, s) {
    this.parent = t, this.buffer = e, this.index = n, this.start = s;
  }
}
class nn extends vd {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(t, e, n) {
    super(), this.context = t, this._parent = e, this.index = n, this.type = t.buffer.set.types[t.buffer.buffer[n]];
  }
  child(t, e, n) {
    let { buffer: s } = this.context, r = s.findChild(this.index + 4, s.buffer[this.index + 3], t, e - this.context.start, n);
    return r < 0 ? null : new nn(this.context, this, r);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(t) {
    return this.child(
      1,
      t,
      2
      /* Side.After */
    );
  }
  childBefore(t) {
    return this.child(
      -1,
      t,
      -2
      /* Side.Before */
    );
  }
  enter(t, e, n = 0) {
    if (n & bt.ExcludeBuffers)
      return null;
    let { buffer: s } = this.context, r = s.findChild(this.index + 4, s.buffer[this.index + 3], e > 0 ? 1 : -1, t - this.context.start, e);
    return r < 0 ? null : new nn(this.context, this, r);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(t) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + t,
      t,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: t } = this.context, e = t.buffer[this.index + 3];
    return e < (this._parent ? t.buffer[this._parent.index + 3] : t.buffer.length) ? new nn(this.context, this._parent, e) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: t } = this.context, e = this._parent ? this._parent.index + 4 : 0;
    return this.index == e ? this.externalSibling(-1) : new nn(this.context, this._parent, t.findChild(
      e,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  get tree() {
    return null;
  }
  toTree() {
    let t = [], e = [], { buffer: n } = this.context, s = this.index + 4, r = n.buffer[this.index + 3];
    if (r > s) {
      let o = n.buffer[this.index + 1];
      t.push(n.slice(s, r, o)), e.push(0);
    }
    return new pt(this.type, t, e, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function xd(i) {
  if (!i.length)
    return null;
  let t = 0, e = i[0];
  for (let r = 1; r < i.length; r++) {
    let o = i[r];
    (o.from > e.from || o.to < e.to) && (e = o, t = r);
  }
  let n = e instanceof re && e.index < 0 ? null : e.parent, s = i.slice();
  return n ? s[t] = n : s.splice(t, 1), new Ey(s, e);
}
class Ey {
  constructor(t, e) {
    this.heads = t, this.node = e;
  }
  get next() {
    return xd(this.heads);
  }
}
function Iy(i, t, e) {
  let n = i.resolveInner(t, e), s = null;
  for (let r = n instanceof re ? n : n.context.parent; r; r = r.parent)
    if (r.index < 0) {
      let o = r.parent;
      (s || (s = [n])).push(o.resolve(t, e)), r = o;
    } else {
      let o = vr.get(r.tree);
      if (o && o.overlay && o.overlay[0].from <= t && o.overlay[o.overlay.length - 1].to >= t) {
        let l = new re(o.tree, o.overlay[0].from + r.from, -1, r);
        (s || (s = [n])).push(Gi(l, t, e, !1));
      }
    }
  return s ? xd(s) : n;
}
class ql {
  /**
  Shorthand for `.type.name`.
  */
  get name() {
    return this.type.name;
  }
  /**
  @internal
  */
  constructor(t, e = 0) {
    if (this.mode = e, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, t instanceof re)
      this.yieldNode(t);
    else {
      this._tree = t.context.parent, this.buffer = t.context;
      for (let n = t._parent; n; n = n._parent)
        this.stack.unshift(n.index);
      this.bufferNode = t, this.yieldBuf(t.index);
    }
  }
  yieldNode(t) {
    return t ? (this._tree = t, this.type = t.type, this.from = t.from, this.to = t.to, !0) : !1;
  }
  yieldBuf(t, e) {
    this.index = t;
    let { start: n, buffer: s } = this.buffer;
    return this.type = e || s.set.types[s.buffer[t]], this.from = n + s.buffer[t + 1], this.to = n + s.buffer[t + 2], !0;
  }
  /**
  @internal
  */
  yield(t) {
    return t ? t instanceof re ? (this.buffer = null, this.yieldNode(t)) : (this.buffer = t.context, this.yieldBuf(t.index, t.type)) : !1;
  }
  /**
  @internal
  */
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /**
  @internal
  */
  enterChild(t, e, n) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(t < 0 ? this._tree._tree.children.length - 1 : 0, t, e, n, this.mode));
    let { buffer: s } = this.buffer, r = s.findChild(this.index + 4, s.buffer[this.index + 3], t, e - this.buffer.start, n);
    return r < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(r));
  }
  /**
  Move the cursor to this node's first child. When this returns
  false, the node has no child, and the cursor has not been moved.
  */
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to this node's last child.
  */
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to the first child that ends after `pos`.
  */
  childAfter(t) {
    return this.enterChild(
      1,
      t,
      2
      /* Side.After */
    );
  }
  /**
  Move to the last child that starts before `pos`.
  */
  childBefore(t) {
    return this.enterChild(
      -1,
      t,
      -2
      /* Side.Before */
    );
  }
  /**
  Move the cursor to the child around `pos`. If side is -1 the
  child may end at that position, when 1 it may start there. This
  will also enter [overlaid](#common.MountedTree.overlay)
  [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  set to false.
  */
  enter(t, e, n = this.mode) {
    return this.buffer ? n & bt.ExcludeBuffers ? !1 : this.enterChild(1, t, e) : this.yield(this._tree.enter(t, e, n));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & bt.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let t = this.mode & bt.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(t);
  }
  /**
  @internal
  */
  sibling(t) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + t, t, 0, 4, this.mode)) : !1;
    let { buffer: e } = this.buffer, n = this.stack.length - 1;
    if (t < 0) {
      let s = n < 0 ? 0 : this.stack[n] + 4;
      if (this.index != s)
        return this.yieldBuf(e.findChild(
          s,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let s = e.buffer[this.index + 3];
      if (s < (n < 0 ? e.buffer.length : e.buffer[this.stack[n] + 3]))
        return this.yieldBuf(s);
    }
    return n < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + t, t, 0, 4, this.mode)) : !1;
  }
  /**
  Move to this node's next sibling, if any.
  */
  nextSibling() {
    return this.sibling(1);
  }
  /**
  Move to this node's previous sibling, if any.
  */
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(t) {
    let e, n, { buffer: s } = this;
    if (s) {
      if (t > 0) {
        if (this.index < s.buffer.buffer.length)
          return !1;
      } else
        for (let r = 0; r < this.index; r++)
          if (s.buffer.buffer[r + 3] < this.index)
            return !1;
      ({ index: e, parent: n } = s);
    } else
      ({ index: e, _parent: n } = this._tree);
    for (; n; { index: e, _parent: n } = n)
      if (e > -1)
        for (let r = e + t, o = t < 0 ? -1 : n._tree.children.length; r != o; r += t) {
          let l = n._tree.children[r];
          if (this.mode & bt.IncludeAnonymous || l instanceof hn || !l.type.isAnonymous || Pa(l))
            return !1;
        }
    return !0;
  }
  move(t, e) {
    if (e && this.enterChild(
      t,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(t))
        return !0;
      if (this.atLastNode(t) || !this.parent())
        return !1;
    }
  }
  /**
  Move to the next node in a
  [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  traversal, going from a node to its first child or, if the
  current node is empty or `enter` is false, its next sibling or
  the next sibling of the first parent node that has one.
  */
  next(t = !0) {
    return this.move(1, t);
  }
  /**
  Move to the next node in a last-to-first pre-order traversal. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */
  prev(t = !0) {
    return this.move(-1, t);
  }
  /**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */
  moveTo(t, e = 0) {
    for (; (this.from == this.to || (e < 1 ? this.from >= t : this.from > t) || (e > -1 ? this.to <= t : this.to < t)) && this.parent(); )
      ;
    for (; this.enterChild(1, t, e); )
      ;
    return this;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) at the cursor's current
  position.
  */
  get node() {
    if (!this.buffer)
      return this._tree;
    let t = this.bufferNode, e = null, n = 0;
    if (t && t.context == this.buffer)
      t: for (let s = this.index, r = this.stack.length; r >= 0; ) {
        for (let o = t; o; o = o._parent)
          if (o.index == s) {
            if (s == this.index)
              return o;
            e = o, n = r + 1;
            break t;
          }
        s = this.stack[--r];
      }
    for (let s = n; s < this.stack.length; s++)
      e = new nn(this.buffer, e, this.stack[s]);
    return this.bufferNode = new nn(this.buffer, e, this.index);
  }
  /**
  Get the [tree](#common.Tree) that represents the current node, if
  any. Will return null when the node is in a [tree
  buffer](#common.TreeBuffer).
  */
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /**
  Iterate over the current node and all its descendants, calling
  `enter` when entering a node and `leave`, if given, when leaving
  one. When `enter` returns `false`, any children of that node are
  skipped, and `leave` isn't called for it.
  */
  iterate(t, e) {
    for (let n = 0; ; ) {
      let s = !1;
      if (this.type.isAnonymous || t(this) !== !1) {
        if (this.firstChild()) {
          n++;
          continue;
        }
        this.type.isAnonymous || (s = !0);
      }
      for (; ; ) {
        if (s && e && e(this), s = this.type.isAnonymous, !n)
          return;
        if (this.nextSibling())
          break;
        this.parent(), n--, s = !0;
      }
    }
  }
  /**
  Test whether the current node matches a given context—a sequence
  of direct parent node names. Empty strings in the context array
  are treated as wildcards.
  */
  matchContext(t) {
    if (!this.buffer)
      return zl(this.node.parent, t);
    let { buffer: e } = this.buffer, { types: n } = e.set;
    for (let s = t.length - 1, r = this.stack.length - 1; s >= 0; r--) {
      if (r < 0)
        return zl(this._tree, t, s);
      let o = n[e.buffer[this.stack[r]]];
      if (!o.isAnonymous) {
        if (t[s] && t[s] != o.name)
          return !1;
        s--;
      }
    }
    return !0;
  }
}
function Pa(i) {
  return i.children.some((t) => t instanceof hn || !t.type.isAnonymous || Pa(t));
}
function _y(i) {
  var t;
  let { buffer: e, nodeSet: n, maxBufferLength: s = yd, reused: r = [], minRepeatType: o = n.types.length } = i, l = Array.isArray(e) ? new $a(e, e.length) : e, a = n.types, h = 0, c = 0;
  function f(v, C, k, R, E, N) {
    let { id: I, start: M, end: _, size: T } = l, F = c, z = h;
    for (; T < 0; )
      if (l.next(), T == -1) {
        let gt = r[I];
        k.push(gt), R.push(M - v);
        return;
      } else if (T == -3) {
        h = I;
        return;
      } else if (T == -4) {
        c = I;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${T}`);
    let j = a[I], Z, G, it = M - v;
    if (_ - M <= s && (G = g(l.pos - C, E))) {
      let gt = new Uint16Array(G.size - G.skip), ut = l.pos - G.size, Pt = gt.length;
      for (; l.pos > ut; )
        Pt = y(G.start, gt, Pt);
      Z = new hn(gt, _ - G.start, n), it = G.start - v;
    } else {
      let gt = l.pos - T;
      l.next();
      let ut = [], Pt = [], Nt = I >= o ? I : -1, ce = 0, ye = _;
      for (; l.pos > gt; )
        Nt >= 0 && l.id == Nt && l.size >= 0 ? (l.end <= ye - s && (p(ut, Pt, M, ce, l.end, ye, Nt, F, z), ce = ut.length, ye = l.end), l.next()) : N > 2500 ? u(M, gt, ut, Pt) : f(M, gt, ut, Pt, Nt, N + 1);
      if (Nt >= 0 && ce > 0 && ce < ut.length && p(ut, Pt, M, ce, M, ye, Nt, F, z), ut.reverse(), Pt.reverse(), Nt > -1 && ce > 0) {
        let mn = d(j, z);
        Z = Da(j, ut, Pt, 0, ut.length, 0, _ - M, mn, mn);
      } else
        Z = m(j, ut, Pt, _ - M, F - _, z);
    }
    k.push(Z), R.push(it);
  }
  function u(v, C, k, R) {
    let E = [], N = 0, I = -1;
    for (; l.pos > C; ) {
      let { id: M, start: _, end: T, size: F } = l;
      if (F > 4)
        l.next();
      else {
        if (I > -1 && _ < I)
          break;
        I < 0 && (I = T - s), E.push(M, _, T), N++, l.next();
      }
    }
    if (N) {
      let M = new Uint16Array(N * 4), _ = E[E.length - 2];
      for (let T = E.length - 3, F = 0; T >= 0; T -= 3)
        M[F++] = E[T], M[F++] = E[T + 1] - _, M[F++] = E[T + 2] - _, M[F++] = F;
      k.push(new hn(M, E[2] - _, n)), R.push(_ - v);
    }
  }
  function d(v, C) {
    return (k, R, E) => {
      let N = 0, I = k.length - 1, M, _;
      if (I >= 0 && (M = k[I]) instanceof pt) {
        if (!I && M.type == v && M.length == E)
          return M;
        (_ = M.prop(q.lookAhead)) && (N = R[I] + M.length + _);
      }
      return m(v, k, R, E, N, C);
    };
  }
  function p(v, C, k, R, E, N, I, M, _) {
    let T = [], F = [];
    for (; v.length > R; )
      T.push(v.pop()), F.push(C.pop() + k - E);
    v.push(m(n.types[I], T, F, N - E, M - N, _)), C.push(E - k);
  }
  function m(v, C, k, R, E, N, I) {
    if (N) {
      let M = [q.contextHash, N];
      I = I ? [M].concat(I) : [M];
    }
    if (E > 25) {
      let M = [q.lookAhead, E];
      I = I ? [M].concat(I) : [M];
    }
    return new pt(v, C, k, R, I);
  }
  function g(v, C) {
    let k = l.fork(), R = 0, E = 0, N = 0, I = k.end - s, M = { size: 0, start: 0, skip: 0 };
    t: for (let _ = k.pos - v; k.pos > _; ) {
      let T = k.size;
      if (k.id == C && T >= 0) {
        M.size = R, M.start = E, M.skip = N, N += 4, R += 4, k.next();
        continue;
      }
      let F = k.pos - T;
      if (T < 0 || F < _ || k.start < I)
        break;
      let z = k.id >= o ? 4 : 0, j = k.start;
      for (k.next(); k.pos > F; ) {
        if (k.size < 0)
          if (k.size == -3)
            z += 4;
          else
            break t;
        else k.id >= o && (z += 4);
        k.next();
      }
      E = j, R += T, N += z;
    }
    return (C < 0 || R == v) && (M.size = R, M.start = E, M.skip = N), M.size > 4 ? M : void 0;
  }
  function y(v, C, k) {
    let { id: R, start: E, end: N, size: I } = l;
    if (l.next(), I >= 0 && R < o) {
      let M = k;
      if (I > 4) {
        let _ = l.pos - (I - 4);
        for (; l.pos > _; )
          k = y(v, C, k);
      }
      C[--k] = M, C[--k] = N - v, C[--k] = E - v, C[--k] = R;
    } else I == -3 ? h = R : I == -4 && (c = R);
    return k;
  }
  let b = [], S = [];
  for (; l.pos > 0; )
    f(i.start || 0, i.bufferStart || 0, b, S, -1, 0);
  let w = (t = i.length) !== null && t !== void 0 ? t : b.length ? S[0] + b[0].length : 0;
  return new pt(a[i.topID], b.reverse(), S.reverse(), w);
}
const Dc = /* @__PURE__ */ new WeakMap();
function or(i, t) {
  if (!i.isAnonymous || t instanceof hn || t.type != i)
    return 1;
  let e = Dc.get(t);
  if (e == null) {
    e = 1;
    for (let n of t.children) {
      if (n.type != i || !(n instanceof pt)) {
        e = 1;
        break;
      }
      e += or(i, n);
    }
    Dc.set(t, e);
  }
  return e;
}
function Da(i, t, e, n, s, r, o, l, a) {
  let h = 0;
  for (let p = n; p < s; p++)
    h += or(i, t[p]);
  let c = Math.ceil(
    h * 1.5 / 8
    /* Balance.BranchFactor */
  ), f = [], u = [];
  function d(p, m, g, y, b) {
    for (let S = g; S < y; ) {
      let w = S, v = m[S], C = or(i, p[S]);
      for (S++; S < y; S++) {
        let k = or(i, p[S]);
        if (C + k >= c)
          break;
        C += k;
      }
      if (S == w + 1) {
        if (C > c) {
          let k = p[w];
          d(k.children, k.positions, 0, k.children.length, m[w] + b);
          continue;
        }
        f.push(p[w]);
      } else {
        let k = m[S - 1] + p[S - 1].length - v;
        f.push(Da(i, p, m, w, S, v, k, null, a));
      }
      u.push(v + b - r);
    }
  }
  return d(t, e, n, s, 0), (l || a)(f, u, o);
}
class Mn {
  /**
  Construct a tree fragment. You'll usually want to use
  [`addTree`](#common.TreeFragment^addTree) and
  [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  calling this directly.
  */
  constructor(t, e, n, s, r = !1, o = !1) {
    this.from = t, this.to = e, this.tree = n, this.offset = s, this.open = (r ? 1 : 0) | (o ? 2 : 0);
  }
  /**
  Whether the start of the fragment represents the start of a
  parse, or the end of a change. (In the second case, it may not
  be safe to reuse some nodes at the start, depending on the
  parsing algorithm.)
  */
  get openStart() {
    return (this.open & 1) > 0;
  }
  /**
  Whether the end of the fragment represents the end of a
  full-document parse, or the start of a change.
  */
  get openEnd() {
    return (this.open & 2) > 0;
  }
  /**
  Create a set of fragments from a freshly parsed tree, or update
  an existing set of fragments by replacing the ones that overlap
  with a tree with content from the new tree. When `partial` is
  true, the parse is treated as incomplete, and the resulting
  fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
  true.
  */
  static addTree(t, e = [], n = !1) {
    let s = [new Mn(0, t.length, t, 0, !1, n)];
    for (let r of e)
      r.to > t.length && s.push(r);
    return s;
  }
  /**
  Apply a set of edits to an array of fragments, removing or
  splitting fragments as necessary to remove edited ranges, and
  adjusting offsets for fragments that moved.
  */
  static applyChanges(t, e, n = 128) {
    if (!e.length)
      return t;
    let s = [], r = 1, o = t.length ? t[0] : null;
    for (let l = 0, a = 0, h = 0; ; l++) {
      let c = l < e.length ? e[l] : null, f = c ? c.fromA : 1e9;
      if (f - a >= n)
        for (; o && o.from < f; ) {
          let u = o;
          if (a >= u.from || f <= u.to || h) {
            let d = Math.max(u.from, a) - h, p = Math.min(u.to, f) - h;
            u = d >= p ? null : new Mn(d, p, u.tree, u.offset + h, l > 0, !!c);
          }
          if (u && s.push(u), o.to > f)
            break;
          o = r < t.length ? t[r++] : null;
        }
      if (!c)
        break;
      a = c.toA, h = c.toA - c.toB;
    }
    return s;
  }
}
class Sd {
  /**
  Start a parse, returning a [partial parse](#common.PartialParse)
  object. [`fragments`](#common.TreeFragment) can be passed in to
  make the parse incremental.
  
  By default, the entire input is parsed. You can pass `ranges`,
  which should be a sorted array of non-empty, non-overlapping
  ranges, to parse only those ranges. The tree returned in that
  case will start at `ranges[0].from`.
  */
  startParse(t, e, n) {
    return typeof t == "string" && (t = new Ny(t)), n = n ? n.length ? n.map((s) => new Qo(s.from, s.to)) : [new Qo(0, 0)] : [new Qo(0, t.length)], this.createParse(t, e || [], n);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(t, e, n) {
    let s = this.startParse(t, e, n);
    for (; ; ) {
      let r = s.advance();
      if (r)
        return r;
    }
  }
}
class Ny {
  constructor(t) {
    this.string = t;
  }
  get length() {
    return this.string.length;
  }
  chunk(t) {
    return this.string.slice(t);
  }
  get lineChunks() {
    return !1;
  }
  read(t, e) {
    return this.string.slice(t, e);
  }
}
new q({ perNode: !0 });
let Fy = 0;
class Zt {
  /**
  @internal
  */
  constructor(t, e, n, s) {
    this.name = t, this.set = e, this.base = n, this.modified = s, this.id = Fy++;
  }
  toString() {
    let { name: t } = this;
    for (let e of this.modified)
      e.name && (t = `${e.name}(${t})`);
    return t;
  }
  static define(t, e) {
    let n = typeof t == "string" ? t : "?";
    if (t instanceof Zt && (e = t), e != null && e.base)
      throw new Error("Can not derive from a modified tag");
    let s = new Zt(n, [], null, []);
    if (s.set.push(s), e)
      for (let r of e.set)
        s.set.push(r);
    return s;
  }
  /**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */
  static defineModifier(t) {
    let e = new xr(t);
    return (n) => n.modified.indexOf(e) > -1 ? n : xr.get(n.base || n, n.modified.concat(e).sort((s, r) => s.id - r.id));
  }
}
let Vy = 0;
class xr {
  constructor(t) {
    this.name = t, this.instances = [], this.id = Vy++;
  }
  static get(t, e) {
    if (!e.length)
      return t;
    let n = e[0].instances.find((l) => l.base == t && Wy(e, l.modified));
    if (n)
      return n;
    let s = [], r = new Zt(t.name, s, t, e);
    for (let l of e)
      l.instances.push(r);
    let o = Hy(e);
    for (let l of t.set)
      if (!l.modified.length)
        for (let a of o)
          s.push(xr.get(l, a));
    return r;
  }
}
function Wy(i, t) {
  return i.length == t.length && i.every((e, n) => e == t[n]);
}
function Hy(i) {
  let t = [[]];
  for (let e = 0; e < i.length; e++)
    for (let n = 0, s = t.length; n < s; n++)
      t.push(t[n].concat(i[e]));
  return t.sort((e, n) => n.length - e.length);
}
function wd(i) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e in i) {
    let n = i[e];
    Array.isArray(n) || (n = [n]);
    for (let s of e.split(" "))
      if (s) {
        let r = [], o = 2, l = s;
        for (let f = 0; ; ) {
          if (l == "..." && f > 0 && f + 3 == s.length) {
            o = 1;
            break;
          }
          let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!u)
            throw new RangeError("Invalid path: " + s);
          if (r.push(u[0] == "*" ? "" : u[0][0] == '"' ? JSON.parse(u[0]) : u[0]), f += u[0].length, f == s.length)
            break;
          let d = s[f++];
          if (f == s.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + s);
          l = s.slice(f);
        }
        let a = r.length - 1, h = r[a];
        if (!h)
          throw new RangeError("Invalid path: " + s);
        let c = new Sr(n, o, a > 0 ? r.slice(0, a) : null);
        t[h] = c.sort(t[h]);
      }
  }
  return kd.add(t);
}
const kd = new q();
class Sr {
  constructor(t, e, n, s) {
    this.tags = t, this.mode = e, this.context = n, this.next = s;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(t) {
    return !t || t.depth < this.depth ? (this.next = t, this) : (t.next = this.sort(t.next), t);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
Sr.empty = new Sr([], 2, null);
function Cd(i, t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let r of i)
    if (!Array.isArray(r.tag))
      e[r.tag.id] = r.class;
    else
      for (let o of r.tag)
        e[o.id] = r.class;
  let { scope: n, all: s = null } = t || {};
  return {
    style: (r) => {
      let o = s;
      for (let l of r)
        for (let a of l.set) {
          let h = e[a.id];
          if (h) {
            o = o ? o + " " + h : h;
            break;
          }
        }
      return o;
    },
    scope: n
  };
}
function zy(i, t) {
  let e = null;
  for (let n of i) {
    let s = n.style(t);
    s && (e = e ? e + " " + s : s);
  }
  return e;
}
function qy(i, t, e, n = 0, s = i.length) {
  let r = new Qy(n, Array.isArray(t) ? t : [t], e);
  r.highlightRange(i.cursor(), n, s, "", r.highlighters), r.flush(s);
}
class Qy {
  constructor(t, e, n) {
    this.at = t, this.highlighters = e, this.span = n, this.class = "";
  }
  startSpan(t, e) {
    e != this.class && (this.flush(t), t > this.at && (this.at = t), this.class = e);
  }
  flush(t) {
    t > this.at && this.class && this.span(this.at, t, this.class);
  }
  highlightRange(t, e, n, s, r) {
    let { type: o, from: l, to: a } = t;
    if (l >= n || a <= e)
      return;
    o.isTop && (r = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let h = s, c = Ky(t) || Sr.empty, f = zy(r, c.tags);
    if (f && (h && (h += " "), h += f, c.mode == 1 && (s += (s ? " " : "") + f)), this.startSpan(Math.max(e, l), h), c.opaque)
      return;
    let u = t.tree && t.tree.prop(q.mounted);
    if (u && u.overlay) {
      let d = t.node.enter(u.overlay[0].from + l, 1), p = this.highlighters.filter((g) => !g.scope || g.scope(u.tree.type)), m = t.firstChild();
      for (let g = 0, y = l; ; g++) {
        let b = g < u.overlay.length ? u.overlay[g] : null, S = b ? b.from + l : a, w = Math.max(e, y), v = Math.min(n, S);
        if (w < v && m)
          for (; t.from < v && (this.highlightRange(t, w, v, s, r), this.startSpan(Math.min(v, t.to), h), !(t.to >= S || !t.nextSibling())); )
            ;
        if (!b || S > n)
          break;
        y = b.to + l, y > e && (this.highlightRange(d.cursor(), Math.max(e, b.from + l), Math.min(n, y), "", p), this.startSpan(Math.min(n, y), h));
      }
      m && t.parent();
    } else if (t.firstChild()) {
      u && (s = "");
      do
        if (!(t.to <= e)) {
          if (t.from >= n)
            break;
          this.highlightRange(t, e, n, s, r), this.startSpan(Math.min(n, t.to), h);
        }
      while (t.nextSibling());
      t.parent();
    }
  }
}
function Ky(i) {
  let t = i.type.prop(kd);
  for (; t && t.context && !i.matchContext(t.context); )
    t = t.next;
  return t || null;
}
const O = Zt.define, Vs = O(), Je = O(), Rc = O(Je), Bc = O(Je), Ge = O(), Ws = O(Ge), Ko = O(Ge), Se = O(), yn = O(Se), ve = O(), xe = O(), Ql = O(), bi = O(Ql), Hs = O(), x = {
  /**
  A comment.
  */
  comment: Vs,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: O(Vs),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: O(Vs),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: O(Vs),
  /**
  Any kind of identifier.
  */
  name: Je,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: O(Je),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: Rc,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: O(Rc),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: Bc,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: O(Bc),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: O(Je),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: O(Je),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: O(Je),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: O(Je),
  /**
  A literal value.
  */
  literal: Ge,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: Ws,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: O(Ws),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: O(Ws),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: O(Ws),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: Ko,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: O(Ko),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: O(Ko),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: O(Ge),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: O(Ge),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: O(Ge),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: O(Ge),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: O(Ge),
  /**
  A language keyword.
  */
  keyword: ve,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: O(ve),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: O(ve),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: O(ve),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: O(ve),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: O(ve),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: O(ve),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: O(ve),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: O(ve),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: O(ve),
  /**
  An operator.
  */
  operator: xe,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: O(xe),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: O(xe),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: O(xe),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: O(xe),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: O(xe),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: O(xe),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: O(xe),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: O(xe),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: O(xe),
  /**
  Program or markup punctuation.
  */
  punctuation: Ql,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: O(Ql),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: bi,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: O(bi),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: O(bi),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: O(bi),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: O(bi),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: Se,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: yn,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: O(yn),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: O(yn),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: O(yn),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: O(yn),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: O(yn),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: O(yn),
  /**
  A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
  */
  contentSeparator: O(Se),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: O(Se),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: O(Se),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: O(Se),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: O(Se),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: O(Se),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: O(Se),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: O(Se),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: O(),
  /**
  Deleted text.
  */
  deleted: O(),
  /**
  Changed text.
  */
  changed: O(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: O(),
  /**
  Metadata or meta-instruction.
  */
  meta: Hs,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: O(Hs),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: O(Hs),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: O(Hs),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: Zt.defineModifier("definition"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: Zt.defineModifier("constant"),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: Zt.defineModifier("function"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: Zt.defineModifier("standard"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: Zt.defineModifier("local"),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: Zt.defineModifier("special")
};
for (let i in x) {
  let t = x[i];
  t instanceof Zt && (t.name = i);
}
Cd([
  { tag: x.link, class: "tok-link" },
  { tag: x.heading, class: "tok-heading" },
  { tag: x.emphasis, class: "tok-emphasis" },
  { tag: x.strong, class: "tok-strong" },
  { tag: x.keyword, class: "tok-keyword" },
  { tag: x.atom, class: "tok-atom" },
  { tag: x.bool, class: "tok-bool" },
  { tag: x.url, class: "tok-url" },
  { tag: x.labelName, class: "tok-labelName" },
  { tag: x.inserted, class: "tok-inserted" },
  { tag: x.deleted, class: "tok-deleted" },
  { tag: x.literal, class: "tok-literal" },
  { tag: x.string, class: "tok-string" },
  { tag: x.number, class: "tok-number" },
  { tag: [x.regexp, x.escape, x.special(x.string)], class: "tok-string2" },
  { tag: x.variableName, class: "tok-variableName" },
  { tag: x.local(x.variableName), class: "tok-variableName tok-local" },
  { tag: x.definition(x.variableName), class: "tok-variableName tok-definition" },
  { tag: x.special(x.variableName), class: "tok-variableName2" },
  { tag: x.definition(x.propertyName), class: "tok-propertyName tok-definition" },
  { tag: x.typeName, class: "tok-typeName" },
  { tag: x.namespace, class: "tok-namespace" },
  { tag: x.className, class: "tok-className" },
  { tag: x.macroName, class: "tok-macroName" },
  { tag: x.propertyName, class: "tok-propertyName" },
  { tag: x.operator, class: "tok-operator" },
  { tag: x.comment, class: "tok-comment" },
  { tag: x.meta, class: "tok-meta" },
  { tag: x.invalid, class: "tok-invalid" },
  { tag: x.punctuation, class: "tok-punctuation" }
]);
var jo;
const qn = /* @__PURE__ */ new q();
function jy(i) {
  return D.define({
    combine: i ? (t) => t.concat(i) : void 0
  });
}
const Uy = /* @__PURE__ */ new q();
class fe {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(t, e, n = [], s = "") {
    this.data = t, this.name = s, X.prototype.hasOwnProperty("tree") || Object.defineProperty(X.prototype, "tree", { get() {
      return Tt(this);
    } }), this.parser = e, this.extension = [
      cn.of(this),
      X.languageData.of((r, o, l) => {
        let a = Lc(r, o, l), h = a.type.prop(qn);
        if (!h)
          return [];
        let c = r.facet(h), f = a.type.prop(Uy);
        if (f) {
          let u = a.resolve(o - a.from, l);
          for (let d of f)
            if (d.test(u, r)) {
              let p = r.facet(d.facet);
              return d.type == "replace" ? p : p.concat(c);
            }
        }
        return c;
      })
    ].concat(n);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(t, e, n = -1) {
    return Lc(t, e, n).type.prop(qn) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(t) {
    let e = t.facet(cn);
    if ((e == null ? void 0 : e.data) == this.data)
      return [{ from: 0, to: t.doc.length }];
    if (!e || !e.allowsNesting)
      return [];
    let n = [], s = (r, o) => {
      if (r.prop(qn) == this.data) {
        n.push({ from: o, to: o + r.length });
        return;
      }
      let l = r.prop(q.mounted);
      if (l) {
        if (l.tree.prop(qn) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              n.push({ from: a.from + o, to: a.to + o });
          else
            n.push({ from: o, to: o + r.length });
          return;
        } else if (l.overlay) {
          let a = n.length;
          if (s(l.tree, l.overlay[0].from + o), n.length > a)
            return;
        }
      }
      for (let a = 0; a < r.children.length; a++) {
        let h = r.children[a];
        h instanceof pt && s(h, r.positions[a] + o);
      }
    };
    return s(Tt(t), 0), n;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
fe.setState = /* @__PURE__ */ H.define();
function Lc(i, t, e) {
  let n = i.facet(cn), s = Tt(i).topNode;
  if (!n || n.allowsNesting)
    for (let r = s; r; r = r.enter(t, e, bt.ExcludeBuffers))
      r.type.isTop && (s = r);
  return s;
}
class wr extends fe {
  constructor(t, e, n) {
    super(t, e, [], n), this.parser = e;
  }
  /**
  Define a language from a parser.
  */
  static define(t) {
    let e = jy(t.languageData);
    return new wr(e, t.parser.configure({
      props: [qn.add((n) => n.isTop ? e : void 0)]
    }), t.name);
  }
  /**
  Create a new instance of this language with a reconfigured
  version of its parser and optionally a new name.
  */
  configure(t, e) {
    return new wr(this.data, this.parser.configure(t), e || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function Tt(i) {
  let t = i.field(fe.state, !1);
  return t ? t.tree : pt.empty;
}
class Jy {
  /**
  Create an input object for the given document.
  */
  constructor(t) {
    this.doc = t, this.cursorPos = 0, this.string = "", this.cursor = t.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(t) {
    return this.string = this.cursor.next(t - this.cursorPos).value, this.cursorPos = t + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(t) {
    return this.syncTo(t), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(t, e) {
    let n = this.cursorPos - this.string.length;
    return t < n || e >= this.cursorPos ? this.doc.sliceString(t, e) : this.string.slice(t - n, e - n);
  }
}
let vi = null;
class kr {
  constructor(t, e, n = [], s, r, o, l, a) {
    this.parser = t, this.state = e, this.fragments = n, this.tree = s, this.treeLen = r, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(t, e, n) {
    return new kr(t, e, [], pt.empty, 0, n, [], null);
  }
  startParse() {
    return this.parser.startParse(new Jy(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(t, e) {
    return e != null && e >= this.state.doc.length && (e = void 0), this.tree != pt.empty && this.isDone(e ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var n;
      if (typeof t == "number") {
        let s = Date.now() + t;
        t = () => Date.now() > s;
      }
      for (this.parse || (this.parse = this.startParse()), e != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > e) && e < this.state.doc.length && this.parse.stopAt(e); ; ) {
        let s = this.parse.advance();
        if (s)
          if (this.fragments = this.withoutTempSkipped(Mn.addTree(s, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (n = this.parse.stoppedAt) !== null && n !== void 0 ? n : this.state.doc.length, this.tree = s, this.parse = null, this.treeLen < (e ?? this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (t())
          return !1;
      }
    });
  }
  /**
  @internal
  */
  takeTree() {
    let t, e;
    this.parse && (t = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > t) && this.parse.stopAt(t), this.withContext(() => {
      for (; !(e = this.parse.advance()); )
        ;
    }), this.treeLen = t, this.tree = e, this.fragments = this.withoutTempSkipped(Mn.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(t) {
    let e = vi;
    vi = this;
    try {
      return t();
    } finally {
      vi = e;
    }
  }
  withoutTempSkipped(t) {
    for (let e; e = this.tempSkipped.pop(); )
      t = Ec(t, e.from, e.to);
    return t;
  }
  /**
  @internal
  */
  changes(t, e) {
    let { fragments: n, tree: s, treeLen: r, viewport: o, skipped: l } = this;
    if (this.takeTree(), !t.empty) {
      let a = [];
      if (t.iterChangedRanges((h, c, f, u) => a.push({ fromA: h, toA: c, fromB: f, toB: u })), n = Mn.applyChanges(n, a), s = pt.empty, r = 0, o = { from: t.mapPos(o.from, -1), to: t.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let h of this.skipped) {
          let c = t.mapPos(h.from, 1), f = t.mapPos(h.to, -1);
          c < f && l.push({ from: c, to: f });
        }
      }
    }
    return new kr(this.parser, e, n, s, r, o, l, this.scheduleOn);
  }
  /**
  @internal
  */
  updateViewport(t) {
    if (this.viewport.from == t.from && this.viewport.to == t.to)
      return !1;
    this.viewport = t;
    let e = this.skipped.length;
    for (let n = 0; n < this.skipped.length; n++) {
      let { from: s, to: r } = this.skipped[n];
      s < t.to && r > t.from && (this.fragments = Ec(this.fragments, s, r), this.skipped.splice(n--, 1));
    }
    return this.skipped.length >= e ? !1 : (this.reset(), !0);
  }
  /**
  @internal
  */
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  /**
  Notify the parse scheduler that the given region was skipped
  because it wasn't in view, and the parse should be restarted
  when it comes into view.
  */
  skipUntilInView(t, e) {
    this.skipped.push({ from: t, to: e });
  }
  /**
  Returns a parser intended to be used as placeholder when
  asynchronously loading a nested parser. It'll skip its input and
  mark it as not-really-parsed, so that the next update will parse
  it again.
  
  When `until` is given, a reparse will be scheduled when that
  promise resolves.
  */
  static getSkippingParser(t) {
    return new class extends Sd {
      createParse(e, n, s) {
        let r = s[0].from, o = s[s.length - 1].to;
        return {
          parsedPos: r,
          advance() {
            let a = vi;
            if (a) {
              for (let h of s)
                a.tempSkipped.push(h);
              t && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, t]) : t);
            }
            return this.parsedPos = o, new pt(Qt.none, [], [], o - r);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  /**
  @internal
  */
  isDone(t) {
    t = Math.min(t, this.state.doc.length);
    let e = this.fragments;
    return this.treeLen >= t && e.length && e[0].from == 0 && e[0].to >= t;
  }
  /**
  Get the context for the current parse, or `null` if no editor
  parse is in progress.
  */
  static get() {
    return vi;
  }
}
function Ec(i, t, e) {
  return Mn.applyChanges(i, [{ fromA: t, toA: e, fromB: t, toB: e }]);
}
class si {
  constructor(t) {
    this.context = t, this.tree = t.tree;
  }
  apply(t) {
    if (!t.docChanged && this.tree == this.context.tree)
      return this;
    let e = this.context.changes(t.changes, t.state), n = this.context.treeLen == t.startState.doc.length ? void 0 : Math.max(t.changes.mapPos(this.context.treeLen), e.viewport.to);
    return e.work(20, n) || e.takeTree(), new si(e);
  }
  static init(t) {
    let e = Math.min(3e3, t.doc.length), n = kr.create(t.facet(cn).parser, t, { from: 0, to: e });
    return n.work(20, e) || n.takeTree(), new si(n);
  }
}
fe.state = /* @__PURE__ */ kt.define({
  create: si.init,
  update(i, t) {
    for (let e of t.effects)
      if (e.is(fe.setState))
        return e.value;
    return t.startState.facet(cn) != t.state.facet(cn) ? si.init(t.state) : i.apply(t);
  }
});
let Ad = (i) => {
  let t = setTimeout(
    () => i(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(t);
};
typeof requestIdleCallback < "u" && (Ad = (i) => {
  let t = -1, e = setTimeout(
    () => {
      t = requestIdleCallback(i, {
        timeout: 400
        /* Work.MinPause */
      });
    },
    100
    /* Work.MinPause */
  );
  return () => t < 0 ? clearTimeout(e) : cancelIdleCallback(t);
});
const Uo = typeof navigator < "u" && (!((jo = navigator.scheduling) === null || jo === void 0) && jo.isInputPending) ? () => navigator.scheduling.isInputPending() : null, Gy = /* @__PURE__ */ ft.fromClass(class {
  constructor(t) {
    this.view = t, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(t) {
    let e = this.view.state.field(fe.state).context;
    (e.updateViewport(t.view.viewport) || this.view.viewport.to > e.treeLen) && this.scheduleWork(), (t.docChanged || t.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: t } = this.view, e = t.field(fe.state);
    (e.tree != e.context.tree || !e.context.isDone(t.doc.length)) && (this.working = Ad(this.work));
  }
  work(t) {
    this.working = null;
    let e = Date.now();
    if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: n, viewport: { to: s } } = this.view, r = n.field(fe.state);
    if (r.tree == r.context.tree && r.context.isDone(
      s + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, t && !Uo ? Math.max(25, t.timeRemaining() - 5) : 1e9), l = r.context.treeLen < s && n.doc.length > s + 1e3, a = r.context.work(() => Uo && Uo() || Date.now() > o, s + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - e, (a || this.chunkBudget <= 0) && (r.context.takeTree(), this.view.dispatch({ effects: fe.setState.of(new si(r.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(r.context);
  }
  checkAsyncSchedule(t) {
    t.scheduleOn && (this.workScheduled++, t.scheduleOn.then(() => this.scheduleWork()).catch((e) => Bt(this.view.state, e)).then(() => this.workScheduled--), t.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), cn = /* @__PURE__ */ D.define({
  combine(i) {
    return i.length ? i[0] : null;
  },
  enables: (i) => [
    fe.state,
    Gy,
    P.contentAttributes.compute([i], (t) => {
      let e = t.facet(i);
      return e && e.name ? { "data-language": e.name } : {};
    })
  ]
});
class Xy {
  /**
  Create a language support object.
  */
  constructor(t, e = []) {
    this.language = t, this.support = e, this.extension = [t, e];
  }
}
const Yy = /* @__PURE__ */ D.define(), io = /* @__PURE__ */ D.define({
  combine: (i) => {
    if (!i.length)
      return "  ";
    let t = i[0];
    if (!t || /\S/.test(t) || Array.from(t).some((e) => e != t[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(i[0]));
    return t;
  }
});
function Cr(i) {
  let t = i.facet(io);
  return t.charCodeAt(0) == 9 ? i.tabSize * t.length : t.length;
}
function Xi(i, t) {
  let e = "", n = i.tabSize, s = i.facet(io)[0];
  if (s == "	") {
    for (; t >= n; )
      e += "	", t -= n;
    s = " ";
  }
  for (let r = 0; r < t; r++)
    e += s;
  return e;
}
function Ra(i, t) {
  i instanceof X && (i = new so(i));
  for (let n of i.state.facet(Yy)) {
    let s = n(i, t);
    if (s !== void 0)
      return s;
  }
  let e = Tt(i.state);
  return e.length >= t ? Zy(i, e, t) : null;
}
class so {
  /**
  Create an indent context.
  */
  constructor(t, e = {}) {
    this.state = t, this.options = e, this.unit = Cr(t);
  }
  /**
  Get a description of the line at the given position, taking
  [simulated line
  breaks](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  into account. If there is such a break at `pos`, the `bias`
  argument determines whether the part of the line line before or
  after the break is used.
  */
  lineAt(t, e = 1) {
    let n = this.state.doc.lineAt(t), { simulateBreak: s, simulateDoubleBreak: r } = this.options;
    return s != null && s >= n.from && s <= n.to ? r && s == t ? { text: "", from: t } : (e < 0 ? s < t : s <= t) ? { text: n.text.slice(s - n.from), from: s } : { text: n.text.slice(0, s - n.from), from: n.from } : n;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(t, e = 1) {
    if (this.options.simulateDoubleBreak && t == this.options.simulateBreak)
      return "";
    let { text: n, from: s } = this.lineAt(t, e);
    return n.slice(t - s, Math.min(n.length, t + 100 - s));
  }
  /**
  Find the column for the given position.
  */
  column(t, e = 1) {
    let { text: n, from: s } = this.lineAt(t, e), r = this.countColumn(n, t - s), o = this.options.overrideIndentation ? this.options.overrideIndentation(s) : -1;
    return o > -1 && (r += o - this.countColumn(n, n.search(/\S|$/))), r;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(t, e = t.length) {
    return fi(t, this.state.tabSize, e);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(t, e = 1) {
    let { text: n, from: s } = this.lineAt(t, e), r = this.options.overrideIndentation;
    if (r) {
      let o = r(s);
      if (o > -1)
        return o;
    }
    return this.countColumn(n, n.search(/\S|$/));
  }
  /**
  Returns the [simulated line
  break](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  for this context, if any.
  */
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const Od = /* @__PURE__ */ new q();
function Zy(i, t, e) {
  let n = t.resolveStack(e), s = t.resolveInner(e, -1).resolve(e, 0).enterUnfinishedNodesBefore(e);
  if (s != n.node) {
    let r = [];
    for (let o = s; o && !(o.from == n.node.from && o.type == n.node.type); o = o.parent)
      r.push(o);
    for (let o = r.length - 1; o >= 0; o--)
      n = { node: r[o], next: n };
  }
  return Md(n, i, e);
}
function Md(i, t, e) {
  for (let n = i; n; n = n.next) {
    let s = eb(n.node);
    if (s)
      return s(Ba.create(t, e, n));
  }
  return 0;
}
function tb(i) {
  return i.pos == i.options.simulateBreak && i.options.simulateDoubleBreak;
}
function eb(i) {
  let t = i.type.prop(Od);
  if (t)
    return t;
  let e = i.firstChild, n;
  if (e && (n = e.type.prop(q.closedBy))) {
    let s = i.lastChild, r = s && n.indexOf(s.name) > -1;
    return (o) => rb(o, !0, 1, void 0, r && !tb(o) ? s.from : void 0);
  }
  return i.parent == null ? nb : null;
}
function nb() {
  return 0;
}
class Ba extends so {
  constructor(t, e, n) {
    super(t.state, t.options), this.base = t, this.pos = e, this.context = n;
  }
  /**
  The syntax tree node to which the indentation strategy
  applies.
  */
  get node() {
    return this.context.node;
  }
  /**
  @internal
  */
  static create(t, e, n) {
    return new Ba(t, e, n);
  }
  /**
  Get the text directly after `this.pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  /**
  Get the indentation at the reference line for `this.node`, which
  is the line on which it starts, unless there is a node that is
  _not_ a parent of this node covering the start of that line. If
  so, the line at the start of that node is tried, again skipping
  on if it is covered by another such node.
  */
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  /**
  Get the indentation for the reference line of the given node
  (see [`baseIndent`](https://codemirror.net/6/docs/ref/#language.TreeIndentContext.baseIndent)).
  */
  baseIndentFor(t) {
    let e = this.state.doc.lineAt(t.from);
    for (; ; ) {
      let n = t.resolve(e.from);
      for (; n.parent && n.parent.from == n.from; )
        n = n.parent;
      if (ib(n, t))
        break;
      e = this.state.doc.lineAt(n.from);
    }
    return this.lineIndent(e.from);
  }
  /**
  Continue looking for indentations in the node's parent nodes,
  and return the result of that.
  */
  continue() {
    return Md(this.context.next, this.base, this.pos);
  }
}
function ib(i, t) {
  for (let e = t; e; e = e.parent)
    if (i == e)
      return !0;
  return !1;
}
function sb(i) {
  let t = i.node, e = t.childAfter(t.from), n = t.lastChild;
  if (!e)
    return null;
  let s = i.options.simulateBreak, r = i.state.doc.lineAt(e.from), o = s == null || s <= r.from ? r.to : Math.min(r.to, s);
  for (let l = e.to; ; ) {
    let a = t.childAfter(l);
    if (!a || a == n)
      return null;
    if (!a.type.isSkipped) {
      if (a.from >= o)
        return null;
      let h = /^ */.exec(r.text.slice(e.to - r.from))[0].length;
      return { from: e.from, to: e.to + h };
    }
    l = a.to;
  }
}
function rb(i, t, e, n, s) {
  let r = i.textAfter, o = r.match(/^\s*/)[0].length, l = n && r.slice(o, o + n.length) == n || s == i.pos + o, a = sb(i);
  return a ? l ? i.column(a.from) : i.column(a.to) : i.baseIndent + (l ? 0 : i.unit * e);
}
const ob = 200;
function lb() {
  return X.transactionFilter.of((i) => {
    if (!i.docChanged || !i.isUserEvent("input.type") && !i.isUserEvent("input.complete"))
      return i;
    let t = i.startState.languageDataAt("indentOnInput", i.startState.selection.main.head);
    if (!t.length)
      return i;
    let e = i.newDoc, { head: n } = i.newSelection.main, s = e.lineAt(n);
    if (n > s.from + ob)
      return i;
    let r = e.sliceString(s.from, n);
    if (!t.some((h) => h.test(r)))
      return i;
    let { state: o } = i, l = -1, a = [];
    for (let { head: h } of o.selection.ranges) {
      let c = o.doc.lineAt(h);
      if (c.from == l)
        continue;
      l = c.from;
      let f = Ra(o, c.from);
      if (f == null)
        continue;
      let u = /^\s*/.exec(c.text)[0], d = Xi(o, f);
      u != d && a.push({ from: c.from, to: c.from + u.length, insert: d });
    }
    return a.length ? [i, { changes: a, sequential: !0 }] : i;
  });
}
const ab = /* @__PURE__ */ D.define(), Td = /* @__PURE__ */ new q();
function Ic(i) {
  let t = i.firstChild, e = i.lastChild;
  return t && t.to < e.from ? { from: t.to, to: e.type.isError ? i.to : e.from } : null;
}
function hb(i, t, e) {
  let n = Tt(i);
  if (n.length < e)
    return null;
  let s = n.resolveStack(e, 1), r = null;
  for (let o = s; o; o = o.next) {
    let l = o.node;
    if (l.to <= e || l.from > e)
      continue;
    if (r && l.from < t)
      break;
    let a = l.type.prop(Td);
    if (a && (l.to < n.length - 50 || n.length == i.doc.length || !cb(l))) {
      let h = a(l, i);
      h && h.from <= e && h.from >= t && h.to > e && (r = h);
    }
  }
  return r;
}
function cb(i) {
  let t = i.lastChild;
  return t && t.to == i.to && t.type.isError;
}
function Ar(i, t, e) {
  for (let n of i.facet(ab)) {
    let s = n(i, t, e);
    if (s)
      return s;
  }
  return hb(i, t, e);
}
function $d(i, t) {
  let e = t.mapPos(i.from, 1), n = t.mapPos(i.to, -1);
  return e >= n ? void 0 : { from: e, to: n };
}
const ro = /* @__PURE__ */ H.define({ map: $d }), hs = /* @__PURE__ */ H.define({ map: $d });
function Pd(i) {
  let t = [];
  for (let { head: e } of i.state.selection.ranges)
    t.some((n) => n.from <= e && n.to >= e) || t.push(i.lineBlockAt(e));
  return t;
}
const Bn = /* @__PURE__ */ kt.define({
  create() {
    return V.none;
  },
  update(i, t) {
    i = i.map(t.changes);
    for (let e of t.effects)
      if (e.is(ro) && !fb(i, e.value.from, e.value.to)) {
        let { preparePlaceholder: n } = t.state.facet(Bd), s = n ? V.replace({ widget: new bb(n(t.state, e.value)) }) : _c;
        i = i.update({ add: [s.range(e.value.from, e.value.to)] });
      } else e.is(hs) && (i = i.update({
        filter: (n, s) => e.value.from != n || e.value.to != s,
        filterFrom: e.value.from,
        filterTo: e.value.to
      }));
    if (t.selection) {
      let e = !1, { head: n } = t.selection.main;
      i.between(n, n, (s, r) => {
        s < n && r > n && (e = !0);
      }), e && (i = i.update({
        filterFrom: n,
        filterTo: n,
        filter: (s, r) => r <= n || s >= n
      }));
    }
    return i;
  },
  provide: (i) => P.decorations.from(i),
  toJSON(i, t) {
    let e = [];
    return i.between(0, t.doc.length, (n, s) => {
      e.push(n, s);
    }), e;
  },
  fromJSON(i) {
    if (!Array.isArray(i) || i.length % 2)
      throw new RangeError("Invalid JSON for fold state");
    let t = [];
    for (let e = 0; e < i.length; ) {
      let n = i[e++], s = i[e++];
      if (typeof n != "number" || typeof s != "number")
        throw new RangeError("Invalid JSON for fold state");
      t.push(_c.range(n, s));
    }
    return V.set(t, !0);
  }
});
function Or(i, t, e) {
  var n;
  let s = null;
  return (n = i.field(Bn, !1)) === null || n === void 0 || n.between(t, e, (r, o) => {
    (!s || s.from > r) && (s = { from: r, to: o });
  }), s;
}
function fb(i, t, e) {
  let n = !1;
  return i.between(t, t, (s, r) => {
    s == t && r == e && (n = !0);
  }), n;
}
function Dd(i, t) {
  return i.field(Bn, !1) ? t : t.concat(H.appendConfig.of(Ld()));
}
const ub = (i) => {
  for (let t of Pd(i)) {
    let e = Ar(i.state, t.from, t.to);
    if (e)
      return i.dispatch({ effects: Dd(i.state, [ro.of(e), Rd(i, e)]) }), !0;
  }
  return !1;
}, db = (i) => {
  if (!i.state.field(Bn, !1))
    return !1;
  let t = [];
  for (let e of Pd(i)) {
    let n = Or(i.state, e.from, e.to);
    n && t.push(hs.of(n), Rd(i, n, !1));
  }
  return t.length && i.dispatch({ effects: t }), t.length > 0;
};
function Rd(i, t, e = !0) {
  let n = i.state.doc.lineAt(t.from).number, s = i.state.doc.lineAt(t.to).number;
  return P.announce.of(`${i.state.phrase(e ? "Folded lines" : "Unfolded lines")} ${n} ${i.state.phrase("to")} ${s}.`);
}
const pb = (i) => {
  let { state: t } = i, e = [];
  for (let n = 0; n < t.doc.length; ) {
    let s = i.lineBlockAt(n), r = Ar(t, s.from, s.to);
    r && e.push(ro.of(r)), n = (r ? i.lineBlockAt(r.to) : s).to + 1;
  }
  return e.length && i.dispatch({ effects: Dd(i.state, e) }), !!e.length;
}, gb = (i) => {
  let t = i.state.field(Bn, !1);
  if (!t || !t.size)
    return !1;
  let e = [];
  return t.between(0, i.state.doc.length, (n, s) => {
    e.push(hs.of({ from: n, to: s }));
  }), i.dispatch({ effects: e }), !0;
}, mb = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: ub },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: db },
  { key: "Ctrl-Alt-[", run: pb },
  { key: "Ctrl-Alt-]", run: gb }
], yb = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "…"
}, Bd = /* @__PURE__ */ D.define({
  combine(i) {
    return Be(i, yb);
  }
});
function Ld(i) {
  return [Bn, Sb];
}
function Ed(i, t) {
  let { state: e } = i, n = e.facet(Bd), s = (o) => {
    let l = i.lineBlockAt(i.posAtDOM(o.target)), a = Or(i.state, l.from, l.to);
    a && i.dispatch({ effects: hs.of(a) }), o.preventDefault();
  };
  if (n.placeholderDOM)
    return n.placeholderDOM(i, s, t);
  let r = document.createElement("span");
  return r.textContent = n.placeholderText, r.setAttribute("aria-label", e.phrase("folded code")), r.title = e.phrase("unfold"), r.className = "cm-foldPlaceholder", r.onclick = s, r;
}
const _c = /* @__PURE__ */ V.replace({ widget: /* @__PURE__ */ new class extends fn {
  toDOM(i) {
    return Ed(i, null);
  }
}() });
class bb extends fn {
  constructor(t) {
    super(), this.value = t;
  }
  eq(t) {
    return this.value == t.value;
  }
  toDOM(t) {
    return Ed(t, this.value);
  }
}
const vb = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class Jo extends qe {
  constructor(t, e) {
    super(), this.config = t, this.open = e;
  }
  eq(t) {
    return this.config == t.config && this.open == t.open;
  }
  toDOM(t) {
    if (this.config.markerDOM)
      return this.config.markerDOM(this.open);
    let e = document.createElement("span");
    return e.textContent = this.open ? this.config.openText : this.config.closedText, e.title = t.state.phrase(this.open ? "Fold line" : "Unfold line"), e;
  }
}
function xb(i = {}) {
  let t = Object.assign(Object.assign({}, vb), i), e = new Jo(t, !0), n = new Jo(t, !1), s = ft.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(cn) != o.state.facet(cn) || o.startState.field(Bn, !1) != o.state.field(Bn, !1) || Tt(o.startState) != Tt(o.state) || t.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new He();
      for (let a of o.viewportLineBlocks) {
        let h = Or(o.state, a.from, a.to) ? n : Ar(o.state, a.from, a.to) ? e : null;
        h && l.add(a.from, a.from, h);
      }
      return l.finish();
    }
  }), { domEventHandlers: r } = t;
  return [
    s,
    Sy({
      class: "cm-foldGutter",
      markers(o) {
        var l;
        return ((l = o.plugin(s)) === null || l === void 0 ? void 0 : l.markers) || U.empty;
      },
      initialSpacer() {
        return new Jo(t, !1);
      },
      domEventHandlers: Object.assign(Object.assign({}, r), { click: (o, l, a) => {
        if (r.click && r.click(o, l, a))
          return !0;
        let h = Or(o.state, l.from, l.to);
        if (h)
          return o.dispatch({ effects: hs.of(h) }), !0;
        let c = Ar(o.state, l.from, l.to);
        return c ? (o.dispatch({ effects: ro.of(c) }), !0) : !1;
      } })
    }),
    Ld()
  ];
}
const Sb = /* @__PURE__ */ P.baseTheme({
  ".cm-foldPlaceholder": {
    backgroundColor: "#eee",
    border: "1px solid #ddd",
    color: "#888",
    borderRadius: ".2em",
    margin: "0 1px",
    padding: "0 1px",
    cursor: "pointer"
  },
  ".cm-foldGutter span": {
    padding: "0 1px",
    cursor: "pointer"
  }
});
class cs {
  constructor(t, e) {
    this.specs = t;
    let n;
    function s(l) {
      let a = on.newName();
      return (n || (n = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const r = typeof e.all == "string" ? e.all : e.all ? s(e.all) : void 0, o = e.scope;
    this.scope = o instanceof fe ? (l) => l.prop(qn) == o.data : o ? (l) => l == o : void 0, this.style = Cd(t.map((l) => ({
      tag: l.tag,
      class: l.class || s(Object.assign({}, l, { tag: null }))
    })), {
      all: r
    }).style, this.module = n ? new on(n) : null, this.themeType = e.themeType;
  }
  /**
  Create a highlighter style that associates the given styles to
  the given tags. The specs must be objects that hold a style tag
  or array of tags in their `tag` property, and either a single
  `class` property providing a static CSS class (for highlighter
  that rely on external styling), or a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)-style
  set of CSS properties (which define the styling for those tags).
  
  The CSS rules created for a highlighter will be emitted in the
  order of the spec's properties. That means that for elements that
  have multiple tags associated with them, styles defined further
  down in the list will have a higher CSS precedence than styles
  defined earlier.
  */
  static define(t, e) {
    return new cs(t, e || {});
  }
}
const Kl = /* @__PURE__ */ D.define(), Id = /* @__PURE__ */ D.define({
  combine(i) {
    return i.length ? [i[0]] : null;
  }
});
function Go(i) {
  let t = i.facet(Kl);
  return t.length ? t : i.facet(Id);
}
function _d(i, t) {
  let e = [kb], n;
  return i instanceof cs && (i.module && e.push(P.styleModule.of(i.module)), n = i.themeType), t != null && t.fallback ? e.push(Id.of(i)) : n ? e.push(Kl.computeN([P.darkTheme], (s) => s.facet(P.darkTheme) == (n == "dark") ? [i] : [])) : e.push(Kl.of(i)), e;
}
class wb {
  constructor(t) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = Tt(t.state), this.decorations = this.buildDeco(t, Go(t.state)), this.decoratedTo = t.viewport.to;
  }
  update(t) {
    let e = Tt(t.state), n = Go(t.state), s = n != Go(t.startState), { viewport: r } = t.view, o = t.changes.mapPos(this.decoratedTo, 1);
    e.length < r.to && !s && e.type == this.tree.type && o >= r.to ? (this.decorations = this.decorations.map(t.changes), this.decoratedTo = o) : (e != this.tree || t.viewportChanged || s) && (this.tree = e, this.decorations = this.buildDeco(t.view, n), this.decoratedTo = r.to);
  }
  buildDeco(t, e) {
    if (!e || !this.tree.length)
      return V.none;
    let n = new He();
    for (let { from: s, to: r } of t.visibleRanges)
      qy(this.tree, e, (o, l, a) => {
        n.add(o, l, this.markCache[a] || (this.markCache[a] = V.mark({ class: a })));
      }, s, r);
    return n.finish();
  }
}
const kb = /* @__PURE__ */ En.high(/* @__PURE__ */ ft.fromClass(wb, {
  decorations: (i) => i.decorations
})), Cb = /* @__PURE__ */ cs.define([
  {
    tag: x.meta,
    color: "#404740"
  },
  {
    tag: x.link,
    textDecoration: "underline"
  },
  {
    tag: x.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: x.emphasis,
    fontStyle: "italic"
  },
  {
    tag: x.strong,
    fontWeight: "bold"
  },
  {
    tag: x.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: x.keyword,
    color: "#708"
  },
  {
    tag: [x.atom, x.bool, x.url, x.contentSeparator, x.labelName],
    color: "#219"
  },
  {
    tag: [x.literal, x.inserted],
    color: "#164"
  },
  {
    tag: [x.string, x.deleted],
    color: "#a11"
  },
  {
    tag: [x.regexp, x.escape, /* @__PURE__ */ x.special(x.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ x.definition(x.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ x.local(x.variableName),
    color: "#30a"
  },
  {
    tag: [x.typeName, x.namespace],
    color: "#085"
  },
  {
    tag: x.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ x.special(x.variableName), x.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ x.definition(x.propertyName),
    color: "#00c"
  },
  {
    tag: x.comment,
    color: "#940"
  },
  {
    tag: x.invalid,
    color: "#f00"
  }
]), Ab = /* @__PURE__ */ P.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), Nd = 1e4, Fd = "()[]{}", Vd = /* @__PURE__ */ D.define({
  combine(i) {
    return Be(i, {
      afterCursor: !0,
      brackets: Fd,
      maxScanDistance: Nd,
      renderMatch: Tb
    });
  }
}), Ob = /* @__PURE__ */ V.mark({ class: "cm-matchingBracket" }), Mb = /* @__PURE__ */ V.mark({ class: "cm-nonmatchingBracket" });
function Tb(i) {
  let t = [], e = i.matched ? Ob : Mb;
  return t.push(e.range(i.start.from, i.start.to)), i.end && t.push(e.range(i.end.from, i.end.to)), t;
}
const $b = /* @__PURE__ */ kt.define({
  create() {
    return V.none;
  },
  update(i, t) {
    if (!t.docChanged && !t.selection)
      return i;
    let e = [], n = t.state.facet(Vd);
    for (let s of t.state.selection.ranges) {
      if (!s.empty)
        continue;
      let r = Oe(t.state, s.head, -1, n) || s.head > 0 && Oe(t.state, s.head - 1, 1, n) || n.afterCursor && (Oe(t.state, s.head, 1, n) || s.head < t.state.doc.length && Oe(t.state, s.head + 1, -1, n));
      r && (e = e.concat(n.renderMatch(r, t.state)));
    }
    return V.set(e, !0);
  },
  provide: (i) => P.decorations.from(i)
}), Pb = [
  $b,
  Ab
];
function Db(i = {}) {
  return [Vd.of(i), Pb];
}
const Rb = /* @__PURE__ */ new q();
function jl(i, t, e) {
  let n = i.prop(t < 0 ? q.openedBy : q.closedBy);
  if (n)
    return n;
  if (i.name.length == 1) {
    let s = e.indexOf(i.name);
    if (s > -1 && s % 2 == (t < 0 ? 1 : 0))
      return [e[s + t]];
  }
  return null;
}
function Ul(i) {
  let t = i.type.prop(Rb);
  return t ? t(i.node) : i;
}
function Oe(i, t, e, n = {}) {
  let s = n.maxScanDistance || Nd, r = n.brackets || Fd, o = Tt(i), l = o.resolveInner(t, e);
  for (let a = l; a; a = a.parent) {
    let h = jl(a.type, e, r);
    if (h && a.from < a.to) {
      let c = Ul(a);
      if (c && (e > 0 ? t >= c.from && t < c.to : t > c.from && t <= c.to))
        return Bb(i, t, e, a, c, h, r);
    }
  }
  return Lb(i, t, e, o, l.type, s, r);
}
function Bb(i, t, e, n, s, r, o) {
  let l = n.parent, a = { from: s.from, to: s.to }, h = 0, c = l == null ? void 0 : l.cursor();
  if (c && (e < 0 ? c.childBefore(n.from) : c.childAfter(n.to)))
    do
      if (e < 0 ? c.to <= n.from : c.from >= n.to) {
        if (h == 0 && r.indexOf(c.type.name) > -1 && c.from < c.to) {
          let f = Ul(c);
          return { start: a, end: f ? { from: f.from, to: f.to } : void 0, matched: !0 };
        } else if (jl(c.type, e, o))
          h++;
        else if (jl(c.type, -e, o)) {
          if (h == 0) {
            let f = Ul(c);
            return {
              start: a,
              end: f && f.from < f.to ? { from: f.from, to: f.to } : void 0,
              matched: !1
            };
          }
          h--;
        }
      }
    while (e < 0 ? c.prevSibling() : c.nextSibling());
  return { start: a, matched: !1 };
}
function Lb(i, t, e, n, s, r, o) {
  let l = e < 0 ? i.sliceDoc(t - 1, t) : i.sliceDoc(t, t + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != e > 0)
    return null;
  let h = { from: e < 0 ? t - 1 : t, to: e > 0 ? t + 1 : t }, c = i.doc.iterRange(t, e > 0 ? i.doc.length : 0), f = 0;
  for (let u = 0; !c.next().done && u <= r; ) {
    let d = c.value;
    e < 0 && (u += d.length);
    let p = t + u * e;
    for (let m = e > 0 ? 0 : d.length - 1, g = e > 0 ? d.length : -1; m != g; m += e) {
      let y = o.indexOf(d[m]);
      if (!(y < 0 || n.resolveInner(p + m, 1).type != s))
        if (y % 2 == 0 == e > 0)
          f++;
        else {
          if (f == 1)
            return { start: h, end: { from: p + m, to: p + m + 1 }, matched: y >> 1 == a >> 1 };
          f--;
        }
    }
    e > 0 && (u += d.length);
  }
  return c.done ? { start: h, matched: !1 } : null;
}
const Eb = /* @__PURE__ */ Object.create(null), Nc = [Qt.none], Fc = [], Vc = /* @__PURE__ */ Object.create(null), Ib = /* @__PURE__ */ Object.create(null);
for (let [i, t] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  Ib[i] = /* @__PURE__ */ _b(Eb, t);
function Xo(i, t) {
  Fc.indexOf(i) > -1 || (Fc.push(i), console.warn(t));
}
function _b(i, t) {
  let e = [];
  for (let l of t.split(" ")) {
    let a = [];
    for (let h of l.split(".")) {
      let c = i[h] || x[h];
      c ? typeof c == "function" ? a.length ? a = a.map(c) : Xo(h, `Modifier ${h} used at start of tag`) : a.length ? Xo(h, `Tag ${h} used as modifier`) : a = Array.isArray(c) ? c : [c] : Xo(h, `Unknown highlighting tag ${h}`);
    }
    for (let h of a)
      e.push(h);
  }
  if (!e.length)
    return 0;
  let n = t.replace(/ /g, "_"), s = n + " " + e.map((l) => l.id), r = Vc[s];
  if (r)
    return r.id;
  let o = Vc[s] = Qt.define({
    id: Nc.length,
    name: n,
    props: [wd({ [n]: e })]
  });
  return Nc.push(o), o.id;
}
rt.RTL, rt.LTR;
const Nb = (i) => {
  let { state: t } = i, e = t.doc.lineAt(t.selection.main.from), n = Ea(i.state, e.from);
  return n.line ? Fb(i) : n.block ? Wb(i) : !1;
};
function La(i, t) {
  return ({ state: e, dispatch: n }) => {
    if (e.readOnly)
      return !1;
    let s = i(t, e);
    return s ? (n(e.update(s)), !0) : !1;
  };
}
const Fb = /* @__PURE__ */ La(
  qb,
  0
  /* CommentOption.Toggle */
), Vb = /* @__PURE__ */ La(
  Wd,
  0
  /* CommentOption.Toggle */
), Wb = /* @__PURE__ */ La(
  (i, t) => Wd(i, t, zb(t)),
  0
  /* CommentOption.Toggle */
);
function Ea(i, t) {
  let e = i.languageDataAt("commentTokens", t);
  return e.length ? e[0] : {};
}
const xi = 50;
function Hb(i, { open: t, close: e }, n, s) {
  let r = i.sliceDoc(n - xi, n), o = i.sliceDoc(s, s + xi), l = /\s*$/.exec(r)[0].length, a = /^\s*/.exec(o)[0].length, h = r.length - l;
  if (r.slice(h - t.length, h) == t && o.slice(a, a + e.length) == e)
    return {
      open: { pos: n - l, margin: l && 1 },
      close: { pos: s + a, margin: a && 1 }
    };
  let c, f;
  s - n <= 2 * xi ? c = f = i.sliceDoc(n, s) : (c = i.sliceDoc(n, n + xi), f = i.sliceDoc(s - xi, s));
  let u = /^\s*/.exec(c)[0].length, d = /\s*$/.exec(f)[0].length, p = f.length - d - e.length;
  return c.slice(u, u + t.length) == t && f.slice(p, p + e.length) == e ? {
    open: {
      pos: n + u + t.length,
      margin: /\s/.test(c.charAt(u + t.length)) ? 1 : 0
    },
    close: {
      pos: s - d - e.length,
      margin: /\s/.test(f.charAt(p - 1)) ? 1 : 0
    }
  } : null;
}
function zb(i) {
  let t = [];
  for (let e of i.selection.ranges) {
    let n = i.doc.lineAt(e.from), s = e.to <= n.to ? n : i.doc.lineAt(e.to);
    s.from > n.from && s.from == e.to && (s = e.to == n.to + 1 ? n : i.doc.lineAt(e.to - 1));
    let r = t.length - 1;
    r >= 0 && t[r].to > n.from ? t[r].to = s.to : t.push({ from: n.from + /^\s*/.exec(n.text)[0].length, to: s.to });
  }
  return t;
}
function Wd(i, t, e = t.selection.ranges) {
  let n = e.map((r) => Ea(t, r.from).block);
  if (!n.every((r) => r))
    return null;
  let s = e.map((r, o) => Hb(t, n[o], r.from, r.to));
  if (i != 2 && !s.every((r) => r))
    return { changes: t.changes(e.map((r, o) => s[o] ? [] : [{ from: r.from, insert: n[o].open + " " }, { from: r.to, insert: " " + n[o].close }])) };
  if (i != 1 && s.some((r) => r)) {
    let r = [];
    for (let o = 0, l; o < s.length; o++)
      if (l = s[o]) {
        let a = n[o], { open: h, close: c } = l;
        r.push({ from: h.pos - a.open.length, to: h.pos + h.margin }, { from: c.pos - c.margin, to: c.pos + a.close.length });
      }
    return { changes: r };
  }
  return null;
}
function qb(i, t, e = t.selection.ranges) {
  let n = [], s = -1;
  for (let { from: r, to: o } of e) {
    let l = n.length, a = 1e9, h = Ea(t, r).line;
    if (h) {
      for (let c = r; c <= o; ) {
        let f = t.doc.lineAt(c);
        if (f.from > s && (r == o || o > f.from)) {
          s = f.from;
          let u = /^\s*/.exec(f.text)[0].length, d = u == f.length, p = f.text.slice(u, u + h.length) == h ? u : -1;
          u < f.text.length && u < a && (a = u), n.push({ line: f, comment: p, token: h, indent: u, empty: d, single: !1 });
        }
        c = f.to + 1;
      }
      if (a < 1e9)
        for (let c = l; c < n.length; c++)
          n[c].indent < n[c].line.text.length && (n[c].indent = a);
      n.length == l + 1 && (n[l].single = !0);
    }
  }
  if (i != 2 && n.some((r) => r.comment < 0 && (!r.empty || r.single))) {
    let r = [];
    for (let { line: l, token: a, indent: h, empty: c, single: f } of n)
      (f || !c) && r.push({ from: l.from + h, insert: a + " " });
    let o = t.changes(r);
    return { changes: o, selection: t.selection.map(o, 1) };
  } else if (i != 1 && n.some((r) => r.comment >= 0)) {
    let r = [];
    for (let { line: o, comment: l, token: a } of n)
      if (l >= 0) {
        let h = o.from + l, c = h + a.length;
        o.text[c - o.from] == " " && c++, r.push({ from: h, to: c });
      }
    return { changes: r };
  }
  return null;
}
const Jl = /* @__PURE__ */ Qe.define(), Qb = /* @__PURE__ */ Qe.define(), Kb = /* @__PURE__ */ D.define(), Hd = /* @__PURE__ */ D.define({
  combine(i) {
    return Be(i, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (t, e) => e
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (t, e) => (n, s) => t(n, s) || e(n, s)
    });
  }
}), zd = /* @__PURE__ */ kt.define({
  create() {
    return Me.empty;
  },
  update(i, t) {
    let e = t.state.facet(Hd), n = t.annotation(Jl);
    if (n) {
      let a = zt.fromTransaction(t, n.selection), h = n.side, c = h == 0 ? i.undone : i.done;
      return a ? c = Mr(c, c.length, e.minDepth, a) : c = Kd(c, t.startState.selection), new Me(h == 0 ? n.rest : c, h == 0 ? c : n.rest);
    }
    let s = t.annotation(Qb);
    if ((s == "full" || s == "before") && (i = i.isolate()), t.annotation(yt.addToHistory) === !1)
      return t.changes.empty ? i : i.addMapping(t.changes.desc);
    let r = zt.fromTransaction(t), o = t.annotation(yt.time), l = t.annotation(yt.userEvent);
    return r ? i = i.addChanges(r, o, l, e, t) : t.selection && (i = i.addSelection(t.startState.selection, o, l, e.newGroupDelay)), (s == "full" || s == "after") && (i = i.isolate()), i;
  },
  toJSON(i) {
    return { done: i.done.map((t) => t.toJSON()), undone: i.undone.map((t) => t.toJSON()) };
  },
  fromJSON(i) {
    return new Me(i.done.map(zt.fromJSON), i.undone.map(zt.fromJSON));
  }
});
function jb(i = {}) {
  return [
    zd,
    Hd.of(i),
    P.domEventHandlers({
      beforeinput(t, e) {
        let n = t.inputType == "historyUndo" ? qd : t.inputType == "historyRedo" ? Gl : null;
        return n ? (t.preventDefault(), n(e)) : !1;
      }
    })
  ];
}
function oo(i, t) {
  return function({ state: e, dispatch: n }) {
    if (!t && e.readOnly)
      return !1;
    let s = e.field(zd, !1);
    if (!s)
      return !1;
    let r = s.pop(i, e, t);
    return r ? (n(r), !0) : !1;
  };
}
const qd = /* @__PURE__ */ oo(0, !1), Gl = /* @__PURE__ */ oo(1, !1), Ub = /* @__PURE__ */ oo(0, !0), Jb = /* @__PURE__ */ oo(1, !0);
class zt {
  constructor(t, e, n, s, r) {
    this.changes = t, this.effects = e, this.mapped = n, this.startSelection = s, this.selectionsAfter = r;
  }
  setSelAfter(t) {
    return new zt(this.changes, this.effects, this.mapped, this.startSelection, t);
  }
  toJSON() {
    var t, e, n;
    return {
      changes: (t = this.changes) === null || t === void 0 ? void 0 : t.toJSON(),
      mapped: (e = this.mapped) === null || e === void 0 ? void 0 : e.toJSON(),
      startSelection: (n = this.startSelection) === null || n === void 0 ? void 0 : n.toJSON(),
      selectionsAfter: this.selectionsAfter.map((s) => s.toJSON())
    };
  }
  static fromJSON(t) {
    return new zt(t.changes && mt.fromJSON(t.changes), [], t.mapped && Pe.fromJSON(t.mapped), t.startSelection && A.fromJSON(t.startSelection), t.selectionsAfter.map(A.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(t, e) {
    let n = ee;
    for (let s of t.startState.facet(Kb)) {
      let r = s(t);
      r.length && (n = n.concat(r));
    }
    return !n.length && t.changes.empty ? null : new zt(t.changes.invert(t.startState.doc), n, void 0, e || t.startState.selection, ee);
  }
  static selection(t) {
    return new zt(void 0, ee, void 0, void 0, t);
  }
}
function Mr(i, t, e, n) {
  let s = t + 1 > e + 20 ? t - e - 1 : 0, r = i.slice(s, t);
  return r.push(n), r;
}
function Gb(i, t) {
  let e = [], n = !1;
  return i.iterChangedRanges((s, r) => e.push(s, r)), t.iterChangedRanges((s, r, o, l) => {
    for (let a = 0; a < e.length; ) {
      let h = e[a++], c = e[a++];
      l >= h && o <= c && (n = !0);
    }
  }), n;
}
function Xb(i, t) {
  return i.ranges.length == t.ranges.length && i.ranges.filter((e, n) => e.empty != t.ranges[n].empty).length === 0;
}
function Qd(i, t) {
  return i.length ? t.length ? i.concat(t) : i : t;
}
const ee = [], Yb = 200;
function Kd(i, t) {
  if (i.length) {
    let e = i[i.length - 1], n = e.selectionsAfter.slice(Math.max(0, e.selectionsAfter.length - Yb));
    return n.length && n[n.length - 1].eq(t) ? i : (n.push(t), Mr(i, i.length - 1, 1e9, e.setSelAfter(n)));
  } else
    return [zt.selection([t])];
}
function Zb(i) {
  let t = i[i.length - 1], e = i.slice();
  return e[i.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)), e;
}
function Yo(i, t) {
  if (!i.length)
    return i;
  let e = i.length, n = ee;
  for (; e; ) {
    let s = tv(i[e - 1], t, n);
    if (s.changes && !s.changes.empty || s.effects.length) {
      let r = i.slice(0, e);
      return r[e - 1] = s, r;
    } else
      t = s.mapped, e--, n = s.selectionsAfter;
  }
  return n.length ? [zt.selection(n)] : ee;
}
function tv(i, t, e) {
  let n = Qd(i.selectionsAfter.length ? i.selectionsAfter.map((l) => l.map(t)) : ee, e);
  if (!i.changes)
    return zt.selection(n);
  let s = i.changes.map(t), r = t.mapDesc(i.changes, !0), o = i.mapped ? i.mapped.composeDesc(r) : r;
  return new zt(s, H.mapEffects(i.effects, t), o, i.startSelection.map(r), n);
}
const ev = /^(input\.type|delete)($|\.)/;
class Me {
  constructor(t, e, n = 0, s = void 0) {
    this.done = t, this.undone = e, this.prevTime = n, this.prevUserEvent = s;
  }
  isolate() {
    return this.prevTime ? new Me(this.done, this.undone) : this;
  }
  addChanges(t, e, n, s, r) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && t.changes && (!n || ev.test(n)) && (!l.selectionsAfter.length && e - this.prevTime < s.newGroupDelay && s.joinToEvent(r, Gb(l.changes, t.changes)) || // For compose (but not compose.start) events, always join with previous event
    n == "input.type.compose") ? o = Mr(o, o.length - 1, s.minDepth, new zt(t.changes.compose(l.changes), Qd(H.mapEffects(t.effects, l.changes), l.effects), l.mapped, l.startSelection, ee)) : o = Mr(o, o.length, s.minDepth, t), new Me(o, ee, e, n);
  }
  addSelection(t, e, n, s) {
    let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : ee;
    return r.length > 0 && e - this.prevTime < s && n == this.prevUserEvent && n && /^select($|\.)/.test(n) && Xb(r[r.length - 1], t) ? this : new Me(Kd(this.done, t), this.undone, e, n);
  }
  addMapping(t) {
    return new Me(Yo(this.done, t), Yo(this.undone, t), this.prevTime, this.prevUserEvent);
  }
  pop(t, e, n) {
    let s = t == 0 ? this.done : this.undone;
    if (s.length == 0)
      return null;
    let r = s[s.length - 1], o = r.selectionsAfter[0] || e.selection;
    if (n && r.selectionsAfter.length)
      return e.update({
        selection: r.selectionsAfter[r.selectionsAfter.length - 1],
        annotations: Jl.of({ side: t, rest: Zb(s), selection: o }),
        userEvent: t == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (r.changes) {
      let l = s.length == 1 ? ee : s.slice(0, s.length - 1);
      return r.mapped && (l = Yo(l, r.mapped)), e.update({
        changes: r.changes,
        selection: r.startSelection,
        effects: r.effects,
        annotations: Jl.of({ side: t, rest: l, selection: o }),
        filter: !1,
        userEvent: t == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
Me.empty = /* @__PURE__ */ new Me(ee, ee);
const nv = [
  { key: "Mod-z", run: qd, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Gl, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Gl, preventDefault: !0 },
  { key: "Mod-u", run: Ub, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: Jb, preventDefault: !0 }
];
function ui(i, t) {
  return A.create(i.ranges.map(t), i.mainIndex);
}
function Le(i, t) {
  return i.update({ selection: t, scrollIntoView: !0, userEvent: "select" });
}
function me({ state: i, dispatch: t }, e) {
  let n = ui(i.selection, e);
  return n.eq(i.selection, !0) ? !1 : (t(Le(i, n)), !0);
}
function lo(i, t) {
  return A.cursor(t ? i.to : i.from);
}
function jd(i, t) {
  return me(i, (e) => e.empty ? i.moveByChar(e, t) : lo(e, t));
}
function $t(i) {
  return i.textDirectionAt(i.state.selection.main.head) == rt.LTR;
}
const Ud = (i) => jd(i, !$t(i)), Jd = (i) => jd(i, $t(i));
function Gd(i, t) {
  return me(i, (e) => e.empty ? i.moveByGroup(e, t) : lo(e, t));
}
const iv = (i) => Gd(i, !$t(i)), sv = (i) => Gd(i, $t(i));
function rv(i, t, e) {
  if (t.type.prop(e))
    return !0;
  let n = t.to - t.from;
  return n && (n > 2 || /[^\s,.;:]/.test(i.sliceDoc(t.from, t.to))) || t.firstChild;
}
function ao(i, t, e) {
  let n = Tt(i).resolveInner(t.head), s = e ? q.closedBy : q.openedBy;
  for (let a = t.head; ; ) {
    let h = e ? n.childAfter(a) : n.childBefore(a);
    if (!h)
      break;
    rv(i, h, s) ? n = h : a = e ? h.to : h.from;
  }
  let r = n.type.prop(s), o, l;
  return r && (o = e ? Oe(i, n.from, 1) : Oe(i, n.to, -1)) && o.matched ? l = e ? o.end.to : o.end.from : l = e ? n.to : n.from, A.cursor(l, e ? -1 : 1);
}
const ov = (i) => me(i, (t) => ao(i.state, t, !$t(i))), lv = (i) => me(i, (t) => ao(i.state, t, $t(i)));
function Xd(i, t) {
  return me(i, (e) => {
    if (!e.empty)
      return lo(e, t);
    let n = i.moveVertically(e, t);
    return n.head != e.head ? n : i.moveToLineBoundary(e, t);
  });
}
const Yd = (i) => Xd(i, !1), Zd = (i) => Xd(i, !0);
function tp(i) {
  let t = i.scrollDOM.clientHeight < i.scrollDOM.scrollHeight - 2, e = 0, n = 0, s;
  if (t) {
    for (let r of i.state.facet(P.scrollMargins)) {
      let o = r(i);
      o != null && o.top && (e = Math.max(o == null ? void 0 : o.top, e)), o != null && o.bottom && (n = Math.max(o == null ? void 0 : o.bottom, n));
    }
    s = i.scrollDOM.clientHeight - e - n;
  } else
    s = (i.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: e,
    marginBottom: n,
    selfScroll: t,
    height: Math.max(i.defaultLineHeight, s - 5)
  };
}
function ep(i, t) {
  let e = tp(i), { state: n } = i, s = ui(n.selection, (o) => o.empty ? i.moveVertically(o, t, e.height) : lo(o, t));
  if (s.eq(n.selection))
    return !1;
  let r;
  if (e.selfScroll) {
    let o = i.coordsAtPos(n.selection.main.head), l = i.scrollDOM.getBoundingClientRect(), a = l.top + e.marginTop, h = l.bottom - e.marginBottom;
    o && o.top > a && o.bottom < h && (r = P.scrollIntoView(s.main.head, { y: "start", yMargin: o.top - a }));
  }
  return i.dispatch(Le(n, s), { effects: r }), !0;
}
const Wc = (i) => ep(i, !1), Xl = (i) => ep(i, !0);
function un(i, t, e) {
  let n = i.lineBlockAt(t.head), s = i.moveToLineBoundary(t, e);
  if (s.head == t.head && s.head != (e ? n.to : n.from) && (s = i.moveToLineBoundary(t, e, !1)), !e && s.head == n.from && n.length) {
    let r = /^\s*/.exec(i.state.sliceDoc(n.from, Math.min(n.from + 100, n.to)))[0].length;
    r && t.head != n.from + r && (s = A.cursor(n.from + r));
  }
  return s;
}
const av = (i) => me(i, (t) => un(i, t, !0)), hv = (i) => me(i, (t) => un(i, t, !1)), cv = (i) => me(i, (t) => un(i, t, !$t(i))), fv = (i) => me(i, (t) => un(i, t, $t(i))), uv = (i) => me(i, (t) => A.cursor(i.lineBlockAt(t.head).from, 1)), dv = (i) => me(i, (t) => A.cursor(i.lineBlockAt(t.head).to, -1));
function pv(i, t, e) {
  let n = !1, s = ui(i.selection, (r) => {
    let o = Oe(i, r.head, -1) || Oe(i, r.head, 1) || r.head > 0 && Oe(i, r.head - 1, 1) || r.head < i.doc.length && Oe(i, r.head + 1, -1);
    if (!o || !o.end)
      return r;
    n = !0;
    let l = o.start.from == r.head ? o.end.to : o.end.from;
    return A.cursor(l);
  });
  return n ? (t(Le(i, s)), !0) : !1;
}
const gv = ({ state: i, dispatch: t }) => pv(i, t);
function he(i, t) {
  let e = ui(i.state.selection, (n) => {
    let s = t(n);
    return A.range(n.anchor, s.head, s.goalColumn, s.bidiLevel || void 0);
  });
  return e.eq(i.state.selection) ? !1 : (i.dispatch(Le(i.state, e)), !0);
}
function np(i, t) {
  return he(i, (e) => i.moveByChar(e, t));
}
const ip = (i) => np(i, !$t(i)), sp = (i) => np(i, $t(i));
function rp(i, t) {
  return he(i, (e) => i.moveByGroup(e, t));
}
const mv = (i) => rp(i, !$t(i)), yv = (i) => rp(i, $t(i)), bv = (i) => he(i, (t) => ao(i.state, t, !$t(i))), vv = (i) => he(i, (t) => ao(i.state, t, $t(i)));
function op(i, t) {
  return he(i, (e) => i.moveVertically(e, t));
}
const lp = (i) => op(i, !1), ap = (i) => op(i, !0);
function hp(i, t) {
  return he(i, (e) => i.moveVertically(e, t, tp(i).height));
}
const Hc = (i) => hp(i, !1), zc = (i) => hp(i, !0), xv = (i) => he(i, (t) => un(i, t, !0)), Sv = (i) => he(i, (t) => un(i, t, !1)), wv = (i) => he(i, (t) => un(i, t, !$t(i))), kv = (i) => he(i, (t) => un(i, t, $t(i))), Cv = (i) => he(i, (t) => A.cursor(i.lineBlockAt(t.head).from)), Av = (i) => he(i, (t) => A.cursor(i.lineBlockAt(t.head).to)), qc = ({ state: i, dispatch: t }) => (t(Le(i, { anchor: 0 })), !0), Qc = ({ state: i, dispatch: t }) => (t(Le(i, { anchor: i.doc.length })), !0), Kc = ({ state: i, dispatch: t }) => (t(Le(i, { anchor: i.selection.main.anchor, head: 0 })), !0), jc = ({ state: i, dispatch: t }) => (t(Le(i, { anchor: i.selection.main.anchor, head: i.doc.length })), !0), Ov = ({ state: i, dispatch: t }) => (t(i.update({ selection: { anchor: 0, head: i.doc.length }, userEvent: "select" })), !0), Mv = ({ state: i, dispatch: t }) => {
  let e = ho(i).map(({ from: n, to: s }) => A.range(n, Math.min(s + 1, i.doc.length)));
  return t(i.update({ selection: A.create(e), userEvent: "select" })), !0;
}, Tv = ({ state: i, dispatch: t }) => {
  let e = ui(i.selection, (n) => {
    let s = Tt(i), r = s.resolveStack(n.from, 1);
    if (n.empty) {
      let o = s.resolveStack(n.from, -1);
      o.node.from >= r.node.from && o.node.to <= r.node.to && (r = o);
    }
    for (let o = r; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < n.from && l.to >= n.to || l.to > n.to && l.from <= n.from) && o.next)
        return A.range(l.to, l.from);
    }
    return n;
  });
  return e.eq(i.selection) ? !1 : (t(Le(i, e)), !0);
}, $v = ({ state: i, dispatch: t }) => {
  let e = i.selection, n = null;
  return e.ranges.length > 1 ? n = A.create([e.main]) : e.main.empty || (n = A.create([A.cursor(e.main.head)])), n ? (t(Le(i, n)), !0) : !1;
};
function fs(i, t) {
  if (i.state.readOnly)
    return !1;
  let e = "delete.selection", { state: n } = i, s = n.changeByRange((r) => {
    let { from: o, to: l } = r;
    if (o == l) {
      let a = t(r);
      a < o ? (e = "delete.backward", a = zs(i, a, !1)) : a > o && (e = "delete.forward", a = zs(i, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = zs(i, o, !1), l = zs(i, l, !0);
    return o == l ? { range: r } : { changes: { from: o, to: l }, range: A.cursor(o, o < r.head ? -1 : 1) };
  });
  return s.changes.empty ? !1 : (i.dispatch(n.update(s, {
    scrollIntoView: !0,
    userEvent: e,
    effects: e == "delete.selection" ? P.announce.of(n.phrase("Selection deleted")) : void 0
  })), !0);
}
function zs(i, t, e) {
  if (i instanceof P)
    for (let n of i.state.facet(P.atomicRanges).map((s) => s(i)))
      n.between(t, t, (s, r) => {
        s < t && r > t && (t = e ? r : s);
      });
  return t;
}
const cp = (i, t, e) => fs(i, (n) => {
  let s = n.from, { state: r } = i, o = r.doc.lineAt(s), l, a;
  if (e && !t && s > o.from && s < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, s - o.from))) {
    if (l[l.length - 1] == "	")
      return s - 1;
    let h = fi(l, r.tabSize), c = h % Cr(r) || Cr(r);
    for (let f = 0; f < c && l[l.length - 1 - f] == " "; f++)
      s--;
    a = s;
  } else
    a = wt(o.text, s - o.from, t, t) + o.from, a == s && o.number != (t ? r.doc.lines : 1) ? a += t ? 1 : -1 : !t && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, s - o.from)) && (a = wt(o.text, a - o.from, !1, !1) + o.from);
  return a;
}), Yl = (i) => cp(i, !1, !0), fp = (i) => cp(i, !0, !1), up = (i, t) => fs(i, (e) => {
  let n = e.head, { state: s } = i, r = s.doc.lineAt(n), o = s.charCategorizer(n);
  for (let l = null; ; ) {
    if (n == (t ? r.to : r.from)) {
      n == e.head && r.number != (t ? s.doc.lines : 1) && (n += t ? 1 : -1);
      break;
    }
    let a = wt(r.text, n - r.from, t) + r.from, h = r.text.slice(Math.min(n, a) - r.from, Math.max(n, a) - r.from), c = o(h);
    if (l != null && c != l)
      break;
    (h != " " || n != e.head) && (l = c), n = a;
  }
  return n;
}), dp = (i) => up(i, !1), Pv = (i) => up(i, !0), Dv = (i) => fs(i, (t) => {
  let e = i.lineBlockAt(t.head).to;
  return t.head < e ? e : Math.min(i.state.doc.length, t.head + 1);
}), Rv = (i) => fs(i, (t) => {
  let e = i.moveToLineBoundary(t, !1).head;
  return t.head > e ? e : Math.max(0, t.head - 1);
}), Bv = (i) => fs(i, (t) => {
  let e = i.moveToLineBoundary(t, !0).head;
  return t.head < e ? e : Math.min(i.state.doc.length, t.head + 1);
}), Lv = ({ state: i, dispatch: t }) => {
  if (i.readOnly)
    return !1;
  let e = i.changeByRange((n) => ({
    changes: { from: n.from, to: n.to, insert: J.of(["", ""]) },
    range: A.cursor(n.from)
  }));
  return t(i.update(e, { scrollIntoView: !0, userEvent: "input" })), !0;
}, Ev = ({ state: i, dispatch: t }) => {
  if (i.readOnly)
    return !1;
  let e = i.changeByRange((n) => {
    if (!n.empty || n.from == 0 || n.from == i.doc.length)
      return { range: n };
    let s = n.from, r = i.doc.lineAt(s), o = s == r.from ? s - 1 : wt(r.text, s - r.from, !1) + r.from, l = s == r.to ? s + 1 : wt(r.text, s - r.from, !0) + r.from;
    return {
      changes: { from: o, to: l, insert: i.doc.slice(s, l).append(i.doc.slice(o, s)) },
      range: A.cursor(l)
    };
  });
  return e.changes.empty ? !1 : (t(i.update(e, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function ho(i) {
  let t = [], e = -1;
  for (let n of i.selection.ranges) {
    let s = i.doc.lineAt(n.from), r = i.doc.lineAt(n.to);
    if (!n.empty && n.to == r.from && (r = i.doc.lineAt(n.to - 1)), e >= s.number) {
      let o = t[t.length - 1];
      o.to = r.to, o.ranges.push(n);
    } else
      t.push({ from: s.from, to: r.to, ranges: [n] });
    e = r.number + 1;
  }
  return t;
}
function pp(i, t, e) {
  if (i.readOnly)
    return !1;
  let n = [], s = [];
  for (let r of ho(i)) {
    if (e ? r.to == i.doc.length : r.from == 0)
      continue;
    let o = i.doc.lineAt(e ? r.to + 1 : r.from - 1), l = o.length + 1;
    if (e) {
      n.push({ from: r.to, to: o.to }, { from: r.from, insert: o.text + i.lineBreak });
      for (let a of r.ranges)
        s.push(A.range(Math.min(i.doc.length, a.anchor + l), Math.min(i.doc.length, a.head + l)));
    } else {
      n.push({ from: o.from, to: r.from }, { from: r.to, insert: i.lineBreak + o.text });
      for (let a of r.ranges)
        s.push(A.range(a.anchor - l, a.head - l));
    }
  }
  return n.length ? (t(i.update({
    changes: n,
    scrollIntoView: !0,
    selection: A.create(s, i.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const Iv = ({ state: i, dispatch: t }) => pp(i, t, !1), _v = ({ state: i, dispatch: t }) => pp(i, t, !0);
function gp(i, t, e) {
  if (i.readOnly)
    return !1;
  let n = [];
  for (let s of ho(i))
    e ? n.push({ from: s.from, insert: i.doc.slice(s.from, s.to) + i.lineBreak }) : n.push({ from: s.to, insert: i.lineBreak + i.doc.slice(s.from, s.to) });
  return t(i.update({ changes: n, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const Nv = ({ state: i, dispatch: t }) => gp(i, t, !1), Fv = ({ state: i, dispatch: t }) => gp(i, t, !0), Vv = (i) => {
  if (i.state.readOnly)
    return !1;
  let { state: t } = i, e = t.changes(ho(t).map(({ from: s, to: r }) => (s > 0 ? s-- : r < t.doc.length && r++, { from: s, to: r }))), n = ui(t.selection, (s) => {
    let r;
    if (i.lineWrapping) {
      let o = i.lineBlockAt(s.head), l = i.coordsAtPos(s.head, s.assoc || 1);
      l && (r = o.bottom + i.documentTop - l.bottom + i.defaultLineHeight / 2);
    }
    return i.moveVertically(s, !0, r);
  }).map(e);
  return i.dispatch({ changes: e, selection: n, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function Wv(i, t) {
  if (/\(\)|\[\]|\{\}/.test(i.sliceDoc(t - 1, t + 1)))
    return { from: t, to: t };
  let e = Tt(i).resolveInner(t), n = e.childBefore(t), s = e.childAfter(t), r;
  return n && s && n.to <= t && s.from >= t && (r = n.type.prop(q.closedBy)) && r.indexOf(s.name) > -1 && i.doc.lineAt(n.to).from == i.doc.lineAt(s.from).from && !/\S/.test(i.sliceDoc(n.to, s.from)) ? { from: n.to, to: s.from } : null;
}
const Uc = /* @__PURE__ */ mp(!1), Hv = /* @__PURE__ */ mp(!0);
function mp(i) {
  return ({ state: t, dispatch: e }) => {
    if (t.readOnly)
      return !1;
    let n = t.changeByRange((s) => {
      let { from: r, to: o } = s, l = t.doc.lineAt(r), a = !i && r == o && Wv(t, r);
      i && (r = o = (o <= l.to ? l : t.doc.lineAt(o)).to);
      let h = new so(t, { simulateBreak: r, simulateDoubleBreak: !!a }), c = Ra(h, r);
      for (c == null && (c = fi(/^\s*/.exec(t.doc.lineAt(r).text)[0], t.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: r, to: o } = a : r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r)) && (r = l.from);
      let f = ["", Xi(t, c)];
      return a && f.push(Xi(t, h.lineIndent(l.from, -1))), {
        changes: { from: r, to: o, insert: J.of(f) },
        range: A.cursor(r + 1 + f[1].length)
      };
    });
    return e(t.update(n, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function Ia(i, t) {
  let e = -1;
  return i.changeByRange((n) => {
    let s = [];
    for (let o = n.from; o <= n.to; ) {
      let l = i.doc.lineAt(o);
      l.number > e && (n.empty || n.to > l.from) && (t(l, s, n), e = l.number), o = l.to + 1;
    }
    let r = i.changes(s);
    return {
      changes: s,
      range: A.range(r.mapPos(n.anchor, 1), r.mapPos(n.head, 1))
    };
  });
}
const zv = ({ state: i, dispatch: t }) => {
  if (i.readOnly)
    return !1;
  let e = /* @__PURE__ */ Object.create(null), n = new so(i, { overrideIndentation: (r) => {
    let o = e[r];
    return o ?? -1;
  } }), s = Ia(i, (r, o, l) => {
    let a = Ra(n, r.from);
    if (a == null)
      return;
    /\S/.test(r.text) || (a = 0);
    let h = /^\s*/.exec(r.text)[0], c = Xi(i, a);
    (h != c || l.from < r.from + h.length) && (e[r.from] = a, o.push({ from: r.from, to: r.from + h.length, insert: c }));
  });
  return s.changes.empty || t(i.update(s, { userEvent: "indent" })), !0;
}, yp = ({ state: i, dispatch: t }) => i.readOnly ? !1 : (t(i.update(Ia(i, (e, n) => {
  n.push({ from: e.from, insert: i.facet(io) });
}), { userEvent: "input.indent" })), !0), bp = ({ state: i, dispatch: t }) => i.readOnly ? !1 : (t(i.update(Ia(i, (e, n) => {
  let s = /^\s*/.exec(e.text)[0];
  if (!s)
    return;
  let r = fi(s, i.tabSize), o = 0, l = Xi(i, Math.max(0, r - Cr(i)));
  for (; o < s.length && o < l.length && s.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  n.push({ from: e.from + o, to: e.from + s.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), qv = (i) => (i.setTabFocusMode(), !0), Qv = [
  { key: "Ctrl-b", run: Ud, shift: ip, preventDefault: !0 },
  { key: "Ctrl-f", run: Jd, shift: sp },
  { key: "Ctrl-p", run: Yd, shift: lp },
  { key: "Ctrl-n", run: Zd, shift: ap },
  { key: "Ctrl-a", run: uv, shift: Cv },
  { key: "Ctrl-e", run: dv, shift: Av },
  { key: "Ctrl-d", run: fp },
  { key: "Ctrl-h", run: Yl },
  { key: "Ctrl-k", run: Dv },
  { key: "Ctrl-Alt-h", run: dp },
  { key: "Ctrl-o", run: Lv },
  { key: "Ctrl-t", run: Ev },
  { key: "Ctrl-v", run: Xl }
], Kv = /* @__PURE__ */ [
  { key: "ArrowLeft", run: Ud, shift: ip, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: iv, shift: mv, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: cv, shift: wv, preventDefault: !0 },
  { key: "ArrowRight", run: Jd, shift: sp, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: sv, shift: yv, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: fv, shift: kv, preventDefault: !0 },
  { key: "ArrowUp", run: Yd, shift: lp, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: qc, shift: Kc },
  { mac: "Ctrl-ArrowUp", run: Wc, shift: Hc },
  { key: "ArrowDown", run: Zd, shift: ap, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: Qc, shift: jc },
  { mac: "Ctrl-ArrowDown", run: Xl, shift: zc },
  { key: "PageUp", run: Wc, shift: Hc },
  { key: "PageDown", run: Xl, shift: zc },
  { key: "Home", run: hv, shift: Sv, preventDefault: !0 },
  { key: "Mod-Home", run: qc, shift: Kc },
  { key: "End", run: av, shift: xv, preventDefault: !0 },
  { key: "Mod-End", run: Qc, shift: jc },
  { key: "Enter", run: Uc, shift: Uc },
  { key: "Mod-a", run: Ov },
  { key: "Backspace", run: Yl, shift: Yl },
  { key: "Delete", run: fp },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: dp },
  { key: "Mod-Delete", mac: "Alt-Delete", run: Pv },
  { mac: "Mod-Backspace", run: Rv },
  { mac: "Mod-Delete", run: Bv }
].concat(/* @__PURE__ */ Qv.map((i) => ({ mac: i.key, run: i.run, shift: i.shift }))), jv = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: ov, shift: bv },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: lv, shift: vv },
  { key: "Alt-ArrowUp", run: Iv },
  { key: "Shift-Alt-ArrowUp", run: Nv },
  { key: "Alt-ArrowDown", run: _v },
  { key: "Shift-Alt-ArrowDown", run: Fv },
  { key: "Escape", run: $v },
  { key: "Mod-Enter", run: Hv },
  { key: "Alt-l", mac: "Ctrl-l", run: Mv },
  { key: "Mod-i", run: Tv, preventDefault: !0 },
  { key: "Mod-[", run: bp },
  { key: "Mod-]", run: yp },
  { key: "Mod-Alt-\\", run: zv },
  { key: "Shift-Mod-k", run: Vv },
  { key: "Shift-Mod-\\", run: gv },
  { key: "Mod-/", run: Nb },
  { key: "Alt-A", run: Vb },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: qv }
].concat(Kv), Uv = { key: "Tab", run: yp, shift: bp };
function tt() {
  var i = arguments[0];
  typeof i == "string" && (i = document.createElement(i));
  var t = 1, e = arguments[1];
  if (e && typeof e == "object" && e.nodeType == null && !Array.isArray(e)) {
    for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
      var s = e[n];
      typeof s == "string" ? i.setAttribute(n, s) : s != null && (i[n] = s);
    }
    t++;
  }
  for (; t < arguments.length; t++) vp(i, arguments[t]);
  return i;
}
function vp(i, t) {
  if (typeof t == "string")
    i.appendChild(document.createTextNode(t));
  else if (t != null) if (t.nodeType != null)
    i.appendChild(t);
  else if (Array.isArray(t))
    for (var e = 0; e < t.length; e++) vp(i, t[e]);
  else
    throw new RangeError("Unsupported child node: " + t);
}
const Jc = typeof String.prototype.normalize == "function" ? (i) => i.normalize("NFKD") : (i) => i;
class ri {
  /**
  Create a text cursor. The query is the search string, `from` to
  `to` provides the region to search.
  
  When `normalize` is given, it will be called, on both the query
  string and the content it is matched against, before comparing.
  You can, for example, create a case-insensitive search by
  passing `s => s.toLowerCase()`.
  
  Text is always normalized with
  [`.normalize("NFKD")`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
  (when supported).
  */
  constructor(t, e, n = 0, s = t.length, r, o) {
    this.test = o, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = t.iterRange(n, s), this.bufferStart = n, this.normalize = r ? (l) => r(Jc(l)) : Jc, this.query = this.normalize(e);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return Vt(this.buffer, this.bufferPos);
  }
  /**
  Look for the next match. Updates the iterator's
  [`value`](https://codemirror.net/6/docs/ref/#search.SearchCursor.value) and
  [`done`](https://codemirror.net/6/docs/ref/#search.SearchCursor.done) properties. Should be called
  at least once before using the cursor.
  */
  next() {
    for (; this.matches.length; )
      this.matches.pop();
    return this.nextOverlapping();
  }
  /**
  The `next` method will ignore matches that partially overlap a
  previous match. This method behaves like `next`, but includes
  such matches.
  */
  nextOverlapping() {
    for (; ; ) {
      let t = this.peek();
      if (t < 0)
        return this.done = !0, this;
      let e = ua(t), n = this.bufferStart + this.bufferPos;
      this.bufferPos += ke(t);
      let s = this.normalize(e);
      if (s.length)
        for (let r = 0, o = n; ; r++) {
          let l = s.charCodeAt(r), a = this.match(l, o, this.bufferPos + this.bufferStart);
          if (r == s.length - 1) {
            if (a)
              return this.value = a, this;
            break;
          }
          o == n && r < e.length && e.charCodeAt(r) == l && o++;
        }
    }
  }
  match(t, e, n) {
    let s = null;
    for (let r = 0; r < this.matches.length; r += 2) {
      let o = this.matches[r], l = !1;
      this.query.charCodeAt(o) == t && (o == this.query.length - 1 ? s = { from: this.matches[r + 1], to: n } : (this.matches[r]++, l = !0)), l || (this.matches.splice(r, 2), r -= 2);
    }
    return this.query.charCodeAt(0) == t && (this.query.length == 1 ? s = { from: e, to: n } : this.matches.push(1, e)), s && this.test && !this.test(s.from, s.to, this.buffer, this.bufferStart) && (s = null), s;
  }
}
typeof Symbol < "u" && (ri.prototype[Symbol.iterator] = function() {
  return this;
});
const xp = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") }, _a = "gm" + (/x/.unicode == null ? "" : "u");
class Sp {
  /**
  Create a cursor that will search the given range in the given
  document. `query` should be the raw pattern (as you'd pass it to
  `new RegExp`).
  */
  constructor(t, e, n, s = 0, r = t.length) {
    if (this.text = t, this.to = r, this.curLine = "", this.done = !1, this.value = xp, /\\[sWDnr]|\n|\r|\[\^/.test(e))
      return new wp(t, e, n, s, r);
    this.re = new RegExp(e, _a + (n != null && n.ignoreCase ? "i" : "")), this.test = n == null ? void 0 : n.test, this.iter = t.iter();
    let o = t.lineAt(s);
    this.curLineStart = o.from, this.matchPos = Tr(t, s), this.getLine(this.curLineStart);
  }
  getLine(t) {
    this.iter.next(t), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  /**
  Move to the next match, if there is one.
  */
  next() {
    for (let t = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = t;
      let e = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (e) {
        let n = this.curLineStart + e.index, s = n + e[0].length;
        if (this.matchPos = Tr(this.text, s + (n == s ? 1 : 0)), n == this.curLineStart + this.curLine.length && this.nextLine(), (n < s || n > this.value.to) && (!this.test || this.test(n, s, e)))
          return this.value = { from: n, to: s, match: e }, this;
        t = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), t = 0;
      else
        return this.done = !0, this;
    }
  }
}
const Zo = /* @__PURE__ */ new WeakMap();
class Jn {
  constructor(t, e) {
    this.from = t, this.text = e;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(t, e, n) {
    let s = Zo.get(t);
    if (!s || s.from >= n || s.to <= e) {
      let l = new Jn(e, t.sliceString(e, n));
      return Zo.set(t, l), l;
    }
    if (s.from == e && s.to == n)
      return s;
    let { text: r, from: o } = s;
    return o > e && (r = t.sliceString(e, o) + r, o = e), s.to < n && (r += t.sliceString(s.to, n)), Zo.set(t, new Jn(o, r)), new Jn(e, r.slice(e - o, n - o));
  }
}
class wp {
  constructor(t, e, n, s, r) {
    this.text = t, this.to = r, this.done = !1, this.value = xp, this.matchPos = Tr(t, s), this.re = new RegExp(e, _a + (n != null && n.ignoreCase ? "i" : "")), this.test = n == null ? void 0 : n.test, this.flat = Jn.get(t, s, this.chunkEnd(
      s + 5e3
      /* Chunk.Base */
    ));
  }
  chunkEnd(t) {
    return t >= this.to ? this.to : this.text.lineAt(t).to;
  }
  next() {
    for (; ; ) {
      let t = this.re.lastIndex = this.matchPos - this.flat.from, e = this.re.exec(this.flat.text);
      if (e && !e[0] && e.index == t && (this.re.lastIndex = t + 1, e = this.re.exec(this.flat.text)), e) {
        let n = this.flat.from + e.index, s = n + e[0].length;
        if ((this.flat.to >= this.to || e.index + e[0].length <= this.flat.text.length - 10) && (!this.test || this.test(n, s, e)))
          return this.value = { from: n, to: s, match: e }, this.matchPos = Tr(this.text, s + (n == s ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = Jn.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (Sp.prototype[Symbol.iterator] = wp.prototype[Symbol.iterator] = function() {
  return this;
});
function Jv(i) {
  try {
    return new RegExp(i, _a), !0;
  } catch {
    return !1;
  }
}
function Tr(i, t) {
  if (t >= i.length)
    return t;
  let e = i.lineAt(t), n;
  for (; t < e.to && (n = e.text.charCodeAt(t - e.from)) >= 56320 && n < 57344; )
    t++;
  return t;
}
function Zl(i) {
  let t = String(i.state.doc.lineAt(i.state.selection.main.head).number), e = tt("input", { class: "cm-textfield", name: "line", value: t }), n = tt("form", {
    class: "cm-gotoLine",
    onkeydown: (r) => {
      r.keyCode == 27 ? (r.preventDefault(), i.dispatch({ effects: Ei.of(!1) }), i.focus()) : r.keyCode == 13 && (r.preventDefault(), s());
    },
    onsubmit: (r) => {
      r.preventDefault(), s();
    }
  }, tt("label", i.state.phrase("Go to line"), ": ", e), " ", tt("button", { class: "cm-button", type: "submit" }, i.state.phrase("go")), tt("button", {
    name: "close",
    onclick: () => {
      i.dispatch({ effects: Ei.of(!1) }), i.focus();
    },
    "aria-label": i.state.phrase("close"),
    type: "button"
  }, ["×"]));
  function s() {
    let r = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);
    if (!r)
      return;
    let { state: o } = i, l = o.doc.lineAt(o.selection.main.head), [, a, h, c, f] = r, u = c ? +c.slice(1) : 0, d = h ? +h : l.number;
    if (h && f) {
      let g = d / 100;
      a && (g = g * (a == "-" ? -1 : 1) + l.number / o.doc.lines), d = Math.round(o.doc.lines * g);
    } else h && a && (d = d * (a == "-" ? -1 : 1) + l.number);
    let p = o.doc.line(Math.max(1, Math.min(o.doc.lines, d))), m = A.cursor(p.from + Math.max(0, Math.min(u, p.length)));
    i.dispatch({
      effects: [Ei.of(!1), P.scrollIntoView(m.from, { y: "center" })],
      selection: m
    }), i.focus();
  }
  return { dom: n };
}
const Ei = /* @__PURE__ */ H.define(), Gc = /* @__PURE__ */ kt.define({
  create() {
    return !0;
  },
  update(i, t) {
    for (let e of t.effects)
      e.is(Ei) && (i = e.value);
    return i;
  },
  provide: (i) => Ji.from(i, (t) => t ? Zl : null)
}), Gv = (i) => {
  let t = Ui(i, Zl);
  if (!t) {
    let e = [Ei.of(!0)];
    i.state.field(Gc, !1) == null && e.push(H.appendConfig.of([Gc, Xv])), i.dispatch({ effects: e }), t = Ui(i, Zl);
  }
  return t && t.dom.querySelector("input").select(), !0;
}, Xv = /* @__PURE__ */ P.baseTheme({
  ".cm-panel.cm-gotoLine": {
    padding: "2px 6px 4px",
    position: "relative",
    "& label": { fontSize: "80%" },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: "0"
    }
  }
}), Yv = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, Zv = /* @__PURE__ */ D.define({
  combine(i) {
    return Be(i, Yv, {
      highlightWordAroundCursor: (t, e) => t || e,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function tx(i) {
  return [rx, sx];
}
const ex = /* @__PURE__ */ V.mark({ class: "cm-selectionMatch" }), nx = /* @__PURE__ */ V.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Xc(i, t, e, n) {
  return (e == 0 || i(t.sliceDoc(e - 1, e)) != lt.Word) && (n == t.doc.length || i(t.sliceDoc(n, n + 1)) != lt.Word);
}
function ix(i, t, e, n) {
  return i(t.sliceDoc(e, e + 1)) == lt.Word && i(t.sliceDoc(n - 1, n)) == lt.Word;
}
const sx = /* @__PURE__ */ ft.fromClass(class {
  constructor(i) {
    this.decorations = this.getDeco(i);
  }
  update(i) {
    (i.selectionSet || i.docChanged || i.viewportChanged) && (this.decorations = this.getDeco(i.view));
  }
  getDeco(i) {
    let t = i.state.facet(Zv), { state: e } = i, n = e.selection;
    if (n.ranges.length > 1)
      return V.none;
    let s = n.main, r, o = null;
    if (s.empty) {
      if (!t.highlightWordAroundCursor)
        return V.none;
      let a = e.wordAt(s.head);
      if (!a)
        return V.none;
      o = e.charCategorizer(s.head), r = e.sliceDoc(a.from, a.to);
    } else {
      let a = s.to - s.from;
      if (a < t.minSelectionLength || a > 200)
        return V.none;
      if (t.wholeWords) {
        if (r = e.sliceDoc(s.from, s.to), o = e.charCategorizer(s.head), !(Xc(o, e, s.from, s.to) && ix(o, e, s.from, s.to)))
          return V.none;
      } else if (r = e.sliceDoc(s.from, s.to), !r)
        return V.none;
    }
    let l = [];
    for (let a of i.visibleRanges) {
      let h = new ri(e.doc, r, a.from, a.to);
      for (; !h.next().done; ) {
        let { from: c, to: f } = h.value;
        if ((!o || Xc(o, e, c, f)) && (s.empty && c <= s.from && f >= s.to ? l.push(nx.range(c, f)) : (c >= s.to || f <= s.from) && l.push(ex.range(c, f)), l.length > t.maxMatches))
          return V.none;
      }
    }
    return V.set(l);
  }
}, {
  decorations: (i) => i.decorations
}), rx = /* @__PURE__ */ P.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), ox = ({ state: i, dispatch: t }) => {
  let { selection: e } = i, n = A.create(e.ranges.map((s) => i.wordAt(s.head) || A.cursor(s.head)), e.mainIndex);
  return n.eq(e) ? !1 : (t(i.update({ selection: n })), !0);
};
function lx(i, t) {
  let { main: e, ranges: n } = i.selection, s = i.wordAt(e.head), r = s && s.from == e.from && s.to == e.to;
  for (let o = !1, l = new ri(i.doc, t, n[n.length - 1].to); ; )
    if (l.next(), l.done) {
      if (o)
        return null;
      l = new ri(i.doc, t, 0, Math.max(0, n[n.length - 1].from - 1)), o = !0;
    } else {
      if (o && n.some((a) => a.from == l.value.from))
        continue;
      if (r) {
        let a = i.wordAt(l.value.from);
        if (!a || a.from != l.value.from || a.to != l.value.to)
          continue;
      }
      return l.value;
    }
}
const ax = ({ state: i, dispatch: t }) => {
  let { ranges: e } = i.selection;
  if (e.some((r) => r.from === r.to))
    return ox({ state: i, dispatch: t });
  let n = i.sliceDoc(e[0].from, e[0].to);
  if (i.selection.ranges.some((r) => i.sliceDoc(r.from, r.to) != n))
    return !1;
  let s = lx(i, n);
  return s ? (t(i.update({
    selection: i.selection.addRange(A.range(s.from, s.to), !1),
    effects: P.scrollIntoView(s.to)
  })), !0) : !1;
}, di = /* @__PURE__ */ D.define({
  combine(i) {
    return Be(i, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (t) => new xx(t),
      scrollToMatch: (t) => P.scrollIntoView(t)
    });
  }
});
class kp {
  /**
  Create a query object.
  */
  constructor(t) {
    this.search = t.search, this.caseSensitive = !!t.caseSensitive, this.literal = !!t.literal, this.regexp = !!t.regexp, this.replace = t.replace || "", this.valid = !!this.search && (!this.regexp || Jv(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!t.wholeWord;
  }
  /**
  @internal
  */
  unquote(t) {
    return this.literal ? t : t.replace(/\\([nrt\\])/g, (e, n) => n == "n" ? `
` : n == "r" ? "\r" : n == "t" ? "	" : "\\");
  }
  /**
  Compare this query to another query.
  */
  eq(t) {
    return this.search == t.search && this.replace == t.replace && this.caseSensitive == t.caseSensitive && this.regexp == t.regexp && this.wholeWord == t.wholeWord;
  }
  /**
  @internal
  */
  create() {
    return this.regexp ? new ux(this) : new cx(this);
  }
  /**
  Get a search cursor for this query, searching through the given
  range in the given state.
  */
  getCursor(t, e = 0, n) {
    let s = t.doc ? t : X.create({ doc: t });
    return n == null && (n = s.doc.length), this.regexp ? Fn(this, s, e, n) : Nn(this, s, e, n);
  }
}
class Cp {
  constructor(t) {
    this.spec = t;
  }
}
function Nn(i, t, e, n) {
  return new ri(t.doc, i.unquoted, e, n, i.caseSensitive ? void 0 : (s) => s.toLowerCase(), i.wholeWord ? hx(t.doc, t.charCategorizer(t.selection.main.head)) : void 0);
}
function hx(i, t) {
  return (e, n, s, r) => ((r > e || r + s.length < n) && (r = Math.max(0, e - 2), s = i.sliceString(r, Math.min(i.length, n + 2))), (t($r(s, e - r)) != lt.Word || t(Pr(s, e - r)) != lt.Word) && (t(Pr(s, n - r)) != lt.Word || t($r(s, n - r)) != lt.Word));
}
class cx extends Cp {
  constructor(t) {
    super(t);
  }
  nextMatch(t, e, n) {
    let s = Nn(this.spec, t, n, t.doc.length).nextOverlapping();
    if (s.done) {
      let r = Math.min(t.doc.length, e + this.spec.unquoted.length);
      s = Nn(this.spec, t, 0, r).nextOverlapping();
    }
    return s.done || s.value.from == e && s.value.to == n ? null : s.value;
  }
  // Searching in reverse is, rather than implementing an inverted search
  // cursor, done by scanning chunk after chunk forward.
  prevMatchInRange(t, e, n) {
    for (let s = n; ; ) {
      let r = Math.max(e, s - 1e4 - this.spec.unquoted.length), o = Nn(this.spec, t, r, s), l = null;
      for (; !o.nextOverlapping().done; )
        l = o.value;
      if (l)
        return l;
      if (r == e)
        return null;
      s -= 1e4;
    }
  }
  prevMatch(t, e, n) {
    let s = this.prevMatchInRange(t, 0, e);
    return s || (s = this.prevMatchInRange(t, Math.max(0, n - this.spec.unquoted.length), t.doc.length)), s && (s.from != e || s.to != n) ? s : null;
  }
  getReplacement(t) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(t, e) {
    let n = Nn(this.spec, t, 0, t.doc.length), s = [];
    for (; !n.next().done; ) {
      if (s.length >= e)
        return null;
      s.push(n.value);
    }
    return s;
  }
  highlight(t, e, n, s) {
    let r = Nn(this.spec, t, Math.max(0, e - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, t.doc.length));
    for (; !r.next().done; )
      s(r.value.from, r.value.to);
  }
}
function Fn(i, t, e, n) {
  return new Sp(t.doc, i.search, {
    ignoreCase: !i.caseSensitive,
    test: i.wholeWord ? fx(t.charCategorizer(t.selection.main.head)) : void 0
  }, e, n);
}
function $r(i, t) {
  return i.slice(wt(i, t, !1), t);
}
function Pr(i, t) {
  return i.slice(t, wt(i, t));
}
function fx(i) {
  return (t, e, n) => !n[0].length || (i($r(n.input, n.index)) != lt.Word || i(Pr(n.input, n.index)) != lt.Word) && (i(Pr(n.input, n.index + n[0].length)) != lt.Word || i($r(n.input, n.index + n[0].length)) != lt.Word);
}
class ux extends Cp {
  nextMatch(t, e, n) {
    let s = Fn(this.spec, t, n, t.doc.length).next();
    return s.done && (s = Fn(this.spec, t, 0, e).next()), s.done ? null : s.value;
  }
  prevMatchInRange(t, e, n) {
    for (let s = 1; ; s++) {
      let r = Math.max(
        e,
        n - s * 1e4
        /* FindPrev.ChunkSize */
      ), o = Fn(this.spec, t, r, n), l = null;
      for (; !o.next().done; )
        l = o.value;
      if (l && (r == e || l.from > r + 10))
        return l;
      if (r == e)
        return null;
    }
  }
  prevMatch(t, e, n) {
    return this.prevMatchInRange(t, 0, e) || this.prevMatchInRange(t, n, t.doc.length);
  }
  getReplacement(t) {
    return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (e, n) => {
      if (n == "&")
        return t.match[0];
      if (n == "$")
        return "$";
      for (let s = n.length; s > 0; s--) {
        let r = +n.slice(0, s);
        if (r > 0 && r < t.match.length)
          return t.match[r] + n.slice(s);
      }
      return e;
    });
  }
  matchAll(t, e) {
    let n = Fn(this.spec, t, 0, t.doc.length), s = [];
    for (; !n.next().done; ) {
      if (s.length >= e)
        return null;
      s.push(n.value);
    }
    return s;
  }
  highlight(t, e, n, s) {
    let r = Fn(this.spec, t, Math.max(
      0,
      e - 250
      /* RegExp.HighlightMargin */
    ), Math.min(n + 250, t.doc.length));
    for (; !r.next().done; )
      s(r.value.from, r.value.to);
  }
}
const Yi = /* @__PURE__ */ H.define(), Na = /* @__PURE__ */ H.define(), sn = /* @__PURE__ */ kt.define({
  create(i) {
    return new tl(ta(i).create(), null);
  },
  update(i, t) {
    for (let e of t.effects)
      e.is(Yi) ? i = new tl(e.value.create(), i.panel) : e.is(Na) && (i = new tl(i.query, e.value ? Fa : null));
    return i;
  },
  provide: (i) => Ji.from(i, (t) => t.panel)
});
class tl {
  constructor(t, e) {
    this.query = t, this.panel = e;
  }
}
const dx = /* @__PURE__ */ V.mark({ class: "cm-searchMatch" }), px = /* @__PURE__ */ V.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), gx = /* @__PURE__ */ ft.fromClass(class {
  constructor(i) {
    this.view = i, this.decorations = this.highlight(i.state.field(sn));
  }
  update(i) {
    let t = i.state.field(sn);
    (t != i.startState.field(sn) || i.docChanged || i.selectionSet || i.viewportChanged) && (this.decorations = this.highlight(t));
  }
  highlight({ query: i, panel: t }) {
    if (!t || !i.spec.valid)
      return V.none;
    let { view: e } = this, n = new He();
    for (let s = 0, r = e.visibleRanges, o = r.length; s < o; s++) {
      let { from: l, to: a } = r[s];
      for (; s < o - 1 && a > r[s + 1].from - 2 * 250; )
        a = r[++s].to;
      i.highlight(e.state, l, a, (h, c) => {
        let f = e.state.selection.ranges.some((u) => u.from == h && u.to == c);
        n.add(h, c, f ? px : dx);
      });
    }
    return n.finish();
  }
}, {
  decorations: (i) => i.decorations
});
function us(i) {
  return (t) => {
    let e = t.state.field(sn, !1);
    return e && e.query.spec.valid ? i(t, e) : Mp(t);
  };
}
const Dr = /* @__PURE__ */ us((i, { query: t }) => {
  let { to: e } = i.state.selection.main, n = t.nextMatch(i.state, e, e);
  if (!n)
    return !1;
  let s = A.single(n.from, n.to), r = i.state.facet(di);
  return i.dispatch({
    selection: s,
    effects: [Va(i, n), r.scrollToMatch(s.main, i)],
    userEvent: "select.search"
  }), Op(i), !0;
}), Rr = /* @__PURE__ */ us((i, { query: t }) => {
  let { state: e } = i, { from: n } = e.selection.main, s = t.prevMatch(e, n, n);
  if (!s)
    return !1;
  let r = A.single(s.from, s.to), o = i.state.facet(di);
  return i.dispatch({
    selection: r,
    effects: [Va(i, s), o.scrollToMatch(r.main, i)],
    userEvent: "select.search"
  }), Op(i), !0;
}), mx = /* @__PURE__ */ us((i, { query: t }) => {
  let e = t.matchAll(i.state, 1e3);
  return !e || !e.length ? !1 : (i.dispatch({
    selection: A.create(e.map((n) => A.range(n.from, n.to))),
    userEvent: "select.search.matches"
  }), !0);
}), yx = ({ state: i, dispatch: t }) => {
  let e = i.selection;
  if (e.ranges.length > 1 || e.main.empty)
    return !1;
  let { from: n, to: s } = e.main, r = [], o = 0;
  for (let l = new ri(i.doc, i.sliceDoc(n, s)); !l.next().done; ) {
    if (r.length > 1e3)
      return !1;
    l.value.from == n && (o = r.length), r.push(A.range(l.value.from, l.value.to));
  }
  return t(i.update({
    selection: A.create(r, o),
    userEvent: "select.search.matches"
  })), !0;
}, Yc = /* @__PURE__ */ us((i, { query: t }) => {
  let { state: e } = i, { from: n, to: s } = e.selection.main;
  if (e.readOnly)
    return !1;
  let r = t.nextMatch(e, n, n);
  if (!r)
    return !1;
  let o = r, l = [], a, h, c = [];
  if (o.from == n && o.to == s && (h = e.toText(t.getReplacement(o)), l.push({ from: o.from, to: o.to, insert: h }), o = t.nextMatch(e, o.from, o.to), c.push(P.announce.of(e.phrase("replaced match on line $", e.doc.lineAt(n).number) + "."))), o) {
    let f = l.length == 0 || l[0].from >= r.to ? 0 : r.to - r.from - h.length;
    a = A.single(o.from - f, o.to - f), c.push(Va(i, o)), c.push(e.facet(di).scrollToMatch(a.main, i));
  }
  return i.dispatch({
    changes: l,
    selection: a,
    effects: c,
    userEvent: "input.replace"
  }), !0;
}), bx = /* @__PURE__ */ us((i, { query: t }) => {
  if (i.state.readOnly)
    return !1;
  let e = t.matchAll(i.state, 1e9).map((s) => {
    let { from: r, to: o } = s;
    return { from: r, to: o, insert: t.getReplacement(s) };
  });
  if (!e.length)
    return !1;
  let n = i.state.phrase("replaced $ matches", e.length) + ".";
  return i.dispatch({
    changes: e,
    effects: P.announce.of(n),
    userEvent: "input.replace.all"
  }), !0;
});
function Fa(i) {
  return i.state.facet(di).createPanel(i);
}
function ta(i, t) {
  var e, n, s, r, o;
  let l = i.selection.main, a = l.empty || l.to > l.from + 100 ? "" : i.sliceDoc(l.from, l.to);
  if (t && !a)
    return t;
  let h = i.facet(di);
  return new kp({
    search: ((e = t == null ? void 0 : t.literal) !== null && e !== void 0 ? e : h.literal) ? a : a.replace(/\n/g, "\\n"),
    caseSensitive: (n = t == null ? void 0 : t.caseSensitive) !== null && n !== void 0 ? n : h.caseSensitive,
    literal: (s = t == null ? void 0 : t.literal) !== null && s !== void 0 ? s : h.literal,
    regexp: (r = t == null ? void 0 : t.regexp) !== null && r !== void 0 ? r : h.regexp,
    wholeWord: (o = t == null ? void 0 : t.wholeWord) !== null && o !== void 0 ? o : h.wholeWord
  });
}
function Ap(i) {
  let t = Ui(i, Fa);
  return t && t.dom.querySelector("[main-field]");
}
function Op(i) {
  let t = Ap(i);
  t && t == i.root.activeElement && t.select();
}
const Mp = (i) => {
  let t = i.state.field(sn, !1);
  if (t && t.panel) {
    let e = Ap(i);
    if (e && e != i.root.activeElement) {
      let n = ta(i.state, t.query.spec);
      n.valid && i.dispatch({ effects: Yi.of(n) }), e.focus(), e.select();
    }
  } else
    i.dispatch({ effects: [
      Na.of(!0),
      t ? Yi.of(ta(i.state, t.query.spec)) : H.appendConfig.of(wx)
    ] });
  return !0;
}, Tp = (i) => {
  let t = i.state.field(sn, !1);
  if (!t || !t.panel)
    return !1;
  let e = Ui(i, Fa);
  return e && e.dom.contains(i.root.activeElement) && i.focus(), i.dispatch({ effects: Na.of(!1) }), !0;
}, vx = [
  { key: "Mod-f", run: Mp, scope: "editor search-panel" },
  { key: "F3", run: Dr, shift: Rr, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: Dr, shift: Rr, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: Tp, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: yx },
  { key: "Mod-Alt-g", run: Gv },
  { key: "Mod-d", run: ax, preventDefault: !0 }
];
class xx {
  constructor(t) {
    this.view = t;
    let e = this.query = t.state.field(sn).query.spec;
    this.commit = this.commit.bind(this), this.searchField = tt("input", {
      value: e.search,
      placeholder: Kt(t, "Find"),
      "aria-label": Kt(t, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = tt("input", {
      value: e.replace,
      placeholder: Kt(t, "Replace"),
      "aria-label": Kt(t, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = tt("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: e.caseSensitive,
      onchange: this.commit
    }), this.reField = tt("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: e.regexp,
      onchange: this.commit
    }), this.wordField = tt("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: e.wholeWord,
      onchange: this.commit
    });
    function n(s, r, o) {
      return tt("button", { class: "cm-button", name: s, onclick: r, type: "button" }, o);
    }
    this.dom = tt("div", { onkeydown: (s) => this.keydown(s), class: "cm-search" }, [
      this.searchField,
      n("next", () => Dr(t), [Kt(t, "next")]),
      n("prev", () => Rr(t), [Kt(t, "previous")]),
      n("select", () => mx(t), [Kt(t, "all")]),
      tt("label", null, [this.caseField, Kt(t, "match case")]),
      tt("label", null, [this.reField, Kt(t, "regexp")]),
      tt("label", null, [this.wordField, Kt(t, "by word")]),
      ...t.state.readOnly ? [] : [
        tt("br"),
        this.replaceField,
        n("replace", () => Yc(t), [Kt(t, "replace")]),
        n("replaceAll", () => bx(t), [Kt(t, "replace all")])
      ],
      tt("button", {
        name: "close",
        onclick: () => Tp(t),
        "aria-label": Kt(t, "close"),
        type: "button"
      }, ["×"])
    ]);
  }
  commit() {
    let t = new kp({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    t.eq(this.query) || (this.query = t, this.view.dispatch({ effects: Yi.of(t) }));
  }
  keydown(t) {
    D1(this.view, t, "search-panel") ? t.preventDefault() : t.keyCode == 13 && t.target == this.searchField ? (t.preventDefault(), (t.shiftKey ? Rr : Dr)(this.view)) : t.keyCode == 13 && t.target == this.replaceField && (t.preventDefault(), Yc(this.view));
  }
  update(t) {
    for (let e of t.transactions)
      for (let n of e.effects)
        n.is(Yi) && !n.value.eq(this.query) && this.setQuery(n.value);
  }
  setQuery(t) {
    this.query = t, this.searchField.value = t.search, this.replaceField.value = t.replace, this.caseField.checked = t.caseSensitive, this.reField.checked = t.regexp, this.wordField.checked = t.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(di).top;
  }
}
function Kt(i, t) {
  return i.state.phrase(t);
}
const qs = 30, Qs = /[\s\.,:;?!]/;
function Va(i, { from: t, to: e }) {
  let n = i.state.doc.lineAt(t), s = i.state.doc.lineAt(e).to, r = Math.max(n.from, t - qs), o = Math.min(s, e + qs), l = i.state.sliceDoc(r, o);
  if (r != n.from) {
    for (let a = 0; a < qs; a++)
      if (!Qs.test(l[a + 1]) && Qs.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (o != s) {
    for (let a = l.length - 1; a > l.length - qs; a--)
      if (!Qs.test(l[a - 1]) && Qs.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return P.announce.of(`${i.state.phrase("current match")}. ${l} ${i.state.phrase("on line")} ${n.number}.`);
}
const Sx = /* @__PURE__ */ P.baseTheme({
  ".cm-panel.cm-search": {
    padding: "2px 6px 4px",
    position: "relative",
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    },
    "& input, & button, & label": {
      margin: ".2em .6em .2em 0"
    },
    "& input[type=checkbox]": {
      marginRight: ".2em"
    },
    "& label": {
      fontSize: "80%",
      whiteSpace: "pre"
    }
  },
  "&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
  "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" },
  "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" },
  "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" }
}), wx = [
  sn,
  /* @__PURE__ */ En.low(gx),
  Sx
];
class $p {
  /**
  Create a new completion context. (Mostly useful for testing
  completion sources—in the editor, the extension will create
  these for you.)
  */
  constructor(t, e, n, s) {
    this.state = t, this.pos = e, this.explicit = n, this.view = s, this.abortListeners = [], this.abortOnDocChange = !1;
  }
  /**
  Get the extent, content, and (if there is a token) type of the
  token before `this.pos`.
  */
  tokenBefore(t) {
    let e = Tt(this.state).resolveInner(this.pos, -1);
    for (; e && t.indexOf(e.name) < 0; )
      e = e.parent;
    return e ? {
      from: e.from,
      to: this.pos,
      text: this.state.sliceDoc(e.from, this.pos),
      type: e.type
    } : null;
  }
  /**
  Get the match of the given expression directly before the
  cursor.
  */
  matchBefore(t) {
    let e = this.state.doc.lineAt(this.pos), n = Math.max(e.from, this.pos - 250), s = e.text.slice(n - e.from, this.pos - e.from), r = s.search(Pp(t, !1));
    return r < 0 ? null : { from: n + r, to: this.pos, text: s.slice(r) };
  }
  /**
  Yields true when the query has been aborted. Can be useful in
  asynchronous queries to avoid doing work that will be ignored.
  */
  get aborted() {
    return this.abortListeners == null;
  }
  /**
  Allows you to register abort handlers, which will be called when
  the query is
  [aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
  
  By default, running queries will not be aborted for regular
  typing or backspacing, on the assumption that they are likely to
  return a result with a
  [`validFor`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.validFor) field that
  allows the result to be used after all. Passing `onDocChange:
  true` will cause this query to be aborted for any document
  change.
  */
  addEventListener(t, e, n) {
    t == "abort" && this.abortListeners && (this.abortListeners.push(e), n && n.onDocChange && (this.abortOnDocChange = !0));
  }
}
function Zc(i) {
  let t = Object.keys(i).join(""), e = /\w/.test(t);
  return e && (t = t.replace(/\w/g, "")), `[${e ? "\\w" : ""}${t.replace(/[^\w\s]/g, "\\$&")}]`;
}
function kx(i) {
  let t = /* @__PURE__ */ Object.create(null), e = /* @__PURE__ */ Object.create(null);
  for (let { label: s } of i) {
    t[s[0]] = !0;
    for (let r = 1; r < s.length; r++)
      e[s[r]] = !0;
  }
  let n = Zc(t) + Zc(e) + "*$";
  return [new RegExp("^" + n), new RegExp(n)];
}
function Cx(i) {
  let t = i.map((s) => typeof s == "string" ? { label: s } : s), [e, n] = t.every((s) => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : kx(t);
  return (s) => {
    let r = s.matchBefore(n);
    return r || s.explicit ? { from: r ? r.from : s.pos, options: t, validFor: e } : null;
  };
}
class tf {
  constructor(t, e, n, s) {
    this.completion = t, this.source = e, this.match = n, this.score = s;
  }
}
function Tn(i) {
  return i.selection.main.from;
}
function Pp(i, t) {
  var e;
  let { source: n } = i, s = t && n[0] != "^", r = n[n.length - 1] != "$";
  return !s && !r ? i : new RegExp(`${s ? "^" : ""}(?:${n})${r ? "$" : ""}`, (e = i.flags) !== null && e !== void 0 ? e : i.ignoreCase ? "i" : "");
}
const Dp = /* @__PURE__ */ Qe.define();
function Ax(i, t, e, n) {
  let { main: s } = i.selection, r = e - s.from, o = n - s.from;
  return Object.assign(Object.assign({}, i.changeByRange((l) => {
    if (l != s && e != n && i.sliceDoc(l.from + r, l.from + o) != i.sliceDoc(e, n))
      return { range: l };
    let a = i.toText(t);
    return {
      changes: { from: l.from + r, to: n == s.from ? l.to : l.from + o, insert: a },
      range: A.cursor(l.from + r + a.length)
    };
  })), { scrollIntoView: !0, userEvent: "input.complete" });
}
const ef = /* @__PURE__ */ new WeakMap();
function Ox(i) {
  if (!Array.isArray(i))
    return i;
  let t = ef.get(i);
  return t || ef.set(i, t = Cx(i)), t;
}
const Br = /* @__PURE__ */ H.define(), Zi = /* @__PURE__ */ H.define();
class Mx {
  constructor(t) {
    this.pattern = t, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let e = 0; e < t.length; ) {
      let n = Vt(t, e), s = ke(n);
      this.chars.push(n);
      let r = t.slice(e, e + s), o = r.toUpperCase();
      this.folded.push(Vt(o == r ? r.toLowerCase() : o, 0)), e += s;
    }
    this.astral = t.length != this.chars.length;
  }
  ret(t, e) {
    return this.score = t, this.matched = e, this;
  }
  // Matches a given word (completion) against the pattern (input).
  // Will return a boolean indicating whether there was a match and,
  // on success, set `this.score` to the score, `this.matched` to an
  // array of `from, to` pairs indicating the matched parts of `word`.
  //
  // The score is a number that is more negative the worse the match
  // is. See `Penalty` above.
  match(t) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (t.length < this.pattern.length)
      return null;
    let { chars: e, folded: n, any: s, precise: r, byWord: o } = this;
    if (e.length == 1) {
      let b = Vt(t, 0), S = ke(b), w = S == t.length ? 0 : -100;
      if (b != e[0]) if (b == n[0])
        w += -200;
      else
        return null;
      return this.ret(w, [0, S]);
    }
    let l = t.indexOf(this.pattern);
    if (l == 0)
      return this.ret(t.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = e.length, h = 0;
    if (l < 0) {
      for (let b = 0, S = Math.min(t.length, 200); b < S && h < a; ) {
        let w = Vt(t, b);
        (w == e[h] || w == n[h]) && (s[h++] = b), b += ke(w);
      }
      if (h < a)
        return null;
    }
    let c = 0, f = 0, u = !1, d = 0, p = -1, m = -1, g = /[a-z]/.test(t), y = !0;
    for (let b = 0, S = Math.min(t.length, 200), w = 0; b < S && f < a; ) {
      let v = Vt(t, b);
      l < 0 && (c < a && v == e[c] && (r[c++] = b), d < a && (v == e[d] || v == n[d] ? (d == 0 && (p = b), m = b + 1, d++) : d = 0));
      let C, k = v < 255 ? v >= 48 && v <= 57 || v >= 97 && v <= 122 ? 2 : v >= 65 && v <= 90 ? 1 : 0 : (C = ua(v)) != C.toLowerCase() ? 1 : C != C.toUpperCase() ? 2 : 0;
      (!b || k == 1 && g || w == 0 && k != 0) && (e[f] == v || n[f] == v && (u = !0) ? o[f++] = b : o.length && (y = !1)), w = k, b += ke(v);
    }
    return f == a && o[0] == 0 && y ? this.result(-100 + (u ? -200 : 0), o, t) : d == a && p == 0 ? this.ret(-200 - t.length + (m == t.length ? 0 : -100), [0, m]) : l > -1 ? this.ret(-700 - t.length, [l, l + this.pattern.length]) : d == a ? this.ret(-900 - t.length, [p, m]) : f == a ? this.result(-100 + (u ? -200 : 0) + -700 + (y ? 0 : -1100), o, t) : e.length == 2 ? null : this.result((s[0] ? -700 : 0) + -200 + -1100, s, t);
  }
  result(t, e, n) {
    let s = [], r = 0;
    for (let o of e) {
      let l = o + (this.astral ? ke(Vt(n, o)) : 1);
      r && s[r - 1] == o ? s[r - 1] = l : (s[r++] = o, s[r++] = l);
    }
    return this.ret(t - n.length, s);
  }
}
class Tx {
  constructor(t) {
    this.pattern = t, this.matched = [], this.score = 0, this.folded = t.toLowerCase();
  }
  match(t) {
    if (t.length < this.pattern.length)
      return null;
    let e = t.slice(0, this.pattern.length), n = e == this.pattern ? 0 : e.toLowerCase() == this.folded ? -200 : null;
    return n == null ? null : (this.matched = [0, e.length], this.score = n + (t.length == this.pattern.length ? 0 : -100), this);
  }
}
const vt = /* @__PURE__ */ D.define({
  combine(i) {
    return Be(i, {
      activateOnTyping: !0,
      activateOnCompletion: () => !1,
      activateOnTypingDelay: 100,
      selectOnOpen: !0,
      override: null,
      closeOnBlur: !0,
      maxRenderedOptions: 100,
      defaultKeymap: !0,
      tooltipClass: () => "",
      optionClass: () => "",
      aboveCursor: !1,
      icons: !0,
      addToOptions: [],
      positionInfo: $x,
      filterStrict: !1,
      compareCompletions: (t, e) => t.label.localeCompare(e.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (t, e) => t && e,
      closeOnBlur: (t, e) => t && e,
      icons: (t, e) => t && e,
      tooltipClass: (t, e) => (n) => nf(t(n), e(n)),
      optionClass: (t, e) => (n) => nf(t(n), e(n)),
      addToOptions: (t, e) => t.concat(e),
      filterStrict: (t, e) => t || e
    });
  }
});
function nf(i, t) {
  return i ? t ? i + " " + t : i : t;
}
function $x(i, t, e, n, s, r) {
  let o = i.textDirection == rt.RTL, l = o, a = !1, h = "top", c, f, u = t.left - s.left, d = s.right - t.right, p = n.right - n.left, m = n.bottom - n.top;
  if (l && u < Math.min(p, d) ? l = !1 : !l && d < Math.min(p, u) && (l = !0), p <= (l ? u : d))
    c = Math.max(s.top, Math.min(e.top, s.bottom - m)) - t.top, f = Math.min(400, l ? u : d);
  else {
    a = !0, f = Math.min(
      400,
      (o ? t.right : s.right - t.left) - 30
      /* Info.Margin */
    );
    let b = s.bottom - t.bottom;
    b >= m || b > t.top ? c = e.bottom - t.top : (h = "bottom", c = t.bottom - e.top);
  }
  let g = (t.bottom - t.top) / r.offsetHeight, y = (t.right - t.left) / r.offsetWidth;
  return {
    style: `${h}: ${c / g}px; max-width: ${f / y}px`,
    class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right")
  };
}
function Px(i) {
  let t = i.addToOptions.slice();
  return i.icons && t.push({
    render(e) {
      let n = document.createElement("div");
      return n.classList.add("cm-completionIcon"), e.type && n.classList.add(...e.type.split(/\s+/g).map((s) => "cm-completionIcon-" + s)), n.setAttribute("aria-hidden", "true"), n;
    },
    position: 20
  }), t.push({
    render(e, n, s, r) {
      let o = document.createElement("span");
      o.className = "cm-completionLabel";
      let l = e.displayLabel || e.label, a = 0;
      for (let h = 0; h < r.length; ) {
        let c = r[h++], f = r[h++];
        c > a && o.appendChild(document.createTextNode(l.slice(a, c)));
        let u = o.appendChild(document.createElement("span"));
        u.appendChild(document.createTextNode(l.slice(c, f))), u.className = "cm-completionMatchedText", a = f;
      }
      return a < l.length && o.appendChild(document.createTextNode(l.slice(a))), o;
    },
    position: 50
  }, {
    render(e) {
      if (!e.detail)
        return null;
      let n = document.createElement("span");
      return n.className = "cm-completionDetail", n.textContent = e.detail, n;
    },
    position: 80
  }), t.sort((e, n) => e.position - n.position).map((e) => e.render);
}
function el(i, t, e) {
  if (i <= e)
    return { from: 0, to: i };
  if (t < 0 && (t = 0), t <= i >> 1) {
    let s = Math.floor(t / e);
    return { from: s * e, to: (s + 1) * e };
  }
  let n = Math.floor((i - t) / e);
  return { from: i - (n + 1) * e, to: i - n * e };
}
class Dx {
  constructor(t, e, n) {
    this.view = t, this.stateField = e, this.applyCompletion = n, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (a) => this.placeInfo(a),
      key: this
    }, this.space = null, this.currentClass = "";
    let s = t.state.field(e), { options: r, selected: o } = s.open, l = t.state.facet(vt);
    this.optionContent = Px(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = el(r.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(t.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: h } = t.state.field(e).open;
      for (let c = a.target, f; c && c != this.dom; c = c.parentNode)
        if (c.nodeName == "LI" && (f = /-(\d+)$/.exec(c.id)) && +f[1] < h.length) {
          this.applyCompletion(t, h[+f[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let h = t.state.field(this.stateField, !1);
      h && h.tooltip && t.state.facet(vt).closeOnBlur && a.relatedTarget != t.contentDOM && t.dispatch({ effects: Zi.of(null) });
    }), this.showOptions(r, s.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(t, e) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(t, e, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(t) {
    var e;
    let n = t.state.field(this.stateField), s = t.startState.field(this.stateField);
    if (this.updateTooltipClass(t.state), n != s) {
      let { options: r, selected: o, disabled: l } = n.open;
      (!s.open || s.open.options != r) && (this.range = el(r.length, o, t.state.facet(vt).maxRenderedOptions), this.showOptions(r, n.id)), this.updateSel(), l != ((e = s.open) === null || e === void 0 ? void 0 : e.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
    }
  }
  updateTooltipClass(t) {
    let e = this.tooltipClass(t);
    if (e != this.currentClass) {
      for (let n of this.currentClass.split(" "))
        n && this.dom.classList.remove(n);
      for (let n of e.split(" "))
        n && this.dom.classList.add(n);
      this.currentClass = e;
    }
  }
  positioned(t) {
    this.space = t, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let t = this.view.state.field(this.stateField), e = t.open;
    if ((e.selected > -1 && e.selected < this.range.from || e.selected >= this.range.to) && (this.range = el(e.options.length, e.selected, this.view.state.facet(vt).maxRenderedOptions), this.showOptions(e.options, t.id)), this.updateSelectedOption(e.selected)) {
      this.destroyInfo();
      let { completion: n } = e.options[e.selected], { info: s } = n;
      if (!s)
        return;
      let r = typeof s == "string" ? document.createTextNode(s) : s(n);
      if (!r)
        return;
      "then" in r ? r.then((o) => {
        o && this.view.state.field(this.stateField, !1) == t && this.addInfoPane(o, n);
      }).catch((o) => Bt(this.view.state, o, "completion info")) : this.addInfoPane(r, n);
    }
  }
  addInfoPane(t, e) {
    this.destroyInfo();
    let n = this.info = document.createElement("div");
    if (n.className = "cm-tooltip cm-completionInfo", t.nodeType != null)
      n.appendChild(t), this.infoDestroy = null;
    else {
      let { dom: s, destroy: r } = t;
      n.appendChild(s), this.infoDestroy = r || null;
    }
    this.dom.appendChild(n), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(t) {
    let e = null;
    for (let n = this.list.firstChild, s = this.range.from; n; n = n.nextSibling, s++)
      n.nodeName != "LI" || !n.id ? s-- : s == t ? n.hasAttribute("aria-selected") || (n.setAttribute("aria-selected", "true"), e = n) : n.hasAttribute("aria-selected") && n.removeAttribute("aria-selected");
    return e && Bx(this.list, e), e;
  }
  measureInfo() {
    let t = this.dom.querySelector("[aria-selected]");
    if (!t || !this.info)
      return null;
    let e = this.dom.getBoundingClientRect(), n = this.info.getBoundingClientRect(), s = t.getBoundingClientRect(), r = this.space;
    if (!r) {
      let o = this.dom.ownerDocument.documentElement;
      r = { left: 0, top: 0, right: o.clientWidth, bottom: o.clientHeight };
    }
    return s.top > Math.min(r.bottom, e.bottom) - 10 || s.bottom < Math.max(r.top, e.top) + 10 ? null : this.view.state.facet(vt).positionInfo(this.view, e, s, n, r, this.dom);
  }
  placeInfo(t) {
    this.info && (t ? (t.style && (this.info.style.cssText = t.style), this.info.className = "cm-tooltip cm-completionInfo " + (t.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(t, e, n) {
    const s = document.createElement("ul");
    s.id = e, s.setAttribute("role", "listbox"), s.setAttribute("aria-expanded", "true"), s.setAttribute("aria-label", this.view.state.phrase("Completions")), s.addEventListener("mousedown", (o) => {
      o.target == s && o.preventDefault();
    });
    let r = null;
    for (let o = n.from; o < n.to; o++) {
      let { completion: l, match: a } = t[o], { section: h } = l;
      if (h) {
        let u = typeof h == "string" ? h : h.name;
        if (u != r && (o > n.from || n.from == 0))
          if (r = u, typeof h != "string" && h.header)
            s.appendChild(h.header(h));
          else {
            let d = s.appendChild(document.createElement("completion-section"));
            d.textContent = u;
          }
      }
      const c = s.appendChild(document.createElement("li"));
      c.id = e + "-" + o, c.setAttribute("role", "option");
      let f = this.optionClass(l);
      f && (c.className = f);
      for (let u of this.optionContent) {
        let d = u(l, this.view.state, this.view, a);
        d && c.appendChild(d);
      }
    }
    return n.from && s.classList.add("cm-completionListIncompleteTop"), n.to < t.length && s.classList.add("cm-completionListIncompleteBottom"), s;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function Rx(i, t) {
  return (e) => new Dx(e, i, t);
}
function Bx(i, t) {
  let e = i.getBoundingClientRect(), n = t.getBoundingClientRect(), s = e.height / i.offsetHeight;
  n.top < e.top ? i.scrollTop -= (e.top - n.top) / s : n.bottom > e.bottom && (i.scrollTop += (n.bottom - e.bottom) / s);
}
function sf(i) {
  return (i.boost || 0) * 100 + (i.apply ? 10 : 0) + (i.info ? 5 : 0) + (i.type ? 1 : 0);
}
function Lx(i, t) {
  let e = [], n = null, s = (h) => {
    e.push(h);
    let { section: c } = h.completion;
    if (c) {
      n || (n = []);
      let f = typeof c == "string" ? c : c.name;
      n.some((u) => u.name == f) || n.push(typeof c == "string" ? { name: f } : c);
    }
  }, r = t.facet(vt);
  for (let h of i)
    if (h.hasResult()) {
      let c = h.result.getMatch;
      if (h.result.filter === !1)
        for (let f of h.result.options)
          s(new tf(f, h.source, c ? c(f) : [], 1e9 - e.length));
      else {
        let f = t.sliceDoc(h.from, h.to), u, d = r.filterStrict ? new Tx(f) : new Mx(f);
        for (let p of h.result.options)
          if (u = d.match(p.label)) {
            let m = p.displayLabel ? c ? c(p, u.matched) : [] : u.matched;
            s(new tf(p, h.source, m, u.score + (p.boost || 0)));
          }
      }
    }
  if (n) {
    let h = /* @__PURE__ */ Object.create(null), c = 0, f = (u, d) => {
      var p, m;
      return ((p = u.rank) !== null && p !== void 0 ? p : 1e9) - ((m = d.rank) !== null && m !== void 0 ? m : 1e9) || (u.name < d.name ? -1 : 1);
    };
    for (let u of n.sort(f))
      c -= 1e5, h[u.name] = c;
    for (let u of e) {
      let { section: d } = u.completion;
      d && (u.score += h[typeof d == "string" ? d : d.name]);
    }
  }
  let o = [], l = null, a = r.compareCompletions;
  for (let h of e.sort((c, f) => f.score - c.score || a(c.completion, f.completion))) {
    let c = h.completion;
    !l || l.label != c.label || l.detail != c.detail || l.type != null && c.type != null && l.type != c.type || l.apply != c.apply || l.boost != c.boost ? o.push(h) : sf(h.completion) > sf(l) && (o[o.length - 1] = h), l = h.completion;
  }
  return o;
}
class Qn {
  constructor(t, e, n, s, r, o) {
    this.options = t, this.attrs = e, this.tooltip = n, this.timestamp = s, this.selected = r, this.disabled = o;
  }
  setSelected(t, e) {
    return t == this.selected || t >= this.options.length ? this : new Qn(this.options, rf(e, t), this.tooltip, this.timestamp, t, this.disabled);
  }
  static build(t, e, n, s, r, o) {
    if (s && !o && t.some((h) => h.isPending))
      return s.setDisabled();
    let l = Lx(t, e);
    if (!l.length)
      return s && t.some((h) => h.isPending) ? s.setDisabled() : null;
    let a = e.facet(vt).selectOnOpen ? 0 : -1;
    if (s && s.selected != a && s.selected != -1) {
      let h = s.options[s.selected].completion;
      for (let c = 0; c < l.length; c++)
        if (l[c].completion == h) {
          a = c;
          break;
        }
    }
    return new Qn(l, rf(n, a), {
      pos: t.reduce((h, c) => c.hasResult() ? Math.min(h, c.from) : h, 1e8),
      create: Vx,
      above: r.aboveCursor
    }, s ? s.timestamp : Date.now(), a, !1);
  }
  map(t) {
    return new Qn(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: t.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new Qn(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
}
class Lr {
  constructor(t, e, n) {
    this.active = t, this.id = e, this.open = n;
  }
  static start() {
    return new Lr(Nx, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(t) {
    let { state: e } = t, n = e.facet(vt), r = (n.override || e.languageDataAt("autocomplete", Tn(e)).map(Ox)).map((a) => (this.active.find((c) => c.source == a) || new ne(
      a,
      this.active.some(
        (c) => c.state != 0
        /* State.Inactive */
      ) ? 1 : 0
      /* State.Inactive */
    )).update(t, n));
    r.length == this.active.length && r.every((a, h) => a == this.active[h]) && (r = this.active);
    let o = this.open, l = t.effects.some((a) => a.is(Wa));
    o && t.docChanged && (o = o.map(t.changes)), t.selection || r.some((a) => a.hasResult() && t.changes.touchesRange(a.from, a.to)) || !Ex(r, this.active) || l ? o = Qn.build(r, e, this.id, o, n, l) : o && o.disabled && !r.some((a) => a.isPending) && (o = null), !o && r.every((a) => !a.isPending) && r.some((a) => a.hasResult()) && (r = r.map((a) => a.hasResult() ? new ne(
      a.source,
      0
      /* State.Inactive */
    ) : a));
    for (let a of t.effects)
      a.is(Bp) && (o = o && o.setSelected(a.value, this.id));
    return r == this.active && o == this.open ? this : new Lr(r, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? Ix : _x;
  }
}
function Ex(i, t) {
  if (i == t)
    return !0;
  for (let e = 0, n = 0; ; ) {
    for (; e < i.length && !i[e].hasResult(); )
      e++;
    for (; n < t.length && !t[n].hasResult(); )
      n++;
    let s = e == i.length, r = n == t.length;
    if (s || r)
      return s == r;
    if (i[e++].result != t[n++].result)
      return !1;
  }
}
const Ix = {
  "aria-autocomplete": "list"
}, _x = {};
function rf(i, t) {
  let e = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": i
  };
  return t > -1 && (e["aria-activedescendant"] = i + "-" + t), e;
}
const Nx = [];
function Rp(i, t) {
  if (i.isUserEvent("input.complete")) {
    let n = i.annotation(Dp);
    if (n && t.activateOnCompletion(n))
      return 12;
  }
  let e = i.isUserEvent("input.type");
  return e && t.activateOnTyping ? 5 : e ? 1 : i.isUserEvent("delete.backward") ? 2 : i.selection ? 8 : i.docChanged ? 16 : 0;
}
class ne {
  constructor(t, e, n = !1) {
    this.source = t, this.state = e, this.explicit = n;
  }
  hasResult() {
    return !1;
  }
  get isPending() {
    return this.state == 1;
  }
  update(t, e) {
    let n = Rp(t, e), s = this;
    (n & 8 || n & 16 && this.touches(t)) && (s = new ne(
      s.source,
      0
      /* State.Inactive */
    )), n & 4 && s.state == 0 && (s = new ne(
      this.source,
      1
      /* State.Pending */
    )), s = s.updateFor(t, n);
    for (let r of t.effects)
      if (r.is(Br))
        s = new ne(s.source, 1, r.value);
      else if (r.is(Zi))
        s = new ne(
          s.source,
          0
          /* State.Inactive */
        );
      else if (r.is(Wa))
        for (let o of r.value)
          o.source == s.source && (s = o);
    return s;
  }
  updateFor(t, e) {
    return this.map(t.changes);
  }
  map(t) {
    return this;
  }
  touches(t) {
    return t.changes.touchesRange(Tn(t.state));
  }
}
class Gn extends ne {
  constructor(t, e, n, s, r, o) {
    super(t, 3, e), this.limit = n, this.result = s, this.from = r, this.to = o;
  }
  hasResult() {
    return !0;
  }
  updateFor(t, e) {
    var n;
    if (!(e & 3))
      return this.map(t.changes);
    let s = this.result;
    s.map && !t.changes.empty && (s = s.map(s, t.changes));
    let r = t.changes.mapPos(this.from), o = t.changes.mapPos(this.to, 1), l = Tn(t.state);
    if (l > o || !s || e & 2 && (Tn(t.startState) == this.from || l < this.limit))
      return new ne(
        this.source,
        e & 4 ? 1 : 0
        /* State.Inactive */
      );
    let a = t.changes.mapPos(this.limit);
    return Fx(s.validFor, t.state, r, o) ? new Gn(this.source, this.explicit, a, s, r, o) : s.update && (s = s.update(s, r, o, new $p(t.state, l, !1))) ? new Gn(this.source, this.explicit, a, s, s.from, (n = s.to) !== null && n !== void 0 ? n : Tn(t.state)) : new ne(this.source, 1, this.explicit);
  }
  map(t) {
    return t.empty ? this : (this.result.map ? this.result.map(this.result, t) : this.result) ? new Gn(this.source, this.explicit, t.mapPos(this.limit), this.result, t.mapPos(this.from), t.mapPos(this.to, 1)) : new ne(
      this.source,
      0
      /* State.Inactive */
    );
  }
  touches(t) {
    return t.changes.touchesRange(this.from, this.to);
  }
}
function Fx(i, t, e, n) {
  if (!i)
    return !1;
  let s = t.sliceDoc(e, n);
  return typeof i == "function" ? i(s, e, n, t) : Pp(i, !0).test(s);
}
const Wa = /* @__PURE__ */ H.define({
  map(i, t) {
    return i.map((e) => e.map(t));
  }
}), Bp = /* @__PURE__ */ H.define(), Ht = /* @__PURE__ */ kt.define({
  create() {
    return Lr.start();
  },
  update(i, t) {
    return i.update(t);
  },
  provide: (i) => [
    Ma.from(i, (t) => t.tooltip),
    P.contentAttributes.from(i, (t) => t.attrs)
  ]
});
function Ha(i, t) {
  const e = t.completion.apply || t.completion.label;
  let n = i.state.field(Ht).active.find((s) => s.source == t.source);
  return n instanceof Gn ? (typeof e == "string" ? i.dispatch(Object.assign(Object.assign({}, Ax(i.state, e, n.from, n.to)), { annotations: Dp.of(t.completion) })) : e(i, t.completion, n.from, n.to), !0) : !1;
}
const Vx = /* @__PURE__ */ Rx(Ht, Ha);
function Ks(i, t = "option") {
  return (e) => {
    let n = e.state.field(Ht, !1);
    if (!n || !n.open || n.open.disabled || Date.now() - n.open.timestamp < e.state.facet(vt).interactionDelay)
      return !1;
    let s = 1, r;
    t == "page" && (r = dd(e, n.open.tooltip)) && (s = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = n.open.options, l = n.open.selected > -1 ? n.open.selected + s * (i ? 1 : -1) : i ? 0 : o - 1;
    return l < 0 ? l = t == "page" ? 0 : o - 1 : l >= o && (l = t == "page" ? o - 1 : 0), e.dispatch({ effects: Bp.of(l) }), !0;
  };
}
const Wx = (i) => {
  let t = i.state.field(Ht, !1);
  return i.state.readOnly || !t || !t.open || t.open.selected < 0 || t.open.disabled || Date.now() - t.open.timestamp < i.state.facet(vt).interactionDelay ? !1 : Ha(i, t.open.options[t.open.selected]);
}, of = (i) => i.state.field(Ht, !1) ? (i.dispatch({ effects: Br.of(!0) }), !0) : !1, Hx = (i) => {
  let t = i.state.field(Ht, !1);
  return !t || !t.active.some(
    (e) => e.state != 0
    /* State.Inactive */
  ) ? !1 : (i.dispatch({ effects: Zi.of(null) }), !0);
};
class zx {
  constructor(t, e) {
    this.active = t, this.context = e, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const qx = 50, Qx = 1e3, Kx = /* @__PURE__ */ ft.fromClass(class {
  constructor(i) {
    this.view = i, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
    for (let t of i.state.field(Ht).active)
      t.isPending && this.startQuery(t);
  }
  update(i) {
    let t = i.state.field(Ht), e = i.state.facet(vt);
    if (!i.selectionSet && !i.docChanged && i.startState.field(Ht) == t)
      return;
    let n = i.transactions.some((r) => {
      let o = Rp(r, e);
      return o & 8 || (r.selection || r.docChanged) && !(o & 3);
    });
    for (let r = 0; r < this.running.length; r++) {
      let o = this.running[r];
      if (n || o.context.abortOnDocChange && i.docChanged || o.updates.length + i.transactions.length > qx && Date.now() - o.time > Qx) {
        for (let l of o.context.abortListeners)
          try {
            l();
          } catch (a) {
            Bt(this.view.state, a);
          }
        o.context.abortListeners = null, this.running.splice(r--, 1);
      } else
        o.updates.push(...i.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), i.transactions.some((r) => r.effects.some((o) => o.is(Br))) && (this.pendingStart = !0);
    let s = this.pendingStart ? 50 : e.activateOnTypingDelay;
    if (this.debounceUpdate = t.active.some((r) => r.isPending && !this.running.some((o) => o.active.source == r.source)) ? setTimeout(() => this.startUpdate(), s) : -1, this.composing != 0)
      for (let r of i.transactions)
        r.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && r.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = !1;
    let { state: i } = this.view, t = i.field(Ht);
    for (let e of t.active)
      e.isPending && !this.running.some((n) => n.active.source == e.source) && this.startQuery(e);
    this.running.length && t.open && t.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(vt).updateSyncTime));
  }
  startQuery(i) {
    let { state: t } = this.view, e = Tn(t), n = new $p(t, e, i.explicit, this.view), s = new zx(i, n);
    this.running.push(s), Promise.resolve(i.source(n)).then((r) => {
      s.context.aborted || (s.done = r || null, this.scheduleAccept());
    }, (r) => {
      this.view.dispatch({ effects: Zi.of(null) }), Bt(this.view.state, r);
    });
  }
  scheduleAccept() {
    this.running.every((i) => i.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(vt).updateSyncTime));
  }
  // For each finished query in this.running, try to create a result
  // or, if appropriate, restart the query.
  accept() {
    var i;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let t = [], e = this.view.state.facet(vt), n = this.view.state.field(Ht);
    for (let s = 0; s < this.running.length; s++) {
      let r = this.running[s];
      if (r.done === void 0)
        continue;
      if (this.running.splice(s--, 1), r.done) {
        let l = Tn(r.updates.length ? r.updates[0].startState : this.view.state), a = Math.min(l, r.done.from + (r.active.explicit ? 0 : 1)), h = new Gn(r.active.source, r.active.explicit, a, r.done, r.done.from, (i = r.done.to) !== null && i !== void 0 ? i : l);
        for (let c of r.updates)
          h = h.update(c, e);
        if (h.hasResult()) {
          t.push(h);
          continue;
        }
      }
      let o = n.active.find((l) => l.source == r.active.source);
      if (o && o.isPending)
        if (r.done == null) {
          let l = new ne(
            r.active.source,
            0
            /* State.Inactive */
          );
          for (let a of r.updates)
            l = l.update(a, e);
          l.isPending || t.push(l);
        } else
          this.startQuery(o);
    }
    (t.length || n.open && n.open.disabled) && this.view.dispatch({ effects: Wa.of(t) });
  }
}, {
  eventHandlers: {
    blur(i) {
      let t = this.view.state.field(Ht, !1);
      if (t && t.tooltip && this.view.state.facet(vt).closeOnBlur) {
        let e = t.open && dd(this.view, t.open.tooltip);
        (!e || !e.dom.contains(i.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: Zi.of(null) }), 10);
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Br.of(!1) }), 20), this.composing = 0;
    }
  }
}), jx = typeof navigator == "object" && /* @__PURE__ */ /Win/.test(navigator.platform), Ux = /* @__PURE__ */ En.highest(/* @__PURE__ */ P.domEventHandlers({
  keydown(i, t) {
    let e = t.state.field(Ht, !1);
    if (!e || !e.open || e.open.disabled || e.open.selected < 0 || i.key.length > 1 || i.ctrlKey && !(jx && i.altKey) || i.metaKey)
      return !1;
    let n = e.open.options[e.open.selected], s = e.active.find((o) => o.source == n.source), r = n.completion.commitCharacters || s.result.commitCharacters;
    return r && r.indexOf(i.key) > -1 && Ha(t, n), !1;
  }
})), Jx = /* @__PURE__ */ P.baseTheme({
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul": {
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "hidden auto",
      maxWidth_fallback: "700px",
      maxWidth: "min(700px, 95vw)",
      minWidth: "250px",
      maxHeight: "10em",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li, & > completion-section": {
        padding: "1px 3px",
        lineHeight: 1.2
      },
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer"
      },
      "& > completion-section": {
        display: "list-item",
        borderBottom: "1px solid silver",
        paddingLeft: "0.5em",
        opacity: 0.7
      }
    }
  },
  "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#17c",
    color: "white"
  },
  "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#777"
  },
  "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#347",
    color: "white"
  },
  "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#444"
  },
  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: '"···"',
    opacity: 0.5,
    display: "block",
    textAlign: "center"
  },
  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: "400px",
    boxSizing: "border-box",
    whiteSpace: "pre-line"
  },
  ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
  ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
  ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
  ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
  "&light .cm-snippetField": { backgroundColor: "#00000022" },
  "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },
  ".cm-completionMatchedText": {
    textDecoration: "underline"
  },
  ".cm-completionDetail": {
    marginLeft: "0.5em",
    fontStyle: "italic"
  },
  ".cm-completionIcon": {
    fontSize: "90%",
    width: ".8em",
    display: "inline-block",
    textAlign: "center",
    paddingRight: ".6em",
    opacity: "0.6",
    boxSizing: "content-box"
  },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": { content: "'ƒ'" }
  },
  ".cm-completionIcon-class": {
    "&:after": { content: "'○'" }
  },
  ".cm-completionIcon-interface": {
    "&:after": { content: "'◌'" }
  },
  ".cm-completionIcon-variable": {
    "&:after": { content: "'𝑥'" }
  },
  ".cm-completionIcon-constant": {
    "&:after": { content: "'𝐶'" }
  },
  ".cm-completionIcon-type": {
    "&:after": { content: "'𝑡'" }
  },
  ".cm-completionIcon-enum": {
    "&:after": { content: "'∪'" }
  },
  ".cm-completionIcon-property": {
    "&:after": { content: "'□'" }
  },
  ".cm-completionIcon-keyword": {
    "&:after": { content: "'🔑︎'" }
    // Disable emoji rendering
  },
  ".cm-completionIcon-namespace": {
    "&:after": { content: "'▢'" }
  },
  ".cm-completionIcon-text": {
    "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
  }
}), ts = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, An = /* @__PURE__ */ H.define({
  map(i, t) {
    let e = t.mapPos(i, -1, Rt.TrackAfter);
    return e ?? void 0;
  }
}), za = /* @__PURE__ */ new class extends $n {
}();
za.startSide = 1;
za.endSide = -1;
const Lp = /* @__PURE__ */ kt.define({
  create() {
    return U.empty;
  },
  update(i, t) {
    if (i = i.map(t.changes), t.selection) {
      let e = t.state.doc.lineAt(t.selection.main.head);
      i = i.update({ filter: (n) => n >= e.from && n <= e.to });
    }
    for (let e of t.effects)
      e.is(An) && (i = i.update({ add: [za.range(e.value, e.value + 1)] }));
    return i;
  }
});
function Gx() {
  return [Yx, Lp];
}
const nl = "()[]{}<>«»»«［］｛｝";
function Ep(i) {
  for (let t = 0; t < nl.length; t += 2)
    if (nl.charCodeAt(t) == i)
      return nl.charAt(t + 1);
  return ua(i < 128 ? i : i + 1);
}
function Ip(i, t) {
  return i.languageDataAt("closeBrackets", t)[0] || ts;
}
const Xx = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), Yx = /* @__PURE__ */ P.inputHandler.of((i, t, e, n) => {
  if ((Xx ? i.composing : i.compositionStarted) || i.state.readOnly)
    return !1;
  let s = i.state.selection.main;
  if (n.length > 2 || n.length == 2 && ke(Vt(n, 0)) == 1 || t != s.from || e != s.to)
    return !1;
  let r = eS(i.state, n);
  return r ? (i.dispatch(r), !0) : !1;
}), Zx = ({ state: i, dispatch: t }) => {
  if (i.readOnly)
    return !1;
  let n = Ip(i, i.selection.main.head).brackets || ts.brackets, s = null, r = i.changeByRange((o) => {
    if (o.empty) {
      let l = nS(i.doc, o.head);
      for (let a of n)
        if (a == l && co(i.doc, o.head) == Ep(Vt(a, 0)))
          return {
            changes: { from: o.head - a.length, to: o.head + a.length },
            range: A.cursor(o.head - a.length)
          };
    }
    return { range: s = o };
  });
  return s || t(i.update(r, { scrollIntoView: !0, userEvent: "delete.backward" })), !s;
}, tS = [
  { key: "Backspace", run: Zx }
];
function eS(i, t) {
  let e = Ip(i, i.selection.main.head), n = e.brackets || ts.brackets;
  for (let s of n) {
    let r = Ep(Vt(s, 0));
    if (t == s)
      return r == s ? rS(i, s, n.indexOf(s + s + s) > -1, e) : iS(i, s, r, e.before || ts.before);
    if (t == r && _p(i, i.selection.main.from))
      return sS(i, s, r);
  }
  return null;
}
function _p(i, t) {
  let e = !1;
  return i.field(Lp).between(0, i.doc.length, (n) => {
    n == t && (e = !0);
  }), e;
}
function co(i, t) {
  let e = i.sliceString(t, t + 2);
  return e.slice(0, ke(Vt(e, 0)));
}
function nS(i, t) {
  let e = i.sliceString(t - 2, t);
  return ke(Vt(e, 0)) == e.length ? e : e.slice(1);
}
function iS(i, t, e, n) {
  let s = null, r = i.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: t, from: o.from }, { insert: e, from: o.to }],
        effects: An.of(o.to + t.length),
        range: A.range(o.anchor + t.length, o.head + t.length)
      };
    let l = co(i.doc, o.head);
    return !l || /\s/.test(l) || n.indexOf(l) > -1 ? {
      changes: { insert: t + e, from: o.head },
      effects: An.of(o.head + t.length),
      range: A.cursor(o.head + t.length)
    } : { range: s = o };
  });
  return s ? null : i.update(r, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function sS(i, t, e) {
  let n = null, s = i.changeByRange((r) => r.empty && co(i.doc, r.head) == e ? {
    changes: { from: r.head, to: r.head + e.length, insert: e },
    range: A.cursor(r.head + e.length)
  } : n = { range: r });
  return n ? null : i.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function rS(i, t, e, n) {
  let s = n.stringPrefixes || ts.stringPrefixes, r = null, o = i.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: t, from: l.from }, { insert: t, from: l.to }],
        effects: An.of(l.to + t.length),
        range: A.range(l.anchor + t.length, l.head + t.length)
      };
    let a = l.head, h = co(i.doc, a), c;
    if (h == t) {
      if (lf(i, a))
        return {
          changes: { insert: t + t, from: a },
          effects: An.of(a + t.length),
          range: A.cursor(a + t.length)
        };
      if (_p(i, a)) {
        let u = e && i.sliceDoc(a, a + t.length * 3) == t + t + t ? t + t + t : t;
        return {
          changes: { from: a, to: a + u.length, insert: u },
          range: A.cursor(a + u.length)
        };
      }
    } else {
      if (e && i.sliceDoc(a - 2 * t.length, a) == t + t && (c = af(i, a - 2 * t.length, s)) > -1 && lf(i, c))
        return {
          changes: { insert: t + t + t + t, from: a },
          effects: An.of(a + t.length),
          range: A.cursor(a + t.length)
        };
      if (i.charCategorizer(a)(h) != lt.Word && af(i, a, s) > -1 && !oS(i, a, t, s))
        return {
          changes: { insert: t + t, from: a },
          effects: An.of(a + t.length),
          range: A.cursor(a + t.length)
        };
    }
    return { range: r = l };
  });
  return r ? null : i.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function lf(i, t) {
  let e = Tt(i).resolveInner(t + 1);
  return e.parent && e.from == t;
}
function oS(i, t, e, n) {
  let s = Tt(i).resolveInner(t, -1), r = n.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = i.sliceDoc(s.from, Math.min(s.to, s.from + e.length + r)), a = l.indexOf(e);
    if (!a || a > -1 && n.indexOf(l.slice(0, a)) > -1) {
      let c = s.firstChild;
      for (; c && c.from == s.from && c.to - c.from > e.length + a; ) {
        if (i.sliceDoc(c.to - e.length, c.to) == e)
          return !1;
        c = c.firstChild;
      }
      return !0;
    }
    let h = s.to == t && s.parent;
    if (!h)
      break;
    s = h;
  }
  return !1;
}
function af(i, t, e) {
  let n = i.charCategorizer(t);
  if (n(i.sliceDoc(t - 1, t)) != lt.Word)
    return t;
  for (let s of e) {
    let r = t - s.length;
    if (i.sliceDoc(r, t) == s && n(i.sliceDoc(r - 1, r)) != lt.Word)
      return r;
  }
  return -1;
}
function lS(i = {}) {
  return [
    Ux,
    Ht,
    vt.of(i),
    Kx,
    aS,
    Jx
  ];
}
const Np = [
  { key: "Ctrl-Space", run: of },
  { mac: "Alt-`", run: of },
  { key: "Escape", run: Hx },
  { key: "ArrowDown", run: /* @__PURE__ */ Ks(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ Ks(!1) },
  { key: "PageDown", run: /* @__PURE__ */ Ks(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ Ks(!1, "page") },
  { key: "Enter", run: Wx }
], aS = /* @__PURE__ */ En.highest(/* @__PURE__ */ eo.computeN([vt], (i) => i.facet(vt).defaultKeymap ? [Np] : []));
class hf {
  constructor(t, e, n) {
    this.from = t, this.to = e, this.diagnostic = n;
  }
}
class vn {
  constructor(t, e, n) {
    this.diagnostics = t, this.panel = e, this.selected = n;
  }
  static init(t, e, n) {
    let s = t, r = n.facet(Te).markerFilter;
    r && (s = r(s, n));
    let o = t.slice().sort((f, u) => f.from - u.from || f.to - u.to), l = new He(), a = [], h = 0;
    for (let f = 0; ; ) {
      let u = f == o.length ? null : o[f];
      if (!u && !a.length)
        break;
      let d, p;
      for (a.length ? (d = h, p = a.reduce((g, y) => Math.min(g, y.to), u && u.from > d ? u.from : 1e8)) : (d = u.from, p = u.to, a.push(u), f++); f < o.length; ) {
        let g = o[f];
        if (g.from == d && (g.to > g.from || g.to == d))
          a.push(g), f++, p = Math.min(g.to, p);
        else {
          p = Math.min(g.from, p);
          break;
        }
      }
      let m = kS(a);
      if (a.some((g) => g.from == g.to || g.from == g.to - 1 && n.doc.lineAt(g.from).to == g.from))
        l.add(d, d, V.widget({
          widget: new vS(m),
          diagnostics: a.slice()
        }));
      else {
        let g = a.reduce((y, b) => b.markClass ? y + " " + b.markClass : y, "");
        l.add(d, p, V.mark({
          class: "cm-lintRange cm-lintRange-" + m + g,
          diagnostics: a.slice(),
          inclusiveEnd: a.some((y) => y.to > p)
        }));
      }
      h = p;
      for (let g = 0; g < a.length; g++)
        a[g].to <= h && a.splice(g--, 1);
    }
    let c = l.finish();
    return new vn(c, e, oi(c));
  }
}
function oi(i, t = null, e = 0) {
  let n = null;
  return i.between(e, 1e9, (s, r, { spec: o }) => {
    if (!(t && o.diagnostics.indexOf(t) < 0))
      if (!n)
        n = new hf(s, r, t || o.diagnostics[0]);
      else {
        if (o.diagnostics.indexOf(n.diagnostic) < 0)
          return !1;
        n = new hf(n.from, r, n.diagnostic);
      }
  }), n;
}
function hS(i, t) {
  let e = t.pos, n = t.end || e, s = i.state.facet(Te).hideOn(i, e, n);
  if (s != null)
    return s;
  let r = i.startState.doc.lineAt(t.pos);
  return !!(i.effects.some((o) => o.is(qa)) || i.changes.touchesRange(r.from, Math.max(r.to, n)));
}
function Fp(i, t) {
  return i.field(Gt, !1) ? t : t.concat(H.appendConfig.of(Qp));
}
function cS(i, t) {
  return {
    effects: Fp(i, [qa.of(t)])
  };
}
const qa = /* @__PURE__ */ H.define(), Qa = /* @__PURE__ */ H.define(), Vp = /* @__PURE__ */ H.define(), Gt = /* @__PURE__ */ kt.define({
  create() {
    return new vn(V.none, null, null);
  },
  update(i, t) {
    if (t.docChanged && i.diagnostics.size) {
      let e = i.diagnostics.map(t.changes), n = null, s = i.panel;
      if (i.selected) {
        let r = t.changes.mapPos(i.selected.from, 1);
        n = oi(e, i.selected.diagnostic, r) || oi(e, null, r);
      }
      !e.size && s && t.state.facet(Te).autoPanel && (s = null), i = new vn(e, s, n);
    }
    for (let e of t.effects)
      if (e.is(qa)) {
        let n = t.state.facet(Te).autoPanel ? e.value.length ? es.open : null : i.panel;
        i = vn.init(e.value, n, t.state);
      } else e.is(Qa) ? i = new vn(i.diagnostics, e.value ? es.open : null, i.selected) : e.is(Vp) && (i = new vn(i.diagnostics, i.panel, e.value));
    return i;
  },
  provide: (i) => [
    Ji.from(i, (t) => t.panel),
    P.decorations.from(i, (t) => t.diagnostics)
  ]
}), fS = /* @__PURE__ */ V.mark({ class: "cm-lintRange cm-lintRange-active" });
function uS(i, t, e) {
  let { diagnostics: n } = i.state.field(Gt), s, r = -1, o = -1;
  n.between(t - (e < 0 ? 1 : 0), t + (e > 0 ? 1 : 0), (a, h, { spec: c }) => {
    if (t >= a && t <= h && (a == h || (t > a || e > 0) && (t < h || e < 0)))
      return s = c.diagnostics, r = a, o = h, !1;
  });
  let l = i.state.facet(Te).tooltipFilter;
  return s && l && (s = l(s, i.state)), s ? {
    pos: r,
    end: o,
    above: i.state.doc.lineAt(r).to < o,
    create() {
      return { dom: dS(i, s) };
    }
  } : null;
}
function dS(i, t) {
  return tt("ul", { class: "cm-tooltip-lint" }, t.map((e) => qp(i, e, !1)));
}
const pS = (i) => {
  let t = i.state.field(Gt, !1);
  (!t || !t.panel) && i.dispatch({ effects: Fp(i.state, [Qa.of(!0)]) });
  let e = Ui(i, es.open);
  return e && e.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, cf = (i) => {
  let t = i.state.field(Gt, !1);
  return !t || !t.panel ? !1 : (i.dispatch({ effects: Qa.of(!1) }), !0);
}, gS = (i) => {
  let t = i.state.field(Gt, !1);
  if (!t)
    return !1;
  let e = i.state.selection.main, n = t.diagnostics.iter(e.to + 1);
  return !n.value && (n = t.diagnostics.iter(0), !n.value || n.from == e.from && n.to == e.to) ? !1 : (i.dispatch({ selection: { anchor: n.from, head: n.to }, scrollIntoView: !0 }), !0);
}, mS = [
  { key: "Mod-Shift-m", run: pS, preventDefault: !0 },
  { key: "F8", run: gS }
], Wp = /* @__PURE__ */ ft.fromClass(class {
  constructor(i) {
    this.view = i, this.timeout = -1, this.set = !0;
    let { delay: t } = i.state.facet(Te);
    this.lintTime = Date.now() + t, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, t);
  }
  run() {
    clearTimeout(this.timeout);
    let i = Date.now();
    if (i < this.lintTime - 10)
      this.timeout = setTimeout(this.run, this.lintTime - i);
    else {
      this.set = !1;
      let { state: t } = this.view, { sources: e } = t.facet(Te);
      e.length && yS(e.map((n) => Promise.resolve(n(this.view))), (n) => {
        this.view.state.doc == t.doc && this.view.dispatch(cS(this.view.state, n.reduce((s, r) => s.concat(r))));
      }, (n) => {
        Bt(this.view.state, n);
      });
    }
  }
  update(i) {
    let t = i.state.facet(Te);
    (i.docChanged || t != i.startState.facet(Te) || t.needsRefresh && t.needsRefresh(i)) && (this.lintTime = Date.now() + t.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, t.delay)));
  }
  force() {
    this.set && (this.lintTime = Date.now(), this.run());
  }
  destroy() {
    clearTimeout(this.timeout);
  }
});
function yS(i, t, e) {
  let n = [], s = -1;
  for (let r of i)
    r.then((o) => {
      n.push(o), clearTimeout(s), n.length == i.length ? t(n) : s = setTimeout(() => t(n), 200);
    }, e);
}
const Te = /* @__PURE__ */ D.define({
  combine(i) {
    return Object.assign({ sources: i.map((t) => t.source).filter((t) => t != null) }, Be(i.map((t) => t.config), {
      delay: 750,
      markerFilter: null,
      tooltipFilter: null,
      needsRefresh: null,
      hideOn: () => null
    }, {
      needsRefresh: (t, e) => t ? e ? (n) => t(n) || e(n) : t : e
    }));
  }
});
function bS(i, t = {}) {
  return [
    Te.of({ source: i, config: t }),
    Wp,
    Qp
  ];
}
function Hp(i) {
  let t = i.plugin(Wp);
  t && t.force();
}
function zp(i) {
  let t = [];
  if (i)
    t: for (let { name: e } of i) {
      for (let n = 0; n < e.length; n++) {
        let s = e[n];
        if (/[a-zA-Z]/.test(s) && !t.some((r) => r.toLowerCase() == s.toLowerCase())) {
          t.push(s);
          continue t;
        }
      }
      t.push("");
    }
  return t;
}
function qp(i, t, e) {
  var n;
  let s = e ? zp(t.actions) : [];
  return tt("li", { class: "cm-diagnostic cm-diagnostic-" + t.severity }, tt("span", { class: "cm-diagnosticText" }, t.renderMessage ? t.renderMessage(i) : t.message), (n = t.actions) === null || n === void 0 ? void 0 : n.map((r, o) => {
    let l = !1, a = (u) => {
      if (u.preventDefault(), l)
        return;
      l = !0;
      let d = oi(i.state.field(Gt).diagnostics, t);
      d && r.apply(i, d.from, d.to);
    }, { name: h } = r, c = s[o] ? h.indexOf(s[o]) : -1, f = c < 0 ? h : [
      h.slice(0, c),
      tt("u", h.slice(c, c + 1)),
      h.slice(c + 1)
    ];
    return tt("button", {
      type: "button",
      class: "cm-diagnosticAction",
      onclick: a,
      onmousedown: a,
      "aria-label": ` Action: ${h}${c < 0 ? "" : ` (access key "${s[o]})"`}.`
    }, f);
  }), t.source && tt("div", { class: "cm-diagnosticSource" }, t.source));
}
class vS extends fn {
  constructor(t) {
    super(), this.sev = t;
  }
  eq(t) {
    return t.sev == this.sev;
  }
  toDOM() {
    return tt("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
  }
}
class ff {
  constructor(t, e) {
    this.diagnostic = e, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = qp(t, e, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class es {
  constructor(t) {
    this.view = t, this.items = [];
    let e = (s) => {
      if (s.keyCode == 27)
        cf(this.view), this.view.focus();
      else if (s.keyCode == 38 || s.keyCode == 33)
        this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
      else if (s.keyCode == 40 || s.keyCode == 34)
        this.moveSelection((this.selectedIndex + 1) % this.items.length);
      else if (s.keyCode == 36)
        this.moveSelection(0);
      else if (s.keyCode == 35)
        this.moveSelection(this.items.length - 1);
      else if (s.keyCode == 13)
        this.view.focus();
      else if (s.keyCode >= 65 && s.keyCode <= 90 && this.selectedIndex >= 0) {
        let { diagnostic: r } = this.items[this.selectedIndex], o = zp(r.actions);
        for (let l = 0; l < o.length; l++)
          if (o[l].toUpperCase().charCodeAt(0) == s.keyCode) {
            let a = oi(this.view.state.field(Gt).diagnostics, r);
            a && r.actions[l].apply(t, a.from, a.to);
          }
      } else
        return;
      s.preventDefault();
    }, n = (s) => {
      for (let r = 0; r < this.items.length; r++)
        this.items[r].dom.contains(s.target) && this.moveSelection(r);
    };
    this.list = tt("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: e,
      onclick: n
    }), this.dom = tt("div", { class: "cm-panel-lint" }, this.list, tt("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => cf(this.view)
    }, "×")), this.update();
  }
  get selectedIndex() {
    let t = this.view.state.field(Gt).selected;
    if (!t)
      return -1;
    for (let e = 0; e < this.items.length; e++)
      if (this.items[e].diagnostic == t.diagnostic)
        return e;
    return -1;
  }
  update() {
    let { diagnostics: t, selected: e } = this.view.state.field(Gt), n = 0, s = !1, r = null, o = /* @__PURE__ */ new Set();
    for (t.between(0, this.view.state.doc.length, (l, a, { spec: h }) => {
      for (let c of h.diagnostics) {
        if (o.has(c))
          continue;
        o.add(c);
        let f = -1, u;
        for (let d = n; d < this.items.length; d++)
          if (this.items[d].diagnostic == c) {
            f = d;
            break;
          }
        f < 0 ? (u = new ff(this.view, c), this.items.splice(n, 0, u), s = !0) : (u = this.items[f], f > n && (this.items.splice(n, f - n), s = !0)), e && u.diagnostic == e.diagnostic ? u.dom.hasAttribute("aria-selected") || (u.dom.setAttribute("aria-selected", "true"), r = u) : u.dom.hasAttribute("aria-selected") && u.dom.removeAttribute("aria-selected"), n++;
      }
    }); n < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      s = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new ff(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), s = !0), r ? (this.list.setAttribute("aria-activedescendant", r.id), this.view.requestMeasure({
      key: this,
      read: () => ({ sel: r.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
      write: ({ sel: l, panel: a }) => {
        let h = a.height / this.list.offsetHeight;
        l.top < a.top ? this.list.scrollTop -= (a.top - l.top) / h : l.bottom > a.bottom && (this.list.scrollTop += (l.bottom - a.bottom) / h);
      }
    })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), s && this.sync();
  }
  sync() {
    let t = this.list.firstChild;
    function e() {
      let n = t;
      t = n.nextSibling, n.remove();
    }
    for (let n of this.items)
      if (n.dom.parentNode == this.list) {
        for (; t != n.dom; )
          e();
        t = n.dom.nextSibling;
      } else
        this.list.insertBefore(n.dom, t);
    for (; t; )
      e();
  }
  moveSelection(t) {
    if (this.selectedIndex < 0)
      return;
    let e = this.view.state.field(Gt), n = oi(e.diagnostics, this.items[t].diagnostic);
    n && this.view.dispatch({
      selection: { anchor: n.from, head: n.to },
      scrollIntoView: !0,
      effects: Vp.of(n)
    });
  }
  static open(t) {
    return new es(t);
  }
}
function xS(i, t = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(i)}</svg>')`;
}
function js(i) {
  return xS(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${i}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const SS = /* @__PURE__ */ P.baseTheme({
  ".cm-diagnostic": {
    padding: "3px 6px 3px 8px",
    marginLeft: "-1px",
    display: "block",
    whiteSpace: "pre-wrap"
  },
  ".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
  ".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
  ".cm-diagnostic-info": { borderLeft: "5px solid #999" },
  ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" },
  ".cm-diagnosticAction": {
    font: "inherit",
    border: "none",
    padding: "2px 4px",
    backgroundColor: "#444",
    color: "white",
    borderRadius: "3px",
    marginLeft: "8px",
    cursor: "pointer"
  },
  ".cm-diagnosticSource": {
    fontSize: "70%",
    opacity: 0.7
  },
  ".cm-lintRange": {
    backgroundPosition: "left bottom",
    backgroundRepeat: "repeat-x",
    paddingBottom: "0.7px"
  },
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ js("#d11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ js("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ js("#999") },
  ".cm-lintRange-hint": { backgroundImage: /* @__PURE__ */ js("#66d") },
  ".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
  ".cm-tooltip-lint": {
    padding: 0,
    margin: 0
  },
  ".cm-lintPoint": {
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-2px",
      borderLeft: "3px solid transparent",
      borderRight: "3px solid transparent",
      borderBottom: "4px solid #d11"
    }
  },
  ".cm-lintPoint-warning": {
    "&:after": { borderBottomColor: "orange" }
  },
  ".cm-lintPoint-info": {
    "&:after": { borderBottomColor: "#999" }
  },
  ".cm-lintPoint-hint": {
    "&:after": { borderBottomColor: "#66d" }
  },
  ".cm-panel.cm-panel-lint": {
    position: "relative",
    "& ul": {
      maxHeight: "100px",
      overflowY: "auto",
      "& [aria-selected]": {
        backgroundColor: "#ddd",
        "& u": { textDecoration: "underline" }
      },
      "&:focus [aria-selected]": {
        background_fallback: "#bdf",
        backgroundColor: "Highlight",
        color_fallback: "white",
        color: "HighlightText"
      },
      "& u": { textDecoration: "none" },
      padding: 0,
      margin: 0
    },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "2px",
      background: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    }
  }
});
function wS(i) {
  return i == "error" ? 4 : i == "warning" ? 3 : i == "info" ? 2 : 1;
}
function kS(i) {
  let t = "hint", e = 1;
  for (let n of i) {
    let s = wS(n.severity);
    s > e && (e = s, t = n.severity);
  }
  return t;
}
const Qp = [
  Gt,
  /* @__PURE__ */ P.decorations.compute([Gt], (i) => {
    let { selected: t, panel: e } = i.field(Gt);
    return !t || !e || t.from == t.to ? V.none : V.set([
      fS.range(t.from, t.to)
    ]);
  }),
  /* @__PURE__ */ yy(uS, { hideOn: hS }),
  SS
], CS = [
  Ty(),
  Dy(),
  U1(),
  jb(),
  xb(),
  _1(),
  H1(),
  X.allowMultipleSelections.of(!0),
  lb(),
  _d(Cb, { fallback: !0 }),
  Db(),
  Gx(),
  lS(),
  oy(),
  hy(),
  ty(),
  tx(),
  eo.of([
    ...tS,
    ...jv,
    ...vx,
    ...nv,
    ...mb,
    ...Np,
    ...mS
  ])
], AS = "#e5c07b", uf = "#e06c75", OS = "#56b6c2", MS = "#ffffff", lr = "#abb2bf", ea = "#7d8799", TS = "#61afef", $S = "#98c379", df = "#d19a66", PS = "#c678dd", DS = "#21252b", pf = "#2c313a", gf = "#282c34", il = "#353a42", RS = "#3E4451", mf = "#528bff", BS = /* @__PURE__ */ P.theme({
  "&": {
    color: lr,
    backgroundColor: gf
  },
  ".cm-content": {
    caretColor: mf
  },
  ".cm-cursor, .cm-dropCursor": { borderLeftColor: mf },
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: RS },
  ".cm-panels": { backgroundColor: DS, color: lr },
  ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
  ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },
  ".cm-searchMatch": {
    backgroundColor: "#72a1ff59",
    outline: "1px solid #457dff"
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: "#6199ff2f"
  },
  ".cm-activeLine": { backgroundColor: "#6699ff0b" },
  ".cm-selectionMatch": { backgroundColor: "#aafe661a" },
  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    backgroundColor: "#bad0f847"
  },
  ".cm-gutters": {
    backgroundColor: gf,
    color: ea,
    border: "none"
  },
  ".cm-activeLineGutter": {
    backgroundColor: pf
  },
  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: "#ddd"
  },
  ".cm-tooltip": {
    border: "none",
    backgroundColor: il
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: il,
    borderBottomColor: il
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      backgroundColor: pf,
      color: lr
    }
  }
}, { dark: !0 }), LS = /* @__PURE__ */ cs.define([
  {
    tag: x.keyword,
    color: PS
  },
  {
    tag: [x.name, x.deleted, x.character, x.propertyName, x.macroName],
    color: uf
  },
  {
    tag: [/* @__PURE__ */ x.function(x.variableName), x.labelName],
    color: TS
  },
  {
    tag: [x.color, /* @__PURE__ */ x.constant(x.name), /* @__PURE__ */ x.standard(x.name)],
    color: df
  },
  {
    tag: [/* @__PURE__ */ x.definition(x.name), x.separator],
    color: lr
  },
  {
    tag: [x.typeName, x.className, x.number, x.changed, x.annotation, x.modifier, x.self, x.namespace],
    color: AS
  },
  {
    tag: [x.operator, x.operatorKeyword, x.url, x.escape, x.regexp, x.link, /* @__PURE__ */ x.special(x.string)],
    color: OS
  },
  {
    tag: [x.meta, x.comment],
    color: ea
  },
  {
    tag: x.strong,
    fontWeight: "bold"
  },
  {
    tag: x.emphasis,
    fontStyle: "italic"
  },
  {
    tag: x.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: x.link,
    color: ea,
    textDecoration: "underline"
  },
  {
    tag: x.heading,
    fontWeight: "bold",
    color: uf
  },
  {
    tag: [x.atom, x.bool, /* @__PURE__ */ x.special(x.variableName)],
    color: df
  },
  {
    tag: [x.processingInstruction, x.string, x.inserted],
    color: $S
  },
  {
    tag: x.invalid,
    color: MS
  }
]), ES = [BS, /* @__PURE__ */ _d(LS)];
class Er {
  /**
  @internal
  */
  constructor(t, e, n, s, r, o, l, a, h, c = 0, f) {
    this.p = t, this.stack = e, this.state = n, this.reducePos = s, this.pos = r, this.score = o, this.buffer = l, this.bufferBase = a, this.curContext = h, this.lookAhead = c, this.parent = f;
  }
  /**
  @internal
  */
  toString() {
    return `[${this.stack.filter((t, e) => e % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  // Start an empty stack
  /**
  @internal
  */
  static start(t, e, n = 0) {
    let s = t.parser.context;
    return new Er(t, [], e, n, n, 0, [], 0, s ? new yf(s, s.start) : null, 0, null);
  }
  /**
  The stack's current [context](#lr.ContextTracker) value, if
  any. Its type will depend on the context tracker's type
  parameter, or it will be `null` if there is no context
  tracker.
  */
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  // Push a state onto the stack, tracking its start position as well
  // as the buffer base at that point.
  /**
  @internal
  */
  pushState(t, e) {
    this.stack.push(this.state, e, this.bufferBase + this.buffer.length), this.state = t;
  }
  // Apply a reduce action
  /**
  @internal
  */
  reduce(t) {
    var e;
    let n = t >> 19, s = t & 65535, { parser: r } = this.p, o = this.reducePos < this.pos - 25;
    o && this.setLookAhead(this.pos);
    let l = r.dynamicPrecedence(s);
    if (l && (this.score += l), n == 0) {
      this.pushState(r.getGoto(this.state, s, !0), this.reducePos), s < r.minRepeatTerm && this.storeNode(s, this.reducePos, this.reducePos, o ? 8 : 4, !0), this.reduceContext(s, this.reducePos);
      return;
    }
    let a = this.stack.length - (n - 1) * 3 - (t & 262144 ? 6 : 0), h = a ? this.stack[a - 2] : this.p.ranges[0].from, c = this.reducePos - h;
    c >= 2e3 && !(!((e = this.p.parser.nodeSet.types[s]) === null || e === void 0) && e.isAnonymous) && (h == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = c) : this.p.lastBigReductionSize < c && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = h, this.p.lastBigReductionSize = c));
    let f = a ? this.stack[a - 1] : 0, u = this.bufferBase + this.buffer.length - f;
    if (s < r.minRepeatTerm || t & 131072) {
      let d = r.stateFlag(
        this.state,
        1
        /* StateFlag.Skipped */
      ) ? this.pos : this.reducePos;
      this.storeNode(s, h, d, u + 4, !0);
    }
    if (t & 262144)
      this.state = this.stack[a];
    else {
      let d = this.stack[a - 3];
      this.state = r.getGoto(d, s, !0);
    }
    for (; this.stack.length > a; )
      this.stack.pop();
    this.reduceContext(s, h);
  }
  // Shift a value into the buffer
  /**
  @internal
  */
  storeNode(t, e, n, s = 4, r = !1) {
    if (t == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let o = this, l = this.buffer.length;
      if (l == 0 && o.parent && (l = o.bufferBase - o.parent.bufferBase, o = o.parent), l > 0 && o.buffer[l - 4] == 0 && o.buffer[l - 1] > -1) {
        if (e == n)
          return;
        if (o.buffer[l - 2] >= e) {
          o.buffer[l - 2] = n;
          return;
        }
      }
    }
    if (!r || this.pos == n)
      this.buffer.push(t, e, n, s);
    else {
      let o = this.buffer.length;
      if (o > 0 && this.buffer[o - 4] != 0) {
        let l = !1;
        for (let a = o; a > 0 && this.buffer[a - 2] > n; a -= 4)
          if (this.buffer[a - 1] >= 0) {
            l = !0;
            break;
          }
        if (l)
          for (; o > 0 && this.buffer[o - 2] > n; )
            this.buffer[o] = this.buffer[o - 4], this.buffer[o + 1] = this.buffer[o - 3], this.buffer[o + 2] = this.buffer[o - 2], this.buffer[o + 3] = this.buffer[o - 1], o -= 4, s > 4 && (s -= 4);
      }
      this.buffer[o] = t, this.buffer[o + 1] = e, this.buffer[o + 2] = n, this.buffer[o + 3] = s;
    }
  }
  // Apply a shift action
  /**
  @internal
  */
  shift(t, e, n, s) {
    if (t & 131072)
      this.pushState(t & 65535, this.pos);
    else if ((t & 262144) == 0) {
      let r = t, { parser: o } = this.p;
      (s > this.pos || e <= o.maxNode) && (this.pos = s, o.stateFlag(
        r,
        1
        /* StateFlag.Skipped */
      ) || (this.reducePos = s)), this.pushState(r, n), this.shiftContext(e, n), e <= o.maxNode && this.buffer.push(e, n, s, 4);
    } else
      this.pos = s, this.shiftContext(e, n), e <= this.p.parser.maxNode && this.buffer.push(e, n, s, 4);
  }
  // Apply an action
  /**
  @internal
  */
  apply(t, e, n, s) {
    t & 65536 ? this.reduce(t) : this.shift(t, e, n, s);
  }
  // Add a prebuilt (reused) node into the buffer.
  /**
  @internal
  */
  useNode(t, e) {
    let n = this.p.reused.length - 1;
    (n < 0 || this.p.reused[n] != t) && (this.p.reused.push(t), n++);
    let s = this.pos;
    this.reducePos = this.pos = s + t.length, this.pushState(e, s), this.buffer.push(
      n,
      s,
      this.reducePos,
      -1
      /* size == -1 means this is a reused value */
    ), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, t, this, this.p.stream.reset(this.pos - t.length)));
  }
  // Split the stack. Due to the buffer sharing and the fact
  // that `this.stack` tends to stay quite shallow, this isn't very
  // expensive.
  /**
  @internal
  */
  split() {
    let t = this, e = t.buffer.length;
    for (; e > 0 && t.buffer[e - 2] > t.reducePos; )
      e -= 4;
    let n = t.buffer.slice(e), s = t.bufferBase + e;
    for (; t && s == t.bufferBase; )
      t = t.parent;
    return new Er(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, n, s, this.curContext, this.lookAhead, t);
  }
  // Try to recover from an error by 'deleting' (ignoring) one token.
  /**
  @internal
  */
  recoverByDelete(t, e) {
    let n = t <= this.p.parser.maxNode;
    n && this.storeNode(t, this.pos, e, 4), this.storeNode(0, this.pos, e, n ? 8 : 4), this.pos = this.reducePos = e, this.score -= 190;
  }
  /**
  Check if the given term would be able to be shifted (optionally
  after some reductions) on this stack. This can be useful for
  external tokenizers that want to make sure they only provide a
  given token when it applies.
  */
  canShift(t) {
    for (let e = new IS(this); ; ) {
      let n = this.p.parser.stateSlot(
        e.state,
        4
        /* ParseState.DefaultReduce */
      ) || this.p.parser.hasAction(e.state, t);
      if (n == 0)
        return !1;
      if ((n & 65536) == 0)
        return !0;
      e.reduce(n);
    }
  }
  // Apply up to Recover.MaxNext recovery actions that conceptually
  // inserts some missing token or rule.
  /**
  @internal
  */
  recoverByInsert(t) {
    if (this.stack.length >= 300)
      return [];
    let e = this.p.parser.nextStates(this.state);
    if (e.length > 8 || this.stack.length >= 120) {
      let s = [];
      for (let r = 0, o; r < e.length; r += 2)
        (o = e[r + 1]) != this.state && this.p.parser.hasAction(o, t) && s.push(e[r], o);
      if (this.stack.length < 120)
        for (let r = 0; s.length < 8 && r < e.length; r += 2) {
          let o = e[r + 1];
          s.some((l, a) => a & 1 && l == o) || s.push(e[r], o);
        }
      e = s;
    }
    let n = [];
    for (let s = 0; s < e.length && n.length < 4; s += 2) {
      let r = e[s + 1];
      if (r == this.state)
        continue;
      let o = this.split();
      o.pushState(r, this.pos), o.storeNode(0, o.pos, o.pos, 4, !0), o.shiftContext(e[s], this.pos), o.reducePos = this.pos, o.score -= 200, n.push(o);
    }
    return n;
  }
  // Force a reduce, if possible. Return false if that can't
  // be done.
  /**
  @internal
  */
  forceReduce() {
    let { parser: t } = this.p, e = t.stateSlot(
      this.state,
      5
      /* ParseState.ForcedReduce */
    );
    if ((e & 65536) == 0)
      return !1;
    if (!t.validAction(this.state, e)) {
      let n = e >> 19, s = e & 65535, r = this.stack.length - n * 3;
      if (r < 0 || t.getGoto(this.stack[r], s, !1) < 0) {
        let o = this.findForcedReduction();
        if (o == null)
          return !1;
        e = o;
      }
      this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100;
    }
    return this.reducePos = this.pos, this.reduce(e), !0;
  }
  /**
  Try to scan through the automaton to find some kind of reduction
  that can be applied. Used when the regular ForcedReduce field
  isn't a valid action. @internal
  */
  findForcedReduction() {
    let { parser: t } = this.p, e = [], n = (s, r) => {
      if (!e.includes(s))
        return e.push(s), t.allActions(s, (o) => {
          if (!(o & 393216)) if (o & 65536) {
            let l = (o >> 19) - r;
            if (l > 1) {
              let a = o & 65535, h = this.stack.length - l * 3;
              if (h >= 0 && t.getGoto(this.stack[h], a, !1) >= 0)
                return l << 19 | 65536 | a;
            }
          } else {
            let l = n(o, r + 1);
            if (l != null)
              return l;
          }
        });
    };
    return n(this.state, 0);
  }
  /**
  @internal
  */
  forceAll() {
    for (; !this.p.parser.stateFlag(
      this.state,
      2
      /* StateFlag.Accepting */
    ); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, !0);
        break;
      }
    return this;
  }
  /**
  Check whether this state has no further actions (assumed to be a direct descendant of the
  top state, since any other states must be able to continue
  somehow). @internal
  */
  get deadEnd() {
    if (this.stack.length != 3)
      return !1;
    let { parser: t } = this.p;
    return t.data[t.stateSlot(
      this.state,
      1
      /* ParseState.Actions */
    )] == 65535 && !t.stateSlot(
      this.state,
      4
      /* ParseState.DefaultReduce */
    );
  }
  /**
  Restart the stack (put it back in its start state). Only safe
  when this.stack.length == 3 (state is directly below the top
  state). @internal
  */
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0;
  }
  /**
  @internal
  */
  sameState(t) {
    if (this.state != t.state || this.stack.length != t.stack.length)
      return !1;
    for (let e = 0; e < this.stack.length; e += 3)
      if (this.stack[e] != t.stack[e])
        return !1;
    return !0;
  }
  /**
  Get the parser used by this stack.
  */
  get parser() {
    return this.p.parser;
  }
  /**
  Test whether a given dialect (by numeric ID, as exported from
  the terms file) is enabled.
  */
  dialectEnabled(t) {
    return this.p.parser.dialect.flags[t];
  }
  shiftContext(t, e) {
    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, t, this, this.p.stream.reset(e)));
  }
  reduceContext(t, e) {
    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, t, this, this.p.stream.reset(e)));
  }
  /**
  @internal
  */
  emitContext() {
    let t = this.buffer.length - 1;
    (t < 0 || this.buffer[t] != -3) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  /**
  @internal
  */
  emitLookAhead() {
    let t = this.buffer.length - 1;
    (t < 0 || this.buffer[t] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(t) {
    if (t != this.curContext.context) {
      let e = new yf(this.curContext.tracker, t);
      e.hash != this.curContext.hash && this.emitContext(), this.curContext = e;
    }
  }
  /**
  @internal
  */
  setLookAhead(t) {
    t > this.lookAhead && (this.emitLookAhead(), this.lookAhead = t);
  }
  /**
  @internal
  */
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
  }
}
class yf {
  constructor(t, e) {
    this.tracker = t, this.context = e, this.hash = t.strict ? t.hash(e) : 0;
  }
}
class IS {
  constructor(t) {
    this.start = t, this.state = t.state, this.stack = t.stack, this.base = this.stack.length;
  }
  reduce(t) {
    let e = t & 65535, n = t >> 19;
    n == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (n - 1) * 3;
    let s = this.start.p.parser.getGoto(this.stack[this.base - 3], e, !0);
    this.state = s;
  }
}
class Ir {
  constructor(t, e, n) {
    this.stack = t, this.pos = e, this.index = n, this.buffer = t.buffer, this.index == 0 && this.maybeNext();
  }
  static create(t, e = t.bufferBase + t.buffer.length) {
    return new Ir(t, e, e - t.bufferBase);
  }
  maybeNext() {
    let t = this.stack.parent;
    t != null && (this.index = this.stack.bufferBase - t.bufferBase, this.stack = t, this.buffer = t.buffer);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
  }
  fork() {
    return new Ir(this.stack, this.pos, this.index);
  }
}
function Us(i, t = Uint16Array) {
  if (typeof i != "string")
    return i;
  let e = null;
  for (let n = 0, s = 0; n < i.length; ) {
    let r = 0;
    for (; ; ) {
      let o = i.charCodeAt(n++), l = !1;
      if (o == 126) {
        r = 65535;
        break;
      }
      o >= 92 && o--, o >= 34 && o--;
      let a = o - 32;
      if (a >= 46 && (a -= 46, l = !0), r += a, l)
        break;
      r *= 46;
    }
    e ? e[s++] = r : e = new t(r);
  }
  return e;
}
class ar {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}
const bf = new ar();
class _S {
  /**
  @internal
  */
  constructor(t, e) {
    this.input = t, this.ranges = e, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = bf, this.rangeIndex = 0, this.pos = this.chunkPos = e[0].from, this.range = e[0], this.end = e[e.length - 1].to, this.readNext();
  }
  /**
  @internal
  */
  resolveOffset(t, e) {
    let n = this.range, s = this.rangeIndex, r = this.pos + t;
    for (; r < n.from; ) {
      if (!s)
        return null;
      let o = this.ranges[--s];
      r -= n.from - o.to, n = o;
    }
    for (; e < 0 ? r > n.to : r >= n.to; ) {
      if (s == this.ranges.length - 1)
        return null;
      let o = this.ranges[++s];
      r += o.from - n.to, n = o;
    }
    return r;
  }
  /**
  @internal
  */
  clipPos(t) {
    if (t >= this.range.from && t < this.range.to)
      return t;
    for (let e of this.ranges)
      if (e.to > t)
        return Math.max(t, e.from);
    return this.end;
  }
  /**
  Look at a code unit near the stream position. `.peek(0)` equals
  `.next`, `.peek(-1)` gives you the previous character, and so
  on.
  
  Note that looking around during tokenizing creates dependencies
  on potentially far-away content, which may reduce the
  effectiveness incremental parsing—when looking forward—or even
  cause invalid reparses when looking backward more than 25 code
  units, since the library does not track lookbehind.
  */
  peek(t) {
    let e = this.chunkOff + t, n, s;
    if (e >= 0 && e < this.chunk.length)
      n = this.pos + t, s = this.chunk.charCodeAt(e);
    else {
      let r = this.resolveOffset(t, 1);
      if (r == null)
        return -1;
      if (n = r, n >= this.chunk2Pos && n < this.chunk2Pos + this.chunk2.length)
        s = this.chunk2.charCodeAt(n - this.chunk2Pos);
      else {
        let o = this.rangeIndex, l = this.range;
        for (; l.to <= n; )
          l = this.ranges[++o];
        this.chunk2 = this.input.chunk(this.chunk2Pos = n), n + this.chunk2.length > l.to && (this.chunk2 = this.chunk2.slice(0, l.to - n)), s = this.chunk2.charCodeAt(0);
      }
    }
    return n >= this.token.lookAhead && (this.token.lookAhead = n + 1), s;
  }
  /**
  Accept a token. By default, the end of the token is set to the
  current stream position, but you can pass an offset (relative to
  the stream position) to change that.
  */
  acceptToken(t, e = 0) {
    let n = e ? this.resolveOffset(e, -1) : this.pos;
    if (n == null || n < this.token.start)
      throw new RangeError("Token end out of bounds");
    this.token.value = t, this.token.end = n;
  }
  /**
  Accept a token ending at a specific given position.
  */
  acceptTokenTo(t, e) {
    this.token.value = t, this.token.end = e;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let { chunk: t, chunkPos: e } = this;
      this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = t, this.chunk2Pos = e, this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
      let t = this.input.chunk(this.pos), e = this.pos + t.length;
      this.chunk = e > this.range.to ? t.slice(0, this.range.to - this.pos) : t, this.chunkPos = this.pos, this.chunkOff = 0;
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
  }
  /**
  Move the stream forward N (defaults to 1) code units. Returns
  the new value of [`next`](#lr.InputStream.next).
  */
  advance(t = 1) {
    for (this.chunkOff += t; this.pos + t >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1)
        return this.setDone();
      t -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
    }
    return this.pos += t, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
  }
  setDone() {
    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
  }
  /**
  @internal
  */
  reset(t, e) {
    if (e ? (this.token = e, e.start = t, e.lookAhead = t + 1, e.value = e.extended = -1) : this.token = bf, this.pos != t) {
      if (this.pos = t, t == this.end)
        return this.setDone(), this;
      for (; t < this.range.from; )
        this.range = this.ranges[--this.rangeIndex];
      for (; t >= this.range.to; )
        this.range = this.ranges[++this.rangeIndex];
      t >= this.chunkPos && t < this.chunkPos + this.chunk.length ? this.chunkOff = t - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
    }
    return this;
  }
  /**
  @internal
  */
  read(t, e) {
    if (t >= this.chunkPos && e <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(t - this.chunkPos, e - this.chunkPos);
    if (t >= this.chunk2Pos && e <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(t - this.chunk2Pos, e - this.chunk2Pos);
    if (t >= this.range.from && e <= this.range.to)
      return this.input.read(t, e);
    let n = "";
    for (let s of this.ranges) {
      if (s.from >= e)
        break;
      s.to > t && (n += this.input.read(Math.max(s.from, t), Math.min(s.to, e)));
    }
    return n;
  }
}
class Xn {
  constructor(t, e) {
    this.data = t, this.id = e;
  }
  token(t, e) {
    let { parser: n } = e.p;
    NS(this.data, t, e, this.id, n.data, n.tokenPrecTable);
  }
}
Xn.prototype.contextual = Xn.prototype.fallback = Xn.prototype.extend = !1;
Xn.prototype.fallback = Xn.prototype.extend = !1;
function NS(i, t, e, n, s, r) {
  let o = 0, l = 1 << n, { dialect: a } = e.p.parser;
  t: for (; (l & i[o]) != 0; ) {
    let h = i[o + 1];
    for (let d = o + 3; d < h; d += 2)
      if ((i[d + 1] & l) > 0) {
        let p = i[d];
        if (a.allows(p) && (t.token.value == -1 || t.token.value == p || FS(p, t.token.value, s, r))) {
          t.acceptToken(p);
          break;
        }
      }
    let c = t.next, f = 0, u = i[o + 2];
    if (t.next < 0 && u > f && i[h + u * 3 - 3] == 65535) {
      o = i[h + u * 3 - 1];
      continue t;
    }
    for (; f < u; ) {
      let d = f + u >> 1, p = h + d + (d << 1), m = i[p], g = i[p + 1] || 65536;
      if (c < m)
        u = d;
      else if (c >= g)
        f = d + 1;
      else {
        o = i[p + 2], t.advance();
        continue t;
      }
    }
    break;
  }
}
function vf(i, t, e) {
  for (let n = t, s; (s = i[n]) != 65535; n++)
    if (s == e)
      return n - t;
  return -1;
}
function FS(i, t, e, n) {
  let s = vf(e, n, t);
  return s < 0 || vf(e, n, i) < s;
}
const jt = typeof process < "u" && process.env && /\bparse\b/.test(process.env.LOG);
let sl = null;
function xf(i, t, e) {
  let n = i.cursor(bt.IncludeAnonymous);
  for (n.moveTo(t); ; )
    if (!(e < 0 ? n.childBefore(t) : n.childAfter(t)))
      for (; ; ) {
        if ((e < 0 ? n.to < t : n.from > t) && !n.type.isError)
          return e < 0 ? Math.max(0, Math.min(
            n.to - 1,
            t - 25
            /* Lookahead.Margin */
          )) : Math.min(i.length, Math.max(
            n.from + 1,
            t + 25
            /* Lookahead.Margin */
          ));
        if (e < 0 ? n.prevSibling() : n.nextSibling())
          break;
        if (!n.parent())
          return e < 0 ? 0 : i.length;
      }
}
class VS {
  constructor(t, e) {
    this.fragments = t, this.nodeSet = e, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let t = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (t) {
      for (this.safeFrom = t.openStart ? xf(t.tree, t.from + t.offset, 1) - t.offset : t.from, this.safeTo = t.openEnd ? xf(t.tree, t.to + t.offset, -1) - t.offset : t.to; this.trees.length; )
        this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(t.tree), this.start.push(-t.offset), this.index.push(0), this.nextStart = this.safeFrom;
    } else
      this.nextStart = 1e9;
  }
  // `pos` must be >= any previously given `pos` for this cursor
  nodeAt(t) {
    if (t < this.nextStart)
      return null;
    for (; this.fragment && this.safeTo <= t; )
      this.nextFragment();
    if (!this.fragment)
      return null;
    for (; ; ) {
      let e = this.trees.length - 1;
      if (e < 0)
        return this.nextFragment(), null;
      let n = this.trees[e], s = this.index[e];
      if (s == n.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let r = n.children[s], o = this.start[e] + n.positions[s];
      if (o > t)
        return this.nextStart = o, null;
      if (r instanceof pt) {
        if (o == t) {
          if (o < this.safeFrom)
            return null;
          let l = o + r.length;
          if (l <= this.safeTo) {
            let a = r.prop(q.lookAhead);
            if (!a || l + a < this.fragment.to)
              return r;
          }
        }
        this.index[e]++, o + r.length >= Math.max(this.safeFrom, t) && (this.trees.push(r), this.start.push(o), this.index.push(0));
      } else
        this.index[e]++, this.nextStart = o + r.length;
    }
  }
}
class WS {
  constructor(t, e) {
    this.stream = e, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = t.tokenizers.map((n) => new ar());
  }
  getActions(t) {
    let e = 0, n = null, { parser: s } = t.p, { tokenizers: r } = s, o = s.stateSlot(
      t.state,
      3
      /* ParseState.TokenizerMask */
    ), l = t.curContext ? t.curContext.hash : 0, a = 0;
    for (let h = 0; h < r.length; h++) {
      if ((1 << h & o) == 0)
        continue;
      let c = r[h], f = this.tokens[h];
      if (!(n && !c.fallback) && ((c.contextual || f.start != t.pos || f.mask != o || f.context != l) && (this.updateCachedToken(f, c, t), f.mask = o, f.context = l), f.lookAhead > f.end + 25 && (a = Math.max(f.lookAhead, a)), f.value != 0)) {
        let u = e;
        if (f.extended > -1 && (e = this.addActions(t, f.extended, f.end, e)), e = this.addActions(t, f.value, f.end, e), !c.extend && (n = f, e > u))
          break;
      }
    }
    for (; this.actions.length > e; )
      this.actions.pop();
    return a && t.setLookAhead(a), !n && t.pos == this.stream.end && (n = new ar(), n.value = t.p.parser.eofTerm, n.start = n.end = t.pos, e = this.addActions(t, n.value, n.end, e)), this.mainToken = n, this.actions;
  }
  getMainToken(t) {
    if (this.mainToken)
      return this.mainToken;
    let e = new ar(), { pos: n, p: s } = t;
    return e.start = n, e.end = Math.min(n + 1, s.stream.end), e.value = n == s.stream.end ? s.parser.eofTerm : 0, e;
  }
  updateCachedToken(t, e, n) {
    let s = this.stream.clipPos(n.pos);
    if (e.token(this.stream.reset(s, t), n), t.value > -1) {
      let { parser: r } = n.p;
      for (let o = 0; o < r.specialized.length; o++)
        if (r.specialized[o] == t.value) {
          let l = r.specializers[o](this.stream.read(t.start, t.end), n);
          if (l >= 0 && n.p.parser.dialect.allows(l >> 1)) {
            (l & 1) == 0 ? t.value = l >> 1 : t.extended = l >> 1;
            break;
          }
        }
    } else
      t.value = 0, t.end = this.stream.clipPos(s + 1);
  }
  putAction(t, e, n, s) {
    for (let r = 0; r < s; r += 3)
      if (this.actions[r] == t)
        return s;
    return this.actions[s++] = t, this.actions[s++] = e, this.actions[s++] = n, s;
  }
  addActions(t, e, n, s) {
    let { state: r } = t, { parser: o } = t.p, { data: l } = o;
    for (let a = 0; a < 2; a++)
      for (let h = o.stateSlot(
        r,
        a ? 2 : 1
        /* ParseState.Actions */
      ); ; h += 3) {
        if (l[h] == 65535)
          if (l[h + 1] == 1)
            h = Ie(l, h + 2);
          else {
            s == 0 && l[h + 1] == 2 && (s = this.putAction(Ie(l, h + 2), e, n, s));
            break;
          }
        l[h] == e && (s = this.putAction(Ie(l, h + 1), e, n, s));
      }
    return s;
  }
}
class HS {
  constructor(t, e, n, s) {
    this.parser = t, this.input = e, this.ranges = s, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new _S(e, s), this.tokens = new WS(t, this.stream), this.topTerm = t.top[1];
    let { from: r } = s[0];
    this.stacks = [Er.start(this, t.top[0], r)], this.fragments = n.length && this.stream.end - r > t.bufferLength * 4 ? new VS(n, t.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  // Move the parser forward. This will process all parse stacks at
  // `this.pos` and try to advance them to a further position. If no
  // stack for such a position is found, it'll start error-recovery.
  //
  // When the parse is finished, this will return a syntax tree. When
  // not, it returns `null`.
  advance() {
    let t = this.stacks, e = this.minStackPos, n = this.stacks = [], s, r;
    if (this.bigReductionCount > 300 && t.length == 1) {
      let [o] = t;
      for (; o.forceReduce() && o.stack.length && o.stack[o.stack.length - 2] >= this.lastBigReductionStart; )
        ;
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let o = 0; o < t.length; o++) {
      let l = t[o];
      for (; ; ) {
        if (this.tokens.mainToken = null, l.pos > e)
          n.push(l);
        else {
          if (this.advanceStack(l, n, t))
            continue;
          {
            s || (s = [], r = []), s.push(l);
            let a = this.tokens.getMainToken(l);
            r.push(a.value, a.end);
          }
        }
        break;
      }
    }
    if (!n.length) {
      let o = s && qS(s);
      if (o)
        return jt && console.log("Finish with " + this.stackID(o)), this.stackToTree(o);
      if (this.parser.strict)
        throw jt && s && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + e);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && s) {
      let o = this.stoppedAt != null && s[0].pos > this.stoppedAt ? s[0] : this.runRecovery(s, r, n);
      if (o)
        return jt && console.log("Force-finish " + this.stackID(o)), this.stackToTree(o.forceAll());
    }
    if (this.recovering) {
      let o = this.recovering == 1 ? 1 : this.recovering * 3;
      if (n.length > o)
        for (n.sort((l, a) => a.score - l.score); n.length > o; )
          n.pop();
      n.some((l) => l.reducePos > e) && this.recovering--;
    } else if (n.length > 1) {
      t: for (let o = 0; o < n.length - 1; o++) {
        let l = n[o];
        for (let a = o + 1; a < n.length; a++) {
          let h = n[a];
          if (l.sameState(h) || l.buffer.length > 500 && h.buffer.length > 500)
            if ((l.score - h.score || l.buffer.length - h.buffer.length) > 0)
              n.splice(a--, 1);
            else {
              n.splice(o--, 1);
              continue t;
            }
        }
      }
      n.length > 12 && n.splice(
        12,
        n.length - 12
        /* Rec.MaxStackCount */
      );
    }
    this.minStackPos = n[0].pos;
    for (let o = 1; o < n.length; o++)
      n[o].pos < this.minStackPos && (this.minStackPos = n[o].pos);
    return null;
  }
  stopAt(t) {
    if (this.stoppedAt != null && this.stoppedAt < t)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = t;
  }
  // Returns an updated version of the given stack, or null if the
  // stack can't advance normally. When `split` and `stacks` are
  // given, stacks split off by ambiguous operations will be pushed to
  // `split`, or added to `stacks` if they move `pos` forward.
  advanceStack(t, e, n) {
    let s = t.pos, { parser: r } = this, o = jt ? this.stackID(t) + " -> " : "";
    if (this.stoppedAt != null && s > this.stoppedAt)
      return t.forceReduce() ? t : null;
    if (this.fragments) {
      let h = t.curContext && t.curContext.tracker.strict, c = h ? t.curContext.hash : 0;
      for (let f = this.fragments.nodeAt(s); f; ) {
        let u = this.parser.nodeSet.types[f.type.id] == f.type ? r.getGoto(t.state, f.type.id) : -1;
        if (u > -1 && f.length && (!h || (f.prop(q.contextHash) || 0) == c))
          return t.useNode(f, u), jt && console.log(o + this.stackID(t) + ` (via reuse of ${r.getName(f.type.id)})`), !0;
        if (!(f instanceof pt) || f.children.length == 0 || f.positions[0] > 0)
          break;
        let d = f.children[0];
        if (d instanceof pt && f.positions[0] == 0)
          f = d;
        else
          break;
      }
    }
    let l = r.stateSlot(
      t.state,
      4
      /* ParseState.DefaultReduce */
    );
    if (l > 0)
      return t.reduce(l), jt && console.log(o + this.stackID(t) + ` (via always-reduce ${r.getName(
        l & 65535
        /* Action.ValueMask */
      )})`), !0;
    if (t.stack.length >= 8400)
      for (; t.stack.length > 6e3 && t.forceReduce(); )
        ;
    let a = this.tokens.getActions(t);
    for (let h = 0; h < a.length; ) {
      let c = a[h++], f = a[h++], u = a[h++], d = h == a.length || !n, p = d ? t : t.split(), m = this.tokens.mainToken;
      if (p.apply(c, f, m ? m.start : p.pos, u), jt && console.log(o + this.stackID(p) + ` (via ${(c & 65536) == 0 ? "shift" : `reduce of ${r.getName(
        c & 65535
        /* Action.ValueMask */
      )}`} for ${r.getName(f)} @ ${s}${p == t ? "" : ", split"})`), d)
        return !0;
      p.pos > s ? e.push(p) : n.push(p);
    }
    return !1;
  }
  // Advance a given stack forward as far as it will go. Returns the
  // (possibly updated) stack if it got stuck, or null if it moved
  // forward and was given to `pushStackDedup`.
  advanceFully(t, e) {
    let n = t.pos;
    for (; ; ) {
      if (!this.advanceStack(t, null, null))
        return !1;
      if (t.pos > n)
        return Sf(t, e), !0;
    }
  }
  runRecovery(t, e, n) {
    let s = null, r = !1;
    for (let o = 0; o < t.length; o++) {
      let l = t[o], a = e[o << 1], h = e[(o << 1) + 1], c = jt ? this.stackID(l) + " -> " : "";
      if (l.deadEnd && (r || (r = !0, l.restart(), jt && console.log(c + this.stackID(l) + " (restarted)"), this.advanceFully(l, n))))
        continue;
      let f = l.split(), u = c;
      for (let d = 0; f.forceReduce() && d < 10 && (jt && console.log(u + this.stackID(f) + " (via force-reduce)"), !this.advanceFully(f, n)); d++)
        jt && (u = this.stackID(f) + " -> ");
      for (let d of l.recoverByInsert(a))
        jt && console.log(c + this.stackID(d) + " (via recover-insert)"), this.advanceFully(d, n);
      this.stream.end > l.pos ? (h == l.pos && (h++, a = 0), l.recoverByDelete(a, h), jt && console.log(c + this.stackID(l) + ` (via recover-delete ${this.parser.getName(a)})`), Sf(l, n)) : (!s || s.score < l.score) && (s = l);
    }
    return s;
  }
  // Convert the stack's buffer to a syntax tree.
  stackToTree(t) {
    return t.close(), pt.build({
      buffer: Ir.create(t),
      nodeSet: this.parser.nodeSet,
      topID: this.topTerm,
      maxBufferLength: this.parser.bufferLength,
      reused: this.reused,
      start: this.ranges[0].from,
      length: t.pos - this.ranges[0].from,
      minRepeatType: this.parser.minRepeatTerm
    });
  }
  stackID(t) {
    let e = (sl || (sl = /* @__PURE__ */ new WeakMap())).get(t);
    return e || sl.set(t, e = String.fromCodePoint(this.nextStackID++)), e + t;
  }
}
function Sf(i, t) {
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    if (n.pos == i.pos && n.sameState(i)) {
      t[e].score < i.score && (t[e] = i);
      return;
    }
  }
  t.push(i);
}
class zS {
  constructor(t, e, n) {
    this.source = t, this.flags = e, this.disabled = n;
  }
  allows(t) {
    return !this.disabled || this.disabled[t] == 0;
  }
}
class _r extends Sd {
  /**
  @internal
  */
  constructor(t) {
    if (super(), this.wrappers = [], t.version != 14)
      throw new RangeError(`Parser version (${t.version}) doesn't match runtime version (14)`);
    let e = t.nodeNames.split(" ");
    this.minRepeatTerm = e.length;
    for (let l = 0; l < t.repeatNodeCount; l++)
      e.push("");
    let n = Object.keys(t.topRules).map((l) => t.topRules[l][1]), s = [];
    for (let l = 0; l < e.length; l++)
      s.push([]);
    function r(l, a, h) {
      s[l].push([a, a.deserialize(String(h))]);
    }
    if (t.nodeProps)
      for (let l of t.nodeProps) {
        let a = l[0];
        typeof a == "string" && (a = q[a]);
        for (let h = 1; h < l.length; ) {
          let c = l[h++];
          if (c >= 0)
            r(c, a, l[h++]);
          else {
            let f = l[h + -c];
            for (let u = -c; u > 0; u--)
              r(l[h++], a, f);
            h++;
          }
        }
      }
    this.nodeSet = new Ta(e.map((l, a) => Qt.define({
      name: a >= this.minRepeatTerm ? void 0 : l,
      id: a,
      props: s[a],
      top: n.indexOf(a) > -1,
      error: a == 0,
      skipped: t.skippedNodes && t.skippedNodes.indexOf(a) > -1
    }))), t.propSources && (this.nodeSet = this.nodeSet.extend(...t.propSources)), this.strict = !1, this.bufferLength = yd;
    let o = Us(t.tokenData);
    this.context = t.context, this.specializerSpecs = t.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let l = 0; l < this.specializerSpecs.length; l++)
      this.specialized[l] = this.specializerSpecs[l].term;
    this.specializers = this.specializerSpecs.map(wf), this.states = Us(t.states, Uint32Array), this.data = Us(t.stateData), this.goto = Us(t.goto), this.maxTerm = t.maxTerm, this.tokenizers = t.tokenizers.map((l) => typeof l == "number" ? new Xn(o, l) : l), this.topRules = t.topRules, this.dialects = t.dialects || {}, this.dynamicPrecedences = t.dynamicPrecedences || null, this.tokenPrecTable = t.tokenPrec, this.termNames = t.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(t, e, n) {
    let s = new HS(this, t, e, n);
    for (let r of this.wrappers)
      s = r(s, t, e, n);
    return s;
  }
  /**
  Get a goto table entry @internal
  */
  getGoto(t, e, n = !1) {
    let s = this.goto;
    if (e >= s[0])
      return -1;
    for (let r = s[e + 1]; ; ) {
      let o = s[r++], l = o & 1, a = s[r++];
      if (l && n)
        return a;
      for (let h = r + (o >> 1); r < h; r++)
        if (s[r] == t)
          return a;
      if (l)
        return -1;
    }
  }
  /**
  Check if this state has an action for a given terminal @internal
  */
  hasAction(t, e) {
    let n = this.data;
    for (let s = 0; s < 2; s++)
      for (let r = this.stateSlot(
        t,
        s ? 2 : 1
        /* ParseState.Actions */
      ), o; ; r += 3) {
        if ((o = n[r]) == 65535)
          if (n[r + 1] == 1)
            o = n[r = Ie(n, r + 2)];
          else {
            if (n[r + 1] == 2)
              return Ie(n, r + 2);
            break;
          }
        if (o == e || o == 0)
          return Ie(n, r + 1);
      }
    return 0;
  }
  /**
  @internal
  */
  stateSlot(t, e) {
    return this.states[t * 6 + e];
  }
  /**
  @internal
  */
  stateFlag(t, e) {
    return (this.stateSlot(
      t,
      0
      /* ParseState.Flags */
    ) & e) > 0;
  }
  /**
  @internal
  */
  validAction(t, e) {
    return !!this.allActions(t, (n) => n == e ? !0 : null);
  }
  /**
  @internal
  */
  allActions(t, e) {
    let n = this.stateSlot(
      t,
      4
      /* ParseState.DefaultReduce */
    ), s = n ? e(n) : void 0;
    for (let r = this.stateSlot(
      t,
      1
      /* ParseState.Actions */
    ); s == null; r += 3) {
      if (this.data[r] == 65535)
        if (this.data[r + 1] == 1)
          r = Ie(this.data, r + 2);
        else
          break;
      s = e(Ie(this.data, r + 1));
    }
    return s;
  }
  /**
  Get the states that can follow this one through shift actions or
  goto jumps. @internal
  */
  nextStates(t) {
    let e = [];
    for (let n = this.stateSlot(
      t,
      1
      /* ParseState.Actions */
    ); ; n += 3) {
      if (this.data[n] == 65535)
        if (this.data[n + 1] == 1)
          n = Ie(this.data, n + 2);
        else
          break;
      if ((this.data[n + 2] & 1) == 0) {
        let s = this.data[n + 1];
        e.some((r, o) => o & 1 && r == s) || e.push(this.data[n], s);
      }
    }
    return e;
  }
  /**
  Configure the parser. Returns a new parser instance that has the
  given settings modified. Settings not provided in `config` are
  kept from the original parser.
  */
  configure(t) {
    let e = Object.assign(Object.create(_r.prototype), this);
    if (t.props && (e.nodeSet = this.nodeSet.extend(...t.props)), t.top) {
      let n = this.topRules[t.top];
      if (!n)
        throw new RangeError(`Invalid top rule name ${t.top}`);
      e.top = n;
    }
    return t.tokenizers && (e.tokenizers = this.tokenizers.map((n) => {
      let s = t.tokenizers.find((r) => r.from == n);
      return s ? s.to : n;
    })), t.specializers && (e.specializers = this.specializers.slice(), e.specializerSpecs = this.specializerSpecs.map((n, s) => {
      let r = t.specializers.find((l) => l.from == n.external);
      if (!r)
        return n;
      let o = Object.assign(Object.assign({}, n), { external: r.to });
      return e.specializers[s] = wf(o), o;
    })), t.contextTracker && (e.context = t.contextTracker), t.dialect && (e.dialect = this.parseDialect(t.dialect)), t.strict != null && (e.strict = t.strict), t.wrap && (e.wrappers = e.wrappers.concat(t.wrap)), t.bufferLength != null && (e.bufferLength = t.bufferLength), e;
  }
  /**
  Tells you whether any [parse wrappers](#lr.ParserConfig.wrap)
  are registered for this parser.
  */
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  /**
  Returns the name associated with a given term. This will only
  work for all terms when the parser was generated with the
  `--names` option. By default, only the names of tagged terms are
  stored.
  */
  getName(t) {
    return this.termNames ? this.termNames[t] : String(t <= this.maxNode && this.nodeSet.types[t].name || t);
  }
  /**
  The eof term id is always allocated directly after the node
  types. @internal
  */
  get eofTerm() {
    return this.maxNode + 1;
  }
  /**
  The type of top node produced by the parser.
  */
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  /**
  @internal
  */
  dynamicPrecedence(t) {
    let e = this.dynamicPrecedences;
    return e == null ? 0 : e[t] || 0;
  }
  /**
  @internal
  */
  parseDialect(t) {
    let e = Object.keys(this.dialects), n = e.map(() => !1);
    if (t)
      for (let r of t.split(" ")) {
        let o = e.indexOf(r);
        o >= 0 && (n[o] = !0);
      }
    let s = null;
    for (let r = 0; r < e.length; r++)
      if (!n[r])
        for (let o = this.dialects[e[r]], l; (l = this.data[o++]) != 65535; )
          (s || (s = new Uint8Array(this.maxTerm + 1)))[l] = 1;
    return new zS(t, n, s);
  }
  /**
  Used by the output of the parser generator. Not available to
  user code. @hide
  */
  static deserialize(t) {
    return new _r(t);
  }
}
function Ie(i, t) {
  return i[t] | i[t + 1] << 16;
}
function qS(i) {
  let t = null;
  for (let e of i) {
    let n = e.p.stoppedAt;
    (e.pos == e.p.stream.end || n != null && e.pos > n) && e.p.parser.stateFlag(
      e.state,
      2
      /* StateFlag.Accepting */
    ) && (!t || t.score < e.score) && (t = e);
  }
  return t;
}
function wf(i) {
  if (i.external) {
    let t = i.extend ? 1 : 0;
    return (e, n) => i.external(e, n) << 1 | t;
  }
  return i.get;
}
const QS = { __proto__: null, ind: 82, var: 92, for: 94 }, KS = _r.deserialize({
  version: 14,
  states: "-nQYQPOOOOQO'#C_'#C_ObQPO'#C{OjQPO'#C{OOQO'#Cs'#CsQYQPOOOOQO'#Ca'#CaOoQPO'#C`OwQPO'#C}O!PQPO'#C}OOQO,59g,59gOOQO'#Cr'#CrO!SQPO,59gOOQO-E6q-E6qOOQO'#Cb'#CbO!XQPO'#DPO!aQPO,58zO!fQPO,59iO!tQPO,59iO!yQPO'#C_O!PQPO'#CoOOQO'#D`'#D`O!SQPO'#D`O#XQPO,59iO#^QPO'#CgO#oQPO1G/RO#tQPO'#CtO#yQPO,59kOOQO'#Cc'#CcOOQO1G.f1G.fO$RQPO'#C_O!fQPO'#CdOOQO'#Ch'#ChOOQO'#DT'#DTO!SQPO'#DTO!SQPO'#DTO$dQPO1G/TOOQO'#Ck'#CkO$iQPO'#CjOOQO1G/T1G/TO!aQPO,59ZO$wQPO'#CqOOQO,59z,59zO%VQPO'#DUO!aQPO,59ROOQO7+$m7+$mOOQO,59`,59`OOQO-E6r-E6rO!aQPO,59OOOQO,59o,59oO!fQPO'#CiOOQO7+$o7+$oOOQO'#Cf'#CfOOQO'#Cl'#ClOOQO'#Cm'#CmO#tQPO'#DZO%_QPO'#DZO#tQPO'#DZOOQO'#Cv'#CvO$iQPO,59UOOQO'#Cn'#CnOOQO,59U,59UOOQO1G.u1G.uO%dQPO'#DaO!aQPO,59]O!fQPO'#CuO%lQPO,59pOOQO1G.m1G.mOOQO1G.j1G.jO%tQPO,59TO%yQPO,59uO!fQPO,59uO&OQPO,59uOOQO-E6t-E6tOOQO1G.p1G.pO&TQPO'#CwO&`QPO,59{OOQO1G.w1G.wOOQO,59a,59aOOQO-E6s-E6sO!fQPO1G.oO!fQPO1G/aO&hQPO1G/aO!fQPO1G/aOOQO,59c,59cOOQO-E6u-E6uO&mQPO7+$ZO&rQPO7+${OOQO7+${7+${O!tQPO7+${O#tQPO<<GuOOQO<<Hg<<HgO#tQPOAN=aO&wQPOG22{O!fQPOLD(gO!aQPO!$'LROOQO!)9Am!)9Am",
  stateData: "&|~OnOSPOS~OpPO!URO~OrUOvXO~OpZO~Op^OusP~Op^OvaO~OpcOrUO~OtjOusX~OulO~OXqOpnOrUOypO~O|uO~OrdX{RXuRXtRX~O{wO~OXqOpnOrUOypOuxP~O{}O~Op^O~OtjOusa~OrRX{YXtYXuYX|YX~O{!TO~Op!UO!O!VO!P!WO!R!^O~OX!aOpcOrUOu!TP~Ot!cOuxX~Ov!iO~Ot!mOu!TX~Ot!cOuxa~Ot!rO~Ov!sO~O!Q!uO~OX!vOpcOrUO~Ot!mOu!Ta~O{!zO~Ot!|O~O{!}O~Oz#QO~O",
  goto: "(X!UPPP!V!m!p#a#v$YP$f$v$|%Y%]%c%g%k%o%u%{&R&U&X&_&e&k&qPPP&wP&{P'OPPP'R'qPPPP'tPPPP'x(USQOTWeXdy!meraho!S!c!i!r!s!u#QRWQQVQWdXdy!mSh[rdoaho!S!c!i!r!s!u#QQyfR!SsQ_VQbWQ!OjQ!h!XQ!j!ZQ#O!|R#P#OQm`Q!`xQ!e|Q!f!QQ!o!bR#S#Reqaho!S!c!i!r!s!u#Qdqaho!S!c!i!r!s!u#QT!Yv!]Qi[R!Rresaho!S!c!i!r!s!u#QR!RsQwbR!}!{Tvb!{T!Xv!]T!Zv!]Q!_vR!l!]XeXdy!mXfXdy!mRzfR[RQTOR]TQk_R!PkQ!d{R!q!dQ!]vR!k!]Q!n!aR!w!nTSOTRYQR`VQtaQ{hQ!QoQ!g!SQ!p!cQ!t!iQ!x!rQ!y!sQ!{!uR#R#QR|hT![v!]QgXQxdQ!ayR!v!mR!by",
  nodeNames: "⚠ Cmt Program Fn Paren Sym VarD Sym Paren Num Var Paren Kw Paren Block Sym Kw Kw Sym Paren CompKw Paren Cmd",
  maxTerm: 52,
  skippedNodes: [0, 1],
  repeatNodeCount: 5,
  tokenData: "%k~RhX^!mpq!mst#bxy#yyz$O|}$T!Q![$Y![!]$b!]!^$g!^!_$l!_!`$q!b!c$v!c!}${#T#o${#o#p%a#q#r%f#y#z!m$f$g!m#BY#BZ!m$IS$I_!m$I|$JO!m$JT$JU!m$KV$KW!m&FU&FV!m~!rYn~X^!mpq!m#y#z!m$f$g!m#BY#BZ!m$IS$I_!m$I|$JO!m$JT$JU!m$KV$KW!m&FU&FV!m~#gSP~OY#bZ;'S#b;'S;=`#s<%lO#b~#vP;=`<%l#b~$OOr~~$TOu~~$YOt~~$_PX~!Q![$Y~$gOz~~$lO{~~$qO!Q~~$vOv~~${O!U~~%QTp~tu${!Q![${!c!}${#R#S${#T#o${~%fO|~~%kO!R~",
  tokenizers: [0],
  topRules: { Program: [0, 2] },
  specialized: [{ term: 32, get: (i) => QS[i] || -1 }],
  tokenPrec: 0
});
function fo(i) {
  let t = 0, e;
  return () => {
    if (t === 2)
      return e;
    if (t === 1)
      throw new Error("Binding demanded before initialized");
    return t = 1, e = i(), t = 2, e;
  };
}
function B() {
  throw new Error("Failed pattern match");
}
function jS(i, t) {
  return Math.floor(i / t);
}
const Nr = function(i) {
  return i.toString();
}, US = function(i) {
  var t = i.length;
  return '"' + i.replace(
    /[\0-\x1F\x7F"\\]/g,
    // eslint-disable-line no-control-regex
    function(e, n) {
      switch (e) {
        case '"':
        case "\\":
          return "\\" + e;
        case "\x07":
          return "\\a";
        case "\b":
          return "\\b";
        case "\f":
          return "\\f";
        case `
`:
          return "\\n";
        case "\r":
          return "\\r";
        case "	":
          return "\\t";
        case "\v":
          return "\\v";
      }
      var s = n + 1, r = s < t && i[s] >= "0" && i[s] <= "9" ? "\\&" : "";
      return "\\" + e.charCodeAt(0).toString(10) + r;
    }
  ) + '"';
}, Ka = (i) => i, JS = /* @__PURE__ */ Ka("LT"), GS = /* @__PURE__ */ Ka("GT"), XS = /* @__PURE__ */ Ka("EQ"), It = (i, t) => ({ tag: i, _1: t }), Ct = /* @__PURE__ */ It("Nothing"), pi = (i) => It("Just", i), Kp = (i) => {
  if (i.tag === "Nothing")
    return !0;
  if (i.tag === "Just")
    return !1;
  B();
}, YS = function(i) {
  return function(t) {
    return function(e) {
      var n;
      e < 11 ? n = "[0-" + (e - 1).toString() + "]" : e === 11 ? n = "[0-9a]" : n = "[0-9a-" + String.fromCharCode(86 + e) + "]";
      var s = new RegExp("^[\\+\\-]?" + n + "+$", "i");
      return function(r) {
        if (s.test(r)) {
          var o = parseInt(r, e);
          return (o | 0) === o ? i(o) : t;
        } else
          return t;
      };
    };
  };
}, ZS = /* @__PURE__ */ YS(pi)(Ct), tw = /* @__PURE__ */ ZS(10), ew = (i) => (t) => (e) => {
  try {
    var n = BigInt(e);
    return i(n);
  } catch {
    return t;
  }
}, Xe = (i) => BigInt(i), kf = (i) => (t) => i + t, nw = (i) => (t) => i * t, iw = (i) => (t) => {
  if (t === 0n) return 0n;
  const e = t < 0n ? -t : t;
  return (i % e + e) % e;
}, jp = (i) => (t) => i == t, sw = (i) => (t) => i === t ? 0 : i > t ? 1 : -1, Fr = (i) => i.toString(), rw = { eq: jp }, ow = {
  compare: (i) => (t) => {
    const e = sw(i)(t);
    return e === 1 ? GS : e === 0 ? XS : JS;
  },
  Eq0: () => rw
}, lw = /* @__PURE__ */ ew(pi)(Ct), te = (i, t, e) => ({ tag: i, _1: t, _2: e }), ds = (i, t, e, n) => ({ tag: i, _1: t, _2: e, _3: n }), ja = (i, t, e) => ({ tag: i, _1: t, _2: e }), We = (i, t, e, n) => ({ tag: i, _1: t, _2: e, _3: n }), ot = (i, t, e) => ({ tag: i, _1: t, _2: e }), aw = (i) => i, hw = (i) => ot("VVar", i), cw = (i) => (t) => ot("VCall", i, t), fw = (i) => (t) => te("CComp", i, t), Ua = (i) => (t) => ds("FValue", i, t), Up = (i) => (t) => (e) => ds("FImp", i, t, e), uo = (i) => (t) => ja("IFn", i, t), po = { eq: (i) => (t) => i.id === t.id }, In = { hash: (i) => i.id, Eq0: () => po }, Jp = { eq: (i) => (t) => i.id === t.id }, Gp = { hash: (i) => i.id, Eq0: () => Jp }, uw = { name: "succ", arity: 1, id: Ct }, Ja = (i) => (t) => i, ps = function(i) {
  return function(t) {
    for (var e = t.length, n = new Array(e), s = 0; s < e; s++)
      n[s] = i(t[s]);
    return n;
  };
}, dw = { map: ps }, Xp = (i) => i, ct = (i, t) => ({ tag: i, _1: t }), pw = (i) => ct("Left", i), gw = (i) => ct("Right", i), Yp = (i) => i, mw = { map: (i) => (t) => i(t) }, Zp = { apply: (i) => (t) => i(t), Functor0: () => mw }, tg = { bind: (i) => (t) => t(i), Apply0: () => Zp }, yw = { pure: Yp, Apply0: () => Zp }, Q = { Applicative0: () => yw, Bind1: () => tg }, ue = (i, t) => ({ tag: i, _1: t }), bw = (i) => ue("Loop", i), vw = {
  tailRecM: (i) => {
    const t = (e) => {
      let n = e, s = !0, r;
      for (; s; ) {
        const o = n;
        if (o.tag === "Loop") {
          n = i(o._1);
          continue;
        }
        if (o.tag === "Done") {
          s = !1, r = o._1;
          continue;
        }
        B();
      }
      return r;
    };
    return (e) => t(i(e));
  },
  Monad0: () => Q
}, L = (i, t) => ({ tag: "Tuple", _1: i, _2: t }), Ga = (i) => (t) => L(i, t), Xa = (i) => i._2, go = (i) => i._1, _t = (i) => ({ bind: (t) => (e) => (n) => i.Bind1().bind(t(n))((s) => e(s._1)(s._2)), Apply0: () => mo(i) }), mo = (i) => {
  const t = i.Bind1().Apply0().Functor0(), e = { map: (n) => (s) => (r) => t.map((o) => L(n(o._1), o._2))(s(r)) };
  return {
    apply: (() => {
      const n = _t(i);
      return (s) => (r) => n.bind(s)((o) => n.bind(r)((l) => At(i).pure(o(l))));
    })(),
    Functor0: () => e
  };
}, At = (i) => ({ pure: (t) => (e) => i.Applicative0().pure(L(t, e)), Apply0: () => mo(i) }), xw = (i) => {
  const t = mo(i);
  return (e) => ({
    append: (() => {
      const n = e.append;
      return (s) => (r) => t.apply(t.Functor0().map(n)(s))(r);
    })()
  });
}, Sw = (i) => {
  const t = i.Monad0(), e = { Applicative0: () => At(t), Bind1: () => _t(t) };
  return {
    tailRecM: (n) => (s) => (r) => i.tailRecM((o) => t.Bind1().bind(n(o._1)(o._2))((l) => t.Applicative0().pure((() => {
      if (l._1.tag === "Loop")
        return ue("Loop", L(l._1._1, l._2));
      if (l._1.tag === "Done")
        return ue("Done", L(l._1._1, l._2));
      B();
    })())))(L(s, r)),
    Monad0: () => e
  };
}, dn = (i) => {
  const t = { Applicative0: () => At(i), Bind1: () => _t(i) };
  return { state: (e) => (n) => i.Applicative0().pure(e(n)), Monad0: () => t };
}, ww = (i) => {
  const t = xw(i);
  return (e) => {
    const n = t(e.Semigroup0());
    return { mempty: At(i).pure(e.mempty), Semigroup0: () => n };
  };
}, kw = function(i) {
  return function(t) {
    return function() {
      return i(t());
    };
  };
}, Cw = function(i) {
  return function() {
    return i;
  };
}, Aw = function(i) {
  return function(t) {
    return function() {
      return t(i())();
    };
  };
}, Ow = { map: kw }, Mw = { Applicative0: () => ng, Bind1: () => Tw }, Tw = { bind: Aw, Apply0: () => eg }, eg = {
  apply: (i) => (t) => () => {
    const e = i(), n = t();
    return ng.pure(e(n))();
  },
  Functor0: () => Ow
}, ng = { pure: Cw, Apply0: () => eg }, $w = {
  tailRecM: (i) => (t) => {
    const e = i(t);
    return () => {
      let s = e();
      for (; s.tag === "Loop"; ) {
        const o = s;
        if (o.tag === "Loop") {
          s = i(o._1)();
          continue;
        }
        o.tag !== "Done" && B();
      }
      const r = s;
      if (r.tag === "Done")
        return r._1;
      B();
    };
  },
  Monad0: () => Mw
}, Pw = function(i, t, e) {
  return e.length > 0 ? i(e.pop()) : t;
}, Dw = {
  append: (i) => (t) => i.tag === "Just" ? i : t
}, Rw = { mempty: Ct, Semigroup0: () => Dw }, ig = function(i) {
  return function(t) {
    return function(e) {
      for (var n = t, s = e.length, r = s - 1; r >= 0; r--)
        n = i(e[r])(n);
      return n;
    };
  };
}, sg = function(i) {
  return function(t) {
    return function(e) {
      for (var n = t, s = e.length, r = 0; r < s; r++)
        n = i(n)(e[r]);
      return n;
    };
  };
}, na = /* @__PURE__ */ (() => {
  const i = { append: (t) => (e) => (n) => t(e(n)) };
  return { mempty: (t) => t, Semigroup0: () => i };
})(), Bw = /* @__PURE__ */ (() => {
  const i = na.Semigroup0(), t = { append: (e) => (n) => i.append(n)(e) };
  return { mempty: na.mempty, Semigroup0: () => t };
})(), Ya = (i) => {
  const t = i.Apply0();
  return (e) => (n) => e.foldr((s) => {
    const r = n(s);
    return (o) => t.apply(t.Functor0().map((l) => Xp)(r))(o);
  })(i.pure());
}, Lw = (i) => {
  const t = Ya(i);
  return (e) => {
    const n = t(e);
    return (s) => (r) => n(r)(s);
  };
}, Ke = {
  foldr: ig,
  foldl: sg,
  foldMap: (i) => {
    const t = i.mempty;
    return (e) => Ke.foldr((n) => (s) => i.Semigroup0().append(e(n))(s))(t);
  }
}, Ew = (i) => {
  const t = i.foldMap(Bw);
  return (e) => (n) => (s) => t((r) => (o) => e(o)(r))(s)(n);
}, Iw = (i) => {
  const t = i.foldMap(na);
  return (e) => (n) => (s) => t((r) => e(r))(s)(n);
};
var _w = function(i) {
  return function(t) {
    return i === t;
  };
};
const yo = _w, Nw = { eq: yo }, Fw = /* @__PURE__ */ function() {
  function i(s) {
    return [s];
  }
  function t(s) {
    return function(r) {
      return [s, r];
    };
  }
  function e(s) {
    return function(r) {
      return function(o) {
        return [s, r, o];
      };
    };
  }
  function n(s) {
    return function(r) {
      return s.concat(r);
    };
  }
  return function(s) {
    return function(r) {
      return function(o) {
        return function(l) {
          return function(a) {
            function h(c, f) {
              switch (f - c) {
                case 0:
                  return o([]);
                case 1:
                  return r(i)(l(a[c]));
                case 2:
                  return s(r(t)(l(a[c])))(l(a[c + 1]));
                case 3:
                  return s(s(r(e)(l(a[c])))(l(a[c + 1])))(l(a[c + 2]));
                default:
                  var u = c + Math.floor((f - c) / 4) * 2;
                  return s(r(n)(h(c, u)))(h(u, f));
              }
            }
            return h(0, a.length);
          };
        };
      };
    };
  };
}(), rg = (i) => i, je = {
  traverse: (i) => {
    const t = i.Apply0();
    return Fw(t.apply)(t.Functor0().map)(i.pure);
  },
  sequence: (i) => je.traverse(i)(rg),
  Functor0: () => dw,
  Foldable1: () => Ke
}, og = function(i, t) {
  for (var e = i > t ? -1 : 1, n = new Array(e * (t - i) + 1), s = i, r = 0; s !== t; )
    n[r++] = s, s += e;
  return n[r] = s, n;
}, Vw = /* @__PURE__ */ function() {
  function i(s, r) {
    this.head = s, this.tail = r;
  }
  var t = {};
  function e(s) {
    return function(r) {
      return new i(s, r);
    };
  }
  function n(s) {
    for (var r = [], o = 0, l = s; l !== t; )
      r[o++] = l.head, l = l.tail;
    return r;
  }
  return function(s, r) {
    return n(s(e)(t)(r));
  };
}(), Ww = function(i, t, e) {
  return e.length === 0 ? i({}) : t(e[0])(e.slice(1));
}, Hw = function(i) {
  return i.slice().reverse();
}, zw = function(i, t, e) {
  for (var n = t.length < e.length ? t.length : e.length, s = new Array(n), r = 0; r < n; r++)
    s[r] = i(t[r])(e[r]);
  return s;
}, qw = function(i, t) {
  for (var e = t.length, n = 0; n < e; n++)
    if (!i(t[n])) return !1;
  return !0;
}, Qw = function(i) {
  return function(t) {
    return function(e) {
      return function(n) {
        return function(s) {
          return function(r) {
            for (var o = [], l = r; ; ) {
              var a = s(l);
              o.push(e(a));
              var h = n(a);
              if (i(h)) return o;
              l = t(h);
            }
          };
        };
      };
    };
  };
}, Kw = (i) => {
  if (i.tag === "Just")
    return i._1;
  B();
}, jw = { unfoldr1: /* @__PURE__ */ Qw(Kp)(Kw)(go)(Xa) }, Uw = function(i) {
  return function(t) {
    return function(e) {
      return function(n) {
        return function(s) {
          return function(r) {
            for (var o = [], l = r; ; ) {
              var a = s(l);
              if (i(a)) return o;
              var h = t(a);
              o.push(e(h)), l = n(h);
            }
          };
        };
      };
    };
  };
}, Jw = (i) => {
  if (i.tag === "Just")
    return i._1;
  B();
}, lg = {
  unfoldr: /* @__PURE__ */ Uw(Kp)(Jw)(go)(Xa),
  Unfoldable10: () => jw
};
function Gw(i, t) {
  var e = {};
  for (var n in t)
    ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
  for (var s in i)
    ({}).hasOwnProperty.call(i, s) && (e[s] = i[s]);
  return e;
}
const ag = dn(Q).state, bo = (i) => (t) => ag((e) => {
  const n = t(Gw(e, i));
  return L(n._1, { id: n._2.id, r: n._2.r });
}), hg = (i) => ag((t) => {
  const e = i({ id: t.id, r: t.r });
  return L(e._1, { ...t, id: e._2.id });
}), vo = (i) => {
  const t = i.Monad0(), e = t.Bind1(), n = e.bind(i.state((s) => L(s.id, s)))((s) => e.bind(i.state((r) => L(
    void 0,
    { ...r, id: s + 1 | 0 }
  )))(() => t.Applicative0().pure(s)));
  return (s) => (r) => i.Monad0().Bind1().Apply0().Functor0().map((o) => ({ name: r, mut: s, id: o }))(n);
}, Ne = /* @__PURE__ */ At(Q), Vn = _t(Q).bind, cg = je.traverse(Ne), ia = /* @__PURE__ */ vo(/* @__PURE__ */ dn(Q)), Xw = /* @__PURE__ */ (() => {
  const i = je.traverse(Ne)(rg);
  return (t) => (e) => i(lg.unfoldr((n) => n <= 0 ? Ct : It("Just", L(e, n - 1 | 0)))(t));
})(), Oi = (i) => (t) => {
  if (t.c.tag === "CFn")
    return Ne.pure(ot("VCall", t.c._1, i));
  if (t.c.tag === "CCst")
    return Ne.pure(ot("VNum", t.c._1));
  if (t.c.tag === "CProj")
    return Ne.pure(i[t.c._1]);
  if (t.c.tag === "CComp") {
    const e = t.c._1;
    return Vn(cg(Oi(i))(t.c._2))((n) => Oi(n)(e));
  }
  if (t.c.tag === "CRec") {
    const e = t.c._2, n = Ww((l) => Ct, (l) => (a) => It("Just", { head: l, tail: a }), i), s = (() => {
      if (n.tag === "Just")
        return n._1;
      B();
    })(), r = s.head, o = s.tail;
    return Vn(Oi(o)(t.c._1))((l) => Vn(ia(!1)("n"))((a) => Vn(ia(!1)("x"))((h) => Vn(Oi([ot("VVar", a), ot("VVar", h), ...o])(e))((c) => Ne.pure(ot(
      "VInd",
      { val: r, case0: l, n: a, x: h, caseS: c }
    ))))));
  }
  B();
}, Yw = (i) => {
  if (i.tag === "FValue" || i.tag === "FImp")
    return Ne.pure(i);
  if (i.tag === "FComp") {
    const t = i._1;
    return Vn(Xw(i._1.arity)(ia(!1)("arg")))((e) => {
      const n = Ua(e), s = Oi(ps(hw)(e))(t);
      return (r) => {
        const o = s(r);
        return L(n(o._1), o._2);
      };
    });
  }
  B();
}, Zw = (i) => {
  if (i.tag === "IFn") {
    const t = uo(i._1), e = Yw(i._2);
    return (n) => {
      const s = e(n);
      return L(t(s._1), s._2);
    };
  }
  return Ne.pure(i);
}, tk = (i) => {
  const t = cg(Zw)(i);
  return (e) => {
    const n = t(e);
    return L(n._1, n._2);
  };
}, fg = null;
const ek = (i) => (t) => (e) => t(i(e)), xo = (i) => {
  const t = i.Apply0(), e = t.Functor0(), n = /* @__PURE__ */ (() => {
    const s = {
      map: (r) => {
        const o = e.map(r);
        return (l) => (a) => o(l(a));
      }
    };
    return { apply: (r) => (o) => (l) => t.apply(r(l))(o(l)), Functor0: () => s };
  })();
  return { bind: (s) => (r) => (o) => i.bind(s(o))((l) => r(l)(o)), Apply0: () => n };
}, gs = (i) => {
  const t = i.Applicative0(), e = t.Apply0(), n = (() => {
    const r = e.Functor0(), o = {
      map: (a) => {
        const h = r.map(a);
        return (c) => (f) => h(c(f));
      }
    }, l = { apply: (a) => (h) => (c) => e.apply(a(c))(h(c)), Functor0: () => o };
    return {
      pure: (a) => {
        const h = t.pure(a);
        return (c) => h;
      },
      Apply0: () => l
    };
  })(), s = xo(i.Bind1());
  return { Applicative0: () => n, Bind1: () => s };
}, ug = (i) => {
  const t = gs(i), e = { ask: i.Applicative0().pure, Monad0: () => t };
  return { local: ek, MonadAsk0: () => e };
}, nk = (i) => {
  const t = gs(i.Monad0());
  return {
    state: (e) => {
      const n = i.state(e);
      return (s) => n;
    },
    Monad0: () => t
  };
}, sa = /* @__PURE__ */ (() => {
  const i = { append: (t) => (e) => (n) => t(e(n)) };
  return { mempty: (t) => t, Semigroup0: () => i };
})(), ik = /* @__PURE__ */ (() => {
  const i = sa.Semigroup0(), t = { append: (e) => (n) => i.append(n)(e) };
  return { mempty: sa.mempty, Semigroup0: () => t };
})(), dg = (i) => {
  const t = i.foldMapWithIndex(ik);
  return (e) => (n) => (s) => t((r) => {
    const o = e(r);
    return (l) => (a) => o(a)(l);
  })(s)(n);
}, pg = (i) => {
  const t = i.foldMapWithIndex(sa);
  return (e) => (n) => (s) => t((r) => e(r))(s)(n);
}, sk = function(i, t) {
  for (var e = t[t.length - 1], n = t.length - 2; n >= 0; n--)
    e = i(t[n])(e);
  return e;
}, rk = function(i, t) {
  for (var e = t[0], n = t.length, s = 1; s < n; s++)
    e = i(e)(t[s]);
  return e;
}, gg = {
  foldMap1: (i) => {
    const t = i.append;
    return (e) => {
      const n = ps(e), s = gg.foldl1(t);
      return (r) => s(n(r));
    };
  },
  foldr1: (i) => (t) => sk(i, t),
  foldl1: (i) => (t) => rk(i, t),
  Foldable0: () => Ke
}, Re = (i, t) => ({ tag: "Join", _1: i, _2: t }), ok = _t(Q).bind, lk = dn(Q).state((i) => L(i, i)), ak = At(Q).pure, hk = /* @__PURE__ */ (() => {
  const i = gg.foldMap1({
    append: (t) => (e) => (n) => {
      const s = t(n), r = e(n);
      return (o) => s(o) + n(o) + r(o);
    }
  });
  return (t) => (e) => (n) => i((s) => {
    const r = e(s);
    return (o) => r;
  })(n)(t);
})(), ck = /* @__PURE__ */ ug(Q), Cf = /* @__PURE__ */ (() => {
  const i = gs(Q);
  return { ask: Yp, Monad0: () => i };
})(), Ue = (i) => Cf.Monad0().Bind1().Apply0().Functor0().map(i)(Cf.ask), mg = (i) => ok(lk)((t) => ak(i({ indent: "", r: t.r }))), Za = ck.local((i) => ({ ...i, indent: i.indent + i.r.indentUnit })), Af = xo(tg).bind, Of = (i) => (t) => i, pn = (i) => {
  const t = i.disp;
  return {
    disp: (e) => {
      const n = e._1, s = hk((r) => n)(t);
      return e._2.length > 0 ? s(e._2) : (r) => "";
    }
  };
}, gn = { i: (i) => "", iStr: (i) => i }, ns = (i) => ({
  i: (t) => i.iStr((() => {
    const e = Nr(t);
    return (n) => e;
  })()),
  iStr: (t) => (e) => i.iStr((() => {
    const n = Nr(e);
    return (s) => t(s) + n;
  })())
}), Vr = /* @__PURE__ */ (() => {
  const i = ns(gn);
  return (t) => (e) => i.iStr((n) => t + e);
})(), th = { i: (i) => (t) => i, iStr: (i) => (t) => (e) => i(e) + t }, yg = (i) => ({
  i: (t) => i.iStr((() => {
    const e = Fr(t);
    return (n) => e;
  })()),
  iStr: (t) => (e) => i.iStr((() => {
    const n = Fr(e);
    return (s) => t(s) + n;
  })())
}), fk = yg(gn).i, uk = /* @__PURE__ */ (() => {
  const i = ns((() => {
    const t = yg(th);
    return { i: (e) => t.iStr((n) => e), iStr: (e) => (n) => t.iStr((s) => e(s) + n) };
  })());
  return (t) => i.iStr((e) => t);
})(), dk = /* @__PURE__ */ (() => {
  const i = ns((() => {
    const t = ns(th);
    return { i: (e) => t.iStr((n) => e), iStr: (e) => (n) => t.iStr((s) => e(s) + n) };
  })());
  return (t) => i.iStr((e) => t);
})(), pk = /* @__PURE__ */ (() => {
  const i = { append: (t) => (e) => (n) => t(n) + e(n) };
  return Ke.foldMap({ mempty: (t) => "", Semigroup0: () => i });
})(), gk = /* @__PURE__ */ (() => {
  const i = Ue((t) => t.indent);
  return (t) => (e) => i(e) + t;
})(), mk = { disp: (i) => Vr(i.name)("$")(i.id) }, li = (i) => ({
  i: (t) => i.iStr(Vr(t.name)("$")(t.id)),
  iStr: (t) => (e) => i.iStr((() => {
    const n = Vr(e.name)("$")(e.id);
    return (s) => t(s) + n(s);
  })())
}), yk = li(gn).i, bg = /* @__PURE__ */ (() => {
  const i = pn(mk);
  return (t) => ({
    i: (e) => t.iStr(i.disp(e)),
    iStr: (e) => (n) => t.iStr((() => {
      const s = i.disp(n);
      return (r) => e(r) + s(r);
    })())
  });
})(), Mf = {
  disp: (i) => {
    if (i.id.tag === "Just")
      return Vr(i.name)("$")(i.id._1);
    if (i.id.tag === "Nothing") {
      const t = i.name;
      return (e) => t;
    }
    B();
  }
}, eh = (i) => ({
  i: (t) => i.iStr(Mf.disp(t)),
  iStr: (t) => (e) => i.iStr((() => {
    const n = Mf.disp(e);
    return (s) => t(s) + n(s);
  })())
}), bk = eh(gn).i, xn = {
  disp: (i) => {
    if (i.tag === "VNum")
      return fk(i._1);
    if (i.tag === "VVar")
      return yk(i._1);
    if (i.tag === "VCall")
      return eh((() => {
        const t = pn(xn), e = (n) => (s) => {
          const r = t.disp(s);
          return (o) => (l) => n(l) + r(l) + o;
        };
        return { i: (n) => e((s) => n), iStr: (n) => (s) => e((r) => n(r) + s) };
      })()).i(i._1)("(")(Re(", ", i._2))(")");
    if (i.tag === "VInd") {
      const t = xn.disp(i._1.val), e = xn.disp(i._1.case0);
      return li((() => {
        const n = li({
          i: (s) => (r) => {
            const o = xn.disp(r);
            return (l) => (a) => s + o(a) + l;
          },
          iStr: (s) => (r) => (o) => {
            const l = xn.disp(o);
            return (a) => (h) => s(h) + r + l(h) + a;
          }
        });
        return { i: (s) => n.iStr((r) => s), iStr: (s) => (r) => n.iStr((o) => s(o) + r) };
      })()).iStr((n) => "ind(" + t(n) + ", " + e(n) + ", ")(i._1.n)(" ")(i._1.x)(" : ")(i._1.caseS)(")");
    }
    B();
  }
}, vg = (i) => ({
  i: (t) => i.iStr(xn.disp(t)),
  iStr: (t) => (e) => i.iStr((() => {
    const n = xn.disp(e);
    return (s) => t(s) + n(s);
  })())
}), nh = /* @__PURE__ */ (() => {
  const i = vg(th);
  return { i: (t) => i.iStr((e) => t), iStr: (t) => (e) => i.iStr((n) => t(n) + e) };
})(), xg = /* @__PURE__ */ li(nh), vk = /* @__PURE__ */ (() => {
  const i = Ue((t) => t.indent);
  return (t) => xg.iStr((e) => i(e) + t);
})(), xk = xg.iStr(Ue((i) => i.indent)), Sk = /* @__PURE__ */ (() => {
  const i = bg(nh);
  return (t) => i.iStr((e) => t);
})(), Mi = {
  disp: (i) => {
    if (i.c.tag === "CFn")
      return bk(i.c._1);
    if (i.c.tag === "CCst")
      return uk("cst(")(i.arity)(", ")(i.c._1)(")");
    if (i.c.tag === "CProj")
      return dk("proj(")(i.arity)(", ")(i.c._1)(")");
    if (i.c.tag === "CComp") {
      const t = Mi.disp(i.c._1);
      return ns((() => {
        const e = pn(Mi), n = (s) => (r) => {
          const o = e.disp(r);
          return (l) => (a) => s(a) + o(a) + l;
        };
        return { i: (s) => n((r) => s), iStr: (s) => (r) => n((o) => s(o) + r) };
      })()).iStr((e) => "comp(" + t(e) + ", ")(i.arity)(", ")(Re(", ", i.c._2))(")");
    }
    if (i.c.tag === "CRec") {
      const t = Mi.disp(i.c._1), e = Mi.disp(i.c._2);
      return (n) => "rec(" + t(n) + ", " + e(n) + ")";
    }
    B();
  }
}, wk = (i) => (t) => {
  const e = Mi.disp(t);
  return (n) => (s) => i + e(s) + n;
}, kk = {
  disp: (i) => {
    if (i.tag === "SAsn")
      return i._3 ? vk("var ")(i._1)(" = ")(i._2)(`;
`) : xk(i._1)(" = ")(i._2)(`;
`);
    if (i.tag === "SFor") {
      const t = Ue((e) => e.indent);
      return li((() => {
        const e = vg({
          i: (n) => (s) => {
            const r = Wr.disp(s);
            return (o) => n + r(o);
          },
          iStr: (n) => (s) => (r) => {
            const o = Wr.disp(r);
            return (l) => n(l) + s + o(l);
          }
        });
        return { i: (n) => e.iStr((s) => n), iStr: (n) => (s) => e.iStr((r) => n(r) + s) };
      })()).iStr((e) => t(e) + "for ")(i._1)(" < ")(i._2)(" ")(i._3);
    }
    B();
  }
}, Wr = {
  disp: (i) => {
    const t = Za(pk(kk.disp)(i.stmt)), e = (() => {
      const n = gk(`}
`);
      return (s) => t(s) + n(s);
    })();
    return (n) => `{
` + e(n);
  }
}, Ck = /* @__PURE__ */ (() => {
  const i = bg((() => {
    const t = li({
      i: (e) => (n) => {
        const s = Wr.disp(n);
        return (r) => e + s(r);
      },
      iStr: (e) => (n) => (s) => {
        const r = Wr.disp(s);
        return (o) => e(o) + n + r(o);
      }
    });
    return { i: (e) => t.iStr((n) => e), iStr: (e) => (n) => t.iStr((s) => e(s) + n) };
  })());
  return (t) => i.iStr((e) => t);
})(), Tf = {
  disp: (i) => {
    if (i.tag === "FComp")
      return wk(" = ")(i._1)(`;
`);
    if (i.tag === "FValue")
      return Sk("(")(Re(", ", i._1))(") = ")(i._2)(`;
`);
    if (i.tag === "FImp")
      return Ck("(")(Re(", ", i._1))(") ")(i._2)(" ")(i._3);
    B();
  }
}, Ak = eh({
  i: (i) => Tf.disp(i),
  iStr: (i) => (t) => {
    const e = Tf.disp(t);
    return (n) => i(n) + e(n);
  }
}).i, Ok = {
  disp: (i) => {
    if (i.tag === "IFn")
      return Ak(i._1)(i._2);
    if (i.tag === "IEval")
      return nh.i("@eval(")(i._1)(`);
`);
    B();
  }
}, Mk = /* @__PURE__ */ (() => {
  const i = pn(Ok);
  return (t) => i.disp(t);
})(), Tk = (i) => mg(Mk(Re(`
`, i))), ie = (i, t, e) => ({ tag: i, _1: t, _2: e }), ih = /* @__PURE__ */ ie("BNil"), $k = (i) => (t) => ie("BAppend", i, t), Sg = { append: $k }, sh = { mempty: ih, Semigroup0: () => Sg }, Pk = (i) => (t) => $w.tailRecM((e) => {
  const n = () => {
    if (e.tag === "BSlice" && e._2 >= 0 && e._2 < e._1.length) {
      const r = e._1[e._2];
      return () => {
        t.push(r), i.push(ie("BSlice", e._1, e._2 + 1 | 0));
      };
    }
    if (e.tag === "BSlice")
      return () => {
      };
    if (e.tag === "BConcat") {
      if (e._1.tag === "Nil")
        return () => {
        };
      if (e._1.tag === "Cons") {
        const r = e._1._1, o = e._1._2;
        return () => {
          i.push(r), i.push(ie("BConcat", o));
        };
      }
      B();
    }
    if (e.tag === "BAppend") {
      const r = e._1, o = e._2;
      return () => {
        i.push(o), i.push(r);
      };
    }
    B();
  }, s = (() => {
    if (e.tag === "BNil")
      return () => {
      };
    if (e.tag === "BSingl") {
      const r = e._1;
      return () => {
        t.push(r);
      };
    }
    if (e.tag === "BCons") {
      const r = e._1, o = e._2;
      return () => {
        t.push(r), i.push(o);
      };
    }
    if (e.tag === "BList") {
      if (e._1.tag === "Nil")
        return () => {
        };
      if (e._1.tag === "Cons") {
        const r = e._1._1, o = e._1._2;
        return () => {
          t.push(r), i.push(ie("BList", o));
        };
      }
      return n();
    }
    return e.tag === "BArray" ? () => {
      i.push(ie("BSlice", e._1, 0));
    } : n();
  })();
  return () => {
    s();
    const r = Pw(pi, Ct, i);
    if (r.tag === "Nothing")
      return ue("Done", void 0);
    if (r.tag === "Just")
      return ue("Loop", r._1);
    B();
  };
}), wg = (i) => {
  const t = [];
  return Pk([])(t)(i)(), t;
};
function W(i, t, e) {
  this.datamap = i, this.nodemap = t, this.content = e;
}
W.prototype.lookup = function(t, e, n, s, r, o) {
  var l = ms(r, o);
  if ((this.datamap & l) !== 0) {
    var a = K(this.datamap, l);
    return n(s)(this.content[a * 2]) ? e(this.content[a * 2 + 1]) : t;
  }
  return (this.nodemap & l) !== 0 ? this.content[this.content.length - 1 - K(this.nodemap, l)].lookup(t, e, n, s, r, o + 5) : t;
};
function Dk(i, t, e, n) {
  for (var s = t; s < e; s++) i[s] = i[s + 2];
  for (i[s++] = n; s < i.length - 1; s++) i[s] = i[s + 1];
  i.length = i.length - 1;
}
W.prototype.insertMut = function(t, e, n, s, r, o) {
  var l = ms(s, o), a = K(this.datamap, l);
  if ((this.datamap & l) !== 0) {
    var h = this.content[a * 2];
    if (t(h)(n))
      this.content[a * 2 + 1] = r;
    else {
      var c = ys(h, e(h), this.content[a * 2 + 1], n, s, r, o + 5);
      this.datamap = this.datamap ^ l, this.nodemap = this.nodemap | l, Dk(this.content, a * 2, this.content.length - K(this.nodemap, l) - 2, c);
    }
  } else if ((this.nodemap & l) !== 0) {
    var f = this.content.length - 1 - K(this.nodemap, l);
    this.content[f].insertMut(t, e, n, s, r, o + 5);
  } else
    this.datamap = this.datamap | l, this.content.splice(a * 2, 0, n, r);
};
W.prototype.insert = function(t, e, n, s, r, o) {
  var l = ms(s, o), a = K(this.datamap, l);
  if ((this.datamap & l) !== 0) {
    var h = this.content[a * 2];
    if (t(h)(n))
      return new W(this.datamap, this.nodemap, Cg(this.content, a * 2, n, r));
    var c = ys(h, e(h), this.content[a * 2 + 1], n, s, r, o + 5);
    return new W(this.datamap ^ l, this.nodemap | l, Ag(this.content, a * 2, this.content.length - K(this.nodemap, l) - 2, c));
  }
  if ((this.nodemap & l) !== 0) {
    var f = this.content.length - 1 - K(this.nodemap, l);
    return new W(
      this.datamap,
      this.nodemap,
      Fe(
        this.content,
        f,
        this.content[f].insert(t, e, n, s, r, o + 5)
      )
    );
  }
  return new W(this.datamap | l, this.nodemap, Og(this.content, a * 2, n, r));
};
W.prototype.insertWith = function(t, e, n, s, r, o, l) {
  var a = ms(r, l), h = K(this.datamap, a);
  if ((this.datamap & a) !== 0) {
    var c = this.content[h * 2];
    if (t(c)(s))
      return new W(this.datamap, this.nodemap, Cg(this.content, h * 2, s, n(this.content[h * 2 + 1])(o)));
    var f = ys(c, e(c), this.content[h * 2 + 1], s, r, o, l + 5);
    return new W(this.datamap ^ a, this.nodemap | a, Ag(this.content, h * 2, this.content.length - K(this.nodemap, a) - 2, f));
  }
  if ((this.nodemap & a) !== 0) {
    var u = this.content.length - 1 - K(this.nodemap, a);
    return new W(
      this.datamap,
      this.nodemap,
      Fe(
        this.content,
        u,
        this.content[u].insertWith(t, e, n, s, r, o, l + 5)
      )
    );
  }
  return new W(this.datamap | a, this.nodemap, Og(this.content, h * 2, s, o));
};
W.prototype.delet = function(t, e, n, s) {
  var r = ms(n, s);
  if ((this.datamap & r) !== 0) {
    var o = K(this.datamap, r);
    return t(this.content[o * 2])(e) ? this.nodemap === 0 && this.content.length === 2 ? ae : new W(this.datamap ^ r, this.nodemap, Rk(this.content, o * 2)) : this;
  }
  if ((this.nodemap & r) !== 0) {
    var l = K(this.nodemap, r), a = this.content[this.content.length - 1 - l], h = a.delet(t, e, n, s + 5);
    return a === h ? this : h.isSingleton() ? this.content.length === 1 ? (h.datamap = this.nodemap, h) : new W(
      this.datamap | r,
      this.nodemap ^ r,
      Bk(this.content, 2 * K(this.datamap, r), h.content[0], h.content[1], this.content.length - 1 - l)
    ) : new W(this.datamap, this.nodemap, Fe(this.content, this.content.length - 1 - l, h));
  }
  return this;
};
W.prototype.toArrayBy = function(i, t) {
  for (var e = 0; e < le(this.datamap) * 2; ) {
    var n = this.content[e++], s = this.content[e++];
    t.push(i(n)(s));
  }
  for (; e < this.content.length; e++)
    this.content[e].toArrayBy(i, t);
};
W.prototype.isSingleton = function() {
  return this.nodemap === 0 && this.content.length === 2;
};
W.prototype.eq = function(i, t, e) {
  if (this === e) return !0;
  if (this.constructor !== e.constructor || this.nodemap !== e.nodemap || this.datamap !== e.datamap) return !1;
  for (var n = 0; n < le(this.datamap) * 2; ) {
    if (i(this.content[n])(e.content[n])) n++;
    else return !1;
    if (t(this.content[n])(e.content[n])) n++;
    else return !1;
  }
  for (; n < this.content.length; n++)
    if (!this.content[n].eq(i, t, e.content[n])) return !1;
  return !0;
};
W.prototype.hash = function(i) {
  for (var t = this.datamap, e = 0; e < le(this.datamap); e++)
    t = t * 31 + i(this.content[e * 2 + 1]) | 0;
  for (var n = 0; n < le(this.nodemap); n++)
    t = t * 31 + this.content[this.content.length - n - 1].hash(i) | 0;
  return t;
};
W.prototype.size = function() {
  for (var i = le(this.datamap), t = i * 2; t < this.content.length; t++) i += this.content[t].size();
  return i;
};
W.prototype.imap = function(i) {
  for (var t = this.content.slice(), e = 0; e < le(this.datamap) * 2; ) {
    var n = this.content[e++], s = this.content[e++];
    t[e - 2] = n, t[e - 1] = i(n)(s);
  }
  for (; e < this.content.length; e++)
    t[e] = this.content[e].imap(i);
  return new W(this.datamap, this.nodemap, t);
};
W.prototype.ifoldMap = function(i, t, e) {
  for (var n = 0; n < le(this.datamap) * 2; ) {
    var s = this.content[n++], r = this.content[n++];
    i = t(i)(e(s)(r));
  }
  for (; n < this.content.length; n++)
    i = this.content[n].ifoldMap(i, t, e);
  return i;
};
function rh(i) {
  return i & -i;
}
function kg(i, t, e, n, s) {
  var r = 0;
  return r |= (i & t) !== 0 ? 1 : 0, r |= (i & e) !== 0 ? 2 : 0, r |= (i & n) !== 0 ? 4 : 0, r |= (i & s) !== 0 ? 8 : 0, r;
}
W.prototype.unionWith = function(i, t, e, n, s) {
  if (this.constructor !== n.constructor)
    throw "Trying to union a MapNode with something else";
  for (var r, o, l, a, h = 0, c = 0, f = [], u = [], d = this.datamap | this.nodemap | n.datamap | n.nodemap; d !== 0; ) {
    var p = rh(d);
    switch (d &= ~p, kg(p, this.nodemap, this.datamap, n.nodemap, n.datamap)) {
      case 1:
        l = K(this.nodemap, p), c |= p, u.push(this.content[this.content.length - l - 1]);
        break;
      case 2:
        r = K(this.datamap, p), h |= p, f.push(this.content[r * 2], this.content[r * 2 + 1]);
        break;
      case 4:
        a = K(n.nodemap, p), c |= p, u.push(n.content[n.content.length - a - 1]);
        break;
      case 5:
        l = K(this.nodemap, p), a = K(n.nodemap, p), c |= p, u.push(
          this.content[this.content.length - l - 1].unionWith(i, t, e, n.content[n.content.length - a - 1], s + 5)
        );
        break;
      case 6:
        r = K(this.datamap, p), a = K(n.nodemap, p);
        var g = this.content[r * 2], y = this.content[r * 2 + 1], b = t(g), m = function(S) {
          return function(w) {
            return e(w)(S);
          };
        };
        c |= p, u.push(n.content[n.content.length - a - 1].insertWith(i, t, m, g, b, y, s + 5));
        break;
      case 8:
        o = K(n.datamap, p), h |= p, f.push(n.content[o * 2], n.content[o * 2 + 1]);
        break;
      case 9:
        o = K(n.datamap, p), l = K(this.nodemap, p);
        var g = n.content[o * 2], y = n.content[o * 2 + 1], b = t(g);
        c |= p, u.push(this.content[this.content.length - l - 1].insertWith(i, t, e, g, b, y, s + 5));
        break;
      case 10:
        r = K(this.datamap, p), o = K(n.datamap, p), i(this.content[r * 2])(n.content[o * 2]) ? (h |= p, f.push(this.content[r * 2], e(this.content[r * 2 + 1])(n.content[o * 2 + 1]))) : (c |= p, u.push(ys(
          this.content[r * 2],
          t(this.content[r * 2]),
          this.content[r * 2 + 1],
          n.content[o * 2],
          t(n.content[o * 2]),
          n.content[o * 2 + 1],
          s + 5
        )));
        break;
    }
  }
  return new W(h, c, f.concat(u.reverse()));
};
W.prototype.intersectionWith = function(i, t, e, n, s, r, o) {
  if (this.constructor !== r.constructor)
    throw "Trying to intersect a MapNode with something else";
  for (var l, a, h, c, f = 0, u = 0, d = [], p = [], m = (this.datamap | this.nodemap) & (r.datamap | r.nodemap); m !== 0; ) {
    var g = rh(m);
    switch (m &= ~g, kg(g, this.nodemap, this.datamap, r.nodemap, r.datamap)) {
      case 5:
        h = K(this.nodemap, g), c = K(r.nodemap, g);
        var y = this.content[this.content.length - h - 1].intersectionWith(i, t, e, n, s, r.content[r.content.length - c - 1], o + 5);
        if ($g(y)) continue;
        y.isSingleton() ? (f |= g, d.push(y.content[0], y.content[1])) : (u |= g, p.push(y));
        break;
      case 6:
        l = K(this.datamap, g), c = K(r.nodemap, g);
        var b = this.content[l * 2], S = this.content[l * 2 + 1], w = n(b), v = r.content[r.content.length - c - 1].lookup(i, t, e, b, w, o + 5);
        v !== i && (f |= g, d.push(b, s(S)(v.value0)));
        break;
      case 9:
        a = K(r.datamap, g), h = K(this.nodemap, g);
        var b = r.content[a * 2], S = r.content[a * 2 + 1], w = n(b), v = this.content[this.content.length - h - 1].lookup(i, t, e, b, w, o + 5);
        v !== i && (f |= g, d.push(b, s(v.value0)(S)));
        break;
      case 10:
        l = K(this.datamap, g), a = K(r.datamap, g), e(this.content[l * 2])(r.content[a * 2]) && (f |= g, d.push(this.content[l * 2], s(this.content[l * 2 + 1])(r.content[a * 2 + 1])));
        break;
    }
  }
  return new W(f, u, d.concat(p.reverse()));
};
W.prototype.filterWithKey = function(t) {
  for (var e = 0, n = 0, s = [], r = [], o = this.datamap | this.nodemap; o !== 0; ) {
    var l = rh(o);
    if (o &= ~l, (this.datamap & l) !== 0) {
      var a = K(this.datamap, l), h = this.content[a * 2], c = this.content[a * 2 + 1];
      t(h)(c) && (e |= l, s.push(h, c));
    } else {
      var f = K(this.nodemap, l), u = this.content[this.content.length - f - 1].filterWithKey(t);
      if ($g(u)) continue;
      u.isSingleton() ? (e |= l, s.push(u.content[0], u.content[1])) : (n |= l, r.push(u));
    }
  }
  return new W(e, n, s.concat(r.reverse()));
};
W.prototype.travHelper = function() {
  function i(n, s, r, o, l) {
    return n < s ? function(a) {
      return i(n + 1, s, r, o, function() {
        var h = l();
        return h.content[n * 2 + 1] = a, h;
      });
    } : r < o ? function(a) {
      return i(n, s, r + 1, o, function() {
        var h = l();
        return h.content[s * 2 + r] = a, h;
      });
    } : l();
  }
  var t = le(this.datamap), e = this;
  return i(0, t, 0, this.content.length - t * 2, function() {
    return new W(e.datamap, e.nodemap, e.content.slice());
  });
};
W.prototype.ifoldMap = function(i, t, e) {
  for (var n = 0; n < le(this.datamap) * 2; ) {
    var s = this.content[n++], r = this.content[n++];
    i = t(i)(e(s)(r));
  }
  for (; n < this.content.length; n++)
    i = this.content[n].ifoldMap(i, t, e);
  return i;
};
W.prototype.itraverse = function(i, t, e) {
  for (var n = i(this.travHelper()), s = 0; s < le(this.datamap) * 2; ) {
    var r = this.content[s++], o = this.content[s++];
    n = t(n)(e(r)(o));
  }
  for (; s < this.content.length; s++)
    n = t(n)(this.content[s].itraverse(i, t, e));
  return n;
};
W.prototype.any = function(i) {
  for (var t = 1; t < le(this.datamap) * 2; t = t + 2) {
    var e = this.content[t];
    if (i(e))
      return !0;
  }
  for (t--; t < this.content.length; t++)
    if (this.content[t].any(i))
      return !0;
  return !1;
};
function Y(i, t) {
  this.keys = i, this.values = t;
}
Y.prototype.lookup = function(t, e, n, s, r, o) {
  for (var l = 0; l < this.keys.length; l++)
    if (n(s)(this.keys[l]))
      return e(this.values[l]);
  return t;
};
Y.prototype.insert = function(t, e, n, s, r, o) {
  for (var l = 0; l < this.keys.length && !t(n)(this.keys[l]); l++)
    ;
  return new Y(
    Fe(this.keys, l, n),
    Fe(this.values, l, r)
  );
};
Y.prototype.insertMut = function(t, e, n, s, r, o) {
  for (var l = 0; l < this.keys.length && !t(n)(this.keys[l]); l++)
    ;
  this.keys[l] = n, this.values[l] = r;
};
Y.prototype.insertWith = function(t, e, n, s, r, o, l) {
  for (var a = 0; a < this.keys.length; a++)
    if (t(s)(this.keys[a]))
      return new Y(
        Fe(this.keys, a, s),
        Fe(this.values, a, n(this.values[a])(o))
      );
  return new Y(
    Fe(this.keys, a, s),
    Fe(this.values, a, o)
  );
};
Y.prototype.delet = function(t, e, n, s) {
  for (var r = 0; r < this.keys.length && !t(e)(this.keys[r]); r++)
    ;
  return r === this.keys.length ? this : this.keys.length === 2 ? new W(1 << (n & 31), 0, [this.keys[1 - r], this.values[1 - r]]) : new Y($f(this.keys, r), $f(this.values, r));
};
Y.prototype.toArrayBy = function(i, t) {
  for (var e = 0; e < this.keys.length; e++)
    t.push(i(this.keys[e])(this.values[e]));
};
Y.prototype.isSingleton = function() {
  return !1;
};
Y.prototype.eq = function(i, t, e) {
  if (this.constructor !== e.constructor || this.keys.length !== e.keys.length) return !1;
  t:
    for (var n = 0; n < this.keys.length; n++)
      for (var s = 0; s < e.keys.length; s++)
        if (i(this.keys[n])(e.keys[s])) {
          if (t(this.values[n])(e.values[s]))
            continue t;
          return !1;
        }
  return !0;
};
Y.prototype.hash = function(i) {
  for (var t = 0, e = 0; e < this.values.length; e++)
    t += i(this.values[e]);
  return t;
};
Y.prototype.size = function() {
  return this.keys.length;
};
Y.prototype.imap = function(i) {
  for (var t = this.values.slice(), e = 0; e < this.values.length; e++)
    t[e] = i(this.keys[e])(this.values[e]);
  return new Y(this.keys, t);
};
Y.prototype.ifoldMap = function(i, t, e) {
  for (var n = 0; n < this.keys.length; n++)
    i = t(i)(e(this.keys[n])(this.values[n]));
  return i;
};
Y.prototype.travHelper = function() {
  function i(e, n, s) {
    return e < n ? function(r) {
      return i(e + 1, n, function() {
        var o = s();
        return o.values[e] = r, o;
      });
    } : s();
  }
  var t = this;
  return i(0, this.keys.length, function() {
    return new Y(t.keys, t.values.slice());
  });
};
Y.prototype.itraverse = function(i, t, e) {
  for (var n = i(this.travHelper()), s = 0; s < this.keys.length; s++)
    n = t(n)(e(this.keys[s])(this.values[s]));
  return n;
};
Y.prototype.unionWith = function(i, t, e, n, s) {
  if (n.constructor !== Y)
    throw "Trying to union a Collision with something else";
  var r = [], o = [], l = Array(n.keys.length).fill(!1);
  t:
    for (var a = 0; a < this.keys.length; a++) {
      for (var h = 0; h < n.keys.length; h++)
        if (i(this.keys[a])(n.keys[h])) {
          r.push(this.keys[a]), o.push(e(this.values[a])(n.values[h])), l[h] = !0;
          continue t;
        }
      r.push(this.keys[a]), o.push(this.values[a]), l[h] = !0;
    }
  for (var c = 0; c < n.keys.length; c++)
    l[c] || (r.push(n.keys[c]), o.push(n.values[c]));
  return new Y(r, o);
};
Y.prototype.intersectionWith = function(i, t, e, n, s, r, o) {
  if (r.constructor !== Y)
    throw "Trying to intersect a Collision with something else";
  var l = [], a = [];
  t:
    for (var h = 0; h < this.keys.length; h++)
      for (var c = 0; c < r.keys.length; c++)
        if (e(this.keys[h])(r.keys[c])) {
          l.push(this.keys[h]), a.push(s(this.values[h])(r.values[c]));
          continue t;
        }
  return l.length === 0 ? ae : l.length === 1 ? new W(1, 0, [l[0], a[0]]) : new Y(l, a);
};
Y.prototype.filterWithKey = function(t) {
  for (var e = [], n = [], s = 0; s < this.keys.length; s++) {
    var r = this.keys[s], o = this.values[s];
    t(r)(o) && (e.push(r), n.push(o));
  }
  return e.length === 0 ? ae : e.length === 1 ? new W(1, 0, [e[0], n[0]]) : new Y(e, n);
};
Y.prototype.any = function(i) {
  for (var t = 0; t < this.keys.length; t++)
    if (i(this.values[t]))
      return !0;
  return !1;
};
function ms(i, t) {
  return 1 << (i >>> t & 31);
}
function K(i, t) {
  return le(i & t - 1);
}
function le(i) {
  return i = i - (i >> 1 & 1431655765), i = (i & 858993459) + (i >> 2 & 858993459), (i + (i >> 4) & 252645135) * 16843009 >> 24;
}
function ys(i, t, e, n, s, r, o) {
  if (o >= 32) return new Y([i, n], [e, r]);
  var l = t >>> o & 31, a = s >>> o & 31;
  return l !== a ? new W(1 << l | 1 << a, 0, l >>> 0 < a >>> 0 ? [i, e, n, r] : [n, r, i, e]) : new W(0, 1 << l, [ys(i, t, e, n, s, r, o + 5)]);
}
function Cg(i, t, e, n) {
  var s = i.slice();
  return s[t] = e, s[t + 1] = n, s;
}
function Rk(i, t) {
  var e = i.slice();
  return e.splice(t, 2), e;
}
function $f(i, t) {
  var e = i.slice();
  return e.splice(t, 1), e;
}
function Fe(i, t, e) {
  var n = i.slice();
  return n[t] = e, n;
}
function Ag(i, t, e, n) {
  for (var s = new Array(i.length - 1), r = 0; r < t; r++) s[r] = i[r];
  for (; r < e; r++) s[r] = i[r + 2];
  for (s[r++] = n; r < s.length; r++) s[r] = i[r + 1];
  return s;
}
function Og(i, t, e, n) {
  for (var s = new Array(i.length + 2), r = 0; r < t; r++) s[r] = i[r];
  for (s[r++] = e, s[r++] = n; r < s.length; r++) s[r] = i[r - 2];
  return s;
}
function Bk(i, t, e, n, s) {
  for (var r = new Array(i.length + 1), o = 0; o < t; o++) r[o] = i[o];
  for (r[o++] = e, r[o++] = n; o < s + 2; o++) r[o] = i[o - 2];
  for (; o < r.length; o++) r[o] = i[o - 1];
  return r;
}
const ae = new W(0, 0, []);
function Lk(i, t, e, n, s) {
  return function(r) {
    return r.lookup(i, t, e, n, s, 0);
  };
}
function Mg(i, t) {
  return function(e) {
    return function(n) {
      return function(s) {
        for (var r = new W(0, 0, []), o = 0; o < s.length; o++) {
          var l = s[o], a = e(l);
          r.insertMut(i, t, a, t(a), n(l), 0);
        }
        return r;
      };
    };
  };
}
function So(i, t) {
  return function(e) {
    return function(n) {
      return function(s) {
        return s.insert(i, t, e, t(e), n, 0);
      };
    };
  };
}
function Ek(i, t, e) {
  return function(n) {
    return n.delet(i, t, e, 0);
  };
}
function Tg(i, t, e) {
  return function(n) {
    return function(s) {
      return n.unionWith(i, t, e, s, 0);
    };
  };
}
function Ik(i) {
  return function(t) {
    var e = [];
    return t.toArrayBy(i, e), e;
  };
}
function Pf(i) {
  return function(t) {
    return function(e) {
      return new W(1 << (t & 31), 0, [i, e]);
    };
  };
}
function $g(i) {
  return i.datamap === 0 && i.nodemap === 0;
}
function Hr(i) {
  return i.size();
}
function oh(i) {
  return function(t) {
    return function(e) {
      return function(n) {
        return n.ifoldMap(i, t, e);
      };
    };
  };
}
const _k = (i) => {
  const t = i.Eq0().eq, e = i.hash;
  return (n) => Tg(t, e, n);
}, wo = (i) => {
  const t = i.Eq0().eq;
  return (e) => Lk(Ct, pi, t, e, i.hash(e));
}, Nk = /* @__PURE__ */ Ik(Ja), zr = {
  foldMapWithIndex: (i) => oh(i.mempty)(i.Semigroup0().append),
  foldrWithIndex: (i) => pg(zr)(i),
  foldlWithIndex: (i) => dg(zr)(i),
  Foldable0: () => ra
}, ra = {
  foldMap: (i) => (t) => oh(i.mempty)(i.Semigroup0().append)((e) => t),
  foldr: (i) => Iw(ra)(i),
  foldl: (i) => Ew(ra)(i)
}, Fk = (i) => {
  const t = i.Eq0().eq;
  return (e) => Ek(t, e, i.hash(e));
}, Vk = (i) => {
  const t = Fk(i);
  return (e) => (n) => ig(t)(e)(Nk(n));
};
function Ii(i) {
  return i.charCodeAt(0);
}
function Wk(i) {
  return String.fromCharCode(i);
}
function ko(i) {
  for (var t = 0, e = 0; e < i.length; e++)
    t = 31 * t + i.charCodeAt(e) | 0;
  return t;
}
const Hk = { hash: ko, Eq0: () => Nw }, Pg = {
  foldr: (i) => (t) => (e) => pg(zr)((n) => (s) => i(n))(t)(e),
  foldl: (i) => (t) => (e) => dg(zr)((n) => (s) => (r) => i(s)(n))(t)(e),
  foldMap: (i) => {
    const t = oh(i.mempty)(i.Semigroup0().append);
    return (e) => (n) => t((s) => (r) => e(s))(n);
  }
}, zk = (i) => {
  const t = {
    append: (() => {
      const e = _k(i);
      return (n) => (s) => e(Ja)(n)(s);
    })()
  };
  return { mempty: ae, Semigroup0: () => t };
}, qr = At(Q).pure, Df = /* @__PURE__ */ _t(Q), Js = /* @__PURE__ */ zk(In), qk = Ke.foldMap(ww(Q)((() => {
  const i = Js.Semigroup0(), t = Js.Semigroup0(), e = { append: (n) => (s) => ({ glob: i.append(n.glob)(s.glob), loc: t.append(n.loc)(s.loc) }) };
  return { mempty: { glob: Js.mempty, loc: Js.mempty }, Semigroup0: () => e };
})())), Qk = /* @__PURE__ */ Vk(In), Dg = /* @__PURE__ */ dn(Q), Kk = So(Jp.eq, Gp.hash), jk = (i) => {
  if (i.tag === "SAsn")
    return i._3 ? qr({ glob: ae, loc: Pf(i._1)(i._1.id)() }) : qr({ glob: Pf(i._1)(i._1.id)(), loc: ae });
  if (i.tag === "SFor")
    return Rg(i._3);
  B();
}, Rg = (i) => Df.bind(qk(jk)(i.stmt))((t) => {
  const e = Qk(t.glob)(t.loc);
  return Df.bind(Dg.state((n) => L(void 0, { ...n, map: Kk(i)(e)(n.map) })))(() => qr({ glob: e, loc: ae }));
}), Uk = (i) => i.tag === "FImp" ? bo({ map: ae })((() => {
  const t = mo(Q);
  return t.apply(t.Functor0().map((e) => Xp)(Rg(i._3)))(Dg.state((e) => L(e.map, e)));
})()) : qr(ae), oa = function(i) {
  var t = null;
  return function() {
    return i === void 0 || (t = i(), i = void 0), t;
  };
}, lh = function(i) {
  return i();
}, bs = (i) => ({
  bind: (t) => (e) => i.Bind1().bind(t)((n) => {
    if (n.tag === "Left")
      return i.Applicative0().pure(ct("Left", n._1));
    if (n.tag === "Right")
      return e(n._1);
    B();
  }),
  Apply0: () => Bg(i)
}), Bg = (i) => {
  const t = i.Bind1().Apply0().Functor0(), e = {
    map: (n) => t.map((s) => {
      if (s.tag === "Left")
        return ct("Left", s._1);
      if (s.tag === "Right")
        return ct("Right", n(s._1));
      B();
    })
  };
  return {
    apply: (() => {
      const n = bs(i);
      return (s) => (r) => n.bind(s)((o) => n.bind(r)((l) => Co(i).pure(o(l))));
    })(),
    Functor0: () => e
  };
}, Co = (i) => ({ pure: (t) => i.Applicative0().pure(ct("Right", t)), Apply0: () => Bg(i) }), Jk = (i) => {
  const t = i.Monad0(), e = { Applicative0: () => Co(t), Bind1: () => bs(t) };
  return {
    tailRecM: (n) => i.tailRecM((s) => t.Bind1().bind(n(s))((r) => t.Applicative0().pure((() => {
      if (r.tag === "Left")
        return ue("Done", ct("Left", r._1));
      if (r.tag === "Right") {
        if (r._1.tag === "Loop")
          return ue("Loop", r._1._1);
        if (r._1.tag === "Done")
          return ue("Done", ct("Right", r._1._1));
      }
      B();
    })()))),
    Monad0: () => e
  };
}, Gk = (i) => {
  const t = i.Monad0(), e = { Applicative0: () => Co(t), Bind1: () => bs(t) };
  return { state: (n) => t.Bind1().bind(i.state(n))((s) => t.Applicative0().pure(ct("Right", s))), Monad0: () => e };
}, Xk = (i) => {
  const t = { Applicative0: () => Co(i), Bind1: () => bs(i) };
  return { throwError: (e) => i.Applicative0().pure(ct("Left", e)), Monad0: () => t };
}, Lg = function(i) {
  return function(t) {
    if (t === 0) return 0;
    var e = Math.abs(t);
    return (i % e + e) % e;
  };
}, _i = function(i) {
  return function(t) {
    if (i >= 0 && i < t.length) return t.charAt(i);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
}, Yk = function(i) {
  return i;
}, vs = function(i) {
  return i.length;
}, Zk = function(i) {
  return function(t) {
    return function(e) {
      return function(n) {
        var s = n.lastIndexOf(e);
        return s === -1 ? t : i(s);
      };
    };
  };
}, tC = function(i) {
  return function(t) {
    return t.substr(0, i);
  };
}, Qr = function(i) {
  return function(t) {
    return t.substring(i);
  };
}, eC = function(i) {
  return function(t) {
    return { before: t.substring(0, i), after: t.substring(i) };
  };
}, nC = (i) => (t) => {
  const e = eC(vs(i))(t);
  return e.before === i ? It("Just", e.after) : Ct;
}, iC = /* @__PURE__ */ Zk(pi)(Ct);
var sC = typeof Array.from == "function", rC = typeof Symbol < "u" && Symbol != null && typeof Symbol.iterator < "u" && typeof String.prototype[Symbol.iterator] == "function", oC = typeof String.prototype.fromCodePoint == "function", lC = typeof String.prototype.codePointAt == "function";
const aC = function(i) {
  return lC ? function(t) {
    return t.codePointAt(0);
  } : i;
}, hC = function(i) {
  return oC ? String.fromCodePoint : i;
}, cC = function(i) {
  return function(t) {
    return rC ? function(e) {
      for (var n = "", s = e[Symbol.iterator](), r = 0; r < t; ++r) {
        var o = s.next();
        if (o.done) return n;
        n += o.value;
      }
      return n;
    } : i(t);
  };
}, fC = function(i) {
  return function(t) {
    return sC ? function(e) {
      return Array.from(e, t);
    } : i;
  };
}, ah = (i) => {
  const t = vs(i);
  if (t === 0)
    return Ct;
  if (t === 1)
    return It("Just", { head: Ii(_i(0)(i)), tail: "" });
  const e = Ii(_i(1)(i)), n = Ii(_i(0)(i));
  return 55296 <= n && n <= 56319 && 56320 <= e && e <= 57343 ? It("Just", { head: (((n - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0, tail: Qr(2)(i) }) : It("Just", { head: n, tail: Qr(1)(i) });
}, uC = (i) => {
  const t = ah(i);
  return t.tag === "Just" ? It("Just", L(t._1.head, t._1.tail)) : Ct;
}, dC = (i) => lg.unfoldr(uC)(i), pC = (i) => {
  const t = Ii(_i(0)(i));
  if (55296 <= t && t <= 56319 && vs(i) > 1) {
    const e = Ii(_i(1)(i));
    if (56320 <= e && e <= 57343)
      return (((t - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0;
  }
  return t;
}, Eg = /* @__PURE__ */ aC(pC), gC = /* @__PURE__ */ fC(dC)(Eg), mC = (i) => (t) => {
  const e = iC(i)(t);
  return e.tag === "Just" ? It("Just", gC(tC(e._1)(t)).length) : Ct;
}, rl = (i) => Yk(i >= 0 && i <= 65535 ? Wk(i) : i < 0 ? "\0" : "￿"), yC = (i) => i <= 65535 ? rl(i) : rl(jS(i - 65536 | 0, 1024) + 55296 | 0) + rl(Lg(i - 65536 | 0)(1024) + 56320 | 0), bC = /* @__PURE__ */ hC(yC), Ig = (i) => (t) => {
  if (i < 1)
    return "";
  const e = ah(t);
  return e.tag === "Just" ? bC(e._1.head) + Ig(i - 1 | 0)(e._1.tail) : t;
}, vC = /* @__PURE__ */ cC(Ig), xC = (i) => (t) => {
  const e = vC(i)(t);
  return { before: e, after: Qr(vs(e))(t) };
}, SC = (i) => (t) => t === "" ? Ct : It("Just", Eg(t)), wC = { global: !1, ignoreCase: !1, multiline: !1, dotAll: !1, sticky: !1, unicode: !0 }, hh = (i, t) => ({ tag: "ParseError", _1: i, _2: t }), qt = (i, t, e) => ({ tag: "ParseState", _1: i, _2: t, _3: e }), Kr = (i, t, e) => ({ tag: i, _1: t, _2: e }), kC = (i) => Kr("More", i), CC = (i) => Kr("Lift", i), ch = {
  defer: (i) => {
    const t = oa(i);
    return (e, n, s, r, o) => lh(t)(e, n, s, r, o);
  }
}, AC = { map: (i) => (t) => (e, n, s, r, o) => n((l) => t(e, n, s, r, (a, h) => n((c) => o(a, i(h))))) }, _g = {
  apply: (i) => (t) => (e, n, s, r, o) => n((l) => i(
    e,
    n,
    s,
    r,
    (a, h) => n((c) => t(a, n, s, r, (f, u) => n((d) => o(f, h(u)))))
  )),
  Functor0: () => AC
}, OC = {
  bind: (i) => (t) => (e, n, s, r, o) => n((l) => i(e, n, s, r, (a, h) => n((c) => t(h)(a, n, s, r, o)))),
  Apply0: () => _g
}, MC = { pure: (i) => (t, e, n, s, r) => r(t, i), Apply0: () => _g }, TC = { Applicative0: () => MC, Bind1: () => OC }, $C = (i) => {
  const t = i.Monad0();
  return {
    state: (e) => {
      const n = i.state(e);
      return (s, r, o, l, a) => o(t.Bind1().Apply0().Functor0().map((h) => (c) => a(s, h))(n));
    },
    Monad0: () => TC
  };
}, PC = (i) => {
  const t = i.Monad0();
  return (e) => (n) => {
    const s = (r) => {
      let o = r, l = !0, a;
      for (; l; ) {
        const c = o();
        if (c.tag === "More") {
          o = c._1;
          continue;
        }
        if (c.tag === "Lift") {
          l = !1, a = t.Bind1().Apply0().Functor0().map(bw)(c._1);
          continue;
        }
        if (c.tag === "Stop") {
          l = !1, a = t.Applicative0().pure(ue("Done", L(c._2, c._1)));
          continue;
        }
        B();
      }
      return a;
    };
    return i.tailRecM(s)((r) => n(
      e,
      kC,
      CC,
      (o, l) => Kr("Stop", o, ct("Left", l)),
      (o, l) => Kr("Stop", o, ct("Right", l))
    ));
  };
}, la = (i, t, e, n, s) => s(i, i._2), DC = { index: 0, line: 1, column: 1 }, RC = (i) => {
  const t = PC(i);
  return (e) => (n) => i.Monad0().Bind1().Apply0().Functor0().map(go)(t(qt(e, DC, !1))(n));
}, BC = (i) => (t, e, n, s, r) => e((o) => la(
  t,
  e,
  n,
  s,
  (l, a) => e((h) => s(l, hh(i, a)))
)), Ng = (i, t, e, n, s) => s(qt(i._1, i._2, !0), void 0), fh = (i, t, e) => ({ tag: i, _1: t, _2: e }), Fg = /* @__PURE__ */ fh("Nil"), aa = {
  foldr: (i) => (t) => {
    const e = aa.foldl((r) => (o) => i(o)(r))(t), s = ((r) => (o) => {
      let l = r, a = o, h = !0, c;
      for (; h; ) {
        const f = l, u = a;
        if (u.tag === "Nil") {
          h = !1, c = f;
          continue;
        }
        if (u.tag === "Cons") {
          l = fh("Cons", u._1, f), a = u._2;
          continue;
        }
        B();
      }
      return c;
    })(Fg);
    return (r) => e(s(r));
  },
  foldl: (i) => (e) => (n) => {
    let s = e, r = n, o = !0, l;
    for (; o; ) {
      const a = s, h = r;
      if (h.tag === "Nil") {
        o = !1, l = a;
        continue;
      }
      if (h.tag === "Cons") {
        s = i(a)(h._1), r = h._2;
        continue;
      }
      B();
    }
    return l;
  },
  foldMap: (i) => {
    const t = i.mempty;
    return (e) => aa.foldl((n) => {
      const s = i.Semigroup0().append(n);
      return (r) => s(e(r));
    })(t);
  }
}, Vg = (i) => (t) => {
  const e = BC("Expected " + t);
  return (n, s, r, o, l) => {
    const a = n._1, h = n._2;
    return s((c) => i(
      qt(a, h, !1),
      s,
      r,
      (f, u) => {
        const d = f._3;
        return s((p) => d ? o(f, u) : e(n, s, r, o, l));
      },
      l
    ));
  };
}, uh = (i) => (t) => (e, n, s, r, o) => n((l) => {
  const a = (h, c, f) => {
    const u = (m, g) => {
      if (g.tag === "Loop")
        return f === 0 ? n((y) => a(m, g._1, 30)) : a(m, g._1, f - 1 | 0);
      if (g.tag === "Done") {
        const y = g._1;
        return n((b) => o(m, L(Hw(Vw(aa.foldr, y._1)), y._2)));
      }
      B();
    }, d = h._1, p = h._2;
    return n((m) => n((g) => t(
      qt(d, p, !1),
      n,
      s,
      (y, b) => {
        const S = y._3;
        return n((w) => S ? r(y, b) : n((v) => i(
          h,
          n,
          s,
          r,
          (C, k) => n((R) => u(C, ue("Loop", fh("Cons", k, c))))
        )));
      },
      (y, b) => n((S) => u(y, ue("Done", L(c, b))))
    )));
  };
  return a(e, Fg, 30);
}), LC = function(i) {
  return function(t) {
    return function(e) {
      return function(n) {
        try {
          return t(new RegExp(e, n));
        } catch (s) {
          return i(s.message);
        }
      };
    };
  };
}, EC = function(i) {
  return function(t) {
    return function(e) {
      return function(n) {
        var s = n.match(e);
        if (s == null || s.length === 0)
          return t;
        for (var r = 0; r < s.length; r++)
          s[r] = s[r] == null ? t : i(s[r]);
        return i(s);
      };
    };
  };
}, IC = (i) => (t) => LC(pw)(gw)(i)((t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.dotAll ? "s" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : "")), _C = /* @__PURE__ */ EC(pi)(Ct), Rf = (i) => (t) => (e) => {
  if (t === 10)
    return { index: i.index + 1 | 0, line: i.line + 1 | 0, column: 1 };
  if (t === 13) {
    const n = SC()(e);
    return n.tag === "Just" && n._1 === 10 ? { index: i.index + 1 | 0, line: i.line, column: i.column } : { index: i.index + 1 | 0, line: i.line + 1 | 0, column: 1 };
  }
  return t === 9 ? { index: i.index + 1 | 0, line: i.line, column: (i.column + 8 | 0) - Lg(i.column - 1 | 0)(8) | 0 } : { index: i.index + 1 | 0, line: i.line, column: i.column + 1 | 0 };
}, NC = (i) => (t) => (e) => {
  let n = i, s = t, r = e, o = !0, l;
  for (; o; ) {
    const a = n, h = s, c = r, f = ah(h);
    if (f.tag === "Nothing") {
      o = !1, l = a;
      continue;
    }
    if (f.tag === "Just") {
      n = f._1.tail === "" ? Rf(a)(f._1.head)(c) : Rf(a)(f._1.head)(f._1.tail), s = f._1.tail, r = c;
      continue;
    }
    B();
  }
  return l;
}, FC = (i, t, e, n, s) => i._1 === "" ? s(qt(i._1, i._2, !0), void 0) : n(i, hh("Expected EOF", i._2)), Wg = (i) => (t, e, n, s, r) => {
  const o = i(t._1);
  if (o.tag === "Left")
    return s(t, hh(o._1, t._2));
  if (o.tag === "Right")
    return r(qt(o._1.remainder, NC(t._2)(o._1.consumed)(o._1.remainder), o._1.consumed !== ""), o._1.value);
  B();
}, VC = (i) => (t) => {
  const e = IC("^(" + i + ")")(t);
  if (e.tag === "Left")
    return ct("Left", e._1);
  if (e.tag === "Right")
    return ct(
      "Right",
      (() => {
        const n = e._1;
        return Wg((s) => {
          const r = _C(n)(s);
          return r.tag === "Just" && (() => {
            if (0 < r._1.length)
              return r._1[0].tag === "Just";
            B();
          })() ? ct(
            "Right",
            {
              value: (() => {
                if (0 < r._1.length)
                  return r._1[0]._1;
                B();
              })(),
              consumed: (() => {
                if (0 < r._1.length)
                  return r._1[0]._1;
                B();
              })(),
              remainder: Qr(vs((() => {
                if (0 < r._1.length)
                  return r._1[0]._1;
                B();
              })()))(s)
            }
          ) : ct("Left", "No Regex pattern match");
        });
      })()
    );
  B();
}, WC = (i) => Wg((t) => {
  const e = nC(i)(t);
  return e.tag === "Just" ? ct("Right", { value: i, consumed: i, remainder: e._1 }) : ct("Left", "Expected " + US(i));
}), HC = function(i) {
  throw new Error(i);
}, Sn = (i, t) => ({ tag: "ConsP", _1: i, _2: t }), Hg = {
  Applicative0: () => At(Q),
  Bind1: () => _t(Q)
}, zC = (i) => (t, e, n, s, r) => n(bs(Hg).Apply0().Functor0().map((o) => (l) => r(t, o))(i)), qC = Xk(Hg).throwError, de = /* @__PURE__ */ $C(/* @__PURE__ */ Gk(/* @__PURE__ */ dn(Q))), zg = de.state((i) => L(i, i)), qg = /* @__PURE__ */ wo(Hk), QC = /* @__PURE__ */ vo(de), Qg = /* @__PURE__ */ Mg(yo, ko), KC = /* @__PURE__ */ RC(/* @__PURE__ */ Jk(/* @__PURE__ */ Sw(vw))), jC = /* @__PURE__ */ Tg(yo, ko, Ja), Kg = /* @__PURE__ */ So(yo, ko), jr = /* @__PURE__ */ (() => {
  const i = de.Monad0(), t = i.Bind1(), e = de.state((n) => L(n, n));
  return (n) => t.bind(e)((s) => {
    const r = s.l;
    return t.bind(n)((o) => t.bind(de.state((l) => L(void 0, { ...l, l: r })))(() => i.Applicative0().pure(o)));
  });
})(), jg = /* @__PURE__ */ (() => {
  const i = de.Monad0(), t = i.Bind1();
  return t.bind(de.state((e) => L(e.id, e)))((e) => t.bind(de.state((n) => L(void 0, { ...n, id: e + 1 | 0 })))(() => i.Applicative0().pure(e)));
})(), dh = (i) => {
  const t = VC(i)(wC);
  if (t.tag === "Left")
    return HC(t._1);
  if (t.tag === "Right")
    return t._1;
  B();
}, Ug = /* @__PURE__ */ (() => {
  const i = dh("(?:\\s*|#[^\\n]*)*");
  return (t, e, n, s, r) => e((o) => i(t, e, n, s, (l, a) => e((h) => r(l, void 0))));
})(), ph = (i) => (t, e, n, s, r) => e((o) => e((l) => e((a) => e((h) => i(
  t,
  e,
  n,
  s,
  (c, f) => e((u) => e((d) => Ug(
    c,
    e,
    n,
    s,
    (p, m) => e((g) => e((y) => e((b) => Ng(p, e, n, s, (S, w) => e((v) => r(S, f))))))
  )))
))))), $e = (i) => (t) => zC(qC({ from: t.from, to: t.to, severity: "error", message: i })), ht = (i) => ph((t, e, n, s, r) => e((o) => WC(i)(t, e, n, s, (l, a) => e((h) => r(l, void 0))))), Ao = {
  parenListRestP: (i) => (t, e, n, s, r) => e((o) => e((l) => i(
    t,
    e,
    n,
    s,
    (a, h) => e((c) => e((f) => ht(")")(a, e, n, s, (u, d) => e((p) => r(u, h)))))
  )))
}, gh = {
  parenListRestP: (i) => {
    const t = uh((e, n, s, r, o) => n((l) => n((a) => ht(",")(
      e,
      n,
      s,
      r,
      (h, c) => n((f) => n((u) => i(h, n, s, r, (d, p) => n((m) => o(d, p)))))
    ))))(ht(")"));
    return (e, n, s, r, o) => {
      const l = e._1, a = e._2;
      return n((h) => n((c) => n((f) => ht(")")(
        qt(l, a, !1),
        n,
        s,
        (u, d) => {
          const p = u._3;
          return n((m) => p ? r(u, d) : n((g) => n((y) => i(
            e,
            n,
            s,
            r,
            (b, S) => n((w) => n((v) => n((C) => t(
              b,
              n,
              s,
              r,
              (k, R) => n((E) => {
                const N = R._1;
                return n((I) => o(k, [S, ...N]));
              })
            ))))
          ))));
        },
        (u, d) => n((p) => n((m) => n((g) => o(u, []))))
      ))));
    };
  }
}, Jg = (i) => {
  const t = mC("$")(i);
  if (t.tag === "Just")
    return xC(t._1)(i).before;
  if (t.tag === "Nothing")
    return i;
  B();
}, Gg = (i) => (t, e, n, s, r) => e((o) => la(
  t,
  e,
  n,
  s,
  (l, a) => e((h) => {
    const c = a.index;
    return e((f) => i(
      l,
      e,
      n,
      s,
      (u, d) => e((p) => e((m) => la(
        u,
        e,
        n,
        s,
        (g, y) => e((b) => r(g, { span: { from: c, to: y.index }, r: d }))
      )))
    ));
  })
)), Ae = (i) => (t) => {
  const e = i.parenListRestP(t);
  return (n, s, r, o, l) => s((a) => s((h) => ht("(")(
    n,
    s,
    r,
    o,
    (c, f) => s((u) => s((d) => e(c, s, r, o, (p, m) => s((g) => l(p, m)))))
  )));
}, Ur = (i) => ({
  parenListRestP: (t) => {
    const e = i.parenListRestP(t._2);
    return (n, s, r, o, l) => s((a) => s((h) => s((c) => s((f) => t._1(
      n,
      s,
      r,
      o,
      (u, d) => s((p) => {
        const m = Ga(d);
        return s((g) => s((y) => ht(",")(
          u,
          s,
          r,
          o,
          (b, S) => s((w) => s((v) => e(b, s, r, o, (C, k) => s((R) => l(C, m(k))))))
        )));
      })
    )))));
  }
}), hr = /* @__PURE__ */ Ur(Ao), Xg = /* @__PURE__ */ ph(/* @__PURE__ */ Vg(/* @__PURE__ */ dh("[0-9]+"))("integer")), Yg = (i, t, e, n, s) => t((r) => Xg(
  i,
  t,
  e,
  n,
  (o, l) => t((a) => s(
    o,
    (() => {
      const h = lw(l);
      if (h.tag === "Just")
        return h._1;
      B();
    })()
  ))
)), Zg = (i) => {
  const t = i.r, e = i.span;
  return (n, s, r, o, l) => s((a) => zg(
    n,
    s,
    r,
    o,
    (h, c) => s((f) => {
      const u = qg(t)(c.l.var);
      if (u.tag === "Just")
        return l(h, u._1);
      if (u.tag === "Nothing")
        return $e("undefined variable")(e)(h, s, r, o, l);
      B();
    })
  ));
}, tm = (i) => {
  const t = i.r, e = i.span;
  return (n, s, r, o, l) => s((a) => zg(
    n,
    s,
    r,
    o,
    (h, c) => s((f) => {
      const u = qg(t)(c.l.fn);
      if (u.tag === "Just")
        return l(h, u._1);
      if (u.tag === "Nothing")
        return $e("undefined function")(e)(h, s, r, o, l);
      B();
    })
  ));
}, Gs = (i, t, e, n, s) => t((r) => Gg(Xg)(
  i,
  t,
  e,
  n,
  (o, l) => t((a) => {
    const h = tw(l.r);
    if (h.tag === "Just")
      return s(o, h._1);
    if (h.tag === "Nothing")
      return $e("integer overflow")(l.span)(o, t, e, n, s);
    B();
  })
)), ai = /* @__PURE__ */ ph(/* @__PURE__ */ Gg(/* @__PURE__ */ Vg(/* @__PURE__ */ dh("\\p{XIDS}[\\p{XIDC}$]*"))("name"))), hi = (i) => (t, e, n, s, r) => e((o) => ai(
  t,
  e,
  n,
  s,
  (l, a) => e((h) => {
    const c = a.r, f = QC(i)(Jg(c));
    return e((u) => f(l, e, n, s, (d, p) => e((m) => r(d, { ident: c, var: p }))));
  })
)), UC = { fn: /* @__PURE__ */ Qg((i) => i.name)(aw)([uw]), var: ae }, Oo = (i) => (t) => bo({ l: UC })((() => {
  const e = KC(t)(i);
  return (n) => {
    const s = e(n);
    return L(
      (() => {
        if (s._1.tag === "Left")
          return ct("Left", [s._1._1]);
        if (s._1.tag === "Right") {
          if (s._1._1.tag === "Left")
            return ct("Left", [{ from: s._1._1._1._2.index, to: s._1._1._1._2.index, message: s._1._1._1._1, severity: "error" }]);
          if (s._1._1.tag === "Right")
            return ct("Right", s._1._1._1);
        }
        B();
      })(),
      s._2
    );
  };
})()), Wn = /* @__PURE__ */ fo(() => ch.defer((i) => {
  const t = Ae(Ao)(Wn());
  return (e, n, s, r, o) => {
    const l = e._1, a = e._2;
    return n((h) => t(
      qt(l, a, !1),
      n,
      s,
      (c, f) => {
        const u = c._3;
        return n((d) => u ? r(c, f) : n((p) => ai(
          e,
          n,
          s,
          r,
          (m, g) => n((y) => {
            if (g.r === "cst") {
              const S = Ae(hr)(Sn(Gs, Yg));
              return n((w) => S(m, n, s, r, (v, C) => n((k) => o(v, { arity: C._1, c: te("CCst", C._2) }))));
            }
            if (g.r === "proj") {
              const S = g.span, w = Ae(hr)(Sn(Gs, Gs));
              return n((v) => w(
                m,
                n,
                s,
                r,
                (C, k) => n((R) => {
                  const E = k._1, N = k._2, I = N < E ? (M, _, T, F, z) => z(M, void 0) : $e("out of range")(S);
                  return n((M) => I(C, n, s, r, (_, T) => n((F) => o(_, { arity: E, c: te("CProj", N) }))));
                })
              ));
            }
            if (g.r === "comp") {
              const S = g.span, w = Ae(Ur(Ur(gh)))(Sn(Wn(), Sn(Gs, Wn())));
              return n((v) => w(
                m,
                n,
                s,
                r,
                (C, k) => n((R) => {
                  const E = k._2._1, N = k._1, I = k._2._2, M = k._1.arity === I.length ? (_, T, F, z, j) => j(_, void 0) : $e("inconsistent arity")(S);
                  return n((_) => M(
                    C,
                    n,
                    s,
                    r,
                    (T, F) => n((z) => {
                      const j = qw((Z) => Z.arity === E, I) ? (Z, G, it, gt, ut) => ut(Z, void 0) : $e("inconsistent arity")(S);
                      return n((Z) => j(T, n, s, r, (G, it) => n((gt) => o(G, { arity: E, c: te("CComp", N, I) }))));
                    })
                  ));
                })
              ));
            }
            if (g.r === "rec") {
              const S = g.span, w = Ae(hr)(Sn(Wn(), Wn()));
              return n((v) => w(
                m,
                n,
                s,
                r,
                (C, k) => n((R) => {
                  const E = k._1, N = k._1, I = k._2, M = (N.arity + 2 | 0) === k._2.arity ? (_, T, F, z, j) => j(_, void 0) : $e("inconsistent arity")(S);
                  return n((_) => M(C, n, s, r, (T, F) => n((z) => o(T, { arity: N.arity + 1 | 0, c: te("CRec", E, I) }))));
                })
              ));
            }
            const b = tm(g);
            return n((S) => b(m, n, s, r, (w, v) => n((C) => o(w, { arity: v.arity, c: te("CFn", v) }))));
          })
        )));
      },
      o
    ));
  };
})), JC = /* @__PURE__ */ Wn(), GC = (i) => {
  const t = jC(Qg((e) => e.ident)((e) => e.var)(i));
  return de.state((e) => L(void 0, { ...e, l: { ...e.l, var: t(e.l.var) } }));
}, is = (i) => {
  const t = i.ident, e = i.var;
  return de.state((n) => L(void 0, { ...n, l: { ...n.l, var: Kg(t)(e)(n.l.var) } }));
}, Hn = /* @__PURE__ */ fo(() => ch.defer((i) => {
  const t = Ae(Ao)(Hn());
  return (e, n, s, r, o) => {
    const l = e._1, a = e._2;
    return n((h) => t(
      qt(l, a, !1),
      n,
      s,
      (c, f) => {
        const u = c._3;
        return n((d) => {
          if (u)
            return r(c, f);
          const p = e._1, m = e._2;
          return n((g) => n((y) => Yg(
            qt(p, m, !1),
            n,
            s,
            (b, S) => {
              const w = b._3;
              return n((v) => w ? r(b, S) : n((C) => ai(
                e,
                n,
                s,
                r,
                (k, R) => n((E) => {
                  if (R.r === "ind") {
                    const M = Ae(Ur(hr))(Sn(
                      Hn(),
                      Sn(
                        Hn(),
                        (_, T, F, z, j) => T((Z) => hi(!1)(
                          _,
                          T,
                          F,
                          z,
                          (G, it) => T((gt) => T((ut) => hi(!1)(
                            G,
                            T,
                            F,
                            z,
                            (Pt, Nt) => T((ce) => T((ye) => ht(":")(
                              Pt,
                              T,
                              F,
                              z,
                              (mn, $o) => T((ws) => {
                                const Ch = jr((() => {
                                  const Po = is(it);
                                  return (ks, Ee, Cs, Do, wm) => Ee((wA) => Po(
                                    ks,
                                    Ee,
                                    Cs,
                                    Do,
                                    (km, kA) => Ee((CA) => {
                                      const Cm = is(Nt);
                                      return Ee((AA) => Cm(
                                        km,
                                        Ee,
                                        Cs,
                                        Do,
                                        (Am, OA) => Ee((MA) => Hn()(Am, Ee, Cs, Do, wm))
                                      ));
                                    })
                                  ));
                                })());
                                return T((Po) => Ch(mn, T, F, z, (ks, Ee) => T((Cs) => j(ks, { n: it, x: Nt, caseS: Ee }))));
                              })
                            )))
                          )))
                        ))
                      )
                    ));
                    return n((_) => M(
                      k,
                      n,
                      s,
                      r,
                      (T, F) => n((z) => o(
                        T,
                        ot("VInd", { val: F._1, case0: F._2._1, n: F._2._2.n.var, x: F._2._2.x.var, caseS: F._2._2.caseS })
                      ))
                    ));
                  }
                  const N = Ae(gh)(Hn()), I = (M) => {
                    if (M.tag === "Just") {
                      const _ = M._1, T = tm(R);
                      return (F, z, j, Z, G) => z((it) => T(
                        F,
                        z,
                        j,
                        Z,
                        (gt, ut) => z((Pt) => {
                          const Nt = ut.arity === _.length ? (ce, ye, mn, $o, ws) => ws(ce, void 0) : $e("inconsistent arity")(R.span);
                          return z((ce) => Nt(gt, z, j, Z, (ye, mn) => z(($o) => G(ye, ot("VCall", ut, _)))));
                        })
                      ));
                    }
                    if (M.tag === "Nothing") {
                      const _ = Zg(R);
                      return (T, F, z, j, Z) => F((G) => _(
                        T,
                        F,
                        z,
                        j,
                        (it, gt) => F((ut) => Z(it, ot("VVar", gt)))
                      ));
                    }
                    B();
                  };
                  return n((M) => {
                    const _ = k._1, T = k._2;
                    return n((F) => n((z) => N(
                      qt(_, T, !1),
                      n,
                      s,
                      (j, Z) => {
                        const G = j._3;
                        return n((it) => G ? r(j, Z) : n((gt) => I(Ct)(k, n, s, r, o)));
                      },
                      (j, Z) => n((G) => n((it) => I(It("Just", Z))(j, n, s, r, o)))
                    )));
                  });
                })
              )));
            },
            (b, S) => n((w) => o(b, ot("VNum", S)))
          )));
        });
      },
      o
    ));
  };
})), Ni = /* @__PURE__ */ Hn(), XC = (i, t, e, n, s) => t((r) => ai(
  i,
  t,
  e,
  n,
  (o, l) => t((a) => {
    if (l.r === "for")
      return t((c) => hi(!1)(
        o,
        t,
        e,
        n,
        (f, u) => t((d) => t((p) => ht("<")(
          f,
          t,
          e,
          n,
          (m, g) => t((y) => t((b) => Ni(
            m,
            t,
            e,
            n,
            (S, w) => t((v) => {
              const C = jr((() => {
                const k = is(u);
                return (R, E, N, I, M) => E((_) => k(
                  R,
                  E,
                  N,
                  I,
                  (T, F) => E((z) => em()(T, E, N, I, M))
                ));
              })());
              return t((k) => C(S, t, e, n, (R, E) => t((N) => s(R, We("SFor", u.var, w, E)))));
            })
          )))
        )))
      ));
    if (l.r === "var")
      return t((c) => hi(!0)(
        o,
        t,
        e,
        n,
        (f, u) => t((d) => t((p) => ht("=")(
          f,
          t,
          e,
          n,
          (m, g) => t((y) => t((b) => Ni(
            m,
            t,
            e,
            n,
            (S, w) => t((v) => {
              const C = is(u);
              return t((k) => C(
                S,
                t,
                e,
                n,
                (R, E) => t((N) => t((I) => ht(";")(
                  R,
                  t,
                  e,
                  n,
                  (M, _) => t((T) => s(M, We("SAsn", u.var, w, !0)))
                )))
              ));
            })
          )))
        )))
      ));
    const h = Zg(l);
    return t((c) => h(
      o,
      t,
      e,
      n,
      (f, u) => t((d) => t((p) => ht("=")(
        f,
        t,
        e,
        n,
        (m, g) => t((y) => t((b) => Ni(
          m,
          t,
          e,
          n,
          (S, w) => t((v) => t((C) => ht(";")(
            S,
            t,
            e,
            n,
            (k, R) => t((E) => {
              const N = u.mut ? (I, M, _, T, F) => F(I, void 0) : $e("immutable variable")(l.span);
              return t((I) => N(k, t, e, n, (M, _) => t((T) => s(M, We("SAsn", u, w, !1)))));
            })
          )))
        )))
      )))
    ));
  })
)), em = /* @__PURE__ */ fo(() => ch.defer((i) => (t, e, n, s, r) => e((o) => ht("{")(
  t,
  e,
  n,
  s,
  (l, a) => e((h) => e((c) => uh(XC)(ht("}"))(
    l,
    e,
    n,
    s,
    (f, u) => e((d) => {
      const p = u._1;
      return e((m) => jg(f, e, n, s, (g, y) => e((b) => r(g, { stmt: p, id: y }))));
    })
  )))
)))), YC = /* @__PURE__ */ em(), ZC = (i) => (t) => de.state((e) => L(void 0, { ...e, l: { ...e.l, fn: Kg(i)(t)(e.l.fn) } })), t2 = (i) => {
  const t = Ae(gh)(hi(!1)), e = (n) => {
    const s = (() => {
      if (n.tag === "Nothing")
        return (r, o, l, a, h) => o((c) => ht("=")(
          r,
          o,
          l,
          a,
          (f, u) => o((d) => o((p) => JC(
            f,
            o,
            l,
            a,
            (m, g) => o((y) => {
              const b = g.arity;
              return o((S) => ht(";")(m, o, l, a, (w, v) => o((C) => h(w, { def: ds("FComp", g), arity: b }))));
            })
          )))
        ));
      if (n.tag === "Just") {
        const r = n._1;
        return jr((() => {
          const o = GC(r);
          return (l, a, h, c, f) => a((u) => o(
            l,
            a,
            h,
            c,
            (d, p) => a((m) => {
              const g = ps((S) => S.var)(r), y = Ua(g), b = jr((S, w, v, C, k) => w((R) => hi(!0)(
                S,
                w,
                v,
                C,
                (E, N) => w((I) => {
                  const M = is(N);
                  return w((_) => M(
                    E,
                    w,
                    v,
                    C,
                    (T, F) => w((z) => {
                      const j = Up(g)(N.var);
                      return w((Z) => YC(T, w, v, C, (G, it) => w((gt) => k(G, j(it)))));
                    })
                  ));
                })
              )));
              return a((S) => {
                const w = d._1, v = d._2;
                return a((C) => {
                  const k = (R, E) => {
                    const N = R._3;
                    return a((I) => N ? c(R, E) : b(d, a, h, c, (M, _) => a((T) => f(M, { def: _, arity: r.length }))));
                  };
                  return a((R) => a((E) => a((N) => a((I) => a((M) => a((_) => ht("=")(
                    qt(w, v, !1),
                    a,
                    h,
                    k,
                    (T, F) => a((z) => a((j) => a((Z) => Ng(
                      T,
                      a,
                      h,
                      k,
                      (G, it) => a((gt) => a((ut) => Ni(
                        G,
                        a,
                        h,
                        k,
                        (Pt, Nt) => a((ce) => {
                          const ye = y(Nt);
                          return a((mn) => a(($o) => ht(";")(
                            Pt,
                            a,
                            h,
                            k,
                            (ws, Ch) => a((Po) => a((ks) => f(ws, { def: ye, arity: r.length })))
                          )));
                        })
                      )))
                    ))))
                  )))))));
                });
              });
            })
          ));
        })());
      }
      B();
    })();
    return (r, o, l, a, h) => o((c) => s(
      r,
      o,
      l,
      a,
      (f, u) => o((d) => {
        const p = u.arity, m = u.def;
        return o((g) => o((y) => jg(
          f,
          o,
          l,
          a,
          (b, S) => o((w) => o((v) => {
            const C = { name: Jg(i), arity: p, id: It("Just", S) }, k = ZC(i)(C);
            return o((R) => k(b, o, l, a, (E, N) => o((I) => h(E, ja("IFn", C, m)))));
          }))
        )));
      })
    ));
  };
  return (n, s, r, o, l) => s((a) => {
    const h = n._1, c = n._2;
    return s((f) => s((u) => t(
      qt(h, c, !1),
      s,
      r,
      (d, p) => {
        const m = d._3;
        return s((g) => m ? o(d, p) : s((y) => e(Ct)(n, s, r, o, l)));
      },
      (d, p) => s((m) => s((g) => e(It("Just", p))(d, s, r, o, l)))
    )));
  });
}, e2 = (i, t, e, n, s) => {
  const r = i._1, o = i._2;
  return t((l) => {
    const a = (h, c) => {
      const f = h._3;
      return t((u) => f ? n(h, c) : t((d) => ai(i, t, e, n, (p, m) => t((g) => t2(m.r)(p, t, e, n, s)))));
    };
    return t((h) => t((c) => t((f) => t((u) => ht("@")(
      qt(r, o, !1),
      t,
      e,
      a,
      (d, p) => t((m) => t((g) => t((y) => ai(
        d,
        t,
        e,
        a,
        (b, S) => t((w) => {
          if (S.r === "eval") {
            const v = Ae(Ao)(Ni);
            return t((C) => v(
              b,
              t,
              e,
              a,
              (k, R) => t((E) => t((N) => t((I) => t((M) => ht(";")(k, t, e, a, (_, T) => t((F) => s(_, ja("IEval", R))))))))
            ));
          }
          return $e("unknown command")(S.span)(
            b,
            t,
            e,
            a,
            (v, C) => t((k) => t((R) => t((E) => ht(";")(v, t, e, a, (N, I) => t((M) => s(N, C))))))
          );
        })
      ))))
    )))));
  });
}, Mo = (i, t, e, n, s) => t((r) => t((o) => t((l) => Ug(
  i,
  t,
  e,
  n,
  (a, h) => t((c) => t((f) => uh(e2)(FC)(
    a,
    t,
    e,
    n,
    (u, d) => t((p) => t((m) => s(u, d._1)))
  )))
)))), nm = /* @__PURE__ */ wo(In), n2 = So(po.eq, In.hash), Bf = _t(Q).bind, i2 = /* @__PURE__ */ (() => {
  const i = dn(Q), t = i.Monad0(), e = t.Bind1();
  return e.bind(i.state((n) => L(n.id, n)))((n) => e.bind(i.state((s) => L(void 0, { ...s, id: n + 1 | 0 })))(() => t.Applicative0().pure(n)));
})(), s2 = At(Q).pure, r2 = (i) => {
  const t = i.Monad0().Bind1().Apply0().Functor0();
  return (e) => {
    const n = nm(e);
    return t.map((s) => {
      const r = n(s);
      if (r.tag === "Just")
        return r._1;
      B();
    })(i.state((s) => L(s.l.var, s)));
  };
}, mh = (i) => {
  const t = i.Monad0(), e = t.Applicative0(), n = t.Bind1(), s = je.traverse(e);
  return (r) => (o) => {
    if (o.tag === "VNum")
      return e.pure(o);
    if (o.tag === "VVar") {
      const l = o._1;
      return n.bind(i.state((a) => L(a.l.var, a)))((a) => e.pure((() => {
        const h = nm(l)(a);
        if (h.tag === "Just")
          return h._1;
        if (h.tag === "Nothing")
          return o;
        B();
      })()));
    }
    if (o.tag === "VCall")
      return n.Apply0().Functor0().map(cw(o._1))(s(r)(o._2));
    if (o.tag === "VInd") {
      const l = o._1;
      return n.bind(r(l.val))((a) => n.bind(r(l.case0))((h) => n.bind(r(l.caseS))((c) => e.pure(ot("VInd", { ...l, val: a, case0: h, caseS: c })))));
    }
    B();
  };
}, im = (i) => {
  const t = mh(i);
  return (e) => t(im(i))(e);
}, Lf = (i) => (t) => bo({ ...i, l: { var: ae } })((e) => {
  const n = t(e);
  return L(n._1._1, n._2);
}), Yn = (i) => (t) => (e) => i.state((n) => L(void 0, { ...n, l: { ...n.l, var: n2(t)(e)(n.l.var) } })), Jr = (i) => Bf(i)((t) => {
  const e = t._2;
  return Bf(i2)((n) => s2(L({ stmt: wg(e), id: n }, ih)));
}), Ef = (i, t) => ({ tag: "Stream", _1: i, _2: t }), ss = /* @__PURE__ */ At(Q), Ln = /* @__PURE__ */ (() => {
  const i = ss.Apply0(), t = i.Functor0(), e = {
    map: (s) => {
      const r = t.map(s);
      return (o) => (l) => r(o(l));
    }
  }, n = { apply: (s) => (r) => (o) => i.apply(s(o))(r(o)), Functor0: () => e };
  return {
    pure: (s) => {
      const r = ss.pure(s);
      return (o) => r;
    },
    Apply0: () => n
  };
})(), o2 = /* @__PURE__ */ (() => {
  const i = je.traverse(Ln);
  return (t) => (e) => i(e)(t);
})(), sm = /* @__PURE__ */ dn(Q), Xt = /* @__PURE__ */ nk(sm), yh = /* @__PURE__ */ r2(Xt), l2 = /* @__PURE__ */ Lw(Ln)(Ke), Fi = /* @__PURE__ */ _t(Q), Dt = /* @__PURE__ */ xo(Fi), If = /* @__PURE__ */ (() => {
  const i = mh(Xt);
  return (t) => i(im(Xt))(t);
})(), ha = /* @__PURE__ */ (() => {
  const i = {
    Applicative0: () => At(Q),
    Bind1: () => _t(Q)
  }, t = gs(i);
  return { ask: i.Applicative0().pure, Monad0: () => t };
})(), a2 = (i) => ha.Monad0().Bind1().Apply0().Functor0().map(i)(ha.ask), h2 = /* @__PURE__ */ wo(Gp), _f = /* @__PURE__ */ vo(Xt), c2 = /* @__PURE__ */ (() => {
  const i = Xt.Monad0(), t = i.Bind1(), e = Xt.state((n) => L(n, n));
  return (n) => t.bind(e)((s) => {
    const r = s.l;
    return t.bind(n)((o) => t.bind(Xt.state((l) => L(void 0, { ...l, l: r })))(() => i.Applicative0().pure(o)));
  });
})(), f2 = Pg.foldMap(Rw), rm = /* @__PURE__ */ Ya(Ln)(Ke), u2 = je.traverse(ss), d2 = sm.state((i) => L(i, i)), cr = /* @__PURE__ */ fo(() => {
  const i = (t) => (e) => jp(iw(e)(t._1))(Xe(0)) ? i(cr())(kf(e)(Xe(2))) : ow.compare(e)(nw(t._1)(Xe(2))) === "LT" ? Ef(e, oa((n) => i(cr())(kf(e)(Xe(2))))) : i(lh(t._2))(e);
  return Ef(Xe(2), oa((t) => i(cr())(Xe(3))));
}), p2 = /* @__PURE__ */ cr(), g2 = `
add(a, b) = ind(a, b, n x : succ(x));
mul(a, b) = ind(a, 0, n x : add(x, b));
pow(a, b) = ind(b, 1, n x : mul(x, a));
prev(a) = ind(a, 0, n x : n);
sub(a, b) = ind(b, a, n x : prev(x));
ifZero(v, zero, pos) = ind(v, zero, n x : pos);
rem(a, b) = prev(ind(a, succ(a), n x : ifZero(sub(x, b), x, sub(x, b))));
expCount(a, p) = ind(a, 0, n x : ifZero(rem(a, pow(p, n)), n, x));
`, m2 = (i) => (t) => (e) => {
  const n = i.fExpCount, s = i.fMul, r = i.fPow, o = wg(t.foldl((l) => {
    const a = l.p._1, h = l.p._2, c = l.v;
    return (f) => ({ v: ie("BCons", { var: f, p: a }, c), p: lh(h) });
  })({ v: ih, p: p2 })(e).v);
  return {
    encode: (() => {
      const l = o2(o)((h) => {
        const c = h.p, f = yh(h.var);
        return (u) => {
          const d = f(u);
          return (p) => {
            const m = d(p);
            return L({ p: c, val: m._1 }, m._2);
          };
        };
      }), a = sg((h) => (c) => ot("VCall", s, [h, ot("VCall", r, [ot("VNum", c.p), c.val])]))(ot(
        "VNum",
        Xe(1)
      ));
      return (h) => {
        const c = l(h);
        return (f) => {
          const u = c(f);
          return L(a(u._1), u._2);
        };
      };
    })(),
    decode: (l) => l2(o)((a) => Yn(Xt)(a.var)(ot("VCall", n, [l, ot("VNum", a.p)])))
  };
}, om = (i) => {
  if (i.tag === "SAsn")
    return Dt.bind(If(i._2))(Yn(Xt)(i._1));
  if (i.tag === "SFor") {
    const t = i._3, e = i._1, n = i._1.name, s = i._2;
    return Dt.bind((() => {
      const r = a2((l) => l.asn), o = h2(t);
      return (l) => {
        const a = r(l);
        return (h) => {
          const c = a(h);
          return L(
            (() => {
              const f = o(c._1);
              if (f.tag === "Just")
                return f._1;
              B();
            })(),
            c._2
          );
        };
      };
    })())((r) => Dt.bind(_f(!1)(n))((o) => Dt.bind(Yn(Xt)(e)(ot("VVar", o)))(() => Dt.bind(If(s))((l) => {
      const a = (c, f, u) => Dt.bind(_f(!1)(c))((d) => Dt.bind(f)((p) => Dt.bind(c2(Dt.bind(u(ot(
        "VVar",
        d
      )))(() => Dt.bind(y2(t))(() => f))))((m) => Dt.bind(u(ot("VInd", { val: l, case0: p, n: o, x: d, caseS: m })))(() => Ln.pure()))));
      if (Hr(r) > 1)
        return Dt.bind(Xt.state((c) => L(void 0, { ...c, hasCmplxFor: !0 })))(() => Dt.bind(ha.ask)((c) => {
          const f = m2(c)(Pg)(r);
          return a("ind", f.encode, f.decode);
        }));
      const h = f2((c) => It("Just", c))(r);
      if (h.tag === "Just")
        return a(h._1.name, yh(h._1), Yn(Xt)(h._1));
      if (h.tag === "Nothing")
        return Ln.pure();
      B();
    }))));
  }
  B();
}, y2 = (i) => rm(om)(i.stmt), b2 = (i) => {
  if (i.tag === "FValue" || i.tag === "FComp")
    return Ln.pure(i);
  if (i.tag === "FImp") {
    const t = i._1, e = i._3, n = i._2;
    return Dt.bind(Yn(Xt)(n)(ot("VNum", Xe(0))))(() => Dt.bind(rm(om)(e.stmt))(() => {
      const s = Ua(t), r = yh(n);
      return (o) => {
        const l = r(o);
        return (a) => {
          const h = l(a);
          return L(s(h._1), h._2);
        };
      };
    }));
  }
  B();
}, v2 = (i) => (t) => {
  if (t.tag === "IFn") {
    const e = t._2, n = t._1;
    return Fi.bind(hg(Uk(e)))((s) => {
      const r = uo(n), o = b2(e)({ ...i, asn: s });
      return (l) => {
        const a = o(l);
        return L(r(a._1), a._2);
      };
    });
  }
  return ss.pure(t);
}, x2 = (i) => bo({ hasCmplxFor: !1, l: { var: ae } })(Fi.bind(hg(Oo(Mo)(g2)))((t) => {
  if (t.tag === "Right" && t._1.length === 8 && t._1[0].tag === "IFn" && t._1[1].tag === "IFn" && t._1[2].tag === "IFn" && t._1[3].tag === "IFn" && t._1[4].tag === "IFn" && t._1[5].tag === "IFn" && t._1[6].tag === "IFn" && t._1[7].tag === "IFn") {
    const e = t._1[0], n = t._1[7], s = t._1[5], r = t._1[1], o = t._1[2], l = t._1[3], a = t._1[6], h = t._1[4];
    return Fi.bind(u2(v2({ fAdd: t._1[0]._1, fMul: t._1[1]._1, fPow: t._1[2]._1, fExpCount: t._1[7]._1 }))(i))((c) => Fi.bind(d2)((f) => ss.pure([
      ...f.hasCmplxFor ? [e, r, o, l, h, s, a, n] : [],
      ...c
    ])));
  }
  B();
})), lm = (i) => ({
  i: (t) => i.iStr((() => {
    const e = Nr(t);
    return (n) => e;
  })()),
  iStr: (t) => (e) => i.iStr((() => {
    const n = Nr(e);
    return (s) => t(s) + n;
  })())
}), Gr = /* @__PURE__ */ (() => {
  const i = lm(gn);
  return (t) => (e) => i.iStr((n) => t + e);
})(), bh = { i: (i) => (t) => i, iStr: (i) => (t) => (e) => i(e) + t }, S2 = /* @__PURE__ */ (() => {
  const i = lm(bh);
  return (t) => i.iStr((e) => t);
})(), am = /* @__PURE__ */ (() => {
  const i = { append: (t) => (e) => (n) => t(n) + e(n) };
  return Ke.foldMap({ mempty: (t) => "", Semigroup0: () => i });
})(), w2 = /* @__PURE__ */ (() => {
  const i = Ue((t) => t.indent);
  return (t) => (e) => i(e) + t;
})(), k2 = { disp: (i) => Gr(i.name)("$")(i.id) }, rn = (i) => ({
  i: (t) => i.iStr(Gr(t.name)("$")(t.id)),
  iStr: (t) => (e) => i.iStr((() => {
    const n = Gr(e.name)("$")(e.id);
    return (s) => t(s) + n(s);
  })())
}), C2 = rn(gn).i, hm = /* @__PURE__ */ (() => {
  const i = pn(k2);
  return (t) => ({
    i: (e) => t.iStr(i.disp(e)),
    iStr: (e) => (n) => t.iStr((() => {
      const s = i.disp(n);
      return (r) => e(r) + s(r);
    })())
  });
})(), Nf = /* @__PURE__ */ (() => {
  const i = rn(bh), t = Ue((e) => e.indent);
  return (e) => i.iStr((n) => t(n) + e);
})(), A2 = /* @__PURE__ */ (() => {
  const i = hm({
    i: (t) => (e) => {
      const n = Af(e)(Of);
      return (s) => (r) => t + n(r) + s;
    },
    iStr: (t) => (e) => (n) => {
      const s = Af(n)(Of);
      return (r) => (o) => t(o) + e + s(o) + r;
    }
  });
  return (t) => i.iStr((e) => t);
})(), Ff = {
  disp: (i) => {
    if (i.id.tag === "Just")
      return Gr(i.name)("$")(i.id._1);
    if (i.id.tag === "Nothing") {
      const t = i.name;
      return (e) => t;
    }
    B();
  }
}, vh = (i) => ({
  i: (t) => i.iStr(Ff.disp(t)),
  iStr: (t) => (e) => i.iStr((() => {
    const n = Ff.disp(e);
    return (s) => t(s) + n(s);
  })())
}), O2 = vh(gn).i, wn = {
  disp: (i) => {
    if (i.tag === "VNum") {
      const t = Fr(i._1);
      return (e) => t + "n";
    }
    if (i.tag === "VVar")
      return C2(i._1);
    if (i.tag === "VCall")
      return vh((() => {
        const t = pn(wn), e = (n) => (s) => {
          const r = t.disp(s);
          return (o) => (l) => n(l) + r(l) + o;
        };
        return { i: (n) => e((s) => n), iStr: (n) => (s) => e((r) => n(r) + s) };
      })()).i(i._1)("(")(Re(", ", i._2))(")");
    if (i.tag === "VInd") {
      const t = wn.disp(i._1.val), e = wn.disp(i._1.case0);
      return rn((() => {
        const n = rn({
          i: (s) => (r) => {
            const o = wn.disp(r);
            return (l) => (a) => s + o(a) + l;
          },
          iStr: (s) => (r) => (o) => {
            const l = wn.disp(o);
            return (a) => (h) => s(h) + r + l(h) + a;
          }
        });
        return { i: (s) => n.iStr((r) => s), iStr: (s) => (r) => n.iStr((o) => s(o) + r) };
      })()).iStr((n) => "$ind(" + t(n) + ", " + e(n) + ", (")(i._1.n)(", ")(i._1.x)(") => ")(i._1.caseS)(")");
    }
    B();
  }
}, xh = (i) => ({
  i: (t) => i.iStr(wn.disp(t)),
  iStr: (t) => (e) => i.iStr((() => {
    const n = wn.disp(e);
    return (s) => t(s) + n(s);
  })())
}), cm = /* @__PURE__ */ (() => {
  const i = xh(bh);
  return { i: (t) => i.iStr((e) => t), iStr: (t) => (e) => i.iStr((n) => t(n) + e) };
})(), fm = /* @__PURE__ */ rn(cm), M2 = /* @__PURE__ */ (() => {
  const i = Ue((t) => t.indent);
  return (t) => fm.iStr((e) => i(e) + t);
})(), T2 = fm.iStr(Ue((i) => i.indent)), $2 = /* @__PURE__ */ (() => {
  const i = hm((() => {
    const t = xh(gn);
    return { i: (e) => t.iStr((n) => e), iStr: (e) => (n) => t.iStr((s) => e(s) + n) };
  })());
  return (t) => i.iStr((e) => t);
})(), Ti = {
  disp: (i) => {
    if (i.c.tag === "CFn")
      return O2(i.c._1);
    if (i.c.tag === "CCst") {
      const t = Fr(i.c._1);
      return (e) => "$cst(" + t + "n)";
    }
    if (i.c.tag === "CProj")
      return S2("$proj(")(i.c._1)(")");
    if (i.c.tag === "CComp") {
      const t = Ti.disp(i.c._1), e = pn(Ti).disp(Re(", ", i.c._2));
      return (n) => "$comp(" + t(n) + ", " + e(n) + ")";
    }
    if (i.c.tag === "CRec") {
      const t = Ti.disp(i.c._1), e = Ti.disp(i.c._2);
      return (n) => "$rec(" + t(n) + ", " + e(n) + ")";
    }
    B();
  }
}, um = {
  disp: (i) => {
    if (i.tag === "SAsn")
      return i._3 ? M2("let ")(i._1)(" = ")(i._2)(`
`) : T2(i._1)(" = ")(i._2)(`
`);
    if (i.tag === "SFor") {
      const t = Ue((e) => e.indent);
      return xh((() => {
        const e = rn((() => {
          const n = rn((() => {
            const s = rn({
              i: (r) => (o) => {
                const l = Vf.disp(o);
                return (a) => r + l(a);
              },
              iStr: (r) => (o) => (l) => {
                const a = Vf.disp(l);
                return (h) => r(h) + o + a(h);
              }
            });
            return { i: (r) => s.iStr((o) => r), iStr: (r) => (o) => s.iStr((l) => r(l) + o) };
          })());
          return { i: (s) => n.iStr((r) => s), iStr: (s) => (r) => n.iStr((o) => s(o) + r) };
        })());
        return { i: (n) => e.iStr((s) => n), iStr: (n) => (s) => e.iStr((r) => n(r) + s) };
      })()).iStr((e) => t(e) + "for (let $val = ")(i._2)(", ")(i._1)(" = 0n; ")(i._1)(" < $val; ")(i._1)("++) ")(i._3);
    }
    B();
  }
}, Vf = {
  disp: (i) => {
    const t = Za(am(um.disp)(i.stmt)), e = (() => {
      const n = w2(`}
`);
      return (s) => t(s) + n(s);
    })();
    return (n) => `{
` + e(n);
  }
}, Wf = {
  disp: (i) => {
    if (i.tag === "FComp")
      return Ti.disp(i._1);
    if (i.tag === "FValue")
      return $2("(")(Re(", ", i._1))(") => ")(i._2);
    if (i.tag === "FImp")
      return A2("(")(Re(", ", i._1))(`) => {
`)(Za((() => {
        const t = Nf("let ")(i._2)(` = 0n
`), e = am(um.disp)(i._3.stmt), n = (() => {
          const s = Nf("return ")(i._2)(`
`);
          return (r) => e(r) + s(r);
        })();
        return (s) => t(s) + n(s);
      })()))("}");
    B();
  }
}, P2 = /* @__PURE__ */ (() => {
  const i = vh({
    i: (t) => (e) => {
      const n = Wf.disp(e);
      return (s) => (r) => t + n(r) + s;
    },
    iStr: (t) => (e) => (n) => {
      const s = Wf.disp(n);
      return (r) => (o) => t(o) + e + s(o) + r;
    }
  });
  return (t) => i.iStr((e) => t);
})(), D2 = {
  disp: (i) => {
    if (i.tag === "IFn")
      return P2("const ")(i._1)(" = ")(i._2)(`
`);
    if (i.tag === "IEval")
      return cm.i("$eval(")(i._1)(`)
`);
    B();
  }
}, R2 = /* @__PURE__ */ (() => {
  const i = pn(D2);
  return (t) => i.disp(t);
})(), B2 = `// predefined
const succ = x => x + 1n
const $ind = (v, x, f) => {
  for (let n = 0n; n < v; n++) x = f(n, x)
  return x
}
const $cst = x => () => x
const $proj = i => (...args) => args[i]
const $comp = (f, ...fs) => (...args) => f(...fs.map(f => f(...args)))
const $rec = (g, h) => (v, ...args) => $ind(v, g(...args), (n, x) => h(n, x, ...args))

`, L2 = (i) => mg((() => {
  const t = R2(Re(`
`, i));
  return (e) => B2 + t(e);
})()), ci = /* @__PURE__ */ At(Q), Vi = /* @__PURE__ */ (() => {
  const i = ci.Apply0(), t = i.Functor0(), e = {
    map: (s) => {
      const r = t.map(s);
      return (o) => (l) => r(o(l));
    }
  }, n = { apply: (s) => (r) => (o) => i.apply(s(o))(r(o)), Functor0: () => e };
  return {
    pure: (s) => {
      const r = ci.pure(s);
      return (o) => r;
    },
    Apply0: () => n
  };
})(), kn = xo(_t(Q)).bind, dm = {
  Applicative0: () => At(Q),
  Bind1: () => _t(Q)
}, ca = /* @__PURE__ */ (() => {
  const i = gs(dm);
  return { ask: At(Q).pure, Monad0: () => i };
})(), E2 = /* @__PURE__ */ wo(In), I2 = je.traverse(Vi), pm = (i) => ca.Monad0().Bind1().Apply0().Functor0().map(i)(ca.ask), _2 = ug(dm).local, Hf = So(po.eq, In.hash), N2 = Mg(po.eq, In.hash)(go)(Xa), F2 = je.traverse(ci), V2 = (i) => {
  if (i.tag === "VNum")
    return Vi.pure(te("CCst", i._1));
  if (i.tag === "VVar") {
    const t = i._1;
    return kn(ca.ask)((e) => Vi.pure(te(
      "CProj",
      (() => {
        const n = E2(t)(e);
        return Hr(e) - (() => {
          if (n.tag === "Just")
            return n._1;
          B();
        })() | 0;
      })()
    )));
  }
  if (i.tag === "VCall") {
    const t = fw({ arity: i._2.length, c: te("CFn", i._1) }), e = I2($i)(i._2);
    return (n) => {
      const s = e(n);
      return (r) => {
        const o = s(r);
        return L(t(o._1), o._2);
      };
    };
  }
  if (i.tag === "VInd") {
    const t = i._1.case0, e = i._1.caseS, n = i._1.n, s = i._1.val, r = i._1.x;
    return kn(pm(Hr))((o) => kn($i(t))((l) => kn(_2((() => {
      const a = Hf(n)(o + 2 | 0), h = Hf(r)(o + 1 | 0);
      return (c) => a(h(c));
    })())($i(e)))((a) => kn($i(s))((h) => Vi.pure(te(
      "CComp",
      { arity: o + 1 | 0, c: te("CRec", l, a) },
      [h, ...ps((c) => ({ arity: o, c: te("CProj", c) }))(og(0, o - 1 | 0))]
    ))))));
  }
  B();
}, $i = (i) => kn(V2(i))((t) => kn(pm(Hr))((e) => Vi.pure({ arity: e, c: t }))), W2 = (i) => {
  if (i.tag === "FComp" || i.tag === "FImp")
    return ci.pure(i);
  if (i.tag === "FValue") {
    const t = $i(i._2)(N2(zw(Ga, i._1, og(i._1.length, 1))));
    return (e) => {
      const n = t(e);
      return L(ds("FComp", n._1), n._2);
    };
  }
  B();
}, H2 = (i) => {
  if (i.tag === "IFn") {
    const t = uo(i._1), e = W2(i._2);
    return (n) => {
      const s = e(n);
      return L(t(s._1), s._2);
    };
  }
  return ci.pure(i);
}, z2 = (i) => {
  const t = F2(H2)(i);
  return (e) => {
    const n = t(e);
    return L(n._1, n._2);
  };
}, gm = (i) => (t) => {
  const e = t.Apply0(), n = e.Functor0(), s = { map: (o) => n.map((l) => L(o(l._1), l._2)) }, r = {
    apply: (o) => (l) => e.apply(n.map((a) => (h) => L(a._1(h._1), i.append(a._2)(h._2)))(o))(l),
    Functor0: () => s
  };
  return {
    bind: (o) => (l) => t.bind(o)((a) => {
      const h = a._2;
      return e.Functor0().map((c) => L(c._1, i.append(h)(c._2)))(l(a._1));
    }),
    Apply0: () => r
  };
}, mm = (i) => {
  const t = i.mempty, e = i.Semigroup0();
  return (n) => {
    const s = n.Apply0(), r = s.Functor0(), o = /* @__PURE__ */ (() => {
      const l = { map: (a) => r.map((h) => L(a(h._1), h._2)) };
      return { apply: (a) => (h) => s.apply(r.map((c) => (f) => L(c._1(f._1), e.append(c._2)(f._2)))(a))(h), Functor0: () => l };
    })();
    return { pure: (l) => n.pure(L(l, t)), Apply0: () => o };
  };
}, ym = (i) => {
  const t = mm(i), e = gm(i.Semigroup0());
  return (n) => {
    const s = t(n.Applicative0()), r = e(n.Bind1());
    return { Applicative0: () => s, Bind1: () => r };
  };
}, q2 = (i) => {
  const t = i.mempty, e = ym(i);
  return (n) => {
    const s = n.Monad0(), r = e(s);
    return { state: (o) => s.Bind1().bind(n.state(o))((l) => s.Applicative0().pure(L(l, t))), Monad0: () => r };
  };
}, Q2 = (i) => {
  const t = i.Semigroup0(), e = ym(i);
  return (n) => {
    const s = e(n);
    return {
      tell: (() => {
        const r = Ga();
        return (o) => n.Applicative0().pure(r(o));
      })(),
      Semigroup0: () => t,
      Monad1: () => s
    };
  };
}, Jt = /* @__PURE__ */ gm(Sg)(/* @__PURE__ */ _t(Q)), Zn = /* @__PURE__ */ q2(sh)(/* @__PURE__ */ dn(Q)), bm = /* @__PURE__ */ vo(Zn), rs = Q2(sh)({
  Applicative0: () => At(Q),
  Bind1: () => _t(Q)
}).tell, To = /* @__PURE__ */ At(Q), Sh = /* @__PURE__ */ mm(sh)(To), K2 = /* @__PURE__ */ mh(Zn), vm = /* @__PURE__ */ (() => {
  const i = Zn.Monad0(), t = i.Bind1(), e = Zn.state((n) => L(n, n));
  return (n) => t.bind(e)((s) => {
    const r = s.l;
    return t.bind(n)((o) => t.bind(Zn.state((l) => L(void 0, { ...l, l: r })))(() => i.Applicative0().pure(o)));
  });
})(), xm = /* @__PURE__ */ Ya(Sh)(Ke), j2 = je.traverse(To), On = (i) => {
  if (i.tag === "VInd") {
    const t = i._1;
    return Jt.bind(On(t.val))((e) => Jt.bind(On(t.case0))((n) => Jt.bind(bm(!0)(t.x.name))((s) => Jt.bind(Yn(Zn)(t.x)(ot(
      "VVar",
      s
    )))(() => Jt.bind(Jr(Jt.bind(On(t.caseS))((r) => rs(ie("BSingl", We("SAsn", s, r, !1))))))((r) => Jt.bind(rs(ie(
      "BArray",
      [We("SAsn", s, n, !0), We("SFor", t.n, e, r)]
    )))(() => Sh.pure(ot("VVar", s))))))));
  }
  return K2(On)(i);
}, Sm = (i) => {
  if (i.tag === "SAsn") {
    const t = i._3, e = i._1;
    return Jt.bind(On(i._2))((n) => rs(ie("BSingl", We("SAsn", e, n, t))));
  }
  if (i.tag === "SFor") {
    const t = i._3, e = i._1;
    return Jt.bind(On(i._2))((n) => Jt.bind(U2(t))((s) => rs(ie("BSingl", We("SFor", e, n, s)))));
  }
  B();
}, U2 = (i) => Jr(vm(xm(Sm)(i.stmt))), J2 = (i) => {
  if (i.tag === "FComp")
    return To.pure(i);
  if (i.tag === "FValue") {
    const t = i._1, e = i._2;
    return Lf({})(Jt.bind(bm(!0)("ret"))((n) => Jt.bind(Jr(Jt.bind(On(e))((s) => rs(ie(
      "BSingl",
      We("SAsn", n, s, !1)
    )))))((s) => Sh.pure(ds("FImp", t, n, s)))));
  }
  if (i.tag === "FImp") {
    const t = Up(i._1)(i._2), e = Lf({})(Jr(vm(xm(Sm)(i._3.stmt))));
    return (n) => {
      const s = e(n);
      return L(t(s._1), s._2);
    };
  }
  B();
}, G2 = (i) => {
  if (i.tag === "IFn") {
    const t = uo(i._1), e = J2(i._2);
    return (n) => {
      const s = e(n);
      return L(t(s._1), s._2);
    };
  }
  return To.pure(i);
}, X2 = (i) => {
  const t = j2(G2)(i);
  return (e) => {
    const n = t(e);
    return L(n._1, n._2);
  };
}, fa = /* @__PURE__ */ _t(Q), wh = At(Q).pure, Y2 = (i) => (t) => fa.bind(Oo(Mo)(t))((e) => {
  if (e.tag === "Left")
    return wh(fg);
  if (e.tag === "Right") {
    const n = L2(e._1);
    return (s) => {
      const r = n(s);
      return L(r._1, r._2);
    };
  }
  B();
})({ id: 0, r: i })._1, Z2 = (i) => (t) => {
  const e = Oo(Mo)(t)({ id: 0, r: i });
  return e._1.tag === "Left" ? e._1._1 : [];
}, xs = (i) => (t) => (e) => fa.bind(Oo(Mo)(e))((n) => {
  if (n.tag === "Left")
    return wh(fg);
  if (n.tag === "Right") {
    const s = fa.bind(i(n._1))(Tk);
    return (r) => {
      const o = s(r);
      return L(o._1, o._2);
    };
  }
  B();
})({ id: 0, r: t })._1, tA = /* @__PURE__ */ xs(tk), eA = /* @__PURE__ */ xs(wh), nA = /* @__PURE__ */ xs(x2), iA = /* @__PURE__ */ xs(z2), sA = /* @__PURE__ */ xs(X2), rA = Z2, oA = eA, lA = sA, aA = nA, hA = tA, cA = iA, fA = Y2, uA = KS.configure({
  props: [
    wd({
      Kw: x.keyword,
      Fn: x.function(x.variableName),
      Var: x.variableName,
      VarD: x.constant(x.variableName),
      // 变量定义太丑了，这样好看点
      Cmd: x.processingInstruction,
      Num: x.number,
      CompKw: x.operator,
      Cmt: x.comment
    }),
    Od.add({
      Block: (i) => i.baseIndent + i.unit,
      Paren: (i) => i.baseIndent + i.unit
    }),
    Td.add({
      Block: Ic,
      Paren: Ic
    })
  ]
}), dA = wr.define({ parser: uA });
function kh(i, t) {
  return {
    indentUnit: t.state.facet(io),
    ...i
  };
}
const pA = (i) => new Xy(dA, [
  bS((t) => rA(kh(i(), t))(t.state.doc.toString()))
]), Ss = (i) => (t, e) => {
  const n = e.state.doc, s = i(kh(t, e))(n.toString());
  s != null && e.dispatch(
    { changes: { from: 0, to: n.length, insert: s } }
  ), Hp(e);
}, gA = Ss(oA), mA = Ss(lA), yA = Ss(aA), zf = Ss(hA), bA = Ss(cA), qf = (i, t) => (Hp(t), fA(kh(i, t))(t.state.doc.toString())), vA = `prev(a) = ind(a, 0, n x : n);\r
@eval(prev(0)); # 0\r
@eval(prev(10)); # 9\r
\r
add = rec(proj(1, 0), comp(succ, 3, proj(3, 1)));\r
@eval(add(12, 34)); # 46\r
@eval(add(5, 6)); # 11\r
\r
mul(a, b) = ind(a, 0, n x : add(x, b));\r
@eval(mul(3, 5)); # 15\r
@eval(mul(2, 4)); # 8\r
\r
fac(n) r {\r
  r = 1;\r
  for i < n {\r
    r = mul(r, succ(i));\r
  }\r
}\r
@eval(fac(2)); # 2\r
@eval(fac(4)); # 24\r
\r
fib(x) a {\r
  var b = 1;\r
  for i < x {\r
    var t = a;\r
    a = add(a, b);\r
    b = t;\r
  }\r
}\r
@eval(fib(1)); # 1\r
@eval(fib(2)); # 1\r
@eval(fib(3)); # 2\r
`, xA = { ref: "root" }, SA = ["value"], DA = /* @__PURE__ */ Om({
  __name: "Main",
  setup(i) {
    const t = Mm(""), e = Tm("root");
    let n;
    function s() {
      return {};
    }
    function r() {
      const o = qf(s(), n);
      if (o == null) return "";
      let l = "";
      return new Function("$eval", o)((h) => {
        l += h + `
`;
      }), l;
    }
    return $m(() => {
      n = new P({
        extensions: [
          CS,
          P.lineWrapping,
          eo.of([Uv]),
          ES,
          pA(s)
        ],
        doc: vA,
        parent: e.value
      });
    }), Pm(() => {
      n.destroy();
    }), (o, l) => (Rm(), Dm(Bm, null, [
      Yt("button", {
        type: "button",
        onClick: l[0] || (l[0] = () => Ft(gA)(s(), Ft(n)))
      }, "format"),
      Yt("button", {
        type: "button",
        onClick: l[1] || (l[1] = () => Ft(mA)(s(), Ft(n)))
      }, "val to imp"),
      Yt("button", {
        type: "button",
        onClick: l[2] || (l[2] = () => Ft(yA)(s(), Ft(n)))
      }, "imp to val"),
      Yt("button", {
        type: "button",
        onClick: l[3] || (l[3] = () => Ft(zf)(s(), Ft(n)))
      }, "comp to val"),
      Yt("button", {
        type: "button",
        onClick: l[4] || (l[4] = () => Ft(zf)(s(), Ft(n)))
      }, "comp to val"),
      Yt("button", {
        type: "button",
        onClick: l[5] || (l[5] = () => Ft(bA)(s(), Ft(n)))
      }, "val to comp"),
      l[8] || (l[8] = Yt("br", null, null, -1)),
      Yt("button", {
        type: "button",
        onClick: l[6] || (l[6] = () => t.value = Ft(qf)(s(), Ft(n)) ?? "")
      }, "to js"),
      Yt("button", {
        type: "button",
        onClick: l[7] || (l[7] = () => t.value = r())
      }, "run"),
      Yt("div", xA, null, 512),
      l[9] || (l[9] = Lm(" Output:")),
      l[10] || (l[10] = Yt("br", null, null, -1)),
      Yt("textarea", {
        readonly: "",
        value: t.value
      }, null, 8, SA)
    ], 64));
  }
});
export {
  DA as default
};
