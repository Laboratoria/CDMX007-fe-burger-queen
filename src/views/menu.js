import React from 'react';
import Content from '../components/Content';

import fireBase from '../config-firebase/fireBase'

//Data
import items from '../components/menu';


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
            <button onClick={this.logOut}>LogOut</button>
            </div>
        )
    }
}

export default Menu;