"use strict";

const calcular = (funcion1, funcion2, funcion3, longitudArray) => {
    let array1 = funcion1(longitudArray);
    let array2 = funcion1(longitudArray);
    let array3 = funcion2(array1, array2);
    funcion3(array1,array2,array3);
}

const generarArray = (longitud) => {
    let arrayFinal = []
    for (let i = 0; i < longitud; i++) {
        arrayFinal = [...arrayFinal, Math.floor(Math.random()*101)];
    }
    return arrayFinal;
}

const juntarArrays = (array1, array2) => {
    let arrayFinal = []
    for (let i = 0; i < array1.length; i++) {
        arrayFinal = [...arrayFinal, array1[i] + array2[array2.length - 1 - i]];
    }
    return arrayFinal;
}

const mostrarArray = (array1,array2,array3) => {
    console.log(`Array 1: ${array1}\nArray 2: ${array2}\nArray 3: ${array3}`);
}

export { calcular, generarArray, juntarArrays, mostrarArray };