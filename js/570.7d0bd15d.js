(self["webpackChunkpomodoro_wheel"]=self["webpackChunkpomodoro_wheel"]||[]).push([[570],{1570:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>R});var s=o(3673),a=o(2323);const l={class:"q-pa-md"},r=(0,s.Wm)("div",{class:"text-grey-8 q-gutter-xs"},null,-1);function i(t,e,o,i,n,c){const d=(0,s.up)("q-checkbox"),m=(0,s.up)("q-item-section"),u=(0,s.up)("q-item-label"),p=(0,s.up)("q-item"),f=(0,s.up)("q-list"),h=(0,s.up)("Todo"),w=(0,s.up)("q-btn"),g=(0,s.up)("q-stepper-navigation"),k=(0,s.up)("q-step"),v=(0,s.up)("Timer"),b=(0,s.up)("Wheel"),T=(0,s.up)("q-stepper"),W=(0,s.up)("q-page"),q=(0,s.Q2)("ripple");return(0,s.wg)(),(0,s.j4)(W,{class:"flex bg-red-3 flex-center"},{default:(0,s.w5)((()=>[(0,s.Wm)("div",l,[(0,s.Wm)(f,{style:{width:"100%"},class:"justify-around"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.j4)(s.HY,null,(0,s.Ko)(t.store.state.todos,(e=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(p,{tag:"label",class:"q-pa-md ",key:e},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{side:"",top:""},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{onClick:o=>t.store.methods.deleteTask(e)},null,8,["onClick"])])),_:2},1024),(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(m,{top:"",side:""},{default:(0,s.w5)((()=>[r])),_:1})])),_:2},1536)),[[q]]))),128))])),_:1}),(0,s.Wm)(T,{modelValue:t.store.state.step,"onUpdate:modelValue":e[7]||(e[7]=e=>t.store.state.step=e),vertical:"",ref:"stepper",animated:"","inactive-color":"red-2","active-color":"red-10",class:"bg-red-4"},{default:(0,s.w5)((()=>[(0,s.Wm)(k,{name:1,title:"Decide on the Task to be done",icon:"task",done:t.store.state.step>1,"header-nav":t.store.state.step>1},{default:(0,s.w5)((()=>[(0,s.Wm)(h),1==t.store.state.todos.length?((0,s.wg)(),(0,s.j4)(g,{key:0,class:"q-pa-md center"},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{onClick:e[1]||(e[1]=e=>t.store.state.step=2),color:"red-10",label:"Continue"})])),_:1})):(0,s.kq)("",!0)])),_:1},8,["done","header-nav"]),(0,s.Wm)(k,{name:2,"inactive-color":"red-3",title:"Work for 25 minutes",caption:"",icon:"settings",done:t.store.state.step>2,"header-nav":t.store.state.step>2},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{total:.1},null,8,["total"]),(0,s.Wm)(g,{class:"q-pa-md absolute-bottom"},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{color:"red-10",onClick:e[2]||(e[2]=e=>t.store.state.step=3),label:"Continue"}),(0,s.Wm)(w,{flat:"",onClick:e[3]||(e[3]=e=>t.store.state.step=1),color:"red-10",label:"Back",class:"q-ml-sm"})])),_:1})])),_:1},8,["done","header-nav"]),(0,s.Wm)(k,{name:3,"inactive-color":"red-3",title:"Take a short break, reward yourself",icon:"add_comment","header-nav":t.store.state.step>3},{default:(0,s.w5)((()=>[(0,s.Wm)(b),(0,s.Wm)(g,{class:"q-pa-md center "},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{color:"red-10",onClick:e[4]||(e[4]=e=>t.done3=!0),label:"Finish"}),(0,s.Wm)(w,{flat:"",onClick:e[5]||(e[5]=e=>t.store.state.step=2),color:"red-10",label:"Back",class:"q-ml-sm"}),(0,s.Wm)(w,{flat:"",onClick:e[6]||(e[6]=e=>t.store.state.step=1),color:"red-10",label:"Restart",class:"q-ml-sm"})])),_:1})])),_:1},8,["header-nav"])])),_:1},8,["modelValue"])])])),_:1})}var n=o(8880);const c={class:"full-width text-center"},d={class:"text-center q-mt-lg q-mb-lg full-width  q-pa-md"};function m(t,e,o,l,r,i){const m=(0,s.up)("q-circular-progress"),u=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.j4)("div",c,[(0,s.Wm)(m,{"show-value":"",class:"text-white q-ma-sm ",max:i.initialTime,value:r.totalTime,size:"300px",thickness:.13,color:i.timerColor,"track-color":"dark"},{default:(0,s.w5)((()=>[(0,s.Wm)("span",{class:`text-${i.timerColor}`},(0,a.zw)(i.minutes)+":"+(0,a.zw)(i.seconds),3)])),_:1},8,["max","value","thickness","color"]),(0,s.Wm)("div",d,[r.pauseButton?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(u,{key:0,flat:"",size:"15px",color:"white",label:"Start",stack:"",icon:"play_arrow",onClick:i.startTimer},null,8,["onClick"])),r.pauseButton?((0,s.wg)(),(0,s.j4)(u,{key:1,flat:"",size:"15px",color:"white",label:"Pause",onClick:i.pauseTimer,stack:"",icon:"pause"},null,8,["onClick"])):(0,s.kq)("",!0),(0,s.wy)((0,s.Wm)(u,{flat:"",size:"15px",color:"white",label:"Reset",onClick:i.resetTimer,stack:"",icon:"restore"},null,8,["onClick"]),[[n.F8,r.resetButton]])])])}const u={methods:{askNotificationPermission(){"granted"!==Notification.permission&&Notification.requestPermission()},showNotification(t,e,o){const s=new Notification(t,{body:e,icon:o});return s}}},p=u,f={mixins:[p],props:["total"],data(){const t=(0,s.f3)("store");return{store:t,timer:null,pauseButton:!1,resetButton:!1,totalTime:60*this.total,timeOptions:[{label:"Pomodoro",value:25},{label:"Short Break",value:5},{label:"Long Break",value:10}]}},computed:{initialTime(){return 60*this.total},minutes(){const t=Math.floor(this.totalTime/60);return this.padTime(t)},seconds(){const t=this.totalTime-60*this.minutes;return this.padTime(t)},timerColor(){const t=this.totalTime/60;return t<=3?"red-6":t<=10?"orange-6":"white"}},watch:{totalTime(){0===this.totalTime&&(this.store.state.step=3,this.showNotification("Time is up!","Test",o(1672)))}},meta(){return{title:this.timer?`(${this.minutes}:${this.seconds}) Pomodoro Timer`:"Pomodoro Timer"}},methods:{startTimer(){this.timer=setInterval((()=>this.countdown()),1e3),this.resetButton=!0,this.pauseButton=!0},pauseTimer(){this.pauseButton=!1,clearInterval(this.timer),this.timer=null,this.resetButton=!0},resetTimer(){this.totalTime=60*this.total,clearInterval(this.timer),this.timer=null,this.resetButton=!1,this.pauseButton=!1},padTime(t){return(t<10?"0":"")+t},countdown(){this.totalTime>=1?this.totalTime--:(this.totalTime=0,this.resetTimer())}}};var h=o(8870),w=o(7086),g=o(4607),k=o(7518),v=o.n(k);f.render=m;const b=f;v()(f,"components",{QOptionGroup:h.Z,QCircularProgress:w.Z,QBtn:g.Z});o(71);function T(t,e,o,a,l,r){const i=(0,s.up)("Wheel",!0);return(0,s.wg)(),(0,s.j4)("div",{class:"wrap",onClick:e[1]||(e[1]=(...e)=>t.$refs.wheel.spin&&t.$refs.wheel.spin(...e))},[(0,s.Wm)(i,{ref:"wheel",gift:t.gift,data:t.data,onDone:t.done,imgParams:t.logo,style:{width:"%100",height:"60"}},null,8,["gift","data","onDone","imgParams"])])}var W=o(6916);const q=(0,s.aZ)({name:"App",components:{Wheel:W.A},data(){return{gift:5,data:[{id:1,value:"Gift 1",bgColor:"#7d7db3",color:"#ffffff"},{id:2,value:"Gift 2",bgColor:"#ffffff",color:"#000000"},{id:3,value:"Gift 3",bgColor:"#c92729",color:"#ffffff"},{id:4,value:"Gift 4",bgColor:"#7d7db3",color:"#ffffff"},{id:5,value:"Gift 5",bgColor:"#ffffff",color:"#000000"},{id:6,value:"Gift 6",bgColor:"#c92729",color:"#ffffff"}],logo:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",width:100,height:30}}},methods:{done(t){console.log(t)}}});q.render=T;const C=q,x={class:"q-pa-sm row items-start flex flex-center text-white "};function _(t,e,o,a,l,r){const i=(0,s.up)("q-icon"),c=(0,s.up)("q-input"),d=(0,s.up)("q-card");return(0,s.wg)(),(0,s.j4)("div",x,[(0,s.Wm)(d,{flat:"",class:"bg-red-4   ",style:{width:"90%"}},{default:(0,s.w5)((()=>[a.store.state.todos.length<1?((0,s.wg)(),(0,s.j4)(c,{key:0,rounded:"",standout:"","bottom-slots":"",onKeyup:e[2]||(e[2]=(0,n.D2)((t=>a.store.methods.addTask(a.store.state.text)),["enter"])),modelValue:a.store.state.text,"onUpdate:modelValue":e[3]||(e[3]=t=>a.store.state.text=t),label:"Add task",style:{width:"100%"},class:"q-pt-sm top "},{prepend:(0,s.w5)((()=>[(0,s.Wm)(i,{name:"task"})])),append:(0,s.w5)((()=>[(0,s.Wm)(i,{name:"add",onClick:e[1]||(e[1]=t=>a.store.methods.addTask(a.store.state.text)),class:"cursor-pointer"})])),_:1},8,["modelValue"])):(0,s.kq)("",!0)])),_:1})])}const Z={name:"Todo",setup(){const t=(0,s.f3)("store");return{store:t}}};var y=o(151),B=o(8908),Q=o(4554);Z.render=_;const j=Z;v()(Z,"components",{QCard:y.Z,QInput:B.Z,QIcon:Q.Z});const P=(0,s.aZ)({name:"PageIndex",components:{Timer:b,Wheel:C,Todo:j},setup(){const t=(0,s.f3)("store");return{store:t}}});var I=o(4379),V=o(7011),z=o(3414),G=o(2035),N=o(5735),S=o(2350),L=o(3518),$=o(4340),D=o(118),A=o(6489);P.render=i;const R=P;v()(P,"components",{QPage:I.Z,QList:V.Z,QItem:z.Z,QItemSection:G.Z,QCheckbox:N.Z,QItemLabel:S.Z,QStepper:L.Z,QStep:$.Z,QStepperNavigation:D.Z,QBtn:g.Z}),v()(P,"directives",{Ripple:A.Z})},1672:(t,e,o)=>{t.exports=o.p+"img/button.c7d10089.png"}}]);