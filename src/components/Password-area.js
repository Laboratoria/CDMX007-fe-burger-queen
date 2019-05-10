
import React from 'react';
import './password-area.css';


const Password = ()=>(
    
    <div className="row ">
        <div className="input-field col m3 offset-m8 password-area">
          <input id="password" type="password" className="validate white "/>
          <label for="password" className="black-text">Ingresa tu # de empleado</label>
        </div>
      </div>
);


export default Password;
