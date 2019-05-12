import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// class Content extends Component {
//     static propTypes={
//         product: PropTypes.string.isRequired,
//         items:PropTypes.array.isRequired
//     }
//     render(){
//         const {product, items}=this.props;
//         return (
//         <div>
//         <p>{product}</p>
//         <ul className="Menu">
//         {items && items.map((item, key)=>
//         <li key ={key}>{item.product}</li>)}
//         </ul>
//         </div>
//    ) }
// }

class Content extends Component{
    constructor(){
        super();
        this.state={
         count:0
        }

        this.handleCountClick= this.handleCountClick.bind(this)
        this.handleResultClick=this.handleResultClick.bind(this)
        this.handleInputChanged= this.handleInputChanged.bind(this)
    }
componentDidMount(){
    this.setState({
        count:1, 
        number1:0,
        number2:0,
        result:0
    })
} 

handleCountClick(e){
        if(e.target.id==='add'){
            this.setState({
                count:this.state.count +1
            })
        } else if(e.target.id==='substract' && this.state.count >0){
            this.setState({
                count:this.state.count -1
            })
        } else {
            this.setState({
                count:0
            })
        }
    }

    handleResultClick(e){
this.setState({
        result:this.state.number1+this.state.number2


})
    }

    handleInputChanged(e){
if(e.target.id==='number1'){
    this.setState({
    number1:Number(e.target.value)
    })
}else{
    this.setState({
        number2:Number(e.target.value)
    })
}
    }

    render(){
        return(
            <div>
            <p>Counter :{this.state.count}</p>
            <p><button id="add" onClick={this.handleCountClick}>+</button>
            <button id="substract" onClick={this.handleCountClick}>-</button>
            <button id="reset" onClick={this.handleCountClick}>Cancelar</button></p>
            
            
            <h3>Cuenta</h3>

            <p className="row">
                <input id ="number1" type="number" className="col l3" value={this.state.number1} onChange={this.handleInputChanged}></input>
               +
                <input id ="number2" type="number" className="col l3" value={this.state.number2} onChange={this.handleInputChanged}/>
                <button id="result" onClick={this.handleResultClick}>=</button>


                {this.state.result}
            </p>

            </div>

        )
    }
}









export default Content;