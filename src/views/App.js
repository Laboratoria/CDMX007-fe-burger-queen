//Dependencias
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
//Componentes
import Navbar from '../components/Navbar';
import Login from './Login.js';
import Menu from './Menu';
import Confirm from './Confirm-order';
import Manual from './Manual';
import Promotions from './Promotions';
//Estilos
import './App.css';

//Contiene opciones para pasar props y render .Falta establecer la ruta por defecto -> (/)
class App extends Component{
  render(){
    return(
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
    )
  }
}

export default App;


