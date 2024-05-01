(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const lt=(e,t)=>e===t,j=Symbol("solid-proxy"),_e=Symbol("solid-track"),ee={equals:lt};let Ke=Je;const O=1,te=2,qe={owned:null,cleanups:null,context:null,owner:null};var g=null;let de=null,ot=null,_=null,b=null,E=null,ce=0;function ye(e,t){const n=_,r=g,s=e.length===0,i=t===void 0?r:t,l=s?qe:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=s?e:()=>e(()=>x(()=>ae(l)));g=l,_=null;try{return N(o,!0)}finally{_=n,g=r}}function k(e,t){t=t?Object.assign({},ee,t):ee;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),Ue(n,s));return[Ge.bind(n),r]}function ct(e,t,n){const r=ue(e,t,!0,O);B(r)}function m(e,t,n){const r=ue(e,t,!1,O);B(r)}function R(e,t,n){Ke=$t;const r=ue(e,t,!1,O);(!n||!n.render)&&(r.user=!0),E?E.push(r):B(r)}function T(e,t,n){n=n?Object.assign({},ee,n):ee;const r=ue(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,B(r),Ge.bind(r)}function me(e){return N(e,!1)}function x(e){if(_===null)return e();const t=_;_=null;try{return e()}finally{_=t}}function Q(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return l=>{let o;if(r){o=Array(e.length);for(let u=0;u<e.length;u++)o[u]=e[u]()}else o=e();if(i){i=!1;return}const c=x(()=>t(o,s,l));return s=o,c}}function Be(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function $e(){return _}function ut(){return g}function at(e,t){const n=g,r=_;g=e,_=null;try{return N(t,!0)}catch(s){ke(s)}finally{g=n,_=r}}function ft(e){const t=_,n=g;return Promise.resolve().then(()=>{_=t,g=n;let r;return N(e,!1),_=g=null,r?r.done:void 0})}const[dt,yr]=k(!1);function ht(){return[dt,ft]}function gt(e,t){const n=Symbol("context");return{id:n,Provider:wt(n),defaultValue:e}}function vt(e){return g&&g.context&&g.context[e.id]!==void 0?g.context[e.id]:e.defaultValue}function _t(e){const t=T(e),n=T(()=>be(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function Ge(){if(this.sources&&this.state)if(this.state===O)B(this);else{const e=b;b=null,N(()=>re(this),!1),b=e}if(_){const e=this.observers?this.observers.length:0;_.sources?(_.sources.push(this),_.sourceSlots.push(e)):(_.sources=[this],_.sourceSlots=[e]),this.observers?(this.observers.push(_),this.observerSlots.push(_.sources.length-1)):(this.observers=[_],this.observerSlots=[_.sources.length-1])}return this.value}function Ue(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&N(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],l=de&&de.running;l&&de.disposed.has(i),(l?!i.tState:!i.state)&&(i.pure?b.push(i):E.push(i),i.observers&&Ye(i)),l||(i.state=O)}if(b.length>1e6)throw b=[],new Error},!1)),t}function B(e){if(!e.fn)return;ae(e);const t=ce;yt(e,e.value,t)}function yt(e,t,n){let r;const s=g,i=_;_=g=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=O,e.owned&&e.owned.forEach(ae),e.owned=null),e.updatedAt=n+1,ke(l)}finally{_=i,g=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ue(e,r):e.value=r,e.updatedAt=n)}function ue(e,t,n,r=O,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:g?g.context:null,pure:n};return g===null||g!==qe&&(g.owned?g.owned.push(i):g.owned=[i]),i}function ne(e){if(e.state===0)return;if(e.state===te)return re(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ce);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===O)B(e);else if(e.state===te){const r=b;b=null,N(()=>re(e,t[0]),!1),b=r}}function N(e,t){if(b)return e();let n=!1;t||(b=[]),E?n=!0:E=[],ce++;try{const r=e();return mt(n),r}catch(r){n||(E=null),b=null,ke(r)}}function mt(e){if(b&&(Je(b),b=null),e)return;const t=E;E=null,t.length&&N(()=>Ke(t),!1)}function Je(e){for(let t=0;t<e.length;t++)ne(e[t])}function $t(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:ne(r)}for(t=0;t<n;t++)ne(e[t])}function re(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===O?r!==t&&(!r.updatedAt||r.updatedAt<ce)&&ne(r):s===te&&re(r,t)}}}function Ye(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=te,n.pure?b.push(n):E.push(n),n.observers&&Ye(n))}}function ae(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),l=n.observerSlots.pop();r<s.length&&(i.sourceSlots[l]=r,s[r]=i,n.observerSlots[r]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ae(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function bt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ke(e,t=g){throw bt(e)}function be(e){if(typeof e=="function"&&!e.length)return be(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=be(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function wt(e,t){return function(r){let s;return m(()=>s=x(()=>(g.context={...g.context,[e]:r.value},_t(()=>r.children))),void 0),s}}const Ee=Symbol("fallback");function Oe(e){for(let t=0;t<e.length;t++)e[t]()}function St(e,t,n={}){let r=[],s=[],i=[],l=[],o=0,c;return Be(()=>Oe(i)),()=>{const u=e()||[];return u[_e],x(()=>{if(u.length===0)return o!==0&&(Oe(i),i=[],r=[],s=[],o=0,l=[]),n.fallback&&(r=[Ee],s[0]=ye(v=>(i[0]=v,n.fallback())),o=1),s;for(r[0]===Ee&&(i[0](),i=[],r=[],s=[],o=0),c=0;c<u.length;c++)c<r.length&&r[c]!==u[c]?l[c](()=>u[c]):c>=r.length&&(s[c]=ye(a));for(;c<r.length;c++)i[c]();return o=l.length=i.length=u.length,r=u.slice(0),s=s.slice(0,o)});function a(v){i[c]=v;const[w,A]=k(u[c]);return l[c]=A,t(w,c)}}}function f(e,t){return x(()=>e(t||{}))}const xt=e=>`Stale read from <${e}>.`;function Te(e){const t="fallback"in e&&{fallback:()=>e.fallback};return T(St(()=>e.each,e.children,t||void 0))}function Ve(e){const t=e.keyed,n=T(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return T(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?x(()=>s(t?r:()=>{if(!x(n))throw xt("Show");return e.when})):s}return e.fallback},void 0,void 0)}function At(e,t,n){let r=n.length,s=t.length,i=r,l=0,o=0,c=t[s-1].nextSibling,u=null;for(;l<s||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===l){const a=i<r?o?n[o-1].nextSibling:n[i-o]:c;for(;o<i;)e.insertBefore(n[o++],a)}else if(i===o)for(;l<s;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],a),t[s]=n[i]}else{if(!u){u=new Map;let v=o;for(;v<i;)u.set(n[v],v++)}const a=u.get(t[l]);if(a!=null)if(o<a&&a<i){let v=l,w=1,A;for(;++v<s&&v<i&&!((A=u.get(t[v]))==null||A!==a+w);)w++;if(w>a-o){const $=t[l];for(;o<a;)e.insertBefore(n[o++],$)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Pe="_$DX_DELEGATE";function Ct(e,t,n,r={}){let s;return ye(i=>{s=i,t===document?e():d(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function y(e,t,n){let r;const s=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},i=t?()=>x(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return i.cloneNode=i,i}function Z(e,t=window.document){const n=t[Pe]||(t[Pe]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,kt))}}function h(e,t){t==null?e.removeAttribute("class"):e.className=t}function p(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=i=>s.call(e,n[1],i))}else e.addEventListener(t,n)}function fe(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let i,l;for(i=0,l=s.length;i<l;i++){const o=s[i];!o||o==="undefined"||t[o]||(Ne(e,o,!1),delete n[o])}for(i=0,l=r.length;i<l;i++){const o=r[i],c=!!t[o];!o||o==="undefined"||n[o]===c||!c||(Ne(e,o,!0),n[o]=c)}return n}function d(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return se(e,t,r,n);m(s=>se(e,t(),s,n),r)}function Ne(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)e.classList.toggle(r[s],n)}function kt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function se(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=D(e,n,r,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=D(e,n,r);else{if(i==="function")return m(()=>{let o=t();for(;typeof o=="function";)o=o();n=se(e,o,n,r)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(we(o,t,n,s))return m(()=>n=se(e,o,n,r,!0)),()=>n;if(o.length===0){if(n=D(e,n,r),l)return n}else c?n.length===0?pe(e,o,r):At(e,n,o):(n&&D(e),pe(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=D(e,n,r,t);D(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function we(e,t,n,r){let s=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],c=n&&n[i],u;if(!(o==null||o===!0||o===!1))if((u=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))s=we(e,o,c)||s;else if(u==="function")if(r){for(;typeof o=="function";)o=o();s=we(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||s}else e.push(o),s=!0;else{const a=String(o);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return s}function pe(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function D(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(s!==o){const c=o.parentNode===e;!i&&!l?c?e.replaceChild(s,o):e.insertBefore(s,n):c&&o.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}const Tt="_score_1h7a2_1",Lt="_start_1h7a2_7",Et="_value_1h7a2_10",Ot="_end_1h7a2_15",Pt="_view_1h7a2_18",Y={score:Tt,start:Lt,value:Et,end:Ot,view:Pt},Nt="_fixed_1yjl1_1",pt="_view_1yjl1_8",jt="_hud_1yjl1_12",Se={fixed:Nt,view:pt,hud:jt};var It=y("<div><div>");const Le=Se.fixed,We=e=>(()=>{var t=It(),n=t.firstChild;return d(n,()=>e.children),m(r=>{var s=`${Le} ${Se.view}`,i=Se.hud,l=e.classList;return s!==r.e&&h(t,r.e=s),i!==r.t&&h(n,r.t=i),r.a=fe(n,l,r.a),r},{e:void 0,t:void 0,a:void 0}),t})(),ie=Symbol("store-raw"),F=Symbol("store-node"),L=Symbol("store-has"),He=Symbol("store-self");function Ze(e){let t=e[j];if(!t&&(Object.defineProperty(e,j,{value:t=new Proxy(e,Ft)}),!Array.isArray(e))){const n=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let s=0,i=n.length;s<i;s++){const l=n[s];r[l].get&&Object.defineProperty(e,l,{enumerable:r[l].enumerable,get:r[l].get.bind(t)})}}return t}function M(e){let t;return e!=null&&typeof e=="object"&&(e[j]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function K(e,t=new Set){let n,r,s,i;if(n=e!=null&&e[ie])return n;if(!M(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,o=e.length;l<o;l++)s=e[l],(r=K(s,t))!==s&&(e[l]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let c=0,u=l.length;c<u;c++)i=l[c],!o[i].get&&(s=e[i],(r=K(s,t))!==s&&(e[i]=r))}return e}function le(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function W(e,t,n){if(e[t])return e[t];const[r,s]=k(n,{equals:!1,internal:!0});return r.$=s,e[t]=r}function Dt(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===j||t===F||(delete n.value,delete n.writable,n.get=()=>e[j][t]),n}function ze(e){$e()&&W(le(e,F),He)()}function Rt(e){return ze(e),Reflect.ownKeys(e)}const Ft={get(e,t,n){if(t===ie)return e;if(t===j)return n;if(t===_e)return ze(e),n;const r=le(e,F),s=r[t];let i=s?s():e[t];if(t===F||t===L||t==="__proto__")return i;if(!s){const l=Object.getOwnPropertyDescriptor(e,t);$e()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(i=W(r,t,i)())}return M(i)?Ze(i):i},has(e,t){return t===ie||t===j||t===_e||t===F||t===L||t==="__proto__"?!0:($e()&&W(le(e,L),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Rt,getOwnPropertyDescriptor:Dt};function q(e,t,n,r=!1){if(!r&&e[t]===n)return;const s=e[t],i=e.length;n===void 0?(delete e[t],e[L]&&e[L][t]&&s!==void 0&&e[L][t].$()):(e[t]=n,e[L]&&e[L][t]&&s===void 0&&e[L][t].$());let l=le(e,F),o;if((o=W(l,t,s))&&o.$(()=>n),Array.isArray(e)&&e.length!==i){for(let c=e.length;c<i;c++)(o=l[c])&&o.$();(o=W(l,"length",i))&&o.$(e.length)}(o=l[He])&&o.$()}function Xe(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const s=n[r];q(e,s,t[s])}}function Mt(e,t){if(typeof t=="function"&&(t=t(e)),t=K(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const s=t[n];e[n]!==s&&q(e,n,s)}q(e,"length",r)}else Xe(e,t)}function V(e,t,n=[]){let r,s=e;if(t.length>1){r=t.shift();const l=typeof r,o=Array.isArray(e);if(Array.isArray(r)){for(let c=0;c<r.length;c++)V(e,[r[c]].concat(t),n);return}else if(o&&l==="function"){for(let c=0;c<e.length;c++)r(e[c],c)&&V(e,[c].concat(t),n);return}else if(o&&l==="object"){const{from:c=0,to:u=e.length-1,by:a=1}=r;for(let v=c;v<=u;v+=a)V(e,[v].concat(t),n);return}else if(t.length>1){V(e[r],t,[r].concat(n));return}s=e[r],n=[r].concat(n)}let i=t[0];typeof i=="function"&&(i=i(s,n),i===s)||r===void 0&&i==null||(i=K(i),r===void 0||M(s)&&M(i)&&!Array.isArray(i)?Xe(s,i):q(e,r,i))}function Kt(...[e,t]){const n=K(e||{}),r=Array.isArray(n),s=Ze(n);function i(...l){me(()=>{r&&l.length===1?Mt(n,l[0]):V(n,l)})}return[s,i]}const oe=new WeakMap,Qe={get(e,t){if(t===ie)return e;const n=e[t];let r;return M(n)?oe.get(n)||(oe.set(n,r=new Proxy(n,Qe)),r):n},set(e,t,n){return q(e,t,K(n)),!0},deleteProperty(e,t){return q(e,t,void 0,!0),!0}};function qt(e){return t=>{if(M(t)){let n;(n=oe.get(t))||oe.set(t,n=new Proxy(t,Qe)),e(n)}return t}}const xe="ji-data",Bt=()=>{const e=localStorage.getItem(xe);return e?JSON.parse(e):{}},Gt=e=>{const t=JSON.stringify(e);t=="{}"?localStorage.removeItem(xe):localStorage.setItem(xe,t)},et=gt(),C=()=>vt(et),Ut=e=>{const{stat:t,...n}=Bt(),[r,s]=Kt({...e.defaultConfig,...n,userCfg:n,stat:t??Ie(),...je(),get update(){return this.record.length}});R(Q(()=>r.skill,()=>{i.rematch()},{defer:!0})),R(Q(()=>r.result,l=>{l!=0&&s("stat",l==1?"win":"lose",o=>o+1)},{defer:!0})),R(Q(()=>({...r.userCfg,stat:r.saveStat?{...r.stat}:void 0}),Gt,{defer:!0}));const i={store:r,setCfg(l,o){s({[l]:o}),s("userCfg",{[l]:o})},clearData(){s(e.defaultConfig),s({userCfg:{}}),i.clearStat()},clearStat(){s("stat",Ie)},rematch(){s(je)},round(l,o){s(({my:c,their:u,skill:a})=>({result:a[l].versus[o],my:c-a[l].cost,their:u-a[o].cost})),s("record",qt(c=>c.push([l,o])))}};return f(et.Provider,{value:i,get children(){return e.children}})},je=()=>({my:0,their:0,result:0,record:[]}),Ie=()=>({win:0,lose:0});var Jt=y("<div><div>有</div><div></div><div>个集"),Yt=y("<div>");const De=e=>(()=>{var t=Jt(),n=t.firstChild,r=n.firstChild,s=n.nextSibling,i=s.nextSibling;return d(n,()=>e.player,r),d(s,()=>e.score),m(l=>{var o=Y.score,c=Y.start,u=Y.value,a=Y.end;return o!==l.e&&h(t,l.e=o),c!==l.t&&h(n,l.t=c),u!==l.a&&h(s,l.a=u),a!==l.o&&h(i,l.o=a),l},{e:void 0,t:void 0,a:void 0,o:void 0}),t})(),Vt=()=>{const{store:e}=C();return(()=>{var t=Yt();return d(t,f(De,{player:"我方",get score(){return e.my}}),null),d(t,f(De,{player:"对方",get score(){return e.their}}),null),m(()=>h(t,`${Le} ${Y.view}`)),t})()},Wt="_card_307db_1",Ht="_lack_307db_13",Zt="_available_307db_16",zt="_name_307db_26",Xt="_section_307db_33",Qt="_title_307db_37",en="_select_307db_41",P={card:Wt,lack:Ht,available:Zt,name:zt,section:Xt,title:Qt,select:en};var tn=y("<div><div>"),nn=y("<div>无"),rn=y("<div>"),sn=y("<div><div></div><div><div></div><div><strong></strong> 个集");const ln=e=>{const t=()=>e.skills[e.skill],n=r=>(()=>{var s=tn(),i=s.firstChild;return d(i,()=>r.name),d(s,f(Te,{get each(){return e.skills.filter((l,o)=>t().versus[o]==r.x)},get fallback(){return nn()},children:l=>(()=>{var o=rn();return d(o,()=>l().name),o})()}),null),m(l=>{var o=P.section,c=P.title;return o!==l.e&&h(s,l.e=o),c!==l.t&&h(i,l.t=c),l},{e:void 0,t:void 0}),s})();return(()=>{var r=sn(),s=r.firstChild,i=s.nextSibling,l=i.firstChild,o=l.nextSibling,c=o.firstChild;return r.$$click=()=>{var u;return e.lack||e.disable||((u=e.onClick)==null?void 0:u.call(e))},d(s,()=>t().name),d(l,()=>t().cost<0?"可获得":"需消耗"),d(c,()=>Math.abs(t().cost)),d(r,f(n,{name:"强于",x:1}),null),d(r,f(n,{name:"弱于",x:-1}),null),m(u=>{var a=P.card,v={[P.lack]:e.lack,[P.available]:!e.disable},w=P.name,A=P.section;return a!==u.e&&h(r,u.e=a),u.t=fe(r,v,u.t),w!==u.a&&h(s,u.a=w),A!==u.o&&h(i,u.o=A),u},{e:void 0,t:void 0,a:void 0,o:void 0}),r})()},on=e=>{const{store:t}=C();return f(We,{get classList(){return{[P.select]:!0}},get children(){return f(Te,{get each(){return t.skill},children:(n,r)=>f(ln,{skill:r,get skills(){return t.skill},get lack(){return t.my<n().cost},get disable(){return e.disable},onClick:()=>{var s;return(s=e.onClick)==null?void 0:s.call(e,r)}})})}})};Z(["click"]);var cn=()=>{},Re=(e,t)=>t();function un(e,t){const n=x(e),r=n?[n]:[],{onEnter:s=Re,onExit:i=Re}=t,[l,o]=k(t.appear?[]:r),[c]=ht();let u,a=!1;function v($,S){if(!$)return S&&S();a=!0,i($,()=>{me(()=>{a=!1,o(I=>I.filter(it=>it!==$)),S&&S()})})}function w($){const S=u;if(!S)return $&&$();u=void 0,o(I=>[S,...I]),s(S,$??cn)}const A=t.mode==="out-in"?$=>a||v($,w):t.mode==="in-out"?$=>w(()=>v($)):$=>{v($),w()};return ct($=>{const S=e();return x(c)?(c(),$):(S!==$&&(u=S,me(()=>x(()=>A($)))),S)},t.appear?void 0:n),l}var Fe=e=>e instanceof Element;function Ae(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return Ae(e(),t);if(Array.isArray(e))for(const n of e){const r=Ae(n,t);if(r)return r}return null}function an(e,t=Fe,n=Fe){const r=T(e);return T(()=>Ae(r(),t))}function fn(e){return T(()=>{const t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function tt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function dn(e,t,n,r){const{onBeforeEnter:s,onEnter:i,onAfterEnter:l}=t;s==null||s(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return r==null?void 0:r();i==null||i(n,()=>o())}),tt(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!i||i.length<2)&&(n.addEventListener("transitionend",o),n.addEventListener("animationend",o))});function o(c){(!c||c.target===n)&&(r==null||r(),n.removeEventListener("transitionend",o),n.removeEventListener("animationend",o),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),l==null||l(n))}}function hn(e,t,n,r){const{onBeforeExit:s,onExit:i,onAfterExit:l}=t;if(!n.parentNode)return r==null?void 0:r();s==null||s(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),i==null||i(n,()=>o()),tt(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!i||i.length<2)&&(n.addEventListener("transitionend",o),n.addEventListener("animationend",o))});function o(c){(!c||c.target===n)&&(r==null||r(),n.removeEventListener("transitionend",o),n.removeEventListener("animationend",o),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),l==null||l(n))}}var gn={inout:"in-out",outin:"out-in"},nt=e=>{const t=fn(e);return un(an(()=>e.children),{mode:gn[e.mode],appear:e.appear,onEnter(n,r){dn(t(),e,n,r)},onExit(n,r){hn(t(),e,n,r)}})};const vn="_current_o0axg_1",_n="_exit_to_o0axg_12",yn="_enter_o0axg_16",z={current:vn,exit_to:_n,enter:yn},Ce=(e,t)=>{let n=0;const r=()=>t(n),s=(i,l)=>{r(),n=e(i,l)};return Be(r),[s,r]},mn=(e,t)=>{if(t(e))throw"";return e},$n="_line_syrbx_1",bn="_l_syrbx_1",wn="_r_syrbx_5",Sn="_vs_syrbx_14",X={line:$n,l:bn,r:wn,vs:Sn};var xn=y("<div><span></span><span>vs</span><span>");const rt=e=>{const{store:t}=C();return(()=>{var n=xn(),r=n.firstChild,s=r.nextSibling,i=s.nextSibling;return d(r,()=>t.skill[e.left].name),d(i,()=>t.skill[e.right].name),m(l=>{var o=X.line,c=e.classList,u=X.l,a=X.vs,v=X.r;return o!==l.e&&h(n,l.e=o),l.t=fe(n,c,l.t),u!==l.a&&h(r,l.a=u),a!==l.o&&h(s,l.o=a),v!==l.i&&h(i,l.i=v),l},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),n})()};var An=y("<div>");const he=e=>({type:"str",str:e}),Cn=()=>{const{store:e}=C(),[t,n]=k(),r=()=>{const{record:l,result:o}=e;if(l.length==0)return[he("开始游戏")];const[c,u]=l[l.length-1],a={type:"vs",left:c,right:u};switch(o){case 0:return[a];case 1:return[a,he("我方胜利")];case-1:return[a,he("对方胜利")]}},[s,i]=Ce(setInterval,clearInterval);return R(()=>{const l=r();if(n(l[0]),l.length>1){let o=1;s(()=>{n(l[o]),o++,o>=l.length&&i()},1e3)}else i()}),f(nt,{appear:!0,get enterClass(){return z.enter},get exitToClass(){return z.exit_to},get children(){return f(Ve,{get when(){return t()},keyed:!0,children:l=>l.type=="str"?(()=>{var o=An();return d(o,()=>l.str),m(()=>h(o,z.current)),o})():f(rt,{get left(){return l.left},get right(){return l.right},get classList(){return{[z.current]:!0}}})})}})},Me=(e,t)=>t<e.length?e[t]:e[e.length-1],kn=e=>{let t=0,n=0;return e.forEach((r,s)=>{t+=r,r/t>Math.random()&&(n=s)}),n},Tn=(e,t,n)=>kn(Me(Me(e,t),n)),Ln="_btn_1mrs5_1",G={btn:Ln},En="_line_3smsi_1",ge={line:En};var On=y("<div>游戏开始"),Pn=y("<div>");const Nn={0:"游戏仍在继续",1:"结束，我方胜利","-1":"结束，对方胜利"},pn=()=>{const{store:e}=C();return[(()=>{var t=On();return m(()=>h(t,ge.line)),t})(),f(Te,{get each(){return e.record},children:t=>f(rt,{get left(){return t()[0]},get right(){return t()[1]},get classList(){return{[ge.line]:!0}}})}),(()=>{var t=Pn();return d(t,()=>Nn[e.result]),m(()=>h(t,ge.line)),t})()]},jn="_view_1sojr_1",In="_hide_1sojr_7",Dn="_content_1sojr_10",Rn="_title_1sojr_23",U={view:jn,hide:In,content:Dn,title:Rn};var Fn=y("<div tabindex=-1><div><h1>");const Mn=e=>f(nt,{appear:!0,get enterClass(){return U.hide},get exitToClass(){return U.hide},onEnter:t=>t.focus(),get children(){return f(Ve,{get when(){return e.children},keyed:!0,children:({title:t,ele:n})=>(()=>{var r=Fn(),s=r.firstChild,i=s.firstChild;return r.$$keydown=l=>{var o;return l.key=="Escape"&&((o=e.onCancel)==null?void 0:o.call(e))},r.$$click=l=>{var o;return l.target==l.currentTarget&&((o=e.onCancel)==null?void 0:o.call(e))},d(i,t),d(s,n,null),m(l=>{var o=`${Le} ${U.view}`,c=U.content,u=U.title;return o!==l.e&&h(r,l.e=o),c!==l.t&&h(s,l.t=c),u!==l.a&&h(i,l.a=u),l},{e:void 0,t:void 0,a:void 0}),r})()})}});Z(["click","keydown"]);const Kn="_view_fxaus_1",qn="_line_fxaus_6",Bn="_desc_fxaus_10",Gn="_input_fxaus_14",Un="_err_fxaus_17",H={view:Kn,line:qn,desc:Bn,input:Gn,err:Un};var Jn=y("<input type=text>"),Yn=y("<div><strong></strong><br>"),Vn=y("<div>"),Wn=y("<input type=checkbox>"),Hn=y("<button type=button>全部清除"),Zn=y("<div><p>修改设置将会自动保存到本地，但若输入无效则会忽略"),zn=y("<br>");const Xn=e=>{const[t,n]=k(!1),[r,s]=k(e.children,{equals:!1}),[i,l]=k(!1);return R(()=>{i()||(s(e.children),n(!1))}),(()=>{var o=Jn();return o.addEventListener("blur",()=>l(!1)),o.addEventListener("focus",()=>l(!0)),o.$$input=c=>{try{e.onInput(c.target.value),n(!1)}catch{n(!0)}},m(c=>{var u=H.input,a={[H.err]:t()};return u!==c.e&&h(o,c.e=u),c.t=fe(o,a,c.t),c},{e:void 0,t:void 0}),m(()=>o.value=r()),o})()},J=e=>[(()=>{var t=Yn(),n=t.firstChild;return n.nextSibling,d(n,()=>e.title),d(t,()=>e.desc,null),m(()=>h(t,H.desc)),t})(),(()=>{var t=Vn();return d(t,()=>e.children),t})()],ve=e=>{const{store:t,setCfg:n}=C();return f(Xn,{onInput:r=>n(e.key,e.de(r)),get children(){return e.ser(t[e.key])}})},Qn=e=>{const{store:t,setCfg:n}=C();return(()=>{var r=Wn();return r.$$input=s=>n(e.key,s.target.checked),m(()=>r.checked=t[e.key]),r})()},er=()=>{const{clearData:e}=C(),t=n=>mn(Number(n),isNaN);return(()=>{var n=Zn(),r=n.firstChild;return d(n,f(J,{title:"本地保存胜负统计",desc:"于「统计」处查看",get children(){return f(Qn,{key:"saveStat"})}}),null),d(n,f(J,{title:"结束后自动重来时延",desc:"毫秒，非正数则不自动重来",get children(){return f(ve,{key:"autoRematch",de:t,ser:String})}}),null),d(n,f(J,{title:"招数规则",desc:"开发用，请勿随意更改",get children(){return f(ve,{key:"skill",get de(){return JSON.parse},get ser(){return JSON.stringify}})}}),null),d(n,f(J,{title:"智能引擎权重",desc:"开发用，请勿随意更改",get children(){return f(ve,{key:"agent",get de(){return JSON.parse},get ser(){return JSON.stringify}})}}),null),d(n,f(J,{title:"清除本地数据",get desc(){return["谨慎！全部数据恢复默认",zn(),"包括设置和统计信息"]},get children(){var s=Hn();return p(s,"click",e,!0),s}}),null),m(s=>{var i=H.view,l=H.line;return i!==s.e&&h(n,s.e=i),l!==s.t&&h(r,s.t=l),s},{e:void 0,t:void 0}),n})()};Z(["input","click"]);const tr="_content_1vgd8_1",st={content:tr};var nr=y("<div><p>「集」，一种简单的回合制双人游戏。你将与电脑对战。<a href=https://gitee.com/Zeng_YL/ji-train#规则>此处</a>可查看规则。</p><p>本游戏可于<a href=https://zeng-y-l.github.io/ji/>此处</a>访问游玩。还可以查看其<a href=https://gitee.com/Zeng_YL/ji-gui>源码</a>，以 MIT 协议发布。</p><p>智能引擎权重由<a href=https://gitee.com/Zeng_YL/ji-train>训练程序</a>生成，其源码亦以 MIT 协议发布。</p><p><a href=https://zeng-y-l.github.io/>ZengYL</a> 制作了本游戏。而规则来源于我曾经的同学，在此感谢他们。</p><p>界面使用了字体<a href=https://zhuanlan.zhihu.com/p/637491623>京华老宋体</a>。");const rr=()=>(()=>{var e=nr();return m(()=>h(e,st.content)),e})();var sr=y("<div><p>总计 <!> 局，我方胜利 <!> 局，对方胜利 <!> 局。</p><p><button>清除统计数据"),ir=y("<p>胜率 <!>%。");const lr=()=>{const{store:e,clearStat:t}=C(),n=()=>e.stat.win+e.stat.lose;return(()=>{var r=sr(),s=r.firstChild,i=s.firstChild,l=i.nextSibling,o=l.nextSibling,c=o.nextSibling,u=c.nextSibling,a=u.nextSibling;a.nextSibling;var v=s.nextSibling,w=v.firstChild;return d(s,n,l),d(s,()=>e.stat.win,c),d(s,()=>e.stat.lose,a),d(r,(()=>{var A=T(()=>!!n());return()=>A()&&(()=>{var $=ir(),S=$.firstChild,I=S.nextSibling;return I.nextSibling,d($,()=>(e.stat.win/n()*100).toFixed(2),I),$})()})(),v),p(w,"click",t,!0),m(()=>h(r,st.content)),r})()};Z(["click"]);var or=y("<div>重来"),cr=y("<div>设置"),ur=y("<div>记录"),ar=y("<div>统计"),fr=y("<div>关于");const dr=()=>{const{rematch:e}=C(),[t,n]=k(),r=ut(),s=(i,l)=>()=>at(r,()=>n({title:i,ele:f(l,{})}));return[f(We,{get children(){return[(()=>{var i=or();return p(i,"click",e,!0),m(()=>h(i,G.btn)),i})(),(()=>{var i=cr();return p(i,"click",s("设置",er),!0),m(()=>h(i,G.btn)),i})(),(()=>{var i=ur();return p(i,"click",s("记录",pn),!0),m(()=>h(i,G.btn)),i})(),(()=>{var i=ar();return p(i,"click",s("统计",lr),!0),m(()=>h(i,G.btn)),i})(),(()=>{var i=fr();return p(i,"click",s("关于",rr),!0),m(()=>h(i,G.btn)),i})()]}}),f(Mn,{onCancel:()=>n(),get children(){return t()}})]};Z(["click"]);let hr={autoRematch:-1,saveStat:!1,agent:[[[255,0,0,0,0,0,0,0],[147,108,0,0,0,0,0,0],[159,46,50,0,0,0,0,0],[34,182,39,0,0,0,0,0],[66,56,133,0,0,0,0,0],[9,119,127,0,0,0,0,0]],[[133,0,0,0,122,0,0,0],[63,124,0,0,68,0,0,0],[42,71,97,3,42,0,0,0],[96,16,27,99,17,0,0,0],[51,36,41,45,82,0,0,0],[23,83,56,75,18,0,0,0]],[[134,0,0,0,117,4,0,0],[26,101,0,0,106,22,0,0],[16,10,82,28,44,75,0,0],[16,23,11,102,53,50,0,0],[67,38,17,31,39,63,0,0],[105,25,47,34,21,23,0,0]],[[0,0,0,0,0,0,255,0],[34,66,0,0,54,64,37,0],[26,36,15,37,23,45,73,0],[18,64,10,28,39,45,51,0],[36,25,32,60,36,32,34,0],[47,40,19,43,46,48,12,0]],[[0,0,0,0,0,0,255,0],[69,51,0,0,25,99,11,0],[43,34,14,51,48,19,46,0],[40,15,45,63,14,26,52,0],[50,40,42,16,23,39,45,0],[63,34,55,25,4,32,42,0]],[[0,0,0,0,0,0,56,199],[0,0,0,0,0,0,0,255],[0,0,0,0,0,0,0,255],[0,0,0,0,0,0,0,255],[0,0,0,0,0,0,0,255],[0,0,0,0,0,0,0,255]]],skill:[{cost:-1,name:"集",versus:[0,0,0,0,-1,-1,-1,-1]},{cost:0,name:"小防",versus:[0,0,0,0,0,-1,-1,-1]},{cost:0,name:"中防",versus:[0,0,0,0,-1,0,-1,-1]},{cost:1,name:"大防",versus:[0,0,0,0,0,0,0,-1]},{cost:1,name:"小波",versus:[1,0,1,0,0,-1,-1,-1]},{cost:2,name:"中波",versus:[1,1,0,0,1,0,-1,-1]},{cost:3,name:"大波",versus:[1,1,1,0,1,1,0,-1]},{cost:5,name:"黑洞",versus:[1,1,1,1,1,1,1,0]}]};const gr=()=>{const{store:e,round:t,rematch:n}=C(),[r,s]=k(!1),i=T(Q(()=>e.update,()=>Tn(e.agent,e.their,e.my))),[l]=Ce(setTimeout,clearTimeout),o=a=>{s(!0),l(()=>s(!1),a)},[c,u]=Ce(setTimeout,clearTimeout);return R(()=>{const a=e.autoRematch;a>0&&e.result!=0?c(()=>{n()},a):u()}),[f(Vt,{}),f(dr,{}),f(Cn,{}),f(on,{get disable(){return r()||e.result!=0},onClick:a=>{t(a,i()),o(400)}})]},vr=()=>f(Ut,{defaultConfig:hr,get children(){return f(gr,{})}}),_r=document.getElementById("root");Ct(vr,_r);