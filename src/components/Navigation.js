import React from 'react';
import {NavLink} from "react-router-dom";


export class Navigation extends React.Component{
    render(){
        return (
            <div className = "nav-wrapper">
            <div id = "navlinks">
                <NavLink  to = "Promos" id="promo" className="navlinks" >PROMOS</NavLink>
                <NavLink to = "NewOrder" className="navlinks">Nueva Orden</NavLink>
                <NavLink to = "/OrderHistory"className="navlinks" >Ordenes</NavLink>
                <NavLink id = "logout" to = "/" className="navlinks">Cerrar Sesión</NavLink>
            </div>
            </div>
        )
    }
}


export default Navigation;