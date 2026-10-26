"use strict";

import { enMayusculas, enOrden, aJSON } from "../../Biblioteca/Pt4/ej1.js";

let nombres = ["Alejandro", "Juan", "Pepe", "Cristian", "Laura"];
let nombresMayusculas = enMayusculas(nombres);
let nombresOrdenados = enOrden(nombres);
let nombresJSON = aJSON(nombres)

console.log(nombres);
console.log(nombresMayusculas);
console.log(nombresOrdenados);
console.log(nombresJSON);