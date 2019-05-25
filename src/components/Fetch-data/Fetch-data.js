import React, { Component} from 'react';
import Checkbox from '../Checkboxes/Checkboxes';
import './fetch-data.css';
import FooterMenu from '../Footer-login/Footer-menu/Footer-menu'
import Showdata from './Showdata.js/Showdata';
 
 



// const allItems = [];
// const totalPrice = [];


class FetchData extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      items: [],
      isLoaded: false,
      allItems:[],
      totalPrice:[],
      handleSendOrder:this.handleSendOrder,
      sign: "$"
    
    }
  }
  
  
componentDidMount() {
  fetch('https://burguer-queen-2efea.firebaseio.com/products.json')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    })

}


componentWillMount = () => {
  this.selectedProducts = new Set();
  this.sumPrice = new Set()

  }
  
activateCheckbox = (label, label2) => {
      if (this.selectedProducts.has([label]) &&(this.selectedProduct.has([label2])) && (this.sumPrice.has([label2]))) {
        this.selectedProducts.delete([label]) 
        this.sumPrice.delete([label2]);
      } else {
       
        this.selectedProducts.add([label]) &&this.selectedProducts.add(this.state.sign +[label2])
      
        this.sumPrice.add([label2])
      }
    }
    
    
 handleSendOrder = () => {
     for (let value of this.selectedProducts) {
       this.state.allItems.push(value) 
     };
     
    
     for (let value of this.sumPrice) {
       this.state.totalPrice.push(value)
        const total = this.state.totalPrice.reduce((a, b) => {
         return a += parseFloat(b)
       }, 0)  
       
     this.refs.printOrder.innerHTML =` <div class"container"><div class="row "> <div class="col s12 m8 offset-m2 card-confirm-order"> <div class="card-panel teal"><span class="white-text">
    <ul> <li> ${this.state.allItems} </li><li>Total: $ ${total}</li></ul></span></div></div></div>`
      }
    }
 
    createCheckbox = (label, label2) => ( 
    <Checkbox label = { label }
      label2 = { label2 }
      handleCheckboxChange = {
        this.activateCheckbox
      }
      key = {label } />
    )
    
    createCheckboxes = () => (
      this.createCheckbox()

    )

    render(){
  
        let { isLoaded, items} = this.state;

        if(!isLoaded){
            return <div>Cargando...</div>
        } else{
            return(
    
           <>    
           <h4>1. Realiza tu pedido</h4>         
           {/* Componente 1 */}
               <div className="row ">
                 <div className="col l12  m12   s10 offset-s1">
                   <div className="card-panel ">
                     <span className="card-style white-text">
                        <div className="row card-section">
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
                      
                      {/* Componente 2 */}
                 <div className="row ">
                 {/* Componente 3 */}
                  <div className="col l12  m12   s10 offset-s1">
                   <div className="card-panel ">
                    <span className="card-style white-text">
                      <div className="row card-section"> 
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
                      <div className="row card-section"> <ul>
                          <li className= "col l6 m6 text-menu"> <h4 className="  title-submenu">Bebidas</h4> {items.filter(item=>item.type ==='Bebida-Comida').map(item=><p><form onSubmit={this.handleSendOrder}> <p>
                            <div>   <Checkbox
                      label={item.product}
                      label2={item.price}
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
             <button className="btn btn-large btn-send"  onClick={this.handleSendOrder.bind(this)}>Confirmar orden</button>
             <div contentEditable='true' ref='printOrder' className="confirm-order-card"></div>
             <Showdata title={this.handleSendOrder}/>
         
            
             
             
             
                   <FooterMenu/>
                   
                   </>
                  
            )
        }
   
    }
}

export default FetchData;
