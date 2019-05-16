import React from 'react';
import {NavLink} from 'react-router-dom';
// import Menu from '../../views/Menu/Menu';
import fireBase from '../../config-firebase/FireBase';


class Navbar extends React.Component{

  constructor(props){
    super(props);
    this.logOut=this.logOut.bind(this);
}
logOut(){
    fireBase.auth().signOut();
}







  render(){
    return <nav>
    <div className="nav-wrapper  grey darken-4">
      <ul id="nav-mobile" className="right hide-on-med-and-down text-black">
      <li ><NavLink  to="/menu">Menú</NavLink></li>
        <li><NavLink to="/confirm">Confirmar Orden</NavLink></li>
        <li><NavLink to="/promotions">Promociones</NavLink></li>
        <li><NavLink to="/manual">Manual</NavLink></li>
       
        <li><button className="btn-small black"onClick={this.logOut}>Salir</button></li>
      </ul>
    </div>
  </nav>   
  }
}

export default Navbar;