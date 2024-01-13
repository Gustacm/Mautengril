import { Component } from '@angular/core';
import { menu } from '../carta/Carta';
import { CardsComponent } from '../cards/cards.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

title = 'MauntenGril';

  // resibir la data  del  menu
  dataMenu:any =this.menuCategory(menu)

  //  ordenar la info  y  colocarla privado  
private menuCategory(menudata:any[]):any[]{
  return menudata.map(i=>{
return{
  iName:i.category,
  iItems:i.items,
}

  })


}

}
