import{i as n,j as c}from"./index.2a9c4a8a.js";const r=n("concepto",{state:()=>({conceptos:[]}),getters:{get_concepto_by_codigo:t=>e=>t.conceptos.find(o=>Number(o.codigo)===Number(e)),filter_conceptos_by_nombre:t=>e=>t.conceptos.filter(o=>o.nombre.toLowerCase().includes(e.toLowerCase()))},actions:{async set_conceptos(t){try{const e={search:t},{data:o}=await c.get("economicos/conceptos/",{params:e});this.conceptos=o}catch{return null}},async set_concepto_by_id(t){try{const{data:e}=await c.get(`economicos/conceptos/${t}/`);return e}catch{return null}},async save_concepto(t){try{let e=null;return t.id?e=await c.put(`economicos/conceptos/${t.id}/`,t):e=await c.post("economicos/conceptos/",t),e}catch{return null}}}});export{r as U};
