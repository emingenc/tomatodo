(()=>{"use strict";var e={7177:(e,t,o)=>{o(7280),o(5363),o(71);var r=o(8880),n=o(9592),a=o(3673);function i(e,t,o,r,n,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}var s=o(4584);let l;document.addEventListener("deviceready",(async()=>{await admob.start()}),!1),document.addEventListener("deviceready",(async()=>{l=new admob.BannerAd({adUnitId:"ca-app-pub-1161509012137925/9039660385",position:"top"}),await l.show()}),!1);const d=(0,a.aZ)({name:"App",setup(){(0,a.JJ)("store",s.default)},mounted(){}});d.render=i;const c=d;var u=o(7083),p=o(9582);const f=[{path:"/",component:()=>Promise.all([o.e(736),o.e(463)]).then(o.bind(o,6463)),children:[{path:"/",redirect:"/home"},{path:"/howto",component:()=>Promise.all([o.e(736),o.e(792)]).then(o.bind(o,792))},{path:"/home",component:()=>Promise.all([o.e(736),o.e(977)]).then(o.bind(o,8977))},{path:"/todos",component:()=>Promise.all([o.e(736),o.e(211)]).then(o.bind(o,211))},{path:"/settings",component:()=>Promise.all([o.e(736),o.e(888)]).then(o.bind(o,1888))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(193)]).then(o.bind(o,2193))}],h=f,m=(0,u.BC)((function(){const e=p.r5,t=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("")});return t}));async function v(e,t){const r="function"===typeof s.default?await(0,s.default)({}):s.default,{storeKey:a}=await Promise.resolve().then(o.bind(o,4584)),i="function"===typeof m?await m({store:r}):m;r.$router=i;const l=e(c);return l.use(n.Z,t),{app:l,store:r,storeKey:a,router:i}}var g=o(589),b=o(7153),y=o(4434);const w={config:{notify:{},capacitor:{backButtonExit:null,backButton:null}},plugins:{LocalStorage:g.Z,SessionStorage:b.Z,Notify:y.Z}},S="";async function P({app:e,router:t,store:o,storeKey:r},n){let a=!1;const i=e=>{a=!0;const o=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=o},s=window.location.href.replace(window.location.origin,"");for(let d=0;!1===a&&d<n.length;d++)try{await n[d]({app:e,router:t,store:o,ssrContext:null,redirect:i,urlPath:s,publicPath:S})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==a&&(e.use(t),e.use(o,r),e.mount("#q-app"))}v(r.ri,w).then((e=>Promise.all([Promise.resolve().then(o.bind(o,4112)),Promise.resolve().then(o.bind(o,5474)),Promise.resolve().then(o.bind(o,8853))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));P(e,o)}))))},5474:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s,api:()=>i});var r=o(7083),n=o(52),a=o.n(n);const i=a().create({baseURL:"https://api.example.com"}),s=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},8853:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});var r=o(3640);const n=async({app:e,router:t})=>{e.use(r.ZP,{config:{id:"UA-207380093-3"}},t)}},4112:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l,i18n:()=>s});var r=o(7083),n=o(5948);const a={failed:"Action failed",success:"Action was successful",instructions:"Info",home:"Home",settings:"Settings"},i={"en-US":a},s=(0,n.o)({locale:"en-US",messages:i}),l=(0,r.xr)((({app:e})=>{e.use(s)}))},4584:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var r=o(1959),n=o(3673);const a="pomodoroState",i={todos:[],completedTodos:[],currentTodo:null,text:"",step:0,todoLimit:10,point:0,totalStep:0,session:1,timeChoose:25,isFinished:!1,reward:null,primary:"red-3",secondary:"red-8",addNewTodo:!1,focus:25,short:5,long:15,isLong:!1,reward1:"Social media",reward2:"Drink(Tea coffe etc)",reward3:"short game",reward4:"Short YouTube video",reward5:"Meditate",reward6:"Favorite music"},s=()=>null!==localStorage.getItem(a)?JSON.parse(localStorage.getItem(a)):i,l=(0,r.qj)(s()),d={addTask(e){l.todos.length<l.todoLimit&&(e&&l.todos.push(e),l.text="")},deleteTask(e){l.todos=l.todos.filter((t=>t!=e)),l.totalStep=l.totalStep+l.step,l.currentTodo==e&&(l.currentTodo=null)},addCompletedTask(e){e&&l.completedTodos.push(e),d.deleteTask(e)},setColor(e){l.primary=`${e}-3`,l.secondary=`${e}-8`}},c={};(0,n.YP)((()=>l),(()=>{localStorage.setItem(a,JSON.stringify(l))}),{deep:!0});const u={state:l,methods:d,getters:c}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.m=e,(()=>{var e=[];o.O=(t,r,n,a)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,n,a]=e[c],s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](r[l])))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,n,a]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{193:"92380ad0",211:"ca659e7f",463:"9d690455",792:"dd7cc678",888:"b7c8d4e3",977:"950bb411"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{736:"cf104737",792:"c9d36c47",977:"e71d5429"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="tomatodo:";o.l=(r,n,a,i)=>{if(e[r])e[r].push(n);else{var s,l;if(void 0!==a)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[n];var p=(t,o)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e=(e,t,o,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)o();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,n.parentNode.removeChild(n),r(l)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){n=i[r],a=n.getAttribute("data-href");if(a===e||a===t)return n}},r=r=>new Promise(((n,a)=>{var i=o.miniCssF(r),s=o.p+i;if(t(i,s))return n();e(r,s,n,a)})),n={143:0};o.f.miniCss=(e,t)=>{var o={792:1,977:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((o,r)=>n=e[t]=[o,r]));r.push(n[2]=a);var i=o.p+o.u(t),s=new Error,l=r=>{if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};o.l(i,l,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[i,s,l]=r,d=0;for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var c=l(o);for(t&&t(r);d<i.length;d++)a=i[d],o.o(e,a)&&e[a]&&e[a][0](),e[i[d]]=0;return o.O(c)},r=self["webpackChunktomatodo"]=self["webpackChunktomatodo"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=o.O(void 0,[736],(()=>o(7177)));r=o.O(r)})();