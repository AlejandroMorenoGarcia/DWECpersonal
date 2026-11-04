"use strict";

const insertAfter = (nuevoElemento, existenteElemento) => {
    // let siguenteHermano = existenteElemento.nextSibling;
    // let padre = existenteElemento.parentNode;
    // if (siguenteHermano === null){
    //     padre.appendChild(nuevoElemento);
    // }else {
    //     padre.insertBefore(nuevoElemento, siguenteHermano);
    // }

    existenteElemento.insertAdjacentHTML("afterend", nuevoElemento);
}

export {insertAfter};