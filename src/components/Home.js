import React from 'react';
import mainLogo from'./logo.png';
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
     <div id = "wrapper">
        <div className="container">
        <img  src={mainLogo} alt="fireSpot"/>
    </div>

<div id = "input-type">  
    <input type="password" id="input-pa" placeholder= "INTRODUCE TU CLAVE"name="password"></input> 
    <NavLink to="/Menu"> <button id="enter"><i class= "fas fa-check"></i>entrar</button></NavLink>
</div>
           
    </div>
            
    );
};

export default Home; 