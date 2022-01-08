import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Comopentes/Login";
import InicioUser from "./Comopentes/InicioUser";
import i from "./Inicio.module.css"

export default function Inicio() {
   
    return(
        <div className={i.con}>
            

        <InicioUser />
        
        </div>
    )
}