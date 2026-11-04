"use strict";

const generarTabla = () => {
    document.body.insertAdjacentHTML("beforeend",`<table id="tabla"></table>`)
    let tabla = document.getElementById("tabla");
    let fila = document.getElementsByClassName("fila");
    for (let i = 0; i < 10; i++) {
        tabla.insertAdjacentHTML("beforeend", `<tr class="fila"></tr>`);
        for (let j = 0; j < 10; j++) {
            fila[i].insertAdjacentHTML("beforeend", `<td>${j + i*10 + 1}</td>`);
        }
    }
}

export {generarTabla};