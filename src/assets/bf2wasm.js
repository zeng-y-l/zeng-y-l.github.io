import { defineComponent as Nu, ref as Y, onUnmounted as Gu, openBlock as Bu, createElementBlock as Uu, Fragment as Ou, createTextVNode as q, withDirectives as Nn, createElementVNode as _, vModelText as ar, vModelCheckbox as qu, toDisplayString as Gn } from "vue";
var Kt = function(n) {
  return function(r) {
    return n === r;
  };
};
const Vu = Kt, ku = Kt;
var Ku = {
  eq: Vu
}, ju = {
  eq: ku
}, Qn = function(n) {
  return n.eq;
}, Xu = {
  compose: function(n) {
    return function(r) {
      return function(t) {
        return n(r(t));
      };
    };
  }
}, Ln = function(n) {
  return n.identity;
}, Tn = {
  identity: function(n) {
    return n;
  },
  Semigroupoid0: function() {
    return Xu;
  }
}, wr = function(n) {
  return function(r) {
    return function(t) {
      return n(t)(r);
    };
  };
}, gn = function(n) {
  return function(r) {
    return n;
  };
};
const Zu = function(n) {
  return function(r) {
    for (var t = r.length, e = new Array(t), u = 0; u < t; u++)
      e[u] = n(r[u]);
    return e;
  };
}, N = void 0;
var S = function(n) {
  return n.map;
}, Hr = function(n) {
  return S(n)(gn(N));
}, jt = function(n) {
  var r = S(n);
  return function(t) {
    return function(e) {
      return r(gn(e))(t);
    };
  };
}, Qr = {
  map: Zu
}, Ju = /* @__PURE__ */ Ln(Tn), Rn = function(n) {
  return n.apply;
}, br = function(n) {
  var r = Rn(n), t = S(n.Functor0());
  return function(e) {
    return function(u) {
      return r(t(gn)(e))(u);
    };
  };
}, pr = function(n) {
  var r = Rn(n), t = S(n.Functor0());
  return function(e) {
    return function(u) {
      return r(t(gn(Ju))(e))(u);
    };
  };
}, P = function(n) {
  return n.pure;
}, Yu = function(n) {
  var r = P(n);
  return function(t) {
    return function(e) {
      if (!t)
        return e;
      if (t)
        return r(N);
      throw new Error("Failed pattern match at Control.Applicative (line 68, column 1 - line 68, column 65): " + [t.constructor.name, e.constructor.name]);
    };
  };
}, Hu = function(n) {
  var r = Rn(n.Apply0()), t = P(n);
  return function(e) {
    return function(u) {
      return r(t(e))(u);
    };
  };
}, bn = function(n) {
  return n.bind;
}, Qu = function(n) {
  return wr(bn(n));
};
const bu = function(n) {
  return function(r) {
    return function(t) {
      for (var e = r, u = t.length, a = u - 1; a >= 0; a--)
        e = n(t[a])(e);
      return e;
    };
  };
}, na = function(n) {
  return function(r) {
    return function(t) {
      for (var e = r, u = t.length, a = 0; a < u; a++)
        e = n(e)(t[a]);
      return e;
    };
  };
}, ra = function(n) {
  return function(r) {
    return n + r;
  };
};
var Xt = {
  append: ra
}, X = function(n) {
  return n.append;
}, Zt = function(n) {
  var r = X(n);
  return {
    append: function(t) {
      return function(e) {
        return function(u) {
          return r(t(u))(e(u));
        };
      };
    }
  };
}, nt = function(n) {
  return n.alt;
}, ta = function(n) {
  return n.empty;
};
const ea = 2147483647, ua = -2147483648, aa = "￿", oa = "\0";
var Jt = function(n) {
  return function(r) {
    return function(t) {
      return function(e) {
        return function(u) {
          return e < u ? n : e === u ? r : t;
        };
      };
    };
  };
};
const ia = Jt, ca = Jt;
var $n = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Sn = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Mn = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}();
const fa = function(n) {
  return function(r) {
    return n - r | 0;
  };
}, la = function(n) {
  return function(r) {
    return n + r | 0;
  };
}, sa = function(n) {
  return function(r) {
    return n * r | 0;
  };
};
var Yt = {
  add: la,
  zero: 0,
  mul: sa,
  one: 1
}, va = function(n) {
  return n.add;
}, da = {
  sub: fa,
  Semiring0: function() {
    return Yt;
  }
}, Cn = /* @__PURE__ */ function() {
  return {
    compare: ia($n.value)(Mn.value)(Sn.value),
    Eq0: function() {
      return Ku;
    }
  };
}(), Ht = /* @__PURE__ */ function() {
  return {
    compare: ca($n.value)(Mn.value)(Sn.value),
    Eq0: function() {
      return ju;
    }
  };
}(), Pn = function(n) {
  return n.compare;
}, ma = function(n) {
  var r = Pn(n);
  return function(t) {
    return function(e) {
      var u = r(t)(e);
      if (u instanceof $n)
        return e;
      if (u instanceof Mn || u instanceof Sn)
        return t;
      throw new Error("Failed pattern match at Data.Ord (line 181, column 3 - line 184, column 12): " + [u.constructor.name]);
    };
  };
}, wa = function(n) {
  var r = Pn(n);
  return function(t) {
    return function(e) {
      var u = r(t)(e);
      if (u instanceof $n || u instanceof Mn)
        return t;
      if (u instanceof Sn)
        return e;
      throw new Error("Failed pattern match at Data.Ord (line 172, column 3 - line 175, column 12): " + [u.constructor.name]);
    };
  };
}, Qt = function(n) {
  return n.top;
}, bt = {
  top: ea,
  bottom: ua,
  Ord0: function() {
    return Cn;
  }
}, rt = {
  top: aa,
  bottom: oa,
  Ord0: function() {
    return Ht;
  }
}, ne = function(n) {
  return n.bottom;
};
const pa = function(n) {
  return n.toString();
}, ha = function(n) {
  var r = n.charCodeAt(0);
  if (r < 32 || r === 127) {
    switch (n) {
      case "\x07":
        return "'\\a'";
      case "\b":
        return "'\\b'";
      case "\f":
        return "'\\f'";
      case `
`:
        return "'\\n'";
      case "\r":
        return "'\\r'";
      case "	":
        return "'\\t'";
      case "\v":
        return "'\\v'";
    }
    return "'\\" + r.toString(10) + "'";
  }
  return n === "'" || n === "\\" ? "'\\" + n + "'" : "'" + n + "'";
};
var tt = {
  show: pa
}, _a = {
  show: ha
}, hr = function(n) {
  return n.show;
}, ya = /* @__PURE__ */ Ln(Tn), w = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), d = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), _r = function(n) {
  return function(r) {
    return function(t) {
      if (t instanceof w)
        return n;
      if (t instanceof d)
        return r(t.value0);
      throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): " + [n.constructor.name, r.constructor.name, t.constructor.name]);
    };
  };
}, re = /* @__PURE__ */ _r(!0)(/* @__PURE__ */ gn(!1)), Ia = /* @__PURE__ */ _r(!1)(/* @__PURE__ */ gn(!0)), te = {
  map: function(n) {
    return function(r) {
      return r instanceof d ? new d(n(r.value0)) : w.value;
    };
  }
}, Ea = /* @__PURE__ */ S(te), Fa = function(n) {
  return _r(n)(ya);
}, yr = function() {
  return function(n) {
    if (n instanceof d)
      return n.value0;
    throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): " + [n.constructor.name]);
  };
}, ga = {
  apply: function(n) {
    return function(r) {
      if (n instanceof d)
        return Ea(n.value0)(r);
      if (n instanceof w)
        return w.value;
      throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [n.constructor.name, r.constructor.name]);
    };
  },
  Functor0: function() {
    return te;
  }
}, ee = /* @__PURE__ */ function() {
  return {
    pure: d.create,
    Apply0: function() {
      return ga;
    }
  };
}(), ue = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), ae = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), $a = function(n) {
  return n.defer;
};
const Sa = function(n) {
  return function(r) {
    return n && r;
  };
}, Ma = function(n) {
  return function(r) {
    return n || r;
  };
}, Ca = function(n) {
  return !n;
};
var oe = function(n) {
  return n.not;
}, xa = function(n) {
  return n.disj;
}, Cr = {
  ff: !1,
  tt: !0,
  implies: function(n) {
    return function(r) {
      return xa(Cr)(oe(Cr)(n))(r);
    };
  },
  conj: Sa,
  disj: Ma,
  not: Ca
};
const Aa = function(n) {
  return Math.min(Math.abs(n), 2147483647);
}, Da = function(n) {
  return function(r) {
    return r === 0 ? 0 : r > 0 ? Math.floor(n / r) : -Math.floor(n / -r);
  };
}, La = function(n) {
  return function(r) {
    if (r === 0)
      return 0;
    var t = Math.abs(r);
    return (n % t + t) % t;
  };
};
var Ta = {
  Ring0: function() {
    return da;
  }
}, ie = function(n) {
  return n.mod;
}, et = {
  degree: Aa,
  div: Da,
  mod: La,
  CommutativeRing0: function() {
    return Ta;
  }
}, Ra = function(n) {
  return n.div;
}, Pa = /* @__PURE__ */ ie(et), gt = /* @__PURE__ */ Ra(et), ut = {
  mempty: "",
  Semigroup0: function() {
    return Xt;
  }
}, b = function(n) {
  return n.mempty;
}, Wa = function(n) {
  var r = b(n), t = Zt(n.Semigroup0());
  return {
    mempty: function(e) {
      return r;
    },
    Semigroup0: function() {
      return t;
    }
  };
}, za = function(n) {
  var r = b(n), t = X(n.Semigroup0());
  return function(e) {
    var u = function(a) {
      if (a <= 0)
        return r;
      if (a === 1)
        return e;
      if (Pa(a)(2) === 0) {
        var o = u(gt(a)(2));
        return t(o)(o);
      }
      {
        var o = u(gt(a)(2));
        return t(o)(t(o)(e));
      }
    };
    return u;
  };
}, jn = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), ce = function(n) {
  return n.value1;
}, at = function(n) {
  return n.value0;
}, fe = function(n) {
  return n.bimap;
}, Na = {
  bimap: function(n) {
    return function(r) {
      return function(t) {
        return new jn(n(t.value0), r(t.value1));
      };
    };
  }
};
const Ga = function(n) {
  return n;
};
var Ba = function() {
  return Ga;
}, Ua = /* @__PURE__ */ Ba(), Oa = function() {
  return Ua;
}, qa = /* @__PURE__ */ Ln(Tn), ot = function(n) {
  return n.foldr;
}, it = function(n) {
  var r = pr(n.Apply0()), t = P(n);
  return function(e) {
    var u = ot(e);
    return function(a) {
      return u(function(o) {
        return r(a(o));
      })(t(N));
    };
  };
}, Va = function(n) {
  var r = it(n);
  return function(t) {
    return wr(r(t));
  };
}, ka = function(n) {
  var r = it(n);
  return function(t) {
    return r(t)(qa);
  };
}, xr = function(n) {
  return n.foldl;
}, Ka = {
  foldr: function(n) {
    return function(r) {
      return function(t) {
        if (t instanceof w)
          return r;
        if (t instanceof d)
          return n(t.value0)(r);
        throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [n.constructor.name, r.constructor.name, t.constructor.name]);
      };
    };
  },
  foldl: function(n) {
    return function(r) {
      return function(t) {
        if (t instanceof w)
          return r;
        if (t instanceof d)
          return n(r)(t.value0);
        throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [n.constructor.name, r.constructor.name, t.constructor.name]);
      };
    };
  },
  foldMap: function(n) {
    var r = b(n);
    return function(t) {
      return function(e) {
        if (e instanceof w)
          return r;
        if (e instanceof d)
          return t(e.value0);
        throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [t.constructor.name, e.constructor.name]);
      };
    };
  }
}, ja = function(n) {
  var r = ot(n);
  return function(t) {
    var e = X(t.Semigroup0()), u = b(t);
    return function(a) {
      return r(function(o) {
        return function(f) {
          return e(a(o))(f);
        };
      })(u);
    };
  };
}, Wn = {
  foldr: bu,
  foldl: na,
  foldMap: function(n) {
    return ja(Wn)(n);
  }
}, le = function(n) {
  return n.foldMap;
}, se = function(n) {
  return n;
}, Xa = {
  map: function(n) {
    return function(r) {
      return n(r);
    };
  }
}, ve = {
  apply: function(n) {
    return function(r) {
      return n(r);
    };
  },
  Functor0: function() {
    return Xa;
  }
}, Za = {
  bind: function(n) {
    return function(r) {
      return r(n);
    };
  },
  Apply0: function() {
    return ve;
  }
}, Ja = {
  pure: se,
  Apply0: function() {
    return ve;
  }
}, Ya = {
  Applicative0: function() {
    return Ja;
  },
  Bind1: function() {
    return Za;
  }
}, de = function(n) {
  return n.foldrWithIndex;
}, Ha = function(n) {
  var r = pr(n.Apply0()), t = P(n);
  return function(e) {
    var u = de(e);
    return function(a) {
      return u(function(o) {
        var f = a(o);
        return function(c) {
          return r(f(c));
        };
      })(t(N));
    };
  };
}, me = function(n) {
  return n.foldMapWithIndex;
}, Qa = function(n) {
  return n;
}, we = function(n) {
  var r = ma(n);
  return {
    append: function(t) {
      return function(e) {
        return r(t)(e);
      };
    }
  };
}, ba = function(n) {
  var r = we(n.Ord0());
  return {
    mempty: ne(n),
    Semigroup0: function() {
      return r;
    }
  };
}, no = function(n) {
  return n;
}, pe = function(n) {
  var r = wa(n);
  return {
    append: function(t) {
      return function(e) {
        return r(t)(e);
      };
    }
  };
}, ro = function(n) {
  var r = pe(n.Ord0());
  return {
    mempty: Qt(n),
    Semigroup0: function() {
      return r;
    }
  };
};
const to = /* @__PURE__ */ function() {
  function n(u) {
    return [u];
  }
  function r(u) {
    return function(a) {
      return [u, a];
    };
  }
  function t(u) {
    return function(a) {
      return function(o) {
        return [u, a, o];
      };
    };
  }
  function e(u) {
    return function(a) {
      return u.concat(a);
    };
  }
  return function(u) {
    return function(a) {
      return function(o) {
        return function(f) {
          return function(c) {
            function l(v, E) {
              switch (E - v) {
                case 0:
                  return o([]);
                case 1:
                  return a(n)(f(c[v]));
                case 2:
                  return u(a(r)(f(c[v])))(f(c[v + 1]));
                case 3:
                  return u(u(a(t)(f(c[v])))(f(c[v + 1])))(f(c[v + 2]));
                default:
                  var F = v + Math.floor((E - v) / 4) * 2;
                  return u(a(e)(l(v, F)))(l(F, E));
              }
            }
            return l(0, c.length);
          };
        };
      };
    };
  };
}();
var eo = /* @__PURE__ */ Ln(Tn), ct = function(n) {
  return n.traverse;
}, uo = function(n) {
  var r = ct(n);
  return function(t) {
    return r(t)(eo);
  };
}, he = {
  traverse: function(n) {
    var r = n.Apply0();
    return to(Rn(r))(S(r.Functor0()))(P(n));
  },
  sequence: function(n) {
    return uo(he)(n);
  },
  Functor0: function() {
    return Qr;
  },
  Foldable1: function() {
    return Wn;
  }
}, ao = function(n) {
  return n.traverseWithIndex;
};
const oo = function(n) {
  return function(r) {
    return function(t) {
      return function(e) {
        return function(u) {
          return function(a) {
            for (var o = [], f = a; ; ) {
              var c = u(f);
              if (n(c))
                return o;
              var l = r(c);
              o.push(t(l)), f = e(l);
            }
          };
        };
      };
    };
  };
}, io = function(n) {
  return function(r) {
    return function(t) {
      return function(e) {
        return function(u) {
          return function(a) {
            for (var o = [], f = a; ; ) {
              var c = u(f);
              o.push(t(c));
              var l = e(c);
              if (n(l))
                return o;
              f = r(l);
            }
          };
        };
      };
    };
  };
};
var co = /* @__PURE__ */ yr(), fo = {
  unfoldr1: /* @__PURE__ */ io(re)(co)(at)(ce)
}, lo = /* @__PURE__ */ yr(), so = function(n) {
  return n.unfoldr;
}, vo = {
  unfoldr: /* @__PURE__ */ oo(re)(lo)(at)(ce),
  Unfoldable10: function() {
    return fo;
  }
}, U = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), h = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), Xn = {
  foldr: function(n) {
    return function(r) {
      var t = function() {
        var u = function(a) {
          return function(o) {
            var f = a, c = !1, l;
            function v(E, F) {
              if (F instanceof U)
                return c = !0, E;
              if (F instanceof h) {
                f = new h(F.value0, E), o = F.value1;
                return;
              }
              throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): " + [E.constructor.name, F.constructor.name]);
            }
            for (; !c; )
              l = v(f, o);
            return l;
          };
        };
        return u(U.value);
      }(), e = xr(Xn)(wr(n))(r);
      return function(u) {
        return e(t(u));
      };
    };
  },
  foldl: function(n) {
    var r = function(t) {
      return function(e) {
        var u = t, a = !1, o;
        function f(c, l) {
          if (l instanceof U)
            return a = !0, c;
          if (l instanceof h) {
            u = n(c)(l.value0), e = l.value1;
            return;
          }
          throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): " + [l.constructor.name]);
        }
        for (; !a; )
          o = f(u, e);
        return o;
      };
    };
    return r;
  },
  foldMap: function(n) {
    var r = X(n.Semigroup0()), t = b(n);
    return function(e) {
      return xr(Xn)(function(u) {
        var a = r(u);
        return function(o) {
          return a(e(o));
        };
      })(t);
    };
  }
}, In = function(n, r, t) {
  var e = 0, u;
  return function(a) {
    if (e === 2)
      return u;
    if (e === 1)
      throw new ReferenceError(n + " was needed before it finished initializing (module " + r + ", line " + a + ")", r, a);
    return e = 1, u = t(), e = 2, u;
  };
}, mo = /* @__PURE__ */ Ln(Tn), m = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), p = /* @__PURE__ */ function() {
  function n(r, t, e, u, a, o) {
    this.value0 = r, this.value1 = t, this.value2 = e, this.value3 = u, this.value4 = a, this.value5 = o;
  }
  return n.create = function(r) {
    return function(t) {
      return function(e) {
        return function(u) {
          return function(a) {
            return function(o) {
              return new n(r, t, e, u, a, o);
            };
          };
        };
      };
    };
  }, n;
}(), _e = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Ar = /* @__PURE__ */ function() {
  function n(r, t, e) {
    this.value0 = r, this.value1 = t, this.value2 = e;
  }
  return n.create = function(r) {
    return function(t) {
      return function(e) {
        return new n(r, t, e);
      };
    };
  }, n;
}(), ft = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), or = /* @__PURE__ */ function() {
  function n(r, t, e) {
    this.value0 = r, this.value1 = t, this.value2 = e;
  }
  return n.create = function(r) {
    return function(t) {
      return function(e) {
        return new n(r, t, e);
      };
    };
  }, n;
}(), $t = /* @__PURE__ */ function() {
  function n(r, t, e) {
    this.value0 = r, this.value1 = t, this.value2 = e;
  }
  return n.create = function(r) {
    return function(t) {
      return function(e) {
        return new n(r, t, e);
      };
    };
  }, n;
}(), G = function(n, r, t, e) {
  if (t instanceof m) {
    if (e instanceof m)
      return new p(1, 1, n, r, t, e);
    if (e instanceof p)
      return new p(1 + e.value0 | 0, 1 + e.value1 | 0, n, r, t, e);
    throw new Error("Failed pattern match at Data.Map.Internal (line 680, column 5 - line 684, column 39): " + [e.constructor.name]);
  }
  if (t instanceof p) {
    if (e instanceof m)
      return new p(1 + t.value0 | 0, 1 + t.value1 | 0, n, r, t, e);
    if (e instanceof p)
      return new p(1 + function() {
        var u = t.value0 > e.value0;
        return u ? t.value0 : e.value0;
      }() | 0, (1 + t.value1 | 0) + e.value1 | 0, n, r, t, e);
    throw new Error("Failed pattern match at Data.Map.Internal (line 686, column 5 - line 690, column 68): " + [e.constructor.name]);
  }
  throw new Error("Failed pattern match at Data.Map.Internal (line 678, column 32 - line 690, column 68): " + [t.constructor.name]);
}, wo = /* @__PURE__ */ function() {
  return wr(ft.create)(_e.value);
}(), po = function(n) {
  return function(r) {
    return function(t) {
      var e = function(u) {
        var a = !1, o;
        function f(c) {
          if (c instanceof _e)
            return a = !0, t(N);
          if (c instanceof Ar)
            return a = !0, r(c.value0, c.value1, c.value2);
          if (c instanceof ft) {
            u = n(c.value1)(c.value0);
            return;
          }
          throw new Error("Failed pattern match at Data.Map.Internal (line 918, column 8 - line 924, column 20): " + [c.constructor.name]);
        }
        for (; !a; )
          o = f(u);
        return o;
      };
      return e;
    };
  };
}, fr = function(n) {
  return function(r) {
    return new p(1, 1, n, r, m.value, m.value);
  };
}, un = /* @__PURE__ */ function() {
  var n = function(e) {
    if (e instanceof m)
      return 0;
    if (e instanceof p)
      return e.value0;
    throw new Error("Failed pattern match at Data.Map.Internal (line 735, column 12 - line 737, column 26): " + [e.constructor.name]);
  }, r = function(e, u, a, o, f, c, l) {
    return c instanceof p && c.value0 > n(l) ? G(c.value2, c.value3, G(e, u, a, c.value4), G(o, f, c.value5, l)) : G(o, f, G(e, u, a, c), l);
  }, t = function(e, u, a, o, f, c, l) {
    return c instanceof p && n(f) <= c.value0 ? G(c.value2, c.value3, G(a, o, f, c.value4), G(e, u, c.value5, l)) : G(a, o, f, G(e, u, c, l));
  };
  return function(e, u, a, o) {
    if (a instanceof m)
      return o instanceof m ? fr(e)(u) : o instanceof p && o.value0 > 1 ? r(e, u, a, o.value2, o.value3, o.value4, o.value5) : G(e, u, a, o);
    if (a instanceof p) {
      if (o instanceof p) {
        if (o.value0 > (a.value0 + 1 | 0))
          return r(e, u, a, o.value2, o.value3, o.value4, o.value5);
        if (a.value0 > (o.value0 + 1 | 0))
          return t(e, u, a.value2, a.value3, a.value4, a.value5, o);
      }
      return o instanceof m && a.value0 > 1 ? t(e, u, a.value2, a.value3, a.value4, a.value5, o) : G(e, u, a, o);
    }
    throw new Error("Failed pattern match at Data.Map.Internal (line 695, column 40 - line 716, column 34): " + [a.constructor.name]);
  };
}(), Dr = /* @__PURE__ */ In("unsafeSplit", "Data.Map.Internal", function() {
  return function(n, r, t) {
    if (t instanceof m)
      return new or(w.value, m.value, m.value);
    if (t instanceof p) {
      var e = n(r)(t.value2);
      if (e instanceof $n) {
        var u = Dr(771)(n, r, t.value4);
        return new or(u.value0, u.value1, un(t.value2, t.value3, u.value2, t.value5));
      }
      if (e instanceof Sn) {
        var u = Dr(774)(n, r, t.value5);
        return new or(u.value0, un(t.value2, t.value3, t.value4, u.value1), u.value2);
      }
      if (e instanceof Mn)
        return new or(new d(t.value3), t.value4, t.value5);
      throw new Error("Failed pattern match at Data.Map.Internal (line 769, column 5 - line 777, column 30): " + [e.constructor.name]);
    }
    throw new Error("Failed pattern match at Data.Map.Internal (line 765, column 34 - line 777, column 30): " + [t.constructor.name]);
  };
}), ho = /* @__PURE__ */ Dr(764), ye = /* @__PURE__ */ In("unsafeSplitLast", "Data.Map.Internal", function() {
  return function(n, r, t, e) {
    if (e instanceof m)
      return new $t(n, r, t);
    if (e instanceof p) {
      var u = ye(757)(e.value2, e.value3, e.value4, e.value5);
      return new $t(u.value0, u.value1, un(n, r, t, u.value2));
    }
    throw new Error("Failed pattern match at Data.Map.Internal (line 754, column 37 - line 758, column 57): " + [e.constructor.name]);
  };
}), _o = /* @__PURE__ */ ye(753), yo = function(n, r) {
  if (n instanceof m)
    return r;
  if (n instanceof p) {
    var t = _o(n.value2, n.value3, n.value4, n.value5);
    return un(t.value0, t.value1, t.value2, r);
  }
  throw new Error("Failed pattern match at Data.Map.Internal (line 742, column 25 - line 746, column 38): " + [n.constructor.name, r.constructor.name]);
}, Lr = /* @__PURE__ */ In("unsafeUnionWith", "Data.Map.Internal", function() {
  return function(n, r, t, e) {
    if (t instanceof m)
      return e;
    if (e instanceof m)
      return t;
    if (e instanceof p) {
      var u = ho(n, e.value2, t), a = Lr(787)(n, r, u.value1, e.value4), o = Lr(788)(n, r, u.value2, e.value5);
      if (u.value0 instanceof d)
        return un(e.value2, r(u.value0.value0)(e.value3), a, o);
      if (u.value0 instanceof w)
        return un(e.value2, e.value3, a, o);
      throw new Error("Failed pattern match at Data.Map.Internal (line 789, column 5 - line 793, column 46): " + [u.value0.constructor.name]);
    }
    throw new Error("Failed pattern match at Data.Map.Internal (line 782, column 42 - line 793, column 46): " + [t.constructor.name, e.constructor.name]);
  };
}), Io = /* @__PURE__ */ Lr(781), Eo = function(n) {
  var r = Pn(n);
  return function(t) {
    return function(e) {
      return function(u) {
        return Io(r, t, e, u);
      };
    };
  };
}, Fo = function(n) {
  return function(r) {
    var t = function(e) {
      if (e instanceof m)
        return m.value;
      if (e instanceof p) {
        var u = r(e.value2)(e.value3);
        if (u instanceof d)
          return un(e.value2, u.value0, t(e.value4), t(e.value5));
        if (u instanceof w)
          return yo(t(e.value4), t(e.value5));
        throw new Error("Failed pattern match at Data.Map.Internal (line 659, column 7 - line 663, column 47): " + [u.constructor.name]);
      }
      throw new Error("Failed pattern match at Data.Map.Internal (line 656, column 8 - line 663, column 47): " + [e.constructor.name]);
    };
    return t;
  };
}, go = function(n) {
  var r = Fo();
  return function(t) {
    return r(gn(t));
  };
}, $o = function(n) {
  var r = Pn(n);
  return function(t) {
    var e = function(u) {
      var a = !1, o;
      function f(c) {
        if (c instanceof m)
          return a = !0, w.value;
        if (c instanceof p) {
          var l = r(t)(c.value2);
          if (l instanceof $n) {
            u = c.value4;
            return;
          }
          if (l instanceof Sn) {
            u = c.value5;
            return;
          }
          if (l instanceof Mn)
            return a = !0, new d(c.value3);
          throw new Error("Failed pattern match at Data.Map.Internal (line 281, column 7 - line 284, column 22): " + [l.constructor.name]);
        }
        throw new Error("Failed pattern match at Data.Map.Internal (line 278, column 8 - line 284, column 22): " + [c.constructor.name]);
      }
      for (; !a; )
        o = f(u);
      return o;
    };
    return e;
  };
}, So = /* @__PURE__ */ function() {
  var n = function(r) {
    return function(t) {
      var e = r, u = !1, a;
      function o(f, c) {
        if (c instanceof m)
          return u = !0, f;
        if (c instanceof p) {
          if (c.value5 instanceof m) {
            e = new Ar(c.value2, c.value3, f), t = c.value4;
            return;
          }
          e = new Ar(c.value2, c.value3, new ft(c.value5, f)), t = c.value4;
          return;
        }
        throw new Error("Failed pattern match at Data.Map.Internal (line 929, column 13 - line 936, column 48): " + [c.constructor.name]);
      }
      for (; !u; )
        a = o(e, t);
      return a;
    };
  };
  return n;
}(), Mo = /* @__PURE__ */ po(So), Co = /* @__PURE__ */ function() {
  var n = function(r, t, e) {
    return new d(new jn(new jn(r, t), e));
  };
  return Mo(n)(function(r) {
    return w.value;
  });
}(), xo = function(n) {
  var r = so(n)(Co);
  return function(t) {
    return r(wo(t));
  };
}, Ao = function(n) {
  return n instanceof m;
}, Do = function(n) {
  var r = Pn(n);
  return function(t) {
    return function(e) {
      var u = function(a) {
        if (a instanceof m)
          return fr(t)(e);
        if (a instanceof p) {
          var o = r(t)(a.value2);
          if (o instanceof $n)
            return un(a.value2, a.value3, u(a.value4), a.value5);
          if (o instanceof Sn)
            return un(a.value2, a.value3, a.value4, u(a.value5));
          if (o instanceof Mn)
            return new p(a.value0, a.value1, t, e, a.value4, a.value5);
          throw new Error("Failed pattern match at Data.Map.Internal (line 469, column 7 - line 472, column 35): " + [o.constructor.name]);
        }
        throw new Error("Failed pattern match at Data.Map.Internal (line 466, column 8 - line 472, column 35): " + [a.constructor.name]);
      };
      return u;
    };
  };
}, lt = {
  map: function(n) {
    var r = function(t) {
      if (t instanceof m)
        return m.value;
      if (t instanceof p)
        return new p(t.value0, t.value1, t.value2, n(t.value3), r(t.value4), r(t.value5));
      throw new Error("Failed pattern match at Data.Map.Internal (line 145, column 10 - line 148, column 39): " + [t.constructor.name]);
    };
    return r;
  }
}, Lo = {
  mapWithIndex: function(n) {
    var r = function(t) {
      if (t instanceof m)
        return m.value;
      if (t instanceof p)
        return new p(t.value0, t.value1, t.value2, n(t.value2)(t.value3), r(t.value4), r(t.value5));
      throw new Error("Failed pattern match at Data.Map.Internal (line 153, column 10 - line 156, column 41): " + [t.constructor.name]);
    };
    return r;
  },
  Functor0: function() {
    return lt;
  }
}, Ie = {
  foldr: function(n) {
    return function(r) {
      var t = In("go", "Data.Map.Internal", function() {
        return function(u, a) {
          if (u instanceof m)
            return a;
          if (u instanceof p)
            return t(170)(u.value4, n(u.value3)(t(170)(u.value5, a)));
          throw new Error("Failed pattern match at Data.Map.Internal (line 167, column 26 - line 170, column 43): " + [u.constructor.name]);
        };
      }), e = t(167);
      return function(u) {
        return e(u, r);
      };
    };
  },
  foldl: function(n) {
    return function(r) {
      var t = In("go", "Data.Map.Internal", function() {
        return function(u, a) {
          if (a instanceof m)
            return u;
          if (a instanceof p)
            return t(176)(n(t(176)(u, a.value4))(a.value3), a.value5);
          throw new Error("Failed pattern match at Data.Map.Internal (line 173, column 26 - line 176, column 43): " + [a.constructor.name]);
        };
      }), e = t(173);
      return function(u) {
        return e(r, u);
      };
    };
  },
  foldMap: function(n) {
    var r = b(n), t = X(n.Semigroup0());
    return function(e) {
      var u = function(a) {
        if (a instanceof m)
          return r;
        if (a instanceof p)
          return t(u(a.value4))(t(e(a.value3))(u(a.value5)));
        throw new Error("Failed pattern match at Data.Map.Internal (line 179, column 10 - line 182, column 28): " + [a.constructor.name]);
      };
      return u;
    };
  }
}, nr = {
  foldrWithIndex: function(n) {
    return function(r) {
      var t = In("go", "Data.Map.Internal", function() {
        return function(u, a) {
          if (u instanceof m)
            return a;
          if (u instanceof p)
            return t(190)(u.value4, n(u.value2)(u.value3)(t(190)(u.value5, a)));
          throw new Error("Failed pattern match at Data.Map.Internal (line 187, column 26 - line 190, column 45): " + [u.constructor.name]);
        };
      }), e = t(187);
      return function(u) {
        return e(u, r);
      };
    };
  },
  foldlWithIndex: function(n) {
    return function(r) {
      var t = In("go", "Data.Map.Internal", function() {
        return function(u, a) {
          if (a instanceof m)
            return u;
          if (a instanceof p)
            return t(196)(n(a.value2)(t(196)(u, a.value4))(a.value3), a.value5);
          throw new Error("Failed pattern match at Data.Map.Internal (line 193, column 26 - line 196, column 45): " + [a.constructor.name]);
        };
      }), e = t(193);
      return function(u) {
        return e(r, u);
      };
    };
  },
  foldMapWithIndex: function(n) {
    var r = b(n), t = X(n.Semigroup0());
    return function(e) {
      var u = function(a) {
        if (a instanceof m)
          return r;
        if (a instanceof p)
          return t(u(a.value4))(t(e(a.value2)(a.value3))(u(a.value5)));
        throw new Error("Failed pattern match at Data.Map.Internal (line 199, column 10 - line 202, column 30): " + [a.constructor.name]);
      };
      return u;
    };
  },
  Foldable0: function() {
    return Ie;
  }
}, Ee = {
  traverse: function(n) {
    var r = P(n), t = n.Apply0(), e = Rn(t), u = S(t.Functor0());
    return function(a) {
      var o = function(f) {
        if (f instanceof m)
          return r(m.value);
        if (f instanceof p)
          return e(e(u(function(c) {
            return function(l) {
              return function(v) {
                return new p(f.value0, f.value1, f.value2, l, c, v);
              };
            };
          })(o(f.value4)))(a(f.value3)))(o(f.value5));
        throw new Error("Failed pattern match at Data.Map.Internal (line 207, column 10 - line 213, column 19): " + [f.constructor.name]);
      };
      return o;
    };
  },
  sequence: function(n) {
    return ct(Ee)(n)(mo);
  },
  Functor0: function() {
    return lt;
  },
  Foldable1: function() {
    return Ie;
  }
}, To = {
  traverseWithIndex: function(n) {
    var r = P(n), t = n.Apply0(), e = Rn(t), u = S(t.Functor0());
    return function(a) {
      var o = function(f) {
        if (f instanceof m)
          return r(m.value);
        if (f instanceof p)
          return e(e(u(function(c) {
            return function(l) {
              return function(v) {
                return new p(f.value0, f.value1, f.value2, l, c, v);
              };
            };
          })(o(f.value4)))(a(f.value2)(f.value3)))(o(f.value5));
        throw new Error("Failed pattern match at Data.Map.Internal (line 219, column 10 - line 225, column 19): " + [f.constructor.name]);
      };
      return o;
    };
  },
  FunctorWithIndex0: function() {
    return Lo;
  },
  FoldableWithIndex1: function() {
    return nr;
  },
  Traversable2: function() {
    return Ee;
  }
}, Ro = /* @__PURE__ */ function() {
  return m.value;
}(), Po = function(n) {
  var r = Do(n);
  return function(t) {
    return xr(t)(function(e) {
      return function(u) {
        return r(u.value0)(u.value1)(e);
      };
    })(Ro);
  };
}, A = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), j = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), en = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), W = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), vn = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), H = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), L = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), R = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Q = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), $ = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), O = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), an = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), on = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Fe = function(n) {
  var r = bn(n.Bind1()), t = P(n.Applicative0());
  return function(e) {
    return function(u) {
      return r(e)(function(a) {
        return r(u)(function(o) {
          return t(a(o));
        });
      });
    };
  };
};
const Wo = function(n) {
  return function() {
    return n;
  };
}, zo = function(n) {
  return function(r) {
    return function() {
      return r(n())();
    };
  };
};
var ge = function(n, r, t) {
  var e = 0, u;
  return function(a) {
    if (e === 2)
      return u;
    if (e === 1)
      throw new ReferenceError(n + " was needed before it finished initializing (module " + r + ", line " + a + ")", r, a);
    return e = 1, u = t(), e = 2, u;
  };
}, No = {
  Applicative0: function() {
    return xn;
  },
  Bind1: function() {
    return Go;
  }
}, Go = {
  bind: zo,
  Apply0: function() {
    return Se(0);
  }
}, xn = {
  pure: Wo,
  Apply0: function() {
    return Se(0);
  }
}, $e = /* @__PURE__ */ ge("functorEffect", "Effect", function() {
  return {
    map: Hu(xn)
  };
}), Se = /* @__PURE__ */ ge("applyEffect", "Effect", function() {
  return {
    apply: Fe(No),
    Functor0: function() {
      return $e(0);
    }
  };
}), Bo = /* @__PURE__ */ $e(20);
const Uo = function(n) {
  return function() {
    return { value: n };
  };
}, D = function(n) {
  return function() {
    return n.value;
  };
}, Oo = function(n) {
  return function(r) {
    return function() {
      var t = n(r.value);
      return r.value = t.state, t.value;
    };
  };
}, lr = function(n) {
  return function(r) {
    return function() {
      r.value = n;
    };
  };
};
var hn = Uo, qo = Oo, Vo = function(n) {
  return qo(function(r) {
    var t = n(r);
    return {
      state: t,
      value: t
    };
  });
}, En = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Fn = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), st = function(n) {
  return n.tailRecM;
}, ko = function(n) {
  var r = function(t) {
    var e = !1, u;
    function a(o) {
      if (o instanceof En) {
        t = n(o.value0);
        return;
      }
      if (o instanceof Fn)
        return e = !0, o.value0;
      throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 103, column 3 - line 103, column 25): " + [o.constructor.name]);
    }
    for (; !e; )
      u = a(t);
    return u;
  };
  return function(t) {
    return r(n(t));
  };
}, Ko = {
  tailRecM: function(n) {
    var r = function(e) {
      return e;
    }, t = ko(function(e) {
      return r(n(e));
    });
    return function(e) {
      return se(t(e));
    };
  },
  Monad0: function() {
    return Ya;
  }
}, jo = {
  bimap: function(n) {
    return function(r) {
      return function(t) {
        if (t instanceof En)
          return new En(n(t.value0));
        if (t instanceof Fn)
          return new Fn(r(t.value0));
        throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 33, column 1 - line 35, column 34): " + [n.constructor.name, r.constructor.name, t.constructor.name]);
      };
    };
  }
}, Xo = /* @__PURE__ */ fe(jo), Zo = /* @__PURE__ */ Ln(Tn), Me = /* @__PURE__ */ function() {
  var n = function(r) {
    return function(t) {
      var e = r, u = !1, a;
      function o(f, c) {
        if (c instanceof U)
          return u = !0, f;
        if (c instanceof h) {
          e = new h(c.value0, f), t = c.value1;
          return;
        }
        throw new Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [f.constructor.name, c.constructor.name]);
      }
      for (; !u; )
        a = o(e, t);
      return a;
    };
  };
  return n(U.value);
}(), Jo = function(n) {
  var r = function(t) {
    return function(e) {
      var u = t, a = !1, o;
      function f(c, l) {
        if (l instanceof U)
          return a = !0, Me(c);
        if (l instanceof h) {
          var v = n(l.value0);
          if (v instanceof w) {
            u = c, e = l.value1;
            return;
          }
          if (v instanceof d) {
            u = new h(v.value0, c), e = l.value1;
            return;
          }
          throw new Error("Failed pattern match at Data.List (line 419, column 5 - line 421, column 32): " + [v.constructor.name]);
        }
        throw new Error("Failed pattern match at Data.List (line 417, column 3 - line 417, column 27): " + [c.constructor.name, l.constructor.name]);
      }
      for (; !a; )
        o = f(u, e);
      return o;
    };
  };
  return r(U.value);
}, Yo = function(n) {
  var r = bn(n.Monad0().Bind1()), t = st(n);
  return function(e) {
    var u = e.Plus1().Alt0(), a = nt(u), o = S(u.Functor0()), f = P(e.Applicative0());
    return function(c) {
      var l = function(v) {
        return r(a(o(En.create)(c))(f(new Fn(N))))(function(E) {
          return f(Xo(function(F) {
            return new h(F, v);
          })(function(F) {
            return Me(v);
          })(E));
        });
      };
      return t(l)(U.value);
    };
  };
}, Ho = /* @__PURE__ */ Jo(Zo);
const Qo = function(n) {
  return n;
}, Ce = function(n) {
  return n.length;
}, bo = function(n) {
  return function(r) {
    return function(t) {
      return function(e) {
        var u = e.indexOf(t);
        return u === -1 ? r : n(u);
      };
    };
  };
}, St = function(n) {
  return function(r) {
    return r.substring(n);
  };
}, Vn = function(n) {
  return function(r) {
    if (n >= 0 && n < r.length)
      return r.charAt(n);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
};
var ni = /* @__PURE__ */ function() {
  return bo(d.create)(w.value);
}(), ri = function(n) {
  var r = ni(n);
  return function(t) {
    return Ia(r(t));
  };
};
function ti(n) {
  return new Error(n);
}
function ei(n) {
  return function() {
    throw n;
  };
}
var ui = function(n) {
  return ei(ti(n));
}, ai = function(n) {
  return n.throwError;
};
const oi = function(n) {
  var r = null;
  return function() {
    return n === void 0 || (r = n(), n = void 0), r;
  };
}, ii = function(n) {
  return n();
};
var ci = function(n, r, t) {
  var e = 0, u;
  return function(a) {
    if (e === 2)
      return u;
    if (e === 1)
      throw new ReferenceError(n + " was needed before it finished initializing (module " + r + ", line " + a + ")", r, a);
    return e = 1, u = t(), e = 2, u;
  };
}, fi = /* @__PURE__ */ Oa(), Ir = /* @__PURE__ */ function() {
  function n(r, t, e) {
    this.value0 = r, this.value1 = t, this.value2 = e;
  }
  return n.create = function(r) {
    return function(t) {
      return function(e) {
        return new n(r, t, e);
      };
    };
  }, n;
}(), kn = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), Mt = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Ct = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), $r = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), li = {
  defer: function(n) {
    var r = oi(n);
    return function(t, e, u, a, o) {
      var f = ii(r);
      return f(t, e, u, a, o);
    };
  }
}, rr = {
  map: function(n) {
    return function(r) {
      return function(t, e, u, a, o) {
        return e(function(f) {
          return r(t, e, u, a, function(c, l) {
            return e(function(v) {
              return o(c, n(l));
            });
          });
        });
      };
    };
  }
}, tr = {
  apply: function(n) {
    return function(r) {
      return function(t, e, u, a, o) {
        return e(function(f) {
          return n(t, e, u, a, function(c, l) {
            return e(function(v) {
              return r(c, e, u, a, function(E, F) {
                return e(function(T) {
                  return o(E, l(F));
                });
              });
            });
          });
        });
      };
    };
  },
  Functor0: function() {
    return rr;
  }
}, vt = {
  bind: function(n) {
    return function(r) {
      return function(t, e, u, a, o) {
        return e(function(f) {
          return n(t, e, u, a, function(c, l) {
            return e(function(v) {
              var E = r(l);
              return E(c, e, u, a, o);
            });
          });
        });
      };
    };
  },
  Apply0: function() {
    return tr;
  }
}, si = /* @__PURE__ */ Qu(vt), Er = {
  pure: function(n) {
    return function(r, t, e, u, a) {
      return a(r, n);
    };
  },
  Apply0: function() {
    return tr;
  }
}, xe = {
  Applicative0: function() {
    return Er;
  },
  Bind1: function() {
    return vt;
  }
}, Ae = {
  tailRecM: function(n) {
    return function(r) {
      return function(t, e, u, a, o) {
        var f = ci("loop", "Parsing", function() {
          return function(l, v, E) {
            var F = n(v);
            return F(l, e, u, a, function(T, z) {
              if (z instanceof En) {
                var g = E === 0;
                return g ? e(function(J) {
                  return f(277)(T, z.value0, 30);
                }) : f(279)(T, z.value0, E - 1 | 0);
              }
              if (z instanceof Fn)
                return o(T, z.value0);
              throw new Error("Failed pattern match at Parsing (line 273, column 39 - line 281, column 43): " + [z.constructor.name]);
            });
          };
        }), c = f(270);
        return c(t, r, 30);
      };
    };
  },
  Monad0: function() {
    return xe;
  }
}, vi = {
  throwError: function(n) {
    return function(r, t, e, u, a) {
      return u(r, n);
    };
  },
  Monad0: function() {
    return xe;
  }
}, di = /* @__PURE__ */ ai(vi), dt = {
  alt: function(n) {
    return function(r) {
      return function(t, e, u, a, o) {
        return e(function(f) {
          return n(new Ir(t.value0, t.value1, !1), e, u, function(c, l) {
            return e(function(v) {
              return c.value2 ? a(c, l) : r(t, e, u, a, o);
            });
          }, o);
        });
      };
    };
  },
  Functor0: function() {
    return rr;
  }
}, mi = function(n) {
  return function(r, t, e, u, a) {
    var o = n(r);
    return a(o.value1, o.value0);
  };
}, wi = function(n) {
  var r = n.Monad0(), t = S(r.Bind1().Apply0().Functor0()), e = P(r.Applicative0()), u = st(n);
  return function(a) {
    return function(o) {
      var f = function(c) {
        var l = !1, v;
        function E(F) {
          var T = F(N);
          if (T instanceof Mt) {
            c = T.value0;
            return;
          }
          if (T instanceof Ct)
            return l = !0, t(En.create)(T.value0);
          if (T instanceof $r)
            return l = !0, e(new Fn(new jn(T.value1, T.value0)));
          throw new Error("Failed pattern match at Parsing (line 152, column 13 - line 158, column 32): " + [T.constructor.name]);
        }
        for (; !l; )
          v = E(c);
        return v;
      };
      return u(f)(function(c) {
        return o(a, Mt.create, Ct.create, function(l, v) {
          return new $r(l, new ue(v));
        }, function(l, v) {
          return new $r(l, new ae(v));
        });
      });
    };
  };
}, pi = /* @__PURE__ */ mi(function(n) {
  return new jn(n.value1, n);
}), hi = {
  index: 0,
  line: 1,
  column: 1
}, _i = function(n) {
  var r = S(n.Monad0().Bind1().Apply0().Functor0()), t = wi(n);
  return function(e) {
    return function(u) {
      var a = new Ir(e, hi, !1);
      return r(at)(t(a)(u));
    };
  };
}, yi = /* @__PURE__ */ _i(Ko), Ii = function(n) {
  var r = yi(n);
  return function(t) {
    return fi(r(t));
  };
}, Ei = function(n) {
  return function(r) {
    return di(new kn(n, r));
  };
}, De = function(n) {
  return si(Ei(n))(pi);
}, Le = {
  empty: /* @__PURE__ */ De("No alternative"),
  Alt0: function() {
    return dt;
  }
}, Fi = {
  Applicative0: function() {
    return Er;
  },
  Plus1: function() {
    return Le;
  }
};
const gi = function(n) {
  return n();
}, $i = function(n) {
  throw new Error(n);
};
var Si = function() {
  return $i;
}, Mi = /* @__PURE__ */ Si(), Ci = gi, xi = function(n) {
  return Ci(function() {
    return Mi(n);
  });
}, mt = /* @__PURE__ */ nt(dt), Ai = /* @__PURE__ */ jt(rr), Di = /* @__PURE__ */ P(Er), Te = /* @__PURE__ */ pr(tr), Li = /* @__PURE__ */ st(Ae), Ti = /* @__PURE__ */ Yo(Ae)(Fi), Ri = /* @__PURE__ */ br(tr), Pi = /* @__PURE__ */ ta(Le), Wi = function(n) {
  return function(r) {
    return mt(n)(De("Expected " + r));
  };
}, zi = function(n) {
  var r = function(t) {
    return mt(Ai(n)(new En(N)))(Di(new Fn(N)));
  };
  return Te(n)(Li(r)(N));
}, Ni = Ti, Gi = function(n) {
  var r = function(u) {
    return function(a) {
      if (a instanceof w)
        return new d(u);
      if (a instanceof d)
        return new d(mt(u)(a.value0));
      throw new Error("Failed pattern match at Parsing.Combinators (line 358, column 11 - line 360, column 32): " + [a.constructor.name]);
    };
  }, t = Fa(Pi), e = ot(n)(r)(w.value);
  return function(u) {
    return t(e(u));
  };
}, Bi = function(n) {
  return function(r) {
    return function(t) {
      return Ri(Te(n)(t))(r);
    };
  };
};
const wt = function(n) {
  return n.length;
}, Ui = function(n, r, t, e) {
  return e < 0 || e >= t.length ? r : n(t[e]);
}, Oi = function(n) {
  return function(r) {
    return function() {
      return n(r());
    };
  };
}, qi = function(n) {
  return function() {
    return n;
  };
}, Vi = function(n) {
  return function(r) {
    return function() {
      return r(n())();
    };
  };
};
function pt(n) {
  return function() {
    return { value: n };
  };
}
const Fr = function(n) {
  return function() {
    return n.value;
  };
}, ki = function(n) {
  return function(r) {
    return function() {
      var t = n(r.value);
      return r.value = t.state, t.value;
    };
  };
}, Re = function(n) {
  return function(r) {
    return function() {
      return r.value = n;
    };
  };
};
var Ki = function(n, r, t) {
  var e = 0, u;
  return function(a) {
    if (e === 2)
      return u;
    if (e === 1)
      throw new ReferenceError(n + " was needed before it finished initializing (module " + r + ", line " + a + ")", r, a);
    return e = 1, u = t(), e = 2, u;
  };
}, ji = ki, Xi = function(n) {
  return ji(function(r) {
    var t = n(r);
    return {
      state: t,
      value: t
    };
  });
}, er = {
  map: Oi
}, Zi = {
  Applicative0: function() {
    return gr;
  },
  Bind1: function() {
    return Pe;
  }
}, Pe = {
  bind: Vi,
  Apply0: function() {
    return ht(0);
  }
}, gr = {
  pure: qi,
  Apply0: function() {
    return ht(0);
  }
}, ht = /* @__PURE__ */ Ki("applyST", "Control.Monad.ST.Internal", function() {
  return {
    apply: Fe(Zi),
    Functor0: function() {
      return er;
    }
  };
}), Ji = /* @__PURE__ */ ht(47);
function Tr() {
  return [];
}
function Yi(n) {
  return n;
}
const Hi = Yi, Qi = function(n, r) {
  return r.push(n);
}, bi = function(r) {
  return function(t) {
    return function() {
      return r(t);
    };
  };
}, nc = function(r) {
  return function(t) {
    return function(e) {
      return function() {
        return r(t, e);
      };
    };
  };
};
var rc = /* @__PURE__ */ bn(Pe), Rr = /* @__PURE__ */ bi(Hi), tc = function(n) {
  return rc(n)(Rr)();
}, sr = /* @__PURE__ */ nc(Qi), _t = /* @__PURE__ */ S(er), We = /* @__PURE__ */ oe(Cr), Pr = /* @__PURE__ */ Hr(er), ec = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), uc = function(n) {
  return function() {
    var t = Fr(n.value1)();
    return n.value0(t);
  };
}, ze = function(n) {
  return function() {
    var t = Fr(n.value1)();
    return Xi(function(e) {
      return e + 1 | 0;
    })(n.value1)(), n.value0(t);
  };
}, ac = function(n) {
  return function(r) {
    return function(t) {
      return function() {
        for (var u = pt(!1)(); _t(We)(Fr(u))(); )
          (function() {
            var o = uc(r)();
            return o instanceof d && n(o.value0) ? (sr(o.value0)(t)(), Pr(ze(r))()) : Pr(Re(!0)(u))();
          })();
        return {};
      };
    };
  };
}, oc = function(n) {
  return _t(ec.create(n))(pt(0));
}, ic = function(n) {
  return function(r) {
    return function() {
      for (var e = pt(!1)(); _t(We)(Fr(e))(); )
        (function() {
          var a = ze(n)();
          if (a instanceof d)
            return r(a.value0)();
          if (a instanceof w)
            return Pr(Re(!0)(e))();
          throw new Error("Failed pattern match at Data.Array.ST.Iterator (line 42, column 5 - line 44, column 47): " + [a.constructor.name]);
        })();
      return {};
    };
  };
};
const Ne = function(n) {
  return function(r, t, e, u, a) {
    return n(r)(t)(e)(u)(a);
  };
}, cc = function(n) {
  return function(r) {
    return function(t) {
      return function(e) {
        return function(u) {
          return n(r, t, e, u);
        };
      };
    };
  };
};
var fc = /* @__PURE__ */ Hr(er), V = function(n) {
  return wt(n) === 0;
}, Ge = /* @__PURE__ */ function() {
  return cc(Ui)(d.create)(w.value);
}(), lc = function(n) {
  return Ge(n)(0);
}, sc = function(n) {
  return function(r) {
    return function() {
      var e = Tr(), u = oc(function(a) {
        return Ge(r)(a);
      })();
      return ic(u)(function(a) {
        return fc(function() {
          var f = Tr();
          sr(a)(f)(), ac(n(a))(u)(f)();
          var c = Rr(f)();
          return sr(c)(e)();
        });
      })(), Rr(e)();
    }();
  };
}, vc = function(n) {
  var r = Qn(n);
  return function(t) {
    return sc(r)(t);
  };
}, dc = /* @__PURE__ */ yr(), Be = function(n) {
  return n;
}, mc = function(n) {
  return function(r) {
    return dc(n(Be(r)));
  };
}, wc = /* @__PURE__ */ mc(lc), pc = function(n) {
  return function(r) {
    return n(Be(r));
  };
}, hc = /* @__PURE__ */ pc(wt);
function _n(n) {
  return n.charCodeAt(0);
}
function _c(n) {
  return String.fromCharCode(n);
}
var Ue = /* @__PURE__ */ ne(rt), Oe = /* @__PURE__ */ Qt(rt), Wr = function(n) {
  return n.toEnum;
}, vr = function(n) {
  return n.fromEnum;
}, qe = function(n) {
  return function(r) {
    return function(t) {
      return n(r(t) + 1 | 0);
    };
  };
}, Ve = function(n) {
  return function(r) {
    return function(t) {
      return n(r(t) - 1 | 0);
    };
  };
}, zr = function(n) {
  return n >= _n(Ue) && n <= _n(Oe) ? new d(_c(n)) : w.value;
}, yc = {
  succ: /* @__PURE__ */ qe(zr)(_n),
  pred: /* @__PURE__ */ Ve(zr)(_n),
  Ord0: function() {
    return Ht;
  }
}, ke = /* @__PURE__ */ function() {
  return {
    cardinality: _n(Oe) - _n(Ue) | 0,
    toEnum: zr,
    fromEnum: _n,
    Bounded0: function() {
      return rt;
    },
    Enum1: function() {
      return yc;
    }
  };
}(), Ic = typeof Symbol < "u" && Symbol != null && typeof Symbol.iterator < "u" && typeof String.prototype[Symbol.iterator] == "function", Ec = typeof String.prototype.codePointAt == "function";
const Fc = function(n) {
  return Ec ? function(r) {
    return r.codePointAt(0);
  } : n;
}, gc = function(n) {
  return function(r) {
    return function(t) {
      return function(e) {
        return function(u) {
          return function(a) {
            var o = a.length;
            if (u < 0 || u >= o)
              return t;
            if (Ic)
              for (var f = a[Symbol.iterator](), c = u; ; --c) {
                var l = f.next();
                if (l.done)
                  return t;
                if (c === 0)
                  return r(e(l.value));
              }
            return n(u)(a);
          };
        };
      };
    };
  };
};
var $c = function(n) {
  return n === "";
}, Sc = function(n, r, t) {
  var e = 0, u;
  return function(a) {
    if (e === 2)
      return u;
    if (e === 1)
      throw new ReferenceError(n + " was needed before it finished initializing (module " + r + ", line " + a + ")", r, a);
    return e = 1, u = t(), e = 2, u;
  };
}, Kn = /* @__PURE__ */ vr(ke), Mc = /* @__PURE__ */ Pn(Cn), Ke = function(n) {
  return function(r) {
    return (((n - 55296 | 0) * 1024 | 0) + (r - 56320 | 0) | 0) + 65536 | 0;
  };
}, je = function(n) {
  return 56320 <= n && n <= 57343;
}, Xe = function(n) {
  return 55296 <= n && n <= 56319;
}, Ze = function(n) {
  var r = Ce(n);
  if (r === 0)
    return w.value;
  if (r === 1)
    return new d({
      head: Kn(Vn(0)(n)),
      tail: ""
    });
  var t = Kn(Vn(1)(n)), e = Kn(Vn(0)(n)), u = Xe(e) && je(t);
  return u ? new d({
    head: Ke(e)(t),
    tail: St(2)(n)
  }) : new d({
    head: e,
    tail: St(1)(n)
  });
}, Cc = function(n) {
  var r = Kn(Vn(0)(n)), t = Xe(r) && Ce(n) > 1;
  if (t) {
    var e = Kn(Vn(1)(n)), u = je(e);
    return u ? Ke(r)(e) : r;
  }
  return r;
}, xt = /* @__PURE__ */ Fc(Cc), xc = {
  eq: function(n) {
    return function(r) {
      return n === r;
    };
  }
}, Je = {
  compare: function(n) {
    return function(r) {
      return Mc(n)(r);
    };
  },
  Eq0: function() {
    return xc;
  }
}, Ac = function(n) {
  return function(r) {
    var t = n, e = !1, u;
    function a(o, f) {
      var c = Ze(f);
      if (c instanceof d) {
        var l = o === 0;
        if (l)
          return e = !0, new d(c.value0.head);
        t = o - 1 | 0, r = c.value0.tail;
        return;
      }
      return e = !0, w.value;
    }
    for (; !e; )
      u = a(t, r);
    return u;
  };
}, Dc = function(n) {
  return function(r) {
    return n < 0 || n === 0 && r === "" ? w.value : n === 0 ? new d(xt(r)) : gc(Ac)(d.create)(w.value)(xt)(n)(r);
  };
}, Lc = {
  bottom: 0,
  top: 1114111,
  Ord0: function() {
    return Je;
  }
}, On = /* @__PURE__ */ function() {
  return {
    cardinality: 1114112,
    fromEnum: function(n) {
      return n;
    },
    toEnum: function(n) {
      return n >= 0 && n <= 1114111 ? new d(n) : w.value;
    },
    Bounded0: function() {
      return Lc;
    },
    Enum1: function() {
      return Tc(0);
    }
  };
}(), Tc = /* @__PURE__ */ Sc("enumCodePoint", "Data.String.CodePoints", function() {
  return {
    succ: qe(Wr(On))(vr(On)),
    pred: Ve(Wr(On))(vr(On)),
    Ord0: function() {
      return Je;
    }
  };
}), Nr = /* @__PURE__ */ vr(On), Rc = /* @__PURE__ */ ie(et), Pc = /* @__PURE__ */ yr(), Wc = /* @__PURE__ */ Wr(ke), zc = /* @__PURE__ */ hr(_a), Nc = function(n) {
  return function(r) {
    return function(t) {
      var e = Nr(r);
      if (e === 10)
        return {
          index: n.index + 1 | 0,
          line: n.line + 1 | 0,
          column: 1
        };
      if (e === 13) {
        var u = Dc(0)(t);
        return u instanceof d && Nr(u.value0) === 10 ? {
          index: n.index + 1 | 0,
          line: n.line,
          column: n.column
        } : {
          index: n.index + 1 | 0,
          line: n.line + 1 | 0,
          column: 1
        };
      }
      return e === 9 ? {
        index: n.index + 1 | 0,
        line: n.line,
        column: (n.column + 8 | 0) - Rc(n.column - 1 | 0)(8) | 0
      } : {
        index: n.index + 1 | 0,
        line: n.line,
        column: n.column + 1 | 0
      };
    };
  };
}, Ye = function(n) {
  return Ne(function(r) {
    return function(t) {
      return function(e) {
        return function(u) {
          return function(a) {
            var o = Ze(r.value0);
            if (o instanceof w)
              return u(r, new kn("Unexpected EOF", r.value1));
            if (o instanceof d) {
              var f = Nr(o.value0.head), c = f < 0 || f > 65535;
              if (c)
                return u(r, new kn("Expected Char", r.value1));
              var l = Pc(Wc(f)), v = n(l);
              return v ? a(new Ir(o.value0.tail, Nc(r.value1)(o.value0.head)(o.value0.tail), !0), l) : u(r, new kn("Predicate unsatisfied", r.value1));
            }
            throw new Error("Failed pattern match at Parsing.String (line 114, column 7 - line 129, column 75): " + [o.constructor.name]);
          };
        };
      };
    };
  });
}, Gc = /* @__PURE__ */ Ne(function(n) {
  return function(r) {
    return function(t) {
      return function(e) {
        return function(u) {
          var a = $c(n.value0);
          return a ? u(new Ir(n.value0, n.value1, !0), N) : e(n, new kn("Expected EOF", n.value1));
        };
      };
    };
  };
}), cn = function(n) {
  return Wi(Ye(function(r) {
    return r === n;
  }))(zc(n));
}, Bc = function(n, r, t) {
  var e = 0, u;
  return function(a) {
    if (e === 2)
      return u;
    if (e === 1)
      throw new ReferenceError(n + " was needed before it finished initializing (module " + r + ", line " + a + ")", r, a);
    return e = 1, u = t(), e = 2, u;
  };
}, dn = /* @__PURE__ */ jt(rr), Uc = /* @__PURE__ */ bn(vt), Oc = /* @__PURE__ */ P(Er), At = /* @__PURE__ */ nt(dt), Dt = /* @__PURE__ */ S(rr), Lt = /* @__PURE__ */ hr(tt), qc = /* @__PURE__ */ P(xn), He = /* @__PURE__ */ Bc("procP", "Parse", function() {
  var n = Gi(Wn)([dn(cn(">"))(new Q(1)), dn(cn("<"))(new Q(-1)), dn(cn("+"))(new $(fr(0)(new L(1)))), dn(cn("-"))(new $(fr(0)(new L(-1)))), dn(cn("."))(new on(0)), dn(cn(","))(new an(0))]), r = function(a) {
    return function(o) {
      return !ri(Qo(o))(a);
    };
  }, t = dn(zi(Ye(r("<>+-.,[]"))))(w.value), e = $a(li)(function(a) {
    return Uc(Bi(cn("["))(cn("]"))(He(33)))(function(o) {
      return Oc(new O({
        idx: 0,
        proc: o
      }));
    });
  }), u = At(Dt(d.create)(At(n)(e)))(t);
  return Dt(Ho)(Ni(u));
}), Vc = /* @__PURE__ */ He(20), kc = /* @__PURE__ */ br(tr)(Vc)(Gc), Kc = function(n) {
  var r = Ii(n)(kc);
  if (r instanceof ue)
    return ui("Error at line " + (Lt(r.value0.value1.line) + (", column " + (Lt(r.value0.value1.column) + (`:
` + r.value0.value0)))));
  if (r instanceof ae)
    return qc(r.value0);
  throw new Error("Failed pattern match at Parse (line 42, column 11 - line 50, column 20): " + [r.constructor.name]);
}, x = /* @__PURE__ */ hr(tt), jc = /* @__PURE__ */ za(ut), Qe = /* @__PURE__ */ le(Xn)(ut), wn = /* @__PURE__ */ X(/* @__PURE__ */ Zt(Xt)), Gr = /* @__PURE__ */ me(nr)(/* @__PURE__ */ Wa(ut)), nn = function(n) {
  return function(r) {
    if (r instanceof A)
      return x(r.value0);
    if (r instanceof j)
      return n + ("[" + (x(r.value0) + "]"));
    if (r instanceof en)
      return n + ("-" + (nn(n)(r.value0) + ""));
    if (r instanceof W)
      return "(" + (nn(n)(r.value0) + (" + " + (nn(n)(r.value1) + ")")));
    if (r instanceof vn)
      return "(" + (nn(n)(r.value0) + (" - " + (nn(n)(r.value1) + ")")));
    if (r instanceof H)
      return "(" + (nn(n)(r.value0) + (" * " + (nn(n)(r.value1) + ")")));
    throw new Error("Failed pattern match at Show (line 50, column 1 - line 50, column 37): " + [n.constructor.name, r.constructor.name]);
  };
}, M = function(n) {
  return function(r) {
    return jc("  ")(r) + (n + `
`);
  };
}, dr = function(n) {
  return function(r) {
    return n(r + 1 | 0);
  };
}, be = function(n) {
  return function(r) {
    return Qe(function(t) {
      return Xc(t)(r);
    })(n);
  };
}, Xc = function(n) {
  if (n instanceof Q)
    return M("p += " + (x(n.value0) + ";"));
  if (n instanceof $) {
    var r = function(o) {
      return o < 0 ? "v_" + x(-o | 0) : "v" + x(o);
    }, t = function(o) {
      return function(f) {
        return M("p[" + (x(o) + ("] = " + (r(o) + ";"))));
      };
    }, e = function(o) {
      return function(f) {
        return M("uint8_t " + (r(o) + (" = " + (nn("p")(f) + ";"))));
      };
    }, u = function(o) {
      return function(f) {
        if (f instanceof L)
          return e(o)(new W(new A(f.value0), new j(o)));
        if (f instanceof R)
          return e(o)(f.value0);
        throw new Error("Failed pattern match at Show (line 34, column 3 - line 34, column 52): " + [o.constructor.name, f.constructor.name]);
      };
    }, a = wn(Gr(u)(n.value0))(Gr(t)(n.value0));
    return wn(M("{"))(wn(dr(a))(M("}")));
  }
  if (n instanceof O)
    return wn(M("while (p[" + (x(n.value0.idx) + "]) {")))(wn(dr(be(n.value0.proc)))(M("}")));
  if (n instanceof an)
    return M("p[" + (x(n.value0) + "] = getchar();"));
  if (n instanceof on)
    return M("putchar(p[" + (x(n.value0) + "]);"));
  throw new Error("Failed pattern match at Show (line 29, column 1 - line 29, column 33): " + [n.constructor.name]);
}, nu = function(n) {
  return function(r) {
    return Qe(function(t) {
      return Zc(t)(r);
    })(n);
  };
}, Zc = function(n) {
  if (n instanceof Q)
    return M("MOVE " + x(n.value0));
  if (n instanceof $) {
    var r = function(t) {
      return function(e) {
        if (e instanceof L)
          return M("ADD [" + (x(t) + ("] " + x(e.value0))));
        if (e instanceof R)
          return M("SET [" + (x(t) + ("] " + nn("")(e.value0))));
        throw new Error("Failed pattern match at Show (line 18, column 3 - line 18, column 66): " + [t.constructor.name, e.constructor.name]);
      };
    };
    return wn(M("UPDATE"))(dr(Gr(r)(n.value0)));
  }
  if (n instanceof O)
    return wn(M("WHILE [" + (x(n.value0.idx) + "]")))(dr(nu(n.value0.proc)));
  if (n instanceof an)
    return M("INPUT [" + (x(n.value0) + "]"));
  if (n instanceof on)
    return M("OUTPUT [" + (x(n.value0) + "]"));
  throw new Error("Failed pattern match at Show (line 14, column 1 - line 14, column 35): " + [n.constructor.name]);
}, sn = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), ru = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Jc = function(n) {
  var r = function(t) {
    return function(e) {
      var u = t, a = !1, o;
      function f(c, l) {
        if (c instanceof ru)
          return a = !0, l;
        if (c instanceof sn) {
          u = c.value0, e = new h(c.value1, l);
          return;
        }
        throw new Error("Failed pattern match at RList (line 12, column 3 - line 12, column 16): " + [c.constructor.name, l.constructor.name]);
      }
      for (; !a; )
        o = f(u, e);
      return o;
    };
  };
  return r(n)(U.value);
}, Yc = /* @__PURE__ */ go(), Hc = /* @__PURE__ */ S(Qr), Qc = /* @__PURE__ */ xo(vo), tu = /* @__PURE__ */ $o(Cn), bc = /* @__PURE__ */ ao(To)(ee), eu = /* @__PURE__ */ va(Yt), nf = /* @__PURE__ */ Eo(Cn), rf = /* @__PURE__ */ S(lt), tf = /* @__PURE__ */ fe(Na), ef = /* @__PURE__ */ me(nr), uf = /* @__PURE__ */ le(Xn), af = /* @__PURE__ */ X(/* @__PURE__ */ pe(Cn)), of = /* @__PURE__ */ X(/* @__PURE__ */ we(Cn)), cf = function(n) {
  return n instanceof W && n.value0 instanceof A && n.value0.value0 === 0 ? n.value1 : n instanceof W && n.value1 instanceof A && n.value1.value0 === 0 ? n.value0 : n instanceof W && n.value0 instanceof en ? new vn(n.value1, n.value0.value0) : n instanceof W && n.value1 instanceof en ? new vn(n.value0, n.value1.value0) : n instanceof H && n.value0 instanceof A && n.value0.value0 === 1 ? n.value1 : n instanceof H && n.value1 instanceof A && n.value1.value0 === 1 ? n.value0 : n instanceof H && n.value0 instanceof A && n.value0.value0 === -1 ? new en(n.value1) : n instanceof H && n.value1 instanceof A && n.value1.value0 === -1 ? new en(n.value0) : n;
}, pn = function(n) {
  var r = n(ru.value);
  return function(t) {
    return Jc(r(t));
  };
}, rn = function(n) {
  return function(r) {
    return r instanceof en ? n(new en(rn(n)(r.value0))) : r instanceof W ? n(new W(rn(n)(r.value0), rn(n)(r.value1))) : r instanceof vn ? n(new vn(rn(n)(r.value0), rn(n)(r.value1))) : r instanceof H ? n(new H(rn(n)(r.value0), rn(n)(r.value1))) : n(r);
  };
}, ff = /* @__PURE__ */ rn(cf), lf = function(n) {
  if (n instanceof L && n.value0 === 0)
    return w.value;
  if (n instanceof L)
    return new d(n);
  if (n instanceof R)
    return new d(new R(ff(n.value0)));
  throw new Error("Failed pattern match at Transform (line 131, column 1 - line 131, column 30): " + [n.constructor.name]);
}, Tt = function(n) {
  if (n instanceof h && n.value0 instanceof Q && n.value0.value0 === 0)
    return n.value1;
  if (n instanceof h && n.value0 instanceof $) {
    var r = Yc(lf)(n.value0.value0), t = function() {
      var e = Ao(r);
      return e ? n.value1 : new h(new $(r), n.value1);
    }();
    return t;
  }
  return n;
}, sf = function(n) {
  return function(r) {
    return function(t) {
      return t instanceof L ? n === r ? new d(new R(new A(0))) : new d(new R(new W(new j(r), new H(new A(t.value0), new j(n))))) : w.value;
    };
  };
}, vf = function(n) {
  return function(r) {
    if (r instanceof R)
      return r.value0;
    if (r instanceof L)
      return new W(new A(r.value0), new j(n));
    throw new Error("Failed pattern match at Transform (line 110, column 1 - line 110, column 32): " + [n.constructor.name, r.constructor.name]);
  };
}, df = function(n) {
  var r = Po(n)(Wn);
  return function(t) {
    return function(e) {
      return r(Hc(t)(Qc(e)));
    };
  };
}, mf = /* @__PURE__ */ df(Cn), wf = function(n) {
  var r = function(u) {
    return n;
  };
  if (n instanceof h && n.value0 instanceof O && n.value0.value0.proc instanceof h && n.value0.value0.proc.value0 instanceof $ && n.value0.value0.proc.value1 instanceof U) {
    var t = tu(n.value0.value0.idx)(n.value0.value0.proc.value0.value0);
    if (t instanceof d && t.value0 instanceof L && t.value0.value0 === -1) {
      var e = bc(sf(n.value0.value0.idx))(n.value0.value0.proc.value0.value0);
      return e instanceof d ? new h(new $(e.value0), n.value1) : r();
    }
    return r();
  }
  return r();
}, yn = function(n) {
  return function(r) {
    return function(t) {
      var e = n(t);
      if (e instanceof h && e.value0 instanceof O) {
        var u = {
          idx: e.value0.value0.idx,
          proc: pn(yn(n))(e.value0.value0.proc)
        };
        return yn(n)(new sn(r, new O(u)))(e.value1);
      }
      if (e instanceof h)
        return yn(n)(new sn(r, e.value0))(e.value1);
      if (e instanceof U)
        return r;
      throw new Error("Failed pattern match at Transform (line 29, column 24 - line 34, column 11): " + [e.constructor.name]);
    };
  };
}, uu = function(n) {
  var r = function(t) {
    return t instanceof j ? n(t.value0) : t;
  };
  return rn(r);
}, Rt = function(n) {
  var r = !1, t;
  function e(u) {
    if (u instanceof h && u.value0 instanceof $ && u.value1 instanceof h && u.value1.value0 instanceof $) {
      var a = function(l) {
        return function(v) {
          return l instanceof L && v instanceof L ? new L(l.value0 + v.value0 | 0) : l instanceof R && v instanceof L ? new R(new W(l.value0, new A(v.value0))) : v;
        };
      }, o = function(l) {
        return _r(new j(l))(vf(l))(tu(l)(u.value0.value0));
      }, f = function(l) {
        return l instanceof R ? new R(uu(o)(l.value0)) : l;
      }, c = nf(a)(u.value0.value0)(rf(f)(u.value1.value0.value0));
      n = new h(new $(c), u.value1.value1);
      return;
    }
    return r = !0, u;
  }
  for (; !r; )
    t = e(n);
  return t;
}, pf = function(n) {
  return uu(function() {
    var r = eu(n);
    return function(t) {
      return j.create(r(t));
    };
  }());
}, hf = function(n) {
  return function(r) {
    if (n === 0 || r instanceof L)
      return r;
    if (r instanceof R)
      return new R(pf(n)(r.value0));
    throw new Error("Failed pattern match at Transform (line 126, column 1 - line 126, column 32): " + [n.constructor.name, r.constructor.name]);
  };
}, au = function(n) {
  return mf(tf(eu(n))(hf(n)));
}, _f = function(n) {
  return function(r) {
    return r instanceof h && r.value0 instanceof O ? new h(new O({
      proc: r.value0.value0.proc,
      idx: r.value0.value0.idx + n | 0
    }), r.value1) : r instanceof h && r.value0 instanceof an ? new h(new an(r.value0.value0 + n | 0), r.value1) : r instanceof h && r.value0 instanceof on ? new h(new on(r.value0.value0 + n | 0), r.value1) : r instanceof h && r.value0 instanceof $ ? new h(new $(au(n)(r.value0.value0)), r.value1) : r;
  };
}, mn = function(n) {
  return function(r) {
    return function(t) {
      return function(e) {
        if (e instanceof U)
          return new sn(t, new Q(r - n | 0));
        if (e instanceof h && e.value0 instanceof Q)
          return mn(n)(r + e.value0.value0 | 0)(t)(e.value1);
        if (e instanceof h && e.value0 instanceof $)
          return mn(n)(r)(new sn(t, new $(au(r)(e.value0.value0))))(e.value1);
        if (e instanceof h && e.value0 instanceof O) {
          var u = {
            idx: e.value0.value0.idx + r | 0,
            proc: pn(mn(r)(r))(e.value0.value0.proc)
          };
          return mn(n)(r)(new sn(t, new O(u)))(e.value1);
        }
        if (e instanceof h && e.value0 instanceof an)
          return mn(n)(r)(new sn(t, new an(e.value0.value0 + r | 0)))(e.value1);
        if (e instanceof h && e.value0 instanceof on)
          return mn(n)(r)(new sn(t, new on(e.value0.value0 + r | 0)))(e.value1);
        throw new Error("Failed pattern match at Transform (line 56, column 1 - line 56, column 35): " + [n.constructor.name, r.constructor.name, t.constructor.name, e.constructor.name]);
      };
    };
  };
}, yf = /* @__PURE__ */ function() {
  var n = pn(yn(function(u) {
    return Tt(Rt(u));
  })), r = pn(yn(wf)), t = pn(yn(function(u) {
    return Tt(Rt(u));
  })), e = pn(mn(0)(0));
  return function(u) {
    return n(r(t(e(u))));
  };
}(), ln = function(n) {
  var r = b(n), t = X(n.Semigroup0());
  return function(e) {
    return function(u) {
      if (u instanceof A)
        return r;
      if (u instanceof j)
        return e(u.value0);
      if (u instanceof en)
        return ln(n)(e)(u.value0);
      if (u instanceof W || u instanceof vn || u instanceof H)
        return t(ln(n)(e)(u.value0))(ln(n)(e)(u.value1));
      throw new Error("Failed pattern match at Transform (line 93, column 1 - line 93, column 61): " + [e.constructor.name, u.constructor.name]);
    };
  };
}, If = function(n) {
  var r = b(n), t = ln(n);
  return function(e) {
    return function(u) {
      if (u instanceof L)
        return r;
      if (u instanceof R)
        return t(e)(u.value0);
      throw new Error("Failed pattern match at Transform (line 89, column 1 - line 89, column 62): " + [e.constructor.name, u.constructor.name]);
    };
  };
}, Ef = function(n) {
  var r = b(n), t = ef(n), e = X(n.Semigroup0()), u = If(n);
  return function(a) {
    return function(o) {
      if (o instanceof Q)
        return r;
      if (o instanceof $)
        return t(function(f) {
          return function(c) {
            return e(a(f))(u(a)(c));
          };
        })(o.value0);
      if (o instanceof an || o instanceof on)
        return a(o.value0);
      if (o instanceof O)
        return e(a(o.value0.idx))(yt(n)(a)(o.value0.proc));
      throw new Error("Failed pattern match at Transform (line 82, column 1 - line 82, column 62): " + [a.constructor.name, o.constructor.name]);
    };
  };
}, yt = function(n) {
  var r = uf(n);
  return function(t) {
    return r(Ef(n)(t));
  };
}, Ff = /* @__PURE__ */ yt(/* @__PURE__ */ ro(bt)), gf = /* @__PURE__ */ yt(/* @__PURE__ */ ba(bt)), $f = function(n) {
  var r = af(0)(Ff(no)(n)), t = of(0)(gf(Qa)(n));
  return new h(new Q(t), pn(yn(_f(-r | 0)))(n));
};
function Sf(n) {
  const r = new Uint8Array(4);
  return new DataView(r.buffer).setFloat32(0, n), [r[3], r[2], r[1], r[0]];
}
function Mf(n) {
  return n.length;
}
function ou(n, r, t) {
  n[r] = t;
}
function iu(n, r, t) {
  n.set(t, r);
}
function cu(n) {
  return new Uint8Array(n);
}
function fu(n, r, t) {
  return n.subarray(r, t);
}
function Zn(n, r) {
  n && r();
}
function Cf(n) {
  return new TextEncoder().encode(n);
}
function Br(n) {
  return function() {
    throw new Error(n);
  };
}
const xf = function(n) {
  return n();
};
var ir = /* @__PURE__ */ hr(tt), Af = /* @__PURE__ */ S(Bo), Df = function(n) {
  return function() {
    var t = D(n.bytes)(), e = D(n.position)();
    return fu(t, 0, e);
  };
}, Jn = function(n) {
  return D(n.position);
}, Bn = function(n) {
  return function(r) {
    return function(t) {
      return function() {
        Zn(t < 0 || t >= 256, Br("setByte: Out of range " + ir(t)));
        var u = Jn(n)();
        Zn(r >= u, Br("setByte: Offset out of bounds " + (ir(r) + (", size is " + ir(u)))));
        var a = D(n.bytes)();
        return ou(a, r, t);
      };
    };
  };
}, lu = function(n) {
  return function(r) {
    return function() {
      var e = D(n.capacity)(), u = hn(e)();
      (function() {
        for (; Af(function(c) {
          return c < (e + r | 0);
        })(D(u))(); )
          Vo(function(c) {
            return c * 2 | 0;
          })(u)();
        return {};
      })();
      var a = D(u)(), o = cu(a), f = D(n.bytes)();
      return iu(o, 0, f), lr(o)(n.bytes)(), lr(a)(n.capacity)();
    };
  };
}, Lf = function(n) {
  return function() {
    var t = Cf(n), e = Mf(t), u = hn(t)(), a = hn(e)(), o = hn(e)();
    return {
      bytes: u,
      capacity: a,
      position: o
    };
  };
}, Tf = function(n) {
  return function() {
    var t = cu(n), e = hn(t)(), u = hn(0)(), a = hn(n)();
    return {
      bytes: e,
      position: u,
      capacity: a
    };
  };
}, i = function(n) {
  return function(r) {
    return function() {
      Zn(r < 0 || r >= 256, Br("addByte: Out of range " + ir(r)));
      var e = D(n.capacity)(), u = D(n.position)();
      Zn(u >= e, lu(n)(1));
      var a = D(n.bytes)();
      return ou(a, u, r), lr(u + 1 | 0)(n.position)();
    };
  };
}, Rf = function(n) {
  return function(r) {
    return function() {
      var e = D(r.position)(), u = D(n.position)(), a = D(n.capacity)(), o = u + e | 0;
      Zn(o > a, lu(n)(e));
      var f = D(r.bytes)(), c = fu(f, 0, e), l = D(n.bytes)();
      return iu(l, u, c), lr(o)(n.position)();
    };
  };
}, Pf = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Wf = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Yn = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Ur = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Or = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), qr = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), zf = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Nf = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Vr = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Dn = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), kr = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Kr = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), Hn = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), jr = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Gf = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Bf = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Xr = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Uf = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), su = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Of = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), vu = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), qf = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Vf = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), kf = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Kf = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), mr = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), It = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), jf = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Xf = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Zf = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Et = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), du = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), mu = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Jf = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Yf = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Hf = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Qf = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), bf = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), nl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), rl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), tl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), el = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), ul = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), al = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), ol = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), wu = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), il = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), cl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), fl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), ll = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), sl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), vl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), dl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), ml = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), wl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), pl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), hl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), _l = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), yl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Il = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), El = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Fl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), gl = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), $l = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Sl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Ml = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Cl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), xl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Al = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Dl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Ll = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Tl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Rl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Pl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Wl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), zl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Nl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Gl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Bl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Ul = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Ol = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), ql = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Vl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), kl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Kl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), jl = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Xl = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), pu = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Zl = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Jl = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), Yl = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Hl = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), Ql = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), bl = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), ns = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), rs = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), ts = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), es = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), us = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), as = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), os = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), is = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), cs = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), fs = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), ls = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), ss = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), vs = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), ds = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), ms = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), ws = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), hu = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), _u = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), ps = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), hs = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), _s = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), ys = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Is = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), yu = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Es = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Fs = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), gs = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Iu = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), $s = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Ss = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Ms = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Cs = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), xs = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), As = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Ds = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Ls = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Ts = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Eu = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), Fu = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), Rs = /* @__PURE__ */ function() {
  function n(r, t, e) {
    this.value0 = r, this.value1 = t, this.value2 = e;
  }
  return n.create = function(r) {
    return function(t) {
      return function(e) {
        return new n(r, t, e);
      };
    };
  }, n;
}(), gu = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), $u = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Ps = /* @__PURE__ */ function() {
  function n(r, t) {
    this.value0 = r, this.value1 = t;
  }
  return n.create = function(r) {
    return function(t) {
      return new n(r, t);
    };
  }, n;
}(), Ws = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Zr = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), zs = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Ns = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Gs = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Pt = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), Wt = /* @__PURE__ */ function() {
  function n() {
  }
  return n.value = new n(), n;
}(), zt = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Su = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Bs = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Us = /* @__PURE__ */ function() {
  function n(r) {
    this.value0 = r;
  }
  return n.create = function(r) {
    return new n(r);
  }, n;
}(), Os = {
  eq: function(n) {
    return function(r) {
      return n.value0 === r.value0;
    };
  }
}, qs = /* @__PURE__ */ Qn(Os), Mu = {
  eq: function(n) {
    return function(r) {
      return n instanceof Vr && r instanceof Vr || n instanceof Dn && r instanceof Dn || n instanceof kr && r instanceof kr ? !0 : n instanceof Kr && r instanceof Kr ? n.value0 === r.value0 && qs(n.value1)(r.value1) : !1;
    };
  }
}, Vs = /* @__PURE__ */ Qn(Mu), ks = {
  eq: function(n) {
    return function(r) {
      return n instanceof Yn && r instanceof Yn || n instanceof Ur && r instanceof Ur || n instanceof Or && r instanceof Or || n instanceof qr && r instanceof qr;
    };
  }
}, Ks = /* @__PURE__ */ Qn(ks), js = {
  eq: function(n) {
    return function(r) {
      return n instanceof Hn && r instanceof Hn ? Ks(n.value0)(r.value0) : n instanceof jr && r instanceof jr ? Vs(n.value0)(r.value0) : !1;
    };
  }
}, Un = /* @__PURE__ */ function() {
  return {
    types: [],
    funcs: [],
    tables: [],
    memories: [],
    globals: [],
    elem: [],
    data: [],
    start: w.value,
    imports: [],
    exports: []
  };
}(), Xs = /* @__PURE__ */ ka(xn)(Wn), Zs = /* @__PURE__ */ vc(js), y = /* @__PURE__ */ S(Qr), Js = /* @__PURE__ */ P(xn), Cu = /* @__PURE__ */ Va(xn), An = /* @__PURE__ */ Cu(Wn), k = /* @__PURE__ */ Yu(xn), Sr = /* @__PURE__ */ Qn(Mu), Ys = /* @__PURE__ */ ct(he)(ee), Hs = /* @__PURE__ */ Cu(Ka), Qs = function(n) {
  return function(r) {
    return function(t) {
      var e = t & 127 | 128, u = t >> 7 & 127 | 128, a = t >> 14 & 127 | 128, o = t >> 21 & 127 | 128, f = t >> 28 & 127;
      return function() {
        return Bn(n)(r)(e)(), Bn(n)(r + 1 | 0)(u)(), Bn(n)(r + 2 | 0)(a)(), Bn(n)(r + 3 | 0)(o)(), Bn(n)(r + 4 | 0)(f)();
      };
    };
  };
}, bs = function(n) {
  return function(r) {
    if (r instanceof Pf)
      return i(n)(120);
    if (r instanceof Wf)
      return i(n)(119);
    throw new Error("Failed pattern match at Wasm.Encode (line 119, column 23 - line 123, column 27): " + [r.constructor.name]);
  };
}, nv = function(n) {
  return function(r) {
    return i(n)(function() {
      if (r instanceof Yn)
        return 127;
      if (r instanceof Ur)
        return 126;
      if (r instanceof Or)
        return 125;
      if (r instanceof qr)
        return 124;
      throw new Error("Failed pattern match at Wasm.Encode (line 107, column 41 - line 111, column 16): " + [r.constructor.name]);
    }());
  };
}, xu = function(n) {
  return function(r) {
    return i(n)(function() {
      if (r instanceof zf)
        return 0;
      if (r instanceof Nf)
        return 1;
      throw new Error("Failed pattern match at Wasm.Encode (line 565, column 44 - line 567, column 16): " + [r.constructor.name]);
    }());
  };
}, rv = function(n) {
  return function() {
    return i(n)(0)(), i(n)(97)(), i(n)(115)(), i(n)(109)(), i(n)(1)(), i(n)(0)(), i(n)(0)(), i(n)(0)();
  };
}, K = function(n) {
  return function(r) {
    var t = r < 0;
    if (t)
      return xi("Negative unsigned_leb128");
    var e = r & 127, u = r >> 7, a = u === 0;
    return a ? i(n)(e) : function() {
      return i(n)(e | 128)(), K(n)(u)();
    };
  };
}, s = K, tv = function(n) {
  return function(r) {
    if (r instanceof vu)
      return function() {
        return i(n)(0)(), s(n)(r.value0)();
      };
    if (r instanceof qf)
      return function() {
        return i(n)(1)(), s(n)(r.value0)();
      };
    if (r instanceof Vf)
      return function() {
        return i(n)(2)(), s(n)(r.value0)();
      };
    if (r instanceof kf)
      return function() {
        return i(n)(3)(), s(n)(r.value0)();
      };
    throw new Error("Failed pattern match at Wasm.Encode (line 630, column 23 - line 642, column 20): " + [r.constructor.name]);
  };
}, Ft = function(n) {
  return function(r) {
    if (r.max instanceof w)
      return function() {
        return i(n)(0)(), s(n)(r.min)();
      };
    if (r.max instanceof d)
      return function() {
        return i(n)(1)(), s(n)(r.min)(), s(n)(r.max.value0)();
      };
    throw new Error("Failed pattern match at Wasm.Encode (line 537, column 31 - line 544, column 21): " + [r.max.constructor.name]);
  };
}, ev = function(n) {
  return function(r) {
    return Ft(n)(r);
  };
}, fn = function(n) {
  return function(r) {
    return function() {
      return s(n)(r.align)(), s(n)(r.offset)();
    };
  };
}, Jr = function(n) {
  return function(r) {
    return function() {
      var e = Lf(r)(), u = Jn(e)();
      return s(n)(u)(), Rf(n)(e)();
    };
  };
}, uv = function(n) {
  return function(r) {
    return function() {
      return Jr(n)(r.name)(), tv(n)(r.desc)();
    };
  };
}, I = function(n) {
  return function(r) {
    return function() {
      return s(n)(wt(r))(), Xs(r)();
    };
  };
}, ur = function(n) {
  return function(r) {
    var t = r & 127, e = r >> 7, u = e === 0 && (t & 64) === 0 || e === -1 && (t & 64) !== 0;
    return u ? i(n)(t) : function() {
      return i(n)(t | 128)(), ur(n)(e)();
    };
  };
}, av = ur, Au = function(n) {
  return function(r) {
    return av(n)(r.value0);
  };
}, Du = function(n) {
  return function(r) {
    if (r instanceof Vr)
      return ur(n)(-13);
    if (r instanceof Dn)
      return i(n)(112);
    if (r instanceof kr)
      return i(n)(111);
    if (r instanceof Kr)
      return function() {
        return i(n)(function() {
          return r.value0 ? 99 : 100;
        }())(), Au(n)(r.value1)();
      };
    throw new Error("Failed pattern match at Wasm.Encode (line 547, column 20 - line 553, column 24): " + [r.constructor.name]);
  };
}, Lu = function(n) {
  return function(r) {
    return function() {
      return Du(n)(r.elemtype)(), Ft(n)(r.limits)();
    };
  };
}, ov = function(n) {
  return function(r) {
    return Lu(n)(r.type);
  };
}, zn = function(n) {
  return function(r) {
    if (r instanceof Hn)
      return nv(n)(r.value0);
    if (r instanceof jr)
      return Du(n)(r.value0);
    throw new Error("Failed pattern match at Wasm.Encode (line 114, column 22 - line 116, column 38): " + [r.constructor.name]);
  };
}, Mr = function(n) {
  return function(r) {
    if (r instanceof mr && r.value0 instanceof w)
      return i(n)(64);
    if (r instanceof mr && r.value0 instanceof d)
      return zn(n)(r.value0.value0);
    if (r instanceof Kf)
      return ur(n)(r.value0);
    throw new Error("Failed pattern match at Wasm.Encode (line 186, column 22 - line 192, column 24): " + [r.constructor.name]);
  };
}, Tu = function(n) {
  return function(r) {
    return function() {
      return zn(n)(r.type)(), xu(n)(r.mutability)();
    };
  };
}, iv = function(n) {
  return function(r) {
    if (r instanceof Xr)
      return function() {
        return i(n)(0)(), s(n)(r.value0)();
      };
    if (r instanceof Uf)
      return function() {
        return i(n)(1)(), Lu(n)(r.value0)();
      };
    if (r instanceof su)
      return function() {
        return i(n)(2)(), Ft(n)(r.value0)();
      };
    if (r instanceof Of)
      return function() {
        return i(n)(3)(), Tu(n)(r.value0)();
      };
    throw new Error("Failed pattern match at Wasm.Encode (line 575, column 23 - line 587, column 36): " + [r.constructor.name]);
  };
}, cv = function(n) {
  return function(r) {
    return function() {
      return Jr(n)(r.module)(), Jr(n)(r.name)(), iv(n)(r.desc)();
    };
  };
}, fv = function(n) {
  return function(r) {
    var t = Zs(r);
    return y(function(e) {
      return function() {
        return s(n)(hc(e))(), zn(n)(wc(e))();
      };
    })(t);
  };
}, Nt = function(n) {
  return function(r) {
    return I(n)(y(zn(n))(r));
  };
}, lv = function(n) {
  return function(r) {
    return function() {
      return Nt(n)(r.arguments)(), Nt(n)(r.results)();
    };
  };
}, sv = function(n) {
  return function(r) {
    if (r instanceof Gf)
      return zn(n)(r.value0);
    if (r instanceof Bf)
      return bs(n)(r.value0);
    throw new Error("Failed pattern match at Wasm.Encode (line 134, column 24 - line 136, column 45): " + [r.constructor.name]);
  };
}, Gt = function(n) {
  return function(r) {
    return function() {
      return sv(n)(r.ty)(), xu(n)(r.mutability)();
    };
  };
}, Bt = function(n) {
  return function(r) {
    if (r instanceof Su)
      return function() {
        return i(n)(96)(), lv(n)(r.value0)();
      };
    if (r instanceof Bs)
      return function() {
        return i(n)(95)(), I(n)(y(Gt(n))(r.value0))();
      };
    if (r instanceof Us)
      return function() {
        return i(n)(94)(), Gt(n)(r.value0)();
      };
    throw new Error("Failed pattern match at Wasm.Encode (line 144, column 21 - line 153, column 25): " + [r.constructor.name]);
  };
}, Ut = function(n) {
  return function(r) {
    return r.final && r.supertypes.length === 0 ? Bt(n)(r.ty) : function() {
      return i(n)(function() {
        return r.final ? 79 : 80;
      }())(), I(n)(y(s(n))(r.supertypes))(), Bt(n)(r.ty)();
    };
  };
}, vv = function(n) {
  return function(r) {
    return r.length === 0 ? Js(N) : r.length === 1 ? Ut(n)(r[0]) : function() {
      return i(n)(78)(), I(n)(y(Ut(n))(r))();
    };
  };
}, dv = function(n) {
  return function() {
    var t = Jn(n)();
    return i(n)(0)(), i(n)(0)(), i(n)(0)(), i(n)(0)(), i(n)(0)(), t;
  };
}, Ru = function(n) {
  return function(r) {
    return function() {
      var e = dv(n)(), u = Jn(n)(), a = r(), o = Jn(n)(), f = o - u | 0;
      return Qs(n)(e)(f)(), a;
    };
  };
}, Z = function(n) {
  return function(r) {
    return function(t) {
      return function() {
        return i(n)(r)(), Ru(n)(t)();
      };
    };
  };
}, mv = function(n) {
  return function(r) {
    return Z(n)(7)(I(n)(y(uv(n))(r)));
  };
}, wv = function(n) {
  return function(r) {
    return Z(n)(3)(I(n)(y(function() {
      var t = s(n);
      return function(e) {
        return t(function(u) {
          return u.type;
        }(e));
      };
    }())(r)));
  };
}, pv = function(n) {
  return function(r) {
    return Z(n)(2)(I(n)(y(cv(n))(r)));
  };
}, hv = function(n) {
  return function(r) {
    return Z(n)(5)(I(n)(y(function() {
      var t = ev(n);
      return function(e) {
        return t(function(u) {
          return u.type;
        }(e));
      };
    }())(r)));
  };
}, _v = function(n) {
  return function(r) {
    return Z(n)(8)(s(n)(r));
  };
}, yv = function(n) {
  return function(r) {
    return Z(n)(4)(I(n)(y(ov(n))(r)));
  };
}, Iv = function(n) {
  return function(r) {
    return Z(n)(1)(I(n)(y(vv(n))(r)));
  };
}, Ev = function(n) {
  return function(r) {
    return An(Sf(r))(i(n));
  };
}, qn = function(n) {
  return function(r) {
    if (r instanceof It)
      return function() {
        return i(n)(65)(), ur(n)(r.value0)();
      };
    if (r instanceof jf)
      return i(n)(103);
    if (r instanceof Xf)
      return i(n)(104);
    if (r instanceof Zf)
      return i(n)(105);
    if (r instanceof Et)
      return i(n)(106);
    if (r instanceof du)
      return i(n)(107);
    if (r instanceof mu)
      return i(n)(108);
    if (r instanceof Yf)
      return i(n)(109);
    if (r instanceof Jf)
      return i(n)(110);
    if (r instanceof Qf)
      return i(n)(111);
    if (r instanceof Hf)
      return i(n)(112);
    if (r instanceof bf)
      return i(n)(113);
    if (r instanceof nl)
      return i(n)(114);
    if (r instanceof rl)
      return i(n)(115);
    if (r instanceof tl)
      return i(n)(116);
    if (r instanceof ul)
      return i(n)(117);
    if (r instanceof el)
      return i(n)(118);
    if (r instanceof al)
      return i(n)(119);
    if (r instanceof ol)
      return i(n)(120);
    if (r instanceof wu)
      return i(n)(69);
    if (r instanceof il)
      return i(n)(70);
    if (r instanceof cl)
      return i(n)(71);
    if (r instanceof ll)
      return i(n)(72);
    if (r instanceof fl)
      return i(n)(73);
    if (r instanceof vl)
      return i(n)(74);
    if (r instanceof sl)
      return i(n)(75);
    if (r instanceof ml)
      return i(n)(76);
    if (r instanceof dl)
      return i(n)(77);
    if (r instanceof pl)
      return i(n)(78);
    if (r instanceof wl)
      return i(n)(79);
    if (r instanceof hl)
      return i(n)(192);
    if (r instanceof _l)
      return i(n)(193);
    if (r instanceof yl)
      return i(n)(167);
    if (r instanceof Il)
      return i(n)(168);
    if (r instanceof El)
      return i(n)(169);
    if (r instanceof Fl)
      return i(n)(188);
    if (r instanceof gl)
      return function() {
        return i(n)(67)(), Ev(n)(r.value0)();
      };
    if (r instanceof $l)
      return i(n)(91);
    if (r instanceof Sl)
      return i(n)(92);
    if (r instanceof Ml)
      return i(n)(93);
    if (r instanceof Cl)
      return i(n)(94);
    if (r instanceof xl)
      return i(n)(95);
    if (r instanceof Al)
      return i(n)(96);
    if (r instanceof Dl)
      return i(n)(139);
    if (r instanceof Ll)
      return i(n)(140);
    if (r instanceof Tl)
      return i(n)(141);
    if (r instanceof Rl)
      return i(n)(142);
    if (r instanceof Pl)
      return i(n)(143);
    if (r instanceof Wl)
      return i(n)(144);
    if (r instanceof zl)
      return i(n)(145);
    if (r instanceof Nl)
      return i(n)(146);
    if (r instanceof Gl)
      return i(n)(147);
    if (r instanceof Bl)
      return i(n)(148);
    if (r instanceof Ul)
      return i(n)(149);
    if (r instanceof Ol)
      return i(n)(150);
    if (r instanceof ql)
      return i(n)(151);
    if (r instanceof Vl)
      return i(n)(152);
    if (r instanceof kl)
      return i(n)(178);
    if (r instanceof Kl)
      return i(n)(179);
    if (r instanceof jl)
      return function() {
        return i(n)(208)(), Au(n)(r.value0)();
      };
    if (r instanceof Xl)
      return i(n)(209);
    if (r instanceof pu)
      return function() {
        return i(n)(210)(), s(n)(r.value0)();
      };
    if (r instanceof cs)
      return function() {
        return i(n)(251)(), s(n)(0)(), s(n)(r.value0)();
      };
    if (r instanceof fs)
      return function() {
        return i(n)(251)(), s(n)(1)(), s(n)(r.value0)();
      };
    if (r instanceof ls)
      return function() {
        return i(n)(251)(), s(n)(2)(), s(n)(r.value0)(), s(n)(r.value1)();
      };
    if (r instanceof ss)
      return function() {
        return i(n)(251)(), s(n)(3)(), s(n)(r.value0)(), s(n)(r.value1)();
      };
    if (r instanceof vs)
      return function() {
        return i(n)(251)(), s(n)(4)(), s(n)(r.value0)(), s(n)(r.value1)();
      };
    if (r instanceof ds)
      return function() {
        return i(n)(251)(), s(n)(5)(), s(n)(r.value0)(), s(n)(r.value1)();
      };
    if (r instanceof Zl)
      return function() {
        return i(n)(251)(), s(n)(6)(), s(n)(r.value0)();
      };
    if (r instanceof Yl)
      return function() {
        return i(n)(251)(), s(n)(7)(), s(n)(r.value0)();
      };
    if (r instanceof Jl)
      return function() {
        return i(n)(251)(), s(n)(8)(), s(n)(r.value0)(), s(n)(r.value1)();
      };
    if (r instanceof Hl)
      return function() {
        return i(n)(251)(), s(n)(9)(), s(n)(r.value0)(), s(n)(r.value1)();
      };
    if (r instanceof Ql)
      return function() {
        return i(n)(251)(), s(n)(10)(), s(n)(r.value0)(), s(n)(r.value1)();
      };
    if (r instanceof bl)
      return function() {
        return i(n)(251)(), s(n)(11)(), s(n)(r.value0)();
      };
    if (r instanceof ns)
      return function() {
        return i(n)(251)(), s(n)(12)(), s(n)(r.value0)();
      };
    if (r instanceof rs)
      return function() {
        return i(n)(251)(), s(n)(13)(), s(n)(r.value0)();
      };
    if (r instanceof ts)
      return function() {
        return i(n)(251)(), s(n)(14)(), s(n)(r.value0)();
      };
    if (r instanceof es)
      return function() {
        return i(n)(251)(), s(n)(15)();
      };
    if (r instanceof us)
      return function() {
        return i(n)(251)(), s(n)(16)(), s(n)(r.value0)();
      };
    if (r instanceof as)
      return function() {
        return i(n)(251)(), s(n)(17)(), s(n)(r.value0)(), s(n)(r.value1)();
      };
    if (r instanceof os)
      return function() {
        return i(n)(251)(), s(n)(18)(), s(n)(r.value0)(), s(n)(r.value1)();
      };
    if (r instanceof is)
      return function() {
        return i(n)(251)(), s(n)(19)(), s(n)(r.value0)(), s(n)(r.value1)();
      };
    if (r instanceof ms)
      return i(n)(26);
    if (r instanceof ws) {
      if (r.value0 instanceof w)
        return i(n)(27);
      if (r.value0 instanceof d)
        return function() {
          return i(n)(28)(), I(n)(y(zn(n))(r.value0.value0))();
        };
      throw new Error("Failed pattern match at Wasm.Encode (line 415, column 21 - line 420, column 49): " + [r.value0.constructor.name]);
    }
    if (r instanceof hu)
      return function() {
        return i(n)(32)(), s(n)(r.value0)();
      };
    if (r instanceof _u)
      return function() {
        return i(n)(33)(), s(n)(r.value0)();
      };
    if (r instanceof ps)
      return function() {
        return i(n)(34)(), s(n)(r.value0)();
      };
    if (r instanceof hs)
      return function() {
        return i(n)(35)(), s(n)(r.value0)();
      };
    if (r instanceof _s)
      return function() {
        return i(n)(36)(), s(n)(r.value0)();
      };
    if (r instanceof ys)
      return function() {
        return i(n)(40)(), fn(n)(r.value0)();
      };
    if (r instanceof Is)
      return function() {
        return i(n)(44)(), fn(n)(r.value0)();
      };
    if (r instanceof yu)
      return function() {
        return i(n)(45)(), fn(n)(r.value0)();
      };
    if (r instanceof Es)
      return function() {
        return i(n)(46)(), fn(n)(r.value0)();
      };
    if (r instanceof Fs)
      return function() {
        return i(n)(47)(), fn(n)(r.value0)();
      };
    if (r instanceof gs)
      return function() {
        return i(n)(54)(), fn(n)(r.value0)();
      };
    if (r instanceof Iu)
      return function() {
        return i(n)(58)(), fn(n)(r.value0)();
      };
    if (r instanceof $s)
      return function() {
        return i(n)(59)(), fn(n)(r.value0)();
      };
    if (r instanceof Ss)
      return function() {
        return i(n)(63)(), i(n)(0)();
      };
    if (r instanceof Ms)
      return function() {
        return i(n)(64)(), i(n)(0)();
      };
    if (r instanceof As)
      return function() {
        return i(n)(252)(), K(n)(8)(), K(n)(r.value0)(), i(n)(0)();
      };
    if (r instanceof Ds)
      return function() {
        return i(n)(252)(), K(n)(9)(), K(n)(r.value0)();
      };
    if (r instanceof xs)
      return function() {
        return i(n)(252)(), K(n)(10)(), K(n)(0)(), K(n)(0)();
      };
    if (r instanceof Cs)
      return function() {
        return i(n)(252)(), K(n)(11)(), K(n)(0)();
      };
    if (r instanceof Ts)
      return i(n)(0);
    if (r instanceof Ls)
      return i(n)(1);
    if (r instanceof Eu)
      return function() {
        return i(n)(2)(), Mr(n)(r.value0)(), An(r.value1)(qn(n))(), i(n)(11)();
      };
    if (r instanceof Fu)
      return function() {
        return i(n)(3)(), Mr(n)(r.value0)(), An(r.value1)(qn(n))(), i(n)(11)();
      };
    if (r instanceof Rs)
      return function() {
        return i(n)(4)(), Mr(n)(r.value0)(), An(r.value1)(qn(n))(), k(V(r.value2))(function() {
          return i(n)(5)(), An(r.value2)(qn(n))();
        })(), i(n)(11)();
      };
    if (r instanceof gu)
      return function() {
        return i(n)(12)(), s(n)(r.value0)();
      };
    if (r instanceof $u)
      return function() {
        return i(n)(13)(), s(n)(r.value0)();
      };
    if (r instanceof Ps)
      return function() {
        return i(n)(14)(), I(n)(y(s(n))(r.value0))(), s(n)(r.value1)();
      };
    if (r instanceof Ws)
      return i(n)(15);
    if (r instanceof Zr)
      return function() {
        return i(n)(16)(), s(n)(r.value0)();
      };
    if (r instanceof zs)
      return function() {
        return i(n)(17)(), s(n)(r.value0)(), i(n)(0)();
      };
    throw new Error("Failed pattern match at Wasm.Encode (line 195, column 17 - line 524, column 27): " + [r.constructor.name]);
  };
}, B = function(n) {
  return function(r) {
    return function() {
      return An(r)(qn(n))(), i(n)(11)();
    };
  };
}, Fv = function(n) {
  return function(r) {
    return Ru(n)(function() {
      return I(n)(fv(n)(r.locals))(), B(n)(r.body)();
    });
  };
}, gv = function(n) {
  return function(r) {
    return Z(n)(10)(I(n)(y(Fv(n))(r)));
  };
}, $v = function(n) {
  return function(r) {
    if (r.mode instanceof Ns)
      return function() {
        return i(n)(1)(), I(n)(y(i(n))(r.init))();
      };
    if (r.mode instanceof Gs)
      return r.mode.value0.memory === 0 ? function() {
        return i(n)(0)(), B(n)(r.mode.value0.offset)(), I(n)(y(i(n))(r.init))();
      } : function() {
        return i(n)(2)(), s(n)(r.mode.value0.memory)(), B(n)(r.mode.value0.offset)(), I(n)(y(i(n))(r.init))();
      };
    throw new Error("Failed pattern match at Wasm.Encode (line 729, column 20 - line 742, column 55): " + [r.mode.constructor.name]);
  };
}, Sv = function(n) {
  return function(r) {
    return Z(n)(11)(I(n)(y($v(n))(r)));
  };
}, Mv = function(n) {
  return function(r) {
    return function() {
      return Tu(n)(r.type)(), B(n)(r.init)();
    };
  };
}, Cv = function(n) {
  return function(r) {
    return Z(n)(6)(I(n)(y(Mv(n))(r)));
  };
}, xv = function(n) {
  return n.length === 1 && n[0] instanceof pu ? new d(n[0].value0) : w.value;
}, Av = function(n) {
  return function(r) {
    var t = function(a) {
      {
        if (r.mode instanceof Pt)
          return function() {
            return s(n)(5)(), i(n)(0)(), I(n)(y(B(n))(r.init))();
          };
        if (r.mode instanceof zt)
          return r.mode.value0.table === 0 && Sr(r.type)(Dn.value) ? function() {
            return s(n)(4)(), B(n)(r.mode.value0.offset)(), I(n)(y(B(n))(r.init))();
          } : function() {
            return s(n)(6)(), s(n)(r.mode.value0.table)(), B(n)(r.mode.value0.offset)(), i(n)(0)(), I(n)(y(B(n))(r.init))();
          };
        if (r.mode instanceof Wt)
          return function() {
            return s(n)(7)(), i(n)(0)(), I(n)(y(B(n))(r.init))();
          };
        throw new Error("Failed pattern match at Wasm.Encode (line 684, column 17 - line 703, column 46): " + [r.mode.constructor.name]);
      }
    }, e = Sr(r.type)(Dn.value);
    if (e) {
      var u = Ys(xv)(r.init);
      if (u instanceof d) {
        if (r.mode instanceof Pt)
          return function() {
            return s(n)(1)(), i(n)(0)(), I(n)(y(s(n))(u.value0))();
          };
        if (r.mode instanceof zt)
          return r.mode.value0.table === 0 && Sr(r.type)(Dn.value) ? function() {
            return s(n)(0)(), B(n)(r.mode.value0.offset)(), I(n)(y(s(n))(u.value0))();
          } : function() {
            return s(n)(2)(), s(n)(r.mode.value0.table)(), B(n)(r.mode.value0.offset)(), i(n)(0)(), I(n)(y(s(n))(u.value0))();
          };
        if (r.mode instanceof Wt)
          return function() {
            return s(n)(3)(), i(n)(0)(), I(n)(y(s(n))(u.value0))();
          };
        throw new Error("Failed pattern match at Wasm.Encode (line 664, column 45 - line 683, column 45): " + [r.mode.constructor.name]);
      }
      return t();
    }
    return t();
  };
}, Dv = function(n) {
  return function(r) {
    return Z(n)(9)(I(n)(y(Av(n))(r)));
  };
}, Lv = function(n) {
  return function() {
    var t = Tf(8192)();
    return rv(t)(), k(V(n.types))(Iv(t)(n.types))(), k(V(n.imports))(pv(t)(n.imports))(), k(V(n.funcs))(wv(t)(n.funcs))(), k(V(n.tables))(yv(t)(n.tables))(), k(V(n.memories))(hv(t)(n.memories))(), k(V(n.globals))(Cv(t)(n.globals))(), k(V(n.exports))(mv(t)(n.exports))(), Hs(n.start)(_v(t))(), k(V(n.elem))(Dv(t)(n.elem))(), k(V(n.funcs))(gv(t)(n.funcs))(), k(V(n.data))(Sv(t)(n.data))(), t;
  };
}, Tv = function(n) {
  return xf(function() {
    var t = Lv(n)();
    return Df(t)();
  });
}, Rv = /* @__PURE__ */ Hr(er), Pv = /* @__PURE__ */ it(gr)(Xn), Wv = /* @__PURE__ */ Ha(gr)(nr), zv = /* @__PURE__ */ pr(Ji), Nv = function(n) {
  var r = de(n);
  return function(t) {
    var e = br(t.Apply0()), u = P(t);
    return function(a) {
      return r(function(o) {
        return function(f) {
          return function(c) {
            return e(c)(a(o));
          };
        };
      })(u(N));
    };
  };
}, Gv = /* @__PURE__ */ Nv(nr)(gr), Pu = function(n) {
  return tc(function() {
    var t = Tr();
    return n(t)(), t;
  });
}, C = function(n) {
  return function(r) {
    return Rv(sr(r)(n));
  };
}, cr = function(n) {
  return C(n)(new hu(0));
}, Ot = function(n) {
  return function(r) {
    return C(n)(new Iu({
      offset: r,
      align: 0
    }));
  };
}, Yr = function(n) {
  return function(r) {
    return function() {
      return cr(n)(), C(n)(new yu({
        offset: r,
        align: 0
      }))();
    };
  };
}, tn = function(n) {
  return function(r) {
    if (r instanceof A)
      return C(n)(new It(r.value0));
    if (r instanceof j)
      return Yr(n)(r.value0);
    if (r instanceof en)
      return tn(n)(new vn(new A(0), r.value0));
    if (r instanceof W)
      return function() {
        return tn(n)(r.value0)(), tn(n)(r.value1)(), C(n)(Et.value)();
      };
    if (r instanceof vn)
      return function() {
        return tn(n)(r.value0)(), tn(n)(r.value1)(), C(n)(du.value)();
      };
    if (r instanceof H)
      return function() {
        return tn(n)(r.value0)(), tn(n)(r.value1)(), C(n)(mu.value)();
      };
    throw new Error("Failed pattern match at CodeGen (line 80, column 1 - line 80, column 68): " + [n.constructor.name, r.constructor.name]);
  };
}, Bv = function(n) {
  return function(r) {
    return function(t) {
      if (t instanceof R)
        return tn(n)(t.value0);
      if (t instanceof L)
        return tn(n)(new W(new A(t.value0), new j(r)));
      throw new Error("Failed pattern match at CodeGen (line 76, column 1 - line 76, column 75): " + [n.constructor.name, r.constructor.name, t.constructor.name]);
    };
  };
}, Wu = function(n) {
  return function(r) {
    return Pv(Uv(n))(r);
  };
}, Uv = function(n) {
  return function(r) {
    var t = n;
    if (r instanceof Q)
      return function() {
        return cr(t)(), C(t)(new It(r.value0))(), C(t)(Et.value)(), C(t)(new _u(0))();
      };
    var t = n;
    if (r instanceof an)
      return function() {
        return cr(t)(), C(t)(new Zr(1))(), Ot(t)(r.value0)();
      };
    var t = n;
    if (r instanceof on)
      return function() {
        return Yr(t)(r.value0)(), C(t)(new Zr(0))();
      };
    if (r instanceof O)
      return C(n)(new Eu(new mr(w.value), [new Fu(new mr(w.value), Pu(function(e) {
        return function() {
          return Yr(e)(r.value0.idx)(), C(e)(wu.value)(), C(e)(new $u(1))(), Wu(e)(r.value0.proc)(), C(e)(new gu(0))();
        };
      }))]));
    if (r instanceof $)
      return function() {
        return Wv(function(u) {
          return function(a) {
            return zv(cr(n))(Bv(n)(u)(a));
          };
        })(r.value0)(), Gv(Ot(n))(r.value0)();
      };
    throw new Error("Failed pattern match at CodeGen (line 50, column 1 - line 50, column 70): " + [n.constructor.name, r.constructor.name]);
  };
}, qt = function(n) {
  return function(r) {
    return [{
      final: !0,
      supertypes: [],
      ty: new Su({
        arguments: n,
        results: r
      })
    }];
  };
}, Ov = function(n) {
  return {
    tables: Un.tables,
    globals: Un.globals,
    elem: Un.elem,
    data: Un.data,
    start: Un.start,
    memories: [{
      type: {
        min: 0,
        max: w.value
      }
    }],
    imports: [{
      module: "js",
      name: "putchar",
      desc: new Xr(0)
    }, {
      module: "js",
      name: "getchar",
      desc: new Xr(1)
    }, {
      module: "js",
      name: "mem",
      desc: new su({
        min: 0,
        max: w.value
      })
    }],
    exports: [{
      name: "run",
      desc: new vu(2)
    }],
    funcs: [{
      type: 0,
      locals: [],
      body: Pu(function(r) {
        return Wu(r)(n);
      })
    }],
    types: [qt([new Hn(Yn.value)])([]), qt([])([new Hn(Yn.value)])]
  };
}, qv = function(n) {
  return Tv(Ov(n));
};
function Vv(n) {
  try {
    return Kc(n)();
  } catch (r) {
    return r instanceof Error ? r.message : "Unknown error";
  }
}
function kv(n) {
  return nu(n)(0);
}
function Kv(n) {
  return be(n)(0);
}
const zu = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO3NlbGYub25tZXNzYWdlPWFzeW5jKHtkYXRhOmV9KT0+e2NvbnN0IHQ9ZS5pbnB1dDtsZXQgbj0wO2NvbnN0IG89bmV3IFdlYkFzc2VtYmx5Lk1lbW9yeSh7aW5pdGlhbDowfSk7by5ncm93KGUubWVtKTtjb25zdCBsPWF3YWl0IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGUubW9kLHtqczp7bWVtOm8scHV0Y2hhcihzKXtzZWxmLnBvc3RNZXNzYWdlKHt0eXBlOiJvdXQiLGNvZGU6cyYyNTV9KX0sZ2V0Y2hhcigpe3JldHVybiBuPj10Lmxlbmd0aCYmKHNlbGYucG9zdE1lc3NhZ2Uoe3R5cGU6ImVyciIsbXNnOiJJbnB1dCBPdmVyZmxvdyJ9KSxzZWxmLmNsb3NlKCkpLHRbbisrXX19fSk7dHJ5e2wuZXhwb3J0cy5ydW4oZS5wb3MpLHNlbGYucG9zdE1lc3NhZ2Uoe3R5cGU6ImVuZCJ9KX1jYXRjaChzKXtzZWxmLnBvc3RNZXNzYWdlKHt0eXBlOiJlcnIiLG1zZzpzLm1lc3NhZ2V9KX1zZWxmLmNsb3NlKCl9fSkoKTsK", jv = (n) => Uint8Array.from(atob(n), (r) => r.charCodeAt(0)), Vt = typeof window < "u" && window.Blob && new Blob([jv(zu)], { type: "text/javascript;charset=utf-8" });
function Xv(n) {
  let r;
  try {
    if (r = Vt && (window.URL || window.webkitURL).createObjectURL(Vt), !r)
      throw "";
    const t = new Worker(r, {
      name: n == null ? void 0 : n.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(r);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + zu,
      {
        name: n == null ? void 0 : n.name
      }
    );
  } finally {
    r && (window.URL || window.webkitURL).revokeObjectURL(r);
  }
}
const kt = (n, r) => {
  let t = Vv(n);
  return typeof t != "string" ? (r && (t = $f(yf(t))), {
    ir: kv(t),
    c: Kv(t),
    wasm: WebAssembly.compile(qv(t))
  }) : t;
}, Zv = (n, r, t, e, u, a, o) => {
  let f = "";
  const c = new Xv();
  return c.onmessage = ({ data: l }) => ({
    end() {
      a();
    },
    err() {
      o(l.msg);
    },
    out() {
      f += String.fromCharCode(l.code), u(f);
    }
  })[l.type](), c.postMessage({ mod: n, input: r, pos: t, mem: e }), () => c.terminate();
}, Jv = /* @__PURE__ */ _("br", null, null, -1), Yv = /* @__PURE__ */ _("br", null, null, -1), Hv = /* @__PURE__ */ _("br", null, null, -1), Qv = /* @__PURE__ */ _("br", null, null, -1), bv = /* @__PURE__ */ _("hr", null, null, -1), n0 = /* @__PURE__ */ _("br", null, null, -1), r0 = { readonly: "" }, t0 = /* @__PURE__ */ _("br", null, null, -1), e0 = /* @__PURE__ */ _("br", null, null, -1), u0 = { readonly: "" }, a0 = /* @__PURE__ */ _("br", null, null, -1), o0 = /* @__PURE__ */ _("hr", null, null, -1), i0 = /* @__PURE__ */ _("br", null, null, -1), c0 = /* @__PURE__ */ _("br", null, null, -1), f0 = /* @__PURE__ */ _("br", null, null, -1), l0 = /* @__PURE__ */ _("br", null, null, -1), s0 = /* @__PURE__ */ _("br", null, null, -1), v0 = /* @__PURE__ */ _("br", null, null, -1), d0 = { readonly: "" }, m0 = /* @__PURE__ */ _("br", null, null, -1), p0 = /* @__PURE__ */ Nu({
  __name: "Main",
  setup(n) {
    const r = Y("+[-->-[>>+>-----<<]<--<---]>-.>>>+.>>..+++[.>]<<<<.+++.------.<<-.>>>>+."), t = Y(!0), e = Y(""), u = Y(kt("", !1)), a = Y(""), o = Y(1), f = Y(10), c = Y(""), l = Y(""), v = Y(() => {
    }), E = () => {
      const z = kt(r.value, t.value);
      typeof z == "string" ? e.value = z : (e.value = "Complete", u.value = z);
    }, F = () => {
      c.value = "", v.value(), l.value = "Stopped";
    }, T = async () => {
      F(), l.value = "Running";
      const z = [...a.value].map((g) => g.charCodeAt(0));
      v.value = Zv(
        await u.value.wasm,
        z,
        f.value,
        o.value,
        (g) => {
          c.value = g;
        },
        () => {
          l.value = "Complete";
        },
        (g) => {
          l.value = "Error: " + g;
        }
      );
    };
    return Gu(() => v.value()), (z, g) => (Bu(), Uu(Ou, null, [
      q(" Source Code: "),
      Jv,
      Nn(_("textarea", {
        "onUpdate:modelValue": g[0] || (g[0] = (J) => r.value = J)
      }, null, 512), [
        [ar, r.value]
      ]),
      Yv,
      q(" Optimize: "),
      Nn(_("input", {
        type: "checkbox",
        "onUpdate:modelValue": g[1] || (g[1] = (J) => t.value = J)
      }, null, 512), [
        [qu, t.value]
      ]),
      Hv,
      _("button", { onClick: E }, "Compile"),
      q(" " + Gn(e.value), 1),
      Qv,
      bv,
      q(" IR: "),
      n0,
      _("textarea", r0, Gn(u.value.ir), 1),
      t0,
      q(" C: "),
      e0,
      _("textarea", u0, Gn(u.value.c), 1),
      a0,
      o0,
      q(" Input: "),
      i0,
      Nn(_("textarea", {
        "onUpdate:modelValue": g[2] || (g[2] = (J) => a.value = J)
      }, null, 512), [
        [ar, a.value]
      ]),
      c0,
      q(" Size: "),
      Nn(_("input", {
        "onUpdate:modelValue": g[3] || (g[3] = (J) => o.value = J)
      }, null, 512), [
        [ar, o.value]
      ]),
      f0,
      q(" Position: "),
      Nn(_("input", {
        "onUpdate:modelValue": g[4] || (g[4] = (J) => f.value = J)
      }, null, 512), [
        [ar, f.value]
      ]),
      l0,
      _("button", { onClick: T }, "Run"),
      q(),
      _("button", { onClick: F }, "Stop"),
      q(" " + Gn(l.value), 1),
      s0,
      q(" Output: "),
      v0,
      _("textarea", d0, Gn(c.value), 1),
      m0
    ], 64));
  }
});
export {
  p0 as default
};
