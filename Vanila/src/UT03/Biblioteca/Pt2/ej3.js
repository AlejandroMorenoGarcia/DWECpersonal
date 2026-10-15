"use strict";

const solicitarDni = (arrayDnis, intervaloDni) => {
    let digitos = parseInt(prompt("Dame los digitos del DNI (-1 para finalizar): "),10);
    if (digitos === -1){
        clearInterval(intervaloDni);
        arrayDnis = mostrarDnisCompletos(arrayDnis);
    }else{
        arrayDnis = [...arrayDnis, digitos]
    }
    return arrayDnis;
}

const mostrarDnisCompletos = (arrayDnis) => {
    const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
    for (let i = 0; i < arrayDnis.length; i++) {
        arrayDnis[i] += `${letras[arrayDnis[i] % 23]}`;
    }
    console.log(arrayDnis);
    return arrayDnis;
}

export {solicitarDni};