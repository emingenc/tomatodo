(self["webpackChunkpomodoro_wheel"]=self["webpackChunkpomodoro_wheel"]||[]).push([[481],{5481:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>M});var o=s(3673),a=s(2323);const r=(0,o.Wm)("div",{class:"text-grey-8 q-gutter-xs"},null,-1),i={class:"text-center text-red-10  q-gutter-xs"},n={style:{width:"%100"}};function l(t,e,s,l,d,c){const u=(0,o.up)("q-checkbox"),m=(0,o.up)("q-item-section"),p=(0,o.up)("q-item-label"),h=(0,o.up)("q-item"),f=(0,o.up)("q-list"),w=(0,o.up)("Todo"),g=(0,o.up)("q-step"),v=(0,o.up)("Timer"),k=(0,o.up)("Wheel"),T=(0,o.up)("q-btn"),b=(0,o.up)("q-stepper"),W=(0,o.up)("q-page"),q=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.j4)(W,{class:"bg-"+t.store.state.primary},{default:(0,o.w5)((()=>[(0,o.Wm)("div",{onDblclick:e[3]||(e[3]=t=>this.store.state.step++),class:this.$q.screen.xs?"fit q-pa-lg":"q-pa-xl",style:this.$q.screen.xs?"":"margin-right: auto; margin-left: auto;  width:70% "},[(0,o.Wm)(f,{class:"justify-around"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(t.store.state.todos,(e=>(0,o.wy)(((0,o.wg)(),(0,o.j4)(h,{tag:"label",class:"q-pa-md",key:e},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{side:"",top:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{false:"",onClick:s=>t.store.methods.deleteTask(e)},null,8,["onClick"])])),_:2},1024),(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(m,{top:"",side:""},{default:(0,o.w5)((()=>[r])),_:1})])),_:2},1536)),[[q]]))),128))])),_:1}),(0,o.Wm)(b,{modelValue:t.store.state.step,"onUpdate:modelValue":e[2]||(e[2]=e=>t.store.state.step=e),vertical:"",ref:"stepper",animated:"","inactive-color":"red-1","active-color":t.store.state.secondary,class:"bg-"+t.store.state.primary},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{name:1,title:"Decide on the Task to be done",icon:"task",done:t.store.state.step>1,"header-nav":t.store.state.step>1},{default:(0,o.w5)((()=>[(0,o.Wm)(w)])),_:1},8,["done","header-nav"]),(0,o.Wm)(g,{name:2,"inactive-color":"red-3",title:"Work for 25 minutes",caption:"",icon:"settings",done:t.store.state.step>2,"header-nav":t.store.state.step>2},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{total:t.store.state.focus,step:3},null,8,["total"])])),_:1},8,["done","header-nav"]),(0,o.Wm)(g,{name:3,"inactive-color":"red-3",title:"Take a short break, reward yourself",icon:"add_comment","header-nav":t.store.state.step>3},{default:(0,o.w5)((()=>[(0,o.Wm)(k)])),_:1},8,["header-nav"]),(0,o.Wm)(g,{name:4,"inactive-color":"blue-3",title:"Rest 5 minutes",caption:"",icon:"settings",done:t.store.state.step>2,"header-nav":t.store.state.step>2,class:" q-gutter-md "},{default:(0,o.w5)((()=>[(0,o.Wm)("div",i,[(0,o.Wm)("h5",null,[(0,o.Wm)("strong",n,(0,a.zw)(t.store.state.reward.value),1)]),(0,o.Wm)(T,{flat:"",dense:"",rounded:"",color:t.store.state.secondary,class:"q-pa-md",label:"long - short",onClick:e[1]||(e[1]=e=>t.store.state.isLong=!t.store.state.isLong)},null,8,["color"])]),t.store.state.isLong?((0,o.wg)(),(0,o.j4)(v,{key:0,total:t.store.state.long,step:2},null,8,["total"])):(0,o.kq)("",!0),t.store.state.isLong?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(v,{key:1,total:t.store.state.short,step:2},null,8,["total"]))])),_:1},8,["done","header-nav"])])),_:1},8,["modelValue","active-color","class"])],38)])),_:1},8,["class"])}const d={class:"full-width text-center"},c={class:"fit column wrap  "};function u(t,e,s,r,i,n){const l=(0,o.up)("q-circular-progress");return(0,o.wg)(),(0,o.j4)("div",d,[(0,o.Wm)(l,{onClick:n.tapTimer,"show-value":"",class:"text-white q-ma-sm text-center",max:n.initialTime,value:i.totalTime,size:"221px",thickness:.13,color:n.timerColor,"track-color":"dark"},{default:(0,o.w5)((()=>[(0,o.Wm)("div",c,[i.pauseButton?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)("p",{key:0,class:` text-${n.timerColor}`,style:{"font-size":"15px"}}," Tap to start ",2)),i.pauseButton?((0,o.wg)(),(0,o.j4)("p",{key:1,class:` text-${n.timerColor}`,style:{"font-size":"15px"}}," Tap to pause ",2)):(0,o.kq)("",!0),(0,o.Wm)("span",{class:`row text-${n.timerColor}`},(0,a.zw)(n.minutes)+":"+(0,a.zw)(n.seconds),3)])])),_:1},8,["onClick","max","value","thickness","color"])])}const m={methods:{askNotificationPermission(){"granted"!==Notification.permission&&Notification.requestPermission()},showNotification(t,e,s){const o=new Notification(t,{body:e,icon:s});return o}}},p=m,h={mixins:[p],props:["total","step"],data(){const t=(0,o.f3)("store");return{store:t,timer:null,pauseButton:!1,resetButton:!1,totalTime:60*this.total,timeOptions:[{label:"Pomodoro",value:25},{label:"Short Break",value:5},{label:"Long Break",value:10}]}},computed:{initialTime(){return 60*this.total},minutes(){const t=Math.floor(this.totalTime/60);return this.padTime(t)},seconds(){const t=this.totalTime-60*this.minutes;return this.padTime(t)},timerColor(){const t=this.totalTime/60;return t<=3?"red-8":t<=10?"red-6":"white"}},watch:{totalTime(){0===this.totalTime&&(this.showNotification("Time is up!","Test",s(1672)),setTimeout((()=>{this.store.state.step=this.step}),500))}},meta(){return{title:this.timer?`(${this.minutes}:${this.seconds}) Pomodoro Timer`:"Pomodoro Timer"}},methods:{startTimer(){this.timer=setInterval((()=>this.countdown()),1e3),this.resetButton=!0,this.pauseButton=!0},pauseTimer(){this.pauseButton=!1,clearInterval(this.timer),this.timer=null,this.resetButton=!0},resetTimer(){this.totalTime=60*this.total,clearInterval(this.timer),this.timer=null,this.resetButton=!1,this.pauseButton=!1},padTime(t){return(t<10?"0":"")+t},countdown(){this.totalTime>=1?this.totalTime--:(this.totalTime=0,this.resetTimer())},tapTimer(){this.pauseButton?this.pauseTimer():this.startTimer()}}};var f=s(8870),w=s(6122),g=s(7518),v=s.n(g);h.render=u;const k=h;v()(h,"components",{QOptionGroup:f.Z,QCircularProgress:w.Z});s(71);function T(t,e,s,a,r,i){const n=(0,o.up)("Wheel",!0);return(0,o.wg)(),(0,o.j4)("div",{class:"wrap",onClick:e[1]||(e[1]=(...e)=>t.$refs.wheel.spin&&t.$refs.wheel.spin(...e))},[(0,o.Wm)(n,{ref:"wheel",gift:t.gift,data:t.data,onDone:t.done,imgParams:t.logo,class:"fitthis.store.state.reward1",style:{height:"%40","font-size":"65px"}},null,8,["gift","data","onDone","imgParams"])])}var b=s(6916);const W=(0,o.aZ)({name:"App",components:{Wheel:b.A},setup(){const t=(0,o.f3)("store");return{store:t,gift:Math.floor(6*Math.random())+1,data:[{id:1,value:t.state.reward1,bgColor:"#4267B2",color:"#ffffff"},{id:2,value:t.state.reward2,bgColor:"#ffffff",color:"#000000"},{id:3,value:t.state.reward3,bgColor:"#c92729",color:"#ffffff"},{id:4,value:t.state.reward4,bgColor:"#7d7db3",color:"#ffffff"},{id:5,value:t.state.reward5,bgColor:"#ffffff",color:"#000000"},{id:6,value:t.state.reward6,bgColor:"#c92729",color:"#ffffff"}],logo:{src:"https://media3.giphy.com/media/XfGxvPXC4SYUvw5iAh/giphy.gif?cid=790b7611c73c7280332db7e8915af68b0bace9b780452c15&rid=giphy.gif&ct=g",width:100,height:100}}},methods:{done(t){this.store.state.reward=t,this.store.state.step=4}}});W.render=T;const q=W;var x=s(8880);const y={class:"q-pa-sm  full-width text-white "};function C(t,e,s,a,r,i){const n=(0,o.up)("q-icon"),l=(0,o.up)("q-input"),d=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)("div",y,[(0,o.Wm)(d,{flat:"",class:"bg-"+a.store.state.primary,style:{width:"100%"}},{default:(0,o.w5)((()=>[a.store.state.todos.length<1?((0,o.wg)(),(0,o.j4)(l,{key:0,rounded:"",standout:"","bottom-slots":"",onKeyup:e[2]||(e[2]=(0,x.D2)((t=>a.store.methods.addTask(a.store.state.text)),["enter"])),modelValue:a.store.state.text,"onUpdate:modelValue":e[3]||(e[3]=t=>a.store.state.text=t),label:"Add task",style:{width:"100%"},class:"q-pt-sm top "},{prepend:(0,o.w5)((()=>[(0,o.Wm)(n,{name:"task"})])),append:(0,o.w5)((()=>[(0,o.Wm)(n,{name:"add",onClick:e[1]||(e[1]=t=>a.store.methods.addTask(a.store.state.text)),class:"cursor-pointer"})])),_:1},8,["modelValue"])):(0,o.kq)("",!0)])),_:1},8,["class"])])}const _={name:"Todo",setup(){const t=(0,o.f3)("store");return{store:t}}};var Z=s(151),B=s(8908),Q=s(4554);_.render=C;const j=_;v()(_,"components",{QCard:Z.Z,QInput:B.Z,QIcon:Q.Z});const P=(0,o.aZ)({name:"PageIndex",components:{Timer:k,Wheel:q,Todo:j},setup(){const t=(0,o.f3)("store");return{store:t}}});var I=s(4379),$=s(7011),z=s(3414),L=s(2035),N=s(5735),V=s(2350),D=s(3518),S=s(4340),A=s(4607),U=s(6489);P.render=l;const M=P;v()(P,"components",{QPage:I.Z,QList:$.Z,QItem:z.Z,QItemSection:L.Z,QCheckbox:N.Z,QItemLabel:V.Z,QStepper:D.Z,QStep:S.Z,QBtn:A.Z}),v()(P,"directives",{Ripple:U.Z})},1672:(t,e,s)=>{t.exports=s.p+"img/button.c7d10089.png"}}]);