import{d as A,a as m,o as d,c as _,b,s as $,v as q,e as H,x as oe,r as ne,w as se,T as ie,m as z,t as M,y as re,z as Z,A as ee,B as F,f as V,g as r,F as ae,h as le,C as ce,D as ue}from"./index.fef53ebe.js";var pe=Object.defineProperty,de=Object.defineProperties,he=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,J=(e,t,o)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,T=(e,t)=>{for(var o in t||(t={}))me.call(t,o)&&J(e,o,t[o]);if(G)for(var o of G(t))ve.call(t,o)&&J(e,o,t[o]);return e},X=(e,t)=>de(e,he(t));const D={type:"default",timeout:5e3,showCloseButton:!0,position:"top-right",transition:"bounce",hideProgressBar:!1,swipeClose:!0};var B,N;(N=B||(B={}))[N.TITLE_ONLY=0]="TITLE_ONLY",N[N.TITLE_DESCRIPTION=1]="TITLE_DESCRIPTION",N[N.COMPONENT=2]="COMPONENT",N[N.VNODE=3]="VNODE";const _e={"top-left":{bounce:"mosha__bounceInLeft",zoom:"mosha__zoomIn",slide:"mosha__slideInLeft"},"top-right":{bounce:"mosha__bounceInRight",zoom:"mosha__zoomIn",slide:"mosha__slideInRight"},"top-center":{bounce:"mosha__bounceInDown",zoom:"mosha__zoomIn",slide:"mosha__slideInDown"},"bottom-center":{bounce:"mosha__bounceInUp",zoom:"mosha__zoomIn",slide:"mosha__slideInUp"},"bottom-right":{bounce:"mosha__bounceInRight",zoom:"mosha__zoomIn",slide:"mosha__slideInRight"},"bottom-left":{bounce:"mosha__bounceInLeft",zoom:"mosha__zoomIn",slide:"mosha__slideInLeft"}},K=(e,t=300)=>{let o;return(...n)=>{o&&(clearTimeout(o),o=void 0),o=setTimeout(()=>e(...n),t)}},fe=(e,t,o)=>{const n=b(),i=b(void 0),s=b(),p=l=>l instanceof MouseEvent,a=l=>{o!==!1&&n.value&&(p(l)?i.value=n.value.clientX-l.clientX:i.value=n.value.touches[0].clientX-l.touches[0].clientX,s.value=X(T({},s.value),{transition:"none"}),e.endsWith("left")?s.value.left=-i.value+"px !important":e.endsWith("right")?s.value.right=`${i.value}px !important`:i.value>0?s.value.left=-i.value+"px !important":s.value.right=`${i.value}px !important`,Math.abs(i.value)>200&&t())},c=l=>{o!==!1&&(n.value&&(n.value=void 0),i.value&&(i.value=void 0),removeEventListener(l,a))};return q(()=>{o!==!1&&(c("mousemove"),c("touchmove"))}),{swipedDiff:i,swipeStart:n,swipeStyle:s,swipeHandler:a,startSwipeHandler:l=>{if(o===!1)return;n.value=l;const u=p(l)?"mousemove":"touchmove",f=p(l)?"mouseup":"touchend";addEventListener(u,a),addEventListener(f,()=>(x=>{const E={transition:"left .3s ease-out",left:0},v={transition:"right .3s ease-out",right:0},I={transition:"all .3s ease-out",left:0,right:0};e.endsWith("left")?s.value=T(T({},s.value),E):e.endsWith("right")?s.value=T(T({},s.value),v):s.value=T(T({},s.value),I),n.value=void 0,i.value=void 0,removeEventListener(x,a)})(u))},cleanUpMove:c}};var te=A({props:{type:{type:String,default:"default"}}});const ge={class:"mosha__icon"},we={key:0,xmlns:"http://www.w3.org/2000/svg",height:"32px",viewBox:"0 0 24 24",width:"32px",fill:"#ffffff"},ye=m("path",{d:"M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"},null,-1),be={key:1,xmlns:"http://www.w3.org/2000/svg",height:"32px",viewBox:"0 0 24 24",width:"32px",fill:"#ffffff"},xe=m("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"},null,-1),Ce={key:2,xmlns:"http://www.w3.org/2000/svg",height:"32px",viewBox:"0 0 24 24",width:"32px",fill:"#ffffff"},Te=m("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),Ie=m("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"},null,-1),Se={key:3,xmlns:"http://www.w3.org/2000/svg",height:"32px",viewBox:"0 0 24 24",width:"32px",fill:"#616161"},Me=m("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),Ee=m("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"},null,-1),Ne={key:4,xmlns:"http://www.w3.org/2000/svg",height:"32px",viewBox:"0 0 24 24",width:"32px",fill:"#ffffff"},ze=m("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),Be=m("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"},null,-1);te.render=function(e,t,o,n,i,s){return d(),_("span",ge,[e.type==="warning"?(d(),_("svg",we,[ye])):e.type==="danger"?(d(),_("svg",be,[xe])):e.type==="success"?(d(),_("svg",Ce,[Te,Ie])):e.type==="default"?(d(),_("svg",Se,[Me,Ee])):(d(),_("svg",Ne,[ze,Be]))])};var R=A({name:"MToast",components:{MIcon:te},props:{visible:Boolean,text:{type:String,default:""},description:{type:String,default:""},toastBackgroundColor:{type:String,default:""},type:{type:String,default:"default"},onClose:{type:Function,default:()=>null},onCloseHandler:{type:Function,required:!0},offset:{type:Number,required:!0},id:{type:Number,required:!0},timeout:{type:Number,default:5e3},position:{type:String,required:!0},showCloseButton:{type:Boolean,default:!0},swipeClose:{type:Boolean,default:!0},hideProgressBar:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!1},transition:{type:String,default:"bounce"}},setup(e,t){const o=b(),{width:n}=(()=>{const g=b(-1),C=b(-1),h=w=>{w!==null&&w.currentTarget!==null&&(g.value=w.currentTarget.innerWidth,C.value=w.currentTarget.innerHeight)};return $(()=>{window.innerWidth>0&&(g.value=window.innerWidth,C.value=window.innerHeight),window.addEventListener("resize",K(h))}),q(()=>{window.removeEventListener("resize",K(h))}),{width:g,height:C}})(),{swipedDiff:i,startSwipeHandler:s,swipeStyle:p,cleanUpMove:a}=fe(e.position,e.onCloseHandler,e.swipeClose),{transitionType:c}=(l=e.position,u=e.transition,f=i,{transitionType:H(()=>f.value>200?"mosha__fadeOutLeft":f.value<-200?"mosha__fadeOutRight":_e[l][u])});var l,u,f;const{start:x,stop:E,progress:v}=((g,C)=>{const h=b(),w=b(0),y=b(C),L=b(),k=b(100),Y=()=>{clearInterval(L.value),clearTimeout(h.value)};return $(()=>{}),q(()=>{Y()}),{start:()=>{w.value=Date.now(),clearTimeout(h.value),L.value=setInterval(()=>{k.value--},C/100-5),h.value=setTimeout(g,y.value)},stop:()=>{clearInterval(L.value),clearTimeout(h.value),y.value-=Date.now()-w.value},clear:Y,progress:k}})(()=>{e.onCloseHandler()},e.timeout),I=H(()=>t.slots.default),O=H(()=>/<\/?[a-z][\s\S]*>/i.test(e.description)),S=()=>{e.timeout>0&&x()};return oe(()=>{const{customStyle:g}=((C,h,w)=>{const y=H(()=>{switch(C){case"top-left":return{left:"0",top:`${h}px`};case"bottom-left":return{left:"0",bottom:`${h}px`};case"bottom-right":return{right:"0",bottom:`${h}px`};case"top-center":return{top:`${h}px`,left:"0",right:"0",marginRight:"auto",marginLeft:"auto"};case"bottom-center":return{bottom:`${h}px`,left:"0",right:"0",marginRight:"auto",marginLeft:"auto"};default:return{right:"0",top:`${h}px`}}});return w.length>0&&(y.value.backgroundColor=w),{customStyle:y}})(e.position,e.offset,e.toastBackgroundColor);o.value=g.value}),$(()=>{S()}),{style:o,transitionType:c,startTimer:S,progress:v,onTouchStart:g=>{s(g)},onMouseLeave:()=>{a("mousemove"),S()},onMouseDown:g=>{s(g)},swipeStyle:p,isSlotPassed:I,isDescriptionHtml:O,onMouseEnter:()=>{e.timeout>0&&n.value>425&&E()}}}});const Le={class:"mosha__toast__content-wrapper"},Pe={class:"mosha__toast__content"},Oe={class:"mosha__toast__content__text"},De={key:1,class:"mosha__toast__content__description"},ke={key:0,class:"mosha__toast__slot-wrapper"};R.render=function(e,t,o,n,i,s){const p=ne("MIcon");return d(),_(ie,{name:e.transitionType,type:"animation"},{default:se(()=>[e.visible?(d(),_("div",{key:0,class:["mosha__toast",e.toastBackgroundColor?null:e.type],style:[e.style,e.swipeStyle],onMouseenter:t[2]||(t[2]=(...a)=>e.onMouseEnter&&e.onMouseEnter(...a)),onMouseleave:t[3]||(t[3]=(...a)=>e.onMouseLeave&&e.onMouseLeave(...a)),onTouchstartPassive:t[4]||(t[4]=(...a)=>e.onTouchStart&&e.onTouchStart(...a)),onMousedown:t[5]||(t[5]=(...a)=>e.onMouseDown&&e.onMouseDown(...a))},[m("div",Le,[e.showIcon?(d(),_(p,{key:0,type:e.type},null,8,["type"])):z("",!0),m("div",Pe,[m("div",Oe,M(e.text),1),e.description.length>0&&e.isDescriptionHtml?(d(),_("div",{key:0,class:"mosha__toast__content__description",innerHTML:e.description},null,8,["innerHTML"])):z("",!0),e.description.length>0&&!e.isDescriptionHtml?(d(),_("div",De,M(e.description),1)):z("",!0)])]),e.isSlotPassed?(d(),_("div",ke,[re(e.$slots,"default")])):z("",!0),e.showCloseButton?(d(),_("div",{key:1,class:"mosha__toast__close-icon",onClick:t[1]||(t[1]=(...a)=>e.onCloseHandler&&e.onCloseHandler(...a))})):z("",!0),e.hideProgressBar?z("",!0):(d(),_("div",{key:2,class:"mosha__toast__progress",style:{width:`${e.progress}%`}},null,4))],38)):z("",!0)]),_:3},8,["name"])};const U={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[],"top-center":[],"bottom-center":[]};let He=0;const Q=(e,t)=>{const o=He++,n=t?Ve(t):D;if(e.__v_isVNode)return j(o,B.VNODE,n,e),{close:()=>P(o,n.position)};if(e.hasOwnProperty("render"))return j(o,B.COMPONENT,n,e),{close:()=>P(o,n.position)};const i=$e(e);return j(o,B.TITLE_DESCRIPTION,n,i),{close:()=>P(o,n.position)}},j=(e,t,o,n)=>{setTimeout(()=>{const i=Re(o,U,12),s=document.createElement("div");let p;document.body.appendChild(s),p=t===B.VNODE?m(R,W(o,e,i,P),()=>[n]):t===B.TITLE_DESCRIPTION?m(R,W(o,e,i,P,n)):m(R,W(o,e,i,P),()=>[m(n)]),Z(p,s),U[o.position].push({toastVNode:p,container:s}),p.component&&(p.component.props.visible=!0)},1)},W=(e,t,o,n,i)=>X(T(T({},e),i),{id:t,offset:o,visible:!1,onCloseHandler:()=>{n(t,e.position?e.position:"top-right")}}),Ve=e=>{const t=X(T({},e),{type:e.type||D.type,timeout:e.timeout||D.timeout,showCloseButton:e.showCloseButton,position:e.position||D.position,showIcon:e.showIcon,swipeClose:e.swipeClose,transition:e.transition||D.transition});return t.hideProgressBar=t.timeout!==void 0&&t.timeout<=0,e.hideProgressBar!==void 0&&(t.hideProgressBar=e.hideProgressBar),t},$e=e=>({text:typeof e=="string"?e:e.title,description:typeof e=="string"?void 0:e.description}),Re=(e,t,o)=>{let n=o;if(!e.position)throw new Error("no position");return t[e.position].forEach(({toastVNode:i})=>{n+=i.el.offsetHeight+o||0}),n},P=(e,t)=>{const o=U[t],n=o.findIndex(({toastVNode:a})=>a.props&&e===a.props.id);if(n===-1)return;const{container:i,toastVNode:s}=o[n];if(!s.el)return;const p=s.el.offsetHeight;U[t].splice(n,1),((a,c,l,u)=>{for(let f=a;f<c.length;f++){const{toastVNode:x}=c[f];if(!x.el)return;const E=l.split("-")[0]||"top",v=parseInt(x.el.style[E],10)-u-12;if(!x.component)return;x.component.props.offset=v}})(n,o,t,p),s.component&&(s.component.props.visible=!1,s.component.props.onClose&&s.component.props.onClose(),setTimeout(()=>{Z(null,i),document.body.removeChild(i)},1e3))},Fe=ee("concepto",{state:()=>({conceptos:[]}),getters:{get_concepto_by_codigo:e=>t=>e.conceptos.find(o=>Number(o.codigo)===Number(t))},actions:{async set_conceptos(){try{const{data:e}=await F.get("economicos/conceptos/");this.conceptos=e}catch{return null}},async save_concepto(e){try{const{data:t}=await F.post("economicos/conceptos/",e);return t}catch{return null}}}}),Ue=ee("pago",{state:()=>({pagos:[]}),getters:{},actions:{async set_pagos(){try{const{data:e}=await F.get("/economicos/pagos/");this.pagos=e}catch{return null}},async save_pagos(e){try{const{data:t}=await F.post("/economicos/pagos/",e);return this.pagos=t,t}catch{return null}}}}),je={class:"flex justify-between my-5 w-full"},We={class:"flex"},qe={class:"w-1/2"},Ae={class:"text-gray-700"},Xe=r("span",{class:"font-bold"},"Total de Pagos:",-1),Ye={class:"text-xs"},Ge={class:"table-responsive my-5"},Je={class:"table table-striped table-sm"},Ke=r("thead",null,[r("tr",null,[r("th",null,"Nombre Cliente"),r("th",null,"N\xFAmero Documento"),r("th",null,"N\xFAmero Operaci\xF3n"),r("th",null,"Fecha Operaci\xF3n"),r("th",null,"Monto"),r("th",null,"Concepto"),r("th",null,"Estado")])],-1),Qe=["onUpdate:modelValue"],et=A({setup(e){const t=Fe(),o=Ue(),n=b([]),i=async p=>{try{await(()=>new Promise(c=>{const l=p.target,u=new FileReader;u.onload=function(){const f=u.result;c(f)},l.files&&u.readAsText(l.files[0])}))().then(c=>{c.split(`
`).forEach(u=>{const f=u.slice(35,43),x=u.slice(112,113),E=t.get_concepto_by_codigo(f);if(E&&Number(x)===2){const v={};let I=u.slice(47,62);I=I.trim(),I=I.slice(7,15);let O=u.slice(121,156);O=O.trim();let S=u.slice(79,87);const g=S.slice(0,4),C=S.slice(4,6),h=S.slice(6,8);S=`${g}-${C}-${h}`;const w=u.slice(18,25);let y=u.slice(62,77),L="";L=y.slice(13,15)[0],y=y.slice(1,13),y=`${y}.${L}`;const k=parseFloat(y);v.nombre_cliente=O,v.numero_documento=I,v.numero_operacion=w,v.fecha_operacion=S,v.monto=k,v.concepto=E.id,v.is_active=!0,n.value.push(v)}})})}catch(a){alert(a)}},s=async()=>{if(!await o.save_pagos(n.value)){Q("Error al subir pagos",{type:"danger",timeout:5e3,hideProgressBar:!0});return}Q("Pagos subidos correctamente",{type:"success",timeout:3e3,hideProgressBar:!0})};return $(()=>{t.set_conceptos()}),(p,a)=>(d(),V("div",null,[r("input",{type:"file",accept:"text/plain",onChange:i},null,32),r("div",null,[n.value.length>0?(d(),V("button",{key:0,class:"p-2 bg-green-300",onClick:s}," Subir Pagos 2022 ")):z("",!0)]),r("div",je,[r("div",We,[r("div",qe,[r("div",Ae,[Xe,r("span",Ye,M(n.value.length),1)])])])]),r("div",null,[r("div",Ge,[r("table",Je,[Ke,r("tbody",null,[(d(!0),V(ae,null,le(n.value,(c,l)=>(d(),V("tr",{key:l},[r("td",null,M(c.nombre_cliente),1),r("td",null,M(c.numero_documento),1),r("td",null,M(c.numero_operacion),1),r("td",null,M(c.fecha_operacion),1),r("td",null,M(c.monto),1),r("td",null,M(c.concepto),1),r("td",null,[ce(r("input",{"onUpdate:modelValue":u=>c.is_active=u,type:"checkbox"},null,8,Qe),[[ue,c.is_active]])])]))),128))])])])])]))}});export{et as default};
