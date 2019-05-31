import React, { Component, Fragment} from 'react';
import Checkbox from '../Checkboxes/Checkboxes';
import './fetch-data.css';
import FooterMenu from '../Footer-login/Footer-menu/Footer-menu';
import MenuBreakfast from '../MenuBreakfast/MenuBreakfast';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import OthersMenu from '../OthersMenu/OthersMenu';
import InputNameOfClient from '../InputNameOfClient/InputNameOfClient';

export const myFirstContext = React.createContext()

 
class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      totalPrice: [],
      printTime: null,
      handleSendOrder: this.handleSendOrder,
      sign: "$",
      showElements: true,
      hideElements: false,
      activateCheckbox: this.activateCheckbox,
      value: '',
      handleChange:this.handleChange.bind(this)
    }
  }
  
  //Se realiza el fetch justo después de que el componente haya sido montado en el DOM
componentDidMount() {
  fetch('https://burguer-queen-2efea.firebaseio.com/products.json')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    })
  setInterval(() => {
    this.setState({
      printTime: new Date().toLocaleString()
    })
  }, 1000)

}
//Se crea un objeto Set antes de que el componente sea montado en el DOM donde se almacenarán los
//Elementos seleccionados. 
componentWillMount = () => {
  this.selectedProducts = new Set();
  this.sumPrice = new Set()
}
//
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
 this.selectedProducts =Array.from(this.selectedProducts);
  this.sumPrice = Array.from(this.sumPrice);
   const total = this.sumPrice.reduce((a,b)=>{
   return a += parseFloat(b)
   },0)
     this.refs.printOrder.innerHTML =` <div class"container"><h4 class="center">Revisa tu pedido</h4><div class="row confirm-information"> <div class="col s12 m10 offset-m1 card-confirm-order"> <div class="card-color"><span class="white-text text-on-ticket">
     <div class="col m4 offset-m8  col s6 offset-s6 printTime">${this.state.printTime}</div>
     <div class="col m12 col s12"><p class="offset-s6">Cliente: ${this.state.value}</p></div>
    <ul> <li>${this.selectedProducts}</li><li class="col m4 offset-m8  s6 offset-s6 ">Total: $ ${total}</li></ul>
    </span>
   </div></div></div> `
      
      this.hideElements()
      this.showElement()
     
 }
   
//    Función para crear dinámicamente las checkboxes. El label tomará el value de cada item del array.
// Cada vez que el usuario selecciona o deselecciona la checkbox, llama a la función activateCheckbox.
    
    createCheckbox = (label, label2) => (
    < Checkbox label = {
        label
      }
      label2 = {
        label2
      }
      handleCheckboxChange = {
        this.activateCheckbox
      }
      key = {
        label
      }/>
      
    )

  
    
    handleChange=(event)=>(
    this.setState({
     value:event.target.value
    })
    )


    createCheckboxes = () => (
      this.createCheckbox()

    )
    hideElements = () => (
      this.setState({
        showElements: false,
      })
    )

    showElement = () => (
      this.setState({
        hideElements: true,
      })
    )

    handleCancelOrder = () => (
      window.location.reload()
    )

    handleSendKitchen=()=>(
      alert('¡Listo!, el pedido de ' + this.state.value + ' se ha enviado a cocina')
    )
    
    render(){
  
      let { isLoaded} = this.state;
        if(!isLoaded){
            return <div>Cargando...</div>
        }else{
            return(
           <Fragment> 
           {
             this.state.showElements?
             <div>  
                  <h4> Realiza tu pedido</h4>     
                  {/* <form onSubmit={this.handleSendOrder}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form> */}
          {/*CONTEXT */}
                         <myFirstContext.Provider value={this.state}>
                           <InputNameOfClient/>
                            <MenuBreakfast/>
                               <BurgerMenu/>
                             <OthersMenu/>
                        </myFirstContext.Provider>
                        
             <button className="btn btn-large btn-send"  onClick={this.handleSendOrder}>Confirmar orden</button>
            </div>
               :null
               }      
               <div>
             <div contentEditable={true} ref='printOrder' className="confirm-order-card"> </div>
             
              {/*CARD TO CANCEL OR CONFIRM MENU*/}
             {this.state.hideElements?
              <div className="order-menu row">
             <div className="col m10 offset-m1 buttons-cancel-confirm">
            <button className="btn-large col m3 offset-m2 col s8 offset-s2 btn-cancel" onClick={this.handleCancelOrder}><i className="fas fa-times"></i> Cancelar pedido</button>
            <button className="btn-large col m3 offset-m2 col s8 offset-s2 btn-kitchen" onClick={this.handleSendKitchen}><i className="fas fa-check"></i> Enviar a cocina</button>
           </div>
           </div>
             :null
             }
         </div>  
                   <FooterMenu/>
                   </Fragment>        
            )
        }
   
    }
}

export default FetchData;