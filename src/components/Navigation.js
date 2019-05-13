import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className = "nav-wrapper">
        <div id = "navlinks">
            <NavLink to = "">PROMOS</NavLink>
            <NavLink to = "" >Nueva Orden</NavLink>
            <NavLink to = "" >Ordenes</NavLink>
            <NavLink id = "logout" to = "/" >Cerrar Sesión</NavLink>
        </div>
        </div>
    )
}

export default Navigation;