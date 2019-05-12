import React from 'react';
import {NavLink} from 'react-router-dom';


class Navbar extends React.Component{
  render(){
    return <nav>
    <div className="nav-wrapper">
      <NavLink exact to="/" className="brand-logo"></NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><NavLink exact to="/"></NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/menu">Menú</NavLink></li>
        <li><NavLink to="/confirm">Confirmar Orden</NavLink></li>
        <li><NavLink to="promotions">Promociones</NavLink></li>
        <li><NavLink to="manual">Manual</NavLink></li>
      </ul>
    </div>
  </nav>   
  }
}

export default Navbar;