"use strict";

import { crearArrayAleatorio, mayoresDeCinco } from "../../Biblioteca/Pt4/ej2.js";

let array1 = crearArrayAleatorio(1,10,10);
let array2 = crearArrayAleatorio(1,10,10);
let array3 = crearArrayAleatorio(1,10,10);


console.log(array1);
console.log(array2);
console.log(array3);

console.log(mayoresDeCinco(array1,array2,array3));
console.log(mayoresDeCinco(array1,array2,"array3"));
