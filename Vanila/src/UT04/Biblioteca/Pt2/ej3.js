"use strict";

const cambiarParrafoAleatorio = () => {
    const colores = ["rojo","azul","verde","amarillo","negro","blanco"];
    const parrafos = [...document.getElementsByTagName("p")];
    let parrafoAleatorio = Math.round(Math.random() * (parrafos.length - 1));
    let colorAleatorio = colores[Math.round(Math.random() * (colores.length - 1))];
    console.log(parrafoAleatorio)
    console.log(colorAleatorio);
    parrafos[parrafoAleatorio].classList.replace(parrafos[parrafoAleatorio].className,colorAleatorio);
}

export {cambiarParrafoAleatorio};