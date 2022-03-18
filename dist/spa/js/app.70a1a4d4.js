(()=>{"use strict";var e={2844:(e,o,t)=>{t(5363),t(71);var n=t(8880),a=t(9592),r=t(3673);function s(e,o,t,n,a,s){const l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(l)}const l=(0,r.aZ)({name:"App"});var u=t(4260);const i=(0,u.Z)(l,[["render",s]]),c=i;var d=t(9922),p=t(7083),m=t(9582),v=t(2323);const f=(0,r.Uk)("Add Coupons"),g={class:"row"},h={class:"col-xs-12 col-md-6 q-pl-md"},w={class:"row justify-center"},b={class:"col-xs-12 col-md-6 q-pl-md"},y={class:"row"},C={class:"col-xs-6 saved-coupons-date-section"},D={class:"text-h6"},_=(0,r.Uk)(" Saved Coupons "),Z={class:"saved-coupons-date"},x={class:"col-xs-6"},E=(0,r.Uk)("Reset Data");function q(e,o,t,n,a,s){const l=(0,r.up)("page-header"),u=(0,r.up)("date-input"),i=(0,r.up)("q-icon"),c=(0,r.up)("q-input"),d=(0,r.up)("q-btn"),p=(0,r.up)("q-form"),m=(0,r.up)("q-card-actions"),q=(0,r.up)("q-card-section"),k=(0,r.up)("q-separator"),W=(0,r.up)("q-toggle"),I=(0,r.up)("q-card"),N=(0,r.up)("container");return(0,r.wg)(),(0,r.j4)(N,{isLoading:n.isLoading,hasError:n.loadingFailed},{default:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[f])),_:1}),(0,r._)("div",g,[(0,r._)("div",h,[(0,r.Wm)(p,{onSubmit:n.saveCoupon,class:"q-gutter-md"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{modelValue:n.couponsDate,"onUpdate:modelValue":o[0]||(o[0]=e=>n.couponsDate=e)},null,8,["modelValue"]),(0,r.Wm)(c,{filled:"",modelValue:n.couponNumber,"onUpdate:modelValue":o[1]||(o[1]=e=>n.couponNumber=e),modelModifiers:{number:!0},label:"Coupon Number","lazy-rules":"ondemand",rules:[n.formSchema.couponNumber.validate],"error-message":n.formSchema.couponNumber.errorMessage,error:n.formSchema.couponNumber.hasError},{prepend:(0,r.w5)((()=>[(0,r.Wm)(i,{name:"pin"})])),_:1},8,["modelValue","rules","error-message","error"]),(0,r._)("div",w,[(0,r.Wm)(d,{label:"Save Coupon",type:"submit",color:"primary",class:"bg-white","text-color":"primary",padding:"0.81rem"}),(0,r.Wm)(d,{label:"Save All",type:"button",color:"primary",onClick:n.saveAll,class:"q-ml-sm",padding:"0.81rem",disable:n.couponsArray.length<=0},null,8,["onClick","disable"])])])),_:1},8,["onSubmit"])]),(0,r._)("div",b,[(0,r.Wm)(I,{class:"q-mt-lg saved-coupons-section"},{default:(0,r.w5)((()=>[(0,r.Wm)(q,null,{default:(0,r.w5)((()=>[(0,r._)("div",y,[(0,r._)("div",C,[(0,r._)("div",D,[_,(0,r._)("span",Z,"(for "+(0,v.zw)(n.couponsDate)+")",1)])]),(0,r._)("div",x,[(0,r.Wm)(m,{style:{float:"right"}},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{onClick:n.resetData,outline:""},{default:(0,r.w5)((()=>[E])),_:1},8,["onClick"])])),_:1})])])])),_:1}),(0,r.Wm)(k,{inset:""}),(0,r.Wm)(q,{class:"q-pa-md saved-coupons-main-content"},{default:(0,r.w5)((()=>[(0,r._)("p",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.couponsArray,(e=>((0,r.wg)(),(0,r.iD)("span",{key:e},[(0,r.Wm)(W,{modelValue:n.couponsArray,"onUpdate:modelValue":o[2]||(o[2]=e=>n.couponsArray=e),val:e,color:"green"},null,8,["modelValue","val"]),(0,r.Uk)((0,v.zw)(e),1)])))),128))])])),_:1})])),_:1})])])])),_:1},8,["isLoading","hasError"])}var k=t(2661),W=t(8825),I=t(1959),N=t(3617);const S=e=>{const o=k.ZP.formatDate(new Date,"DD-MM-YYYY").split("-"),t=new Date(o[2],parseInt(o[1])-1,o[0]),n=e.split("-"),a=new Date(n[2],parseInt(n[1])-1,n[0]),r=k.ZP.getDateDiff(t,a,"days");return parseInt(r)<0},M={isDateGreaterThanToday:S};function A(){const e=(e,o,t,n)=>""===e||null===e?"You have not entered a coupon":(e=parseInt(e),!t.includes(e)||e<=0?"The coupon you entered is invalid or does not exist":o.includes(e)?"You cannot enter the same coupon twice":"undefined"===typeof n||0===Object.keys(n).length||!n.coupons.includes(e)||"You have already entered this coupon for this date"),o=e=>{if(M.isDateGreaterThanToday(e))return"Date is invalid or greater than today"};return{validateNumber:e,validateDate:o}}function U(){const e=(0,I.iH)(!0),o=(0,I.iH)(!1);return{isLoading:e,loadingFailed:o}}function Q(){const e=(0,N.oR)();let{isLoading:o,loadingFailed:t}=U();const n=(0,I.iH)([]),a=async()=>{try{await e.dispatch("coupons/loadCouponEntries"),n.value=e.getters["coupons/getCouponEntries"]()}catch(a){t.value=!0}finally{o.value=!1}};return{loadCoupons:a,currentCouponData:n,isLoading:o,loadingFailed:t}}var V=t(3964);const j={setup(){const e=(0,W.Z)(),o=(0,N.oR)(),t=(0,I.iH)(""),n=(0,I.iH)(k.ZP.formatDate(Date.now(),"DD-MM-YYYY")),a=(0,I.iH)([]),s=(0,I.iH)([]);(0,r.YP)(n,((e,o)=>{a.value=[],t.value=""}));let{dispatchAction:l,formSchema:u}=(0,V.Z)(),{loadCoupons:i,currentCouponData:c,isLoading:d,loadingFailed:p}=Q(),{validateNumber:v,validateDate:f}=A();const g=async()=>{const e=()=>{s.value=o.getters["coupons/getAvailableCouponNumbers"],i()};l("coupons/loadAvailableCouponNumbers",null,e)};g(),u.value={couponNumber:{validate:function(e){let o="";return o=i().then((()=>{const o=c.value.find((e=>e.date===n.value));return v(e,a.value,s.value,o)})),o},hasError:!1,errorMessage:""},couponsDate:{validate:function(){return f(n.value)},hasError:!1,errorMessage:""}},(0,m.iS)(((o,t,n)=>{a.value.length>0?e.dialog({title:"Confirm Page Leave",message:"You have unsaved coupons. Are you sure you want to leave?",persistent:!0,cancel:{label:"Stay on Page"},ok:{label:"Leave"}}).onOk((()=>{n()})).onCancel((()=>{n(!1)})):n()}));const h=()=>{a.value=[],t.value=""};return{couponNumber:t,couponsDate:n,couponsArray:a,availableCouponNumbers:s,loadCoupons:i,currentCouponData:c,isLoading:d,loadingFailed:p,formSchema:u,saveCoupon(){const e=parseInt(t.value);a.value.push(e),t.value=""},async saveAll(){const e=()=>{h()};l("coupons/saveCouponEntries",{date:n.value,coupons:a.value.join(",")},e)},resetData(){h()}}}};var L=t(8689),P=t(1206),T=t(4554),Y=t(6819),H=t(151),O=t(5589),F=t(9367),B=t(5869),R=t(8886),z=t(7518),K=t.n(z);const $=(0,u.Z)(j,[["render",q],["__scopeId","data-v-25e1bccd"]]),J=$;K()(j,"components",{QForm:L.Z,QInput:P.Z,QIcon:T.Z,QBtn:Y.Z,QCard:H.Z,QCardSection:O.Z,QCardActions:F.Z,QSeparator:B.Z,QToggle:R.Z});const G=(0,r.Uk)("All Coupons"),X={class:"q-mb-lg"},ee={class:"row"},oe={class:"col-xs-12 col-md-6"},te={key:0},ne={key:1},ae={key:0},re={key:1};function se(e,o,t,n,a,s){const l=(0,r.up)("page-header"),u=(0,r.up)("date-input"),i=(0,r.up)("CouponsEntryItem"),c=(0,r.up)("q-list"),d=(0,r.up)("q-item-section"),p=(0,r.up)("container");return(0,r.wg)(),(0,r.j4)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[G])),_:1}),(0,r._)("div",X,[(0,r._)("div",ee,[(0,r._)("div",oe,[(0,r.Wm)(u,{modelValue:n.couponsDate,"onUpdate:modelValue":o[0]||(o[0]=e=>n.couponsDate=e),label:"Filter By Date"},null,8,["modelValue"])])])]),n.currentCouponEntries.length>0?((0,r.wg)(),(0,r.iD)("div",te,[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,{bordered:!1,separator:""},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.currentCouponEntries,(e=>((0,r.wg)(),(0,r.j4)(i,{key:e.date,date:e.date,coupons:e.coupons,onRemoveCoupons:n.removeCoupons},null,8,["date","coupons","onRemoveCoupons"])))),128))])),_:1})])),_:1})])):((0,r.wg)(),(0,r.iD)("div",ne,[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[null===n.couponsDate||""===n.couponsDate?((0,r.wg)(),(0,r.iD)("p",ae," No Coupon Entries found for the past 7 days ")):((0,r.wg)(),(0,r.iD)("p",re,"No Coupon Entries found for this date"))])),_:1})]))])),_:1})}const le={class:"row"},ue={class:"col-xs-6"},ie={class:"col-xs-6"},ce={class:"row q-ml-lg"},de={class:"col-xs-12"},pe={class:"coupons-header q-mb-md"},me={class:"col-xs-8 col-sm-8 col-md-5 col-lg-4"},ve={class:"col-xs-12 q-mt-lg"},fe={class:"row"},ge={class:"row"},he={class:"col-xs-12"};function we(e,o,t,a,s,l){const u=(0,r.up)("q-item-label"),i=(0,r.up)("q-btn"),c=(0,r.up)("q-icon"),d=(0,r.up)("q-input"),p=(0,r.up)("q-item-section"),m=(0,r.up)("q-toggle"),f=(0,r.up)("q-card");return(0,r.wy)(((0,r.wg)(),(0,r.j4)(f,{class:(0,v.C_)(["q-pa-md q-mt-md",{"today-card-bg":a.isDateToday}])},{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r._)("div",le,[(0,r._)("div",ue,[(0,r.Wm)(u,{class:"date-header"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,v.zw)(a.dateText),1)])),_:1})]),(0,r._)("div",ie,[(0,r.Wm)(i,{icon:a.isEditMode?"visibility":"edit",outline:"",color:"primary",padding:"xs",size:"md",class:"float-right",onClick:a.enableEditCoupons,title:"Edit/Remove Coupons"},null,8,["icon","onClick"])])]),(0,r._)("div",ce,[(0,r.wy)((0,r._)("div",de,[(0,r._)("span",pe,(0,v.zw)(a.couponsHeaderText),1)],512),[[n.F8,!a.isDateToday]]),(0,r._)("div",me,[(0,r.Wm)(d,{label:"Filter by coupon number",modelValue:a.filteredCoupon,"onUpdate:modelValue":o[0]||(o[0]=e=>a.filteredCoupon=e),modelModifiers:{trim:!0},filled:"",dense:""},{prepend:(0,r.w5)((()=>[(0,r.Wm)(c,{name:"search"})])),_:1},8,["modelValue"])]),(0,r._)("div",ve,[a.isEditMode?((0,r.wg)(),(0,r.j4)(p,{key:1,style:{width:"100%"}},{default:(0,r.w5)((()=>[(0,r._)("div",fe,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.couponsArray,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:"col-xs-3 col-sm-2 col-lg-1"},[(0,r.Wm)(m,{modelValue:a.displayedCouponsArray,"onUpdate:modelValue":o[1]||(o[1]=e=>a.displayedCouponsArray=e),val:e,color:"green",label:e.toString()},null,8,["modelValue","val","label"])])))),128))]),(0,r._)("div",ge,[(0,r._)("div",he,[(0,r.Wm)(i,{label:"Save Changes",type:"button",color:"primary",onClick:a.triggerCouponsRemoval},null,8,["onClick"])])])])),_:1})):((0,r.wg)(),(0,r.j4)(p,{key:0},{default:(0,r.w5)((()=>[(0,r._)("p",null,(0,v.zw)(a.couponsValues),1)])),_:1}))])])])),_:1})])),_:1},8,["class"])),[[n.F8,t.coupons.length>0]])}const be={name:"CouponsEntryItem",props:["date","coupons"],setup(e,{emit:o}){const t=(0,I.iH)(!1),n=(0,I.iH)(e.coupons),a=(0,I.iH)(""),r=(0,I.iH)(k.ZP.formatDate(Date.now(),"DD-MM-YYYY")),s=(0,I.iH)(r.value===e.date),l=(0,I.Fl)((()=>{let o=e.date;return s.value?"Today - "+o+" - Coupons Total Number : "+e.coupons.length:o})),u=(0,I.Fl)((()=>{let o=e.coupons.length,t="Coupons ( total : "+o+" )";return s.value?"":t})),i=()=>{let o=e.coupons,t=parseInt(a.value);return""!==t&&t>0?o.filter((e=>e===t)):o},c=(0,I.Fl)((()=>i())),d=(0,I.Fl)((()=>{let e=i();return e.length>0?e.join(" , "):"No Coupons found"})),p=()=>{t.value=!t.value},m=()=>{let r=e.coupons.filter((e=>!n.value.includes(e)));o("removeCoupons",{remainingCoupons:n.value,removedCouponNumbers:r,date:e.date}),t.value=!1,a.value=""};return{dateText:l,couponsHeaderText:u,filteredCoupon:a,couponsValues:d,displayedCouponsArray:n,couponsArray:c,isEditMode:t,enableEditCoupons:p,triggerCouponsRemoval:m,isDateToday:s}}};var ye=t(2035),Ce=t(2350);const De=(0,u.Z)(be,[["render",we],["__scopeId","data-v-66130975"]]),_e=De;K()(be,"components",{QCard:H.Z,QItemSection:ye.Z,QItemLabel:Ce.Z,QBtn:Y.Z,QInput:P.Z,QIcon:T.Z,QToggle:R.Z});var Ze=t(5787);const xe={components:{CouponsEntryItem:_e},setup(){(0,N.oR)();const e=(0,I.iH)("");let{loadCoupons:o,currentCouponData:t,isLoading:n,loadingFailed:a}=Q(),{dispatchAction:r}=(0,V.Z)();o();const s=(0,I.Fl)((()=>{const o=e.value;return""!==o&&null!==o?t.value.filter((e=>o===e.date)):t.value})),l=async e=>{let o=t.value.find((o=>o.date===e.date)),n=o.coupons.filter((o=>e.remainingCoupons.includes(o)));const a={date:e.date,newCoupons:n,removedCouponNumbers:e.removedCouponNumbers},s=()=>{Ze.Z.successNotify("Coupons for "+e.date+" have been updated")};r("coupons/deleteCouponEntries",a,s)};return{currentCouponEntries:s,couponsDate:e,removeCoupons:l,loadCoupons:o,currentCouponData:t,isLoading:n,loadingFailed:a}}};var Ee=t(7011);const qe=(0,u.Z)(xe,[["render",se]]),ke=qe;K()(xe,"components",{QItemSection:ye.Z,QList:Ee.Z});const We=(0,r.Uk)("Export Monthly Coupons"),Ie={class:"flex justify-center"},Ne={class:"column"},Se=(0,r.Uk)(" Selected Month : "),Me={class:"flex justify-center q-mt-lg"};function Ae(e,o,t,n,a,s){const l=(0,r.up)("page-header"),u=(0,r.up)("month-picker"),i=(0,r.up)("q-btn"),c=(0,r.up)("container");return(0,r.wg)(),(0,r.j4)(c,null,{default:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[We])),_:1}),(0,r._)("div",Ie,[(0,r._)("div",Ne,[(0,r._)("p",null,[Se,(0,r._)("b",null,(0,v.zw)(n.currentMonthInfoText),1)]),(0,r.Wm)(u,{"default-month":n.defaultMonth,"show-year":!1,"max-date":n.maxDate,onInput:n.setSelectedMonth,onChange:n.setDefaultMonth},null,8,["default-month","max-date","onInput","onChange"]),(0,r._)("div",Me,[(0,r.Wm)(i,{label:"Export",type:"button",color:"primary",padding:"0.81rem",size:"md",onClick:n.downloadExport},null,8,["onClick"])])])])])),_:1})}t(7965),t(6016);var Ue=t(4045),Qe=t(9909),Ve=t(5474);const je={components:{MonthPicker:Ue.lH},setup(){(0,N.oR)();let{axiosCall:e}=(0,Qe.Z)(),{handleServerError:o}=(0,V.Z)();const t=(0,I.iH)((new Date).getMonth()+1),n=(0,I.iH)(new Date),a=(0,I.iH)(t.value),r=(0,I.iH)(""),s=(0,I.Fl)((()=>r.value+" - "+(new Date).getFullYear()));return{maxDate:n,defaultMonth:t,selectedMonthText:r,selectedMonthIndex:a,currentMonthInfoText:s,axiosCall:e,async downloadExport(){await Ve.api.get("/api/exports/monthly-coupons",{params:{month:parseInt(a.value)},responseType:"blob"}).then((e=>{const o=document.createElement("a");o.href=window.URL.createObjectURL(new Blob([e.data]));const t=r.value+"_"+(new Date).getFullYear();o.setAttribute("download",t+".xlsx"),document.body.appendChild(o),o.click(),document.body.removeChild(o)})).catch((e=>{o(e)}))},setDefaultMonth(e){r.value=e.month},setSelectedMonth(e){r.value=e.month,a.value=e.monthIndex}}}},Le=(0,u.Z)(je,[["render",Ae]]),Pe=Le;K()(je,"components",{QBtn:Y.Z});const Te=(0,r._)("h2",null,"Welcome to Qpon App",-1);function Ye(e,o,t,n,a,s){const l=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(l,{class:"flex flex-center"},{default:(0,r.w5)((()=>[Te])),_:1})}const He=(0,r.aZ)({name:"Index"});var Oe=t(4379);const Fe=(0,u.Z)(He,[["render",Ye]]),Be=Fe;K()(He,"components",{QPage:Oe.Z});var Re=t(6682);const ze=[{path:"/",component:()=>Promise.all([t.e(736),t.e(884)]).then(t.bind(t,6884)),children:[{path:"",component:Be},{path:"/login",name:"login",component:Re.Z},{path:"/add-coupon",name:"add-coupon",component:J},{path:"/coupons",name:"coupons",component:ke},{path:"/export-coupons",name:"export-coupons",component:Pe}]},{path:"/:catchAll(.*)*",component:()=>t.e(681).then(t.bind(t,681))}],Ke=ze,$e=(0,p.BC)((function(){const e=m.r5,o=(0,m.p7)({scrollBehavior:()=>({left:0,top:0}),routes:Ke,history:e("")});return o}));async function Je(e,o){const n="function"===typeof d["default"]?await(0,d["default"])({}):d["default"],{storeKey:r}=await Promise.resolve().then(t.bind(t,9922)),s="function"===typeof $e?await $e({store:n}):$e;n.$router=s;const l=e(c);return l.use(a.Z,o),{app:l,store:n,storeKey:r,router:s}}var Ge=t(6417),Xe=t(2147);const eo={config:{},components:{QBtn:Y.Z},plugins:{Notify:Ge.Z,Dialog:Xe.Z}},oo="";async function to({app:e,router:o,store:t,storeKey:n},a){let r=!1;const s=e=>{try{return o.resolve(e).href}catch(t){}return Object(e)===e?null:e},l=e=>{if(r=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const o=s(e);null!==o&&(window.location.href=o,window.location.reload())},u=window.location.href.replace(window.location.origin,"");for(let c=0;!1===r&&c<a.length;c++)try{await a[c]({app:e,router:o,store:t,ssrContext:null,redirect:l,urlPath:u,publicPath:oo})}catch(i){return i&&i.url?void l(i.url):void console.error("[Quasar] boot error:",i)}!0!==r&&(e.use(o),e.use(t,n),e.mount("#q-app"))}Je(n.ri,eo).then((e=>Promise.all([Promise.resolve().then(t.bind(t,5474)),Promise.resolve().then(t.bind(t,1041))]).then((o=>{const t=o.map((e=>e.default)).filter((e=>"function"===typeof e));to(e,t)}))))},1041:(e,o,t)=>{t.r(o),t.d(o,{default:()=>P});var n=t(7083),a=t(3673);const r={class:"row items-center justify-end"};function s(e,o,t,n,s,l){const u=(0,a.up)("q-btn"),i=(0,a.up)("q-date"),c=(0,a.up)("q-popup-proxy"),d=(0,a.up)("q-icon"),p=(0,a.up)("q-input"),m=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(p,{filled:"",modelValue:t.couponsDate,"onUpdate:modelValue":n.updateDate,mask:"##-##-####",label:""!==t.label?t.label:""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(d,{name:"event",class:"cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{ref:"qDateProxy",cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{modelValue:t.couponsDate,"onUpdate:modelValue":n.updateDate,options:n.dateOptions,mask:"DD-MM-YYYY",minimal:""},{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a.wy)((0,a.Wm)(u,{label:"Close",color:"primary",flat:""},null,512),[[m]])])])),_:1},8,["modelValue","onUpdate:modelValue","options"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","onUpdate:modelValue","label"])}var l=t(2661),u=t(1959);const i={props:["couponsDate","label"],emits:["update:modelValue"],setup(e,{emit:o}){const t=l.ZP.formatDate(new Date,"DD-MM-YYYY").split("-"),n=(0,u.iH)(new Date(t[2],parseInt(t[1])-1,t[0]));return{updateDate(e){o("update:modelValue",e)},dateOptions(e){let o=e.split("/");const t=new Date(o[0],parseInt(o[1])-1,o[2]),a=l.ZP.getDayOfWeek(t),r=6===a||7===a;if(r)return!1;const s=l.ZP.getDateDiff(n.value,t,"days");return!(s>8||s<0)}}}};var c=t(4260),d=t(1206),p=t(4554),m=t(3944),v=t(643),f=t(6819),g=t(677),h=t(7518),w=t.n(h);const b=(0,c.Z)(i,[["render",s]]),y=b;w()(i,"components",{QInput:d.Z,QIcon:p.Z,QPopupProxy:m.Z,QDate:v.Z,QBtn:f.Z}),w()(i,"directives",{ClosePopup:g.Z});const C={class:"text-center"};function D(e,o){return(0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("h5",C,[(0,a.WI)(e.$slots,"default")])])}const _={},Z=(0,c.Z)(_,[["render",D]]),x=Z,E={class:"row q-pa-md"},q={class:"col-xs-12"},k={key:0,class:"container-section"},W={key:1,class:"container-section"},I=(0,a._)("h3",null,"An error occured while loading this page",-1),N=[I],S={key:2,class:"container-section"},M=(0,a._)("h3",null,"...Loading",-1),A=[M];function U(e,o,t,n,r,s){return(0,a.wg)(),(0,a.iD)("section",E,[(0,a._)("div",q,[t.isLoading||t.hasError?!t.isLoading&&t.hasError?((0,a.wg)(),(0,a.iD)("div",W,N)):((0,a.wg)(),(0,a.iD)("div",S,A)):((0,a.wg)(),(0,a.iD)("div",k,[(0,a.WI)(e.$slots,"default")]))])])}const Q={props:{isLoading:{type:Boolean,required:!1,default:!1},hasError:{type:Boolean,required:!1,default:!1}}},V=(0,c.Z)(Q,[["render",U]]),j=V;var L=t(6682);const P=(0,n.xr)((({app:e})=>{e.component("date-input",y),e.component("page-header",x),e.component("container",j),e.component("login",L.Z)}))},5474:(e,o,t)=>{t.r(o),t.d(o,{default:()=>l,api:()=>s});var n=t(7083),a=t(52),r=t.n(a);const s=r().create({withCredentials:!0,baseURL:"http://qpon.test"}),l=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=r(),e.config.globalProperties.$api=s}))},9922:(e,o,t)=>{t.r(o),t.d(o,{default:()=>y});var n=t(7083),a=t(3617);function r(){return{availableCouponNumbers:[],couponEntries:[],shouldUpdateCoupons:!0,shouldUpdateAvailableCouponNumbers:!0}}const s={shouldUpdateCoupons(e){return e.shouldUpdateCoupons},shouldUpdateAvailableCouponNumbers(e){return e.shouldUpdateAvailableCouponNumbers},getAvailableCouponNumbers(e){return e.availableCouponNumbers},getCouponEntries:e=>(o=null)=>e.couponEntries},l={setShouldUpdateCouponEntries(e,o){e.shouldUpdateCoupons=o},setCouponEntries(e,o){e.couponEntries=o,e.shouldUpdateCoupons=!1},setAvailableCouponNumbers(e,o){e.availableCouponNumbers=o,e.shouldUpdateAvailableCouponNumbers=!1},updateCouponsByDate(e,o){e.couponEntries[o.indexByDate].coupons=o.coupons}};var u=t(9909),i=t(5787);let{axiosCall:c}=(0,u.Z)();const d={async saveCouponEntries(e,o){const t={couponsDate:o.date,coupons:o.coupons},n=e=>{i.Z.successNotify(e)};await c("post","/api/coupons/store",t,n),e.commit("setShouldUpdateCouponEntries",!0)},async loadCouponEntries(e){if(!e.getters.shouldUpdateCoupons)return;const o=o=>{let t=o.map((e=>({date:e.date,coupons:e.coupons.split(",").map((e=>parseInt(e)))})));e.commit("setCouponEntries",t)};await c("get","/api/coupons",{},o)},async loadAvailableCouponNumbers(e){if(!e.getters.shouldUpdateAvailableCouponNumbers)return;const o=o=>{e.commit("setAvailableCouponNumbers",o)};await c("get","/api/coupons/available",{},o)},async deleteCouponEntries(e,o){const t=o.date,n={date:t,coupons:o.removedCouponNumbers.join(",")};await c("post","/api/coupons/destroy",n);const a=e.getters.getCouponEntries().findIndex((e=>e.date===t));e.commit("updateCouponsByDate",{indexByDate:a,coupons:o.newCoupons})}},p={namespaced:!0,state:r,getters:s,mutations:l,actions:d};function m(){return{isLoggedIn:!1,user:{}}}const v={getIsLoggedIn(e){return e.isLoggedIn},getLoggedInUser(e){return e.user}},f={setIsLoggedIn(e,o){e.isLoggedIn=o},setUser(e,o){e.user=o}};var g=t(5474);let{axiosCall:h}=(0,u.Z)();const w={async login(e,o){await g.api.get("/sanctum/csrf-cookie");const t=e=>{i.Z.successNotify("Successful Login")};await h("post","/login",o,t),e.commit("setIsLoggedIn",!0)},async logout(e){await h("post","/logout"),e.commit("setIsLoggedIn",!0)}},b={namespaced:!0,state:m,getters:v,mutations:f,actions:w},y=(0,n.h)((function(){const e=(0,a.MT)({modules:{coupons:p,auth:b},strict:!1});return e}))},3964:(e,o,t)=>{t.d(o,{Z:()=>s});var n=t(5787),a=t(3617),r=t(1959);function s(){const e=(0,a.oR)(),o=(0,r.iH)({}),t=(o,t=null,n=null,a=null)=>{e.dispatch(o,t).then((()=>{null!==n&&n()})).catch((e=>{s(e.message),null!==a&&a(e)}))},s=e=>{let o,t=JSON.parse(e);if(console.log(t),422!==t.status){try{const e=JSON.parse(t.message);o=e.message}catch{o="An error occured!"}n.Z.errorNotify(o)}else l(t.validationErrors)},l=e=>{let t=!1,a=o.value;console.log(e);for(const n in a){o.value[n].hasError=!1,o.value[n].errorMessage="";for(const a in e)n===a&&(o.value[n].hasError=!0,o.value[n].errorMessage=e[a][0],t=!0)}if(!t){let o=[];for(const t in e)o.push(e[t]);n.Z.errorNotify(o.join(" , "))}};return{dispatchAction:t,formSchema:o}}},5787:(e,o,t)=>{t.d(o,{Z:()=>s});var n=t(6417);const a=(e,o="bottom",t="green")=>{n.Z.create({position:o,message:e,color:t,actions:[{label:"Dismiss",color:"white"}]})},r=(e,o="bottom",t="red")=>{n.Z.create({position:o,message:e,color:t,actions:[{label:"Dismiss",color:"white"}]})},s={successNotify:a,errorNotify:r}},9909:(e,o,t)=>{t.d(o,{Z:()=>a});t(2100);var n=t(5474);function a(){const e=(e,o)=>{null!==o&&o(e);const t=e.request;let n={status:t.status,message:"Error Occured..",validationErrors:{}};throw t.status>=501&&(n.message=t.response),422===t.status&&(n.validationErrors=JSON.parse(t.response).errors),new Error(JSON.stringify(n))},o=async(o,t,a={},r=null,s=null)=>{let l;l="post"===o?await n.api.post(t,a).then((e=>{null!==r&&r(e.data)})).catch((o=>{e(o,s)})):await n.api.get(t,{params:a}).then((e=>{null!==r&&r(e.data)})).catch((o=>{e(o,s)}))};return{axiosCall:o}}},6682:(e,o,t)=>{t.d(o,{Z:()=>E});var n=t(3673);const a=(0,n.Uk)("Qpon App"),r={class:"row justify-center"},s={class:"col-xs-10 col-sm-9 col-md-5"},l=(0,n.Uk)("Login"),u={class:"row justify-center"};function i(e,o,t,i,c,d){const p=(0,n.up)("q-toolbar-title"),m=(0,n.up)("q-toolbar"),v=(0,n.up)("q-header"),f=(0,n.up)("page-header"),g=(0,n.up)("q-icon"),h=(0,n.up)("q-input"),w=(0,n.up)("q-btn"),b=(0,n.up)("q-form"),y=(0,n.up)("q-card"),C=(0,n.up)("container");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(v,{elevated:""},{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[a])),_:1})])),_:1})])),_:1}),(0,n.Wm)(C,{class:"q-mt-xl"},{default:(0,n.w5)((()=>[(0,n._)("div",r,[(0,n._)("div",s,[(0,n.Wm)(y,{class:"q-pa-lg"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[l])),_:1}),(0,n.Wm)(b,{onSubmit:i.login,class:"q-gutter-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{filled:"",modelValue:i.email,"onUpdate:modelValue":o[0]||(o[0]=e=>i.email=e),modelModifiers:{number:!0},label:"Email","lazy-rules":"ondemand",rules:[i.formSchema.email.validate],"error-message":i.formSchema.email.errorMessage,error:i.formSchema.email.hasError},{prepend:(0,n.w5)((()=>[(0,n.Wm)(g,{name:"email"})])),_:1},8,["modelValue","rules","error-message","error"]),(0,n.Wm)(h,{filled:"",modelValue:i.password,"onUpdate:modelValue":o[1]||(o[1]=e=>i.password=e),modelModifiers:{number:!0},label:"Password","lazy-rules":"ondemand",rules:[i.formSchema.password.validate],"error-message":i.formSchema.password.errorMessage,error:i.formSchema.password.hasError},{prepend:(0,n.w5)((()=>[(0,n.Wm)(g,{name:"lock"})])),_:1},8,["modelValue","rules","error-message","error"]),(0,n._)("div",u,[(0,n.Wm)(w,{label:"Login",type:"submit",color:"primary",class:"full-width",padding:"0.81rem"})])])),_:1},8,["onSubmit"])])),_:1})])])])),_:1})])}var c=t(1959),d=t(3617),p=t(3964);const m={setup(){(0,d.oR)();const e=(0,c.iH)(""),o=(0,c.iH)("");let{dispatchAction:t,formSchema:n}=(0,p.Z)();return n.value={email:{validate:function(e){return!0},hasError:!1,errorMessage:""},password:{validate:function(){return!0},hasError:!1,errorMessage:""}},{formSchema:n,email:e,password:o,login(){const n={email:e.value,password:o.value};t("auth/login",n)}}}};var v=t(4260),f=t(3812),g=t(9570),h=t(3747),w=t(151),b=t(8689),y=t(1206),C=t(4554),D=t(6819),_=t(7518),Z=t.n(_);const x=(0,v.Z)(m,[["render",i]]),E=x;Z()(m,"components",{QHeader:f.Z,QToolbar:g.Z,QToolbarTitle:h.Z,QCard:w.Z,QForm:b.Z,QInput:y.Z,QIcon:C.Z,QBtn:D.Z})}},o={};function t(n){var a=o[n];if(void 0!==a)return a.exports;var r=o[n]={exports:{}};return e[n](r,r.exports,t),r.exports}t.m=e,(()=>{var e=[];t.O=(o,n,a,r)=>{if(!n){var s=1/0;for(c=0;c<e.length;c++){for(var[n,a,r]=e[c],l=!0,u=0;u<n.length;u++)(!1&r||s>=r)&&Object.keys(t.O).every((e=>t.O[e](n[u])))?n.splice(u--,1):(l=!1,r<s&&(s=r));if(l){e.splice(c--,1);var i=a();void 0!==i&&(o=i)}}return o}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,a,r]}})(),(()=>{t.n=e=>{var o=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(o,{a:o}),o}})(),(()=>{t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((o,n)=>(t.f[n](e,o),o)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{681:"80280b88",884:"9e22fc3f"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"b1f60afd",736:"d54ea0e3"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o)})(),(()=>{var e={},o="quasar-coupon:";t.l=(n,a,r,s)=>{if(e[n])e[n].push(a);else{var l,u;if(void 0!==r)for(var i=document.getElementsByTagName("script"),c=0;c<i.length;c++){var d=i[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==o+r){l=d;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",o+r),l.src=n),e[n]=[a];var p=(o,t)=>{l.onerror=l.onload=null,clearTimeout(m);var a=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(t))),o)return o(t)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),u&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{var e={143:0};t.f.j=(o,n)=>{var a=t.o(e,o)?e[o]:void 0;if(0!==a)if(a)n.push(a[2]);else{var r=new Promise(((t,n)=>a=e[o]=[t,n]));n.push(a[2]=r);var s=t.p+t.u(o),l=new Error,u=n=>{if(t.o(e,o)&&(a=e[o],0!==a&&(e[o]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;l.message="Loading chunk "+o+" failed.\n("+r+": "+s+")",l.name="ChunkLoadError",l.type=r,l.request=s,a[1](l)}};t.l(s,u,"chunk-"+o,o)}},t.O.j=o=>0===e[o];var o=(o,n)=>{var a,r,[s,l,u]=n,i=0;if(s.some((o=>0!==e[o]))){for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(u)var c=u(t)}for(o&&o(n);i<s.length;i++)r=s[i],t.o(e,r)&&e[r]&&e[r][0](),e[s[i]]=0;return t.O(c)},n=self["webpackChunkquasar_coupon"]=self["webpackChunkquasar_coupon"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))})();var n=t.O(void 0,[736],(()=>t(2844)));n=t.O(n)})();