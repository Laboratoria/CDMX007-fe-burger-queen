import React from 'react';
import {BreakfastItems} from '../data/Breakfast';
import ModalModalExample from './Modal'; 
import { Button, Header, Image, Modal } from 'semantic-ui-react'
class FoodButton extends React.Component {
  constructor(props){
    super(props);   
  }
 
  renderDivs = () =>{     
    
   return BreakfastItems.map(desayuno => (
      <div

        key={desayuno.id}
        data-div_id={desayuno.id}
        data-div_name={`name ${desayuno.name}`}
        data-desayuno_precio={desayuno.price} >NOMBRE: {desayuno.name}
        <img src={desayuno.img_src} alt= "desayuno" width="307vh"/>
        <Modal header={desayuno.name} content={this.contetModalBuilder(desayuno)} trigger={<Button>Show</Button>} image="true"/>
      </div>
       
    ))
  }

  contetModalBuilder = (breakfast)=>{
    return(
      <div> <img  src={breakfast.img_src}  alt= "desayuno" width="307vh"/>
      <hr></hr>
        <button className="btn brn-success">AL COMEDOR</button>
        <button className="btn brn-success">PARA LLEVAR</button>
        <button className="btn brn-success">A DOMICILIO</button>
        <hr></hr>
       <div className="ui input"> <input type="number" min="0"></input></div>
      </div>
    )
  }

  render() {
    return (
      <div>
        
        {this.renderDivs()}
         
      </div>
    
    );
  }
}

export default FoodButton; 