import React from 'react';
import { BreakfastItems } from '../data/Breakfast';
import { Button, Header, Image, Modal, Icon, Table } from 'semantic-ui-react'


class FoodButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receipt: {
        customer: {
          name: "Javier Brito",
          email: "jbritopc@gmail.com"
        },
        productsOrder: [],
        willPay: 0.0,
        isToGo: "_COMEDOR",
        payment: {
          type: "_DEBIT_CARD",
          number: "4444 8758 9965 2544",
          brand: "DINNERS"
        }
      },
      desayuno: {},
      modalOpen: false,
      divStyle: {
        backgroundColor: 'blue',
        marginLeft: '44vh'
      },
      currentQtty: 0
    }
    // This binding is necessary to make `this` work in the callback
    //this.openModal = this.openModal.bind(this);
  }
  renderDivs = () => {
    return BreakfastItems.map(ds => (
      <div className="divRender"
        key={ds.id}
        data-div_id={ds.id}
        data-div_name={`name ${ds.name}`}
        data-desayuno_precio={ds.name} > {ds.price} {ds.name} {this.state.modalOpen}
        <img src={ds.img_src} alt="desayuno" onClick={this.openModal.bind(this, ds)} />
      </div>
    ))
  }

  renderTable = () =>{
    return (
<Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>FOLIO</Table.HeaderCell>
        <Table.HeaderCell>CANTIDAD</Table.HeaderCell>
        <Table.HeaderCell>PRODUCTO</Table.HeaderCell>
        <Table.HeaderCell>INSTRUCCIONES</Table.HeaderCell>
        <Table.HeaderCell>PRECIO UNITARIO</Table.HeaderCell>
        <Table.HeaderCell>TOTAL</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>    
      {this.tableBodyBuilder()}      
    </Table.Body>    
  </Table>)
  }

  tableBodyBuilder = ()=>{
    return this.state.receipt.productsOrder.map(po => (
      <Table.Row>
        <Table.Cell></Table.Cell>
        <Table.Cell>{po.qtty}</Table.Cell>
        <Table.Cell>{po.product.name}</Table.Cell>
        <Table.Cell>VERDURAS</Table.Cell>
        <Table.Cell>{po.product.price}</Table.Cell>
        <Table.Cell>{po.product.priceN*po.qtty}</Table.Cell>
      </Table.Row>
    ))   
  }

  openModal = (desayunoParam) => {
    console.info("desayuno", desayunoParam);
    this.setState(state => ({
      desayuno: desayunoParam,
      currentQtty: 0
    }));   
    this.handleOpen();

  }

  handleToggle = () => {
    this.setState(state => ({
      desayuno: {}
    }));
  }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false, desayuno: {} })

  addProduct = () => {
    console.info("adding 1", this.state.desayuno);
    let order = this.state.receipt;
    if (order.productsOrder.length) {
      let existe = false;
      order.productsOrder.forEach(element => {
        if (element.product.id === this.state.desayuno.id) {
          console.info("exist true");
          element.qtty = element.qtty+1;
          existe = true;          
        } else {
          console.info("exist false");
        }
      });
      if(!existe){
        let productObj = {
          product: this.state.desayuno,
          qtty: 1
        };
        order.productsOrder.push(productObj);
      }      
    } else {
      let productObj = {
        product: this.state.desayuno,
        qtty: 1
      };
      order.productsOrder.push(productObj);
    }
    console.info("order ", order);

    this.setState(state => ({
      receipt: order,
      currentQtty: this.state.currentQtty + 1
    }));
  }

  onTodoChange(value){
    console.log("change val");
    this.setState({
      currentQtty: this.state.currentQtty + 1
 });
  }

  modalWrapper = () => {
    console.info("desayuno", this.state.desayuno);
    return (<Modal id="modal-food"
      style={this.state.divStyle}
      open={this.state.modalOpen}
      onClose={this.handleClose}
      centered={true}>
      <Header icon='archive' content={this.state.desayuno.name} />
      <Modal.Content image>
        <Image wrapped size='medium' src={this.state.desayuno.img_src} />
        <Modal.Description>
          <Header>Para...</Header>
          <button className="btn brn-success">AL COMEDOR</button>
          <button className="btn brn-success">PARA LLEVAR</button>
          <button className="btn brn-success">A DOMICILIO</button>
          <hr></hr>
          <div className="ui left action input">
            <button className="ui teal labeled icon button" >
              <i className="minus icon"></i>
            </button>
            <input type="number" onChange={e => this.onTodoChange(e.target.value)} value={this.state.currentQtty}></input>
            <button className="ui teal labeled icon button" onClick={this.addProduct}>
              <i className="plus icon"></i>
            </button>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' onClick={this.handleClose} inverted>
          <Icon name='checkmark' /> Got it
          </Button>
      </Modal.Actions></Modal>)
  }

  render() {
    return (
      <div>
        {this.renderDivs()}
        {this.state.modalOpen ? this.modalWrapper() : null}
        {this.renderTable()}
      </div>

    );
  }
}

export default FoodButton; 