"use strict";

const multiplosDeTres = (numero) =>{
    let solucion = "";
    if (isNaN(numero) || numero < 1){
        return "¿Tus padres son primos?"
    }
    for (let i = 1; i <= numero; i++) {
        if (i % 3 === 0){
            solucion += `${i} `;
        }
    }
    return solucion;
};

export {multiplosDeTres}