
import {NavLink} from 'react-router-dom';
import fireBase from '../../config-firebase/FireBase';
import M from 'materialize-css';
import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

class Navbar extends Component {

    constructor(props){
        super(props);
        this.logOut=this.logOut.bind(this);
    }
    
    logOut(){
        fireBase.auth().signOut();
    }
    
    componentDidMount() {
        var elem = document.querySelector(".sidenav")
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 300
          
        });
      console.log(instance)
        
    }    

    render() {
        return (
            <div>
                <ul id="slide-out" className="sidenav">
                    <li />
                    <li>
                       <NavLink  to="/menu">Menú</NavLink></li>
                        <li >
                    </li>
                    <li>
                    <NavLink to="/confirm">Confirmar Orden</NavLink>
                    </li>
                    <li>
                        <div className="divider" />
                    </li>
                    <li>
                    <NavLink to="/promotions">Promociones</NavLink>
                    </li>
                    <li>
                    <NavLink to="/manual">Manual</NavLink>
                    </li>
                    <li><button className="btn-small"onClick={this.logOut}>Salir</button></li>
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger" >
                    <i className="material-icons">Menú de navegación</i>
                </a>
            </div>
        );
    }
  }

export default Navbar;

