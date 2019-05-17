import React, { Component } from 'react';
import { BrowserRouter , Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import FastFood from "./components/FastFood";




class App extends Component { 
  render() {
    return (
    <BrowserRouter>
  
      <Route path= "/"  component = {Home} exact /> 
      <Route path= "/FastFood"  component = {FastFood}/>

    </BrowserRouter>
    );

} 
}

export default App;
 