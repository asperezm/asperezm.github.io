import{f as e}from"./calculos.JeYb2P5m.js";var t=[`#c8f169`,`#7fd3a8`,`#f1c95b`,`#ffffff`,`#8fb8ff`,`#f59e8b`],n=e=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),r=`<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.6-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3Z"/></svg>`;function i(i,a){let o=(a.partes||[]).filter(e=>e.valor>0),s=o.reduce((e,t)=>e+t.valor,0)||1,c=o.length>1?`<div class="barra" role="img" aria-label="Desglose del resultado">${o.map((e,n)=>`<span style="width:${e.valor/s*100}%;background:${t[n%t.length]}"></span>`).join(``)}</div>
       <ul class="leyenda">${o.map((r,i)=>`<li><i style="background:${t[i%t.length]}"></i>${n(r.nombre)} <b>${e(r.valor)}</b></li>`).join(``)}</ul>`:``,l=(a.filas||[]).map(([e,t])=>`<tr><td>${n(e)}</td><td>${n(t)}</td></tr>`).join(``),u=(a.siguiente||[]).map(e=>`<a href="${e.url}">${n(e.texto)} →</a>`).join(``);i.innerHTML=`
    <p class="res-titulo">${n(a.titulo)}</p>
    <p class="res-total">${a.totalTexto?n(a.totalTexto):e(a.total)}</p>
    ${c}
    ${l?`<details class="res-detalle"><summary>Ver cómo se calculó</summary><table>${l}</table></details>`:``}
    ${a.nota?`<p class="res-nota">${a.nota}</p>`:``}
    ${u?`<p class="res-siguiente"><span>Sigue con:</span> ${u}</p>`:``}
    <div class="compartir">
      <span>¿Le sirve a alguien más? Envíaselo:</span>
      <a target="_blank" rel="noopener" data-wa>${r} WhatsApp</a>
      <button type="button" data-copiar>Copiar</button>
    </div>`;let d=`${a.compartir||a.titulo}: ${a.totalTexto||e(a.total)}. Calcúlalo gratis aquí: ${location.origin}${location.pathname}`;i.querySelector(`[data-wa]`).href=`https://wa.me/?text=${encodeURIComponent(d)}`,i.querySelector(`[data-copiar]`).addEventListener(`click`,async e=>{try{await navigator.clipboard.writeText(d),e.currentTarget.textContent=`¡Copiado!`}catch{e.currentTarget.textContent=`No se pudo copiar`}})}export{i as t};