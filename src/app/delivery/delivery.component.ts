import { Component, Input, OnInit } from '@angular/core';
import { CartaService } from '../carta.service';
import { CardsComponent } from '../cards/cards.component';
import e from 'express';
 
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
  imports: [CardsComponent],
  standalone: true

})
export class DeliveryComponent implements OnInit {
  dataMenu: any[] = [];
  @Input() item: any;

 
  constructor(private cartaService: CartaService) {}
 
  ngOnInit() {
    //  funcuin de localizacion 
        this.getUserLocation();

           // Suscríbete al estado de la carta cuando el componente se inicia
           this.cartaService.getState().subscribe((estado) => {
            this.dataMenu = this.menuCategory(estado);
          });
        }


        // Obtener la data del menú al inicio
  private menuCategory(menudata: any[]): any[] {
    return menudata.map((category) => {
      return {
        iName: category.category,
        iItems: category.items,
      };
    });
  }
   
  
//Ubicacion del usuario y distancia a la tienda
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
// calcula  el  costo del delivery
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

  // funcion que  calcule que  hora es 
  getHour() {
    const date = new Date();
    const hour = date.getHours();
    if(hour >= 0 && hour < 12){
      return "días";
    } else if(hour >= 12 && hour < 19){
      return "tardes";
    }else{
      return "Cerrado";
    }
  }



}