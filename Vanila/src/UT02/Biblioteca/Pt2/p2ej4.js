"use strict";

const hacerPotencia = (base, potencia) =>{
    let solucion = base;
    while (potencia > 1) {
        solucion *= base;
        potencia--;
    }
    return solucion;
};

export {hacerPotencia};