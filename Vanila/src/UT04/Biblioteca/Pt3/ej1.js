"use strict"

const borrarEjemplos = () => {
    borrado([...document.getElementById("pendientes").getElementsByClassName("tarea")]);
    borrado([...document.getElementById("acabadas").getElementsByClassName("acabada")]);
}

const borrado = (array) => {
    array.map((v)=>{
        v.remove();
    })
}

const addOnClicks = () => {
    let add = document.getElementById("tareas").getElementsByClassName("add")[0];
    let show = document.getElementById("tareas").getElementsByClassName("sho")[0];
    add.onclick = () => addTarea();
    show.onclick = () => showTareasArchivadas();
}

const addTarea = () => {
    let texto =  document.getElementsByTagName("textarea")[0]["value"];
    let pendientes = document.getElementById("pendientes");
    if (texto === ""){
        console.log("tonto")
    } else {
        let html = 
        `<div class="tarea">
            <p>${texto}</p>
            <p class="botones">
              <input type="button" value="Borrar" class="del" onclick="borrarTarea()"/>
              <input type="button" value="Acabar" class="end" onclick="archivarTarea()"/>
            </p>
        </div>`;
        pendientes.insertAdjacentHTML("beforeend",html)
        let divCreado = pendientes.lastElementChild
        divCreado.getElementsByClassName("del")[0].onclick = () => borrarTarea(divCreado);
        divCreado.getElementsByClassName("end")[0].onclick = () => archivarTarea(divCreado);
    }
}

const borrarTarea = (tarea) => {
    tarea.remove();
}

const archivarTarea = (tarea) => {
    let acabadas = document.getElementById("acabadas");
    let html = `
        <div class="acabada">
            <p>${tarea["innerText"]}</p>
            <p class="botones">
                <input type="button" value="Archivar" class="del" />
                <input type="button" value="Volver" class="end" />
            </p>
        </div>`;
    acabadas.insertAdjacentHTML("beforeend", html);
    borrarTarea(tarea);
}


export {borrarEjemplos, addOnClicks};