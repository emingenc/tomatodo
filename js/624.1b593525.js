"use strict";(self["webpackChunkpomodoro_wheel"]=self["webpackChunkpomodoro_wheel"]||[]).push([[624],{3624:(e,t,o)=>{o.r(t),o.d(t,{default:()=>F});var s=o(3673);const l={class:"q-pa-md"};function a(e,t,o,a,i,n){const r=(0,s.up)("Todo"),m=(0,s.up)("q-btn"),d=(0,s.up)("q-stepper-navigation"),c=(0,s.up)("q-step"),u=(0,s.up)("Timer"),p=(0,s.up)("Wheel"),f=(0,s.up)("q-stepper"),h=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(h,{class:"flex bg-red-3 flex-center"},{default:(0,s.w5)((()=>[(0,s.Wm)("div",l,[(0,s.Wm)(f,{modelValue:e.step,"onUpdate:modelValue":t[7]||(t[7]=t=>e.step=t),"header-nav":"",ref:"stepper",animated:"","inactive-color":"red-2","active-color":"red-10",class:"bg-red-4"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{name:1,title:"Decide on the Task to be done",icon:"task",done:e.step>1,"header-nav":e.step>1},{default:(0,s.w5)((()=>[(0,s.Wm)(r),(0,s.Wm)(d,{class:"q-pa-md absolute-bottom"},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{onClick:t[1]||(t[1]=()=>{e.done1=!0,e.step=2}),color:"red-10",label:"Continue"})])),_:1})])),_:1},8,["done","header-nav"]),(0,s.Wm)(c,{name:2,"inactive-color":"red-3",title:"Work for 25 minutes",caption:"",icon:"settings",done:e.step>2,"header-nav":e.step>2},{default:(0,s.w5)((()=>[(0,s.Wm)(u),(0,s.Wm)(d,{class:"q-pa-md absolute-bottom"},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{color:"red-10",onClick:t[2]||(t[2]=t=>e.step=3),label:"Continue"}),(0,s.Wm)(m,{flat:"",onClick:t[3]||(t[3]=t=>e.step=1),color:"red-10",label:"Back",class:"q-ml-sm"})])),_:1})])),_:1},8,["done","header-nav"]),(0,s.Wm)(c,{name:3,"inactive-color":"red-3",title:"Take a short break, reward yourself",icon:"add_comment","header-nav":e.step>3},{default:(0,s.w5)((()=>[(0,s.Wm)(p),(0,s.Wm)(d,{class:"q-pa-md absolute-bottom"},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{color:"red-10",onClick:t[4]||(t[4]=t=>e.done3=!0),label:"Finish"}),(0,s.Wm)(m,{flat:"",onClick:t[5]||(t[5]=t=>e.step=2),color:"red-10",label:"Back",class:"q-ml-sm"}),(0,s.Wm)(m,{flat:"",onClick:t[6]||(t[6]=t=>e.step=1),color:"red-10",label:"Restart",class:"q-ml-sm"})])),_:1})])),_:1},8,["header-nav"])])),_:1},8,["modelValue"])])])),_:1})}var i=o(1959),n=o(2323),r=o(8880);const m={class:"full-width text-center"},d={class:"text-center text-grey-2 full-width  q-pa-md"},c=(0,s.Uk)(" Choose your time: "),u={class:"text-center q-mt-lg q-mb-lg full-width  q-pa-md"};function p(e,t,o,l,a,i){const p=(0,s.up)("q-option-group"),f=(0,s.up)("q-circular-progress"),h=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.j4)("div",m,[(0,s.Wm)("div",d,[c,(0,s.Wm)(p,{modelValue:a.timeChoose,"onUpdate:modelValue":t[1]||(t[1]=e=>a.timeChoose=e),options:a.timeOptions,color:"blue",dark:"",inline:""},null,8,["modelValue","options"])]),(0,s.Wm)(f,{"show-value":"",class:"text-white q-mb-none q-mt-lg",max:i.initialTime,value:a.totalTime,size:"230px",thickness:.13,color:i.timerColor,"track-color":"dark"},{default:(0,s.w5)((()=>[(0,s.Wm)("span",{class:`text-${i.timerColor}`},(0,n.zw)(i.minutes)+":"+(0,n.zw)(i.seconds),3)])),_:1},8,["max","value","thickness","color"]),(0,s.Wm)("div",u,[a.pauseButton?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(h,{key:0,flat:"",size:"15px",color:"white",label:"Start",stack:"",icon:"play_arrow",onClick:i.startTimer},null,8,["onClick"])),a.pauseButton?((0,s.wg)(),(0,s.j4)(h,{key:1,flat:"",size:"15px",color:"white",label:"Pause",onClick:i.pauseTimer,stack:"",icon:"pause"},null,8,["onClick"])):(0,s.kq)("",!0),(0,s.wy)((0,s.Wm)(h,{flat:"",size:"15px",color:"white",label:"Reset",onClick:i.resetTimer,stack:"",icon:"restore"},null,8,["onClick"]),[[r.F8,a.resetButton]])])])}const f={methods:{askNotificationPermission(){"granted"!==Notification.permission&&Notification.requestPermission()},showNotification(e,t,o){const s=new Notification(e,{body:t,icon:o});return s}}},h=f,w={mixins:[h],data(){return{timer:null,timeChoose:25,pauseButton:!1,resetButton:!1,totalTime:1500,timeOptions:[{label:"Pomodoro",value:25},{label:"Short Break",value:5},{label:"Long Break",value:10}]}},computed:{initialTime(){return 60*this.timeChoose},minutes(){const e=Math.floor(this.totalTime/60);return this.padTime(e)},seconds(){const e=this.totalTime-60*this.minutes;return this.padTime(e)},timerColor(){const e=this.totalTime/60;return e<=3?"red-6":e<=10?"orange-6":"white"}},watch:{timeChoose(){this.resetTimer()},totalTime(){0===this.totalTime&&this.showNotification("Time is up!","","statics/app-logo-128x128.png")}},meta(){return{title:this.timer?`(${this.minutes}:${this.seconds}) Pomodoro Timer`:"Pomodoro Timer"}},methods:{startTimer(){this.timer=setInterval((()=>this.countdown()),1e3),this.resetButton=!0,this.pauseButton=!0},pauseTimer(){this.pauseButton=!1,clearInterval(this.timer),this.timer=null,this.resetButton=!0},resetTimer(){this.totalTime=60*this.timeChoose,clearInterval(this.timer),this.timer=null,this.resetButton=!1,this.pauseButton=!1},padTime(e){return(e<10?"0":"")+e},countdown(){this.totalTime>=1?this.totalTime--:(this.totalTime=0,this.resetTimer())}}};var g=o(8870),k=o(7086),b=o(4607),v=o(7518),W=o.n(v);w.render=p;const C=w;W()(w,"components",{QOptionGroup:g.Z,QCircularProgress:k.Z,QBtn:b.Z});o(71);function q(e,t,o,l,a,i){const n=(0,s.up)("Wheel",!0);return(0,s.wg)(),(0,s.j4)("div",{class:"wrap",onClick:t[1]||(t[1]=(...t)=>e.$refs.wheel.spin&&e.$refs.wheel.spin(...t))},[(0,s.Wm)(n,{ref:"wheel",gift:e.gift,data:e.data,onDone:e.done,imgParams:e.logo},null,8,["gift","data","onDone","imgParams"])])}var T=o(6916);const x=(0,s.aZ)({name:"App",components:{Wheel:T.A},data(){return{gift:5,data:[{id:1,value:"Gift 1",bgColor:"#7d7db3",color:"#ffffff"},{id:2,value:"Gift 2",bgColor:"#ffffff",color:"#000000"},{id:3,value:"Gift 3",bgColor:"#c92729",color:"#ffffff"},{id:4,value:"Gift 4",bgColor:"#7d7db3",color:"#ffffff"},{id:5,value:"Gift 5",bgColor:"#ffffff",color:"#000000"},{id:6,value:"Gift 6",bgColor:"#c92729",color:"#ffffff"}],logo:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",width:100,height:120}}},methods:{done(e){console.log(e)}}});x.render=q;const _=x,Z={class:"q-pa-sm row items-start flex flex-center text-white "},B={class:"text-grey-8 q-gutter-xs"};function Q(e,t,o,l,a,i){const m=(0,s.up)("q-icon"),d=(0,s.up)("q-input"),c=(0,s.up)("q-checkbox"),u=(0,s.up)("q-item-section"),p=(0,s.up)("q-item-label"),f=(0,s.up)("q-btn"),h=(0,s.up)("q-item"),w=(0,s.up)("q-list"),g=(0,s.up)("q-card"),k=(0,s.Q2)("ripple");return(0,s.wg)(),(0,s.j4)("div",Z,[(0,s.Wm)(g,{flat:"",class:"bg-red-4   ",style:{width:"90%",height:"400px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{rounded:"",standout:"","bottom-slots":"",onKeyup:t[2]||(t[2]=(0,r.D2)((e=>l.store.methods.addTask(l.store.state.text)),["enter"])),modelValue:l.store.state.text,"onUpdate:modelValue":t[3]||(t[3]=e=>l.store.state.text=e),label:"Add task",style:{width:"100%"},class:"q-pt-sm top "},{prepend:(0,s.w5)((()=>[(0,s.Wm)(m,{name:"task"})])),append:(0,s.w5)((()=>[(0,s.Wm)(m,{name:"add",onClick:t[1]||(t[1]=e=>l.store.methods.addTask(l.store.state.text)),class:"cursor-pointer"})])),_:1},8,["modelValue"]),(0,s.Wm)(w,{style:{width:"100%"},class:"justify-around"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.j4)(s.HY,null,(0,s.Ko)(l.store.state.todos,(o=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(h,{tag:"label",class:"q-pa-md ",key:o},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{side:"",top:""},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{modelValue:e.check1,"onUpdate:modelValue":t[4]||(t[4]=t=>e.check1=t)},null,8,["modelValue"])])),_:1}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(o),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(u,{top:"",side:""},{default:(0,s.w5)((()=>[(0,s.Wm)("div",B,[(0,s.Wm)(f,{class:"gt-xs",size:"12px",color:"white",onClick:e=>l.store.methods.deleteTask(o),flat:"",dense:"",round:"",icon:"delete"},null,8,["onClick"])])])),_:2},1024)])),_:2},1536)),[[k]]))),128))])),_:1})])),_:1})])}const y={name:"Todo",setup(){const e=(0,s.f3)("store");return{store:e}}};var V=o(151),j=o(8908),P=o(4554),I=o(7011),z=o(3414),G=o(2035),N=o(5735),S=o(2350),U=o(6489);y.render=Q;const L=y;W()(y,"components",{QCard:V.Z,QInput:j.Z,QIcon:P.Z,QList:I.Z,QItem:z.Z,QItemSection:G.Z,QCheckbox:N.Z,QItemLabel:S.Z,QBtn:b.Z}),W()(y,"directives",{Ripple:U.Z});const $=(0,s.aZ)({name:"PageIndex",components:{Timer:C,Wheel:_,Todo:L},setup(){return{step:(0,i.iH)(1)}}});var D=o(4379),A=o(3518),O=o(4340),R=o(118);$.render=a;const F=$;W()($,"components",{QPage:D.Z,QStepper:A.Z,QStep:O.Z,QStepperNavigation:R.Z,QBtn:b.Z})}}]);