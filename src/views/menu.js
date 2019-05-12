import React from 'react';
import Content from '../components/Content';

//Data
import items from '../components/menu';


class Menu extends React.Component{
    render(){
        return (
            <Content title="Menú" items ={items}/>
        )
    }
}

export default Menu;