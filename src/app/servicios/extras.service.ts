import{ Injectable } from '@angular/core';

@Injectable()

export class ExtrasService {
    private extrasMenu:any[] = [
        {
            nombre: 'Huevo',
            precio: '$ 15',
            imagen: '../assets/images/lote/egg-5.png',
            index: 0
        },
        {
            nombre: 'Queso',
            precio: '$ 15',
            imagen: '../assets/images/lote/cheese-2.png',
            index: 1
        }
    ];
    constructor(){
        console.log('Servicio extras listo');
    }
    
    getExtras(){
        return this.extrasMenu;
    }
}