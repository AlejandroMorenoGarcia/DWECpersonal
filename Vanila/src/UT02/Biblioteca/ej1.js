"use strict";

function calcularIMC(masa, altura) {
    return masa / (altura * altura);
}

function tieneMayorIMC(persona1, persona2){
    return persona1 > persona2;
}

export {calcularIMC, tieneMayorIMC}