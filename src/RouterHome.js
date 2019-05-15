import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './views/home';
import Pagar from './views/pagar';
//import login from './views/login';
import Navbar from './components/navbar/navbar';
import TotalProducts from './components/total/total';
import Products from './components/products/products';

import './App.css';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <header className="App-header"> */}
        <Navbar title="icon home" />
        <TotalProducts title="products" />
        {/* <Route exact path="/" render={() => <Home title="Hola desde home" /> } /> */}
        <Route exact path="/" component={Home} />
        <Route path="/pagar" component={Pagar} />
        {/* <Route path="/login" component={login} /> */}
        <Route path="/breakfast" component={Products} />
        <Route path="/hamburger" component={Products} />
        <Route path="/drinks" component={Products} />
        <Route path="/complements" component={Products} /> 
       {/* </header>  */}
    </div>
    </BrowserRouter>
  );
}
export default App;