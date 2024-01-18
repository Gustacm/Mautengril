import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { CommonModule } from '@angular/common';  
import { NavbarComponent } from '../navbar/navbar.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  standalone: true,
  imports: [CommonModule,NavbarComponent,ModalComponent],
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];
  nombrecliente:string="";
  direccion:string="";
  pedido : string="";
  enviar:boolean=false;
  totalp:any=0;
  fPago:string="";

  setdireccion(evento:any): void {
    const valor = evento.value;
    if (!valor) {
      this.enviar=false
    }else{
      this.enviar=true
      this.direccion= valor;
    }
  }
 
  validacion(evento:any): void {
    const valor = evento.value;
    
    const patron = /^[a-zA-Z\s]+$/;
    
    if (patron.test(valor)) {
      this.nombrecliente= valor;
      this.enviar = true;


    } else {
      this.enviar = false;
    }
  }
  // Formatear como cantidad de dinero con separadores de miles y decimales
  formatearComoDinero(valor:any): string {
    return valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  }

  precio(){

  }
  
   total() {
   let total = 0
   for (let i = 0; i < this.carrito.length; i++) {
      total += this.carrito[i].precio
    
   } 
   this.totalp=total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
   return total
  }

  sed(): void {
    const productos = this.carrito.map(item => `- ${item.Titulo} Cantidad: ${item.Cantidad}`).join('\n');

  const mensaje = `Hola, soy ${this.nombrecliente}.\n Mi pedido es:\n${productos}\n Total :${this.totalp}\nmi dirección es: \n  ${this.direccion} `;
    const numeroWhatsApp = "+56 El  numero";
    const enlaceWhatsApp = `https://web.whatsapp.com/send?phone=${encodeURIComponent(numeroWhatsApp)}&text=${encodeURIComponent(mensaje)}`;
    window.open(enlaceWhatsApp, '_blank');

  }
  
  formaPago(evento:any){
    const valor = evento.value;
    console.log("valor",valor);
    this.fPago=valor
    
  }

  constructor(private carritoService: CarritoService, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.carritoService.getState().subscribe((carrito) => {
      console.log('Carrito recibido en CarritoComponent:', carrito);
      this.carrito = carrito;

      // Forzar la detección de cambios
      this.cdr.detectChanges();
    });
  }
}
