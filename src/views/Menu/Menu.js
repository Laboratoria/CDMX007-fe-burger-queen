import React from 'react';
// import Content from '../../components/Content/Content';

import FetchData from '../../components/Fetch-data/Fetch-data'
// //Data
// import items from '../../components/Menu-Data/menu-data';
import Clock from '../../components/Clock/Clock'


class Menu extends React.Component{


    render(){
        return (        
            <div> 
               <Clock/>
                 <FetchData/>
            {/* <Content title="Menú" items ={items}/> */}
       </div>
       )
              
    }
}

export default Menu;