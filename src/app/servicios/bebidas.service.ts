import { Injectable } from '@angular/core';

@Injectable()
export class BebidasService{
    private bebidasMenu:any[] = [
        {
            nombre:'Agua 500ml',
            precio: 10,
            imagen: '../assets/images/lote/agua.png',
            valor: 0,
            cantidad: 0,
            eliminar:'../assets/images/lote/quitar-1.png'
        },
        {
             nombre:'Refresco 500ml',
             precio: 15,
             imagen: '../assets/images/lote/beverage.png',
             valor: 0,
             cantidad: 0,
             eliminar:'../assets/images/lote/quitar-1.png'
        },
        {
            nombre: 'Agua 750ml',
            precio: 15,
            imagen:'../assets/images/lote/agua.png',
            valor: 0,
            cantidad: 0,
            eliminar:'../assets/images/lote/quitar-1.png'
        },
        {
             nombre: 'Refresco 750ml',
             precio: 20,
             imagen: '../assets/images/lote/beverage.png',
             valor: 0,
             cantidad: 0,
             eliminar:'../assets/images/lote/quitar-1.png'
        }
    ];
    constructor(){
        
    }

    getBebidas(){
        return this.bebidasMenu;
    }
}