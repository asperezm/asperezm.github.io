import{t as e}from"./parametros.D-N9iKIV.js";import{i as t,o as n}from"./calculos.WcqYF_fw.js";var r=document.getElementById(`res-prest`),i=e=>document.getElementById(e).value,a=(e,t,n=``)=>`<tr class="${n}"><td>${e}</td><td>${t}</td></tr>`;function o(){try{let o=n({salario:Number(i(`salario`)),fechaIngreso:i(`ingreso`),fechaCorte:i(`corte`),diasVacacionesTomados:Number(i(`vac`)||0)},e);r.innerHTML=`<table>
        ${a(`Base prestacional`,t(o.basePrestacional))}
        ${a(`Cesantías (${o.diasAnio} días del año)`,t(o.cesantias))}
        ${a(`Intereses de cesantías`,t(o.interesesCesantias))}
        ${a(`Prima (${o.diasSemestre} días del semestre)`,t(o.prima))}
        ${a(`Vacaciones pendientes (${o.diasVacacionesPendientes} días)`,t(o.vacaciones))}
        ${a(`Total`,t(o.total),`total`)}
      </table><p>Si tu empresa ya te pagó la prima del semestre o consignó cesantías, réstalas.</p>`}catch(e){r.textContent=e.message}}document.getElementById(`form-prest`).addEventListener(`submit`,e=>{e.preventDefault(),o()}),o();