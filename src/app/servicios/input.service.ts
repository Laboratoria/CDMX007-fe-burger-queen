import { Injectable } from '@angular/core';
Injectable()

export class InputService{
    inputValue:string;
    constructor(){}

    public onKey(event) {
        this.inputValue = event.target.value;
        console.log(this.inputValue);
        return this.inputValue;
      }
      
}