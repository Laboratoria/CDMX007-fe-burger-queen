import React from 'react';
import Content from '../../components/Content/Content';
import fireBase from '../../config-firebase/FireBase';

//Data
import items from '../../components/Menu-Data/menu-data';



class Menu extends React.Component{

constructor(props){
    super(props);
    this.logOut=this.logOut.bind(this);
}
logOut(){
    fireBase.auth().signOut();
}


    render(){
        return (  
         
            <div>
            <Content title="Menú" items ={items}/>
            <button onClick={this.logOut}>Cerrar sesión</button>
            </div>
           
        )
    }
}

export default Menu;