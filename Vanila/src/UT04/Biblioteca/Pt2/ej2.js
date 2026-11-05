"use strict";
import { esPrimo } from "../../../UT02/Biblioteca/Pt2/p2ej2.js";


const generarTabla = () => {
    document.body.insertAdjacentHTML("beforeend",`<table id="tabla" border="1"></table>`)
    let tabla = document.getElementById("tabla");
    let fila = document.getElementsByClassName("fila");
    for (let i = 0; i < 10; i++) {
        tabla.insertAdjacentHTML("beforeend", `<tr class="fila"></tr>`);
        for (let j = 0; j < 10; j++) {
            fila[i].insertAdjacentHTML("beforeend", `<td>${j + i*10 + 1}</td>`);
        }
    }
}

const numerosPrimos = () => {
    let valores = Array.from(document.getElementsByTagName("td"));
    valores.map((v) => {
        console.log(v)
        if (esPrimo(parseInt(v["innerText"]))){

            v["innerHTML"] = v.textContent.replace(v["innerHTML"], `<span id="rojo">${v["innerHTML"]}</span>`)
        }
    })
    parseInt(valores[0]["innerHTML"]);

}

export {generarTabla, numerosPrimos};