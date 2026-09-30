"use strict";

const tablas = (multiplo, funcion) =>{
    if (isNaN(multiplo) || multiplo < 2){
        return `No es un numero o es menor a 2`;
    } else {
        //if ( multiplo === 2){
        //    console.log(funcion(multiplo));
        //} else {
        //    console.log(funcion(multiplo));
        //    tablas(--multiplo, funcion);
        //}

        console.log(funcion(multiplo,1,2,3,4,5,6,7,8,9,10));
        multiplo != 2 ? tablas(--multiplo, funcion) : "";
    }
};

const multiplicar = (multiplo,...multiplicadores) => {
    let salida = `Tabla del ${multiplo}:\n`
    multiplicadores.map((v) => {
        salida = salida.concat(`${multiplo} * ${v} = ${v*multiplo}\n`)
    });
    
    return salida
    
};

export {tablas, multiplicar}