import { Component, OnInit } from '@angular/core';
import { GuarnicionesServicio } from '../../servicios/guarniciones.service';
import { TicketService } from '../../servicios/ticket.service';

@Component({
  selector: 'app-guarnicion',
  templateUrl: './guarnicion.component.html',
  styleUrls: ['./guarnicion.component.css']
})
export class GuarnicionComponent implements OnInit {
guarnicion:any[] = [];
product:object;

  constructor( private _guarnicionService:GuarnicionesServicio, 
    private _ticketService:TicketService) { }

  ngOnInit() {
    this.guarnicion = this._guarnicionService.getGuarnicion();
    console.log(this.guarnicion);
  }
  public searchProduct(index){
    this.guarnicion.forEach( element=>{
      if(this.guarnicion.indexOf(element) == index){
        this.product=element;
        this._ticketService.saveTicket(this.product);
        //return this.product;
      }
    })
  };

}
