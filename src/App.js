import React, { Component } from 'react';
import { BrowserRouter , Route} from "react-router-dom";
import './App.css';

import Home from "./components/Home";
import Menu from "./components/Menu";
import Navigation from "./components/Navigation";


class App extends Component {
  render() {
    return (
     <BrowserRouter>
   <div>
   <Navigation/> 
     <div>    
        <Route path= "/"  component = {Home} exact /> 
     <Route path= "/Menu"  component = {Menu}/>
     </div>


     
    
   </div>
     </BrowserRouter>
    );

} 
}

export default App;
 