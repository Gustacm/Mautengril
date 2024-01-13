import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';

export const routes: Routes = [
    {
        path:"detail/:name",
        component:DetailComponent,
    },
    {
        path:"",
        component:HomeComponent,
    },
    {
        path: 'carro',
        component: CarritoComponent,
      },


];


