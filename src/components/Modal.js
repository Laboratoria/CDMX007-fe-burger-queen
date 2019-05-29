import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class ModalReceipt extends React.Component {
  constructor(props) {
    super(props)
    this.props.desayuno(this, {});
    this.state = {
      modalOpen: false
    }
  }

ModalModalExample = () => {
  return <Modal id= "modal-food" header={this.props.desayuno.name} 
  content={this.contetModalBuilder(this.props.desayuno)} 
  open={this.props.desayuno}
  onClose={this.handleToggle}
  trigger={<Button className = "divClick">Open me</Button>} image="true"/>
}

handleToggle = ()=>{
  this.setState = {
    modalOpen: !this.state.modalOpen
  }
}

contetModalBuilder = (breakfast)=>{
  return(
    <div> <img  src={breakfast.img_src}  alt= "desayuno" width="307vh"/>
    <hr></hr>
      <button className="btn brn-success">AL COMEDOR</button>
      <button className="btn brn-success">PARA LLEVAR</button>
      <button className="btn brn-success">A DOMICILIO</button>
      <hr></hr>
     <div className="ui input"> <input type="number" min="0"></input></div>
    </div>
  )
}

render() {
  return (
    <div>      
      {this.ModalModalExample()}      
    </div>
  
  );
}
}

export default ModalReceipt;