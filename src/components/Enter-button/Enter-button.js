import React from 'react';

import {Link} from 'react-router-dom';
import './enter-button.css';



class EnterButton extends React.Component{
    render(){
        return  <a href=" "className="waves-effect waves-light btn grey darken-4 enter-btn">
          <Link to ="/menu" className="link" >Ingresar</Link></a>
    }
}




export default EnterButton;

