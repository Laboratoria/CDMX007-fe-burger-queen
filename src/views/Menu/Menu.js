import React from 'react';
import Content from '../../components/Content/Content';

import FetchData from '../../components/Fetch-data/Fetch-data'
// //Data
import items from '../../components/Menu-Data/menu-data';



class Menu extends React.Component{


    render(){
        return (  
         
 <div>
            <FetchData/>

         



           
            <Content title="Menú" items ={items}/>

            {/* <h1>Hola</h1> */}
            </div>
           
        )
    }
}

export default Menu;