import React, { Component } from 'react';
import Checkbox from '../Checkboxes/Checkboxes';
import './fetch-data.css';

const allItems=[]; 
class FetchData extends Component{
    constructor (props){
        super(props);
        this.state={
            items:[],
            isLoaded:false,
            value: allItems
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


    componentWillMount = () => {
      this.selectedProducts = new Set()
    
    }
  
    activateCheckbox = (label, label2)=> {
      if (this.selectedProducts.has([label] +""+ [label2])) {
        this.selectedProducts.delete([label] +" "+ [label2]);
      } else {
        this.selectedProducts.add([label] +" "+ [label2]);
       
    }
    }
  handleSendOrder = formSubmitEvent => {
      formSubmitEvent.preventDefault()
     
      for ( let value of this.selectedProducts) {
      
       allItems.push(value)
       console.log([allItems])

      //  document.getElementById("root").innerHTML = ` <li>${allItems} </li>  `
      
       
  };
}

// const checkedvalue1=[]; 
// for (const checkbox of this.selectedCheckboxes) {
// console.log(checkbox, 'is selected.');
// checkedvalue1.push(checkbox);
// }


    createCheckbox = (label, label2) => (
      <Checkbox
              label={label}
              label2={label2}
              handleCheckboxChange={this.activateCheckbox}
              key={label}
          />
    )
  
    createCheckboxes = () => (
      this.createCheckbox()
     
    )

    render(){
      // console.log(this.createHola())
     
        let { isLoaded, items} = this.state;

        if(!isLoaded){
            return <div>Cargando...</div>
        } else{
            return(
                  <>
           <h4>1. Realiza tu pedido</h4>
           
               <div className="row ">
                 <div className="col l12  m12   s10 offset-s1">
                   <div className="card-panel ">
                     <span className="card-style white-text">
                        <div className="row">
                         <ul>  
                           <li className= "col l6 m6 text-menu"> 
                         <h4 className="  title-submenu">Desayunos</h4>
                       {items.filter(item=>item.type ==='Desayuno').map(item=><p className="center">
                      <form onSubmit={this.handleSendOrder}> <p> 
                      <div><Checkbox 
                      label={item.product}
                       label2={item.price}
                      handleCheckboxChange={this.activateCheckbox}
                      key={item.product}
                      type="submit"/> 
                   </div></p> 
                 </form></p>)}
                 </li>
                 </ul>
                     <ul>
                      <li className ="col l6 m6 text-menu">
                      <h4 className="center title-submenu" >Bebidas</h4>
                      {items.filter(item=>item.type ==='Bebida-Desayuno').map(item=><p className="center ">
                      <form onSubmit={this.handleSendOrder}> <p>
                  <div><Checkbox 
                      label={item.product}
                     label2={item.price}
                      handleCheckboxChange={this.activateCheckbox}
                      key={item.product}
                      type="submit"/> 
                 </div></p>
              </form></p>)}
            </li>
           </ul>
         </div>  
            </span>     
                 </div> 
                     </div>  
                      </div>    
                 <div className="row ">
                  <div className="col l12  m12   s10 offset-s1">
                   <div className="card-panel ">
                    <span className="card-style white-text">
                      <div className="row"> 
                      <ul>
                          <li className= "col l6 m6 text-menu"> 
                          <h4 className="  title-submenu">Hamburguesas</h4> 
                          {items.filter(item=>item.type ==='Comida').map(item=><p>    
                         <form onSubmit={this.handleSendOrder}> <p>
                         <div><Checkbox 
                      label={item.product}
                     label2={item.price}
                      handleCheckboxChange={this.activateCheckbox}
                      key={item.product}
                      type="submit"/> 
                     </div> 
                     </p>
             </form></p>)}
                          </li>
                          </ul>
                             <ul> 
                               <li className ="col l6 m6 text-menu veggie-menu">
                               {items.filter(item=>item.type ==='Comida-Vegetariana').map(item=><p className="">
                               <form onSubmit={this.handleSendOrder}> <p>
                               <div><Checkbox 
                      label={item.product}
                     label2={item.price}
                      handleCheckboxChange={this.activateCheckbox}
                      key={item.product}
                      type="submit"/> 
                       
                        </div>  
                  </p>
    </form></p>)}
              </li>
                  </ul>
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
                          <li className= "col l6 m6 text-menu"> <h4 className="  title-submenu">Bebidas</h4> {items.filter(item=>item.type ==='Bebida-Comida').map(item=><p><form onSubmit={this.handleSendOrder}> <p>
                            <div>   <Checkbox
                      label={item.product}
                      handleCheckboxChange={this.activateCheckbox}
                    key={item.product}
                  type="submit"/>  </div>  
                         </p>
                  </form></p>)}</li>
                  </ul>
                             <ul> <li className ="col l6 m6 text-menu"><h4 className="center title-submenu" >Adicionales</h4>{items.filter(item=>item.type ==='Extras-Comida').map(item=><p className=""><form onSubmit={this.handleSendOrder}> <p>
                          <div> 
                          <div><Checkbox 
                      label={item.product}
                     label2={item.price}
                      handleCheckboxChange={this.activateCheckbox}
                      key={item.product}
                      type="submit"/> 
                              </div>  </div>
                          </p>   
                    </form></p>)}
                    </li>
                    </ul>
                      </div>   
                     </span> 
                   </div>
                </div> 
             </div>         
                             
             <form onSubmit={this.handleSendOrder}>  <button className="btn btn-small" type="submit">Enviar a cocina</button></form>        
                   </>

            )
        }
   
    }
}

export default FetchData;






