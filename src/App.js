import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './views/Login.js';
import Menu from './views/Menu';
import Confirm from './views/Confirm-order';
import Manual from './views/Manual';
import Promotions from './views/Promotions';
import './App.css';





//Contiene opciones para pasar props y  render .Falta establecer la ruta por defecto -> (/)
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


// function App() {
//   return (

//     <div pageXOffsetassName="App">
//      <Navbar></Navbar>
//         <p className="App-header">
//          Burguer Queen
//         </p>

//     </div>

//   );
// }