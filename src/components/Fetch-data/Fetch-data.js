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
                           <h4>1. Realiza tu pedido</h4>
                    <div className="row ">
                         <div className="col l12  m12   s10 offset-s1">
                         <div className="card-panel ">
                         <span className="card-style white-text">

                         <div className="row">
                     
                       
                        
  <ul>
                             <li className= "col l6 m6 text-menu"> <h4 className="  title-submenu">Desayunos</h4>{items.filter(item=>item.type ==='Desayuno').map(item=><p className="center">{item.product}</p>)}</li></ul>
                         <ul>
                    
                             <li className ="col l6 m6 text-menu"><h4 className="center title-submenu" >Bebidas</h4>{items.filter(item=>item.type ==='Bebida-Desayuno').map(item=><p className="center ">{item.product}</p>)}</li></ul>
                      </div>   
                     </span>  </div> </div>  </div>
                     
                 <div className="row ">
                  <div className="col l12  m12   s10 offset-s1">
                   <div className="card-panel ">
                    <span className="card-style white-text">
                      <div className="row"> <ul>
                          <li className= "col l6 m6 text-menu"> <h4 className="  title-submenu">Hamburguesas</h4> {items.filter(item=>item.type ==='Comida').map(item=><p>{item.product}</p>)}</li></ul>
                             <ul> <li className ="col l6 m6 text-menu veggie-menu">{items.filter(item=>item.type ==='Comida-Vegetariana').map(item=><p className="">{item.product}</p>)}</li></ul>
                      </div>   
                     </span> 
                   </div>
                </div> 
             </div>
             <div className="row ">
                  <div className="col l12  m12   s10 offset-s1">
                   <div className="card-panel ">
                    <span className="card-style white-text">
                      <div className="row"> <ul>
                          <li className= "col l6 m6 text-menu"> <h4 className="  title-submenu">Bebidas</h4> {items.filter(item=>item.type ==='Bebida-Comida').map(item=><p>{item.product}</p>)}</li></ul>
                             <ul> <li className ="col l6 m6 text-menu"><h4 className="center title-submenu" >Adicionales</h4>{items.filter(item=>item.type ==='Extras-Comida').map(item=><p className="">{item.product}</p>)}</li></ul>
                      </div>   
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