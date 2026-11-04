"use strict";

import { quijoteFrases } from "./quijoteFrases.js";
import { toCani } from "../../../UT03/Biblioteca/Pt2/ej1.js"

const nuevaFrase = () => {
    let frase = quijoteFrases[Math.round(Math.random()* (quijoteFrases.length - 1))];
    let fraseCani = toCani(frase);
    let html = `
    <tr>
        <td>${frase}</td>
        <td>${fraseCani}</td>
    </tr>`;
    document.getElementById("bodyTabla").insertAdjacentHTML("beforeend",html);
}

export {nuevaFrase};