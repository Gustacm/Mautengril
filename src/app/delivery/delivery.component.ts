import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

 
  constructor() { }
 
  ngOnInit() {
    this.getUserLocation();
  }
  
  
//funcion pra obtener la ubicacion del usuario
getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const latitudeTienda = -35.42863;
      const longitudeTienda = -71.65627;
      //-35.42864700747926, -71.65633881415503

      //saber a cuantos esta el usuario de la tienda
      const distance = this.getDistanceFromLatLonInKm(latitude, longitude, latitudeTienda, longitudeTienda);
      //saber si esta a menos de 1 km de la tienda
      this.isNear(latitude, longitude, latitudeTienda, longitudeTienda);

      console.log(`Latitude: ${latitude}, Longitude: ${longitude}, Distance: ${distance} km`);
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}
// calcualar la distancia entre dos puntos
  getDistanceFromLatLonInKm(lat1:any, lon1:any, lat2:any, lon2:any) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return Math.round(d);
  }
  
  deg2rad(deg:any) {
    return deg * (Math.PI/180)
  }

  isNear(latitude:any, longitude:any, latitudeTienda:any, longitudeTienda:any) {
    const distance = this.getDistanceFromLatLonInKm(latitude, longitude, latitudeTienda, longitudeTienda);
    
    const distanceInMeters = distance * 1500 ;
    let message = '';
    if (distance < 1) {
      message = "estas a " + distance + " km. Es Gratis el Delivery";
    } else {
      message = "estas a " + distance + " km. Tienes que pagar " + distanceInMeters + " pesos por el delivery";
    }
    console.log(message);
    return message;
  
  }




}