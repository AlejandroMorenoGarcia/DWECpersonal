"use strict";

const enMayusculas = (array=[]) => {
    let arrayMayusculas = array.map((v) => {
        return v.toUpperCase()
    })
    return arrayMayusculas;
}

const enOrden = (array=[]) => {
    let arrayOrdenado = array.toSorted();
    return arrayOrdenado
}
const aJSON = (array=[]) => {
    let arrayJSON = array.map((v,i) => {
        return { index : i, nombre: v};
    })
    return arrayJSON;
}

export {enMayusculas, enOrden, aJSON};