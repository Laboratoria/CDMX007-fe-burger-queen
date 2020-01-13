import React from 'react'
import { Button } from 'semantic-ui-react'


export class Additional extends React.Component {
render()      {
        return (  
          <div id = "additional">
            <Button.Group>
            <Button id = "meals">Platillos</Button>
            <Button id = "drinks">Bebidas</Button>
            <Button id = "additionals">Complementos</Button>
          </Button.Group>
          </div>

 )
   }

 }  
 
  

