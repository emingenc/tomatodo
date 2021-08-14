(()=>{"use strict";var e={9014:(e,t,r)=>{r(7280),r(5363),r(71);var o=r(8880),n=r(4345),a=r(3673);function s(e,t,r,o,n,s){const i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(i)}var i=r(4584);const l=(0,a.aZ)({name:"App",setup(){(0,a.JJ)("store",i.default)}});l.render=s;const u=l;var d=r(7083),c=r(9582);const p=[{path:"/",component:()=>Promise.all([r.e(736),r.e(525)]).then(r.bind(r,6525)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(149)]).then(r.bind(r,149))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,2193))}],f=p,h=(0,d.BC)((function(){const e=c.r5,t=(0,c.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("")});return t}));async function v(e,t){const o="function"===typeof i.default?await(0,i.default)({}):i.default,{storeKey:a}=await Promise.resolve().then(r.bind(r,4584)),s="function"===typeof h?await h({store:o}):h;o.$router=s;const l=e(u);return l.use(n.Z,t),{app:l,store:o,storeKey:a,router:s}}const m={config:{}},b="";async function g({app:e,router:t,store:r,storeKey:o},n){let a=!1;const s=e=>{a=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},i=window.location.href.replace(window.location.origin,"");for(let u=0;!1===a&&u<n.length;u++)try{await n[u]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:i,publicPath:b})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==a&&(e.use(t),e.use(r,o),e.mount("#q-app"))}v(o.ri,m).then((e=>Promise.all([Promise.resolve().then(r.bind(r,4112)),Promise.resolve().then(r.bind(r,5474))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));g(e,r)}))))},5474:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i,api:()=>s});var o=r(7083),n=r(52),a=r.n(n);const s=a().create({baseURL:"https://api.example.com"}),i=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=s}))},4112:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l,i18n:()=>i});var o=r(7083),n=r(5948);const a={failed:"Action failed",success:"Action was successful"},s={"en-US":a},i=(0,n.o)({locale:"en-US",messages:s}),l=(0,o.xr)((({app:e})=>{e.use(i)}))},4584:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var o=r(1959);const n=(0,o.qj)({todos:[],text:"",step:1,timeChoose:25,isFinished:!1,reward:null}),a={addTask(e){n.todos.length<1&&(e&&n.todos.push(e),n.text="",n.step=2)},deleteTask(e){n.todos=n.todos.filter((t=>t!=e)),n.step=1}},s={},i={state:n,methods:a,getters:s}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var s=1/0;for(d=0;d<e.length;d++){for(var[o,n,a]=e[d],i=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{149:"120deb7f",193:"70e81ef2",525:"c49fc0c9"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{149:"e71d5429",736:"a04a8d58"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="pomodoro_wheel:";r.l=(o,n,a,s)=>{if(e[o])e[o].push(n);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==o||c.getAttribute("data-webpack")==t+a){i=c;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+a),i.src=o),e[o]=[n];var p=(t,r)=>{i.onerror=i.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,n.parentNode.removeChild(n),o(l)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){n=s[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var s=r.miniCssF(o),i=r.p+s;if(t(s,i))return n();e(o,i,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={149:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var s=r.p+r.u(t),i=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,n[1](i)}};r.l(s,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[s,i,l]=o,u=0;for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(l)var d=l(r);for(t&&t(o);u<s.length;u++)a=s[u],r.o(e,a)&&e[a]&&e[a][0](),e[s[u]]=0;return r.O(d)},o=self["webpackChunkpomodoro_wheel"]=self["webpackChunkpomodoro_wheel"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(9014)));o=r.O(o)})();