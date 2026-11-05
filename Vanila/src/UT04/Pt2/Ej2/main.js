"use strict";

import { generarTabla, numerosPrimos } from "../../Biblioteca/Pt2/ej2.js";

generarTabla();
const timeout = setTimeout(() => {
    numerosPrimos();
},2000);