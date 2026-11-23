import{t as e}from"./parametros.D-N9iKIV.js";import{r as t,s as n}from"./calculos.BiVvzAHZ.js";var r=document.getElementById(`res-min`),i=(e,t,n=``)=>`<tr class="${n}"><td>${e}</td><td>${t}</td></tr>`;function a(){let a=Number(document.getElementById(`pct`).value),o=Number(document.getElementById(`pctaux`).value),s=n(a,o,e);r.innerHTML=`<table>
      ${i(`Salario mínimo simulado`,t(s.smmlv))}
      ${i(`Auxilio de transporte simulado`,t(s.auxilio))}
      ${i(`Total con auxilio`,t(s.totalConAuxilio),`total`)}
      ${i(`Diferencia mensual vs. hoy`,t(s.diferenciaMensual))}
      ${i(`Neto de un empleado con el mínimo`,t(s.netoEmpleadoMinimo))}
      ${i(`Aporte mínimo de un independiente (sin ARL)`,t(s.aporteMinimoIndependiente))}
    </table><p>Simulación: no es el valor oficial.</p>`}document.getElementById(`form-min`).addEventListener(`submit`,e=>{e.preventDefault(),a()}),a();