import React from 'react'
import {NavLink} from "react-router-dom";



export class HomeKey extends React.Component {
render()      {
        return (  
         <div id = "home-wrapper">
            <div>
              <input id = "key" type="password" name="password" placeholder = "intruduce tu clave"  onChange={this.onChange}/>
              </div>
          <div>
  
            <NavLink to="/FastFood"> <button id="log-in"><i className= "fas fa-check"></i>entrar</button></NavLink>
    


          </div>
          </div>
 )
   }

 } 