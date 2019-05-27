import React from 'react';
import Options from "./Options";

class FoodGrid extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      breakfastToggle: false,
    
    }
  }
    
    toggleDivs = (event)=>{
      console.log("hola mundo me falta logica");
      this.setState({
        breakfastToggle: !this.state.breakfastToggle
      });
    }
  
    render() {
      return (
        <div className="App">
             <button className = "breakfast" onClick={this.toggleDivs.bind(this)}>Desayuno</button> 
             {this.state.breakfastToggle ?
            <Options/> :
           null
        }
             
        </div>
      );
    }
  }
 
  

export default FoodGrid; 
