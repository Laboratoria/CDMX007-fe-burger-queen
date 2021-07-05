import { Component, OnInit, } from '@angular/core';
import { HamburguesasService } from '../../servicios/hamburguesas.service';
import { TicketService } from '../../servicios/ticket.service';

@Component({
  selector: 'app-hamburguesas',
  templateUrl: './hamburguesas.component.html',
  styleUrls: ['./hamburguesas.component.css']
})
export class HamburguesasComponent implements OnInit {

  constructor(private _hamburguesaService:HamburguesasService,
     private _ticketService:TicketService) { }
  hamburguesa:any[] = [];
  inputValue:string;
  mostrar=true;

  onKey(event) {
    this.inputValue = event.target.value;
    //console.log(this.inputValue);
    return this.inputValue;
  }
  product:object;

  ngOnInit() {
    this.hamburguesa= this._hamburguesaService.getHamburguesas();
  }
  public searchProduct(index){
    this.hamburguesa.forEach( element=>{
      if(this.hamburguesa.indexOf(element) == index){
        this.product=element;
        this._ticketService.saveTicket(this.product);
        //return this.product;
      }
    })
  };
  
}
