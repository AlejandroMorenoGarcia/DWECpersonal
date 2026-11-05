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
    //let valores = Array.from(document.getElementById("tabla").getElementsByTagName("td"));
    let valores = [...document.getElementById("tabla").getElementsByTagName("td")];
    valores.map((v) => {
        if (esPrimo(parseInt(v["innerText"]))){
            v.setAttribute("class","rojo")
        }
    })

}

export {generarTabla, numerosPrimos};