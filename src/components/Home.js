import React from 'react';
import mainLogo from './logo.png';

const Home = () => {
    return (
    <div className = "wrapper">

    <div className= "header">
    <img src= {mainLogo} alt = "burgerQueen"></img>
    </div>

    <div className = "content">
    <input type = "password" id = "input-pa" placeholder= "introduce tu clave" name= "password"></input>
    <button id="enter"><i class= "fas fa-check" to="/Menu"></i>entrar</button>
    </div>
    <div className = "footer"></div>
   
    </div>
    
    );
};

export default Home; 