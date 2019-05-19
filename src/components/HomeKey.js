import React from 'react'
import { Button } from 'semantic-ui-react'


export class HomeKey extends React.Component {
render()      {
        return (  
         <div id = "home-wrapper">
            <div>
              <input id = "key" type="password" name="password" placeholder = "intruduce tu clave"/>
              </div>
          <div>
            <Button id = "log-in" icon='search'>ENTRAR</Button>
          </div>
          </div>
 )
   }

 } 