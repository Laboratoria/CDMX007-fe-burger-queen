import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Confirm from './views/Confirm-order';
import Manual from './views/Manual';
import Menu from './views/Menu';
import Promotions from './views/Promotions';



class RoutesApp extends Component{
    render(){
        return(
        <BrowserRouter>
        <div className="App">
          <Navbar title="Burguer Queen"/>
              <Route path ="/menu" component={Menu}/>
              <Route path ="/confirm" component={Confirm}/>
              <Route path ="/manual" component={Manual}/>
              <Route path ="/promotions" component={Promotions}/>
        </div>
      </BrowserRouter>
      )
    }
}

export default RoutesApp;