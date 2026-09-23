"use strict";

const mostrarMes = (mes) => {
    const meses = ["enero", "febrero", "marzo", "abril","mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    if (isNaN(mes) || mes < 1 || mes > 12){
        return "Anda que eres tonto";
    }
    return meses[mes -1];
};

export {mostrarMes};