import { Routes } from '@angular/router';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:"nosotros", component:NosotrosComponent},
    {path:"productos", component:ProductosComponent}
];
