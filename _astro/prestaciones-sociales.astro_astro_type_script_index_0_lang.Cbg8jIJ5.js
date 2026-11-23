import{t as e}from"./parametros.D-N9iKIV.js";import{a as t,r as n}from"./calculos.BiVvzAHZ.js";var r=document.getElementById(`res-prest`),i=e=>document.getElementById(e).value,a=(e,t,n=``)=>`<tr class="${n}"><td>${e}</td><td>${t}</td></tr>`;function o(){try{let o=t({salario:Number(i(`salario`)),fechaIngreso:i(`ingreso`),fechaCorte:i(`corte`),diasVacacionesTomados:Number(i(`vac`)||0)},e);r.innerHTML=`<table>
        ${a(`Base prestacional`,n(o.basePrestacional))}
        ${a(`Cesantías (${o.diasAnio} días del año)`,n(o.cesantias))}
        ${a(`Intereses de cesantías`,n(o.interesesCesantias))}
        ${a(`Prima (${o.diasSemestre} días del semestre)`,n(o.prima))}
        ${a(`Vacaciones pendientes (${o.diasVacacionesPendientes} días)`,n(o.vacaciones))}
        ${a(`Total`,n(o.total),`total`)}
      </table><p>Si tu empresa ya te pagó la prima del semestre o consignó cesantías, réstalas.</p>`}catch(e){r.textContent=e.message}}document.getElementById(`form-prest`).addEventListener(`submit`,e=>{e.preventDefault(),o()}),o();