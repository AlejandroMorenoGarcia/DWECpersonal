"use strict";

import { sonEnteros } from "./ej1.js";

const tablas = (multiplo, funcion) =>{
    if (!sonEnteros(multiplo) || multiplo < 2){
        console.error(`No es un numero o es menor a 2`);
    } else {
        console.log(funcion(multiplo));
        multiplo != 2 ? tablas(--multiplo, funcion) : "";
    }
};

const multiplicar = (multiplo) => {
    let salida = `Tabla del ${multiplo}:\n`
    for (let i = 0; i <= 10; i++) {
        salida = salida.concat(`${multiplo} * ${i} = ${i*multiplo}\n`)
    }
    return salida
};

export {tablas, multiplicar}