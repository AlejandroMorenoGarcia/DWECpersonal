"use strict";
import { calcularIMC, tieneMayorIMC } from "../Biblioteca/ej1.js";


console.log(`¿Tiene Marcos un IMC mayor que el de Juan?: ${tieneMayorIMC(calcularIMC(75, 180),calcularIMC(60, 170))}`);