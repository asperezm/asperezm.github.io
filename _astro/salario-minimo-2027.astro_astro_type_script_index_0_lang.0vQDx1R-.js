import{t as e}from"./parametros.D-N9iKIV.js";import{c as t,i as n}from"./calculos.WcqYF_fw.js";var r=document.getElementById(`res-min`),i=(e,t,n=``)=>`<tr class="${n}"><td>${e}</td><td>${t}</td></tr>`;function a(){let a=Number(document.getElementById(`pct`).value),o=Number(document.getElementById(`pctaux`).value),s=t(a,o,e);r.innerHTML=`<table>
      ${i(`Salario mínimo simulado`,n(s.smmlv))}
      ${i(`Auxilio de transporte simulado`,n(s.auxilio))}
      ${i(`Total con auxilio`,n(s.totalConAuxilio),`total`)}
      ${i(`Diferencia mensual vs. hoy`,n(s.diferenciaMensual))}
      ${i(`Neto de un empleado con el mínimo`,n(s.netoEmpleadoMinimo))}
      ${i(`Aporte mínimo de un independiente (sin ARL)`,n(s.aporteMinimoIndependiente))}
    </table><p>Simulación: no es el valor oficial.</p>`}document.getElementById(`form-min`).addEventListener(`submit`,e=>{e.preventDefault(),a()}),a();