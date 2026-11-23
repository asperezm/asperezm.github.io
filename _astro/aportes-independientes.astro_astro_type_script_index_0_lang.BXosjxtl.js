import{t as e}from"./parametros.D-N9iKIV.js";import{r as t,t as n}from"./calculos.BiVvzAHZ.js";var r=document.getElementById(`form-indep`),i=document.getElementById(`res-indep`),a=(e,t,n=``)=>`<tr class="${n}"><td>${e}</td><td>${t}</td></tr>`;function o(){let r=Number(document.getElementById(`ingreso`).value),o=document.getElementById(`arl`).value||null;try{let s=n(r,e,{nivelArl:o});i.innerHTML=`<table>
        ${a(`IBC (base de cotización)`,t(s.ibc))}
        ${a(`Salud (12,5 %)`,t(s.salud))}
        ${a(`Pensión (16 %)`,t(s.pension))}
        ${s.fondoSolidaridad?a(`Fondo de Solidaridad (${(s.tasaFsp*100).toFixed(1)} %)`,t(s.fondoSolidaridad)):``}
        ${s.arl?a(`ARL (${(s.tasaArl*100).toFixed(3)} %)`,t(s.arl)):``}
        ${a(`Total a pagar en PILA`,t(s.total),`total`)}
        ${a(`Te queda después de aportes`,t(s.netoDespuesDeAportes))}
      </table>
      ${s.ibcAjustadoAlMinimo?`<p>El 40 % de tu ingreso es menor que un salario mínimo, por eso el IBC sube al mínimo.</p>`:``}
      ${s.obligado?``:`<p><strong>Ojo:</strong> tu ingreso es menor a un salario mínimo; revisa si estás obligado a cotizar como independiente.</p>`}
      <p>No incluye retención en la fuente ni impuestos.</p>`}catch(e){i.textContent=e.message}}r.addEventListener(`submit`,e=>{e.preventDefault(),o()}),o();