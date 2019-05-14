import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Confirm from './views/Confirm-order/Confirm-order';
import Manual from './views/Manual/Manual';
import Menu from './views/Menu/Menu';
import Promotions from './views/Promotions/Promotions';
// import LoginFirebase from './views/Login-firebase/Login-firebase';



class RoutesApp extends Component{
    render(){
        return(
        <BrowserRouter>
        <div className="App">
          <Navbar title="Burguer Queen"/>
               {/* <Route path ="/login" component={LoginFirebase}/> */}
              <Route path ="/menu" exact component={Menu}/>
              <Route path ="/confirm" component={Confirm}/>
              <Route path ="/manual" component={Manual}/>
              <Route path ="/promotions" component={Promotions}/>
        </div>
      </BrowserRouter>
      )
    }
}

export default RoutesApp;