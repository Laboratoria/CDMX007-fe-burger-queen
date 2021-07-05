import { Component, OnInit} from '@angular/core';
import { InputService } from '../../servicios/input.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  inputValue:string;
  constructor(private _inputService:InputService){}

  public value(){
    this._inputService.onKey(event);
  }
  
 
  ngOnInit() {
    
  }

}
