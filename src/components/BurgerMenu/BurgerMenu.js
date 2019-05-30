import React from 'react'
import {myFirstContext} from '../Fetch-data/Fetch-data';
import Checkbox from '../Checkboxes/Checkboxes'


const BurgerMenu = props => (
<div>
    <myFirstContext.Consumer>
    {
             ({items, handleSendOrder, activateCheckbox}) => (
                <div className="row ">
                    <div className="col l12  m12  s12">
                      <div className="card-panel ">
                       <span className="card-style white-text">
                         <div className="row card-section"> 
                         <ul><li className= "col l6 m6 s12 text-menu"> 
                              <h4 className="  title-submenu">Hamburguesas</h4> 
                                  {items.filter(item=>item.type ==='Comida').map(item=><p>    
                               <form onSubmit={handleSendOrder}> 
                             <p><div><Checkbox 
                         label={item.product}
                         label2={item.price}
                         handleCheckboxChange={activateCheckbox}
                         key={item.product}
                         type="submit"/> 
                        </div> 
                           </p>
                             </form></p>)}
                        </li></ul>
                        <ul> <li className ="col l6 m6 s12 text-menu veggie-menu">
                               {items.filter(item=>item.type ==='Comida-Vegetariana').map(item=><p className="">
                             <form onSubmit={handleSendOrder}>
                             <p><div><Checkbox 
                         label={item.product}
                         label2={item.price}
                         handleCheckboxChange={activateCheckbox}
                         key={item.product}
                         type="submit"/> 
                        </div>  
                         </p>
                             </form></p>)}
                     </li></ul>
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

export default BurgerMenu;