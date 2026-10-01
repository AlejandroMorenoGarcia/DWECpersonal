"use strict";

const generarPropinas = (facturas = []) => {
    return facturas.map((v,i,a) => {
        if(v < 50){
            return 20;
        } else if (v < 200){
            return 15;
        } else {
            return 10;
        }
    });
}

const sumarPropina = (facturas = [], propinas = []) => {
    return facturas.map((v,i,a) => {
        return v * (propinas[i]/100 + 1);
    });
}

export {generarPropinas, sumarPropina};