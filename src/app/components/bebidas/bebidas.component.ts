import { Component, OnInit } from '@angular/core';
import { BebidasService } from '../../servicios/bebidas.service';
import { TicketService } from '../../servicios/ticket.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {
bebidas:any[] = [];
product:object;

  constructor( private _bebidasmenu:BebidasService,
    private _ticketService:TicketService ) { }

  ngOnInit() {
    this.bebidas= this._bebidasmenu.getBebidas();
  }
  public searchProduct(index){
    this.bebidas.forEach( element=>{
      if(this.bebidas.indexOf(element) == index){
        this.product=element;
        this._ticketService.saveTicket(this.product);
      }
    })
  };


}
