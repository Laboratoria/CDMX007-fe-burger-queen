import React from 'react'
import {myFirstContext} from '../Fetch-data/Fetch-data';
import Checkbox from '../Checkboxes/Checkboxes'


const OthersMenu = props => (
<div>
    <myFirstContext.Consumer>
    {
     ({items, handleSendOrder, activateCheckbox}) => (
        <div className="row ">
           <div className="col l12 m12 s12">
               <div className="card-panel ">
                 <span className="card-style white-text">
                    <div className="row card-section"> <ul>
                     <li className= "col l6 m6 s12 text-menu">
                     <h4 className="  title-submenu">Bebidas</h4> 
                     {items.filter(item=>item.type ==='Bebida-Comida').map((item, index)=>
                     <form className="productStyle" key={index} onSubmit={handleSendOrder}> 
                    <Checkbox label={item.product} label2={item.price} handleCheckboxChange={activateCheckbox} key={item.product}type="submit"/>  
             </form>
         
            )}
             </li> 
                </ul>
                  <ul> <li className ="col l6 m6 s12 text-menu">
                    <h4 className="center title-submenu" >Adicionales</h4>
                    {items.filter(item=>item.type ==='Extras-Comida').map((item, index)=>
                    <form className="productStyle"  key={index} onSubmit={handleSendOrder}> 
                          <Checkbox label={item.product} label2={item.price} handleCheckboxChange={activateCheckbox} key={item.product}type="submit"/> 
                 
                    </form>)}
                </li>
             </ul>
         </div>   
            </span> 
                   </div>
                </div> 
             </div>   
                )
      }
    </myFirstContext.Consumer>
</div>
)

export default OthersMenu;