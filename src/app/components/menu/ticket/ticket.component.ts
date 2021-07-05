import { Component } from '@angular/core';
import { InputService } from '../../../servicios/input.service';
import { TicketService } from '../../../servicios/ticket.service';
import { EspecificacionesService } from '../../../servicios/especificaciones.service';
import { ProductosComponent } from '../../productos/productos.component';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  
   nameValue:string;
  constructor(private _inputService:InputService, private _ticketService:TicketService,
              private _especificacionesService:EspecificacionesService) { 
   }

  
  arrayCero:number=0;
   sum:number;
   
   

  totalCount(arr:any[]){
    if(arr.length != this.arrayCero){
     this.sum=0;
      for(let Total of arr)
       this.sum += Total.valor;
        return this.sum;
    }
  };
  
  public cancelar(){
    this._ticketService.confirmacion();
  }
  
  firebaseConfirmate(){
    this._ticketService.createOrder();
  }
  objeto(index){
      this._ticketService.productArray.forEach(element=>{
       if( this._ticketService.productArray.indexOf(element)== index){
         this._ticketService.quitarProducto(element);
         if(element.cantidad == 0 ){
          this._ticketService.productArray.splice(index,1);
        }   
       }
      })

  }

  
  
   
  }
   
  
  
  



