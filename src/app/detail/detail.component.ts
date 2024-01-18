import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarritoService } from '../carrito.service';
import { CarritoComponent } from '../carrito/carrito.component';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'], 
  imports:[NavbarComponent],
  standalone: true,
})
export class DetailComponent implements OnInit {
  public name: any;
  public data: any;
  contador: number = 1;
  producto: any = {};

  constructor(private route: ActivatedRoute, private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      this.data = history.state.data;
    });
  }

// contador
incrementar(){
  this.contador+=1;
  
  if (this.contador==50) {
    this.contador = 0;
  }

  // console.log("incrementar");
  
}
Decrementar(){
  this.contador-=1;
  if (this.contador<1) {
    this.contador = 1;
  }
}

//agregar al  carrito
agregar() {
  const producto = { "Titulo": this.name, "Cantidad": this.contador,"precio":this.data.price*this.contador };
  this.carritoService.agregarAlCarrito(producto);
  this.contador = 1;
  
}
}