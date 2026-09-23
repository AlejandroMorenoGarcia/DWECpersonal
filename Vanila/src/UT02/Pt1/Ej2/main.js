"use strict";

import { calcularMedia, mediaMasAlta } from "../../Biblioteca/p1ej2.js";

let juan = calcularMedia(89,120,103);
let miguel = calcularMedia(116,94,123);
let marta = calcularMedia(97,134,105);
let masAlta = mediaMasAlta(juan,miguel,marta)

console.log(`Los que tienen la media mas alta son:${juan === masAlta ? "Juan ":""}${miguel === masAlta ? "Miguel ":""}${marta === masAlta ? "Marta ":""}`)