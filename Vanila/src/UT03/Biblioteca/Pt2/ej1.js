"use strict";

const toCani = (cadenaTexto) => {
    let cadenaCani = "";
    for (let i = 0; i < cadenaTexto.length; i++) {
        if (i % 2 === 0) {
            cadenaCani += `${letraACanizar(cadenaTexto[i]).toUpperCase()}`
        } else {
            cadenaCani += `${letraACanizar(cadenaTexto[i]).toLowerCase()}`
        }
    }
    cadenaCani += `${hachesAlFinal()}`
    return cadenaCani;
};

const letraACanizar = (letraTexto) =>{
    return letraTexto === 'c' ? 'k' : letraTexto;
}

const hachesAlFinal = () =>{
    let haches = "";
        for (let i = 0; i < Math.floor(Math.random() * (6 - 2) + 2); i++) {
            haches += `H`
        }
    return haches;
}

export { toCani };