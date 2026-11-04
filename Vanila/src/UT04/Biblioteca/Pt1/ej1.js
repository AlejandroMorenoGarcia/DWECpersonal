"use strict";

const infoWeb = () => {
    let parrafos = document.getElementsByTagName("p");
    let enlaces = document.getElementsByTagName("a");
    let html = `<p>-----------------------------------------------------------------------------</p>
    <p>Numero de Parrafos: ${getNumeroParrafos(parrafos)}</p>
    <p>Texto Segundo Parrafo: ${getTextoParrafoSegundo(parrafos)}</p>
    <p>Numero de Enlaces: ${getNumeroEnlaces(enlaces)}</p>
    <p>Direccion Primer Enlace: ${getDireccionEnlacePrimero(enlaces)}</p>
    <p>Direccion Penultimo Enlace: ${getDireccionEnlacePenultimo(enlaces)}</p>`
    document.getElementById("info").insertAdjacentHTML("beforeend", html)
}

const getNumeroParrafos = (parrafos) => {
    return parrafos.length;
}

const getTextoParrafoSegundo = (parrafos) => {
    return parrafos[1]["innerText"];
}

const getNumeroEnlaces = (enlaces) => {
    return enlaces.length;
}

const getDireccionEnlacePrimero = (enlaces) => {
    return enlaces[0]["href"];
}

const getDireccionEnlacePenultimo = (enlaces) => {
    return enlaces[enlaces.length - 2]["href"];
}

export {infoWeb};