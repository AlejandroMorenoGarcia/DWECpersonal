"use strict";

function mostrarProductoConImpuesto(producto = "Producto Generico", precio = 100, impuesto = 21){
    if (isNaN(precio) || isNaN(impuesto)){
        console.error("El precio o el impuesto no es un numero")
    }else{
        console.log(`${producto}: ${precio + (precio * impuesto / 100)}€`)
    }
}

export {mostrarProductoConImpuesto}