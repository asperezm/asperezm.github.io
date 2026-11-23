import{t as e}from"./parametros.D-N9iKIV.js";import{i as t,r as n}from"./calculos.WcqYF_fw.js";var r=e=>document.getElementById(e),i=document.getElementById(`res-liq`),a=(e,t,n=``)=>`<tr class="${n}"><td>${e}</td><td>${t}</td></tr>`;function o(){let o=r(`motivo`).value,s=r(`tipo`).value;document.getElementById(`campo-restantes`).hidden=o!==`sin-justa-causa`||s===`indefinido`;try{let c=n({salario:Number(r(`salario`).value),fechaIngreso:r(`ingreso`).value,fechaRetiro:r(`retiro`).value,motivo:o,tipo:s,diasRestantes:Number(r(`restantes`).value||0),diasVacacionesTomados:Number(r(`vac`).value||0)},e);i.innerHTML=`<table>
        ${a(`Cesantías (${c.diasAnio} días)`,t(c.cesantias))}
        ${a(`Intereses de cesantías`,t(c.interesesCesantias))}
        ${a(`Prima (${c.diasSemestre} días)`,t(c.prima))}
        ${a(`Vacaciones (${c.diasVacacionesPendientes} días)`,t(c.vacaciones))}
        ${o===`sin-justa-causa`?a(`Indemnización (${c.diasIndemnizacion} días)`,t(c.indemnizacion)):``}
        ${a(`Total liquidación`,t(c.totalLiquidacion),`total`)}
      </table><p>Tiempo trabajado: ${c.diasTotales} días. Réstale lo que ya te hayan pagado de prima o consignado de cesantías.</p>`}catch(e){i.textContent=e.message}}document.getElementById(`form-liq`).addEventListener(`input`,o),document.getElementById(`form-liq`).addEventListener(`submit`,e=>{e.preventDefault(),o()}),o();