import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  @Input() carrito: any;

  constructor() {}

  ngOnInit(): void {
    console.log('Carrito recibido en CarritoComponent:', this.carrito);
  }
}

