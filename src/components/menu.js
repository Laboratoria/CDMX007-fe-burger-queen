import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

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
       <Container>
  <Row>
    <Col sm={4}>
      One of three columns
    </Col>
    <Col sm={4}>
      One of three columns
    </Col>
    <Col sm={4}>
      One of three columns
    </Col>
  </Row>
</Container>



       </div>

       </div>
    );
};

export default Menu; 
