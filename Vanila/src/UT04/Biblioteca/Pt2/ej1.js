"use strict";

const censurarSexo = () => {
    let hijosBody = Array.from(document.body.children);
    console.log(hijosBody);
    hijosBody.map((hijo) => {
        hijo["innerHTML"] =  hijo.textContent.replace("sexo", `<span id="censurado">Contenido Bloqueado</span>`)
    })
    console.log(hijosBody);
}

export {censurarSexo};