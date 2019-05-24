import React from 'react';
import {NavLink} from "react-router-dom";


export class Navigation extends React.Component{
    render(){
        return (
            <div className = "nav-wrapper">
            <div id = "navlinks">
                <NavLink  to = "Promos">PROMOS</NavLink>
                <NavLink to = "NewOrder" >Nueva Orden</NavLink>
                <NavLink to = "/OrderHistory" >Ordenes</NavLink>
                <NavLink id = "logout" to = "/" >Cerrar Sesión</NavLink>
            </div>
            </div>
        )
    }
}


export default Navigation;