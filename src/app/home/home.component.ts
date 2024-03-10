import { Component, OnInit } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarritoComponent } from '../carrito/carrito.component';
import { CartaService } from '../carta.service';
import { LandingComponent } from '../landing/landing.component';
import { PieComponent } from '../pie/pie.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent, NavbarComponent, CarritoComponent,LandingComponent,PieComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataMenu: any[] = [];
  cuentaState: any = 0;
  posicion: boolean = false;

  constructor(private cartaService: CartaService) {}

  ngOnInit() {
    // Suscríbete al estado de la carta cuando el componente se inicia
    this.cartaService.getState().subscribe((estado) => {
      this.dataMenu = this.menuCategory(estado);
    });
  }
  dimmer() {
    this.posicion = !this.posicion;
  }
  title = 'MauntenGril';

  // Obtener la data del menú al inicio
  private menuCategory(menudata: any[]): any[] {
    return menudata.map((category) => {
      return {
        iName: category.category,
        iItems: category.items,
      };
    });
  }
}

