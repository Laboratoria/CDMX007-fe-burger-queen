
import React, {Component} from 'react';
import fireBase from './config-firebase/FireBase';
import LoginFirebase from './views/Login-firebase/Login-firebase';
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
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }



componentDidMount(){
  this.authListener();
  
}

  render(){
    return(
    <div>{this.state.user ? (<RoutesApp/>):(  <LoginFirebase/>  )}
       </div>
    )
  }
}

export default App;

