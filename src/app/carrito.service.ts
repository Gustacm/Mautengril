import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  initialState = [

  ];
  private carritoState = new BehaviorSubject<any>([...this.initialState]);

  getState(): Observable<any[]> {
    return this.carritoState.asObservable();
  }

  agregarAlCarrito(producto: any) {
    const carritoActual = this.carritoState.value;

    // si  exite sobre escribe  el  que  existe
    const productoExistenteIndex = carritoActual.findIndex((p:any) => p.Titulo === producto.Titulo);
    if (productoExistenteIndex !== -1) {
      carritoActual[productoExistenteIndex] = producto;
    } else {
      carritoActual.push(producto);
    }
  
    // Actualiza el estado del carrito
    this.carritoState.next([...carritoActual]);
  }
  deleteI(index: number) {
    const carritoActual = this.carritoState.value;

    if (index >= 0 && index < carritoActual.length) {
      carritoActual.splice(index, 1);
  
      this.carritoState.next([...carritoActual]);
    }
  }
  
  
}

// El  metodo  findIndex lo  utilizo  aqui para buscar  el elemento 
// especifo en el  array , cuando  consige  lo  que  busca  se  para  
// la  busqueda 
