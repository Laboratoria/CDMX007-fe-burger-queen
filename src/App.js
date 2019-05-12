//Dependencias
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import fireBase from './config-firebase/fireBase';
//Componentes
import Navbar from './components/Navbar';
import Login from './views/Login';
import Menu from './views/Menu';
import Confirm from './views/Confirm-order';
import Manual from './views/Manual';
import Promotions from './views/Promotions';
import LoginFirebase from './Login-firebase';
//Estilos
import './App.css';

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
<div>
    <div>{this.state.user ? (<Menu/>):(   <LoginFirebase/>)}
        </div>




      <BrowserRouter>
        <div className="App">
          <Navbar title="Burguer Queen"/>
              {/* <Route extact path ="/login" render={()=> <Login header="Burguer Queen"/>}/> */}
              <Route extact path ="/login" component={Login}/>
              <Route path ="/menu" component={Menu}/>
              {/* <Route path ="/menu/" render={()=><Menu/>}/> */}
              <Route path ="/confirm" component={Confirm}/>
              <Route path ="/manual" component={Manual}/>
              <Route path ="/promotions" component={Promotions}/>
      </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;


