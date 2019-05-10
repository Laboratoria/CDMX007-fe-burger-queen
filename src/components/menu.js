import React from 'react';



const Menu = () => {
    return (
        <div id = "menu-page">

        <div>
           <h4>BURGER <br></br> QUEEN</h4>
        </div>


       <div id = "buttons-nav">
          
           <div id = "search">
           <button class = "button">DESAYUNO</button> <button class = "button">COMIDA/CENA</button>
           <input type="searchField" id = "search-input" className="input"  placeholder="Buscar producto"/><i id= "search-icon" class="fas fa-search"></i>
       </div>
       <div id = "title-plates">
       <p>Platillos</p>
       <p2>Bebidas</p2>
       <p3>Complementos</p3>
       </div>
     



       </div>

       </div>
    );
};

export default Menu; 
