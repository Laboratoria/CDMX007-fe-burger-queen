import React from 'react';

import './Manual.css'
const Manual = (props)=>(
    <div className="container">
      <div className="white black-text manual-text">
    <h3>Manual de procedimientos</h3>
    <p className="left-align flow-text">En este manual encontrará información sobre alguna de las funciones que usted como 
    mesero de Burguer Queen debe realizar. Usted tiene un lugar muy significativo para nuestra familia
    y por ello, es importante que usted conozca y tenga información a detalle acerca de algunas
    de sus funciones. Si, una vez leído este manual, aún le quedan dudas, por favor, no dude en preguntar al gerente de 
    la empresa.</p>
      
      <h4 className="left-align">Descripción de su puesto</h4>
      <p className="left-align flow-text">Su tarea principal como empleado de esta empresa es atender al cliente y por ello debe mantener siempre
      buena disposición con el mismo y ofrecerle un trato amable. Sus tareas incluyen:
      <ol className="">
      <li>Atender al comensal</li>
      <li>Tomar la orden</li>
      <li>Estar al 
      pendiente del cliente, en caso de que se le ofrezca algo</li>
      <li>Llevar los platillos a la mesa</li>
      <li>Limpiar la mesa una vez que se desocupe</li>
            <li>Limpiar y alinear las sillas</li>
            <li>Llevar la cuenta a la mesa</li>
            <li>Rellenar saleros</li>
            <li>Verificar disponibilidad de condimentos</li>
            <li>Verificar que haya servilletas en la mesa</li>
            <li>Trapear el piso</li>
            </ol>
      
      </p>
      <h4 className="left-align">Lo que jamás debe hacer</h4>
      
      <p className="left-align flow-text">Tiene prohibido realizar las siguientes cosas. En caso de ser sorprendido, considérese despedido:
      <ol>
      <li>Discutir con el cliente</li>
      <li>Golpear al cliente</li>
      <li>Bostezar al atender</li>
      <li>Atender el celular mientras está tomando la orden</li>
            <li>Correr al cliente sin ninguna razón de peso</li>
            <li>Difundir chismes acerca de la empresa o de sus compañeros</li>
            <li>No realizar las funciones de su puesto</li>
           
            </ol>
      
      </p>
      <h4 className="left-align">Antes del servicio</h4>
      

      
      <p className="left-align flow-text">Estas son algunas de las cosas que debe revisar antes de
      realizar su servicio en Burguer Queen:
      <ol>
      <li >Conocer el menú</li>
      <li>Conocer la disponibilidad de los alimentos del menú</li>
      <li>Revisar las promociones del día</li>
      <li>Informarse sobre la manera en que se prepara cada platillo</li>
            <li>Conocer el tamaño de las porciones</li>
           
            </ol>
      
      </p>
      </div>
    </div>
);


export default Manual;