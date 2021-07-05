import{RouterModule, Routes} from '@angular/router';
import{ WelcomeComponent} from './components/welcome/welcome.component';
import{ MenuComponent } from './components/menu/menu.component';
import{ HamburguesasComponent } from './components/hamburguesas/hamburguesas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NameComponent } from './components/name/name.component';
import { ExtrasComponent} from './componets/extras/extras.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { GuarnicionComponent } from './components/guarnicion/guarnicion.component';
import { EspecificacionesComponent } from './components/especificaciones/especificaciones.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { CancelacionComponent } from './components/cancelacion/cancelacion.component'

const app_routes : Routes = [
    {path: 'welcome', component: WelcomeComponent },
    {path: 'menu', component: MenuComponent },
    {path: 'hamburguesas', component: HamburguesasComponent },
    {path: 'productos', component: ProductosComponent },
    {path:'name',component: NameComponent },
    {path: 'extras', component: ExtrasComponent },
    {path: 'bebidas', component: BebidasComponent },
    {path: 'guarnicion', component: GuarnicionComponent },
    {path: 'especificaciones', component:EspecificacionesComponent},
    {path: 'confirmacion', component: ConfirmacionComponent},
    {path: 'cancelacion', component: CancelacionComponent },
    {path: '**', pathMatch:'full', redirectTo:'name'}

];

export const app_routing = RouterModule.forRoot(app_routes);
