import { Component } from '@angular/core';
import { MenuService} from '../../servicios/menu.service';
import { HamburguesasService } from '../../servicios/hamburguesas.service'

@Component({
  selector: 'menu-root',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent  {
  desayuno:any[] = [];
  hamburguesa:any[] = [];
  
  constructor( private _menuService:MenuService,
    private _hamburguesaService:HamburguesasService ){
  }

  mostrar= true;
  mostrarHamburguesas= true;
  inputValue:string;

  onKey(event) {
    this.inputValue = event.target.value;
    //console.log(this.inputValue);
    return this.inputValue;
  }
    title = 'BurguerQueen';

    client={
      name: '',
    }

    ngOnInit(){
      this.desayuno = this._menuService.getMenu();
      this.hamburguesa= this._hamburguesaService.getHamburguesas();
      console.log(this.hamburguesa);
    }   

}

