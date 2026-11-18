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
    add.onclick = () => addNuevaTarea();
    show.onclick = () => showTareasArchivadas();
}

const addNuevaTarea = () => {
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
              <input type="button" value="Acabar" class="end" onclick="acabarTarea()"/>
            </p>
        </div>`;
        pendientes.insertAdjacentHTML("beforeend",html)
        let divCreado = pendientes.lastElementChild
        divCreado.getElementsByClassName("del")[0].onclick = () => borrarTarea(divCreado);
        divCreado.getElementsByClassName("end")[0].onclick = () => acabarTarea(divCreado);
    }
}

const borrarTarea = (tarea) => {
    tarea.remove();
}

const acabarTarea = (tarea) => {
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
    let divCreado = acabadas.lastElementChild
    divCreado.getElementsByClassName("del")[0].onclick = () => archivarTarea(divCreado);
    divCreado.getElementsByClassName("end")[0].onclick = () => volverTarea(divCreado);
}

const archivarTarea = (tarea) => {
    tarea.classList.add("archivada");
    tarea.hidden = true;
}

const volverTarea = (tarea) => {
    let pendientes = document.getElementById("pendientes");
    let html =
        `<div class="tarea">
            <p>${tarea["innerText"]}</p>
            <p class="botones">
              <input type="button" value="Borrar" class="del" onclick="borrarTarea()"/>
              <input type="button" value="Acabar" class="end" onclick="acabarTarea()"/>
            </p>
        </div>`;
    pendientes.insertAdjacentHTML("beforeend",html)
    borrarTarea(tarea);
    let divCreado = pendientes.lastElementChild
    divCreado.getElementsByClassName("del")[0].onclick = () => borrarTarea(divCreado);
    divCreado.getElementsByClassName("end")[0].onclick = () => acabarTarea(divCreado);
}

const showTareasArchivadas = () => {
    let archivadas = [...document.getElementsByClassName("archivada")];
    archivadas.map((v) => {
        v.classList.remove("archivada");
        v.hidden = false;
    })
}


export {borrarEjemplos, addOnClicks};