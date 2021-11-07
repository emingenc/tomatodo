(()=>{"use strict";var e={3832:(e,t,o)=>{o(7280),o(5363),o(71);var r=o(8880),n=o(9592),a=o(3673);function s(e,t,o,r,n,s){const i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(i)}var i=o(4584);const l=(0,a.aZ)({name:"App",setup(){(0,a.JJ)("store",i.default)},mounted(){}});l.render=s;const d=l;var c=o(7083),u=o(9582);const p=[{path:"/",component:()=>Promise.all([o.e(736),o.e(783)]).then(o.bind(o,5783)),children:[{path:"/",redirect:"/home"},{path:"/howto",component:()=>Promise.all([o.e(736),o.e(642)]).then(o.bind(o,642))},{path:"/home",component:()=>Promise.all([o.e(736),o.e(141)]).then(o.bind(o,4141))},{path:"/todos",component:()=>Promise.all([o.e(736),o.e(211)]).then(o.bind(o,211))},{path:"/settings",component:()=>Promise.all([o.e(736),o.e(888)]).then(o.bind(o,1888))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(193)]).then(o.bind(o,2193))}],f=p,h=(0,c.BC)((function(){const e=u.r5,t=(0,u.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("")});return t}));async function m(e,t){const r="function"===typeof i.default?await(0,i.default)({}):i.default,{storeKey:a}=await Promise.resolve().then(o.bind(o,4584)),s="function"===typeof h?await h({store:r}):h;r.$router=s;const l=e(d);return l.use(n.Z,t),{app:l,store:r,storeKey:a,router:s}}var v=o(589),g=o(7153),b=o(4434);const y={config:{notify:{}},plugins:{LocalStorage:v.Z,SessionStorage:g.Z,Notify:b.Z}},w="";async function S({app:e,router:t,store:o,storeKey:r},n){let a=!1;const s=e=>{a=!0;const o=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=o},i=window.location.href.replace(window.location.origin,"");for(let d=0;!1===a&&d<n.length;d++)try{await n[d]({app:e,router:t,store:o,ssrContext:null,redirect:s,urlPath:i,publicPath:w})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==a&&(e.use(t),e.use(o,r),e.mount("#q-app"))}m(r.ri,y).then((e=>Promise.all([Promise.resolve().then(o.bind(o,4112)),Promise.resolve().then(o.bind(o,5474)),Promise.resolve().then(o.bind(o,8853))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));S(e,o)}))))},5474:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i,api:()=>s});var r=o(7083),n=o(52),a=o.n(n);const s=a().create({baseURL:"https://api.example.com"}),i=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=s}))},8853:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});var r=o(3640);const n=async({app:e,router:t})=>{e.use(r.ZP,{config:{id:"UA-207380093-3"}},t)}},4112:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l,i18n:()=>i});var r=o(7083),n=o(5948);const a={failed:"Action failed",success:"Action was successful",instructions:"Info",home:"Home",settings:"Settings"},s={"en-US":a},i=(0,n.o)({locale:"en-US",messages:s}),l=(0,r.xr)((({app:e})=>{e.use(i)}))},4584:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var r=o(1959),n=o(3673);const a="pomodoroState",s={todos:[],completedTodos:[],currentTodo:null,text:"",step:0,todoLimit:10,point:0,totalStep:0,session:1,timeChoose:25,isFinished:!1,reward:null,primary:"red-3",secondary:"red-8",addNewTodo:!1,focus:25,short:5,long:15,isLong:!1,reward1:"Social media",reward2:"Drink(Tea coffe etc)",reward3:"short game",reward4:"Short YouTube video",reward5:"Meditate",reward6:"Favorite music"},i=()=>null!==localStorage.getItem(a)?JSON.parse(localStorage.getItem(a)):s,l=(0,r.qj)(i()),d={addTask(e){l.todos.length<l.todoLimit&&(e&&l.todos.push(e),l.text="")},deleteTask(e){l.todos=l.todos.filter((t=>t!=e)),l.totalStep=l.totalStep+l.step,l.currentTodo==e&&(l.currentTodo=null)},addCompletedTask(e){e&&l.completedTodos.push(e),d.deleteTask(e)},setColor(e){l.primary=`${e}-3`,l.secondary=`${e}-8`}},c={};(0,n.YP)((()=>l),(()=>{localStorage.setItem(a,JSON.stringify(l))}),{deep:!0});const u={state:l,methods:d,getters:c}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.m=e,(()=>{var e=[];o.O=(t,r,n,a)=>{if(!r){var s=1/0;for(c=0;c<e.length;c++){for(var[r,n,a]=e[c],i=!0,l=0;l<r.length;l++)(!1&a||s>=a)&&Object.keys(o.O).every((e=>o.O[e](r[l])))?r.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,n,a]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{141:"b561c019",193:"abc3e0b8",211:"41cc8611",642:"1682ebb0",783:"af13b50d",888:"3850954d"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{141:"e71d5429",642:"66be6e37",736:"cf104737"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="pomodoro_wheel:";o.l=(r,n,a,s)=>{if(e[r])e[r].push(n);else{var i,l;if(void 0!==a)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+a){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[n];var p=(t,o)=>{i.onerror=i.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e=(e,t,o,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)o();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,n.parentNode.removeChild(n),r(l)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){n=s[r],a=n.getAttribute("data-href");if(a===e||a===t)return n}},r=r=>new Promise(((n,a)=>{var s=o.miniCssF(r),i=o.p+s;if(t(s,i))return n();e(r,i,n,a)})),n={143:0};o.f.miniCss=(e,t)=>{var o={141:1,642:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((o,r)=>n=e[t]=[o,r]));r.push(n[2]=a);var s=o.p+o.u(t),i=new Error,l=r=>{if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,n[1](i)}};o.l(s,l,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[s,i,l]=r,d=0;for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(l)var c=l(o);for(t&&t(r);d<s.length;d++)a=s[d],o.o(e,a)&&e[a]&&e[a][0](),e[s[d]]=0;return o.O(c)},r=self["webpackChunkpomodoro_wheel"]=self["webpackChunkpomodoro_wheel"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=o.O(void 0,[736],(()=>o(3832)));r=o.O(r)})();