import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carritoSubject = new BehaviorSubject<any>(null);
  carrito$ = this.carritoSubject.asObservable();

  agregarAlCarrito(producto: any) {
    console.log('Agregando al carrito:', producto);
    this.carritoSubject.next(producto);
  }
}
