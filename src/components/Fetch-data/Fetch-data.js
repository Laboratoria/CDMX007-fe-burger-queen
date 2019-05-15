import React, {Component} from 'react';
import './fetch-data.css';



class FetchData extends Component{
    constructor (props){
        super(props);
        this.state={
            items:[],
            isLoaded:false,
        }
    }



    componentDidMount(){
        fetch('https://burguer-queen-2efea.firebaseio.com/products.json')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                isLoaded:true,
                items:json,
               
            })
        })
    }

    render(){


        var { isLoaded, items} = this.state;
        console.log(items)
        if(!isLoaded){
            return <div>Cargando...</div>
        } else{
            return(
                  <div>
                             <h3>Realizar pedido</h3>
                    <div className="row ">
                         <div className="col l10 offset-l1 m10  offset-m1">
                         <div className="card-panel grey lighten-5">
                         <span className="card-style black-text">

                         <div className="row">
                     
                         <ul>
                         <h4 className=" center">Desayunos</h4>

                             <li className= "col l6">{items.filter(item=>item.type ==='Desayuno').map(item=><p>{item.product}</p>)}</li></ul>
                         <ul>
                            
                             
                             <li className ="col l6"><h5>Bebidas</h5>{items.filter(item=>item.type ==='Bebida-Desayuno').map(item=><p>{item.product}</p>)}</li></ul>
                      </div>   
                     </span>  </div> </div>  </div>
                     
                 
                             
                    <div className="row ">
                         <div className="col l10 offset-l1 m10  offset-m1">
                         <div className="card-panel grey lighten-5">
                         <span className="card-style black-text">

                         

                           {items.filter(item=>item.type ==='Comida').map(item=><p>{item.product}</p>)}
                         
                     </span>  </div> </div>  </div>
                     
                     
                     
                     
                     </div>
                      
               
 
                  
            )
        }

       
    }
}

export default FetchData;