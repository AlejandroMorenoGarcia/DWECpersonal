"use strict";

const addNumeroALista = () => {
    let random = Math.round(Math.random()*1000)
    let objetolista = `<li> ${random} </li>`
    document.getElementById("lista").insertAdjacentHTML("beforeend", objetolista)
}

export {addNumeroALista};