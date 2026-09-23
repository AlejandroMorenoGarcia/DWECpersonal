"use strict";

function calcularMedia(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma/arguments.length;
}

function mediaMasAlta() {
    let masAlta = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > masAlta){
            masAlta = arguments[i];
        }
    }
    return masAlta;
}



export {calcularMedia, mediaMasAlta};