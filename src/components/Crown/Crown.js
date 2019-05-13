import React, {Component} from '../../../node_modules/react';
import Crown from '../../assets/crown.png';
import './crown.css';


class CrownImg extends Component{
    render(){
        return(
            <img src={Crown} alt="Crown" className="crown"/>
        )
    }
}


export default CrownImg;