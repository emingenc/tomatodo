(()=>{"use strict";var e={3888:(e,t,r)=>{r(7280),r(5363),r(71);var o=r(8880),n=r(4345),a=r(3673);function i(e,t,r,o,n,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}var s=r(4584);const l=(0,a.aZ)({name:"App",setup(){(0,a.JJ)("store",s.default)},mounted(){}});l.render=i;const d=l;var u=r(7083),c=r(9582);const p=[{path:"/",component:()=>Promise.all([r.e(736),r.e(239)]).then(r.bind(r,2239)),children:[{path:"/",redirect:"/home"},{path:"/howto",component:()=>Promise.all([r.e(736),r.e(860)]).then(r.bind(r,8860))},{path:"/home",component:()=>Promise.all([r.e(736),r.e(67)]).then(r.bind(r,8067))},{path:"/settings",component:()=>Promise.all([r.e(736),r.e(727)]).then(r.bind(r,2727))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,2193))}],f=p,h=(0,u.BC)((function(){const e=c.r5,t=(0,c.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("")});return t}));async function m(e,t){const o="function"===typeof s.default?await(0,s.default)({}):s.default,{storeKey:a}=await Promise.resolve().then(r.bind(r,4584)),i="function"===typeof h?await h({store:o}):h;o.$router=i;const l=e(d);return l.use(n.Z,t),{app:l,store:o,storeKey:a,router:i}}var v=r(589),g=r(7153);const b={config:{},plugins:{LocalStorage:v.Z,SessionStorage:g.Z}},y="";async function w({app:e,router:t,store:r,storeKey:o},n){let a=!1;const i=e=>{a=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},s=window.location.href.replace(window.location.origin,"");for(let d=0;!1===a&&d<n.length;d++)try{await n[d]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:s,publicPath:y})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==a&&(e.use(t),e.use(r,o),e.mount("#q-app"))}m(o.ri,b).then((e=>Promise.all([Promise.resolve().then(r.bind(r,4112)),Promise.resolve().then(r.bind(r,5474))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));w(e,r)}))))},5474:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s,api:()=>i});var o=r(7083),n=r(52),a=r.n(n);const i=a().create({baseURL:"https://api.example.com"}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},4112:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l,i18n:()=>s});var o=r(7083),n=r(5948);const a={failed:"Action failed",success:"Action was successful",instructions:"Info",home:"Home",settings:"Settings"},i={"en-US":a},s=(0,n.o)({locale:"en-US",messages:i}),l=(0,o.xr)((({app:e})=>{e.use(s)}))},4584:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var o=r(1959);const n=(0,o.qj)({todos:[],text:"",step:1,timeChoose:25,isFinished:!1,reward:null,primary:"blue-3",secondary:"blue-8",focus:25,short:5,long:15,isLong:!1,reward1:"Social media",reward2:"Drink(Tea coffe etc)",reward3:"short game(mobile/pc)",reward4:"Short YouTube video",reward5:"Meditate",reward6:"Favorite music"}),a={addTask(e){n.todos.length<1&&(e&&n.todos.push(e),n.text="",n.step=2)},setColor(e){n.primary=`${e}-3`,n.secondary=`${e}-8`},deleteTask(e){n.todos=n.todos.filter((t=>t!=e)),n.step=1}},i={},s={state:n,methods:a,getters:i}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{67:"b7ab227e",193:"ff64f1e4",239:"257da6d9",727:"55388ed8",860:"c67e2ad4"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{67:"e71d5429",736:"cf104737"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="pomodoro_wheel:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,l;if(void 0!==a)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==o||c.getAttribute("data-webpack")==t+a){s=c;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[n];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,n.parentNode.removeChild(n),o(l)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),s=r.p+i;if(t(i,s))return n();e(o,s,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={67:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,s,l]=o,d=0;for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var u=l(r);for(t&&t(o);d<i.length;d++)a=i[d],r.o(e,a)&&e[a]&&e[a][0](),e[i[d]]=0;return r.O(u)},o=self["webpackChunkpomodoro_wheel"]=self["webpackChunkpomodoro_wheel"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(3888)));o=r.O(o)})();