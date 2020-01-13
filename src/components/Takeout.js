import React from 'react'
import { Button } from 'semantic-ui-react'


export class Takeout extends React.Component {
    render()      {
            return (  
              <div id = "takeout-menu">
                <Button.Group>
                <Button id = "diner">Al Comedor</Button>
                <Button id = "takeout">Para Llevar</Button>
                <Button id = "take-home">A Domicilio</Button>
              </Button.Group>
              </div>
     )
       }
    
     }  


export default Takeout;
