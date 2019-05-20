import React from 'react'
import { Button } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'


export class Options extends React.Component {
render()      {
        return (  
    <Button.Group>
        <Button id = "breakfast">Desayuno</Button>
       <Button id = "lunch">Comida/cena</Button>
       <Input id= "search-product" icon='search' placeholder='Buscar Producto' />
      
  </Button.Group>

 )
   }

 }  


 
 
 
  

