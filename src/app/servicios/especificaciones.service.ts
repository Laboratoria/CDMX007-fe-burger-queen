import { Injectable } from '@angular/core';
Injectable()

export class EspecificacionesService{
    private especificacionesMenu:any[]=[
        {
            nombre: 'Cebolla',
            imagen: '../assets/images/lote/onion-1.png',
            especificacion:'S/Cebolla'
        },
        {
            nombre: 'Pepinillos',
            imagen: '../assets/images/lote/pickle-1.png',
            especificacion:'S/Pepinillos'
        },
        {
            nombre: 'Jitomate',
            imagen: '../assets/images/lote/tomato-1.png',
            especificacion:'S/Jitomate'
        },
        {
            nombre: 'Lechuga',
            imagen: '../assets/images/lote/lettuce-1.png',
            especificacion:'S/Lechuga'
        },
        {
            nombre: 'Aderezo',
            imagen: '../assets/images/lote/sauce-bottle-1.png',
            especificacion:'S/Aderezo'
        },
        {
            nombre: 'Queso',
            imagen: '../assets/images/lote/cheese-1.png',
            especificacion:'S/Queso'
        }
    ];
    especial:any[]= [];


    public especificacion(index){
        this.especificacionesMenu.forEach(element=>{
            if(this.especificacionesMenu.indexOf(element)== index){
            this.especial.push(element.especificacion);
            console.log(this.especial)
            return this.especial;
            }
        })

    }

    getEspecificacion(){
        return this.especificacionesMenu;
    }
}