"use strict";

const crearArrayAleatorio = (min = 0, max = 10, longitud = 10) => {
    let arrayCrear = [];
    for (let i = 0; i < longitud; i++) {
        arrayCrear = [...arrayCrear, Math.floor(Math.random() * (max + 1 - min) + min)]
    }
    return arrayCrear;
}

const mayoresDeCinco = (...arrays) => {
    let arrayFinal = [];
    if (arrays.every((v) => typeof v === "object")) {
        for (let i = 0; i < arrays.length; i++) {
            let mayores = arrays[i].filter((v) => {
                return v > 5;
            })
            for (let j = 0; j < mayores.length; j++) {
                arrayFinal = [...arrayFinal, mayores[j]]
            }
        }
        return arrayFinal;
    }else{
        return "Pero que mierda me has dao'???"
    }
}

export { crearArrayAleatorio, mayoresDeCinco };