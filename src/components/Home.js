import React from 'react';
import { HomeKey } from "./HomeKey";


export class Home extends React.Component{
    render(){
        return (
            <div className = "nav-wrapper">
           <h1 id = "burger-home">Burger</h1> 
           <h2 id ="second-burger-home">Queen</h2>
           <div id = "divider"></div>
           <div id = "greeting">Hola, inicia sesión</div>
           <HomeKey/>
            </div>
           
        )
    }
}


export default Home;





























