
import React, {Component} from 'react';
import './waiter.css'
import WaiterImg from '../assets/waiter.svg';
import Burguer from'../assets/burguer.svg'


class Waiter extends Component{
    render(){
        return <div>
             <img src={WaiterImg} alt="Waiter" className="waiter-img"/>
              <img src={Burguer} alt="Hamburguer" className="hamburguer"/>
        </div>
    }
}

export default Waiter;