import{t as e}from"./parametros.D-N9iKIV.js";import{i as t,s as n}from"./calculos.WcqYF_fw.js";var r=document.getElementById(`res-neto`),i=(e,t,n=``)=>`<tr class="${n}"><td>${e}</td><td>${t}</td></tr>`;function a(){let a=Number(document.getElementById(`salario`).value);try{let o=n(a,e);r.innerHTML=`<table>
        ${i(`Salario básico`,t(o.salario))}
        ${i(`Auxilio de transporte`,t(o.auxilio))}
        ${i(`Salud (4 %)`,`− `+t(o.salud))}
        ${i(`Pensión (4 %)`,`− `+t(o.pension))}
        ${o.fondoSolidaridad?i(`Fondo de Solidaridad (${(o.tasaFsp*100).toFixed(1)} %)`,`− `+t(o.fondoSolidaridad)):``}
        ${i(`Salario neto mensual`,t(o.neto),`total`)}
      </table>
      ${o.bajoMinimo?`<p><strong>Ojo:</strong> ese valor es menor al salario mínimo mensual. Si trabajas tiempo completo, tu salario no puede ser inferior.</p>`:``}
      <p>Sin retención en la fuente.</p>`}catch(e){r.textContent=e.message}}document.getElementById(`form-neto`).addEventListener(`submit`,e=>{e.preventDefault(),a()}),a();