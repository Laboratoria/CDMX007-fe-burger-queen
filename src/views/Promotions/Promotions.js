import React from 'react';
import FooterPromos from "../../components/Footer-login/Footer-promos/Footer-promos"
import './Promitions.css'
import Clock from "../../components/Clock/Clock"


const Promotions = (props)=>(
    
        <div className="promos">
        <Clock/>
        <h4>Promociones</h4>
         <div className="row promotions-section">
    <div className="col s12 m4">
      <div className="card-panel card-promotions">
         <h5>Promo Burger Queen<button className="btn-floating btn-small waves-effect waves-light white black-text"><i class="material-icons">add</i></button></h5>
        <span className="white-text card-text-promotions">
        <ul>
        <li>Hamburguesa sencilla de pollo</li>
        <li>Papas a la francesa</li>
        <li>Refresco o agua</li>
        </ul>
        <p>$110</p>
        </span>
      </div>
    </div>
    <div className="col s12 m4">
      <div className="card-panel card-promotions">
         <h5>Promo Extra-Veggie Queen<button className="btn-floating btn-small waves-effect waves-light white black-text"><i class="material-icons">add</i></button></h5>
        <span className="white-text card-text-promotions">
        <ul>
        <li>Hamburguesa doble vegetariana</li>
        <li>Aros de cebolla</li>
        <li>Refresco o agua</li>
        </ul>
        <p>$120</p>
        </span>
      </div>
    </div>
    <div className="col s12 m4">
      <div className="card-panel card-promotions">
         <h5>Promo Veggie Queen <button className="btn-floating btn-small waves-effect waves-light white black-text"><i class="material-icons">add</i></button></h5>
        <span className="white-text card-text-promotions">
        <ul>
        <li>Hamburguesa sencilla de vegetariana</li>
        <li>Papas a la francesa</li>
        <li>Refresco o agua</li>
        </ul>
        <p>$115</p>
        </span>
      </div>
    </div>
    <div className="col s12 m4">
      <div className="card-panel card-promotions">
         <h5>Promo Extra-Burger Queen<button className="btn-floating btn-small waves-effect waves-light white black-text"><i class="material-icons">add</i></button></h5>
        <span className="white-text card-text-promotions">
        <ul>
        <li>Hamburguesa doble de Pollo</li>
        <li>Papas a la francesa</li>
        <li>Refresco o agua</li>
        </ul>
        <p>$120</p>
        </span>
      </div>
    </div>
    <div className="col s12 m4">
      <div className="card-panel card-promotions">
         <h5>Promo Desayuno Queen<button className="btn-floating btn-small waves-effect waves-light white black-text"><i class="material-icons">add</i></button></h5>
        <span className="white-text card-text-promotions">
        <ul>
        <li>Sandwich de jamón con queso</li>
        <li>Café americano o con leche</li>
        <li>Jugo natural</li>
        </ul>
        <p>$110</p>
        </span>
      </div>
    </div>
    <div className="col s12 m4">
      <div className="card-panel card-promotions">
         <h5>Promo Comparte<button className="btn-floating btn-small waves-effect waves-light white black-text"><i class="material-icons">add</i></button></h5>
        <span className="white-text card-text-promotions">
        <ul>
        <li> 2 Hamburguesas sencilla de Pollo</li>
        <li> 2 Papas a la francesa</li>
        <li> 2 Refresco o agua</li>
        </ul>
        <p>$200</p>
        </span>
      </div>
    </div>
  </div>
        <FooterPromos/>
    
    </div>
);


export default Promotions;