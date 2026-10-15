"use strict";

import { solicitarDni } from "../../Biblioteca/Pt2/ej3.js";

let arrayInicial = [];

const intervaloDni = setInterval(() => {
    arrayInicial = solicitarDni(arrayInicial, intervaloDni);
},5000);


