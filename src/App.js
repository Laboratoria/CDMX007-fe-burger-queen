import React, { Component } from 'react';
import { BrowserRouter , Route} from "react-router-dom";
import './App.css';
import './Menu.css'; 
import Home from "./components/Home";
import FastFood from "./components/FastFood";
import OrderHistory from "./components/OrderHistory";
import NewOrder from "./components/NewOrder"; 
import Promos from "./components/Promos"; 




class App extends Component { 
  render() {
    return (
    <BrowserRouter>
  
      <Route path= "/"  component = {Home} exact /> 
      <Route path= "/FastFood"  component = {FastFood}/>
      <Route path = "/OrderHistory" component = {OrderHistory}/>
      <Route path = "/NewOrder" component = {NewOrder}/>
      <Route path = "/Promos" component = {Promos}/>

    </BrowserRouter>
    );

} 
}

export default App;
 