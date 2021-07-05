import { Component, OnInit } from '@angular/core';
import { EspecificacionesService } from '../../servicios/especificaciones.service'

@Component({
  selector: 'app-especificaciones',
  templateUrl: './especificaciones.component.html',
  styleUrls: ['./especificaciones.component.css']
})
export class EspecificacionesComponent implements OnInit {
  especificaciones:any[] = [];
  constructor(private _especificacionesService:EspecificacionesService) { }

  ngOnInit() {
    this.especificaciones= this._especificacionesService.getEspecificacion();
    
  }
  public especial(index){
    this._especificacionesService.especificacion(index)
  }

}
