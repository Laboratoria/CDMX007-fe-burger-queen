import{ Injectable } from '@angular/core';

@Injectable()

export class HamburguesasService{

    private hamburguesaMenu:any []=[
        
        {
            nombre: 'Res ',
            precio: 40,
            imagen: '../assets/images/lote/sencilla.png',
            valor: 0,
            cantidad: 0,
            eliminar:'../assets/images/lote/quitar-1.png'
        },
        {
            nombre:'Pollo ',
            precio: 40,
            imagen:'../assets/images/lote/sencilla.png',
            valor: 0,
            cantidad: 0,
            eliminar:'../assets/images/lote/quitar-1.png'
        },
        {
            nombre: 'Vegetariana ',
            precio: 40,
            imagen:'../assets/images/lote/sencilla.png',
            valor: 0,
            cantidad: 0,
            eliminar:'../assets/images/lote/quitar-1.png'
        },
        {
            nombre: 'Res Doble',
            precio: 55,
            imagen: '../assets/images/lote/hamburger-1.png',
            valor: 0,
            cantidad: 0,
            eliminar:'../assets/images/lote/quitar-1.png'
        },
        {
            nombre:'Pollo Doble',
            precio: 55,
            imagen: '../assets/images/lote/hamburger-2.png',
            valor: 0,
            cantidad: 0,
            eliminar:'../assets/images/lote/quitar-1.png'
         },
         {
             nombre: 'Vegetariana Doble',
             precio: 55,
             imagen: '../assets/images/lote/hamburger-3.png',
             valor: 0,
             cantidad: 0,
             eliminar:'../assets/images/lote/quitar-1.png'
         }    
    ];

    constructor() {
       
    }

    getHamburguesas(){
        return this.hamburguesaMenu
    }
}