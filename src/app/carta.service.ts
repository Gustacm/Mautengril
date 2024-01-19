import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { menu } from './carta/Carta';

@Injectable({
  providedIn: 'root'
})
export class CartaService {
  initialState = menu; // Usa la información del menú como estado inicial
  private cartaState = new BehaviorSubject<any>([...this.initialState]);

  getState() {
    return this.cartaState.asObservable();
  }
  

  constructor() {}
}



