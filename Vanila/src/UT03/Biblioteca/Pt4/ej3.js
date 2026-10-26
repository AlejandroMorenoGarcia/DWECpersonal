"use strict";

const addUsuario = (usuarios=[], nuevoUsuario) => {
    usuarios = [...usuarios, nuevoUsuario];
    return usuarios;
}

const mayoresDeEdad = (usuarios=[], edad) => {
    return usuarios.filter((v) => {
        return v.preferencias.edad >= edad ?? v;
    });
}

const correoDeServidor = (usuarios=[], servidor) => {
    return usuarios.filter((v) => {
        return v.contacto.correoelectronico.includes(servidor) ?? v;
    });
}

const temaEdadPais = (usuarios=[], tema, edad, pais) => {
    return usuarios.filter((v) => {
        return (v.preferencias.tema === tema && 
            v.preferencias.edad >= edad && 
            v.contacto.direccion.pais === pais) ?? v;
    });
}

const addApellido = (usuarios=[], apellido="No indicado") => {
    return usuarios.map((v) => {
        return v = {...v, 'apellido': apellido};
    });
}

const addCodigo = (usuarios=[], codigo="00000") => {
    return usuarios.map((v) => {
        v.contacto.direccion = {...v.contacto.direccion, 'codigo': codigo};
        return v
    });
}

export {addUsuario, mayoresDeEdad, correoDeServidor, temaEdadPais, addApellido, addCodigo}