"use strict";

import { generarPropinas, sumarPropina } from "../../Biblioteca/Pt1/ej3.js";

const facturas = [124, 48, 268];

console.log(`Facturas: ${facturas}
Propinas: ${generarPropinas(facturas)}
Final: ${sumarPropina(facturas,generarPropinas(facturas))}`)

