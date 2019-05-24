import React from 'react'
import { BreakfastItems} from '../data/Breakfast'


class FoodButton extends React.Component {
  constructor (props){
    super(props)
    this.state = {
     food: []
    };
  }
  
  changeColor() {
    console.log(BreakfastItems)
    this.setState({
      color: 'red'
    })
  }
  render(){
    return (

      <div>
        <button onClick = {this.changeColor.bind(this)} style = {{background: this.state.color}}>change color</button>  
         </div> 
    )
  }
}

export default FoodButton; 