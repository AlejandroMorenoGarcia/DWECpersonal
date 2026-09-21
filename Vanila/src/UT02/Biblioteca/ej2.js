"use strict";

function calcularMedia(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma/arguments.length;
}

function mostrarGanador(juan, miguel, maria) {
    
}

export {calcularMedia};