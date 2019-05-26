import React from 'react';
import { BreakfastItems} from '../data/Breakfast'

class FoodGrid extends React.Component {
   
    state = { message: null };
  
    renderDivs = () =>
    BreakfastItems.map(desayuno => (
       
        <div
          key={desayuno.id}
          data-div_id={desayuno.id}
          data-div_name={`name ${desayuno.name}`}
          data-desayuno_precio={desayuno.price}
        
        >
          <img src={desayuno.img_src} alt= "desayuno"/>
        </div>
      ));
  

  
    render() {
      return (
        <div className="App">
         
             <button id = "breakfast"  onClick={() => this.renderDivs()} >change color</button>  
          
          {this.state.message && (
            <div className="alert alert-primary">{this.state.message}</div>
          )}
        </div>
      );
    }
  }
  
  

export default FoodGrid; 
