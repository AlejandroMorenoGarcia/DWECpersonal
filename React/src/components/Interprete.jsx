import React from "react";
import "./Interprete.css";

const Interprete = (props) => {
    return (
        <>
            <div className="interprete-contenedor">
                <img src={props.foto}/>
                <h3>{props.nombre}</h3>
                <p>{props.children}</p>
            </div>
        </>
    );
};

export default Interprete;