import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoService } from '../carrito.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CarritoComponent,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  carta: any[] = [];
  cuentaState:any=0;
  posicion:boolean=false
  
  dimmer(){
    if (this.posicion==false) {
      this.posicion=true
    }else{
      this.posicion=false
    }

  }


constructor(private carritoService: CarritoService, private cdr: ChangeDetectorRef) {}

ngOnInit(): void {
  this.carritoService.getState().subscribe((carrito) => {
    this.carta = carrito;
    // Forzar la detección de cambios
    this.cdr.detectChanges();
    //reinicio la  cuaneta  para contar las cantidades
    this.cuentaState=0;
    //luego  rrecorro el arry de obj .cantidades 
    for (let i = 0; i < this.carta.length; i++) {
      this.cuentaState+=this.carta[i].Cantidad }
  });
}



    
    
  
}