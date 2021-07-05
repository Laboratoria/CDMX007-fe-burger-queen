import {Injectable} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore' ;
import {InputService } from './input.service';

@Injectable({
  providedIn: 'root'
})

export class TicketService {

constructor(private firestore:AngularFirestore , private input:InputService){}

  productTicket: any[] = [];
  productArray:any[]=[];
  productMenos:any[];
  
  

  public saveTicket(product) {
      this.productTicket.push(product);
      if(this.productTicket.includes(product)){
          product.cantidad = product.cantidad +1;
          product.valor = product.valor + product.precio;
          
      }
        this.productArray=[];
        this.productArray =  this.productTicket.filter((valor, indiceActual,productTicket) => productTicket.indexOf(valor) === indiceActual);
        return this.productArray;
  }

  confirmacion(){
    this.productArray.forEach(element =>{
      element.cantidad = 0;
      element.valor = 0;
    })
    this.productTicket.forEach(element =>{
      element.cantidad = 0;
      element.valor = 0;
    })
    let longitud= this.productArray.length;
    let longitud2 = this.productTicket.length;
    this.productArray.splice(0,longitud);
    this.productTicket.splice(0,longitud2);
  }

  public createOrder(){
    this.firestore.collection("ordenes").add({
      nombre: this.input.inputValue,
      pedido:this.productArray
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  }); 
  }

  
  quitarProducto(product){
    if(product.cantidad > 0 ){
    product.cantidad = product.cantidad -1;
    product.valor = product.valor - product.precio;
    }
  }
  

}
