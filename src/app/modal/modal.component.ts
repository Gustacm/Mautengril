import { Component } from '@angular/core';
import { CarritoComponent } from '../carrito/carrito.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CarritoComponent,CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  off(){
    console.log("off");
    
  }


}
