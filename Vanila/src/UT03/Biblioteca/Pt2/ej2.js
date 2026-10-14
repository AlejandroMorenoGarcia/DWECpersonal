"use strict";

const temporizador = (minutos, segundos) => {
    if (segundos === undefined) {
        return temporizador(0, minutos);
    } else {
        if (isNaN(minutos) || isNaN(segundos) || minutos < 0 || minutos > 59 || segundos < 0 || segundos > 59) {
            console.error(`tonto`);
        } else {
            console.log(`Quedan: ${minutos} minutos y ${segundos} segundos`);
            if (segundos === 0 && minutos === 0) {
                console.log("Se acabo el tiempo");
            } else if (segundos === 0) {
                setTimeout(temporizador(minutos - 1, 59), 1000);
            } else {
                setTimeout(temporizador(minutos, segundos - 1), 1000);
            }
        }
    }
}

export { temporizador };