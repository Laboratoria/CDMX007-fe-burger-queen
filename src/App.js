//Dependencias
import React, {Component} from 'react';
// import {BrowserRouter, Route} from 'react-router-dom';
import fireBase from './config-firebase/FireBase';
//Componentes
// import Navbar from './components/Navbar';
// import Login from './views/Login';

// import Confirm from './views/Confirm-order';
// import Manual from './views/Manual';
// import Promotions from './views/Promotions';
import LoginFirebase from './views/Login-firebase/Login-firebase';
import Menu from './views/Menu/Menu';

//Estilos
import './App.css';
import RoutesApp from './Routes-App';

//Contiene opciones para pasar props y render .Falta establecer la ruta por defecto -> (/)
class App extends Component{
constructor(props){
  super(props);
  this.state ={
    user:{},
  }
}
  authListener() {
    fireBase.auth().onAuthStateChanged((user) => {
     // console.log(user);
      if (user) {
        this.setState({ user });
      //  localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
  
     //   localStorage.removeItem('user');
      }
    });
  }


componentDidMount(){
  this.authListener();
}

  render(){
    return(
 
    <div>{this.state.user ? (<div><RoutesApp/><Menu/></div>):(   <LoginFirebase/>)}
        </div>

     
    )
  }
}

export default App;

