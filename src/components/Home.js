import React from 'react';
import mainLogo from'./logo.png';

const Home = () => {
    return (
        <div id = "wrapper">
        <div className="container">
      
        <img  src={mainLogo} alt="fireSpot"/>
      </div>
<div id = "input-type">  
    <input type="password" id="input-pa" placeholder= "INTRODUCE TU CLAVE"name="password"></input> 

    <button onClick = {console.log('You just clicked on me.')} class="btn btn-primary" id= "enter"><i class= "fas fa-check"></i>entrar</button>
    
            </div>
           
            </div>
            
    );
};

export default Home; 