import{u as e}from"./calculos.CnNgJ_-A.js";var t=[`#0d6a4e`,`#e0a526`,`#3b82c4`,`#c2552d`,`#7a5bc7`,`#2a9d8f`],n=e=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]);function r(r,i){let a=(i.partes||[]).filter(e=>e.valor>0),o=a.reduce((e,t)=>e+t.valor,0)||1,s=a.length>1?`<div class="barra" role="img" aria-label="Desglose">${a.map((e,r)=>`<span style="width:${e.valor/o*100}%;background:${t[r%t.length]}" title="${n(e.nombre)}"></span>`).join(``)}</div>
       <ul class="leyenda">${a.map((r,i)=>`<li><i style="background:${t[i%t.length]}"></i>${n(r.nombre)} <b>${e(r.valor)}</b></li>`).join(``)}</ul>`:``,c=(i.filas||[]).map(([e,t])=>`<tr><td>${n(e)}</td><td>${n(t)}</td></tr>`).join(``),l=(i.siguiente||[]).map(e=>`<a href="${e.url}">${n(e.texto)} →</a>`).join(``);r.innerHTML=`
    <p class="res-titulo">${n(i.titulo)}</p>
    <p class="res-total">${i.totalTexto?n(i.totalTexto):e(i.total)}</p>
    ${s}
    ${c?`<details class="res-detalle" open><summary>Ver el detalle</summary><table>${c}</table></details>`:``}
    ${i.nota?`<p class="res-nota">${i.nota}</p>`:``}
    <div class="res-acciones">
      <a class="boton wa" target="_blank" rel="noopener" data-wa>Compartir por WhatsApp</a>
      <button type="button" class="boton secundario" data-copiar>Copiar resultado</button>
    </div>
    ${l?`<p class="res-siguiente"><span>Sigue con:</span> ${l}</p>`:``}`;let u=`${i.compartir||i.titulo}: ${i.totalTexto||e(i.total)}. Calcúlalo gratis aquí: ${location.origin}${location.pathname}`,d=r.querySelector(`[data-wa]`);d.href=`https://wa.me/?text=${encodeURIComponent(u)}`,r.querySelector(`[data-copiar]`).addEventListener(`click`,async e=>{try{await navigator.clipboard.writeText(u),e.target.textContent=`¡Copiado!`}catch{e.target.textContent=`No se pudo copiar`}})}export{r as t};