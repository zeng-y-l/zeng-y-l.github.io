import { Fragment, createBlock, createCommentVNode, createElementBlock, createElementVNode, createTextVNode, createVNode, defineComponent, openBlock, ref, renderList, toDisplayString, unref, vModelSelect, vModelText, withDirectives, withModifiers } from "vue";
Object.freeze({ status: "aborted" });
function $constructor(p, H, U) {
	function W(U, W) {
		if (U._zod || Object.defineProperty(U, "_zod", {
			value: {
				def: W,
				constr: q,
				traits: /* @__PURE__ */ new Set()
			},
			enumerable: !1
		}), U._zod.traits.has(p)) return;
		U._zod.traits.add(p), H(U, W);
		let G = q.prototype, K = Object.keys(G);
		for (let p = 0; p < K.length; p++) {
			let H = K[p];
			H in U || (U[H] = G[H].bind(U));
		}
	}
	let G = U?.Parent ?? Object;
	class K extends G {}
	Object.defineProperty(K, "name", { value: p });
	function q(p) {
		var H;
		let G = U?.Parent ? new K() : this;
		W(G, p), (H = G._zod).deferred ?? (H.deferred = []);
		for (let p of G._zod.deferred) p();
		return G;
	}
	return Object.defineProperty(q, "init", { value: W }), Object.defineProperty(q, Symbol.hasInstance, { value: (H) => U?.Parent && H instanceof U.Parent ? !0 : H?._zod?.traits?.has(p) }), Object.defineProperty(q, "name", { value: p }), q;
}
var $ZodAsyncError = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
};
const globalConfig = {};
function config(p) {
	return p && Object.assign(globalConfig, p), globalConfig;
}
function getEnumValues(p) {
	let H = Object.values(p).filter((p) => typeof p == "number");
	return Object.entries(p).filter(([p, U]) => H.indexOf(+p) === -1).map(([p, H]) => H);
}
function jsonStringifyReplacer(p, H) {
	return typeof H == "bigint" ? H.toString() : H;
}
function cached(p) {
	return { get value() {
		{
			let H = p();
			return Object.defineProperty(this, "value", { value: H }), H;
		}
		throw Error("cached value already set");
	} };
}
function cleanRegex(p) {
	let H = p.startsWith("^") ? 1 : 0, U = p.endsWith("$") ? p.length - 1 : p.length;
	return p.slice(H, U);
}
var EVALUATING = Symbol("evaluating");
function defineLazy(p, H, U) {
	let W;
	Object.defineProperty(p, H, {
		get() {
			if (W !== EVALUATING) return W === void 0 && (W = EVALUATING, W = U()), W;
		},
		set(U) {
			Object.defineProperty(p, H, { value: U });
		},
		configurable: !0
	});
}
const captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (...p) => {};
function isObject(p) {
	return typeof p == "object" && !!p && !Array.isArray(p);
}
const propertyKeyTypes = new Set([
	"string",
	"number",
	"symbol"
]);
function escapeRegex(p) {
	return p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(p, H, U) {
	let W = new p._zod.constr(H ?? p._zod.def);
	return (!H || U?.parent) && (W._zod.parent = p), W;
}
function normalizeParams(p) {
	let H = p;
	if (!H) return {};
	if (typeof H == "string") return { error: () => H };
	if (H?.message !== void 0) {
		if (H?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		H.error = H.message;
	}
	return delete H.message, typeof H.error == "string" ? {
		...H,
		error: () => H.error
	} : H;
}
function optionalKeys(p) {
	return Object.keys(p).filter((H) => p[H]._zod.optin === "optional" && p[H]._zod.optout === "optional");
}
-Number.MAX_VALUE, Number.MAX_VALUE;
function aborted(p, H = 0) {
	if (p.aborted === !0) return !0;
	for (let U = H; U < p.issues.length; U++) if (p.issues[U]?.continue !== !0) return !0;
	return !1;
}
function prefixIssues(p, H) {
	return H.map((H) => {
		var U;
		return (U = H).path ?? (U.path = []), H.path.unshift(p), H;
	});
}
function unwrapMessage(p) {
	return typeof p == "string" ? p : p?.message;
}
function finalizeIssue(p, H, U) {
	let W = {
		...p,
		path: p.path ?? []
	};
	return p.message || (W.message = unwrapMessage(p.inst?._zod.def?.error?.(p)) ?? unwrapMessage(H?.error?.(p)) ?? unwrapMessage(U.customError?.(p)) ?? unwrapMessage(U.localeError?.(p)) ?? "Invalid input"), delete W.inst, delete W.continue, H?.reportInput || delete W.input, W;
}
var initializer = (p, H) => {
	p.name = "$ZodError", Object.defineProperty(p, "_zod", {
		value: p._zod,
		enumerable: !1
	}), Object.defineProperty(p, "issues", {
		value: H,
		enumerable: !1
	}), p.message = JSON.stringify(H, jsonStringifyReplacer, 2), Object.defineProperty(p, "toString", {
		value: () => p.message,
		enumerable: !1
	});
};
const $ZodError = $constructor("$ZodError", initializer), $ZodRealError = $constructor("$ZodError", initializer, { Parent: Error }), parse = /* @__PURE__ */ ((p) => (H, U, W, G) => {
	let K = W ? Object.assign(W, { async: !1 }) : { async: !1 }, q = H._zod.run({
		value: U,
		issues: []
	}, K);
	if (q instanceof Promise) throw new $ZodAsyncError();
	if (q.issues.length) {
		let H = new (G?.Err ?? p)(q.issues.map((p) => finalizeIssue(p, K, config())));
		throw captureStackTrace(H, G?.callee), H;
	}
	return q.value;
})($ZodRealError), parseAsync = /* @__PURE__ */ ((p) => async (H, U, W, G) => {
	let K = W ? Object.assign(W, { async: !0 }) : { async: !0 }, q = H._zod.run({
		value: U,
		issues: []
	}, K);
	if (q instanceof Promise && (q = await q), q.issues.length) {
		let H = new (G?.Err ?? p)(q.issues.map((p) => finalizeIssue(p, K, config())));
		throw captureStackTrace(H, G?.callee), H;
	}
	return q.value;
})($ZodRealError), safeParse = /* @__PURE__ */ ((p) => (H, U, W) => {
	let G = W ? {
		...W,
		async: !1
	} : { async: !1 }, K = H._zod.run({
		value: U,
		issues: []
	}, G);
	if (K instanceof Promise) throw new $ZodAsyncError();
	return K.issues.length ? {
		success: !1,
		error: new (p ?? $ZodError)(K.issues.map((p) => finalizeIssue(p, G, config())))
	} : {
		success: !0,
		data: K.value
	};
})($ZodRealError), safeParseAsync = /* @__PURE__ */ ((p) => async (H, U, W) => {
	let G = W ? Object.assign(W, { async: !0 }) : { async: !0 }, K = H._zod.run({
		value: U,
		issues: []
	}, G);
	return K instanceof Promise && (K = await K), K.issues.length ? {
		success: !1,
		error: new p(K.issues.map((p) => finalizeIssue(p, G, config())))
	} : {
		success: !0,
		data: K.value
	};
})($ZodRealError);
var dateSource = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
`${dateSource}`;
function timeSource(p) {
	let H = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof p.precision == "number" ? p.precision === -1 ? `${H}` : p.precision === 0 ? `${H}:[0-5]\\d` : `${H}:[0-5]\\d\\.\\d{${p.precision}}` : `${H}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function datetime$1(p) {
	let H = timeSource({ precision: p.precision }), U = ["Z"];
	p.local && U.push(""), p.offset && U.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let W = `${H}(?:${U.join("|")})`;
	return /* @__PURE__ */ RegExp(`^${dateSource}T(?:${W})$`);
}
const string$1 = (p) => {
	let H = p ? `[\\s\\S]{${p?.minimum ?? 0},${p?.maximum ?? ""}}` : "[\\s\\S]*";
	return /* @__PURE__ */ RegExp(`^${H}$`);
}, number$1 = /^-?\d+(?:\.\d+)?$/, $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (p, H) => {
	var U;
	p._zod ??= {}, p._zod.def = H, (U = p._zod).onattach ?? (U.onattach = []);
}), $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (p, H) => {
	var U, W;
	$ZodCheck.init(p, H), p._zod.onattach.push((p) => {
		let U = p._zod.bag;
		U.format = H.format, H.pattern && (U.patterns ??= /* @__PURE__ */ new Set(), U.patterns.add(H.pattern));
	}), H.pattern ? (U = p._zod).check ?? (U.check = (U) => {
		H.pattern.lastIndex = 0, !H.pattern.test(U.value) && U.issues.push({
			origin: "string",
			code: "invalid_format",
			format: H.format,
			input: U.value,
			...H.pattern ? { pattern: H.pattern.toString() } : {},
			inst: p,
			continue: !H.abort
		});
	}) : (W = p._zod).check ?? (W.check = () => {});
}), version = {
	major: 4,
	minor: 3,
	patch: 6
}, $ZodType = /* @__PURE__ */ $constructor("$ZodType", (p, H) => {
	var U;
	p ??= {}, p._zod.def = H, p._zod.bag = p._zod.bag || {}, p._zod.version = version;
	let W = [...p._zod.def.checks ?? []];
	p._zod.traits.has("$ZodCheck") && W.unshift(p);
	for (let H of W) for (let U of H._zod.onattach) U(p);
	if (W.length === 0) (U = p._zod).deferred ?? (U.deferred = []), p._zod.deferred?.push(() => {
		p._zod.run = p._zod.parse;
	});
	else {
		let H = (p, H, U) => {
			let W = aborted(p), G;
			for (let K of H) {
				if (K._zod.def.when) {
					if (!K._zod.def.when(p)) continue;
				} else if (W) continue;
				let H = p.issues.length, q = K._zod.check(p);
				if (q instanceof Promise && U?.async === !1) throw new $ZodAsyncError();
				if (G || q instanceof Promise) G = (G ?? Promise.resolve()).then(async () => {
					await q, p.issues.length !== H && (W ||= aborted(p, H));
				});
				else {
					if (p.issues.length === H) continue;
					W ||= aborted(p, H);
				}
			}
			return G ? G.then(() => p) : p;
		}, U = (U, G, K) => {
			if (aborted(U)) return U.aborted = !0, U;
			let q = H(G, W, K);
			if (q instanceof Promise) {
				if (K.async === !1) throw new $ZodAsyncError();
				return q.then((H) => p._zod.parse(H, K));
			}
			return p._zod.parse(q, K);
		};
		p._zod.run = (G, K) => {
			if (K.skipChecks) return p._zod.parse(G, K);
			if (K.direction === "backward") {
				let H = p._zod.parse({
					value: G.value,
					issues: []
				}, {
					...K,
					skipChecks: !0
				});
				return H instanceof Promise ? H.then((p) => U(p, G, K)) : U(H, G, K);
			}
			let q = p._zod.parse(G, K);
			if (q instanceof Promise) {
				if (K.async === !1) throw new $ZodAsyncError();
				return q.then((p) => H(p, W, K));
			}
			return H(q, W, K);
		};
	}
	defineLazy(p, "~standard", () => ({
		validate: (H) => {
			try {
				let U = safeParse(p, H);
				return U.success ? { value: U.data } : { issues: U.error?.issues };
			} catch {
				return safeParseAsync(p, H).then((p) => p.success ? { value: p.data } : { issues: p.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), $ZodString = /* @__PURE__ */ $constructor("$ZodString", (p, H) => {
	$ZodType.init(p, H), p._zod.pattern = [...p?._zod.bag?.patterns ?? []].pop() ?? string$1(p._zod.bag), p._zod.parse = (U, W) => {
		if (H.coerce) try {
			U.value = String(U.value);
		} catch {}
		return typeof U.value == "string" || U.issues.push({
			expected: "string",
			code: "invalid_type",
			input: U.value,
			inst: p
		}), U;
	};
}), $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (p, H) => {
	$ZodCheckStringFormat.init(p, H), $ZodString.init(p, H);
}), $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (p, H) => {
	H.pattern ??= datetime$1(H), $ZodStringFormat.init(p, H);
}), $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (p, H) => {
	$ZodType.init(p, H), p._zod.pattern = p._zod.bag.pattern ?? number$1, p._zod.parse = (U, W) => {
		if (H.coerce) try {
			U.value = Number(U.value);
		} catch {}
		let G = U.value;
		if (typeof G == "number" && !Number.isNaN(G) && Number.isFinite(G)) return U;
		let K = typeof G == "number" ? Number.isNaN(G) ? "NaN" : Number.isFinite(G) ? void 0 : "Infinity" : void 0;
		return U.issues.push({
			expected: "number",
			code: "invalid_type",
			input: G,
			inst: p,
			...K ? { received: K } : {}
		}), U;
	};
});
function handleArrayResult(p, H, U) {
	p.issues.length && H.issues.push(...prefixIssues(U, p.issues)), H.value[U] = p.value;
}
const $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (p, H) => {
	$ZodType.init(p, H), p._zod.parse = (U, W) => {
		let G = U.value;
		if (!Array.isArray(G)) return U.issues.push({
			expected: "array",
			code: "invalid_type",
			input: G,
			inst: p
		}), U;
		U.value = Array(G.length);
		let K = [];
		for (let p = 0; p < G.length; p++) {
			let q = G[p], J = H.element._zod.run({
				value: q,
				issues: []
			}, W);
			J instanceof Promise ? K.push(J.then((H) => handleArrayResult(H, U, p))) : handleArrayResult(J, U, p);
		}
		return K.length ? Promise.all(K).then(() => U) : U;
	};
});
function handlePropertyResult(p, H, U, W, G) {
	if (p.issues.length) {
		if (G && !(U in W)) return;
		H.issues.push(...prefixIssues(U, p.issues));
	}
	p.value === void 0 ? U in W && (H.value[U] = void 0) : H.value[U] = p.value;
}
function normalizeDef(p) {
	let H = Object.keys(p.shape);
	for (let U of H) if (!p.shape?.[U]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${U}": expected a Zod schema`);
	let U = optionalKeys(p.shape);
	return {
		...p,
		keys: H,
		keySet: new Set(H),
		numKeys: H.length,
		optionalKeys: new Set(U)
	};
}
function handleCatchall(p, H, U, W, G, K) {
	let q = [], J = G.keySet, Y = G.catchall._zod, X = Y.def.type, Z = Y.optout === "optional";
	for (let G in H) {
		if (J.has(G)) continue;
		if (X === "never") {
			q.push(G);
			continue;
		}
		let K = Y.run({
			value: H[G],
			issues: []
		}, W);
		K instanceof Promise ? p.push(K.then((p) => handlePropertyResult(p, U, G, H, Z))) : handlePropertyResult(K, U, G, H, Z);
	}
	return q.length && U.issues.push({
		code: "unrecognized_keys",
		keys: q,
		input: H,
		inst: K
	}), p.length ? Promise.all(p).then(() => U) : U;
}
const $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (p, H) => {
	if ($ZodType.init(p, H), !Object.getOwnPropertyDescriptor(H, "shape")?.get) {
		let p = H.shape;
		Object.defineProperty(H, "shape", { get: () => {
			let U = { ...p };
			return Object.defineProperty(H, "shape", { value: U }), U;
		} });
	}
	let U = cached(() => normalizeDef(H));
	defineLazy(p._zod, "propValues", () => {
		let p = H.shape, U = {};
		for (let H in p) {
			let W = p[H]._zod;
			if (W.values) {
				U[H] ?? (U[H] = /* @__PURE__ */ new Set());
				for (let p of W.values) U[H].add(p);
			}
		}
		return U;
	});
	let W = isObject, G = H.catchall, K;
	p._zod.parse = (H, q) => {
		K ??= U.value;
		let J = H.value;
		if (!W(J)) return H.issues.push({
			expected: "object",
			code: "invalid_type",
			input: J,
			inst: p
		}), H;
		H.value = {};
		let Y = [], X = K.shape;
		for (let p of K.keys) {
			let U = X[p], W = U._zod.optout === "optional", G = U._zod.run({
				value: J[p],
				issues: []
			}, q);
			G instanceof Promise ? Y.push(G.then((U) => handlePropertyResult(U, H, p, J, W))) : handlePropertyResult(G, H, p, J, W);
		}
		return G ? handleCatchall(Y, J, H, q, U.value, p) : Y.length ? Promise.all(Y).then(() => H) : H;
	};
}), $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (p, H) => {
	$ZodType.init(p, H);
	let U = getEnumValues(H.entries), W = new Set(U);
	p._zod.values = W, p._zod.pattern = /* @__PURE__ */ RegExp(`^(${U.filter((p) => propertyKeyTypes.has(typeof p)).map((p) => typeof p == "string" ? escapeRegex(p) : p.toString()).join("|")})$`), p._zod.parse = (H, G) => {
		let K = H.value;
		return W.has(K) || H.issues.push({
			code: "invalid_value",
			values: U,
			input: K,
			inst: p
		}), H;
	};
}), $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (p, H) => {
	$ZodType.init(p, H), defineLazy(p._zod, "optin", () => H.innerType._zod.optin), defineLazy(p._zod, "optout", () => H.innerType._zod.optout), defineLazy(p._zod, "pattern", () => {
		let p = H.innerType._zod.pattern;
		return p ? /* @__PURE__ */ RegExp(`^(${cleanRegex(p.source)}|null)$`) : void 0;
	}), defineLazy(p._zod, "values", () => H.innerType._zod.values ? new Set([...H.innerType._zod.values, null]) : void 0), p._zod.parse = (p, U) => p.value === null ? p : H.innerType._zod.run(p, U);
});
var _a, $ZodRegistry = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(p, ...H) {
		let U = H[0];
		return this._map.set(p, U), U && typeof U == "object" && "id" in U && this._idmap.set(U.id, p), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(p) {
		let H = this._map.get(p);
		return H && typeof H == "object" && "id" in H && this._idmap.delete(H.id), this._map.delete(p), this;
	}
	get(p) {
		let H = p._zod.parent;
		if (H) {
			let U = { ...this.get(H) ?? {} };
			delete U.id;
			let W = {
				...U,
				...this._map.get(p)
			};
			return Object.keys(W).length ? W : void 0;
		}
		return this._map.get(p);
	}
	has(p) {
		return this._map.has(p);
	}
};
function registry() {
	return new $ZodRegistry();
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry()), globalThis.__zod_globalRegistry;
/* @__NO_SIDE_EFFECTS__ */
function _string(p, H) {
	return new p({
		type: "string",
		...normalizeParams(H)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoDateTime(p, H) {
	return new p({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...normalizeParams(H)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _number(p, H) {
	return new p({
		type: "number",
		checks: [],
		...normalizeParams(H)
	});
}
const ZodMiniType = /* @__PURE__ */ $constructor("ZodMiniType", (p, H) => {
	if (!p._zod) throw Error("Uninitialized schema in ZodMiniType.");
	$ZodType.init(p, H), p.def = H, p.type = H.type, p.parse = (H, U) => parse(p, H, U, { callee: p.parse }), p.safeParse = (H, U) => safeParse(p, H, U), p.parseAsync = async (H, U) => parseAsync(p, H, U, { callee: p.parseAsync }), p.safeParseAsync = async (H, U) => safeParseAsync(p, H, U), p.check = (...U) => p.clone({
		...H,
		checks: [...H.checks ?? [], ...U.map((p) => typeof p == "function" ? { _zod: {
			check: p,
			def: { check: "custom" },
			onattach: []
		} } : p)]
	}, { parent: !0 }), p.with = p.check, p.clone = (H, U) => clone(p, H, U), p.brand = () => p, p.register = ((H, U) => (H.add(p, U), p)), p.apply = (H) => H(p);
}), ZodMiniString = /* @__PURE__ */ $constructor("ZodMiniString", (p, H) => {
	$ZodString.init(p, H), ZodMiniType.init(p, H);
});
/* @__NO_SIDE_EFFECTS__ */
function string(p) {
	return /* @__PURE__ */ _string(ZodMiniString, p);
}
const ZodMiniStringFormat = /* @__PURE__ */ $constructor("ZodMiniStringFormat", (p, H) => {
	$ZodStringFormat.init(p, H), ZodMiniString.init(p, H);
}), ZodMiniNumber = /* @__PURE__ */ $constructor("ZodMiniNumber", (p, H) => {
	$ZodNumber.init(p, H), ZodMiniType.init(p, H);
});
/* @__NO_SIDE_EFFECTS__ */
function number(p) {
	return /* @__PURE__ */ _number(ZodMiniNumber, p);
}
const ZodMiniArray = /* @__PURE__ */ $constructor("ZodMiniArray", (p, H) => {
	$ZodArray.init(p, H), ZodMiniType.init(p, H);
});
/* @__NO_SIDE_EFFECTS__ */
function array(p, H) {
	return new ZodMiniArray({
		type: "array",
		element: p,
		...normalizeParams(H)
	});
}
const ZodMiniObject = /* @__PURE__ */ $constructor("ZodMiniObject", (p, H) => {
	$ZodObject.init(p, H), ZodMiniType.init(p, H), defineLazy(p, "shape", () => H.shape);
});
/* @__NO_SIDE_EFFECTS__ */
function object(p, H) {
	return new ZodMiniObject({
		type: "object",
		shape: p ?? {},
		...normalizeParams(H)
	});
}
const ZodMiniEnum = /* @__PURE__ */ $constructor("ZodMiniEnum", (p, H) => {
	$ZodEnum.init(p, H), ZodMiniType.init(p, H), p.options = Object.values(H.entries);
});
/* @__NO_SIDE_EFFECTS__ */
function _enum(p, H) {
	return new ZodMiniEnum({
		type: "enum",
		entries: Array.isArray(p) ? Object.fromEntries(p.map((p) => [p, p])) : p,
		...normalizeParams(H)
	});
}
const ZodMiniNullable = /* @__PURE__ */ $constructor("ZodMiniNullable", (p, H) => {
	$ZodNullable.init(p, H), ZodMiniType.init(p, H);
});
/* @__NO_SIDE_EFFECTS__ */
function nullable(p) {
	return new ZodMiniNullable({
		type: "nullable",
		innerType: p
	});
}
const ZodMiniISODateTime = /* @__PURE__ */ $constructor("ZodMiniISODateTime", (p, H) => {
	$ZodISODateTime.init(p, H), ZodMiniStringFormat.init(p, H);
});
/* @__NO_SIDE_EFFECTS__ */
function datetime(p) {
	return /* @__PURE__ */ _isoDateTime(ZodMiniISODateTime, p);
}
const item = /* @__PURE__ */ object({
	author: /* @__PURE__ */ string(),
	get children() {
		return /* @__PURE__ */ array(item);
	},
	created_at: /* @__PURE__ */ datetime(),
	id: /* @__PURE__ */ number(),
	text: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
	url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
	title: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
	points: /* @__PURE__ */ nullable(/* @__PURE__ */ number()),
	type: /* @__PURE__ */ _enum([
		"story",
		"comment",
		"job"
	])
}), request = async (p, H) => {
	let U = await (await fetch(`https://hn.algolia.com/api/v1/items/${p}`, { signal: H })).json();
	return item.parse(U);
};
var _hoisted_1$1 = { key: 0 }, _hoisted_2$1 = { key: 1 }, _hoisted_3$1 = ["href"], _hoisted_4$1 = { key: 2 }, _hoisted_5$1 = { key: 0 }, _hoisted_6 = ["href"], _hoisted_7 = ["href"], _hoisted_8 = ["innerHTML"], _hoisted_9 = { key: 4 }, RenderItem_default = /* @__PURE__ */ defineComponent({
	__name: "RenderItem",
	props: { item: {} },
	setup(H) {
		return (J, X) => (openBlock(), createElementBlock(Fragment, null, [
			H.item.title ? (openBlock(), createElementBlock("h3", _hoisted_1$1, toDisplayString(H.item.title), 1)) : createCommentVNode("", !0),
			H.item.url ? (openBlock(), createElementBlock("p", _hoisted_2$1, [createElementVNode("a", {
				href: H.item.url,
				target: "_blank"
			}, toDisplayString(H.item.url), 9, _hoisted_3$1)])) : createCommentVNode("", !0),
			H.item.author ? (openBlock(), createElementBlock("p", _hoisted_4$1, [
				H.item.points === null ? createCommentVNode("", !0) : (openBlock(), createElementBlock("span", _hoisted_5$1, toDisplayString(H.item.points) + " points | ", 1)),
				createElementVNode("a", { href: `https://news.ycombinator.com/user?id=${H.item.author}` }, toDisplayString(H.item.author), 9, _hoisted_6),
				X[0] ||= createTextVNode(" | ", -1),
				createElementVNode("a", { href: `https://news.ycombinator.com/item?id=${H.item.id}` }, toDisplayString(H.item.created_at), 9, _hoisted_7),
				H.item.children.length > 0 || H.item.type === "story" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(" | " + toDisplayString(H.item.children.length) + " 条评论", 1)], 64)) : createCommentVNode("", !0)
			])) : createCommentVNode("", !0),
			H.item.text ? (openBlock(), createElementBlock("div", {
				key: 3,
				innerHTML: H.item.text
			}, null, 8, _hoisted_8)) : createCommentVNode("", !0),
			H.item.children.length > 0 ? (openBlock(), createElementBlock("ul", _hoisted_9, [(openBlock(!0), createElementBlock(Fragment, null, renderList(H.item.children, (p) => (openBlock(), createElementBlock("li", { key: p.id }, [createVNode(RenderItem_default, { item: p }, null, 8, ["item"])]))), 128))])) : createCommentVNode("", !0)
		], 64));
	}
});
const itemToMarkdown = (p) => {
	let H = document.createElement("textarea"), U = (p, U) => (p.includes("<") && (p = p.replace(/<a href=['"]([^'"]*)['"] [^>]*>[^<]*<\/a>/gu, "&lt;$1&gt;").replace(/<\/?i>/gu, "*").replace(/<p>/gu, "\n\n").replace(/<[^>]*>/gu, "")), p.includes("&") && (H.innerHTML = p, p = H.value), p.replace(/(\n+)/g, "$1" + U)), W = (p, H) => {
		let G = (p) => {
			K === "" ? K = p : K += "\n\n" + H + p;
		}, K = "";
		p.title && G(`# ${p.title}`), p.url && G(p.url), p.author && G(`${p.author} | ${p.created_at}`), p.text && G(U(p.text, H));
		let q = H + "  ";
		for (let H of p.children) G("- " + W(H, q));
		return K;
	};
	return W(p, "");
};
var _hoisted_1 = { key: 0 }, _hoisted_2 = { key: 1 }, _hoisted_3 = { key: 2 }, _hoisted_4 = { key: 3 }, _hoisted_5 = ["value"], Main_default = /* @__PURE__ */ defineComponent({
	__name: "Main",
	setup(p) {
		let q = ref({ type: "idle" }), J = ref(""), Z = ref("html"), Q = () => {
			J.value = J.value.match(/\d+$/)?.[0] ?? "";
		}, $ = async (p) => {
			if (q.value.type === "loading" && q.value.controller.abort(), !p) {
				q.value = { type: "idle" };
				return;
			}
			let H = new AbortController();
			q.value = {
				type: "loading",
				controller: H
			};
			try {
				q.value = {
					type: "success",
					data: await request(p, H.signal)
				};
			} catch (p) {
				console.log(p), H.signal.aborted || (q.value = {
					type: "error",
					error: p
				});
			}
		};
		return (p, X) => (openBlock(), createElementBlock("div", null, [
			createElementVNode("form", { onSubmit: X[1] ||= withModifiers(() => $(J.value), ["prevent"]) }, [createElementVNode("div", null, [createElementVNode("label", null, [X[3] ||= createTextVNode(" ID： ", -1), withDirectives(createElementVNode("input", {
				"onUpdate:modelValue": X[0] ||= (p) => J.value = p,
				onChange: Q,
				placeholder: "请输入"
			}, null, 544), [[vModelText, J.value]])]), X[4] ||= createElementVNode("button", { type: "submit" }, "获取数据", -1)])], 32),
			createElementVNode("label", null, [X[6] ||= createTextVNode(" 渲染模式： ", -1), withDirectives(createElementVNode("select", { "onUpdate:modelValue": X[2] ||= (p) => Z.value = p }, [...X[5] ||= [createElementVNode("option", { value: "html" }, "渲染 HTML", -1), createElementVNode("option", { value: "markdown" }, "转为 Markdown", -1)]], 512), [[vModelSelect, Z.value]])]),
			q.value.type === "idle" ? (openBlock(), createElementBlock("p", _hoisted_1, "请输入 Hacker News 的 ID 或 URL 并点击「获取数据」")) : createCommentVNode("", !0),
			q.value.type === "loading" ? (openBlock(), createElementBlock("p", _hoisted_2, "加载中……")) : q.value.type === "error" ? (openBlock(), createElementBlock("p", _hoisted_3, "错误：" + toDisplayString(String(q.value.error) || "未知错误"), 1)) : q.value.type === "success" ? (openBlock(), createElementBlock("div", _hoisted_4, [Z.value === "html" ? (openBlock(), createBlock(RenderItem_default, {
				key: 0,
				item: q.value.data
			}, null, 8, ["item"])) : Z.value === "markdown" ? (openBlock(), createElementBlock("textarea", {
				key: 1,
				value: unref(itemToMarkdown)(q.value.data),
				readonly: ""
			}, null, 8, _hoisted_5)) : createCommentVNode("", !0)])) : createCommentVNode("", !0)
		]));
	}
});
export { Main_default as default };
