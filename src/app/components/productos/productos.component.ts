import { Component, OnInit } from '@angular/core';
import { MenuService} from '../../servicios/menu.service';
import { TicketService } from '../../servicios/ticket.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  menu:any[]= [];
  constructor(private _menuService:MenuService, private _ticketService:TicketService) { }

  ngOnInit() {
    this.menu = this._menuService.getMenu();
  }
  product:object;

  public searchProduct(index){
    this.menu.forEach( element=>{
      if(this.menu.indexOf(element) == index){
        this.product=element;
        this._ticketService.saveTicket(this.product);
        //return this.product;
      }
    })
  };


}
