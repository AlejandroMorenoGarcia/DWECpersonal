"use strict";

const esPar = (numero) => {
    return (numero % 2 === 0);
};

const esPositivo = (numero) => {
    return (numero > 0);
};

const esPrimo = (numero) => {
    if (numero <= 1) return false;

    let limite = Math.sqrt(numero);
    for (let i = 2; i <= limite; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
};

const analisisNumerico = (numero) => {
    if (isNaN(numero)){
        return "Pasame un numero retrasado"
    }
    return `${numero} --> Es Par: ${esPar(numero)} | Es Positivo: ${esPositivo(numero)} | Es Primo: ${esPrimo(numero)}`;
};

export {analisisNumerico}