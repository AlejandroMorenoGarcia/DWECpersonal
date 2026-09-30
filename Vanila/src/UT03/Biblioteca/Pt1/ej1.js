"use strict";

const sumandoRest = (...parametros) =>{
    if (parametros.some((v,i,a) => isNaN(v))){
        return `¿Como quieres que sume algo que no es un numero?????????????`;
    }else{
        let salida = parametros.reduce((p,v,i,a) => p + v);
        return `Resualtado de la suma: ${salida}`;
    }
};

export {sumandoRest};