import React from 'react';
import {NavLink} from "react-router-dom";


const Navigation = () => {
    return (
        <div id = "navlinks">
            <NavLink to = "">PROMOS</NavLink>
            <NavLink to = "" >Nueva Orden</NavLink>
            <NavLink to = "">Ordenes</NavLink>
            <NavLink to = "">Menú</NavLink>
            <NavLink id = "logout" to = "/" >Cerrar Sesión</NavLink>
        </div>
    )
}

export default Navigation;