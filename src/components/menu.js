import React from 'react';
import mainLogoMenu from'./logo2.png';



const Menu = () => {
    return (
<div className = "wrapper-menu">

<div className = "header-inside">
   <img  src={mainLogoMenu } id= "img2" alt="WhiteBurger"/>
</div>



<div className = "menu-inside">botones interactivos</div>



<div className = "item-one">img 1</div>
<div className = "item-two">img 2</div>
<div className = "item-three">img 3</div>

<div className = "takeout-options">opciones de pago</div>
<div className = "order">creación de comanda</div>
<div className = "payment-methods">metodos de pago</div>
</div>

);
};




export default Menu; 
