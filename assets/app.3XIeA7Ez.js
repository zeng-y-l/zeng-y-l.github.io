import{d as m,m as g,o as c,c as l,a as n,n as p,p as F,F as f,g as w,t as d,u as o,q as P,_ as N,s as L,x as y,h as v,y as R,j as E,z as $,A as M,R as V,B as T,C as j,D as I,E as x,G as z,H as G,I as H,J,K as U,L as q,M as K,N as Q,O as W,P as S,Q as X}from"./chunks/framework.n-gslYO9.js";import{h as u,m as b}from"./chunks/main.module.CZtdWaki.js";import{s as Y,a as C,d as A,c as Z}from"./chunks/utils.c3f49hEE.js";function O(e,t,s){let a=-1,{length:r}=e;s=s>r?r:s,s<0&&(s+=r),r=t>s?0:s-t>>>0,t>>>=0;const i=Array(r);for(;++a<r;)i[a]=e[a+t];return i}function ee(e){return typeof e=="string"?e.slice(0,-1):e.length?O(e,0,-1):[]}function te(e){return typeof e=="string"?e[e.length-1]||"":e[e.length-1]}const se={href:"/"},ae=["href"],ne=m({__name:"BreadCrumb",props:{path:{},isDir:{type:Boolean}},setup(e){const t=e,s=g(()=>Y(ee(t.path),{label:"",path:"/"},({path:a},r)=>({label:r,path:a+r+"/"})));return(a,r)=>(c(),l("nav",{class:p(a.$style.wrapper)},[n("a",se,[n("img",{class:p(a.$style.icon),src:F},null,2)]),n("div",{class:p(a.$style.path)},[(c(!0),l(f,null,w(s.value,i=>(c(),l(f,null,[n("span",{class:p(a.$style.sep)},"/",2),n("a",{href:i.path},d(i.label),9,ae)],64))),256)),n("span",{class:p(a.$style.sep)},"/",2),n("span",null,d(o(te)(a.path)),1),a.isDir?(c(),l("span",{key:0,class:p(a.$style.sep)},"/",2)):P("",!0)],2)],2))}}),oe="_wrapper_nh36t_1",re="_icon_nh36t_6",pe="_path_nh36t_12",ce="_sep_nh36t_20",le={wrapper:oe,icon:re,path:pe,sep:ce},ie={$style:le},ue=N(ne,[["__cssModules",ie]]),k=m({__name:"Nav",setup(e){const t=L(),s=g(()=>t.path.replace(/^\/|\/$/g,"").split("/").map(decodeURIComponent));return(a,r)=>(c(),y(ue,{path:s.value,"is-dir":o(t).path.endsWith("/")},null,8,["path","is-dir"]))}}),_e=n("p",null,"你踏入了数字的虚空",-1),he=n("p",null,"我不知你为何而来",-1),de=n("p",null,"也许这里以前有繁华的城市",-1),me=n("p",null,"也许你就是喜欢四处探险",-1),fe=n("p",null,"但现在这里什么都没有",-1),ye=n("p",null,"请回吧",-1),ve=[_e,he,de,me,fe,ye];JSON.parse('{"title":"404","description":"","frontmatter":{},"headers":[],"relativePath":"../.vitepress/theme/NotFound.md","filePath":"../.vitepress/theme/NotFound.md"}');const $e={name:"../.vitepress/theme/NotFound.md"},ge=m({...$e,setup(e){return(t,s)=>(c(),l("div",null,[v(k),n("header",{class:p(o(u).header)},[n("h1",{class:p(o(u).title)},"404",2),n("p",{class:p(o(u).info)},"页面找不到",2),n("p",{class:p(o(u).info)},"请点击左上角图标，以回到主页",2)],2),n("main",{class:p(o(b).main),style:{"text-align":"center"}},ve,2)]))}}),Ce=m({__name:"Layout",setup(e){const{frontmatter:t,page:s}=R(),a=g(()=>{const{create:r,update:i}=t.value;return[[C`创建于 ${A(r)}`,C`最后修改于 ${A(i)}`]].map(_=>Z(_,"，")).filter(_=>_)});return(r,i)=>{const _=E("Content");return o(s).isNotFound?(c(),y(o(ge),{key:0})):o(t).layout==="raw"?(c(),y(_,{key:1})):(c(),l(f,{key:2},[v(k),n("header",{class:p(o(u).header)},[n("h1",{class:p(o(u).title)},d(o(t).title),3),(c(!0),l(f,null,w(a.value,D=>(c(),l("div",{class:p(o(u).info)},d(D),3))),256)),o(t).desc?(c(),l("p",{key:0,class:p([o(u).info,"italic"])},d(o(t).desc),3)):P("",!0)],2),n("main",{class:p(o(b).main)},[v(_)],2)],64))}}}),Ae={},we={$style:Ae},Pe=N(Ce,[["__cssModules",we]]),Ne={Layout:Pe};function B(e){if(e.extends){const t=B(e.extends);return{...t,...e,async enhanceApp(s){t.enhanceApp&&await t.enhanceApp(s),e.enhanceApp&&await e.enhanceApp(s)}}}return e}const h=B(Ne),Re=m({name:"VitePressApp",setup(){const{site:e}=R();return q(()=>{K(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&Q(),W(),S(),h.setup&&h.setup(),()=>X(h.Layout)}});async function be(){const e=Be(),t=ke();t.provide(V,e);const s=T(e.route);return t.provide(j,s),t.component("Content",I),t.component("ClientOnly",x),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return s.frontmatter.value}},$params:{get(){return s.page.value.params}}}),h.enhanceApp&&await h.enhanceApp({app:t,router:e,siteData:z}),{app:t,router:e,data:s}}function ke(){return G(Re)}function Be(){let e=$,t;return H(s=>{let a=J(s),r=null;return a&&(e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),r=U(()=>import(a),__vite__mapDeps([]))),$&&(e=!1),r},h.NotFound)}$&&be().then(({app:e,router:t,data:s})=>{t.go().then(()=>{M(t.route,s.site),e.mount("#app")})});export{be as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}