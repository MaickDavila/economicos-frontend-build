import{d as F,a as I,b as O,r as R,o as d,e as m,f as e,g as p,u as w,h as b,F as k,j as U,m as S,n as u,p as V,t as B,q as x}from"./index.f6b6f3bb.js";import{U as D}from"./concepto.d881932a.js";import{U as H}from"./pago.6ffdfc15.js";import{r as q,a as z}from"./ChevronRightIcon.428a25eb.js";const L={class:"bg-white shadow"},X={class:"px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8"},G={class:"py-6 lg:border-t lg:border-gray-200"},J={class:"flex-1 min-w-0"},K={class:"sm:hidden","aria-label":"Back"},Q={href:"#",class:"flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"},W=u(" Back "),Y={class:"hidden sm:flex","aria-label":"Breadcrumb"},Z={role:"list",class:"flex items-center space-x-4"},ee={class:"flex"},te=u(" Home "),se={class:"flex items-center"},oe=u(" Importar pagos "),ae={class:"mt-2 md:flex md:items-center md:justify-between"},ne=e("div",{class:"flex-1 min-w-0"},[e("h2",{class:"text-2xl font-bold leading-7 text-primary-700 sm:text-3xl sm:truncate"}," Importar pagos ")],-1),re={class:"mt-4 flex-shrink-0 flex md:mt-0 md:ml-4"},ie=e("h2",{class:"max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8"}," Subir archivo ",-1),ce={class:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-4"},le={class:"sm:col-span-6"},de={class:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"},me={class:"space-y-1 text-center"},xe=e("svg",{class:"mx-auto h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"})],-1),pe={class:"flex text-sm text-gray-600"},ue={for:"file-upload",class:"relative cursor-pointer bg-white rounded-md font-medium text-info hover:text-cyan-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-info"},he=e("span",null,"Cargar un archivo",-1),_e=e("p",{class:"pl-1"}," o arrastrar y soltar ",-1),fe=e("p",{class:"text-xs text-gray-500"}," TXT, BATCH up to 10MB ",-1),ge={class:"hidden sm:block"},ye={class:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"},ve={class:"flex flex-col mt-2"},we={class:"align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg"},be={class:"min-w-full divide-y divide-gray-200"},ke=e("thead",null,[e("tr",null,[e("th",{class:"px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," PERSONA "),e("th",{class:"px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," DOCUMENTO "),e("th",{class:"px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," OPERACI\xD3N "),e("th",{class:"px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," IMPORTE "),e("th",{class:"px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," FECHA ")])],-1),Se={key:0,class:"bg-white divide-y divide-gray-200"},Be={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},Ce={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},Pe={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},Ne={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},Ee=u(" S/ "),je={class:"text-gray-900 font-medium"},$e={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},Ae={key:1,class:"bg-white divide-y divide-gray-200"},Te=e("tr",{class:"bg-white"},[e("td",{class:"max-w-0 w-full whitespace-nowrap text-sm text-gray-900",colspan:"6"},[e("div",{class:"flex item-center text-center justify-center w-full px-6 py-4 text-gray-500"}," No se encontraron registros ")])],-1),Me=[Te],Fe=V('<nav class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6" aria-label="Pagination"><div class="hidden sm:block"><p class="text-sm text-gray-700"> Showing   <span class="font-medium">1</span>   to   <span class="font-medium">10</span>   of   <span class="font-medium">20</span>   results </p></div><div class="flex-1 flex justify-between sm:justify-end"><a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Anterior </a><a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Siguiente </a></div></nav>',1),Ie=F({setup(Oe){const g=D(),C=H(),a=I([]),P=async h=>{try{await(()=>new Promise(n=>{const s=h.target,t=new FileReader;t.onload=function(){const _=t.result;n(_)},s.files&&t.readAsText(s.files[0])}))().then(n=>{n.split(`
`).forEach(t=>{const _=t.slice(35,43),E=t.slice(112,113);let r=t.slice(62,77),y="";y=r.slice(13,15)[0],r=r.slice(1,13),r=`${r}.${y}`;const j=parseFloat(r),v=g.get_concepto_by_codigo(_);if(v&&Number(E)===2){const o={};let c=t.slice(47,62);c=c.trim(),c=c.slice(7,15);let f=t.slice(121,156);f=f.trim();let l=t.slice(79,87);const $=l.slice(0,4),A=l.slice(4,6),T=l.slice(6,8);l=`${$}-${A}-${T}`;const M=t.slice(18,25);o.nombre_cliente=f,o.numero_documento=c,o.numero_operacion=M,o.fecha_operacion=l,o.monto=j,o.concepto=v.id,o.is_active=!0,a.value.push(o)}})})}catch(i){alert(i)}},N=async()=>{if(!await C.save_pagos(a.value)){B("Error al subir pagos",{type:"danger",timeout:5e3,hideProgressBar:!0});return}B(`Se Procesaron : ${a.value.length} Nuevos pagos`,{type:"success",timeout:3e3,hideProgressBar:!0}),a.value=[],document.getElementById("file-upload").value=""};return O(()=>{g.set_conceptos("")}),(h,i)=>{const n=R("router-link");return d(),m(k,null,[e("div",L,[e("div",X,[e("div",G,[e("div",J,[e("nav",K,[e("a",Q,[p(w(q),{class:"flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400","aria-hidden":"true"}),W])]),e("nav",Y,[e("ol",Z,[e("li",null,[e("div",ee,[p(n,{to:"home",class:"text-sm font-medium text-gray-500 hover:text-gray-700"},{default:b(()=>[te]),_:1})])]),e("li",null,[e("div",se,[p(w(z),{class:"flex-shrink-0 h-5 w-5 text-gray-400","aria-hidden":"true"}),p(n,{to:"conceptos",class:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"},{default:b(()=>[oe]),_:1})])])])])]),e("div",ae,[ne,e("div",re,[e("button",{type:"button",class:"ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-500 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:i[0]||(i[0]=s=>N())}," Procesar ")])])])])]),ie,e("div",ce,[e("div",le,[e("div",de,[e("div",me,[xe,e("div",pe,[e("label",ue,[he,e("input",{id:"file-upload",name:"file-upload",type:"file",class:"sr-only",onChange:P},null,32)]),_e]),fe])])])]),e("div",ge,[e("div",ye,[e("div",ve,[e("div",we,[e("table",be,[ke,a.value.length>0?(d(),m("tbody",Se,[(d(!0),m(k,null,U(a.value,(s,t)=>(d(),m("tr",{key:t,class:"bg-white"},[e("td",Be,x(s.nombre_cliente),1),e("td",Ce,x(s.numero_documento),1),e("td",Pe,x(s.numero_operacion),1),e("td",Ne,[Ee,e("span",je,x(s.monto),1)]),e("td",$e,[e("time",null,x(s.fecha_operacion),1)])]))),128))])):(d(),m("tbody",Ae,Me))]),Fe])])])])],64)}}});typeof S=="function"&&S(Ie);export{Ie as default};
