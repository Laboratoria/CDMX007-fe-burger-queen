import React from 'react';

const Navbar = (props)=>(
    <nav>
    <div className="nav-wrapper">
      <a href="#" class="brand-logo">{props.title}</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">Login</a></li>
        <li><a href="#">Menú</a></li>
        <li><a href="#">Confirmar Orden</a></li>
        <li><a href="#">Promociones</a></li>
        <li><a href="#">Manual</a></li>
      </ul>
    </div>
  </nav>     
);


export default Navbar;