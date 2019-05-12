import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
    static propTypes={
        product: PropTypes.string.isRequired,
        items:PropTypes.array.isRequired
    }
    render(){
        const {product, items}=this.props;

        return (
        <div>
        <p>{product}</p>
        <ul className="Menu">
        {items && items.map((item, key)=>
        <li key ={key}>{item.product}</li>)}
       
        
        </ul>
        </div>
   ) }
}

export default Content;