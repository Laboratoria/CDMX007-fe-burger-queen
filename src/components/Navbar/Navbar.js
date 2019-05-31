
import {NavLink} from 'react-router-dom';
import fireBase from '../../config-firebase/FireBase';
import M from 'materialize-css';
import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./Navbar.css";
import Waiter from '../../assets/waiter.svg'

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
                <ul id="slide-out" className="sidenav text-white sidenav-fixed">
                 <li><div className="user-view">
                 <div> <img src={Waiter} alt="waiter" className="circle"></img></div>
                 <div ><p className="menu-text">Gracias por formar parte <br/> del equipo BQ.</p></div>
                  </div></li>
                      <li />
                         <li>
                        <div className="divider" />
                    </li>
                    <li>
                       <NavLink  to="/menu">Menú</NavLink></li>
                        <li >
                    </li>
                      <li>
                        <div className="divider" />
                    </li>
                       <li>
                       <NavLink to="/promotions">Promociones</NavLink>
                    </li>
                       <li>
                        <div className="divider" />
                    </li>
                       <li>
                        <NavLink to="/manual">Manual de procedimientos</NavLink>
                    </li>
                        <li>
                        <div className="divider" />
                    </li >
                    <li className="row"><button className="btn-large btn-logOut col m8 offset-m2 s10 offset-s1"onClick={this.logOut}>Salir</button></li>
                </ul>
                <div  data-target="slide-out" className="sidenav-trigger row" >
                <i className="fas fa-bars fa-2x col m1  hamburguer-menu"></i>
                </div>
            </div>
        );
    }
  }

export default Navbar;

