import React from 'react'
import { myFirstContext } from '../Fetch-data/Fetch-data';


const InputNameOfClient = () => (
    <>
        <myFirstContext.Consumer>
        
        {({value, handleChange, handleSendOrder}) => (
             <div className="row ">
                <div className="col l3 offset-l8  m3 offset-m8 s10 offset-s1">
                 <form onSubmit={handleSendOrder}>
                   <label>
            
                       <input type="text" value={value} onChange={handleChange} placeholder="Nombre del cliente" className="nameOfClient center"/>
                 </label>
                    
                 </form>
                    </div>  
            </div>   
                )
            }
        </myFirstContext.Consumer>
    </>
)

export default InputNameOfClient;