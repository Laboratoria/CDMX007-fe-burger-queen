import React from 'react';
import {  Navigation } from "./Navigation";
import { Options } from "./Options";
import { FoodGrid } from "./FoodGrid";
import {Takeout} from './Takeout';
import  {Additional} from './Additional';

class App extends React.Component {
    render (){
        return(
            <div className = "container">
             <div className = "row">
                <div className = "col-xs-10 col-xs-offset-1">
                 <Navigation/>
                  <h1 align = "center" color= "white">Burger</h1>
                  
                  <h2 align = "center" color= "white">Queen</h2>
                  <Options/> <br/>
                  <Additional/>
                  <FoodGrid/>
                  <Takeout/>
                </div>
              </div>
            </div>
        )
    }
}

export default App;
