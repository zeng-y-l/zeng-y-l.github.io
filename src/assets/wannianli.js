import { defineComponent as Hr, ref as Yr, computed as Gr, openBlock as Y, createElementBlock as G, Fragment as m0, createTextVNode as we, createElementVNode as D, toDisplayString as r0, renderList as Se, createCommentVNode as Jr } from "vue";
class b0 extends Error {
}
class jr extends b0 {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class Br extends b0 {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class Qr extends b0 {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class _0 extends b0 {
}
class Cn extends b0 {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class _ extends b0 {
}
class y0 extends b0 {
  constructor() {
    super("Zone is an abstract class");
  }
}
const m = "numeric", e0 = "short", q = "long", Ce = {
  year: m,
  month: m,
  day: m
}, Vn = {
  year: m,
  month: e0,
  day: m
}, Xr = {
  year: m,
  month: e0,
  day: m,
  weekday: e0
}, An = {
  year: m,
  month: q,
  day: m
}, Wn = {
  year: m,
  month: q,
  day: m,
  weekday: q
}, zn = {
  hour: m,
  minute: m
}, Ln = {
  hour: m,
  minute: m,
  second: m
}, _n = {
  hour: m,
  minute: m,
  second: m,
  timeZoneName: e0
}, Un = {
  hour: m,
  minute: m,
  second: m,
  timeZoneName: q
}, $n = {
  hour: m,
  minute: m,
  hourCycle: "h23"
}, Zn = {
  hour: m,
  minute: m,
  second: m,
  hourCycle: "h23"
}, Rn = {
  hour: m,
  minute: m,
  second: m,
  hourCycle: "h23",
  timeZoneName: e0
}, Pn = {
  hour: m,
  minute: m,
  second: m,
  hourCycle: "h23",
  timeZoneName: q
}, qn = {
  year: m,
  month: m,
  day: m,
  hour: m,
  minute: m
}, Hn = {
  year: m,
  month: m,
  day: m,
  hour: m,
  minute: m,
  second: m
}, Yn = {
  year: m,
  month: e0,
  day: m,
  hour: m,
  minute: m
}, Gn = {
  year: m,
  month: e0,
  day: m,
  hour: m,
  minute: m,
  second: m
}, Kr = {
  year: m,
  month: e0,
  day: m,
  weekday: e0,
  hour: m,
  minute: m
}, Jn = {
  year: m,
  month: q,
  day: m,
  hour: m,
  minute: m,
  timeZoneName: e0
}, jn = {
  year: m,
  month: q,
  day: m,
  hour: m,
  minute: m,
  second: m,
  timeZoneName: e0
}, Bn = {
  year: m,
  month: q,
  day: m,
  weekday: q,
  hour: m,
  minute: m,
  timeZoneName: q
}, Qn = {
  year: m,
  month: q,
  day: m,
  weekday: q,
  hour: m,
  minute: m,
  second: m,
  timeZoneName: q
};
class ie {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new y0();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new y0();
  }
  /**
   * The IANA name of this zone.
   * Defaults to `name` if not overwritten by a subclass.
   * @abstract
   * @type {string}
   */
  get ianaName() {
    return this.name;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new y0();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, t) {
    throw new y0();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, t) {
    throw new y0();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new y0();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new y0();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new y0();
  }
}
let Xe = null;
class $e extends ie {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return Xe === null && (Xe = new $e()), Xe;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: t, locale: r }) {
    return ar(e, t, r);
  }
  /** @override **/
  formatOffset(e, t) {
    return te(this.offset(e), t);
  }
  /** @override **/
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  /** @override **/
  equals(e) {
    return e.type === "system";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
let Ie = {};
function es(n) {
  return Ie[n] || (Ie[n] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: n,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), Ie[n];
}
const ts = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function ns(n, e) {
  const t = n.format(e).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t), [, s, i, a, o, u, l, c] = r;
  return [a, s, i, o, u, l, c];
}
function rs(n, e) {
  const t = n.formatToParts(e), r = [];
  for (let s = 0; s < t.length; s++) {
    const { type: i, value: a } = t[s], o = ts[i];
    i === "era" ? r[o] = a : S(o) || (r[o] = parseInt(a, 10));
  }
  return r;
}
let pe = {};
class c0 extends ie {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    return pe[e] || (pe[e] = new c0(e)), pe[e];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    pe = {}, Ie = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated For backward compatibility, this forwards to isValidZone, better use `isValidZone()` directly instead.
   * @return {boolean}
   */
  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(e) {
    if (!e)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(e) {
    super(), this.zoneName = e, this.valid = c0.isValidZone(e);
  }
  /**
   * The type of zone. `iana` for all instances of `IANAZone`.
   * @override
   * @type {string}
   */
  get type() {
    return "iana";
  }
  /**
   * The name of this zone (i.e. the IANA zone name).
   * @override
   * @type {string}
   */
  get name() {
    return this.zoneName;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns false for all IANA zones.
   * @override
   * @type {boolean}
   */
  get isUniversal() {
    return !1;
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, { format: t, locale: r }) {
    return ar(e, t, r, this.name);
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, t) {
    return te(this.offset(e), t);
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @override
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    const t = new Date(e);
    if (isNaN(t)) return NaN;
    const r = es(this.name);
    let [s, i, a, o, u, l, c] = r.formatToParts ? rs(r, t) : ns(r, t);
    o === "BC" && (s = -Math.abs(s) + 1);
    const y = Re({
      year: s,
      month: i,
      day: a,
      hour: u === 24 ? 0 : u,
      minute: l,
      second: c,
      millisecond: 0
    });
    let d = +t;
    const w = d % 1e3;
    return d -= w >= 0 ? w : 1e3 + w, (y - d) / (60 * 1e3);
  }
  /**
   * Return whether this Zone is equal to another zone
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    return e.type === "iana" && e.name === this.name;
  }
  /**
   * Return whether this Zone is valid.
   * @override
   * @type {boolean}
   */
  get isValid() {
    return this.valid;
  }
}
let Rt = {};
function ss(n, e = {}) {
  const t = JSON.stringify([n, e]);
  let r = Rt[t];
  return r || (r = new Intl.ListFormat(n, e), Rt[t] = r), r;
}
let ut = {};
function lt(n, e = {}) {
  const t = JSON.stringify([n, e]);
  let r = ut[t];
  return r || (r = new Intl.DateTimeFormat(n, e), ut[t] = r), r;
}
let ct = {};
function is(n, e = {}) {
  const t = JSON.stringify([n, e]);
  let r = ct[t];
  return r || (r = new Intl.NumberFormat(n, e), ct[t] = r), r;
}
let ft = {};
function as(n, e = {}) {
  const { base: t, ...r } = e, s = JSON.stringify([n, r]);
  let i = ft[s];
  return i || (i = new Intl.RelativeTimeFormat(n, e), ft[s] = i), i;
}
let X0 = null;
function os() {
  return X0 || (X0 = new Intl.DateTimeFormat().resolvedOptions().locale, X0);
}
let Pt = {};
function us(n) {
  let e = Pt[n];
  if (!e) {
    const t = new Intl.Locale(n);
    e = "getWeekInfo" in t ? t.getWeekInfo() : t.weekInfo, Pt[n] = e;
  }
  return e;
}
function ls(n) {
  const e = n.indexOf("-x-");
  e !== -1 && (n = n.substring(0, e));
  const t = n.indexOf("-u-");
  if (t === -1)
    return [n];
  {
    let r, s;
    try {
      r = lt(n).resolvedOptions(), s = n;
    } catch {
      const u = n.substring(0, t);
      r = lt(u).resolvedOptions(), s = u;
    }
    const { numberingSystem: i, calendar: a } = r;
    return [s, i, a];
  }
}
function cs(n, e, t) {
  return (t || e) && (n.includes("-u-") || (n += "-u"), t && (n += `-ca-${t}`), e && (n += `-nu-${e}`)), n;
}
function fs(n) {
  const e = [];
  for (let t = 1; t <= 12; t++) {
    const r = g.utc(2009, t, 1);
    e.push(n(r));
  }
  return e;
}
function hs(n) {
  const e = [];
  for (let t = 1; t <= 7; t++) {
    const r = g.utc(2016, 11, 13 + t);
    e.push(n(r));
  }
  return e;
}
function Te(n, e, t, r) {
  const s = n.listingMode();
  return s === "error" ? null : s === "en" ? t(e) : r(e);
}
function ds(n) {
  return n.numberingSystem && n.numberingSystem !== "latn" ? !1 : n.numberingSystem === "latn" || !n.locale || n.locale.startsWith("en") || new Intl.DateTimeFormat(n.intl).resolvedOptions().numberingSystem === "latn";
}
class ms {
  constructor(e, t, r) {
    this.padTo = r.padTo || 0, this.floor = r.floor || !1;
    const { padTo: s, floor: i, ...a } = r;
    if (!t || Object.keys(a).length > 0) {
      const o = { useGrouping: !1, ...r };
      r.padTo > 0 && (o.minimumIntegerDigits = r.padTo), this.inf = is(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const t = this.floor ? Math.floor(e) : e;
      return this.inf.format(t);
    } else {
      const t = this.floor ? Math.floor(e) : Ft(e, 3);
      return A(t, this.padTo);
    }
  }
}
class ys {
  constructor(e, t, r) {
    this.opts = r, this.originalZone = void 0;
    let s;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && c0.create(o).valid ? (s = o, this.dt = e) : (s = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, s = e.zone.name) : (s = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const i = { ...this.opts };
    i.timeZone = i.timeZone || s, this.dtf = lt(t, i);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: e }) => e).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const e = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? e.map((t) => {
      if (t.type === "timeZoneName") {
        const r = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...t,
          value: r
        };
      } else
        return t;
    }) : e;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class gs {
  constructor(e, t, r) {
    this.opts = { style: "long", ...r }, !t && sr() && (this.rtf = as(e, r));
  }
  format(e, t) {
    return this.rtf ? this.rtf.format(e, t) : Us(t, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, t) {
    return this.rtf ? this.rtf.formatToParts(e, t) : [];
  }
}
const ws = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class M {
  static fromOpts(e) {
    return M.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, t, r, s, i = !1) {
    const a = e || I.defaultLocale, o = a || (i ? "en-US" : os()), u = t || I.defaultNumberingSystem, l = r || I.defaultOutputCalendar, c = ht(s) || I.defaultWeekSettings;
    return new M(o, u, l, c, a);
  }
  static resetCache() {
    X0 = null, ut = {}, ct = {}, ft = {};
  }
  static fromObject({ locale: e, numberingSystem: t, outputCalendar: r, weekSettings: s } = {}) {
    return M.create(e, t, r, s);
  }
  constructor(e, t, r, s, i) {
    const [a, o, u] = ls(e);
    this.locale = a, this.numberingSystem = t || o || null, this.outputCalendar = r || u || null, this.weekSettings = s, this.intl = cs(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = i, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = ds(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), t = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && t ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : M.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      ht(e.weekSettings) || this.weekSettings,
      e.defaultToEN || !1
    );
  }
  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }
  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }
  months(e, t = !1) {
    return Te(this, e, lr, () => {
      const r = t ? { month: e, day: "numeric" } : { month: e }, s = t ? "format" : "standalone";
      return this.monthsCache[s][e] || (this.monthsCache[s][e] = fs((i) => this.extract(i, r, "month"))), this.monthsCache[s][e];
    });
  }
  weekdays(e, t = !1) {
    return Te(this, e, hr, () => {
      const r = t ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, s = t ? "format" : "standalone";
      return this.weekdaysCache[s][e] || (this.weekdaysCache[s][e] = hs(
        (i) => this.extract(i, r, "weekday")
      )), this.weekdaysCache[s][e];
    });
  }
  meridiems() {
    return Te(
      this,
      void 0,
      () => dr,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [g.utc(2016, 11, 13, 9), g.utc(2016, 11, 13, 19)].map(
            (t) => this.extract(t, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return Te(this, e, mr, () => {
      const t = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [g.utc(-40, 1, 1), g.utc(2017, 1, 1)].map(
        (r) => this.extract(r, t, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, t, r) {
    const s = this.dtFormatter(e, t), i = s.formatToParts(), a = i.find((o) => o.type.toLowerCase() === r);
    return a ? a.value : null;
  }
  numberFormatter(e = {}) {
    return new ms(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, t = {}) {
    return new ys(e, this.intl, t);
  }
  relFormatter(e = {}) {
    return new gs(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return ss(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : ir() ? us(this.locale) : ws;
  }
  getStartOfWeek() {
    return this.getWeekSettings().firstDay;
  }
  getMinDaysInFirstWeek() {
    return this.getWeekSettings().minimalDays;
  }
  getWeekendDays() {
    return this.getWeekSettings().weekend;
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
  toString() {
    return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
  }
}
let Ke = null;
class Z extends ie {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Ke === null && (Ke = new Z(0)), Ke;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? Z.utcInstance : new Z(e);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(e) {
    if (e) {
      const t = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (t)
        return new Z(Pe(t[1], t[2]));
    }
    return null;
  }
  constructor(e) {
    super(), this.fixed = e;
  }
  /**
   * The type of zone. `fixed` for all instances of `FixedOffsetZone`.
   * @override
   * @type {string}
   */
  get type() {
    return "fixed";
  }
  /**
   * The name of this zone.
   * All fixed zones' names always start with "UTC" (plus optional offset)
   * @override
   * @type {string}
   */
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${te(this.fixed, "narrow")}`;
  }
  /**
   * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
   *
   * @override
   * @type {string}
   */
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${te(-this.fixed, "narrow")}`;
  }
  /**
   * Returns the offset's common name at the specified timestamp.
   *
   * For fixed offset zones this equals to the zone name.
   * @override
   */
  offsetName() {
    return this.name;
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, t) {
    return te(this.fixed, t);
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns true for all fixed offset zones.
   * @override
   * @type {boolean}
   */
  get isUniversal() {
    return !0;
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   *
   * For fixed offset zones, this is constant and does not depend on a timestamp.
   * @override
   * @return {number}
   */
  offset() {
    return this.fixed;
  }
  /**
   * Return whether this Zone is equal to another zone (i.e. also fixed and same offset)
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    return e.type === "fixed" && e.fixed === this.fixed;
  }
  /**
   * Return whether this Zone is valid:
   * All fixed offset zones are valid.
   * @override
   * @type {boolean}
   */
  get isValid() {
    return !0;
  }
}
class Ss extends ie {
  constructor(e) {
    super(), this.zoneName = e;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return !1;
  }
  /** @override **/
  get isValid() {
    return !1;
  }
}
function p0(n, e) {
  if (S(n) || n === null)
    return e;
  if (n instanceof ie)
    return n;
  if (Os(n)) {
    const t = n.toLowerCase();
    return t === "default" ? e : t === "local" || t === "system" ? $e.instance : t === "utc" || t === "gmt" ? Z.utcInstance : Z.parseSpecifier(t) || c0.create(n);
  } else return T0(n) ? Z.instance(n) : typeof n == "object" && "offset" in n && typeof n.offset == "function" ? n : new Ss(n);
}
const Nt = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, qt = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, ps = Nt.hanidec.replace(/[\[|\]]/g, "").split("");
function Ts(n) {
  let e = parseInt(n, 10);
  if (isNaN(e)) {
    e = "";
    for (let t = 0; t < n.length; t++) {
      const r = n.charCodeAt(t);
      if (n[t].search(Nt.hanidec) !== -1)
        e += ps.indexOf(n[t]);
      else
        for (const s in qt) {
          const [i, a] = qt[s];
          r >= i && r <= a && (e += r - i);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
let z0 = {};
function ks() {
  z0 = {};
}
function Q({ numberingSystem: n }, e = "") {
  const t = n || "latn";
  return z0[t] || (z0[t] = {}), z0[t][e] || (z0[t][e] = new RegExp(`${Nt[t]}${e}`)), z0[t][e];
}
let Ht = () => Date.now(), Yt = "system", Gt = null, Jt = null, jt = null, Bt = 60, Qt, Xt = null;
class I {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return Ht;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    Ht = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    Yt = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return p0(Yt, $e.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return Gt;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    Gt = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return Jt;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    Jt = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return jt;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    jt = e;
  }
  /**
   * @typedef {Object} WeekSettings
   * @property {number} firstDay
   * @property {number} minimalDays
   * @property {number[]} weekend
   */
  /**
   * @return {WeekSettings|null}
   */
  static get defaultWeekSettings() {
    return Xt;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(e) {
    Xt = ht(e);
  }
  /**
   * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return Bt;
  }
  /**
   * Set the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // all 'yy' are interpreted as 20th century
   * @example Settings.twoDigitCutoffYear = 99 // all 'yy' are interpreted as 21st century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 2049; '50' -> 1950
   * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
   */
  static set twoDigitCutoffYear(e) {
    Bt = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return Qt;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    Qt = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    M.resetCache(), c0.resetCache(), g.resetCache(), ks();
  }
}
class K {
  constructor(e, t) {
    this.reason = e, this.explanation = t;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const Xn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Kn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function j(n, e) {
  return new K(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${n}, which is invalid`
  );
}
function It(n, e, t) {
  const r = new Date(Date.UTC(n, e - 1, t));
  n < 100 && n >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
  const s = r.getUTCDay();
  return s === 0 ? 7 : s;
}
function er(n, e, t) {
  return t + (ae(n) ? Kn : Xn)[e - 1];
}
function tr(n, e) {
  const t = ae(n) ? Kn : Xn, r = t.findIndex((i) => i < e), s = e - t[r];
  return { month: r + 1, day: s };
}
function xt(n, e) {
  return (n - e + 7) % 7 + 1;
}
function Ve(n, e = 4, t = 1) {
  const { year: r, month: s, day: i } = n, a = er(r, s, i), o = xt(It(r, s, i), t);
  let u = Math.floor((a - o + 14 - e) / 7), l;
  return u < 1 ? (l = r - 1, u = se(l, e, t)) : u > se(r, e, t) ? (l = r + 1, u = 1) : l = r, { weekYear: l, weekNumber: u, weekday: o, ...qe(n) };
}
function Kt(n, e = 4, t = 1) {
  const { weekYear: r, weekNumber: s, weekday: i } = n, a = xt(It(r, 1, e), t), o = Z0(r);
  let u = s * 7 + i - a - 7 + e, l;
  u < 1 ? (l = r - 1, u += Z0(l)) : u > o ? (l = r + 1, u -= Z0(r)) : l = r;
  const { month: c, day: f } = tr(l, u);
  return { year: l, month: c, day: f, ...qe(n) };
}
function et(n) {
  const { year: e, month: t, day: r } = n, s = er(e, t, r);
  return { year: e, ordinal: s, ...qe(n) };
}
function en(n) {
  const { year: e, ordinal: t } = n, { month: r, day: s } = tr(e, t);
  return { year: e, month: r, day: s, ...qe(n) };
}
function tn(n, e) {
  if (!S(n.localWeekday) || !S(n.localWeekNumber) || !S(n.localWeekYear)) {
    if (!S(n.weekday) || !S(n.weekNumber) || !S(n.weekYear))
      throw new _0(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return S(n.localWeekday) || (n.weekday = n.localWeekday), S(n.localWeekNumber) || (n.weekNumber = n.localWeekNumber), S(n.localWeekYear) || (n.weekYear = n.localWeekYear), delete n.localWeekday, delete n.localWeekNumber, delete n.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function vs(n, e = 4, t = 1) {
  const r = Ze(n.weekYear), s = B(
    n.weekNumber,
    1,
    se(n.weekYear, e, t)
  ), i = B(n.weekday, 1, 7);
  return r ? s ? i ? !1 : j("weekday", n.weekday) : j("week", n.weekNumber) : j("weekYear", n.weekYear);
}
function Ms(n) {
  const e = Ze(n.year), t = B(n.ordinal, 1, Z0(n.year));
  return e ? t ? !1 : j("ordinal", n.ordinal) : j("year", n.year);
}
function nr(n) {
  const e = Ze(n.year), t = B(n.month, 1, 12), r = B(n.day, 1, Ae(n.year, n.month));
  return e ? t ? r ? !1 : j("day", n.day) : j("month", n.month) : j("year", n.year);
}
function rr(n) {
  const { hour: e, minute: t, second: r, millisecond: s } = n, i = B(e, 0, 23) || e === 24 && t === 0 && r === 0 && s === 0, a = B(t, 0, 59), o = B(r, 0, 59), u = B(s, 0, 999);
  return i ? a ? o ? u ? !1 : j("millisecond", s) : j("second", r) : j("minute", t) : j("hour", e);
}
function S(n) {
  return typeof n > "u";
}
function T0(n) {
  return typeof n == "number";
}
function Ze(n) {
  return typeof n == "number" && n % 1 === 0;
}
function Os(n) {
  return typeof n == "string";
}
function Ds(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function sr() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function ir() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function Es(n) {
  return Array.isArray(n) ? n : [n];
}
function nn(n, e, t) {
  if (n.length !== 0)
    return n.reduce((r, s) => {
      const i = [e(s), s];
      return r && t(r[0], i[0]) === r[0] ? r : i;
    }, null)[1];
}
function Ns(n, e) {
  return e.reduce((t, r) => (t[r] = n[r], t), {});
}
function q0(n, e) {
  return Object.prototype.hasOwnProperty.call(n, e);
}
function ht(n) {
  if (n == null)
    return null;
  if (typeof n != "object")
    throw new _("Week settings must be an object");
  if (!B(n.firstDay, 1, 7) || !B(n.minimalDays, 1, 7) || !Array.isArray(n.weekend) || n.weekend.some((e) => !B(e, 1, 7)))
    throw new _("Invalid week settings");
  return {
    firstDay: n.firstDay,
    minimalDays: n.minimalDays,
    weekend: Array.from(n.weekend)
  };
}
function B(n, e, t) {
  return Ze(n) && n >= e && n <= t;
}
function Is(n, e) {
  return n - e * Math.floor(n / e);
}
function A(n, e = 2) {
  const t = n < 0;
  let r;
  return t ? r = "-" + ("" + -n).padStart(e, "0") : r = ("" + n).padStart(e, "0"), r;
}
function S0(n) {
  if (!(S(n) || n === null || n === ""))
    return parseInt(n, 10);
}
function O0(n) {
  if (!(S(n) || n === null || n === ""))
    return parseFloat(n);
}
function bt(n) {
  if (!(S(n) || n === null || n === "")) {
    const e = parseFloat("0." + n) * 1e3;
    return Math.floor(e);
  }
}
function Ft(n, e, t = !1) {
  const r = 10 ** e;
  return (t ? Math.trunc : Math.round)(n * r) / r;
}
function ae(n) {
  return n % 4 === 0 && (n % 100 !== 0 || n % 400 === 0);
}
function Z0(n) {
  return ae(n) ? 366 : 365;
}
function Ae(n, e) {
  const t = Is(e - 1, 12) + 1, r = n + (e - t) / 12;
  return t === 2 ? ae(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1];
}
function Re(n) {
  let e = Date.UTC(
    n.year,
    n.month - 1,
    n.day,
    n.hour,
    n.minute,
    n.second,
    n.millisecond
  );
  return n.year < 100 && n.year >= 0 && (e = new Date(e), e.setUTCFullYear(n.year, n.month - 1, n.day)), +e;
}
function rn(n, e, t) {
  return -xt(It(n, 1, e), t) + e - 1;
}
function se(n, e = 4, t = 1) {
  const r = rn(n, e, t), s = rn(n + 1, e, t);
  return (Z0(n) - r + s) / 7;
}
function dt(n) {
  return n > 99 ? n : n > I.twoDigitCutoffYear ? 1900 + n : 2e3 + n;
}
function ar(n, e, t, r = null) {
  const s = new Date(n), i = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  r && (i.timeZone = r);
  const a = { timeZoneName: e, ...i }, o = new Intl.DateTimeFormat(t, a).formatToParts(s).find((u) => u.type.toLowerCase() === "timezonename");
  return o ? o.value : null;
}
function Pe(n, e) {
  let t = parseInt(n, 10);
  Number.isNaN(t) && (t = 0);
  const r = parseInt(e, 10) || 0, s = t < 0 || Object.is(t, -0) ? -r : r;
  return t * 60 + s;
}
function or(n) {
  const e = Number(n);
  if (typeof n == "boolean" || n === "" || Number.isNaN(e))
    throw new _(`Invalid unit value ${n}`);
  return e;
}
function We(n, e) {
  const t = {};
  for (const r in n)
    if (q0(n, r)) {
      const s = n[r];
      if (s == null) continue;
      t[e(r)] = or(s);
    }
  return t;
}
function te(n, e) {
  const t = Math.trunc(Math.abs(n / 60)), r = Math.trunc(Math.abs(n % 60)), s = n >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${s}${A(t, 2)}:${A(r, 2)}`;
    case "narrow":
      return `${s}${t}${r > 0 ? `:${r}` : ""}`;
    case "techie":
      return `${s}${A(t, 2)}${A(r, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function qe(n) {
  return Ns(n, ["hour", "minute", "second", "millisecond"]);
}
const xs = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], ur = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], bs = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function lr(n) {
  switch (n) {
    case "narrow":
      return [...bs];
    case "short":
      return [...ur];
    case "long":
      return [...xs];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const cr = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], fr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], Fs = ["M", "T", "W", "T", "F", "S", "S"];
function hr(n) {
  switch (n) {
    case "narrow":
      return [...Fs];
    case "short":
      return [...fr];
    case "long":
      return [...cr];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const dr = ["AM", "PM"], Cs = ["Before Christ", "Anno Domini"], Vs = ["BC", "AD"], As = ["B", "A"];
function mr(n) {
  switch (n) {
    case "narrow":
      return [...As];
    case "short":
      return [...Vs];
    case "long":
      return [...Cs];
    default:
      return null;
  }
}
function Ws(n) {
  return dr[n.hour < 12 ? 0 : 1];
}
function zs(n, e) {
  return hr(e)[n.weekday - 1];
}
function Ls(n, e) {
  return lr(e)[n.month - 1];
}
function _s(n, e) {
  return mr(e)[n.year < 0 ? 0 : 1];
}
function Us(n, e, t = "always", r = !1) {
  const s = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, i = ["hours", "minutes", "seconds"].indexOf(n) === -1;
  if (t === "auto" && i) {
    const f = n === "days";
    switch (e) {
      case 1:
        return f ? "tomorrow" : `next ${s[n][0]}`;
      case -1:
        return f ? "yesterday" : `last ${s[n][0]}`;
      case 0:
        return f ? "today" : `this ${s[n][0]}`;
    }
  }
  const a = Object.is(e, -0) || e < 0, o = Math.abs(e), u = o === 1, l = s[n], c = r ? u ? l[1] : l[2] || l[1] : u ? s[n][0] : n;
  return a ? `${o} ${c} ago` : `in ${o} ${c}`;
}
function sn(n, e) {
  let t = "";
  for (const r of n)
    r.literal ? t += r.val : t += e(r.val);
  return t;
}
const $s = {
  D: Ce,
  DD: Vn,
  DDD: An,
  DDDD: Wn,
  t: zn,
  tt: Ln,
  ttt: _n,
  tttt: Un,
  T: $n,
  TT: Zn,
  TTT: Rn,
  TTTT: Pn,
  f: qn,
  ff: Yn,
  fff: Jn,
  ffff: Bn,
  F: Hn,
  FF: Gn,
  FFF: jn,
  FFFF: Qn
};
class $ {
  static create(e, t = {}) {
    return new $(e, t);
  }
  static parseFormat(e) {
    let t = null, r = "", s = !1;
    const i = [];
    for (let a = 0; a < e.length; a++) {
      const o = e.charAt(a);
      o === "'" ? (r.length > 0 && i.push({ literal: s || /^\s+$/.test(r), val: r }), t = null, r = "", s = !s) : s || o === t ? r += o : (r.length > 0 && i.push({ literal: /^\s+$/.test(r), val: r }), r = o, t = o);
    }
    return r.length > 0 && i.push({ literal: s || /^\s+$/.test(r), val: r }), i;
  }
  static macroTokenToFormatOpts(e) {
    return $s[e];
  }
  constructor(e, t) {
    this.opts = t, this.loc = e, this.systemLoc = null;
  }
  formatWithSystemDefault(e, t) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...t }).format();
  }
  dtFormatter(e, t = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...t });
  }
  formatDateTime(e, t) {
    return this.dtFormatter(e, t).format();
  }
  formatDateTimeParts(e, t) {
    return this.dtFormatter(e, t).formatToParts();
  }
  formatInterval(e, t) {
    return this.dtFormatter(e.start, t).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
  }
  resolvedOptions(e, t) {
    return this.dtFormatter(e, t).resolvedOptions();
  }
  num(e, t = 0) {
    if (this.opts.forceSimple)
      return A(e, t);
    const r = { ...this.opts };
    return t > 0 && (r.padTo = t), this.loc.numberFormatter(r).format(e);
  }
  formatDateTimeFromString(e, t) {
    const r = this.loc.listingMode() === "en", s = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", i = (d, w) => this.loc.extract(e, d, w), a = (d) => e.isOffsetFixed && e.offset === 0 && d.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, d.format) : "", o = () => r ? Ws(e) : i({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), u = (d, w) => r ? Ls(e, d) : i(w ? { month: d } : { month: d, day: "numeric" }, "month"), l = (d, w) => r ? zs(e, d) : i(
      w ? { weekday: d } : { weekday: d, month: "long", day: "numeric" },
      "weekday"
    ), c = (d) => {
      const w = $.macroTokenToFormatOpts(d);
      return w ? this.formatWithSystemDefault(e, w) : d;
    }, f = (d) => r ? _s(e, d) : i({ era: d }, "era"), y = (d) => {
      switch (d) {
        // ms
        case "S":
          return this.num(e.millisecond);
        case "u":
        // falls through
        case "SSS":
          return this.num(e.millisecond, 3);
        // seconds
        case "s":
          return this.num(e.second);
        case "ss":
          return this.num(e.second, 2);
        // fractional seconds
        case "uu":
          return this.num(Math.floor(e.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e.millisecond / 100));
        // minutes
        case "m":
          return this.num(e.minute);
        case "mm":
          return this.num(e.minute, 2);
        // hours
        case "h":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
        case "hh":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
        case "H":
          return this.num(e.hour);
        case "HH":
          return this.num(e.hour, 2);
        // offset
        case "Z":
          return a({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return a({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return a({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return e.zone.offsetName(e.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return e.zone.offsetName(e.ts, { format: "long", locale: this.loc.locale });
        // zone
        case "z":
          return e.zoneName;
        // meridiems
        case "a":
          return o();
        // dates
        case "d":
          return s ? i({ day: "numeric" }, "day") : this.num(e.day);
        case "dd":
          return s ? i({ day: "2-digit" }, "day") : this.num(e.day, 2);
        // weekdays - standalone
        case "c":
          return this.num(e.weekday);
        case "ccc":
          return l("short", !0);
        case "cccc":
          return l("long", !0);
        case "ccccc":
          return l("narrow", !0);
        // weekdays - format
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return l("short", !1);
        case "EEEE":
          return l("long", !1);
        case "EEEEE":
          return l("narrow", !1);
        // months - standalone
        case "L":
          return s ? i({ month: "numeric", day: "numeric" }, "month") : this.num(e.month);
        case "LL":
          return s ? i({ month: "2-digit", day: "numeric" }, "month") : this.num(e.month, 2);
        case "LLL":
          return u("short", !0);
        case "LLLL":
          return u("long", !0);
        case "LLLLL":
          return u("narrow", !0);
        // months - format
        case "M":
          return s ? i({ month: "numeric" }, "month") : this.num(e.month);
        case "MM":
          return s ? i({ month: "2-digit" }, "month") : this.num(e.month, 2);
        case "MMM":
          return u("short", !1);
        case "MMMM":
          return u("long", !1);
        case "MMMMM":
          return u("narrow", !1);
        // years
        case "y":
          return s ? i({ year: "numeric" }, "year") : this.num(e.year);
        case "yy":
          return s ? i({ year: "2-digit" }, "year") : this.num(e.year.toString().slice(-2), 2);
        case "yyyy":
          return s ? i({ year: "numeric" }, "year") : this.num(e.year, 4);
        case "yyyyyy":
          return s ? i({ year: "numeric" }, "year") : this.num(e.year, 6);
        // eras
        case "G":
          return f("short");
        case "GG":
          return f("long");
        case "GGGGG":
          return f("narrow");
        case "kk":
          return this.num(e.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(e.weekYear, 4);
        case "W":
          return this.num(e.weekNumber);
        case "WW":
          return this.num(e.weekNumber, 2);
        case "n":
          return this.num(e.localWeekNumber);
        case "nn":
          return this.num(e.localWeekNumber, 2);
        case "ii":
          return this.num(e.localWeekYear.toString().slice(-2), 2);
        case "iiii":
          return this.num(e.localWeekYear, 4);
        case "o":
          return this.num(e.ordinal);
        case "ooo":
          return this.num(e.ordinal, 3);
        case "q":
          return this.num(e.quarter);
        case "qq":
          return this.num(e.quarter, 2);
        case "X":
          return this.num(Math.floor(e.ts / 1e3));
        case "x":
          return this.num(e.ts);
        default:
          return c(d);
      }
    };
    return sn($.parseFormat(t), y);
  }
  formatDurationFromString(e, t) {
    const r = (u) => {
      switch (u[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, s = (u) => (l) => {
      const c = r(l);
      return c ? this.num(u.get(c), l.length) : l;
    }, i = $.parseFormat(t), a = i.reduce(
      (u, { literal: l, val: c }) => l ? u : u.concat(c),
      []
    ), o = e.shiftTo(...a.map(r).filter((u) => u));
    return sn(i, s(o));
  }
}
const yr = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function H0(...n) {
  const e = n.reduce((t, r) => t + r.source, "");
  return RegExp(`^${e}$`);
}
function Y0(...n) {
  return (e) => n.reduce(
    ([t, r, s], i) => {
      const [a, o, u] = i(e, s);
      return [{ ...t, ...a }, o || r, u];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function G0(n, ...e) {
  if (n == null)
    return [null, null];
  for (const [t, r] of e) {
    const s = t.exec(n);
    if (s)
      return r(s);
  }
  return [null, null];
}
function gr(...n) {
  return (e, t) => {
    const r = {};
    let s;
    for (s = 0; s < n.length; s++)
      r[n[s]] = S0(e[t + s]);
    return [r, null, t + s];
  };
}
const wr = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, Zs = `(?:${wr.source}?(?:\\[(${yr.source})\\])?)?`, Ct = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, Sr = RegExp(`${Ct.source}${Zs}`), Vt = RegExp(`(?:T${Sr.source})?`), Rs = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Ps = /(\d{4})-?W(\d\d)(?:-?(\d))?/, qs = /(\d{4})-?(\d{3})/, Hs = gr("weekYear", "weekNumber", "weekDay"), Ys = gr("year", "ordinal"), Gs = /(\d{4})-(\d\d)-(\d\d)/, pr = RegExp(
  `${Ct.source} ?(?:${wr.source}|(${yr.source}))?`
), Js = RegExp(`(?: ${pr.source})?`);
function R0(n, e, t) {
  const r = n[e];
  return S(r) ? t : S0(r);
}
function js(n, e) {
  return [{
    year: R0(n, e),
    month: R0(n, e + 1, 1),
    day: R0(n, e + 2, 1)
  }, null, e + 3];
}
function J0(n, e) {
  return [{
    hours: R0(n, e, 0),
    minutes: R0(n, e + 1, 0),
    seconds: R0(n, e + 2, 0),
    milliseconds: bt(n[e + 3])
  }, null, e + 4];
}
function oe(n, e) {
  const t = !n[e] && !n[e + 1], r = Pe(n[e + 1], n[e + 2]), s = t ? null : Z.instance(r);
  return [{}, s, e + 3];
}
function ue(n, e) {
  const t = n[e] ? c0.create(n[e]) : null;
  return [{}, t, e + 1];
}
const Bs = RegExp(`^T?${Ct.source}$`), Qs = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function Xs(n) {
  const [e, t, r, s, i, a, o, u, l] = n, c = e[0] === "-", f = u && u[0] === "-", y = (d, w = !1) => d !== void 0 && (w || d && c) ? -d : d;
  return [
    {
      years: y(O0(t)),
      months: y(O0(r)),
      weeks: y(O0(s)),
      days: y(O0(i)),
      hours: y(O0(a)),
      minutes: y(O0(o)),
      seconds: y(O0(u), u === "-0"),
      milliseconds: y(bt(l), f)
    }
  ];
}
const Ks = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function At(n, e, t, r, s, i, a) {
  const o = {
    year: e.length === 2 ? dt(S0(e)) : S0(e),
    month: ur.indexOf(t) + 1,
    day: S0(r),
    hour: S0(s),
    minute: S0(i)
  };
  return a && (o.second = S0(a)), n && (o.weekday = n.length > 3 ? cr.indexOf(n) + 1 : fr.indexOf(n) + 1), o;
}
const ei = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function ti(n) {
  const [
    ,
    e,
    t,
    r,
    s,
    i,
    a,
    o,
    u,
    l,
    c,
    f
  ] = n, y = At(e, s, r, t, i, a, o);
  let d;
  return u ? d = Ks[u] : l ? d = 0 : d = Pe(c, f), [y, new Z(d)];
}
function ni(n) {
  return n.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const ri = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, si = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, ii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function an(n) {
  const [, e, t, r, s, i, a, o] = n;
  return [At(e, s, r, t, i, a, o), Z.utcInstance];
}
function ai(n) {
  const [, e, t, r, s, i, a, o] = n;
  return [At(e, o, t, r, s, i, a), Z.utcInstance];
}
const oi = H0(Rs, Vt), ui = H0(Ps, Vt), li = H0(qs, Vt), ci = H0(Sr), Tr = Y0(
  js,
  J0,
  oe,
  ue
), fi = Y0(
  Hs,
  J0,
  oe,
  ue
), hi = Y0(
  Ys,
  J0,
  oe,
  ue
), di = Y0(
  J0,
  oe,
  ue
);
function mi(n) {
  return G0(
    n,
    [oi, Tr],
    [ui, fi],
    [li, hi],
    [ci, di]
  );
}
function yi(n) {
  return G0(ni(n), [ei, ti]);
}
function gi(n) {
  return G0(
    n,
    [ri, an],
    [si, an],
    [ii, ai]
  );
}
function wi(n) {
  return G0(n, [Qs, Xs]);
}
const Si = Y0(J0);
function pi(n) {
  return G0(n, [Bs, Si]);
}
const Ti = H0(Gs, Js), ki = H0(pr), vi = Y0(
  J0,
  oe,
  ue
);
function Mi(n) {
  return G0(
    n,
    [Ti, Tr],
    [ki, vi]
  );
}
const on = "Invalid Duration", kr = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, Oi = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...kr
}, J = 146097 / 400, C0 = 146097 / 4800, Di = {
  years: {
    quarters: 4,
    months: 12,
    weeks: J / 7,
    days: J,
    hours: J * 24,
    minutes: J * 24 * 60,
    seconds: J * 24 * 60 * 60,
    milliseconds: J * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: J / 28,
    days: J / 4,
    hours: J * 24 / 4,
    minutes: J * 24 * 60 / 4,
    seconds: J * 24 * 60 * 60 / 4,
    milliseconds: J * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: C0 / 7,
    days: C0,
    hours: C0 * 24,
    minutes: C0 * 24 * 60,
    seconds: C0 * 24 * 60 * 60,
    milliseconds: C0 * 24 * 60 * 60 * 1e3
  },
  ...kr
}, E0 = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], Ei = E0.slice(0).reverse();
function g0(n, e, t = !1) {
  const r = {
    values: t ? e.values : { ...n.values, ...e.values || {} },
    loc: n.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || n.conversionAccuracy,
    matrix: e.matrix || n.matrix
  };
  return new p(r);
}
function vr(n, e) {
  let t = e.milliseconds ?? 0;
  for (const r of Ei.slice(1))
    e[r] && (t += e[r] * n[r].milliseconds);
  return t;
}
function un(n, e) {
  const t = vr(n, e) < 0 ? -1 : 1;
  E0.reduceRight((r, s) => {
    if (S(e[s]))
      return r;
    if (r) {
      const i = e[r] * t, a = n[s][r], o = Math.floor(i / a);
      e[s] += o * t, e[r] -= o * a * t;
    }
    return s;
  }, null), E0.reduce((r, s) => {
    if (S(e[s]))
      return r;
    if (r) {
      const i = e[r] % 1;
      e[r] -= i, e[s] += i * n[r][s];
    }
    return s;
  }, null);
}
function Ni(n) {
  const e = {};
  for (const [t, r] of Object.entries(n))
    r !== 0 && (e[t] = r);
  return e;
}
class p {
  /**
   * @private
   */
  constructor(e) {
    const t = e.conversionAccuracy === "longterm" || !1;
    let r = t ? Di : Oi;
    e.matrix && (r = e.matrix), this.values = e.values, this.loc = e.loc || M.create(), this.conversionAccuracy = t ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = r, this.isLuxonDuration = !0;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(e, t) {
    return p.fromObject({ milliseconds: e }, t);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(e, t = {}) {
    if (e == null || typeof e != "object")
      throw new _(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new p({
      values: We(e, p.normalizeUnit),
      loc: M.fromObject(t),
      conversionAccuracy: t.conversionAccuracy,
      matrix: t.matrix
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(e) {
    if (T0(e))
      return p.fromMillis(e);
    if (p.isDuration(e))
      return e;
    if (typeof e == "object")
      return p.fromObject(e);
    throw new _(
      `Unknown duration argument ${e} of type ${typeof e}`
    );
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(e, t) {
    const [r] = wi(e);
    return r ? p.fromObject(r, t) : p.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(e, t) {
    const [r] = pi(e);
    return r ? p.fromObject(r, t) : p.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new _("need to specify a reason the Duration is invalid");
    const r = e instanceof K ? e : new K(e, t);
    if (I.throwOnInvalid)
      throw new Qr(r);
    return new p({ invalid: r });
  }
  /**
   * @private
   */
  static normalizeUnit(e) {
    const t = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[e && e.toLowerCase()];
    if (!t) throw new Cn(e);
    return t;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(e) {
    return e && e.isLuxonDuration || !1;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(e, t = {}) {
    const r = {
      ...t,
      floor: t.round !== !1 && t.floor !== !1
    };
    return this.isValid ? $.create(this.loc, r).formatDurationFromString(this, e) : on;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
   * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
   * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(e = {}) {
    if (!this.isValid) return on;
    const t = E0.map((r) => {
      const s = this.values[r];
      return S(s) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: r.slice(0, -1) }).format(s);
    }).filter((r) => r);
    return this.loc.listFormatter({ type: "conjunction", style: e.listStyle || "narrow", ...e }).format(t);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid) return null;
    let e = "P";
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Ft(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(e = {}) {
    if (!this.isValid) return null;
    const t = this.toMillis();
    return t < 0 || t >= 864e5 ? null : (e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e,
      includeOffset: !1
    }, g.fromMillis(t, { zone: "UTC" }).toISOTime(e));
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns a string representation of this Duration appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? vr(this.matrix, this.values) : NaN;
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(e) {
    if (!this.isValid) return this;
    const t = p.fromDurationLike(e), r = {};
    for (const s of E0)
      (q0(t.values, s) || q0(this.values, s)) && (r[s] = t.get(s) + this.get(s));
    return g0(this, { values: r }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid) return this;
    const t = p.fromDurationLike(e);
    return this.plus(t.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(e) {
    if (!this.isValid) return this;
    const t = {};
    for (const r of Object.keys(this.values))
      t[r] = or(e(this.values[r], r));
    return g0(this, { values: t }, !0);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(e) {
    return this[p.normalizeUnit(e)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(e) {
    if (!this.isValid) return this;
    const t = { ...this.values, ...We(e, p.normalizeUnit) };
    return g0(this, { values: t });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: t, conversionAccuracy: r, matrix: s } = {}) {
    const a = { loc: this.loc.clone({ locale: e, numberingSystem: t }), matrix: s, conversionAccuracy: r };
    return g0(this, a);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see third example)
   * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid) return this;
    const e = this.toObject();
    return un(this.matrix, e), g0(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const e = Ni(this.normalize().shiftToAll().toObject());
    return g0(this, { values: e }, !0);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...e) {
    if (!this.isValid) return this;
    if (e.length === 0)
      return this;
    e = e.map((a) => p.normalizeUnit(a));
    const t = {}, r = {}, s = this.toObject();
    let i;
    for (const a of E0)
      if (e.indexOf(a) >= 0) {
        i = a;
        let o = 0;
        for (const l in r)
          o += this.matrix[l][a] * r[l], r[l] = 0;
        T0(s[a]) && (o += s[a]);
        const u = Math.trunc(o);
        t[a] = u, r[a] = (o * 1e3 - u * 1e3) / 1e3;
      } else T0(s[a]) && (r[a] = s[a]);
    for (const a in r)
      r[a] !== 0 && (t[i] += a === i ? r[a] : r[a] / this.matrix[i][a]);
    return un(this.matrix, t), g0(this, { values: t }, !0);
  }
  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    return this.isValid ? this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ) : this;
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid) return this;
    const e = {};
    for (const t of Object.keys(this.values))
      e[t] = this.values[t] === 0 ? 0 : -this.values[t];
    return g0(this, { values: e }, !0);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(e) {
    if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
      return !1;
    function t(r, s) {
      return r === void 0 || r === 0 ? s === void 0 || s === 0 : r === s;
    }
    for (const r of E0)
      if (!t(this.values[r], e.values[r]))
        return !1;
    return !0;
  }
}
const V0 = "Invalid Interval";
function Ii(n, e) {
  return !n || !n.isValid ? b.invalid("missing or invalid start") : !e || !e.isValid ? b.invalid("missing or invalid end") : e < n ? b.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${n.toISO()} and end=${e.toISO()}`
  ) : null;
}
class b {
  /**
   * @private
   */
  constructor(e) {
    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new _("need to specify a reason the Interval is invalid");
    const r = e instanceof K ? e : new K(e, t);
    if (I.throwOnInvalid)
      throw new Br(r);
    return new b({ invalid: r });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, t) {
    const r = j0(e), s = j0(t), i = Ii(r, s);
    return i ?? new b({
      start: r,
      end: s
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(e, t) {
    const r = p.fromDurationLike(t), s = j0(e);
    return b.fromDateTimes(s, s.plus(r));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, t) {
    const r = p.fromDurationLike(t), s = j0(e);
    return b.fromDateTimes(s.minus(r), s);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(e, t) {
    const [r, s] = (e || "").split("/", 2);
    if (r && s) {
      let i, a;
      try {
        i = g.fromISO(r, t), a = i.isValid;
      } catch {
        a = !1;
      }
      let o, u;
      try {
        o = g.fromISO(s, t), u = o.isValid;
      } catch {
        u = !1;
      }
      if (a && u)
        return b.fromDateTimes(i, o);
      if (a) {
        const l = p.fromISO(s, t);
        if (l.isValid)
          return b.after(i, l);
      } else if (u) {
        const l = p.fromISO(r, t);
        if (l.isValid)
          return b.before(o, l);
      }
    }
    return b.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(e) {
    return e && e.isLuxonInterval || !1;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(e = "milliseconds") {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
   * @return {number}
   */
  count(e = "milliseconds", t) {
    if (!this.isValid) return NaN;
    const r = this.start.startOf(e, t);
    let s;
    return t != null && t.useLocaleWeeks ? s = this.end.reconfigure({ locale: r.locale }) : s = this.end, s = s.startOf(e, t), Math.floor(s.diff(r, e).get(e)) + (s.valueOf() !== this.end.valueOf());
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(e) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(e) {
    return this.isValid ? this.s > e : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(e) {
    return this.isValid ? this.e <= e : !1;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(e) {
    return this.isValid ? this.s <= e && this.e > e : !1;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start: e, end: t } = {}) {
    return this.isValid ? b.fromDateTimes(e || this.s, t || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid) return [];
    const t = e.map(j0).filter((a) => this.contains(a)).sort((a, o) => a.toMillis() - o.toMillis()), r = [];
    let { s } = this, i = 0;
    for (; s < this.e; ) {
      const a = t[i] || this.e, o = +a > +this.e ? this.e : a;
      r.push(b.fromDateTimes(s, o)), s = o, i += 1;
    }
    return r;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(e) {
    const t = p.fromDurationLike(e);
    if (!this.isValid || !t.isValid || t.as("milliseconds") === 0)
      return [];
    let { s: r } = this, s = 1, i;
    const a = [];
    for (; r < this.e; ) {
      const o = this.start.plus(t.mapUnits((u) => u * s));
      i = +o > +this.e ? this.e : o, a.push(b.fromDateTimes(r, i)), r = i, s += 1;
    }
    return a;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(e) {
    return this.isValid ? +this.e == +e.s : !1;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(e) {
    return this.isValid ? +e.e == +this.s : !1;
  }
  /**
   * Returns true if this Interval fully contains the specified Interval, specifically if the intersect (of this Interval and the other Interval) is equal to the other Interval; false otherwise.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(e) {
    return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(e) {
    return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(e) {
    if (!this.isValid) return this;
    const t = this.s > e.s ? this.s : e.s, r = this.e < e.e ? this.e : e.e;
    return t >= r ? null : b.fromDateTimes(t, r);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(e) {
    if (!this.isValid) return this;
    const t = this.s < e.s ? this.s : e.s, r = this.e > e.e ? this.e : e.e;
    return b.fromDateTimes(t, r);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(e) {
    const [t, r] = e.sort((s, i) => s.s - i.s).reduce(
      ([s, i], a) => i ? i.overlaps(a) || i.abutsStart(a) ? [s, i.union(a)] : [s.concat([i]), a] : [s, a],
      [[], null]
    );
    return r && t.push(r), t;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(e) {
    let t = null, r = 0;
    const s = [], i = e.map((u) => [
      { time: u.s, type: "s" },
      { time: u.e, type: "e" }
    ]), a = Array.prototype.concat(...i), o = a.sort((u, l) => u.time - l.time);
    for (const u of o)
      r += u.type === "s" ? 1 : -1, r === 1 ? t = u.time : (t && +t != +u.time && s.push(b.fromDateTimes(t, u.time)), t = null);
    return b.merge(s);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return b.xor([this].concat(e)).map((t) => this.intersection(t)).filter((t) => t && !t.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : V0;
  }
  /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(e = Ce, t = {}) {
    return this.isValid ? $.create(this.s.loc.clone(t), e).formatInterval(this) : V0;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : V0;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : V0;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : V0;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(e, { separator: t = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}` : V0;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(e, t) {
    return this.isValid ? this.e.diff(this.s, e, t) : p.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return b.fromDateTimes(e(this.s), e(this.e));
  }
}
class ke {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = I.defaultZone) {
    const t = g.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return c0.isValidZone(e);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(e) {
    return p0(e, I.defaultZone);
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale: e = null, locObj: t = null } = {}) {
    return (t || M.create(e)).getStartOfWeek();
  }
  /**
   * Get the minimum number of days necessary in a week before it is considered part of the next year according
   * to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number}
   */
  static getMinimumDaysInFirstWeek({ locale: e = null, locObj: t = null } = {}) {
    return (t || M.create(e)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: e = null, locObj: t = null } = {}) {
    return (t || M.create(e)).getWeekendDays().slice();
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(e = "long", { locale: t = null, numberingSystem: r = null, locObj: s = null, outputCalendar: i = "gregory" } = {}) {
    return (s || M.create(t, r, i)).months(e);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(e = "long", { locale: t = null, numberingSystem: r = null, locObj: s = null, outputCalendar: i = "gregory" } = {}) {
    return (s || M.create(t, r, i)).months(e, !0);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(e = "long", { locale: t = null, numberingSystem: r = null, locObj: s = null } = {}) {
    return (s || M.create(t, r, null)).weekdays(e);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(e = "long", { locale: t = null, numberingSystem: r = null, locObj: s = null } = {}) {
    return (s || M.create(t, r, null)).weekdays(e, !0);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale: e = null } = {}) {
    return M.create(e).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(e = "short", { locale: t = null } = {}) {
    return M.create(t, null, "gregory").eras(e);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
   * @example Info.features() //=> { relative: false, localeWeek: true }
   * @return {Object}
   */
  static features() {
    return { relative: sr(), localeWeek: ir() };
  }
}
function ln(n, e) {
  const t = (s) => s.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), r = t(e) - t(n);
  return Math.floor(p.fromMillis(r).as("days"));
}
function xi(n, e, t) {
  const r = [
    ["years", (u, l) => l.year - u.year],
    ["quarters", (u, l) => l.quarter - u.quarter + (l.year - u.year) * 4],
    ["months", (u, l) => l.month - u.month + (l.year - u.year) * 12],
    [
      "weeks",
      (u, l) => {
        const c = ln(u, l);
        return (c - c % 7) / 7;
      }
    ],
    ["days", ln]
  ], s = {}, i = n;
  let a, o;
  for (const [u, l] of r)
    t.indexOf(u) >= 0 && (a = u, s[u] = l(n, e), o = i.plus(s), o > e ? (s[u]--, n = i.plus(s), n > e && (o = n, s[u]--, n = i.plus(s))) : n = o);
  return [n, s, o, a];
}
function bi(n, e, t, r) {
  let [s, i, a, o] = xi(n, e, t);
  const u = e - s, l = t.filter(
    (f) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(f) >= 0
  );
  l.length === 0 && (a < e && (a = s.plus({ [o]: 1 })), a !== s && (i[o] = (i[o] || 0) + u / (a - s)));
  const c = p.fromObject(i, r);
  return l.length > 0 ? p.fromMillis(u, r).shiftTo(...l).plus(c) : c;
}
const Fi = "missing Intl.DateTimeFormat.formatToParts support";
function v(n, e = (t) => t) {
  return { regex: n, deser: ([t]) => e(Ts(t)) };
}
const Ci = " ", Mr = `[ ${Ci}]`, Or = new RegExp(Mr, "g");
function Vi(n) {
  return n.replace(/\./g, "\\.?").replace(Or, Mr);
}
function cn(n) {
  return n.replace(/\./g, "").replace(Or, " ").toLowerCase();
}
function X(n, e) {
  return n === null ? null : {
    regex: RegExp(n.map(Vi).join("|")),
    deser: ([t]) => n.findIndex((r) => cn(t) === cn(r)) + e
  };
}
function fn(n, e) {
  return { regex: n, deser: ([, t, r]) => Pe(t, r), groups: e };
}
function ve(n) {
  return { regex: n, deser: ([e]) => e };
}
function Ai(n) {
  return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function Wi(n, e) {
  const t = Q(e), r = Q(e, "{2}"), s = Q(e, "{3}"), i = Q(e, "{4}"), a = Q(e, "{6}"), o = Q(e, "{1,2}"), u = Q(e, "{1,3}"), l = Q(e, "{1,6}"), c = Q(e, "{1,9}"), f = Q(e, "{2,4}"), y = Q(e, "{4,6}"), d = (E) => ({ regex: RegExp(Ai(E.val)), deser: ([x]) => x, literal: !0 }), T = ((E) => {
    if (n.literal)
      return d(E);
    switch (E.val) {
      // era
      case "G":
        return X(e.eras("short"), 0);
      case "GG":
        return X(e.eras("long"), 0);
      // years
      case "y":
        return v(l);
      case "yy":
        return v(f, dt);
      case "yyyy":
        return v(i);
      case "yyyyy":
        return v(y);
      case "yyyyyy":
        return v(a);
      // months
      case "M":
        return v(o);
      case "MM":
        return v(r);
      case "MMM":
        return X(e.months("short", !0), 1);
      case "MMMM":
        return X(e.months("long", !0), 1);
      case "L":
        return v(o);
      case "LL":
        return v(r);
      case "LLL":
        return X(e.months("short", !1), 1);
      case "LLLL":
        return X(e.months("long", !1), 1);
      // dates
      case "d":
        return v(o);
      case "dd":
        return v(r);
      // ordinals
      case "o":
        return v(u);
      case "ooo":
        return v(s);
      // time
      case "HH":
        return v(r);
      case "H":
        return v(o);
      case "hh":
        return v(r);
      case "h":
        return v(o);
      case "mm":
        return v(r);
      case "m":
        return v(o);
      case "q":
        return v(o);
      case "qq":
        return v(r);
      case "s":
        return v(o);
      case "ss":
        return v(r);
      case "S":
        return v(u);
      case "SSS":
        return v(s);
      case "u":
        return ve(c);
      case "uu":
        return ve(o);
      case "uuu":
        return v(t);
      // meridiem
      case "a":
        return X(e.meridiems(), 0);
      // weekYear (k)
      case "kkkk":
        return v(i);
      case "kk":
        return v(f, dt);
      // weekNumber (W)
      case "W":
        return v(o);
      case "WW":
        return v(r);
      // weekdays
      case "E":
      case "c":
        return v(t);
      case "EEE":
        return X(e.weekdays("short", !1), 1);
      case "EEEE":
        return X(e.weekdays("long", !1), 1);
      case "ccc":
        return X(e.weekdays("short", !0), 1);
      case "cccc":
        return X(e.weekdays("long", !0), 1);
      // offset/zone
      case "Z":
      case "ZZ":
        return fn(new RegExp(`([+-]${o.source})(?::(${r.source}))?`), 2);
      case "ZZZ":
        return fn(new RegExp(`([+-]${o.source})(${r.source})?`), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are
      case "z":
        return ve(/[a-z_+-/]{1,256}?/i);
      // this special-case "token" represents a place where a macro-token expanded into a white-space literal
      // in this case we accept any non-newline white-space
      case " ":
        return ve(/[^\S\n\r]/);
      default:
        return d(E);
    }
  })(n) || {
    invalidReason: Fi
  };
  return T.token = n, T;
}
const zi = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour12: {
    numeric: "h",
    "2-digit": "hh"
  },
  hour24: {
    numeric: "H",
    "2-digit": "HH"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function Li(n, e, t) {
  const { type: r, value: s } = n;
  if (r === "literal") {
    const u = /^\s+$/.test(s);
    return {
      literal: !u,
      val: u ? " " : s
    };
  }
  const i = e[r];
  let a = r;
  r === "hour" && (e.hour12 != null ? a = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? a = "hour12" : a = "hour24" : a = t.hour12 ? "hour12" : "hour24");
  let o = zi[a];
  if (typeof o == "object" && (o = o[i]), o)
    return {
      literal: !1,
      val: o
    };
}
function _i(n) {
  return [`^${n.map((t) => t.regex).reduce((t, r) => `${t}(${r.source})`, "")}$`, n];
}
function Ui(n, e, t) {
  const r = n.match(e);
  if (r) {
    const s = {};
    let i = 1;
    for (const a in t)
      if (q0(t, a)) {
        const o = t[a], u = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (s[o.token.val[0]] = o.deser(r.slice(i, i + u))), i += u;
      }
    return [r, s];
  } else
    return [r, {}];
}
function $i(n) {
  const e = (i) => {
    switch (i) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let t = null, r;
  return S(n.z) || (t = c0.create(n.z)), S(n.Z) || (t || (t = new Z(n.Z)), r = n.Z), S(n.q) || (n.M = (n.q - 1) * 3 + 1), S(n.h) || (n.h < 12 && n.a === 1 ? n.h += 12 : n.h === 12 && n.a === 0 && (n.h = 0)), n.G === 0 && n.y && (n.y = -n.y), S(n.u) || (n.S = bt(n.u)), [Object.keys(n).reduce((i, a) => {
    const o = e(a);
    return o && (i[o] = n[a]), i;
  }, {}), t, r];
}
let tt = null;
function Zi() {
  return tt || (tt = g.fromMillis(1555555555555)), tt;
}
function Ri(n, e) {
  if (n.literal)
    return n;
  const t = $.macroTokenToFormatOpts(n.val), r = Ir(t, e);
  return r == null || r.includes(void 0) ? n : r;
}
function Dr(n, e) {
  return Array.prototype.concat(...n.map((t) => Ri(t, e)));
}
class Er {
  constructor(e, t) {
    if (this.locale = e, this.format = t, this.tokens = Dr($.parseFormat(t), e), this.units = this.tokens.map((r) => Wi(r, e)), this.disqualifyingUnit = this.units.find((r) => r.invalidReason), !this.disqualifyingUnit) {
      const [r, s] = _i(this.units);
      this.regex = RegExp(r, "i"), this.handlers = s;
    }
  }
  explainFromTokens(e) {
    if (this.isValid) {
      const [t, r] = Ui(e, this.regex, this.handlers), [s, i, a] = r ? $i(r) : [null, null, void 0];
      if (q0(r, "a") && q0(r, "H"))
        throw new _0(
          "Can't include meridiem when specifying 24-hour format"
        );
      return {
        input: e,
        tokens: this.tokens,
        regex: this.regex,
        rawMatches: t,
        matches: r,
        result: s,
        zone: i,
        specificOffset: a
      };
    } else
      return { input: e, tokens: this.tokens, invalidReason: this.invalidReason };
  }
  get isValid() {
    return !this.disqualifyingUnit;
  }
  get invalidReason() {
    return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
  }
}
function Nr(n, e, t) {
  return new Er(n, t).explainFromTokens(e);
}
function Pi(n, e, t) {
  const { result: r, zone: s, specificOffset: i, invalidReason: a } = Nr(n, e, t);
  return [r, s, i, a];
}
function Ir(n, e) {
  if (!n)
    return null;
  const r = $.create(e, n).dtFormatter(Zi()), s = r.formatToParts(), i = r.resolvedOptions();
  return s.map((a) => Li(a, n, i));
}
const nt = "Invalid DateTime", hn = 864e13;
function K0(n) {
  return new K("unsupported zone", `the zone "${n.name}" is not supported`);
}
function rt(n) {
  return n.weekData === null && (n.weekData = Ve(n.c)), n.weekData;
}
function st(n) {
  return n.localWeekData === null && (n.localWeekData = Ve(
    n.c,
    n.loc.getMinDaysInFirstWeek(),
    n.loc.getStartOfWeek()
  )), n.localWeekData;
}
function D0(n, e) {
  const t = {
    ts: n.ts,
    zone: n.zone,
    c: n.c,
    o: n.o,
    loc: n.loc,
    invalid: n.invalid
  };
  return new g({ ...t, ...e, old: t });
}
function xr(n, e, t) {
  let r = n - e * 60 * 1e3;
  const s = t.offset(r);
  if (e === s)
    return [r, e];
  r -= (s - e) * 60 * 1e3;
  const i = t.offset(r);
  return s === i ? [r, s] : [n - Math.min(s, i) * 60 * 1e3, Math.max(s, i)];
}
function Me(n, e) {
  n += e * 60 * 1e3;
  const t = new Date(n);
  return {
    year: t.getUTCFullYear(),
    month: t.getUTCMonth() + 1,
    day: t.getUTCDate(),
    hour: t.getUTCHours(),
    minute: t.getUTCMinutes(),
    second: t.getUTCSeconds(),
    millisecond: t.getUTCMilliseconds()
  };
}
function xe(n, e, t) {
  return xr(Re(n), e, t);
}
function dn(n, e) {
  const t = n.o, r = n.c.year + Math.trunc(e.years), s = n.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, i = {
    ...n.c,
    year: r,
    month: s,
    day: Math.min(n.c.day, Ae(r, s)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, a = p.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), o = Re(i);
  let [u, l] = xr(o, t, n.zone);
  return a !== 0 && (u += a, l = n.zone.offset(u)), { ts: u, o: l };
}
function A0(n, e, t, r, s, i) {
  const { setZone: a, zone: o } = t;
  if (n && Object.keys(n).length !== 0 || e) {
    const u = e || o, l = g.fromObject(n, {
      ...t,
      zone: u,
      specificOffset: i
    });
    return a ? l : l.setZone(o);
  } else
    return g.invalid(
      new K("unparsable", `the input "${s}" can't be parsed as ${r}`)
    );
}
function Oe(n, e, t = !0) {
  return n.isValid ? $.create(M.create("en-US"), {
    allowZ: t,
    forceSimple: !0
  }).formatDateTimeFromString(n, e) : null;
}
function it(n, e) {
  const t = n.c.year > 9999 || n.c.year < 0;
  let r = "";
  return t && n.c.year >= 0 && (r += "+"), r += A(n.c.year, t ? 6 : 4), e ? (r += "-", r += A(n.c.month), r += "-", r += A(n.c.day)) : (r += A(n.c.month), r += A(n.c.day)), r;
}
function mn(n, e, t, r, s, i) {
  let a = A(n.c.hour);
  return e ? (a += ":", a += A(n.c.minute), (n.c.millisecond !== 0 || n.c.second !== 0 || !t) && (a += ":")) : a += A(n.c.minute), (n.c.millisecond !== 0 || n.c.second !== 0 || !t) && (a += A(n.c.second), (n.c.millisecond !== 0 || !r) && (a += ".", a += A(n.c.millisecond, 3))), s && (n.isOffsetFixed && n.offset === 0 && !i ? a += "Z" : n.o < 0 ? (a += "-", a += A(Math.trunc(-n.o / 60)), a += ":", a += A(Math.trunc(-n.o % 60))) : (a += "+", a += A(Math.trunc(n.o / 60)), a += ":", a += A(Math.trunc(n.o % 60)))), i && (a += "[" + n.zone.ianaName + "]"), a;
}
const br = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, qi = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Hi = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Fr = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Yi = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], Gi = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Ji(n) {
  const e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[n.toLowerCase()];
  if (!e) throw new Cn(n);
  return e;
}
function yn(n) {
  switch (n.toLowerCase()) {
    case "localweekday":
    case "localweekdays":
      return "localWeekday";
    case "localweeknumber":
    case "localweeknumbers":
      return "localWeekNumber";
    case "localweekyear":
    case "localweekyears":
      return "localWeekYear";
    default:
      return Ji(n);
  }
}
function ji(n) {
  return Fe[n] || (be === void 0 && (be = I.now()), Fe[n] = n.offset(be)), Fe[n];
}
function gn(n, e) {
  const t = p0(e.zone, I.defaultZone);
  if (!t.isValid)
    return g.invalid(K0(t));
  const r = M.fromObject(e);
  let s, i;
  if (S(n.year))
    s = I.now();
  else {
    for (const u of Fr)
      S(n[u]) && (n[u] = br[u]);
    const a = nr(n) || rr(n);
    if (a)
      return g.invalid(a);
    const o = ji(t);
    [s, i] = xe(n, o, t);
  }
  return new g({ ts: s, zone: t, loc: r, o: i });
}
function wn(n, e, t) {
  const r = S(t.round) ? !0 : t.round, s = (a, o) => (a = Ft(a, r || t.calendary ? 0 : 2, !0), e.loc.clone(t).relFormatter(t).format(a, o)), i = (a) => t.calendary ? e.hasSame(n, a) ? 0 : e.startOf(a).diff(n.startOf(a), a).get(a) : e.diff(n, a).get(a);
  if (t.unit)
    return s(i(t.unit), t.unit);
  for (const a of t.units) {
    const o = i(a);
    if (Math.abs(o) >= 1)
      return s(o, a);
  }
  return s(n > e ? -0 : 0, t.units[t.units.length - 1]);
}
function Sn(n) {
  let e = {}, t;
  return n.length > 0 && typeof n[n.length - 1] == "object" ? (e = n[n.length - 1], t = Array.from(n).slice(0, n.length - 1)) : t = Array.from(n), [e, t];
}
let be, Fe = {};
class g {
  /**
   * @access private
   */
  constructor(e) {
    const t = e.zone || I.defaultZone;
    let r = e.invalid || (Number.isNaN(e.ts) ? new K("invalid input") : null) || (t.isValid ? null : K0(t));
    this.ts = S(e.ts) ? I.now() : e.ts;
    let s = null, i = null;
    if (!r)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(t))
        [s, i] = [e.old.c, e.old.o];
      else {
        const o = T0(e.o) && !e.old ? e.o : t.offset(this.ts);
        s = Me(this.ts, o), r = Number.isNaN(s.year) ? new K("invalid input") : null, s = r ? null : s, i = r ? null : o;
      }
    this._zone = t, this.loc = e.loc || M.create(), this.invalid = r, this.weekData = null, this.localWeekData = null, this.c = s, this.o = i, this.isLuxonDateTime = !0;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new g({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [e, t] = Sn(arguments), [r, s, i, a, o, u, l] = t;
    return gn({ year: r, month: s, day: i, hour: a, minute: o, second: u, millisecond: l }, e);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [options.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [e, t] = Sn(arguments), [r, s, i, a, o, u, l] = t;
    return e.zone = Z.utcInstance, gn({ year: r, month: s, day: i, hour: a, minute: o, second: u, millisecond: l }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, t = {}) {
    const r = Ds(e) ? e.valueOf() : NaN;
    if (Number.isNaN(r))
      return g.invalid("invalid input");
    const s = p0(t.zone, I.defaultZone);
    return s.isValid ? new g({
      ts: r,
      zone: s,
      loc: M.fromObject(t)
    }) : g.invalid(K0(s));
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(e, t = {}) {
    if (T0(e))
      return e < -hn || e > hn ? g.invalid("Timestamp out of range") : new g({
        ts: e,
        zone: p0(t.zone, I.defaultZone),
        loc: M.fromObject(t)
      });
    throw new _(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(e, t = {}) {
    if (T0(e))
      return new g({
        ts: e * 1e3,
        zone: p0(t.zone, I.defaultZone),
        loc: M.fromObject(t)
      });
    throw new _("fromSeconds requires a numerical input");
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.localWeekYear - a week year, according to the locale
   * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
   * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
   * @return {DateTime}
   */
  static fromObject(e, t = {}) {
    e = e || {};
    const r = p0(t.zone, I.defaultZone);
    if (!r.isValid)
      return g.invalid(K0(r));
    const s = M.fromObject(t), i = We(e, yn), { minDaysInFirstWeek: a, startOfWeek: o } = tn(i, s), u = I.now(), l = S(t.specificOffset) ? r.offset(u) : t.specificOffset, c = !S(i.ordinal), f = !S(i.year), y = !S(i.month) || !S(i.day), d = f || y, w = i.weekYear || i.weekNumber;
    if ((d || c) && w)
      throw new _0(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (y && c)
      throw new _0("Can't mix ordinal dates with month/day");
    const T = w || i.weekday && !d;
    let E, x, F = Me(u, l);
    T ? (E = Yi, x = qi, F = Ve(F, a, o)) : c ? (E = Gi, x = Hi, F = et(F)) : (E = Fr, x = br);
    let z = !1;
    for (const h0 of E) {
      const ce = i[h0];
      S(ce) ? z ? i[h0] = x[h0] : i[h0] = F[h0] : z = !0;
    }
    const P = T ? vs(i, a, o) : c ? Ms(i) : nr(i), H = P || rr(i);
    if (H)
      return g.invalid(H);
    const M0 = T ? Kt(i, a, o) : c ? en(i) : i, [f0, le] = xe(M0, l, r), a0 = new g({
      ts: f0,
      zone: r,
      o: le,
      loc: s
    });
    return i.weekday && d && e.weekday !== a0.weekday ? g.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${i.weekday} and a date of ${a0.toISO()}`
    ) : a0.isValid ? a0 : g.invalid(a0.invalid);
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [opts.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(e, t = {}) {
    const [r, s] = mi(e);
    return A0(r, s, t, "ISO 8601", e);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(e, t = {}) {
    const [r, s] = yi(e);
    return A0(r, s, t, "RFC 2822", e);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(e, t = {}) {
    const [r, s] = gi(e);
    return A0(r, s, t, "HTTP", t);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(e, t, r = {}) {
    if (S(e) || S(t))
      throw new _("fromFormat requires an input string and a format");
    const { locale: s = null, numberingSystem: i = null } = r, a = M.fromOpts({
      locale: s,
      numberingSystem: i,
      defaultToEN: !0
    }), [o, u, l, c] = Pi(a, e, t);
    return c ? g.invalid(c) : A0(o, u, r, `format ${t}`, e, l);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, t, r = {}) {
    return g.fromFormat(e, t, r);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(e, t = {}) {
    const [r, s] = Mi(e);
    return A0(r, s, t, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new _("need to specify a reason the DateTime is invalid");
    const r = e instanceof K ? e : new K(e, t);
    if (I.throwOnInvalid)
      throw new jr(r);
    return new g({ invalid: r });
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(e, t = {}) {
    const r = Ir(e, M.fromObject(t));
    return r ? r.map((s) => s ? s.val : null).join("") : null;
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(e, t = {}) {
    return Dr($.parseFormat(e), M.fromObject(t)).map((s) => s.val).join("");
  }
  static resetCache() {
    be = void 0, Fe = {};
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(e) {
    return this[e];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? rt(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? rt(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? rt(this).weekday : NaN;
  }
  /**
   * Returns true if this date is on a weekend according to the locale, false otherwise
   * @returns {boolean}
   */
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  /**
   * Get the day of the week according to the locale.
   * 1 is the first day of the week and 7 is the last day of the week.
   * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
   * @returns {number}
   */
  get localWeekday() {
    return this.isValid ? st(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? st(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? st(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? et(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? ke.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? ke.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? ke.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? ke.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  /**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   * @returns {DateTime[]}
   */
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed)
      return [this];
    const e = 864e5, t = 6e4, r = Re(this.c), s = this.zone.offset(r - e), i = this.zone.offset(r + e), a = this.zone.offset(r - s * t), o = this.zone.offset(r - i * t);
    if (a === o)
      return [this];
    const u = r - a * t, l = r - o * t, c = Me(u, a), f = Me(l, o);
    return c.hour === f.hour && c.minute === f.minute && c.second === f.second && c.millisecond === f.millisecond ? [D0(this, { ts: u }), D0(this, { ts: l })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return ae(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return Ae(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? Z0(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? se(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? se(
      this.localWeekYear,
      this.loc.getMinDaysInFirstWeek(),
      this.loc.getStartOfWeek()
    ) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(e = {}) {
    const { locale: t, numberingSystem: r, calendar: s } = $.create(
      this.loc.clone(e),
      e
    ).resolvedOptions(this);
    return { locale: t, numberingSystem: r, outputCalendar: s };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(e = 0, t = {}) {
    return this.setZone(Z.instance(e), t);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(I.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(e, { keepLocalTime: t = !1, keepCalendarTime: r = !1 } = {}) {
    if (e = p0(e, I.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let s = this.ts;
      if (t || r) {
        const i = e.offset(this.ts), a = this.toObject();
        [s] = xe(a, i, e);
      }
      return D0(this, { ts: s, zone: e });
    } else
      return g.invalid(K0(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: e, numberingSystem: t, outputCalendar: r } = {}) {
    const s = this.loc.clone({ locale: e, numberingSystem: t, outputCalendar: r });
    return D0(this, { loc: s });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   *
   * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
   * They cannot be mixed with ISO-week units like `weekday`.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(e) {
    if (!this.isValid) return this;
    const t = We(e, yn), { minDaysInFirstWeek: r, startOfWeek: s } = tn(t, this.loc), i = !S(t.weekYear) || !S(t.weekNumber) || !S(t.weekday), a = !S(t.ordinal), o = !S(t.year), u = !S(t.month) || !S(t.day), l = o || u, c = t.weekYear || t.weekNumber;
    if ((l || a) && c)
      throw new _0(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (u && a)
      throw new _0("Can't mix ordinal dates with month/day");
    let f;
    i ? f = Kt(
      { ...Ve(this.c, r, s), ...t },
      r,
      s
    ) : S(t.ordinal) ? (f = { ...this.toObject(), ...t }, S(t.day) && (f.day = Math.min(Ae(f.year, f.month), f.day))) : f = en({ ...et(this.c), ...t });
    const [y, d] = xe(f, this.o, this.zone);
    return D0(this, { ts: y, o: d });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(e) {
    if (!this.isValid) return this;
    const t = p.fromDurationLike(e);
    return D0(this, dn(this, t));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid) return this;
    const t = p.fromDurationLike(e).negate();
    return D0(this, dn(this, t));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(e, { useLocaleWeeks: t = !1 } = {}) {
    if (!this.isValid) return this;
    const r = {}, s = p.normalizeUnit(e);
    switch (s) {
      case "years":
        r.month = 1;
      // falls through
      case "quarters":
      case "months":
        r.day = 1;
      // falls through
      case "weeks":
      case "days":
        r.hour = 0;
      // falls through
      case "hours":
        r.minute = 0;
      // falls through
      case "minutes":
        r.second = 0;
      // falls through
      case "seconds":
        r.millisecond = 0;
        break;
    }
    if (s === "weeks")
      if (t) {
        const i = this.loc.getStartOfWeek(), { weekday: a } = this;
        a < i && (r.weekNumber = this.weekNumber - 1), r.weekday = i;
      } else
        r.weekday = 1;
    if (s === "quarters") {
      const i = Math.ceil(this.month / 3);
      r.month = (i - 1) * 3 + 1;
    }
    return this.set(r);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(e, t) {
    return this.isValid ? this.plus({ [e]: 1 }).startOf(e, t).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(e, t = {}) {
    return this.isValid ? $.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : nt;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(e = Ce, t = {}) {
    return this.isValid ? $.create(this.loc.clone(t), e).formatDateTime(this) : nt;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(e = {}) {
    return this.isValid ? $.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({
    format: e = "extended",
    suppressSeconds: t = !1,
    suppressMilliseconds: r = !1,
    includeOffset: s = !0,
    extendedZone: i = !1
  } = {}) {
    if (!this.isValid)
      return null;
    const a = e === "extended";
    let o = it(this, a);
    return o += "T", o += mn(this, a, t, r, s, i), o;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format: e = "extended" } = {}) {
    return this.isValid ? it(this, e === "extended") : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return Oe(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: t = !1,
    includeOffset: r = !0,
    includePrefix: s = !1,
    extendedZone: i = !1,
    format: a = "extended"
  } = {}) {
    return this.isValid ? (s ? "T" : "") + mn(
      this,
      a === "extended",
      t,
      e,
      r,
      i
    ) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return Oe(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return Oe(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    return this.isValid ? it(this, !0) : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset: e = !0, includeZone: t = !1, includeOffsetSpace: r = !0 } = {}) {
    let s = "HH:mm:ss.SSS";
    return (t || e) && (r && (s += " "), t ? s += "z" : e && (s += "ZZ")), Oe(this, s, !0);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : nt;
  }
  /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(e = {}) {
    if (!this.isValid) return {};
    const t = { ...this.c };
    return e.includeConfig && (t.outputCalendar = this.outputCalendar, t.numberingSystem = this.loc.numberingSystem, t.locale = this.loc.locale), t;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(e, t = "milliseconds", r = {}) {
    if (!this.isValid || !e.isValid)
      return p.invalid("created by diffing an invalid DateTime");
    const s = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }, i = Es(t).map(p.normalizeUnit), a = e.valueOf() > this.valueOf(), o = a ? this : e, u = a ? e : this, l = bi(o, u, i, s);
    return a ? l.negate() : l;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(e = "milliseconds", t = {}) {
    return this.diff(g.now(), e, t);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(e) {
    return this.isValid ? b.fromDateTimes(this, e) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(e, t, r) {
    if (!this.isValid) return !1;
    const s = e.valueOf(), i = this.setZone(e.zone, { keepLocalTime: !0 });
    return i.startOf(t, r) <= s && s <= i.endOf(t, r);
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(e = {}) {
    if (!this.isValid) return null;
    const t = e.base || g.fromObject({}, { zone: this.zone }), r = e.padding ? this < t ? -e.padding : e.padding : 0;
    let s = ["years", "months", "days", "hours", "minutes", "seconds"], i = e.unit;
    return Array.isArray(e.unit) && (s = e.unit, i = void 0), wn(t, this.plus(r), {
      ...e,
      numeric: "always",
      units: s,
      unit: i
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(e = {}) {
    return this.isValid ? wn(e.base || g.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...e) {
    if (!e.every(g.isDateTime))
      throw new _("min requires all arguments be DateTimes");
    return nn(e, (t) => t.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(g.isDateTime))
      throw new _("max requires all arguments be DateTimes");
    return nn(e, (t) => t.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(e, t, r = {}) {
    const { locale: s = null, numberingSystem: i = null } = r, a = M.fromOpts({
      locale: s,
      numberingSystem: i,
      defaultToEN: !0
    });
    return Nr(a, e, t);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, t, r = {}) {
    return g.fromFormatExplain(e, t, r);
  }
  /**
   * Build a parser for `fmt` using the given locale. This parser can be passed
   * to {@link DateTime.fromFormatParser} to a parse a date in this format. This
   * can be used to optimize cases where many dates need to be parsed in a
   * specific format.
   *
   * @param {String} fmt - the format the string is expected to be in (see
   * description)
   * @param {Object} options - options used to set locale and numberingSystem
   * for parser
   * @returns {TokenParser} - opaque object to be used
   */
  static buildFormatParser(e, t = {}) {
    const { locale: r = null, numberingSystem: s = null } = t, i = M.fromOpts({
      locale: r,
      numberingSystem: s,
      defaultToEN: !0
    });
    return new Er(i, e);
  }
  /**
   * Create a DateTime from an input string and format parser.
   *
   * The format parser must have been created with the same locale as this call.
   *
   * @param {String} text - the string to parse
   * @param {TokenParser} formatParser - parser from {@link DateTime.buildFormatParser}
   * @param {Object} opts - options taken by fromFormat()
   * @returns {DateTime}
   */
  static fromFormatParser(e, t, r = {}) {
    if (S(e) || S(t))
      throw new _(
        "fromFormatParser requires an input string and a format parser"
      );
    const { locale: s = null, numberingSystem: i = null } = r, a = M.fromOpts({
      locale: s,
      numberingSystem: i,
      defaultToEN: !0
    });
    if (!a.equals(t.locale))
      throw new _(
        `fromFormatParser called with a locale of ${a}, but the format parser was created for ${t.locale}`
      );
    const { result: o, zone: u, specificOffset: l, invalidReason: c } = t.explainFromTokens(e);
    return c ? g.invalid(c) : A0(
      o,
      u,
      r,
      `format ${t.format}`,
      e,
      l
    );
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return Ce;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return Vn;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return Xr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return An;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return Wn;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return zn;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return Ln;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return _n;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return Un;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return $n;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return Zn;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Rn;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return Pn;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return qn;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return Hn;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return Yn;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return Gn;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return Kr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return Jn;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return jn;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return Bn;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return Qn;
  }
}
function j0(n) {
  if (g.isDateTime(n))
    return n;
  if (n && n.valueOf && T0(n.valueOf()))
    return g.fromJSDate(n);
  if (n && typeof n == "object")
    return g.fromObject(n);
  throw new _(
    `Unknown datetime argument: ${n}, of type ${typeof n}`
  );
}
/**
    @preserve

    Astronomy library for JavaScript (browser and Node.js).
    https://github.com/cosinekitty/astronomy

    MIT License

    Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/
/**
 * @fileoverview Astronomy calculation library for browser scripting and Node.js.
 * @author Don Cross <cosinekitty@gmail.com>
 * @license MIT
 */
const Cr = 173.1446326846693, Bi = 14959787069098932e-8, v0 = 0.017453292519943295, pn = 57.29577951308232, Qi = 365.24217, Tn = /* @__PURE__ */ new Date("2000-01-01T12:00:00Z"), u0 = 2 * Math.PI, w0 = 3600 * (180 / Math.PI), U0 = 484813681109536e-20, Xi = 180 * 60 * 60, Ki = 2 * Xi, kn = 29.530588, e1 = 24 * 3600, t1 = 6378.1366, n1 = t1 / Bi, r1 = 81.30056, Wt = 2959122082855911e-19, mt = 2825345909524226e-22, yt = 8459715185680659e-23, gt = 1292024916781969e-23, wt = 1524358900784276e-23;
function s0(n) {
  if (!Number.isFinite(n))
    throw console.trace(), `Value is not a finite number: ${n}`;
  return n;
}
function W0(n) {
  return n - Math.floor(n);
}
var O;
(function(n) {
  n.Sun = "Sun", n.Moon = "Moon", n.Mercury = "Mercury", n.Venus = "Venus", n.Earth = "Earth", n.Mars = "Mars", n.Jupiter = "Jupiter", n.Saturn = "Saturn", n.Uranus = "Uranus", n.Neptune = "Neptune", n.Pluto = "Pluto", n.SSB = "SSB", n.EMB = "EMB", n.Star1 = "Star1", n.Star2 = "Star2", n.Star3 = "Star3", n.Star4 = "Star4", n.Star5 = "Star5", n.Star6 = "Star6", n.Star7 = "Star7", n.Star8 = "Star8";
})(O || (O = {}));
const s1 = [
  O.Star1,
  O.Star2,
  O.Star3,
  O.Star4,
  O.Star5,
  O.Star6,
  O.Star7,
  O.Star8
], i1 = [
  { ra: 0, dec: 0, dist: 0 },
  { ra: 0, dec: 0, dist: 0 },
  { ra: 0, dec: 0, dist: 0 },
  { ra: 0, dec: 0, dist: 0 },
  { ra: 0, dec: 0, dist: 0 },
  { ra: 0, dec: 0, dist: 0 },
  { ra: 0, dec: 0, dist: 0 },
  { ra: 0, dec: 0, dist: 0 }
];
function a1(n) {
  const e = s1.indexOf(n);
  return e >= 0 ? i1[e] : null;
}
function Vr(n) {
  const e = a1(n);
  return e && e.dist > 0 ? e : null;
}
var t0;
(function(n) {
  n[n.From2000 = 0] = "From2000", n[n.Into2000 = 1] = "Into2000";
})(t0 || (t0 = {}));
const N0 = {
  Mercury: [
    [
      [
        [4.40250710144, 0, 0],
        [0.40989414977, 1.48302034195, 26087.9031415742],
        [0.050462942, 4.47785489551, 52175.8062831484],
        [0.00855346844, 1.16520322459, 78263.70942472259],
        [0.00165590362, 4.11969163423, 104351.61256629678],
        [34561897e-11, 0.77930768443, 130439.51570787099],
        [7583476e-11, 3.71348404924, 156527.41884944518]
      ],
      [
        [26087.90313685529, 0, 0],
        [0.01131199811, 6.21874197797, 26087.9031415742],
        [0.00292242298, 3.04449355541, 52175.8062831484],
        [75775081e-11, 6.08568821653, 78263.70942472259],
        [19676525e-11, 2.80965111777, 104351.61256629678]
      ]
    ],
    [
      [
        [0.11737528961, 1.98357498767, 26087.9031415742],
        [0.02388076996, 5.03738959686, 52175.8062831484],
        [0.01222839532, 3.14159265359, 0],
        [0.0054325181, 1.79644363964, 78263.70942472259],
        [0.0012977877, 4.83232503958, 104351.61256629678],
        [31866927e-11, 1.58088495658, 130439.51570787099],
        [7963301e-11, 4.60972126127, 156527.41884944518]
      ],
      [
        [0.00274646065, 3.95008450011, 26087.9031415742],
        [99737713e-11, 3.14159265359, 0]
      ]
    ],
    [
      [
        [0.39528271651, 0, 0],
        [0.07834131818, 6.19233722598, 26087.9031415742],
        [0.00795525558, 2.95989690104, 52175.8062831484],
        [0.00121281764, 6.01064153797, 78263.70942472259],
        [21921969e-11, 2.77820093972, 104351.61256629678],
        [4354065e-11, 5.82894543774, 130439.51570787099]
      ],
      [
        [0.0021734774, 4.65617158665, 26087.9031415742],
        [44141826e-11, 1.42385544001, 52175.8062831484]
      ]
    ]
  ],
  Venus: [
    [
      [
        [3.17614666774, 0, 0],
        [0.01353968419, 5.59313319619, 10213.285546211],
        [89891645e-11, 5.30650047764, 20426.571092422],
        [5477194e-11, 4.41630661466, 7860.4193924392],
        [3455741e-11, 2.6996444782, 11790.6290886588],
        [2372061e-11, 2.99377542079, 3930.2096962196],
        [1317168e-11, 5.18668228402, 26.2983197998],
        [1664146e-11, 4.25018630147, 1577.3435424478],
        [1438387e-11, 4.15745084182, 9683.5945811164],
        [1200521e-11, 6.15357116043, 30639.856638633]
      ],
      [
        [10213.28554621638, 0, 0],
        [95617813e-11, 2.4640651111, 10213.285546211],
        [7787201e-11, 0.6247848222, 20426.571092422]
      ]
    ],
    [
      [
        [0.05923638472, 0.26702775812, 10213.285546211],
        [40107978e-11, 1.14737178112, 20426.571092422],
        [32814918e-11, 3.14159265359, 0]
      ],
      [
        [0.00287821243, 1.88964962838, 10213.285546211]
      ]
    ],
    [
      [
        [0.72334820891, 0, 0],
        [0.00489824182, 4.02151831717, 10213.285546211],
        [1658058e-11, 4.90206728031, 20426.571092422],
        [1378043e-11, 1.12846591367, 11790.6290886588],
        [1632096e-11, 2.84548795207, 7860.4193924392],
        [498395e-11, 2.58682193892, 9683.5945811164],
        [221985e-11, 2.01346696541, 19367.1891622328],
        [237454e-11, 2.55136053886, 15720.8387848784]
      ],
      [
        [34551041e-11, 0.89198706276, 10213.285546211]
      ]
    ]
  ],
  Earth: [
    [
      [
        [1.75347045673, 0, 0],
        [0.03341656453, 4.66925680415, 6283.0758499914],
        [34894275e-11, 4.62610242189, 12566.1516999828],
        [3417572e-11, 2.82886579754, 3.523118349],
        [3497056e-11, 2.74411783405, 5753.3848848968],
        [3135899e-11, 3.62767041756, 77713.7714681205],
        [2676218e-11, 4.41808345438, 7860.4193924392],
        [2342691e-11, 6.13516214446, 3930.2096962196],
        [1273165e-11, 2.03709657878, 529.6909650946],
        [1324294e-11, 0.74246341673, 11506.7697697936],
        [901854e-11, 2.04505446477, 26.2983197998],
        [1199167e-11, 1.10962946234, 1577.3435424478],
        [857223e-11, 3.50849152283, 398.1490034082],
        [779786e-11, 1.17882681962, 5223.6939198022],
        [99025e-10, 5.23268072088, 5884.9268465832],
        [753141e-11, 2.53339052847, 5507.5532386674],
        [505267e-11, 4.58292599973, 18849.2275499742],
        [492392e-11, 4.20505711826, 775.522611324],
        [356672e-11, 2.91954114478, 0.0673103028],
        [284125e-11, 1.89869240932, 796.2980068164],
        [242879e-11, 0.34481445893, 5486.777843175],
        [317087e-11, 5.84901948512, 11790.6290886588],
        [271112e-11, 0.31486255375, 10977.078804699],
        [206217e-11, 4.80646631478, 2544.3144198834],
        [205478e-11, 1.86953770281, 5573.1428014331],
        [202318e-11, 2.45767790232, 6069.7767545534],
        [126225e-11, 1.08295459501, 20.7753954924],
        [155516e-11, 0.83306084617, 213.299095438]
      ],
      [
        [6283.0758499914, 0, 0],
        [0.00206058863, 2.67823455808, 6283.0758499914],
        [4303419e-11, 2.63512233481, 12566.1516999828]
      ],
      [
        [8721859e-11, 1.07253635559, 6283.0758499914]
      ]
    ],
    [
      [],
      [
        [0.00227777722, 3.4137662053, 6283.0758499914],
        [3805678e-11, 3.37063423795, 12566.1516999828]
      ]
    ],
    [
      [
        [1.00013988784, 0, 0],
        [0.01670699632, 3.09846350258, 6283.0758499914],
        [13956024e-11, 3.05524609456, 12566.1516999828],
        [308372e-10, 5.19846674381, 77713.7714681205],
        [1628463e-11, 1.17387558054, 5753.3848848968],
        [1575572e-11, 2.84685214877, 7860.4193924392],
        [924799e-11, 5.45292236722, 11506.7697697936],
        [542439e-11, 4.56409151453, 3930.2096962196],
        [47211e-10, 3.66100022149, 5884.9268465832],
        [85831e-11, 1.27079125277, 161000.6857376741],
        [57056e-11, 2.01374292245, 83996.84731811189],
        [55736e-11, 5.2415979917, 71430.69561812909],
        [174844e-11, 3.01193636733, 18849.2275499742],
        [243181e-11, 4.2734953079, 11790.6290886588]
      ],
      [
        [0.00103018607, 1.10748968172, 6283.0758499914],
        [1721238e-11, 1.06442300386, 12566.1516999828]
      ],
      [
        [4359385e-11, 5.78455133808, 6283.0758499914]
      ]
    ]
  ],
  Mars: [
    [
      [
        [6.20347711581, 0, 0],
        [0.18656368093, 5.0503710027, 3340.6124266998],
        [0.01108216816, 5.40099836344, 6681.2248533996],
        [91798406e-11, 5.75478744667, 10021.8372800994],
        [27744987e-11, 5.97049513147, 3.523118349],
        [10610235e-11, 2.93958560338, 2281.2304965106],
        [12315897e-11, 0.84956094002, 2810.9214616052],
        [8926784e-11, 4.15697846427, 0.0172536522],
        [8715691e-11, 6.11005153139, 13362.4497067992],
        [6797556e-11, 0.36462229657, 398.1490034082],
        [7774872e-11, 3.33968761376, 5621.8429232104],
        [3575078e-11, 1.6618650571, 2544.3144198834],
        [4161108e-11, 0.22814971327, 2942.4634232916],
        [3075252e-11, 0.85696614132, 191.4482661116],
        [2628117e-11, 0.64806124465, 3337.0893083508],
        [2937546e-11, 6.07893711402, 0.0673103028],
        [2389414e-11, 5.03896442664, 796.2980068164],
        [2579844e-11, 0.02996736156, 3344.1355450488],
        [1528141e-11, 1.14979301996, 6151.533888305],
        [1798806e-11, 0.65634057445, 529.6909650946],
        [1264357e-11, 3.62275122593, 5092.1519581158],
        [1286228e-11, 3.06796065034, 2146.1654164752],
        [1546404e-11, 2.91579701718, 1751.539531416],
        [1024902e-11, 3.69334099279, 8962.4553499102],
        [891566e-11, 0.18293837498, 16703.062133499],
        [858759e-11, 2.4009381194, 2914.0142358238],
        [832715e-11, 2.46418619474, 3340.5951730476],
        [83272e-10, 4.49495782139, 3340.629680352],
        [712902e-11, 3.66335473479, 1059.3819301892],
        [748723e-11, 3.82248614017, 155.4203994342],
        [723861e-11, 0.67497311481, 3738.761430108],
        [635548e-11, 2.92182225127, 8432.7643848156],
        [655162e-11, 0.48864064125, 3127.3133312618],
        [550474e-11, 3.81001042328, 0.9803210682],
        [55275e-10, 4.47479317037, 1748.016413067],
        [425966e-11, 0.55364317304, 6283.0758499914],
        [415131e-11, 0.49662285038, 213.299095438],
        [472167e-11, 3.62547124025, 1194.4470102246],
        [306551e-11, 0.38052848348, 6684.7479717486],
        [312141e-11, 0.99853944405, 6677.7017350506],
        [293198e-11, 4.22131299634, 20.7753954924],
        [302375e-11, 4.48618007156, 3532.0606928114],
        [274027e-11, 0.54222167059, 3340.545116397],
        [281079e-11, 5.88163521788, 1349.8674096588],
        [231183e-11, 1.28242156993, 3870.3033917944],
        [283602e-11, 5.7688543494, 3149.1641605882],
        [236117e-11, 5.75503217933, 3333.498879699],
        [274033e-11, 0.13372524985, 3340.6797370026],
        [299395e-11, 2.78323740866, 6254.6266625236]
      ],
      [
        [3340.61242700512, 0, 0],
        [0.01457554523, 3.60433733236, 3340.6124266998],
        [0.00168414711, 3.92318567804, 6681.2248533996],
        [20622975e-11, 4.26108844583, 10021.8372800994],
        [3452392e-11, 4.7321039319, 3.523118349],
        [2586332e-11, 4.60670058555, 13362.4497067992],
        [841535e-11, 4.45864030426, 2281.2304965106]
      ],
      [
        [58152577e-11, 2.04961712429, 3340.6124266998],
        [13459579e-11, 2.45738706163, 6681.2248533996]
      ]
    ],
    [
      [
        [0.03197134986, 3.76832042431, 3340.6124266998],
        [0.00298033234, 4.10616996305, 6681.2248533996],
        [0.00289104742, 0, 0],
        [31365539e-11, 4.4465105309, 10021.8372800994],
        [34841e-9, 4.7881254926, 13362.4497067992]
      ],
      [
        [0.00217310991, 6.04472194776, 3340.6124266998],
        [20976948e-11, 3.14159265359, 0],
        [12834709e-11, 1.60810667915, 6681.2248533996]
      ]
    ],
    [
      [
        [1.53033488271, 0, 0],
        [0.1418495316, 3.47971283528, 3340.6124266998],
        [0.00660776362, 3.81783443019, 6681.2248533996],
        [46179117e-11, 4.15595316782, 10021.8372800994],
        [8109733e-11, 5.55958416318, 2810.9214616052],
        [7485318e-11, 1.77239078402, 5621.8429232104],
        [5523191e-11, 1.3643630377, 2281.2304965106],
        [382516e-10, 4.49407183687, 13362.4497067992],
        [2306537e-11, 0.09081579001, 2544.3144198834],
        [1999396e-11, 5.36059617709, 3337.0893083508],
        [2484394e-11, 4.9254563992, 2942.4634232916],
        [1960195e-11, 4.74249437639, 3344.1355450488],
        [1167119e-11, 2.11260868341, 5092.1519581158],
        [1102816e-11, 5.00908403998, 398.1490034082],
        [899066e-11, 4.40791133207, 529.6909650946],
        [992252e-11, 5.83861961952, 6151.533888305],
        [807354e-11, 2.10217065501, 1059.3819301892],
        [797915e-11, 3.44839203899, 796.2980068164],
        [740975e-11, 1.49906336885, 2146.1654164752]
      ],
      [
        [0.01107433345, 2.03250524857, 3340.6124266998],
        [0.00103175887, 2.37071847807, 6681.2248533996],
        [128772e-9, 0, 0],
        [1081588e-10, 2.70888095665, 10021.8372800994]
      ],
      [
        [44242249e-11, 0.47930604954, 3340.6124266998],
        [8138042e-11, 0.86998389204, 6681.2248533996]
      ]
    ]
  ],
  Jupiter: [
    [
      [
        [0.59954691494, 0, 0],
        [0.09695898719, 5.06191793158, 529.6909650946],
        [0.00573610142, 1.44406205629, 7.1135470008],
        [0.00306389205, 5.41734730184, 1059.3819301892],
        [97178296e-11, 4.14264726552, 632.7837393132],
        [72903078e-11, 3.64042916389, 522.5774180938],
        [64263975e-11, 3.41145165351, 103.0927742186],
        [39806064e-11, 2.29376740788, 419.4846438752],
        [38857767e-11, 1.27231755835, 316.3918696566],
        [27964629e-11, 1.7845459182, 536.8045120954],
        [1358973e-10, 5.7748104079, 1589.0728952838],
        [8246349e-11, 3.5822792584, 206.1855484372],
        [8768704e-11, 3.63000308199, 949.1756089698],
        [7368042e-11, 5.0810119427, 735.8765135318],
        [626315e-10, 0.02497628807, 213.299095438],
        [6114062e-11, 4.51319998626, 1162.4747044078],
        [4905396e-11, 1.32084470588, 110.2063212194],
        [5305285e-11, 1.30671216791, 14.2270940016],
        [5305441e-11, 4.18625634012, 1052.2683831884],
        [4647248e-11, 4.69958103684, 3.9321532631],
        [3045023e-11, 4.31676431084, 426.598190876],
        [2609999e-11, 1.56667394063, 846.0828347512],
        [2028191e-11, 1.06376530715, 3.1813937377],
        [1764763e-11, 2.14148655117, 1066.49547719],
        [1722972e-11, 3.88036268267, 1265.5674786264],
        [1920945e-11, 0.97168196472, 639.897286314],
        [1633223e-11, 3.58201833555, 515.463871093],
        [1431999e-11, 4.29685556046, 625.6701923124],
        [973272e-11, 4.09764549134, 95.9792272178]
      ],
      [
        [529.69096508814, 0, 0],
        [0.00489503243, 4.2208293947, 529.6909650946],
        [0.00228917222, 6.02646855621, 7.1135470008],
        [30099479e-11, 4.54540782858, 1059.3819301892],
        [2072092e-10, 5.45943156902, 522.5774180938],
        [12103653e-11, 0.16994816098, 536.8045120954],
        [6067987e-11, 4.42422292017, 103.0927742186],
        [5433968e-11, 3.98480737746, 419.4846438752],
        [4237744e-11, 5.89008707199, 14.2270940016]
      ],
      [
        [47233601e-11, 4.32148536482, 7.1135470008],
        [30649436e-11, 2.929777887, 529.6909650946],
        [14837605e-11, 3.14159265359, 0]
      ]
    ],
    [
      [
        [0.02268615702, 3.55852606721, 529.6909650946],
        [0.00109971634, 3.90809347197, 1059.3819301892],
        [0.00110090358, 0, 0],
        [8101428e-11, 3.60509572885, 522.5774180938],
        [6043996e-11, 4.25883108339, 1589.0728952838],
        [6437782e-11, 0.30627119215, 536.8045120954]
      ],
      [
        [78203446e-11, 1.52377859742, 529.6909650946]
      ]
    ],
    [
      [
        [5.20887429326, 0, 0],
        [0.25209327119, 3.49108639871, 529.6909650946],
        [0.00610599976, 3.84115365948, 1059.3819301892],
        [0.00282029458, 2.57419881293, 632.7837393132],
        [0.00187647346, 2.07590383214, 522.5774180938],
        [86792905e-11, 0.71001145545, 419.4846438752],
        [72062974e-11, 0.21465724607, 536.8045120954],
        [65517248e-11, 5.9799588479, 316.3918696566],
        [29134542e-11, 1.67759379655, 103.0927742186],
        [30135335e-11, 2.16132003734, 949.1756089698],
        [23453271e-11, 3.54023522184, 735.8765135318],
        [22283743e-11, 4.19362594399, 1589.0728952838],
        [23947298e-11, 0.2745803748, 7.1135470008],
        [13032614e-11, 2.96042965363, 1162.4747044078],
        [970336e-10, 1.90669633585, 206.1855484372],
        [12749023e-11, 2.71550286592, 1052.2683831884],
        [7057931e-11, 2.18184839926, 1265.5674786264],
        [6137703e-11, 6.26418240033, 846.0828347512],
        [2616976e-11, 2.00994012876, 1581.959348283]
      ],
      [
        [0.0127180152, 2.64937512894, 529.6909650946],
        [61661816e-11, 3.00076460387, 1059.3819301892],
        [53443713e-11, 3.89717383175, 522.5774180938],
        [31185171e-11, 4.88276958012, 536.8045120954],
        [41390269e-11, 0, 0]
      ]
    ]
  ],
  Saturn: [
    [
      [
        [0.87401354025, 0, 0],
        [0.11107659762, 3.96205090159, 213.299095438],
        [0.01414150957, 4.58581516874, 7.1135470008],
        [0.00398379389, 0.52112032699, 206.1855484372],
        [0.00350769243, 3.30329907896, 426.598190876],
        [0.00206816305, 0.24658372002, 103.0927742186],
        [792713e-9, 3.84007056878, 220.4126424388],
        [23990355e-11, 4.66976924553, 110.2063212194],
        [16573588e-11, 0.43719228296, 419.4846438752],
        [14906995e-11, 5.76903183869, 316.3918696566],
        [1582029e-10, 0.93809155235, 632.7837393132],
        [14609559e-11, 1.56518472, 3.9321532631],
        [13160301e-11, 4.44891291899, 14.2270940016],
        [15053543e-11, 2.71669915667, 639.897286314],
        [13005299e-11, 5.98119023644, 11.0457002639],
        [10725067e-11, 3.12939523827, 202.2533951741],
        [5863206e-11, 0.23656938524, 529.6909650946],
        [5227757e-11, 4.20783365759, 3.1813937377],
        [6126317e-11, 1.76328667907, 277.0349937414],
        [5019687e-11, 3.17787728405, 433.7117378768],
        [459255e-10, 0.61977744975, 199.0720014364],
        [4005867e-11, 2.24479718502, 63.7358983034],
        [2953796e-11, 0.98280366998, 95.9792272178],
        [387367e-10, 3.22283226966, 138.5174968707],
        [2461186e-11, 2.03163875071, 735.8765135318],
        [3269484e-11, 0.77492638211, 949.1756089698],
        [1758145e-11, 3.2658010994, 522.5774180938],
        [1640172e-11, 5.5050445305, 846.0828347512],
        [1391327e-11, 4.02333150505, 323.5054166574],
        [1580648e-11, 4.37265307169, 309.2783226558],
        [1123498e-11, 2.83726798446, 415.5524906121],
        [1017275e-11, 3.71700135395, 227.5261894396],
        [848642e-11, 3.1915017083, 209.3669421749]
      ],
      [
        [213.2990952169, 0, 0],
        [0.01297370862, 1.82834923978, 213.299095438],
        [0.00564345393, 2.88499717272, 7.1135470008],
        [93734369e-11, 1.06311793502, 426.598190876],
        [0.00107674962, 2.27769131009, 206.1855484372],
        [40244455e-11, 2.04108104671, 220.4126424388],
        [19941774e-11, 1.2795439047, 103.0927742186],
        [10511678e-11, 2.7488034213, 14.2270940016],
        [6416106e-11, 0.38238295041, 639.897286314],
        [4848994e-11, 2.43037610229, 419.4846438752],
        [4056892e-11, 2.92133209468, 110.2063212194],
        [3768635e-11, 3.6496533078, 3.9321532631]
      ],
      [
        [0.0011644133, 1.17988132879, 7.1135470008],
        [91841837e-11, 0.0732519584, 213.299095438],
        [36661728e-11, 0, 0],
        [15274496e-11, 4.06493179167, 206.1855484372]
      ]
    ],
    [
      [
        [0.04330678039, 3.60284428399, 213.299095438],
        [0.00240348302, 2.85238489373, 426.598190876],
        [84745939e-11, 0, 0],
        [30863357e-11, 3.48441504555, 220.4126424388],
        [34116062e-11, 0.57297307557, 206.1855484372],
        [1473407e-10, 2.11846596715, 639.897286314],
        [9916667e-11, 5.79003188904, 419.4846438752],
        [6993564e-11, 4.7360468972, 7.1135470008],
        [4807588e-11, 5.43305312061, 316.3918696566]
      ],
      [
        [0.00198927992, 4.93901017903, 213.299095438],
        [36947916e-11, 3.14159265359, 0],
        [17966989e-11, 0.5197943111, 426.598190876]
      ]
    ],
    [
      [
        [9.55758135486, 0, 0],
        [0.52921382865, 2.39226219573, 213.299095438],
        [0.01873679867, 5.2354960466, 206.1855484372],
        [0.01464663929, 1.64763042902, 426.598190876],
        [0.00821891141, 5.93520042303, 316.3918696566],
        [0.00547506923, 5.0153261898, 103.0927742186],
        [0.0037168465, 2.27114821115, 220.4126424388],
        [0.00361778765, 3.13904301847, 7.1135470008],
        [0.00140617506, 5.70406606781, 632.7837393132],
        [0.00108974848, 3.29313390175, 110.2063212194],
        [69006962e-11, 5.94099540992, 419.4846438752],
        [61053367e-11, 0.94037691801, 639.897286314],
        [48913294e-11, 1.55733638681, 202.2533951741],
        [34143772e-11, 0.19519102597, 277.0349937414],
        [32401773e-11, 5.47084567016, 949.1756089698],
        [20936596e-11, 0.46349251129, 735.8765135318],
        [9796004e-11, 5.20477537945, 1265.5674786264],
        [11993338e-11, 5.98050967385, 846.0828347512],
        [208393e-9, 1.52102476129, 433.7117378768],
        [15298404e-11, 3.0594381494, 529.6909650946],
        [6465823e-11, 0.17732249942, 1052.2683831884],
        [11380257e-11, 1.7310542704, 522.5774180938],
        [3419618e-11, 4.94550542171, 1581.959348283]
      ],
      [
        [0.0618298134, 0.2584351148, 213.299095438],
        [0.00506577242, 0.71114625261, 206.1855484372],
        [0.00341394029, 5.79635741658, 426.598190876],
        [0.00188491195, 0.47215589652, 220.4126424388],
        [0.00186261486, 3.14159265359, 0],
        [0.00143891146, 1.40744822888, 7.1135470008]
      ],
      [
        [0.00436902572, 4.78671677509, 213.299095438]
      ]
    ]
  ],
  Uranus: [
    [
      [
        [5.48129294297, 0, 0],
        [0.09260408234, 0.89106421507, 74.7815985673],
        [0.01504247898, 3.6271926092, 1.4844727083],
        [0.00365981674, 1.89962179044, 73.297125859],
        [0.00272328168, 3.35823706307, 149.5631971346],
        [70328461e-11, 5.39254450063, 63.7358983034],
        [68892678e-11, 6.09292483287, 76.2660712756],
        [61998615e-11, 2.26952066061, 2.9689454166],
        [61950719e-11, 2.85098872691, 11.0457002639],
        [2646877e-10, 3.14152083966, 71.8126531507],
        [25710476e-11, 6.11379840493, 454.9093665273],
        [2107885e-10, 4.36059339067, 148.0787244263],
        [17818647e-11, 1.74436930289, 36.6485629295],
        [14613507e-11, 4.73732166022, 3.9321532631],
        [11162509e-11, 5.8268179635, 224.3447957019],
        [1099791e-10, 0.48865004018, 138.5174968707],
        [9527478e-11, 2.95516862826, 35.1640902212],
        [7545601e-11, 5.236265824, 109.9456887885],
        [4220241e-11, 3.23328220918, 70.8494453042],
        [40519e-9, 2.277550173, 151.0476698429],
        [3354596e-11, 1.0654900738, 4.4534181249],
        [2926718e-11, 4.62903718891, 9.5612275556],
        [349034e-10, 5.48306144511, 146.594251718],
        [3144069e-11, 4.75199570434, 77.7505439839],
        [2922333e-11, 5.35235361027, 85.8272988312],
        [2272788e-11, 4.36600400036, 70.3281804424],
        [2051219e-11, 1.51773566586, 0.1118745846],
        [2148602e-11, 0.60745949945, 38.1330356378],
        [1991643e-11, 4.92437588682, 277.0349937414],
        [1376226e-11, 2.04283539351, 65.2203710117],
        [1666902e-11, 3.62744066769, 380.12776796],
        [1284107e-11, 3.11347961505, 202.2533951741],
        [1150429e-11, 0.93343589092, 3.1813937377],
        [1533221e-11, 2.58594681212, 52.6901980395],
        [1281604e-11, 0.54271272721, 222.8603229936],
        [1372139e-11, 4.19641530878, 111.4301614968],
        [1221029e-11, 0.1990065003, 108.4612160802],
        [946181e-11, 1.19253165736, 127.4717966068],
        [1150989e-11, 4.17898916639, 33.6796175129]
      ],
      [
        [74.7815986091, 0, 0],
        [0.00154332863, 5.24158770553, 74.7815985673],
        [24456474e-11, 1.71260334156, 1.4844727083],
        [9258442e-11, 0.4282973235, 11.0457002639],
        [8265977e-11, 1.50218091379, 63.7358983034],
        [915016e-10, 1.41213765216, 149.5631971346]
      ]
    ],
    [
      [
        [0.01346277648, 2.61877810547, 74.7815985673],
        [623414e-9, 5.08111189648, 149.5631971346],
        [61601196e-11, 3.14159265359, 0],
        [9963722e-11, 1.61603805646, 76.2660712756],
        [992616e-10, 0.57630380333, 73.297125859]
      ],
      [
        [34101978e-11, 0.01321929936, 74.7815985673]
      ]
    ],
    [
      [
        [19.21264847206, 0, 0],
        [0.88784984413, 5.60377527014, 74.7815985673],
        [0.03440836062, 0.32836099706, 73.297125859],
        [0.0205565386, 1.7829515933, 149.5631971346],
        [0.0064932241, 4.52247285911, 76.2660712756],
        [0.00602247865, 3.86003823674, 63.7358983034],
        [0.00496404167, 1.40139935333, 454.9093665273],
        [0.00338525369, 1.58002770318, 138.5174968707],
        [0.00243509114, 1.57086606044, 71.8126531507],
        [0.00190522303, 1.99809394714, 1.4844727083],
        [0.00161858838, 2.79137786799, 148.0787244263],
        [0.00143706183, 1.38368544947, 11.0457002639],
        [93192405e-11, 0.17437220467, 36.6485629295],
        [71424548e-11, 4.24509236074, 224.3447957019],
        [89806014e-11, 3.66105364565, 109.9456887885],
        [39009723e-11, 1.66971401684, 70.8494453042],
        [46677296e-11, 1.39976401694, 35.1640902212],
        [39025624e-11, 3.36234773834, 277.0349937414],
        [36755274e-11, 3.88649278513, 146.594251718],
        [30348723e-11, 0.70100838798, 151.0476698429],
        [29156413e-11, 3.180563367, 77.7505439839],
        [22637073e-11, 0.72518687029, 529.6909650946],
        [11959076e-11, 1.7504339214, 984.6003316219],
        [25620756e-11, 5.25656086672, 380.12776796]
      ],
      [
        [0.01479896629, 3.67205697578, 74.7815985673]
      ]
    ]
  ],
  Neptune: [
    [
      [
        [5.31188633046, 0, 0],
        [0.0179847553, 2.9010127389, 38.1330356378],
        [0.01019727652, 0.48580922867, 1.4844727083],
        [0.00124531845, 4.83008090676, 36.6485629295],
        [42064466e-11, 5.41054993053, 2.9689454166],
        [37714584e-11, 6.09221808686, 35.1640902212],
        [33784738e-11, 1.24488874087, 76.2660712756],
        [16482741e-11, 7727998e-11, 491.5579294568],
        [9198584e-11, 4.93747051954, 39.6175083461],
        [899425e-10, 0.27462171806, 175.1660598002]
      ],
      [
        [38.13303563957, 0, 0],
        [16604172e-11, 4.86323329249, 1.4844727083],
        [15744045e-11, 2.27887427527, 38.1330356378]
      ]
    ],
    [
      [
        [0.03088622933, 1.44104372644, 38.1330356378],
        [27780087e-11, 5.91271884599, 76.2660712756],
        [27623609e-11, 0, 0],
        [15355489e-11, 2.52123799551, 36.6485629295],
        [15448133e-11, 3.50877079215, 39.6175083461]
      ]
    ],
    [
      [
        [30.07013205828, 0, 0],
        [0.27062259632, 1.32999459377, 38.1330356378],
        [0.01691764014, 3.25186135653, 36.6485629295],
        [0.00807830553, 5.18592878704, 1.4844727083],
        [0.0053776051, 4.52113935896, 35.1640902212],
        [0.00495725141, 1.5710564165, 491.5579294568],
        [0.00274571975, 1.84552258866, 175.1660598002],
        [1201232e-10, 1.92059384991, 1021.2488945514],
        [0.00121801746, 5.79754470298, 76.2660712756],
        [0.00100896068, 0.3770272493, 73.297125859],
        [0.00135134092, 3.37220609835, 39.6175083461],
        [7571796e-11, 1.07149207335, 388.4651552382]
      ]
    ]
  ]
};
function o1(n) {
  var e, t, r, s, i, a, o;
  const u = 2e3 + (n - 14) / Qi;
  return u < -500 ? (e = (u - 1820) / 100, -20 + 32 * e * e) : u < 500 ? (e = u / 100, t = e * e, r = e * t, s = t * t, i = t * r, a = r * r, 10583.6 - 1014.41 * e + 33.78311 * t - 5.952053 * r - 0.1798452 * s + 0.022174192 * i + 0.0090316521 * a) : u < 1600 ? (e = (u - 1e3) / 100, t = e * e, r = e * t, s = t * t, i = t * r, a = r * r, 1574.2 - 556.01 * e + 71.23472 * t + 0.319781 * r - 0.8503463 * s - 5050998e-9 * i + 0.0083572073 * a) : u < 1700 ? (e = u - 1600, t = e * e, r = e * t, 120 - 0.9808 * e - 0.01532 * t + r / 7129) : u < 1800 ? (e = u - 1700, t = e * e, r = e * t, s = t * t, 8.83 + 0.1603 * e - 59285e-7 * t + 13336e-8 * r - s / 1174e3) : u < 1860 ? (e = u - 1800, t = e * e, r = e * t, s = t * t, i = t * r, a = r * r, o = r * s, 13.72 - 0.332447 * e + 68612e-7 * t + 41116e-7 * r - 37436e-8 * s + 121272e-10 * i - 1699e-10 * a + 875e-12 * o) : u < 1900 ? (e = u - 1860, t = e * e, r = e * t, s = t * t, i = t * r, 7.62 + 0.5737 * e - 0.251754 * t + 0.01680668 * r - 4473624e-10 * s + i / 233174) : u < 1920 ? (e = u - 1900, t = e * e, r = e * t, s = t * t, -2.79 + 1.494119 * e - 0.0598939 * t + 61966e-7 * r - 197e-6 * s) : u < 1941 ? (e = u - 1920, t = e * e, r = e * t, 21.2 + 0.84493 * e - 0.0761 * t + 20936e-7 * r) : u < 1961 ? (e = u - 1950, t = e * e, r = e * t, 29.07 + 0.407 * e - t / 233 + r / 2547) : u < 1986 ? (e = u - 1975, t = e * e, r = e * t, 45.45 + 1.067 * e - t / 260 - r / 718) : u < 2005 ? (e = u - 2e3, t = e * e, r = e * t, s = t * t, i = t * r, 63.86 + 0.3345 * e - 0.060374 * t + 17275e-7 * r + 651814e-9 * s + 2373599e-11 * i) : u < 2050 ? (e = u - 2e3, 62.92 + 0.32217 * e + 5589e-6 * e * e) : u < 2150 ? (e = (u - 1820) / 100, -20 + 32 * e * e - 0.5628 * (2150 - u)) : (e = (u - 1820) / 100, -20 + 32 * e * e);
}
let u1 = o1;
function vn(n) {
  return n + u1(n) / 86400;
}
class k0 {
  /**
   * @param {FlexibleDateTime} date
   *      A JavaScript Date object, a numeric UTC value expressed in J2000 days, or another AstroTime object.
   */
  constructor(e) {
    if (e instanceof k0) {
      this.date = e.date, this.ut = e.ut, this.tt = e.tt;
      return;
    }
    const t = 1e3 * 3600 * 24;
    if (e instanceof Date && Number.isFinite(e.getTime())) {
      this.date = e, this.ut = (e.getTime() - Tn.getTime()) / t, this.tt = vn(this.ut);
      return;
    }
    if (Number.isFinite(e)) {
      this.date = new Date(Tn.getTime() + e * t), this.ut = e, this.tt = vn(this.ut);
      return;
    }
    throw "Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date.";
  }
  /**
   * @brief Creates an `AstroTime` value from a Terrestrial Time (TT) day value.
   *
   * This function can be used in rare cases where a time must be based
   * on Terrestrial Time (TT) rather than Universal Time (UT).
   * Most developers will want to invoke `new AstroTime(ut)` with a universal time
   * instead of this function, because usually time is based on civil time adjusted
   * by leap seconds to match the Earth's rotation, rather than the uniformly
   * flowing TT used to calculate solar system dynamics. In rare cases
   * where the caller already knows TT, this function is provided to create
   * an `AstroTime` value that can be passed to Astronomy Engine functions.
   *
   * @param {number} tt
   *      The number of days since the J2000 epoch as expressed in Terrestrial Time.
   *
   * @returns {AstroTime}
   *      An `AstroTime` object for the specified terrestrial time.
   */
  static FromTerrestrialTime(e) {
    let t = new k0(e);
    for (; ; ) {
      const r = e - t.tt;
      if (Math.abs(r) < 1e-12)
        return t;
      t = t.AddDays(r);
    }
  }
  /**
   * Formats an `AstroTime` object as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * date/time string in UTC, to millisecond resolution.
   * Example: `2018-08-17T17:22:04.050Z`
   * @returns {string}
   */
  toString() {
    return this.date.toISOString();
  }
  /**
   * Returns a new `AstroTime` object adjusted by the floating point number of days.
   * Does NOT modify the original `AstroTime` object.
   *
   * @param {number} days
   *      The floating point number of days by which to adjust the given date and time.
   *      Positive values adjust the date toward the future, and
   *      negative values adjust the date toward the past.
   *
   * @returns {AstroTime}
   */
  AddDays(e) {
    return new k0(this.ut + e);
  }
}
function l1(n, e, t) {
  return new k0(n.ut + t * (e.ut - n.ut));
}
function i0(n) {
  return n instanceof k0 ? n : new k0(n);
}
function c1(n) {
  function e(y) {
    return y % Ki * U0;
  }
  const t = n.tt / 36525, r = e(128710479305e-5 + t * 1295965810481e-4), s = e(335779.526232 + t * 17395272628478e-4), i = e(107226070369e-5 + t * 1602961601209e-3), a = e(450160.398036 - t * 69628905431e-4);
  let o = Math.sin(a), u = Math.cos(a), l = (-172064161 - 174666 * t) * o + 33386 * u, c = (92052331 + 9086 * t) * u + 15377 * o, f = 2 * (s - i + a);
  return o = Math.sin(f), u = Math.cos(f), l += (-13170906 - 1675 * t) * o - 13696 * u, c += (5730336 - 3015 * t) * u - 4587 * o, f = 2 * (s + a), o = Math.sin(f), u = Math.cos(f), l += (-2276413 - 234 * t) * o + 2796 * u, c += (978459 - 485 * t) * u + 1374 * o, f = 2 * a, o = Math.sin(f), u = Math.cos(f), l += (2074554 + 207 * t) * o - 698 * u, c += (-897492 + 470 * t) * u - 291 * o, o = Math.sin(r), u = Math.cos(r), l += (1475877 - 3633 * t) * o + 11817 * u, c += (73871 - 184 * t) * u - 1924 * o, {
    dpsi: -135e-6 + l * 1e-7,
    deps: 388e-6 + c * 1e-7
  };
}
function Ar(n) {
  var e = n.tt / 36525, t = ((((-434e-10 * e - 576e-9) * e + 20034e-7) * e - 1831e-7) * e - 46.836769) * e + 84381.406;
  return t / 3600;
}
var De;
function zt(n) {
  if (!De || Math.abs(De.tt - n.tt) > 1e-6) {
    const e = c1(n), t = Ar(n), r = t + e.deps / 3600;
    De = {
      tt: n.tt,
      dpsi: e.dpsi,
      deps: e.deps,
      ee: e.dpsi * Math.cos(t * v0) / 15,
      mobl: t,
      tobl: r
    };
  }
  return De;
}
function f1(n, e) {
  const t = n * v0, r = Math.cos(t), s = Math.sin(t);
  return [
    e[0],
    e[1] * r - e[2] * s,
    e[1] * s + e[2] * r
  ];
}
function h1(n, e) {
  return f1(Ar(n), e);
}
function d1(n) {
  const e = n.tt / 36525;
  function t(k, N) {
    const V = [];
    let W;
    for (W = 0; W <= N - k; ++W)
      V.push(0);
    return { min: k, array: V };
  }
  function r(k, N, V, W) {
    const L = [];
    for (let d0 = 0; d0 <= N - k; ++d0)
      L.push(t(V, W));
    return { min: k, array: L };
  }
  function s(k, N, V) {
    const W = k.array[N - k.min];
    return W.array[V - W.min];
  }
  function i(k, N, V, W) {
    const L = k.array[N - k.min];
    L.array[V - L.min] = W;
  }
  let a, o, u, l, c, f, y, d, w, T, E, x, F, z, P, H, M0, f0, le, a0, h0, ce, Ye, _t = r(-6, 6, 1, 4), Ut = r(-6, 6, 1, 4);
  function fe(k, N) {
    return s(_t, k, N);
  }
  function he(k, N) {
    return s(Ut, k, N);
  }
  function de(k, N, V) {
    return i(_t, k, N, V);
  }
  function me(k, N, V) {
    return i(Ut, k, N, V);
  }
  function $t(k, N, V, W, L) {
    L(k * V - N * W, N * V + k * W);
  }
  function C(k) {
    return Math.sin(u0 * k);
  }
  y = e * e, w = 0, Ye = 0, E = 0, x = 3422.7;
  var ye = C(0.19833 + 0.05611 * e), Ge = C(0.27869 + 0.04508 * e), Je = C(0.16827 - 0.36903 * e), je = C(0.34734 - 5.37261 * e), Be = C(0.10498 - 5.37899 * e), ge = C(0.42681 - 0.41855 * e), Pr = C(0.14943 - 5.37511 * e);
  for (f0 = 0.84 * ye + 0.31 * Ge + 14.27 * Je + 7.26 * je + 0.28 * Be + 0.24 * ge, le = 2.94 * ye + 0.31 * Ge + 14.27 * Je + 9.34 * je + 1.12 * Be + 0.83 * ge, a0 = -6.4 * ye - 1.89 * ge, h0 = 0.21 * ye + 0.31 * Ge + 14.27 * Je - 88.7 * je - 15.3 * Be + 0.24 * ge - 1.86 * Pr, ce = f0 - a0, d = -3332e-9 * C(0.59734 - 5.37261 * e) - 539e-9 * C(0.35498 - 5.37899 * e) - 64e-9 * C(0.39943 - 5.37511 * e), F = u0 * W0(0.60643382 + 1336.85522467 * e - 313e-8 * y) + f0 / w0, z = u0 * W0(0.37489701 + 1325.55240982 * e + 2565e-8 * y) + le / w0, P = u0 * W0(0.99312619 + 99.99735956 * e - 44e-8 * y) + a0 / w0, H = u0 * W0(0.25909118 + 1342.2278298 * e - 892e-8 * y) + h0 / w0, M0 = u0 * W0(0.82736186 + 1236.85308708 * e - 397e-8 * y) + ce / w0, c = 1; c <= 4; ++c) {
    switch (c) {
      case 1:
        u = z, o = 4, l = 1.000002208;
        break;
      case 2:
        u = P, o = 3, l = 0.997504612 - 2495388e-9 * e;
        break;
      case 3:
        u = H, o = 4, l = 1.000002708 + 139.978 * d;
        break;
      case 4:
        u = M0, o = 6, l = 1;
        break;
      default:
        throw `Internal error: I = ${c}`;
    }
    for (de(0, c, 1), de(1, c, Math.cos(u) * l), me(0, c, 0), me(1, c, Math.sin(u) * l), f = 2; f <= o; ++f)
      $t(fe(f - 1, c), he(f - 1, c), fe(1, c), he(1, c), (k, N) => (de(f, c, k), me(f, c, N)));
    for (f = 1; f <= o; ++f)
      de(-f, c, fe(f, c)), me(-f, c, -he(f, c));
  }
  function Zt(k, N, V, W) {
    for (var L = { x: 1, y: 0 }, d0 = [0, k, N, V, W], o0 = 1; o0 <= 4; ++o0)
      d0[o0] !== 0 && $t(L.x, L.y, fe(d0[o0], o0), he(d0[o0], o0), (Qe, F0) => (L.x = Qe, L.y = F0));
    return L;
  }
  function h(k, N, V, W, L, d0, o0, Qe) {
    var F0 = Zt(L, d0, o0, Qe);
    w += k * F0.y, Ye += N * F0.y, E += V * F0.x, x += W * F0.x;
  }
  h(13.902, 14.06, -1e-3, 0.2607, 0, 0, 0, 4), h(0.403, -4.01, 0.394, 23e-4, 0, 0, 0, 3), h(2369.912, 2373.36, 0.601, 28.2333, 0, 0, 0, 2), h(-125.154, -112.79, -0.725, -0.9781, 0, 0, 0, 1), h(1.979, 6.98, -0.445, 0.0433, 1, 0, 0, 4), h(191.953, 192.72, 0.029, 3.0861, 1, 0, 0, 2), h(-8.466, -13.51, 0.455, -0.1093, 1, 0, 0, 1), h(22639.5, 22609.07, 0.079, 186.5398, 1, 0, 0, 0), h(18.609, 3.59, -0.094, 0.0118, 1, 0, 0, -1), h(-4586.465, -4578.13, -0.077, 34.3117, 1, 0, 0, -2), h(3.215, 5.44, 0.192, -0.0386, 1, 0, 0, -3), h(-38.428, -38.64, 1e-3, 0.6008, 1, 0, 0, -4), h(-0.393, -1.43, -0.092, 86e-4, 1, 0, 0, -6), h(-0.289, -1.59, 0.123, -53e-4, 0, 1, 0, 4), h(-24.42, -25.1, 0.04, -0.3, 0, 1, 0, 2), h(18.023, 17.93, 7e-3, 0.1494, 0, 1, 0, 1), h(-668.146, -126.98, -1.302, -0.3997, 0, 1, 0, 0), h(0.56, 0.32, -1e-3, -37e-4, 0, 1, 0, -1), h(-165.145, -165.06, 0.054, 1.9178, 0, 1, 0, -2), h(-1.877, -6.46, -0.416, 0.0339, 0, 1, 0, -4), h(0.213, 1.02, -0.074, 54e-4, 2, 0, 0, 4), h(14.387, 14.78, -0.017, 0.2833, 2, 0, 0, 2), h(-0.586, -1.2, 0.054, -0.01, 2, 0, 0, 1), h(769.016, 767.96, 0.107, 10.1657, 2, 0, 0, 0), h(1.75, 2.01, -0.018, 0.0155, 2, 0, 0, -1), h(-211.656, -152.53, 5.679, -0.3039, 2, 0, 0, -2), h(1.225, 0.91, -0.03, -88e-4, 2, 0, 0, -3), h(-30.773, -34.07, -0.308, 0.3722, 2, 0, 0, -4), h(-0.57, -1.4, -0.074, 0.0109, 2, 0, 0, -6), h(-2.921, -11.75, 0.787, -0.0484, 1, 1, 0, 2), h(1.267, 1.52, -0.022, 0.0164, 1, 1, 0, 1), h(-109.673, -115.18, 0.461, -0.949, 1, 1, 0, 0), h(-205.962, -182.36, 2.056, 1.4437, 1, 1, 0, -2), h(0.233, 0.36, 0.012, -25e-4, 1, 1, 0, -3), h(-4.391, -9.66, -0.471, 0.0673, 1, 1, 0, -4), h(0.283, 1.53, -0.111, 6e-3, 1, -1, 0, 4), h(14.577, 31.7, -1.54, 0.2302, 1, -1, 0, 2), h(147.687, 138.76, 0.679, 1.1528, 1, -1, 0, 0), h(-1.089, 0.55, 0.021, 0, 1, -1, 0, -1), h(28.475, 23.59, -0.443, -0.2257, 1, -1, 0, -2), h(-0.276, -0.38, -6e-3, -36e-4, 1, -1, 0, -3), h(0.636, 2.27, 0.146, -0.0102, 1, -1, 0, -4), h(-0.189, -1.68, 0.131, -28e-4, 0, 2, 0, 2), h(-7.486, -0.66, -0.037, -86e-4, 0, 2, 0, 0), h(-8.096, -16.35, -0.74, 0.0918, 0, 2, 0, -2), h(-5.741, -0.04, 0, -9e-4, 0, 0, 2, 2), h(0.255, 0, 0, 0, 0, 0, 2, 1), h(-411.608, -0.2, 0, -0.0124, 0, 0, 2, 0), h(0.584, 0.84, 0, 71e-4, 0, 0, 2, -1), h(-55.173, -52.14, 0, -0.1052, 0, 0, 2, -2), h(0.254, 0.25, 0, -17e-4, 0, 0, 2, -3), h(0.025, -1.67, 0, 31e-4, 0, 0, 2, -4), h(1.06, 2.96, -0.166, 0.0243, 3, 0, 0, 2), h(36.124, 50.64, -1.3, 0.6215, 3, 0, 0, 0), h(-13.193, -16.4, 0.258, -0.1187, 3, 0, 0, -2), h(-1.187, -0.74, 0.042, 74e-4, 3, 0, 0, -4), h(-0.293, -0.31, -2e-3, 46e-4, 3, 0, 0, -6), h(-0.29, -1.45, 0.116, -51e-4, 2, 1, 0, 2), h(-7.649, -10.56, 0.259, -0.1038, 2, 1, 0, 0), h(-8.627, -7.59, 0.078, -0.0192, 2, 1, 0, -2), h(-2.74, -2.54, 0.022, 0.0324, 2, 1, 0, -4), h(1.181, 3.32, -0.212, 0.0213, 2, -1, 0, 2), h(9.703, 11.67, -0.151, 0.1268, 2, -1, 0, 0), h(-0.352, -0.37, 1e-3, -28e-4, 2, -1, 0, -1), h(-2.494, -1.17, -3e-3, -17e-4, 2, -1, 0, -2), h(0.36, 0.2, -0.012, -43e-4, 2, -1, 0, -4), h(-1.167, -1.25, 8e-3, -0.0106, 1, 2, 0, 0), h(-7.412, -6.12, 0.117, 0.0484, 1, 2, 0, -2), h(-0.311, -0.65, -0.032, 44e-4, 1, 2, 0, -4), h(0.757, 1.82, -0.105, 0.0112, 1, -2, 0, 2), h(2.58, 2.32, 0.027, 0.0196, 1, -2, 0, 0), h(2.533, 2.4, -0.014, -0.0212, 1, -2, 0, -2), h(-0.344, -0.57, -0.025, 36e-4, 0, 3, 0, -2), h(-0.992, -0.02, 0, 0, 1, 0, 2, 2), h(-45.099, -0.02, 0, -1e-3, 1, 0, 2, 0), h(-0.179, -9.52, 0, -0.0833, 1, 0, 2, -2), h(-0.301, -0.33, 0, 14e-4, 1, 0, 2, -4), h(-6.382, -3.37, 0, -0.0481, 1, 0, -2, 2), h(39.528, 85.13, 0, -0.7136, 1, 0, -2, 0), h(9.366, 0.71, 0, -0.0112, 1, 0, -2, -2), h(0.202, 0.02, 0, 0, 1, 0, -2, -4), h(0.415, 0.1, 0, 13e-4, 0, 1, 2, 0), h(-2.152, -2.26, 0, -66e-4, 0, 1, 2, -2), h(-1.44, -1.3, 0, 14e-4, 0, 1, -2, 2), h(0.384, -0.04, 0, 0, 0, 1, -2, -2), h(1.938, 3.6, -0.145, 0.0401, 4, 0, 0, 0), h(-0.952, -1.58, 0.052, -0.013, 4, 0, 0, -2), h(-0.551, -0.94, 0.032, -97e-4, 3, 1, 0, 0), h(-0.482, -0.57, 5e-3, -45e-4, 3, 1, 0, -2), h(0.681, 0.96, -0.026, 0.0115, 3, -1, 0, 0), h(-0.297, -0.27, 2e-3, -9e-4, 2, 2, 0, -2), h(0.254, 0.21, -3e-3, 0, 2, -2, 0, -2), h(-0.25, -0.22, 4e-3, 14e-4, 1, 3, 0, -2), h(-3.996, 0, 0, 4e-4, 2, 0, 2, 0), h(0.557, -0.75, 0, -9e-3, 2, 0, 2, -2), h(-0.459, -0.38, 0, -53e-4, 2, 0, -2, 2), h(-1.298, 0.74, 0, 4e-4, 2, 0, -2, 0), h(0.538, 1.14, 0, -0.0141, 2, 0, -2, -2), h(0.263, 0.02, 0, 0, 1, 1, 2, 0), h(0.426, 0.07, 0, -6e-4, 1, 1, -2, -2), h(-0.304, 0.03, 0, 3e-4, 1, -1, 2, 0), h(-0.372, -0.19, 0, -27e-4, 1, -1, -2, 2), h(0.418, 0, 0, 0, 0, 0, 4, 0), h(-0.33, -0.04, 0, 0, 3, 0, 2, 0);
  function n0(k, N, V, W, L) {
    return k * Zt(N, V, W, L).y;
  }
  T = 0, T += n0(-526.069, 0, 0, 1, -2), T += n0(-3.352, 0, 0, 1, -4), T += n0(44.297, 1, 0, 1, -2), T += n0(-6, 1, 0, 1, -4), T += n0(20.599, -1, 0, 1, 0), T += n0(-30.598, -1, 0, 1, -2), T += n0(-24.649, -2, 0, 1, 0), T += n0(-2, -2, 0, 1, -2), T += n0(-22.571, 0, 1, 1, -2), T += n0(10.985, 0, -1, 1, -2), w += 0.82 * C(0.7736 - 62.5512 * e) + 0.31 * C(0.0466 - 125.1025 * e) + 0.35 * C(0.5785 - 25.1042 * e) + 0.66 * C(0.4591 + 1335.8075 * e) + 0.64 * C(0.313 - 91.568 * e) + 1.14 * C(0.148 + 1331.2898 * e) + 0.21 * C(0.5918 + 1056.5859 * e) + 0.44 * C(0.5784 + 1322.8595 * e) + 0.24 * C(0.2275 - 5.7374 * e) + 0.28 * C(0.2965 + 2.6929 * e) + 0.33 * C(0.3132 + 6.3368 * e), a = H + Ye / w0;
  let qr = (1.000002708 + 139.978 * d) * (18518.511 + 1.189 + E) * Math.sin(a) - 6.24 * Math.sin(3 * a) + T;
  return {
    geo_eclip_lon: u0 * W0((F + w / w0) / u0),
    geo_eclip_lat: Math.PI / (180 * 3600) * qr,
    distance_au: w0 * n1 / (0.999953253 * x)
  };
}
function Wr(n, e) {
  return [
    n.rot[0][0] * e[0] + n.rot[1][0] * e[1] + n.rot[2][0] * e[2],
    n.rot[0][1] * e[0] + n.rot[1][1] * e[1] + n.rot[2][1] * e[2],
    n.rot[0][2] * e[0] + n.rot[1][2] * e[1] + n.rot[2][2] * e[2]
  ];
}
function ze(n, e, t) {
  const r = m1(e, t);
  return Wr(r, n);
}
function m1(n, e) {
  const t = n.tt / 36525;
  let r = 84381.406, s = ((((-951e-10 * t + 132851e-9) * t - 114045e-8) * t - 1.0790069) * t + 5038.481507) * t, i = ((((3337e-10 * t - 467e-9) * t - 772503e-8) * t + 0.0512623) * t - 0.025754) * t + r, a = ((((-56e-9 * t + 170663e-9) * t - 121197e-8) * t - 2.3814292) * t + 10.556403) * t;
  r *= U0, s *= U0, i *= U0, a *= U0;
  const o = Math.sin(r), u = Math.cos(r), l = Math.sin(-s), c = Math.cos(-s), f = Math.sin(-i), y = Math.cos(-i), d = Math.sin(a), w = Math.cos(a), T = w * c - l * d * y, E = w * l * u + d * y * c * u - o * d * f, x = w * l * o + d * y * c * o + u * d * f, F = -d * c - l * w * y, z = -d * l * u + w * y * c * u - o * w * f, P = -d * l * o + w * y * c * o + u * w * f, H = l * f, M0 = -f * c * u - o * y, f0 = -f * c * o + y * u;
  if (e === t0.Into2000)
    return new Le([
      [T, E, x],
      [F, z, P],
      [H, M0, f0]
    ]);
  if (e === t0.From2000)
    return new Le([
      [T, F, H],
      [E, z, M0],
      [x, P, f0]
    ]);
  throw "Invalid precess direction";
}
function St(n, e, t) {
  const r = y1(e, t);
  return Wr(r, n);
}
function y1(n, e) {
  const t = zt(n), r = t.mobl * v0, s = t.tobl * v0, i = t.dpsi * U0, a = Math.cos(r), o = Math.sin(r), u = Math.cos(s), l = Math.sin(s), c = Math.cos(i), f = Math.sin(i), y = c, d = -f * a, w = -f * o, T = f * u, E = c * a * u + o * l, x = c * o * u - a * l, F = f * l, z = c * a * l - o * u, P = c * o * l + a * u;
  if (e === t0.From2000)
    return new Le([
      [y, T, F],
      [d, E, z],
      [w, x, P]
    ]);
  if (e === t0.Into2000)
    return new Le([
      [y, d, w],
      [T, E, x],
      [F, z, P]
    ]);
  throw "Invalid precess direction";
}
function g1(n, e, t) {
  return t === t0.Into2000 ? ze(St(n, e, t), e, t) : St(ze(n, e, t), e, t);
}
class R {
  constructor(e, t, r, s) {
    this.x = e, this.y = t, this.z = r, this.t = s;
  }
  /**
   * Returns the length of the vector in astronomical units (AU).
   * @returns {number}
   */
  Length() {
    return Math.hypot(this.x, this.y, this.z);
  }
}
class w1 {
  constructor(e, t, r, s, i, a, o) {
    this.x = e, this.y = t, this.z = r, this.vx = s, this.vy = i, this.vz = a, this.t = o;
  }
}
class S1 {
  constructor(e, t, r) {
    this.lat = s0(e), this.lon = s0(t), this.dist = s0(r);
  }
}
class Le {
  constructor(e) {
    this.rot = e;
  }
}
class p1 {
  constructor(e, t, r) {
    this.vec = e, this.elat = s0(t), this.elon = s0(r);
  }
}
function T1(n) {
  const e = i0(n).AddDays(-1 / Cr), t = ne(N0.Earth, e), r = [-t.x, -t.y, -t.z], [s, i, a] = g1(r, e, t0.From2000), o = v0 * zt(e).tobl, u = Math.cos(o), l = Math.sin(o), c = new R(s, i, a, e);
  return zr(c, u, l);
}
function zr(n, e, t) {
  const r = n.x, s = n.y * e + n.z * t, i = -n.y * t + n.z * e, a = Math.hypot(r, s);
  let o = 0;
  a > 0 && (o = pn * Math.atan2(s, r), o < 0 && (o += 360));
  let u = pn * Math.atan2(i, a), l = new R(r, s, i, n.t);
  return new p1(l, u, o);
}
function Mn(n) {
  const e = zt(n.t), t = [n.x, n.y, n.z], r = ze(t, n.t, t0.From2000), [s, i, a] = St(r, n.t, t0.From2000), o = new R(s, i, a, n.t), u = e.tobl * v0;
  return zr(o, Math.cos(u), Math.sin(u));
}
function pt(n) {
  const e = i0(n), t = d1(e), r = t.distance_au * Math.cos(t.geo_eclip_lat), s = [
    r * Math.cos(t.geo_eclip_lon),
    r * Math.sin(t.geo_eclip_lon),
    t.distance_au * Math.sin(t.geo_eclip_lat)
  ], i = h1(e, s), a = ze(i, e, t0.Into2000);
  return new R(a[0], a[1], a[2], e);
}
function P0(n, e, t) {
  let r = 1, s = 0;
  for (let i of n) {
    let a = 0;
    for (let [u, l, c] of i)
      a += u * Math.cos(l + e * c);
    let o = r * a;
    t && (o %= u0), s += o, r *= e;
  }
  return s;
}
function at(n, e) {
  let t = 1, r = 0, s = 0, i = 0;
  for (let a of n) {
    let o = 0, u = 0;
    for (let [l, c, f] of a) {
      let y = c + e * f;
      o += l * f * Math.sin(y), i > 0 && (u += l * Math.cos(y));
    }
    s += i * r * u - t * o, r = t, t *= e, ++i;
  }
  return s;
}
const ee = 365250, Tt = 0, kt = 1, vt = 2;
function Mt(n) {
  return new U(n[0] + 44036e-11 * n[1] - 190919e-12 * n[2], -479966e-12 * n[0] + 0.917482137087 * n[1] - 0.397776982902 * n[2], 0.397776982902 * n[1] + 0.917482137087 * n[2]);
}
function Lr(n, e, t) {
  const r = t * Math.cos(e), s = Math.cos(n), i = Math.sin(n);
  return [
    r * s,
    r * i,
    t * Math.sin(e)
  ];
}
function ne(n, e) {
  const t = e.tt / ee, r = P0(n[Tt], t, !0), s = P0(n[kt], t, !1), i = P0(n[vt], t, !1), a = Lr(r, s, i);
  return Mt(a).ToAstroVector(e);
}
function k1(n, e) {
  const t = e / ee, r = P0(n[Tt], t, !0), s = P0(n[kt], t, !1), i = P0(n[vt], t, !1), a = at(n[Tt], t), o = at(n[kt], t), u = at(n[vt], t), l = Math.cos(r), c = Math.sin(r), f = Math.cos(s), y = Math.sin(s), d = +(u * f * l) - i * y * l * o - i * f * c * a, w = +(u * f * c) - i * y * c * o + i * f * l * a, T = +(u * y) + i * f * o, E = Lr(r, s, i), x = [
    d / ee,
    w / ee,
    T / ee
  ], F = Mt(E), z = Mt(x);
  return new x0(e, F, z);
}
function Ee(n, e, t, r) {
  const s = r / (r + Wt), i = ne(N0[t], e);
  n.x += s * i.x, n.y += s * i.y, n.z += s * i.z;
}
function v1(n) {
  const e = new R(0, 0, 0, n);
  return Ee(e, n, O.Jupiter, mt), Ee(e, n, O.Saturn, yt), Ee(e, n, O.Uranus, gt), Ee(e, n, O.Neptune, wt), e;
}
const Ot = 51, M1 = 29200, $0 = 146, l0 = 201, I0 = [
  [-73e4, [-26.118207232108, -14.376168177825, 3.384402515299], [0.0016339372163656, -0.0027861699588508, -0.0013585880229445]],
  [-700800, [41.974905202127, -0.448502952929, -12.770351505989], [73458569351457e-17, 0.0022785014891658, 48619778602049e-17]],
  [-671600, [14.706930780744, 44.269110540027, 9.353698474772], [-0.00210001479998, 22295915939915e-17, 70143443551414e-17]],
  [-642400, [-29.441003929957, -6.43016153057, 6.858481011305], [84495803960544e-17, -0.0030783914758711, -0.0012106305981192]],
  [-613200, [39.444396946234, -6.557989760571, -13.913760296463], [0.0011480029005873, 0.0022400006880665, 35168075922288e-17]],
  [-584e3, [20.2303809507, 43.266966657189, 7.382966091923], [-0.0019754081700585, 53457141292226e-17, 75929169129793e-17]],
  [-554800, [-30.65832536462, 2.093818874552, 9.880531138071], [61010603013347e-18, -0.0031326500935382, -99346125151067e-17]],
  [-525600, [35.737703251673, -12.587706024764, -14.677847247563], [0.0015802939375649, 0.0021347678412429, 19074436384343e-17]],
  [-496400, [25.466295188546, 41.367478338417, 5.216476873382], [-0.0018054401046468, 8328308359951e-16, 80260156912107e-17]],
  [-467200, [-29.847174904071, 10.636426313081, 12.297904180106], [-63257063052907e-17, -0.0029969577578221, -74476074151596e-17]],
  [-438e3, [30.774692107687, -18.236637015304, -14.945535879896], [0.0020113162005465, 0.0019353827024189, -20937793168297e-19]],
  [-408800, [30.243153324028, 38.656267888503, 2.938501750218], [-0.0016052508674468, 0.0011183495337525, 83333973416824e-17]],
  [-379600, [-27.288984772533, 18.643162147874, 14.023633623329], [-0.0011856388898191, -0.0027170609282181, -49015526126399e-17]],
  [-350400, [24.519605196774, -23.245756064727, -14.626862367368], [0.0024322321483154, 0.0016062008146048, -23369181613312e-17]],
  [-321200, [34.505274805875, 35.125338586954, 0.557361475637], [-0.0013824391637782, 0.0013833397561817, 84823598806262e-17]],
  [-292e3, [-23.275363915119, 25.818514298769, 15.055381588598], [-0.0016062295460975, -0.0023395961498533, -24377362639479e-17]],
  [-262800, [17.050384798092, -27.180376290126, -13.608963321694], [0.0028175521080578, 0.0011358749093955, -49548725258825e-17]],
  [-233600, [38.093671910285, 30.880588383337, -1.843688067413], [-0.0011317697153459, 0.0016128814698472, 84177586176055e-17]],
  [-204400, [-18.197852930878, 31.932869934309, 15.438294826279], [-0.0019117272501813, -0.0019146495909842, -19657304369835e-18]],
  [-175200, [8.528924039997, -29.618422200048, -11.805400994258], [0.0031034370787005, 5139363329243e-16, -77293066202546e-17]],
  [-146e3, [40.94685725864, 25.904973592021, -4.256336240499], [-83652705194051e-17, 0.0018129497136404, 8156422827306e-16]],
  [-116800, [-12.326958895325, 36.881883446292, 15.217158258711], [-0.0021166103705038, -0.001481442003599, 17401209844705e-17]],
  [-87600, [-0.633258375909, -30.018759794709, -9.17193287495], [0.0032016994581737, -25279858672148e-17, -0.0010411088271861]],
  [-58400, [42.936048423883, 20.344685584452, -6.588027007912], [-50525450073192e-17, 0.0019910074335507, 77440196540269e-17]],
  [-29200, [-5.975910552974, 40.61180995846, 14.470131723673], [-0.0022184202156107, -0.0010562361130164, 33652250216211e-17]],
  [0, [-9.875369580774, -27.978926224737, -5.753711824704], [0.0030287533248818, -0.0011276087003636, -0.0012651326732361]],
  [29200, [43.958831986165, 14.214147973292, -8.808306227163], [-14717608981871e-17, 0.0021404187242141, 71486567806614e-17]],
  [58400, [0.67813676352, 43.094461639362, 13.243238780721], [-0.0022358226110718, -63233636090933e-17, 47664798895648e-17]],
  [87600, [-18.282602096834, -23.30503958666, -1.766620508028], [0.0025567245263557, -0.0019902940754171, -0.0013943491701082]],
  [116800, [43.873338744526, 7.700705617215, -10.814273666425], [23174803055677e-17, 0.0022402163127924, 62988756452032e-17]],
  [146e3, [7.392949027906, 44.382678951534, 11.629500214854], [-0.002193281545383, -21751799585364e-17, 59556516201114e-17]],
  [175200, [-24.981690229261, -16.204012851426, 2.466457544298], [0.001819398914958, -0.0026765419531201, -0.0013848283502247]],
  [204400, [42.530187039511, 0.845935508021, -12.554907527683], [65059779150669e-17, 0.0022725657282262, 51133743202822e-17]],
  [233600, [13.999526486822, 44.462363044894, 9.669418486465], [-0.0021079296569252, 17533423831993e-17, 69128485798076e-17]],
  [262800, [-29.184024803031, -7.371243995762, 6.493275957928], [93581363109681e-17, -0.0030610357109184, -0.0012364201089345]],
  [292e3, [39.831980671753, -6.078405766765, -13.909815358656], [0.0011117769689167, 0.0022362097830152, 36230548231153e-17]],
  [321200, [20.294955108476, 43.417190420251, 7.450091985932], [-0.0019742157451535, 53102050468554e-17, 75938408813008e-17]],
  [350400, [-30.66999230216, 2.318743558955, 9.973480913858], [45605107450676e-18, -0.0031308219926928, -99066533301924e-17]],
  [379600, [35.626122155983, -12.897647509224, -14.777586508444], [0.0016015684949743, 0.0021171931182284, 18002516202204e-17]],
  [408800, [26.133186148561, 41.232139187599, 5.00640132622], [-0.0017857704419579, 86046232702817e-17, 80614690298954e-17]],
  [438e3, [-29.57674022923, 11.863535943587, 12.631323039872], [-72292830060955e-17, -0.0029587820140709, -708242964503e-15]],
  [467200, [29.910805787391, -19.159019294, -15.013363865194], [0.0020871080437997, 0.0018848372554514, -38528655083926e-18]],
  [496400, [31.375957451819, 38.050372720763, 2.433138343754], [-0.0015546055556611, 0.0011699815465629, 83565439266001e-17]],
  [525600, [-26.360071336928, 20.662505904952, 14.414696258958], [-0.0013142373118349, -0.0026236647854842, -42542017598193e-17]],
  [554800, [22.599441488648, -24.508879898306, -14.484045731468], [0.0025454108304806, 0.0014917058755191, -30243665086079e-17]],
  [584e3, [35.877864013014, 33.894226366071, -0.224524636277], [-0.0012941245730845, 0.0014560427668319, 84762160640137e-17]],
  [613200, [-21.538149762417, 28.204068269761, 15.321973799534], [-0.001731211740901, -0.0021939631314577, -1631691327518e-16]],
  [642400, [13.971521374415, -28.339941764789, -13.083792871886], [0.0029334630526035, 91860931752944e-17, -59939422488627e-17]],
  [671600, [39.526942044143, 28.93989736011, -2.872799527539], [-0.0010068481658095, 0.001702113288809, 83578230511981e-17]],
  [700800, [-15.576200701394, 34.399412961275, 15.466033737854], [-0.0020098814612884, -0.0017191109825989, 70414782780416e-18]],
  [73e4, [4.24325283709, -30.118201690825, -10.707441231349], [0.0031725847067411, 1609846120227e-16, -90672150593868e-17]]
];
class U {
  constructor(e, t, r) {
    this.x = e, this.y = t, this.z = r;
  }
  clone() {
    return new U(this.x, this.y, this.z);
  }
  ToAstroVector(e) {
    return new R(this.x, this.y, this.z, e);
  }
  static zero() {
    return new U(0, 0, 0);
  }
  quadrature() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  add(e) {
    return new U(this.x + e.x, this.y + e.y, this.z + e.z);
  }
  sub(e) {
    return new U(this.x - e.x, this.y - e.y, this.z - e.z);
  }
  incr(e) {
    this.x += e.x, this.y += e.y, this.z += e.z;
  }
  decr(e) {
    this.x -= e.x, this.y -= e.y, this.z -= e.z;
  }
  mul(e) {
    return new U(e * this.x, e * this.y, e * this.z);
  }
  div(e) {
    return new U(this.x / e, this.y / e, this.z / e);
  }
  mean(e) {
    return new U((this.x + e.x) / 2, (this.y + e.y) / 2, (this.z + e.z) / 2);
  }
  neg() {
    return new U(-this.x, -this.y, -this.z);
  }
}
class x0 {
  constructor(e, t, r) {
    this.tt = e, this.r = t, this.v = r;
  }
  clone() {
    return new x0(this.tt, this.r, this.v);
  }
  sub(e) {
    return new x0(this.tt, this.r.sub(e.r), this.v.sub(e.v));
  }
}
function O1(n) {
  let [e, [t, r, s], [i, a, o]] = n;
  return new x0(e, new U(t, r, s), new U(i, a, o));
}
function Ne(n, e, t, r) {
  const s = r / (r + Wt), i = k1(N0[t], e);
  return n.r.incr(i.r.mul(s)), n.v.incr(i.v.mul(s)), i;
}
function B0(n, e, t) {
  const r = t.sub(n), s = r.quadrature();
  return r.mul(e / (s * Math.sqrt(s)));
}
class Lt {
  constructor(e) {
    let t = new x0(e, new U(0, 0, 0), new U(0, 0, 0));
    this.Jupiter = Ne(t, e, O.Jupiter, mt), this.Saturn = Ne(t, e, O.Saturn, yt), this.Uranus = Ne(t, e, O.Uranus, gt), this.Neptune = Ne(t, e, O.Neptune, wt), this.Jupiter.r.decr(t.r), this.Jupiter.v.decr(t.v), this.Saturn.r.decr(t.r), this.Saturn.v.decr(t.v), this.Uranus.r.decr(t.r), this.Uranus.v.decr(t.v), this.Neptune.r.decr(t.r), this.Neptune.v.decr(t.v), this.Sun = new x0(e, t.r.mul(-1), t.v.mul(-1));
  }
  Acceleration(e) {
    let t = B0(e, Wt, this.Sun.r);
    return t.incr(B0(e, mt, this.Jupiter.r)), t.incr(B0(e, yt, this.Saturn.r)), t.incr(B0(e, gt, this.Uranus.r)), t.incr(B0(e, wt, this.Neptune.r)), t;
  }
}
class He {
  constructor(e, t, r, s) {
    this.tt = e, this.r = t, this.v = r, this.a = s;
  }
  clone() {
    return new He(this.tt, this.r.clone(), this.v.clone(), this.a.clone());
  }
}
class _r {
  constructor(e, t) {
    this.bary = e, this.grav = t;
  }
}
function _e(n, e, t, r) {
  return new U(e.x + n * (t.x + n * r.x / 2), e.y + n * (t.y + n * r.y / 2), e.z + n * (t.z + n * r.z / 2));
}
function On(n, e, t) {
  return new U(e.x + n * t.x, e.y + n * t.y, e.z + n * t.z);
}
function Dt(n, e) {
  const t = n - e.tt, r = new Lt(n), s = _e(t, e.r, e.v, e.a), i = r.Acceleration(s).mean(e.a), a = _e(t, e.r, e.v, i), o = e.v.add(i.mul(t)), u = r.Acceleration(a), l = new He(n, a, o, u);
  return new _r(r, l);
}
const D1 = [];
function Ur(n, e) {
  const t = Math.floor(n);
  return t < 0 ? 0 : t >= e ? e - 1 : t;
}
function Et(n) {
  const e = O1(n), t = new Lt(e.tt), r = e.r.add(t.Sun.r), s = e.v.add(t.Sun.v), i = t.Acceleration(r), a = new He(e.tt, r, s, i);
  return new _r(t, a);
}
function E1(n, e) {
  const t = I0[0][0];
  if (e < t || e > I0[Ot - 1][0])
    return null;
  const r = Ur((e - t) / M1, Ot - 1);
  if (!n[r]) {
    const i = n[r] = [];
    i[0] = Et(I0[r]).grav, i[l0 - 1] = Et(I0[r + 1]).grav;
    let a, o = i[0].tt;
    for (a = 1; a < l0 - 1; ++a)
      i[a] = Dt(o += $0, i[a - 1]).grav;
    o = i[l0 - 1].tt;
    var s = [];
    for (s[l0 - 1] = i[l0 - 1], a = l0 - 2; a > 0; --a)
      s[a] = Dt(o -= $0, s[a + 1]).grav;
    for (a = l0 - 2; a > 0; --a) {
      const u = a / (l0 - 1);
      i[a].r = i[a].r.mul(1 - u).add(s[a].r.mul(u)), i[a].v = i[a].v.mul(1 - u).add(s[a].v.mul(u)), i[a].a = i[a].a.mul(1 - u).add(s[a].a.mul(u));
    }
  }
  return n[r];
}
function Dn(n, e, t) {
  let r = Et(n);
  const s = Math.ceil((e - r.grav.tt) / t);
  for (let i = 0; i < s; ++i)
    r = Dt(i + 1 === s ? e : r.grav.tt + t, r.grav);
  return r;
}
function N1(n, e) {
  let t, r, s;
  const i = E1(D1, n.tt);
  if (i) {
    const a = Ur((n.tt - i[0].tt) / $0, l0 - 1), o = i[a], u = i[a + 1], l = o.a.mean(u.a), c = _e(n.tt - o.tt, o.r, o.v, l), f = On(n.tt - o.tt, o.v, l), y = _e(n.tt - u.tt, u.r, u.v, l), d = On(n.tt - u.tt, u.v, l), w = (n.tt - o.tt) / $0;
    t = c.mul(1 - w).add(y.mul(w)), r = f.mul(1 - w).add(d.mul(w));
  } else {
    let a;
    n.tt < I0[0][0] ? a = Dn(I0[0], n.tt, -$0) : a = Dn(I0[Ot - 1], n.tt, +$0), t = a.grav.r, r = a.grav.v, s = a.bary;
  }
  return s || (s = new Lt(n.tt)), t = t.sub(s.Sun.r), r = r.sub(s.Sun.v), new w1(t.x, t.y, t.z, r.x, r.y, r.z, n);
}
function re(n, e) {
  var t = i0(e);
  if (n in N0)
    return ne(N0[n], t);
  if (n === O.Pluto) {
    const a = N1(t);
    return new R(a.x, a.y, a.z, t);
  }
  if (n === O.Sun)
    return new R(0, 0, 0, t);
  if (n === O.Moon) {
    var r = ne(N0.Earth, t), s = pt(t);
    return new R(r.x + s.x, r.y + s.y, r.z + s.z, t);
  }
  if (n === O.EMB) {
    const a = ne(N0.Earth, t), o = pt(t), u = 1 + r1;
    return new R(a.x + o.x / u, a.y + o.y / u, a.z + o.z / u, t);
  }
  if (n === O.SSB)
    return v1(t);
  const i = Vr(n);
  if (i) {
    const a = new S1(i.dec, 15 * i.ra, i.dist);
    return z1(a, t);
  }
  throw `HelioVector: Unknown body "${n}"`;
}
function I1(n, e) {
  let t = e, r = 0;
  for (let s = 0; s < 10; ++s) {
    const i = n(t), a = i.Length() / Cr;
    if (a > 1)
      throw "Object is too distant for light-travel solver.";
    const o = e.AddDays(-a);
    if (r = Math.abs(o.tt - t.tt), r < 1e-9)
      return i;
    t = o;
  }
  throw `Light-travel time solver did not converge: dt = ${r}`;
}
class x1 {
  constructor(e, t, r, s) {
    this.observerBody = e, this.targetBody = t, this.aberration = r, this.observerPos = s;
  }
  Position(e) {
    this.aberration && (this.observerPos = re(this.observerBody, e));
    const t = re(this.targetBody, e);
    return new R(t.x - this.observerPos.x, t.y - this.observerPos.y, t.z - this.observerPos.z, e);
  }
}
function b1(n, e, t, r) {
  const s = i0(n);
  if (Vr(t)) {
    const o = re(t, s), u = re(e, s);
    return new R(o.x - u.x, o.y - u.y, o.z - u.z, s);
  }
  let i;
  i = re(e, s);
  const a = new x1(e, t, r, i);
  return I1((o) => a.Position(o), s);
}
function En(n, e, t) {
  const r = i0(e);
  switch (n) {
    case O.Earth:
      return new R(0, 0, 0, r);
    case O.Moon:
      return pt(r);
    default:
      const s = b1(r, O.Earth, n, t);
      return s.t = r, s;
  }
}
function F1(n, e, t, r, s) {
  let i = (s + t) / 2 - r, a = (s - t) / 2, o = r, u;
  if (i == 0) {
    if (a == 0 || (u = -o / a, u < -1 || u > 1))
      return null;
  } else {
    let f = a * a - 4 * i * o;
    if (f <= 0)
      return null;
    let y = Math.sqrt(f), d = (-a + y) / (2 * i), w = (-a - y) / (2 * i);
    if (-1 <= d && d <= 1) {
      if (-1 <= w && w <= 1)
        return null;
      u = d;
    } else if (-1 <= w && w <= 1)
      u = w;
    else
      return null;
  }
  let l = n + u * e, c = (2 * i * u + a) / e;
  return { t: l, df_dt: c };
}
function $r(n, e, t, r) {
  const s = s0(r && r.dt_tolerance_seconds || 1), i = Math.abs(s / e1);
  let a = r && r.init_f1 || n(e), o = r && r.init_f2 || n(t), u = NaN, l = 0, c = r && r.iter_limit || 20, f = !0;
  for (; ; ) {
    if (++l > c)
      throw "Excessive iteration in Search()";
    let y = l1(e, t, 0.5), d = y.ut - e.ut;
    if (Math.abs(d) < i)
      return y;
    f ? u = n(y) : f = !0;
    let w = F1(y.ut, t.ut - y.ut, a, u, o);
    if (w) {
      let T = i0(w.t), E = n(T);
      if (w.df_dt !== 0) {
        if (Math.abs(E / w.df_dt) < i)
          return T;
        let x = 1.2 * Math.abs(E / w.df_dt);
        if (x < d / 10) {
          let F = T.AddDays(-x), z = T.AddDays(+x);
          if ((F.ut - e.ut) * (F.ut - t.ut) < 0 && (z.ut - e.ut) * (z.ut - t.ut) < 0) {
            let P = n(F), H = n(z);
            if (P < 0 && H >= 0) {
              a = P, o = H, e = F, t = z, u = E, f = !1;
              continue;
            }
          }
        }
      }
    }
    if (a < 0 && u >= 0) {
      t = y, o = u;
      continue;
    }
    if (u < 0 && o >= 0) {
      e = y, a = u;
      continue;
    }
    return null;
  }
}
function Zr(n) {
  let e = n;
  for (; e <= -180; )
    e += 360;
  for (; e > 180; )
    e -= 360;
  return e;
}
function C1(n) {
  for (; n < 0; )
    n += 360;
  for (; n >= 360; )
    n -= 360;
  return n;
}
function V1(n, e, t) {
  function r(a) {
    let o = T1(a);
    return Zr(o.elon - n);
  }
  s0(n), s0(t);
  let s = i0(e), i = s.AddDays(t);
  return $r(r, s, i, { dt_tolerance_seconds: 0.01 });
}
function A1(n, e, t) {
  if (n === O.Earth || e === O.Earth)
    throw "The Earth does not have a longitude as seen from itself.";
  const r = i0(t), s = En(n, r, !1), i = Mn(s), a = En(e, r, !1), o = Mn(a);
  return C1(i.elon - o.elon);
}
function W1(n) {
  return A1(O.Moon, O.Sun, n);
}
function Q0(n, e, t) {
  function r(y) {
    let d = W1(y);
    return Zr(d - n);
  }
  s0(n), s0(t);
  const s = 1.5, i = i0(e);
  let a = r(i), o, u, l;
  if (t < 0) {
    if (a < 0 && (a += 360), o = -(kn * a) / 360, l = o + s, l < t)
      return null;
    u = Math.max(t, o - s);
  } else {
    if (a > 0 && (a -= 360), o = -(kn * a) / 360, u = o - s, u > t)
      return null;
    l = Math.min(t, o + s);
  }
  const c = i.AddDays(u), f = i.AddDays(l);
  return $r(r, c, f, { dt_tolerance_seconds: 0.1 });
}
var Nn;
(function(n) {
  n[n.Pericenter = 0] = "Pericenter", n[n.Apocenter = 1] = "Apocenter";
})(Nn || (Nn = {}));
function z1(n, e) {
  e = i0(e);
  const t = n.lat * v0, r = n.lon * v0, s = n.dist * Math.cos(t);
  return new R(s * Math.cos(r), s * Math.sin(r), n.dist * Math.sin(t), e);
}
var In;
(function(n) {
  n.Penumbral = "penumbral", n.Partial = "partial", n.Annular = "annular", n.Total = "total";
})(In || (In = {}));
var xn;
(function(n) {
  n[n.Invalid = 0] = "Invalid", n[n.Ascending = 1] = "Ascending", n[n.Descending = -1] = "Descending";
})(xn || (xn = {}));
I.throwOnInvalid = !0;
I.defaultZone = Z.parseSpecifier("UTC+8");
function L0(n) {
  if (n == null) throw "null";
  return n;
}
function Rr(n) {
  const e = {};
  return (t) => e.hasOwnProperty(t) ? e[t] : e[t] = n(t);
}
const ot = [..."一二三四五六七八九"], L1 = [
  ...ot.map((n) => "初" + n),
  "初十",
  ...ot.map((n) => "十" + n),
  "二十",
  ...ot.map((n) => "廿" + n),
  "三十"
], _1 = [..."正二三四五六七八九十", "十一", "十二"], U1 = [
  "春分",
  "清明",
  "谷雨",
  "立夏",
  "小满",
  "芒种",
  "夏至",
  "小暑",
  "大暑",
  "立秋",
  "处暑",
  "白露",
  "秋分",
  "寒露",
  "霜降",
  "立冬",
  "小雪",
  "大雪",
  "冬至",
  "小寒",
  "大寒",
  "立春",
  "雨水",
  "惊蛰"
], bn = 270 / 15, Ue = Rr((n) => {
  let e = new k0(g.fromObject({
    year: n,
    month: 3,
    day: 10
  }).toJSDate());
  return Array.from({ length: 24 }, (t, r) => {
    const s = L0(V1(r * 15, e, 30));
    return e = e.AddDays(15), s;
  });
}), $1 = (n) => {
  const e = Ue(n - 1)[bn], t = +Ue(n)[bn].date, r = [];
  let s = L0(Q0(0, e.AddDays(-30), 30));
  for (; ; ) {
    const i = g.fromJSDate(s.date).startOf("day");
    if (+i > t) break;
    const a = L0(Q0(90, s, 10)), o = L0(Q0(180, a, 10)), u = L0(Q0(270, o, 10));
    r.push({ 朔日: i, 朔: s, 上弦: a, 望: o, 下弦: u }), s = L0(Q0(0, u, 10));
  }
  return r.splice(0, r.findIndex(({ 朔日: i }) => +i > +e.date) - 1), r;
}, Fn = Rr((n) => {
  const e = Ue(n - 1).concat(Ue(n)), t = $1(n);
  let r = t.length == 14, s = 10, i = e.findIndex((a) => +a.date >= +t[0].朔日);
  return Array.from({ length: t.length - 1 }, (a, o) => {
    const u = t[o], l = t[o + 1], c = [
      ["朔", g.fromJSDate(u.朔.date)],
      ["上弦", g.fromJSDate(u.上弦.date)],
      ["望", g.fromJSDate(u.望.date)],
      ["下弦", g.fromJSDate(u.下弦.date)]
    ];
    let f = r;
    for (; i < e.length && !(+e[i].date >= +l.朔日); i++)
      f && (f = i % 2 != 0), c.push([U1[i % 24], g.fromJSDate(e[i].date)]);
    return r && (r = !f), f || s++, c.sort(([, y], [, d]) => +y - +d), {
      月份: (s - 1) % 12,
      是闰月: f,
      事件: c,
      朔日: u.朔日,
      下月朔日: l.朔日
    };
  });
}), Z1 = (n) => Fn(n).filter(({ 月份: e }) => e < 10).concat(Fn(n + 1).filter(({ 月份: e }) => e >= 10)).map(({ 月份: e, 是闰月: t, 事件: r, 朔日: s, 下月朔日: i }) => {
  const a = (t ? "闰" : "") + _1[e] + "月", o = Math.round(i.diff(s, "day").days);
  let u = 0;
  const l = [];
  let c = Array(s.weekday - 1).fill(void 0);
  for (let f = 0; f < o; f++) {
    c.length == 7 && (l.push(c), c = []);
    const y = [], d = s.plus({ day: f });
    for (; u < r.length && r[u][1].hasSame(d, "day"); u++)
      y.push(r[u][0]);
    c.push({ 日: f, 名字: L1[f], 事件: y, 日期: d });
  }
  return c.length = 7, l.push(c.fill(void 0, c.length)), {
    名字: a,
    每周: l,
    大小: o == 29 ? "小" : "大",
    事件: r,
    朔日: s,
    下月朔日: i
  };
}), R1 = ["value"], P1 = { key: 0 }, q1 = {
  key: 1,
  class: "table"
}, H1 = { style: { "text-align": "center" } }, Y1 = { colspan: "7" }, J1 = /* @__PURE__ */ Hr({
  __name: "Main",
  setup(n) {
    const e = Yr(g.now().year), t = Gr(() => {
      try {
        return { kind: "ok", value: Z1(e.value) };
      } catch (i) {
        return { kind: "err", value: i };
      }
    }), r = { ...g.DATETIME_MED_WITH_SECONDS, era: "short" }, s = { ...g.DATE_MED, era: "short" };
    return (i, a) => (Y(), G(m0, null, [
      a[5] || (a[5] = we(" 年份：")),
      D("input", {
        type: "number",
        step: "1",
        value: e.value,
        onChange: a[0] || (a[0] = (o) => e.value = ~~o.target.value)
      }, null, 40, R1),
      a[6] || (a[6] = we("（公元前1年为0，公元前2年为-1，以此类推） ")),
      a[7] || (a[7] = D("hr", null, null, -1)),
      t.value.kind == "err" ? (Y(), G("p", P1, "计算出错：" + r0(t.value.value), 1)) : (Y(), G("div", q1, [
        D("table", H1, [
          D("tbody", null, [
            a[4] || (a[4] = D("tr", null, [
              D("td", null, [
                D("strong", null, "周一")
              ]),
              D("td", null, [
                D("strong", null, "周二")
              ]),
              D("td", null, [
                D("strong", null, "周三")
              ]),
              D("td", null, [
                D("strong", null, "周四")
              ]),
              D("td", null, [
                D("strong", null, "周五")
              ]),
              D("td", null, [
                D("strong", null, "周六")
              ]),
              D("td", null, [
                D("strong", null, "周日")
              ])
            ], -1)),
            (Y(!0), G(m0, null, Se(t.value.value, (o) => (Y(), G(m0, null, [
              D("tr", null, [
                D("td", Y1, [
                  D("h3", null, r0(o.名字) + " " + r0(o.大小), 1),
                  D("small", null, [
                    we(r0(o.朔日.toLocaleString(s)) + " 至 " + r0(o.下月朔日.minus({ day: 1 }).toLocaleString(s)), 1),
                    a[2] || (a[2] = D("br", null, null, -1)),
                    (Y(!0), G(m0, null, Se(o.事件, (u) => (Y(), G(m0, null, [
                      we(r0(u[0]) + "：" + r0(u[1].toLocaleString(r)), 1),
                      a[1] || (a[1] = D("br", null, null, -1))
                    ], 64))), 256))
                  ])
                ])
              ]),
              (Y(!0), G(m0, null, Se(o.每周, (u) => (Y(), G("tr", null, [
                (Y(!0), G(m0, null, Se(u, (l) => (Y(), G("td", null, [
                  l ? (Y(), G(m0, { key: 0 }, [
                    D("strong", null, r0(l.名字), 1),
                    a[3] || (a[3] = D("br", null, null, -1)),
                    D("small", null, r0(l.日期.day) + " " + r0(l.事件.join(" ")), 1)
                  ], 64)) : Jr("", !0)
                ]))), 256))
              ]))), 256))
            ], 64))), 256))
          ])
        ])
      ]))
    ], 64));
  }
});
export {
  J1 as default
};
