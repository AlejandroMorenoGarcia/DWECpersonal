"use strict";

const calcularIMC = (masa, altura) =>{
    return masa / (altura * altura);
}

const tieneMayorIMC = (persona1, persona2) =>{
    return persona1 > persona2;
}

export {calcularIMC, tieneMayorIMC}