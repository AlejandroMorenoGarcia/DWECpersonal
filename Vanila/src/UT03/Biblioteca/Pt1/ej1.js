"use strict";

const sonEnteros = (num) => {
    return Array.isArray(num) ? num.every((v,i,a) => !isNaN(v)) : !isNaN(num) ?? false;
}

const sumandoRest = (...numeros) =>{
    return sonEnteros(numeros) ? numeros.reduce((p,v,i,a) => p + v) : `¿Como quieres que sume algo que no es un numero?`;
};

export {sumandoRest, sonEnteros};