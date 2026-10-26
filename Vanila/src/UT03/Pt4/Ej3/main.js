"use strict";

import { addUsuario, mayoresDeEdad, correoDeServidor, temaEdadPais, addApellido, addCodigo } from "../../Biblioteca/Pt4/ej3.js";

const usuarios = [
  {
    nombre: "Luis",
    preferencias: { tema: "oscuro", idioma: "español", edad: 25 },
    contacto: {
      direccion: {
        calle: "Calle falsa, 666",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "correofalso@yahoo.com",
      telefono: "123456789",
    },
  },
  {
    nombre: "Marta",
    preferencias: { tema: "claro", idioma: "catalán", edad: 15 },
    contacto: {
      direccion: {
        calle: "Calle también falsa, 123",
        localidad: "Andorra la Vella",
        pais: "Andorra",
      },
      correoelectronico: "correoandorrano@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Alberto",
    preferencias: { tema: "oscuro", idioma: "español", edad: 56 },
    contacto: {
      direccion: {
        calle: "Elm Street, 666",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "correonulo@yahoo.com",
      telefono: "548632478",
    },
  },
  {
    nombre: "Jacinto",
    preferencias: { tema: "claro", idioma: "inglés", edad: 17 },
    contacto: {
      direccion: {
        calle: "Elm Street, 667",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Rigoberta",
    preferencias: { tema: "claro", idioma: "francés", edad: 34 },
    contacto: {
      direccion: {
        calle: "Calle inexistente, 6",
        localidad: "Burdeos",
        pais: "Francia",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "232547859",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle de mentira, s/n",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "estecorreonoexiste@gmail.com",
      telefono: "452158697",
    },
  },
  {
    nombre: "Pedro",
    preferencias: { tema: "claro", idioma: "español", edad: 20 },
    contacto: {
      direccion: {
        calle: "Calle existente, 34",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "correoinexistente@yahoo.com",
      telefono: "",
    },
  },
];

let nuevoUsuario = {
    nombre: "Alejandro",
    preferencias: { tema: "oscuro", idioma: "español", edad: 25 },
    contacto: {
      direccion: {
        calle: "Calle Maria Luisa Ruiz, 11",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "alexmorgar01@gmail.com",
      telefono: "697642499",
    },
};

console.log(usuarios);
console.log(nuevoUsuario);

console.log("Nuevo usuario")
console.log(addUsuario(usuarios,nuevoUsuario));
console.log("Mayores de edad")
console.log(mayoresDeEdad(usuarios, 18));
console.log("Servidor Yahoo")
console.log(correoDeServidor(usuarios, "yahoo"));
console.log("Varias cosas")
console.log(temaEdadPais(usuarios,"claro",18,"España"));
console.log("Añadir Apellido");
console.log(addApellido(usuarios));
console.log("Añadir Codigo");
console.log(addCodigo(usuarios));