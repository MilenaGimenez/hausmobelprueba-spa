import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { MasVendidosComponent } from './pages/mas-vendidos/mas-vendidos.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            FooterComponent, 
            NavComponent, 
            HomeComponent,
            MasVendidosComponent,
            NovedadesComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-proyecto-angular';
}
