import { ChangeDetectorRef, Component } from '@angular/core';
import { CarritoComponent } from '../carrito/carrito.component';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../carrito.service';

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
  
  constructor(private carritoService: CarritoService, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
  }

  eliminarItem(index: any) {    
    this.carritoService.deleteI(index);
  }

}
