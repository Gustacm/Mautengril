import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';  
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  constructor(private readonly locationService: LocationService) { } 

  ngOnInit(): void {
    this.obtenerUbicacion();
  }

  obtenerUbicacion(): void {
    this.locationService.getPosition().then(position => { 
      const lat = position.lat;
      const lng = position.lng;
      console.log('Latitude: ', position.lat);
      console.log('Longitude: ', position.lng);

      const lattienda = 19.4326;
      const lngtienda = -99.1332;

      // compara a cuantos metros esta lat y lng de la tienda
      const distancia = this.getDistanceFromLatLonInKm(lat, lng, lattienda, lngtienda);
      console.log('Distancia: ', distancia);
    }).catch(error => {
      console.error('Error obteniendo la ubicación:', error);
    });
}

getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the earth in km
  const dLat = this.deg2rad(lat2-lat1);  // deg2rad below
  const dLon = this.deg2rad(lon2-lon1); 
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const d = R * c; // Distance in km
  return d;
}

deg2rad(deg: number) {
  console.log('deg: ', deg);
  return deg * (Math.PI/180)
}
  
  



}
