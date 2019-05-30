import React, { Component, Fragment} from 'react';
import Checkbox from '../Checkboxes/Checkboxes';
import './fetch-data.css';
import FooterMenu from '../Footer-login/Footer-menu/Footer-menu';
import MenuBreakfast from '../MenuBreakfast/MenuBreakfast';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import OthersMenu from '../OthersMenu/OthersMenu';
// import db from '../../config-firebase/FirestoreConfig';



export const myFirstContext = React.createContext()


class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      allItems: [],
      totalPrice: [],
      printTime: null,
      handleSendOrder: this.handleSendOrder,
      sign: "$",
      showElements: true,
      hideElements: false,
      activateCheckbox: this.activateCheckbox,
      Uva: []
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
  setInterval(() => {
    this.setState({
      printTime: new Date().toLocaleString()
    })
  }, 1000)

}

componentWillMount = () => {
  this.selectedProducts = new Set();
  this.sumPrice = new Set()
}

activateCheckbox = (label, label2) => {
  if (this.selectedProducts.has([label]) && (this.selectedProduct.has([label2])) && (this.sumPrice.has([label2]))) {
    this.selectedProducts.delete([label])
    this.sumPrice.delete([label2]);
  } else {
    this.selectedProducts.add([label]) && this.selectedProducts.add(this.state.sign + [label2])
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
       
     this.refs.printOrder.innerHTML =` <div class"container"><h4 class="center">Revisa tu pedido</h4><div class="row confirm-information"> <div class="col s12 m10 offset-m1 card-confirm-order"> <div class="card-color"><span class="white-text text-on-ticket">
     <div class="col m4 offset-m8  col s6 offset-s6 printTime">${this.state.printTime}</div>
    <ul> <li> ${this.state.allItems} </li><li class="col m4 offset-m8   s6 offset-s6 ">Total: $ ${total}</li></ul>
    </span>
   </div></div></div> `
      }
     
      this.hideElements()
      this.showElement()
 }
 
    createCheckbox = (label, label2) => ( <
      Checkbox label = {
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
      }
      />
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
    // db.collection("pedidos").add({
    // Uva:this.state.allItems
    // }).then(()=>{
    // })
    alert('¡Listo!, tu pedido se ha enviado a cocina.')
    )
    
    
    render(){
  
        let { isLoaded, items} = this.state;
        console.log(items)

        if(!isLoaded){
            return <div>Cargando...</div>
        } else{
            return(
           <Fragment> 
           {
             this.state.showElements?
             <div>  
                  <h4> Realiza tu pedido</h4>      
                  
         <myFirstContext.Provider value={this.state}>
             <MenuBreakfast/>
               <BurgerMenu/>
            <OthersMenu/>
        </myFirstContext.Provider>
             <button className="btn btn-large btn-send"  onClick={this.handleSendOrder.bind(this)}>Confirmar orden</button>
            </div>
               :null
               }      
               <div>
             <div contentEditable='true' ref='printOrder' className="confirm-order-card"> </div>
             {this.state.hideElements?
              <div className="order-menu row">
             <div className="col m10 offset-m1 buttons-cancel-confirm">
            <button className="btn-large col m3 offset-m2 col s8 offset-s2 btn-cancel" onClick={this.handleCancelOrder}><i class="fas fa-times"></i> Cancelar pedido</button>
            <button className="btn-large col m3 offset-m2 col s8 offset-s2 btn-kitchen" onClick={this.handleSendKitchen}><i class="fas fa-check"></i> Enviar a cocina</button>
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