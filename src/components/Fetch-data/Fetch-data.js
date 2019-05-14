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
        if(!isLoaded){
            return <div>Cargando...</div>
        } else{
            return(
                  <div>
                             <h3>Realizar pedido</h3>
                    <div className="row ">
                         <div className="col l10 offset-l1 m10  offset-m1">
                         <div className="card-panel grey lighten-5">
                         <span className="card-style">
                         {items.map(item=>(
                              <p className="black-text "key={item.ID}> 
                              {item.product} , { item.price}, {item.type}
                              <form action="#" className="">
    <p>
      <label>
        <input type="checkbox" />
        <span></span>
      </label>
    </p>
  
</form>
                              </p>
                             
                          ))};
                    
                         </span>
                         </div>
                     </div>
                     </div>
                      
               
 
                  </div>
            )
        }

       
    }
}

export default FetchData;