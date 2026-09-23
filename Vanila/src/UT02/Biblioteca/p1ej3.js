"use strict";

function mostrarMultiplos(cantidad, multiplo) {
    let solucion = "";
    for (let i = 0; i < cantidad; i++) {
        solucion += `${multiplo} `
        multiplo *= 2
    }
    return solucion;
}

export { mostrarMultiplos };