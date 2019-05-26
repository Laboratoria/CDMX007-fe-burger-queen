import React from 'react';
import {BreakfastItems} from '../data/Breakfast';

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
      </div>
    ))
    
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