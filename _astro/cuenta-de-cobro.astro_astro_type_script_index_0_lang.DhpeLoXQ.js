import{h as e,m as t}from"./calculos.BYlJqWeT.js";var n=e=>(document.getElementById(e).value||``).trim(),r=e=>document.getElementById(e).checked,i=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),a=(e,t)=>e?i(e):`<span style="color:#6b6b6b">${t}</span>`,o=document.getElementById(`doc`);function s(){let s=Math.round(Number(n(`valor`))||0),c=n(`fecha`)?new Date(n(`fecha`)+`T12:00:00`).toLocaleDateString(`es-CO`,{day:`numeric`,month:`long`,year:`numeric`}):``;o.innerHTML=`
      <p>${a(n(`ciudad`),`Ciudad`)}, ${c}</p>
      <p class="doc-titulo">CUENTA DE COBRO No. ${a(n(`numero`),`001`)}</p>
      <p style="text-align:center"><strong>${a(n(`cliente`),`NOMBRE DE QUIEN PAGA`).toUpperCase()}</strong><br/>NIT/C.C. ${a(n(`nitCliente`),`000.000.000`)}</p>
      <p style="text-align:center">DEBE A:</p>
      <p style="text-align:center"><strong>${a(n(`nombre`),`TU NOMBRE`).toUpperCase()}</strong><br/>C.C. ${a(n(`cedula`),`0.000.000.000`)}</p>
      <p style="text-align:center">LA SUMA DE:</p>
      <p style="text-align:center"><strong>${s?e(s).toUpperCase():`—`} (${t(s)})</strong></p>
      <p><strong>Por concepto de:</strong> ${a(n(`concepto`),`Describe el servicio, contrato y periodo`)}</p>
      ${n(`banco`)?`<p><strong>Favor consignar en:</strong> ${i(n(`banco`))}</p>`:``}
      ${r(`noIva`)?`<p>Declaro que no soy responsable del impuesto sobre las ventas (IVA).</p>`:``}
      ${r(`dec383`)?`<p>Para efectos de la retención en la fuente, declaro bajo la gravedad de juramento que no he contratado o vinculado dos (2) o más trabajadores asociados a mi actividad.</p>`:``}
      <p>Atentamente,</p>
      <div class="firma">${a(n(`nombre`),`Nombre`)}<br/>C.C. ${a(n(`cedula`),``)}<br/>${i(n(`telefono`))}</div>`}document.getElementById(`form-cc`).addEventListener(`input`,s),document.getElementById(`imprimir`).addEventListener(`click`,()=>window.print()),s();