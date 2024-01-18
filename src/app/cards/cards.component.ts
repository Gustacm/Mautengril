import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { menu } from '../carta/Carta';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})




export class CardsComponent {

  @Input()
  dataCards:any="";
  

 

 

  
}
