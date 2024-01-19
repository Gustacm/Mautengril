import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, DetailComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']  
})
export class CardComponent {
  // recibimos los items
  @Input()
  data: any = "";



  constructor(private router:Router){  }
// Envio la info para el detail con  el  path
navigateToDetail(item: any): void {
  this.router.navigate(['/detail', item.name], {
    state: { data: item } // Pasa la información a través de la propiedad state
  });}
  
}

