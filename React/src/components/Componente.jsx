import React from "react";
import "./Componente.css";

const Componente = (props) => {
    return (
        <>
            <div className="componente-contenedor">
                {props.children}
            </div>
        </>
    )
};

export default Componente