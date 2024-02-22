import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';  // Importa tu servicio LocationService

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  constructor(private readonly locationService: LocationService) { } // Usa LocationService en lugar de GeolocationService

  ngOnInit(): void {
    this.obtenerUbicacion();
  }

  obtenerUbicacion(): void {
    this.locationService.getPosition().then(position => { // Usa getPosition() de tu servicio
      console.log("soy un pipi porque vi que esta es tu ubicacion :P")
      console.log('Latitude: ', position.lat);
      console.log('Longitude: ', position.lng);
    }).catch(error => {
      console.error('Error obteniendo la ubicación:', error);
    });
  }

}
